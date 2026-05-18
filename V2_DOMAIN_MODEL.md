# V2_DOMAIN_MODEL

**Status:** Sections 0–7 locked. Sections 1.7 and 6.8 added in S2.8 (monitoring model). Section 9 locked by S2.8 owner decision (launch species list).

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
   - `activity_id`, `plant_id`, `window_def_id`, `catalog_version`, `action_type`, `activity_group_id?`, `status` ∈ {done, skipped}, `occurred_on`, `recorded_at`, `notes?`, `provenance`
6. **Observation** — immutable structured observation event.
   - `observation_id`, `plant_id`, `catalog_version`, `kind` ∈ {trap, scouting, stage_obs, symptom, note}, `observed_on`, `recorded_at`, `payload` (schema per `kind` in §3), `program_id?`, `observation_group_id?`, `provenance`
   - `catalog_version` — required. Pinned at write-time to the plant's then-current pinned `catalog_version`. Every catalog-backed reference on this Observation (`program_id` against §1.7; `payload.stage_code` against §2.2; `payload.symptom_code` against the catalog's symptom registry once declared) is resolved against this pinned version, not against the plant's current pinning. Immutable like all other Observation fields.
   - `program_id?` — optional link to a declared `monitoring_program` (§1.7). When present, attaches the Observation to that program's history and its `cycle_year` per §6.8. When absent, the Observation is **free-standing** and is a first-class plant-history entry that is permanently disjoint from any monitoring program (§1.7.7). Immutable like all other Observation fields.
7. **Monitoring program** — catalog-authored declaration of a season-long informational campaign per target per plant. Child collection of the catalog template, defined in §1.7. State (`pre_season`, `active`, `ended`) is derived per `(plant_id, program_id, cycle_year)` per §6.8; no state is stored. Absence of observations during any program state is neutral (§1.7.6).

### 0.2 Action-window definition (child of Catalog template)

- `window_def_id`, `catalog_id`, `action_type` (category), `label`, `anchor` (phenological, calendar fallback), `tolerance`, `open_condition?` (`requires_prior_activity` or `requires_observation`).

### 0.2a Plan-template projection rule

Action-window definitions are projections of approved orchard plan-template work. They are not arbitrary technical buckets and MUST NOT be authored from runtime convenience first.

`window_def_id` identifies the approved orchard work item projected into the catalog. `action_type` is category/search/history metadata; it is NOT template identity and MUST NOT be used to merge distinct orchard meanings.

Shared-source template rows may exist, but the domain model MUST preserve species-specific overrides and variety/fallback timing. A shared source row MAY be represented with species-specific runtime identities when that is necessary to preserve safe override behavior.

The model MUST NOT collapse:

- fungicide and insecticide into a generic treatment bucket;
- monitoring, trap/scouting/symptom observation, and treatment into one action;
- seasonal watering / water-need advisory context into a normal done/skipped Activity;
- variety/fallback harvest timing into broad species-level harvest when the plant catalog defines variety or fallback timing.

If approved plan-template content cannot be represented faithfully, the domain model MUST be amended in an owner-approved session. The content MUST NOT be silently flattened, dropped, generalized, or renamed away.

### 0.3 Derived (never stored)

- **Window state** per (plant, action).
- **Gate state** per (plant, window) — independent axis.
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

A "matching activity" is an activity record for the same `plant_id` and the same `window_def_id` as the window. Per-year temporal refinement across occurrences is defined in §6.3.

Group identity (§0.11) does not enter window-state derivation. Each Activity is matched independently per §6.3.

### 0.5 Gate-state enum (final, separate axis)

Four user-facing gate states (Croatian). `open_condition` state is computed for display only (§0.9.2):

- `čeka` — `open_condition` is present and not yet satisfied (waiting on the required prior activity or observation within its `within_days` bound).
- `otvoreno` — `open_condition` is present and satisfied.
- `propušteno` — the window's own occurrence for this `cycle_year` is terminally `missed` or `skipped` (§0.4) AND `open_condition` was never satisfied during the open interval (§6.5). Applies to both gate kinds.
- `ne primjenjuje se` — no `open_condition` is declared on the window, so the gate axis does not apply.

Window state and gate state are computed independently. A window can be `open` with `gate_state = čeka` simultaneously.

### 0.6 Activity MUST-HAVE fields

- `plant_id`, `window_def_id`, `catalog_version`, `action_type`, `status`, `occurred_on`, `recorded_at`.
- `window_def_id` + `catalog_version` are the matching identity (§0.4, §6.3). `action_type` is the required category tag for search and human-readable history; it is NOT identity.
- `window_def_id` must reference a real Action-window definition in the Activity's retained `catalog_version`. Synthetic, null, sentinel, generated-at-write, or label-derived `window_def_id` values are invalid.
- Seasonal actions that share the same `action_type` remain distinct windows when their orchard meaning differs. For example, `Bakar — zimska zaštita`, `Bakar — rano proljeće`, and `Bakar — nakon rezidbe` may all carry `action_type = copper`, but each requires its own stable `window_def_id`. Likewise, `Zimska rezidba` and `Ljetna rezidba` share `action_type = pruning` but are different action windows.
- Absence rule: no activity record ⇒ the action did not happen. No inference from calendar, weather, or context.
- Temporal order rule: `occurred_on ≤ recorded_at`. An Activity claiming an `occurred_on` in the future relative to its `recorded_at` is invalid. Records represent real-world events that have already happened; planned or future-dated captures are rejected at write-time.
- Duplicate rule: two or more Activity records that are identical on meaningful fields (for example same `plant_id`, same `action_type`, same `window_def_id`, same `occurred_on`) MAY legally coexist as separate immutable records. The model does not deduplicate, merge, rewrite, or collapse them. Derivation remains deterministic: one valid matching Activity is sufficient for window-state derivation (§6.3); additional matching records do not create a second derived state. Duplicate presence is part of history, not a reason to mutate records automatically.

#### Runtime Slice 5 Activity provenance shape

For Runtime Slice 5 user-entered Activity records, `provenance` is required and has exactly this persisted shape:

```json
{ "source": "user" }
```

Rules:

- `provenance` MUST be a plain object.
- The only allowed key in Runtime Slice 5 is `source`.
- The only allowed value in Runtime Slice 5 is `source: "user"`.
- No extra keys are allowed.
- Missing, null, string, or array provenance values are invalid.
- `provenance: "user"` is invalid.
- `provenance: { "source": "system" }` is invalid in Runtime Slice 5.
- `provenance: { "source": "user", "extra": true }` is invalid in Runtime Slice 5.
- Slice 5 does not expose provenance as a main UI feature; it records that the Activity was manually entered by the user.
- Import/system/monitoring provenance expansion requires a future owner-approved schema session.

### 0.6a Observation MUST-HAVE fields

- `plant_id`, `catalog_version`, `kind`, `observed_on`, `recorded_at`, `payload`.
- `catalog_version` is the resolution anchor for all catalog-backed references on this Observation (§1.7 monitoring programs, §2 stage vocabulary, §3.2 payload-internal codes that reference the catalog). It is pinned at write-time from the plant's then-current pinned `catalog_version` and is immutable.
- Absence rule: no Observation record ⇒ no observation happened. No inference from calendar, cadence, or context.
- Free-standing rule: `program_id` absent is legal; the Observation is a first-class plant-history entry (§1.7.4 FS-INV).
- Write-time invariant: the Observation's `catalog_version` MUST equal the plant's pinned `catalog_version` at the moment of write. Captures cannot fabricate a version.
- Temporal order rule: `observed_on ≤ recorded_at`. An Observation claiming an `observed_on` in the future relative to its `recorded_at` is invalid. Retroactive logging (`observed_on < recorded_at`) remains legal per §1.7.3 L5; only future-dated observations are rejected.

### 0.6b Runtime Slice 5 Activity applicability and unknown harvest fallback

Runtime Slice 5 Activity writes and imports MUST validate action-window applicability against the selected Plant and retained catalog. UI filtering is not sufficient.

Rules:

- Species-first action-window definitions apply only to matching `plant.species`.
- Variety harvest windows apply only when the Plant has the exact known variety.
- Fallback harvest windows apply only when `plant.variety` is `{ "unknown": true }`.
- A known-variety Plant MUST NOT use a fallback harvest window.
- If `plant.variety` is `{ "unknown": true }` and `plant.ripening_fallback` is a known fallback band, the matching fallback harvest window applies.
- If `plant.variety` is `{ "unknown": true }` and `plant.ripening_fallback` is also `{ "unknown": true }`, use the species `mid` fallback harvest window where the catalog defines one. This is an estimate/fallback, not known variety data.
- If that species has no `mid` fallback harvest window, no harvest window may be assigned from unknown variety + unknown ripening.
- Olive and pomegranate use species-level harvest windows because current V2 treats their timing as species-level; their user-facing olive varieties do not change harvest timing.
- Activity and Correction effective values MUST reject any `window_def_id` / `plant_id` combination that violates these rules.
- UI and Dnevnik display MUST disclose when `mid` ripening was assumed because variety and ripening were both unknown.

Examples:

- unknown plum + unknown ripening -> `aw.plum.fallback.mid.harvest`
- unknown apple + unknown ripening -> `aw.apple.fallback.mid.harvest`
- olive -> `aw.olive.harvest`
- pomegranate -> `aw.pomegranate.harvest`

### 0.6c Correction record persisted shape

Correction records are additive records linked to immutable original records. The exact persisted shape is:

```json
{
  "correction_id": "string",
  "original_record_id": "string",
  "original_record_type": "activity",
  "correction_types": ["date"],
  "corrected_values": {},
  "explanation": "optional string",
  "created_at": "ISO UTC timestamp"
}
```

Field rules:

- `correction_id` is a string identifier.
- `original_record_id` references the immutable original record.
- `original_record_type` is `"activity"` or `"observation"` as the durable vocabulary. Runtime Slice 5 only permits `"activity"` because Observation correction is later-slice scope.
- `correction_types` is a non-empty array with no duplicate values.
- Runtime Slice 5 allowed `correction_types` values are exactly: `"date"`, `"plant"`, `"window"`, `"status"`, `"notes"`.
- `corrected_values` is a plain object.
- `explanation` is optional string user copy for "Bilješka ispravka"; it explains why the correction was made and does not replace Activity `notes`.
- `created_at` is an ISO timestamp string in UTC, generated by the system.

Runtime Slice 5 `correction_types` map to `corrected_values` as follows:

| `correction_types` value | Required `corrected_values` keys |
|---|---|
| `"date"` | `occurred_on` |
| `"plant"` | `plant_id` |
| `"window"` | `window_def_id`, `catalog_version`, `action_type` |
| `"status"` | `status` |
| `"notes"` | `notes` |

Rules:

- Keys in `corrected_values` MUST correspond to `correction_types`.
- No orphan corrected values are allowed.
- No selected correction type may be missing its corrected value.
- If `"window"` is present, `window_def_id`, `catalog_version`, and `action_type` are corrected as one canonical set; `action_type` MUST equal the referenced canonical action-window's `action_type`.
- User does not manually choose `action_type`.
- If `"notes"` is present in Runtime Slice 5, `corrected_values.notes` MUST be a non-empty string. Note removal is deferred to a future owner-approved session.
- A Correction MUST target an original record only. Correction-of-correction is invalid.
- Multiple Corrections may reference the same original record.
- Effective display orders Corrections by `created_at`, then `correction_id`; the latest value per corrected field wins.

### 0.7 Overlay identity rule

- An overlay belongs to exactly one plan instance.
- An overlay stores user edits, not derived state.
- Reconciliation behavior (per-window vs per-field, edit survival across catalog upgrades, `from → to` pairing) is defined in §7.

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
- The plan as a whole does not slide. `open_condition` never moves a window's calendar dates; it affects only gate state (§0.5, §0.9.2).

#### 0.9.2 Open-condition rule

- A window definition may declare an `open_condition` with exactly one of two closed kinds:
  - `requires_prior_activity { prior_action_type, within_days }` — satisfied when any activity for the same plant with `action_type = prior_action_type`, `status = done`, and `occurred_on` within `within_days` of the evaluation date exists. The gate references the `action_type` category (§1.2), not a specific prior window; no cross-window identity is introduced.
  - `requires_observation { observation_type, state, within_days }` — satisfied when an Observation with `kind = observation_type` and the given `state` exists for the plant with `observed_on` within `within_days` of the evaluation date. **`observation_type` is narrowed to `{stage_obs, symptom}` only** (S2.8). Trap, scouting, and note observations are NOT valid `observation_type` values and are NOT formal gate inputs (see DS below).
- `open_condition` is advisory state. It is computed for display as `gate_state` (§0.5); it MUST NOT affect `effective_open` or `effective_close`. Calendar position is governed exclusively by anchor + tolerance + `calendar_bound` (§1.3).
- **Non-blocking rule (lock):** `open_condition` MUST NOT be consulted by any write path. Activity logging and observation logging MUST succeed regardless of gate state. Gate state is recomputed on read.
- If `open_condition` is absent, `gate_state = ne primjenjuje se`.
- Terminal-gate fallback for both kinds is defined in §6.5.
- Forbidden gate logic (reinforcement): `open_condition` MUST NOT express forecast-based, numeric-threshold, compound multi-factor, absence-as-evidence, user-intent, or projected-time conditions. The `kind` set is closed; no third variant may be introduced without a locked-document amendment.

**Decision-support scope (DS) — S2.8:**

- **DS1.** `open_condition` is the ONLY structural gate mechanism in the model. It admits exactly `requires_prior_activity` and `requires_observation({stage_obs | symptom}, state, within_days)`. Both shapes produce a deterministic boolean from catalog-defined predicates over recorded evidence. `kind = note` is never a valid `open_condition.requires_observation.observation_type`.
- **DS2.** `open_condition` does NOT cover, and MUST NOT be extended to cover:
  - **Trap counts** (`observation.kind = trap`). No `state` enum exists on `trap` payload; no threshold DSL exists; `requires_observation(trap, ...)` is forbidden.
  - **Scouting findings** (`observation.kind = scouting`). No threshold DSL; `requires_observation(scouting, ...)` is forbidden.
  - **Free-standing notes** (`observation.kind = note`). Notes have only `payload.text`; they are not formal gate evidence and `requires_observation(note, ...)` is forbidden.
  - **Trend or rate-of-change** across observations. Not a formal gate.
  - **Composite conditions.** No AND/OR across observation types; at most one `requires_observation` and at most one `requires_prior_activity` per window definition.
  - **Weather-derived gates.** Weather is advisory per Principle 3 and MUST NOT become a gate input.
- **DS3.** Decision support for pest treatments flows from Observation history, action-window `notes` (§1.2), and monitoring program display (§1.7). These are UI surfaces the grower reads; they are not automated.
- **DS4.** A future agent reading the S2.8 amendment MUST NOT assume that "all pest-treatment logic is now solved by formal gates." Concretely forbidden future work:
  1. Adding a threshold DSL to `requires_observation` payload to admit trap/scouting inputs.
  2. Introducing derived "pressure" or "recommendation" state from any combination of evidence.
  3. Auto-opening or auto-closing action-windows based on evidence not declared in `open_condition`.
  4. Treating the absence of `open_condition` as equivalent to "no decision context needed" — the absence means decision context lives in notes + history + monitoring display, not in automation.
- **DS5.** Scope of `open_condition` at gate-authoring time is bounded by DS1–DS4 and §1.2 — specifically, `open_condition` admits only the closed `kind` set (`requires_prior_activity`, `requires_observation` with `observation_type ∈ {stage_obs, symptom}`). The model does not define the curator process by which an author decides whether to declare a gate for a given window; that process is governed by `V2_CATALOG_AUDIT.md §3` (audit-never list) and `V2_CATALOG_AUDIT.md §2.2` (signal table). The domain document does not duplicate audit-process rules.

#### 0.9.3 Monitoring vs symptom

- Both paths produce records of the same entity: `Observation`.
- `kind = trap | scouting | stage_obs` represent monitoring.
- `kind = symptom` represents user-initiated problem observation.
- `kind = note` represents a minimal free-standing text observation. It is not monitoring, not symptom/problem registry data, not stage evidence, and not treatment advice.
- The system MUST NOT require any monitoring observation as a prerequisite for handling a symptom. Symptom records surface relevant action windows immediately.
- Neither path authors recommendations. Both deterministically surface windows; the user decides.

#### 0.9.4 Derived state (plain language)

- The system never writes "this plant is 60% done". There is no stored status field.
- Every render recomputes window state and gate state from: today's date, pinned catalog version, overlay, activity records, observations, and the locked rules.
- Adding a missing activity later changes the displayed state because the same rules now see different inputs — not because state was "updated".
- State is a view, not a record. This is what makes the system deterministic and auditable.

#### 0.9.5 Record-integrity timing rule

Referential-integrity validation for every persistent record (Activity §0.6, Observation §0.6a) is a **write-time invariant**. It is evaluated once, at write, against the record's own `catalog_version`. Once the record is written:

- The record's referential-integrity status is frozen for the lifetime of the record.
- Subsequent catalog upgrades (pinning the plant to a newer `catalog_version`) never retroactively invalidate the record.
- Read-time renderers (history, program cards, plan state) resolve the record's catalog-backed references against the record's own `catalog_version`, retrieving whichever catalog version is needed from the catalog version store.

The domain model therefore requires the catalog version store to retain every `catalog_version` that is referenced by any existing record. The mechanism and schema of the catalog version store are architecture concerns (`V2_ARCHITECTURE.md`); the domain invariant is that the retention exists.

---

### 0.10 Deferred to S2.x

*Empty. Launch species list resolved by S2.8 owner decision (§9).*

### 0.11 Group-identity rule

Activity records (§0.1 item 5) and Observation records (§0.1 item 6) each carry an optional group identifier (`activity_group_id?`, `observation_group_id?`). Grouping has the following locked semantics:

1. **Per-plant atomicity preserved.** Activity remains per-plant (singular `plant_id`). Observation remains per-plant. Grouping does NOT create a multi-plant record type; it marks that multiple per-plant records were produced by one real-world capture event.

2. **Opaque identifier.** The group id is an opaque string identifier. Non-empty when present. It carries no semantics beyond "these records were captured together." Stability and uniqueness follow the primitive definition in §1.5.

3. **Immutability.** The group id inherits the record's immutability. Once written, it cannot be changed, added, or removed.

4. **No runtime coupling.** Window-state derivation (§0.4), gate-state derivation (§0.5), activity-to-occurrence matching (§6.3), program-state derivation (§6.8), and open-condition evaluation (§0.9.2) MUST NOT consult the group id. Every record in a group is evaluated independently. Grouping is display and query only.

5. **Minimum group invariants — Activity group.** All Activity records sharing an `activity_group_id` MUST share:
   - `occurred_on` (one real-world pass happens on one date).
   - `action_type` (one pass is one kind of action; a mixed-action session produces separate groups, not one).

   They MAY differ on:
   - `plant_id` (expected to differ — this is the reason grouping exists).
   - `catalog_version` (plants may be pinned to different versions; cross-version groups are legal).
   - `window_def_id` (follows from `catalog_version` differences, since window_def_ids are catalog-scoped; equality within a single catalog version is typical but not required).
   - `status` (per-plant outcome decided by the grower within the single capture flow; e.g. two plants `done`, two plants `skipped` in one copper-spray decision moment).

   They MUST NOT share `activity_id` (always unique per record).

   **Runtime Slice 5 stricter group profile.** Runtime Slice 5 uses one real-world action window and one status per multi-plant capture. All Activity records sharing one `activity_group_id` in Slice 5 MUST share `window_def_id`, `catalog_version`, `action_type`, `occurred_on`, `recorded_at`, and `status`. They differ by `activity_id` and `plant_id`. A future owner-approved session may reopen per-plant status or cross-version grouping inside one capture, but Slice 5 validators MUST reject grouped Activities with mixed window, catalog version, action type, occurred date, recorded timestamp, or status.

6. **Minimum group invariants — Observation group.** All Observation records sharing an `observation_group_id` MUST share:
   - `observed_on` (one capture event on one date).
   - `kind` (all trap, all scouting, all stage_obs, all symptom, or all note — never mixed).
   - `program_id` (same value across all members; the all-`null` case — every member free-standing — is legal).

   They MAY differ on:
   - `plant_id`.
   - `catalog_version`.
   - `payload` fields (per-plant counts, measurements, stage observations, symptom notes).

   They MUST NOT share `observation_id`.

7. **Group creation is capture-time only.** A group identifier MAY be assigned only by a single capture flow producing an atomic write batch. Once records are written, the group id is immutable (inherits record immutability per item 3). No retroactive group assembly, no external-system group creation, no migration-time grouping, no post-hoc "link these records" action, no UI action that adds records to an existing group. Groups originate at capture or not at all.

8. **Partial execution.** If a real-world capture covers N of M plants, exactly N records are produced (all sharing the group id). The remaining M−N plants produce no record; their derived state is unaffected. A grower who continues the same real-world action later (e.g., spraying the remaining 2 of 4 plants the next day) produces a NEW group — a new capture event is a new group, never an extension of an earlier one (per item 7).

9. **Disjoint namespaces.** `activity_group_id` and `observation_group_id` are disjoint identifier namespaces. An Activity never shares an id with an Observation; a real-world capture that produces both an Activity and an Observation uses two distinct group ids if grouping is needed at all.

10. **Display / query semantics.** History display MAY surface a group as one user-visible event collapsing the per-plant records; the model does not dictate display behavior. Queries MAY filter by group id; group membership is determined solely by the stored identifier, not by heuristic timestamp/type matching.

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

S2.1 identity: `window_def_id`, `catalog_id`, `action_type`, `label`, `anchor`, `tolerance`, `open_condition?`.

S2.2 specifies shape and adds fields:

| Field                 | Type / shape                                                                                                          | Cardinality | Semantics                                                                                                             |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------|-------------|-----------------------------------------------------------------------------------------------------------------------|
| `action_type`         | string from the controlled vocabulary: `oil`, `copper`, `fungicide`, `insecticide`, `pruning`, `monitoring`, `irrigation`, `harvest`, `fertilization`, `other` | required    | Category tag for filtering and display. Activity records carry a copy for history. Not window identity. **`monitoring` is reserved exclusively for monitoring-device installation (trap, sticky plate) and MUST be referenced by at least one `monitoring_program.setup_window_def_id` (§1.7). Orphan `monitoring` action-windows are validation errors (§1.6.2). Non-monitoring preparation work (netting, frost protection) MUST use `other`, not `monitoring`.** |
| `label`               | string                                                                                                                | required    | Human-readable window label (e.g. "Bakar na rane nakon rezidbe"). May change across catalog versions; `window_def_id` remains stable. |
| `anchor`              | `{ kind: "phenology", stage_code: string }` OR `{ kind: "calendar", month_day_open: MD, month_day_close: MD }`        | required    | Agronomic origin. Phenology is primary (Principle 2); calendar is fallback.                                           |
| `calendar_bound`      | `{ not_before?: MD, not_after?: MD }`                                                                                 | optional    | Absolute-date guard. Only meaningful when `anchor.kind = "phenology"`. Forbidden when `anchor.kind = "calendar"`.     |
| `tolerance`           | `{ before: duration, after: duration }`                                                                               | required    | Relative-duration sizing around the anchor. Distinct axis from `calendar_bound`.                                      |
| `open_condition`      | `{ kind: "requires_prior_activity", prior_action_type: action_type vocab, within_days: integer ≥ 1 }` OR `{ kind: "requires_observation", observation_type: "stage_obs" \| "symptom", state: string, within_days: integer ≥ 1 }` | optional    | Advisory gate per §0.9.2. Display-only; never blocks logging. No cross-window identity. `kind` set is closed. `observation_type` narrowed to `{stage_obs, symptom}` in S2.8.   |
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
- Two Action-window definitions in the catalog share the same `window_def_id`.
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
- `action_type` is not in the controlled vocabulary declared in §1.2.
- `label` is absent or empty.
- `open_condition.kind` is not exactly one of `requires_prior_activity` or `requires_observation`.
- `open_condition.kind = requires_prior_activity` and `prior_action_type` is not in the §1.2 controlled vocabulary.
- `open_condition.kind = requires_observation` and `observation_type` is not in `{stage_obs, symptom}` (narrowed in S2.8; §0.9.2 DS2).
- `open_condition.kind = requires_observation` and `state` is absent or empty.
- `open_condition.within_days` is absent or not an integer ≥ 1.
- No third variant of `open_condition.kind` may be introduced without a locked-document amendment.
- `action_type = monitoring` and no `monitoring_program` in the same catalog references this `window_def_id` as its `setup_window_def_id` (orphan monitoring action-window; §1.2, §1.7).

#### 1.6.3 Forbidden ambiguity

- `anchor.kind` must be exactly one of `phenology` or `calendar`.
- `calendar_bound` is an absolute-date guard only; it MUST NOT be used to express relative tolerance (use `tolerance` for that).
- No implicit defaults beyond the provenance fallback rule in §1.4. Missing required fields are validation errors.

#### 1.6.4 Group-identifier validation

An Activity is invalid if `activity_group_id` is present and is an empty string or non-string. An Observation is invalid if `observation_group_id` is present and is an empty string or non-string. A record with the field absent is valid; grouping is optional.

**Cross-record group-invariant validation.** For any set of Activity records sharing the same `activity_group_id`, all members MUST satisfy the invariants in §0.11 item 5 (`occurred_on` equal, `action_type` equal). For any set of Observation records sharing the same `observation_group_id`, all members MUST satisfy the invariants in §0.11 item 6 (`observed_on` equal, `kind` equal, `program_id` equal; the all-`null` case is legal). A write batch that would produce records violating these invariants is rejected atomically — all records in the batch fail or all succeed. Because groups are capture-time only (§0.11 item 7) and records are immutable, write-time validation is sufficient; no retroactive enforcement is needed, and no post-hoc record can drift the group's invariants.

Runtime Slice 5 validation additionally applies the stricter profile in §0.11 item 5: grouped Activity records must share `window_def_id`, `catalog_version`, `action_type`, `occurred_on`, `recorded_at`, and `status`.

### 1.7 Monitoring program — locked (S2.8)

A **monitoring program** is a catalog-authored declaration of a season-long informational campaign for a specific pest/target on a plant. It is a child collection of the catalog template, parallel to `action_window_definitions`. Programs are not action-windows; they are a separate entity kind with their own state axis (§6.8).

Programs exist because monitoring is **evidence gathering**, not task completion. A trap or scouting campaign runs across weeks; its purpose is to inform grower decisions, not to be "done" once. Modeling monitoring as action-windows produces incorrect state (single-completion against a campaign that should remain open all season). Programs solve this by decoupling monitoring from `§0.4` window-state semantics.

#### 1.7.1 Monitoring program — MUST-HAVE fields

| Field                  | Type / shape                                                                           | Cardinality | Semantics                                                                                                                                                                                                                                                                                        |
|------------------------|----------------------------------------------------------------------------------------|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `program_id`           | string identifier                                                                      | required    | Opaque, stable, non-empty. Unique within this catalog's programs.                                                                                                                                                                                                                                 |
| `catalog_id`           | string identifier                                                                      | required    | Parent catalog identity.                                                                                                                                                                                                                                                                          |
| `label`                | string                                                                                 | required    | Human-readable program label (e.g. "Jabučni savijač — feromonska klopka"). May change across catalog versions; `program_id` remains stable.                                                                                                                                                      |
| `target_code`          | string identifier                                                                      | required    | Pest or scouted target identifier. Opaque (catalog pest registry deferred). Observations carry a matching `target_pest_code` (kind=trap) or `target_code` (kind=scouting) per §3.2 which must equal this value when the Observation attaches to this program.                                    |
| `method`               | `{ kind: "trap" | "scouting" }`                                                        | required    | Closed enum. `trap` = physical device (pheromone trap, sticky plate). `scouting` = visual inspection without device.                                                                                                                                                                              |
| `setup_window_def_id`  | string identifier (window_def_id)                                                      | conditional | **REQUIRED when `method.kind = "trap"`.** References an `action_window_definition` in the same catalog whose `action_type = monitoring` — the one-shot install action. **FORBIDDEN when `method.kind = "scouting"`** (no physical device exists).                                                |
| `season_start`         | MD (month-day)                                                                         | required    | Start of the program's annual active season. Resolved per cycle_year with `cycle_year = year(season_start)` for that occurrence.                                                                                                                                                                  |
| `season_end`           | MD (month-day)                                                                         | required    | End of the program's annual active season. `season_start < season_end` within the same calendar year (programs crossing Dec 31 are out of scope per §6.4 cross-year rejection).                                                                                                                   |
| `cadence`              | `duration`                                                                             | optional    | Suggested interval between observations (display advisory per §6.8 rule S3). ABSENT is legal — a program without cadence is valid; it produces no cadence display.                                                                                                                               |
| `notes`                | string                                                                                 | optional    | Free-form agronomic context for the grower — purpose of campaign, threshold hints, target lifecycle. Rendered in UI as part of decision support (per §0.9.2 DS3).                                                                                                          |
| `author`               | string identifier                                                                      | optional    | Per-program provenance override. When absent, inherits catalog's `author` per §1.4.                                                                                                                                                                                                               |
| `evidence_source`      | string                                                                                 | optional    | Per-program provenance override.                                                                                                                                                                                                                                                                  |
| `last_reviewed_on`     | ISO date                                                                               | optional    | Per-program provenance override.                                                                                                                                                                                                                                                                  |

#### 1.7.2 Boundary rules

- **B1.** Installing a monitoring device is an Activity record (§0.1 item 5) completing the program's setup action-window. It is NEVER an Observation. If a grower wants to record an initial count at install time, that is a separate Observation record.
- **B2.** `setup_window_def_id` MUST be absent when `method.kind = "scouting"`. Validation error otherwise.
- **B3.** A single setup action-window MAY be referenced by multiple monitoring programs. Each `monitoring_program` with `method.kind = "trap"` MUST reference exactly one `setup_window_def_id`. A single install Activity closes the shared setup window; each referencing program independently tracks observations via its own `program_id`. Cross-catalog-version reconciliation (what happens when a later catalog version splits a shared setup into per-program setups, or merges per-program setups into a shared one) is governed by `V2_ARCHITECTURE.md §3` (overlay and reference reconciliation) and is out of scope for this model document.
- **B4.** A program MAY have no setup at all (scouting case, per B2). The grower's first event for that program is an Observation, not an Activity.
- **B5.** An `action_window_definition` with `action_type = monitoring` MUST be referenced by at least one program's `setup_window_def_id`. Orphan monitoring action-windows are catalog validation errors (§1.6.2). Non-monitoring preparation work uses `action_type = other`.

#### 1.7.3 `program_id` lifecycle on Observations

- **L1.** `program_id` on an Observation (§0.1) is a user-asserted field set at capture time. The model MUST NOT derive or infer `program_id` from `payload.target_pest_code`, `payload.target_code`, the plant's declared programs, or any heuristic.
- **L2.** `program_id` is OPTIONAL on every Observation. When capture UI presents the observation as attached to a specific program (grower taps "Log check" on a program card), UI discipline sets `program_id`. The model does not enforce the coupling; ad-hoc observations legitimately omit `program_id` and are free-standing.
- **L2a.** `kind = note` is an explicit exception to optional attachment: note Observations are free-standing-only and MUST store `program_id = null`.
- **L3.** When present, `program_id` MUST:
  - resolve to a `program_id` declared in the plant's pinned catalog's monitoring programs,
  - match the Observation's `kind` to the program's `method.kind` (`kind = trap` ↔ `method.kind = "trap"`; `kind = scouting` ↔ `method.kind = "scouting"`),
  - match the Observation's payload target (`payload.target_pest_code` for `kind = trap`; `payload.target_code` for `kind = scouting`) to the program's `target_code`.
- **L4.** `program_id` is immutable per Observation immutability (§0.1). No correction or reassignment. A mistaken attachment is addressed by recording a new Observation and annotating history externally.
- **L5.** Retroactive logging (`observed_on < recorded_at`) is permitted. Program attachment and `cycle_year` derive exclusively from `observed_on`; `recorded_at` is never consulted for membership.
- **L5a. Attachment rule (deterministic).** When an Observation carries `program_id` for program P, the Observation attaches to cycle_year Y if and only if `observed_on` lies within the closed interval `[season_start(P, Y), season_end(P, Y)]`, where `season_start` and `season_end` are resolved from the program definition at the Observation's own `catalog_version` and projected onto calendar dates for year Y.
  - Exactly one cycle_year satisfies this → attaches to that cycle_year.
  - Zero cycle_years satisfy this → see L5b.
  - Two or more cycle_years satisfy this → the grower's explicit `program_id` + `observed_on` combination must resolve to exactly one. Catalog overlap within the same program's own season is a catalog bug; reject at capture and flag for owner review.
- **L5b. Outside-season disposition.** If `observed_on` falls within no cycle_year's `[season_start, season_end]` (closed, per L5a) for the referenced program, the Observation MUST be stored with `program_id = null` (free-standing). The capture UX MUST surface a neutral disclosure to the grower at capture time (UI copy per `V2_UX_MODEL.md §0.2`). The model MUST NOT reject the capture, MUST NOT auto-shift `observed_on`, MUST NOT attach to an adjacent cycle_year, and MUST NOT discard the Observation.
- **L5c. No grace period.** The attachment interval is closed on both ends; it admits no tolerance beyond the declared endpoints. `season_end = June 20` means June 20 IS the last day on which an Observation attaches to this cycle_year; June 21 is outside. Catalog authors who want to extend the active season must adjust `season_end` explicitly; the model does not add buffer days.
- **L6. Overlapping programs, same target.** If catalog declares two programs with overlapping seasons and related targets (e.g., one program ending while another program for the same pest begins), an Observation recorded during the overlap requires an explicit `program_id` choice. Capture UI MUST prompt the grower. If `program_id` is omitted under overlap, the Observation is stored free-standing (per L5b logic; no auto-partition).
- **L7. Legacy / imported observations.** Observations imported from pre-V2 data or external sources may have `program_id` absent. This is legal; the Observation is treated as free-standing permanently. No process may retroactively assign `program_id` (reaffirmed in §1.7.7).

#### 1.7.4 Free-standing observations — model invariant (FS-INV)

Free-standing Observations (Observations with `program_id = null` or absent) are permanently disjoint from any monitoring program's evidence set. This is a **model integrity invariant**, not a rule that future work may relax, optimize, or override. Changes to this invariant require an explicit model-level re-charter, not a routine amendment.

- **FS1.** A free-standing Observation is a valid, first-class history entry on the plant. Visible in plant history chronologically alongside all other activities and observations. Stored with identical fields and immutability as any other Observation.
- **FS2.** A free-standing Observation is NOT incomplete, NOT pending attachment, NOT an error, NOT second-class.
- **FS3.** FS-INV applies to every system layer:
  - **Runtime** (plan-state derivation, UI rendering, `open_condition` evaluation, program-state computation): MUST NOT treat a free-standing Observation as a program's evidence under any circumstance.
  - **Migration** (catalog version bumps, schema upgrades, legacy imports, data exports/re-imports): MUST NOT re-link a free-standing Observation to a program by any mechanism — target match, date proximity, payload similarity, heuristic, or ML.
  - **Analytics / telemetry / reporting**: MUST NOT count free-standing Observations in any program-scoped metric or dashboard.
  - **AI or ML layers**: MUST NOT use free-standing Observations as training signal, inference input, or recommendation basis in any program-scoped context.
  - **Audit and curation tooling**: MUST NOT suggest attaching a free-standing Observation to a program, even as a curator-approved action. Attachment is permanently impossible per L4 immutability + FS-INV.
- **FS4.** Payload coincidence does not breach FS-INV. Even when a free-standing Observation's payload would syntactically satisfy an `open_condition` predicate — same `target_code`, same timing window — FS-INV forbids its use as gate input. Disjointness is explicit via `program_id = null`, not inferred from payload.
- **FS5.** UI: plant history view shows free-standing Observations with neutral visual treatment identical to program-attached Observations. Optionally, UI may render a small marker "not linked to a monitoring program" — informational, never warning styling. Program card views NEVER show free-standing Observations.

#### 1.7.5 Program-state enum — closed (S2.8)

Program state per `(plant_id, program_id, cycle_year)` is derived per §6.8 and is exactly one of:

- `pre_season` — `today < season_start` for this cycle_year.
- `active` — `season_start ≤ today < season_end` for this cycle_year.
- `ended` — `today ≥ season_end` for this cycle_year.

No other values exist. The enum is closed at three values. The model MUST NOT introduce `overdue`, `stale`, `warning`, `missed`, `done`, `skipped`, or any value implying judgment about observation presence, cadence compliance, or campaign quality. Program state is a separate axis from window state (§0.4) and gate state (§0.5); the three axes are orthogonal.

#### 1.7.6 Neutrality rule — S2.8

Lack of Observations during `active` or `ended` state is **neutral**. The model does NOT interpret observation absence as failure, incompleteness, or any negative condition.

- **S1.** `active` with zero observations is a valid, unremarkable display state.
- **S2.** `ended` with zero observations is a valid, unremarkable terminal state. It is NEVER labeled `missed`, `failed`, or equivalent in any system-authored text.
- **S3.** A gap between observations (regardless of length) produces NO alarm state, color-coded warning, or badge. `cadence` is **display-only**; "time since last observation" is a display-derived value, never a state. An "overdue" signal MUST NOT be derived from `today - last_observation.observed_on > cadence.value`.
- **S4.** UI translation discipline (enforced in S6–S7 per V2_UX_MODEL.md):
  - `pre_season` → time-forward-looking language ("počinje <date>", "starts <date>"), never judgmental.
  - `active` → present-state language ("aktivno", "active"), never with cadence-derived qualifiers like "aktivno, kasnite" ❌.
  - `ended` → past-state language ("završeno", "ended"), never judgment-laden ("završeno, propušteno" ❌).
  - "Bez zapisa" / "no records" is a neutral descriptor, never an error.
- **S5.** Forbidden derived judgments — the model and every downstream layer MUST NOT:
  - Compute "N programs missed this season" (counting `ended` states with zero observations).
  - Compute "you've skipped M checks" (counting cadence intervals without observations).
  - Display "attention: no trap data for N days" (alarm based on cadence drift).
  - Expose any KPI, dashboard widget, or status line that treats observation absence as a performance signal.

These S1–S5 rules extend to analytics, telemetry, and any reporting layer. See §1.7.6.a below.

#### 1.7.6.a Analytics neutrality boundary

The neutrality rule (S1–S5) extends to the analytics, telemetry, and reporting layer at hard-boundary force. Forbidden across all measurement surfaces:

- **By observation presence:** "programs with at least one observation," "observation-logging activation rate," "users who recorded monitoring data."
- **By observation absence:** "programs with zero observations," "monitoring gaps per plant," "programs ending without evidence," "inactive monitoring count."
- **By observation frequency:** "average observations per program," "active monitoring rate," "monitoring cadence compliance," "coverage percentage," "engagement score" from any of the above.

The rule binds on **semantics, not vocabulary**. A metric renamed to avoid forbidden tokens is still forbidden if its meaning matches one of the above categories. Analytics may legitimately measure non-monitoring-scoped things (overall usage, crash rates, non-monitoring feature adoption, aggregate catalog structure statistics).

#### 1.7.7 Free-standing re-statement (no reinterpretation)

Reaffirmed here for adjacency with program rules: no process — runtime, migration, audit, analytics, or AI — may reinterpret a free-standing Observation as program evidence (FS-INV, §1.7.4). The disjointness is explicit, permanent, and invariant. Payload match is not an exception; ML inference is not an exception; curator-approved reattachment is not an exception.

#### 1.7.8 Validation rules (monitoring program)

Validation rules for monitoring programs:

- Any required `monitoring_program` field missing (§1.7.1).
- `program_id` is not unique within a catalog.
- `method.kind` is not exactly one of `{"trap", "scouting"}`.
- `method.kind = "trap"` and `setup_window_def_id` is absent.
- `method.kind = "scouting"` and `setup_window_def_id` is present.
- `setup_window_def_id` is present and does not resolve to an `action_window_definition` in the same catalog with `action_type = monitoring`.
- `season_start` or `season_end` absent; or `season_start > season_end` rejected (this catches every cross-year / wrap-around catalog entry, e.g., Dec 15 > Feb 15 → reject, mirroring §6.4 cross-year window rejection; the closed-interval attachment rule in §1.7.3 L5a admits legitimate one-day seasons with `season_start == season_end`).
- `cadence.value` present and not an integer ≥ 1.
- Two `monitoring_program` records MAY declare overlapping seasons when they represent distinct monitoring contexts for the same target. Such programs MUST have distinct `program_id` and MUST be independently selectable by the grower.

**Timing.** Validation of each rule below is a write-time invariant per §0.9.5; once written, an Observation's referential-integrity status is frozen against its own `catalog_version`.

An Observation is invalid at the referential-integrity layer if:

- `catalog_version` is absent, or at write-time does not equal the plant's pinned `catalog_version`.
- `program_id` is present and does not resolve in the `monitoring_program` set of the catalog at the Observation's own `catalog_version`.
- `program_id` resolves but the program's `method.kind` does not match the Observation's `kind`.
- `program_id` resolves but the program's `target_code` does not match the Observation's payload target (`payload.target_pest_code` for `kind = trap`; `payload.target_code` for `kind = scouting`).
- `program_id` is present but `observed_on` does not lie within any cycle_year's `[season_start, season_end]` for the referenced program at the Observation's own `catalog_version` (per L5b, the capture flow MUST NOT produce such a record; it produces a free-standing record instead).

#### 1.7.9 Non-scope — S2.8

S2.8 monitoring-program scope explicitly EXCLUDES:

- Threshold DSL for trap/scouting payload.
- Auto-computed "pressure," "severity," or "recommendation" state.
- Cross-plant pressure inference ("high counts on neighbor plant suggest pressure here").
- AI-authored or AI-assisted monitoring recommendations (already forbidden by Principle 5; reaffirmed).
- Automatic catalog-version upgrade of historical Observations (Observations are immutable; upgrades produce new entities).
- Program cadence compliance tracking of any form.
- Any analytics or telemetry metric derived from observation presence/absence/frequency (per §1.7.6.a).

Any future proposal to introduce any of the above requires an explicit new session with a charter document; it does not reach the model through incremental amendment.

#### 1.7.10 Terminology

The model document MUST NOT refer to numbered reproductive or lifecycle cycles of a pest within a season, in any language or form. This rule binds on meaning, not on specific tokens; renaming forbidden phrasing to avoid particular wording is still forbidden when the meaning matches.

Where two monitoring programs target the same pest at different points within a season, the model refers to them as **consecutive monitoring programs for the same pest**, or (for transition contexts) as **one program ending while another program for the same pest begins**.

This terminology restriction applies to model prose, examples, and validation messages. It does not impose naming rules on technical identifiers beyond the existing uniqueness and validation requirements.

This is a model-document terminology rule. UI copy guidance lives in `V2_UX_MODEL.md`.

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
| `source_entry_id`  | string identifier | required for S8 Step 4a free-standing trap capture | Resolves to one entry in bounded `trap_capture_sources[]` (§3.2.1a). |
| `target_pest_code` | string identifier | required    | Pest the trap targets. Opaque in S2.4 (catalog registry deferred).          |
| `count`            | integer ≥ 0       | required    | Number of captures found at this observation.                               |

`trap_id` is intentionally not included in S2.4 — the Trap entity lifecycle is deferred. A trap reference field can be added additively when the Trap entity is locked.

#### 3.2.1a S8 Step 4a free-standing trap capture source map

Runtime Slice 8 Step 4a implements a minimal trap capture path only.

Step 4a trap Observations are:

- one-plant only;
- Plant-detail-only;
- free-standing only;
- stored with `program_id = null`;
- factual count evidence only;
- not monitoring-program evidence;
- not a diagnosis, treatment recommendation, threshold result, pressure score, severity score, weather automation input, compliance signal, or automatic action trigger.

Step 4a uses a bounded source map:

```text
trap_capture_sources[]
```

`trap_capture_sources[]` is sourced from `V2_ORCHARD_PLAN_TEMPLATES.md`, limited to explicitly trap-backed rows, and used only for S8 Step 4a trap Observation validation/display. It is a closed list, not a broad target/pest registry, not a pest ontology, not a diagnosis target registry, not a symptom registry, not a stage vocabulary, and not a replacement for plan templates. It does not auto-promote plan-template targets into reusable catalog vocabulary.

Each source-map entry has:

```text
source_entry_id
source_row
species
projected_id
method_kind = "trap"
target_label_hr
local_trap_target_code
window, if source-backed
```

Rules:

- `source_entry_id` is the primary plan-template traceability key.
- `projected_id` may be retained only for B2 display/source traceability.
- `projected_id` is NOT the pest/target identifier.
- `target_pest_code` in a Step 4a trap Observation MUST equal the selected source entry's `local_trap_target_code`.
- `target_pest_code` resolves only inside `trap_capture_sources[]` for Step 4a.
- Unknown `source_entry_id` values fail closed.
- Mismatched `source_entry_id` / `target_pest_code` pairs fail closed.
- Display labels are resolved from retained source-map context; Step 4a Observations MUST NOT persist `target_label` in payload.
- Optional note text is out of scope unless explicitly added in a later owner-approved patch.

Approved initial Step 4a source entries:

| `source_entry_id` | Source row | Species | `projected_id` traceability | `local_trap_target_code` | `target_label_hr` | Source-backed window |
|---|---:|---|---|---|---|---|
| `trap_source_337` | 337 | `apple` | `apple_codling_moth_trap_monitoring` | `trap_source_337_target` | `Jabučni savijač (Cydia pomonella)` | 4/25-8/15 |
| `trap_source_654` | 654 | `sweet_cherry` | `cherry_fly_sticky_trap_monitoring` | `trap_source_654_target` | `Trešnjina muha` | 4/25-6/20 |
| `trap_source_860` | 860 | `sour_cherry` | `cherry_fly_sticky_trap_monitoring` | `trap_source_860_target` | `Trešnjina muha (Rhagoletis cerasi)` | 4/25-7/10 |
| `trap_source_1596` | 1596 | `plum` | `plum_moth_spring_trap_monitoring` | `trap_source_1596_target` | `Šljivin savijač / Cydia funebrana` | 4/25-6/15 |
| `trap_source_1643` | 1643 | `plum` | `plum_moth_summer_trap_monitoring` | `trap_source_1643_target` | `Šljivin savijač` | 6/15-8/31 |
| `trap_source_2455` | 2455 | `olive` | `olive_fly_sticky_trap_monitoring` | `trap_source_2455_target` | `Maslinova muha (Bactrocera oleae)` | 6/1-9/30 |
| `trap_source_2949` | 2949 | `walnut` | `walnut_fly_sticky_trap_monitoring` | `trap_source_2949_target` | `Orahova muha (Rhagoletis completa)` | 7/1-9/15 |
| `trap_source_2977` | 2977 | `walnut` | `walnut_codling_moth_trap_monitoring` | `trap_source_2977_target` | `Jabučni savijač na orahu (Cydia pomonella)` | 5/1-8/15 |

Rows `516`, `1064`, and `1228` remain out of scope for first Step 4a because their source text and current B2 handling preserve trap/scouting ambiguity. All scouting rows, symptom rows, stage observations, program-attached observations, and multi-plant structured capture are out of scope.

Step 4a payload shape:

```text
kind = "trap"
program_id = null
payload = {
  source_entry_id: string,
  target_pest_code: string,
  count: number
}
provenance = { source: "user" }
```

#### 3.2.2 `scouting`

| Field         | Type                                                                                | Cardinality | Semantics                                                                    |
|---------------|-------------------------------------------------------------------------------------|-------------|------------------------------------------------------------------------------|
| `target_code` | string identifier                                                                   | required    | What is being scouted for. Opaque in S2.4.                                   |
| `finding`     | `{ mode: "count", value: integer ≥ 0 }` OR `{ mode: "presence", value: boolean }`   | required    | Primary observation. Mode declared at capture; not inferred.                 |

#### 3.2.3 `stage_obs`

| Field        | Type              | Cardinality | Semantics                                                                                          |
|--------------|-------------------|-------------|----------------------------------------------------------------------------------------------------|
| `stage_code` | string identifier | required    | Phenological stage reached. MUST resolve in the plant's pinned catalog `stage_vocabulary` (S2.3) for the future phenology-aware path, OR in the bounded Step 5a `stage_diary_vocabulary[]` (§3.2.3a) for S8 Step 5a free-standing diary capture. |

No other fields. The date the stage was reached is `observation.observed_on` (S2.1 §0.1), not a payload field.

#### 3.2.3a S8 Step 5a minimal stage diary observation

Runtime Slice 8 Step 5a implements a minimal stage diary capture path only.

Step 5a diary stage Observations are:

- one-plant only;
- Plant-detail-only;
- free-standing only;
- stored with `program_id = null`;
- factual diary evidence only;
- not phenology-engine evidence;
- not BBCH evidence;
- not per-species phenology;
- not a plan recalculation trigger;
- not a stage registry;
- not a diagnosis, treatment recommendation, threshold result, pressure score, severity score, weather automation input, compliance signal, or automatic action trigger.

Step 5a uses a bounded diary vocabulary:

```text
stage_diary_vocabulary[]
```

`stage_diary_vocabulary[]` is a closed, owner-approved list used only for S8 Step 5a diary `stage_obs` validation/display. It is not a broad stage registry, not a BBCH model, not a per-species phenology model, not the catalog `stage_vocabulary[]` of §2.3, and not a plan-template stage source. It does not auto-promote diary entries into reusable catalog stages.

Each entry has:

```text
stage_code
label_hr
```

Rules:

- `stage_code` is the durable diary identifier.
- `label_hr` is the Croatian display label rendered by Dnevnik / plant history.
- `stage_code` for a Step 5a diary Observation MUST equal one entry's `stage_code` in `stage_diary_vocabulary[]`.
- Unknown `stage_code` values fail closed.
- Display labels are resolved from `stage_diary_vocabulary[]`; Step 5a Observations MUST NOT persist `label_hr` or any other label in payload.
- Optional note text is out of scope unless explicitly added in a later owner-approved patch.

Approved Step 5a diary entries:

| `stage_code` | `label_hr` |
|---|---|
| `dormant` | Mirovanje |
| `bud_swell` | Pupovi bubre |
| `bloom_started` | Cvatnja počela |
| `bloom_finished` | Cvatnja završila |
| `fruit_set` | Formiranje ploda |
| `color_change` | Plod mijenja boju |
| `ripening` | Dozrijevanje |
| `harvest` | Berba |
| `leaf_fall` | Opadanje lista |

This list is a Step 5a diary vocabulary only. It is not BBCH, not species-specific, not a plan recalculation vocabulary, and does not update, reschedule, unlock, block, or complete any plan item. A future owner-approved session may refine, replace, or extend this vocabulary.

Step 5a payload shape:

```text
kind = "stage_obs"
program_id = null
payload = {
  stage_code: string
}
provenance = { source: "user" }
```

#### 3.2.4 `symptom`

| Field           | Type                                                                          | Cardinality | Semantics                                                                           |
|-----------------|-------------------------------------------------------------------------------|-------------|-------------------------------------------------------------------------------------|
| `symptom_code`  | string identifier                                                             | required    | Catalog-declared symptom identifier. Opaque in S2.4.                                |
| `affected_part` | enum ∈ {`leaf`, `fruit`, `flower`, `trunk`, `branch`, `root`, `whole_plant`}  | optional    | Plant part on which the symptom is observed. Categorical observation, not severity. |

#### 3.2.5 `note`

Runtime Slice 8 Step 2 adds one minimal free-standing Observation kind:

```text
kind = "note"
payload = { text: string }
```

Rules:

- `payload.text` is required.
- `payload.text` MUST be trimmed non-empty.
- `payload.text` maximum length is 1000 characters after trim.
- Unknown payload fields are invalid.
- Note Observations are one-plant only.
- Note Observations are free-standing only.
- `program_id` MUST be `null` for note Observations.
- `observation_group_id` is not used in S8 Step 2.
- `observed_on` is required.
- Future `observed_on` is invalid; past dates are allowed.
- `recorded_at` is system-generated ISO UTC.
- Provenance for user-entered note Observations is exactly:

```json
{ "source": "user" }
```

A note Observation is not monitoring-program evidence, not attachable to monitoring programs, not retroactively attachable to monitoring programs, not a gate input, not used for `open_condition`, not diagnosis, not symptom registry, not target registry, not stage vocabulary, not treatment advice, not weather automation, and not pressure/severity/threshold logic.

### 3.3 Cross-cutting rules

- The payload shape MUST match `observation.kind`. A trap-shaped payload on a `stage_obs` record is invalid.
- No payload MAY include fields not listed in its kind's schema (no free-shape extension; no `extra`, `notes`, `severity`, `action_needed`, `confidence`, etc.).
- `payload` is REQUIRED on every Observation record. Its kind-specific required fields are all REQUIRED.
- `observed_on ≤ recorded_at` (reinforced from §0.6a). Future-dated observations are rejected at write-time.

### 3.4 Validation rules

#### 3.4.1 `trap` payload — invalid if

- `source_entry_id` absent or empty for S8 Step 4a free-standing trap capture.
- `source_entry_id` does not resolve in `trap_capture_sources[]`.
- `target_pest_code` absent or empty.
- `target_pest_code` does not equal the resolved source entry's `local_trap_target_code` for S8 Step 4a.
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
- For S8 Step 5a free-standing diary `stage_obs` (`program_id = null`, `provenance.source = "user"`), `stage_code` is not equal to any entry's `stage_code` in `stage_diary_vocabulary[]` (§3.2.3a).
- For any non-diary `stage_obs` path, `stage_code` is not equal to the `stage_code` of any entry in the `stage_vocabulary` of the catalog at the Observation's own `catalog_version` (referential integrity into §2.3, resolved against the record's pinned version — not the plant's current pinned version). The non-diary path remains deferred and is not implemented by Step 5a.
- Unknown payload fields are invalid.
- `program_id` is not `null` for a Step 5a diary `stage_obs`.

#### 3.4.4 `symptom` payload — invalid if

- `symptom_code` absent or empty.
- `affected_part` is present and not in the closed enum listed in §3.2.4.

#### 3.4.5 `note` payload — invalid if

- `payload.text` absent.
- `payload.text` after trim has length 0.
- `payload.text` after trim has length greater than 1000 characters.
- payload contains any field other than `text`.
- `program_id` is not `null`.
- `observation_group_id` is present in S8 Step 2.
- `observed_on` is absent or in the future.
- `recorded_at` is absent, not system-generated ISO UTC, or earlier than `observed_on`.
- `provenance` is not exactly `{ "source": "user" }`.

#### 3.4.6 Cross-cutting — invalid if

**Timing.** Payload validation is a write-time invariant per §0.9.5; once written, an Observation's payload-integrity status is frozen against its own `catalog_version`.

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
Let "matching activity" = per §0.4 (same `plant_id`, same `window_def_id`; per-occurrence temporal refinement per §6.3).

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

### 5.5 Orthogonality with gate state

Window state and gate state are independent axes (§0.5). A window MAY be `closing-soon` and `gate_state = čeka` simultaneously. S2.5 does not suppress, downgrade, or otherwise couple the two axes.

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
- Each occurrence is uniquely identified by: `plant_id`, `window_def_id`, and `cycle_year` (integer year, derived).
- `cycle_year` is the calendar year to which the occurrence's effective open date belongs, computed from the occurrence's anchor resolution:
  - For calendar anchors, `cycle_year` is the year containing `month_day_open`.
  - For phenology anchors, `cycle_year` is the year of the `stage_obs` event that resolves the anchor (§3).
- Each occurrence carries:
  - `effective_open` — the resolved open date for this occurrence, computed per §1 from anchor + `tolerance` (and `calendar_bound` where applicable).
  - `effective_close` — the resolved close date for this occurrence.
- At most one occurrence exists per `(plant_id, window_def_id, cycle_year)` tuple.
- Phenology-anchored windows produce no occurrence for a given year until the corresponding `stage_obs` is recorded. This is the deterministic consequence of §3 (monitoring never infers missing data), not a new rule.

### 6.3 Activity-to-occurrence matching

Matching an activity record (§0.4) to a window occurrence is a deterministic refinement of §0.4's identity condition.

- An activity record `A` is considered for matching against the set of occurrences that share `A.plant_id` and `A.window_def_id` (the identity condition established in §0.4).
- Within that set, `A` is matched to the occurrence `O` such that:
  - `A.occurred_on >= O.effective_open`, and
  - `A.occurred_on < next(O).effective_open`,
  where `next(O)` is the occurrence immediately following `O` in ascending `cycle_year` order within the same `(plant_id, window_def_id)` identity.
- If no `next(O)` exists (i.e. `O` is the latest occurrence yet produced for that identity), the upper bound is unbounded in the forward direction.
- The interval is **half-open on the right**. This is required so that the window-state transition `open` → `missed` → `done_late` (§0.4) remains reachable: an activity observed after `O.effective_close` but before `next(O).effective_open` is matched to `O`, producing `done_late` for that occurrence.
- Matching is deterministic: the same catalog, the same `stage_obs` set, and the same activity set produce the same mapping on every evaluation.
- For phenology-anchored windows where the current year's occurrence has not yet been produced (no `stage_obs`), no candidate `O` exists in that year. Activities observed before any occurrence exists cannot match and remain unmatched until an occurrence is produced.

`activity_group_id` (§0.11) is not consulted by the matching rule. Activities with different plant_ids sharing a group id are matched to their respective plants' occurrences independently.

**Unmatched activities.** For phenology-anchored windows where no `stage_obs` for the anchor's `stage_code` is ever recorded for a given year, no occurrence is produced (§6.2). Any Activity recorded for that plant and `window_def_id` in that year cannot match (no candidate occurrence exists). The Activity is nonetheless stored and remains in the activity set. If the anchor's `stage_obs` is subsequently recorded, the §6.3 matching rule is evaluated against the produced occurrence and the previously unmatched Activity may attach. If the `stage_obs` is never recorded, the Activity remains permanently unmatched: it is visible in plant history (preserving Principle 9), but does not contribute to any window-state derivation. Principle 8 (monitoring never infers missing data) forbids inferring the `stage_obs` from the Activity's existence or its `occurred_on`.

### 6.4 Cross-year calendar windows

Cross-year calendar windows — specifically, calendar-anchored windows for which `month_day_close < month_day_open` within the same calendar year — remain rejected as declared in §1.6.2.

- Rationale: calendar anchors are an explicit fallback for actions whose correct timing cannot be tied to an observable phenology stage. Allowing the close date to wrap past December 31 would introduce a second kind of year discriminator in the catalog (distinct from `cycle_id`), and would force the occurrence model in §6.2 to define which calendar year "owns" a wrap-around window. Both consequences widen the catalog schema and the derivation rules for no gain that phenology anchoring cannot already deliver.
- Intended modeling path for dormancy-period and other year-crossing actions: use a phenology anchor. Dormancy-entry and dormancy-exit stages are first-class in the phenology vocabulary (§3) and provide deterministic per-year anchoring.
- **Audit escape hatch:** the S3–S5 catalog audit is authorized to surface, for review in a later session, any concrete real-world action that phenology anchoring cannot honestly represent. If such a case is documented, a future session with authority over §1 may evaluate whether an additive extension is warranted. No such extension is permitted by S2.6 itself, and nothing in §6 presumes one.

### 6.5 Terminal-gate fallback

When a window `W` declares an `open_condition` (either kind, per §0.9.2), the gate state is computed as follows:

- If `W`'s own occurrence for a given `cycle_year` reaches a **terminal state** of `missed` or `skipped` (§0.4) AND the `open_condition` was never satisfied at any point during the open interval for that `cycle_year`, then:
  - `gate_state = propušteno` (§0.5), terminally, for that `cycle_year`.
  - `W.effective_open = W.own_anchor_open` — gate state never shifts `W`'s calendar dates (reinforces §0.9.2).
- Scoping is strictly **per `cycle_year`**: a terminal gate in year N does not influence year N+1. Each `cycle_year` is evaluated independently.
- No propagation across windows. Each window's gate is evaluated only against its own occurrence and its own `open_condition`.
- Axis orthogonality is preserved: window state (§0.4) and gate state (§0.5) remain independent axes; §6.5 only specifies which `gate_state` value applies once `W` is terminal and never satisfied.

### 6.6 Explicit non-scope

S2.6 does not introduce, and §6 does not govern, any of the following:

- **Criticality or severity of missed windows.** `missed` is a single terminal state per §0.4. There is no tier, no ranking, and no severity-weighted downstream effect.
- **Monitoring prerequisites for actions.** Whether a given action requires a preceding observation is a catalog concern (§2) and a monitoring concern (§3); §6 does not re-express or extend those rules.
- **Consequences of recorded symptoms or stress observations.** Observations are recorded per §4; they do not drive window state or dependency status. §6 does not introduce any symptom-consequence mechanism.
- **Per-species `season_end` field or rule.** Explicitly rejected — see §6.1. The derived occurrence model in §6.2 is the sole mechanism by which "end of season" is expressed, and it is expressed per-occurrence, not per-species.
- **Plan-instance lifetime, closure, retirement, or archival.** Plan instances are governed by §0.7; §6 derives from active plan instances but does not define their lifecycle.

### 6.7 Relationship to §0.4 matching rule

§6.3 refines the matching of activity records to windows along the temporal dimension. §0.4's matching rule, as locked, establishes the identity condition (same `plant_id`, same `window_def_id`). §6.3 does not alter that identity condition; it adds the per-year temporal refinement required to make matching deterministic once multiple occurrences exist.

- **Forward obligation.** A later session with authority to revisit §0.4 should either (a) insert a forward reference from §0.4 to §6.3, or (b) unify both halves into a single consolidated matching rule. Neither is required to make §6 consistent; both are documentation improvements that preserve the existing semantics.
- **Documentation concern, not a model inconsistency.** The full matching rule is fully determined by reading both sections:
  - §0.4 provides the identity condition.
  - §6.3 provides the temporal refinement.
  - Together they form the complete matching rule.
  - §6.3 is consistent with §0.4 but does not amend it.

### 6.8 Monitoring program occurrence — locked (S2.8)

A **monitoring program occurrence** is the derived per-year instance of a declared `monitoring_program` (§1.7) for a specific plan instance. Parallel to §6.2 for action windows.

- Occurrences are derived; they are never stored.
- Each occurrence is uniquely identified by: `plant_id`, `program_id`, and `cycle_year`.
- `cycle_year` is the calendar year of the occurrence's `season_start` (resolved MD → absolute date for the year).
- Each occurrence carries:
  - `season_start` (absolute date for this cycle_year).
  - `season_end` (absolute date for this cycle_year).
- At most one occurrence exists per `(plant_id, program_id, cycle_year)` tuple.
- Occurrences for future and past calendar years are legal; the grower may review last year's program history or preview next year's coming program season.

**Program-state derivation (deterministic):**

For a given occurrence `(plant_id, program_id, cycle_year)` with resolved `season_start` and `season_end`:

- `today < season_start` → `pre_season`
- `season_start ≤ today < season_end` → `active`
- `today ≥ season_end` → `ended`

Program state is a pure function of `today`, `season_start`, and `season_end`. It does NOT consult Observation count, Observation presence, cadence, or any other evidence. The state enum is closed per §1.7.5.

**Observation attachment to occurrences:**

An Observation with `program_id = P` attaches to occurrence `(P, cycle_year Y)` if and only if `observed_on` lies within `[season_start(P, Y), season_end(P, Y)]` (closed interval on both ends; see §1.7.3 L5a). Outside any such interval, the Observation is stored free-standing (`program_id = null`) per L5b.

`observation_group_id` (§0.11) is not consulted by program-state derivation or observation attachment. Each Observation is evaluated independently.

**No propagation across cycle_years:**

Program state for cycle_year N does not propagate to cycle_year N+1. Each cycle_year is evaluated independently. A retroactive Observation for cycle_year N does not revive state for that cycle_year — state remains calendar-derived from `today`. History gains a record; current displayed state is unchanged.

**No cross-program propagation:**

Each program's occurrence is evaluated independently. Observations for one program do not affect another program's state, even when programs share a `target_code` (e.g., two consecutive monitoring programs for the same pest).

**Non-scope reaffirmed (monitoring-program edition):**

§6.8 does not introduce, and no future addition to §6.8 may introduce:
- Cadence compliance tracking per occurrence.
- Program "overdue" or "stale" state (forbidden by §1.7.5 closed enum).
- Migration that retroactively links free-standing Observations to occurrences (forbidden by FS-INV §1.7.4).
- Per-program cycle_year archival or closure mechanism (occurrences are derived; no stored lifecycle).

## 7. Overlay semantics — locked (S2.7)

### 7.1 Overlay identity

- Overlay entries are keyed by `window_def_id` (§0.2). Because `window_def_id` is canonical and stable across catalog versions, overlay identity is preserved across catalog upgrades whenever the underlying `window_def_id` persists.

### 7.2 Reconciliation rule

- On catalog upgrade, an overlay bound to a `window_def_id` that continues to exist in the new catalog version remains bound to that window.
- An overlay bound to a `window_def_id` that no longer exists in the new catalog version is retained. It MUST NOT be silently deleted.
- Catalog changes MUST NOT silently overwrite user overlay edits.

### 7.3 Out of scope

- Overlay storage layout (per-field vs per-window granularity), catalog-version diffing, the user-review mechanism for reconciled edits, rendering details, and `from → to` pairing for renamed or merged windows are implementation concerns owned by S9 (`V2_ARCHITECTURE.md` §3).

## 8. Versioning unit

*Locked in Section 0.8 (S2.1).*

## 9. Launch species list

**Status:** content block, S2 owner decision with S4/S5 closure clarification — not a model rule. The model rules for catalog template, action-window definition, monitoring program, stage vocabulary, and Observation payload are version-independent and do not depend on the specific species named here.

The S3–S5 audit historically operated on 18 owner-approved species/subtypes. After S4/S5 owner decisions, current catalog v1.0 support excludes fig and citrus. Fig, lemon, orange, and mandarin are preserved only as historical audit / deferred future context.

Current catalog v1.0 support after S4/S5 closure:

- *Malus domestica* (Apple)
- *Pyrus communis* (Pear)
- *Prunus avium* (Sweet cherry)
- *Prunus cerasus* (Sour cherry)
- *Prunus persica* (Peach)
- *Prunus persica* var. *nucipersica* (Nectarine)
- *Prunus domestica* (Plum)
- *Prunus armeniaca* (Apricot)
- *Olea europaea* (Olive)
- *Juglans regia* (Walnut)
- *Corylus avellana* (Hazelnut)
- *Cydonia oblonga* (Quince)
- *Punica granatum* (Pomegranate)
- *Prunus dulcis* (Almond)

Historical S3–S5 audit scope also included these deferred species/subtypes:

- *Ficus carica* (Fig)
- *Citrus limon* (Lemon)
- *Citrus sinensis* (Orange)
- *Citrus reticulata* (Mandarin)

Do not treat the historical audit-scope entries as current catalog v1.0 support. Future reintroduction requires owner-approved future work.
