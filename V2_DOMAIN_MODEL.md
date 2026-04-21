# V2_DOMAIN_MODEL

**Status:** Sections 0–6 locked. Sections 7–9 remain placeholders for S2.7–S2.8.

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

## 3. Observation payload schemas per kind — locked (S2.4)

### 3.1 Payload strategy

- `Observation.payload` is a kind-specific shape, selected by `observation.kind` (S2.1 §0.1).
- Payload does NOT include a `kind` field. The outer `observation.kind` is the sole discriminator.
- Each kind has a complete, typed payload schema. No shared sub-header.
- Unknown fields are validation errors; no free-shape extension.

### 3.2 Payload per kind

#### 3.2.1 `trap`

| Field              | Type              | Cardinality | Semantics                                                                   |
|--------------------|-------------------|-------------|-----------------------------------------------------------------------------|
| `target_pest_code` | string identifier | required    | Pest the trap targets. Opaque in S2.4 (catalog registry deferred).          |
| `count`            | integer ≥ 0       | required    | Number of captures found at this observation.                               |

`trap_id` is intentionally not included in S2.4 — the Trap entity lifecycle is deferred. A trap reference field can be added additively when the Trap entity is locked.

#### 3.2.2 `scouting`

| Field         | Type                                                                                | Cardinality | Semantics                                                                    |
|---------------|-------------------------------------------------------------------------------------|-------------|------------------------------------------------------------------------------|
| `target_code` | string identifier                                                                   | required    | What is being scouted for. Opaque in S2.4.                                   |
| `finding`     | `{ mode: "count", value: integer ≥ 0 }` OR `{ mode: "presence", value: boolean }`   | required    | Primary observation. Mode declared at capture; not inferred.                 |

#### 3.2.3 `stage_obs`

| Field        | Type              | Cardinality | Semantics                                                                                          |
|--------------|-------------------|-------------|----------------------------------------------------------------------------------------------------|
| `stage_code` | string identifier | required    | Phenological stage reached. MUST resolve in the plant's pinned catalog `stage_vocabulary` (S2.3).  |

No other fields. The date the stage was reached is `observation.observed_on` (S2.1 §0.1), not a payload field.

#### 3.2.4 `symptom`

| Field           | Type                                                                          | Cardinality | Semantics                                                                           |
|-----------------|-------------------------------------------------------------------------------|-------------|-------------------------------------------------------------------------------------|
| `symptom_code`  | string identifier                                                             | required    | Catalog-declared symptom identifier. Opaque in S2.4.                                |
| `affected_part` | enum ∈ {`leaf`, `fruit`, `flower`, `trunk`, `branch`, `root`, `whole_plant`}  | optional    | Plant part on which the symptom is observed. Categorical observation, not severity. |

### 3.3 Cross-cutting rules

- The payload shape MUST match `observation.kind`. A trap-shaped payload on a `stage_obs` record is invalid.
- No payload MAY include fields not listed in its kind's schema (no free-shape extension; no `extra`, `notes`, `severity`, `action_needed`, `confidence`, etc.).
- `payload` is REQUIRED on every Observation record. Its kind-specific required fields are all REQUIRED.

### 3.4 Validation rules

#### 3.4.1 `trap` payload — invalid if

- `target_pest_code` absent or empty.
- `count` absent.
- `count` is not an integer ≥ 0.

#### 3.4.2 `scouting` payload — invalid if

- `target_code` absent or empty.
- `finding` absent.
- `finding.mode` not in `{ "count", "presence" }`.
- `finding.mode = "count"` and `finding.value` absent or not an integer ≥ 0.
- `finding.mode = "presence"` and `finding.value` not a boolean.

#### 3.4.3 `stage_obs` payload — invalid if

- `stage_code` absent or empty.
- `stage_code` is not equal to the `stage_code` of any entry in the plant's pinned catalog `stage_vocabulary` (referential integrity into S2.3).

#### 3.4.4 `symptom` payload — invalid if

- `symptom_code` absent or empty.
- `affected_part` is present and not in the closed enum listed in §3.2.4.

#### 3.4.5 Cross-cutting — invalid if

- `payload` absent.
- `payload` shape does not match `observation.kind`.
- `payload` contains a field not defined by its kind's schema.

## 4. Window-state enum

*Locked in Section 0.4 (S2.1).*

## 5. `closing-soon` threshold — locked (S2.5)

### 5.1 Domain constant

The system declares a single domain-level constant:

| Field                    | Type       | Value                        | Semantics                                                                                  |
|--------------------------|------------|------------------------------|--------------------------------------------------------------------------------------------|
| `closing_soon_threshold` | `duration` | `{ value: 3, unit: "days" }` | The number of days before `effective_close` during which an open window is `closing-soon`. |

Let `T` denote `closing_soon_threshold.value` measured in days. This constant is global: it is NOT a field on `Catalog template` and NOT a field on `Action-window definition`. It applies identically to every window in every catalog version.

### 5.2 Derivation rule

`closing-soon` is a sub-state of the `open` branch of §0.4. It is computed, never stored (§0.3, §0.9.4).

Let `today` = current date.
Let `effective_open`, `effective_close` = per §1.3, after any `calendar_bound` clipping.
Let "matching activity" = per §0.4 (same `plant_id`, same `action_type`, same `cycle_id`; null matches null).

Provided no matching activity with `status=done` or `status=skipped` exists:

- `today < effective_open` → `upcoming`
- `effective_open ≤ today ≤ effective_close − T` → `open`
- `effective_close − T < today ≤ effective_close` → `closing-soon`
- `today > effective_close` → `missed`

The `done`, `done_late`, and `skipped` branches of §0.4 are unchanged by S2.5.

### 5.3 Determinism across anchor kinds

The rule consumes `effective_close` only. `effective_close` is produced by §1.3 for both calendar and phenology anchors, and already reflects any `calendar_bound` clipping. S2.5 therefore adds no anchor-specific branching.

For phenology-anchored windows where the referenced stage has not yet been observed (no `Observation` with `kind = stage_obs` resolving the anchor's `stage_code`), `effective_close` is undefined; the window is `upcoming` and cannot yet be `closing-soon`. This is consistent with §2.4 (no stage-reached moment may be inferred).

### 5.4 Short-window behavior

If `effective_close − effective_open < T`, the window enters `closing-soon` the moment it opens. This is intentional: a window shorter than `T` is, by definition, urgent throughout its entire duration. No special-case rule is introduced.

### 5.5 Orthogonality with dependency status

Window state and dependency status are independent axes (§0.5). A window MAY be `closing-soon` and `dependency_status = unsatisfied` simultaneously. S2.5 does not suppress, downgrade, or otherwise couple the two axes.

### 5.6 Validation rule

- `closing_soon_threshold.value` MUST be an integer ≥ 1. A value of 0 would make the `closing-soon` state unreachable.

Negative values and non-day units are already excluded by the `duration` primitive (§1.5).

### 5.7 Per-window override — deferred

S2.5 does not introduce a per-window override of the threshold. A per-window override field MAY be added additively in a later session if real usage produces evidence that a single global value is insufficient. Such an addition would be non-breaking: any window without an override would continue to inherit the global constant, analogous to the provenance fallback in §1.4 (deterministic fallback, not inference).

## 6. Season, window occurrences, and terminal-prior dependency — locked (S2.6)

### 6.1 Season

A **season** is the annual repetition of a catalog-defined action window. It is a derived notion, not a stored entity and not a per-species field.

- A season is produced whenever a plan instance is active for a given `plant_id` and the catalog template for that species defines at least one action window.
- The boundaries of a season are delimited by the action windows themselves: each window's `anchor`, `tolerance`, and (where applicable) `calendar_bound` together determine the last calendar date on which that window can remain actionable within a given year.
- There is no per-species `season_end` field. There is no per-species end-of-season rule. The derived per-occurrence model in §6.2 fully subsumes what such a field would have expressed: once a given year's window has closed (state = `missed`, `done`, `done_late`, or `skipped` per §0.4), that year's instance of that window contributes nothing further to planning.
- Species whose action windows span the dormancy transition (e.g. late-autumn pruning followed by spring pruning) are modeled as two distinct action windows in the catalog, each with its own anchor. The catalog is the authoritative source of which windows exist and when; §6 does not introduce a second authority.

### 6.2 Window occurrence

A **window occurrence** is the derived per-year instance of a catalog-defined action window for a specific plan instance.

- Occurrences are derived; they are never stored.
- Each occurrence is uniquely identified by: `plant_id`, `action_type`, `cycle_id` (catalog-authored; see §2), and `cycle_year` (integer year, derived).
- `cycle_year` is the calendar year to which the occurrence's effective open date belongs, computed from the occurrence's anchor resolution:
  - For calendar anchors, `cycle_year` is the year containing `month_day_open`.
  - For phenology anchors, `cycle_year` is the year of the `stage_obs` event that resolves the anchor (§3).
- Each occurrence carries:
  - `effective_open` — the resolved open date for this occurrence, computed per §1 from anchor + `tolerance` (and `calendar_bound` where applicable).
  - `effective_close` — the resolved close date for this occurrence.
- At most one occurrence exists per `(plant_id, action_type, cycle_id, cycle_year)` tuple.
- Phenology-anchored windows produce no occurrence for a given year until the corresponding `stage_obs` is recorded. This is the deterministic consequence of §3 (monitoring never infers missing data), not a new rule.

### 6.3 Activity-to-occurrence matching

Matching an activity record (§0.4) to a window occurrence is a deterministic refinement of §0.4's identity condition.

- An activity record `A` is considered for matching against the set of occurrences that share `A.plant_id`, `A.action_type`, and `A.cycle_id` (the identity condition established in §0.4).
- Within that set, `A` is matched to the occurrence `O` such that:
  - `A.observed_at >= O.effective_open`, and
  - `A.observed_at < next(O).effective_open`,
  where `next(O)` is the occurrence immediately following `O` in ascending `cycle_year` order within the same `(plant_id, action_type, cycle_id)` identity.
- If no `next(O)` exists (i.e. `O` is the latest occurrence yet produced for that identity), the upper bound is unbounded in the forward direction.
- The interval is **half-open on the right**. This is required so that the window-state transition `open` → `missed` → `done_late` (§0.4) remains reachable: an activity observed after `O.effective_close` but before `next(O).effective_open` is matched to `O`, producing `done_late` for that occurrence.
- Matching is deterministic: the same catalog, the same `stage_obs` set, and the same activity set produce the same mapping on every evaluation.
- For phenology-anchored windows where the current year's occurrence has not yet been produced (no `stage_obs`), no candidate `O` exists in that year. Activities observed before any occurrence exists cannot match and remain unmatched until an occurrence is produced.

### 6.4 Cross-year calendar windows

Cross-year calendar windows — specifically, calendar-anchored windows for which `month_day_close < month_day_open` within the same calendar year — remain rejected as declared in §1.6.2.

- Rationale: calendar anchors are an explicit fallback for actions whose correct timing cannot be tied to an observable phenology stage. Allowing the close date to wrap past December 31 would introduce a second kind of year discriminator in the catalog (distinct from `cycle_id`), and would force the occurrence model in §6.2 to define which calendar year "owns" a wrap-around window. Both consequences widen the catalog schema and the derivation rules for no gain that phenology anchoring cannot already deliver.
- Intended modeling path for dormancy-period and other year-crossing actions: use a phenology anchor. Dormancy-entry and dormancy-exit stages are first-class in the phenology vocabulary (§3) and provide deterministic per-year anchoring.
- **Audit escape hatch:** the S3–S5 catalog audit is authorized to surface, for review in a later session, any concrete real-world action that phenology anchoring cannot honestly represent. If such a case is documented, a future session with authority over §1 may evaluate whether an additive extension is warranted. No such extension is permitted by S2.6 itself, and nothing in §6 presumes one.

### 6.5 Terminal-prior dependency fallback

When a window `W` declares a dependency on a prior window `P` (per §0.5 and §0.9), the dependency status is computed as follows:

- If `P`'s occurrence in the same `cycle_year` as `W`'s occurrence reaches a **terminal state** of `missed` or `skipped` (§0.4), then for `W`'s occurrence in that `cycle_year`:
  - `dependency_status = unsatisfied` (§0.5), terminally, for that `cycle_year`.
  - `W.effective_open = W.own_anchor_open` — i.e. `W`'s open date remains its own anchor-derived date and is not shifted by the prior window's fate.
- Terminal-prior propagation does not occur: a downstream window whose prior is `unsatisfied` because of §6.5 does not itself inherit `unsatisfied` unless its own prior is independently terminal. Each dependency edge is evaluated independently per occurrence.
- Terminal-prior scoping is strictly **same-year**: `P`'s occurrence in year N does not influence `W`'s occurrence in year N+1 or any later year. Each `cycle_year` is evaluated independently.
- No new enum values are introduced. `dependency_status` remains `satisfied` | `unsatisfied` | `not_applicable` per §0.5.
- Axis orthogonality is preserved: window state (§0.4) is never a function of prior-window state, and dependency status (§0.5) is never a function of the dependent window's own state. §6.5 does not alter this separation; it only specifies which `dependency_status` value applies when the prior is terminal.

### 6.6 Explicit non-scope

S2.6 does not introduce, and §6 does not govern, any of the following:

- **Criticality or severity of missed windows.** `missed` is a single terminal state per §0.4. There is no tier, no ranking, and no severity-weighted downstream effect.
- **Monitoring prerequisites for actions.** Whether a given action requires a preceding observation is a catalog concern (§2) and a monitoring concern (§3); §6 does not re-express or extend those rules.
- **Consequences of recorded symptoms or stress observations.** Observations are recorded per §4; they do not drive window state or dependency status. §6 does not introduce any symptom-consequence mechanism.
- **Per-species `season_end` field or rule.** Explicitly rejected — see §6.1. The derived occurrence model in §6.2 is the sole mechanism by which "end of season" is expressed, and it is expressed per-occurrence, not per-species.
- **Plan-instance lifetime, closure, retirement, or archival.** Plan instances are governed by §0.7; §6 derives from active plan instances but does not define their lifecycle.

### 6.7 Relationship to §0.4 matching rule

§6.3 refines the matching of activity records to windows along the temporal dimension. §0.4's matching rule, as locked, establishes the identity condition (same `plant_id`, same `action_type`, same `cycle_id`). §6.3 does not alter that identity condition; it adds the per-year temporal refinement required to make matching deterministic once multiple occurrences exist.

- **Forward obligation.** A later session with authority to revisit §0.4 should either (a) insert a forward reference from §0.4 to §6.3, or (b) unify both halves into a single consolidated matching rule. Neither is required to make §6 consistent; both are documentation improvements that preserve the existing semantics.
- **Documentation concern, not a model inconsistency.** The full matching rule is fully determined by reading both sections:
  - §0.4 provides the identity condition.
  - §6.3 provides the temporal refinement.
  - Together they form the complete matching rule.
  - §6.3 is consistent with §0.4 but does not amend it.

## 7. Overlay semantics

*Placeholder — owned by S2.7 (reconciliation). Identity locked in Section 0.7 (S2.1).*

## 8. Versioning unit

*Locked in Section 0.8 (S2.1).*

## 9. Launch species list

*Placeholder — owned by S2.8.*
