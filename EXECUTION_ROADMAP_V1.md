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
- plans as a real user-facing system
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

- plant type (e.g. jabuka)
- variety (if exists)
- planting date (if exists)

Rules:
- read-only only
- no editing
- no new data model fields
- show placeholder (e.g. "—") if data is missing

Goal:
User must understand basic context of the plant without entering edit mode.

### Out of scope
- bulk editing
- advanced filtering
- redesign

### Done when
- user can correct mistakes
- activity list stays consistent after changes

---

## Session 11 — Plans: Create + View
### Goal
Make plans a real part of the app, not only hidden calendar logic.

### Scope
- minimal add plan flow
- save to v4.plans
- show plans in plant context and/or dedicated simple screen

### Done when
- user can create a plan
- plan is visible in app
- plan structure matches MIGRATION_PLAN_V1.md exactly

---

## Session 12 — Plans ↔ Calendar
### Goal
Make plans visible and meaningful in calendar flow.

### Scope
- ensure created plans appear correctly in calendar
- keep planned/done/missed logic aligned with UX_IMPROVEMENTS.md

### Done when
- calendar becomes a real planning view, not only an activity log

---

## Session 13 — Plan Execution
### Goal
Connect plans and activities into one loop.

### Scope
- mark plan as completed through activity
- mark skipped where appropriate
- derive done/missed consistently

### Done when
- user understands what was planned, what was done, what was missed

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

### Done when
- app no longer shows obviously wrong work for young plants

---

## Session 15 — Recommendation Engine V1
### Goal
Show what is relevant now.

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
- only show when there is active spraying context
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
- language
- location
- first plants
- simple first-run path

### Done when
- new user can start cleanly without confusion

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
Define the business model before implementing payments.

### Main options
1. Freemium
2. Premium-only
3. Hybrid (free limited usage + paid intelligence)

### Recommendation
Start with freemium:
- free:
  - plants
  - activities
  - basic calendar/dashboard
- paid:
  - smart recommendations
  - weather-aware orchard guidance
  - equipment guidance
  - advanced planning assistance

### Done when
- clear free vs paid boundary exists

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
3. Session 11 — Plans: Create + View
4. Session 12 — Plans ↔ Calendar
5. Session 13 — Plan Execution

## Only after that
- intelligence
- weather
- export/sync restore
- onboarding / multilingual
- subscription

---

# SUBSCRIPTION DECISION — CURRENT VIEW

Subscription can make sense ONLY if the app becomes a true assistant.

If the app remains only:
- plant logger
- activity logger
- basic calendar

subscription will likely feel weak.

Subscription becomes realistic when the app offers:
- what to do now
- what is overdue / missed
- what tools are needed
- weather-aware orchard guidance
- time-saving recommendations

So:
- logging should stay free
- intelligence is the strongest paid candidate

---

# FINAL RULE

Do not skip phases.
Do not mix polish into feature sessions.
Do not build monetization before value exists.
Do not build store shell before product logic is strong.