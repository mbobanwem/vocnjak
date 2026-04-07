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
Make the activity flow robust, deterministic, and safe.

---

## Activity Validation Rule (STRICT)

Activity MUST be valid before save.

Required fields:
- type (non-empty string)
- date (valid ISO date string, format: YYYY-MM-DD)
- plantIds (non-empty array of strings)

Optional fields:
- product
- notes

Rules:
- invalid activity MUST NOT be saved
- no silent fallback values
- no auto-generated plantIds
- validation MUST run before every save attempt

---

## Activity Type Set (MANDATORY)

Allowed types:

- spraying
- pruning
- fertilizing
- watering
- planting
- harvest
- observation
- problem

Rules:
- type MUST be one of the above values
- no additional types allowed
- no free text types allowed
- type values MUST match exactly (case-sensitive)
- UI MUST use the same exact values as validation (single source of truth)

---

## plantIds Validation Rule (MANDATORY)

plantIds MUST:
- be an array
- contain at least one element
- contain only valid plant IDs existing in v4.plants

Rules:
- if any plantId does not exist → activity is invalid
- validation MUST check existence against v4.plants object keys

---

## Date Validation Rule (MANDATORY)

date MUST:
- be a valid ISO date string (YYYY-MM-DD)
- represent a real calendar date

Rules:
- invalid or malformed dates MUST reject save
- no automatic date correction allowed
- no time component allowed

---

## Save Flow Rule (STRICT)

On save attempt:

1. validate type
2. validate date
3. validate plantIds
4. if ANY validation fails → STOP and do NOT save
5. only if ALL validations pass:
   - create activity object
   - append to v4.activities

Rules:
- no partial saves
- no fallback values
- no mutation of input data during validation

---

## Activity Object Structure (LOCKED)

Activity MUST follow this structure:

{
  id: string,
  type: string,
  date: string,
  plantIds: string[],
  product?: string,
  notes?: string
}

Rules:
- id MUST follow pattern: "act_" + Date.now() + random string
- id MUST be unique
- plantIds MUST NOT be transformed during save
- no additional fields allowed

---

## Type Consistency Rule (MANDATORY)

Activity type MUST be consistent across:

- Add Activity form
- Plant detail history
- Calendar rendering
- Plan matching logic

Rules:
- labels and values MUST match exactly
- no aliasing or mapping at activity level
- normalization (if needed) happens ONLY at plan layer

---

## Scope

- improve Add Activity safety and validation
- enforce strict type consistency
- ensure stable save behavior
- confirm plant detail history reads from v4.activities correctly

---

## Out of Scope

- editing activities
- deleting activities
- filtering or sorting improvements
- UI redesign beyond validation-related fixes

---

## Done when

- invalid activities cannot be saved
- activity type is always valid and consistent
- plantIds always reference existing plants
- activity list renders without crashes
- no edge-case activity corrupts the data model
---

## Session 10 — Activity Management
### Goal
Allow user to manage activity records, not only add them.

## Activity Edit Safety Rule

When editing activity:

- id MUST remain unchanged
- plantIds MUST remain valid array
- date MUST remain valid ISO string

Rules:
- editing MUST NOT break matching logic

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

Integrate plans into the calendar so that each day reflects:

- planned work (from plans)
- completed work (from activities)
- skipped work (derived)

All logic MUST follow:
- DOMAIN_RULES_V1.md
- TARGET_ARCHITECTURE_V1.md

---

## Scope

- read from:
  - v4.plans
  - v4.activities
  - v4.plants
- extend calendar rendering (NO rewrite)
- NO UI redesign
- NO new screens
- NO changes to data model

---

## Plan evaluation model (V1)

Plans are evaluated dynamically at render time.

Plan state is NOT stored.

Plan state is derived using:

- plan window (month/day)
- tolerance window (±7 days)
- matching activity

---

## Plan states

Allowed states:

- upcoming
- active
- done
- missed

Rules:

- NO additional states allowed
- "late" MUST NOT exist
- state MUST NOT be persisted
- state MUST be recalculated on each render

---

## Date normalization (CRITICAL)

All date comparisons MUST be done at DAY level.

Rules:

- ignore time component completely
- use YYYY-MM-DD comparison
- currentDate MUST be normalized to day
- activity.date MUST be normalized
- plan window dates MUST be normalized

Example:

2026-04-05T15:23 → 2026-04-05

Purpose:

- avoid timezone bugs
- ensure deterministic comparisons

---

## Window calculation

For each plan:

- startDate = construct from (monthStart, dayStart, currentYear)
- endDate = construct from (monthEnd, dayEnd, currentYear)

Tolerance:

- effectiveStart = startDate - 7 days
- effectiveEnd = endDate + 7 days

---

## Year handling (IMPORTANT)

Plans DO NOT contain year.

Rules:

- evaluation MUST use currently rendered calendar year
- same plan repeats every year
- no cross-year logic
- no persistence of derived dates

---

## Type normalization

Before comparison:

- activity.type MUST be normalized
- plan.activityType MUST be normalized

Normalization rule:

- lowercase
- trimmed string

Example:

"Spraying" → "spraying"

Rule:

- matching MUST use normalized values

---

## Matching logic

A plan is matched if ANY activity satisfies:

- normalized(activity.type) === normalized(plan.activityType)
- activity.date is within:
  - effectiveStart AND effectiveEnd
- AND:
  - plan.appliesToAll === true
  OR
  - activity.plantIds overlaps with plan.plantIds

---

## Matching rules

- one match is enough
- multiple matches allowed
- no fuzzy matching
- no partial matching
- no inference
- no priority between activities

---

## Duplicate handling

Multiple matching activities:

- DO NOT change state logic
- state remains "done"
- UI MAY show multiple activities
- logic MUST NOT depend on count

---

## Plan State Derivation Rule (STRICT ORDER)

State MUST be derived in this exact order:

1. if matching activity exists → state = done
2. else if currentDate < startDate → state = upcoming
3. else if currentDate <= endDate → state = active
4. else if currentDate > effectiveEnd → state = missed

---

## Rules

- evaluation order MUST NOT change
- "done" MUST override ALL other states
- state MUST NOT be stored
- state MUST be recalculated on each render

---

## Edge cases

- activity before window but within tolerance → done
- activity after window but within tolerance → done
- activity outside tolerance → ignored
- no activity → fallback to time-based state

---

## Multi-day plan rendering

Plans that span multiple days MUST be evaluated for EACH day in the calendar.

Rules:

- for each calendar day:
  - evaluate plan independently
- same plan appears on multiple days
- state is derived per day using same logic

Example:

plan: 01.04 – 10.04  
→ appears on all days in that range

---

## Calendar integration

Extend existing calendar:

- reuse existing structure
- reuse existing rendering flow

Add:

- planned indicator (amber/yellow dot)
- done indicator (green dot)
- missed indicator (gray dot)

Rules:

- indicators MUST NOT overlap incorrectly
- state determines indicator
- rendering MUST be idempotent (no duplication)

---

## Day click behavior

When user clicks a day:

Show:

- activities for that day
- plans affecting that day

Plan display MUST include:

- plan title
- derived state
- matching activity (if exists)

---

## Forbidden

- no plan mutation
- no state persistence
- no changes to v4 schema
- no dependency between plans
- no shifting of plan windows
- no sequence logic
- no heuristic interpretation

---

## Principle

Plans define intent.  
Activities define reality.  
UI reflects derived truth.

---

## Session 13 — Plan Execution (Derived Only)

### Goal
Connect plans and activities without introducing new data.

---

## Plan State Rule (ENFORCEMENT)

Allowed states:

- upcoming
- active
- done
- missed

Rules:
- states MUST be derived only
- no "skipped"
- no manual override
- no additional plan state fields allowed

---

## Plan State Priority Rule

If activity match exists:

- state MUST be "done"
- even if activity is late within tolerance

If no activity match:

- state becomes "missed" only after:
  - window + tolerance

Rules:
- "done" always overrides "missed"

---

### Scope
- derive plan completion from activities
- do NOT modify plans
- do NOT introduce new statuses
- do NOT allow manual plan state manipulation

### Rules
- completion = matching activity exists
- missed = no match within window + tolerance
- no explicit user action for marking completion
- no "skip" state in storage

### Done when
- plan state is fully derived from activities
- no additional plan fields exist
- no manual plan state manipulation exists

# PHASE 2 — ORCHARD INTELLIGENCE

Goal:
Move from logger to assistant.

---

## Session 14 — Context-Aware Filtering

### Goal
Use existing data to suppress irrelevant plans before rendering.

---

## Young Plant Rule (STRICT)

If plant.status = forming:

HIDE plans where normalized activity type is:

- harvest
- pruning (only when plan represents production pruning)
- spraying (only when plan represents fruit protection)

ALLOW plans where normalized activity type is:

- planting
- watering
- fertilizing
- observation
- pruning (when plan represents formation pruning)
- spraying (when plan represents basic protection)

Rules:
- filtering MUST be deterministic
- filtering MUST be based on normalized activity type
- no category guessing
- no heuristics

---

## Plan Type Interpretation Rule (MANDATORY)

Because V1 uses a limited activity type set, plan meaning MUST be interpreted as:

- fruit_thinning → pruning
- fruit_protection → spraying
- production_pruning → pruning

Rules:
- interpretation MUST happen before filtering
- interpretation MUST be internal only
- UI MUST NOT expose normalized type logic

---

## Citrus Rule (MANDATORY)

Citrus plants MUST be handled separately:

- no dormancy logic
- no winter pruning plans
- no deciduous-based timing assumptions

Rules:
- filtering MUST be based on plant type
- no heuristic detection
- citrus MUST NOT inherit deciduous-tree seasonal assumptions

---

## Scope
- apply strict filtering before rendering plans
- do NOT modify plans data
- do NOT introduce new data fields

### Done when
- app no longer shows irrelevant work for young plants
- app no longer applies deciduous assumptions to citrus
- filtering behavior is deterministic

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

---

## Weather Visibility Rule (STRICT)

Weather MUST be shown ONLY if:

- there is an active plan where:
  - activityType = "spraying"

Rules:
- activityType MUST match predefined type set
- no generic weather display
- no always-on widget
- must be context-driven

---

### Scope
- restore weather widget
- show weather only for active spraying context
- connect weather to spray-related plan timing
- do NOT introduce generic weather dashboard behavior

### Done when
- weather is shown only when spraying context exists
- spraying-related decisions have meaningful weather context

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

---

## Plant Catalog Constraint

PLANT_CATALOG_V1 MUST define:

- allowed plant types
- optional varieties
- optional timing groups

Rules:
- catalog is single source of truth
- no fallback to free text

---

## Plant Creation Rule (MANDATORY)

Plant MUST be created using PLANT_CATALOG_V1:

- plant type must be selected from catalog
- free text plant type is NOT allowed
- variety selection is optional
- timing fallback must follow catalog rules
- variety and timing fallback are mutually exclusive

Rules:
- if variety is selected:
  - timing is derived from catalog
  - fallback is NOT allowed
- if variety is not selected:
  - timing-group fallback may be used
- if timing is also unknown:
  - default species profile is used

---

### Scope
- mandatory onboarding on first launch
- language selection
- climate zone selection
- first plant creation from predefined catalog
- optional variety selection
- optional timing-group fallback
- simple first-run path

### Rules
- onboarding is required
- user must complete at least one plant entry
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