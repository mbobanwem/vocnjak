# V2_DOMAIN_MODEL

**Status:** Section 0 locked in S2.1. Sections 1–9 remain placeholders for S2.2–S2.8.

---

## 0. Core domain model — locked (S2.1)

### 0.1 Top-level entities (stored)

1. **Plant** — a real plant in the user's orchard.
   - `plant_id`, `species`, `variety?`, `planted_at?`
2. **Catalog template** — expert-authored, versioned plan template per species. Action-window definitions live as a child collection of the catalog template; they are not a separate top-level entity.
   - `catalog_id`, `species`, `catalog_version`
3. **Plan instance** — pinned per plant to exactly one catalog version.
   - `plan_instance_id`, `plant_id`, `catalog_version`
4. **Plan overlay** — user edits attached to a plan instance.
   - `overlay_id`, `plan_instance_id`
5. **Activity record** — immutable captured real-world event.
   - `activity_id`, `plant_id`, `action_type`, `status` ∈ {done, skipped}, `occurred_on`, `recorded_at`, `notes?`, `provenance`
6. **Observation** — immutable structured observation event.
   - `observation_id`, `plant_id`, `kind` ∈ {trap, scouting, stage_obs, symptom}, `observed_on`, `recorded_at`, `payload` (schema per `kind` deferred to S2.4), `provenance`

### 0.2 Action-window definition (child of Catalog template)

- `window_def_id`, `catalog_id`, `action_type`, `anchor` (phenological, calendar fallback), `tolerance`, `depends_on?` (prior `action_type` + `offset`).

### 0.3 Derived (never stored)

- **Window state** per (plant, action).
- **Dependency status** per (plant, action) — independent axis.
- **Plan state** — projection of all window states for a plant.
- **"Am I on track"** — aggregate over plan states across plants.

Computed each time the screen is opened, from: today's date, the plant's pinned catalog version, the overlay, the set of activity records, the set of observations, and the deterministic rules. No stored status. Any cache is an implementation detail with zero authority.

### 0.4 Window-state enum (final)

- `upcoming` — not yet open
- `open` — inside valid window
- `closing-soon` — open, near close (numeric threshold deferred to S2.5)
- `missed` — window closed without any matching activity with `status=done` or `status=skipped`
- `done` — a matching activity with `status=done` exists and `occurred_on ≤ window.close`
- `done_late` — a matching activity with `status=done` exists and `occurred_on > window.close`
- `skipped` — a matching activity with `status=skipped` exists

A skip recorded after window close is `skipped` — no `skipped_late`.

A "matching activity" is an activity record for the same `plant_id` and the same `action_type` as the window.

### 0.5 Dependency-status enum (final, separate axis)

- `satisfied` — prerequisite activity recorded as `done` and offset elapsed
- `unsatisfied` — prerequisite not yet recorded as `done`, or offset not yet elapsed
- `not_applicable` — window has no `depends_on`

Window state and dependency status are computed independently. A window can be `open` with `dependency_status = unsatisfied` simultaneously.

### 0.6 Activity MUST-HAVE fields

- `plant_id`, `action_type`, `status`, `occurred_on`, `recorded_at`.
- Absence rule: no activity record ⇒ the action did not happen. No inference from calendar, weather, or context.

### 0.7 Overlay identity rule

- An overlay belongs to exactly one plan instance.
- An overlay stores user edits, not derived state.
- Reconciliation behavior (per-window vs per-field, edit survival across catalog upgrades, `from → to` pairing) is deferred to S2.7.

### 0.8 Versioning unit

- Catalog is versioned as a whole (`catalog_version`).
- A plan instance is pinned to exactly one catalog version at a time.
- Overlay travels with the plan instance.

---

### 0.9 Locked rules

#### 0.9.1 Window vs execution

- A window is the agronomically valid period for an action; it is catalog-defined and is not rewritten by real execution.
- An activity may be recorded with any `occurred_on`, inside or outside the window. The activity is always stored.
- The window's derived state reflects the activity:
  - inside window → `done`
  - outside window (after close) → `done_late`
  - skip → `skipped`
  - no activity, window closed → `missed`
- The plan as a whole does not slide. Only **dependent** windows shift, per the dependency rule.

#### 0.9.2 Dependency rule

- A window definition may declare that it depends on a prior action, with a required waiting period (`offset`) measured from when that prior action was actually performed.
- In plain terms: the dependent window cannot meaningfully open before enough time has passed since the prior action was really done. The catalog's own opening date for the dependent window is treated as a floor; the real opening date is whichever comes later — the catalog date or "prior action's `occurred_on` plus the required offset".
- Formal restatement, for unambiguous reference:
  `effective_open = max(own_anchor_open, prior_activity.occurred_on + offset)`
  where `prior_activity` is the matching `done` or `done_late` activity for the prior action.
- If no such prior activity has been recorded, `dependency_status = unsatisfied`. The dependent window's intrinsic state is still computed normally; the dependency is a separate axis the user sees alongside it.
- Example: white oil planned Feb 1–15, recorded as done on Feb 18, copper offset 14 days → copper's effective opening is Mar 4 (or the catalog opening for copper, whichever is later).
- Fallback rules when the prior window is `missed` or `skipped` are deferred to S2.6.

#### 0.9.3 Monitoring vs symptom

- Both paths produce records of the same entity: `Observation`.
- `kind = trap | scouting | stage_obs` represent monitoring.
- `kind = symptom` represents user-initiated problem observation.
- The system MUST NOT require any monitoring observation as a prerequisite for handling a symptom. Symptom records surface relevant action windows immediately.
- Neither path authors recommendations. Both deterministically surface windows; the user decides.

#### 0.9.4 Derived state (plain language)

- The system never writes "this plant is 60% done". There is no stored status field.
- Every render recomputes window state and dependency status from: today's date, pinned catalog version, overlay, activity records, observations, and the locked rules.
- Adding a missing activity later changes the displayed state because the same rules now see different inputs — not because state was "updated".
- State is a view, not a record. This is what makes the system deterministic and auditable.

---

### 0.10 Deferred to S2.x

| Item                                                              | Owner |
|-------------------------------------------------------------------|-------|
| Catalog template field schema                                     | S2.2  |
| Phenology stage vocabulary per launch species                     | S2.3  |
| `Observation.payload` schema per `kind`                           | S2.4  |
| `closing-soon` numeric threshold                                  | S2.5  |
| End-of-season rules per species                                   | S2.6  |
| Dependency fallback when prior window is `missed` or `skipped`    | S2.6  |
| Overlay reconciliation across catalog upgrades                    | S2.7  |
| Launch species list                                               | S2.8  |

---

## 1. Catalog template schema (MUST-HAVE fields)

*Placeholder — owned by S2.2.*

## 2. Phenology stage vocabulary (per launch species)

*Placeholder — owned by S2.3.*

## 3. Monitoring schema

*Placeholder — owned by S2.4 (`Observation.payload` schema per `kind`).*

## 4. Window-state enum

*Locked in Section 0.4 (S2.1).*

## 5. `closing-soon` threshold

*Placeholder — owned by S2.5.*

## 6. End-of-season rules (per species)

*Placeholder — owned by S2.6.*

## 7. Overlay semantics

*Placeholder — owned by S2.7 (reconciliation). Identity locked in Section 0.7 (S2.1).*

## 8. Versioning unit

*Locked in Section 0.8 (S2.1).*

## 9. Launch species list

*Placeholder — owned by S2.8.*
