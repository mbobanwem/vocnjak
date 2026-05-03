# V2_ARCHITECTURE

**Status:** placeholder — to be filled in S8 (data model), S9 (diff engine + weather), S10 (V1→V2 migration).

---

## 1. Data model

### 1.1 S8 data-model purpose

S8 defines the persisted storage architecture for V2.

Document ownership remains separated:

| Concern | Owner |
|---|---|
| Domain concepts, entity rules, invariants, enums | `V2_DOMAIN_MODEL.md` |
| UX behavior, labels, routes, capture surfaces | `V2_UX_MODEL.md` |
| Storage architecture and persistence boundaries | `V2_ARCHITECTURE.md` S8 |
| Derived state and deterministic algorithms | S9 |
| Migration mechanics, if/when opened | S10 |
| Runtime implementation | later only after explicit approval |

S8 stores facts and stable references. It does not store urgency, compliance, pressure, diagnosis, treatment recommendations, or derived plan state.

### 1.2 Non-goals

S8.A does not define:

- runtime implementation
- UI behavior
- S9 derived-state algorithms
- S10 migration mechanics
- import/export validation closure
- diagnosis, treatment, product, or dose recommendation
- AI/photo/media storage or recognition
- weather, climate, region, or numeric offset logic
- destructive data behavior

### 1.3 Root storage shape

The high-level root store shape is architecture naming for S8, not final runtime schema or migration format:

```text
VocnjakV2Store
- meta
- catalogs
- plants
- plan_instances
- plan_overlays
- activities
- observations
- corrections
- review_state
```

Rules:

- Root collections store durable facts and stable references.
- Final field names, serialization shape, indexes, and localStorage key layout are not finalized in S8.A.
- S8.A does not create a final migration schema.
- Any cache derived from these collections has zero authority.

### 1.4 Meta / retained catalog version store

`meta` and `catalogs` must support:

- store format version metadata
- active catalog version pointer for newly created or newly reviewed plan context
- retained catalog versions
- lookup of catalog labels, action-window definitions, monitoring programs, stage vocabulary, and provenance by historical `catalog_version`

Invariant:

- Any catalog version referenced by a Plant, Plan instance, Plan overlay, Activity, Observation, Correction, or review state must remain available for historical resolution.
- A referenced catalog version is never deleted from the retained catalog version store.
- S8 stores catalog versions for resolution; it does not define catalog content.

### 1.5 Plant persisted shape

Plant storage represents one real plant in the orchard.

| Category | Stored boundary |
|---|---|
| Identity | `plant_id`; optional user display label; stable plant identity references used by history |
| Species | controlled species reference from current supported catalog scope at write time |
| Variety | selected catalog variety reference when known; explicit unknown representation when user chooses `ne znam`; absent when not entered or not applicable |
| Ripening timing fallback | timing choice for timing-driving species when variety is unknown: `rana`, `srednja`, `kasna`, or explicit `ne znam`, matching §13 UX |
| Profile fields | `rootstock`, `planted_at`, `purchased_at`, `source_label`, `position_label`, `profile_note`, and display-name/profile fields required by §13 |
| Missing vs unknown | each applicable profile field must preserve the difference between not entered (`nije upisano`) and explicitly unknown (`ne znam`) |
| Stable order | a stable orchard-order value used by Biljke default ordering |
| Archive | archive state/date/reason/note fields from §14 |

Missing/unknown representation:

- Missing means no value was provided.
- Unknown means the user explicitly chose `ne znam`.
- Unknown is not treated as an error and is not a value that S8 prompts on.
- Derived behavior from missing or unknown data belongs to S9 only when a locked model later permits it.

Archive fields:

- archive state
- archive date
- optional reason chip
- optional note

Archive rules:

- Archive is not delete.
- Plant identity and history remain preserved.
- No restore flow is defined in current S8.A.
- Active-scope derivation belongs to S9.

### 1.6 Plan instance persisted shape

A Plan instance stores the plant's pinned plan context.

| Category | Stored boundary |
|---|---|
| Identity | `plan_instance_id` |
| Plant link | `plant_id` |
| Catalog pinning | catalog version and template reference used by this plan instance |
| Creation/review context | species, variety, and timing context at creation or review time, where needed to keep the pinned plan understandable |
| Timestamps | created/updated timestamps if needed for auditability |
| Current pin | current pinned plan/catalog reference for the plant |

Rules:

- S8 stores the pinned plan reference.
- S8 does not define the plan generation algorithm.
- S8 does not store active/upcoming/done/missed state.
- S8 does not define calendar projection.

### 1.7 Plan overlay / user adjustment persisted shape

Plan overlays store user adjustments attached to a plan instance.

Stored boundary:

- overlay id or stable overlay key
- `plant_id`
- `plan_instance_id`
- referenced window/action identity, such as `window_def_id` plus catalog/version context
- note or adjustment metadata when supported by UX
- created/updated metadata if needed for history of user adjustment

Rules:

- S8 stores overlays as user-authored facts.
- S9 reconciles overlays against later catalog versions.
- S8 does not define overlay reconciliation algorithms.
- Catalog upgrades must not destructively overwrite overlays.
- An overlay whose referenced window/action no longer exists remains retained until S9 decides how it renders.

### 1.8 Plan upgrade review state

`review_state` stores the minimal user-interaction state needed by §9.

Stored boundary:

- per-plant user review state, such as postponed or applied, when a review exists
- current plan/catalog/template reference
- candidate catalog/template reference, if a review is available
- postponement state, if the user chose `Ostavi postojeći plan za sada`
- last user action timestamp, if needed for auditability

Rules:

- S8 stores review state only.
- S8 does not persist `available` as authoritative truth; availability is derived by S9 from catalog/template comparison.
- S9 owns trigger logic, diff generation, and bucket content.
- No plan change auto-applies.
- No permanent hide or ignore behavior exists unless later approved.
- Applying a review does not rewrite historical Activity, Observation, Correction, or Dnevnik context.

### 1.9 Activity evidence persisted shape

Activity records are immutable captured real-world events.

Stored categories:

- `activity_id`
- `plant_id`
- activity type / action context
- occurred date
- recorded timestamp
- status: `done` or `skipped`
- notes
- catalog/version references needed for historical resolution
- plan/window/action references if attached, including `window_def_id` where applicable
- `activity_group_id` for multi-plant atomic capture
- provenance / source metadata where required by the domain model

Rules:

- The original Activity record is immutable.
- S8 never edits an Activity in place.
- Corrections are separate additive records.
- `activity_group_id` is display/query identity only.
- S9 owns evidence matching to window occurrences.
- No derived `done`, `done_late`, `missed`, `upcoming`, or active plan state is stored here.

### 1.10 Activity group persisted shape

Multi-plant Activity capture remains multiple per-plant Activity records linked by one group id.

Stored boundary:

- group id namespace distinct from Observation groups
- grouped Activity records written atomically by one capture flow
- optional group display/query metadata, only if needed for rendering grouped Dnevnik rows

Rules:

- Each plant still receives its own Activity record.
- Grouped capture does not create a multi-plant Activity entity with domain authority.
- No silent propagation to unselected plants.
- Derivation must not rely on group id.
- Corrections do not reshape groups, add members, remove members, or change group ids.

### 1.11 Observation persisted shape

Observation records are immutable structured observation events.

Stored categories:

- `observation_id`
- `plant_id`
- observed date
- recorded timestamp
- `kind`
- kind-specific payload
- notes, stored outside payload when supported by UX
- catalog/version references needed for historical resolution
- `program_id` or `null`
- program cycle-year resolution if retained for historical query support
- `observation_group_id`, if a future approved capture flow needs grouping
- provenance / source metadata where required by the domain model

Observation kinds align with the locked domain:

| Kind | Storage meaning |
|---|---|
| `trap` | trap count observation |
| `scouting` | visual scouting observation |
| `stage_obs` | observed plant development stage |
| `symptom` | user-initiated symptom/problem observation |

Rules:

- The original Observation record is immutable.
- S8 never edits an Observation in place.
- Corrections are separate additive records.
- Free-standing observations have `program_id = null`.
- Free-standing observations remain permanently disjoint from monitoring programs.
- No retroactive attach-to-program behavior exists.
- No threshold result, pressure, severity, diagnosis, or treatment recommendation is stored.

### 1.12 Monitoring program observation storage

Program-context Observations reference a `program_id` only when valid at write time.

Stored boundary:

- S8 stores the attachment exactly as written.
- If the write is valid program-context evidence, the Observation stores `program_id` and catalog/version context.
- If domain rules make the write free-standing, the Observation stores `program_id = null`.
- `program_id` is immutable.
- Free-standing Observations are never program evidence.

Rules:

- Out-of-season write behavior follows `V2_DOMAIN_MODEL.md` and locked UX disclosure rules.
- S9 derives monitoring program state.
- S8 stores no observation-count-driven compliance, cadence, overdue, stale, pressure, or quality state.

### 1.13 Stage confirmation storage

Stage confirmation is stored as an Observation, not as a separate entity.

Stored boundary:

- `kind = stage_obs`
- plant id
- observed date
- recorded timestamp
- stage reference or label mapping from the MVP stage labels
- note, if supported by the Observation note field
- catalog/version reference for resolving stage vocabulary or label mapping

Rules:

- S8 stores the stage Observation.
- S9 owns any plan effects from stage Observations.
- No BBCH model is introduced in S8.A.
- No AI/photo recognition is introduced.
- Stage confirmation is never forced.

### 1.14 Correction persisted shape

Corrections are additive records linked to immutable originals.

Stored categories:

- `correction_id`
- original record reference
- original record type: Activity or Observation
- correction type or types
- corrected values, if applicable
- explanation/note
- created timestamp

Rules:

- The original Activity or Observation remains immutable and visible.
- No destructive delete.
- No in-place edit.
- No correction-of-correction entity model in current S8.A.
- If a correction was wrong, a later correction may still reference the same original record.
- No duplicate suppression, merge, hiding, or ignore behavior exists in current S8.A.
- S9 owns derived effects of corrections.

### 1.15 Archive persisted shape

Archive state is stored on the Plant record and summarized here for the lifecycle boundary.

Stored boundary:

- archive status
- archive date
- optional reason chip
- optional note

Rules:

- Archived plants remain queryable for history.
- Dnevnik remains available for archived plants.
- Archive never deletes Plant, Activity, Observation, Correction, catalog, or plan history.
- No restore flow is defined in current S8.A.
- Active/future exclusion is S9 derived behavior.

### 1.16 Za pregledati cue state

S9 generates review cues. S8 may store only user interaction state when needed.

Stored boundary:

- postponed / left-for-later state
- cue acknowledgement context
- reference to cue source, if the cue itself is persisted

Rules:

- S8 does not generate cues.
- S8 does not auto-resolve cues.
- S8 does not store task, compliance, urgency, or pressure state.
- No permanent hide exists unless later approved.
- Exact cue disappearance belongs to S9.

### 1.17 Dnevnik query/history support

Dnevnik reads durable history from persisted records.

Storage must preserve enough references for historical rows to remain understandable:

- Activity records
- Observation records
- Correction records
- archive state on Plants
- retained catalog versions and labels
- plant identity and disambiguation labels at query/render time
- group ids for grouped Dnevnik rows

Rules:

- S8 supports queryability and historical resolution.
- Dnevnik row rendering remains UX/S9 responsibility.
- S8 does not define a Dnevnik row algorithm.
- History is never rewritten to match a newer catalog label.
- Referenced catalog labels/version context must not be deleted.

### 1.18 S8.A must-not-do checklist

S8.A must not define:

- algorithms
- runtime code
- migration mechanics
- import/export validation closure
- treatment, diagnosis, product, or dose recommendation
- AI/photo/media behavior
- weather, regional, or climate offsets
- catalog expansion
- destructive data behavior

### 1.19 Handoff to S8.B

S8.B will cover the implementation-readiness closure for storage, including:

- consolidated write-time invariant table
- backup/export/import validation shape
- fail-closed validation rules
- S8/S9/S10 handoff table
- S8 closure checklist

### 1.20 Write-time invariants

S8 write paths validate durable facts and references at the moment they are written. They do not store derived state.

| Area | S8 write-time invariant | Source / owner | Must fail if |
|---|---|---|---|
| Catalog retention | Every referenced catalog version remains present in the retained catalog version store. | `V2_DOMAIN_MODEL.md` §0.9.5 / S8 | A Plant, Plan instance, Plan overlay, Activity, Observation, Correction, or review state references a catalog version that is not retained. |
| Plant identity | `plant_id` is unique and stable. | `V2_DOMAIN_MODEL.md` §0.1 / S8 | A write duplicates `plant_id` or mutates identity used by existing history. |
| Plant missing vs unknown | Missing values and explicit `ne znam` remain distinct. | `V2_UX_MODEL.md` §13 / S8 | A write collapses missing and unknown or treats either as an error. |
| Plan instance | Plan instance references one existing Plant and retained catalog/template context. | `V2_DOMAIN_MODEL.md` §0.1 / S8 | The Plant, catalog version, or template reference is missing. |
| Plan overlay | Overlay references a plan instance plus retained window/action context. | `V2_DOMAIN_MODEL.md` §0.7, §7 / S8 | The plan instance is missing or the window/action reference has no retained resolution context. |
| Activity | Activity has Plant, date, status, action context, and catalog/version reference. | `V2_DOMAIN_MODEL.md` §0.6 / S8 | A required field is missing, status is outside `done`/`skipped`, the Plant is missing, the catalog version is missing, or the event date is invalid. |
| Activity group | Multi-plant Activity group writes are atomic per capture batch. | `V2_DOMAIN_MODEL.md` §0.11 / S8 | Only part of a grouped write validates or group invariants fail. |
| Observation | Observation has Plant, observed date, kind, payload, and catalog/version reference. | `V2_DOMAIN_MODEL.md` §0.6a, §3 / S8 | A required field is missing, kind is invalid, payload does not match kind, the Plant is missing, the catalog version is missing, or the observed date is invalid. |
| Monitoring observation | `program_id`, when present, is valid at write time and immutable after write. | `V2_DOMAIN_MODEL.md` §1.7 / S8 | Program context is invalid for the record or a later write tries to mutate `program_id`. |
| Free-standing observation | Free-standing Observation stores `program_id = null`. | `V2_DOMAIN_MODEL.md` §1.7.4 / S8 | A write or import tries to attach, infer, or relink it to a monitoring program. |
| Stage observation | Stage Observation has stage reference or mapped MVP label with retained catalog/version context. | `V2_DOMAIN_MODEL.md` §3.2.3, `V2_UX_MODEL.md` §11 / S8 | Stage reference cannot be resolved or mapped as a history-preserving stage observation. |
| Correction | Correction references one original Activity or Observation. | `V2_UX_MODEL.md` §17 / S8 | Original record is missing, target is a correction, or write would edit/delete the original. |
| Archive | Archive state never deletes Plant or history records. | `V2_UX_MODEL.md` §14 / S8 | Archive write removes Plant, Activity, Observation, Correction, catalog, or plan history. |
| Review state | Review state stores user interaction only and does not persist `available` as truth. | `V2_UX_MODEL.md` §9 / S8/S9 | Write treats `available` as authoritative stored state instead of an S9-derived comparison result. |
| Za pregledati cue state | Persisted cue state, if any, is user interaction only. | `V2_UX_MODEL.md` §12 / S8/S9 | Cue state stores urgency, compliance, task completion, generated truth, or auto-resolution. |

### 1.21 Backup / export shape

A full V2 export is a full-state snapshot containing, at high level:

- `meta`
- retained catalogs needed by references
- plants
- plan instances
- overlays
- activities
- observations
- corrections
- review state

Export rules:

- Export preserves immutable history.
- Export includes every retained catalog version referenced by records.
- Export does not export derived caches as authority.
- Export does not rewrite historical Activity, Observation, or Correction records.
- Export does not drop archived Plants.
- Export does not drop free-standing Observations.
- S8 does not define a final JSON schema or runtime code for export.

### 1.22 Import validation shape

Import validation checks a complete V2 export candidate before any replace/accept action.

Validation boundary:

- import validates the full shape before replace/accept
- fail closed on validation errors
- no partial import in S8
- no merge import in S8
- no auto-fix of missing required references
- no free-standing Observation relinking
- no catalog-version substitution
- no duplicate suppression
- no destructive history cleanup
- no tolerant import unless explicitly approved in a future session

Exact restore mechanics belong to S10 / implementation if opened. S8 defines the validation boundary only.

### 1.23 Fail-closed validation rules

Fail closed means invalid data is rejected rather than repaired, inferred, or partially accepted.

Validation must fail when:

- retained catalog version is missing
- record references a missing Plant
- Correction references a missing original Activity or Observation
- Observation payload is invalid for its `kind`
- Activity group is partially present or violates group invariants
- archive state would imply deletion
- import tries to attach a free-standing Observation to a monitoring program
- import tries to mutate immutable record identity

No auto-repair, auto-merge, relinking, substitution, or cleanup is defined in S8.

### 1.24 S8 / S9 / S10 handoff

| Topic | S8 owns | S9 owns | S10 / later owns |
|---|---|---|---|
| Catalog version retention | Retained catalog version store and reference invariant. | Historical resolution inputs for rendering and comparison. | Preservation during migration/restore, if opened. |
| Plan instance storage | Pinned plan/catalog/template references. | Derived plan state and calendar projection. | Legacy plan migration, if opened. |
| Overlay storage | User overlay facts and retained references. | Overlay reconciliation and rendering after catalog changes. | Legacy overlay migration, if opened. |
| Activity storage | Immutable Activity records and group ids. | Evidence matching and derived window state. | Legacy Activity migration/import preservation, if opened. |
| Observation storage | Immutable Observation records, payloads, and `program_id` boundary. | Monitoring state, stage effects, and Observation-derived rendering. | Legacy/import Observation preservation, if opened. |
| Correction storage | Additive Correction records linked to originals. | Derived effects of corrections and Dnevnik correction rendering. | Correction migration/import preservation, if opened. |
| Archive storage | Plant archive status/date/reason/note. | Active/future exclusion and archived-scope rendering. | Restore/admin recovery or migration mechanics, if later approved. |
| Review state storage | User review interaction state only. | Availability trigger, diff content, and apply effects. | Import/migration preservation, if opened. |
| Cue state storage | Optional user interaction state only. | Cue generation, ordering, disappearance, and derived visibility. | Import/migration preservation, if opened. |
| Dnevnik history support | Durable references for historical query and resolution. | Row rendering, markers, grouping display, and filters. | Legacy history migration and restore mechanics, if opened. |
| Import/export validation | Full-state snapshot contents and fail-closed validation boundary. | Derived caches are ignored as authority. | Exact restore, replace, backup UX, and migration mechanics. |
| Migration mechanics | No mechanics; S8 only defines storage/validation boundary. | No migration ownership. | V1/V2 or later migration design, if opened. |
| Derived plan state | Stores no derived plan state. | Active/upcoming/done/missed and plan projection. | Ensuring migrated data can feed S9, if opened. |
| Plan upgrade diff | Stores current/candidate references and user review state. | Plan comparison, buckets, trigger logic, and application effects. | Migration/import preservation of review context, if opened. |
| Overlay reconciliation | Stores overlays without destructive overwrite. | Reconciliation rules and display of unresolved overlays. | Migration preservation of overlay inputs, if opened. |
| Evidence matching | Stores Activity and Observation facts. | Matching evidence to occurrences and derived plan effects. | Preservation of evidence identity during migration/import, if opened. |
| Cue generation | Stores optional user cue interaction state. | Cue generation, ordering, and disappearance. | Migration/import handling for cue interaction state, if opened. |
| Monitoring state | Stores Observation facts and program references. | Program state derivation and monitoring display inputs. | Import/migration preservation of FS-INV and program references, if opened. |
| Stage-derived behavior | Stores `stage_obs` Observation records. | Any plan effects or display changes from stage Observations. | Preservation of stage records during migration/import, if opened. |

### 1.25 S8 closure checklist

S8 is complete when:

- core storage entities are documented
- write-time invariants are documented
- export/import validation boundary is documented
- S8/S9/S10 ownership is separated
- no S9 algorithms are defined
- no runtime implementation is defined
- no domain model edits were required
- no destructive data behavior was introduced

After S8, next phase is S9 derived-state / algorithm planning, unless owner chooses a short S8 tracker sync first.

## 2. Upgrade diff engine

*To be filled in S9.*

## 3. Overlay reconciliation

*To be filled in S9.*

## 4. Active-window snapshot algorithm

### 4.1 Purpose

The active-window snapshot is the deterministic S9 read model for current V2 plan display.

It reads persisted facts from S8 and projects current display state for:

- Pregled
- Kalendar
- Biljke
- Plant detail
- Detalj sezonske radnje
- monitoring surfaces
- `Za pregledati` review cues

The snapshot answers what is currently open, upcoming, closing, missed, evidenced, skipped, archived out of active scope, or relevant for calm review. It does not write those states back to storage.

### 4.2 Non-goals

S9.A does not define:

- runtime implementation
- storage or schema changes
- upgrade diff engine
- overlay reconciliation details
- migration mechanics
- plan generation as a product feature
- treatment, diagnosis, product, or dose recommendation
- weather gating
- regional, climate, or numeric timing offsets
- AI/photo recognition
- task, compliance, coverage, pressure, or urgency systems

### 4.3 Snapshot inputs

The snapshot reads persisted facts and stable references only.

Input categories:

- current date / evaluation date
- active Plants and archived Plants
- retained catalog versions
- Plan instances and pinned catalog context
- Plan overlays, as stored facts
- Activity records
- Observation records
- Correction records
- archive state
- review state / postponed state
- cue interaction state, if persisted
- weather advisory input only for §5 composition

Rules:

- Derived caches have zero authority.
- Same persisted facts, same retained catalog context, and same evaluation date produce the same snapshot.
- Activity and Observation group ids are display/query identity only; they are not derivation authority.
- The snapshot does not infer orchard reality from missing records.

### 4.4 Snapshot outputs

The snapshot outputs display categories, not stored objects.

Output categories:

- projected windows / occurrences per plant
- window state
- gate state
- plant aggregate state
- orchard aggregate state
- monitoring program state
- stage-related gate satisfaction where applicable
- review cue candidates
- references needed by surfaces to open §5, §9, §10, §11, §12, §15, §16, and §17 routes
- weather advisory annotations from §5, if present

Rules:

- Outputs are read-time projections.
- Outputs do not rewrite Activity, Observation, Correction, Plant, Plan instance, Plan overlay, review state, or catalog records.
- Outputs may be cached by a later implementation only as a performance detail with zero authority.

### 4.5 Window occurrence projection

Window occurrences are projected per Plant, pinned Plan instance, retained catalog version, and action-window identity.

Projection boundary:

- The catalog/plan context provides the action-window definitions.
- The Plant and Plan instance define which pinned catalog context applies.
- The action-window identity remains catalog-backed, including `window_def_id`, catalog version, and cycle context.
- Calendar-anchored windows project from calendar anchor and tolerance.
- Phenology-anchored windows project only when the required `stage_obs` evidence exists for that Plant and catalog context.
- Plan overlays may modify projection inputs only as stored S8 facts; S9.A does not define overlay reconciliation across catalog versions.
- Archive filtering affects active/future projection, not historical query or Dnevnik history.

Rules:

- Occurrences are derived and never stored.
- No automatic plan generation is defined here.
- No calendar dates are shifted by Activity execution, weather, monitoring cadence, or cue state.
- If required catalog stage vocabulary or stage mapping is missing, S9.A must stop for owner decision rather than inventing a mapping.

### 4.6 Window state derivation

Window state is derived from the projected occurrence and effective Activity evidence.

S9.A follows the locked domain vocabulary. Where a surface needs a "not yet open" concept, it maps to the domain `upcoming` state.

| Derived state | Boundary |
|---|---|
| `upcoming` / not yet open | Evaluation date is before the effective open date, or a phenology occurrence is not yet produced because the required stage has not been observed. |
| `open` | Evaluation date is inside the effective window and no matching `done` or `skipped` evidence exists. |
| `closing-soon` | Display refinement of `open` near the effective close date, using the locked threshold. It is not an alarm. |
| `missed` | The relevant window has closed and no matching `done` or `skipped` evidence exists. |
| `done` | Matching Activity evidence with `status = done` exists inside the relevant window. |
| `done_late` | Matching Activity evidence with `status = done` exists after the relevant window closes, per domain matching rules. |
| `skipped` | Matching Activity evidence with `status = skipped` exists. |

Rules:

- `done`, `done_late`, and `skipped` require matching Activity evidence or an effective correction result.
- `missed` is derived only after the relevant window closes with no matching `done` or `skipped` evidence.
- `closing-soon` is display emphasis only, not pressure, blame, or task urgency.
- Window state is never stored.
- Window state is not derived from missing monitoring evidence.
- Activity group id never marks unselected plants as evidenced.

### 4.7 Gate state derivation

Gate state is a separate axis from window state.

S9.A does not create a new gate enum. It uses the locked gate-state values:

```text
čeka
otvoreno
propušteno
ne primjenjuje se
```

Derivation boundary:

- `open_condition` is the only structural gate mechanism.
- Supported `open_condition` kinds remain the locked domain kinds: prior Activity evidence or Observation evidence limited to `stage_obs` / `symptom`.
- Calendar and phenology anchors affect occurrence projection; they are not a separate stored gate system.
- Terminal fallback may derive `propušteno` for display when the window becomes terminal and the gate was never satisfied.

Rules:

- Gate state never changes `effective_open` or `effective_close`.
- Missing gate evidence does not block Activity capture, Observation capture, Stage confirmation, or Correction flows.
- Gate state is not stored.
- Weather, trap counts, scouting counts, cadence, missing observations, and cue state are not gate inputs.
- Terminal fallback affects display only and must not rewrite history.

### 4.8 Activity evidence matching

Activity evidence matching connects immutable Activity records to projected window occurrences for derived display.

Matching boundary:

- Match by Plant identity and action/window context, including `window_def_id` where applicable.
- Apply the locked per-occurrence date/window semantics from the domain model.
- Use Activity `status` to derive `done`, `done_late`, or `skipped`.
- Correction records may affect the effective match result without rewriting the original Activity.

Rules:

- `activity_group_id` is not consulted for derivation.
- Multi-plant capture creates multiple per-plant Activity records.
- Unmatched Activities remain visible in Dnevnik/history and are not deleted.
- No Activity silently propagates to another Plant.
- Duplicate suppression, merge, or hidden ignore behavior is not defined.

Example:

```text
Copper spray on Plant A and Plant B in one group does not mark Plant C or Plant D as done.
```

### 4.9 Correction effects

Corrections are additive inputs to derived display.

Rules:

- Original Activity and Observation records remain immutable.
- Correction records may affect active-plan derived display when the correction changes an effective date, Plant, action/window context, status, note, or Observation value relevant to the current projection.
- Dnevnik/history remains original record plus correction record.
- No destructive rewrite, hidden edit, or deletion occurs.
- No correction-of-correction model is defined in current architecture.
- If a correction was wrong, a later correction may reference the same original record.
- Duplicate suppression, merge, hiding, or ignore behavior is not defined.
- S9.A defines the read-model boundary only; final row rendering belongs to Dnevnik/S9 implementation planning later.

### 4.10 Archive active-scope filtering

Archive state is stored in S8 and consumed by S9.

Derived active-scope rule:

- From the archive date forward, archived Plants are excluded from active/future plan surfaces.
- Archived Plants do not contribute to current/future Pregled, Kalendar, Biljke active list, Plant active seasonal context, monitoring active context, or active orchard aggregates.
- Historical records remain visible through Dnevnik/history and archived Plant routes.

Rules:

- Archive is not delete.
- Archive does not rewrite Activity, Observation, Correction, catalog, Plan instance, or Plan overlay history.
- Archived Plants may still resolve historical labels through retained catalog versions.
- No restore/unarchive logic is defined in S9.A.

### 4.11 Stage observation effects

Stage observations are optional Observation records with `kind = stage_obs`.

Derived boundary:

- A valid `stage_obs` may satisfy phenology-related occurrence projection or an `open_condition` that explicitly references stage Observation evidence.
- Stage evidence is consumed only from the recorded Observation and retained catalog context.
- Missing stage evidence does not create a warning.
- Missing stage evidence does not prove the stage did not happen.

Rules:

- No stage confirmation is forced.
- No missing-stage cue is generated solely because a stage has not been recorded.
- No plan shifting promise is made.
- No stage is inferred from weather, calendar, temperature, Activity records, or visual media.
- No BBCH model, AI/photo recognition, diagnosis, or treatment recommendation is introduced.
- If stage vocabulary or MVP-label mapping is insufficient for a needed projection, stop for owner decision rather than inventing a mapping.

### 4.12 Monitoring program state projection

Monitoring program state is a derived read model per Plant, program, and cycle context.

Closed state set:

```text
pre_season
active
ended
```

Rules:

- State derives from program season dates / cycle context only.
- Observation count does not affect program state.
- Observation absence does not produce warning, failure, missed, stale, overdue, or incomplete state.
- Cadence is display-only and never produces a state.
- Program-attached Observations may appear as factual history/preview where UX allows.
- Free-standing Observations are never program evidence.
- Monitoring state is orthogonal to window state and gate state.

### 4.13 Free-standing observation boundary

Free-standing Observations remain permanently disjoint from monitoring programs.

Rules:

- `program_id = null` remains the durable boundary.
- Free-standing Observations may appear in Dnevnik/history and Plant history.
- Free-standing Observations never satisfy monitoring evidence.
- Free-standing Observations are not auto-related to awareness/risk detail.
- Free-standing Observations are not retroactively attached, relinked, moved, or counted into program context.
- Payload similarity, date proximity, target match, or later catalog changes do not change this boundary.

### 4.14 Za pregledati cue projection

`Za pregledati` cue projection produces calm review candidates from the snapshot and existing S7 routes.

Allowed cue families:

- seasonal action review
- monitoring review
- awareness/risk review
- stage/phenology review
- plan upgrade review
- existing observation/record review

Rules:

- Cues are not tasks.
- Cues do not carry urgency, blame, pressure, compliance, coverage, score, or progress meaning.
- No cue is generated from monitoring absence alone.
- No cue is generated from cadence compliance or time since last monitoring Observation.
- Cue ordering must be minimal and stable, not a priority/urgency system.
- Cue disappearance is derived from downstream state changes and any persisted S8 interaction state; S9.A does not create automatic hidden clearing.
- Postpone / leave-for-later behavior follows S8 stored interaction state and S9 rule boundaries.
- If a new cue type is needed beyond §12 families, stop and ask the owner.

Cue projection may reference:

- terminal seasonal action state where §1/§12 allow calm review of missing evidence
- active monitoring or awareness context where §12 routes to §15 or §10 without compliance language
- optional stage/phenology review only when an existing §12 route is valid and not framed as missing or required
- plan upgrade review availability only as S9.B-derived input when available later
- existing records that may route to Dnevnik/detail/correction surfaces

### 4.15 Plan / orchard aggregate projection

Aggregates summarize derived state for orchard surfaces.

Plant aggregate state may support:

- Plant detail current seasonal context
- Biljke row seasonal cue
- Biljke plan-change marker when S9.B supplies review availability

Orchard aggregate state may support:

- Pregled status sentence
- `Sada aktualno`
- `Za provjeru: nema evidencije`
- `Uskoro`
- `Praćenje`
- Calendar month/category summaries

Rules:

- Aggregates are summaries, not scores.
- Do not compute or display percentages, progress metrics, compliance metrics, engagement metrics, or monitoring coverage.
- Archived Plants are excluded from active aggregates from archive date forward.
- Historical query and Dnevnik remain preserved for archived Plants.
- Aggregation must not merge cards by visible label alone when catalog identity, dates, status, purpose, or user-facing meaning differ.

### 4.16 Determinism and history preservation

Determinism contract:

```text
same persisted facts
+ same retained catalog context
+ same evaluation date
= same snapshot
```

Rules:

- No derived output rewrites persisted records.
- Dnevnik/history remains the durable source of truth for what happened.
- The snapshot can be recomputed at read time.
- Derived caches have zero authority.
- Historical records resolve through their retained catalog/version context, not through the newest catalog labels alone.
- Weather advisory annotations do not affect deterministic plan state.

### 4.17 S9.A must-not-do checklist

S9.A must not define:

- runtime implementation
- storage or schema changes
- migration mechanics
- upgrade diff or overlay reconciliation details
- treatment, diagnosis, product, or dose recommendation
- pressure, severity, threshold, confidence, or risk scoring
- weather gating
- regional, climate, or numeric offsets
- task manager behavior
- compliance, coverage, cadence, or engagement systems
- AI/photo recognition
- destructive history behavior
- automatic plan generation as a product feature
- duplicate suppression or merge behavior

### 4.18 Handoff to S9.B

S9.B owns the catalog-change layer:

- upgrade availability trigger
- current vs candidate plan comparison
- generated review bucket content
- apply/postpone effects
- overlay reconciliation
- unresolved overlays

S9.A may expose stable snapshot references that S9.B can compare later. S9.A does not define S9.B comparison, review, or reconciliation behavior.

## 5. Weather layer

### 5.1 Purpose

The Weather layer is an advisory display layer on top of active-window snapshot outputs.

It helps compose neutral weather notes near relevant plan/window/detail surfaces. It does not author plan state, orchard decisions, or treatment recommendations.

### 5.2 Weather inputs

Weather inputs are architecture-level advisory inputs only.

Input categories:

- forecast/current weather values
- location context, if available
- forecast horizon
- timestamp / freshness

Rules:

- S9.A does not define a weather API.
- S9.A does not define Open-Meteo or any provider-specific implementation.
- S9.A does not define weather storage.
- Weather input is optional; absence of weather data does not change plan state.

### 5.3 Advisory-only contract

Weather must not change:

- window state
- gate state
- plan state
- cue ordering
- cue existence
- effective open/close dates
- Activity matching
- monitoring state
- archive visibility
- stage effects

Weather is display context only. It may help the grower decide when to act, but the grower remains the decision-maker.

### 5.4 Weather display composition

Weather may display neutral advisory notes next to current or near-term plan/window/detail surfaces that are already visible from the active-window snapshot.

Allowed neutral examples:

```text
Vremenska napomena
Provjeri uvjete prije rada.
```

```text
Vremenska napomena
Provjeri lokalnu prognozu i stvarne uvjete u voćnjaku prije odluke.
```

Composition rules:

- Prefer inline notes on relevant seasonal action cards/details.
- Use a global Home/Kalendar band only when one advisory applies to multiple visible current or near-term cards.
- Far-future windows should not carry weather notes.
- Weather notes must stay neutral and beginner-readable.
- Weather notes may remind the user that forecast data does not know the exact micro-location or actual orchard conditions.

### 5.5 Forbidden weather behavior

Weather must not:

- block actions
- hide actions
- reschedule actions
- move windows
- change derived state
- reorder cards by urgency or suitability
- push notifications
- say treatment is safe or unsafe
- recommend product, material, dose, or brand
- trigger automatic plan changes
- trigger plan upgrade review
- create cue existence or cue ordering
- create compliance, task, pressure, or urgency state
- become a weather-derived gate

### 5.6 Handoff and non-goals

Weather implementation and API details are later implementation concerns after explicit approval.

S9.A does not define:

- weather provider integration
- cache behavior
- localStorage keys
- sync behavior
- regional/climate offsets
- weather-based plan adjustment
- weather-based treatment recommendation

Weather-related regional/climate strategy is future work, not S9.

## 6. V1 → V2 migration

*To be filled in S10.*
