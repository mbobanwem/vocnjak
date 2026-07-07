# VOCNJAK — CURRENT STATE

## Status

Chronological state/history record.

`CURRENT_STATE.md` is not roadmap authority, not schema, not runtime behavior, not implementation, and not catalog content.

It tracks completed documentation milestones, implementation history, decision-record completion, current runtime baseline, open documentation status, and stop conditions so agents do not reopen closed work or drift from the owner-approved path.

For what comes next and future session order, read `ROADMAP.md`.

V2 Done remains the current runtime baseline. Post-V2 follow-up planning is consolidated in `ROADMAP.md`.

The authority-rename session changed documentation authority filenames and routing only. No runtime implementation happened in that rename session.

Post-V2 Phase 1 progress: S1.1 (Springcrest / peach-nectarine bird-net note clarity) is complete. The peach and nectarine `bird_net.pre_harvest` notes were aligned in source (`V2_ORCHARD_PLAN_TEMPLATES.md`) and runtime (`SPECIES_ACTION_WINDOW_NOTES`) to add an early-variety cue (place the net by fruit state, not date; early varieties colour/ripen earlier). Springcrest is named only for peach; nectarine uses generic early-variety wording. No date/window, schema, storage, import/export, or validator change, and no `ACTION_WINDOW_LAST_REVIEWED_ON` change. The catalog-canonical / backup-import compatibility edge case discovered during S1.1 is tracked in `POLISH_BACKLOG.md` for a future data-safety / import-export audit.

Post-V2 Phase 1 S6 (Fuji/Fantasia harvest-timing correction) is complete. Owner-approved windows: Fuji `10.10.–05.11.` (band `late`, was `25.09.–15.10.`); Fantasia `10.08.–05.09.` (band `mid` → `late`, was `01.08.–20.08.`). Source basis: continental-HR ripening (Fuji late Oct–early Nov; Fantasia late-ripening, mid–late Aug into early Sep). Calendar windows stay calm reminders; maturity-first wording preserved. Changed `V2_PLANT_CATALOG.md` (variety tables + JSON) and `index.html` (runtime `speciesCatalog` Fuji/Fantasia `harvestWindow` + `timing` band, the apple harvest `Napomene` example + Fuji line, and one legacy harvest-note example string). No schema, validator, import/export, `window_def_id`, or `action_type` change; no unrelated harvest window changed; verifier PASS. A follow-up legacy-demo cleanup then aligned the deprecated `#legacy` V1 demo orchard harvest descriptors (Fuji card `berba listopad–studeni`; Fantasia card `berba kolovoz–početak ruj.`) and the two demo calendar reminder labels with the S6 windows — display text only, no trigger logic, schema, validator, import/export, or catalog-window change.

Post-V2 Phase 1 S5-B (nut content-reliability flag resolution) is complete. The source-confirmed audit hedges for hazelnut pollination awareness and adult walnut summer pruning were resolved in `V2_ORCHARD_PLAN_TEMPLATES.md`: the inline "S3 audit item" qualifiers on the hazelnut pollination context line and the two walnut summer-pruning lines were removed and replaced with confident, source-safe beginner wording (hazelnut: wind-pollinated, generally self-incompatible, usually needs a compatible cultivar with overlapping bloom, confirm pollinizers locally, no cultivar pairings; walnut: summer/late-summer is the lower-bleeding-risk advisory window, not a mandatory annual task, young/adult distinction kept). The species-wide `*S3 audit item*` disclaimers were intentionally left because other nut claims (walnut copper timing, young-tree water; hazelnut frost advisory, weevil) remain unaudited. Docs-only; no runtime, schema, validator, import/export, catalog, window, or B2 change; Fuji/Fantasia unchanged from S6; verifier PASS.

Regionalization decision record (REG-D1) is complete: `REGIONALIZATION_DECISION_RECORD.md` is the canonical regionalization decision record and REG session map. Regionalization is decision-recorded only; nothing is implemented. Runtime remains unchanged: single-catalog `catalog_v1`, no settings/country/region fields, no second pack, no verifier change, no schema change. REG sessions are owner-gated and open only by explicit owner instruction naming the session id (`REG-R1-D` through `REG-CTRY-*`). Owner-approved market/content priority: HR Adriatic → SI → AT → DE → IT → CH → FR → BA/RS/XK later.

Distribution decision record (STORE-D1) is complete: `DISTRIBUTION_DECISION_RECORD.md` is the canonical native/store distribution decision record and STORE/CAP/CORE/LEGACY/APP-ID/NOTIF session map. Native/store distribution is decision-recorded only; nothing is implemented. Runtime remains unchanged: no native shell, no store assets, no storage migration, no notification work, no AI/photo work, no sync/cloud, no manifest/service-worker/runtime change. The long-term public product target is recorded as an iOS/Android native mobile app. PWA/web is recorded as bridge/dev/verifier only, not a long-term public product channel. Next sessions are owner-gated and open only by explicit owner instruction naming the session id (`CAP-SPIKE`, `STORE-W1`, `CORE-AUDIT`, `LEGACY-D`, `APP-ID-D`, `REG-PACKS-D`, `LEGACY-R`, `CAP-BUILD`, `NOTIF-D`, `STORE-SUB`).

Post-Phase-1 numbered roadmap lock is recorded in `ROADMAP.md`: Phase 1 content reliability remains closed, and the active owner-facing roadmap now uses Sessions 20-33 plus Standing gate Q and Standing gate S. This docs-only lock made no runtime, schema, catalog, content, decision-record, archive, native/store, sync/cloud/account, notification, AI/photo, subscription/paywall, or implementation change. The next owner-facing session is Session 20 - Regionalization foundation; within it, the first technical substep is `REG-R1-D` unless the owner explicitly chooses a different numbered session.

Session 20 / REG-R1-D docs-only contract is complete. The contract was locked in `V2_ARCHITECTURE.md` and `V2_UX_MODEL.md` only, with this tracker sync in `CURRENT_STATE.md`; `V2_DOMAIN_MODEL.md` required no edit because existing `catalog_version` and write-time history-resolution invariants already cover the domain boundary. No runtime, schema implementation, validator implementation, import/export implementation, `index.html`, catalog/content, Plan Templates, `manifest.json`, `sw.js`, tools, archive, native/store, sync/cloud, or regional pack files changed. Locked decisions: `catalog_v1` is the permanent stored HR continental / continental Croatia baseline and must not be renamed or replaced by an alias; future REG-R1-R may introduce nullable live-gated `settings.country` and `settings.region` with `store_format_version: 2`; `settings.language` remains later i18n work; REG-R1 has exactly one deterministic additive v1 -> v2 migration for existing local stores and imported v1 backups; later regional activations are additive constants/content only, not schema migrations; persisted lineage remains `catalog_version`; `contentPack` is derived only and `pack_version` is forbidden; the current live/selectable set remains registry-of-one (HR continental plus `catalog_v1`); HR Adriatic remains planned/future only and is not stored, selected, shipped, activated, or exposed as live; unknown country, region, catalog, or future pack values fail closed; existing plants keep their pinned `catalog_version`, no existing calendar/history rewrite is allowed, and explicit existing-plant adoption belongs to Session 23 / REG-UPG. Owner-approved baseline disclosure is locked for future public/multi-user/store distribution, not shown in the current private single-user PWA phase: `Datumi su okvirni podsjetnici za kontinentalnu Hrvatsku. Stvarno stanje voćke, lokalni uvjeti i upute na etiketi uvijek imaju prednost.` Later boundaries remain unchanged: REG-R1-R owns runtime settings/store-v2/validation/import-export implementation; REG-VER1 owns verifier work; REG-CATF owns behavior-identical per-plant catalog lookup; REG-PACKS-D owns pack delivery; Session 22 / REG-A-D owns HR Adriatic source dossier/content; Session 23 / REG-UPG owns existing-plant adoption; Session 25 owns i18n/language; Sessions 21/27/33 own native/store/sync-related work.

Session 20 / REG-R1-R runtime implementation is complete. Runtime now uses `meta.store_format_version = 2` and a top-level `settings` root with nullable live-gated `country` and `region`; new empty stores initialize as v2, and the single deterministic additive v1 -> v2 migration applies to existing local stores and imported v1 backups before replacement. Export emits v2 snapshots with `settings`; import accepts valid v2 and valid v1 only through the migration path, then validates the final v2 payload before confirmation/replacement. Validation remains registry-of-one and fail-closed: `catalog_v1` remains the permanent stored HR continental baseline, persisted lineage remains `catalog_version`, active and referenced catalogs must be known/live/present, records validate against their referenced catalog, and unknown country, region, catalog, `contentPack`, `pack_version`, and `settings.language` are rejected. Save paths preserve `settings`; existing plants keep pinned `catalog_version`; no existing plant calendar/history rewrite, HR Adriatic activation/content, foreign country/region ids, region picker, public baseline disclosure, Plan Templates, Plant Catalog, `manifest.json`, `sw.js`, native/store, sync/cloud, notification, AI, language/i18n, REG-VER1, REG-CATF, REG-PACKS-D, or REG-UPG work was implemented.

Session 20 / REG-VER1 regionalization verifier is complete. A repo-owned read-only verifier now lives at `tools/verify-reg-r1-runtime.mjs` and replaces the prior temporary `/private/tmp` verification dependency. It evaluates the committed V2 store/catalog/backup runtime slices in a deterministic Node VM harness and checks all REG-R1-R/REG-R1-D gate requirements: v2 initialization, v1 local/import migration, v2 import/export with `settings`, save-path/validator preservation of `settings`, fail-closed country/region/catalog/reference/`contentPack`/`pack_version`/`settings.language` behavior, existing plant catalog pins, HR Adriatic non-activation, no foreign live ids, no region picker, no private-PWA baseline disclosure, and no REG pack/i18n/adoption/native leakage into manifest/service-worker scope. At REG-VER1 closure, `node tools/verify-reg-r1-runtime.mjs` passed with `RESULT: PASS (20/20)`; after REG-CATF and KD-1 corrective coverage, the current REG verifier passes `RESULT: PASS (32/32)`, and the existing `node tools/verify-content-parity.mjs` still passes. REG-VER1 changed only `tools/verify-reg-r1-runtime.mjs` and this tracker paragraph; no `index.html`, Plan Templates, Plant Catalog, `manifest.json`, `sw.js`, runtime behavior, regional content, HR Adriatic activation, REG-CATF, REG-PACKS-D, or REG-UPG work was implemented.

Session 20 / REG-CATF behavior-identical per-plant/per-record catalog lookup foundation is complete. The runtime read paths now resolve catalogs through each record's retained `catalog_version` instead of assuming the single hardwired active catalog, while behavior stays identical because the live registry is still registry-of-one (`catalog_v1` only). Changes in `index.html`: the REG-R1-R primitive `retainedCatalogForVersion` is exposed read-only as `window.v2RetainedCatalogForVersion` (fail-closed null for unknown/non-live/missing references, never mutates); a thin PLANTS-runtime wrapper `catalogForRecord(store, record)` (via `catalogForVersion`) funnels per-plant/per-record resolution through it; `readValidStore` stops returning the hardwired `parsed.catalogs.catalog_v1` and instead returns the resolved active catalog via `catalogForVersion(parsed, parsed.meta.active_catalog_version)` (still meaning "active catalog" for capture/add/edit affordances); `buildSeasonalSnapshot` is now plant-major and resolves each plant's catalog via `catalogForRecord`, iterates that plant's `action_window_definitions`, evaluates applicability against the resolved plant catalog, and stamps `occurrence.catalog`; `groupSeasonalOccurrences` carries each group's occurrence-resolved catalog; the plant seasonal action card, seasonal action detail (label + `spray_safety_notes`), Dnevnik activity labels and estimated-fallback, and the correction display header all resolve labels/windows through the record's own `catalog_version`; and the canonical seed/refresh branches are generalized via a `KNOWN_CANONICAL_CATALOGS = { catalog_v1: CATALOG_V1 }` registry-of-one keyed off `meta.active_catalog_version`, falling closed for unknown active catalogs (the seed of the baseline remains `catalog_v1`). New-record write-sites still pin `meta.active_catalog_version`; capture/add/correction-form window-selection affordances still use the active catalog; validators were not changed (REG-R1-R validators already resolve retained catalogs per referenced `catalog_version`). The verifier `tools/verify-reg-r1-runtime.mjs` was extended with REG-CATF checks 21–29 (primitive resolves `catalog_v1`; fail-closed null for missing referenced catalog and for a present-but-non-live key; generalized refresh registry; `readValidStore` no longer hardwires; snapshot per-plant resolution and `occurrence.catalog`; Dnevnik/correction per-record label resolution; group/seasonal-detail resolved catalog; no second live catalog and read-only resolver exposed); the existing 20 checks remained intact and, at REG-CATF closure, `node tools/verify-reg-r1-runtime.mjs` passed with `RESULT: PASS (29/29)`; after KD-1 corrective coverage, the current REG verifier passes `RESULT: PASS (32/32)`, and `node tools/verify-content-parity.mjs` still passes. Behavior-identical proof: a deterministic headless before/after comparison (HEAD vs working tree) of `buildSeasonalSnapshot` over an identical realistic multi-plant store (apple/plum/sweet cherry + one activity + one correction) produced byte-identical seasonal groups (35 groups / 35 occurrences, identical labels, dates, states, `catalog_version`, evidence, and order). No second catalog, HR Adriatic content/activation, foreign country/region ids, regional pack files, pack delivery, existing-plant adoption, i18n/language, native/store/sync, `manifest.json`/`sw.js`, Plan Templates, Plant Catalog, date/window content, UI picker/disclosure, validator-semantics change, or user-facing behavior change was implemented. REG-CATF changed only `index.html`, `tools/verify-reg-r1-runtime.mjs`, and this tracker paragraph.

Session 20 / REG-PACKS-D docs-only pack delivery decision is complete. The decision is locked in `REGIONALIZATION_DECISION_RECORD.md`, `DISTRIBUTION_DECISION_RECORD.md`, and `V2_ARCHITECTURE.md`, with this tracker sync only in `CURRENT_STATE.md`. Locked decisions: a regional content pack is a curated delivery unit (source dossier + complete regional ledger + canonical runtime catalog version(s) + rendered guidance metadata for one regional catalog lineage), not a persisted user object; runtime persists retained `catalogs`, `catalog_version`, `settings.country`, and `settings.region`, while `contentPack` remains derived only and `pack_version` remains forbidden; future regional packs must be repo-owned bundled static pack assets with a strict JSON-compatible catalog-data heart; remote fetch, CDN dependency, backend delivery, accounts/cloud/sync delivery, service-worker-as-authority, and native-only delivery are rejected for current/default REG pack delivery; `catalog_v1` may remain inline until first second-pack activation; service worker and manifest are not pack authority, and pack availability must not depend on service-worker cache state; future native builds must bundle the same canonical JSON-compatible pack data and must not fork validators, catalog semantics, derived `contentPack` semantics, import/export semantics, or history semantics; export/import retain catalogs, referenced `catalog_version` lineage, immutable history, `settings.country`, and `settings.region`, and unknown country/region/catalog/future-pack values, persisted `contentPack`, and `pack_version` fail closed. REG-PACKS-D did not edit `index.html`, tools, Plan Templates, Plant Catalog, `manifest.json`, `sw.js`, archives, icons, runtime/schema/validators/import-export, did not create pack files, did not activate HR Adriatic, did not add a second catalog or foreign ids, did not open Session 21/22, and did not implement existing-plant adoption, UI picker, baseline disclosure UI, i18n/language, native bridge, sync/cloud/accounts, remote/backend, payment/subscription, or notifications.

Session 22 / REG-A-D HR Adriatic source dossier draft is created as `V2_PACK_HR_ADRIATIC.md`. It is docs-only, not runtime content, does not activate HR Adriatic, creates no second catalog, and REG-A-R remains closed. The dossier includes the HR Adriatic source corpus, ledger dispositions, unresolved-row policy, verifier anchors, and research backlog; unresolved rows remain blocked until source-backed or owner-decided.

Session 21 / CORE-AUDIT final documentation lock is complete. The durable audit contract now lives in `CORE_AUDIT.md`, with README discovery and this tracker sync. CORE-AUDIT found that the current canonical core is logical but still in-document, that the exposed `window.v2*` surface is current wiring rather than a future public API, and that CAP-BUILD may consume canonical logic in-document only under an owner-approved plan while any new global/bridge exposure must be named and any out-of-document/native-module/KMP consumer requires a separate owner-approved extraction/interface session. The previously discovered KD-1 observation-correction validator regression is fixed at `cf3a51f Fix observation correction validation regression`; it is now a historical resolved defect covered by REG-VER1 checks 30-32, and it no longer blocks CAP-BUILD, REG-A-R, or CAP-SPIKE validator round-trip evidence. Current REG verifier status supersedes earlier session-closure counts: `node tools/verify-reg-r1-runtime.mjs` passes with `RESULT: PASS (32/32)`, and `node tools/verify-content-parity.mjs` passes. KD-2 remains unresolved: Plant creation still hardcodes `catalog_version: 'catalog_v1'`, which is behavior-identical under registry-of-one but blocks first second-catalog activation (`REG-A-R`) until fixed with REG-VER1 coverage. CORE-AUDIT documentation did not edit `index.html`, tools, `manifest.json`, `sw.js`, runtime/schema/validators/import-export, catalog content, pack files, or regional activation state.

Session 21 / CORE-AUDIT execution mapping is recorded. `ROADMAP.md` now maps the CORE-AUDIT contract to existing numbered sessions and substeps: CAP-SPIKE evidence, STORE-W1 bridge work, APP-ID-D gate, LEGACY-D/R legacy path, REG-A-R/KD-2 gate, CAP-BUILD constraints, D1-D5 decision ownership, Session 23 adoption boundary, and Session 33 sync/cloud separation. `CORE_AUDIT.md` remains the deep technical reference and now preserves the missing durable inventory details from the planning artifact; README discovery points readers to the roadmap execution authority. This was documentation-only: no `index.html`, tools, `manifest.json`, `sw.js`, runtime/schema/validator/import-export behavior, catalog content, pack files, native/store implementation, legacy runtime, sync/cloud/accounts, or Session 22 activation changed.

European seasonal timing delivery architecture is locked and execution-mapped in `ROADMAP.md`. The chosen model is country/source boundary + beginner-facing region/timing abstraction + separate source-maintenance geography + catalog lineage; calendar windows are approximate planning/attention surfaces, while plant state and local conditions remain execution context and weather remains advisory only. `ROADMAP.md` now defines what country owns, what region owns, the deterministic `(settings.country, settings.region) -> lineage -> catalog_version -> content/windows/guidance` delivery chain, evidence classifications for recurring planning windows, insufficient-evidence and boundary behavior, existing-plant region-change behavior, and exact obligations for Sessions 20, 22, 23, 24, 25, 26, 28, plus preservation notes for Sessions 21/27/33. This was documentation-only: no runtime code, schema/model implementation, validators, import/export behavior, pack files, `index.html`, `manifest.json`, `sw.js`, source dossiers, Plan Templates, Plant Catalog, decision records, or regional activation changed. `4d78e75 Track European seasonal timing evidence corpus` now tracks `vocnjak-seasonal-pass-a-evidence.md` as evidence/audit trail only; it is not execution authority, and `ROADMAP.md` remains the execution authority for future agents.

If this document conflicts with locked/core documents, locked/core documents win.

This document should be updated after relevant documentation/session commits. Its historical timeline is retained from the previous current-state tracker.

---

## Current phase

Phase: Runtime implementation continues. Runtime Slice 0, Slice 1, Slice 2, Slice 3, Slice 4, Slice 5, Slice 6, and Runtime Slice 7 through S7.4 are complete. Focused S3/S4 adversarial review after the post-Slice-4 safety fix passed and owner verification accepted the PASS. Pre-Slice-5 Add Plant date-validation message polish is complete. Pre-Slice-5 Action Window Seed prerequisite is complete (`df6a7fc Implement Action Window Seed prerequisite`); owner browser verification passed and focused adversarial review passed. Plan-template projection hardening is complete (`bcaf3a2 Harden plan-template projection rules`). Runtime Slice 5 is complete (`8bc630a Implement Runtime Slice 5 activity capture`). Runtime Slice 6 is complete (`99e76c8 Implement Runtime Slice 6 snapshot and calendar surfaces`). Pre-Slice-7 Action Window Notes Projection prerequisite is complete (`ad9a113 Project action-window notes into canonical catalog` and `a1b5307 Clean B1 action-window notes boundary`). Runtime Slice 7 is complete through S7.4 (`d61cc90 Harden S7 seasonal action detail display`). B2 metadata-only projection boundary is complete. Runtime Slice 8 is closed for the approved S8 scope. Runtime Slice 8 Step 1, Step 2, Step 3, Step 4a, Step 5a, Step 6, Step 7 numeric-band runtime, Step 7b context-only trap advisory runtime, Step 7c bounded visual scouting capture, Step 7d source-backed scouting guidance, and Step 7e monitoring guidance parity are runtime-complete. Step 6 is implemented at `8c7d135 Implement multi-plant observation capture` for multi-plant free-standing `note` and `stage_obs` Observation capture only. Step 7 numeric-band runtime covers sweet cherry, sour cherry, and plum rows 654/860/1596/1643. Step 7b context-only trap advisory runtime at `b1d840c` also covers apple row 337, olive row 2455, walnut row 2949, and walnut row 2977. Step 7c docs lock was committed at `7e388c5 Lock Step 7c visual scouting capture model`; Step 7c runtime was committed at `588e413 Implement Step 7c visual scouting capture`. Step 7d source-backed scouting guidance runtime was committed at `5f64257 Add Step 7d scouting guidance`. Step 7e monitoring guidance parity runtime was committed at `36433aa Add Step 7e monitoring guidance parity`, followed by tracker sync at `c5521ac Sync trackers after Step 7e guidance parity`. Post-S8 Observation correction is complete: docs lock at `1ef2009`, validator/model runtime at `60cc32c`, and UI/display runtime at `6d5b19d`. A2 default V2 and A1 archive/lifecycle runtime are complete. A1 implements only the locked Plant archive fields (`archived_at?`, `archive_reason?`, `archive_note?`), excludes archived plants from active Biljke/Pregled/Kalendar/seasonal scope, preserves Dnevnik/history and historical corrections, and keeps no-delete/no-unarchive/no-replacement boundaries. Bounded Plan Templates-backed visual scouting capture, source-backed read-only `Što sada` guidance, B2 read-only `Što gledati` guidance parity, and Observation correction for the approved Post-S8 scope are complete. Step 7e extended only `B2_READONLY_GUIDANCE_BY_SOURCE_ROW` with 21 source-backed beginner visible-sign entries for monitoring-only B2 rows; it did not add schema, validators, payload fields, storage, routes, renderer changes, source maps, `symptom_code`, `Observation.symptom`, broad registries, diagnosis, treatment/product/dose advice, pressure/urgency/compliance logic, or trap/scouting capture changes. Step 7 coverage is complete and no unresolved S8 blocker row remains. Plan Templates runtime fidelity / content parity runtime patch is complete at `c9645c4 Implement Plan Templates runtime parity fixes` with three source-backed display/copy parity fixes in `index.html` only (universal calendar-window baseline disclaimer on Seasonal action detail only; `purposeCue` extension for `harvest` / `Pregled za zimu` / `Gašenje navodnjavanja`; two restored Plan Templates lines in `peach.copper.leaf_curl_buds_closed`); no schema/model, no validators, no import/export, no Plan Templates edit, no B2/source-map/guidance change, no trap/scouting capture change, no `manifest.json`, no `sw.js`, no S8 reopening; owner browser verification passed. Phase A UX/copy polish runtime is complete at `cc22d24 Polish V2 UX copy and Pregled click affordance`; the commit changed `index.html` only, made Pregled seasonal cards clickable to Seasonal action detail (parity with Kalendar and Plant detail), rewrote the universal calendar-window disclaimer constant to a jargon-free wording that drops the previous `Kalendarski prozor` / unexplained `fenofaza` user-facing copy (placement on Seasonal action detail unchanged), rewrote the harvest and `Pregled za zimu` `purposeCue` strings to more concrete informational copy, rewrote V2 Dnevnik empty-state copy at `renderDetail` and `renderDiary` to `Još nema evidencije` wording, swapped `appendYoungTreeCalendarSection` heading from `<p class="v2-seasonal-meta">` to `<h3>Mlade voćke</h3>` for parity with Pregled, tightened Pregled `Za provjeru` and `Uskoro` empty-section copy while preserving the locked §1.10 quiet-state line, verified Plant detail young-tree orientation labelling (existing `<h3>Mlada voćka</h3>` is contextually correct for one plant so no markup change was needed), and added a V2 boot canonical-catalog refresh branch in `index.html` only that, when `meta.active_catalog_version === 'catalog_v1'` and stored `parsed.catalogs.catalog_v1` is missing or differs from in-memory `CATALOG_V1`, replaces only `parsed.catalogs.catalog_v1 = CATALOG_V1` while preserving plants, activities, observations, corrections, archive fields, plan_instances, plan_overlays, review_state and all other user data, then writes the same `vocnjak_v2` key and logs `vocnjak: catalog refreshed from canonical catalog_v1` once; the refresh branch reuses existing helpers (`catalogDeepEquals`, `CATALOG_V1`, `setCatalogStatus`) and does not weaken `isValidCatalogV1`, `validateForBackup`, or any other validator. Phase A changed `index.html` only; no schema/model/storage/validator/import-export change; no Plan Templates content edit; no B2/source-map/guidance change; no trap/scouting/observation capture change; no `manifest.json` change; no `sw.js` change; no protected legacy-key mutation; no S8 reopening; no A1/A2 change. Concrete plant-state / phenology guidance in source-backed `STANDARD_ACTION_WINDOW_NOTES` and `SPECIES_ACTION_WINDOW_NOTES` prose (including the surviving `fenofaza`, `dok su pupovi zatvoreni`, `nakon opadanja latica`, `ne tijekom cvatnje`, and similar wording rendered as `Napomene` on Seasonal action detail) was not removed, not paraphrased, and not rewritten — only the unexplained jargon `fenofaza` in the generic calendar disclaimer was dropped. Owner mobile browser verification passed: the previously reported red `Pohrana ne prolazi validaciju: catalog_v1.action_window_definitions[106].note value differs from canonical catalog` no longer appears on stale mobile stores; console shows `vocnjak: V2 store loaded; format v1` and `vocnjak: catalog already loaded; active_catalog_version=catalog_v1` on subsequent loads after the one-time refresh; `window.v2ValidateForBackup(JSON.parse(localStorage.getItem('vocnjak_v2')))` returns `[]`; local `file://` `manifest.json` CORS warning is expected and is not treated as a V2 runtime bug. Phase A and Phase B / UXR through UXR.7 are complete for the V2 Done baseline and Springcrest peach harvest vs bird-net timing was resolved by S1.1 (early peach/nectarine bird-net note clarity). Broad/general scouting, symptom, program attachment, and broader phenology work remain Post-S8 / owner-approved future work. Phase B / UXR is complete through UXR.7 for the V2 Done baseline; `UXR.0` is complete at `5ef720d`, `UXR.1a` at `8163d1c`, `UXR.1b` at `8702836`, `UXR.2a` at `559012c`, `UXR.2b — App shell: top app bar + bottom nav` is complete at `927555d Add Phase B V2 app shell`, `UXR.2c — Postavke sheet + scaffold relocation + inline import confirm` is complete at `a78840a Add Phase B settings sheet`, and `UXR.2d — Detail / form behavior: back chevron + hide bottom nav on forms` is complete at `17e5439 Refine Phase B detail and form shell`. UXR.2d changed only `index.html` and added a Claude-Design-aligned top-bar text-back affordance (`< ParentLabel` pattern matching `archive/design/Claude-design/Vocnjak Phase B Mockup.html` `.app-top-back`) with deterministic hash targets — `detail` → `< Biljke` / `#v2`, `seasonal_action` → `< Kalendar` / `#v2/kalendar`, `plant_diary` → `< Voćka` (or `< Biljke` when plant_id absent/invalid) / `plantDetailRoute(plant_id)` (or `#v2`), `add` / `activity_add` → `< Biljke` / `#v2`, `correction` → `< Dnevnik` / `#v2/diary`. Detail routes intentionally show NO center title (back-text carries parent context, matching the mockup); form routes show their existing in-app action heading as the top-bar title (`Dodaj voćku` / `Dodaj evidenciju` / `Korekcija`). A new `v2-route-form` class on `<html>` (set on `add` / `activity_add` / `correction` only) hides the bottom nav and the Postavke `⋯` trigger and drops `#v2Content` padding-bottom from `calc(var(--safe-bottom) + 96px)` to `calc(var(--safe-bottom) + 24px)` so forms feel like focused iPhone modals. Back chevron uses `location.hash =` against the back target — no `history.back()`. Existing in-screen back/cancel controls are intentionally preserved for later screen-specific redesign sessions (UXR.5b / UXR.4) and may visibly duplicate the top-bar back temporarily. Postavke open/close / focus management / scroll lock / inline import confirm (UXR.2c) and bottom-nav active-tab state (UXR.2b) are unchanged on routes where they remain visible. UXR.2d preserved every existing V2 ID (one net-new `v2TopBarBackBtn` + `v2TopBarBackLabel`), route table, default route, route aliases, `#v2` alias, `#legacy`, old `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, and `sw.js`; did NOT implement UXR.3, UXR.4 (sticky form action bar, top-bar Spremi CTA), UXR.5, archive route/surface, species icons, or any storage/schema/validator/payload changes. `UXR.3a — Pregled hero + section order` is complete at `44eff72 Add Phase B Pregled hero`. UXR.3a changed only `index.html` and added the accepted Claude Design Pregled hero immediately below the app shell on the Pregled route, with a full-bleed Adriatic gradient section, sun-glow + dim-corner radial overlay, backdrop-blur uppercase month chip with peach dot indicator (`Svibanj · kasno proljeće` style from a 12-entry display-only `V2_PREGLED_HERO_MONTH_QUALIFIER_HR` table scoped to the hero helper), the existing `seasonalStatusSentence(...)` rendered in Fraunces italic with `text-shadow` contrast mitigation and a deterministic accent span (`.v2-pregled-status-accent`) wrapping the count phrase, and a decorative horizon SVG (3 tree silhouettes). A visually hidden `<h1 class="v2-sr-only">Pregled</h1>` preserves a proper page heading after `appendSeasonalHeader` was skipped on Pregled (Kalendar and Seasonal Action Detail still call it unchanged). Pregled section order is now aligned to locked `V2_UX_MODEL.md` §1.3: hero → `Sada aktualno` → `Za provjeru: nema evidencije` → `Uskoro` → `Praćenje` → `Mlade voćke` → final quiet line (only when all five lists are empty). A minimal Pregled-only hero-coupled heading-rhythm rule (`#v2Pregled .v2-seasonal-section h3`, Fraunces 20px / 500 / `letter-spacing: -0.01em` / `--v2-ink` / `margin: 28px 0 12px`, `:first-of-type` margin-top 4px) bridges hero typography to section headings without redesigning cards/chips/lists. The accent wrap uses controlled-input `indexOf` against locked `seasonalStatusSentence` output and falls back to plain text on no match; the closing-soon clause is intentionally not accented. The full-bleed margin (`-24px -16px 24px`) uses measured `#v2Content` (16px horizontal / 16px top) and `#v2Plants` (24px top) values plus `box-sizing: border-box; max-width: 100%; overflow: hidden;` to prevent narrow-viewport overflow. Browser verification passed at 320px and 390px widths with a temporary DevTools-only `vocnjak_v2` store carrying a single valid Idared apple plant (removed after screenshots; rebuilt empty-store backup validator returned `[]`); empty-plant gate still short-circuited before hero render; Kalendar still rendered with `appendSeasonalHeader` and `Sezona 2026.` subtitle; `#legacy` continued to render with no V2 chrome; Postavke open/close still worked. UXR.3a preserved every existing V2 ID, route table, default route, route aliases, `#v2` alias, `#legacy`, all old `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, and `sw.js`; did NOT implement UXR.3b (broader card/chip/list visual system), UXR.4 (sticky form action bar, top-bar Spremi CTA, broader copy polish), UXR.5, archive route/surface, species icons, Plant detail species banner, Pregled empty-state illustration, or any storage/schema/validator/payload changes. The Pregled monitoring heading copy alignment from `Sezonsko praćenje` to `Praćenje` shipped as the UXR.3a follow-up at `fec7bfb Align Pregled monitoring heading` (Pregled-only one-line change to `appendB2PregledSection`; no logic, storage, validator, Plan Templates, manifest, or sw change). `UXR.3b — Cards/chips/list visual system` is complete at `9c46712 Refine Phase B Pregled cards`. UXR.3b changed only `index.html` and applied the accepted Claude Design Adriatic card/chip/list visual system to Pregled with strict session-boundary discipline: a new Pregled-scoped CSS block (`BEGIN UXR.3b — Pregled cards / chips / Praćenje / list` / `END UXR.3b`) delivers white seasonal cards with 18px radius, 1px `var(--v2-line)` border, soft layered shadow `0 1px 0 rgba(255,255,255,0.6) inset, 0 4px 14px rgba(31,74,95,0.08)`, and 16px 18px padding; a consistent `.v2-seasonal-card-top` flex wrapper holds title (DM Sans 16/600 `var(--v2-ink)`) and a new top-right status chip on Pregled cards; chip variants consume UXR.1a tokens — `.v2-seasonal-status--aktualno` uses `--v2-chip-current-bg/fg` sea-pale on brand-deep, `.v2-seasonal-status--pri-kraju` uses `--v2-chip-ending-bg/fg` warm peach on peach-ink, `.v2-seasonal-status--uskoro` uses `--v2-chip-upcoming-bg/fg` faded pale-sea on muted ink, no red, no amber-alarm, no icons, no countdown; meta typography 13px `var(--v2-ink-mid)`, note typography 13px `var(--v2-ink-mute)`; section rhythm drops the cold slate `border-top` from `.v2-seasonal-section` and adds 12px list gap; Praćenje on Pregled now renders inside a new `.v2-pregled-monitoring-card` neutral sea-pale info-card surface (`var(--v2-pale)` fill, 14px radius, 14px 16px padding, no shadow, no border) wrapping the existing B2 count sentence and the locked `Detalji su na kartonu voćke.` deflection note. Mlade voćke cards on Pregled are visually unified through the same `#v2Pregled`-scoped CSS on the existing markup; `appendYoungTreeContextCard` is **unchanged**, so Plant detail Mlada voćka section and Kalendar Mlade voćke section render byte-identical DOM and byte-identical visual to today. Runtime markup changes are limited to two narrowly-gated edits: `appendSeasonalCard` (Pregled-only branch on `context === 'current' | 'upcoming' | 'missed'`; Kalendar `context === 'calendar'` takes the unchanged path, so `.v2-seasonal-card-top` cannot appear on Kalendar) and `appendB2PregledSection` (wraps the existing meta sentence + deflection note in the new info-card div; B2 logic, B2 data, and copy unchanged). A new local helper `pregledStatusChipVariant` maps the locked `Aktualno` / `Pri kraju` / `Uskoro` status strings to chip variant classes. UXR.3b preserved every existing V2 ID, route table, default route, route aliases, `#v2` alias, `#legacy`, all `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, `sw.js`, B2/S8 monitoring logic, Activity/Observation/Correction logic, archive lifecycle logic, `appendYoungTreeContextCard`, `appendPlantSeasonalActionCard`, `appendB2CalendarCard`, `appendSeasonalSection`, `appendSeasonalHeader`, `renderKalendar`, `renderSeasonalActionDetail`, `renderDetail`, and the UXR.3a Pregled hero. Plant detail / Kalendar / Seasonal action detail / Dnevnik DOM are byte-identical to today. UXR.3b did NOT implement UXR.3c (Biljke Add Plant pattern / Dodaj evidenciju demotion), UXR.3d (per-species icons / Plant detail species banner), UXR.4 (sticky form action bar / top-bar Spremi CTA / Postavke label rename), UXR.5a (Kalendar timeline), UXR.5b (Plant detail rhythm), UXR.5c (Dnevnik timeline), UXR.6 (a11y / `prefers-reduced-motion` pass), archive route/surface, species icons, Plant detail Mlada voćka italic-Fraunces commentary, Pregled empty-state illustration, or any storage/schema/validator/import-export/Plan Templates/routes/manifest/sw changes. Static no-leakage proof: `grep` confirms `.v2-seasonal-card-top` appears only inside the gated `appendSeasonalCard` branch and inside Pregled-scoped CSS rules; `.v2-pregled-monitoring-card` appears only inside `appendB2PregledSection` and Pregled-scoped CSS rules; `appendYoungTreeContextCard` body is byte-identical to its pre-UXR.3b form. Owner browser verification (validator returns `[]`, Pregled visual states, Kalendar / Plant detail / Postavke / `#legacy` regression) is recommended via DevTools per the standard UXR pattern. `UXR.3c — Biljke Add Plant pattern / primary actions` is complete at `166f26f Refine Phase B Biljke actions`. UXR.3c changed only `index.html` and refined the Biljke primary surface with strict session-boundary discipline: a new Biljke-scoped CSS block (`BEGIN UXR.3c — Biljke action row / archive toggle / list surface` / `END UXR.3c`) under `.v2-active #v2PlantsList` ships an inline `+ Dodaj voćku` action row (constant 64 px frame, white surface, 1 px `var(--v2-line)` border, soft shadow `0 2px 12px rgba(26, 51, 32, 0.05)`, brand-green inline SVG plus glyph, DM Sans 16/600 label, optional 13 ink-mute helper) replacing the prior `v2-plants-topbar` div + `v2-activity-actions` four-button strip (Pregled · Kalendar · `Dodaj evidenciju` · Dnevnik); the empty-state helper line `Prva voćka, krećemo.` is appended inside the action row only when `plants.length === 0`, with the action-row outer frame held constant at 64 px both states so adding the first plant produces zero layout shift. `Dodaj evidenciju` is demoted from the Biljke primary surface entirely while `#v2/activity/add` continues to work and remains reachable from Seasonal action detail (`renderSeasonalActionDetail`'s contextual `Dodaj evidenciju` button) and Plant detail inline capture sections (`Dodaj opažanje`, `Dodaj ulov iz klopke`, `Dodaj fazu razvoja`, `Zabilježi vizualni pregled`); duplicate in-body Pregled / Kalendar / Dnevnik secondary buttons are dropped because UXR.2b bottom-nav owns primary nav. The always-visible `Arhivirane voćke` inline section is replaced by a quiet ephemeral expand-on-tap pattern (`Prikaži arhivirane (N)` ↔ `Sakrij arhivirane (N)`) with deterministic `aria-expanded` flips and `aria-controls="v2PlantsArchiveList"` wiring; archived rows are tappable to Plant detail when expanded; toggle state is intentionally ephemeral — no localStorage, no route/hash, no `history.pushState`/`history.replaceState`, no persisted expanded state, and each `renderList()` re-render resets to collapsed. The duplicate in-body `<h2>Biljke</h2>` topbar is removed because the top app bar already shows `Biljke` (UXR.2b mapped `TOP_BAR_TITLES.list = 'Biljke'`; UXR.3c does NOT touch `TOP_BAR_TITLES`); a visually-hidden `<h1 class="v2-sr-only">Biljke</h1>` is added as the first child of `#v2PlantsList` for a11y heading semantics, mirroring UXR.3a Pregled. The muted `Još nema unesenih voćki.` paragraph is dropped (helper inside action row replaces it calmly), while the `Nema aktivnih voćki.` muted line is preserved for the active-empty + archived-non-empty edge case. Minimal `#v2PlantsList`-scoped surface polish on `.v2-plants-row` / `.v2-plants-list` consumes UXR.1a tokens (18 px row radius, 14 px action-row radius, hairline border, layered shadow, DM Sans 16/600 title + 13 ink-mute meta, 12 px list gap) without species class, species icon, accent stripe, or per-plant `Sada aktualno` line — all four reserved for UXR.3d. UXR.3c preserved every existing V2 ID, route table, default route, route aliases, `#v2` alias, `#biljke` alias, `#legacy`, all `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, `sw.js`, B2/S8 monitoring logic, Activity/Observation/Correction logic, A1 archive lifecycle (`archived_at` / `archive_reason` / `archive_note`), `TOP_BAR_TITLES`, `ACTIVE_TAB_BY_ROUTE`, `ROUTE_CLASS`, `BACK_LABEL_BY_ROUTE`, `updateShellChrome` body, every render function outside `renderList`, every `append*` helper (including `appendSeasonalCard`, `appendB2PregledSection`, `appendYoungTreeContextCard`, `appendPlantSeasonalActionCard`, `appendB2CalendarCard`, `appendSeasonalSection`, `appendSeasonalHeader`, `appendArchiveSection`), every plant/archive helper (`activePlants`, `archivedPlants`, `isPlantArchived`, `plantTitle`, `plantTitleWithArchiveMarker`, `plantDetailRoute`, `archiveReasonLabel`, `formatDateYmd`), the UXR.3a Pregled hero, and the UXR.3b Pregled cards/chips/Praćenje surface. Plant detail / Kalendar / Seasonal action detail / Dnevnik / Postavke / `#legacy` runtime code paths are untouched and no UXR.3c CSS selector targets those screen roots; no observable regression is expected on those surfaces. Static no-leakage proof: `v2-add-plant-row` / `v2-archive-toggle` / `v2-archive-list` / `v2-plants-archive` appear only inside the `BEGIN UXR.3c` CSS block and `renderList`; `v2-activity-actions` has zero `renderList` JS use sites (orphan CSS only); `v2-plants-topbar` has zero `renderList` JS use sites (the remaining `appendSeasonalHeader` Kalendar / Seasonal action detail use site and `renderDiary` use site are intentionally preserved and isolated from `#v2PlantsList`). UXR.3c did NOT implement UXR.3d (per-species icons / accent stripes / Plant detail species banner / per-plant `Sada aktualno` live line), UXR.4 (sticky form action bar / top-bar Spremi CTA / Postavke label rename), UXR.5a (Kalendar timeline), UXR.5b (Plant detail rhythm / `⋯` overflow menu for Arhiviraj), UXR.5c (Dnevnik timeline / empty-state SVG branch), UXR.6 (a11y / `prefers-reduced-motion` pass), an archive route, a Postavke Voćnjak section entry, a Pregled empty action-row mirror, or any storage/schema/validator/import-export/Plan Templates/routes/manifest/sw changes. Owner browser verification (validator returns `[]`, Biljke empty/populated/archive states, archive toggle ephemerality, top app bar `Biljke` title, `#v2/activity/add` direct-route access, Plant detail / Kalendar / Pregled / Dnevnik / Postavke / `#legacy` regression) is recommended via DevTools per the standard UXR pattern. The UXR.3d species identity is complete at `473e1c7`. `UXR.4 — Forms + capture flows polish + Postavke label rename` is complete at `9223f81 Refine Phase B form flows`. UXR.4 changed only `index.html` and shipped exactly two scoped changes: (1) a sticky bottom action bar on the three true form routes only — one CSS block scoped to `html.v2-active.v2-route-form .v2-plants-actions` (`position: sticky; bottom: 0; z-index: 5; border-top + white background + safe-area padding via --safe-bottom`), so `add` (`Spremi voćku` + `Odustani`), `activity_add` (`Spremi evidenciju` + `Odustani`), and `correction` (`Spremi ispravak` + `Odustani`) keep their save action reachable without scrolling while the bottom nav and Postavke `⋯` stay hidden via the existing UXR.2d `v2-route-form` class; and (2) backup status copy polish — the 15 user-facing `v2BackupStatus` strings that read `Slice 3 — …` were rewritten to clean Croatian with every trigger point, state transition, interpolated value, validator, fail-closed import, pending confirm/cancel, payload, and localStorage behavior unchanged. The sticky bar is CSS-only (no DOM/JS/handler/wrapper/global/route change) and is correctly excluded from Plant detail inline capture (note/trap/stage/scouting/archive) because those render on the `detail` route where `v2-route-form` is absent and the bottom nav stays visible. UXR.4 did NOT implement a top-bar `Spremi` CTA / shared top-bar submit bridge, did NOT touch Plant detail inline capture forms (deferred to UXR.5b), and made no Postavke button-label change (labels were already shipped in UXR.2c) and no `ne znam` layout change (already nested under its input via `appendUnknownableField`). UXR.4 preserved every existing V2 ID, route table, default route, route aliases, `#v2` alias, `#legacy`, all `#v2/...` deep links, import/export payload format, validators/storage, B2/S8 monitoring logic, Activity/Observation/Correction logic, A1 archive lifecycle, Plan Templates content, `manifest.json`, and `sw.js`. Browser verification ran in a local preview server: `#v2/add`, `#v2/activity/add`, and a `correction` route each showed the sticky `Spremi*` + `Odustani` bar with bottom nav + Postavke hidden; Add Plant submit created a plant; the `#v2/activity/add` multi-plant checklist rendered and saved an activity; the Plant detail inline visual-scouting capture row stayed `position: static` with bottom nav visible; Postavke backup copy verified across export-valid, invalid-JSON, wrong-shape, valid-pending, cancel, and confirm branches (no-data / too-large / read-error / setItem-failure branches were not exercised but are one-line literal swaps); `window.v2ValidateForBackup(JSON.parse(localStorage.getItem('vocnjak_v2')))` returned `[]`; `#legacy` rendered with `v2-active` false and no UXR.4 CSS applied. UXR.5 is split-confirmed and runs 5a -> 5b -> 5c as three separate owner-approved sessions. `UXR.5a — Kalendar vertical season timeline` is complete: `renderKalendar` only now renders an anchored vertical season timeline (a visually-hidden `<h1>Kalendar</h1>` + a `Sezona <year>.` label replace the in-body `appendSeasonalHeader` title/nav, twelve `.v2-calendar-month` sections each with a Fraunces `.v2-kal-month-head` month heading, a current-month `.v2-kal-month-head--current` brand-green bottom-border accent, and a per-month `.v2-kal-count` `N radnji` count), keeps all action-window cards, B2/Praćenje, and Mlade voćke visible and tappable, preserves the `v2CalendarMonth<m>` IDs and the current-month scroll, and is styled entirely with `.v2-active #v2Kalendar` / `.v2-kal-*` scoped CSS plus a new local `kalRadnjaCountText` helper. UXR.5a corrected the charter's "sticky" wording to anchored month heads to match the visual canon and avoid a sticky/top-bar collision; it kept `appendSeasonalCard`, `appendSeasonalHeader`, and `appendSeasonalNav` byte-identical (renderKalendar simply stopped calling `appendSeasonalHeader`), made no edits to the shared base `.v2-seasonal-*` classes (per-status chip colour is intentionally not replicated in Kalendar; a calm uniform pill is used), and changed no Pregled / Plant detail / Dnevnik render or CSS, no storage/schema, no validators, no import/export, no routes, no default route, no Plan Templates, no B2/S8 monitoring logic, no `manifest.json`, and no `sw.js`. Browser verification passed at 375px: anchored Fraunces month sections, current month (Svibanj) accented and scrolled into view, correct `N radnja/radnje/radnji` counts, B2/Praćenje and Mlade voćke visible, calm `Aktualno` pill; Plant detail seasonal cards kept the base 8px radius (no Kalendar leakage), Pregled hero/cards and Dnevnik unchanged, `#legacy` loaded with `v2-active` false, and `v2ValidateForBackup` returned `[]`. `UXR.5b — Plant detail rhythm` is complete: `renderDetail` (and the Plant-detail-only single-caller helpers `appendYoungTreePlantDetailSection`, `appendNoteObservationCaptureSection`, plus a new local `plantDetailMetaLine`) now render the §4.6 notebook rhythm — a quiet Fraunces hero meta line (`podloga · godina N od sadnje · izvor`) under the species banner, Karton voćke as an uppercase-tracked 2-column def-list with hairline rows, the `Mlada voćka` orientation note as an italic-Fraunces `--v2-pale` inset card immediately after Karton, Fraunces section headings with 24px breathing, calm seasonal cards, the `Dodaj opažanje` opener demoted from primary to secondary, the in-screen `← Natrag na popis` body button removed (the UXR.2d shell back `< Biljke` already returns to `#v2`, navigation unchanged), and the archive control moved from its prominent post-Karton position to a single quiet `Životni vijek voćke` lifecycle section at the very bottom (after Dnevnik), reusing the existing archive form/logic unchanged and remaining fully reachable. All styling is scoped to `.v2-active #v2PlantsDetail` / `.v2-pd-*`; no base `.v2-seasonal-*` / `.v2-diary-*` / `.v2-plants-*` rule, shell, route, storage, schema, validator, catalog, import/export, Plan Templates, B2/S8, `manifest.json`, or `sw.js` was changed; the Trenutne sezonske / Praćenje / Klopke / Opažanja capture (note/trap/stage/scouting) / Dnevnik sections keep their content and relative call order (no B2/capture-section split). True plant-specific top-bar `⋯` overflow for archive is intentionally deferred: the only `⋯` is the global Postavke trigger (`#v2TopBarPostavkeBtn`), so a real plant overflow menu requires a shell/route-scope decision outside UXR.5b; for 5b archive is an intent-preserving quiet bottom lifecycle control, not the final mockup interpretation. Browser verification passed at 375px: hero meta, def-list Karton, Mlada inset card (young plant only), archive-at-bottom reachable and archiving works, note/trap/stage/scouting capture each wrote with `v2ValidateForBackup` `[]`, archived-plant marker shown with no re-shown archive section, no leakage into Pregled (18px cards intact), Kalendar (5a intact), or Dnevnik (rows unchanged), and `#legacy` loaded with `v2-active` false. `UXR.5c — Dnevnik timeline` is complete: standalone `#v2Diary` Dnevnik is now a month-grouped timeline with sticky month headers verified flush below the shell top bar, a hairline rail with node dots, Dnevnik-only scoped row rhythm, `Odrađeno`/`Preskočeno` status chips rendered through an option-gated `statusChips` flag, and the `ispravljeno` marker styled inline; `appendDiaryItems` stayed byte-identical, the Plant detail diary preview did not opt in and did not visually change, and the Dnevnik empty state stayed unchanged with no SVG per owner decision; no storage/schema/validator/catalog/Plan Templates/B2-S8/route/shell/manifest/sw change. `UXR.6 — Accessibility + outdoor usability pass` is complete and pushed on main at `a0cfc93 Harden V2 accessibility and contrast`: V2-scoped `--v2-ink-mute` was darkened to `#647079` for AA on light surfaces while preserving the strong/mid/muted three-tier hierarchy; a targeted `.v2-pregled-monitoring-card > .v2-seasonal-note` fix to `--v2-ink-mid` raised that pale-card pair from 3.96 to 6.84; keyboard `:focus-visible` rings were added (light outline override on the dark top bar); top-bar buttons reached 44px tap targets; `prefers-reduced-motion` was expanded to all `.v2-active` motion; `aria-current="page"` was added to the active bottom-nav tab and the active Pregled/Kalendar segmented control; and `role="alert"` was added to the nine dynamic form-validation error elements. Owner browser verification passed: validator returned `[]`, bottom nav and seasonal cards worked, `#legacy` loaded with `v2-active` false, no console errors, only `index.html` was committed, and no `manifest.json`/`sw.js`/Plan Templates/model/storage/validator/import-export/B2 change; `Claude-design/` was not committed. One accessibility follow-up remains deferred: the decorative hero month/season chip stays below AA (~3.5–3.7) while the large hero headline passes, left for a dedicated hero visual refinement. Corrected-marker contrast was resolved by `aa63351`. UXR.7 / final mobile stabilization is complete through `aa63351`, `3d42e27`, `97585bc`, `f4b97e9`, and `353c6e1`; V2 Done audit passed with non-blocking follow-ups; V2 is marked Done.

Historical current-goal ledger:

Phase A UX/copy polish runtime is complete and pushed on main at `cc22d24 Polish V2 UX copy and Pregled click affordance`. Owner mobile browser verification passed: previously stale mobile stores no longer show the red `Pohrana ne prolazi validaciju: catalog_v1.action_window_definitions[106].note value differs from canonical catalog`; console shows `vocnjak: V2 store loaded; format v1` and `vocnjak: catalog already loaded; active_catalog_version=catalog_v1` on subsequent loads after the one-time canonical-catalog refresh; `window.v2ValidateForBackup(JSON.parse(localStorage.getItem('vocnjak_v2')))` returns `[]`; local `file://` `manifest.json` CORS warning is expected and is not a V2 runtime bug. Phase A and Phase B / UXR through UXR.7 are complete for the V2 Done baseline. The V2 visual usability refresh (design tokens, typography, branded V2 header, status chips, cards/lists refresh, forms/empty-state polish) remains separately approved future work — `index.html`-only when later opened; no framework, no React, no Tailwind, no build pipeline, no `manifest.json`/`sw.js`, no schema/model/storage/validator/import-export change, no Plan Templates content change, no BBCH/phenology/regional-offset/urgency/diagnosis/treatment/AI work. Observation correction is also complete for the approved Post-S8 scope. Runtime is implemented and pushed: docs lock at `1ef2009`, validator/model runtime at `60cc32c`, and UI/display runtime at `6d5b19d`. Dnevnik and Plant detail render effective Observation values with the neutral `ispravljeno` marker; Plant detail filters Observations by effective `plant_id`; Dnevnik sorts Observations by effective `observed_on`, then original `recorded_at`, then id; grouped Strategy A is implemented for note/stage_obs/scouting shared payload correction only. Grouped trap correction, grouped date/plant correction, group splitting, and `correction_group_id` remain intentionally not implemented. Runtime Slice 8 closure for the approved S8 scope remains recorded. Step 7e monitoring guidance parity is pushed on main at `36433aa Add Step 7e monitoring guidance parity`, after Step 7d source-backed scouting guidance at `5f64257 Add Step 7d scouting guidance`, Step 7c visual scouting capture at `588e413 Implement Step 7c visual scouting capture`, and the Step 7c docs lock at `7e388c5 Lock Step 7c visual scouting capture model`; the prior tracker sync is pushed at `c5521ac Sync trackers after Step 7e guidance parity`. Step 7 coverage is complete and no unresolved S8 blocker row remains. Phase B / UXR is the current active track; UXR.0 through UXR.2a were already complete, `UXR.2b — App shell: top app bar + bottom nav` is complete on `main` at `927555d Add Phase B V2 app shell`, `UXR.2c — Postavke sheet + scaffold relocation + inline import confirm` is complete on `main` at `a78840a Add Phase B settings sheet`, and `UXR.2d — Detail / form behavior: back chevron + hide bottom nav on forms` is complete on `main` at `17e5439 Refine Phase B detail and form shell`. UXR.2d added the Claude-Design-aligned top-bar text-back affordance (`< Biljke` / `< Kalendar` / `< Voćka` / `< Dnevnik`) with deterministic hash targets, intentionally rendered NO center title on detail routes (back-text carries parent context per the mockup), used the existing in-app action headings as form-route top-bar titles (`Dodaj voćku` / `Dodaj evidenciju` / `Korekcija`), hid the bottom nav and Postavke `⋯` on `add` / `activity_add` / `correction` via a new `v2-route-form` class on `<html>` (with reduced content padding-bottom), and preserved every existing in-screen back/cancel control for later screen-redesign sessions. UXR.2d preserved route table, default route, `#v2` alias, `#legacy`, all `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, and `sw.js`. `UXR.3a — Pregled hero + section order` is complete at `44eff72 Add Phase B Pregled hero`. UXR.3a changed only `index.html` and added the accepted Claude Design Pregled hero immediately below the app shell on the Pregled route, with a full-bleed Adriatic gradient section, sun-glow + dim-corner radial overlay, backdrop-blur uppercase month chip with peach dot indicator (`Svibanj · kasno proljeće` style from a 12-entry display-only `V2_PREGLED_HERO_MONTH_QUALIFIER_HR` table scoped to the hero helper), the existing `seasonalStatusSentence(...)` rendered in Fraunces italic with `text-shadow` contrast mitigation and a deterministic accent span (`.v2-pregled-status-accent`) wrapping the count phrase, and a decorative horizon SVG (3 tree silhouettes). A visually hidden `<h1 class="v2-sr-only">Pregled</h1>` preserves a proper page heading after `appendSeasonalHeader` was skipped on Pregled (Kalendar and Seasonal Action Detail still call it unchanged). Pregled section order is now aligned to locked `V2_UX_MODEL.md` §1.3: hero → `Sada aktualno` → `Za provjeru: nema evidencije` → `Uskoro` → `Praćenje` → `Mlade voćke` → final quiet line (only when all five lists are empty). A minimal Pregled-only hero-coupled heading-rhythm rule (`#v2Pregled .v2-seasonal-section h3`, Fraunces 20px / 500 / `letter-spacing: -0.01em` / `--v2-ink` / `margin: 28px 0 12px`, `:first-of-type` margin-top 4px) bridges hero typography to section headings without redesigning cards/chips/lists. The accent wrap uses controlled-input `indexOf` against locked `seasonalStatusSentence` output and falls back to plain text on no match; the closing-soon clause is intentionally not accented. The full-bleed margin (`-24px -16px 24px`) uses measured `#v2Content` (16px horizontal / 16px top) and `#v2Plants` (24px top) values plus `box-sizing: border-box; max-width: 100%; overflow: hidden;` to prevent narrow-viewport overflow. Browser verification passed at 320px and 390px widths with a temporary DevTools-only `vocnjak_v2` store carrying a single valid Idared apple plant (removed after screenshots; rebuilt empty-store backup validator returned `[]`); empty-plant gate still short-circuited before hero render; Kalendar still rendered with `appendSeasonalHeader` and `Sezona 2026.` subtitle; `#legacy` continued to render with no V2 chrome; Postavke open/close still worked. UXR.3a preserved every existing V2 ID, route table, default route, route aliases, `#v2` alias, `#legacy`, all old `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, and `sw.js`; did NOT implement UXR.3b (broader card/chip/list visual system), UXR.4 (sticky form action bar, top-bar Spremi CTA, broader copy polish), UXR.5, archive route/surface, species icons, Plant detail species banner, Pregled empty-state illustration, or any storage/schema/validator/payload changes. The Pregled monitoring heading copy alignment from `Sezonsko praćenje` to `Praćenje` shipped as the UXR.3a follow-up at `fec7bfb Align Pregled monitoring heading` (Pregled-only one-line change to `appendB2PregledSection`; no logic, storage, validator, Plan Templates, manifest, or sw change). `UXR.3b — Cards/chips/list visual system` is complete at `9c46712 Refine Phase B Pregled cards`. UXR.3b changed only `index.html` and applied the accepted Claude Design Adriatic card/chip/list visual system to Pregled with strict session-boundary discipline: a new Pregled-scoped CSS block (`BEGIN UXR.3b — Pregled cards / chips / Praćenje / list` / `END UXR.3b`) delivers white seasonal cards with 18px radius, 1px `var(--v2-line)` border, soft layered shadow `0 1px 0 rgba(255,255,255,0.6) inset, 0 4px 14px rgba(31,74,95,0.08)`, and 16px 18px padding; a consistent `.v2-seasonal-card-top` flex wrapper holds title (DM Sans 16/600 `var(--v2-ink)`) and a new top-right status chip on Pregled cards; chip variants consume UXR.1a tokens — `.v2-seasonal-status--aktualno` uses `--v2-chip-current-bg/fg` sea-pale on brand-deep, `.v2-seasonal-status--pri-kraju` uses `--v2-chip-ending-bg/fg` warm peach on peach-ink, `.v2-seasonal-status--uskoro` uses `--v2-chip-upcoming-bg/fg` faded pale-sea on muted ink, no red, no amber-alarm, no icons, no countdown; meta typography 13px `var(--v2-ink-mid)`, note typography 13px `var(--v2-ink-mute)`; section rhythm drops the cold slate `border-top` from `.v2-seasonal-section` and adds 12px list gap; Praćenje on Pregled now renders inside a new `.v2-pregled-monitoring-card` neutral sea-pale info-card surface (`var(--v2-pale)` fill, 14px radius, 14px 16px padding, no shadow, no border) wrapping the existing B2 count sentence and the locked `Detalji su na kartonu voćke.` deflection note. Mlade voćke cards on Pregled are visually unified through the same `#v2Pregled`-scoped CSS on the existing markup; `appendYoungTreeContextCard` is **unchanged**, so Plant detail Mlada voćka section and Kalendar Mlade voćke section render byte-identical DOM and byte-identical visual to today. Runtime markup changes are limited to two narrowly-gated edits: `appendSeasonalCard` (Pregled-only branch on `context === 'current' | 'upcoming' | 'missed'`; Kalendar `context === 'calendar'` takes the unchanged path, so `.v2-seasonal-card-top` cannot appear on Kalendar) and `appendB2PregledSection` (wraps the existing meta sentence + deflection note in the new info-card div; B2 logic, B2 data, and copy unchanged). A new local helper `pregledStatusChipVariant` maps the locked `Aktualno` / `Pri kraju` / `Uskoro` status strings to chip variant classes. UXR.3b preserved every existing V2 ID, route table, default route, route aliases, `#v2` alias, `#legacy`, all `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, `sw.js`, B2/S8 monitoring logic, Activity/Observation/Correction logic, archive lifecycle logic, `appendYoungTreeContextCard`, `appendPlantSeasonalActionCard`, `appendB2CalendarCard`, `appendSeasonalSection`, `appendSeasonalHeader`, `renderKalendar`, `renderSeasonalActionDetail`, `renderDetail`, and the UXR.3a Pregled hero. Plant detail / Kalendar / Seasonal action detail / Dnevnik DOM are byte-identical to today. UXR.3b did NOT implement UXR.3c (Biljke Add Plant pattern / Dodaj evidenciju demotion), UXR.3d (per-species icons / Plant detail species banner), UXR.4 (sticky form action bar / top-bar Spremi CTA / Postavke label rename), UXR.5a (Kalendar timeline), UXR.5b (Plant detail rhythm), UXR.5c (Dnevnik timeline), UXR.6 (a11y / `prefers-reduced-motion` pass), archive route/surface, species icons, Plant detail Mlada voćka italic-Fraunces commentary, Pregled empty-state illustration, or any storage/schema/validator/import-export/Plan Templates/routes/manifest/sw changes. Static no-leakage proof: `grep` confirms `.v2-seasonal-card-top` appears only inside the gated `appendSeasonalCard` branch and inside Pregled-scoped CSS rules; `.v2-pregled-monitoring-card` appears only inside `appendB2PregledSection` and Pregled-scoped CSS rules; `appendYoungTreeContextCard` body is byte-identical to its pre-UXR.3b form. Owner browser verification (validator returns `[]`, Pregled visual states, Kalendar / Plant detail / Postavke / `#legacy` regression) is recommended via DevTools per the standard UXR pattern. `UXR.3c — Biljke Add Plant pattern / primary actions` is complete at `166f26f Refine Phase B Biljke actions`. UXR.3c changed only `index.html` and refined the Biljke primary surface with strict session-boundary discipline: a new Biljke-scoped CSS block (`BEGIN UXR.3c — Biljke action row / archive toggle / list surface` / `END UXR.3c`) under `.v2-active #v2PlantsList` ships an inline `+ Dodaj voćku` action row (constant 64 px frame, white surface, 1 px `var(--v2-line)` border, soft shadow `0 2px 12px rgba(26, 51, 32, 0.05)`, brand-green inline SVG plus glyph, DM Sans 16/600 label, optional 13 ink-mute helper) replacing the prior `v2-plants-topbar` div + `v2-activity-actions` four-button strip (Pregled · Kalendar · `Dodaj evidenciju` · Dnevnik); the empty-state helper line `Prva voćka, krećemo.` is appended inside the action row only when `plants.length === 0`, with the action-row outer frame held constant at 64 px both states so adding the first plant produces zero layout shift. `Dodaj evidenciju` is demoted from the Biljke primary surface entirely while `#v2/activity/add` continues to work and remains reachable from Seasonal action detail (`renderSeasonalActionDetail`'s contextual `Dodaj evidenciju` button) and Plant detail inline capture sections (`Dodaj opažanje`, `Dodaj ulov iz klopke`, `Dodaj fazu razvoja`, `Zabilježi vizualni pregled`); duplicate in-body Pregled / Kalendar / Dnevnik secondary buttons are dropped because UXR.2b bottom-nav owns primary nav. The always-visible `Arhivirane voćke` inline section is replaced by a quiet ephemeral expand-on-tap pattern (`Prikaži arhivirane (N)` ↔ `Sakrij arhivirane (N)`) with deterministic `aria-expanded` flips and `aria-controls="v2PlantsArchiveList"` wiring; archived rows are tappable to Plant detail when expanded; toggle state is intentionally ephemeral — no localStorage, no route/hash, no `history.pushState`/`history.replaceState`, no persisted expanded state, and each `renderList()` re-render resets to collapsed. The duplicate in-body `<h2>Biljke</h2>` topbar is removed because the top app bar already shows `Biljke` (UXR.2b mapped `TOP_BAR_TITLES.list = 'Biljke'`; UXR.3c does NOT touch `TOP_BAR_TITLES`); a visually-hidden `<h1 class="v2-sr-only">Biljke</h1>` is added as the first child of `#v2PlantsList` for a11y heading semantics, mirroring UXR.3a Pregled. The muted `Još nema unesenih voćki.` paragraph is dropped (helper inside action row replaces it calmly), while the `Nema aktivnih voćki.` muted line is preserved for the active-empty + archived-non-empty edge case. Minimal `#v2PlantsList`-scoped surface polish on `.v2-plants-row` / `.v2-plants-list` consumes UXR.1a tokens (18 px row radius, 14 px action-row radius, hairline border, layered shadow, DM Sans 16/600 title + 13 ink-mute meta, 12 px list gap) without species class, species icon, accent stripe, or per-plant `Sada aktualno` line — all four reserved for UXR.3d. UXR.3c preserved every existing V2 ID, route table, default route, route aliases, `#v2` alias, `#biljke` alias, `#legacy`, all `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, `sw.js`, B2/S8 monitoring logic, Activity/Observation/Correction logic, A1 archive lifecycle (`archived_at` / `archive_reason` / `archive_note`), `TOP_BAR_TITLES`, `ACTIVE_TAB_BY_ROUTE`, `ROUTE_CLASS`, `BACK_LABEL_BY_ROUTE`, `updateShellChrome` body, every render function outside `renderList`, every `append*` helper (including `appendSeasonalCard`, `appendB2PregledSection`, `appendYoungTreeContextCard`, `appendPlantSeasonalActionCard`, `appendB2CalendarCard`, `appendSeasonalSection`, `appendSeasonalHeader`, `appendArchiveSection`), every plant/archive helper (`activePlants`, `archivedPlants`, `isPlantArchived`, `plantTitle`, `plantTitleWithArchiveMarker`, `plantDetailRoute`, `archiveReasonLabel`, `formatDateYmd`), the UXR.3a Pregled hero, and the UXR.3b Pregled cards/chips/Praćenje surface. Plant detail / Kalendar / Seasonal action detail / Dnevnik / Postavke / `#legacy` runtime code paths are untouched and no UXR.3c CSS selector targets those screen roots; no observable regression is expected on those surfaces. Static no-leakage proof: `v2-add-plant-row` / `v2-archive-toggle` / `v2-archive-list` / `v2-plants-archive` appear only inside the `BEGIN UXR.3c` CSS block and `renderList`; `v2-activity-actions` has zero `renderList` JS use sites (orphan CSS only); `v2-plants-topbar` has zero `renderList` JS use sites (the remaining `appendSeasonalHeader` Kalendar / Seasonal action detail use site and `renderDiary` use site are intentionally preserved and isolated from `#v2PlantsList`). UXR.3c did NOT implement UXR.3d (per-species icons / accent stripes / Plant detail species banner / per-plant `Sada aktualno` live line), UXR.4 (sticky form action bar / top-bar Spremi CTA / Postavke label rename), UXR.5a (Kalendar timeline), UXR.5b (Plant detail rhythm / `⋯` overflow menu for Arhiviraj), UXR.5c (Dnevnik timeline / empty-state SVG branch), UXR.6 (a11y / `prefers-reduced-motion` pass), an archive route, a Postavke Voćnjak section entry, a Pregled empty action-row mirror, or any storage/schema/validator/import-export/Plan Templates/routes/manifest/sw changes. Owner browser verification (validator returns `[]`, Biljke empty/populated/archive states, archive toggle ephemerality, top app bar `Biljke` title, `#v2/activity/add` direct-route access, Plant detail / Kalendar / Pregled / Dnevnik / Postavke / `#legacy` regression) is recommended via DevTools per the standard UXR pattern. The UXR.3d species identity is complete at `473e1c7`. `UXR.4 — Forms + capture flows polish + Postavke label rename` is complete at `9223f81 Refine Phase B form flows`. UXR.4 changed only `index.html` and shipped exactly two scoped changes: (1) a sticky bottom action bar on the three true form routes only — one CSS block scoped to `html.v2-active.v2-route-form .v2-plants-actions` (`position: sticky; bottom: 0; z-index: 5; border-top + white background + safe-area padding via --safe-bottom`), so `add` (`Spremi voćku` + `Odustani`), `activity_add` (`Spremi evidenciju` + `Odustani`), and `correction` (`Spremi ispravak` + `Odustani`) keep their save action reachable without scrolling while the bottom nav and Postavke `⋯` stay hidden via the existing UXR.2d `v2-route-form` class; and (2) backup status copy polish — the 15 user-facing `v2BackupStatus` strings that read `Slice 3 — …` were rewritten to clean Croatian with every trigger point, state transition, interpolated value, validator, fail-closed import, pending confirm/cancel, payload, and localStorage behavior unchanged. The sticky bar is CSS-only (no DOM/JS/handler/wrapper/global/route change) and is correctly excluded from Plant detail inline capture (note/trap/stage/scouting/archive) because those render on the `detail` route where `v2-route-form` is absent and the bottom nav stays visible. UXR.4 did NOT implement a top-bar `Spremi` CTA / shared top-bar submit bridge, did NOT touch Plant detail inline capture forms (deferred to UXR.5b), and made no Postavke button-label change (labels were already shipped in UXR.2c) and no `ne znam` layout change (already nested under its input via `appendUnknownableField`). UXR.4 preserved every existing V2 ID, route table, default route, route aliases, `#v2` alias, `#legacy`, all `#v2/...` deep links, import/export payload format, validators/storage, B2/S8 monitoring logic, Activity/Observation/Correction logic, A1 archive lifecycle, Plan Templates content, `manifest.json`, and `sw.js`. Browser verification ran in a local preview server: `#v2/add`, `#v2/activity/add`, and a `correction` route each showed the sticky `Spremi*` + `Odustani` bar with bottom nav + Postavke hidden; Add Plant submit created a plant; the `#v2/activity/add` multi-plant checklist rendered and saved an activity; the Plant detail inline visual-scouting capture row stayed `position: static` with bottom nav visible; Postavke backup copy verified across export-valid, invalid-JSON, wrong-shape, valid-pending, cancel, and confirm branches (no-data / too-large / read-error / setItem-failure branches were not exercised but are one-line literal swaps); `window.v2ValidateForBackup(JSON.parse(localStorage.getItem('vocnjak_v2')))` returned `[]`; `#legacy` rendered with `v2-active` false and no UXR.4 CSS applied. UXR.5 is split-confirmed and runs 5a -> 5b -> 5c as three separate owner-approved sessions. `UXR.5a — Kalendar vertical season timeline` is complete: `renderKalendar` only now renders an anchored vertical season timeline (a visually-hidden `<h1>Kalendar</h1>` + a `Sezona <year>.` label replace the in-body `appendSeasonalHeader` title/nav, twelve `.v2-calendar-month` sections each with a Fraunces `.v2-kal-month-head` month heading, a current-month `.v2-kal-month-head--current` brand-green bottom-border accent, and a per-month `.v2-kal-count` `N radnji` count), keeps all action-window cards, B2/Praćenje, and Mlade voćke visible and tappable, preserves the `v2CalendarMonth<m>` IDs and the current-month scroll, and is styled entirely with `.v2-active #v2Kalendar` / `.v2-kal-*` scoped CSS plus a new local `kalRadnjaCountText` helper. UXR.5a corrected the charter's "sticky" wording to anchored month heads to match the visual canon and avoid a sticky/top-bar collision; it kept `appendSeasonalCard`, `appendSeasonalHeader`, and `appendSeasonalNav` byte-identical (renderKalendar simply stopped calling `appendSeasonalHeader`), made no edits to the shared base `.v2-seasonal-*` classes (per-status chip colour is intentionally not replicated in Kalendar; a calm uniform pill is used), and changed no Pregled / Plant detail / Dnevnik render or CSS, no storage/schema, no validators, no import/export, no routes, no default route, no Plan Templates, no B2/S8 monitoring logic, no `manifest.json`, and no `sw.js`. Browser verification passed at 375px: anchored Fraunces month sections, current month (Svibanj) accented and scrolled into view, correct `N radnja/radnje/radnji` counts, B2/Praćenje and Mlade voćke visible, calm `Aktualno` pill; Plant detail seasonal cards kept the base 8px radius (no Kalendar leakage), Pregled hero/cards and Dnevnik unchanged, `#legacy` loaded with `v2-active` false, and `v2ValidateForBackup` returned `[]`. `UXR.5b — Plant detail rhythm` is complete: `renderDetail` (and the Plant-detail-only single-caller helpers `appendYoungTreePlantDetailSection`, `appendNoteObservationCaptureSection`, plus a new local `plantDetailMetaLine`) now render the §4.6 notebook rhythm — a quiet Fraunces hero meta line (`podloga · godina N od sadnje · izvor`) under the species banner, Karton voćke as an uppercase-tracked 2-column def-list with hairline rows, the `Mlada voćka` orientation note as an italic-Fraunces `--v2-pale` inset card immediately after Karton, Fraunces section headings with 24px breathing, calm seasonal cards, the `Dodaj opažanje` opener demoted from primary to secondary, the in-screen `← Natrag na popis` body button removed (the UXR.2d shell back `< Biljke` already returns to `#v2`, navigation unchanged), and the archive control moved from its prominent post-Karton position to a single quiet `Životni vijek voćke` lifecycle section at the very bottom (after Dnevnik), reusing the existing archive form/logic unchanged and remaining fully reachable. All styling is scoped to `.v2-active #v2PlantsDetail` / `.v2-pd-*`; no base `.v2-seasonal-*` / `.v2-diary-*` / `.v2-plants-*` rule, shell, route, storage, schema, validator, catalog, import/export, Plan Templates, B2/S8, `manifest.json`, or `sw.js` was changed; the Trenutne sezonske / Praćenje / Klopke / Opažanja capture (note/trap/stage/scouting) / Dnevnik sections keep their content and relative call order (no B2/capture-section split). True plant-specific top-bar `⋯` overflow for archive is intentionally deferred: the only `⋯` is the global Postavke trigger (`#v2TopBarPostavkeBtn`), so a real plant overflow menu requires a shell/route-scope decision outside UXR.5b; for 5b archive is an intent-preserving quiet bottom lifecycle control, not the final mockup interpretation. Browser verification passed at 375px: hero meta, def-list Karton, Mlada inset card (young plant only), archive-at-bottom reachable and archiving works, note/trap/stage/scouting capture each wrote with `v2ValidateForBackup` `[]`, archived-plant marker shown with no re-shown archive section, no leakage into Pregled (18px cards intact), Kalendar (5a intact), or Dnevnik (rows unchanged), and `#legacy` loaded with `v2-active` false. `UXR.5c — Dnevnik timeline` is complete: standalone `#v2Diary` Dnevnik is now a month-grouped timeline with sticky month headers verified flush below the shell top bar, a hairline rail with node dots, Dnevnik-only scoped row rhythm, `Odrađeno`/`Preskočeno` status chips rendered through an option-gated `statusChips` flag, and the `ispravljeno` marker styled inline; `appendDiaryItems` stayed byte-identical, the Plant detail diary preview did not opt in and did not visually change, and the Dnevnik empty state stayed unchanged with no SVG per owner decision; no storage/schema/validator/catalog/Plan Templates/B2-S8/route/shell/manifest/sw change. `UXR.6 — Accessibility + outdoor usability pass` is complete and pushed on main at `a0cfc93 Harden V2 accessibility and contrast`: V2-scoped `--v2-ink-mute` was darkened to `#647079` for AA on light surfaces while preserving the strong/mid/muted three-tier hierarchy; a targeted `.v2-pregled-monitoring-card > .v2-seasonal-note` fix to `--v2-ink-mid` raised that pale-card pair from 3.96 to 6.84; keyboard `:focus-visible` rings were added (light outline override on the dark top bar); top-bar buttons reached 44px tap targets; `prefers-reduced-motion` was expanded to all `.v2-active` motion; `aria-current="page"` was added to the active bottom-nav tab and the active Pregled/Kalendar segmented control; and `role="alert"` was added to the nine dynamic form-validation error elements. Owner browser verification passed: validator returned `[]`, bottom nav and seasonal cards worked, `#legacy` loaded with `v2-active` false, no console errors, only `index.html` was committed, and no `manifest.json`/`sw.js`/Plan Templates/model/storage/validator/import-export/B2 change; `Claude-design/` was not committed. One accessibility follow-up remains deferred: the decorative hero month/season chip stays below AA (~3.5–3.7) while the large hero headline passes, left for a dedicated hero visual refinement. Corrected-marker contrast was resolved by `aa63351`. UXR.7 / final mobile stabilization is complete through `aa63351`, `3d42e27`, `97585bc`, `f4b97e9`, and `353c6e1`; V2 Done audit passed with non-blocking follow-ups; V2 is marked Done.

Phase B / UXR is complete through UXR.7 for the V2 Done baseline. `UXR.0 — Runtime IA + ID audit` is complete at `5ef720d Add Phase B UXR audit`. `UXR.1a — V2-scoped Phase B design tokens` is complete at `8163d1c Add Phase B V2 design tokens`; it changed only the `index.html` CSS token block under `.v2-active`, did not consume the tokens, and changed no JS, DOM, routes, storage, validators, import/export behavior, Plan Templates, `manifest.json`, or `sw.js`. `UXR.1b — Fraunces + DM Sans typography link` is complete at `8702836 Add Phase B typography font loading`; it changed only Phase B Google Fonts loading in `index.html` `<head>` and the V2 body font fallback token adjustment, if present. The existing legacy font link was not changed, and no JS, DOM body structure, routes, storage, validators, import/export behavior, Plan Templates, `manifest.json`, or `sw.js` changed. `UXR.2a — Default route flip + alias safety` is complete at `559012cc67357333d60cfcc37ba17afdf3db6ae6 Set Pregled as default V2 route`; empty hash / no hash now opens Pregled, `#v2` remains the Biljke compatibility alias, `#biljke` remains Biljke, and `#pregled`, `#kalendar`, `#dnevnik`, `#legacy`, and old `#v2/...` routes remain supported. UXR.2a changed only the default route branch in `index.html`; no CSS, DOM, font, storage, validator, import/export, `manifest.json`, or `sw.js` change was made. Backup validator was not available in Browser automation, but the patch was route-only and route smoke checks passed. `UXR.2b — App shell: top app bar + bottom nav` is complete at `927555d Add Phase B V2 app shell`; the commit changed only `index.html` and added a sticky V2 top app bar in deep Adriatic, a four-tab bottom nav (Pregled · Kalendar · Biljke · Dnevnik) with frosted-glass surface, deterministic active-tab state, and an `#v2Content` wrapper that holds the existing scaffold and screen registry between the new bars. UXR.2b preserved every existing V2 screen root ID (`v2Plants`, `v2Pregled`, `v2Kalendar`, `v2SeasonalAction`, `v2PlantsList`, `v2PlantsAddForm`, `v2PlantsDetail`, `v2ActivityCapture`, `v2Diary`, `v2CorrectionForm`), all existing route behavior, `#v2` as the Biljke compatibility alias, `#legacy`, old `#v2/...` deep links, import/export behavior, validators/storage, Plan Templates content, `manifest.json`, and `sw.js`. UXR.2b did NOT implement the Postavke sheet, scaffold relocation, inline import confirm, form hide-bottom-nav behavior, top-bar back chevron, Pregled hero / cards / section-order changes, or species icons. Browser route smoke check passed for empty hash, `#v2`, `#biljke`, `#pregled`, `#kalendar`, `#dnevnik`, `#v2/pregled`, `#v2/kalendar`, `#v2/diary`, `#v2/add`, `#v2/activity/add`, and malformed `#v2/plant/...` / `#v2/seasonal-action/...` / correction deep links; bottom-nav tap navigation passed for all four tabs; backup validator returned `[]`; no console errors. `archive/design/Claude-design/` is archived historical redesign reference material, not active authority; transient local `.claude/` preview/config junk was removed and is not committed. Audit carry-forward notes remain binding for later UXR sessions: runtime uses `plant.species`, not `plant.species_id`, so UXR.3d must map species visuals from `plant.species`; the Pregled section-order discrepancy belongs to UXR.3a/UXR.3b, not UXR.2b; `activity_add` currently maps the active tab to Biljke via the back-target rule and may be revisited when `Dodaj evidenciju` is demoted in UXR.3c; form routes still show the bottom nav in UXR.2b because hide-on-forms belongs to UXR.2d; scaffold remains visible inside `#v2Content` because relocation belongs to UXR.2c. The next session is `UXR.2c — Postavke sheet + scaffold relocation + inline import confirm`.

A2 default V2 / remove `#v2` gate is also complete. Normal/original URL and empty hash now load V2; `#v2` and `#v2/...` remain backward-compatible aliases; `#legacy` is the temporary legacy fallback; the V2 old-app button routes to `#legacy`; no legacy data was deleted; protected storage keys were not migrated or deleted; no schema/model, Plan Templates, manifest, or service-worker change was made.

A1 archive/lifecycle runtime is complete. Archive is lifecycle state, not delete: archived Plants remain in `plants`; Activities, Observations, Corrections, catalogs, overlays, and history remain unchanged; active Biljke/Pregled/Kalendar/seasonal projections exclude archived plants; archived plants stay reachable from the archive section; Plant detail opens with a neutral `Arhivirana` marker/date/reason/note; Dnevnik and Plant detail history preserve historical rows; historical Activity/Observation correction remains allowed for records tied to archived plants; export/import validation preserves valid archive fields and fails closed on malformed archive fields. A1 added no unarchive/restore, no status/lifecycle enum, no deleted flag, no replacement-tree/graft/replant model, no protected legacy-key mutation, no Plan Templates parity, no UX/design polish, and no S8 reopening.

Historical immediate-next-step note, superseded by the V2 Done completion record below:

```text
Superseded Phase B checkpoint: A2, A1, Plan Templates runtime fidelity, Phase A, UXR.0 through UXR.3d, and then-later UXR.4/UXR.5/UXR.6/UXR.7 work are now all complete for the V2 Done baseline. Current controlling status: Young-Tree Formative Completion is complete at 7bf61c0, V2 Done audit passed with non-blocking follow-ups, and V2 is marked Done. Post-V2 follow-up planning starts only if the owner explicitly opens it.
```

### Post-UXR runtime stabilization

After `UXR.6`, a focused post-UXR runtime stabilization pass is complete. It changed `index.html` only across the three runtime commits below and did not change storage/model, validators, import/export payloads, B2/S8 monitoring logic, Plan Templates, `manifest.json`, `sw.js`, or PWA behavior.

- `0f90de8 Fix V2 shell overlay and legacy navigation` fixed the hidden `#v2Postavke` sheet so the closed overlay is non-rendered / non-hit-testable again, restoring bottom-nav taps, seasonal-card taps, plant-row taps, and form clickability; it also added the same-document shell bridge so `#legacy` transitions out of active V2 and V2 hashes / clean aliases transition back into V2 consistently.
- `06102aa Improve seasonal action detail layout` removed the large `Pregled / Kalendar / Biljke` segmented nav from Seasonal action detail and reordered the detail flow to Title → `Napomene` → `Sigurnost prskanja` when relevant → `Kada` → `Evidencija po voćkama` → `Dnevnik`; practical instructions now appear before timing/disclaimer/action controls, while bottom nav and route handlers are unchanged.
- `a2b7a09 Reset V2 scroll position on route changes` added route-keyed V2 scroll reset so Seasonal action detail, Plant detail, and Dnevnik open at the top instead of inheriting the previous screen's scroll position; no smooth scrolling or animation was added, bottom nav still works, and validator verification returned `[]`.

Known follow-ups remain follow-ups, not blockers: hero month-chip contrast, the Springcrest peach harvest vs bird-net Plan Templates timing/content issue (resolved by S1.1), hazelnut pollination awareness (resolved in S5-B), adult walnut summer pruning (resolved in S5-B), possible future Add Plant forms polish, future catalog/content parity work, and any remaining focus-trap note if still open. S5-A is complete at `bcecdf0` (quince post-bloom fungicide projection, almond post-bloom fungicide projection, olive post-harvest pruning with Dec runtime + January note prose SAFE_TRANSFORM); verifier PASS after S5-A. Corrected-marker contrast is resolved by `aa63351`; V2 Done audit passed with non-blocking follow-ups.

### UXR.7 / final mobile stabilization

UXR.7 / final mobile stabilization is complete through five `index.html`-only runtime commits:

- `aa63351 Polish final V2 form and marker details`: duplicated-title fix using the existing `v2-sr-only` pattern; V2-scoped select styling for `.v2-plants-field select`; corrected-marker token changed to `--v2-brand-deep`.
- `3d42e27 Fix final V2 mobile layout issues`: Pregled hero full-bleed fix; Add Plant/form horizontal-overflow hardening with `min-width: 0`; Kalendar opens near the current month rather than January.
- `97585bc Fix final V2 mobile layout and pre-planting evidence`: top-bar title clipping fix; Pregled hero top-strip fix; V2 horizontal containment; initial pre-planting missed/no-evidence filtering using existing plant dates.
- `f4b97e9 Fix V2 mobile overflow and pre-planting missed evidence`: stronger V2-only mobile horizontal containment; `touch-action: pan-y` on V2 shell/nav where appropriate; missed/no-evidence filtering revised from close-before-planting to open-before-planting, skipping missed occurrences when `effective_open < plantExistenceYmd`. Verification with plant planted `2026-03-15` confirmed early windows that began before planting no longer appear as missed/no-evidence, while valid later post-plant missed evidence still appears.
- `353c6e1 Fix V2 date field layout and affordance`: final Add Plant date-field clipping fix; strengthened V2 form-control sizing; targeted native `input[type="date"]` styling; CSS calendar SVG affordance for date inputs; native `type="date"` behavior preserved; no custom picker, no JS widget, and no storage or value-format change.

Owner real iPhone/PWA verification after `353c6e1` accepted the final mobile state: Pregled title no longer clipped; hero is full width and acceptable; Kalendar opens at current month; Seasonal action detail remains good; Add Plant no longer has true horizontal scroll; `Posađeno` and `Kupljeno` date fields render correctly with closed right border and calendar affordance; and the pre-planting early missed/no-evidence issue is resolved. Remaining Add Plant visual style is acceptable for V2 Done; possible future forms polish remains a follow-up, not a blocker.

These final mobile fixes did not change docs at commit time, `manifest.json`, `sw.js`, Plan Templates, storage/model/schema/validator/import-export, B2, Activity/Observation semantics, broad design, hero copy/month-chip contrast, or Springcrest Plan Templates timing/content. Current remaining non-blocking follow-ups are hero month/season chip contrast, Springcrest peach harvest vs bird-net Plan Templates timing/content issue (resolved by S1.1), possible future Add Plant forms polish, and the additional post-V2 follow-up items listed below. Corrected-marker contrast is resolved by `aa63351`. V2 Done audit passed with non-blocking follow-ups and V2 is marked Done.

### V2 Done completion after Post-S8 Observation correction

Current completed order is recorded in `archive/v2/V2_EXECUTION_ROADMAP.md §0`.

Already complete:

- Runtime Slices 0-8 are complete for their approved scopes.
- Runtime Slice 8 is closed for the approved S8 scope; no unresolved S8 blocker row remains.
- Post-S8 Observation correction is complete for the approved scope (`1ef2009`, `60cc32c`, `6d5b19d`).
- A2 default V2 / remove `#v2` gate is complete. Normal/original URL and empty hash load V2, `#v2` and `#v2/...` remain aliases, `#legacy` is the temporary legacy fallback, the V2 old-app button routes to `#legacy`, no legacy data was deleted, protected legacy keys were not migrated or deleted, and there was no schema/model, Plan Templates, service-worker, or manifest change.
- A1 archive/lifecycle runtime is complete. Archive uses `archived_at?` (`YYYY-MM-DD`), `archive_reason?` (`died | removed | other`), and `archive_note?` (trimmed non-empty string, max 1000 characters); missing `archived_at` means active and present `archived_at` means archived. Active Biljke/Pregled/Kalendar/seasonal scope excludes archived plants, Dnevnik/history remains visible, historical Activity/Observation correction remains allowed, and export/import preserves valid archive fields.
- Plan Templates execution-condition guidance is clarified and locked as read-only seasonal action guidance. Zagreb / continental Croatia date windows are baseline planning windows; warmer regions such as Dalmatia may be roughly two weeks or more earlier in real life; no BBCH, phenology engine, regional offset field, automatic date shifting, urgency/overdue/compliance, treatment recommendation, or product/dose logic is authorized.
- Plan Templates runtime fidelity / content parity runtime patch is complete at `c9645c4 Implement Plan Templates runtime parity fixes`. Three source-backed display/copy parity fixes against `V2_ORCHARD_PLAN_TEMPLATES.md` landed in `index.html` only: (1) a universal calendar-window baseline disclaimer rendered only on Seasonal action detail (`#v2/seasonal-action/...`), below the date line and above `Napomene`, with user-facing copy that intentionally does not mention Zagreb or continental Croatia so warmer/coastal Croatian regions and neighbouring continental regions are not excluded; (2) `purposeCue` extended with three `Namjena` cases for `harvest` action_type (`Namjena: berba u optimalno doba.`), `Pregled za zimu` label (`Namjena: priprema voćnjaka za zimu.`), and `Gašenje navodnjavanja` label (`Namjena: prilagodba zalijevanja sezoni.`); (3) two source-backed Plan Templates lines restored into `SPECIES_ACTION_WINDOW_NOTES['peach.copper.leaf_curl_buds_closed']` — the Taphrina prevention-only context and the "if curled leaves are already visible, the preventive timing is past; record the issue for next season instead of late spraying" note. The patch added no schema, no catalog field, no validator/import/export change, no Plan Templates edit, no B2/source-map/guidance change, no trap/scouting capture change, no `manifest.json` change, no `sw.js` change, and no S8 reopening. The disclaimer constant was relocated into the same IIFE as `renderSeasonalActionDetail` after a `ReferenceError` scope bug was caught and fixed in browser verification. Owner browser verification passed: Seasonal action detail opened without `ReferenceError`; the disclaimer rendered correctly and did not mention Zagreb or continental Croatia; Pregled and Kalendar did not show the disclaimer; Plant detail seasonal cards did not show the disclaimer; `window.v2ValidateForBackup(parsed)` returned `[]`; export/import validation returned `[]`; the protected legacy key before/after snapshot was byte-equal; the local `file://` `manifest.json` CORS warnings were ignored as expected and not treated as app errors.
- Phase A UX/copy polish runtime is complete at `cc22d24 Polish V2 UX copy and Pregled click affordance`. The commit changed `index.html` only and shipped: Pregled seasonal cards now route to Seasonal action detail (parity with Kalendar and Plant detail); the universal calendar-window disclaimer constant rewritten to `Datumi su okvirni podsjetnik. Stvarno stanje voćke i lokalni uvjeti imaju prednost pred datumom: u toplijim krajevima radnje mogu krenuti ranije, a u hladnijim krajevima kasnije.` (placement on Seasonal action detail unchanged; the previous `Kalendarski prozor` / unexplained `fenofaza` wording removed only from the generic disclaimer copy); harvest `purposeCue` rewritten to `Namjena: berba kad plodovi dosegnu zrelost.`; `Pregled za zimu` `purposeCue` rewritten to `Namjena: provjera debla, vezica, zaštite od glodavaca i mumificiranih plodova.`; V2 Dnevnik empty-state copy at `renderDetail` and `renderDiary` now uses `Još nema evidencije.` / `Još nema evidencije za ovu voćku.`; `appendYoungTreeCalendarSection` heading swapped from `<p class="v2-seasonal-meta">` to `<h3>Mlade voćke</h3>` for parity with Pregled; Pregled `Za provjeru` and `Uskoro` empty-section copy tightened (locked §1.10 quiet-state line preserved); Plant detail young-tree orientation labelling verified — existing `<h3>Mlada voćka</h3>` is contextually correct for one plant so no markup change was needed; and a V2 boot canonical-catalog refresh branch was added in `index.html` only that, when `meta.active_catalog_version === 'catalog_v1'` and stored `parsed.catalogs.catalog_v1` is missing or differs from in-memory `CATALOG_V1`, replaces only `parsed.catalogs.catalog_v1 = CATALOG_V1` while preserving plants, activities, observations, corrections, archive fields, plan_instances, plan_overlays, review_state and all other user data, then writes the same `vocnjak_v2` key and logs `vocnjak: catalog refreshed from canonical catalog_v1` once. The refresh branch reuses existing helpers (`catalogDeepEquals`, `CATALOG_V1`, `setCatalogStatus`) and does not weaken `isValidCatalogV1`, `validateForBackup`, or any other validator. The patch added no schema, no catalog field, no validator/import/export change, no Plan Templates edit, no B2/source-map/guidance change, no trap/scouting capture change, no `manifest.json` change, no `sw.js` change, no protected legacy-key mutation, no S8 reopening, and no A1/A2 change. Concrete plant-state / phenology guidance in source-backed `STANDARD_ACTION_WINDOW_NOTES` and `SPECIES_ACTION_WINDOW_NOTES` prose (including surviving `fenofaza`, `dok su pupovi zatvoreni`, `nakon opadanja latica`, `ne tijekom cvatnje`, and similar wording rendered as `Napomene` on Seasonal action detail) was not removed, not paraphrased, and not rewritten — only the unexplained jargon `fenofaza` in the generic calendar disclaimer was dropped. Owner mobile browser verification passed: the red `Pohrana ne prolazi validaciju: catalog_v1.action_window_definitions[106].note value differs from canonical catalog` no longer appears on stale mobile stores; console shows `vocnjak: V2 store loaded; format v1` and `vocnjak: catalog already loaded; active_catalog_version=catalog_v1` on subsequent loads after the one-time refresh; `window.v2ValidateForBackup(JSON.parse(localStorage.getItem('vocnjak_v2')))` returns `[]`; local `file://` `manifest.json` CORS warning is expected and is not treated as a V2 runtime bug. Phase A and Phase B / UXR through UXR.7 are complete for the V2 Done baseline.

- Phase B / UXR is complete through UXR.7 for the V2 Done baseline. UXR.6 accessibility/contrast hardening is complete at `a0cfc93 Harden V2 accessibility and contrast`; UXR.7 final mobile stabilization is complete through `aa63351`, `3d42e27`, `97585bc`, `f4b97e9`, and `353c6e1`.
- Young-Tree Formative Completion is complete at `7bf61c0 Complete young-tree formative guidance`.
- V2 Done audit passed with non-blocking follow-ups; V2 is marked Done. Next work is post-V2 follow-up planning only if the owner explicitly opens it.

Completed sequence to V2 Done:

1. Roadmap/doc consolidation — complete.
2. A2 — Default V2 / remove `#v2` gate — complete.
3. A1 — Archive/lifecycle baseline — complete. Archive only; no delete and no destructive behavior. Runtime uses the exact Plant fields as `archived_at?` (`YYYY-MM-DD`), `archive_reason?` (`died | removed | other`), and `archive_note?` (trimmed non-empty string, max 1000 characters); absence of `archived_at` means active, presence means archived. A1 added no restore/unarchive flow, no status/lifecycle enum, no deleted flag, and no replacement-tree/graft/replant model.
4. Plan Templates runtime fidelity / content parity session — complete at `c9645c4 Implement Plan Templates runtime parity fixes`. Three source-backed display/copy parity fixes (universal calendar-window baseline disclaimer on Seasonal action detail only; `purposeCue` extension for `harvest` / `Pregled za zimu` / `Gašenje navodnjavanja`; two restored Plan Templates lines in `peach.copper.leaf_curl_buds_closed`) shipped in `index.html` only. No schema/model, no validators, no import/export, no Plan Templates edit, no B2/source-map/guidance change, no trap/scouting capture change, no `manifest.json`, no `sw.js`, no S8 reopening. Owner browser verification passed. Broader scouting, symptom registry, `Observation.symptom`, program-attached observations, BBCH/phenology engine, regional offsets, automatic date shifting, plan recalculation, urgency/overdue/compliance, treatment recommendation, diagnosis, and AI/paid/subscription work remain Post-S8 / owner-approved future work and are not V2 Done blockers.
5. UX/design polish session — complete. Phase A is complete at `cc22d24`; Phase B / UXR is complete through UXR.7 for the V2 Done baseline, including UXR.6 accessibility/contrast hardening at `a0cfc93` and UXR.7 final mobile stabilization through `aa63351`, `3d42e27`, `97585bc`, `f4b97e9`, and `353c6e1`. Phase B code remained `index.html`-only and did not change framework/build pipeline, `manifest.json` / `sw.js`, schema/model/storage/validator/import-export, Plan Templates content, or BBCH/phenology/regional-offset/urgency/diagnosis/treatment/AI work.
6. Young-Tree Formative Completion — complete at `7bf61c0 Complete young-tree formative guidance`.
7. V2 Done audit — PASS WITH NON-BLOCKING FOLLOW-UPS. Runtime/routing/validation/archive/history/mobile/young-tree/storage checks passed, and V2 is marked Done.

Post-V2 non-blocking follow-ups, only if the owner explicitly opens follow-up planning:

- hero month/season chip contrast, Springcrest peach harvest vs bird-net Plan Templates timing/content issue (resolved by S1.1), hazelnut pollination awareness, olive cross-year post-harvest pruning, quince/almond post-bloom fungicide projection, adult walnut summer pruning, possible future Add Plant forms polish, future catalog/content parity work, any remaining focus-trap note if still open, broad scouting beyond Step 7c, `Observation.symptom`, `symptom_code`, symptom registry/source map, program-attached Observations, broader phenology-aware stage confirmation, BBCH/phenology engine, regional offsets/date shifting, orphan-code fallback display, outside-period disclosure polish, optional trap numeric extensions, Plan upgrade review, Za pregledati cues, Settings/Postavke split, sync/cloud/iCal/AES-GCM redesign, native storage selection, legacy retirement, fig/citrus expansion, regional adaptation, AI/photo analysis, paid/subscription/paywall work, push notifications, and diagnosis/treatment recommendation systems.

Phase 1 tracker update after Apple Post-Bloom audit: apple post-bloom runtime parity and beginner clarity were tracked content reliability follow-ups (both now complete — see Phase 1 Batch 1 and Phase 1 Batch 2 below). The parity item is a later runtime fix to restore omitted safe Plan Templates meaning, including wet/history/first-spots cues and young-tree health applicability. The clarity item is source-first beginner "Što gledati" content for krastavost / pepelnica before runtime projection, without diagnosis or pesticide prescription. The same audit identified a recurring Plan Templates -> runtime projection-loop failure: future `SPECIES_ACTION_WINDOW_NOTES` edits need a source/runtime projection ledger, and no runtime changes were made in this docs-only tracker update. The projection-loop guardrail also applies to `V2_PLANT_CATALOG.md` harvest, fallback, variety timing, and owner-relevant variety coverage before runtime catalog/timing edits.

Phase 1 Batch 1 (apple + nectarine parity restore) is complete: `index.html` only restored omitted safe source meaning into `SPECIES_ACTION_WINDOW_NOTES['apple.fungicide.post_bloom_scab_mildew']` (wet / disease-history / first-spots cues, the insecticide-only-if-justified line, and young-tree tree-health applicability) and added the missing visible-leaf-curl caution to `SPECIES_ACTION_WINDOW_NOTES['nectarine.copper.leaf_curl_buds_closed']`, mirroring peach. No action-window date, `window_def_id`, `action_type`, harvest, catalog, schema, validator, import/export, manifest, or service-worker change; no product/dose/diagnosis/"Što gledati" content added. The edits were made under a projection ledger and runtime-anchor rule that were added to `CLAUDE.md`; the automated parity verifier tracked after Batch 1 is now complete in Phase 1 S2 (`799caae`). The canonical `catalog_v1` action-window note text changes accordingly and is handled by the existing boot catalog-refresh path, so `v2ValidateForBackup` is expected to return `[]` for a freshly built or boot-refreshed store; static verification passed (both inline scripts compile, all restored anchors present), but a live in-browser validator run was not performed in this session because the local preview server was blocked by the environment sandbox. The apple beginner-clarity "Što gledati" item for krastavost / pepelnica was subsequently delivered in Phase 1 Batch 2 (committed `2ac3701`).

Phase 1 Batch 2 (beginner-clarity content; owner session labels S4a + S4b) is complete and pushed. S3 / S4a apple post-bloom beginner clarity (krastavost / pepelnica visible-sign `Napomene`, peach + nectarine February-copper leaf-curl recognition line, `nasad` → `voćka` reword) shipped at `2ac3701` with wording polish `4d06be5`. S4a nectarine post-bloom monilia beginner clarity shipped at `8fa4d58` with note order polish `f4951c3`. S4a shared spray-safety relevance filtering (render-time `Sigurnost prskanja` filtering by `action_type` / species, display-only) shipped at `8fa4d58`. The beginner-clarity copy-ordering rule was added to `CLAUDE.md` and is active at `8846754`. S4b peach / plum / apricot post-bloom monilia / pjegavost lista / mraz-vs-monilija beginner clarity shipped at `4502f0c`. All edits were source-first in `V2_ORCHARD_PLAN_TEMPLATES.md`, then projected to runtime `Napomene` in `index.html`; no schema, validator, import/export, date, `window_def_id`, `action_type`, catalog, manifest, or service-worker change, and no product / dose / diagnosis content. Plan Templates remain the source of truth and may stay fuller than runtime; runtime `Napomene` is a condensed projection, and no source-backed Plan Templates content was removed to match runtime. Remaining Phase 1 content work: the edge-species owner decisions (hazelnut pollination, adult walnut summer pruning, quince/almond post-bloom fungicide projection, olive cross-year post-harvest pruning), and the catalog harvest-timing owner decisions (Fuji apple, Fantasia nectarine).

Phase 1 S2 (content parity verifier) is complete and pushed at `799caae`. A read-only, dev-only Node script `tools/verify-content-parity.mjs` (run with `node tools/verify-content-parity.mjs`) checks Phase 1 runtime note anchors, a discouraged-wording guard scoped to the Phase 1 note blocks, spray-safety helper/category anchors, runtime catalog species-key sanity, and Plan Templates source anchors. It uses Node built-ins only (`node:fs` / `readFileSync`), with no write/network/process APIs, no npm dependency, and no `package.json`, and makes no runtime/source/catalog change. It does not provide full source/runtime semantic equivalence and does not replace owner review; it should be run before future content-reliability commits. Latest result: `RESULT: PASS`.

After V2 Done:

- Revisit `archive/future/V2_FUTURE_ROADMAP.md` under its promotion rule.
- Revisit parked V1/future store-readiness concepts as concept references only through `ROADMAP.md`.
- Do not let parked future items block V2 Done or re-open S8 by implication.

### Calendar baseline / execution-condition guidance clarification

Owner decision recorded: Plan Templates date windows are Zagreb / continental Croatia baseline planning windows, not hard commands and not "do this on this date" instructions. Warmer regions such as Dalmatia may be roughly two weeks or more earlier in real life, depending on season, microclimate, exposure, and actual plant state; colder regions may be later. The app must preserve source-backed Plan Templates action-window notes that explain execution conditions such as plant state / phenophase, dormancy, bud swelling, bloom / open flowers, after petal fall, young fruit, dry weather, no snow / no rain / no strong frost / no strong wind where present, bee safety, label constraints, karenca / safety constraints where present, skip / delay / do-not-duplicate logic, and "ask local expert / agricultural pharmacy / agronomist" guidance where present.

This is current V2 read-only execution guidance for seasonal action detail / action-window notes, not a new runtime model. Example: if a Zagreb baseline winter copper or oil window is visible, a warmer Dalmatian orchard may reach the relevant bud or dormancy condition earlier; the app should show the baseline window plus the Plan Templates condition text (for example late dormancy / before vegetation starts, dry calm weather, no rain or strong frost, suitable product label), and the user judges by plant state and local conditions. Example: winter pruning may have a calendar baseline, but execution guidance such as after the strongest frosts, dry weather, and before strong vegetation start where applicable must remain visible when present in Plan Templates.

This clarification does not authorize BBCH, a phenology engine, automatic regional offset calculation, `climateProfile` / `regionProfile` / `offsetDays`, automatic date shifting, plan recalculation, action unlocking/blocking based on stage, urgency / overdue / compliance logic, treatment recommendation, product/dose advice beyond source-backed label-safety wording already in Plan Templates, AI diagnosis, or AI treatment behavior. Do not defer existing source-backed execution-condition notes just because broader phenology / BBCH / plan automation remains deferred. Do not replace the notes with generic "ask expert" wording only. Do not invent new condition logic not present in Plan Templates. Do not change schema, model, runtime, `index.html`, Plan Templates content, or reopen S8 for this clarification.

### Runtime Slice 8 Closure Record

Runtime Slice 8 is closed for the approved S8 scope. Steps 1, 2, 3, 4a, 5a, 6, 7, 7b, 7c, 7d, and 7e are runtime-complete. Step 7 numeric-band runtime covers sweet cherry, sour cherry, and plum rows 654/860/1596/1643. Step 7b context-only trap advisory runtime at `b1d840c` also covers apple row 337, olive row 2455, walnut row 2949, and walnut row 2977. Step 7c docs lock was committed at `7e388c5`; Step 7c runtime was committed at `588e413`. Step 7d runtime was committed at `5f64257 Add Step 7d scouting guidance`. Step 7e runtime was committed at `36433aa Add Step 7e monitoring guidance parity`, followed by tracker sync at `c5521ac`. Bounded Plan Templates-backed visual scouting capture is complete, source-backed read-only `Što sada` guidance is complete for the existing Step 7c visual scouting source rows, and read-only `Što gledati` parity is complete for B2 source-row guidance coverage. This closure tracker sync is documentation-only and adds no runtime, schema, fields, vocabulary, registry, or UI surface.

Closure basis: the Step 7 coverage gate is complete; no unresolved S8 blocker row remains; B2 read-only source-row guidance coverage is complete for S8 purposes with 14 previously existing `Što gledati` rows, 21 Step 7e monitoring-only `Što gledati` rows, and 6 risk-awareness rows intentionally kept as seasonal context rather than checklist rows. Structured capture remains bounded to `note`, `trap`, `stage_obs`, and scouting for the approved Step 7c rows only. Current next work after S8 closure and Post-S8 Observation correction is governed by the V2 Done path above; carry-forward items remain future owner-decision backlog unless the owner explicitly changes that path.

#### Post-S8 Observation correction runtime

- Status: complete. Docs lock at `1ef2009`, validator/model runtime at `60cc32c`, and UI/display runtime at `6d5b19d`.
- Scope: additive Correction records for supported free-standing Observation kinds only: `note`, `trap`, `stage_obs`, and `scouting`.
- Model: original Observations remain immutable; effective Observation values are derived from the original Observation plus valid Corrections sorted by `created_at`, then `correction_id`.
- Grouped boundary: Strategy A is implemented. Grouped Observations allow only group-wide shared payload correction for note/stage_obs/scouting; grouped trap correction is not implemented; no grouped date correction, no grouped plant correction, no group splitting, no effective regrouping, no duplicate effective-plant handling, no mixed payload group, and no `correction_group_id`.
- Group-wide save rule: one Correction per original Observation in the stored group, saved atomically in one runtime operation with the same corrected effective payload value; any per-member failure fails the whole save closed.
- Display behavior: Dnevnik and Plant detail render effective Observation values with neutral `ispravljeno` marker; Plant detail filters by effective `plant_id`; Dnevnik sorts by effective `observed_on`, then original `recorded_at`, then id; grouped membership remains based on stored `observation_group_id`.
- Import/export behavior: export preserves original Observations and Correction records and does not export derived effective rows as authority; import fails closed for missing references, invalid kind/grouped correction type, shape mismatch, invalid effective Observation, and partial/non-uniform group-wide correction.
- Negative boundary: no S8 reopening, no Plan Templates change, no B2/source-map/guidance change, no new Observation kinds, no program-attached Observations, no broad registry, no `Observation.symptom`, no `symptom_code`, no target/symptom registry, no diagnosis, no treatment/product/dose advice, and no pressure/urgency/compliance logic.

#### S8 Step 6 — Multi-plant structured Observation capture

- Status: runtime-complete for `note` and `stage_obs` at `8c7d135 Implement multi-plant observation capture`; required Step 6 runtime scope is no longer open.
- Implemented behavior: Plant detail note/stage forms allow selecting multiple plants; runtime creates one Observation record per selected plant; multi-plant saves share `observation_group_id`; single-plant saves remain ungrouped; each record has one `plant_id`, a unique `observation_id`, shared observed date/time/payload within the group, and `program_id = null`.
- Dnevnik / history: global Dnevnik groups multi-plant note/stage observations into one factual card with plant count/list; Plant detail history remains plant-scoped.
- Validation/import/export: backup/import validation accepts valid grouped note/stage observations and rejects invalid group usage, including group ids on unsupported kinds.
- Not implemented: multi-plant `trap`, `Observation.scouting` writes, `Observation.symptom` writes, `target_code`, `symptom_code`, registries, diagnosis, treatment recommendation, pressure/urgency/compliance logic, program attachment, raw Plan Templates rendering, or new routes/surfaces.

#### S8 Step 7 — Template runtime coverage gate + source-backed trap advisory bands + read-only observation status

- Status: coverage gate complete; Step 7 numeric-band runtime, Step 7b context-only trap advisory runtime, Step 7c bounded visual scouting runtime, Step 7d source-backed scouting guidance runtime, and Step 7e monitoring guidance parity runtime are pushed on main. No unresolved S8 blocker row remains.
- Purpose (dual):
  1. Template runtime coverage gate — prove that every S8-relevant monitoring/observation entry in `V2_ORCHARD_PLAN_TEMPLATES.md` is accounted for in V2 runtime/docs (or explicitly marked intentionally-not-runtime / blocked-by-owner-decision) before Slice 8 can close.
  2. Trap advisory display + read-only observation status — help beginners understand trap counts using source-backed guidance already present in `V2_ORCHARD_PLAN_TEMPLATES.md` (cherry / sour cherry fly bands at 1–5, 5–15, 20–30+ with local-expert / agricultural-pharmacy advice; plum moth bands at 0–3 / 5–10 / 30+ weekly).
- Historical first action before Step 7 runtime: Claude analysis/proposal produced a traceability table; the table was the gate.

Coverage gate — traceability table:

- Mapping direction: `V2_ORCHARD_PLAN_TEMPLATES.md` → bounded source maps / docs → `index.html` runtime → visible UX surfaces.
- Required columns (in order):
  1. Source row / entry
  2. Species
  3. Template content summary
  4. S8 relevance
  5. Expected V2 destination
  6. Current runtime status
  7. Evidence in `index.html` / docs
  8. Gap
  9. Priority
  10. Required next action
- Allowed values for "Current runtime status": `implemented`, `partially implemented`, `missing`, `intentionally not runtime`, `blocked by owner decision`.
- Allowed values for "Priority": `S8 blocker`, `S8 polish`, `remaining V2`, `post-V2`.
- Scope of entries the table must cover:
  - monitoring rows;
  - trap rows;
  - trap advisory / count interpretation bands;
  - risk-awareness rows;
  - scouting references;
  - symptom references;
  - stage / phenology cues relevant to `stage_obs`;
  - beginner guidance explaining what to look for or how to interpret observations.
- Step 7 must answer each of these explicitly:
  - Which plan-template monitoring/observation items are already represented in Plant detail?
  - Which are represented in Pregled?
  - Which are represented in Kalendar?
  - Which are represented in Dnevnik / Observation capture?
  - Which are source-backed but not visible to the user yet?
  - Which are missing and must block S8 closure?

Trap advisory display analysis must:

- extract advisory bands only from `V2_ORCHARD_PLAN_TEMPLATES.md`;
- preserve existing trap count guidance as MUST-PRESERVE (do not remove, dilute, or convert into generic unsupported thresholds);
- do not invent global thresholds;
- respect per-species/per-pest/per-row wording;
- define safe UI wording for Plant detail and optionally Pregled/Kalendar read-only status.

Allowed examples (trap advisory display):

- `Zadnji spremljeni zapis: 15.06.2026.`
- `Ulov u zadnjih 7 dana: 3 — nizak/pozadinski ulov; nastavi pratiti.`
- `Ulov u zadnjih 7 dana: 30+ — moguć jak pritisak; zatraži lokalni stručni savjet / savjet poljoprivredne apoteke.`

Hard boundary: no product names; no dosage; no automatic treatment recommendation; no `prskaj sada`; no due/overdue; no `kasniš`; no checkbox/task framing; no compliance UX; no diagnosis.

Closure result (Slice 8 closure gate): Step 7's coverage gate is complete and Runtime Slice 8 is closed for the approved S8 scope because:

- `S8 can close` is now recorded; and
- every `S8 blocker` row from the coverage gate has been resolved.

#### S8 Step 7b — Trap Advisory Source-Coverage Gap Map

Status: RECORDED; documentation/tracking only. Step 7c now provides the bounded visual-scouting destination for the approved visible-sign rows.

Step 7 numeric-band runtime (`905af41 Implement S8 Step 7 trap advisory display`, pushed on main) implements source-backed numeric advisory display for:

- sweet cherry fly (`trap_source_654`)
- sour cherry fly (`trap_source_860`)
- plum moth spring (`trap_source_1596`)
- plum moth summer (`trap_source_1643`)

Step 7b context-only trap advisory runtime (`b1d840c Add S8 Step 7b context-only trap advisory`, pushed on main) also covers apple row 337, olive row 2455, walnut row 2949, and walnut row 2977. This does not mean every remaining monitoring row belongs in `Klopke`: trap count is `Observation.kind = trap`, visual scouting is `Observation.kind = scouting`, and visible problem signs are `Observation.kind = symptom`. Scouting and symptom content are Observations, not Activities.

Coverage map:

| Species | Trap/advisory topic | Current status | Required next action |
|---|---|---|---|
| apple | codling moth / jabučni savijač | owner-approved context-only advisory runtime implemented at `b1d840c`: source-backed `Sažetak izvora` from row 337 plus shared pest-agnostic `Orijentir za razgovor` block; no numeric bands. Step 7c visual fruit-sign capture is implemented at `588e413` via `scouting_source_337`. | source-backed numeric trap extension only if concrete numeric treatment thresholds emerge from owner-approved source review; no Step 7c runtime action remains |
| pear | row 516 fruit moth / codling-like monitoring | Row 516 pear remains split-required for trap/advisory vs visual-sign semantics. Step 7c bounded visual fruit-sign capture is implemented at `588e413` via `scouting_source_516`; optional trap/advisory content remains separate. | no Step 7c runtime action remains; add any `Klopke`/advisory display only for the trap part after owner decision |
| quince | row 2004 codling-like fruit scouting | Step 7c bounded visual fruit-sign capture is implemented at `588e413` via `scouting_source_2004`. Row 2004 quince is not a trap advisory candidate in the current source; the source explicitly says pheromone trap use is not described until confirmed by sources. Quince remains present in `V2_PLANT_CATALOG.md`; this is not catalog deferral. | no Step 7c runtime action remains; do not show `Klopke`, trap count, or invented thresholds unless owner-approved source review changes the trap disposition |
| peach | row 1228 Grapholita / fruit moth monitoring | Row 1228 peach remains mixed optional-trap plus visual shoot/fruit-sign content. Step 7c bounded visual shoot/fruit-sign capture is implemented at `588e413` via `scouting_source_1228`; optional trap content remains separate. | no Step 7c runtime action remains; decide separately whether an optional trap capture path is source-backed enough |
| nectarine | row 1064 Grapholita / fruit moth monitoring | Row 1064 nectarine remains mixed optional-trap plus visual shoot/fruit-sign content. Step 7c bounded visual shoot/fruit-sign capture is implemented at `588e413` via `scouting_source_1064`; optional trap content remains separate. | no Step 7c runtime action remains; decide separately whether an optional trap capture path is source-backed enough |
| walnut | walnut fly / codling monitoring (source rows 2949, 2977) | owner-approved context-only advisory runtime implemented at `b1d840c`: source-backed `Sažetak izvora` from rows 2949 and 2977 plus shared pest-agnostic `Orijentir za razgovor` block; no numeric bands. Step 7c green-husk visual-sign capture is implemented at `588e413` for row 2949 via `scouting_source_2949`; row 2977 remains trap-advisory only. | source-backed numeric trap extension only if concrete numeric treatment thresholds emerge from owner-approved source review; no Step 7c runtime action remains |
| olive | olive fly trap (source row 2455) | owner-approved context-only advisory runtime implemented at `b1d840c`: source-backed `Sažetak izvora` from row 2455 plus shared pest-agnostic `Orijentir za razgovor` block; no numeric bands | source-backed numeric trap extension only if concrete numeric treatment thresholds emerge from owner-approved source review |
| sweet_cherry | cherry fly | numeric-band `Klopke` runtime implemented in `905af41`; fruit-signal / inspection-orientation copy is not a blocker | leave runtime unchanged unless owner approves source-backed display polish |
| sour_cherry | cherry fly | numeric-band `Klopke` runtime implemented in `905af41`; fruit-signal / inspection-orientation copy is not a blocker | leave runtime unchanged unless owner approves source-backed display polish |
| plum | plum moth spring/summer | numeric-band `Klopke` runtime implemented in `905af41` for the trap part. Step 7c bounded visual fruit-sign capture is implemented at `588e413` via `scouting_source_1596` and `scouting_source_1643`. | leave current trap runtime unchanged; no Step 7c runtime action remains |

Hard rules (binding for any future Step 7 expansion):

- Do not invent trap thresholds.
- Do not create generic global bands.
- Do not turn advisory text into treatment instruction (no product names, no dosage, no `prskaj sada`, no `tretiraj`, no diagnosis, no `kasniš`/`obavezno`/`due`/`overdue`/`missed`, no checkbox/task framing, no compliance UX).
- Do not persist advisory `band` / `level` / `severity` / `pressure_score` / `advisory` in Observation payload; advisory remains read-time only.
- If a source lacks explicit trap/klopka/ulov content, do not classify it as `Klopke`.
- If a source describes visible signs such as pjege, ubodi, ulazne rupe, piljevina, smola, venuće, sušenje izboja, deformacije, trulež, or otpali plodovi, route that content to scouting/symptom Observation handling, not Activity.
- If a source contains both trap count and visible symptoms/signals, split the destination; do not flatten it into one action or one `Klopke` card.
- Apple codling moth context-only advisory runtime is implemented at `b1d840c`. A source-backed numeric trap extension remains possible only if concrete numeric treatment thresholds emerge from owner-approved source review; this does not block context-only display.

After Step 7c, Step 7d, and Step 7e:

- this gap map is recorded (this section);
- visual-sign rows approved for Step 7c now have a bounded source-row-backed `Observation.kind = "scouting"` destination;
- existing Step 7c visual scouting source rows now show source-backed read-only `Što sada` guidance in Plant detail cards, the open scouting form, and Dnevnik cards;
- monitoring-only B2 rows approved for Step 7e now have bounded read-only `Što gledati` guidance parity through `B2_READONLY_GUIDANCE_BY_SOURCE_ROW`;
- trap capture/advisory remains separate from scouting capture;
- any further optional trap numeric extension, broad/general scouting registry, or symptom registry requires owner decision.

Step 7b does not introduce new schema, new runtime, new fields, new vocabulary, new registry, or new UI surface. It is tracking-only.

#### S8 Step 7c — Bounded Plan Templates-backed visual scouting capture

- Status: docs lock complete at `7e388c5 Lock Step 7c visual scouting capture model`; runtime complete at `588e413 Implement Step 7c visual scouting capture`.
- Scope: bounded Plan Templates-backed visual scouting capture is complete as a closed source-row-backed adapter, not a broad registry.
- Persisted shape: `kind = "scouting"`, `program_id = null`, `payload.finding = { mode: "presence", value: boolean }`, source-row-local `selected_sign_keys`, and optional trimmed `note`.
- Runtime behavior: Plant detail CTA is `Zabilježi vizualni pregled`; presence results are `Nema vidljivih znakova` and `Ima vidljivih znakova`; multi-plant scouting capture is implemented; Dnevnik grouped rendering is implemented; Plant detail history remains plant-scoped.
- Validation/import/export: backup/import validation accepts valid scouting records and rejects invalid scouting payloads.
- Negative boundary: no persisted Croatian labels, no raw Plan Templates prose in payload, no `symptom_code`, no `Observation.symptom`, no diagnosis, no treatment recommendation, no product/dose advice, no pressure/urgency/compliance logic, and no trap-path merge.
- Still not implemented: broad/general scouting registry and broad/general symptom registry. Trap capture/advisory remains separate.

#### S8 Step 7d — Source-backed visual scouting guidance

- Status: runtime-complete at `5f64257 Add Step 7d scouting guidance`.
- Scope: Step 7d adds source-backed read-only `Što sada` guidance for the existing Step 7c visual scouting sources only, using guidance already present in `V2_ORCHARD_PLAN_TEMPLATES.md` source rows.
- Runtime behavior: guidance appears on Plant detail visual scouting cards, inside the open scouting form after result selection, and in Dnevnik scouting cards.
- Persistence/validation boundary: guidance is display-only and not persisted; Observation payload shape is unchanged; validator/import/export shape and backup behavior are unchanged.
- Negative boundary: no `symptom_code`, no `Observation.symptom`, no diagnosis, no treatment/product/dose advice, no pressure/urgency/compliance logic, no broad registry, and no trap capture/advisory change.
- Beginner wording: visual-scouting `lokalni pragovi` wording was not used; the safe next step is to photograph or bring fruit/leaf/shoot/sample and ask a local agricultural pharmacy, agronomist, or expert. The app does not decide treatment.

#### S8 Step 7e — Bounded `Što gledati` guidance parity

- Status: runtime-complete at `36433aa Add Step 7e monitoring guidance parity`.
- Scope: Step 7e adds bounded read-only `Što gledati` guidance parity for the 21 monitoring-only B2 source rows already visible in Plant detail / Pregled / Kalendar.
- Runtime behavior: Step 7e edits only `index.html` and extends only `B2_READONLY_GUIDANCE_BY_SOURCE_ROW` with exactly 21 `b2ReadonlyGuidance('Što gledati', [...])` entries using source-backed beginner visible-sign bullets from `V2_ORCHARD_PLAN_TEMPLATES.md`.
- Rows added: `446`, `484`, `747`, `918`, `1049`, `1213`, `1079`, `1243`, `1418`, `1443`, `1481`, `1694`, `1732`, `1757`, `1931`, `1969`, `2182`, `2227`, `2429`, `2440`, `2779`.
- B2 source-row guidance coverage is now complete for read-only S8 purposes: 14 previously existing `Što gledati` rows, 21 Step 7e monitoring-only `Što gledati` rows, and 6 risk-awareness rows intentionally kept as seasonal context rather than checklist rows.
- Risk-awareness rows intentionally not touched: `796`, `1375`, `1809`, `2132`, `2795`, `3089`.
- Persistence/validation boundary: no schema, validator/import/export, payload, storage, renderer, route, or source-map change.
- Negative boundary: no `symptom_code`, no `Observation.symptom`, no target/symptom registry, no diagnosis, no treatment/product/dose advice, no pressure/urgency/compliance logic, no risk-awareness checklist rows, and no trap/scouting capture or Step 7d `Što sada` guidance change.

#### S8 Year-1–2 young-tree relevance — runtime-complete; UX-spec sanctioned

- Runtime Slice 8 young-tree relevance work is runtime-complete and pushed on main at `9074e7b Implement S8 year-1-2 young-tree relevance`.
- For plants in year 1 or year 2 after planting, Pregled and the main Kalendar view structurally hide from primary surfaces the fruit-only seasonal actions, monitoring items, and risk-awareness items whose approved Plan Templates / source context state are not relevant to young, non-bearing trees (harvest, fruit thinning, bird-net, fruit-load checks, codling moth, fruit fly, fruit cracking, fruit drop, hazelnut weevil; owner-curated fruit-only source row set behind the rule).
- Year-3+ plants restore the normal plan; the exception does not apply.
- Non-fruit-only content remains visible for year-1–2 plants: formative pruning, summer shoot care, watering and establishment context, leaf and shoot monitoring, aphid scouting, sharka, monilia, fire blight, frost awareness, peacock spot, bud mite, fertilization, winter inspection, winter protection.
- In place of suppressed cards, Pregled / Kalendar / Plant detail render read-only "Mlade voćke" / "Mlada voćka" orientation cards drawn from authored Plan Template young-tree notes. Watering content surfaced here is info-only orientation, not Activity / compliance / done / skipped / missed / overdue.
- Read-time display-relevance rule only: no persisted state, no schema change, no validator change, no backup / import / export change.
- `V2_UX_MODEL.md` §2.16 and §5.13 were amended to sanction this narrow exception; the general no-automatic-hiding rule continues to bind every plant and every item outside the year-1–2 fruit-only frame.
- Trap capture hiding for year-1–2 fruit-only rows is a Runtime Slice 8 simplification, not a permanent product rule. If the owner later wants sentinel-trap logging on young trees, the exception MUST be narrowed — keep primary monitoring / risk surfaces clean for year-1–2 plants, but restore the optional capture path — rather than generalising the hiding rule.
- This addendum did not by itself close Slice 8. Step 6 runtime is complete for multi-plant free-standing `note` and `stage_obs` Observation capture only. Step 7c runtime is complete for bounded Plan Templates-backed visual scouting capture only; Step 7d runtime is complete for source-backed read-only guidance on those existing Step 7c visual scouting sources only; Step 7e runtime is complete for bounded read-only `Što gledati` guidance parity on the 21 monitoring-only B2 rows. Runtime Slice 8 closure is recorded above for the approved S8 scope.

### Post-S8 Carry-forward Action Map

Carried forward means tracked for a future owner-approved session, not abandoned. Items below do not reopen or block Runtime Slice 8; they queue up for owner-approved sessions after S8 closure. Agents must not use carry-forward wording to skip owner-approved work, remove plan-template guidance, expand scope without explicit owner approval, or duplicate concepts that already exist in `archive/future/STORE_READY_ROADMAP_V1.md` or `archive/v1/AI_STRATEGY_V1.md`.

Completed after S8 closure:

- Observation correction — complete for the approved Post-S8 scope. Docs lock: `1ef2009`; validator/model: `60cc32c`; UI/display: `6d5b19d`. It reuses the additive Correction model for supported Observation kinds only (`note`, `trap`, `stage_obs`, `scouting`) and preserves immutable original Observations. Hard boundary remains: no destructive edit/delete, no edit-in-place, no diagnosis/treatment/product/dose advice, no pressure/urgency/compliance logic, no program-attached observations, no new Observation kinds, and no broad registry.

Remaining owner-decision queue:

MEDIUM:

- Broader scouting capture beyond the bounded Step 7c source rows — return condition: after owner-approved bounded scouting source-map / target identifier semantics. No broad pest registry. No diagnosis.
- Symptom capture / `Observation.symptom` — return condition: after owner-approved symptom source-map / registry and UX copy that avoids diagnosis. No "ovo je bolest X" wording.
- Owner-approved symptom source map / registry before any `symptom_code` — return condition: explicit owner approval of symptom identifiers and UX copy that avoids diagnosis.
- Program-attached observations — return condition: after free-standing capture is stable and owner approves program attachment semantics. Free-standing `note` / `trap` / `stage_obs` remain the current shape.
- Broader phenology-aware stage confirmation beyond the Step 5a diary vocabulary — return condition: after owner-approved broader phenology vocabulary / plan-effect semantics / BBCH decision. Beyond the Step 5a nine-entry `stage_diary_vocabulary[]`. This does not defer source-backed plant-state / weather / safety execution-condition text already present in Plan Templates action-window notes; those notes remain read-only seasonal action guidance.

LOW / polish:

- Orphan-code fallback display — return condition: low-risk polish pass. Show `Nepoznata faza razvoja` instead of raw `stage_code` if a historical code no longer resolves; analogous fallback for trap codes. No schema change.
- Deferred outside-period disclosure / `V2_UX_MODEL.md §16.7` — return condition: later owner-approved polish if still tracked.

Post-V2 completion boundary (not next after S8):

- AI-assisted image analysis (paid subscription) — see `archive/future/V2_FUTURE_ROADMAP.md §4.11`. Concept already exists historically in `archive/v1/AI_STRATEGY_V1.md` and is connected to the existing subscription / paywall / multilingual concept references in `archive/future/STORE_READY_ROADMAP_V1.md` (Sessions 17, 18, 22, 23) per `CLAUDE.md` archive policy (historical reference only, not binding). Required wording: "AI-assisted image analysis belongs to a future paid/subscription capability discussion and must be reconciled with the existing store-readiness subscription/paywall/multilingual concept references before promotion into V2 core." This is post-V2 completion boundary, not next after S8. Hard boundaries: no AI diagnosis; no AI treatment instruction; no pesticide/product recommendation; no AI-authored action recommendation; no implementation now.
- Any paid/subscription AI features — future paid/subscription capability discussion only; no implementation now.
- Any diagnosis/treatment recommendation system — only if separately owner-approved in future with strict guardrails. No AI diagnosis, disease confirmation, pest confirmation, product recommendation, dose advice, `prskaj`, or `tretiraj` now.

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
- completed S8 Step 4a runtime implementation: Plant-detail-only, one-plant, free-standing `kind = "trap"` factual count capture with `program_id = null` from the bounded `trap_capture_sources[]` source map for source rows 337, 654, 860, 1596, 1643, 2455, 2949, and 2977 only
- S8 Step 4a runtime supports valid trap Observations through the runtime validator/import paths and renders factual Dnevnik / plant-history evidence under `Opažanja`; it does not add Pregled/Kalendar capture/status changes, program attachment, multi-plant trap capture, broad target/pest registry, symptom registry, stage vocabulary, diagnosis, treatment advice, pressure/severity scoring, weather automation, or compliance behavior
- broad/general scouting registry, symptom registry, program-attached observation capture, observation correction, broader stage confirmation, and monitoring rows beyond the bounded Step 4a trap path, bounded Step 7c visual scouting path, and Step 7d/Step 7e display-only guidance remain Post-S8 / owner-approved future work
- no `awareness_definitions[]`, broad `target_registry[]`, or `symptom_registry[]` in the current B2 projection, S8 Step 4a runtime source map, S8 Step 7c runtime source map, or S8 Step 7d display-only guidance

Runtime Slice 7 is complete through S7.4. It did not rely on monitoring or awareness content. B2 metadata-only projection boundary is complete; Runtime Slice 8 Step 1 is the first runtime consumer of that metadata and is limited to Plant detail read-only preview. Runtime Slice 8 Step 2 adds Plant detail free-standing note Observation capture and factual Dnevnik evidence only. Runtime Slice 8 Step 3 adds read-only Pregled/Kalendar monitoring/risk visibility only. S8 Step 4a adds bounded Plant-detail-only free-standing trap count capture and factual Dnevnik evidence only. S8 Step 7c adds bounded Plant-detail visual scouting capture plus Dnevnik / plant-history evidence under `Opažanja`; S8 Step 7d adds source-backed read-only visual scouting guidance on those existing Step 7c source rows without persisted payload/schema/validator/import/export changes.

Pre-Slice-5 Activity provenance / Correction storage-shape doc patch status: DOCUMENTATION-ONLY LOCK CONSUMED BY SLICE 5. This patch locked the exact Runtime Slice 5 Activity provenance shape as `provenance: { source: "user" }`, locked Correction persisted fields as `correction_id`, `original_record_id`, `original_record_type`, `correction_types`, `corrected_values`, optional `explanation`, and `created_at`, recorded the stricter Slice 5 multi-plant group invariant, and recorded unknown variety + unknown ripening harvest fallback to the species `mid` fallback window where available. Runtime Slice 5 implementation consumed this lock in commit `8bc630a Implement Runtime Slice 5 activity capture`.

Completed S11 patches:
- `S11.A — Roadmap authority, sequencing principles, commit/runtime safety boundaries` (`627c83d Define S11 roadmap authority and runtime safety`)
- `S11.B — Storage substrate, V2 key, clean-start contract, activation strategy` (`3822f1e Define S11 storage and activation posture`)
- `S11.C1 — Foundation slices 0–4` (`bf7b066 Define S11 foundation slice plan`)
- `S11.C2 — Usable/default slices 5–9` (`a56fe75 Define S11 usable-default slice plan`)
- `S11.D — Verification gates, milestones, stop conditions, runtime handoff` (`06feb13 Define S11 verification gates and runtime handoff`)

Implementation was forbidden through S11 documentation. After explicit owner approval, Runtime Slice 0 was implemented and verified (commit `642d0b1`). Runtime Slice 1 was then owner-approved and implemented (commit `178cfa8`). Runtime Slice 2 was then owner-approved and implemented (commit `254448f`). Runtime Slice 3 was then owner-approved and implemented (commit `8fd2571`). Runtime Slice 4 was then owner-approved and implemented (commit `f99e5f6`). Post-Slice-4 adversarial review found and closed the canonical `catalog_v1` import validation blocker before Slice 5 (commit `8a9c4ae`). Focused S3/S4 adversarial review after that fix passed, owner verification accepted the PASS, and the pre-Slice-5 Add Plant date-validation message polish was completed without starting Runtime Slice 5. The `window_def_id` source-of-truth reconciliation then landed (`7dd7141`), the Pre-Slice-5 Action Window Seed prerequisite runtime implementation landed (`df6a7fc`) without starting Runtime Slice 5, owner browser verification and focused adversarial review passed, and plan-template projection hardening landed (`bcaf3a2`). Runtime Slice 5 then landed after owner approval (`8bc630a Implement Runtime Slice 5 activity capture`). Runtime Slice 6 then landed after owner approval (`99e76c8 Implement Runtime Slice 6 snapshot and calendar surfaces`). The Pre-Slice-7 Action Window Notes Projection prerequisite then landed in two commits after owner approval (`ad9a113 Project action-window notes into canonical catalog` for B1, `a1b5307 Clean B1 action-window notes boundary` for B1.1). Runtime Slice 7 then landed through S7.4 after owner approval (`d61cc90 Harden S7 seasonal action detail display`). Runtime Slice 8 Step 1 then added Plant detail-only read-only B2 monitoring/risk preview after owner approval. Runtime Slice 8 Step 2 then added Plant detail free-standing note Observation capture and factual Dnevnik evidence after owner approval. The plan-template projection hardening lesson remains active: approved plan templates and plant catalog drive runtime projection; later Slice 8 work remains owner-approved.

§0 monitoring constraints remain locked and authoritative.

Legacy data and V1/V3/V4 keys remain protected per `archive/v2/V2_EXECUTION_ROADMAP.md` §8 and §14.

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
- `CURRENT_STATE.md` is updated
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
- Quince row 2004 is source-backed visual scouting/symptom Observation content in the current source, not trap guidance; the source explicitly says pheromone trap use is not described until confirmed by sources.
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
- `archive/future/V2_FUTURE_ROADMAP.md` records citrus reintroduction as future work.
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
- `archive/future/V2_FUTURE_ROADMAP.md` records fig reintroduction as future work.
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

Status: RUNTIME COMPLETE.

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

- row `516` pear until the owner-approved split separates trap Observation/advisory content from fruit-signal scouting/symptom Observation content;
- rows `1064` nectarine and `1228` peach until an owner-reviewed decision separates optional trap capture from visual shoot/fruit-sign scouting/symptom Observation content;
- row `2004` quince because the current source explicitly does not describe pheromone trap use until confirmed by sources; quince fruit signs belong to future structured scouting/symptom Observation capture, not Step 4a `Klopke`;
- all scouting rows;
- all symptom rows;
- all stage observations;
- program-attached observations;
- multi-plant structured capture;
- note or Observation correction;
- thresholds, diagnosis, treatment recommendations, pressure/severity scoring, weather automation, Pregled/Kalendar changes, and missing-record/compliance UX.

#### S8 Step 5a owner decision — minimal stage diary observation

Status: DOC-LOCK COMPLETE; RUNTIME COMPLETE (`1fb4e34`).

Decision:

- Step 5a is minimal free-standing diary `kind = "stage_obs"` capture only.
- Step 5a is Plant-detail-only, one-plant-only, and always stores `program_id = null`.
- Step 5a uses a bounded `stage_diary_vocabulary[]` of nine owner-approved diary entries; the source map is closed-list and exists only for S8 Step 5a diary `stage_obs` validation/display.
- `stage_code` resolves only inside `stage_diary_vocabulary[]` for Step 5a; display labels resolve from the same map.
- Step 5a does not create or imply a phenology engine, BBCH model, per-species phenology, plan recalculation, action unlocking/blocking, diagnosis target registry, symptom registry, broader stage registry, or replacement of catalog `stage_vocabulary[]`.
- Step 5a does not change Pregled, Kalendar, monitoring program state, snapshot output, weather logic, or compliance UX.

Approved first Step 5a diary entries:

- `dormant` — Mirovanje.
- `bud_swell` — Pupovi bubre.
- `bloom_started` — Cvatnja počela.
- `bloom_finished` — Cvatnja završila.
- `fruit_set` — Formiranje ploda.
- `color_change` — Plod mijenja boju.
- `ripening` — Dozrijevanje.
- `harvest` — Berba.
- `leaf_fall` — Opadanje lista.

Explicitly out of scope for Step 5a:

- BBCH and any per-species phenology modeling;
- broader catalog `stage_vocabulary[]` writes (deferred phenology-aware §11 path);
- plan recalculation, plan shifting, scheduling automation;
- action unlocking, action blocking, action completion driven by stage;
- diagnosis, treatment recommendation, dose/brand suggestion;
- weather/stage automation, pressure/severity/threshold logic;
- multi-plant structured stage capture;
- program-attached stage capture;
- observation correction for stage diary records (deferred correction session);
- Pregled/Kalendar capture entry, `Bez zapisa`, `Zadnji zapis`;
- optional free-text note field on stage diary records unless separately approved later.

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

Status: DONE — S11.A through S11.D complete in `archive/v2/V2_EXECUTION_ROADMAP.md` §1–§50.

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

B2 metadata-only projection boundary is complete, Runtime Slice 8 is closed for the approved S8 scope, Runtime Slice 8 Steps 1–6 are runtime-complete, Step 7 numeric-band runtime is pushed on main at `905af41 Implement S8 Step 7 trap advisory display`, Step 7b context-only trap advisory runtime is pushed on main at `b1d840c Add S8 Step 7b context-only trap advisory`, Step 7c bounded visual scouting runtime is pushed on main at `588e413 Implement Step 7c visual scouting capture` after the Step 7c docs lock at `7e388c5 Lock Step 7c visual scouting capture model`, Step 7d source-backed scouting guidance runtime is pushed on main at `5f64257 Add Step 7d scouting guidance`, Step 7e monitoring guidance parity runtime is pushed on main at `36433aa Add Step 7e monitoring guidance parity`, and tracker sync after Step 7e is pushed on main at `c5521ac Sync trackers after Step 7e guidance parity`. Step 6 is runtime-complete at `8c7d135 Implement multi-plant observation capture` for multi-plant free-standing `note` and `stage_obs` capture only. Step 7c is runtime-complete for the bounded Plan Templates-backed visual scouting path only; Step 7d is runtime-complete for source-backed read-only `Što sada` guidance on those existing Step 7c visual scouting sources only; Step 7e is runtime-complete for bounded read-only `Što gledati` parity on the 21 monitoring-only B2 rows by extending only `B2_READONLY_GUIDANCE_BY_SOURCE_ROW`. B2 source-row guidance coverage is complete for read-only S8 purposes: 14 previously existing `Što gledati` rows, 21 Step 7e monitoring-only rows, and 6 risk-awareness rows intentionally seasonal context rather than checklist rows. Step 7 coverage is complete and no unresolved S8 blocker row remains. Observation correction is complete for the approved Post-S8 scope: docs lock at `1ef2009`, validator/model runtime at `60cc32c`, and UI/display runtime at `6d5b19d`. A2 default V2 is complete: normal/original URL and empty hash load V2, `#v2` and `#v2/...` remain aliases, `#legacy` is the temporary legacy fallback, no legacy data was deleted, protected storage keys were not migrated or deleted, and no schema/model, Plan Templates, manifest, or service-worker change was made. A1 archive/lifecycle runtime is complete: archive uses only `archived_at?`, `archive_reason?`, and `archive_note?`; active scope excludes archived plants; Dnevnik/history remains preserved; no delete, unarchive/restore, or replacement logic was added. Plan Templates runtime fidelity / content parity runtime patch is complete at `c9645c4 Implement Plan Templates runtime parity fixes` with three source-backed display/copy parity fixes in `index.html` only (universal calendar-window baseline disclaimer rendered only on Seasonal action detail; `purposeCue` extended for `harvest` / `Pregled za zimu` / `Gašenje navodnjavanja`; two restored Plan Templates Taphrina/prevention-only lines in `SPECIES_ACTION_WINDOW_NOTES['peach.copper.leaf_curl_buds_closed']`); no schema/model, no validators, no import/export, no Plan Templates edit, no B2/source-map/guidance change, no trap/scouting capture change, no `manifest.json`, no `sw.js`, no S8 reopening; owner browser verification passed. Broad/general scouting registry, symptom registry, `symptom_code`, `Observation.symptom`, diagnosis/treatment/product/dose/pressure/urgency/compliance logic, trap/scouting merging, program-attached observations, and broader phenology-aware stage confirmation remain Post-S8 / owner-approved future work. Runtime Slices 0–7 are complete through S7.4 (`d61cc90 Harden S7 seasonal action detail display`). `V2_UX_MODEL.md` §16.7 outside-period disclosure remains deferred as later owner-approved polish. See `### Runtime Slice 8 Closure Record`, `### Post-S8 Carry-forward Action Map`, and `### V2 Done completion after Post-S8 Observation correction` above; UX/design polish through UXR.7, Young-Tree Formative Completion at `7bf61c0`, and the V2 Done audit are complete. V2 is marked Done. Remaining Post-S8 carry-forward items are future owner-decision work unless the owner explicitly opens post-V2 follow-up planning. (Runtime Slice 0 — V2 shell and owner-only entry was completed at `642d0b1 Implement Runtime Slice 0 V2 shell`; Runtime Slice 1 — V2 store boot and empty `vocnjak_v2` initialization was completed at `178cfa8 Implement Runtime Slice 1 V2 store boot`; Runtime Slice 2 — Catalog seed and retained catalog baseline was completed at `254448f Implement Runtime Slice 2 catalog seed`; Runtime Slice 3 — Early V2 export/import safety baseline was completed at `8fd2571 Implement Runtime Slice 3 V2 export/import safety baseline`; Runtime Slice 4 — Plant foundation and Biljke first cut was completed at `f99e5f6 Implement Runtime Slice 4 V2 plant foundation`; Runtime Slice 5 — Activity capture, Activity-only Dnevnik, and Activity correction was completed at `8bc630a Implement Runtime Slice 5 activity capture`; Runtime Slice 6 — Active-window snapshot, Pregled, and Kalendar was completed at `99e76c8 Implement Runtime Slice 6 snapshot and calendar surfaces`; Pre-Slice-7 Action Window Notes Projection prerequisite was completed at `ad9a113 Project action-window notes into canonical catalog` (B1) and `a1b5307 Clean B1 action-window notes boundary` (B1.1).)

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
