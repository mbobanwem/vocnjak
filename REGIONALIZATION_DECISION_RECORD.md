# VOCNJAK — REGIONALIZATION DECISION RECORD (REG-D1)

Date: 2026-06-12
Owner: project owner
Runtime reference point: `24714c8 Sync S5A completion status`

This record authorizes nothing by itself. Each REG session opens only by explicit owner instruction naming the session id.

---

## 1. Status

- Status: approved planning / decision record. This is NOT implementation and NOT implementation authorization.
- Runtime status: no regionalization is implemented.
- The current live app remains HR continental / `catalog_v1`.
- The current runtime is single-catalog and hardwired to `catalog_v1` (see §9).
- This record exists to preserve the approved regionalization decisions and session boundaries so future agents cannot reinterpret, shortcut, or expand them.

---

## 2. Source and authority

- `V2_VARIETY_COVERAGE_POLICY.md` is pre-S3 policy input / market weighting for variety selection. It is NOT a launch order and NOT automatic runtime/schema authority.
- The owner explicitly promotes the target countries below into the regionalization target registry **through this decision record**. The policy document is the documented origin of the list; this record is what makes the list binding.
- Market weighting does not equal launch order. Launch/content order is set separately in §4 by explicit owner decision.

---

## 3. Target country registry

Countries are registered at country level only.

| Country id | Country | Role | Status |
|---|---|---|---|
| hr | Croatia / Hrvatska | baseline + first regional proof | live baseline, regional planned |
| si | Slovenia / Slovenija | first foreign/local-adjacent market candidate | registered |
| at | Austria / Austrija | first paid-market / DACH proof candidate | registered |
| de | Germany / Njemačka | paid DACH market | registered |
| it | Italy / Italija | paid market, regionally complex | registered |
| ch | Switzerland / Švicarska | paid market, multilingual/legal complexity | registered |
| fr | France / Francuska | paid market, climate/language complexity | registered |
| ba | Bosnia and Herzegovina / Bosna i Hercegovina | later local-validation pack | registered, later |
| rs | Serbia / Srbija | later local-validation pack | registered, later |
| xk | Kosovo | later local-validation pack | registered, later |

Registry notes:

- `rs` means Serbia / Srbija, not Republika Srpska.
- `xk` is a pragmatic / user-assigned Kosovo code, not full ISO 3166-1. Country ids are opaque identifiers; a future official ISO assignment would change display metadata only, never stored ids.
- Only `hr` has live baseline content now.
- Registered does not mean selectable, live, or promised. Registration is an architecture/docs fact only.
- Registered-but-not-live countries ship nowhere in runtime code. Runtime constants may contain only the live set; the full registry lives in this record.

---

## 4. Market/content priority order (owner-approved)

1. HR Adriatic — first regional proof, because the HR baseline already exists.
2. SI — first real foreign / local-adjacent market candidate.
3. AT — first paid-market / DACH proof after the German-language foundation.
4. DE — larger paid DACH market after AT/`de` groundwork.
5. IT — large market, regionally complex.
6. CH — paid market, multilingual/legal complexity.
7. FR — large market, broad climate/language complexity.
8. BA / RS / XK — registered but later local-validation packs unless the owner changes priority.

Explicit statements:

- Serbia is not an early priority.
- BA/RS/XK remain registered but unscheduled.
- This priority can change only by explicit owner decision. Agents must not resequence it.
- IT vs CH order is swap-eligible only by owner decision on market signal.

---

## 5. Regionalization principles (hard)

- Regionalization = curated regional catalog variants / content packs.
- No runtime numeric offsets.
- No regional formulas.
- No computed date shifts.
- No global user date-shift slider.
- Calendar-visible, condition-governed.
- Dates are planning windows, not commands.
- Execution depends on plant state, local weather/field conditions, and safety constraints; regional packs change planning windows only, never execution authority.
- `country`, `region`, `language`, and `contentPack` are distinct concepts.
- `contentPack` is derived, never stored.
- No `pack_version`.
- `catalog_version` remains the only content-version system.
- `catalog_v1` is never renamed in stored data. It is retroactively classified as version 1 of the HR-continental lineage.
- `window_def_id` is region-stable only when the orchard meaning is identical.
- Different orchard meaning requires a new id. The regional ledger records the meaning-equivalence claim.
- Region switch must never rewrite history. Records and their derived markers resolve against their write-time catalog context forever.
- Existing plants must not change calendars silently.
- Existing-plant adoption of a different regional calendar requires a separate owner-approved adoption flow (`REG-UPG-D` / `REG-UPG-R`).
- Only live countries/regions appear in UI.
- Registered-but-not-live countries are hidden, not disabled. No "coming soon" / "uskoro" promises anywhere.
- Unknown/future country/region/catalog on import fails closed. No coercion, no inert acceptance, no partial import.
- No AI-generated agronomic content in packs.
- No product/dose/prescription/diagnosis content. The existing global prohibition layer applies to every pack unconditionally.

---

## 6. Country/region model

- Countries are registered now (§3), at country level only.
- Only HR regions are named now:
  - `hr.continental`
  - `hr.adriatic`
- No foreign region ids are named now.
- Foreign region ids are decided only during that country's source-corpus session (`REG-<CC>-F`), with approved sources in hand.
- Regions are coarse climate bands aligned with the country's advisory-source structure — at most three registered per country initially; a beginner must be able to self-select a band without a map.
- Region ids freeze once their pack is live.
- Never reuse a region id with changed meaning.
- No GPS, no free-text microclimate, no elevation sliders, no postal-code precision.

---

## 7. Content pack / catalog lineage model

- Content pack = the distribution-level name for one regional catalog lineage plus the rendered guidance metadata (read-only seasonal monitoring/risk context and guidance shown by the app).
- Runtime stores catalogs, not pack objects.
- The catalog lineage registry is docs (this record and per-pack dossiers) plus, later, runtime constants. It is never persisted user data.
- Lineage contract — each lineage records:
  - lineage id (e.g. `catalog.hr.continental`, `catalog.hr.adriatic`)
  - country
  - region
  - lifecycle state (docs-only; see §8 gates)
  - source dossier reference (docs-only)
  - baseline lineage for intra-country carry-forward (or none for a country's first pack)
  - known canonical versions (ordered)
  - current version
  - live status
- Runtime constants later may include only:
  - `(country, region) -> lineage`
  - `lineage -> known canonical versions`
  - the live set
- Nothing about `contentPack` is persisted. What persists is what already persists today: per-record and per-plant `catalog_version` references and `meta.active_catalog_version`.
- Pack lifecycle: `registered -> planned -> source_research -> curation -> verified -> live` (plus `retired`). Only `live` is ever user-visible (as picker presence). Lifecycle states never enter runtime code or storage.
- Translations are renderings of a pack version, never separate packs. Language never selects timing or content.

---

## 8. Carry-forward and source rules

- Cross-country carry-forward is forbidden.
- Croatian dates must never be used in foreign packs.
- Croatian legal/safety wording must never leak into foreign packs (e.g. Croatian referral phrasing such as `poljoprivredna ljekarna` must not appear in a foreign pack; foreign packs use their own country's sourced referral and safety wording).
- Croatian content may donate only:
  - structure
  - methodology
  - taxonomy
  - verification approach
  - beginner-copy discipline
  - variety-candidate inputs
- The first pack of any country is fully country-sourced or absent: every shipped window cites that country's approved sources; windows without sources do not ship.
- Later same-country regional packs may carry forward only from that country's own baseline pack, byte-equal and provenance-marked.
- Regional ledger dispositions: `REGION_VERIFIED_CHANGE` (cites a source row + names a runtime anchor), `BASELINE_CARRY_FORWARD` (byte-equal to the country baseline, provenance-marked), `REGION_ADDED` (source-backed, new id), `REGION_NOT_APPLICABLE` (justified omission). Every window — and the rendered monitoring/risk guidance rows — is classified exactly once.
- Curation drafting aids (including offset-shifted drafts) never ship; every shipped date is source-cited or byte-equal intra-country carry-forward.
- Every live pack requires, in order:
  - approved source corpus (tiered: national/state advisory and official plant-protection guidance lead; research institutes and recognized extension manuals support; commercial nursery catalogs only for variety existence/availability/relative timing bands, never for action windows or plant-protection guidance; blogs/forums/AI summaries/marketing never)
  - source dossier (sibling per-pack doc; `V2_ORCHARD_PLAN_TEMPLATES.md` is never edited for regional packs)
  - complete regional ledger
  - pack-aware verifier PASS (`REG-VER1` harness)
  - beginner-clarity copy review in the pack's rendering language (native-level for paid-tier packs)
  - explicit owner activation

---

## 9. Runtime reality (verified at `24714c8`)

- The current runtime is hardwired to `catalog_v1`.
- The current runtime is not multi-catalog-ready.
- Current validators reject any multi-catalog/multi-country shape: backup validation requires `store_format_version` 1, `meta.active_catalog_version` exactly `"catalog_v1"`, and catalogs keys exactly `[catalog_v1]`; plants and historical records must reference the active catalog.
- `plan_instances`, `plan_overlays`, and `review_state` are closed: validator-enforced empty.
- The documented plan-upgrade review (architecture §2/§3, UX §9) is not runtime-ready for regional adoption; it is documentation, not implemented runtime.
- There is no `settings` structure in runtime.
- Therefore a second live pack requires foundation sessions first: `REG-R1-D` → `REG-R1-R` (settings + store format v2 + generalized validation semantics), `REG-VER1` (pack-aware verifier), `REG-CATF` (behavior-identical per-plant catalog resolution), and `REG-PACKS-D` (pack delivery decision). No agent may claim the runtime is multi-catalog-ready until those sessions are complete and owner-verified.

---

## 10. Required REG session roadmap

Status of every session below except `REG-D1`: not opened. Each opens only by explicit owner instruction naming the session id.

| Order | Session id | Type | Mandatory? | Purpose | Does | Does NOT | Prerequisites | Likely files | Stop conditions |
|---:|---|---|---|---|---|---|---|---|---|
| 1 | REG-D1 | docs-only | Done (this record) | Lock regionalization decision context | Creates this record; compact roadmap pointer in `POST_V2_ROADMAP.md`; short hard-stop block in `CLAUDE.md`; tracker sync | No runtime, no schema, no foreign region ids, no dates, no content, no implementation authorization | Owner approval of the session | `REGIONALIZATION_DECISION_RECORD.md`, `POST_V2_ROADMAP.md`, `CLAUDE.md`, `V2_CURRENT_STATE.md` | Any runtime edit attempt; any foreign region naming |
| 2 | REG-R1-D | docs-only (architecture contract) | Mandatory before REG-R1-R | Lock the settings / store format v2 / validation contract | Docs-lock in owning docs (`V2_ARCHITECTURE.md` §1, `V2_UX_MODEL.md` Postavke/disclosure; `V2_DOMAIN_MODEL.md` only if strictly needed): nullable live-gated `settings.country`/`settings.region`; `store_format_version` 2 with deterministic additive v1→v2 upgrade (stores and imported v1 backups); validator semantics generalized to a known-canonical catalog registry (catalogs = non-empty subset of known canonicals; every referenced `catalog_version` present; records validate against their referenced known catalog; active version must be known + live + present); import/export carries settings; baseline disclosure copy decision (names continental Croatia — flagged partial reversal of the Phase A geography-silent disclaimer) | No runtime edit; no second catalog; no opening of `plan_instances`/`plan_overlays`/`review_state`; no foreign country values; no weakening of fail-closed rules | REG-D1 | `V2_ARCHITECTURE.md`, `V2_UX_MODEL.md`, (`V2_DOMAIN_MODEL.md` if needed), `V2_CURRENT_STATE.md` | Contract weakens fail-closed validation; runtime edits attempted |
| 3 | REG-VER1 | tooling | Mandatory before any second live pack | Pack-aware verifier | Per-pack config (dossier path, ledger, runtime target, baseline lineage or none, forbidden-string list); checks: ledger completeness + dichotomy (every window byte-matches its country baseline or matches a sourced ledger row with anchors present), intra-country carry-forward byte-equality + provenance marking, runtime anchors, forbidden strings; warn-level (never failing) foreign-vs-HR date-equality report; HR continental registered as pack #1; dossier-only lint mode for pre-runtime curation | No `index.html` edit; no Plan Templates edit; no content authoring; no ledger-format invention beyond this record | REG-D1 (parallel-safe with REG-R1-D/R) | `tools/`, `V2_CURRENT_STATE.md` | Existing verifier PASS weakened; any runtime edit |
| 4 | REG-R1-R | runtime foundation | Mandatory before REG-CATF | Implement the REG-R1-D contract | `settings` root key; format v2 + deterministic upgrade; generalized validators with a registry of one (only `catalog_v1` known); Postavke region picker (HR live only); baseline disclosure copy; export/import with settings | No second catalog; no per-plant resolution refactor; `plan_instances`/`plan_overlays`/`review_state` stay enforced-empty; no content/date change; no non-live country anywhere in code; no `manifest.json`/`sw.js`/Plan Templates/legacy-key changes | REG-R1-D | `index.html`, `V2_CURRENT_STATE.md` | Validator loosening beyond contract; unknown catalog keys accepted; scope drift into REG-CATF; unexpected files |
| 5 | REG-CATF | runtime foundation | Mandatory before any second live pack | Behavior-identical per-plant catalog resolution | Store loader stops returning the single hardwired catalog; snapshot and all consumers resolve each plant via `plant.catalog_version` through the known-catalog lookup; canonical refresh branches generalized per known canonical; history/Dnevnik resolution uses the referenced catalog; registry still of one | No second catalog; no validator change; no UI/copy change; no behavior/output change for existing data | REG-R1-R | `index.html`, `V2_CURRENT_STATE.md` | Any behavior difference with one catalog; scope drift into activation |
| 6 | REG-PACKS-D | docs-only (architecture decision) | Mandatory before REG-A-R | Decide pack delivery mechanics | Decides inline-in-`index.html` vs external static pack files (`packs/*.js`); offline/cache (`sw.js` ASSETS, cache versioning) and update semantics; `file://` verification compatibility; rollout semantics for pack data | No pack files created; no runtime edit; no `sw.js`/`manifest.json` edit; deciding-by-implementing forbidden | REG-D1 (parallel-safe with the R1 track) | `POST_V2_ROADMAP.md` or addendum to this record, `V2_CURRENT_STATE.md` | Any file creation or runtime edit |
| 7 | REG-A-D | source research + content curation | Mandatory before REG-A-R | HR Adriatic source dossier and ledger | Owner approves Adriatic Tier-A corpus; sibling dossier doc: band definition + display label, minimum seasonal skeleton, complete regional ledger covering every window and the rendered monitoring/risk guidance rows, delta source content with runtime anchors; species order olive + pomegranate → stone fruit → pome | No runtime edits; no `index.html`; no Plan Templates edit; no verifier edit; no date without Tier-A citation or byte-equal carry-forward; no drafting offsets committed; no region ids beyond `hr.adriatic` | REG-D1; corpus approval gate inside the session | new HR Adriatic dossier doc, `V2_CURRENT_STATE.md` | Unclassifiable window without owner decision; any invented date |
| 8 | REG-A-R | runtime activation | Owner-gated | HR Adriatic goes live | `catalog.hr.adriatic.v1` projected from the dossier per the REG-PACKS-D delivery decision; registry-of-two runtime constants; picker gains the Adriatic region; NEW plants pin per selected region; existing plants untouched plus calm copy stating they keep their current calendar; two-catalog export/import round-trip | No existing-plant re-pin; no `plan_instances` opening; no foreign country; no schema or validator-semantics change (constants widen only) | REG-R1-R + REG-VER1 + REG-CATF + REG-PACKS-D + REG-A-D verified + explicit owner activation | `index.html`, `packs/` (if external), `sw.js` only if REG-PACKS-D requires an ASSETS entry, verifier config, `V2_CURRENT_STATE.md` | Any existing-plant calendar movement; any unsourced date discovered; verifier fail |
| 9 | REG-UPG-D | UX decision (docs-only) | Mandatory before any existing-plant adoption | Choose the existing-plant adoption mechanism | Decides minimal per-plant re-pin consent flow (window-diff display per region-stable ids, explicit consent, audit-trail question, archived-plant handling) vs full plan-upgrade review runtime (would open `plan_instances`/`review_state`); docs-lock of the chosen UX in `V2_UX_MODEL.md` | No implementation; no assumption either option is pre-approved; no bulk/silent apply design; no compliance/pressure copy | REG-A-R live (a second catalog must exist to adopt) | `POST_V2_ROADMAP.md` or addendum, `V2_UX_MODEL.md` docs-lock, `V2_CURRENT_STATE.md` | Designing automatic migration |
| 10 | REG-UPG-R | runtime activation | Owner-gated | Implement the chosen adoption flow | Exactly the REG-UPG-D-approved variant; per-plant explicit consent; window-diff display against region-stable ids; history untouched | Anything beyond the approved variant; no bulk apply; no urgency copy; no unapproved model opening | REG-UPG-D | `index.html`, `V2_CURRENT_STATE.md` | Any calendar change without explicit per-plant consent |
| 11 | REG-SI-F | source research | Mandatory before any SI pack | Slovenia feasibility / corpus / taxonomy / language gate | Tier-A feasibility scan and corpus approval; SI region taxonomy decided and ids fixed (frozen at live); minimum seasonal skeleton; rendering-language gate decision (`sl`); variety-candidate mapping from the candidate matrix | No curation content; no runtime; no dates | REG-D1 (recommended after REG-A-R proves the pipeline) | new SI dossier skeleton doc, `V2_CURRENT_STATE.md` | Curation started before corpus + language approval |
| 12 | REG-I18N-F | runtime foundation + tooling | Mandatory before any pack whose language gate requires it | Language architecture foundation | Docs-lock then runtime for UI-string and pack-content rendering-language architecture within the no-build/single-file(+packs) constraints; native agronomic translation validation process; first target language per owner decision (expected `sl`, then `de`) | No pack translations themselves; no framework, build pipeline, or locale libraries | Own detailed session plan + owner approval; language gate decision from REG-SI-F (or earlier by owner) | `index.html`, possibly `tools/`, owning-doc docs-locks, `V2_CURRENT_STATE.md` | Any framework/build-step introduction |
| 13 | REG-SI-D/R | content curation → runtime activation | Owner-gated | First foreign pack (Slovenia) | Fully sourced SI dossier (no carry-forward — first pack of its country); activation: registry adds `si`; country picker appears for the first time (two live countries); validators widen; verifier PASS across all packs | No HR dates; no HR safety wording (forbidden-string verified); no gate skipping | REG-A-R + REG-VER1 + REG-SI-F + REG-I18N-F per the language gate | SI dossier, `packs/`, `index.html` constants, verifier config, `V2_CURRENT_STATE.md` | Any unsourced window; any Croatian wording in the pack; verifier fail |
| 14 | REG-AT-F/D/R | template instantiation | Owner-gated | First paid-market pack (Austria) | Same F → D → R chain: AT corpus at F (AT region ids decided at F, not before); dossier + ledger at D; activation at R with `de` rendering via REG-I18N-F and native-level German copy review | No DE/CH scope; no `de` content before `de` rendering exists | REG-SI-R proven (or owner explicitly accelerates) + I18N `de` target | AT dossier, `packs/`, constants, verifier config, `V2_CURRENT_STATE.md` | Same as SI plus the paid-tier native-language hard gate |
| 15 | REG-CTRY-* | repeatable country template | Governs all later countries | DE, IT, CH, FR, later BA/RS/XK | Each country instantiates F (feasibility/corpus/taxonomy/language) → D (dossier/ledger) → R (activation) with identical boundaries, gates, and stop conditions; IT⇄CH swap-eligible only by owner decision | No country skips F; no region ids before F; no cross-country carry-forward; no activation without the full gate chain | Per instance, per this record | Per instance | Per instance, per this record |

Parallelism notes: REG-VER1 and REG-PACKS-D are parallel-safe with the R1 track; REG-A-D may run parallel with REG-R1-R / REG-CATF. Hard serial chain: REG-R1-D → REG-R1-R → REG-CATF → REG-A-R; REG-A-R → REG-UPG-D → REG-UPG-R.

---

## 11. Non-negotiable invariants

- No offsets: no runtime numeric offsets, regional formulas, or computed date shifts — ever, at any layer.
- No fake dates: every shipped date is source-cited or byte-equal intra-country carry-forward; drafting aids never ship.
- No cross-country carry-forward; Croatian dates and Croatian legal/safety wording never enter foreign packs.
- No foreign pack without source dossier, complete ledger, pack-aware verifier PASS, and explicit owner activation.
- No second live pack before `REG-VER1` and `REG-CATF` are complete.
- No existing-plant calendar movement before the owner-approved `REG-UPG` flow.
- No non-live countries in UI; hidden, not disabled; no availability teasers.
- No foreign region ids before that country's source session.
- No `contentPack` persisted.
- No `pack_version`.
- `catalog_version` only; `catalog_v1` never renamed; referenced catalog versions retained forever.
- Fail-closed import: unknown country/region/catalog rejects the backup; no coercion, no inert acceptance.
- One store-format migration for regionalization (`REG-R1`); later country/region activations are additive runtime constants only — never a migration, never a schema change.
- `plan_instances`, `plan_overlays`, and `review_state` stay validator-enforced empty until an owner-approved session explicitly opens them.
- New records always write the active catalog version; records validate only against known canonical versions present in the store.
- Settings enums are live-gated; a non-live country/region can never be selected or stored.
- Region ids freeze once live; `window_def_id` is region-stable only for identical orchard meaning.
- Protected legacy storage keys stay byte-identical through every REG session.
- No AI-generated agronomic content; no diagnosis/treatment/product/dose content in any pack.
- No runtime implementation from this decision record alone.
- Each REG session requires explicit owner instruction naming the session id.

---

## 12. Documentation placement

- This file is the canonical detailed regionalization decision record.
- `POST_V2_ROADMAP.md` contains the compact pointer and session list only.
- `CLAUDE.md` contains only a short regionalization hard-stop block.
- `V2_ARCHITECTURE.md`, `V2_DOMAIN_MODEL.md`, and `V2_UX_MODEL.md` are updated only in their owning sessions (`REG-R1-D`, `REG-UPG-D`, `REG-I18N-F` docs-locks). They are not edited by REG-D1.
- `V2_ORCHARD_PLAN_TEMPLATES.md` is not regionalized directly and is never edited for regional packs; regional source content lives in sibling per-pack dossiers.
- Per-pack dossiers are sibling docs (naming convention to be confirmed; recommended `V2_PACK_<CC>_<REGION>.md`, e.g. `V2_PACK_HR_ADRIATIC.md`).

---

## 13. Open owner decisions

Still open (decided later, at the named gate):

- Exact HR Adriatic display label (recommended `Jadranska Hrvatska (obala i otoci)`) — at REG-A-D.
- Baseline disclosure copy that names continental Croatia (flagged partial reversal of the Phase A geography-silent disclaimer) — at REG-R1-D copy review.
- Pack dossier naming convention (recommended `V2_PACK_<CC>_<REGION>.md`) — at or before REG-A-D.
- Existing-plant adoption mechanism (minimal per-plant re-pin consent vs full plan-upgrade review runtime; audit trail; archived-plant handling) — at REG-UPG-D.
- i18n timing details and architecture (first target language confirmation, expected `sl` then `de`) — at REG-SI-F / REG-I18N-F.
- SI language gate (`sl` required for live; recommended yes) — at REG-SI-F.
- IT vs CH order swap if market signal changes — owner decision only.

Already decided — NOT open, do not re-litigate:

- Target country registry (§3).
- Market/content priority order (§4), including Serbia not early and BA/RS/XK registered-but-later.
- No offsets, no computed shifts, no date-shift slider (§5).
- No cross-country carry-forward (§8).
- Curated catalog variants as the regionalization model (§5, §7).
- Foundation-before-second-pack runtime gates (§9, §10).

---

## 14. Stop conditions

Stop and report to the owner immediately if any work would:

- start a REG session without the owner explicitly naming the session id;
- edit runtime, schema, validators, storage, import/export, `manifest.json`, or `sw.js` outside an opened REG session's allowed scope;
- introduce numeric offsets, regional formulas, computed date shifts, or a user date-shift control;
- introduce a date without a per-row source citation or byte-equal intra-country carry-forward;
- reuse Croatian dates or Croatian legal/safety wording in a foreign pack;
- name or register a foreign region id before that country's source-corpus session;
- move an existing plant's calendar without the owner-approved `REG-UPG` flow;
- show a non-live country/region in UI, or tease availability;
- persist `contentPack`, add `pack_version`, rename `catalog_v1`, or delete a referenced catalog version;
- open `plan_instances`, `plan_overlays`, or `review_state` without their owning session;
- weaken fail-closed import or exact-canonical catalog validation;
- edit `V2_ORCHARD_PLAN_TEMPLATES.md` for regional pack content;
- reinterpret this record as implementation authorization.
