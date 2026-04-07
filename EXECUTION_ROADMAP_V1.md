# VOCNJAK — EXECUTION ROADMAP V1

## PURPOSE

Turn the current migrated app into a usable orchard assistant, then prepare it for future store-ready productization.

This roadmap follows:
- MIGRATION_PLAN_V1.md
- TARGET_ARCHITECTURE_V1.md
- UX_IMPROVEMENTS.md
- VISION_AND_STRATEGY.md

Core rule:
- keep it simple
- keep it orchard-first
- avoid over-engineering

---

# CURRENT STATUS

## Already completed
- Session 1–3 baseline migration/adaptation
- Session 4 Add Activity
- Session 5 Calendar v4 rendering
- Session 5A Calendar day click fix
- Session 6 Dashboard orchard-first rewrite
- Session 7 Add Activity UX polish
- Session 8 Fresh-state + Add Plant unblock flow

## Current result
The app is now usable for:
- adding first plant
- adding activity
- viewing plant detail
- seeing dashboard + calendar on v4 model

But it is not yet a true orchard assistant.
It still needs:
- stronger activity management
- plans as a visible read-only system
- recommendation layer
- onboarding / multilingual / monetization direction

---

# PHASE 1 — CORE V1 COMPLETION

Goal:
Make the core loop stable and fully usable.

Core loop:
1. add plant
2. add activity
3. view history
4. view calendar/dashboard context

---

## Session 9 — Activities Complete
### Goal
Make the activity flow robust and consistent.

### Scope
- improve Add Activity safety/defaults
- ensure consistent type labels across screens
- harden save flow
- confirm plant detail history is stable
- enforce validation rules from DOMAIN_RULES_V1 section 9

### Done when
- Add Activity is reliable
- history is consistent
- no obvious activity edge-case crashes

---

## Session 10 — Activity Management
### Goal
Allow user to manage activity records, not only add them.

### Scope
- edit activity (minimal)
- delete activity (minimal)
- safe refresh after update/delete

### Additional scope — Plant Details (READ ONLY)

Display basic plant information on plant detail screen:

- plant name
- derived plant type (display only)
- variety
- rootstock
- planted date
- status

Rules:
- read-only only
- no plant editing in this session
- no new data model fields
- derived type is display-only and must NOT be stored
- show placeholder `—` if value is missing
- editing must NOT change activity structure
- editing must NOT introduce new fields
- editing must preserve valid ISO date

Goal:
User must understand the basic context of the plant without entering edit mode.

### Out of scope
- bulk editing
- advanced filtering
- redesign

### Done when
- user can correct mistakes
- activity list stays consistent after changes

---

## Session 11 — Plans: Read Model

### Goal
Use existing predefined plans as a visible part of the app.

### Scope
- read plans from v4.plans
- do NOT create or modify plans
- display plans in:
  - calendar
  - plant context (if applicable)

Rules:
- plans are read-only
- no add/edit/delete plan functionality
- no changes to plan structure

### Done when
- plans are visible in UI
- no plan creation exists
- plan data strictly matches MIGRATION_PLAN_V1.md
---

## Session 12 — Plans ↔ Calendar Integration

### Goal
Make plans visible and correctly interpreted in calendar.

### Scope
- render plans in calendar using:
  - plan window (month/day)
  - matching logic (DOMAIN_RULES 5.5)
  - tolerance logic (DOMAIN_RULES 5.6)

- derive plan states:
  - upcoming
  - active
  - done
  - missed
  - late

Rules:
- do NOT store derived states
- use activity matching strictly per rules
- no heuristic shortcuts
- plan states must follow DOMAIN_RULES 5.4

## Activity ↔ Plan Matching Rule (STRICT)

A plan is considered DONE if:

- activity.type === plan.activityType
- AND activity.plantIds includes the plant
- AND activity.date is within:
  plan window ± tolerance

No fuzzy matching allowed.

### Done when
- calendar correctly shows plan states
- done is derived only via activity matching
- tolerance works (up to 7 days)

## Timing Resolution Rule (MANDATORY)

Plan timing MUST be resolved in this order:

1. variety timing (if known)
2. timing group fallback (if provided)
3. species default timing

Rules:
- timing MUST NOT be guessed
- timing MUST always resolve to a single deterministic window
- no UI should expose this complexity

---

## Session 13 — Plan Execution (Derived Only)

### Goal
Connect plans and activities without introducing new data.

### Scope
- derive plan completion from activities
- do NOT modify plans
- do NOT introduce "skipped" or new statuses

Rules:
- completion = matching activity exists
- missed = no match within window + tolerance
- no explicit user action for marking completion
- no "skip" state in storage

### Done when
- plan state is fully derived from activities
- no additional plan fields exist
- no manual plan state manipulation exists

---

# PHASE 2 — ORCHARD INTELLIGENCE

Goal:
Move from logger to assistant.

---

## Session 14 — Context-Aware Filtering
### Goal
Use existing data to suppress irrelevant plans.

### Scope
- young tree logic
- hide fruiting-stage items for establishment-phase plants
- keep conservative rules only

Rules:
- must strictly follow DOMAIN_RULES 5.2 (Young Plant Rule)
- do NOT introduce additional heuristics

### Done when
- app no longer shows obviously wrong work for young plants

## Citrus Rule (MANDATORY)

Citrus plants MUST be handled separately:

- no dormancy logic
- no winter pruning plans
- no deciduous-based timing assumptions

Filtering MUST respect plant type category.
---

## Session 15 — Recommendation Engine V1
### Goal
Show what is relevant now.

Inputs:
- plans (resolved timing)
- activities
- plant status
- current date

### Scope
- active plan window prompt
- young plant notice
- watering gap prompt
- no AI, rule-based only

### Done when
- user opens app and understands what matters now

---

## Session 16 — Weather-Aware Spray Layer
### Goal
Restore weather widget in a way that actually supports orchard usage.

### Scope
- restore weather widget
- show only when there is relevant orchard context (e.g. spraying, disease risk, timing-sensitive operations)
- connect to spray window logic, not generic weather

### Done when
- spraying-related decisions have meaningful weather context

---

# PHASE 3 — DATA SAFETY / RESTORE FEATURES

Goal:
Restore important support features after the core loop is stable.

---

## Session 17 — Export / Import JSON
### Goal
Give user backup portability.

### Scope
- export vocnjak_v4
- import validated vocnjak_v4
- safe validation before overwrite

### Done when
- user can back up and restore safely

---

## Session 18 — Supabase Backup
### Goal
Cloud backup for user data.

### Scope
- backup/restore v4 JSON
- per-user key handling
- backup timestamp in UI

### Done when
- user has safe cloud backup

---

## Session 19 — iCal Sync
### Goal
Restore calendar sync behavior.

### Scope
- sync done activities back to .ics / GitHub flow
- keep it minimal

### Done when
- completed work can update calendar export

---

# PHASE 4 — STORE READINESS

Goal:
Prepare the app to become a real product, not just a personal tool.

---

## Session 20 — First-Run Onboarding
### Goal
Collect the minimum data needed for meaningful recommendations.

### Scope
- mandatory onboarding on first launch
- language selection
- climate zone selection
- first plant creation from predefined catalog
- optional variety selection
- optional timing-group fallback
- simple first-run path

Rules:
- onboarding is required
- user must complete at least one plant entry
- plant type must be selected from predefined catalog (no free text)
- if variety is unknown, timing-group fallback may be used
- if timing is also unknown, default species profile is used
- selected language must be persisted
- onboarding must remain simple and low-friction

### Done when
- first launch always shows onboarding
- user can complete onboarding without confusion
- chosen language is saved
- at least one plant exists after onboarding

---

## Session 21 — Multi-language Basic
### Goal
Prepare app for broader market.

### Scope
- HR + EN first
- dictionary-based strings
- no library

### Done when
- core UI can switch languages

---

## Session 22 — Equipment / Tools Layer
### Goal
Save users research time by surfacing relevant tools and equipment.

### Scope
- static contextual hints tied to plan/activity context
- no inventory system
- no ecommerce

### Done when
- app teaches user what they may need, at the right time

---

## Session 23 — Store Architecture Decision
### Goal
Decide how to move from single-file web app toward store-ready app.

### Options
- keep web core + wrapper
- gradual modularization
- future mobile shell

### Done when
- technical direction for App Store / Play is decided

---

# PHASE 5 — MONETIZATION

Goal:
Decide whether subscription makes sense and what exactly is paid.

---

## Session 24 — Subscription Model Design
### Goal
Define monetization only after assistant-level value is proven.

### Scope
- document future pricing model only
- do NOT implement paywall
- do NOT implement subscriptions yet

Rules:
- subscription must NOT be introduced before:
  - weather-aware recommendations exist
  - disease-aware guidance exists
- basic logging and planning remain free
- subscription, when introduced, should monetize assistant-level value

Current direction:
- 3€ / month
- 25€ / year

### Done when
- monetization direction is documented
- no payment implementation exists
- no paywall is introduced before weather + disease layer

---

## Session 25 — Paywall UX
### Goal
Show upgrade at the right value moment.

### Scope
- minimal paywall
- triggered when user wants assistant/intelligence features

### Done when
- upgrade offer is understandable and justified

---

## Session 26 — Payments Implementation
### Goal
Implement payment only after product/value is proven.

### Scope
- depends on chosen platform path
- store billing / subscription logic later

### Done when
- paid model is technically integrated

---

# PHASE 6 — POLISH BATCH

Goal:
Resolve minor UI / copy / spacing issues only after the main flows are done.

---

## Session 27 — POLISH_BACKLOG Batch
### Scope
- only items from POLISH_BACKLOG.md

### Rule
- never open standalone sessions for polish before this phase

---

# PRIORITY ORDER

## Highest priority now
1. Session 9 — Activities Complete
2. Session 10 — Activity Management
3. Session 11 — Plans: Read Model
4. Session 12 — Plans ↔ Calendar Integration
5. Session 13 — Plan Execution (Derived Only)

## Only after that
- intelligence
- weather
- export/sync restore
- onboarding / multilingual
- subscription

---

# SUBSCRIPTION DECISION — CURRENT VIEW

Subscription is NOT a current implementation priority.

It should be reconsidered only after the app provides assistant-level value through:
- weather-aware recommendations
- disease-aware guidance
- time-saving orchard intelligence

Until then:
- core logging remains free
- no paywall should be introduced
- monetization stays as future direction only

Current future pricing direction:
- 3€ / month
- 25€ / year

---

# FINAL RULE

Do not skip phases.
Do not mix polish into feature sessions.
Do not build monetization before value exists.
Do not build store shell before product logic is strong.