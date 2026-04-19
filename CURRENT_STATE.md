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

### Lifecycle-based Plans (Controlled Extension — SECONDARY, OPTIONAL)

Documented as a narrow, optional extension. NOT the primary plan system. NOT persisted. NOT a parallel plan engine. See TARGET_ARCHITECTURE_V1.md "Plan System Hierarchy (V1)".

- scope limited to explicitly approved event-based cases (e.g. formative pruning year 1)
- generated from existing data (e.g. plantedDate) — never persisted into `v4.plans[]`
- does not modify v4 schema
- no generic engine introduced
- MUST NOT be mixed with persisted plans in the rendered plan list

### Session 13A — Dashboard plan state derivation fix
- `_v4DashboardPlans` matching logic aligned with DOMAIN_RULES 5.4–5.6
- activity matching now checks FIRST (done overrides all states)
- ±7 day tolerance window added
- type normalization (toLowerCase/trim) added
- overview display unchanged — still shows only active plans

### Session 13B — Plant detail plan state derivation fix

- plant detail "Plan rada" section now checks matching activities
- done plans are excluded from plant detail (no longer shown as active)
- reuses established deterministic plan logic (same matching model as dashboard and calendar)
- no schema or storage changes

### Session 14 — Context-Aware Filtering

- young plant filtering added at render time
- harvest plans are hidden for young plants on plant detail
- filtering uses existing plant context only
- no schema or storage changes

### Session 15 — Recommendation Engine V1

- first V1 recommendation layer — surfaces "what should I do now" prompts per plant
- render-time only — no schema changes, no new stored fields
- three high-level rules:
  - active plan prompt — notifies when a plan is active for the plant but not yet executed
  - young plant notice — informational reminder shown for young plants
  - watering gap — notifies when the plant has not been watered recently during the growing season
- renders on plant detail only, inside the existing "Preporuke" section, combined with V2 recommendations (V2 = protection/warnings, V1 = actionable prompts)
- dashboard and calendar are not affected
- V2 protection engine is unchanged

### Session 16 — Weather-Aware Spray Layer

- weather is shown in overview (v4 only)
- visible only when active spraying plan exists
- uses Open-Meteo (existing fetchWeather)
- reuses existing weatherData and UI
- shows 3-day forecast (today / tomorrow / day after)
- informational only (no recommendations, no decision logic)
- no schema or storage changes

### Session 17 — v4 Export / Import (JSON backup)

- enables safe backup and restore when moving to a new device
- export source is only `vocnjak_v4`
- import behavior is validated full replace of `vocnjak_v4`
- current state is backed up to `vocnjak_v4_preimport_backup` before valid import overwrite
- validation is strict and fail-closed
- invalid import never overwrites existing data
- no schema or storage model changes beyond the internal backup key
- located in the Sync screen as a separate v4 backup/import utility
- legacy v3 export/import remains unchanged

### Session 17.4 — Plant Type Schema Approval (Core Domain Bridge)

- DOCUMENTATION ONLY — no code changes
- approved one new field: `plant.type` (string, required for new plants from Session 17.5 onward)
- closed allowed set: apple, pear, plum, cherry, peach, nectarine, apricot, olive, fig, citrus
- locked rules added to IMPLEMENTATION_AUTHORITY_V1.md "Plant Identity & Lifecycle Rules (V1 Override)"
- legacy plants without `plant.type` remain valid; never auto-migrated, never auto-tagged
- MIGRATION_PLAN_V1.md remains untouched — `plant.type` is recorded as an APPROVED SCHEMA EXTENSION (same pattern as the monitoring activity-type exception)

### Session 17.5 — Plant Catalog + Plant Management (Add + Delete)

- Add Plant is catalog-backed: `#apType` select is required and whitelisted against the closed 10-value catalog
- `plant.type` is saved into `v4.plants[id]` for every newly created plant
- citrus REQUIRES a subtype (lemon | orange | mandarin) stored in `plant.variety`; placeholder is `disabled selected` to reflect the requirement
- non-citrus types: optional variety select; when chosen, value is whitelisted against the per-type catalog list
- legacy plants without `plant.type` continue to load and render unchanged — no migration pass
- Add Plant entry point is reachable from the plants screen beyond the empty state (a "+" button is appended to the v4 plant tab row)
- Delete Plant action is present on plant detail; one confirmation dialog showing cascade-impact counts
- Delete uses a deterministic HARD cascade in a single `localStorage.setItem("vocnjak_v4", …)` write:
  - removes `v4.plants[plantId]`
  - removes the deleted id from each non-`appliesToAll` plan's `plantIds`; drops the plan when its `plantIds` becomes empty
  - plans with `appliesToAll === true` are NEVER touched
  - malformed plans (no valid `plantIds` array) are KEPT untouched (delete flow does not silently destroy unrelated/corrupt plan data)
  - removes the deleted id from each activity's `plantIds`; drops the activity when its `plantIds` becomes empty
  - never leaves dangling references in `v4`
- one localStorage write per save and per delete (atomic)
- NO plan generation in this session — that is Session 17.6 scope
- minor UX: name input gets a catalog-label suggestion when empty (never overwrites a typed value; never used to derive `plant.type`)

### Session 17.6 — Template → Persisted Plans (Core Domain Bridge)

- `ORCHARD_PLAN_TEMPLATES` constant added to `index.html` — 13 sections (shared + 12 plant-type-specific), 92 entries total, populated from ORCHARD_PLAN_TEMPLATES_V1.md
- `_generatePlansForPlant(plant)` — pure function; takes a plant object; routes to correct template sections by `plant.type` and `plant.variety` (citrus subtypes); returns array of plan objects; no mutation, no localStorage, no side effects; includes defensive guard for missing/invalid plant
- Add Plant now generates persisted plans immediately after save: generated plans are pushed into `v4.plans[]` with dedup check before the single `localStorage.setItem` write
- Generated plan IDs are deterministic: `gen:plant:<plantId>:<section>:<key>` — re-running generation for an already-processed plant is a NO-OP
- `backfillGeneratedPlans()` — loops all existing plants, generates + dedup-pushes plans, single localStorage write, toast result, re-renders; triggered by ↻ button in plant tab bar
- ↻ button appended to plant tab row (alongside existing + button)
- Generated plans coexist with manual/migrated plans in `v4.plans[]`
- Cascade delete of generated plans handled by existing Session 17.5 Delete Plant cascade (no change to delete logic)
- Cross-year template windows split into two same-year entries (a/b suffix keys) for compatibility with existing readers
- Core Domain Bridge (Sessions 17.4 / 17.5 / 17.6) is now COMPLETE

### Session 18 — Supabase Backup (manual only)

- Supabase backup is implemented in the Sync screen
- backup source is ONLY `localStorage.vocnjak_v4`
- backup is manual trigger only — no auto backup, no polling, no background job
- `saveData()` no longer has a cloud backup side effect
- backup sends the full v4 object (`plants`, `activities`, `plans`) to the existing Supabase table `vocnjak_data`
- backup request uses an upsert-compatible Supabase REST pattern:
  - `POST /rest/v1/vocnjak_data`
  - `Prefer: resolution=merge-duplicates`
  - requires `user_key` to be unique in the Supabase table
- restore is a validated full replace of `localStorage.vocnjak_v4`
- restore validation reuses the strict v4 import validator before any overwrite
- current local v4 state is backed up to the existing `vocnjak_v4_preimport_backup` key before valid restore overwrite, only when current v4 exists
- invalid cloud restore never overwrites local data
- UI shows "Zadnji cloud backup" using `vocnjak_v4_last_supabase_backup`
- no sync / merge / partial restore / background logic was introduced

### Session 19 — iCal Reminder Export (manual, plans-based)

- ICS export is based on `v4.plans[]`
- `v4.activities[]` is used only to suppress done plans
- only derived `upcoming` and `active` plans are exported
- derived `missed` and `done` plans are excluded
- one plan becomes one `VEVENT`
- event date is the plan start date (Option A)
- full plan window is included in the event description
- evaluation uses the current year via existing plan-window logic; no year is hardcoded
- no recurrence and no `VALARM` are generated
- no export metadata is stored
- GitHub upload uses the existing `vocnjak_kalendar_puni_v2.ics` path:
  - creates the file if missing
  - overwrites the file if it exists
- export is manual trigger only from the Sync screen button
- no auto export and no background behavior was introduced

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
- plant detail IIFE — derives state with matching check (done plans excluded)

### Monitoring (important)

- monitoring is an approved activity type extension
- it is NOT part of original V1 allowed type list
- it is VALID in current implementation
- it MUST NOT be removed or restricted
- it does NOT change activity structure

---

## CURRENT LIMITATIONS

- no activity edit (only create + delete)
- no onboarding flow
- no multi-language support
- no tools / equipment layer
- no subscription / monetization layer

---

## CURRENT FOCUS

Next step:
→ Session 20 — First-Run Onboarding

Session 19 iCal Reminder Export is complete and pushed in commit `a4438ec886cece3d288b86086a1eedccf29097b6`. Session 18 Supabase Backup is complete and pushed in commit `061ce1c65363957689b6e0837ca6d3da7a7ea043`. The Core Domain Bridge (Sessions 17.4 / 17.5 / 17.6) is also COMPLETE. Plant identity is catalog-backed, delete is deterministic with cascade, and orchard template plans are persisted into `v4.plans[]`. The bridge was a forward-pull of plant identity work from Session 20 (NOT full onboarding). See IMPLEMENTATION_AUTHORITY_V1.md "Core Domain Bridge" and "Plant Identity & Lifecycle Rules (V1 Override)" sections, and EXECUTION_ROADMAP_V1.md "ROADMAP EXCEPTION — CORE DOMAIN BRIDGE" block.

---

## PARALLEL TRACKS

### Core App (V1)
- Session 10 — Activity Management (DONE)
- Session 11 — Plans: Read Model (DONE — 11A, 11B, 11C)
- Session 12 — Plans ↔ Calendar Integration (DONE — 12A, 12B, 12C)
- Session 13A — Dashboard plan state fix (DONE)
- Session 13B — Plant detail plan state derivation fix (DONE)
- Session 14 — Context-Aware Filtering (DONE)
- Session 15 — Recommendation Engine V1 (DONE)
- Session 16 — Weather-Aware Spray Layer (DONE)
- Session 17 — v4 Export / Import JSON (DONE)
- Session 17.4 — Plant Type Schema Approval (DONE — roadmap exception — Core Domain Bridge)
- Session 17.5 — Plant Catalog + Plant Management (Add + Delete) (DONE — roadmap exception — Core Domain Bridge)
- Session 17.6 — Template → persisted plans[] (DONE — roadmap exception — Core Domain Bridge)
- Session 18 — Supabase Backup (DONE — manual only)
- Session 19 — iCal Reminder Export (DONE — manual, plans-based)
- Next: Session 20 — First-Run Onboarding

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
