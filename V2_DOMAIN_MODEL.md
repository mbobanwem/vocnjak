# V2_DOMAIN_MODEL

**Status:** Sections 0–2 locked. Sections 3–9 remain placeholders for S2.4–S2.8.

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
   - `activity_id`, `plant_id`, `action_type`, `cycle_id?`, `status` ∈ {done, skipped}, `occurred_on`, `recorded_at`, `notes?`, `provenance`
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

A "matching activity" is an activity record for the same `plant_id`, the same `action_type`, and the same `cycle_id` as the window, where `cycle_id = null` matches `cycle_id = null`.

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
- When the prior action has multiple cycles in the same catalog version, `depends_on` MUST name the specific `prior_cycle_id` it depends on. When the prior action has a single cycle, `prior_cycle_id` MUST be omitted.
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
| `Observation.payload` schema per `kind`                           | S2.4  |
| `closing-soon` numeric threshold                                  | S2.5  |
| End-of-season rules per species                                   | S2.6  |
| Dependency fallback when prior window is `missed` or `skipped`    | S2.6  |
| Overlay reconciliation across catalog upgrades                    | S2.7  |
| Launch species list                                               | S2.8  |

---

## 1. Catalog template schema — locked (S2.2)

### 1.1 Catalog template — MUST-HAVE fields

S2.1 identity: `catalog_id`, `species`, `catalog_version`.

S2.2 adds:

| Field                       | Type                           | Cardinality | Semantics                                                                   |
|-----------------------------|--------------------------------|-------------|-----------------------------------------------------------------------------|
| `author`                    | string identifier              | required    | Curator of this catalog version. Provenance per Principle 6.                |
| `evidence_source`           | string (citation / reference)  | required    | Source of agronomic evidence for this version.                              |
| `last_reviewed_on`          | ISO date                       | required    | Date this version was last reviewed.                                        |
| `action_window_definitions` | non-empty list                 | required    | The child collection. Must contain at least one Action-window definition.   |

S2.3 adds:

| Field              | Type | Cardinality | Semantics                                                                                                                                                                   |
|--------------------|------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `stage_vocabulary` | list | optional    | List of stage entries (§2.2). REQUIRED if any action-window definition has `anchor.kind = "phenology"`. MAY be present without any phenology anchor. Non-empty when present. |

### 1.2 Action-window definition — MUST-HAVE fields

S2.1 identity: `window_def_id`, `catalog_id`, `action_type`, `anchor`, `tolerance`, `depends_on?`.

S2.2 specifies shape and adds fields:

| Field                 | Type / shape                                                                                                          | Cardinality | Semantics                                                                                                             |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------|-------------|-----------------------------------------------------------------------------------------------------------------------|
| `action_type`         | string identifier                                                                                                     | required    | Stable identifier activity records match against.                                                                     |
| `cycle_id`            | string identifier                                                                                                     | optional    | Discriminator when the same `action_type` recurs in one catalog. Null means single-cycle.                             |
| `anchor`              | `{ kind: "phenology", stage_code: string }` OR `{ kind: "calendar", month_day_open: MD, month_day_close: MD }`        | required    | Agronomic origin. Phenology is primary (Principle 2); calendar is fallback.                                           |
| `calendar_bound`      | `{ not_before?: MD, not_after?: MD }`                                                                                 | optional    | Absolute-date guard. Only meaningful when `anchor.kind = "phenology"`. Forbidden when `anchor.kind = "calendar"`.     |
| `tolerance`           | `{ before: duration, after: duration }`                                                                               | required    | Relative-duration sizing around the anchor. Distinct axis from `calendar_bound`.                                      |
| `depends_on`          | `{ prior_action_type: string, prior_cycle_id?: string, offset: duration }`                                            | optional    | Single prior-action reference per §0.9.2. `prior_cycle_id` required iff prior has multiple cycles.                    |
| `author`              | string identifier                                                                                                     | optional    | Per-window provenance override. When absent, inherits catalog's `author` — deterministic fallback, not inference.     |
| `evidence_source`     | string                                                                                                                | optional    | Per-window provenance override. When absent, inherits catalog's `evidence_source`.                                    |
| `last_reviewed_on`    | ISO date                                                                                                              | optional    | Per-window provenance override. When absent, inherits catalog's `last_reviewed_on`.                                   |

### 1.3 Effective window (locked domain rule)

The effective window is the agronomic period during which the action may be performed. It is always determined by the catalog and, when the anchor is phenological, by the plant's `Observation` records with `kind = stage_obs`. It is never determined by a hidden rule, a live decision, or any inference.

- When a window is anchored to a phenology stage, it opens a defined period before the referenced stage is reached and closes a defined period after, where "period before" and "period after" are given by the window's `tolerance`. The moment the referenced stage is reached for the plant is drawn from `Observation` records with `kind = stage_obs`; the internal structure of those records is owned by S2.4 and is not assumed here. If the catalog also declares an absolute calendar guard (`calendar_bound`), the effective window never begins earlier than the guard's `not_before` nor ends later than the guard's `not_after`.
- When a window is anchored to calendar dates, it opens the declared `month_day_open` minus `tolerance.before`, and closes the declared `month_day_close` plus `tolerance.after`. A calendar anchor does not admit an additional `calendar_bound`; the anchor itself already expresses absolute dates. Calendar-anchored windows do not consult any `Observation` record.

Given the same catalog, and — for phenology anchors only — the same `Observation` records with `kind = stage_obs` for the plant, the effective window is always the same. Determinism is a domain property here, not an implementation one.

### 1.4 Provenance fallback rule

- Catalog provenance fields are required and always present.
- Window provenance fields are optional. When absent, the window's effective provenance equals the catalog's. This is a deterministic fallback — identical in nature to the `effective_open = max(...)` formula in §0.9.2. It is not inference.

### 1.5 Primitives

- **string identifier** — opaque, stable, non-empty.
- **ISO date** — `YYYY-MM-DD`.
- **duration** — `{ value: integer ≥ 0, unit: "days" }`. Other units out of scope.
- **MD (month-day)** — `{ month: 1..12, day: 1..31 }`. Valid per Gregorian month length.

### 1.6 Validation rules

#### 1.6.1 Catalog template — invalid if

- Any required field missing.
- `action_window_definitions` is empty.
- Two Action-window definitions in the catalog share the same `(action_type, cycle_id)` pair (null equals null).
- `catalog_version` is not unique within a `(species, author)` line.
- `stage_vocabulary` is absent AND at least one action-window definition has `anchor.kind = "phenology"`.
- `stage_vocabulary` is present but empty.

#### 1.6.2 Action-window definition — invalid if

- Any required field missing.
- `anchor.kind = "phenology"` and `stage_code` absent or empty.
- `anchor.kind = "phenology"` and `anchor.stage_code` is not equal to the `stage_code` of any entry in this catalog's `stage_vocabulary`.
- `anchor.kind = "calendar"` and `month_day_open` or `month_day_close` absent.
- `anchor.kind = "calendar"` and `month_day_close < month_day_open` (cross-year windows deferred to S2.6).
- `anchor.kind = "calendar"` and `calendar_bound` is present (redundant).
- `calendar_bound` is present and both `not_before` and `not_after` are absent.
- `tolerance.before.value` or `tolerance.after.value` is negative.
- `depends_on.prior_action_type` does not refer to another `action_type` declared in the same catalog version.
- `depends_on.prior_action_type == this.action_type` AND `depends_on.prior_cycle_id == this.cycle_id` (self-dependency).
- `depends_on.prior_cycle_id` is present while the named prior `action_type` has exactly one cycle in the catalog (spurious).
- `depends_on.prior_cycle_id` is absent while the named prior `action_type` has more than one cycle in the catalog (ambiguous).
- `depends_on.offset.value` is negative.
- A dependency cycle exists across all Action-window definitions in the catalog (graph must be a DAG).
- `cycle_id` is an empty string (use null to indicate single-cycle).

#### 1.6.3 Forbidden ambiguity

- `anchor.kind` must be exactly one of `phenology` or `calendar`.
- `calendar_bound` is an absolute-date guard only; it MUST NOT be used to express relative tolerance (use `tolerance` for that).
- No implicit defaults beyond the provenance fallback rule in §1.4. Missing required fields are validation errors.

## 2. Phenology stage vocabulary — locked (S2.3)

### 2.1 Scope model

- Phenology stage vocabulary is **per-catalog**. There is no shared axis, no principal-stage enum, and no cross-catalog classification.
- A **stage entry** is a catalog-declared identifier for a concrete observable milestone in the plant's life cycle.
- Each catalog version declares its own list of stage entries as an optional field on the catalog template: `stage_vocabulary` (§1.1).
- `stage_vocabulary` is REQUIRED if at least one action-window definition in the catalog has `anchor.kind = "phenology"`.
- `stage_vocabulary` MAY be present even when no action-window definition has `anchor.kind = "phenology"` (e.g., a prepared-in-advance registry or a residual-after-revision registry).
- When present, `stage_vocabulary` MUST be non-empty.

### 2.2 Stage entry — MUST-HAVE fields

| Field        | Type              | Cardinality | Semantics                                                                   |
|--------------|-------------------|-------------|-----------------------------------------------------------------------------|
| `stage_code` | string identifier | required    | Opaque, stable, non-empty. Unique within this catalog's `stage_vocabulary`. |

No other fields are defined in S2.3. Descriptions, orderings, per-stage provenance, principal-stage tags, transitions, and durations are explicitly out of scope.

### 2.3 Stability rules

- `stage_code` is opaque; no parsing, splitting, or label-inference is permitted by any consumer.
- Stage vocabulary is declared per catalog version and co-versioned with `catalog_version`. Two catalog versions that share a `stage_code` string do not, by that fact alone, share meaning. Overlay reconciliation across upgrades is deferred to S2.7.

### 2.4 Observability rule

- Every declared `stage_code` MUST refer to a visually observable phenomenon accessible to a hobby grower without instruments. Enforcement is catalog audit (S3–S5).
- The system MUST NOT derive a stage-reached moment for a plant from any input other than an `Observation` with `kind = stage_obs` for that plant. No temperature model, chill model, growing-degree-day model, weather input, or heuristic may author a stage-reached moment.

### 2.5 Validation rules (stage-vocabulary internal)

A catalog is invalid if:

- Two entries in `stage_vocabulary` share the same `stage_code`.
- Any entry in `stage_vocabulary` has an empty `stage_code`.

Rules that cross into §1.1 catalog fields or §1.2 window fields live in §1.6.

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
