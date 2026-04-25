# V2 VARIETY CANDIDATE MATRIX DRAFT — PRE-S3

## Status

Draft decision-support input.

This document is not authoritative V2 truth, not schema, not runtime behavior, not implementation, and not an edit to `V2_PLANT_CATALOG.md` or `V2_ORCHARD_PLAN_TEMPLATES.md`.

This matrix is decision-support input only. It does not authorize any catalog change.

Reading rules — binding on every future agent and curator:

- No variety in this matrix is approved for catalog insertion under any circumstance based on this document alone.
- `ADD NOW` means "highest-priority owner review candidate". It is not permission to edit `V2_PLANT_CATALOG.md`. It is not an instruction to add now.
- Per `V2_VARIETY_COVERAGE_POLICY.md` §8, `ADD NOW` requires explicit owner approval before it has any force.
- Owner approval must be explicit, recorded, and per-row. A blanket approval of this matrix is not per-row approval.
- After per-row owner approval, S3 must still source-validate timing, naming, disease-resistance claims, regional suitability, and catalog impact before any catalog edit.
- The final canonical catalog key for any candidate is decided during S3, not in this matrix. The `Proposed key` column is a draft suggestion only.
- No external source verification was performed for this draft. Rows marked `Source need: yes` require S3 or owner source validation before any promotion.
- `V2_PLANT_CATALOG.md` and `V2_ORCHARD_PLAN_TEMPLATES.md` remain stabilized Pre-S3 input per `V2_CATALOG_AUDIT.md` (Pre-S3 input stabilization checkpoint). Do not edit them based on this matrix.

---

## 1. Purpose

This draft gives the owner and S3 audit a single review surface for variety expansion decisions. It preserves the stabilized catalog as input, compares the current catalog against candidate varieties, and classifies each candidate as a possible addition, deferral, rejection, S3 audit item, or owner decision.

This draft does not add, remove, rename, or restructure catalog entries.

---

## 2. Decision rules used

- Use `V2_VARIETY_COVERAGE_POLICY.md` as the governing policy for variety decisions.
- Keep the catalog curated; do not add a variety only because it exists.
- Weight paid-market relevance first: Austria, Germany, Switzerland, Italy, France.
- Preserve local validation relevance: Croatia, Slovenia, Bosnia and Herzegovina, Serbia, Kosovo.
- Keep current user-owned or user-planned varieties unless the owner explicitly removes them.
- Prefer timing-band coverage, common nursery/commercial relevance, hobby relevance, disease-aware value, and regional importance.
- Avoid synonym clutter unless the alias itself is a regional or product decision.
- Do not restructure citrus identity, rename groups, alter fallback timing, or introduce schema/runtime behavior in variety work.
- Use `ADD NOW` sparingly; most uncertain candidates should remain `OWNER DECISION`, `S3 AUDIT ITEM`, or `DEFER`.

---

## 3. Current catalog coverage summary

| Species / subtype | Current count | Current varieties / subtypes | Current model | Obvious gap |
|---|---:|---|---|---|
| apple | 6 | Gala, Golden Delicious, Jonagold, Fuji, Granny Smith, Idared | variety timing with early/mid/late fallback | Possible gap in disease-aware coverage; early band may rely on fallback unless an early variety is added — both claims need S3 review |
| pear | 5 | Santa Maria, Williams, Conference, Bosc's Bottle, Abate Fetel | variety timing with early/mid/late fallback | Alias/naming cleanup for Bosc/Kaiser; possible paid-market dessert pears |
| quince | 3 | Leskovacka, Vranjska, Champion | variety timing with mid/late fallback | Small but probably acceptable; possible Central European aliases need S3 |
| sweet_cherry | 5 | Burlat, Kordia, Lapins, Regina, Sweetheart | variety timing with early/mid/late fallback | Some classic pollination/market varieties absent |
| sour_cherry | 3 | Oblacinska, Marasca, Montmorency | variety timing with early/mid/late fallback | Naming gap around Morello/Schattenmorelle and Central European sour cherries |
| plum | 5 | Cacanska rana, Cacanska lepotica, Cacanska najbolja, Stanley, Prezident | variety timing with early/mid/late fallback | Heritage/local plum Bistrica/Pozegaca absent; German prune-plum naming (Hauszwetsche / Hauspflaume) is an open alias question — defer to S3 |
| peach | 5 | Springcrest, Redhaven, Royal Glory, Fayette, O'Henry | variety timing with early/mid/late fallback | Reasonable base; specialty/regional types may bloat catalog |
| nectarine | 5 | Caldesi 2000, Big Top, Fantasia, Stark Redgold, Venus | variety timing with early/mid/late fallback | Reasonable base; specialty white/high-flavor entries need market proof |
| apricot | 5 | Novosadska rodna, Kioto, Goldrich, Hargrand, Bergeron | variety timing with early/mid/late fallback | Regional classic Magyar/Madarska candidate absent; frost/bloom claims need S3 |
| almond | 3 | Ferragnes, Ferraduel, Supernova | variety timing with mid/late fallback | Small set; self-fertile and Spanish/Italian/US candidates need owner strategy |
| olive | 0 | no varieties | no-variety mediterranean seasonProfile | Variety model may remain out of scope unless owner wants cultivar UX |
| fig | 0 | no varieties | no-variety mediterranean seasonProfile | Variety model may remain out of scope; crop-type modeling is premature |
| pomegranate | 0 | no varieties | no-variety mediterranean seasonProfile | Variety model may remain out of scope; hardiness/regional evidence needed |
| walnut | 3 | Chandler, Franquette, Sejnovo | variety timing with mid/late fallback | Paid-market and cold-climate cultivars likely underrepresented |
| hazelnut | 3 | Istarski dugi, Tonda di Giffoni, Ennis | variety timing with mid/late fallback | Local and paid-market pollination/industry cultivars likely underrepresented |
| lemon | subtype only | citrus subtype: lemon | subtype seasonProfile: multi_cycle; no variety selection | Keep subtype-only unless owner wants citrus cultivar depth |
| orange | subtype only | citrus subtype: orange | subtype seasonProfile: winter; no variety selection | Keep subtype-only unless owner wants citrus cultivar depth |
| mandarin | subtype only | citrus subtype: mandarin | subtype seasonProfile: autumn; no variety selection | Satsuma/Unshiu naming may matter if citrus varieties are ever modeled |

---

## 4. Candidate matrix by species

### apple

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current set: Gala, Golden Delicious, Jonagold, Fuji, Granny Smith, Idared | Topaz | disease-aware candidate | high | medium | late | Strong disease-aware and Central European candidate; fills a strategic gap beyond dessert-market standards | Resistance, harvest timing, and regional fit must be source-validated; Source need + medium confidence keeps this below ADD NOW threshold per policy §8. | topaz | S3 AUDIT ITEM | medium | yes |
| same current set | Elstar | paid-market candidate | high | medium | early | Common paid-market apple candidate; could help early-season coverage | May overlap with existing mid-market dessert apples; timing needs validation | elstar | OWNER DECISION | medium | yes |
| same current set | Braeburn | paid-market candidate | high | low | late | Recognizable commercial variety in paid markets | May be climate/site-sensitive and redundant with late dessert apples | braeburn | S3 AUDIT ITEM | medium | yes |
| same current set | Boskoop | regional candidate | medium | medium | late | Traditional Central European cooking/storage apple | Niche use case; may not justify UX space unless owner values heritage/cooking types | boskoop | OWNER DECISION | medium | yes |
| same current set | Pinova | paid-market candidate | high | medium | late | Modern Central European market candidate; useful for paid-market breadth | Could duplicate existing late dessert/storage coverage | pinova | OWNER DECISION | medium | yes |
| same current set | Red Delicious | variety | medium | low | late | Globally recognizable name | Lower strategic value; may add catalog bloat without better regional usefulness | red_delicious | DO NOT ADD | medium | yes |
| same current set | Pink Lady / Cripps Pink | synonym / alias | high | low | late | High consumer recognition in paid markets | Trademark/cultivar naming issue; climate and legal naming need source/owner decision | cripps_pink | S3 AUDIT ITEM | medium | yes |
| same current set | Cox Orange / Cox's Orange Pippin | synonym / alias | medium | low | mid | Classic dessert apple; may matter in DE/CH/FR/UK-adjacent nursery context | Specialty/heritage candidate; alias handling could clutter UX | coxs_orange_pippin | DEFER | low | yes |
| same current set | Rubinette | paid-market candidate | medium | low | mid | Premium hobby/market candidate with Central European relevance | Specialty candidate; may be too narrow before S3 | rubinette | DEFER | low | yes |
| same current set | Florina | disease-aware candidate | medium | medium | late | Disease-aware candidate that may support low-input orchard positioning | Disease/resistance and market relevance require sources | florina | S3 AUDIT ITEM | low | yes |

### pear

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current set: Santa Maria, Williams, Conference, Bosc's Bottle, Abate Fetel | Clapp's Favourite | variety | medium | medium | early | Classic early pear candidate; could strengthen early coverage | Older/specialty variety; market relevance needs validation | clapps_favourite | OWNER DECISION | medium | yes |
| same current set | Lukasova | regional candidate | low | high | winter | Regional/legacy pear candidate useful for Balkan validation | Naming, availability, and timing require S3 validation | lukasova | S3 AUDIT ITEM | low | yes |
| same current set | Packham's Triumph | paid-market candidate | medium | low | late | Recognizable export/dessert pear candidate | May not be central to target EU nursery/continental use | packhams_triumph | DEFER | medium | yes |
| same current set | Doyenne du Comice | paid-market candidate | medium | low | late | Premium dessert pear candidate for paid-market breadth | Specialty/cultivation timing requires validation; may overlap Abate Fetel | doyenne_du_comice | OWNER DECISION | low | yes |
| same current set | Kaiser / Bosc naming issue | synonym / alias | medium | medium | not applicable | Current catalog has Bosc's Bottle; alias handling may improve user recognition | Do not duplicate Bosc under Kaiser; decide display alias only after S3 | boscs_bottle | S3 AUDIT ITEM | medium | yes |
| same current set | Guyot | variety | medium | low | early | Early French pear candidate; could support paid-market coverage | May be redundant with Williams/Santa Maria; source needed | guyot | DEFER | low | yes |
| same current set | Beurre Hardy | variety | medium | low | mid | Traditional pear with paid-market/hobby relevance | Specialty variety; source and naming accents need validation | beurre_hardy | DEFER | low | yes |

### quince

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current set: Leskovacka, Vranjska, Champion | Bereczki | regional candidate | medium | medium | late | Central European quince candidate; could broaden a small set | Secondary species; add only if owner wants more quince depth | bereczki | OWNER DECISION | low | yes |
| same current set | Portugal | variety | medium | low | unknown | Known quince candidate in broader European contexts | Naming may be generic; timing and local relevance uncertain | portugal | DEFER | low | yes |
| same current set | Konstantinopler / Constantinople | synonym / alias | low | medium | unknown | Alias/naming decision may matter for regional users | Potential duplicate/generic naming; source validation required | konstantinopler | S3 AUDIT ITEM | source needed | yes |
| same current set | Meech's Prolific | variety | low | low | unknown | Hobby-orchard quince candidate | Too niche before S3; weak paid/local rationale | meechs_prolific | DO NOT ADD | low | yes |

### sweet_cherry

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current set: Burlat, Kordia, Lapins, Regina, Sweetheart | Van | variety | medium | medium | mid | Classic sweet cherry; may support pollination/market familiarity | Current set is already strong; avoid adding without clear source-backed need | van | OWNER DECISION | medium | yes |
| same current set | Summit | variety | medium | medium | mid | Commercial/hobby cherry candidate | Timing and regional value need validation | summit | DEFER | low | yes |
| same current set | Stella | variety | medium | medium | mid | Recognizable self-fertile hobby candidate | May overlap Lapins/Sweetheart; source pollination claims needed | stella | OWNER DECISION | medium | yes |
| same current set | Hedelfinger | regional candidate | medium | medium | late | Central European traditional cherry candidate | Naming/timing and commercial relevance require S3 | hedelfinger | S3 AUDIT ITEM | low | yes |
| same current set | Napoleon | variety | low | medium | mid | Traditional cherry candidate; possible local/hobby recognition | Name may be ambiguous; likely bloat unless owner wants heritage entries | napoleon | DO NOT ADD | low | yes |
| same current set | Germersdorfer | regional candidate | medium | medium | late | Regional Central European cherry candidate | Alias/naming and timing need validation | germersdorfer | S3 AUDIT ITEM | low | yes |
| same current set | Ferrovia | regional candidate | high | medium | late | Important Italian/Balkan market candidate; could strengthen paid/local bridge | Timing and regional availability need source validation | ferrovia | OWNER DECISION | medium | yes |

### sour_cherry

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current set: Oblacinska, Marasca, Montmorency | Kelleris | regional candidate | medium | medium | mid | Common sour cherry candidate in European hobby/commercial contexts | Timing and local-market importance need validation | kelleris | OWNER DECISION | medium | yes |
| same current set | Schattenmorelle | paid-market candidate | high | medium | late | Strong German-market sour cherry candidate; likely relevant to paid markets | Must decide relationship to Morello naming | schattenmorelle | S3 AUDIT ITEM | medium | yes |
| same current set | Morello as generic naming issue | synonym / alias | high | medium | not applicable | User-facing alias may be needed for German/English recognition | Do not create duplicate if Morello is generic or alias of Schattenmorelle | morello_alias | S3 AUDIT ITEM | medium | yes |
| same current set | Erdi botermo | regional candidate | medium | medium | mid | Hungarian/Central European sour cherry candidate | Diacritics, timing, and exact name need validation | erdi_botermo | S3 AUDIT ITEM | source needed | yes |
| same current set | North Star | variety | low | low | mid | Hobby cold-hardy candidate | Weak paid/local fit; likely catalog bloat | north_star | DO NOT ADD | low | yes |
| same current set | Rexelle | variety | low | low | unknown | Possible sour cherry candidate | Unclear relevance; source needed before even deferring | rexelle | DO NOT ADD | source needed | yes |

### plum

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current set: Cacanska rana, Cacanska lepotica, Cacanska najbolja, Stanley, Prezident | Bistrica / Pozegaca | synonym / alias | medium | high | late | Strong local/regional heritage plum; omission may weaken Balkan validation | Alias must be resolved (canonical key) before any promotion; exact timing requires S3 validation; avoid duplicate names | bistrica | OWNER DECISION | medium | yes |
| same current set | Hauszwetsche / Hauspflaume | synonym / alias | high | medium | late | German/Austrian prune-plum concept relevant to paid markets | Could be cultivar group rather than single variety; avoid unclear key | hauszwetsche | S3 AUDIT ITEM | medium | yes |
| same current set | Hanita | paid-market candidate | high | medium | late | Modern Central European plum candidate | Timing and market relevance need source validation | hanita | OWNER DECISION | medium | yes |
| same current set | Valjevka | regional candidate | medium | high | late | Regional plum candidate that complements Cacanska entries | May duplicate local plum niche; source needed | valjevka | OWNER DECISION | low | yes |
| same current set | Jojo | disease-aware candidate | medium | medium | late | Disease-aware plum candidate; possible sharka-resistance value | Resistance claims require strong sources; do not add on hearsay | jojo | S3 AUDIT ITEM | low | yes |
| same current set | Top / Top Taste | synonym / alias | medium | low | unknown | Possible modern plum candidate | Naming appears ambiguous; likely not ready for catalog | top_taste | S3 AUDIT ITEM | source needed | yes |
| same current set | Reine Claude / Green Gage | synonym / alias | high | medium | mid | Well-known European gage plum group; useful for paid-market recognition | May be group, not one cultivar; alias handling required | reine_claude | OWNER DECISION | medium | yes |
| same current set | Mirabelle de Nancy | paid-market candidate | high | low | mid | Important French/German specialty plum candidate | Specialty use; could bloat catalog before core gaps are solved | mirabelle_de_nancy | DEFER | medium | yes |

### peach

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current set: Springcrest, Redhaven, Royal Glory, Fayette, O'Henry | Suncrest | variety | medium | medium | late | Classic peach candidate; may strengthen late coverage | Current peach set already covers timing; source needed | suncrest | OWNER DECISION | medium | yes |
| same current set | Cresthaven | variety | medium | medium | late | Recognizable late peach candidate | May overlap O'Henry/Fayette; verify market relevance | cresthaven | DEFER | medium | yes |
| same current set | Veteran | regional candidate | low | medium | late | Hardy/traditional candidate for continental hobby orchards | Weak paid-market fit; source needed | veteran | DEFER | low | yes |
| same current set | Dixired | variety | medium | low | early | Early peach candidate | Early coverage already has Springcrest/Redhaven | dixired | DO NOT ADD | low | yes |
| same current set | Elegant Lady | paid-market candidate | medium | low | mid | Commercial peach candidate | Paid-market relevance uncertain for target regions; possible bloat | elegant_lady | DEFER | low | yes |
| same current set | Weinbergpfirsich / vineyard peach | regional candidate | medium | low | mid | German/Austrian specialty type with product/story value | May be type/group, not catalog variety; source and UX decision needed | weinbergpfirsich | S3 AUDIT ITEM | low | yes |

### nectarine

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current set: Caldesi 2000, Big Top, Fantasia, Stark Redgold, Venus | Flavortop | variety | medium | medium | mid | Recognizable nectarine candidate; could broaden mid-season | Current set already adequate; source needed | flavortop | OWNER DECISION | medium | yes |
| same current set | Independence | variety | low | low | early | Older nectarine candidate | Weak paid/local rationale; likely bloat | independence | DO NOT ADD | low | yes |
| same current set | Nectared | variety | low | low | unknown | Possible nectarine candidate | Unclear exact cultivar and market relevance | nectared | DO NOT ADD | source needed | yes |
| same current set | Snow Queen | variety | medium | low | mid | White nectarine candidate; could diversify UX | Specialty candidate; not needed before S3 | snow_queen | DEFER | low | yes |
| same current set | Silver King | variety | low | low | unknown | Possible specialty nectarine | Too unclear for curated catalog | silver_king | DO NOT ADD | source needed | yes |
| same current set | Honey Royale | paid-market candidate | medium | low | mid | Premium-flavor market candidate | Specialty/branding risk; source and availability needed | honey_royale | DEFER | low | yes |

### apricot

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current set: Novosadska rodna, Kioto, Goldrich, Hargrand, Bergeron | Madarska najbolja / Magyar kajszi | synonym / alias | medium | high | mid | Strong regional apricot candidate; likely important for local validation | Alias must be resolved (canonical key) before any promotion; bloom/frost timing and exact alias handling require S3 | madarska_najbolja | OWNER DECISION | medium | yes |
| same current set | Keckemetska ruza | regional candidate | medium | high | mid | Regional apricot candidate with local/hobby relevance | Name, timing, and source-backed regional value needed | keckemetska_ruza | OWNER DECISION | low | yes |
| same current set | Orange Red / Bhart / Orangered | synonym / alias | high | medium | mid | Modern market apricot candidate; could strengthen paid-market relevance | Alias/trademark naming, timing, and climate fit need source validation | orangered | S3 AUDIT ITEM | medium | yes |
| same current set | Luizet | regional candidate | medium | low | mid | Alpine/French-Swiss heritage candidate | Specialty candidate; not needed before S3 | luizet | DEFER | low | yes |
| same current set | Harcot | disease-aware candidate | medium | medium | early | Modern cold-region/hobby candidate | Disease/hardiness claims require sources | harcot | S3 AUDIT ITEM | low | yes |
| same current set | Robada | paid-market candidate | medium | low | early | Commercial apricot candidate | Paid-market relevance for target regions uncertain | robada | DEFER | low | yes |
| same current set | Faralia / Farbaly | synonym / alias | medium | low | late | Late apricot candidate could improve late-season coverage | Naming/brand line and regional suitability need validation | faralia_or_farbaly | S3 AUDIT ITEM | source needed | yes |

### almond

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current set: Ferragnes, Ferraduel, Supernova | Tuono | regional candidate | high | medium | mid | Important Italian/self-fertile-style candidate; may strengthen warm-climate relevance | Self-fertility and bloom timing require sources | tuono | OWNER DECISION | medium | yes |
| same current set | Lauranne | paid-market candidate | high | medium | mid | Modern European almond candidate | Need source-backed bloom/frost and nursery relevance | lauranne | OWNER DECISION | medium | yes |
| same current set | Marcona | paid-market candidate | high | low | late | High-recognition Mediterranean market almond | May be food-market famous but not local orchard fit | marcona | DEFER | medium | yes |
| same current set | Nonpareil | paid-market candidate | medium | low | mid | Globally recognized almond standard | US-centric relevance may not justify EU hobby catalog | nonpareil | DEFER | medium | yes |
| same current set | Texas | variety | medium | low | late | Pollinizer/market candidate in some almond contexts | Name ambiguity and local relevance need source validation | texas | S3 AUDIT ITEM | low | yes |
| same current set | Guara | paid-market candidate | medium | low | mid | Spanish self-fertile almond candidate | Paid-market relevance to target countries uncertain | guara | DEFER | low | yes |
| same current set | Penta | paid-market candidate | medium | low | late | Late-bloom/self-fertile-style candidate could matter for frost risk | Claims require sources; secondary species | penta | S3 AUDIT ITEM | low | yes |
| same current set | Vairo | paid-market candidate | medium | low | mid | Modern Spanish almond candidate | Too specialized before owner scope decision | vairo | DEFER | low | yes |

### olive

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current model: no varieties; mediterranean seasonProfile | keep no-variety model | no-variety model | medium | high | not applicable | Current catalog deliberately avoids olive variety timing; keeps scope stable | Owner may later want cultivar UX for coastal/Croatian validation | olive_no_variety_model | OWNER DECISION | n/a (model decision) | no |
| same current model | Oblica | regional candidate | low | high | not applicable | Strong Croatian/local olive candidate if owner adds olive varieties | Would require cultivar-specific timing and region handling | oblica | S3 AUDIT ITEM | medium | yes |
| same current model | Leccino | paid-market candidate | high | medium | not applicable | Common Italian/international olive candidate | Adding one olive variety implies broader cultivar model | leccino | OWNER DECISION | medium | yes |
| same current model | Pendolino | paid-market candidate | medium | medium | not applicable | Common pollinizer-style olive candidate | Pollination role should not become hidden runtime logic | pendolino | S3 AUDIT ITEM | low | yes |
| same current model | Istarska bjelica | regional candidate | medium | high | not applicable | Important Croatian/Istrian candidate | Regional hardiness and exact naming need validation | istarska_bjelica | S3 AUDIT ITEM | medium | yes |
| same current model | Buza | regional candidate | medium | high | not applicable | Croatian/Istrian regional candidate | Naming variants and regional scope need validation | buza | S3 AUDIT ITEM | low | yes |
| same current model | Frantoio | paid-market candidate | high | medium | not applicable | Broad Italian paid-market relevance | May be too cultivar-specific for current model | frantoio | OWNER DECISION | medium | yes |
| same current model | Coratina | paid-market candidate | high | low | not applicable | Important Italian olive candidate | Warm-climate/cultivar depth likely out of Pre-S3 scope | coratina | DEFER | medium | yes |

### fig

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current model: no varieties; mediterranean seasonProfile | keep no-variety model | no-variety model | medium | high | multi-cycle | Current catalog handles figs by simplified species profile; avoids crop-type complexity | Owner may later want first-crop/main-crop variety UX | fig_no_variety_model | OWNER DECISION | n/a (model decision) | no |
| same current model | Brown Turkey | variety | high | medium | multi-cycle | Widely recognized hobby/market fig candidate | Name may be broad/ambiguous; cold hardiness claims need sources | brown_turkey | OWNER DECISION | medium | yes |
| same current model | Petrovka / Petrovaca | synonym / alias | low | high | multi-cycle | Local/regional fig candidate if Croatian validation expands | Naming and crop timing need source validation | petrovka | S3 AUDIT ITEM | low | yes |
| same current model | Dottato / Kadota | synonym / alias | high | medium | multi-cycle | Important Mediterranean/Italian fig candidate | Alias and regional suitability require S3 | dottato | S3 AUDIT ITEM | medium | yes |
| same current model | Brunswick | variety | medium | low | multi-cycle | Recognized hardy-style fig candidate | Specialty; source-backed suitability needed | brunswick | DEFER | low | yes |
| same current model | Violette de Bordeaux | paid-market candidate | medium | low | multi-cycle | Recognizable premium/hobby fig | Specialty candidate; not needed before S3 | violette_de_bordeaux | DEFER | low | yes |
| same current model | Ronde de Bordeaux | paid-market candidate | medium | low | multi-cycle | Recognizable French/hobby fig | Specialty candidate; could bloat no-variety model | ronde_de_bordeaux | DEFER | low | yes |
| same current model | San Pedro type as model issue | grouping decision | medium | medium | multi-cycle | Fig crop-type/pollination behavior may matter if varieties are modeled | This is model complexity, not a simple variety addition | san_pedro_type | S3 AUDIT ITEM | source needed | yes |

### pomegranate

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current model: no varieties; mediterranean seasonProfile | keep no-variety model | no-variety model | medium | medium | autumn | Current catalog treats pomegranate as species-level mediterranean profile; simplest stable model | Owner may later want hardy/local cultivar handling | pomegranate_no_variety_model | OWNER DECISION | n/a (model decision) | no |
| same current model | Wonderful | paid-market candidate | high | low | autumn | High-recognition commercial pomegranate candidate | Commercial fame may not map to Zagreb/regional hardiness | wonderful | DEFER | medium | yes |
| same current model | Hicaz | regional candidate | medium | medium | autumn | Regional/Mediterranean market candidate | Naming, hardiness, and availability require validation | hicaz | S3 AUDIT ITEM | low | yes |
| same current model | Akko | paid-market candidate | medium | low | autumn | Modern commercial pomegranate candidate | Weak local validation unless sources support | akko | DEFER | low | yes |
| same current model | Parfianka | variety | low | low | autumn | Hobby/specialty pomegranate candidate | Too niche for current curated catalog | parfianka | DO NOT ADD | low | yes |
| same current model | Mollar de Elche | paid-market candidate | high | low | autumn | Spanish market candidate with paid-market relevance | Warm-climate fit and catalog need uncertain | mollar_de_elche | DEFER | low | yes |
| same current model | Provence / local hardy types | regional candidate | medium | medium | autumn | Hardy/local-type concept could matter for continental validation | This is a type/source question, not a ready variety | provence_or_local_hardy | S3 AUDIT ITEM | source needed | yes |

### walnut

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current set: Chandler, Franquette, Sejnovo | Lara | paid-market candidate | high | medium | late | Major European walnut candidate; improves paid-market relevance | Timing and local suitability need S3 | lara | OWNER DECISION | medium | yes |
| same current set | Fernor | paid-market candidate | high | medium | late | Strong European/cold-climate walnut candidate; likely high strategic value | Bloom/harvest timing and disease claims require sources; Source need + medium confidence keeps this below ADD NOW threshold per policy §8. | fernor | S3 AUDIT ITEM | medium | yes |
| same current set | Fernette | paid-market candidate | medium | medium | late | Companion/pollination-style walnut candidate | Pollination role must not become hidden behavior; may be alias-adjacent to Fernor context | fernette | S3 AUDIT ITEM | low | yes |
| same current set | Geisenheim 139 | paid-market candidate | medium | low | late | German-market walnut candidate | Specialty cultivar; source and naming required | geisenheim_139 | DEFER | low | yes |
| same current set | Jupiter | regional candidate | medium | medium | mid | Central European walnut candidate | Needs source-backed timing and relevance | jupiter | DEFER | low | yes |
| same current set | Milotai | regional candidate | medium | medium | mid | Hungarian/regional walnut candidate | Regional relevance uncertain without sources | milotai | DEFER | low | yes |
| same current set | Alsoszentivani | regional candidate | medium | medium | mid | Hungarian/regional walnut candidate | Name/diacritics and market relevance need validation | alsoszentivani | S3 AUDIT ITEM | source needed | yes |
| same current set | Pedro | variety | medium | low | late | Recognizable walnut cultivar candidate | May be less relevant than Lara/Fernor for target markets | pedro | DEFER | low | yes |

### hazelnut

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current set: Istarski dugi, Tonda di Giffoni, Ennis | Rimski | regional candidate | medium | high | mid | Strong local/regional candidate; may matter for Croatian validation | Exact cultivar identity and timing need source validation | rimski | OWNER DECISION | medium | yes |
| same current set | Cosford | variety | medium | medium | mid | Common hobby/pollination-relevant hazelnut candidate | Pollination claims require sources; may be secondary | cosford | S3 AUDIT ITEM | medium | yes |
| same current set | Hall's Giant / Hallesche Riesen | synonym / alias | high | medium | late | German/Austrian paid-market and nursery relevance | Alias/naming must be resolved; timing needs validation | halls_giant | S3 AUDIT ITEM | medium | yes |
| same current set | Tonda Gentile delle Langhe | paid-market candidate | high | low | mid | High-value Italian hazelnut candidate | Could overlap Tonda di Giffoni; paid-market food fame may not equal orchard relevance | tonda_gentile_delle_langhe | OWNER DECISION | medium | yes |
| same current set | Tonda Romana | paid-market candidate | high | low | mid | Italian market cultivar candidate | May be redundant if catalog already has Tonda di Giffoni | tonda_romana | DEFER | medium | yes |
| same current set | Barcelona | paid-market candidate | medium | low | late | Recognized commercial hazelnut cultivar | More relevant to non-core markets; not urgent | barcelona | DEFER | medium | yes |
| same current set | Butler | variety | low | low | late | Possible commercial cultivar | Weak strategic fit before S3 | butler | DO NOT ADD | low | yes |
| same current set | Corabel | paid-market candidate | medium | low | mid | French/European candidate | Specialty; source needed before considering | corabel | DEFER | low | yes |

### lemon

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current citrus subtype: lemon; no variety selection | keep subtype-only model | subtype identity | medium | medium | multi-cycle | Matches stabilized catalog: citrus remains one category with lemon subtype and no variety selection | Owner/S3 still must decide later whether citrus subtypes become top-level identities | n/a (subtype identity, not a catalog key) | OWNER DECISION | n/a (model decision) | no |
| same subtype model | Meyer | variety | high | medium | multi-cycle | Highly recognizable lemon-like candidate for hobby users | Hybrid/name/category issue; could confuse subtype model | meyer | S3 AUDIT ITEM | medium | yes |
| same subtype model | Eureka | paid-market candidate | high | low | multi-cycle | Common commercial lemon candidate | Citrus variety depth is currently out of model scope | eureka | DEFER | medium | yes |
| same subtype model | Lisbon | paid-market candidate | high | low | multi-cycle | Common commercial lemon candidate | Likely redundant with Eureka unless citrus varieties are modeled | lisbon | DEFER | medium | yes |
| same subtype model | Lunario | regional candidate | medium | medium | multi-cycle | Mediterranean lemon candidate; may matter for Italian/Croatian coastal context | Requires source-backed season/cold suitability | lunario | S3 AUDIT ITEM | low | yes |
| same subtype model | Femminello | paid-market candidate | high | low | multi-cycle | Important Italian lemon cultivar group | May be cultivar group; naming requires S3 | femminello | S3 AUDIT ITEM | low | yes |

### orange

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current citrus subtype: orange; no variety selection | keep subtype-only model | subtype identity | medium | low | winter | Matches stabilized catalog: orange remains a citrus subtype with winter seasonProfile | Owner/S3 still must decide citrus identity later | n/a (subtype identity, not a catalog key) | OWNER DECISION | n/a (model decision) | no |
| same subtype model | Washington Navel | paid-market candidate | high | low | winter | Recognizable orange cultivar candidate | Citrus varieties are out of current model; hardiness/local relevance low | washington_navel | DEFER | medium | yes |
| same subtype model | Valencia | paid-market candidate | high | low | winter | Globally recognized orange candidate | May not improve app value unless citrus variety UX exists | valencia | DEFER | medium | yes |
| same subtype model | Tarocco | paid-market candidate | high | low | winter | Italian blood orange candidate relevant to paid markets | Specialty cultivar; source and scope decision needed | tarocco | OWNER DECISION | medium | yes |
| same subtype model | Moro | paid-market candidate | high | low | winter | Italian/Sicilian blood orange candidate | Specialty; risk of citrus catalog bloat | moro | DEFER | medium | yes |
| same subtype model | Navelina | paid-market candidate | high | low | winter | European early navel orange candidate | Timing/market relevance needs source validation | navelina | S3 AUDIT ITEM | low | yes |

### mandarin

| Current catalog entries | Candidate | Candidate type | Paid-market relevance | Local-validation relevance | Timing band contribution | Reason to consider | Risk / caution | Proposed key | Recommendation | Confidence | Source need |
|---|---|---|---|---|---|---|---|---|---|---|---|
| current citrus subtype: mandarin; no variety selection | keep subtype-only model | subtype identity | medium | high | autumn | Matches stabilized catalog: mandarin remains a citrus subtype with autumn seasonProfile | Owner/S3 still must decide citrus identity later | n/a (subtype identity, not a catalog key) | OWNER DECISION | n/a (model decision) | no |
| same subtype model | Satsuma / Unshiu | synonym / alias | high | high | autumn | Important cold-tolerant mandarin concept; likely relevant to local coastal/hobby users | Alias/category handling and hardiness claims require sources | satsuma_unshiu | S3 AUDIT ITEM | medium | yes |
| same subtype model | Clementine | paid-market candidate | high | medium | autumn | High-recognition EU mandarin/clementine market candidate | Category boundary with mandarin needs owner/S3 decision | clementine | OWNER DECISION | medium | yes |
| same subtype model | Okitsu | regional candidate | medium | high | autumn | Early satsuma-style candidate relevant to Adriatic/local context | Naming and timing need source validation | okitsu | S3 AUDIT ITEM | low | yes |
| same subtype model | Kuno / Kawano Wase | synonym / alias | medium | high | autumn | Early mandarin candidate with possible regional relevance | Alias/naming and source validation required | kawano_wase | S3 AUDIT ITEM | source needed | yes |
| same subtype model | Chahara | regional candidate | low | medium | autumn | Possible regional mandarin candidate | Unclear relevance; likely too specific | chahara | DO NOT ADD | source needed | yes |
| same subtype model | Nova | paid-market candidate | medium | low | autumn | Recognizable mandarin hybrid candidate | Hybrid/category complexity; defer unless owner expands citrus depth | nova | DEFER | low | yes |

---

## 5. Highest-priority owner decisions

1. Add Topaz to apple?
   - Recommended owner choice: promote to `ADD NOW` only after S3 source-validates resistance claim and harvest timing. Until then, classification remains `S3 AUDIT ITEM`.
   - Why: it fills the clearest apple gap: disease-aware, Central European, paid-market-relevant coverage beyond standard dessert/storage apples.
   - Risk if deferred: apple remains commercially broad but misses a low-input/disease-aware signal before S3.

2. Add Bistrica / Pozegaca to plum?
   - Recommended owner choice: resolve alias first (single canonical key), then consider promotion to `ADD NOW`. Until alias is resolved, classification remains `OWNER DECISION`.
   - Why: it is the strongest local/regional plum gap and supports Croatian/Balkan validation.
   - Risk if deferred: plum coverage remains modern and Cacanska-heavy but omits an obvious regional heritage concept.

3. Add Madarska najbolja / Magyar kajszi to apricot?
   - Recommended owner choice: resolve alias first (single canonical key), then consider promotion to `ADD NOW` after S3 validates regional/timing claims. Until then, classification remains `OWNER DECISION`.
   - Why: it fills the clearest local/regional apricot gap.
   - Risk if deferred: apricot remains adequate but misses a recognizable regional classic.

4. Add Fernor / Lara to walnut?
   - Recommended owner choice: after S3 source-validates timing and resistance, owner may promote Fernor to `ADD NOW`. Lara remains `OWNER DECISION` for paid-market depth.
   - Why: Fernor appears to be the stronger strategic cold-climate/European candidate; Lara may still improve paid-market coverage.
   - Risk if deferred: walnut remains a narrow three-variety set with limited paid-market breadth.

5. Add Rimski/Cosford/Hall's Giant to hazelnut?
   - Recommended owner choice: keep Rimski as `OWNER DECISION`; send Cosford and Hall's Giant/Hallesche Riesen to S3 alias/source audit.
   - Why: Rimski carries local-validation value, while Cosford and Hall's Giant raise pollination/naming questions that need sources.
   - Risk if deferred: hazelnut may remain underpowered for Croatian validation and German/Austrian nursery familiarity.

6. Keep citrus no-variety subtype model?
   - Recommended owner choice: keep subtype-only citrus for Pre-S3 and S3 input.
   - Why: the current model intentionally keeps citrus as one catalog entry with lemon/orange/mandarin subtypes and no variety timing.
   - Risk if deferred: none for Pre-S3; the risk is only that later citrus UX decisions remain open.

7. Keep olive/fig/pomegranate no-variety model?
   - Recommended owner choice: keep no-variety model for Pre-S3; revisit only if owner wants Mediterranean cultivar UX.
   - Why: adding varieties would create a broader warm-climate cultivar model, not a small catalog tweak.
   - Risk if deferred: local coastal cultivar specificity remains outside V2 scope, but the catalog stays simpler and safer.

8. Resolve citrus top-level vs subtype identity later in S3?
   - Recommended owner choice: defer the identity decision to S3 and do not promote lemon/orange/mandarin to top-level keys in this task.
   - Why: the stabilized catalog explicitly treats citrus identity as an S3/owner decision.
   - Risk if deferred: downstream UX planning must remember that citrus identity is not final.

---

## 6. S3 audit queue from matrix

- Synonym / alias decisions: Pink Lady / Cripps Pink, Cox Orange / Cox's Orange Pippin, Kaiser / Bosc, Morello / Schattenmorelle, Bistrica / Pozegaca, Hauszwetsche / Hauspflaume, Reine Claude / Green Gage, Orange Red / Bhart / Orangered, Dottato / Kadota, Satsuma / Unshiu, Hall's Giant / Hallesche Riesen.
- Disease or resistance claims: Topaz, Florina, Jojo, Harcot, Fernor, any late-bloom or self-fertile almond claims.
- Timing validation: all `ADD NOW`, `OWNER DECISION`, and `S3 AUDIT ITEM` candidates before catalog promotion.
- Citrus identity: keep citrus subtype model for now; S3 decides whether lemon/orange/mandarin remain subtypes or become top-level identities.
- Mediterranean variety modeling: decide whether olive, fig, and pomegranate should stay species-level or gain cultivar depth in a future scope.
- Nut semantics: validate walnut/hazelnut harvest-window semantics and decide whether proposed nut candidates support paid-market coverage without catalog bloat.

---

## 7. Do-not-add / catalog-bloat warnings

- Do not add duplicate aliases as separate varieties: Bistrica/Pozegaca, Kaiser/Bosc, Morello/Schattenmorelle, Satsuma/Unshiu, Hall's Giant/Hallesche Riesen.
- Do not expand olive, fig, pomegranate, lemon, orange, or mandarin varieties unless the owner explicitly wants cultivar-level UX.
- Do not add specialty candidates with weak target-market relevance before core gaps are settled: North Star, Rexelle, Independence, Nectared, Silver King, Parfianka, Butler.
- Do not turn pollination roles, disease resistance, cold hardiness, trademark names, or cultivar-group concepts into hidden runtime behavior.
- Do not add timing windows, bloom windows, or disease-resistance notes from memory; all must be S3 source-backed.

---

## 8. Recommended next action

Owner should review only the ranked decisions in Section 5 first. After owner disposition, S3 should source-validate the `ADD NOW`, `OWNER DECISION`, and `S3 AUDIT ITEM` rows before any catalog edit is considered.

Until then, `V2_PLANT_CATALOG.md` and `V2_ORCHARD_PLAN_TEMPLATES.md` remain stabilized Pre-S3 input and should not be edited.
