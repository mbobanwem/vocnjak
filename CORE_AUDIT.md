# VOCNJAK - CORE-AUDIT FINAL LOCK

Session: Session 21 - Native app path / PWA bridge / portability proof
Substep: CORE-AUDIT
Status: final documentation lock at `993d153 Lock corrected CORE-AUDIT specification`; KD-1 runtime fix at `cf3a51f Fix observation correction validation regression`

This document is the durable repository record of the corrected CORE-AUDIT result. It does not create a new authority tier, does not authorize runtime work, and does not supersede `ROADMAP.md`, `DISTRIBUTION_DECISION_RECORD.md`, `REGIONALIZATION_DECISION_RECORD.md`, or the locked V2 product/model/architecture documents.

`ROADMAP.md` is the execution authority for this audit contract. This document preserves the deep boundary/evidence record; the roadmap maps executable obligations to numbered sessions and gates.

## 1. Authority Boundary

LOCKED CONTRACT - `DISTRIBUTION_DECISION_RECORD.md` owns the native/store track. It requires CORE-AUDIT before `CAP-BUILD`, native-module work, or KMP/native evaluation, and it forbids forking canonical validators, derivation, catalog semantics, correction semantics, or export/import JSON.

LOCKED CONTRACT - `REGIONALIZATION_DECISION_RECORD.md` owns REG gates. First second-catalog activation remains `REG-A-R` and requires the REG prerequisites, pack-aware verifier PASS, and explicit owner activation.

FACT - CORE-AUDIT is documentation/audit scope. It maps canonical core boundaries, current cross-slice wiring, extraction risks, known defects, verifier coverage, and native/REG gate implications. It does not extract, rewrite, fork, or refactor the runtime.

## 2. Current Runtime Contract Surface

FACT - The current runtime is still a single-file app in `index.html`. The logical core is not physically extracted.

FACT - The current cross-slice/global runtime surface is:

- `window.v2CanonicalCatalogV1`
- `window.v2ValidateForBackup`
- `window.v2PrepareStoreForCurrentRuntime`
- `window.v2RetainedCatalogForVersion`
- `window.v2ActivityHelpers`
- `window.v2ObservationHelpers`
- page-private channels `V2_B2_PRIVATE` and `V2_STAGE_DIARY_PRIVATE`

KNOWN LIMITATION - This surface is current page wiring, not a future public API. It is not a complete external interface for a native module, KMP runtime, or second JavaScript runtime.

FACT - Important canonical logic remains lexical/in-document and is not externally callable today, including seasonal snapshot derivation, effective Activity/Observation entry derivation, correction application/composition, occurrence grouping, write-candidate builders, id generation, `readValidStore`, `exportV2`, and `handleImportFile`.

## 3. Logical Canonical Core

LOCKED CONTRACT - Canonical core is the UI-independent domain/content/contract layer named by `DISTRIBUTION_DECISION_RECORD.md`. It includes:

- catalog and content-pack semantics
- source-backed guidance copy
- fail-closed validators
- deterministic derivation
- correction and effective-record semantics
- export/import JSON schema
- backup validation contract

FACT - In the current app, this core is interleaved with UI/runtime slices in `index.html`. That is an implementation reality, not permanent architecture.

KNOWN LIMITATION - A future agent must not promote current lexical boundaries, helper names, globals, DOM listeners, or single-file organization into permanent architecture without owner approval.

## 4. CAP-BUILD Reachability Rule

LOCKED CONTRACT - The first native vehicle is a Capacitor-packaged shell proof path unless owner-approved evidence changes that. Under that path, CAP-BUILD may consume canonical logic in-document because the packaged app ships the same document.

FUTURE GATE - Any new global, cross-slice channel, bridge-visible function, or native-facing exposure must be a named item in the owner-approved `CAP-BUILD` plan. If not named, stop.

FUTURE GATE - Any out-of-document consumer, including native module extraction, KMP/native evaluation, a second JavaScript runtime, or a standalone canonical-core package, requires a separate owner-approved extraction/interface session. If attempted without that session, stop.

LOCKED CONTRACT - CAP-BUILD must not fork validators, derivation, catalog semantics, correction semantics, import/export semantics, or pack data.

## 5. KD-1 Resolved Defect

KNOWN RESOLVED DEFECT - CORE-AUDIT discovered a REG-R1-R observation-correction validator regression: the effective Observation validation call in `validateAllCorrections(corrections, parsed)` evaluated an undeclared `catalog` identifier before `validateObservation` could run.

FACT - The historical failure mode was `ReferenceError: catalog is not defined` for valid stores containing at least one valid Observation correction. Valid Observation stores without corrections and valid Activity-correction stores did not hit that path.

FACT - KD-1 was fixed in `cf3a51f Fix observation correction validation regression`. The call now preserves the existing `validateObservation` signature by passing `null` for the dead legacy parameter and the path string in the fourth argument.

FACT - `tools/verify-reg-r1-runtime.mjs` now includes checks 30-32:

- valid single Observation plus valid Observation correction returns `[]`
- invalid Observation correction returns an error array and does not throw
- valid grouped Observation correction batch returns `[]`

FACT - Current expected verification is `node tools/verify-reg-r1-runtime.mjs` -> `RESULT: PASS (32/32)` and `node tools/verify-content-parity.mjs` -> `RESULT: PASS`.

FUTURE GATE - KD-1 no longer blocks `CAP-BUILD`, `REG-A-R`, or CAP-SPIKE validator round-trip evidence. Future claims must describe it as a historical resolved defect, not a live runtime blocker.

## 6. KD-2 Remaining Limitation

KNOWN LIMITATION - Plant creation still writes `catalog_version: 'catalog_v1'` directly. This is behavior-identical under the current registry-of-one, where the active catalog is also `catalog_v1`.

FACT - Other current write paths are already generalized differently:

- Observation creation writes `current.store.meta.active_catalog_version`
- Activity creation writes the selected action definition's `def.catalog_id`
- Correction records have no top-level `catalog_version`; corrected window values validate against canonical window lineage and Observation corrections validate through the original/effective record context

LOCKED CONTRACT - `REGIONALIZATION_DECISION_RECORD.md` requires new records to write the active catalog version. Plant creation only satisfies that contract accidentally while there is one live catalog.

FUTURE GATE - KD-2 blocks first second-catalog activation (`REG-A-R`) until fixed with REG-VER1 coverage. It does not block CAP-BUILD under registry-of-one and must not be fixed inside CORE-AUDIT.

## 7. Verifier Coverage

FACT - The REG verifier is read-only and exercises the committed V2 store/catalog/backup runtime slices in a Node VM harness.

FACT - At `cf3a51f`, REG verifier coverage includes REG-R1-R, REG-CATF, and KD-1 Observation-correction regression cases, with expected PASS `32/32`.

KNOWN LIMITATION - The content parity verifier is textual/source-anchor coverage. It does not prove all runtime behavior.

KNOWN LIMITATION - KD-2 is not fixed and should gain exact REG-VER1 coverage when the owning REG activation/fix work opens. Do not claim current verifier coverage proves second-catalog plant-creation correctness.

## 8. Environment and Storage Dependencies

FACT - Current app traits remain: single-file `index.html`, vanilla JavaScript, localStorage V2 persistence, no framework, no build step, PWA bridge/dev channel, and repo-owned Node read-only verifiers.

LOCKED CONTRACT - V2 export/import JSON is the cross-device and cross-platform portability contract. Platform backup is not sync and not cross-platform portability.

DEFERRED DECISION - Native storage substrate, app-owned JSON file behavior, temp+rename durability, backup/restore behavior, share/import/export round-trip, local notification feasibility, and owner real-device quality bar belong to `CAP-SPIKE` / later owner-approved native sessions.

## 9. Clock and Timezone

FACT - Current runtime uses JavaScript `Date`, local-calendar date helpers, and ISO UTC timestamps for recorded times.

KNOWN LIMITATION - CORE-AUDIT does not decide whether current local-calendar behavior is sufficient across native devices and timezone changes.

DEFERRED DECISION - D1 clock/timezone portability evidence belongs to `CAP-SPIKE`. The decision gate is `CAP-BUILD` entry because guided migration/storage design cannot be approved honestly without that evidence. If rules change, implementation belongs to an owner-opened canonical-runtime substep, not an ad hoc CAP-BUILD invention.

## 10. Legacy Boundary

FACT - Legacy v3/v4 code remains in `index.html`.

LOCKED CONTRACT - `LEGACY-D` is docs-only and must decide removal/quarantine/preservation before `LEGACY-R`. `LEGACY-R` executes later and is mandatory before first binary upload. Protected legacy localStorage keys must remain byte-identical through removal/quarantine work.

KNOWN LIMITATION - CORE-AUDIT does not delete, quarantine, or normalize legacy runtime.

## 11. Deferred Decisions D1-D5

DEFERRED DECISION - D1 clock/timezone portability: evidence owner `CAP-SPIKE`; decision gate `CAP-BUILD` entry; implementation only in an owner-approved canonical-runtime substep if the rule changes.

DEFERRED DECISION - D2 pre-import backup and export re-persist behavior: evidence owners `CAP-SPIKE` and `STORE-W1`; decision gate owner-approved `CAP-BUILD` plan; bridge-side implementation requires an owner-approved Session 21 substep, native-side implementation belongs inside the approved CAP-BUILD plan.

DEFERRED DECISION - D3 import size cap: evidence owner `CAP-SPIKE` synthetic large-store scale, or earlier if `STORE-W1` owner-iPhone testing trips the cap; decision gate `CAP-BUILD` entry; implementation requires an owner-approved Session 21 substep.

DEFERRED DECISION - D4 single-writer / cross-tab posture: current stance is single local writer/browser context. No implementation is required unless the owner overrides that stance in an owner-approved runtime session.

DEFERRED DECISION - D5 content-table / pack-membership decisions remain REG-track work. They belong to the relevant REG pack/dossier/activation owner, not CORE-AUDIT or CAP-BUILD by default.

## 12. CAP-BUILD Gate After CORE-AUDIT

FUTURE GATE - CAP-BUILD still requires `CAP-SPIKE`, CORE-AUDIT, and `APP-ID-D`; `LEGACY-R` remains required before first binary upload.

FUTURE GATE - CAP-BUILD must use the reachability rule in §4: in-document consumption is allowed only inside the approved plan; new exposures must be named; out-of-document consumption requires a separate extraction/interface session.

FUTURE GATE - CAP-BUILD entry must resolve D1 for guided migration/storage design and must name D2/D3 choices in the approved CAP-BUILD plan.

FACT - KD-1 no longer blocks CAP-BUILD. KD-2 does not block CAP-BUILD while the registry remains one live catalog.

## 13. REG Activation Gate After CORE-AUDIT

FUTURE GATE - `REG-A-R` remains closed until the existing REG prerequisites are satisfied: REG-R1-R, REG-VER1, REG-CATF, REG-PACKS-D, REG-A-D, pack-aware verifier PASS, and explicit owner activation.

FUTURE GATE - KD-2 must be fixed before/within `REG-A-R` with REG-VER1 coverage because first second-catalog activation would otherwise silently create new Plants with the wrong lineage.

FACT - KD-1 no longer blocks `REG-A-R`.

## 14. Durable Detail Inventory

FACT - The canonical-core inventory preserved by CORE-AUDIT includes the frozen `CATALOG_V1` contract, species/action-window definitions, note/spray-safety/provenance content, B2 projection boundary, trap capture sources, scouting capture sources, trap advisory sources, stage diary vocabulary, young-tree context definitions, Croatian label tables, retained-catalog lookup, ID generation, boot store initialization, catalog seed/refresh gates, preparation/migration, validation, effective-record composition, seasonal occurrence/evidence/state/grouping derivation, candidate builders, read gate, and import/export logic halves.

FACT - Explicitly non-core items include DOM rendering, routing, Postavke presentation, browser file transports, service worker, manifest, fonts, icons, `vocnjak_kalendar_puni_v2.ics`, legacy V1/V3/V4 application code, legacy export/import, and legacy external integrations.

FACT - The write-path taxonomy is preserved as a contract summary: boot initialization and catalog seed/refresh/upgrade paths use their narrow shape/catalog gates; migration, export-side prepare/re-persist, import confirm, archive, Plant creation, Observation creation, Activity creation, Activity correction, and Observation correction paths use the full canonical validator on the complete candidate. Export re-persist and absence of V2 pre-import backup remain current behavior until D2 is decided.

LOCKED CONTRACT - `validateForBackup` remains the only full-store validator. `validateV2StoreShape` and the Slice 2 catalog-gate family are supporting boot/catalog gates only, not second validators; they must not drift from the full validator and must not be used as an import/export/native schema substitute.

LOCKED CONTRACT - The validator is not physically extractable without its content-table dependencies. Observation payload validation depends on the B2/trap/scouting/stage private tables captured from the page; a future extraction/interface session must move validator and dependent content tables as one contract.

FACT - Legacy discovery preserved for `LEGACY-D`: code-observed legacy/config keys include `vocnjak_v3`, `vocnjak_v3_alerts`, `vocnjak_v3_premigration`, `vocnjak_v4`, `vocnjak_v4_preimport_backup`, `vocnjak_v4_last_supabase_backup`, `vocnjak_user_key`, `vocnjak_gh_token`, `vocnjak_gh_repo`, `vocnjak_sb_url`, and `vocnjak_sb_key`. Related legacy identifiers include Supabase table `vocnjak_data`, GitHub/iCal file `vocnjak_kalendar_puni_v2.ics`, crypto salt `vocnjak_salt_2026`, and service-worker cache `vocnjak-v1`.

FACT - Legacy side effects deferred to `LEGACY-D` include unconditional legacy INIT even in V2 mode, possible `vocnjak_v4` creation, possible secure-key rewriting from plaintext GitHub/Supabase credentials into AES-GCM form, unconditional Open-Meteo fetch, legacy alert writes, legacy v4 import backup writes, and Supabase backup stamp writes.

FACT - Device evidence deferred to `CAP-SPIKE` includes WebView storage lifetime/quota/eviction, app-owned JSON storage feasibility, temp+rename or equivalent resilience, file/share/import/export transport, timezone-sensitive validator round-trip, offline bundled boot, large-store parse/stringify and import-cap sizing, update survival, platform backup/restore, `crypto.getRandomValues`, App Group feasibility, local notifications, owner iPhone quality, VoiceOver/Dynamic Type, no-build-step proof, and App Store 4.2 defense.

## 15. Stop Conditions

Stop if a future agent:

- treats this document as runtime authorization
- describes KD-1 as an unfixed current defect
- claims REG verifier coverage is still 29/29
- claims observation-correction validation currently throws for valid corrected Observations
- claims CAP-BUILD or REG-A-R is blocked by unfixed KD-1
- claims KD-2 is fixed
- opens Session 22 runtime activation or fixes KD-2 without owner-approved REG scope
- creates a native/KMP/extracted-core consumer without the required owner-approved plan/session
