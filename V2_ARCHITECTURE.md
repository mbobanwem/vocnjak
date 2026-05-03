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

*To be filled in S9.*

## 5. Weather layer

*To be filled in S9.*

## 6. V1 → V2 migration

*To be filled in S10.*
