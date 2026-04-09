# CURRENT STATE

## TECH

- single-file index.html (~1300+ lines)
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

### Monitoring (important)

- monitoring is an approved activity type extension
- it is NOT part of original V1 allowed type list
- it is VALID in current implementation
- it MUST NOT be removed or restricted
- it does NOT change activity structure

### Plans UI (Session 11A)
- overview: renamed "Otvoreni prozori" → "Plan rada"
- overview: capped active plan display to max 2 items
- plant detail: added "Plan rada" section showing active plans for current plant
- plant detail: section hidden when no active plans
- rendering only — no logic changes

---

## CURRENT LIMITATIONS

- plan state derivation (upcoming / active / done / missed) not implemented yet
- no activity edit (only create + delete)
- no onboarding flow
- no multi-language support
- no tools / equipment layer
- no weather integration (temporarily removed)
- no subscription / monetization layer

---

## CURRENT FOCUS

Next step:
→ Session 11B — Plan logic consolidation

---

## PARALLEL TRACKS

### Core App (V1)
- Session 10 — Activity Management (DONE)
- Next: Session 11 — Plans: Read Model

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