# European Seasonal Timing — External Pass A Evidence Corpus

## 1. Status and Scope

FACT — Repository gate before external research:

- `git status --short`: empty.
- `git branch --show-current`: `main`.
- `git log --oneline -3`: `f3df95a Map CORE-AUDIT contract into roadmap execution`; `993d153 Lock corrected CORE-AUDIT specification`; `cf3a51f Fix observation correction validation regression`.
- `git worktree list`: single worktree at `/Users/mboban/Documents/GIT repo/vocnjak`, `main`, `f3df95a`.
- Sentinel / ignored-artifact scan: `git status --short --ignored` reported ignored `.DS_Store` and `.claude/`; these were not touched.

FACT — Read-only repository context checked: `ROADMAP.md`, `CORE_AUDIT.md`, `CURRENT_STATE.md`, `REGIONALIZATION_DECISION_RECORD.md`, `PRODUCT_VISION.md`, `V2_AGENT_ENTRYPOINT.md`, and `V2_PACK_HR_ADRIATIC.md` were read only for constraints.

FACT — Relevant constraints preserved for this pass: country, region, language, and content pack are distinct; current regional timing differences are curated content rather than runtime offsets; no computed regional date shifts; no numeric formulas; no cross-country carry-forward; missing orchard observations must not be inferred; current weather is advisory; history remains pinned to write-time catalog lineage.

INFERENCE — This report is evidence for a later architecture-analysis pass only. It does not choose region ids, final region boundaries, country-first vs climate-first organization, or a final Vocnjak model.

Scope note: source access was strongest for Slovenia, Austria, Germany, Veneto/Italy, and Swiss federal/Agroscope structures. France and the wider Italian/Swiss regional layers need deeper follow-up, so this corpus is useful but not complete enough to close every country-level unknown.

## 2. Research Method

FACT — External sources were prioritized in this order: ministries, official plant-health/prognostic services, public chambers/extension systems, public research institutes, and official regional/state/canton advisory services.

FACT — Operational treatment content was intentionally not extracted. Dated advisory examples were used only to classify source structure, publication recurrence, geography, and timing-expression style.

INFERENCE — A source was treated as evidence for recurring baseline feasibility only when it showed durable source ownership, repeat publication structure, stable reference material, or multi-year archives. One dated advisory was not treated as proof of a recurring baseline.

## 3. Evidence Classification Framework

Publication shape: `RECURRING REFERENCE`, `SEASONAL SNAPSHOT`, `MIXED`, `UNCLEAR`.

Timing expression: `CALENDAR PERIOD`, `OBSERVED DEVELOPMENT STAGE`, `LOCAL WEATHER / CONDITIONS`, `ADMINISTRATIVE-AREA SCHEDULE`, `MIXED`, `UNCLEAR`.

Geographic structure: country, state/Land, region, province, canton, production area, climate area, weather-station area, multiple overlapping units, other.

Confidence: `HIGH` means primary source directly supports the classification; `MEDIUM` means primary source supports the structure but deeper sub-source coverage remains needed; `LOW` means source access or coverage was materially incomplete.

## 4. Slovenia

### 4.1 Institutional Map

FACT — Slovenia has a strong national layer:

- Ministry / GOV.SI publishes integrated-production guidance for fruit and olives and states that technological instructions are issued annually by the Ministry of Agriculture, Forestry and Food: [GOV.SI — Integrirana pridelava](https://www.gov.si/teme/integrirana-pridelava/).
- UVHVVR / MKGP runs the Agromet prognostic notices portal for plant-health advisories: [Agromet — Prognosticna obvestila](https://agromet.mkgp.gov.si/pp/).
- KGZS is the appointed public agricultural advisory service implementer, operating through regional institutes: [KGZS — JSKS](https://www.kgzs.si/jsks) and [KGZS — Zavodi](https://www.kgzs.si/kgzs/o-kgzs/zavodi).
- Public fruit service exists as a dedicated fruit-growing system with annual programs, technical publications, and notices: [Javna sluzba v sadjarstvu](https://sadjarstvo.javnesluzbe.si/).
- KIS / IVR provide public research and integrated plant-protection knowledge support: [KIS fruit department](https://www.kis.si/oddelki/oddelek-za-sadjarstvo-vinogradnistvo-in-vinarstvo/) and [IVR](https://www.ivr.si/).

INFERENCE — Slovenia is `MOSTLY CENTRALIZED` institutionally, with practical advisory expression split through official regional plant-health units and KGZS institutes.

UNKNOWN — Whether one single stable, non-treatment orchard calendar can be derived for all current Vocnjak species from Slovenian public references without leaning on seasonal advisories remains unproven.

### 4.2 Geographic Structure

FACT — Agromet groups prognostic notices by official areas: Osrednja Slovenija, Severovzhodna Slovenija, Celjska in Koroska regija, Zahodna Slovenija, Jugovzhodna Slovenija, plus UVHVVR notices.

FACT — Agromet station listings show weather-station geography and crop/site categories, including orchard station categories.

FACT — KGZS advisory implementation is distributed across institutes including Celje, Kranj, Ljubljana, Maribor, Murska Sobota, Nova Gorica, Novo mesto, and Ptuj.

INFERENCE — Natural source units are multiple overlapping units: national, official plant-health regions, KGZS institute territories, and weather-station areas.

### 4.3 Publication Pattern

Dominant useful structure: `MIXED`.

FACT — Annual integrated-production technological instructions are recurring national references.

FACT — Agromet prognostic notices are dated current-season notices with archives and area/crop filters.

FACT — Public fruit service has annual programs from 2018 through 2026 and dated notices such as maturity forecasts, thinning/frost notices, and technical instructions.

### 4.4 Timing Expression

Dominant timing expression: `MIXED`.

FACT — Agromet notice metadata and snippets show weather data, development stages, pest/disease occurrence, BBCH/fenology, and regional current conditions.

INFERENCE — Recurring references likely include some calendar/season structure, but practical timing is often stated through observed stages and local conditions.

### 4.5 Evidence Records

1. Country: Slovenia. Institution: Ministry of Agriculture / GOV.SI. Level: national. Source: [Integrirana pridelava](https://www.gov.si/teme/integrirana-pridelava/). Type: ministry reference page. Geographic scope: Slovenia. Publication pattern: annual technological instructions. Timing-expression pattern: UNCLEAR/MIXED from page only. Recurrence status: `RECURRING REFERENCE`. Proves: national annual reference structure for integrated fruit and olive production exists. Does not prove: a beginner orchard planning baseline or regional timing map. Confidence: HIGH.

2. Country: Slovenia. Institution: UVHVVR / MKGP. Level: national with regional units. Source: [Agromet prognostic notices](https://agromet.mkgp.gov.si/pp/). Type: official plant-health prognostic portal. Geographic scope: five official regions plus UVHVVR. Publication pattern: dated notices with year and category filters. Timing-expression pattern: `MIXED` observed stage + weather + local conditions. Recurrence status: `SEASONAL SNAPSHOT`. Proves: official recurring advisory system exists and is geographically regionalized. Does not prove: stable cross-year dates. Confidence: HIGH.

3. Country: Slovenia. Institution: KGZS / JSKS. Level: mixed national and regional institute network. Source: [KGZS JSKS](https://www.kgzs.si/jsks). Type: public agricultural advisory service. Geographic scope: national service via institutes. Publication pattern: standing advisory institution. Timing-expression pattern: UNCLEAR on institution page. Recurrence status: `RECURRING REFERENCE` for institution, not a timing corpus. Proves: advisory authority is public and distributed. Does not prove: specific fruit timing. Confidence: HIGH.

4. Country: Slovenia. Institution: Javna sluzba v sadjarstvu. Level: national public fruit service with executing institutions. Source: [Javna sluzba v sadjarstvu](https://sadjarstvo.javnesluzbe.si/). Type: public fruit-growing service portal. Geographic scope: Slovenia. Publication pattern: annual programs, notices, technical instructions. Timing-expression pattern: `MIXED`. Recurrence status: `MIXED`. Proves: durable fruit-specific public service exists. Does not prove: full recurring calendar rows. Confidence: HIGH.

5. Country: Slovenia. Institution: IVR / KIS. Level: national research/advisory support. Source: [IVR](https://www.ivr.si/). Type: integrated plant-protection knowledge portal. Geographic scope: Slovenia. Publication pattern: stable guidance plus links to prognostic notices. Timing-expression pattern: `MIXED`. Recurrence status: `MIXED`. Proves: public integrated plant-protection framework links stable guidance and Agromet notices. Does not prove: orchard planning baselines. Confidence: HIGH.

### 4.6 Country Assessment

Institutional structure: `MOSTLY CENTRALIZED`.

Geographic structure: multiple overlapping units: national, five plant-health regions, KGZS institute areas, weather stations.

Publication shape: `MIXED`.

Regional differentiation: `MODERATE`, following official plant-health regions and weather stations, with public advisory institutes in parallel.

Recurring-baseline feasibility: `HIGH FEASIBILITY` for a source-backed baseline structure; regional timing rows would still need careful source-by-source curation.

Maintenance burden: `MEDIUM`.

Confidence: HIGH.

## 5. Austria

### 5.1 Institutional Map

FACT — Austria has a national chamber portal with explicit links to all Landwirtschaftskammern by Bundesland: [LK Osterreich](https://www.lko.at/).

FACT — The plant-protection warning service is an initiative of the Austrian Landwirtschaftskammern and presents itself as Austria-wide, cross-crop, current, practical, and based on monitoring/prognosis: [Warndienst](https://warndienst.at/).

FACT — Fruit-specific advisory tooling is centralized at the Obstbauwarndienst portal, but the portal is structured by Austria and by individual Bundeslander: [Obstbauwarndienst](https://obstwarndienst.lko.at/).

INFERENCE — Austria is `MIXED`: a central LKO/Warndienst platform with practical differentiation by Land, station, model, and crop.

UNKNOWN — How much stable, non-treatment, fruit-growing seasonal reference exists outside plant-protection and monitoring models needs deeper source review.

### 5.2 Geographic Structure

FACT — Obstbauwarndienst exposes national navigation plus Bundesland modules for Burgenland, Karnten, Niederosterreich, Oberosterreich, Salzburg, Steiermark, Tirol, Vorarlberg, and Wien.

FACT — The same portal exposes weather station data, model outputs, T-sum modules, climate pages, monitoring pages, and state-specific advisory links.

INFERENCE — Natural source units are Land plus weather-station/prognostic-model areas; production areas and topography probably matter within those units, but this pass did not map them exhaustively.

### 5.3 Publication Pattern

Dominant useful structure: `MIXED`.

FACT — Warndienst/Obstbauwarndienst provides current monitoring and forecasts.

FACT — The fruit portal also contains stable basics such as BBCH/Fleckinger development-stage references: [BBCH Stadien](https://obstwarndienst.lko.at/1396/BBCH-Stadien).

### 5.4 Timing Expression

Dominant timing expression: `MIXED` leaning to `LOCAL WEATHER / CONDITIONS` and `OBSERVED DEVELOPMENT STAGE`.

FACT — Warndienst descriptions refer to monitoring, forecasts, disease/pest models, site-specific weather data, T-sum, BBCH/Fleckinger stages, and weather services.

### 5.5 Evidence Records

1. Country: Austria. Institution: Landwirtschaftskammern. Level: mixed national and Land. Source: [LK Osterreich](https://www.lko.at/). Type: public chamber portal. Geographic scope: Austria and all Bundeslander. Publication pattern: standing institution and current content. Timing-expression pattern: UNCLEAR on portal. Recurrence status: `MIXED`. Proves: national umbrella and Land-level chamber structure. Does not prove: fruit baseline content. Confidence: HIGH.

2. Country: Austria. Institution: Austrian Landwirtschaftskammern / partners including AGES. Level: national platform with Land modules. Source: [Warndienst](https://warndienst.at/). Type: plant-protection warning service. Geographic scope: Austria-wide with crop modules. Publication pattern: live/current monitoring and forecast system. Timing-expression pattern: local weather/model/monitoring. Recurrence status: `SEASONAL SNAPSHOT` plus live models. Proves: authoritative current advisory infrastructure. Does not prove: recurring calendar periods. Confidence: HIGH.

3. Country: Austria. Institution: Obstbauwarndienst / LKO. Level: mixed national and Land. Source: [Obstbauwarndienst](https://obstwarndienst.lko.at/). Type: fruit-specific warning/prognosis/monitoring portal. Geographic scope: Austria, Bundeslander, station/model areas. Publication pattern: live forecast/monitoring plus stable knowledge pages. Timing-expression pattern: `MIXED`. Recurrence status: `MIXED`. Proves: practical fruit guidance structure is Land- and model-aware. Does not prove: one country-wide calendar baseline. Confidence: HIGH.

4. Country: Austria. Institution: Obstbauwarndienst / LKO. Level: national reference. Source: [BBCH Stadien](https://obstwarndienst.lko.at/1396/BBCH-Stadien). Type: stable development-stage reference. Geographic scope: Austria-wide reference. Publication pattern: stable reference page. Timing-expression pattern: observed development stage. Recurrence status: `RECURRING REFERENCE`. Proves: stable phenology/stage reference exists. Does not prove: dates or regional timing. Confidence: HIGH.

### 5.6 Country Assessment

Institutional structure: `MIXED`.

Geographic structure: Land plus weather-station/prognostic model areas; climate/geography likely cuts across administrative units in places.

Publication shape: `MIXED`.

Regional differentiation: `HIGH`, following Land modules, weather stations, models, and production/climate areas.

Recurring-baseline feasibility: `MEDIUM FEASIBILITY` to `HIGH FEASIBILITY` for source-backed structure, but not for a simple country-only timing surface without loss of source granularity.

Maintenance burden: `MEDIUM` to `HIGH`.

Confidence: HIGH.

## 6. Germany

### 6.1 Institutional Map

FACT — ISIP presents itself as the information system for integrated plant production and lists crop modules including horticulture/fruit, plus direct links to Bundesland pages: [ISIP](https://www.isip.de/).

FACT — ISIP routes users to state-specific institutions, for example Baden-Wurttemberg / LTZ Augustenberg, Niedersachsen / Landwirtschaftskammer Niedersachsen, Nordrhein-Westfalen / Landwirtschaftskammer NRW, Rheinland-Pfalz / DLR, Sachsen / LfULG, Sachsen-Anhalt / LLG, Schleswig-Holstein / LWK, Thuringen / TLLLR.

FACT — Baden-Wurttemberg's LTZ Augustenberg is an institution in the business area of the Baden-Wurttemberg agriculture ministry, covers fruit crops, plant health, plant protection, and plant-protection warning service: [LTZ Augustenberg](https://ltz.landwirtschaft-bw.de/).

FACT — Rheinland-Pfalz has a dedicated official fruit-growing portal: [Obstbau Rheinland-Pfalz](https://www.obstbau.rlp.de/).

INFERENCE — Germany is `MOSTLY FRAGMENTED` to `HIGHLY FRAGMENTED`: ISIP is a useful national aggregator, but practical authority follows the Lander and their plant-protection/advisory services.

UNKNOWN — A complete per-Land fruit advisory inventory was not built in this pass.

### 6.2 Geographic Structure

FACT — ISIP exposes Bundesland navigation as a first-class source-discovery structure.

FACT — State institutions such as LTZ show Land-specific ownership and services.

INFERENCE — Natural source units are Land, state advisory regions, and weather/prognostic station areas. Production areas such as Lake Constance, Altes Land, Rheinland-Pfalz, and Baden fruit regions are likely important, but this pass does not map them exhaustively.

### 6.3 Publication Pattern

Dominant useful structure: `MIXED`, with practical timing leaning `SEASONAL SNAPSHOT` / model-driven.

FACT — ISIP provides current decision aids, monitoring, infection-condition calculations, and current state news.

FACT — LTZ provides services, publications, warning services, and fruit plant-protection content.

### 6.4 Timing Expression

Dominant timing expression: `MIXED` leaning weather/model/development-stage.

FACT — ISIP examples include BBCH-dependent decision aids, infection conditions, monitoring by plant-protection services, and current state updates.

### 6.5 Evidence Records

1. Country: Germany. Institution: ISIP e.V. / linked public plant-protection services. Level: mixed national aggregator and Land sources. Source: [ISIP](https://www.isip.de/). Type: integrated plant-production information system. Geographic scope: Germany plus Bundeslander. Publication pattern: current decision aids and state pages. Timing-expression pattern: `MIXED`. Recurrence status: `MIXED`. Proves: national discovery layer exists but routes to Lander. Does not prove: central national fruit calendar. Confidence: HIGH.

2. Country: Germany. Institution: LTZ Augustenberg. Level: Land / Baden-Wurttemberg. Source: [LTZ Augustenberg](https://ltz.landwirtschaft-bw.de/). Type: state agricultural technology/plant-protection institution. Geographic scope: Baden-Wurttemberg. Publication pattern: standing services, publications, warning service. Timing-expression pattern: `MIXED`. Recurrence status: `MIXED`. Proves: Land-owned practical authority exists. Does not prove: other states share identical structure. Confidence: HIGH.

3. Country: Germany. Institution: Rheinland-Pfalz DLR / Obstbau portal. Level: Land. Source: [Obstbau Rheinland-Pfalz](https://www.obstbau.rlp.de/). Type: state fruit-growing portal. Geographic scope: Rheinland-Pfalz. Publication pattern: state portal; deeper page review still needed. Timing-expression pattern: UNKNOWN from this pass. Recurrence status: `UNCLEAR`. Proves: separate state fruit portal exists. Does not prove: full publication model. Confidence: MEDIUM.

### 6.6 Country Assessment

Institutional structure: `MOSTLY FRAGMENTED`.

Geographic structure: Land and state advisory/prognostic regions, with station/model and production-area overlays.

Publication shape: `MIXED`.

Regional differentiation: `HIGH`, primarily administrative Land plus station/model and production-area differentiation.

Recurring-baseline feasibility: `MEDIUM FEASIBILITY` for a carefully cited, state-aware corpus; `LOW FEASIBILITY` for a simple one-country timing baseline.

Maintenance burden: `VERY HIGH`.

Confidence: MEDIUM-HIGH.

## 7. Italy

### 7.1 Institutional Map

FACT — Veneto's official regional phytosanitary unit publishes regional plant-health bulletins and integrated-production resources: [Regione Veneto — Bollettini fitosanitari](https://www.regione.veneto.it/web/fitosanitario/bollettini-fitosanitari).

FACT — The Veneto page explicitly places bulletins under regional phytosanitary office / sustainable crop protection and links to integrated-production specifications, bulletins by year, integrated-defense manuals, databases, and technical material.

INFERENCE — Italy likely operates as a national framework plus strongly regional practical authority system. This is consistent with the Veneto evidence, but the national SQNPI / Rete Rurale and additional regional pages were not sufficiently accessed in this pass to treat the conclusion as fully verified.

UNKNOWN — The full national-to-regional relationship, including all fruit-relevant regional/provincial systems, remains a material evidence gap.

### 7.2 Geographic Structure

FACT — Veneto bulletins have territorial validity and are issued by a regional phytosanitary office.

INFERENCE — Natural source units are administrative regions, autonomous provinces, regional phytosanitary territories, production areas, and monitoring/model networks.

UNKNOWN — The relative weight of administrative regions vs production areas vs climate/geography needs follow-up across Emilia-Romagna, Trentino, South Tyrol, Piemonte, Friuli, Tuscany, and southern regions.

### 7.3 Publication Pattern

Dominant useful structure: `MIXED`, probably seasonal-snapshot-heavy.

FACT — Veneto maintains current and prior-year bulletin archives and integrated-production references.

UNKNOWN — Whether stable regional recurring references can be normalized across Italy without relying heavily on annual bulletins remains unproven.

### 7.4 Timing Expression

Dominant timing expression from Veneto evidence: `MIXED`.

FACT — Veneto states that bulletins are periodic and territorial, based on predictive models and monitoring networks, and include meteorological trend, phenological phase, epidemiological situation, and practical timing indications.

### 7.5 Evidence Records

1. Country: Italy. Institution: Regione del Veneto, U.O. Fitosanitario. Level: regional. Source: [Bollettini fitosanitari](https://www.regione.veneto.it/web/fitosanitario/bollettini-fitosanitari). Type: official regional phytosanitary bulletin system. Geographic scope: Veneto. Publication pattern: periodic territorial bulletins, annual archives, integrated-production/manual resources. Timing-expression pattern: `MIXED` weather + phenology + monitoring/model situation. Recurrence status: `MIXED`. Proves: at least one major Italian region has an official, citable, recurring regional bulletin structure. Does not prove: national Italian uniformity. Confidence: HIGH.

2. Country: Italy. Institution: Rete Rurale / national integrated production. Level: national candidate. Source candidate: [Rete Rurale — produzione integrata](https://www.reterurale.it/produzioneintegrata). Type: national framework candidate. Geographic scope: Italy. Publication pattern: access not verified in detail. Timing-expression pattern: UNKNOWN. Recurrence status: `UNCLEAR`. Proves: not used as substantive evidence in this pass. Does not prove: national source hierarchy until re-accessed. Confidence: LOW.

### 7.6 Country Assessment

Institutional structure: `MOSTLY FRAGMENTED` based on accessed regional evidence plus known need to verify national/regional framework.

Geographic structure: administrative regions/provinces plus production/monitoring areas.

Publication shape: `MIXED`, likely snapshot-heavy.

Regional differentiation: `HIGH`, following administrative regions and regional phytosanitary systems, with monitoring/model and production-area overlays.

Recurring-baseline feasibility: `MEDIUM FEASIBILITY` for regionalized source-backed baselines; `LOW FEASIBILITY` for one simple country baseline until national/regional normalization is proven.

Maintenance burden: `VERY HIGH`.

Confidence: MEDIUM-LOW because wider Italy was not fully sourced.

## 8. Switzerland

### 8.1 Institutional Map

FACT — Agrometeo is an Agroscope platform and exposes meteorology, viticulture, arboriculture, and field-crop areas: [Agrometeo](https://www.agrometeo.ch/).

FACT — Agroscope's fruit-growing page states that it offers practical expertise and current forecasts on diseases and pests for successful fruit-growing management and advice, with links to plant-protection recommendations, technical sheets, and monitoring service: [Agroscope — Frutticoltura](https://www.agroscope.admin.ch/agroscope/it/home/temi/produzione-vegetale/frutticoltura.html).

FACT — The Federal Office for Agriculture is the federal agriculture authority and links to Agroscope: [FOAG/BLW/UFAG](https://www.blw.admin.ch/blw/it/home.html).

INFERENCE — Switzerland has a strong federal research/advisory layer through Agroscope/Agrometeo, but practical orchard advice likely also involves cantonal advisory services and language-region channels.

UNKNOWN — The canton-by-canton publication structure and how much it dominates practical timing guidance was not sufficiently mapped.

### 8.2 Geographic Structure

FACT — Agrometeo is a meteorological/advisory platform and naturally suggests station/model geography.

INFERENCE — Natural units are mixed: federal Agroscope resources, weather-station/model areas, cantons, production areas, altitude/topography, and language regions.

UNKNOWN — How altitude is explicitly represented in public fruit advisory source structure remains unverified.

### 8.3 Publication Pattern

Dominant useful structure: `MIXED`.

FACT — Agroscope provides stable recommendations/technical resources and current forecasts/monitoring links.

UNKNOWN — Which cantonal sources provide recurring references vs seasonal bulletins remains a follow-up need.

### 8.4 Timing Expression

Dominant timing expression: `MIXED`, likely local weather/model plus observed stage.

FACT — Agroscope/Agrometeo source structure emphasizes current forecasts and monitoring, not only calendar periods.

### 8.5 Evidence Records

1. Country: Switzerland. Institution: Agroscope / Agrometeo. Level: national/federal research with station/model layer. Source: [Agrometeo](https://www.agrometeo.ch/). Type: agrometeorological advisory platform. Geographic scope: Switzerland. Publication pattern: current platform. Timing-expression pattern: local weather/model areas. Recurrence status: `MIXED`. Proves: central weather/model platform exists for arboriculture. Does not prove: canton-level advisory completeness. Confidence: HIGH.

2. Country: Switzerland. Institution: Agroscope. Level: federal research/advisory. Source: [Agroscope — fruit growing](https://www.agroscope.admin.ch/agroscope/it/home/temi/produzione-vegetale/frutticoltura.html). Type: federal applied research and advisory resource. Geographic scope: Switzerland. Publication pattern: stable resources plus current forecasts/monitoring. Timing-expression pattern: `MIXED`. Recurrence status: `MIXED`. Proves: federal fruit-growing reference and forecast support exists. Does not prove: one national practical calendar. Confidence: HIGH.

3. Country: Switzerland. Institution: FOAG/BLW/UFAG. Level: federal. Source: [FOAG/BLW/UFAG](https://www.blw.admin.ch/blw/it/home.html). Type: federal agriculture authority. Geographic scope: Switzerland. Publication pattern: policy/authority portal. Timing-expression pattern: not fruit-timing specific. Recurrence status: `RECURRING REFERENCE` for institution only. Proves: federal authority context and Agroscope relationship. Does not prove: practical orchard timing. Confidence: MEDIUM.

### 8.6 Country Assessment

Institutional structure: `MIXED`.

Geographic structure: weather-station/model areas plus likely canton, production, language, and altitude/geographic overlays.

Publication shape: `MIXED`.

Regional differentiation: `HIGH`, likely following station networks, canton/language regions, production geography, and altitude.

Recurring-baseline feasibility: `MEDIUM FEASIBILITY`; federal Agroscope/Agrometeo are strong, but cantonal/language/altitude maintenance needs more evidence.

Maintenance burden: `HIGH`.

Confidence: MEDIUM.

## 9. France

### 9.1 Institutional Map

FACT — Ecophytopic is a national French portal for plant-protection / agroecological practices and source discovery: [Ecophytopic](https://ecophytopic.fr/).

INFERENCE — Practical fruit timing guidance in France is likely dominated by regional `Bulletin de Sante du Vegetal` systems published through DRAAF/regional agricultural chambers/partners. This is a strong lead, but the DRAAF regional pages attempted in this pass did not yield enough accessible text to classify every target detail as a verified FACT.

UNKNOWN — The full national-regional relationship, including CTIFL, Chambres d'agriculture, DRAAF/SRAL, and BSV arboriculture coverage by region, requires a dedicated follow-up.

### 9.2 Geographic Structure

INFERENCE — Natural source units likely follow administrative regions/DRAAF regions, BSV territories, production basins, and weather/monitoring networks.

UNKNOWN — Whether BSV territories map cleanly to administrative regions or fruit production basins needs source-by-source verification.

### 9.3 Publication Pattern

Dominant useful structure: `UNCLEAR` from accessed sources; likely `SEASONAL SNAPSHOT` / `MIXED` but not fully verified in this pass.

### 9.4 Timing Expression

Dominant timing expression: `UNCLEAR` from accessed sources; likely `MIXED` current conditions + phenology + risk observations, but source confirmation is still needed.

### 9.5 Evidence Records

1. Country: France. Institution: Ecophytopic / French plant-protection knowledge ecosystem. Level: national. Source: [Ecophytopic](https://ecophytopic.fr/). Type: national source-discovery and IPM/ecophyto portal. Geographic scope: France. Publication pattern: stable portal. Timing-expression pattern: not enough accessed detail. Recurrence status: `RECURRING REFERENCE` for portal only. Proves: national discovery layer exists. Does not prove: practical regional timing structure. Confidence: MEDIUM.

2. Country: France. Institution: DRAAF regional BSV pages. Level: regional source candidates. Source candidates attempted: Auvergne-Rhone-Alpes, Nouvelle-Aquitaine, Occitanie DRAAF BSV pages. Type: official regional bulletin candidates. Geographic scope: regional. Publication pattern: not sufficiently accessed in this pass. Timing-expression pattern: UNKNOWN. Recurrence status: `UNCLEAR`. Proves: not enough for substantive classification. Does not prove: regional dominance until re-accessed. Confidence: LOW.

### 9.6 Country Assessment

Institutional structure: `UNKNOWN` to `MOSTLY FRAGMENTED` leaning fragmented, but not fully verified.

Geographic structure: likely administrative regions / BSV regions / production basins / monitoring networks.

Publication shape: `UNCLEAR`, likely `MIXED` or seasonal-snapshot-heavy.

Regional differentiation: `HIGH` is plausible but not fully proven in this pass.

Recurring-baseline feasibility: `UNKNOWN` to `LOW/MEDIUM FEASIBILITY` until BSV and stable national/regional references are verified.

Maintenance burden: likely `VERY HIGH`, but evidence confidence is LOW-MEDIUM.

Confidence: LOW-MEDIUM.

## 10. Cross-Country Source-Structure Matrix

| Country | main authority structure | natural source geographic unit | dominant publication shape | dominant timing expression | regional differentiation | recurring-baseline feasibility | maintenance burden | confidence |
|---|---|---|---|---|---|---|---|---|
| SI | Mostly centralized ministry/UVHVVR/KGZS/KIS public ecosystem | national + plant-health regions + KGZS institutes + stations | MIXED | MIXED | MODERATE | HIGH FEASIBILITY | MEDIUM | HIGH |
| AT | Mixed national LKO/Warndienst with Land modules | Land + weather/model/station areas | MIXED | MIXED, weather/stage-heavy | HIGH | MEDIUM-HIGH FEASIBILITY | MEDIUM-HIGH | HIGH |
| DE | Mostly fragmented Lander systems with ISIP aggregator | Land + state advisory/model areas | MIXED | MIXED, model/stage-heavy | HIGH | MEDIUM for state-aware, LOW for simple country | VERY HIGH | MEDIUM-HIGH |
| IT | Mostly fragmented regional phytosanitary systems; national framework needs recheck | region/province + production/monitoring areas | MIXED, likely snapshot-heavy | MIXED | HIGH | MEDIUM for regional, LOW for simple country | VERY HIGH | MEDIUM-LOW |
| CH | Mixed federal Agroscope/Agrometeo plus likely canton/language layers | stations/models + cantons + production/altitude/language areas | MIXED | MIXED | HIGH | MEDIUM | HIGH | MEDIUM |
| FR | National discovery layer plus likely regional BSV systems; under-sourced here | regional/DRAAF/BSV + production basins | UNCLEAR, likely MIXED | UNCLEAR, likely MIXED | likely HIGH | UNKNOWN to LOW/MEDIUM | likely VERY HIGH | LOW-MEDIUM |

## 11. Recurring Reference vs Seasonal Snapshot Comparison

FACT — Slovenia, Austria, Germany, Italy/Veneto, and Switzerland all show mixed systems combining stable references with current-season advisories or models.

FACT — Slovenia has annual ministry integrated-production references and Agromet seasonal notices.

FACT — Austria has stable BBCH/Fleckinger references and live Warndienst/Obstbauwarndienst models.

FACT — Germany has ISIP/state decision aids and state institutions; practical timing appears model/current-condition heavy.

FACT — Veneto explicitly archives annual regional bulletins and links integrated-production resources.

FACT — Switzerland/Agroscope combines recommendations/technical sheets with current forecasts and monitoring.

UNKNOWN — France's BSV and stable reference split remains insufficiently verified in this pass.

## 12. Geographic Granularity Comparison

Cleanest source hierarchy: Slovenia has the cleanest national public structure among verified countries. Austria has a clean central platform but practical Land/model layers.

Structurally fragmented: Germany, Italy, and likely France; Switzerland is mixed because the federal layer is strong but canton/language/topography likely matter.

Natural coarse geographic grouping: Slovenia's five plant-health regions and Austria's Land modules expose coarse source groupings. Switzerland exposes station/model geography. Germany/Italy/France expose administrative-source boundaries more than obvious user-friendly coarse climate bands.

## 13. Timing-Expression Comparison

FACT — Across verified systems, practical timing is rarely pure calendar. It is usually mixed with observed development stage, local weather, model outputs, monitoring results, and regional current conditions.

INFERENCE — Calendar periods may be more available in stable reference manuals, integrated-production materials, or annual guides, but external public advisory systems put substantial weight on development stage and local conditions.

## 14. Institutional Fragmentation Comparison

Least fragmented: Slovenia.

Moderately fragmented: Austria, because central platform exists but Land modules matter.

Mixed/complex: Switzerland, because Agroscope/Agrometeo is central but cantons/language/altitude likely matter.

Most fragmented: Germany and Italy. France likely belongs here, but the France evidence needs completion.

## 15. Maintenance-Burden Comparison

LOW burden: none proven.

MEDIUM: Slovenia.

MEDIUM-HIGH: Austria.

HIGH: Switzerland.

VERY HIGH: Germany, Italy, likely France.

Drivers: number of jurisdictions, annual-only bulletins, station/model structures, language fragmentation, archives, and difficulty proving recurring validity from seasonal snapshots.

## 16. Croatia in European Context

INFERENCE — Croatia's snapshot-heavy evidence problem is not unusual. Slovenia, Austria, Germany, Italy/Veneto, and Switzerland all expose practical timing through seasonal notices, warning services, monitoring, phenology, local weather, or predictive models.

FACT — What differs is hierarchy cleanliness: Slovenia and Austria provide more centralized discovery/portal structures than Germany/Italy/France appear to provide.

## 17. Evidence Relevant to the Current `region` Concept

Evidence strongly supports keeping source jurisdiction, geographic coverage, publication recurrence, and timing expression separate during analysis.

Evidence weakens any assumption that `region` naturally means only country subdivision. In sources, practical geography can mean official plant-health region, Land, administrative region, canton, production area, weather station, model area, language area, or altitude/geographic zone.

Strong pressure on current `region` meaning: Germany, Italy, France, Switzerland.

Moderate pressure: Austria.

Lower pressure: Slovenia, because a national/regional public structure is relatively visible, though still not purely country-wide.

No architecture decision is made here.

## 18. Evidence Relevant to the Country-Baseline Concept

Evidence strongly supports: one country-level citation hierarchy may be feasible for Slovenia, and partially feasible for Austria if Land/model layers are preserved as evidence context.

Evidence weakens: one simple country baseline for Germany, Italy, France, and probably Switzerland.

Ambiguous: whether a source-backed national planning baseline can coexist with region-specific seasonal evidence without inventing precision.

No architecture decision is made here.

## 19. Strongest Findings

1. Practical European fruit guidance is commonly source-fragmented below the country level.

2. Seasonal snapshots, warning services, monitoring, and weather/model systems are common, not exceptional.

3. Stable references exist, but they often describe frameworks, stages, or integrated-production rules rather than ready-made recurring beginner orchard dates.

4. Administrative source boundaries are highly visible in Germany, Italy, and likely France.

5. Weather-station/model geography is highly visible in Slovenia, Austria, and Switzerland.

6. The cleanest verified public hierarchy is Slovenia; the most maintenance-heavy verified hierarchy is Germany, with Italy likely similar once fully mapped.

## 20. Important Unknowns

- Whether each country has stable, public, non-treatment orchard timing references for every Vocnjak species.
- Whether seasonal advisories can be responsibly abstracted into recurring planning baselines without inventing calendar precision.
- How many years of archives are needed before a seasonal snapshot pattern can support recurring planning.
- Whether Switzerland's canton/language/altitude structure can be summarized coarsely without losing source integrity.
- Whether France's BSV regions and national CTIFL/Chambres/DRAAF materials provide a maintainable baseline hierarchy.
- Whether Italy's national SQNPI framework can reduce regional maintenance burden or only adds a national compliance layer.

## 21. Evidence Gaps

Italy: verify national SQNPI / Rete Rurale pages and at least Emilia-Romagna, Trentino, South Tyrol, Piemonte, Friuli, and one southern region.

Switzerland: map canton-level fruit advisory sources such as Thurgau/Arenenberg, Zurich/Strickhof, Valais, Vaud, Ticino, plus language-region publication patterns.

France: map BSV Arboriculture by DRAAF region, CTIFL stable references, Chambres d'agriculture advisory pathways, and archive stability.

Germany: sample more Lander beyond BW/RLP/ISIP discovery, especially Bavaria, Lower Saxony/Altes Land, NRW, Saxony, and Schleswig-Holstein.

Austria: sample Land-level advisory pages for Steiermark, Niederosterreich, Tirol, Vorarlberg, and Karnten to verify publication recurrence outside the central portal.

Slovenia: inspect the actual fruit/olive integrated-production documents for non-treatment timing structures while avoiding extraction of treatment schedules.

## 22. Handoff Questions for the Architecture Analysis Pass

What the evidence strongly supports:

- Treat source jurisdiction separately from geographic coverage.
- Treat publication recurrence separately from timing expression.
- Expect seasonal snapshots and model/station systems across Europe.
- Expect administrative-source boundaries to matter for citation and maintenance.

What the evidence weakens:

- A universal assumption that one country equals one maintainable timing baseline.
- A universal assumption that a small number of user-facing bands will match source structures in every country.
- A universal assumption that source geography is the same as climate geography.

What remains ambiguous:

- Whether stable references can carry enough recurring timing information without seasonal snapshots.
- Whether beginner-selectable coarse areas can be source-backed in highly fragmented countries.
- Whether current ≤3-band thinking is plausible outside Slovenia/Austria without additional evidence.
- How to handle altitude and station-model evidence without inventing precision.

Which earlier architecture questions are now partly answerable:

- Croatia's snapshot-heavy problem appears common, not exceptional.
- Germany/Italy/France exert strong pressure against a simple country-only source model.
- Slovenia and Austria provide cleaner source hierarchies than larger fragmented systems.

Which questions still require research or owner decisions:

- The acceptable standard for deriving recurring planning baselines from seasonal advisory archives.
- Whether to launch with country-level baselines, sub-country baselines, or another evidence model.
- How much source maintenance burden is acceptable by country.
- Whether source-discovery boundaries should be user-visible, internal-only, or both.

Final decision: EVIDENCE_CORPUS_PARTIAL

A2 output

I could complete the A2 research text, but I could not update /Users/mboban/Desktop/vocnjak-seasonal-pass-a-evidence.md: the Desktop path is not writable from the current sandbox, and escalated shell access is temporarily blocked by the approval/usage limit. The repository stayed clean.
European Seasonal Timing — External Pass A2 Completion
1. Status and Scope
FACT — Mandatory read-only gate re-run before A2:
git status --short: empty.
git branch --show-current: main.
git log --oneline -3: f3df95a, 993d153, cf3a51f.
git worktree list: single expected worktree at /Users/mboban/Documents/GIT repo/vocnjak.
Sentinel scan: ignored .DS_Store and .claude/ only; untouched.
External corpus exists at /Users/mboban/Desktop/vocnjak-seasonal-pass-a-evidence.md.
FACT — A2 scope: only Italy, Switzerland, and France were researched. Existing SI/AT/DE evidence was preserved conceptually and not re-litigated.
UNKNOWN — The Desktop corpus file was not updated because the current sandbox cannot write to Desktop and escalation is unavailable.
2. Existing Corpus Gaps
FACT — Pre-A2 gaps:
Italy: Veneto was strong; national SQNPI and wider regional/provincial evidence were weak.
Switzerland: Agroscope/Agrometeo was identified; canton/language/altitude evidence needed strengthening.
France: national/regional BSV structure was materially under-sourced.
INFERENCE — A2 materially improves all three. France is now source-structure-analyzable through EcophytoPIC BSV evidence, even though direct DRAAF regional page sampling remains incomplete.
3. Italy
3.1 National Framework
FACT — Italy has a national integrated-production framework through SQNPI / Rete Rurale / MASAF:
Rete Rurale — Produzione integrata
Linee guida nazionali di produzione integrata 2026
Disciplinari regionali 2026
Banca dati delle norme di Produzione Integrata
FACT — National pages show annual national guidelines, regional disciplinari, and multi-year archives.
INFERENCE — The national layer is a recurring compliance/reference layer, not a single practical orchard timing system.
3.2 Cross-Regional Institutional Map
FACT — Regional/provincial public systems are substantial:
Veneto U.O. Fitosanitario publishes territorial bulletins and archives: Veneto bulletins.
Emilia-Romagna publishes interprovincial integrated/organic bulletins, regional agrometeorological bulletins, forecast/warning systems, and regional disciplinari.
Piemonte publishes regional integrated-production disciplinari: Piemonte DPI 2026.
Puglia publishes regional integrated-production pages and annual disciplinari: Puglia produzione integrata.
Provincia autonoma di Trento publishes annual integrated-production disciplinare: Trento DPI 2026.
INFERENCE — Practical authority is mainly regional/provincial, under a national framework.
3.3 Geographic Structure
FACT — SQNPI explicitly organizes regional disciplinari by administrative regions and autonomous provinces.
FACT — Veneto uses territorial bulletins. Emilia-Romagna uses six interprovincial bulletin areas and model/monitoring support.
INFERENCE — Italy’s natural source geography is mixed: administrative regions/provinces, interprovincial territories, production areas, and monitoring/weather/model networks.
3.4 Publication Pattern
Dominant publication shape: MIXED.
FACT — National and regional disciplinari are recurring annual references.
FACT — Veneto and Emilia-Romagna bulletins are current-season/periodic territorial advisories with archives.
3.5 Timing Expression
Dominant timing expression: MIXED.
FACT — Veneto bulletins explicitly combine meteorological trend, phenological phase, epidemiological/current local situation, monitoring networks, and predictive models.
INFERENCE — Stable references can support source structure, but practical timing is not primarily a fixed national calendar.
3.6 Evidence Records
Italy — Rete Rurale / MASAF / SQNPI. Level: national. Type: national integrated-production framework. Scope: Italy. Publication: annual national guidelines and archives. Timing: UNCLEAR/MIXED. Recurrence: RECURRING REFERENCE. Proves: national recurring framework and regional-source discovery. Does not prove: one practical national orchard baseline. Confidence: HIGH.

Italy — Rete Rurale regional disciplinari. Level: national index of regional/provincial sources. Type: source registry/reference. Scope: Italian regions and autonomous provinces. Publication: annual. Timing: UNCLEAR. Recurrence: RECURRING REFERENCE. Proves: official regionalized source structure. Does not prove: harmonized practical timing. Confidence: HIGH.

Italy — Regione Veneto U.O. Fitosanitario. Level: regional. Type: regional phytosanitary bulletin system. Scope: Veneto territories. Publication: periodic bulletins with annual archives. Timing: MIXED. Recurrence: MIXED. Proves: strong regional practical advisory system. Does not prove: Italian uniformity. Confidence: HIGH.

Italy — Emilia-Romagna phytosanitary service. Level: regional/interprovincial. Type: territorial bulletins, forecast/warning, regional disciplinari. Scope: region plus six interprovincial bulletin areas. Publication: recurring references plus weekly/current advisories. Timing: MIXED. Recurrence: MIXED. Proves: sub-regional practical geography inside a region. Does not prove: simple region-only geography. Confidence: HIGH.

Italy — Regione Piemonte. Level: regional. Type: integrated-production disciplinari. Scope: Piemonte. Publication: annual recurring reference. Timing: UNCLEAR/MIXED. Recurrence: RECURRING REFERENCE. Proves: regional annual standards under national guidelines. Does not prove: seasonal bulletin pattern. Confidence: HIGH.

Italy — Regione Puglia. Level: regional. Type: integrated-production guidance. Scope: Puglia. Publication: annual regional disciplinari. Timing: UNCLEAR/MIXED. Recurrence: RECURRING REFERENCE. Proves: southern regional recurring source layer. Does not prove: practical timing bulletin completeness. Confidence: HIGH.

Italy — Provincia autonoma di Trento. Level: autonomous province. Type: annual integrated-production disciplinare. Scope: Trento. Publication: annual. Timing: UNCLEAR. Recurrence: RECURRING REFERENCE. Proves: province-level official source ownership. Does not prove: national normalization. Confidence: HIGH.

3.7 Revised Italy Assessment
Institutional structure: MOSTLY FRAGMENTED.
Geographic structure: administrative regions/provinces plus interprovincial territories, production areas, and monitoring/model networks.
Publication shape: MIXED.
Regional differentiation: HIGH, following administrative ownership and sub-regional advisory territories.
Recurring-baseline feasibility: MEDIUM FEASIBILITY for region/province-aware source-backed baselines; LOW FEASIBILITY for one simple country baseline.
Maintenance burden: VERY HIGH.
Confidence: HIGH-MEDIUM.
4. Switzerland
4.1 Federal Layer
FACT — Switzerland has a strong federal layer:
OFAG / BLW is the federal agriculture authority.
Agroscope is the federal agricultural research institution.
Agrometeo is an Agroscope platform with meteorology, arboriculture, viticulture, field crops, stations, cantons, altitude, regions, BBCH/stage, observations, reports, and “Bulletins des cantons” structures visible in the platform.
INFERENCE — Federal source infrastructure is strong, but it does not erase cantonal/language/geographic fragmentation.
4.2 Cantonal Advisory Sample
FACT — Zurich/Strickhof publishes a fruit and berries competence/advisory page:
Strickhof — Obst & Beeren
It describes Fachstelle Obst support for fruit and berry producers in Canton Zurich, advice, services, training, and plant-health recommendation links.
FACT — Valais/SCA has an official agriculture/arboriculture structure:
Valais SCA — Arboriculture
The page sits under SCA / plant protection / arboriculture and exposes French/German language navigation.
FACT — Agrometeo itself references canton bulletins and canton fields.
UNKNOWN — A complete canton-by-canton inventory was not completed.
4.3 Language / Geography / Altitude Structure
FACT — Agrometeo has French, German, and Italian language alternates.
FACT — Agrometeo exposes station, canton, region, altitude, observation, report, BBCH, and canton-bulletin fields.
FACT — Valais official pages expose French/German site paths; Swiss federal and Agrometeo sources are multilingual.
INFERENCE — Switzerland’s natural source structure is multiple overlapping units: federal, canton, language region, station/model area, production geography, and altitude/topography.
4.4 Publication Pattern
Dominant publication shape: MIXED.
FACT — Agrometeo is a current data/model platform.
FACT — Agroscope and cantonal services provide standing references/advisory pages.
INFERENCE — Practical planning evidence likely combines stable federal/cantonal references with seasonal/current-condition snapshots.
4.5 Timing Expression
Dominant timing expression: MIXED.
FACT — Agrometeo exposes weather stations, forecasts, observations, BBCH/stage, reports, canton bulletins, and altitude.
INFERENCE — Swiss timing evidence is strongly condition/stage/station-aware rather than purely calendar-based.
4.6 Evidence Records
Switzerland — OFAG / BLW. Level: federal. Source: OFAG. Type: federal agriculture authority. Scope: Switzerland. Publication: standing authority portal. Timing: not fruit-specific. Recurrence: RECURRING REFERENCE for authority context. Proves: federal ownership context. Does not prove: orchard timing. Confidence: HIGH.

Switzerland — Agroscope / Agrometeo. Level: federal with station/model layer. Source: Agrometeo. Type: agrometeorological advisory platform. Scope: Switzerland. Publication: current platform plus references. Timing: MIXED. Recurrence: MIXED. Proves: federal platform exposing arboriculture, stations, cantons, regions, altitude, observations, reports, BBCH, and canton bulletins. Does not prove: one national calendar. Confidence: HIGH.

Switzerland — Strickhof Fachstelle Obst. Level: canton / Zurich. Source: Strickhof Obst & Beeren. Type: cantonal/public advisory and competence service. Scope: Canton Zurich and related users. Publication: standing advisory service with linked recommendations. Timing: UNCLEAR/MIXED. Recurrence: MIXED. Proves: canton-facing fruit advisory layer exists. Does not prove: all cantons have identical structures. Confidence: HIGH.

Switzerland — Valais SCA. Level: canton. Source: Valais arboriculture. Type: cantonal agriculture/plant-protection/arboriculture page. Scope: Valais. Publication: standing authority/service page. Timing: UNCLEAR. Recurrence: RECURRING REFERENCE for source structure. Proves: canton and language-region source layer. Does not prove: complete timing baseline. Confidence: MEDIUM-HIGH.

4.7 Revised Switzerland Assessment
Institutional structure: MIXED.
Geographic structure: federal + canton + station/model + altitude/topography + language regions.
Publication shape: MIXED.
Regional differentiation: HIGH, following station networks, cantons, language regions, and geography/altitude.
Recurring-baseline feasibility: MEDIUM FEASIBILITY.
Maintenance burden: HIGH.
Confidence: HIGH-MEDIUM.
5. France
5.1 National Layer
FACT — France has national source-discovery and reference layers:
EcophytoPIC is the national integrated crop-protection portal.
EcophytoPIC BSV base documents the Bulletin de Santé du Végétal system.
CTIFL is the technical center for the fruit and vegetable sector.
FACT — CTIFL provides publications, guides, OAD/tools, species pages, technical research themes, operational centers, and regional experimental network relationships.
INFERENCE — National references exist, but practical timing guidance is mainly regional/current-condition through BSV structures.
5.2 DRAAF / SRAL / BSV Structure
FACT — EcophytoPIC states that BSVs are available free on regional chambers of agriculture and DRAAF sites.
FACT — EcophytoPIC states that BSVs are dispersed across different regional sites, so it created a base to gather them.
FACT — The BSV base is filterable by Filière and Région; it explicitly lists Arboriculture and regions including Auvergne-Rhône-Alpes, Nouvelle-Aquitaine, Occitanie, Pays de la Loire, and Provence-Alpes-Côte d’Azur.
FACT — EcophytoPIC describes BSV contents structurally: crop health state at a given moment, development stages, observations, risk evaluation for coming days, sensitivity periods, thresholds, and regulatory messages.
FACT — EcophytoPIC describes BSV inputs: observation data from fixed/floating plot networks, local field agents including chambers/cooperatives/trade and farmers, modelling data from technical institutes/INRA/regional plant-protection services, and biological lab follow-up.
INFERENCE — France’s practical advisory structure is regional BSV-dominant and seasonal-snapshot-heavy.
5.3 Regional Sample
FACT — EcophytoPIC’s BSV base exposes regional access points for multiple mainland fruit-relevant regions: Auvergne-Rhône-Alpes, Nouvelle-Aquitaine, Occitanie, Pays de la Loire, and Provence-Alpes-Côte d’Azur.
FACT — The same base exposes an Arboriculture filière filter.
UNKNOWN — Direct DRAAF page-level sampling for each named region remains incomplete in this run due access/tool limits.
5.4 Geographic Structure
Natural source unit: region / DRAAF-CRA regional source boundaries, with production basins and observation/model networks underneath.
FACT — The national BSV base organizes by administrative region and filière.
FACT — BSV evidence is based on plot networks and models, which means practical geography is not only administrative.
5.5 Publication Pattern
Dominant publication shape: MIXED, snapshot-heavy.
FACT — BSVs are dated/current condition documents.
FACT — EcophytoPIC and CTIFL provide stable reference/discovery structures.
INFERENCE — The recurring structure is the bulletin system and archive/search framework; individual timing evidence is seasonal snapshot.
5.6 Timing Expression
Dominant timing expression: MIXED.
FACT — BSV timing uses crop development stages, current observations, risk for coming days, sensitivity periods, and model outputs.
INFERENCE — Calendar-only recurring planning would not reflect the dominant public source structure.
5.7 Evidence Records
France — EcophytoPIC. Level: national. Source: EcophytoPIC. Type: national integrated crop-protection portal. Scope: France. Publication: stable portal plus current articles. Timing: MIXED by linked systems. Recurrence: MIXED. Proves: national discovery/reference layer exists. Does not prove: one national orchard timing baseline. Confidence: HIGH.

France — EcophytoPIC BSV base. Level: national database of regional BSVs. Source: BSV base. Type: BSV source-discovery/database. Scope: national, region, filière. Publication: BSV archive/search framework. Timing: MIXED. Recurrence: MIXED, with individual BSVs as SEASONAL SNAPSHOT. Proves: regional DRAAF/CRA BSV system, region/filière filters, observation/model/stage structure. Does not prove: stable cross-year dates. Confidence: HIGH.

France — CTIFL. Level: national technical institute with regional centers/network. Source: CTIFL. Type: public-interest technical center for fruit and vegetables. Scope: France; centers in production basins. Publication: publications, guides, OAD/tools, research, training. Timing: MIXED/UNCLEAR for seasonal timing. Recurrence: RECURRING REFERENCE and MIXED. Proves: stable fruit-sector technical reference layer exists. Does not prove: official regional BSV timing ownership. Confidence: HIGH.

France — Regional DRAAF/CRA BSV systems. Level: regional. Source: evidenced through EcophytoPIC BSV base. Type: regional bulletins. Scope: regions/filières. Publication: current/datable bulletins. Timing: MIXED. Recurrence: SEASONAL SNAPSHOT within recurring bulletin system. Proves: practical guidance is regionally fragmented. Does not prove: direct page stability for each regional host. Confidence: MEDIUM-HIGH.

5.8 Revised France Assessment
Institutional structure: MOSTLY FRAGMENTED.
Geographic structure: administrative regions/DRAAF-CRA boundaries plus filière, production basins, plot networks, and modelling networks.
Publication shape: MIXED, strongly seasonal-snapshot-heavy.
Regional differentiation: HIGH.
Recurring-baseline feasibility: MEDIUM FEASIBILITY for regional/source-aware baselines; LOW FEASIBILITY for one simple country baseline.
Maintenance burden: VERY HIGH.
Confidence: HIGH-MEDIUM.
6. Revised Cross-Country Matrix
Country	main authority structure	natural source geographic unit	dominant publication shape	dominant timing expression	regional differentiation	recurring-baseline feasibility	maintenance burden	confidence
SI	Mostly centralized ministry/UVHVVR/KGZS/KIS ecosystem	national + plant-health regions + advisory institutes + stations	MIXED	MIXED	MODERATE	HIGH	MEDIUM	HIGH
AT	National LKO/Warndienst with Land modules	Land + weather/model/station areas	MIXED	MIXED	HIGH	MEDIUM-HIGH	MEDIUM-HIGH	HIGH
DE	Lander systems with ISIP aggregator	Land + advisory/model/production areas	MIXED	MIXED	HIGH	MEDIUM state-aware, LOW simple country	VERY HIGH	MEDIUM-HIGH
IT	National SQNPI framework plus regional/provincial practical systems	region/province + interprovincial + production/monitoring areas	MIXED	MIXED	HIGH	MEDIUM regional, LOW simple country	VERY HIGH	HIGH-MEDIUM
CH	Federal Agroscope/Agrometeo plus canton/language/station layers	canton + station/model + altitude + language/production areas	MIXED	MIXED	HIGH	MEDIUM	HIGH	HIGH-MEDIUM
FR	National EcophytoPIC/CTIFL plus regional DRAAF/CRA BSV systems	region/filière + production basins + observation/model networks	MIXED, snapshot-heavy	MIXED	HIGH	MEDIUM regional, LOW simple country	VERY HIGH	HIGH-MEDIUM

7. Remaining Material Unknowns
FACT — Remaining gaps are non-trivial but no longer block architecture-analysis comparison:
Italy: full per-region inventory and autonomous province language handling.
Switzerland: full canton inventory, especially Ticino/Vaud/Thurgau and altitude-specific recurring references.
France: direct DRAAF/CRA regional page sampling and archive stability by region.
INFERENCE — The largest unresolved question is not whether these countries have public source structures; they do. The unresolved question is how much abstraction is legitimate without inventing precision.
8. Corpus Readiness for Architecture Analysis
What the evidence strongly supports:
Source jurisdiction, geographic coverage, recurrence, and timing expression must stay separate.
Italy, France, and Germany put strong pressure on one-country baseline assumptions.
Switzerland puts strong pressure on canton/language/station/altitude distinctions.
Seasonal snapshots are common, not a Croatia-only problem.
What the evidence weakens:
A simple assumption that country-level sources are enough.
A simple assumption that public timing guidance is calendar-first.
A simple assumption that administrative boundaries and climatic timing boundaries align.
What remains ambiguous:
How much seasonal snapshot evidence can support recurring planning baselines.
Whether beginner-facing geography can be coarse while citations remain source-faithful.
Whether altitude/station evidence should be internal-only, user-facing, or deferred.
Which earlier questions are now answerable:
Italy, Switzerland, and France all have public, citable source structures.
All three require source-aware maintenance below country level.
France’s BSV system makes Croatia’s snapshot-heavy problem look common rather than unusual.
Which questions still require research or owner decisions:
Acceptable evidence threshold for recurring baselines derived from seasonal archives.
Launch scope by country versus sub-country source granularity.
Maintenance budget for very fragmented countries.
Whether regional source boundaries should be user-visible or only citation/curation metadata.
Final decision: RESEARCH_BLOCKED
Reason: the evidence text is ready, but the required Desktop persistence step could not be completed due sandbox write restrictions plus temporary escalation/approval limit.
Final verification:
git status --short: empty.
git diff --name-only: empty.
READ-ONLY PASS — no repo files changed.