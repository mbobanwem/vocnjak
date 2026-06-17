# V2 Pack - HR Adriatic Source Dossier

## 1. Status

This dossier is a REG-A-D draft.

It is not runtime content.

It does not activate HR Adriatic.

It does not create a second catalog.

REG-A-R remains closed.

Only rows explicitly marked `regional_delta_source_backed` or `byte_equal_carry_forward` with proof may be considered candidates for future activation.

Unresolved rows block future REG-A-R activation.

Current draft state:

- Dossier file: `V2_PACK_HR_ADRIATIC.md`.
- Future runtime id already authorized in active docs: `hr.adriatic`.
- Working display label: `Jadranska Hrvatska (obala i otoci)`.
- Working region scope: Croatian Adriatic coast + islands.
- Working first-baseline assumption: one HR Adriatic baseline covering coast + islands.
- Split risk to track: Istria / Kvarner / Dalmatia may require later split if sources prove material differences.
- Species inventory scope: all current active catalog species.
- Activation readiness: not ready; date-bearing rows remain unresolved unless explicitly proven later.

## 2. Region Definition

REG-A-D uses the owner-approved working scope: Croatian Adriatic coast + islands.

This draft treats the following as HR Adriatic evidence zones for source collection only:

- Istria
- Kvarner / Primorje
- northern Dalmatia
- central Dalmatia
- southern Dalmatia
- Croatian Adriatic islands

This does not activate a UI label, region picker, second catalog, pack file, or runtime constant. If later source evidence shows material timing differences between Istria, Kvarner, Dalmatia, or islands, those rows must remain unresolved until the owner either accepts one coarse HR Adriatic baseline or opens a later split.

## 3. Non-Goals / Hard Stops

REG-A-D must not:

- edit `index.html`
- edit `tools/`
- edit `manifest.json`
- edit `sw.js`
- edit `V2_ORCHARD_PLAN_TEMPLATES.md`
- edit `V2_PLANT_CATALOG.md`
- create pack JSON files
- activate `hr.adriatic`
- add a second catalog
- add a region picker
- open REG-A-R
- move existing plants
- add foreign regions or species
- generate dates from climate intuition
- apply offset formulas such as "coast = earlier by N days"
- add product, dose, diagnosis, treatment-prescription, pressure, urgency, or compliance claims

## 4. Source Corpus

Access date for web sources in this draft: 2026-06-17.

| source_id | title | publisher / institution | URL or stable reference | access date | crop/species | region/climate relevance | exact supported claim captured for this dossier | limitations |
|---|---|---|---|---|---|---|---|---|
| SRC-HR-MPS-OLIVE-DN-2026-05-27 | Maslinarstvo - cvatnja i formiranje ploda (Dubrovačko-neretvanska županija) | Ministarstvo poljoprivrede, šumarstva i ribarstva, Uprava za stručnu podršku razvoju poljoprivrede | https://savjetodavna.mps.hr/2026/05/27/maslinarstvo-cvatnja-i-formiranje-ploda-dubrovacko-neretvanska-zupanija/ | 2026-06-17 | olive | Southern Dalmatia / Dubrovnik-Neretva; explicitly coastal locations | On 2026-05-27, olive flowering was mostly finished or still in progress depending on site; on southern sea-facing sites such as Dingač and Vela Luka, small fruitlets were already formed; monitoring olive moth generation was regionally relevant at that time. | Advisory snapshot for one season and county; not enough to define a full recurring runtime window. |
| SRC-HR-MPS-OLIVE-ZD-2026-06-01 | Maslinarstvo, cvatnja i oplodnja (Zadarska županija) | Ministarstvo poljoprivrede, šumarstva i ribarstva, Uprava za stručnu podršku razvoju poljoprivrede | https://savjetodavna.mps.hr/2026/06/01/maslinarstvo-cvatnja-i-oplodnja-zadarska-zupanija/ | 2026-06-17 | olive | Northern Dalmatia / Zadar County | In 2026, colder April and early/mid May delayed olive flowering into May; high temperatures affected flowering/fertilization; some higher-elevation inland olive sites were still flowering or only starting flowering. | Advisory snapshot; useful for microclimate and split-risk evidence, not a complete date rule. |
| SRC-HR-MPS-ISTRA-APPLE-OLIVE-2026-04-29 | Preporuke za jabuku i maslinu u Istarskoj županiji (28.4.2026.) | Ministarstvo poljoprivrede, šumarstva i ribarstva, Uprava za stručnu podršku razvoju poljoprivrede | https://savjetodavna.mps.hr/2026/04/29/preporuke-za-jabuku-i-maslinu-u-istarskoj-zupaniji/ | 2026-06-17 | apple, olive | Istria | On 2026-04-29, apple was mostly post-bloom in Istria; olive pruning was still occurring mainly in larger orchards; the advisory includes young-planting irrigation and foliar-nutrition context. | Advisory snapshot; indicates HR Adriatic evidence can diverge from continental baseline, but does not prove complete windows. |
| SRC-HR-MPS-PEACH-SD-2026-03-26 | Preporuka za Splitsko-dalmatinsku županiju - proljetna prihrana breskve | Ministarstvo poljoprivrede, šumarstva i ribarstva, Uprava za stručnu podršku razvoju poljoprivrede | https://savjetodavna.mps.hr/2026/03/26/preporuka-za-splitsko-dalmatinsku-zupaniju-proljetna-prihrana-breskve/ | 2026-06-17 | peach | Central Dalmatia / Split-Dalmatia County | On 2026-03-26, peach was in full bloom to end of bloom depending on location and cultivar; the advisory discusses spring nutrition and frost caution in that phenological context. | Advisory snapshot; cannot be used to compute nectarine/apricot windows or recurring date ranges. |
| SRC-HR-MPS-APPLE-GUIDE-2025 | JABUKA - Kako podići suvremeni nasad jabuka i ostvariti kontinuiranu, održivu godišnju proizvodnju plodova prve klase | Ministarstvo poljoprivrede, šumarstva i ribarstva | https://savjetodavna.mps.hr/wp-content/uploads/2025/04/Brosura-jabuka-AH-v2.pdf | 2026-06-17 | apple | Croatian institutional apple guide; not HR-Adriatic-specific | Captures that climate change affects apple phenology/technology; thinning is a material apple practice; key diseases include scab and powdery mildew; infection/rain data matter for scab management. | Not a coastal timing source; no HR Adriatic runtime dates. |
| SRC-HR-MPS-HAZELNUT-GUIDE-2024 | Uzgoj lijeske | Ministarstvo poljoprivrede, Uprava za stručnu podršku razvoju poljoprivrede | https://savjetodavna.mps.hr/wp-content/uploads/2025/03/Uzgoj-lijeske.pdf | 2026-06-17 | hazelnut | Croatian guide; primarily continental-relevant, with variety context including Istarski duguljasti | Captures hazelnut climate/site constraints, leading Croatian varieties, pollination relevance, and harvest by fruit falling from husk in dry/warm weather. | Not HR-Adriatic-specific; harvest date windows remain unresolved for HR Adriatic. |
| SRC-HR-MPS-ALMOND-GUIDE-2023 | Vodič za uzgoj bajama | Ministarstvo poljoprivrede, šumarstva i ribarstva | https://savjetodavna.mps.hr/publikacija/vodic-za-uzgoj-bajama/ | 2026-06-17 | almond | Croatian institutional almond guide; almond is an HR Adriatic-priority species | The public page identifies chapters for site choice, varieties, diseases/pests, and harvest. | Page summary does not expose enough exact timing evidence in this session; use as source lead, not activation evidence. |
| SRC-HR-MPS-OLIVE-DISEASES-2025 | Bolesti masline | Ministarstvo poljoprivrede, šumarstva i ribarstva | https://savjetodavna.mps.hr/wp-content/uploads/2025/03/Bolesti-masline.pdf | 2026-06-17 | olive | Croatian coastal olive source; explicitly states olive production is tied to the coastal part of Croatia | Captures olive disease context, climate-change/pest-disease challenge, olive knot risk around wounds such as pruning/harvest/leaf fall, and regional relevance of olive to coastal Croatia. | Disease guide; not a full action-window schedule and not product/dose evidence. |
| SRC-HR-MPS-WALNUT-DISEASES-2025 | Bolesti i štetnici oraha | Ministarstvo poljoprivrede, šumarstva i ribarstva | https://savjetodavna.mps.hr/wp-content/uploads/2025/03/Bolesti-i-stetnici-oraha.pdf | 2026-06-17 | walnut | Croatian walnut source; not HR-Adriatic-specific | Captures that codling moth can damage walnut fruit and that the guide focuses on economically important walnut diseases/pests and symptom recognition. | Not a regional timing source; no HR Adriatic trap/scouting window is proven. |
| SRC-HR-MPS-VOCARE-INDEX-2026 | Voćarstvo page / publications and advisories index | Ministarstvo poljoprivrede, šumarstva i ribarstva | https://savjetodavna.mps.hr/vocarstvo/ | 2026-06-17 | multiple | Croatian official source discovery page | Confirms the institutional source family used for current advisories and publications. | Discovery/source-family reference only; individual claims must cite specific pages/PDFs. |

## 5. Source Corpus Policy

Source priority:

1. Croatian official or institutional sources.
2. Croatian regional extension, university, faculty, institute, advisory sources.
3. EU / Mediterranean official or university sources where Croatian sources are insufficient.
4. High-quality pomology/IPM sources.
5. Commercial/nursery sources only for limited variety/context support, not treatment, dose, diagnosis, or prescription claims.

For every non-byte-equal regional delta, the dossier must capture:

- source title
- publisher / institution
- URL or stable reference
- access date
- crop/species
- region/climate relevance
- exact supported claim
- mapped app window/guidance row
- confidence / limitations

Source acceptance rules:

- A single season advisory may prove a regional evidence point, but not a recurring runtime window unless the source itself supports recurrence or the owner approves a conservative mapping.
- A partial phenology point must not be expanded into open/close dates.
- A coastal source for one county must not silently become all-HR-Adriatic truth.
- Where Istria, Kvarner, Dalmatia, or islands differ, the row remains unresolved until owner decision.

## 6. Baseline Sources Used For Mapping

Active repo baseline sources used for mapping:

- `index.html`: current runtime `catalog_v1`, `action_window_definitions`, `spray_safety_notes`, B2 source maps, trap/scouting guidance, and registry-of-one boundaries.
- `V2_ORCHARD_PLAN_TEMPLATES.md`: existing baseline content source, not edited by REG-A-D.
- `V2_PLANT_CATALOG.md`: existing species/variety/fallback baseline, not edited by REG-A-D.
- `V2_DOMAIN_MODEL.md`: species scope, trap/scouting capture maps, row semantics, and no-diagnosis/no-treatment boundaries.
- `V2_CATALOG_AUDIT.md`: source-first audit discipline and no-invention rule.
- `V2_S3_AUDIT_CONSOLIDATION.md`: current species closure and remaining source-check risks.

Runtime inventory extracted from `index.html` for this draft:

- `catalog_v1.action_window_definitions`: 223 rows.
- `catalog_v1.spray_safety_notes`: 7 rows.
- B2 projected source entries: 41 source rows.
- `TRAP_CAPTURE_SOURCES`: 8 rows.
- `SCOUTING_CAPTURE_SOURCES`: 10 rows.
- `B2_READONLY_GUIDANCE_BY_SOURCE_ROW`: 35 rendered guidance-note rows.
- `TRAP_ADVISORY_SOURCES`: 8 rendered trap advisory rows.

All date-bearing runtime/content rows are unresolved unless this ledger explicitly marks them otherwise.

## 7. Species Inventory

Current active species in `catalog_v1`:

| species | current group | REG-A-D scope |
|---|---|---|
| apple | pome | in scope |
| pear | pome | in scope |
| quince | pome | in scope |
| sweet_cherry | stone | in scope |
| sour_cherry | stone | in scope |
| plum | stone | in scope |
| peach | stone | in scope |
| nectarine | stone | in scope |
| apricot | stone | in scope |
| almond | stone / Mediterranean-relevant nut-like crop in app content | in scope |
| walnut | nut | in scope |
| hazelnut | nut | in scope |
| olive | Mediterranean | in scope and top research priority |
| pomegranate | Mediterranean | in scope and top research priority |

Deferred / not added by REG-A-D:

- fig
- citrus
- grape
- vegetables
- ornamentals
- any species not already active in `catalog_v1`

## 8. Ledger Disposition Values

Allowed values:

- `byte_equal_carry_forward`
- `regional_delta_source_backed`
- `unresolved_owner_decision`
- `out_of_scope_for_region`

No other values are allowed.

Draft disposition summary:

| disposition | current count | meaning in this draft |
|---|---:|---|
| `byte_equal_carry_forward` | 7 | Only same-country non-date `spray_safety_note` rows are byte-equal draft candidates. |
| `regional_delta_source_backed` | 0 | No source found in this session proves a complete HR Adriatic runtime row value. |
| `unresolved_owner_decision` | 325 | All date-bearing windows and rendered regional guidance rows require stronger evidence or owner decision. |
| `out_of_scope_for_region` | 0 | No active species or row is excluded yet. |

## 9. Complete Regional Ledger

This REG-A-D draft uses a verifier-expandable ledger model. Each row below is a ledger row family with explicit runtime anchor expansion. REG-A-R must not consume family rows directly; a future pack-aware verifier must expand the family rows to one runtime row per `window_def_id`, source row, guidance row, or safety note before activation.

Every expanded row must still carry the same fields:

```text
ledger_id
species
baseline_anchor
row_type
baseline_value_anchor
hr_adriatic_disposition
hr_adriatic_value
source_ids
carry_forward_basis
limitations
owner_decision_status
expected_runtime_anchor
```

### 9.1 Catalog Action-Window Ledger

| ledger_id | species | baseline_anchor | row_type | baseline_value_anchor | hr_adriatic_disposition | hr_adriatic_value | source_ids | carry_forward_basis | limitations | owner_decision_status | expected_runtime_anchor |
|---|---|---|---|---|---|---|---|---|---|---|---|
| HRAD-AW-STANDARD-TRUNK-WHITEWASH | apple, pear, quince, sweet_cherry, sour_cherry, plum, peach, nectarine, apricot, almond | `aw.<species>.trunk_whitewash` | action_window | 01-15 to 02-10; `other`; `Krečenje debla`; expands to 10 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | Needs HR Adriatic proof for each expanded species row or owner-approved carry-forward. | TODO_SOURCE_REQUIRED | expand against `catalog_v1.action_window_definitions` |
| HRAD-AW-STANDARD-OIL-DORMANT | apple, pear, quince, sweet_cherry, sour_cherry, plum, peach, nectarine, apricot, almond | `aw.<species>.oil.dormant` | action_window | 02-01 to 02-15; `oil`; expands to 10 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | Dormant timing is region-sensitive; no offsets allowed. | TODO_SOURCE_REQUIRED | expand against `catalog_v1.action_window_definitions` |
| HRAD-AW-STANDARD-COPPER-WINTER | apple, pear, quince, sweet_cherry, sour_cherry, plum, peach, nectarine, apricot, almond | `aw.<species>.copper.winter_protection` | action_window | 02-15 to 02-28; `copper`; expands to 10 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | Copper timing depends on dormancy/bud state and source-backed safety wording. | TODO_SOURCE_REQUIRED | expand against `catalog_v1.action_window_definitions` |
| HRAD-AW-STANDARD-PRUNING-WINTER | apple, pear, quince, sweet_cherry, sour_cherry, plum, peach, nectarine, apricot, almond | `aw.<species>.pruning.winter` | action_window | 03-01 to 03-15; `pruning`; expands to 10 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | Pruning timing is region-, crop-, and weather-sensitive. | TODO_SOURCE_REQUIRED | expand against `catalog_v1.action_window_definitions` |
| HRAD-AW-STANDARD-COPPER-PRUNING-WOUNDS | apple, pear, quince, sweet_cherry, sour_cherry, plum, peach, nectarine, apricot, almond | `aw.<species>.copper.pruning_wounds` | action_window | 03-01 to 03-20; `copper`; expands to 10 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | Needs source-backed wound/timing basis; no treatment prescription beyond label/safety. | TODO_SOURCE_REQUIRED | expand against `catalog_v1.action_window_definitions` |
| HRAD-AW-STANDARD-FERTILIZATION-EARLY-SPRING | apple, pear, quince, sweet_cherry, sour_cherry, plum, peach, nectarine, apricot, almond | `aw.<species>.fertilization.early_spring` | action_window | 03-01 to 04-15; `fertilization`; expands to 10 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-PEACH-SD-2026-03-26, SRC-HR-MPS-ISTRA-APPLE-OLIVE-2026-04-29 | - | Sources provide crop/date points, not all-species recurring HR Adriatic windows. | TODO_SOURCE_REQUIRED | expand against `catalog_v1.action_window_definitions` |
| HRAD-AW-STANDARD-PRUNING-SUMMER | apple, pear, quince, sweet_cherry, sour_cherry, plum, peach, nectarine, apricot, almond | `aw.<species>.pruning.summer` | action_window | 07-01 to 07-15; `pruning`; expands to 10 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | Needs crop-specific HR Adriatic proof; do not infer from continental baseline. | TODO_SOURCE_REQUIRED | expand against `catalog_v1.action_window_definitions` |
| HRAD-AW-STANDARD-IRRIGATION-SHUTDOWN | apple, pear, quince, sweet_cherry, sour_cherry, plum, peach, nectarine, apricot, almond | `aw.<species>.irrigation_shutdown` | action_window | 09-01 to 09-15; `other`; expands to 10 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | Region-sensitive and likely microclimate-sensitive; needs source or owner exclusion. | TODO_SOURCE_REQUIRED | expand against `catalog_v1.action_window_definitions` |
| HRAD-AW-STANDARD-WINTER-INSPECTION | apple, pear, quince, sweet_cherry, sour_cherry, plum, peach, nectarine, apricot, almond | `aw.<species>.winter_inspection` | action_window | 10-01 to 10-31; `other`; expands to 10 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | Could become carry-forward only with proof it is not region-sensitive. | TODO_SOURCE_REQUIRED | expand against `catalog_v1.action_window_definitions` |
| HRAD-AW-APPLE-SPECIFIC | apple | `aw.apple.*` excluding standard and harvest rows | action_window | post-bloom protection, fruitlet thinning, bird net; 3 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-APPLE-GUIDE-2025, SRC-HR-MPS-ISTRA-APPLE-OLIVE-2026-04-29 | - | Evidence captures apple practices and Istria post-bloom point but no full HR Adriatic runtime windows. | TODO_SOURCE_REQUIRED | expand `aw.apple.fungicide.post_bloom_scab_mildew`, `aw.apple.thinning.fruitlets`, `aw.apple.bird_net.pre_harvest` |
| HRAD-AW-PEAR-SPECIFIC | pear | `aw.pear.*` excluding standard and harvest rows | action_window | fire blight copper, post-bloom scab, thinning, bird net; 4 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | No HR Adriatic pear source sufficient for full windows. | TODO_SOURCE_REQUIRED | expand matching pear rows |
| HRAD-AW-QUINCE-SPECIFIC | quince | `aw.quince.*` excluding standard and harvest rows | action_window | fire blight copper, post-bloom protection, fruit-load check; 3 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | No HR Adriatic quince source sufficient for full windows. | TODO_SOURCE_REQUIRED | expand matching quince rows |
| HRAD-AW-SWEET-CHERRY-SPECIFIC | sweet_cherry | `aw.sweet_cherry.*` excluding standard and harvest rows | action_window | thinning, bird net; 2 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | Cherry fly/monilia guidance is inventoried separately; action windows still unresolved. | TODO_SOURCE_REQUIRED | expand matching sweet cherry rows |
| HRAD-AW-SOUR-CHERRY-SPECIFIC | sour_cherry | `aw.sour_cherry.*` excluding standard and harvest rows | action_window | bird net, thinning; 2 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | No HR Adriatic sour cherry source sufficient for full windows. | TODO_SOURCE_REQUIRED | expand matching sour cherry rows |
| HRAD-AW-PLUM-SPECIFIC | plum | `aw.plum.*` excluding standard and harvest rows | action_window | post-bloom protection, thinning, bird net; 3 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | Plum moth guidance is inventoried separately; action windows still unresolved. | TODO_SOURCE_REQUIRED | expand matching plum rows |
| HRAD-AW-PEACH-SPECIFIC | peach | `aw.peach.*` excluding standard and harvest rows | action_window | leaf curl copper, post-bloom monilia, thinning, bird net; 4 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-PEACH-SD-2026-03-26 | - | Split-Dalmatia source proves a 2026 bloom point, not full recurring windows. | TODO_SOURCE_REQUIRED | expand matching peach rows |
| HRAD-AW-NECTARINE-SPECIFIC | nectarine | `aw.nectarine.*` excluding standard and harvest rows | action_window | leaf curl copper, post-bloom monilia, thinning, bird net; 4 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | Do not copy peach source to nectarine without explicit support or owner decision. | TODO_SOURCE_REQUIRED | expand matching nectarine rows |
| HRAD-AW-APRICOT-SPECIFIC | apricot | `aw.apricot.*` excluding standard and harvest rows | action_window | pre-bloom copper, post-bloom monilia, thinning; 3 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | Apricot is region-sensitive and frost-sensitive; no HR Adriatic full window source. | TODO_SOURCE_REQUIRED | expand matching apricot rows |
| HRAD-AW-ALMOND-SPECIFIC | almond | `aw.almond.*` excluding standard and harvest rows | action_window | pre-bloom copper, leaf-curl copper, post-bloom protection; 3 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-ALMOND-GUIDE-2023 | - | Almond guide is a source lead, not enough exact timing evidence in this draft. | TODO_SOURCE_REQUIRED | expand matching almond rows |
| HRAD-AW-OLIVE-ACTION | olive | `aw.olive.*` excluding monitoring source rows | action_window, harvest_window | pruning, wound copper, fertilization, summer correction, harvest, winter inspection, post-harvest pruning; 7 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-OLIVE-DN-2026-05-27, SRC-HR-MPS-OLIVE-ZD-2026-06-01, SRC-HR-MPS-ISTRA-APPLE-OLIVE-2026-04-29, SRC-HR-MPS-OLIVE-DISEASES-2025 | - | Strongest HR Adriatic source cluster, but still no complete recurring runtime windows. | TODO_SOURCE_REQUIRED | expand matching olive rows |
| HRAD-AW-POMEGRANATE-ACTION | pomegranate | `aw.pomegranate.*` | action_window, harvest_window | pruning, fertilization, harvest, young-tree winter protection; 4 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | No reliable HR Adriatic pomegranate source found in this session. | TODO_SOURCE_REQUIRED | expand matching pomegranate rows |
| HRAD-AW-WALNUT-ACTION | walnut | `aw.walnut.*` excluding harvest rows | action_window | winter inspection; 1 row | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-WALNUT-DISEASES-2025 | - | Walnut guide supports pest context only; no HR Adriatic timing. | TODO_SOURCE_REQUIRED | expand matching walnut rows |
| HRAD-AW-HAZELNUT-ACTION | hazelnut | `aw.hazelnut.*` excluding harvest rows | action_window | winter pruning, winter inspection; 2 rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-HAZELNUT-GUIDE-2024 | - | Hazelnut guide supports crop context; HR Adriatic scope remains unresolved. | TODO_SOURCE_REQUIRED | expand matching hazelnut rows |
| HRAD-AW-VARIETY-HARVEST-APPLE | apple | `aw.apple.<variety>.harvest`, `aw.apple.fallback.<band>.harvest` | harvest_window, variety_fallback_window | 8 variety + 3 fallback rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-APPLE-GUIDE-2025 | - | No HR Adriatic variety harvest matrix found. | TODO_SOURCE_REQUIRED | expand matching apple harvest rows |
| HRAD-AW-VARIETY-HARVEST-STONE | sweet_cherry, sour_cherry, plum, peach, nectarine, apricot, almond | `aw.<species>.<variety>.harvest`, `aw.<species>.fallback.<band>.harvest` | harvest_window, variety_fallback_window | 55 rows across active stone/almond species | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-PEACH-SD-2026-03-26, SRC-HR-MPS-ALMOND-GUIDE-2023 | - | Harvest timing cannot be shifted from continental baseline; needs species/variety source matrix. | TODO_SOURCE_REQUIRED | expand matching harvest rows |
| HRAD-AW-VARIETY-HARVEST-POME-OTHER | pear, quince | `aw.<species>.<variety>.harvest`, `aw.<species>.fallback.<band>.harvest` | harvest_window, variety_fallback_window | 13 rows across pear/quince | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | No HR Adriatic pear/quince harvest source matrix found. | TODO_SOURCE_REQUIRED | expand matching harvest rows |
| HRAD-AW-VARIETY-HARVEST-NUTS | walnut, hazelnut | `aw.<species>.<variety>.harvest`, `aw.<species>.fallback.<band>.harvest` | harvest_window, variety_fallback_window | 10 rows across walnut/hazelnut | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-HAZELNUT-GUIDE-2024, SRC-HR-MPS-WALNUT-DISEASES-2025 | - | Hazelnut source supports harvest behavior, not HR Adriatic dates; walnut date evidence missing. | TODO_SOURCE_REQUIRED | expand matching harvest rows |

### 9.2 Rendered Monitoring / Risk / Guidance Ledger

| ledger_id | species | baseline_anchor | row_type | baseline_value_anchor | hr_adriatic_disposition | hr_adriatic_value | source_ids | carry_forward_basis | limitations | owner_decision_status | expected_runtime_anchor |
|---|---|---|---|---|---|---|---|---|---|---|---|
| HRAD-B2-SOURCE-ENTRIES | all species with B2 source rows | `B2_PROJECTION_BOUNDARY.source_entries[]` | monitoring_guidance, risk_awareness_guidance | 41 Plan Templates source rows; source-row windows from `B2_PROJECTION_SOURCE_WINDOWS` | unresolved_owner_decision | TODO_SOURCE_REQUIRED | see source-specific rows below | - | Each source row needs HR Adriatic source proof or explicit carry-forward. | TODO_SOURCE_REQUIRED | expand by B2 source row id |
| HRAD-B2-READONLY-GUIDANCE | all species with B2 guidance rows | `B2_READONLY_GUIDANCE_BY_SOURCE_ROW` | rendered_guidance_note | 35 rendered "Sto gledati" guidance rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | Visual-sign text may be region-insensitive, but this draft does not prove every row. | TODO_SOURCE_REQUIRED | expand by source row id |
| HRAD-B2-TRAP-CAPTURE | apple, sweet_cherry, sour_cherry, plum, olive, walnut | `TRAP_CAPTURE_SOURCES` | trap_guidance | 8 trap capture rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-OLIVE-DN-2026-05-27, SRC-HR-MPS-WALNUT-DISEASES-2025 | - | Trap windows and labels need source row proof; no thresholds as commands. | TODO_SOURCE_REQUIRED | expand by `source_entry_id` |
| HRAD-B2-SCOUTING-CAPTURE | apple, pear, nectarine, peach, plum, quince, walnut, hazelnut | `SCOUTING_CAPTURE_SOURCES` | scouting_guidance | 10 visual scouting rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-APPLE-GUIDE-2025, SRC-HR-MPS-HAZELNUT-GUIDE-2024, SRC-HR-MPS-WALNUT-DISEASES-2025 | - | Source evidence is partial; no diagnosis or treatment inference. | TODO_SOURCE_REQUIRED | expand by `source_entry_id` |
| HRAD-B2-TRAP-ADVISORY | apple, sweet_cherry, sour_cherry, plum, olive, walnut | `TRAP_ADVISORY_SOURCES` | trap_guidance | 8 rendered trap advisory rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-OLIVE-DN-2026-05-27, SRC-HR-MPS-WALNUT-DISEASES-2025 | - | Any numeric bands/advisory wording require source review and must remain non-prescriptive. | TODO_SOURCE_REQUIRED | expand by `source_entry_id` |
| HRAD-B2-OLIVE-MOTH | olive | source row 2440 / `olive_moth_scouting` | monitoring_guidance | baseline window 04-01 to 05-31 | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-OLIVE-DN-2026-05-27, SRC-HR-MPS-OLIVE-ZD-2026-06-01 | - | Sources prove late-May/early-June regional evidence points, not a full recurring window. | TODO_SOURCE_REQUIRED | source row 2440 |
| HRAD-B2-OLIVE-FLY | olive | source row 2455 / `olive_fly_sticky_trap_monitoring` | trap_guidance | baseline window 06-01 to 09-30 | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | Need HR Adriatic olive-fly monitoring source covering the full season. | TODO_SOURCE_REQUIRED | source row 2455 / `trap_source_2455` |
| HRAD-B2-OLIVE-PEACOCK-SPOT | olive | source row 2429 / `olive_peacock_spot_scouting` | scouting_guidance | baseline window 04-01 to 05-31 | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-OLIVE-DISEASES-2025 | - | Disease source supports relevance but not a complete regional scouting window. | TODO_SOURCE_REQUIRED | source row 2429 |
| HRAD-B2-PEACH-FENOLOGY | peach | source rows 1049, 1079, 1228 | monitoring_guidance | baseline windows 04-15 to 07-31 and 05-01 to 08-31 | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-PEACH-SD-2026-03-26 | - | Source proves bloom point and fertilization context, not pest/disease monitoring windows. | TODO_SOURCE_REQUIRED | source rows 1049, 1079, 1228 |
| HRAD-B2-POMEGRANATE | pomegranate | source rows 2779, 2795 | monitoring_guidance, risk_awareness_guidance | pest scouting 05-01 to 08-31; cracking awareness 08-01 to 10-15 | unresolved_owner_decision | TODO_SOURCE_REQUIRED | TODO_SOURCE_REQUIRED | - | No reliable HR Adriatic pomegranate source found in this session. | TODO_SOURCE_REQUIRED | source rows 2779, 2795 |
| HRAD-B2-HAZELNUT | hazelnut | source rows 3089, 3160, 3188 | risk_awareness_guidance, scouting_guidance | bloom frost, weevil, bud mite rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-HAZELNUT-GUIDE-2024 | - | Source supports crop context and harvest behavior, not HR Adriatic monitoring windows. | TODO_SOURCE_REQUIRED | source rows 3089, 3160, 3188 |
| HRAD-B2-WALNUT | walnut | source rows 2949, 2977 | trap_guidance, scouting_guidance | walnut fly and codling moth rows | unresolved_owner_decision | TODO_SOURCE_REQUIRED | SRC-HR-MPS-WALNUT-DISEASES-2025 | - | Source supports codling moth relevance but not regional trap timing. | TODO_SOURCE_REQUIRED | source rows 2949, 2977 |

### 9.3 Spray Safety Ledger

| ledger_id | species | baseline_anchor | row_type | baseline_value_anchor | hr_adriatic_disposition | hr_adriatic_value | source_ids | carry_forward_basis | limitations | owner_decision_status | expected_runtime_anchor |
|---|---|---|---|---|---|---|---|---|---|---|---|
| HRAD-SAFE-01 | all_supported_species | `catalog_v1.spray_safety_notes[0]` | spray_safety_note | Bakar and mineral oil are not same-day operations. | byte_equal_carry_forward | byte-equal to `catalog_v1.spray_safety_notes[0]` | `REGIONALIZATION_DECISION_RECORD.md` §8 | Same-country non-date safety note; no regional calendar value. | Recheck if future text adds region-specific legal/product wording. | approved_for_dossier_draft | `catalog_v1.spray_safety_notes[0]` |
| HRAD-SAFE-02 | all_supported_species | `catalog_v1.spray_safety_notes[1]` | spray_safety_note | Keep separation between copper and mineral oil. | byte_equal_carry_forward | byte-equal to `catalog_v1.spray_safety_notes[1]` | `REGIONALIZATION_DECISION_RECORD.md` §8 | Same-country non-date safety note; no regional calendar value. | Recheck if future text adds region-specific legal/product wording. | approved_for_dossier_draft | `catalog_v1.spray_safety_notes[1]` |
| HRAD-SAFE-03 | all_supported_species | `catalog_v1.spray_safety_notes[2]` | spray_safety_note | Spray only in dry/calm suitable weather. | byte_equal_carry_forward | byte-equal to `catalog_v1.spray_safety_notes[2]` | `REGIONALIZATION_DECISION_RECORD.md` §8 | Same-country non-date safety note; no regional calendar value. | Recheck if future text adds region-specific legal/product wording. | approved_for_dossier_draft | `catalog_v1.spray_safety_notes[2]` |
| HRAD-SAFE-04 | all_supported_species | `catalog_v1.spray_safety_notes[3]` | spray_safety_note | Avoid insecticides during bloom / active bee flight. | byte_equal_carry_forward | byte-equal to `catalog_v1.spray_safety_notes[3]` | `REGIONALIZATION_DECISION_RECORD.md` §8 | Same-country non-date safety note; no regional calendar value. | Recheck if future text adds region-specific legal/product wording. | approved_for_dossier_draft | `catalog_v1.spray_safety_notes[3]` |
| HRAD-SAFE-05 | all_supported_species | `catalog_v1.spray_safety_notes[4]` | spray_safety_note | Mixing fungicide/insecticide is not universally safe; label/local instructions win. | byte_equal_carry_forward | byte-equal to `catalog_v1.spray_safety_notes[4]` | `REGIONALIZATION_DECISION_RECORD.md` §8 | Same-country non-date safety note; no regional calendar value. | Recheck if future text adds region-specific legal/product wording. | approved_for_dossier_draft | `catalog_v1.spray_safety_notes[4]` |
| HRAD-SAFE-06 | all_supported_species | `catalog_v1.spray_safety_notes[5]` | spray_safety_note | Apricot copper timing must be before bloom. | byte_equal_carry_forward | byte-equal to `catalog_v1.spray_safety_notes[5]` | `REGIONALIZATION_DECISION_RECORD.md` §8 | Same-country non-date safety note; no regional calendar value. | It contains phenology wording; future source review should confirm before activation. | approved_for_dossier_draft | `catalog_v1.spray_safety_notes[5]` |
| HRAD-SAFE-07 | all_supported_species | `catalog_v1.spray_safety_notes[6]` | spray_safety_note | Peach/nectarine leaf-curl copper requires closed buds. | byte_equal_carry_forward | byte-equal to `catalog_v1.spray_safety_notes[6]` | `REGIONALIZATION_DECISION_RECORD.md` §8 | Same-country non-date safety note; no regional calendar value. | It contains phenology wording; future source review should confirm before activation. | approved_for_dossier_draft | `catalog_v1.spray_safety_notes[6]` |

## 10. Carry-Forward Rule

Byte-equal carry-forward is allowed only if proven.

A row may be `byte_equal_carry_forward` only if:

- a source supports the same HR Adriatic treatment/window, or
- the row is demonstrably not region-sensitive, or
- the active decision record explicitly allows same-country byte-equal carry-forward for that row type.

If not proven, the disposition must be `unresolved_owner_decision`.

Carry-forward proof must include:

- original baseline anchor
- exact HR Adriatic candidate value
- byte-equality statement
- source or decision-record basis
- limitation statement
- owner-decision status

No cross-country carry-forward is allowed. No formula, offset, or generated shift can be a carry-forward basis.

## 11. Regional Delta Rule

`regional_delta_source_backed` requires complete source-backed evidence for the value that would later enter runtime.

For a date-bearing row, the source must support the actual HR Adriatic open/close window or the owner must explicitly approve a conservative mapping from multiple source-backed points. A one-day advisory snapshot can be recorded as evidence but must not become a recurring runtime date range by itself.

For monitoring or risk-awareness rows, the source must support:

- crop/species
- HR Adriatic region or climate relevance
- timing or phenology claim
- what the app will render
- limitations

No regional delta can include:

- product dose
- treatment prescription
- diagnosis
- pressure/severity command
- legal plant-protection instruction
- weather-triggered command
- AI-generated agronomic text
- computed shift from HR continental baseline

## 12. Unresolved Row Policy

Unresolved rows block REG-A-R activation.

Unresolved rows must not be guessed.

Unresolved rows must not be shifted by climate intuition.

Unresolved rows must not be generated by AI.

Unresolved rows require source evidence, owner decision, or explicit exclusion.

If a row stays unresolved after source research, the owner must choose one:

- keep researching
- approve a documented same-country byte-equal carry-forward if allowed
- approve a source-backed regional delta
- mark the row `out_of_scope_for_region`
- reduce the activation scope so the row cannot enter runtime

REG-A-R cannot proceed with unresolved runtime rows.

## 13. Rejected / Context-Only Sources

| source | reason |
|---|---|
| Wikipedia pomegranate page | Context only; not accepted as HR Adriatic agronomic evidence. |
| General commercial/nursery pages encountered during search | Not used because they were not institutional and could drift into variety marketing rather than regional timing evidence. |
| UC ANR stormwater mosquito PDF accidentally opened during pomegranate source search | Rejected as irrelevant to fruit-crop dossier. |
| Current-season single-county advisories | Accepted as evidence points only; rejected as full recurring runtime windows unless corroborated. |

## 14. Forbidden Claims

Forbidden in this dossier and any future runtime projection:

- product dose
- treatment prescription
- diagnosis
- guaranteed disease/pest control
- compliance pressure
- legal plant-protection instruction
- weather-triggered command
- AI-generated agronomic advice
- formula offset
- computed regional shift
- "Adriatic equals earlier by N days"
- "same as continental" without proof

## 15. Verifier Anchors

Future pack-aware verifier must prove:

- every runtime row maps to exactly one expanded dossier ledger row
- every regional date has citation or byte-equal proof
- every disposition value is valid
- byte-equal rows are actually byte-equal
- regional-delta rows cite approved sources
- unresolved rows cannot enter runtime
- canonical catalog data is JSON-compatible
- no remote/backend/service-worker authority exists
- no HR continental behavior changes
- existing plants remain untouched
- unknown country/region/catalog fails closed
- `contentPack` and `pack_version` remain forbidden persisted keys
- `manifest.json` and `sw.js` are not pack authority
- no runtime row is created from formulas, offsets, generated shifts, or AI agronomic content

Dossier-specific verifier anchors:

- `V2_PACK_HR_ADRIATIC.md## 4. Source Corpus`
- `V2_PACK_HR_ADRIATIC.md## 8. Ledger Disposition Values`
- `V2_PACK_HR_ADRIATIC.md## 9. Complete Regional Ledger`
- `V2_PACK_HR_ADRIATIC.md## 10. Carry-Forward Rule`
- `V2_PACK_HR_ADRIATIC.md## 11. Regional Delta Rule`
- `V2_PACK_HR_ADRIATIC.md## 12. Unresolved Row Policy`
- `V2_PACK_HR_ADRIATIC.md## 14. Forbidden Claims`

## 16. Owner Decisions

Captured working decisions:

- Dossier filename: `V2_PACK_HR_ADRIATIC.md`.
- Future runtime id already authorized in active docs: `hr.adriatic`.
- Working display label: `Jadranska Hrvatska (obala i otoci)`.
- Working region scope: Croatian Adriatic coast + islands.
- Working first-baseline assumption: one HR Adriatic baseline covering coast + islands.
- Species inventory: all active `catalog_v1` species.

Open owner decisions before REG-A-R:

- Confirm whether Istria, Kvarner, Dalmatia, and islands can remain one activation scope.
- Decide whether any active species is excluded from first HR Adriatic activation.
- Approve or reject byte-equal carry-forward for any non-date guidance rows beyond spray safety notes.
- Approve the Tier-A source corpus required to resolve date-bearing rows.
- Decide whether advisory snapshots can be combined into conservative date windows, and under what evidence threshold.
- Decide whether pomegranate remains in the first activation scope if Croatian HR Adriatic source evidence remains sparse.

## 17. Activation Readiness Checklist

- [x] Dossier file created.
- [x] Status clearly says this is not runtime content and does not activate HR Adriatic.
- [x] Active species inventory captured.
- [x] Source corpus begun with Croatian institutional sources.
- [x] Ledger disposition values locked.
- [x] Carry-forward rule documented.
- [x] Regional delta rule documented.
- [x] Unresolved row policy documented.
- [x] Forbidden claims documented.
- [x] Future verifier anchors documented.
- [ ] Every date-bearing runtime row has source-backed HR Adriatic value or byte-equal proof.
- [ ] Every monitoring/risk/rendered guidance row has source-backed HR Adriatic treatment or carry-forward proof.
- [ ] Owner has resolved Istria/Kvarner/Dalmatia/islands split risk.
- [ ] Future pack-aware verifier exists and passes.
- [ ] REG-A-R is explicitly opened by owner.

## 18. Research Backlog

Tier-A source research needed before activation:

1. Olive HR Adriatic recurring windows: pruning, wound copper context, spring fertilization, olive moth, olive fly, peacock spot, irrigation, harvest, post-harvest pruning, winter inspection.
2. Pomegranate HR Adriatic source corpus: pruning, fertilization, pest scouting, fruit-cracking risk, irrigation, harvest, young-tree winter protection.
3. Almond Dalmatia/Istria/Kvarner evidence: bloom/frost risk, pre-bloom copper context, post-bloom disease/pest monitoring, harvest by cultivar/fallback.
4. Peach/nectarine HR Adriatic recurring phenology and harvest matrix: leaf curl closed-bud timing, bloom/post-bloom, thinning, bird net, fruit moth/aphid/disease monitoring, cultivar harvest.
5. Apricot HR Adriatic bloom/frost and harvest matrix.
6. Sweet/sour cherry HR Adriatic fly/monilia/cracking/bird-net/harvest evidence.
7. Plum HR Adriatic moth generations, sharka/aphid/monilia, thinning, bird-net, harvest evidence.
8. Apple/pear/quince HR Adriatic pome evidence, especially post-bloom disease, fire blight, thinning, bird-net, and cultivar harvest.
9. Walnut/hazelnut HR Adriatic scope decision: include, source, or explicitly exclude from first activation.
10. Source-corpus quality pass: reject commercial/SEO sources unless limited to variety context.

## 19. Change Log

| date | change |
|---|---|
| 2026-06-17 | Created REG-A-D draft dossier with source corpus, ledger model, unresolved-row policy, verifier anchors, and research backlog. |
