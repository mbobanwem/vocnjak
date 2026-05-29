# VOCNJAK — Claude Code Instructions (V2)

---

## SOURCE OF TRUTH (READ FIRST — ALWAYS)

Documents are not equal. Use the classes below exactly.

## V2 Agent Entrypoint

Before any V2 catalog, domain, catalog-audit, or S3 work, read:

- `V2_AGENT_ENTRYPOINT.md`

This file is a routing document only. It does not override locked source-of-truth documents. Its purpose is to tell agents which documents to read for the current phase and prevent context drift.

### LOCKED CORE

- `PRODUCT_VISION.md`
- `V2_PRINCIPLES.md`
- `V2_DOMAIN_MODEL.md` — locked sections per its own status
- `V2_UX_MODEL.md` §0 — monitoring UX hard constraints
- later: remaining `V2_UX_MODEL.md` sections and `V2_ARCHITECTURE.md` only after sign-off

Rules:
- LOCKED CORE is binding
- if any conflict exists, LOCKED CORE wins
- `PRODUCT_VISION.md` is mandatory reading before proposing any domain decision, architecture decision, UX decision, or implementation plan
- before proposing any solution, the agent MUST include a short `Vision alignment check` section
- this section must explicitly explain how the proposal follows `PRODUCT_VISION.md`
- it must explicitly mention orchard-first behavior, calendar-first logic, the multi-plant action model, history preservation, and real-world constraints such as weather and sequence
- it must highlight any tradeoffs or risks where the proposal may conflict with `PRODUCT_VISION.md`
- it must include at least one concrete real-world example such as spraying copper, pruning, or trap monitoring, showing how the proposed solution behaves in practice
- the example must demonstrate that the solution fits real orchard behavior and follows `PRODUCT_VISION.md`
- the agent MUST avoid introducing additional entities, layers, or abstractions unless strictly required by `PRODUCT_VISION.md`
- if a simpler solution satisfies the same real-world behavior, the more complex solution must be rejected
- the alignment check MUST explicitly evaluate user effort, including steps, taps, and cognitive load
- the proposal must demonstrate that it stays fast and usable in real orchard conditions, including one-handed use and minimal interaction
- the agent MUST NOT introduce constraints that prevent flexible real-world execution, including partial actions, delayed actions, or multi-plant logging
- if a proposal limits future UX flexibility, that limit must be explicitly identified and justified
- the proposal must not prevent real-world actions that a user can physically perform
- the system must reflect real execution, not enforce artificial constraints
- if no concrete example is provided, the alignment check is incomplete
- if the alignment check identifies a conflict with `PRODUCT_VISION.md`, the agent MUST NOT proceed with the proposal as-is
- the agent must either revise the proposal to remove the conflict or explicitly stop and ask for clarification or approval
- when multiple valid technical solutions exist, the agent MUST prefer the solution that is simpler, closer to real-world orchard behavior, and less likely to break the user mental model
- if the `Vision alignment check` section is missing, the proposal is invalid
- technical correctness alone is not enough; every proposal must also match product truth from `PRODUCT_VISION.md`
- every proposal must explicitly preserve orchard-first thinking, calendar-first behavior, multi-plant real-world actions, history trust, and the product-purpose behind actions
- proposals must preserve weather-aware execution support: forecast may guide execution timing, but it must remain advisory, must not replace grower judgment, and must not create automatic domino shifting
- if a proposal conflicts with `PRODUCT_VISION.md`, revise it before continuing

### PLAN-TEMPLATE PROJECTION HARD STOP

For catalog, action-window, and orchard-plan work, agents MUST NOT propose model-first solutions.

A proposal that starts from runtime convenience instead of `PRODUCT_VISION.md`, `V2_ORCHARD_PLAN_TEMPLATES.md`, and `V2_PLANT_CATALOG.md` is invalid.

Required proof before any catalog/action-window implementation plan: a source map preserving the shared block, species-specific overrides, variety/fallback timing, and deferred monitoring/awareness/watering carry-forward.

If that proof is missing: STOP.

Before declaring a Plan Templates content gap, inspect the relevant `V2_ORCHARD_PLAN_TEMPLATES.md` row/section. Separate read-only guidance eligibility from structured persistence eligibility. If persistence is blocked, name the exact missing identifier/model/runtime support. Do not hide safe source-backed guidance only because `Observation.scouting` or `Observation.symptom` persistence is not ready.

Do not treat deferred broader phenology, BBCH, regional adaptation, or plan automation as permission to drop Plan Templates execution-condition text. Plan Templates action-window notes may already contain source-backed plant-state, phenophase, weather, safety, label, karenca, skip/delay, do-not-duplicate, and local-expert guidance. That text belongs in V2 as read-only seasonal action detail / action-window note guidance when already approved. Date windows are Zagreb / continental Croatia baseline planning windows, not hard commands; warmer regions such as Dalmatia may be roughly two weeks or more earlier in real life depending on season, microclimate, exposure, and actual plant state. This guardrail does not create BBCH, a phenology engine, regional offset fields, automatic date shifting, plan recalculation, stage-based unlocking/blocking, urgency/overdue/compliance behavior, or treatment/product/dose advice beyond source-backed Plan Templates safety wording.

Do not invent `target_code`, `symptom_code`, registries, treatment/pressure/urgency/compliance logic, or use B2 `projected_id` as persisted target identity. Visual scouting and symptom content are Observations, not Activities or `Klopke`.

### IN PROGRESS

- current target document only

Rules:
- may be edited only by its owning session
- not binding until sign-off

Current:
- S6 core UX surfaces are complete in `V2_UX_MODEL.md`
- S7 UX flow definition is complete in `V2_UX_MODEL.md`
- S8 data and storage architecture is complete in `V2_ARCHITECTURE.md` `## 1. Data model`
- S9 derived-state / algorithm architecture is complete in `V2_ARCHITECTURE.md` `## 2`–`## 5`
- S10 clean V2 transition / migration architecture is complete in `V2_ARCHITECTURE.md` `## 6. V1 → V2 migration`
- S11 implementation execution roadmap is complete in `V2_EXECUTION_ROADMAP.md` `§1`–`§50`
- Runtime Slice 0 (V2 shell and owner-only entry) is complete (`642d0b1 Implement Runtime Slice 0 V2 shell`); legacy app remains the default
- Runtime Slice 1 (V2 store boot and empty `vocnjak_v2` initialization) is complete (`178cfa8 Implement Runtime Slice 1 V2 store boot`); legacy app remains the default
- Runtime Slice 2 (catalog seed and retained catalog baseline) is complete (`254448f Implement Runtime Slice 2 catalog seed`); legacy app remains the default
- Runtime Slice 3 (Early V2 export/import safety baseline) is complete (`8fd2571 Implement Runtime Slice 3 V2 export/import safety baseline`); legacy app remains the default
- Runtime Slice 4 (Plant foundation and Biljke first cut) is complete (`f99e5f6 Implement Runtime Slice 4 V2 plant foundation`); legacy app remains the default
- Post-Slice-4 safety fix for canonical `catalog_v1` import validation is complete (`8a9c4ae Fix Runtime Slice 4 catalog import validation`); adversarial review found imported `catalogs.catalog_v1` could drift while preserving counts, and this was closed before Slice 5
- Focused adversarial review of Runtime Slices 3 and 4 after the post-Slice-4 safety fix passed and owner verification accepted the PASS; pre-Slice-5 UX polish for friendlier Add Plant date-validation messages is complete
- Pre-Slice-5 Action Window Seed prerequisite is complete (`df6a7fc Implement Action Window Seed prerequisite`); owner browser verification passed, focused adversarial review passed, and canonical V2 `catalog_v1` now has source-backed action-window definitions with real `window_def_id` values
- Plan-template projection hardening is complete (`bcaf3a2 Harden plan-template projection rules`); the plan-template-first/source-map hard stop remains locked for future catalog/action-window/orchard-plan work
- Runtime Slice 5 (Activity capture, Activity-only Dnevnik, and Activity correction) is complete (`8bc630a Implement Runtime Slice 5 activity capture`); legacy app remains the default
- Runtime Slice 5 local browser verification passed for Activity capture, locked Activity shape/provenance, multi-plant group invariants, Activity correction, Dnevnik effective correction display, targeted negative validator cases, and protected legacy-key byte equality; full Cloudflare deployment verification and full import/export UI round-trip were not performed for the Slice 5 commit
- Runtime Slice 6 (private active-window snapshot, Pregled, and Kalendar) is complete (`99e76c8 Implement Runtime Slice 6 snapshot and calendar surfaces`); the implementation changed `index.html` only, keeps derived seasonal state read-time/private, persists no snapshot output, and exposes no `window.v2Snapshot` or new global debug API
- Runtime Slice 6 local owner verification passed for `#v2/pregled`, `#v2/kalendar`, the minimal seasonal-action placeholder route (`Detalj sezonske radnje stiže u Slice 7.`), validator result `[]`, no visible Praćenje/Monitoring/weather/risk-awareness UI, no observed task/compliance/progress wording, `"v2Snapshot" in window === false`, and normal legacy load without `#v2`; Cloudflare deployment verification, full import/export UI round-trip, and direct protected legacy localStorage byte-dump comparison were not performed for the Slice 6 commit
- Pre-Slice-7 Action Window Notes Projection prerequisite is complete (`ad9a113 Project action-window notes into canonical catalog` and `a1b5307 Clean B1 action-window notes boundary`); B1 added optional `action_window_definitions[].notes`, the Croatian shared `spray_safety_notes` constant on canonical `catalog_v1`, validator/import/export support, and a deterministic refresh path for pre-B1 stores; B1.1 then removed monitoring decision prose, awareness/risk prose, pathogen/symptom registry prose, frost-diagnostic prose, and history-coaching prose from the projected note text while preserving fenofaza/timing cues, oil/copper spacing, bloom/bee restrictions, product-category/label wording, young-tree caveats, and thinning/harvest/bird-net practical guidance
- B1/B1.1 changed `index.html` only; canonical action-window IDs, labels, action types, anchors, and tolerances are unchanged; Slice 7 UI was not implemented; Monitoring/Praćenje UI was not implemented; no `window.v2Snapshot` global was introduced; Activity/Correction schema was not changed; full browser runtime verification, Cloudflare deployment verification, full import/export UI round-trip, and protected legacy key byte-dump comparison were not performed for the B1 or B1.1 commits
- B2 metadata-only projection boundary is complete. B2 resolves the owner-accepted 41-entry source working set into 36 projected B2 items with 5 merge groups and stable tracks: `monitoring_track` and `risk_awareness_track`. This grouping remains private/read-only audit/projection metadata in `index.html`, separate from `buildSeasonalSnapshot`, not persisted, not exposed as projection metadata globally, not a new user data model, and not a registry.
- Runtime Slice 8 Step 1 is complete: Plant detail consumes B2 metadata through a narrow S8 preview bridge and renders calm read-only monitoring/risk preview sections only for matching plant species.
- Post-81c0fdb Plant detail B2 preview also renders curated, source-backed, read-only `Što gledati` guidance bullets on existing B2 preview cards. This is Plant-detail-only display guidance: it renders no raw Plan Templates notes, adds no structured persistence, no `target_code` / `symptom_code`, no registry, no `Observation.scouting` / `Observation.symptom` writes, no validator/import/export/schema/localStorage changes, no Pregled/Kalendar or Dnevnik changes, and was not, by itself, an S8 / Step 6 / Step 7 closure record.
- Runtime Slice 8 Step 2 note Observation capture is complete: Plant detail saves one-plant free-standing `kind = "note"` records with `payload.text`, and renders them as factual Dnevnik evidence under `Opažanja` / plant history.
- Runtime Slice 8 Step 3 is complete: Pregled and Kalendar now consume the same private B2 boundary through a read-only, non-persisted display path. Pregled shows only current overlapping seasonal monitoring/risk context, and Kalendar shows B2 monitoring/risk date ranges under `Praćenje`; this adds no capture, diagnosis, treatment advice, task status, record-status pressure, snapshot output, storage shape, validator change, registry, or global B2 exposure.
- Runtime Slice 8 Step 4a runtime implementation is complete: Plant detail now supports minimal one-plant, free-standing `kind = "trap"` factual count capture using a bounded private `trap_capture_sources[]` source map for the eight owner-approved trap rows only. It does not implement Pregled/Kalendar capture/status changes, program attachment, multi-plant trap capture, broad target/pest registry, symptom registry, stage vocabulary, diagnosis, treatment advice, pressure/severity scoring, weather automation, or compliance behavior.
- Runtime Slice 8 Step 5a documentation lock is complete: a minimal free-standing diary `kind = "stage_obs"` capture path is documented in `V2_DOMAIN_MODEL.md §3.2.3a`, `V2_ARCHITECTURE.md §1.11/§1.20/§1.21/§1.22/§1.23`, `V2_UX_MODEL.md §0.8/§3.13/§10.5a/§10.12`, `V2_EXECUTION_ROADMAP.md §36`, and `V2_CURRENT_STATE.md`. It uses only a bounded nine-entry `stage_diary_vocabulary[]` (`dormant`, `bud_swell`, `bloom_started`, `bloom_finished`, `fruit_set`, `color_change`, `ripening`, `harvest`, `leaf_fall`), is Plant-detail-only / one-plant / free-standing with `program_id = null` and user provenance, and renders factual Dnevnik history rows under `Opažanja` as `Faza razvoja — <label_hr>`. Step 5a explicitly does not introduce a phenology engine, BBCH, per-species phenology, plan recalculation, action unlocking/blocking, diagnosis, treatment advice, weather/stage automation, pressure/severity scoring, compliance UX, multi-plant stage capture, program-attached stage capture, observation correction, or any broader stage registry.
- Runtime Slice 8 Step 5a runtime implementation is complete: Plant detail now supports minimal one-plant, free-standing `kind = "stage_obs"` factual stage diary capture using a bounded private `stage_diary_vocabulary[]` source map for the nine owner-approved diary entries only. It does not implement Pregled/Kalendar capture/status changes, program attachment, multi-plant stage capture, observation correction for stage diary, phenology engine, BBCH, per-species phenology, plan recalculation, action unlocking/blocking, diagnosis, treatment advice, weather/stage automation, pressure/severity scoring, or compliance behavior. Broader phenology-aware stage confirmation remains Post-S8 / owner-approved future work and requires a separately owner-approved phenology vocabulary beyond the Step 5a diary list.
- Runtime Slice 8 Step 6 runtime implementation is complete at `8c7d135 Implement multi-plant observation capture`: Plant detail note and diary-stage forms now support multi-plant free-standing Observation capture for `kind = "note"` and `kind = "stage_obs"` only. Runtime creates one Observation record per selected plant; multi-plant saves share `observation_group_id`; single-plant saves remain ungrouped; every record has one `plant_id`, a unique `observation_id`, and `program_id = null`. Global Dnevnik groups multi-plant note/stage observations into one factual card with plant count/list, Plant detail history remains plant-scoped, and backup/import validation accepts valid grouped note/stage observations while rejecting invalid group usage. Step 6 does not implement multi-plant trap, `Observation.scouting` writes, `Observation.symptom` writes, `target_code`, `symptom_code`, registries, treatment recommendations, pressure/urgency/compliance logic, program attachment, raw Plan Templates rendering, or new routes/surfaces.
- Runtime Slice 8 Step 7c visual scouting capture is complete: docs lock at `7e388c5 Lock Step 7c visual scouting capture model`, runtime at `588e413 Implement Step 7c visual scouting capture`. Plant detail now supports bounded Plan Templates-backed `kind = "scouting"` capture as a closed source-row-backed adapter with `program_id = null`, presence finding, source-row-local `selected_sign_keys`, optional trimmed `note`, multi-plant scouting capture, Dnevnik grouped rendering, Plant detail plant-scoped history, and backup/import validation for valid/invalid scouting payloads. Step 7c does not introduce persisted Croatian labels, raw Plan Templates prose in payload, `symptom_code`, `Observation.symptom`, diagnosis, treatment recommendation, product/dose advice, pressure/urgency/compliance logic, or trap-path merging; trap capture/advisory remains separate.
- Runtime Slice 8 Step 7d source-backed scouting guidance is complete at `5f64257 Add Step 7d scouting guidance`: the existing closed `SCOUTING_CAPTURE_SOURCES` adapter now carries display-only, read-only `Što sada` guidance from Plan Templates source rows for the existing Step 7c visual scouting sources. Guidance appears on Plant detail visual scouting cards, inside the open scouting form after result selection, and in Dnevnik scouting cards. It is not persisted; Observation payload shape, validators, import/export shape, and backup behavior are unchanged. Step 7d adds no `symptom_code`, no `Observation.symptom`, no diagnosis, no treatment/product/dose advice, no pressure/urgency/compliance logic, no broad registry, and no trap capture/advisory change. New visual-scouting guidance does not use beginner-unfriendly `lokalni pragovi` wording; the beginner next step is to photograph or bring fruit/leaf/shoot/sample and ask a local agricultural pharmacy, agronomist, or expert, while the app does not decide treatment.
- Runtime Slice 8 Step 7e monitoring guidance parity is complete at `36433aa Add Step 7e monitoring guidance parity`: runtime extended only `B2_READONLY_GUIDANCE_BY_SOURCE_ROW` with exactly 21 source-backed `Što gledati` entries for the monitoring-only B2 rows that were already visible in Plant detail / Pregled / Kalendar. Step 7e used beginner visible-sign bullets from `V2_ORCHARD_PLAN_TEMPLATES.md`, preserved the existing renderer and B2 preview surfaces, and did not add schema, validators, payload fields, storage, routes, source maps, `symptom_code`, `Observation.symptom`, broad registries, diagnosis, treatment/product/dose advice, pressure/urgency/compliance logic, trap/scouting capture changes, or Step 7d `Što sada` changes. B2 read-only guidance coverage is now complete for S8 purposes: 14 prior `Što gledati` rows, 21 Step 7e monitoring-only rows, and 6 risk-awareness rows that intentionally remain seasonal context rather than checklist rows.
- Runtime Slice 8 is closed for the approved S8 scope after the Step 7 coverage gate and Step 7e guidance parity. No unresolved S8 blocker row remains. Structured capture remains bounded to note, trap, stage_obs, and scouting for the approved Step 7c rows only. Post-S8 / owner-approved future work remains: broader scouting capture beyond Step 7c; symptom capture / `Observation.symptom`; owner-approved symptom source map / registry before any `symptom_code`; program-attached observations; broader phenology-aware stage confirmation beyond Step 5a; orphan-code fallback display; deferred outside-period disclosure (`V2_UX_MODEL.md §16.7`); AI-assisted image analysis or paid/subscription AI; and any diagnosis/treatment recommendation system only if separately owner-approved with strict guardrails.
- Post-S8 Observation correction runtime is complete: docs lock at `1ef2009`, validator/model runtime at `60cc32c`, and UI/display runtime at `6d5b19d`. Supported kinds are only `note`, `trap`, `stage_obs`, and `scouting`; it reuses additive Correction records with `original_record_type = "observation"`; original Observations remain immutable; effective Observations are derived from valid Corrections sorted by `created_at`, then `correction_id`; Dnevnik and Plant detail render effective Observation values with the neutral `ispravljeno` marker.
- Grouped Observation correction uses Strategy A: grouped corrections are shared-payload-only and group-wide; no grouped date correction, no grouped plant correction, no group splitting, no effective regrouping, no duplicate effective-plant handling, no mixed payload inside one stored group, and no `correction_group_id`. A group-wide correction is one Correction per original Observation in the stored group, saved atomically with the same corrected effective payload value; any per-member failure fails the whole save closed.
- Runtime Slice 7 is complete through S7.4 (`4466d17 Implement S7.1 plant seasonal actions`, `e28088d Harden S7.1 and start S7.2 detail`, `fdf1a76 Implement S7.3 plant diary preview`, `d61cc90 Harden S7 seasonal action detail display`). S7.4 was a display-only hardening slice: it removed technical seasonal-action identity leakage, suppressed non-applicable gate copy when no `open_condition` exists, aligned seasonal detail titles with user-facing card wording, and reused existing `Namjena:` purpose cues on Plant detail seasonal cards.
- Runtime Slice 7 / S7.4 did not change action windows, evidence matching, multi-plant logging, the Activity/Correction history model, schema, persistence, snapshot persistence, monitoring, observations, risk-awareness rendering, weather logic, or routing architecture. The seasonal snapshot remains private, read-time, derived, and non-persisted.
- `V2_UX_MODEL.md` §16.7 outside-period disclosure remains deferred from Slice 5/Slice 6/Slice 7 as later owner-approved polish.
- §0 monitoring constraints remain locked and authoritative
- legacy data and V1/V3/V4 keys remain protected
- implementation was forbidden through S11 documentation; Slices 0, 1, 2, 3, 4, 5, 6, and 7 plus the Pre-Slice-7 Action Window Notes Projection prerequisite (B1 and B1.1) and B2 metadata-only projection boundary were then owner-approved and committed
- Runtime Slice 8 Step 1, Step 2, Step 3, Step 4a, Step 5a, Step 6, Step 7 minimal runtime, Step 7b context-only trap advisory runtime, Step 7c bounded visual scouting runtime, Step 7d source-backed scouting guidance runtime, and Step 7e monitoring guidance parity runtime are complete; Runtime Slice 8 is closed for the approved S8 scope; Post-S8 Observation correction is complete; A2 default V2 / remove `#v2` gate is complete; A1 no-delete archive/lifecycle runtime is complete; Plan Templates runtime fidelity / content parity runtime patch is complete at `c9645c4 Implement Plan Templates runtime parity fixes`; current path to V2 Done is UX/design polish, then V2 Done audit; remaining Post-S8 carry-forward items are future owner-decision work unless the owner explicitly changes this path
- The minimal Step 7 runtime is pushed on main at `905af41 Implement S8 Step 7 trap advisory display` and covers only the four S8-blocker source rows (sweet cherry `trap_source_654`, sour cherry `trap_source_860`, plum spring `trap_source_1596`, plum summer `trap_source_1643`); the patch adds a read-only Plant-detail `Klopke` advisory section that aggregates existing valid trap Observations over the rolling last-7-day window per `(plant_id, source_entry_id)` and renders source-backed advisory band copy plus a static `Pragovi (informativni)` reference block, and does not change Observation payload, validators, backup/import/export shape, snapshot, Pregled, Kalendar, or the Dnevnik trap card
- Runtime Slice 8 Step 7b Trap Advisory Source-Coverage Gap Map is documentation/tracking only; the gap map is recorded in `V2_CURRENT_STATE.md` (Runtime Slice 8 Closure Record area) and `V2_EXECUTION_ROADMAP.md` (item 8 in §36). Step 7c now provides the bounded source-row-backed visual scouting destination for approved visible-sign rows. Any further optional trap numeric extension, broad/general scouting registry, or symptom registry requires owner decision; Step 7b does not introduce new schema, new runtime, new fields, new vocabulary, new registry, or new UI surface
- Step 7b tracking / clarification is pushed on main at `665d38b Track S8 Step 7 trap advisory coverage gaps` and `9996f1a Clarify S8 Step 7b advisory tracking`; Step 7c docs/runtime are pushed on main at `7e388c5` and `588e413`; Step 7d source-backed scouting guidance runtime is pushed on main at `5f64257`; Step 7e monitoring guidance parity runtime is pushed on main at `36433aa`; tracker sync after Step 7e is pushed on main at `c5521ac`; Observation correction docs lock / validator-model / UI-display are pushed on main at `1ef2009`, `60cc32c`, and `6d5b19d`; the Step 7 coverage gate is complete and Runtime Slice 8 is closed for the approved S8 scope. A2 default V2 is complete: normal/original URL and empty hash now load V2, `#v2` and `#v2/...` remain backward-compatible aliases, `#legacy` is the temporary legacy fallback, the V2 old-app button routes to `#legacy`, and verification preserved legacy/protected storage without schema/model, Plan Templates, manifest, or service-worker changes. A1 archive/lifecycle runtime is complete: Plant archive uses only `archived_at?`, `archive_reason?`, and `archive_note?`; missing `archived_at` means active and present `archived_at` means archived; active Biljke/Pregled/Kalendar scope excludes archived plants; Dnevnik/history and correction flows preserve historical records; export/import validation preserves valid archive fields and fails closed on malformed archive fields. Plan Templates runtime fidelity / content parity runtime patch is complete at `c9645c4 Implement Plan Templates runtime parity fixes`: the patch adds a universal calendar-window baseline disclaimer rendered only on Seasonal action detail below the date line and above `Napomene` (user-facing copy intentionally does not mention Zagreb or continental Croatia), extends `purposeCue` with three `Namjena` cases for `harvest` action_type, `Pregled za zimu` label, and `Gašenje navodnjavanja` label, and restores two source-backed Plan Templates lines into `SPECIES_ACTION_WINDOW_NOTES['peach.copper.leaf_curl_buds_closed']` (the Taphrina prevention-only context and the "if curled leaves already visible, record for next season instead of late spraying" note). The patch touches `index.html` only; no schema, no validators, no import/export, no Plan Templates edit, no docs edit at commit time, no B2/source-map/guidance change, no trap/scouting capture change, no `manifest.json`, no `sw.js`, and no S8 reopening; the disclaimer constant lives in the same IIFE as `renderSeasonalActionDetail` after a scope-bug fix found in browser verification. Owner browser verification passed: Seasonal action detail opened without `ReferenceError`; disclaimer rendered correctly and did not mention Zagreb or continental Croatia; Pregled and Kalendar did not show the disclaimer; `window.v2ValidateForBackup(parsed)` returned `[]`; export/import validation returned `[]`; protected legacy key before/after snapshot was byte-equal; local `file://` `manifest.json` CORS warnings were ignored as expected and not treated as app errors. Current path to V2 Done is UX/design polish, then V2 Done audit; the Plan Templates fidelity pass did not reopen S8 or authorize BBCH/engine/automation, `Observation.symptom`, symptom registry, program-attached observations, AI diagnosis, treatment recommendation, broader scouting beyond Step 7c, regional offsets, automatic date shifting, plan recalculation, or urgency/overdue/compliance logic.
- A1 archive/lifecycle runtime keeps the docs-lock boundaries: no delete/hard delete/destructive behavior, no unarchive/restore, no status/lifecycle enum, no deleted flag, no replacement Plant reference, no graft/replant model, no Plan Templates parity work, and no S8 reopening.
- Phase A UX/copy polish runtime is complete at `cc22d24 Polish V2 UX copy and Pregled click affordance`. The commit changed `index.html` only and shipped: Pregled seasonal cards now route to Seasonal action detail (parity with Kalendar and Plant detail); the universal calendar-window disclaimer constant rewritten to `Datumi su okvirni podsjetnik. Stvarno stanje voćke i lokalni uvjeti imaju prednost pred datumom: u toplijim krajevima radnje mogu krenuti ranije, a u hladnijim krajevima kasnije.` (placement on Seasonal action detail unchanged; the previous `Kalendarski prozor` / unexplained `fenofaza` wording removed only from the generic disclaimer copy); `purposeCue` harvest cue rewritten to `Namjena: berba kad plodovi dosegnu zrelost.`; `purposeCue` `Pregled za zimu` cue rewritten to `Namjena: provjera debla, vezica, zaštite od glodavaca i mumificiranih plodova.`; V2 Dnevnik empty-state copy at `renderDetail` and `renderDiary` now uses `Još nema evidencije.` / `Još nema evidencije za ovu voćku.`; `appendYoungTreeCalendarSection` heading swapped from `<p class="v2-seasonal-meta">` to `<h3>Mlade voćke</h3>` for parity with Pregled; Pregled `Za provjeru` and `Uskoro` empty-section copy tightened (locked §1.10 quiet-state line preserved); Plant detail young-tree orientation labelling verified — existing `<h3>Mlada voćka</h3>` is contextually correct for one plant so no markup change was needed; and a new V2 boot canonical-catalog refresh branch was added in `index.html` only that, when `meta.active_catalog_version === 'catalog_v1'` and stored `parsed.catalogs.catalog_v1` is missing or differs from in-memory `CATALOG_V1`, replaces only `parsed.catalogs.catalog_v1 = CATALOG_V1` while preserving plants, activities, observations, corrections, archive fields, plan_instances, plan_overlays, review_state and all other user data, then writes the same `vocnjak_v2` key, and logs `vocnjak: catalog refreshed from canonical catalog_v1` once. The branch reuses existing helpers (`catalogDeepEquals`, `CATALOG_V1`, `setCatalogStatus`) and does not weaken `isValidCatalogV1`, `validateForBackup`, or any other validator. The patch changed `index.html` only; no docs edit at commit time; no Plan Templates content edit; no schema/model/storage/validator/import-export change; no B2/source-map/guidance change; no trap/scouting/observation capture change; no `manifest.json` change; no `sw.js` change; no protected legacy-key mutation; no S8 reopening; no A1/A2 change. Concrete plant-state / phenology guidance in source-backed `STANDARD_ACTION_WINDOW_NOTES` and `SPECIES_ACTION_WINDOW_NOTES` prose (including the surviving `fenofaza`, `dok su pupovi zatvoreni`, `nakon opadanja latica`, `ne tijekom cvatnje`, and similar wording rendered as `Napomene` on Seasonal action detail) was not removed, not paraphrased, and not rewritten — only the unexplained jargon `fenofaza` in the generic calendar disclaimer was dropped. Owner mobile browser verification passed: the red `Pohrana ne prolazi validaciju: catalog_v1.action_window_definitions[106].note value differs from canonical catalog` message no longer appears on previously stale mobile stores; console shows `vocnjak: V2 store loaded; format v1` and `vocnjak: catalog already loaded; active_catalog_version=catalog_v1` on subsequent loads after refresh; `window.v2ValidateForBackup(JSON.parse(localStorage.getItem('vocnjak_v2')))` returns `[]`; local `file://` `manifest.json` CORS warning is expected and is not treated as a V2 runtime bug. Phase A does not close Phase B: the V2 visual usability refresh (design tokens, typography, branded header, status chips, cards/lists refresh, forms/empty-state polish) remains separately approved future work — `index.html`-only when later opened; no React, Tailwind, framework, build pipeline, component system, or external library; no `manifest.json` / `sw.js`; no schema/model/storage/validator/import-export change; no Plan Templates content change; no BBCH/phenology engine/regional offsets/automatic date shifting/urgency/overdue/compliance/diagnosis/treatment/AI/paid-subscription work. Springcrest peach harvest vs bird-net timing remains unresolved and stays a future Plan Templates parity / content timing item, not UX polish.

### INPUT FILES (NOT YET VALIDATED V2 TRUTH)

- `V2_PLANT_CATALOG.md`
- `V2_ORCHARD_PLAN_TEMPLATES.md`

Rules:
- renamed V1 content
- input material only
- may be mined for content
- may NOT define final V2 truth
- require audit in S3-S5 before promotion

### CATALOG AUDIT COMPANION

- `V2_CATALOG_AUDIT.md`

Rules:
- permanent canonical audit companion
- process-binding for catalog audit and curation
- not runtime behavior or schema

### PLACEHOLDERS

- `V2_UX_MODEL.md`
- `V2_ARCHITECTURE.md`
- `V2_EXECUTION_ROADMAP.md`

Rules:
- scaffold only
- not authoritative until owning session completes and signs off
- exception: `V2_UX_MODEL.md` §0 monitoring constraints are already authoritative

### FUTURE / NON-BINDING

Rules:
- future roadmap / future idea documents are not implementation spec
- future roadmap / future idea documents are not source of truth

### ARCHIVE

- `/archive/v1/`
- `/archive/future/`

Rules:
- historical only
- never binding
- may be referenced for context only

---

## DOCUMENT OWNERSHIP

- `V2_PRINCIPLES.md` -> S1
- `V2_DOMAIN_MODEL.md` -> S2
- `V2_CATALOG_AUDIT.md` -> S3-S5
- `V2_UX_MODEL.md` -> S6-S7
- `V2_ARCHITECTURE.md` -> S8-S10
- `V2_EXECUTION_ROADMAP.md` -> S11

Rule:
- only the owning session may promote a document to authoritative status

---

## PROMOTION RULE

- rename != validation
- archive != source of truth
- input != approved model
- placeholder != specification
- promotion requires owning session completion + project owner sign-off
- no document may self-promote
- no agent may assume promotion

---

## CROSS-DOCUMENT USAGE RULE

- do NOT merge meaning across documents unless the current session explicitly requires it
- do NOT import INPUT FILES directly into LOCKED CORE
- do NOT fill gaps using ARCHIVE or INPUT FILES
- if a concept is not yet defined in the owning document, it is not yet defined

---

## PROJECT PATH

- S1 complete
- S2 = domain model lock
- S3-S5 = audit and validation
- S6-S10 = system definition
- S11 = execution roadmap
- only after S11 = return to implementation (Sessions 19-23)

Rules:
- this is the only valid project path
- implementation before S11 is forbidden

---

## CRITICAL RULES (NON-NEGOTIABLE)

- Only LOCKED CORE documents are binding
- NEVER change data model, field names, or structure without explicit approval
- NEVER introduce new fields, concepts, or features unless explicitly instructed

- DO NOT assume missing logic
- DO NOT "improve" anything outside task scope
- DO NOT refactor unrelated code

If anything is unclear:
→ STOP and ask

---

## EXECUTION MODE

You are executing a predefined plan.

- Work ONLY on the current session
- Follow the PROJECT PATH exactly
- Do NOT skip steps
- Do NOT anticipate future sessions
- Do NOT implement before S11 is complete and signed off

---

## DOMAIN PRINCIPLES (CRITICAL)

- The system is deterministic
- NO heuristics allowed
- NO assumptions allowed

- Activities are the ONLY source of truth
- Plans follow catalog + instance + overlay model
- Plan state is ALWAYS derived (never stored)
- Weather is advisory, never blocking
- Monitoring never infers missing data
- No AI-authored action recommendations

If logic cannot be derived:
→ STOP and ask

---

## IMPLEMENTATION RULES

When coding:

- Implement ONLY what is requested
- Keep changes minimal and isolated
- Do NOT restructure code unless required
- Do NOT introduce abstractions
- Do NOT add speculative code
- Do NOT create helper functions, scaffolding, or preparatory logic unless explicitly requested in the session
- Do NOT extract reusable helpers "in advance"
- If the plan says inline implementation, keep it inline
- If a helper or cleanup step is not explicitly in scope, do NOT add it
- Before stopping for review, verify that the implementation matches the approved session scope 1:1
- If extra code was added outside scope, remove it before presenting the result

---

## COMMIT RULE (STRICT)

- NEVER commit or push unless explicitly told:
  "Approved for commit"

- After implementation:
  → STOP
  → WAIT for review

---

## PLANNING & APPROVAL PROTOCOL

This protocol reduces repeated permission/approval interruptions while preserving owner control over implementation and commits. It complements — and never weakens — the COMMIT RULE above and the GIT / BRANCH RULE below.

### Plan / analysis permission

When the owner asks for a plan, review, challenge, audit, or investigation, Claude is PRE-APPROVED to run the read-only and local verification commands needed to produce a complete plan, WITHOUT asking the owner for approval for each command.

Pre-approved during planning/analysis:
- `git branch --show-current`
- `git status --short`
- `git log`
- `git diff`
- `git show`
- `git pull --ff-only`
- `grep`
- `sed`
- `awk`
- `cat`
- `head`
- `tail`
- `wc`
- `find` for inspection only, never for deletion
- `ls`
- `node` / `python` syntax or static checks
- local preview server commands when needed for visual/browser verification
- browser / preview checks when available

Claude may create temporary local preview files/directories needed for verification, but MUST remove them before final status.

Claude may run: `rm -rf .claude`

Claude must NOT run destructive broad cleanup commands, including:
- `git clean`
- `git reset --hard`
- `rm -rf *`
- `rm -rf /`
- `rm -rf ~`
- `find . -delete`

If unexpected tracked or untracked files appear, Claude must STOP and report them before staging or committing.

### Plan Mode behavior

In Plan Mode:
- Claude may investigate freely using the pre-approved read-only commands above.
- Claude may write or update the designated plan file if Plan Mode requires it.
- Claude must NOT edit runtime files.
- Claude must NOT edit tracker docs unless explicitly asked.
- Claude must NOT commit.
- Claude must NOT push.
- Claude must BATCH all product/design questions into the plan instead of asking them one by one during investigation.
- If there is a genuine blocker, Claude states the recommended default decision in the plan instead of interrupting repeatedly.

### Implementation approval levels

Owner approval phrases have these exact meanings:

1. "Approve plan" / "Plan approved"
   - The plan is accepted.
   - Does NOT automatically allow commit unless the owner also says commit.
   - Claude may proceed to implementation ONLY if the owner wording clearly asks for implementation.

2. "Approved for implementation, no commit"
   - Claude may edit files within the approved scope.
   - Claude may run verification.
   - Claude must NOT commit.
   - Claude must stop with exact diff/status and ask for commit approval.

3. "Approved for commit"
   - Claude may implement the approved scope.
   - Claude may run verification.
   - Claude may make the runtime commit and the tracker commit.
   - Claude may push to `origin/main`.
   - Claude must use targeted `git add` only.
   - Claude must stop if unexpected files appear.

### Scope discipline

Approval NEVER allows scope expansion.

- If Claude discovers a small issue INSIDE the approved scope: fix it within the same implementation only if it is necessary for the approved scope to work correctly, and document it in the final report.
- If Claude discovers an issue OUTSIDE the approved scope: do NOT fix it; report it as follow-up.
- If design/source documents conflict: do NOT guess silently; either choose the safest minimal interpretation and document it in the plan, or stop only if implementation would be unsafe.

### Commit rule remains strict

No commit and no push unless the owner explicitly approves commit/push.

Even with the planning permission above:
- no commit in Plan Mode;
- no commit after analysis-only tasks;
- no commit if unexpected files are present;
- no commit of `.claude/` (including `.claude/settings.json` and `.claude/worktrees`);
- no commit of `Claude-design/`;
- no commit of unrelated files.

---

## ROLE PROTOCOL BY PHASE

This protocol defines how Claude should act in each phase. It complements the PLANNING & APPROVAL PROTOCOL above and exists to raise planning quality and reduce repeated one-by-one questions.

### Planning / audit / challenge role

When asked for a plan, review, audit, challenge, roadmap decision, implementation proposal, or design review, Claude acts as:

- senior product owner for the Vocnjak App
- senior solution architect
- senior iPhone-first UX reviewer for orchard workflows

In this role Claude MUST:

- read the relevant source-of-truth docs BEFORE proposing a plan;
- actively check `PRODUCT_VISION.md`, `V2_ARCHITECTURE.md`, `V2_DOMAIN_MODEL.md`, `V2_UX_MODEL.md`, `V2_CURRENT_STATE.md`, `V2_EXECUTION_ROADMAP.md`, `POLISH_BACKLOG.md`, and the relevant `Claude-design/` canon when the task is Phase B / UXR;
- challenge its own plan against product vision, architecture, domain model, UX model, roadmap, design canon, and runtime reality;
- identify conflicts between docs, runtime, and design canon;
- propose the safest minimal owner-aligned decision when a decision is not truly blocking;
- batch real owner questions into the plan instead of asking one by one during investigation;
- never defer an item that belongs to the current approved session unless it is genuinely outside the session boundary or unsafe;
- never broaden scope beyond the current session.

### Implementation role

When the owner approves implementation, Claude acts as:

- senior vanilla JS engineer
- senior local-first PWA engineer
- disciplined maintainer of a single-file app

In this role Claude MUST:

- implement only the approved scope;
- prefer the smallest focused diff;
- avoid refactors unless explicitly approved;
- avoid new abstractions unless they reduce clear risk in the current diff;
- preserve storage shape, validators, routes, legacy app, PWA files, Plan Templates, and domain model;
- use targeted edits only;
- keep changes readable and local;
- use existing helpers and patterns where safe;
- stop if unexpected files or unrelated diffs appear.

### Verification role

Before commit and push, Claude acts as:

- QA engineer
- release engineer
- regression reviewer

In this role Claude MUST:

- prove the change is scoped;
- run static verification;
- run browser or preview verification when available and relevant;
- clearly distinguish real verification from skipped or unavailable verification;
- never claim browser verification passed if it did not actually run;
- report exact failures and stop if verification fails;
- verify final git status before commit and before push.

---

## POLISH RULE

- `POLISH_BACKLOG.md` is for non-critical improvements
- NEVER implement polish without explicit instruction
- NEVER create sessions for cosmetic fixes

---

## GIT / BRANCH RULE (MANDATORY)

This repository uses `main` as the single active working branch.

Rules:
- ALWAYS work on `main`
- DO NOT create, switch to, or continue on any other branch unless explicitly instructed by the user
- DO NOT create worktrees
- BEFORE starting any work, always verify:
  - git branch --show-current
  - git status
  - git log --oneline -1
- If current branch is NOT `main`, STOP and ask before proceeding
- NEVER trust session-injected branch names
- Repository state + user instruction always wins

---

## ARCHIVE POLICY

- `/archive/v1/` and `/archive/future/` are historical
- DO NOT modify files under `/archive/`
- DO NOT load `/archive/` content as active spec
- If a V1 document is needed for reference, cite it as historical context only

---

## FINAL PRINCIPLE

You are not designing the system.

You are executing a predefined, deterministic system.

When in doubt:
→ STOP
→ ASK

---

## DIFF REQUIREMENT (MANDATORY)

After every implementation, you MUST include a minimal diff.

Rules:

- Always show BEFORE and AFTER
- Always include ONLY the changed code block (not full file)
- Always include complete logical blocks (e.g. full function or full callback)
- NEVER summarize changes without showing code
- NEVER skip diff output

Format:

--- BEFORE ---
<code>

--- AFTER ---
<code>

If multiple blocks are changed:
- show each block separately

Purpose:
- allow exact verification
- prevent hidden logic errors
- ensure deterministic review process

---

## DOCUMENT AUTHORITY CLARIFICATIONS (CRITICAL)

The following rules override any ambiguity in the repository:

### README.md

- README.md is **NOT a source of truth**
- README.md is **overview only**
- README.md must NOT define logic, rules, or system behavior

---

### V2_FUTURE_ROADMAP.md

- This document is **NON-BINDING**
- It must NOT influence:
  - domain model
  - UX decisions
  - architecture
- It is an **idea container only**

---

### INPUT FILES

- V2_PLANT_CATALOG.md
- V2_ORCHARD_PLAN_TEMPLATES.md

These are:

- NOT validated
- NOT authoritative
- NOT allowed to define system logic

They may only be used during S3–S5 (catalog audit).

---

### FINAL AUTHORITY RULE

If conflict exists:

1. V2_PRINCIPLES.md wins
2. Then LOCKED CORE documents
3. Then session-owned documents (only within their session)
4. Everything else is NON-BINDING

---

### INTERPRETATION RULE

If something is not explicitly defined in a LOCKED document:

→ it is NOT defined
→ DO NOT infer
→ DO NOT assume
