# VOCNJAK V2 — CURRENT STATE

## Status

Operational tracker.

This document is not source of truth, not schema, not runtime behavior, not implementation, and not catalog content.

It tracks current phase, completed documentation milestones, next sessions, future roadmap pointers, and stop conditions so agents do not reopen closed work or drift from the owner-approved path.

If this document conflicts with locked/core documents, locked/core documents win.

This document should be updated after relevant documentation/session commits.

---

## Current phase

Phase: Runtime implementation continues. Runtime Slice 0, Slice 1, Slice 2, Slice 3, Slice 4, Slice 5, Slice 6, and Runtime Slice 7 through S7.4 are complete. Focused S3/S4 adversarial review after the post-Slice-4 safety fix passed and owner verification accepted the PASS. Pre-Slice-5 Add Plant date-validation message polish is complete. Pre-Slice-5 Action Window Seed prerequisite is complete (`df6a7fc Implement Action Window Seed prerequisite`); owner browser verification passed and focused adversarial review passed. Plan-template projection hardening is complete (`bcaf3a2 Harden plan-template projection rules`). Runtime Slice 5 is complete (`8bc630a Implement Runtime Slice 5 activity capture`). Runtime Slice 6 is complete (`99e76c8 Implement Runtime Slice 6 snapshot and calendar surfaces`). Pre-Slice-7 Action Window Notes Projection prerequisite is complete (`ad9a113 Project action-window notes into canonical catalog` and `a1b5307 Clean B1 action-window notes boundary`). Runtime Slice 7 is complete through S7.4 (`d61cc90 Harden S7 seasonal action detail display`). B2 metadata-only projection boundary is complete. Runtime Slice 8 Step 1, Step 2, and Step 3 are complete. Full Runtime Slice 8 is not complete.

Current goal:

Post-S8 Step 3. B2 metadata-only projection boundary is complete after S7.4. Runtime Slice 8 Step 1 added Plant detail read-only B2 monitoring/risk preview only. Runtime Slice 8 Step 2 added Plant detail free-standing `kind = "note"` capture with `payload.text` and Dnevnik / plant-history evidence under `Opažanja`. Runtime Slice 8 Step 3 added read-only Pregled/Kalendar B2 monitoring/risk visibility.

Current immediate next step:

```text
Runtime Slice 8 Step 1, Step 2, and Step 3 are complete. Plant detail consumes the private B2 source-map projection boundary through a narrow S8 preview bridge and renders calm read-only monitoring/risk preview sections only for matching plant species. Step 2 adds only Plant detail free-standing `kind = "note"` capture with `payload.text`, `program_id = null`, no `observation_group_id`, and factual Dnevnik / plant-history rendering under `Opažanja`. Step 3 adds only read-only Pregled/Kalendar B2 monitoring/risk visibility: Pregled shows current overlapping context, Kalendar shows B2 date ranges under `Praćenje`, and both remain non-capture, non-diagnostic, non-prescriptive, non-compliance, non-persisted, and separate from `buildSeasonalSnapshot(...).monitoring`. Deferred: structured trap/scouting/symptom/stage capture until registries/vocabularies are owner-approved, observation correction, stage confirmation, and monitoring-context record-status copy. `V2_UX_MODEL.md` §16.7 outside-period disclosure remains deferred and requires explicit owner approval.
```

S11 status: DONE.

Runtime Slice 0 status: DONE (`642d0b1 Implement Runtime Slice 0 V2 shell`).

Owner runtime verification of Slice 0:
- `#v2` shell works
- exit back to legacy works
- all 13 protected legacy key VALUES unchanged
- `vocnjak_v2` not created

Runtime Slice 1 status: DONE (`178cfa8 Implement Runtime Slice 1 V2 store boot`).

Owner runtime verification of Slice 1:
- `#v2` visual boot works
- clean-start store creation works
- valid-load status works
- `vocnjak_v2` empty v1 shape OK
- `vocnjak_v2` byte-identical across `#v2` reload (idempotency)
- invalid `vocnjak_v2` is preserved, not overwritten or auto-fixed
- invalid cleanup + reinitialize works
- all 13 protected legacy key VALUES unchanged
- `vocnjak_v2` exists after Slice 1, as expected

Runtime Slice 2 status: DONE (`254448f Implement Runtime Slice 2 catalog seed`).

Owner runtime verification of Slice 2:
- normal URL without `#v2` opens legacy app
- `#v2` opens V2 shell
- Slice 1 valid-load works
- Slice 2 already-loaded status works
- `catalog_v1` species set OK
- `catalog_v1` variety counts OK
- Mediterranean season profiles OK
- all record collections remain empty
- `review_state` remains `{}`
- `vocnjak_v2` byte-identical across `#v2` reload
- invalid `vocnjak_v2` is preserved, not overwritten or auto-fixed
- invalid cleanup restore works
- different `active_catalog_version` preserved
- Slice 2 makes no changes for different `active_catalog_version`
- different-catalog cleanup restore works
- all 13 protected legacy key VALUES unchanged

Runtime Slice 3 status: DONE (`8fd2571 Implement Runtime Slice 3 V2 export/import safety baseline`).

Owner runtime verification of Slice 3:
- default route without `#v2` keeps legacy app as default
- `#v2` shows Slice 3 export/import controls
- baseline export creates valid `vocnjak-v2-YYYY-MM-DDTHHMMSS.json`
- exported V2 JSON has exact Slice 3 foundation baseline shape (9 root keys, `meta.store_format_version` 1, `meta.active_catalog_version` `catalog_v1`, `catalogs` exactly `{ catalog_v1 }`, all 6 immutable arrays empty, `review_state` `{}`)
- valid export/import round-trip succeeds
- invalid semantic edit (`active_catalog_version: null`) fails closed
- malformed JSON import fails closed
- missing / unexpected root keys fail closed
- wrong collection types fail closed
- non-empty `plants`, `activities`, or `review_state` fail closed
- catalog shape drift (missing species, wrong variety counts, pomegranate with varieties, catalog key/value mismatch) fails closed
- file-size guard rejects files over 1 MB
- cancelled import does not modify `vocnjak_v2`
- successful import writes compact `vocnjak_v2`
- no persistent V2 backup key is created (`vocnjak_v2` is the only V2 storage key)
- only `vocnjak_v2` is used by the Slice 3 V2 path
- Slice 3 V2 path does not read, write, or delete protected legacy keys
- legacy v4 export still works
- legacy v4 import still works and writes `vocnjak_v4_preimport_backup` via the existing legacy code path, as expected
- protected legacy key VALUES remained unchanged across V2-only Slice 3 activation/export/import tests; the separate legacy v4 import verification intentionally exercised existing legacy behavior and wrote `vocnjak_v4_preimport_backup`, which confirms legacy import remains functional and is not a Slice 3 mutation

Runtime Slice 4 status: DONE (`f99e5f6 Implement Runtime Slice 4 V2 plant foundation`).

Owner runtime verification of Slice 4:
- normal `#v2` load works
- Add Plant works through UI
- plant detail renders correctly
- stored `vocnjak_v2` shape is valid
- `plants[]` contains valid route-safe `plant_id` values
- `plant_id` values are unique
- `stable_order` values are unique
- all plants have `catalog_version: catalog_v1`
- no plant has `archive` key
- all non-plant collections remain empty:
  - `plan_instances`
  - `plan_overlays`
  - `activities`
  - `observations`
  - `corrections`
  - `review_state`
- only V2 storage key is `vocnjak_v2`
- export/import roundtrip works
- after deleting `vocnjak_v2` and importing exported JSON, plants are restored
- protected legacy key VALUES remained unchanged across V2-only Slice 4 verification

Post-Slice-4 safety fix status: DONE (`8a9c4ae Fix Runtime Slice 4 catalog import validation`).

Adversarial review after Runtime Slice 4 tracker sync found a catalog import validation blocker before Slice 5: imported `catalogs.catalog_v1` was validated too loosely and could drift while preserving counts. The fix treats runtime `catalog_v1` as canonical, not user-editable:
- Slice 2 exposes canonical runtime `CATALOG_V1` via non-writable/non-configurable `window.v2CanonicalCatalogV1`
- Slice 3 `validateCatalogV1` now compares imported `catalog_v1` against canonical runtime `CATALOG_V1`
- same-count variety drift is rejected
- same-count fallback drift is rejected
- changed canonical `harvestWindow` values are rejected
- unsupported prototype-like keys such as `toString` / `__proto__` cannot be used to make plant validation pass

Owner browser verification of post-Slice-4 safety fix:
- `window.v2CanonicalCatalogV1` is truthy
- `typeof window.v2ValidateForBackup === "function"`
- `plum.varieties.toString` drift rejected with error `catalog_v1.species.plum.varieties unexpected key: toString`
- `plum.fallback.toString` drift rejected with error `catalog_v1.species.plum.fallback unexpected key: toString`
- changed `plum.fallback.early.harvestWindow.monthStart` rejected with error `catalog_v1.species.plum.fallback.early.harvestWindow.monthStart value differs from canonical catalog`
- `localStorage.getItem("vocnjak_v2")` stayed unchanged after each test

Focused S3/S4 adversarial review after the post-Slice-4 safety fix: PASS — accepted by owner.

Owner verification after focused S3/S4 adversarial review:
- crafted `catalog_v1` drift with `plum.varieties.toString` was rejected with `catalog_v1.species.plum.varieties keys must match canonical catalog`; `vocnjak_v2` remained unchanged
- future-date Add Plant data was not persisted (`Future-date plants found: []`)
- malformed encoded hash and invalid plant route did not crash; app fell back safely to the V2/Biljke view
- script-like nickname/note text rendered as plain text; no alert executed

Pre-Slice-5 UX polish completed:
- internal Add Plant future-date validator errors for `planted_at` / `purchased_at` are mapped to user-friendly Croatian messages; validator invariants are unchanged

Pre-Slice-5 Action Window Seed status: IMPLEMENTED AND OWNER-VERIFIED. Runtime commit `df6a7fc Implement Action Window Seed prerequisite` expanded canonical V2 `catalog_v1` with real action-window definitions and real `window_def_id` values while preserving the V2-only scope and protected legacy-key isolation. Owner browser verification passed and focused adversarial review passed. Documentation hardening commit `bcaf3a2 Harden plan-template projection rules` records the projection guardrails. This did not start Runtime Slice 5.

Action Window Seed hardening lesson: runtime/model work MUST serve the approved orchard work plan. Future catalog/action-window work MUST start from a species-by-species source map that preserves shared-source rows, species-specific overrides, variety/fallback harvest timing, and deferred monitoring/awareness/watering carry-forward. Generic runtime seeds are invalid.

Runtime Slice 5 status: DONE (`8bc630a Implement Runtime Slice 5 activity capture`). Runtime Slice 5 implemented global Activity capture, Activity-only Dnevnik, Activity correction, and validator/import/export support for Activity and Correction records.

Manual local browser verification for Runtime Slice 5 was performed on `http://localhost:8765/index.html#v2`:
- initial `vocnjak_v2` validator returned `[]`
- basic Activity capture passed
- Activity shape/provenance passed
- multi-plant Activity capture passed
- grouped Activity invariant passed
- Correction creation passed
- Correction shape passed
- Dnevnik effective correction display passed with `ispravljeno`
- final `vocnjak_v2` validator returned `[]`
- protected legacy key byte-equality passed:
  - `vocnjak_v3`: unchanged
  - `vocnjak_v4`: unchanged
  - `vocnjak_v3_premigration`: unchanged
  - `vocnjak_v4_preimport_backup`: unchanged
- negative validator tests passed:
  - cross-species window rejected
  - invalid provenance rejected
  - correction missing target rejected
  - mixed group status rejected
  - Zagreb midnight valid case accepted

Runtime Slice 5 verification precision:
- full Cloudflare deployment verification was not performed
- full import/export UI round-trip was not manually verified
- validator/import/export support for Activity and Correction records exists in runtime, but manual verification did not include a full import/export UI round-trip

Known deferred Runtime Slice 5 gap: `V2_UX_MODEL.md` §16.7 outside-period disclosure is deferred from the Slice 5 commit. Reason: safe implementation requires window-active-period derivation and overlaps with Slice 6 snapshot/window-state logic. This remains non-blocking guidance, not a write-time invariant, and should be tracked as deferred polish / Slice 6-adjacent work.

Runtime Slice 6 status: DONE (`99e76c8 Implement Runtime Slice 6 snapshot and calendar surfaces`). Runtime Slice 6 implemented a private deterministic active-window snapshot, Pregled rendering from that snapshot, Kalendar rendering from that snapshot, and the minimal seasonal-action placeholder route for Slice 7. The commit changed `index.html` only and was pushed to `origin/main`.

Runtime Slice 6 implementation facts:
- `#v2/pregled` renders a neutral overview from the read-time snapshot.
- `#v2/kalendar` renders seasonal action cards from the read-time snapshot.
- no derived seasonal state is persisted to `vocnjak_v2`
- no `window.v2Snapshot` or new global snapshot/debug API was added
- visible Monitoring/Praćenje UI is not part of Slice 6
- weather, risk-awareness, observation capture, stage capture, archive/lifecycle, plan upgrade review, and Za pregledati behavior remain out of Slice 6

Owner manual local verification for Runtime Slice 6:
- `#v2/kalendar` loads and renders seasonal action cards
- `#v2/pregled` loads and renders neutral overview
- Kalendar current-month behavior was observed; owner had scrolled upward to January in one screenshot
- Kalendar placeholder route works and shows `Detalj sezonske radnje stiže u Slice 7.`
- legacy app without `#v2` loads normally
- `window.v2ValidateForBackup(JSON.parse(localStorage.getItem("vocnjak_v2")))` returned `[]`
- `"v2Snapshot" in window` returned `false`
- Kalendar renders `Sezonske radnje` only
- Pregled/Kalendar render no visible Praćenje/Monitoring UI
- Pregled/Kalendar render no weather or risk-awareness UI
- no forbidden task/compliance/progress wording was observed in screenshots

Runtime Slice 6 verification precision:
- Cloudflare deployment verification was not performed
- full import/export UI round-trip was not performed
- direct protected legacy localStorage byte-dump comparison was not performed
- protected legacy isolation was checked by source isolation and legacy no-hash smoke test only
- Cloudflare production state is not claimed

Known deferred / next-slice notes after Runtime Slice 6:
- Runtime Slice 7 is complete through S7.4; Plant detail seasonal cards, Detalj sezonske radnje, Plant detail diary preview, and display hardening landed.
- Monitoring/Praćenje remains product-critical and may later appear in Kalendar/Pregled, but visible Monitoring UI is not part of Slice 6 and the first approved Slice 8 implementation is Plant detail only.
- Pregled/Kalendar monitoring integration was deferred after Slice 6 until Plant detail behavior and timing/display semantics were owner-approved; Runtime Slice 8 Step 3 has since landed read-only visibility.
- `V2_UX_MODEL.md` §16.7 outside-period disclosure remains not implemented in Slice 6 and remains deferred as Slice-6-adjacent polish or later owner-approved work.

Pre-Slice-7 Action Window Notes Projection prerequisite status: DONE (`ad9a113 Project action-window notes into canonical catalog` and `a1b5307 Clean B1 action-window notes boundary`). The prerequisite is canonical action-window notes projection only. It did not start Runtime Slice 7 and did not implement Monitoring/Praćenje, awareness/risk, stage vocabulary, target/symptom registry, or any new UI surface.

B1 (`ad9a113`) added:
- optional canonical `action_window_definitions[].notes`
- canonical / runtime support for projected action-window notes
- the Croatian shared `spray_safety_notes` constant on canonical `catalog_v1`
- validator support for `notes` (optional non-empty string when present) and for `spray_safety_notes` (non-empty string array, length and content equal to canonical)
- canonical drift detection on the new fields via `compareCanonicalCatalogNode`
- a deterministic refresh path for old `vocnjak_v2` stores that lack B1 notes via `isB1RefreshableCatalogV1` / `normalizeStoreCatalogForCurrentCanonical`, gated on the stored catalog matching canonical minus the B1 projection

B1.1 (`a1b5307`) cleaned the projected note text by removing:
- monitoring decision prose ("razmatrati samo ako monitoring", "Monitoring/Praćenje pomaže odluci", "praćenje bakterijske paleži", "Pratiti vizualno -")
- awareness / risk prose (specific pure-frost awareness, pucanje plodova awareness, disease-pressure-history awareness)
- pathogen / symptom registry prose (`Venturia inaequalis`, `Venturia pirina`, `Taphrina deformans`, `Monilinia laxa`, `Pseudomonas savastanoi`, `šarka`, "vidljiva kovrčavost lista znači…")
- frost-diagnostic prose (apricot post-frost crop explanation, "POST-MRAZNI ROD", "mraz je razlog")
- history-coaching prose ("zabilježiti štetu od mraza u povijest", "povijest pomaže razlikovati godine s mrazom od godina s bolešću ili štetnicima", "zabilježiti problem za iduću sezonu")

B1.1 preserved practical seasonal-action guidance: fenofaza / timing cues, safe-execution wording (suho, bez vjetra, ≥5 °C, ne tijekom cvatnje, izvan leta pčela, prema etiketi proizvoda), oil/copper 7–10-day spacing, "ne duplicirati" / "ne automatski" guidance, product-category / label wording, young-tree caveats, thinning / harvest / bird-net practical guidance, the spray-safety constant, and the four owner-approved direct frost-action lines (`trunk_whitewash` purpose, `oil.dormant` "Ne primjenjivati ako je najavljen mraz", olive young-tree agrotekstil ≤−7 °C, pomegranate winter-wrap, quince "Brati prije jačeg mraza" harvest deadline).

B1/B1.1 implementation precision:
- B1 and B1.1 changed `index.html` only; no other repo files were modified by either commit.
- canonical `window_def_id`, `label`, `action_type`, `anchor`, and `tolerance` values are unchanged from before B1.
- `actionWindow()`, `buildActionWindowDefinitions`, `validateActionWindowDefinition`, `validateSpraySafetyNotes`, `validateCatalogV1`, `compareCanonicalCatalogNode`, `catalogDeepEquals`, `catalogWithoutB1Projection`, `hasAnyActionWindowNotes`, `isB1RefreshableCatalogV1`, `normalizeStoreCatalogForCurrentCanonical`, V2 export/import handlers, and Activity / Correction validators are byte-identical to `ad9a113` after B1.1 (B1.1 only edited `STANDARD_ACTION_WINDOW_NOTES`, `SPECIES_ACTION_WINDOW_NOTES`, and `HARVEST_ACTION_WINDOW_NOTES` content).
- no `window.v2Snapshot` global was introduced.
- no new globals (`window.<name> = ...`) were introduced.
- no new `innerHTML`, `outerHTML`, `document.write`, `eval`, or `new Function(` calls were introduced.
- Slice 6 surfaces are unchanged: `renderPregled`, `renderKalendar`, and the seasonal-action placeholder (`Detalj sezonske radnje stiže u Slice 7.`) are not in either commit.
- Activity and Correction schemas / validators are unchanged.

B1/B1.1 verification precision:
- source-inspection / static grep verification was performed against `index.html` after B1.1: no `monitoring|Monitoring|Praćenje|praćenje|klop|trap|scouting`, `Taphrina|Venturia|Monilinia|Erwinia|Pseudomonas|šarka`, or `Cuprablau|Score|Mospilan|Lac Balsam|Bordo|Switch` matches inside the three note-map constants; the four owner-approved frost-action lines remain
- full browser runtime verification of B1.1 was not performed for the B1.1 commit
- Cloudflare deployment verification was not performed
- full import/export UI round-trip was not performed
- direct protected legacy localStorage byte-dump comparison was not performed; protected legacy isolation was checked by source isolation only

Updated after B2 metadata-only implementation (NOT implemented by B1/B1.1):
- source-map projection grouping by stable ids: `monitoring_track` / `risk_awareness_track` is complete as private metadata only
- Runtime Slice 8 Step 1 consumes B2 metadata only for Plant detail read-only monitoring/risk preview through a narrow S8 preview bridge
- Runtime Slice 8 Step 2 stores only free-standing note Observations from Plant detail and renders them as factual Dnevnik / plant-history rows under `Opažanja`
- Runtime Slice 8 Step 3 renders B2 monitoring/risk context read-only on Pregled and Kalendar from private B2 metadata only
- `monitoring_programs[]` remains unimplemented
- minimal generic MVP `stage_vocabulary[]`, or Slice 8 stage confirmation writes deferred/restricted until vocabulary exists, remains unimplemented
- completed first S8 implementation: Plant detail §4.10 monitoring and §4.9 Sezonski rizici read-only B2 preview only
- completed second S8 implementation: Plant detail note Observation capture and Dnevnik / plant-history `Opažanja` rows only
- completed third S8 implementation: Kalendar `Praćenje` (§2.11 monitoring cards and §2.12 risk-awareness cards) and Pregled current-season `Praćenje` visibility only
- completed S8 Step 4a documentation clarification: later runtime may implement minimal Plant-detail-only, one-plant, free-standing trap count capture from the bounded `trap_capture_sources[]` source map for source rows 337, 654, 860, 1596, 1643, 2455, 2949, and 2977 only
- S8 Step 4a documentation does not implement runtime, UI, storage, validator, Pregled/Kalendar, program attachment, broad target/pest registry, symptom registry, stage vocabulary, diagnosis, treatment advice, pressure/severity scoring, weather automation, or compliance behavior
- structured scouting/symptom/stage capture, program-attached observation capture, observation correction, and monitoring rows beyond this bounded trap-only path remain deferred to later owner-approved Slice 8 steps
- no `awareness_definitions[]`, `target_registry[]`, or `symptom_registry[]` in the current B2 projection or S8 Step 4a source-map clarification

Runtime Slice 7 is complete through S7.4. It did not rely on monitoring or awareness content. B2 metadata-only projection boundary is complete; Runtime Slice 8 Step 1 is the first runtime consumer of that metadata and is limited to Plant detail read-only preview. Runtime Slice 8 Step 2 adds Plant detail free-standing note Observation capture and factual Dnevnik evidence only. Runtime Slice 8 Step 3 adds read-only Pregled/Kalendar monitoring/risk visibility only. S8 Step 4a is documentation-only clarification for bounded future trap capture; no runtime implementation exists yet.

Pre-Slice-5 Activity provenance / Correction storage-shape doc patch status: DOCUMENTATION-ONLY LOCK CONSUMED BY SLICE 5. This patch locked the exact Runtime Slice 5 Activity provenance shape as `provenance: { source: "user" }`, locked Correction persisted fields as `correction_id`, `original_record_id`, `original_record_type`, `correction_types`, `corrected_values`, optional `explanation`, and `created_at`, recorded the stricter Slice 5 multi-plant group invariant, and recorded unknown variety + unknown ripening harvest fallback to the species `mid` fallback window where available. Runtime Slice 5 implementation consumed this lock in commit `8bc630a Implement Runtime Slice 5 activity capture`.

Completed S11 patches:
- `S11.A — Roadmap authority, sequencing principles, commit/runtime safety boundaries` (`627c83d Define S11 roadmap authority and runtime safety`)
- `S11.B — Storage substrate, V2 key, clean-start contract, activation strategy` (`3822f1e Define S11 storage and activation posture`)
- `S11.C1 — Foundation slices 0–4` (`bf7b066 Define S11 foundation slice plan`)
- `S11.C2 — Usable/default slices 5–9` (`a56fe75 Define S11 usable-default slice plan`)
- `S11.D — Verification gates, milestones, stop conditions, runtime handoff` (`06feb13 Define S11 verification gates and runtime handoff`)

Implementation was forbidden through S11 documentation. After explicit owner approval, Runtime Slice 0 was implemented and verified (commit `642d0b1`). Runtime Slice 1 was then owner-approved and implemented (commit `178cfa8`). Runtime Slice 2 was then owner-approved and implemented (commit `254448f`). Runtime Slice 3 was then owner-approved and implemented (commit `8fd2571`). Runtime Slice 4 was then owner-approved and implemented (commit `f99e5f6`). Post-Slice-4 adversarial review found and closed the canonical `catalog_v1` import validation blocker before Slice 5 (commit `8a9c4ae`). Focused S3/S4 adversarial review after that fix passed, owner verification accepted the PASS, and the pre-Slice-5 Add Plant date-validation message polish was completed without starting Runtime Slice 5. The `window_def_id` source-of-truth reconciliation then landed (`7dd7141`), the Pre-Slice-5 Action Window Seed prerequisite runtime implementation landed (`df6a7fc`) without starting Runtime Slice 5, owner browser verification and focused adversarial review passed, and plan-template projection hardening landed (`bcaf3a2`). Runtime Slice 5 then landed after owner approval (`8bc630a Implement Runtime Slice 5 activity capture`). Runtime Slice 6 then landed after owner approval (`99e76c8 Implement Runtime Slice 6 snapshot and calendar surfaces`). The Pre-Slice-7 Action Window Notes Projection prerequisite then landed in two commits after owner approval (`ad9a113 Project action-window notes into canonical catalog` for B1, `a1b5307 Clean B1 action-window notes boundary` for B1.1). Runtime Slice 7 then landed through S7.4 after owner approval (`d61cc90 Harden S7 seasonal action detail display`). Runtime Slice 8 Step 1 then added Plant detail-only read-only B2 monitoring/risk preview after owner approval. Runtime Slice 8 Step 2 then added Plant detail free-standing note Observation capture and factual Dnevnik evidence after owner approval. The plan-template projection hardening lesson remains active: approved plan templates and plant catalog drive runtime projection; later Slice 8 work remains owner-approved.

§0 monitoring constraints remain locked and authoritative.

Legacy data and V1/V3/V4 keys remain protected per `V2_EXECUTION_ROADMAP.md` §8 and §14.

Completed S10:
- `S10 — Clean V2 transition / migration architecture` in `V2_ARCHITECTURE.md` `## 6. V1 → V2 migration`

S10 strategy:

- clean V2 start
- no automatic legacy record conversion
- legacy data preserved untouched
- optional raw legacy export is archive/reference only
- raw legacy export is not a V2 backup
- V2 export/import is the platform-neutral portability contract
- native storage choice and backup eligibility are S11/later implementation concerns

Completed S9:
- `S9.A — Active-window snapshot + weather advisory` (`c19eeeb Define S9 active snapshot and weather boundaries`)
- `S9.B — Upgrade diff engine + overlay reconciliation` (`656d403 Define S9 upgrade diff and overlay reconciliation`)

Completed S8:
- `S8.A — Core storage model` (`28c4b39 Define S8 core storage model`)
- `S8.B — Validation, IO, and implementation-readiness closure` (`e443559 Define S8 validation and storage boundaries`)

Completed S7 flows:
- `## 9. Plan upgrade review flow`
- `## 10. Monitoring capture flow`
- `## 11. Stage confirmation flow`
- `## 12. "Za pregledati" resolution flow`
- `## 13. Plant profile management flow`
- `## 14. Plant lifecycle / archive flow`
- `## 15. Monitoring / Awareness detail`
- `## 16. Evidence capture flow`
- `## 17. Record correction flow`

S6 status:

S6 core UX surfaces are written / materially complete in `V2_UX_MODEL.md`.

Completed S6 core surfaces:
- `## 1. Pregled (home)`
- `## 2. Kalendar`
- `## 3. Dnevnik`
- `## 4. Biljke`
- `## 5. Detalj sezonske radnje`

No implementation starts yet. No runtime work starts until explicitly approved.

---

## Product stance now locked for current V2

Vocnjak V2 is:

- calendar-first for beginner planning
- plant-state-aware for execution
- orchard-first
- beginner-friendly
- multi-country aware
- practical, not academic
- no automatic spray calendar
- no pesticide recommendation engine
- no phenology-only expert system

Calendar windows remain important because users need to plan ahead: buy materials, prepare tools, schedule work, understand the season, and avoid being surprised by orchard tasks.

A calendar window such as `15.1.–31.1.` is an approximate planning period, not a blind instruction.

When the user opens an action, the app must explain the practical agronomic meaning in beginner language:

- what the action is for
- what problem it prevents or reduces
- what plant state or real-world cue to check
- what weather or safety conditions matter
- what product/material category is needed where relevant
- when to skip, delay, or avoid the action

Regional/climate numeric offsets are not part of current V2.

Do not introduce:

- `climateProfile`
- `regionProfile`
- `baseClimate`
- `offsetDays`
- hidden regional shifts
- hardcoded regional formulas

Regional adaptation is future work.

---

## Completed milestones

### S5.2 — Monitoring split cleanup

Status: DONE / pending review

Owner-approved monitoring split rule applied to active monitoring entries where one entry mixed:
- trap vs scouting
- pest vs disease
- treatable pest vs non-treatable disease/symptom

No schema changes.
No new monitoring model.
No target_codes[].
No thresholds.

### DONE — Pre-S3 orchard plan template closure

Commit:

- `bdda809 Finalize V2 orchard plan template closure`

Status:

- `V2_ORCHARD_PLAN_TEMPLATES.md` contained template coverage for the 18 pre-S4 candidate plant types / subtypes.
- Shared block exists for standard fruit trees.
- Mediterranean, citrus, and nut groups are handled separately.
- Monitoring does not equal treatment.
- No automatic spray calendar.

Remaining before S3:

- run plan-template readiness audit to check practical usefulness and beginner clarity across all 18 types.

### DONE — Plant catalog variety model

Commit:

- `29dc0d2 Finalize V2 plant catalog variety model`

Status:

- `V2_PLANT_CATALOG.md` supports timing-driving varieties and user-facing-only varieties.

### DONE — Validated catalog varieties

Commit:

- `13c2b1b Add validated V2 catalog varieties`

Status:

- approved validated varieties added.
- olive user-facing-only variety model added.
- citrus subtype model existed as pre-S4 input only.
- S4 owner decision supersedes this for current V2: citrus is removed from current supported scope and deferred to future roadmap work.
- no olive timing-driving model.

### DONE — Deferred regional timing decision

Commit:

- `c86baa7 Record deferred regional timing decision`

Status:

- regional/climate numeric timing shifts deferred.
- no `climateProfile`, `regionProfile`, `baseClimate`, `offsetDays`, or hardcoded regional formulas in current V2.

### DONE — Calendar-first product vision clarification

Commits:

- `ffa6231 Clarify calendar-first product vision`
- `39cc684 Clarify calendar windows as planning periods`

Status:

- `PRODUCT_VISION.md` now explicitly protects calendar windows as the beginner planning surface.
- Product vision now requires beginner-language explanations for agronomic cues and product-label wording.
- Product vision now includes owner decision / vision-change rule.
- `V2_AGENT_ENTRYPOINT.md` includes calendar-first, plant-state-aware guardrail for future agents.

---

## Active roadmap before S3 audit

### S3.0B — Plan Template Readiness Audit

Type: read-only audit.

Status: DONE — read-only analysis completed.

Verdict:

- `V2_ORCHARD_PLAN_TEMPLATES.md` is structurally ready for S3.
- All 18 pre-S4 candidate plant types / subtypes had template coverage.
- No major blocker was found.
- Proceed to `S3.1 — Apple-only S3 audit dry-run`.
- Do not run a broad S3.0C rewrite before S3.1.

Known non-blocking findings to preserve for S3/S4/S5:

- Regional caveat wording is strongest in apple and should be evaluated for consistent use elsewhere.
- Beginner explanations should be checked for terms such as dormancy, fenofaza, bud swell, threshold, pressure, wet spring, expert/local advice, and product-label wording.
- “Stručni savjet” / “lokalni pragovi” should become more beginner-actionable where used.
- Walnut and hazelnut lack explicit fertilization/irrigation entries; S3 should verify whether this is acceptable or needs targeted guidance, especially for young plants.
- Pomegranate spring/summer guidance is light and should be source-checked.
- Almond is somewhat lighter than peach/nectarine and should be source-checked.
- No automatic spray calendar was found.
- Product/material categories are generally present and no hardcoded product-brand recommendation pattern was found.

Goal:

Check whether `V2_ORCHARD_PLAN_TEMPLATES.md` is practically ready for S3 across all 18 plant types / subtypes.

Do not edit templates in this session.

Audit each plant type / subtype for:

1. yearly plan coverage exists
2. harvest window or harvest guidance exists
3. pruning guidance exists, or absence is justified
4. fertilization guidance exists, or absence is justified
5. irrigation guidance exists, or absence is justified
6. monitoring / pest / disease guidance exists where relevant
7. spray/protection guidance exists only where justified
8. beginner clarity is sufficient
9. product/material category is explained where relevant
10. plant-state / real-world cues are explained in plain language
11. skip/delay/avoid conditions are explained where relevant
12. young-tree relevance is explained where relevant
13. regional/climate caveats are present only as notes, not numeric offsets
14. no automatic spray calendar is introduced
15. no pesticide recommendation engine is introduced

Output:

- findings table by all 18 plant types / subtypes
- concrete gap list
- owner decision items
- recommended targeted fix sessions, if needed

Allowed files:

- create or edit a findings draft only if explicitly requested by owner

Not allowed:

- editing `V2_ORCHARD_PLAN_TEMPLATES.md`
- editing `V2_PLANT_CATALOG.md`
- editing model/schema/runtime docs

Exit criteria:

- owner confirms whether targeted fixes are needed before S3.

---

### S3.0C — Targeted Plan Template Fix Pass

Type: conditional edit session.

Only do this if S3.0B identifies concrete gaps and owner approves fixes.

Allowed changes:

- improve beginner clarity
- add product/material category wording
- add practical “what to look for” wording
- add skip/delay/avoid wording
- clarify regional caveats without numeric offsets
- add missing obvious plan guidance only with owner approval

Forbidden changes:

- schema/model changes
- climateProfile / regionProfile / offsetDays
- automatic spray decisions
- pesticide recommendation engine
- new variety expansion
- broad rewrite of templates
- runtime implementation

Exit criteria:

- plan templates are stable enough to enter S3 audit.

---

### S3.0D — Pre-S3 readiness closure

Type: documentation checkpoint.

Goal:

Confirm that:

- `PRODUCT_VISION.md` is clarified
- `V2_AGENT_ENTRYPOINT.md` is clarified
- `V2_CURRENT_STATE.md` is updated
- `V2_PLANT_CATALOG.md` is stable pre-S3 input
- `V2_ORCHARD_PLAN_TEMPLATES.md` is stable pre-S3 input
- no known blocker remains before S3 apple-only dry-run

Exit criteria:

- owner approves moving into S3.1.

---

## S3–S5 roadmap — catalog and plan-template audit / validation

S3–S5 are connected and should close the catalog + orchard plan-template documentation track before UX/architecture work begins.

This roadmap is provisional and should be refined as S3 findings emerge.

### S3 — Audit findings and dry-run validation

Purpose:

- audit stabilized pre-S3 inputs
- create source-backed findings
- identify unsafe wording, vague beginner guidance, and source gaps
- preserve ambiguity instead of guessing
- queue owner decisions
- produce candidate mapping notes only where useful

S3 starts small:

- S3.1 — Apple-only S3 audit dry-run
- S3.2 — Pome group audit: pear + quince
- S3.3 — Stone fruit audit batch 1: sweet_cherry, sour_cherry, plum
- S3.4 — Stone fruit audit batch 2: peach, nectarine, apricot, almond
- S3.5 — Mediterranean audit: olive, fig, pomegranate
- S3.6 — Citrus audit: lemon, orange, mandarin
- S3.7 — Nut audit: walnut, hazelnut
- S3.8 — S3 findings consolidation

S3 species/subtype audit status:

DONE — all 18 pre-S4 candidate species/subtypes have been audited.

S4 owner decision after audit:

- citrus is removed from current supported V2 scope
- fig is removed from current supported V2 scope
- lemon, orange, and mandarin are future roadmap candidates only
- fig is a future roadmap/domain candidate only
- future citrus reintroduction depends on regional timing / climate adaptation strategy and full species-level citrus support
- future fig reintroduction depends on dedicated fig domain definition: one-crop vs two-crop behavior, pruning dependency, source-backed harvest timing, and regional interpretation

Completed S3 audit batches:

- S3.1 — apple
- S3.2 — pear, quince
- S3.3 — sweet_cherry, sour_cherry, plum
- S3.4 — peach, nectarine, apricot, almond
- S3.5 — olive, fig, pomegranate
- S3.6 — lemon, orange, mandarin
- S3.7 — walnut, hazelnut

Audit findings output:

- `V2_S3_AUDIT_CONSOLIDATION.md`

Archived detailed evidence:

- `archive/V2_S3_AUDIT_FINDINGS_DETAIL_2026-04.md`

Next required step:

- S4 — Owner decision resolution and source-backed audit closure

Do not start S5 before S4 owner decision resolution is complete.

### S3.1 — Apple-only S3 audit dry-run

Status: DONE — apple dry-run materialized.

Commit:

- `633e56c Add S3 apple audit findings draft`

Output:

- `archive/V2_S3_AUDIT_FINDINGS_DETAIL_2026-04.md`

Verdict:

- Apple is ready for S3 scale-up as-is.
- The apple findings format is accepted as the working S3 findings format.
- No targeted apple wording fix is required before S3.2.
- Apple can serve as the reference pattern for scaling S3 to pome and later groups.

Known apple follow-up items preserved for S4/S5:

- Shared fertilization entry should name a beginner-readable product/material category.
- `fenofaza`, `stručni/lokalni savjet`, `bujno stablo`, and similar terms should be decoded in beginner language.
- Winter copper should receive a clearer plant-state cue and consistent label/regulation wording.
- Apple bird-net entry should be considered for size/type/fixing specificity similar to cherry/peach entries.
- Apple regional caveat is a good reusable pattern for other species.
- Apple harvest template window does not cover the early fallback start, but no current catalog apple variety is `timing: early`; defer unless early apple varieties are added or owner decides otherwise.
- Seasonal irrigation mapping remains an owner/S4/S5 decision because it behaves more like a care period than a discrete action.

Do not fix these now.

Disposition:

- Queue apple wording and mapping items for S4/S5 targeted resolution.
- Proceed to S3.2 pome audit.

### S3.2 — Pome group audit

Status: DONE — pome findings appended.

Commit:

- `82d754b Append S3 pome audit findings`

Output:

- `archive/V2_S3_AUDIT_FINDINGS_DETAIL_2026-04.md`

Scope completed:

- apple — completed in S3.1
- pear — completed in S3.2
- quince — completed in S3.2

Verdict:

- Pome group is ready for S3 scale-up as-is.
- Pear and quince findings scale the apple S3.1 format without modification.
- No targeted pome wording fix is required before S3.3.
- Pome findings should be resolved later through S4/S5 owner decisions and targeted fixes.

Known pome follow-up items preserved for S4/S5:

- Apple regional caveat pattern should be considered for pear, quince, and later all species.
- Shared beginner wording still needs cleanup for terms such as `fenofaza`, `dormancy`, bud stage, bloom stage, `stručni/lokalni savjet`, `threshold`, and `pressure`.
- Shared fertilization entry should name a beginner-readable product/material category.
- Shared winter copper should receive clearer plant-state wording and consistent label/regulation wording.
- Pear monitoring may need to split into pear psylla scouting and moth/codling trap monitoring, but only as an S5 design decision.
- Quince codling/moth trap handling requires S3 source check before adding trap guidance.
- Cumulative early-season copper wording should be considered in S4/S5, especially where shared winter copper, post-pruning copper, and pear/quince pre-bloom copper can stack.
- Pear/quince bird-net and product/material specificity should be considered for S4/S5 consistency.
- Bosc / Bosc's Bottle display wording is a minor naming polish item for S5.

Do not fix these now.

Disposition:

- Queue pome wording, monitoring-shape, and mapping items for S4/S5 targeted resolution.
- Proceed to S3.3 stone fruit batch 1.

### S3.3 — Stone fruit audit batch 1

Status: DONE — stone fruit batch 1 findings appended.

Commit:

- `b35bf5f Append S3 stone fruit batch 1 findings`

Output:

- `archive/V2_S3_AUDIT_FINDINGS_DETAIL_2026-04.md`

Scope completed:

- sweet_cherry
- sour_cherry
- plum

Verdict:

- Stone fruit batch 1 is ready for S3 scale-up as-is.
- Sweet cherry and plum findings scale the established S3 format without modification.
- Sweet cherry now provides two strong reference patterns:
  - yellow sticky plate monitoring for cherry fruit fly
  - bird-net material/timing guidance
- No targeted stone batch 1 wording fix is required before S3.4.
- Stone batch 1 findings should be resolved later through S4/S5 owner decisions and targeted fixes.

Known stone batch 1 follow-up items preserved for S4/S5:

- Sweet cherry yellow sticky plate monitoring should be treated as the reference pattern for non-pheromone monitoring.
- Sweet cherry bird-net entry should be treated as the reference pattern for bird-net material/timing guidance.
- Sour cherry monitoring install details are lighter than sweet cherry and should be considered for S5 polish.
- Sour cherry bird-net material details are missing and should be considered for S5 polish.
- Plum `2. generacija šljivinog savijača` requires source check before beginner-facing decoding or sharper timing wording.
- Plum `2nd generation` wording must not become an automatic spray trigger.
- Sweet cherry rain-cover / fruit-cracking guidance remains deferred and must not be added without source-backed audit and owner approval.
- Sour cherry and plum variety example lists should be completed or deliberately kept representative in S5.
- Glossary need is increasing: `fenofaza`, `dormancy`, `podloga`, `karenca`, `lokalni pragovi`, `stručni savjet`, `2. generacija`.

Do not fix these now.

Disposition:

- Queue stone batch 1 wording, source-check, monitoring-shape, glossary, and mapping items for S4/S5 targeted resolution.
- Proceed to S3.4 stone fruit batch 2.

### S3.4 — Stone fruit audit batch 2

Status: DONE — stone fruit batch 2 findings appended.

Commit:

- `b8387b0 Append S3 stone fruit batch 2 findings`

Output:

- `archive/V2_S3_AUDIT_FINDINGS_DETAIL_2026-04.md`

Scope:

- peach
- nectarine
- apricot
- almond

Scope completed:

- peach
- nectarine
- apricot
- almond

Verdict:

- Stone fruit batch 2 is ready for S3 scale-up as-is.
- Peach, nectarine, apricot, and almond findings scale the established S3 format without modification.
- No targeted stone batch 2 wording fix is required before S3.5.
- Stone batch 2 findings should be resolved later through S4/S5 owner decisions, source checks, and targeted fixes.
- After S3.4, all 10 standard fruit trees that use the shared standard fruit tree block are audited:
  - apple
  - pear
  - quince
  - sweet_cherry
  - sour_cherry
  - plum
  - peach
  - nectarine
  - apricot
  - almond

Known stone batch 2 follow-up items preserved for S4/S5:

- Peach and nectarine leaf-curl entries are strong and should remain pre-bud / pre-bloom, not bloom or post-bloom treatment.
- Peach/nectarine monitoring entries combine aphids and oriental fruit moth; split vs combined shape is an S5 design decision.
- Apricot frost monitoring is a strong reference pattern for information/advisory actions and should not become unsupported frost-protection automation.
- Apricot šarka / Plum pox wording is a strong reference pattern for viral disease handling and must preserve the no-curative-treatment stance.
- Almond is the lightest species in this batch and needs source-backed S5 polish, especially disease/pest monitoring and post-bloom target naming.
- Almond monitoring must not be finalized as a `monitoring_program` without source-validating named targets.
- Almond cumulative-copper wording is the strongest anti-duplication copper wording in the file and should be considered for promotion to shared Spray Safety Notes.
- Apricot/almond frost monitoring should likely map as observation/advisory action-window candidates, not pest/disease `monitoring_program` records.
- Mađarska najbolja / Magyar kajszi is missing from apricot template examples and should be considered for S5 display polish.
- Suncrest, Texas, Tuono, Nonpareil, and Harcot are not current catalog/template varieties and must not be added without the variety workflow and owner approval.
- Regional caveat remains missing across stone batch 2 and should be handled as cross-species S5 wording polish.
- Mediterranean-vs-continental qualitative frost-risk caveat may be needed for apricot/almond, without numeric offsets.

Do not fix these now.

Disposition:

- Queue stone batch 2 wording, source-check, monitoring-shape, glossary, regional caveat, and mapping items for S4/S5 targeted resolution.
- Proceed to S3.5 Mediterranean audit.

### S3.5 — Mediterranean audit

Status: DONE — Mediterranean findings appended.

Commit:

- `1cbeff2 Append S3 Mediterranean findings`

Output:

- `archive/V2_S3_AUDIT_FINDINGS_DETAIL_2026-04.md`

Scope completed:

- olive
- fig
- pomegranate

Verdict:

- S3.5 recorded Mediterranean audit findings as evidence.
- S4 owner decision supersedes the fig scale-up disposition for current V2.
- Fig is removed from current supported V2 scope because type-dependent one-crop/two-crop behavior, pruning dependency, and regional sensitivity cannot be safely represented by the current simplified model.
- Olive and pomegranate remain usable for S4/S5 continuation.
- Olive correctly preserves user-facing-only variety handling: olive varieties are selectable/displayable but do not drive timing.
- Universal two-window fig harvest is not approved.
- Pomegranate is lighter than olive, but acceptable for current S3 because it is explicitly marginal in continental EU climate and self-flagged for source audit.
- No targeted Mediterranean wording fix is required before S3.6.
- After S3.5, 13 of 18 pre-S4 candidate species/subtypes were audited.

Known Mediterranean follow-up items preserved for S4/S5:

- Do not add olive variety timing, harvestWindow, or bloomWindow.
- Fig has been removed from active current support surfaces in the catalog/template inputs.
- Do not add fig varieties in current V2.
- Do not introduce a one-crop/two-crop fig model in current V2.
- Do not keep fig with a single main-crop-only workaround or a universal two-window harvest model.
- Do not apply the pome/stone shared spray program to olive or pomegranate.
- Olive §6 monitoring → conditional treatment is the reference pattern for no-auto-spray monitoring/spray pairs.
- Olive organic/barrier/repellent wording is the reference pattern for registered-method flexibility.
- Fig milky-sap warning is preserved as future-reference evidence only.
- Pomegranate fruit-cracking watch should map as observation/advisory, not pest/disease monitoring_program.
- Mediterranean species need a Mediterranean-specific regional caveat, not a direct copy of the apple caveat.
- Future fig reintroduction needs a dedicated domain definition for one-crop vs two-crop behavior, breba vs main crop, pruning dependency, source-backed timing, and Mediterranean/coastal vs continental interpretation.
- Long irrigation/care windows remain an S5 mapping/design item.
- Multi-target scouting program shape remains an S5 design item.
- Non-pest `praćenje` entries should likely map to observation action windows.
- Pomegranate spring/summer thinness is accepted for current scope unless owner opens a deeper Mediterranean-market expansion.
- Beginner glossary should include Mediterranean terms such as `vaza`, `pinciranje`, `izdanci`, `polifenoli`, local thresholds, and local registration.

Do not fix these now.

Disposition:

- Record S4 owner decision: fig removed from current supported V2 scope.
- Current catalog/template inputs were targeted-cleaned so fig is no longer active current V2 support.
- S5 must not re-add fig unless a future owner-approved fig domain session exists.
- Queue future roadmap work for source-backed fig reintroduction after dedicated fig domain definition.
- Queue Mediterranean wording, source-check, monitoring-shape, observation/advisory mapping, regional caveat, and glossary items for S4/S5 targeted resolution.
- Proceed to S3.6 citrus audit.

### S3.6 — Citrus audit

Status: DONE — Citrus findings appended.

Commit:

- `1b4bec3 Append S3 citrus findings`

Output:

- `archive/V2_S3_AUDIT_FINDINGS_DETAIL_2026-04.md`

Scope completed:

- lemon
- orange
- mandarin

Verdict:

- S3.6 recorded the citrus audit findings as evidence.
- S4 owner decision supersedes the S3.6 scale-up disposition for current V2.
- Citrus is removed from current supported V2 scope because the subtype/container-biased model is not apple-level complete and risks wrong guidance.
- Lemon, orange, and mandarin should return only as future proper supported fruit species with source-backed plan templates and appropriate regional/climate handling.
- No citrus varieties were added.
- No variety-specific citrus timing was introduced.
- Optional spray wording remained conditional in the archived audit evidence.
- Monitoring remained evidence only in the archived audit evidence.

Known citrus follow-up items preserved for S4/S5:

- Remove citrus from current supported scope during S5 catalog/template cleanup.
- Do not add lemon, orange, or mandarin varieties in current V2.
- Do not add variety-specific citrus timing.
- Do not polish weak subtype/container guidance for current V2.
- Preserve citrus only as a future roadmap/domain candidate.
- Future citrus reintroduction depends on source-backed regional timing / climate adaptation strategy.
- Future citrus reintroduction should likely include lemon, orange, and mandarin as proper species-level supported fruit types.
- Future citrus work needs curated top varieties/subtypes for target countries where useful.
- Future citrus work needs full source-backed plan templates and Mediterranean/coastal vs continental context handling.

Do not fix these now.

Disposition:

- Record S4 owner decision: citrus removed from current supported V2 scope.
- Queue S5 cleanup to remove active citrus support from current catalog/template inputs.
- Queue future roadmap work for source-backed citrus reintroduction after regional timing / climate adaptation strategy.
- Proceed to S3.7 nut audit.

### S3.7 — Nut audit

Status: DONE — Nut findings appended.

Commit:

- `451cfa7 Append S3 nut findings`

Output:

- `archive/V2_S3_AUDIT_FINDINGS_DETAIL_2026-04.md`

Scope completed:

- walnut
- hazelnut

Verdict:

- Walnut and hazelnut are ready for S3 scale-up as-is.
- S3.7 findings scale the established S3 format without modification.
- Nut handling remains species-specific.
- Walnut and hazelnut varieties remain unchanged.
- No new nut varieties were added or recommended for current S3.
- No nut group rename was performed.
- Pome/stone shared spray block remains excluded from walnut and hazelnut.
- Optional treatment wording remains conditional.
- Monitoring remains evidence only.
- No targeted nut wording fix is required before S3.8.
- After S3.7, all 18 pre-S4 candidate species/subtypes were audited.

Known nut follow-up items preserved for S4/S5:

- Do not add walnut or hazelnut varieties in current S3.
- Do not rename the `nut` group without owner decision.
- Do not add scheduled fertilization or irrigation for established walnut or hazelnut.
- Young-tree watering for walnut and hazelnut is a real practical gap and should be resolved as an S4/S5 owner decision.
- Young-tree fertilization is more source-sensitive and needs source check or explicit owner decision before adding.
- hazelnut pollination / cross-compatibility is a real productivity item and needs source check before adding guidance.
- Hazelnut frost-during-bloom advisory may be useful but needs source-backed wording.
- Walnut summer pruning timing is self-flagged and needs source validation before S5 finalization.
- Natural-drop / gathering harvest semantics for walnut and hazelnut should remain notes/advisory unless owner decides otherwise.
- Do not create `harvest_natural_drop` subtype now.
- Walnut bleeding-aware pruning wording is a reference pattern.
- Hazelnut bush-renewal pruning numbers are a reference pattern.
- Hazelnut mechanical-first IPM wording is a reference pattern.
- Walnut hobby-context skip-by-default copper wording is a reference pattern.
- Walnut damage-vs-loss walnut-fly wording is a reference pattern.
- Nut terms such as `resa`, `izbojnica`, `smanjenje inokuluma`, and `bakterijsko propadanje` should be included in the S5 glossary/clarity pass.

Do not fix these now.

Disposition:

- Queue nut wording, source-check, young-tree watering, pollination, regional caveat, natural-drop harvest semantics, observation/advisory mapping, and glossary items for S4/S5 targeted resolution.
- Proceed to S3.8 findings consolidation.

### S3.8 — S3 findings consolidation

Status: DONE — S3 audit findings consolidated.

Output:

- `V2_S3_AUDIT_CONSOLIDATION.md`

Archived evidence:

- `archive/V2_S3_AUDIT_FINDINGS_DETAIL_2026-04.md`

Disposition:

- S3.1–S3.7 detailed findings are preserved as archive evidence.
- The active S3 output for S4/S5 is now `V2_S3_AUDIT_CONSOLIDATION.md`.
- S4 owner decision resolution is the next required step.

Goal:

Consolidate the seven S3 audit batches into a clear owner/action-ready structure.

Scope:

- consolidate cross-cutting findings
- consolidate beginner-clarity findings
- consolidate regional/climate caveat findings
- consolidate source-check queue
- consolidate owner decision queue
- consolidate S5 documentation-fix candidates
- consolidate candidate mapping notes for later S5/S6 design
- identify gold-standard/reference wording patterns
- identify items that must explicitly remain deferred
- confirm no S3 species/subtype audit gaps remain

Expected output:

- `V2_S3_AUDIT_CONSOLIDATION.md`

S3.8 is complete. Proceed to S4 owner decision resolution.

### S4 — Owner decision resolution and source-backed audit closure

#### S4 owner decision — Citrus support scope

Status: RECORDED — citrus removed from current supported V2 scope.

Decision:

- Citrus must be removed from current V2 supported plants.
- Lemon, orange, and mandarin must not ship as weak subtypes with partial/container-biased guidance.
- Citrus may remain only as a future roadmap/domain candidate.

Reason:

- Current citrus model is incomplete and risks wrong guidance.
- A plant included in Vocnjak must have apple-level quality: proper species-level support, source-backed plan template, practical work calendar, and appropriate variety/subtype coverage where useful.

Future dependency:

- Citrus reintroduction is planned but depends on future regional timing / climate adaptation strategy.
- Regional strategy must be source-backed and owner-approved before citrus returns.
- Future citrus work should likely include lemon, orange, and mandarin as proper supported fruit species with curated top varieties/subtypes for target countries and full source-backed plan templates.

Current documentation disposition:

- `V2_S3_AUDIT_CONSOLIDATION.md` records the active S4 owner decision.
- `V2_FUTURE_ROADMAP.md` records citrus reintroduction as future work.
- `V2_PLANT_CATALOG.md` and `V2_ORCHARD_PLAN_TEMPLATES.md` still contain pre-S4 citrus input content and must be cleaned up in S5, not in this S4 decision-record task.

#### S4 owner decision — Fig support scope

Status: RECORDED — fig removed from current supported V2 scope.

Decision:

- Fig must be removed from current V2 supported plants.
- Fig must not ship with a simplified single-window harvest workaround or an assumed universal two-window model.
- Fig may remain only as a future roadmap/domain candidate.

Reason:

- Fig behavior is not uniform enough for the current simplified model.
- One-crop figs and two-crop figs have different harvest behavior.
- Pruning logic depends on whether fruiting is on old wood, new growth, or both.
- Regional differences between Mediterranean/coastal and continental contexts significantly affect behavior.
- Partial support would risk incorrect guidance and reduce user trust.

Future dependency:

- Fig reintroduction is planned as a post-S11 candidate.
- Future work requires a dedicated source-backed fig domain definition before implementation.
- Future fig work must define one-crop vs two-crop behavior, breba vs main crop handling, crop-type-aligned pruning, optional variety/type layer where useful, and clear regional interpretation.

Current documentation disposition:

- `V2_S3_AUDIT_CONSOLIDATION.md` records the active S4 owner decision.
- `V2_FUTURE_ROADMAP.md` records fig reintroduction as future work.
- `V2_PLANT_CATALOG.md` and `V2_ORCHARD_PLAN_TEMPLATES.md` are targeted-cleaned so fig is no longer current supported V2 scope.

### S5 citrus / fig current-support cleanup

Status: DONE — active current-support leakage removed from catalog/template surfaces.

- Citrus / agrumi removed from current supported V2 catalog/template surfaces.
- Lemon, orange, and mandarin preserved only as deferred/archive future input.
- Fig removed from remaining current supported catalog list leakage.
- Fig archive/deferred template material remains future input only.
- No runtime, schema, regional engine, or new calendar-window support added.

#### S4 owner decision — Monitoring design rule

Status: RECORDED — monitoring shape is based on real-world inspection behavior.

Decision:

- Monitoring structure must be consistent across all supported fruit species, but content remains species-specific.
- Monitoring entries are defined by real-world inspection behavior, not by pest count.
- Combine targets only when the same real-world inspection pass uses the same method (`trap` vs `scouting`), same practical time window / season, and same user decision context.
- If method, window, or decision context differs, split into separate monitoring entries.

Application examples:

- Pear psylla / aphids visual scouting may be one scouting-style inspection if same window and same pass.
- Pear fruit moth / codling moth trap monitoring should be separate if it uses a pheromone trap or different season logic.
- Trap-based monitoring is usually separate and target-specific.
- Visual scouting may combine multiple visible signs only when the grower realistically checks them together.

Constraints:

- Do not create checklist-like monitoring structures.
- Do not merge unrelated targets into generic "pest monitoring".
- Do not split every pest into its own program if the real-world inspection is one pass.
- Monitoring remains evidence collection, not task enforcement.
- Notes should explain what to look for, where to look, and what the sign means.
- No automatic treatment gates.
- No trap/scouting thresholds invented in S4.
- No cadence/compliance language.
- No schema change and no `target_codes[]`.

Disposition:

- `V2_S3_AUDIT_CONSOLIDATION.md` records the S4 owner decision for S5 application.
- `V2_CATALOG_AUDIT.md` records the curator guidance.
- S5 must apply this rule consistently across supported species.

#### S8 Step 4a owner decision — bounded trap capture source map

Status: DOCUMENTED — implementation not started.

Decision:

- Step 4a is minimal free-standing trap Observation capture only.
- Step 4a is Plant-detail-only, one-plant-only, and always stores `program_id = null`.
- Step 4a uses a bounded `trap_capture_sources[]` source map backed by explicit trap rows in `V2_ORCHARD_PLAN_TEMPLATES.md`.
- The source map is closed-list and exists only for S8 Step 4a trap capture validation/display.
- `source_entry_id` is the primary plan-template traceability key.
- `projected_id` may be retained only for B2 display/source traceability; it is not the pest or target identifier.
- `target_pest_code` resolves only against the bounded Step 4a `trap_capture_sources[]` entry through `local_trap_target_code`.
- Step 4a does not create or imply a broad target/pest registry, symptom registry, stage vocabulary, diagnosis target registry, pest ontology, or plan-template replacement.

Approved first Step 4a source rows:

- `337` apple codling moth trap monitoring.
- `654` sweet cherry fly sticky trap monitoring.
- `860` sour cherry fly sticky trap monitoring.
- `1596` plum moth spring trap monitoring.
- `1643` plum moth summer trap monitoring.
- `2455` olive fly sticky trap monitoring.
- `2949` walnut fly sticky trap monitoring.
- `2977` walnut codling moth trap monitoring.

Explicitly out of scope for first Step 4a:

- optional trap/scouting ambiguity rows `516`, `1064`, and `1228`;
- all scouting rows;
- all symptom rows;
- all stage observations;
- program-attached observations;
- multi-plant structured capture;
- note or Observation correction;
- thresholds, diagnosis, treatment recommendations, pressure/severity scoring, weather automation, Pregled/Kalendar changes, and missing-record/compliance UX.

#### S4 owner decision — Awareness / risk monitoring

Status: RECORDED — non-pest monitoring is allowed when clearly separated from pest/disease monitoring.

Decision:

- Monitoring is not limited to pests.
- Awareness / risk monitoring is part of V2 for environmental or physiological conditions such as frost, fruit cracking, drought stress, heat stress, and similar phenomena.
- Pest/disease monitoring and awareness/risk monitoring must be separated in meaning and wording.

Rules:

- Awareness monitoring must not be framed as pest-style detection.
- Awareness monitoring must not imply a "detect -> treat" pipeline.
- Monitoring remains evidence gathering, not task enforcement.
- Do not invent thresholds.
- Do not create automatic actions.
- Do not introduce new entity types, enums, schema fields, or runtime behavior.

Documentation guidance:

- Notes should explain what to observe and when/why it matters.
- Possible user actions may be mentioned only when real-world valid, not misleading, and source-backed or clearly conservative.
- Frost examples: before event, protection may be mentioned if feasible; after event, observe and do not assume immediate removal or pruning.
- Fruit cracking examples: observe rain-related risk near harvest; possible actions may include harvest timing or sanitation if source-backed; do not invent treatment rules.
- Drought examples: observe soil moisture / plant stress; irrigation is acceptable when supported and obvious.

Disposition:

- `V2_S3_AUDIT_CONSOLIDATION.md` records the S4 owner decision for S5 application.
- `V2_CATALOG_AUDIT.md` records curator guidance.
- S5 must apply the pest/disease vs awareness/risk distinction consistently.

Purpose:

Resolve the decision queue produced by S3.

S4 should decide:

- which S3 findings require template wording fixes
- which findings require catalog wording fixes
- which findings are deferred
- which findings become owner-approved corrections
- which uncertain agronomic claims need stronger sources
- which items are safe enough for current V2 and which remain future work
- how to handle ambiguous regional/climate notes without introducing numeric offsets

Expected S4 output:

- owner decision log or decision section
- resolved / deferred status for S3 findings
- approved targeted correction list
- explicit list of items not to fix in current V2

S4 is not:

- broad rewrite
- new variety expansion
- regional offset modeling
- runtime implementation

### S5 — Final pre-implementation catalog/template readiness

Purpose:

Turn S3 findings + S4 decisions into final pre-implementation documentation readiness.

S5 should:

- apply owner-approved targeted fixes
- verify plan templates remain calendar-first and beginner-readable
- verify catalog and templates remain aligned
- verify no automatic spray calendar was introduced
- verify product/material categories are clear without hardcoded brand recommendations
- verify regional/climate differences remain notes/deferred findings, not numeric offsets
- verify all 18 plant types/subtypes remain covered
- verify unresolved items are explicitly deferred

Expected S5 output:

- final pre-implementation catalog/template readiness sign-off
- updated findings/decision status
- no unresolved blocker before UX sessions
- clear handoff into S6

S5 exit criteria:

- owner approves catalog/template documentation as ready enough for UX/architecture work

---

## S6–S11 provisional roadmap — to be detailed later

S6–S11 are planned direction only. They must be detailed in their owning sessions and must continue to follow `PRODUCT_VISION.md`.

### S6 — UX core surfaces

Purpose:

Define the main user-facing screens and what each surface answers.

Candidate surfaces:

- Pregled / Home
- Calendar
- Plant list
- Plant detail
- History / records
- Monitoring surfaces
- Seasonal window detail

Key product requirement:

UX must stay calendar-first, beginner-friendly, and one-handed/iPhone-first.

### S7 — UX capture and interaction flows

Purpose:

Define how users record real orchard work.

Candidate flows:

- log activity
- log multi-plant activity
- log skip
- log observation
- log monitoring/trap check
- record harvest
- record symptoms/problem
- review history from plant detail
- handle outside-window activity without blocking

Key product requirement:

The user must not be forced into per-plant checklist behavior when one real orchard pass covers multiple plants.

### S8 — Data and storage architecture

Status: DONE — completed in `V2_ARCHITECTURE.md` `## 1. Data model`.

Purpose:

Define V2 storage architecture after domain/UX shape is clear.

Completed patches:

- `S8.A — Core storage model` (`28c4b39 Define S8 core storage model`)
- `S8.B — Validation, IO, and implementation-readiness closure` (`e443559 Define S8 validation and storage boundaries`)

Key constraint:

No runtime implementation was introduced. Implementation remains forbidden until explicitly approved.

### S9 — Derived state, upgrade diff, and advisory layers

Status: DONE — completed in `V2_ARCHITECTURE.md` `## 2`–`## 5`.

Purpose:

Define deterministic algorithms and advisory integrations.

Completed sections in `V2_ARCHITECTURE.md`:

- `## 2. Upgrade diff engine`
- `## 3. Overlay reconciliation`
- `## 4. Active-window snapshot algorithm`
- `## 5. Weather layer`

Completed patches:

- `S9.A — Active-window snapshot + weather advisory` (`c19eeeb Define S9 active snapshot and weather boundaries`)
- `S9.B — Upgrade diff engine + overlay reconciliation` (`656d403 Define S9 upgrade diff and overlay reconciliation`)

Key constraint:

Weather and monitoring remain advisory/evidence surfaces, not automatic decision engines.

### S10 — V1 to V2 migration architecture

Status: DONE — completed in `V2_ARCHITECTURE.md` `## 6. V1 → V2 migration`.

Purpose:

Define the clean V2 transition strategy from the owner-only legacy app to V2.

Completed strategy:

- clean V2 start
- no automatic V1/V3/V4 record conversion
- no automatic plant migration
- no automatic copper migration
- legacy data preserved untouched
- optional raw legacy export for archive/reference only
- raw legacy export is not V2 import material
- V2 export/import is the platform-neutral portability contract
- platform backup may help same-platform restore but is not sync or cross-platform portability

Key constraint:

No existing legacy data may be deleted or silently rewritten. Legacy material must not be treated as V2 state.

### S11 — Implementation execution roadmap

Status: DONE — S11.A through S11.D complete in `V2_EXECUTION_ROADMAP.md` §1–§50.

Completed S11 patches:

- `S11.A — Roadmap authority, sequencing principles, commit/runtime safety boundaries` (`627c83d`)
- `S11.B — Storage substrate, V2 key, clean-start contract, activation strategy` (`3822f1e`)
- `S11.C1 — Foundation slices 0–4` (`bf7b066`)
- `S11.C2 — Usable/default slices 5–9` (`a56fe75`)
- `S11.D — Verification gates, milestones, stop conditions, runtime handoff` (`06feb13`)

Output delivered:

- implementation slice sequence (Slices 0–9)
- dependency graph (per-slice depends-on blocks)
- universal and slice-specific verification gates
- commit and git safety rules
- runtime safety boundaries and protected legacy keys
- usable / default / public-native milestone definitions
- consolidated runtime stop conditions
- parallel implementation policy
- post-usable deferrals (plan upgrade review, Za pregledati cues, Settings split, native storage selection, etc.)

S11 exit criteria met:

- owner approved S11.A, S11.B, S11.C1, S11.C2, S11.D
- runtime implementation may now begin once explicitly opened by owner

B2 metadata-only projection boundary is complete and Runtime Slice 8 Step 1 / Step 2 / Step 3 are complete. Full Runtime Slice 8 is not complete. Runtime Slices 0–7 are complete through S7.4 (`d61cc90 Harden S7 seasonal action detail display`). `V2_UX_MODEL.md` §16.7 outside-period disclosure remains deferred as later owner-approved polish. Later Slice 8 steps remain deferred until owner-approved. (Runtime Slice 0 — V2 shell and owner-only entry was completed at `642d0b1 Implement Runtime Slice 0 V2 shell`; Runtime Slice 1 — V2 store boot and empty `vocnjak_v2` initialization was completed at `178cfa8 Implement Runtime Slice 1 V2 store boot`; Runtime Slice 2 — Catalog seed and retained catalog baseline was completed at `254448f Implement Runtime Slice 2 catalog seed`; Runtime Slice 3 — Early V2 export/import safety baseline was completed at `8fd2571 Implement Runtime Slice 3 V2 export/import safety baseline`; Runtime Slice 4 — Plant foundation and Biljke first cut was completed at `f99e5f6 Implement Runtime Slice 4 V2 plant foundation`; Runtime Slice 5 — Activity capture, Activity-only Dnevnik, and Activity correction was completed at `8bc630a Implement Runtime Slice 5 activity capture`; Runtime Slice 6 — Active-window snapshot, Pregled, and Kalendar was completed at `99e76c8 Implement Runtime Slice 6 snapshot and calendar surfaces`; Pre-Slice-7 Action Window Notes Projection prerequisite was completed at `ad9a113 Project action-window notes into canonical catalog` (B1) and `a1b5307 Clean B1 action-window notes boundary` (B1.1).)

---

## Future candidate sessions

### Future — Regional planning-window strategy

Status: future candidate only.

Purpose:

Evaluate whether the app should support coarse regional planning-window profiles.

Possible direction:

- continental baseline
- warmer coastal / Mediterranean earlier
- colder continental / alpine later

Important:

- this must be planning-window support only, not blind execution logic
- no universal `±15 days` rule may be introduced without source-backed audit
- different action types may need different treatment
- different species may need different treatment
- observed plant state must remain execution context
- owner approval required

This is not part of S3.0 or S3 unless explicitly opened by owner.

---

## Stop conditions

Stop and ask the owner if a proposed change would:

- remove useful calendar planning windows
- convert the app into phenology-only logic
- add climateProfile / regionProfile / offsetDays / regional formulas
- introduce automatic treatment decisions
- introduce pesticide recommendation logic
- rewrite catalog/template content outside approved session
- add new species or varieties outside approved variety process
- weaken beginner clarity
- assume Zagreb dates are universal
- implement runtime behavior before the documentation path allows it
