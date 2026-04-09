# CURRENT STATE

## TECH

- single-file index.html (~2100+ lines)
- vanilla JS
- localStorage persistence
- PWA (manifest + service worker)

---

## DATA MODEL

### v3 (legacy)
- data[plantId].entries[]
- data[plantId].todos[]
- per-plant structure

### v4 (current active model)
- plants (object keyed by id)
- activities (global array)
- plans (global array)

Migration from v3 → v4 is implemented and stable.

---

## IMPLEMENTED — CORE (V1)

### Session 1 — Migration
- v3 → v4 migration implemented
- backup of old data (vocnjak_v3_premigration)
- safe initialization of v4

### Session 2 — Overview / Dashboard
- plant count
- plans this month
- activities this week
- v4-aware rendering

### Session 3 — Plant Detail
- reads from v4.plants and v4.activities
- shows plant status
- shows activity history (sorted)
- no writes to legacy model

### Session 4 — Add Activity
- form-based activity creation
- type, date, multi-plant selection
- optional product + notes
- saves to v4.activities only

### Session 5 — Calendar
- v4-based calendar rendering
- planned (yellow), done (green)
- day click shows relevant items

### Session 5A — Calendar Day Click Fix
- correct day → data mapping in v4 mode

### Session 6 — Dashboard (Orchard-first rewrite)
- dashboard reorganized around orchard context
- active plan windows surfaced
- recent activity minimal display
- young plant notice

### Session 7 — Add Activity UX Polish
- improved validation feedback
- tighter input flow

### Session 8 — Fresh State + Add Plant
- empty state handled correctly
- Add Plant accessible without data

### Session 9 — Activities Complete
- strict validation enforced:
  - type
  - date
  - plantIds
- only allowed activity types can be saved
- invalid activities cannot be stored

### Session 10 — Activity Management
- activity list screen
- activity detail screen
- delete activity flow
- overview entry point to activity list

### Session 11 — Plans: Read Model

#### Session 11A — Plans UI (rendering only)
- overview: renamed "Otvoreni prozori" → "Plan rada"
- overview: capped active plan display to max 2 items
- plant detail: added "Plan rada" section showing active plans for current plant
- plant detail: section hidden when no active plans
- plan cards show title, time window, and scope
- rendering only — no logic changes

#### Session 11B — Plan logic consolidation
- shared helper `_getPlanWindow(plan, year)` introduced
- `_v4DashboardPlans` rewritten to use shared helper
- plant detail plan rendering rewritten to use shared helper
- output identical to 11A — pure mechanical refactor

#### Session 11C — Engine alignment
- trigger engine Rule P1 aligned with `_getPlanWindow` helper
- no change to rule conditions, thresholds, or messages
- recommendation output unchanged

### Session 12 — Plans ↔ Calendar Integration

#### Session 12A — Calendar indicators
- `getCalendarItemsV4` rewritten with full plan state derivation per day
- uses `_getPlanWindow` for window calculation
- ±7 day tolerance for activity matching
- type normalization (toLowerCase/trim) for matching
- plant overlap matching (plantIds or appliesToAll)
- done plans excluded from calendar dots
- calendar dots: green (activity), amber (active/upcoming plan), gray (missed plan)
- CSS class `.has-missed` added

#### Session 12B — Day click details
- `selectCalDayV4` rewritten with inline detail section
- activities shown with green border + type label via `_v4TypeLabel`
- plans shown with amber/gray border + state label (Aktivan/Predstojeći/Propušteno)

#### Session 12C — Month list consistency
- month summary shows colored borders and state labels for plan items
- activities sorted before plans on same day

### Session 13A — Dashboard plan state derivation fix
- `_v4DashboardPlans` matching logic aligned with DOMAIN_RULES 5.4–5.6
- activity matching now checks FIRST (done overrides all states)
- ±7 day tolerance window added
- type normalization (toLowerCase/trim) added
- overview display unchanged — still shows only active plans

---

## IMPLEMENTED — V2 OVERLAY (PROTECTION ENGINE)

V2 is an overlay layer:
- read-only on V1 data
- no schema changes
- no new storage structures
- operates on top of plants + activities + plans

### Session V2.1 — Monitoring Input
- `monitoring` introduced as activity type (approved extension)
- structured monitoring inputs added to Add Activity
- canonical monitoring values stored inside notes
- validation supports monitoring

### Session V2.2 — Monitoring KPI
- 3 static KPI cards added
- no logic (UI only)
- prepares trigger system

### Session V2.3 — Trigger Engine
- getRecommendationsV2(v4, plantId)
- deterministic rules:
  - aphids
  - traps
  - fungus
  - no monitoring
  - active plan context
- returns structured recommendation objects
- no storage, pure logic

### Session V2.4 — Recommendation UI
- recommendation cards on plant detail
- lightweight summary on dashboard
- driven only by trigger engine
- no persistence

---

## IMPORTANT DOMAIN NOTES

- v4 is the ONLY active data model
- v3 exists only for migration compatibility
- activities are the ONLY source of truth
- plans are NOT editable
- plan state is ALWAYS derived (never stored)

### Plan state derivation (implemented)

Plan states are derived at render time only. Never stored.

Allowed states:
- upcoming — before plan window
- active — within plan window
- done — matching activity exists (overrides all other states)
- missed — past plan window + tolerance, no matching activity

State derivation (strict order):

1. if matching activity exists → done
2. else if currentDate < startDate → upcoming
3. else if currentDate <= endDate → active
4. else if currentDate > effectiveEnd → missed

Matching rules:
- type normalization: toLowerCase().trim() on both activity.type and plan.activityType
- plant matching: plan.appliesToAll === true OR activity.plantIds overlaps plan.plantIds
- tolerance: ±7 days from plan window (effectiveStart = start - 7, effectiveEnd = end + 7)

Date normalization:
- all comparisons are done at DAY level (YYYY-MM-DD)
- time component is ignored
- activity.date, currentDate, and plan window dates must be normalized

Rules:
- state is NOT stored
- state is recalculated on every render
- one matching activity is enough
- duplicates do not affect state

Implemented in:
- `_v4DashboardPlans` — derives state for overview (shows only active plans)
- `getCalendarItemsV4` — derives state per day for calendar dots
- `selectCalDayV4` — shows state labels on day click
- plant detail IIFE — shows active plans only (no matching check yet — Session 13B)

### Monitoring (important)

- monitoring is an approved activity type extension
- it is NOT part of original V1 allowed type list
- it is VALID in current implementation
- it MUST NOT be removed or restricted
- it does NOT change activity structure

---

## CURRENT LIMITATIONS

- plant detail plan section does not check for matching activities (Session 13B pending)
- no activity edit (only create + delete)
- no onboarding flow
- no multi-language support
- no tools / equipment layer
- no weather integration (temporarily removed)
- no subscription / monetization layer

---

## CURRENT FOCUS

Next step:
→ Session 13B — Plant detail plan state derivation fix

---

## PARALLEL TRACKS

### Core App (V1)
- Session 10 — Activity Management (DONE)
- Session 11 — Plans: Read Model (DONE — 11A, 11B, 11C)
- Session 12 — Plans ↔ Calendar Integration (DONE — 12A, 12B, 12C)
- Session 13A — Dashboard plan state fix (DONE)
- Next: Session 13B — Plant detail plan state fix

### Protection Engine (V2)
- V2.1 Monitoring Input — DONE
- V2.2 Monitoring KPI — DONE
- V2.3 Trigger Engine — DONE
- V2.4 Recommendation UI — DONE

Next:
- future V2 improvements (only after V1 plan system is stable)

---

## INTERPRETATION RULE

If any mismatch exists between:
- documentation
- implementation
- roadmap

Then:

1. actual implemented behavior (this file)
2. IMPLEMENTATION_AUTHORITY_V1.md
3. MIGRATION_PLAN_V1.md
4. EXECUTION_ROADMAP_V1.md

define the correct interpretation.
