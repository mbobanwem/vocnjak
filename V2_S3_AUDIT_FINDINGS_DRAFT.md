# V2 S3 AUDIT FINDINGS DRAFT

## Status

Draft S3 audit findings.

This document is not source of truth, not schema, not runtime behavior, not implementation, and not final catalog content.

It records S3 audit findings, ambiguity, owner-decision items, source-check items, and candidate mapping notes.

Final catalog/template promotion happens only after S3-S5 audit, owner decisions, and approved targeted edits.

---

# S3.1 Apple-only S3 Audit Dry-run

## 1. Executive verdict

Apple is ready for S3 scale-up as-is.

Apple is the strongest, most beginner-clear template in the file. All 10 shared entries that apply to apple plus all 5 apple-specific entries are present, calendar windows are useful for planning, plant-state cues are concrete, product/material categories are named without brand lock-in, skip/delay wording is consistent, and the no-auto-spray stance holds across every spray entry.

The pheromone-trap monitoring entry is well formed: install action, weekly cadence, and "no catch -> no insecticide" rule are all explicit. It is the cleanest source-backed monitoring-program candidate in the audit.

Recommendation:

- Materialize this apple dry-run as the first section of `V2_S3_AUDIT_FINDINGS_DRAFT.md`.
- Get owner approval of this findings format.
- Then proceed to S3.2 pome audit: pear + quince.
- Do not run a targeted apple wording fix before S3.2.

Only minor wording-polish gaps were found. None block scale-up.

---

## 2. Apple coverage summary

| Area | Status | Notes |
|---|---|---|
| Shared yearly work | OK | All 10 shared entries apply to apple per the shared block scope statement; calendar windows span January to October. |
| Apple-specific work | OK | 5 entries: post-bloom protection, codling-moth monitoring, fruit thinning, bird net, harvest. |
| Harvest / variety linkage | Minor gap | Template harvest window `8.20-10.20` matches mid + late fallbacks and named current varieties, but does not cover the early fallback `Aug 1 - Sep 5`. No current apple catalog variety is `timing: early`, so this is latent. |
| Monitoring | OK | Codling-moth pheromone trap: install + weekly check + "no catch -> no insecticide" - clean monitoring-program candidate. |
| Spray/protection safety | OK | Oil/copper 7-10 day gap, no spray in bloom or bee flight, label/regulation decoder line present in most entries. |
| Beginner clarity | Minor gap | `fenofaza`, bare `stručni savjet`, and `bujno stablo` appear without full beginner translation in places; concrete cues such as fruitlet size, starch/taste, brown seeds are strong where present. |
| Regional caveat | OK | Apple's agronomic-context wording is the strongest in the file and is reusable as a cross-species pattern. |
| Product/material category clarity | Minor gap | Mostly clear; two weak spots: fertilization entry does not name a fertilizer category, and bird-net entry lacks the size/type detail carried by cherry/peach entries. |

---

## 3. Entry-by-entry findings

| Entry | Source section | Calendar planning window | Purpose clarity | Beginner cues | Product/material category | Skip/delay/avoid | Monitoring/treatment safety | Regional caveat | Status | Finding |
|---|---|---|---|---|---|---|---|---|---|---|
| Krečenje debla | SHARED §1 | `1.15-2.10` | OK - protects bark from cracking due to frost/sun changes. | OK - dry weather, above 0°C. | OK - lime paint or commercial whitewash for fruit trees. | OK - especially young/exposed trees. | n/a | absent | OK | Could optionally inherit apple-style regional caveat in S5. |
| Bijelo mineralno ulje | SHARED §2 | `2.1-2.15` | OK - overwintering eggs/forms: mites, aphids, scale insects. | OK - late dormancy, close to bud swell, before bloom. | OK - mineral oil category present; label referenced. | OK - no frost forecast, no stressed tree, respect label, 7-10 days from copper. | OK | absent | OK | Young-tree note ends in bare `stručni/lokalni savjet`; queue clarity decoder. |
| Bakar - zimska zaštita | SHARED §3 | `2.15-2.28` | OK - bark canker, spotting, monilia-related disease context. | Minor gap - no explicit beginner plant-state cue such as buds still closed / before bloom. | OK - registered copper preparation. | OK - 7-10 days from oil, dry weather. | OK | absent | Minor gap | Add plant-state cue and label/regulation decoder line in S5. |
| Zimska rezidba | SHARED §4 | `3.1-3.15` | OK - airy canopy, controlled height. | OK - dry weather; young-tree form guidance. | OK - disinfect tools; wound protection category for larger cuts. | OK - dry weather. | n/a | absent | OK | Strong young-tree guidance: vase for stone fruit, spindle for apple/pear. |
| Bakar na rane nakon rezidbe | SHARED §5 | `3.1-3.20` | OK - cover fresh pruning wounds before buds open. | OK - before bud opening. | OK - registered copper preparation. | Excellent - explicitly says not automatic after every pruning; assess wound size, disease history, rain forecast. | OK - no bloom, respect compatibility/label. | absent | OK | Gold-standard skip wording; reusable pattern. |
| Rana proljetna gnojidba | SHARED §6 | `3.1-4.15` | OK - supports vegetation start, moderate young-tree growth, fruiting. | Minor gap - `bujnost` / very vigorous tree not translated into visual cue. | Missing - does not name a fertilizer category. | OK - do not fertilize automatically; avoid excess nitrogen/late-season nitrogen. | n/a | absent | Minor gap | Strongest beginner product-category gap in apple/shared block. Queue S5 wording. |
| Sezonsko navodnjavanje | SHARED §7 | `6.20-8.31` | OK implicit - seasonal drought support. | Excellent - check soil moisture several cm below surface; ~25 mm/week target. | OK - drip recommended. | OK - reduce/skip if soil still moist; young trees priority. | n/a | absent | OK | One of the best beginner cues in the file. |
| Ljetna rezidba | SHARED §8 | `7.1-7.15` | OK - light, air, vigor control. | OK - new shoots reach 10-20 cm. | n/a | OK - avoid extreme heat above 30°C. | n/a | absent | OK | Concrete length cue for beginner. |
| Gašenje navodnjavanja | SHARED §9 | `9.1-9.15` | OK implicit. | OK - weather and soil condition. | n/a | OK - do not stop too early for young trees/drought. | n/a | absent | OK | Advisory framing; possible overlap with irrigation entry, defer. |
| Pregled za zimu | SHARED §10 | `10.1-10.31` | OK - winter readiness. | OK - trunk, wounds, ties, rodent protection, supports, mummified fruit. | n/a | n/a | n/a | absent | OK | Strong observation entry. |
| Post-bloom zaštita - krastavost i pepelnica | APPLE §1 | `4.10-5.10` | OK - apple scab and powdery mildew. | OK - after petal fall through early leaf/fruit development. | OK - registered fungicide for apple and target disease. | Excellent - dry spring/no disease history/no fruit priority can reduce or skip; wet canopy/history/spots justify shorter interval/local advice. | OK - no bloom, no active bee flight, respect label/dose/PHI/local rules. | n/a | OK | `Stručni savjet` used as catch-all; queue cross-cutting decoder. |
| Praćenje jabučnog savijača | APPLE §2 | `4.25-8.15` | OK - codling moth causes wormy fruit and entry holes. | OK - install around bloom/post-bloom, 1.5-2 m height, outer canopy, weekly checks. | OK - pheromone trap; registered product if treatment is ever justified. | OK - no catch/no damage -> insecticide not justified. | Excellent - monitoring evidence does not equal treatment. | n/a | OK | Cleanest monitoring-program candidate in the audit. |
| Prorjeđivanje plodova | APPLE §3 | `5.15-6.15` | OK - fruit size/quality and alternate bearing reduction. | Excellent - after natural fruitlet drop, fruitlets marble-sized; 1-2 per cluster or 10-15 cm spacing. | n/a | OK - minimal thinning if crop already weak; reduce crop on young/weak tree. | n/a | n/a | OK | Best beginner cue pattern in the file. |
| Mreža protiv ptica - jabuka | APPLE §4 | `8.15-10.1` | OK - bird pecking / repeated pressure. | OK - as fruit ripens. | Weak - says net, but no size/type/fixing detail. | OK - skip if no visible bird pressure; not needed without crop. | n/a | n/a | Minor gap | Borrow stone-fruit specificity such as size/type/edge closure in S5. |
| Berba jabuke | APPLE §5 | `8.20-10.20` | OK. | Excellent - color shift, taste no longer starchy, brown seeds, lifts/twists off; Fuji note. | n/a | OK - multiple passes, dry harvest, avoid morning dew, remove damaged/mummified fruit. | n/a | n/a | OK | Catalog examples match named varieties; early-fallback latent mismatch noted separately. |

---

## 4. Candidate mapping notes

Audit notes only. These are not final V2 records.

| Source entry | Possible V2 concept | Confidence | Why | Do not finalize because |
|---|---|---|---|---|
| Krečenje debla | `action_window_definition` candidate, calendar anchor | High | Bounded calendar window, discrete action. | Final shape is S5. |
| Bijelo mineralno ulje | `action_window_definition` candidate, phenology + calendar context | High | Source describes late dormancy / near bud swell / before bloom and bounded calendar window. | Stage vocabulary not finalized; formal gate decision is S5/audit-governed. |
| Bakar - zimska zaštita | `action_window_definition` candidate + advisory sequencing note | Medium | Source explicitly states oil/copper 7-10 day spacing. | Whether this becomes a formal prior-activity gate is an S4/S5 decision; could remain advisory note. |
| Zimska rezidba | `action_window_definition` candidate, calendar anchor | High | Discrete bounded action. | Final shape is S5. |
| Bakar na rane nakon rezidbe | `action_window_definition` candidate; sequencing in notes only | Medium | Source mentions pruning relationship but explicitly says not automatic after each pruning. | Strong argument against formal gate; source denies automatic post-pruning behavior. |
| Rana proljetna gnojidba | `action_window_definition` candidate, calendar anchor | High | Bounded calendar window. | Product/material category wording gap should be resolved before final content. |
| Sezonsko navodnjavanje | action window or advisory care period | Owner decision | Long window and soil-moisture-driven behavior is more continuous than a discrete action. | Could require future UX/model decision; do not invent model concept now. |
| Ljetna rezidba | `action_window_definition` candidate, shoot-length cue + calendar fallback | High | Source gives explicit shoot length cue, 10-20 cm. | Stage/cue vocabulary not finalized. |
| Gašenje navodnjavanja | action window or advisory note | Low | Advisory reminder more than discrete agronomic action. | Defer final mapping. |
| Pregled za zimu | observation-style action window | High | Discrete bounded checklist-style observation. | Final action/observation mapping is S5. |
| Post-bloom zaštita - krastavost i pepelnica | `action_window_definition` candidate, petal-fall anchor + calendar | High | Source gives after-petal-fall context and disease purpose. | Bloom avoidance is safety/context note, not automatic gate unless audit rules support it. |
| Praćenje jabučnog savijača | setup action window + monitoring program candidate | High | Install + recurring check + device + named target all present. | Program/window split, notes partition, and final records are S5 work. |
| Prorjeđivanje plodova | `action_window_definition` candidate, fruitlet-size cue + calendar | High | Source gives marble-size fruitlets and post-natural-drop cue. | Fruitlet stage vocabulary not finalized. |
| Mreža protiv ptica - jabuka | `action_window_definition` candidate with skip-conditions | High | Bounded window and observed-pressure conditions. | Product/material spec polish queued. |
| Berba jabuke | harvest window linked to catalog variety/fallback timing | High | Template defers timing to catalog and gives variety examples. | Variety-to-window runtime/pinning is later architecture/implementation work. |

---

## 5. Beginner-clarity findings

| ID | Finding | Where | Disposition |
|---|---|---|---|
| BC1 | `Fenofaza` appears without full beginner translation. | Bakar - zimska zaštita young-tree note. | Queue for S4/S5. Add one decoder/glossary line rather than per-entry rewrite. |
| BC2 | `Stručni/lokalni savjet` does not identify what kind of resource the beginner should contact. | Oil, copper, post-bloom, codling-moth notes. | Queue for S4/S5. Suggested decoder: advisory service, certified agronomist, phytosanitary expert, nursery professional. |
| BC3 | `Bujno stablo` / very vigorous tree is not translated into a visual cue. | Rana proljetna gnojidba. | Queue for S4/S5. |
| BC4 | Fertilizer category is not named. | Rana proljetna gnojidba. | Strongest wording gap. Queue for S5; fix earlier only if owner opens S3.0C. |
| BC5 | Copper winter entry lacks the full label/regulation decoder line used elsewhere. | Bakar - zimska zaštita. | Queue for S4/S5 consistency fix. |
| BC6 | Copper winter entry lacks explicit plant-state cue such as still dormant / buds closed / before bloom. | Bakar - zimska zaštita. | Queue for S4/S5. |
| BC7 | `Lokalni prag` has no beginner anchor for trap counts. | Praćenje jabučnog savijača. | Defer. Avoid inventing thresholds; preserve no-auto-spray. |
| BC8 | Apple bird net lacks size/type/fixing specificity compared with stone fruit entries. | Mreža protiv ptica - jabuka. | Queue for S4/S5 consistency fix. |

No finding blocks S3.2.

---

## 6. Safety / no-auto-spray findings

| Constraint | Apple status |
|---|---|
| No automatic spray calendar | Preserved. Spray entries use conditional framing and skip/reduce wording. |
| Monitoring does not equal treatment | Preserved. Codling-moth entry states no catch/no damage -> insecticide not justified. |
| No treatment during bloom / bee flight | Preserved in relevant post-bloom/spray entries. |
| Weather constraints | Preserved: dry weather, no wind, temperature/frost constraints appear where relevant. |
| Label / local regulation constraints | Mostly preserved. Label/dose/PHI/bee/local-rule decoder line is present in most entries; missing in winter copper entry. |
| Oil/copper 7-10 day gap | Preserved globally and per relevant entries. |

No safety blocker found.

---

## 7. Regional / climate findings

Apple's agronomic-context block contains a strong regional caveat:

> Kalendarski prozori su baseline podsjetnici. U toplijim regijama radnje mogu krenuti ranije, u hladnijim kasnije. Fenološko stanje stabla i lokalni uvjeti imaju prednost pred datumom.

Assessment:

- Compliant with current product vision and `V2_AGENT_ENTRYPOINT.md`.
- No numeric offset.
- No `climateProfile`, `regionProfile`, `offsetDays`, or formulas.
- Calendar-first and plant-state-aware.

Recommendation:

- Use this as the cross-species pattern later, likely in S5 after S3 confirms it scales.
- Do not apply it pre-S3.
- Consider adding one beginner decoder for `fenološko stanje` in a shared glossary/preamble.

---

## 8. Apple catalog consistency check

| Item | Catalog value | Template value | Match? |
|---|---|---|---|
| Gala | mid, Aug 20 - Sep 10 | Gala, Aug 20 - Sep 10 | Yes |
| Fuji | late, Sep 25 - Oct 15 | Fuji, Sep 25 - Oct 15 | Yes |
| Idared | late, Oct 1 - Oct 20 | Idared, Oct 1 - Oct 20 | Yes |
| Golden Delicious | mid, Sep 10 - Sep 30 | not example-cited | n/a |
| Jonagold | mid, Sep 15 - Oct 5 | not example-cited | n/a |
| Topaz | mid, Sep 20 - Oct 10 | not example-cited | n/a |
| Elstar | mid, Sep 10 - Sep 30 | not example-cited | n/a |
| Granny Smith | late, Oct 1 - Oct 20 | not example-cited | n/a |
| Apple bloom | approx early/mid April in catalog | April baseline in template | Consistent |
| Broad harvest | early Aug 1 - Sep 5; mid Aug 20 - Sep 30; late Sep 25 - Oct 20 | template harvest window Aug 20 - Oct 20 | Partial mismatch |

Finding:

- Named variety examples in the template match the catalog.
- Template broad harvest window does not cover early fallback start `Aug 1`.
- No current catalog apple variety is `timing: early`, so this is latent.
- Defer until S3/S4/S5 or until an early apple variety is added.

---

## 9. Owner decision items

| Decision | Why owner decision is needed | Options | Recommended default |
|---|---|---|---|
| Promote apple's regional caveat as reusable cross-species pattern? | Product vision says Zagreb dates cannot be universal; apple already has clean wording. | A) Apply verbatim across all species in S5. B) Apply only where absent. C) Keep per-species custom wording. | A - verbatim consistency reduces cognitive load and avoids drift. |
| How to model seasonal irrigation? | Long soil-moisture-driven seasonal window behaves more like a care period than a discrete action. | A) Keep as long action window. B) Create new care/advisory concept later. C) Defer. | C - defer; do not introduce new model concept now. |
| Apple harvest window vs early fallback mismatch | Template broad harvest starts Aug 20; catalog early fallback starts Aug 1. | A) Widen template to Aug 1. B) Add note for early apples. C) Defer until actual early variety is added. | C - defer; no current named variety triggers it. |

---

## 10. Better-than-current opportunities

| Opportunity | Why better | Risk | Recommendation |
|---|---|---|---|
| Use apple's concrete cue style as model for other species. | Apple has excellent beginner cues: marble-sized fruitlets, starchy taste, brown seeds, easy lift/twist. | Risk if copied without source support. | Queue for S4/S5. |
| Use apple post-bloom skip-condition pattern elsewhere. | It makes no-auto-spray practical, not just legalistic. | Species differ; peach leaf-curl is less skippable than apple scab. | Queue for S4/S5 where source-backed. |
| Add fertilizer product category to shared fertilization. | Beginner currently does not know what to buy. | Low. | Queue for S5; earlier only if S3.0C is opened. |
| Improve apple bird-net material detail. | Other species have better net size/type/fixing guidance. | Low. | Queue for S4/S5. |
| Add shared beginner glossary. | Solves repeated terms such as dormancy, fenofaza, petal fall, fruitlet, bud swell, PHI/karenca, vigor. | Low if kept explanatory only. | Nice-to-have / defer to S5. |
| Add `stručni savjet` decoder. | Makes safety wording actionable. | Low. | Queue for S4/S5. |
| Use codling-moth entry as monitoring reference shape. | It matches S3 signal table cleanly. | Low. | Queue for scaling to cherry/plum/walnut monitoring entries. |

---

## 11. Recommended next step

Create `V2_S3_AUDIT_FINDINGS_DRAFT.md` from this dry-run first.

Reasoning:

- The findings format works.
- Owner should approve the materialized file before scaling.
- S3.2 pome audit can then append pear + quince to the same draft.
- No targeted apple wording fix is needed before S3.2.

Order:

1. Owner approves this dry-run format.
2. Codex creates `V2_S3_AUDIT_FINDINGS_DRAFT.md` with the apple section.
3. Owner reviews the materialized file.
4. Proceed to S3.2 pome audit: pear + quince.

---

## 12. What NOT to do next

- Do not rewrite all templates broadly.
- Do not rewrite the apple block.
- Do not add `climateProfile`, `regionProfile`, `baseClimate`, `offsetDays`, or numeric regional offsets.
- Do not add hardcoded commercial product brand names.
- Do not add new apple varieties.
- Do not finalize `action_window_definition`, `monitoring_program`, `stage_vocabulary`, or `open_condition` records.
- Do not declare a formal oil/copper prior-activity gate yet.
- Do not declare a formal post-pruning gate for `Bakar na rane`.
- Do not modify `V2_PLANT_CATALOG.md` to fix the early-fallback harvest mismatch.
- Do not implement runtime code, gates, weather logic, or recommendation logic.
- Do not scale to pome/stone audit until owner has approved this dry-run format.

---

# S3.2 Pome Group Audit — Pear + Quince

## 1. Executive verdict

Pear and quince are ready for S3 scale-up as-is.

Both species mirror apple's overall quality: the shared block applies cleanly, species-specific blocks are present with expected entries, calendar windows are useful for planning, the no-auto-spray stance holds across spray entries, and fire-blight wording correctly avoids curative overclaim.

Pear's harvest entry and quince's harvest entry are both strong beginner-facing examples.

The findings format from S3.1 scales without modification. Pear and quince surface the same cross-cutting wording weaknesses already queued from apple, plus a few pome-specific gaps that are wording polish or S3 source-check items, not blockers.

Recommendation:

- Append S3.2 findings to `V2_S3_AUDIT_FINDINGS_DRAFT.md`.
- Then proceed to S3.3 stone fruit batch 1: sweet cherry, sour cherry, plum.
- Do not run a targeted pome wording fix before S3.3.

---

## 2. Pome coverage summary

| Area | Pear status | Quince status | Notes |
|---|---|---|---|
| Shared yearly work | OK | OK | Both inherit all 10 shared entries; apple S3.1 shared findings carry over. |
| Species-specific work | OK | OK | Pear: fire blight copper, monitoring, post-bloom, thinning, bird net, harvest. Quince: pre-bloom copper, monitoring, optional post-bloom, crop-load check, harvest. |
| Harvest / variety linkage | OK | OK | Template harvest windows cover catalog variety + fallback windows in both species. |
| Monitoring | Minor gap | Minor gap | Pear combines psylla scouting + moth/trap logic in one entry. Quince combines leaf/fruit disease + codling/scouting in one entry and does not offer a trap option. |
| Spray/protection safety | OK | Minor gap | Quince pre-bloom copper entry is less explicit on oil/copper interval and full label/regulation decoder wording than apple/pear. |
| Beginner clarity | Minor gap | Minor gap | Pear: `stanje pupova` / `oko cvatnje` could be clearer. Quince: `mirovanje pupa` is undefined for beginners. |
| Regional caveat | Missing | Missing | Apple regional caveat pattern is absent from pear and quince agronomic-context blocks. Queue for S5. |
| Product/material category clarity | OK | Minor gap | Pear product categories are generally clear. Quince post-bloom says only registered fungicide for target disease without naming the target diseases inline. |

---

## 3. Shared-block findings relevant to pear/quince

The shared block applies to both pear and quince. Apple S3.1 findings on shared entries carry over unless a pear/quince-specific override changes them.

Relevant shared findings that still apply:

- `fenofaza` appears without full beginner translation in shared winter copper context.
- `stručni/lokalni savjet` is not decoded into concrete resource types.
- shared spring fertilization does not name a beginner-readable fertilizer category.
- shared winter copper lacks the full label/regulation decoder line used elsewhere.
- shared winter copper lacks a plain beginner plant-state cue such as dormant / buds still closed / before bloom.
- apple's regional caveat pattern is not present in the shared block and is missing from pear/quince context.

Pome-specific additional concern:

Pear and quince can stack multiple early-season copper-related entries:

- shared winter copper
- shared copper after pruning
- pear/quince pre-bloom or fire-blight copper

Each entry is individually justified and not automatic. However, the templates are silent on copper-to-copper spacing and annual copper label limits. This is not a blocker, but S4/S5 should consider a single cross-cutting Spray Safety Note reminding users to respect the product label's seasonal copper limits and dose restrictions.

---

## 4. Pear entry-by-entry findings

| Entry | Source section | Calendar planning window | Purpose clarity | Beginner cues | Product/material category | Skip/delay/avoid | Monitoring/treatment safety | Regional caveat | Status | Finding |
|---|---|---|---|---|---|---|---|---|---|---|
| Bakar – preventivna zaštita od bakterijske paleži | PEAR §1 | `3.15–4.10` | Excellent — explicitly frames fire blight as bacterial disease without chemical cure and copper as preventive. | Minor gap — `oko cvatnje` and `stanje pupova` are less beginner-decoded than apple's best wording. | OK — registered copper preparation. | OK — do not spray directly on open flowers; oil/copper 7–10 day spacing. | Excellent — no curative overclaim; symptom cue included. | absent | OK | Add beginner decoder for bud/bloom stage and clearer `stručni savjet` resource wording in S5. |
| Praćenje kruškine buhe i savijača | PEAR §2 | `4.20–8.15` | OK — covers pear psylla and fruit moth/codling pressure. | Excellent for psylla: nymphs/larvae, honeydew, sooty mold, deformed young growth. Weaker for moth/trap setup. | OK — registered product for pear/target pest; pheromone trap if available. | Excellent — no visible colonies/honeydew/sooty mold/deformed growth means treatment not justified. | OK — monitoring evidence does not equal treatment. | n/a | Minor gap | Combines two targets in one entry; codling/moth trap detail is weaker than apple's gold-standard monitoring entry. Queue S5 split/design check. |
| Post-bloom zaštita – krastavost kruške | PEAR §3 | `4.15–5.15` | OK — pear scab and monilia. | Minor gap — says after bloom but lacks apple's `after petal fall` cue. | OK — registered fungicide for pear scab and monilia. | Minor gap — weaker than apple's dry-spring/no-history/no-fruit-priority skip clause. | OK — no bloom / no active bee flight. | n/a | OK | Borrow apple's post-bloom cue and skip-condition pattern in S5 where source-backed. |
| Prorjeđivanje plodova – kruška | PEAR §4 | `5.20–6.15` | OK implicit. | Minor gap — gives 1–2 fruit per cluster / 10 cm spacing but lacks apple's fruitlet-size cue. | n/a | OK — pear does not require aggressive thinning. | n/a | n/a | Minor gap | Add apple-style fruitlet cue in S5 if source-backed. |
| Mreža protiv ptica – kruška | PEAR §5 | `7.20–9.15` | OK — bird pressure near harvest. | OK — when fruits begin ripening. | Weak — only says net, without size/type/fixing details. | OK, but weaker than apple/cherry wording. | n/a | n/a | Minor gap | Same product/material specificity gap as apple bird-net entry. Queue S5. |
| Berba kruške | PEAR §6 | `8.1–10.5` | OK. | Excellent — harvest before full eating ripeness; fruit still firm; twists/lifts off; ripens after harvest; do not wait until soft on tree. | n/a | OK. | n/a | n/a | OK | Strong pear entry; consistent with catalog warning. |

---

## 5. Quince entry-by-entry findings

| Entry | Source section | Calendar planning window | Purpose clarity | Beginner cues | Product/material category | Skip/delay/avoid | Monitoring/treatment safety | Regional caveat | Status | Finding |
|---|---|---|---|---|---|---|---|---|---|---|
| Bakar – pred cvatnju dunje | QUINCE §1 | `3.20–4.15` | OK — preventive copper against fire blight context. | Minor gap — `mirovanje pupa` is agronomic jargon and not decoded. | OK — registered copper preparation. | Partial — no bloom / no active bee flight; oil/copper interval should restate 7–10 days instead of only referring to label/global note. | OK — no curative overclaim. | absent | Minor gap | Add beginner decoder for bud-rest/pre-bloom state and more complete label/regulation wording in S5. |
| Praćenje bolesti lista, ploda i savijača – dunja | QUINCE §2 | `4.25–8.15` | OK — leaf disease, fruit disease/rot, codling/moth pressure. | Excellent — leaf spots, early yellowing/drop, fruit spots/deformation/rot, fresh punctures/entry holes; weekly or after prolonged rain. | OK — registered product for quince and target disease/pest; full decoder line present. | OK — treatment not automatic. | Excellent — monitoring is evidence, not treatment. | n/a | Minor gap | Multi-target scouting is useful but complex; no trap option despite Cydia targets. S3 source check. |
| Post-cvatnja zaštita – dunja (po potrebi) | QUINCE §3 | `5.1–5.25` | OK as conditional protection. | Minor gap — after bloom is implicit and target diseases are not named inline. | Weak — says registered fungicide for target quince disease but does not name the target diseases in this entry. | OK — only if monitoring/symptoms/history/expert advice justify. | OK — no bloom / no active bee flight; full decoder line. | n/a | Minor gap | Add target diseases inline or cross-reference monitoring entry in S5, source-backed. |
| Provjera opterećenja plodovima – dunja | QUINCE §4 | `5.20–6.20` | OK — prevents branch breakage and supports tree development. | Excellent — branches bending strongly under fruit load. | n/a | Excellent — skip if crop is normal and branches are not overloaded. | n/a | n/a | OK | Strong visible-cue and skip-condition pattern. |
| Berba dunje | QUINCE §5 | `10.1–11.10` | OK. | Excellent — green to yellow/golden color, strong aroma, firm fruit, harvest before strong frost, post-harvest conditioning. | n/a | OK — do not wait for soft fruit on tree; harvest before strong frost. | n/a | n/a | OK | Strong quince entry. |

---

## 6. Candidate mapping notes

Audit notes only. These are not final V2 records.

| Source entry | Possible V2 concept | Confidence | Why | Do not finalize because |
|---|---|---|---|---|
| Bakar – preventivna zaštita od bakterijske paleži (pear) | `action_window_definition` candidate, pre-bloom/bloom-context calendar anchor | High | Calendar window and bloom/bud context are present. | Stage vocabulary and bloom-avoidance constraint handling are S5 decisions. |
| Praćenje kruškine buhe i savijača (pear) | Two monitoring-program candidates: pear psylla scouting + moth/codling trap | Medium | Template separates visual psylla scouting and optional pheromone trap. | Final split vs combined shape is S5; moth target is generic and needs source/naming check. |
| Post-bloom zaštita – krastavost kruške (pear) | `action_window_definition` candidate, after-bloom anchor | High | Calendar + post-bloom disease protection context. | Stage cue wording should be sharpened before finalization. |
| Prorjeđivanje plodova – kruška | `action_window_definition` candidate, fruit-thinning observation/action | Medium | Calendar + quantitative spacing guidance. | Fruitlet stage cue less explicit than apple; stage vocabulary not locked. |
| Mreža protiv ptica – kruška | `action_window_definition` candidate with observed-pressure skip condition | High | Bounded window and pressure-based rationale. | Material specificity queued; final action shape S5. |
| Berba kruške | harvest action linked to catalog variety/fallback timing | High | Template and catalog both emphasize harvest before full ripeness. | Variety-to-window runtime/pinning belongs later. |
| Bakar – pred cvatnju dunje | `action_window_definition` candidate, pre-bloom calendar/phenology context | Medium | Calendar + pre-bloom preventive context. | `mirovanje pupa` wording needs beginner decoding/source confirmation. |
| Praćenje bolesti lista, ploda i savijača – dunja | multi-target scouting monitoring-program candidate | Medium | Recurring scouting, named issues, visible cues, no device required. | Multi-target vs split-program decision is S4/S5; codling trap omission needs source check. |
| Post-cvatnja zaštita – dunja | conditional action-window candidate, advisory note only | Medium | Conditional post-bloom protection present. | Do not turn `po potrebi` into formal gate without source/owner decision. |
| Provjera opterećenja plodovima – dunja | observation-style action window | High | Bounded window, concrete visible cue, explicit skip condition. | Final action/observation mapping is S5. |
| Berba dunje | harvest action linked to catalog variety/fallback timing + maturity cues | High | Catalog window and template cues align. | Stage vocabulary not locked. |

---

## 7. Beginner-clarity findings

| ID | Finding | Where | Disposition |
|---|---|---|---|
| BC-P1 | `Stanje pupova` / `oko cvatnje` could be decoded in beginner language. | Pear fire-blight copper. | Queue for S4/S5. |
| BC-P2 | Codling/moth trap setup detail is weaker than apple. | Pear monitoring. | Queue for S4/S5. |
| BC-P3 | Pear monitoring combines two targets, making it less beginner-actionable. | Pear psylla + moth monitoring. | Queue for S5 design decision. |
| BC-P4 | `Nakon cvatnje` lacks apple-style `after petal fall` cue. | Pear post-bloom. | Queue for S4/S5. |
| BC-P5 | Pear post-bloom lacks apple-style dry-spring/no-history/no-fruit-priority skip clause. | Pear post-bloom. | Queue for S4/S5 if source-backed. |
| BC-P6 | Pear thinning lacks fruitlet-size cue. | Pear thinning. | Queue for S4/S5. |
| BC-P7 | Pear bird-net material details are weak. | Pear bird net. | Queue for S4/S5. |
| BC-Q1 | `Mirovanje pupa` not decoded. | Quince pre-bloom copper. | Queue for S4/S5. |
| BC-Q2 | Oil/copper interval should restate 7–10 days inline for quince pre-bloom copper. | Quince pre-bloom copper. | Queue for S4/S5. |
| BC-Q3 | Label/dose/PHI/bee/local-rule decoder incomplete in quince pre-bloom copper. | Quince pre-bloom copper. | Queue for S4/S5. |
| BC-Q4 | Quince post-bloom target diseases are not named inline. | Quince post-bloom. | Queue for S4/S5 with source check. |
| BC-Q5 | Quince monitoring names Cydia targets but provides no trap option. | Quince monitoring. | S3 source check. |

No finding blocks S3.3.

---

## 8. Safety / no-auto-spray findings

| Constraint | Pear status | Quince status |
|---|---|---|
| No automatic spray calendar | Preserved. | Preserved. |
| Monitoring does not equal treatment | Preserved; pear explicitly says no visible pressure means treatment not justified. | Preserved; monitoring entry says treatment is not automatic. |
| No treatment during bloom / bee flight | Preserved. | Preserved. |
| Weather constraints | Preserved through shared/per-entry notes. | Preserved through shared/per-entry notes. |
| Label / local regulation constraints | Preserved; some decoder consistency improvements queued. | Mostly preserved; quince pre-bloom copper is weaker and queued. |
| Fire-blight caution and no curative overclaim | Excellent. | Preserved, with S3 source-check context. |
| Cumulative copper caution | Gap — templates do not explicitly discuss per-season copper cap. | Gap — same. |

No safety blocker found.

---

## 9. Regional / climate findings

Pear and quince do not include the apple regional caveat in their agronomic-context blocks.

Pear acknowledges Zagreb baseline and earlier bloom than apple, but does not explicitly say warmer regions may be earlier and colder regions later.

Quince also lacks the reusable apple regional caveat.

Recommendation:

- Apply apple's regional caveat pattern across species in S5, after S3 confirms it scales.
- Do not add numeric offsets.
- Keep regional/climate differences as notes/deferred findings in current V2.

---

## 10. Catalog consistency check

### Pear

| Item | Catalog value | Template value | Match? |
|---|---|---|---|
| Williams | early, Aug 1 – Aug 20 | Williams, August | Yes |
| Santa Maria | early, Aug 5 – Aug 25 | Santa Maria, August | Yes |
| Conference | mid, Aug 25 – Sep 15 | Conference, Aug–Sep | Yes |
| Bosc's Bottle | mid, Sep 1 – Sep 20 | Bosc, Aug–Sep | Yes, minor display-name inconsistency |
| Abate Fetel | late, Sep 15 – Oct 5 | Abate Fetel, Sep–Oct | Yes |
| Fallback windows | Aug 1 – Oct 5 full range | template harvest `8.1–10.5` | Yes |
| Pear harvest-before-full-ripeness rule | catalog warning present | template warning present | Yes |
| Pear bloom | late March to mid April by variety | late March – early April baseline | Consistent |

No blocking inconsistency found for pear.

### Quince

| Item | Catalog value | Template value | Match? |
|---|---|---|---|
| Leskovačka | mid, Oct 1 – Oct 20 | Leskovačka, October | Yes |
| Vranjska | mid, Oct 5 – Oct 25 | Vranjska, October | Yes |
| Champion | late, Oct 15 – Nov 5 | Champion, Oct – early Nov | Yes |
| Fallback windows | Oct 1 – Nov 10 full range | template harvest `10.1–11.10` | Yes |
| Quince bloom | early May | late April – early May | Consistent |

No inconsistency found for quince.

---

## 11. Owner decision items

| Decision | Why owner decision is needed | Options | Recommended default |
|---|---|---|---|
| Should pear monitoring be split into psylla scouting + moth/codling trap in S5? | Combined entry is less beginner-actionable and complicates monitoring-program mapping. | A) Split in S5. B) Keep combined. C) Defer. | C — defer to S5 monitoring-shape decision. |
| Should quince offer a codling-moth pheromone trap option or rely on scouting only? | Quince names Cydia targets but provides no trap setup language. | A) Add trap if source-backed. B) Confirm scouting-only. C) Defer. | B after source check. |
| Add cumulative copper season-limit note? | Pear/quince can accumulate multiple early-season copper entries. | A) Add one cross-cutting Spray Safety Note. B) Per-entry reminders. C) Defer. | A in S5. |
| Normalize `Bosc` vs `Bosc's Bottle` display wording? | Template uses short form; catalog uses full name. | A) Normalize. B) Accept short form. C) Defer. | C — defer to S5 naming polish. |

No owner decision blocks S3.3.

---

## 12. Better-than-current opportunities

| Opportunity | Why better | Risk | Recommendation |
|---|---|---|---|
| Borrow apple's `after petal fall` cue for pear post-bloom. | More beginner-observable than `after bloom`. | Low if source-backed. | Queue for S4/S5. |
| Borrow apple's dry-spring/no-history skip clause for pear post-bloom. | Makes no-auto-spray practical. | Must not over-copy across disease contexts. | Queue for S4/S5 where source-backed. |
| Borrow apple's fruitlet-size cue for pear thinning. | Gives beginner a concrete timing cue. | Low. | Queue for S4/S5. |
| Borrow apple codling-trap detail for pear. | Stronger monitoring-program candidate and better user guidance. | Low if source-backed. | Queue for S5. |
| Decode `mirovanje pupa` inline for quince. | Removes jargon barrier. | Low. | Queue for S4/S5. |
| Add target disease names inline in quince post-bloom. | Beginner understands why fungicide could be relevant. | Must be source-backed. | S3 source check + queue S5. |
| Restate oil/copper 7–10 day interval in quince pre-bloom copper. | Better beginner readability. | Low. | Queue for S5. |
| Apply apple regional caveat to pear/quince and later all species. | Product-vision consistency. | Low. | Queue for S5. |
| Add cross-cutting copper season-limit reminder. | Avoids layered copper misunderstanding. | Low if label-based. | Queue for S5. |

---

## 13. Recommended next step

Append S3.2 findings to `V2_S3_AUDIT_FINDINGS_DRAFT.md`, then proceed to S3.3 stone fruit batch 1:

- sweet_cherry
- sour_cherry
- plum

Reasoning:

- Pome group is now fully audited: apple from S3.1, pear + quince from S3.2.
- Findings format scales without modification.
- All gaps are wording polish, source-check items, or S5 design decisions.
- No targeted pome fix is required before S3.3.

If the owner wants cumulative-copper guidance, regional-caveat copy, or fertilizer-category wording fixed immediately, a targeted S3.0C-equivalent polish pass is defensible, but not required.

---

## 14. What NOT to do next

- Do not rewrite all templates broadly.
- Do not rewrite pear or quince blocks.
- Do not add `climateProfile`, `regionProfile`, `baseClimate`, `offsetDays`, or numeric regional offsets.
- Do not add hardcoded commercial product brand names.
- Do not add new pear or quince varieties.
- Do not finalize `action_window_definition`, `monitoring_program`, `stage_vocabulary`, or `open_condition` records.
- Do not turn fire-blight notes into curative or treatment claims.
- Do not declare a formal symptom gate for quince post-bloom protection.
- Do not declare a formal prior-activity gate for cumulative copper concerns.
- Do not split pear monitoring unilaterally before S5.
- Do not add quince codling-moth trap option without source check.
- Do not modify `V2_PLANT_CATALOG.md` to fix Bosc display wording now.
- Do not implement runtime code, gates, weather logic, or recommendation logic.

---

# S3.3 Stone Fruit Audit Batch 1 — Sweet Cherry + Sour Cherry + Plum

## 1. Executive verdict

Sweet cherry, sour cherry, and plum are ready for S3 scale-up as-is.

All three species meet the current S3 quality bar. Sweet cherry contains the strongest bird-net entry in the file, including variety-specific install timing for Kordia and Burlat plus material detail such as `4×4 m` / `5×5 m` and side-zipper access. Sweet cherry also provides a clean non-pheromone monitoring pattern for cherry fruit fly using yellow sticky plates.

Plum carries the existing self-flagged `2nd generation` source-check marker, and the current wording handles it correctly: conditional, non-automatic, and explicitly not preventive spraying.

Sour cherry is appropriately lighter than sweet cherry, reflecting lower and more situational pressure, with optional netting and thinning.

Recommendation:

- Append S3.3 findings to `V2_S3_AUDIT_FINDINGS_DRAFT.md`.
- Then proceed to S3.4 stone fruit batch 2: peach, nectarine, apricot, almond.
- Do not run a targeted stone batch 1 wording fix before S3.4.

---

## 2. Stone batch 1 coverage summary

| Area | Sweet cherry status | Sour cherry status | Plum status | Notes |
|---|---|---|---|---|
| Shared yearly work | OK | OK | OK | All three inherit all 10 shared entries; S3.1/S3.2 shared findings carry over. |
| Species-specific work | OK | OK | OK | Sweet cherry: 4 entries. Sour cherry: 4 entries. Plum: 6 entries including 2nd-generation reaction entry. |
| Harvest / variety linkage | OK | OK | Minor gap | Sweet cherry variety-specific install timing is strong. Plum agronomic-context examples list 4 of 6 catalog varieties; this is display polish. |
| Monitoring | Excellent | Minor gap | OK | Sweet cherry has full yellow-plate guidance. Sour cherry monitoring install detail is lighter. Plum has pheromone trap guidance and S3 source-check marker for later-season relevance. |
| Bird protection | Excellent | Minor gap | OK | Sweet cherry is gold-standard. Sour cherry lacks material spec. Plum has full material spec. |
| Spray/protection safety | OK | n/a | OK | Plum post-bloom and 2nd-generation entries are conditional and non-automatic. |
| Beginner clarity | OK | OK | Minor gap | Plum `2. generacija šljivinog savijača` is not decoded for beginners; S3 source check already applies. |
| Regional caveat | Missing | Missing | Missing | Apple regional caveat pattern is absent from all three species. Queue for S5. |
| Product/material category clarity | OK | Minor gap | OK | Sweet cherry and plum are strong. Sour cherry net spec is missing. |

---

## 3. Shared-block findings relevant to sweet cherry / sour cherry / plum

The shared block applies to all three species. S3.1/S3.2 shared findings carry over unless a species-specific override changes them.

Relevant shared findings that still apply:

- `fenofaza` appears without full beginner translation in shared winter copper context.
- `stručni/lokalni savjet` is not decoded into concrete resource types.
- shared spring fertilization does not name a beginner-readable fertilizer category.
- shared winter copper lacks the full label/regulation decoder line used elsewhere.
- shared winter copper lacks a plain beginner plant-state cue such as dormant / buds still closed / before bloom.
- apple's regional caveat pattern is not present in the shared block and is missing from these species.

Stone-batch-1-specific note:

- `Krečenje debla` is especially relevant for stone fruit and already states this: "Posebno važno za koštičave vrste i stabla s tankom korom."
- Cumulative copper concern is lower here than in pear/quince because sweet cherry, sour cherry, and plum do not add a third species-specific pre-bloom copper entry. Shared winter copper + post-pruning copper still apply.

---

## 4. Sweet cherry entry-by-entry findings

| Entry | Source section | Calendar planning window | Purpose clarity | Beginner cues | Product/material category | Skip/delay/avoid | Monitoring/treatment safety | Regional caveat | Status | Finding |
|---|---|---|---|---|---|---|---|---|---|---|
| Praćenje trešnjine muhe – žute ljepljive ploče | SWEET CHERRY §1 | `4.25–6.20` | OK — `Rhagoletis cerasi` named as key EU cherry pest. | Excellent — 2–3 yellow sticky plates per tree, 1.5–2 m height, shaded canopy, weekly check. | OK — yellow sticky plates; registered product only if treatment is justified. | Excellent — low catch means continue monitoring; sudden increase means check need for reaction. | Excellent — monitoring evidence does not equal treatment; pre-harvest PHI/karenca caution present. | absent | OK | Cleanest non-pheromone monitoring-program candidate in the file. `Lokalni pragovi` remains a cross-cutting beginner decoder item. |
| Prorjeđivanje trešnje (po potrebi) | SWEET CHERRY §2 | `5.15–6.1` | OK — reduces fallen/poor fruit and improves selected fruit. | Excellent — remove twins, leave 5–8 cm spacing, visible overload cues such as strongly hanging branches / small pale fruit. | n/a | Excellent — not mandatory; young/no-fruit skip; Gisela 5-specific note. | n/a | n/a | OK | Strong skip-default pattern. |
| Mreža protiv ptica – trešnja | SWEET CHERRY §3 | `6.1–6.30` | OK — bird protection before ripening/harvest. | Excellent — Kordia and Burlat install timing examples. | Excellent — min. 4×4 m, recommended 5×5 m, side-zipper type. | OK — remove after harvest; young/no-fruit skip. | n/a | n/a | OK | Gold-standard bird-net entry. Rain-cover/cracking is correctly deferred as S3 audit item. |
| Berba trešnje | SWEET CHERRY §4 | `6.1–7.25` | OK. | Excellent — pick with stem, dark red color, firmness with slight give, dry harvest, storage 0–4°C. | n/a | OK — dry weather/cooler part of day; do not leave overripe fruit. | n/a | n/a | OK | Strong harvest entry and hygiene loop. |

Sweet cherry agronomic-context notes:

- Variety examples match catalog harvest windows.
- Gisela 5 rootstock note is useful but `podloga` is not decoded for absolute beginners.
- Fruit cracking after rain is correctly deferred as a separate S3 audit item. No rain-cover guidance is added.

---

## 5. Sour cherry entry-by-entry findings

| Entry | Source section | Calendar planning window | Purpose clarity | Beginner cues | Product/material category | Skip/delay/avoid | Monitoring/treatment safety | Regional caveat | Status | Finding |
|---|---|---|---|---|---|---|---|---|---|---|
| Praćenje trešnjine muhe – višnja | SOUR CHERRY §1 | `4.25–7.10` | OK — same pest as sweet cherry. | Minor gap — says yellow sticky plates + weekly check but lacks count, height, position. | OK — registered product only if justified. | OK — pressure often lower than sweet cherry; depends on location/year/sort. | OK — local thresholds/expert advice before treatment. | absent | Minor gap | Install detail is lighter than sweet cherry. Queue S5: reuse/cross-reference sweet cherry spec if source-backed. |
| Mreža protiv ptica – višnja (opcionalno) | SOUR CHERRY §2 | `6.15–7.20` | OK — optional bird pressure protection. | Partial — about 2 weeks before harvest. | Weak — no size/type/side-zipper detail. | OK — optional; not needed for young/no-crop trees. | n/a | n/a | Minor gap | Material spec absent; queue S5. |
| Prorjeđivanje višnje (po potrebi) | SOUR CHERRY §3 | `5.15–6.1` | OK — for larger fruit/processing goals. | Minor gap — no quantitative spacing cue. | n/a | Excellent — sour cherry mostly self-regulates; optional. | n/a | n/a | OK | Lightness is appropriate; optional nature preserved. |
| Berba višnje | SOUR CHERRY §4 | `6.20–7.31` | OK. | OK — processing may allow longer hang time; dry harvest. | n/a | OK — do not leave overripe fruit; wasp/hygiene note. | n/a | n/a | OK | Appropriate processing-oriented harvest entry. |

Sour cherry agronomic-context notes:

- Oblačinska, Marasca, and Montmorency examples are present.
- Morello / Schattenmorelle exists in the catalog but is missing from template examples. This is a minor S5 display polish item.

---

## 6. Plum entry-by-entry findings

| Entry | Source section | Calendar planning window | Purpose clarity | Beginner cues | Product/material category | Skip/delay/avoid | Monitoring/treatment safety | Regional caveat | Status | Finding |
|---|---|---|---|---|---|---|---|---|---|---|
| Praćenje šljivinog savijača (feromonske klopke) | PLUM §1 | `4.25–7.15` | OK — `Cydia funebrana`; wormy fruit. | OK — pheromone trap at 1.5–2 m, weekly check. | OK — pheromone trap. | OK — sudden catch increase means check need for reaction; treatment only if local thresholds/expert advice justify. | OK — monitoring evidence does not equal treatment. | n/a | OK | Self-flags S3 audit item for later-season relevance and terminology. Correctly handled. |
| Post-bloom zaštita – monilija i šljivin savijač | PLUM §2 | `5.5–5.25` | OK — monilia + plum moth. | Minor gap — `Nakon cvatnje` lacks apple-style `after petal fall` cue. | OK — registered fungicide for monilia/leaf spot; insecticide only if monitoring supports it. | OK — insecticide explicitly conditional. | OK — no bloom / no active bee flight; full decoder line. | n/a | OK | `Pjegavost lista` appears in product target text without being introduced in agronomic context. Queue source-backed wording polish. |
| Reakcija po potrebi – 2. generacija šljivinog savijača | PLUM §3 | `6.15–7.10` | OK — conditional reaction to later plum-moth pressure. | Minor gap — `2. generacija` is not decoded for beginners. | OK — registered insecticide for crop and pest. | Excellent — not preventive spraying; only if traps show clear signal plus threshold/expert advice. | OK — not automatic; morning/evening timing. | n/a | OK | Existing S3 audit marker correctly flags timing/pest/disease claim for regional source validation. |
| Prorjeđivanje plodova – šljiva | PLUM §4 | `5.20–6.15` | OK — plum overcropping, quality. | OK — 1 fruit per 8–10 cm branch; remove twins/damaged fruit. | n/a | OK — young/no-crop skip. | n/a | n/a | OK | Strong variety awareness for late varieties such as Stanley; could add fruitlet-size cue in S5. |
| Mreža protiv ptica – šljiva | PLUM §5 | `8.8–8.22` | OK — blackbird/thrush pressure before harvest. | OK — when fruit begins softening. | Excellent — min. 4×4 m; side-zipper recommended. | OK — remove after harvest; young/no-crop skip. | n/a | n/a | OK | Strong material spec; reference-quality. |
| Berba šljive | PLUM §6 | `7.20–9.20` | OK. | Excellent — multiple passes, full color, softened fruit, easy detachment, different timing for fresh vs drying/jam. | n/a | OK — do not leave overripe; wasp/monilia hygiene note. | n/a | n/a | OK | Strong harvest entry. |

Plum agronomic-context notes:

- Čačanska rana, Čačanska najbolja, Stanley, Président examples are present.
- Čačanska lepotica and Bistrica / Požegača exist in the catalog but are missing from template examples. This is a minor S5 display polish item.
- Template harvest window fully covers catalog fallback windows.

---

## 7. Candidate mapping notes

Audit notes only. These are not final V2 records.

| Source entry | Possible V2 concept | Confidence | Why | Do not finalize because |
|---|---|---|---|---|
| Praćenje trešnjine muhe – žute ljepljive ploče (sweet cherry) | setup action window + monitoring-program candidate | High | Install + recurring check + device + named target all present. | Final program/window split and note partitioning belong to S5. |
| Prorjeđivanje trešnje | action-window candidate with default-skip notes | High | Bounded window and explicit optional/default-skip framing. | Whether skip-default becomes a model attribute is S5/owner territory. |
| Mreža protiv ptica – trešnja | action-window candidate with variety-aware advisory timing | High | Bounded window and variety examples. | Variety-aware timing remains note/advisory content for now. |
| Berba trešnje | harvest action linked to catalog variety/fallback timing | High | Template and catalog align. | Runtime variety pinning belongs later. |
| Praćenje trešnjine muhe – višnja | monitoring-program candidate, yellow-plate method | Medium | Same target/device as sweet cherry but install detail is sparse. | Do not invent detail; resolve in S5/source check. |
| Mreža protiv ptica – višnja | action-window candidate with optional skip condition | High | Bounded window and optional framing. | Material spec polish queued. |
| Prorjeđivanje višnje | optional action-window candidate | High | Bounded window and `po potrebi` framing. | Final action/observation shape is S5. |
| Berba višnje | harvest action linked to catalog variety/fallback timing | High | Template window covers catalog range. | Runtime variety pinning belongs later. |
| Praćenje šljivinog savijača | setup action window + monitoring-program candidate | High | Pheromone trap + weekly check + named target + install height present. | Later-season relevance is S3 source-check item before finalization. |
| Post-bloom zaštita – monilija i šljivin savijač | action-window candidate, after-bloom anchor | High | Calendar + post-bloom disease/pest context. | Stage vocabulary not locked. |
| Reakcija po potrebi – 2. generacija šljivinog savijača | conditional action-window/advisory note candidate | Medium-low | Strong conditional wording, but source-check marker remains. | Do not formalize trap catch as gate; per current domain stance, notes territory unless S4/S5 decides otherwise. |
| Prorjeđivanje plodova – šljiva | action-window candidate with fruit-spacing cue | High | Calendar + quantitative spacing. | Fruitlet stage vocabulary not locked. |
| Mreža protiv ptica – šljiva | action-window candidate with material spec and skip notes | High | Bounded window and observed-pressure context. | Final shape S5. |
| Berba šljive | harvest action linked to catalog variety/fallback timing | High | Template and catalog align. | Runtime variety pinning belongs later. |

Explicit non-mapping:

- Sweet cherry fruit cracking / rain-cover remains deferred as S3 source-check / owner decision. No rain-cover concept should be mapped now.

---

## 8. Beginner-clarity findings

| ID | Finding | Where | Disposition |
|---|---|---|---|
| BC-SC1 | `Gisela 5 podloga` / rootstock term not decoded. | Sweet cherry agronomic context. | Queue for S4/S5 glossary. |
| BC-SC2 | Side-zipper bird-net wording assumes user understands the product type. | Sweet cherry / plum net entries. | Nice-to-have; context mostly clear. |
| BC-SC3 | `Lokalni pragovi` remains undefined for beginners. | Cherry fly + plum moth entries. | Queue for S4/S5 decoder. |
| BC-SourC1 | Sour cherry yellow-plate install detail is lighter than sweet cherry. | Sour cherry monitoring. | Queue for S4/S5. |
| BC-SourC2 | Sour cherry bird-net material spec is absent. | Sour cherry net. | Queue for S4/S5. |
| BC-SourC3 | Sour cherry examples omit Morello / Schattenmorelle from catalog. | Sour cherry agronomic context. | Queue for S5 display polish. |
| BC-Pl1 | Plum post-bloom uses `after bloom` without `after petal fall` cue. | Plum post-bloom. | Queue for S4/S5. |
| BC-Pl2 | `2. generation plum moth` is not decoded for beginners. | Plum 2nd-generation entry. | S3 source check before wording change. |
| BC-Pl3 | Plum 2nd-generation entry has partial label/PHI/bee/local-rule decoder. | Plum 2nd-generation entry. | Queue for S4/S5. |
| BC-Pl4 | Plum thinning lacks apple-style fruitlet-size cue. | Plum thinning. | Queue for S4/S5. |
| BC-Pl5 | Plum examples omit Čačanska lepotica and Bistrica / Požegača from catalog. | Plum agronomic context. | Queue for S5 display polish. |
| BC-Pl6 | `Pjegavost lista` appears without context. | Plum post-bloom. | Queue source-backed wording polish. |

No finding blocks S3.4.

---

## 9. Safety / no-auto-spray findings

| Constraint | Sweet cherry | Sour cherry | Plum |
|---|---|---|---|
| No automatic spray calendar | Preserved. No spray entries; monitoring is evidence-only. | Preserved. No spray entries. | Preserved. Plum entries use conditional framing and `not preventive spraying`. |
| Monitoring does not equal treatment | Preserved. | Preserved. | Preserved. |
| No treatment during bloom / bee flight | n/a | n/a | Preserved in post-bloom entry. |
| Weather constraints | Inherited from shared block. | Inherited from shared block. | Inherited from shared block; 2nd-gen entry adds morning/evening timing. |
| Label / local regulation constraints | Preserved. | Preserved. | Mostly preserved; 2nd-gen entry decoder is partial. |
| Trap catch is evidence only | Preserved. | Preserved. | Preserved. |
| 2nd-generation wording does not become automatic treatment | n/a | n/a | Preserved. |
| Rain-cover / fruit-cracking remains deferred | Preserved. | n/a | n/a |

No safety blocker found.

---

## 10. Regional / climate findings

Sweet cherry, sour cherry, and plum do not include the apple regional caveat in their agronomic-context blocks.

All three reference Zagreb baseline without the reusable line that warmer regions may run earlier, colder regions later, and plant state/local conditions should guide execution.

Recommendation:

- Apply the apple regional caveat pattern across species in S5 after S3 confirms it scales.
- Do not add numeric offsets.
- Keep regional/climate differences as notes/deferred findings in current V2.

---

## 11. Catalog consistency check

### Sweet cherry

| Item | Catalog value | Template value | Match? |
|---|---|---|---|
| Burlat | early, Jun 1 – Jun 15 | Burlat, Jun 1–15 | Yes |
| Kordia | mid, Jun 20 – Jul 5 | Kordia, Jun 20 – Jul 5 | Yes |
| Lapins | mid, Jun 25 – Jul 10 | not example-cited | n/a |
| Regina | late, Jul 5 – Jul 20 | Regina / Sweetheart, Jul 5–25 | Yes, combined display |
| Sweetheart | late, Jul 10 – Jul 25 | Regina / Sweetheart, Jul 5–25 | Yes, combined display |
| Fallback windows | Jun 1 – Jul 25 full range | template harvest `6.1–7.25` | Yes |
| Bloom | late March to mid April by variety | late March – early April baseline | Consistent |

No blocking inconsistency found.

### Sour cherry

| Item | Catalog value | Template value | Match? |
|---|---|---|---|
| Oblačinska | early, Jun 20 – Jul 5 | Oblačinska, Jun 20 – Jul 5 | Yes |
| Marasca | mid, Jul 1 – Jul 15 | Marasca / Montmorency, July | Yes |
| Montmorency | mid, Jul 5 – Jul 20 | Marasca / Montmorency, July | Yes |
| Morello / Schattenmorelle | late, Jul 10 – Jul 31 | not example-cited | Minor gap |
| Fallback windows | Jun 20 – Jul 31 full range | template harvest `6.20–7.31` | Yes |

Minor display inconsistency: Morello / Schattenmorelle omitted from template examples. Queue S5 display polish.

### Plum

| Item | Catalog value | Template value | Match? |
|---|---|---|---|
| Čačanska rana | early, Jul 20 – Aug 10 | Čačanska rana, Jul–Aug | Yes |
| Čačanska lepotica | early, Aug 1 – Aug 20 | not example-cited | Minor gap |
| Čačanska najbolja | mid, Aug 10 – Aug 31 | Čačanska najbolja, Aug | Yes |
| Stanley | late, Aug 20 – Sep 10 | Stanley / Président, Aug–Sep | Yes |
| Bistrica / Požegača | late, Aug 25 – Sep 20 | not example-cited | Minor gap |
| Président | late, Sep 1 – Sep 20 | Stanley / Président, Aug–Sep | Yes, combined display |
| Fallback windows | Jul 20 – Sep 20 full range | template harvest `7.20–9.20` | Yes |

Minor display inconsistency: plum agronomic context omits Čačanska lepotica and Bistrica / Požegača. Queue S5 display polish.

---

## 12. Owner decision items

| Decision | Why owner decision is needed | Options | Recommended default |
|---|---|---|---|
| Sweet cherry rain-cover / fruit-cracking guidance | Template self-flags cracking after rain as S3 audit item; rain-cover is real but hobby relevance and scope are unclear. | A) Defer. B) Open targeted source-backed audit. C) Add light non-operational note. | A — defer unless owner explicitly opens rain-cover scope. |
| Sour cherry monitoring install detail | Current detail is lighter than sweet cherry despite same pest/device. | A) Borrow sweet cherry spec in S5. B) Cross-reference sweet cherry. C) Keep light. | A — same target/device justifies parity if source-backed. |
| Plum 2nd-generation timing/terminology | Existing entry is correctly conditional but beginner-opaque and source-check flagged. | A) Source-check during S3. B) Defer to S4. C) Replace wording only if source-backed. | A — source-check before wording change. |
| Add beginner glossary? | S3.1–S3.3 repeatedly surface terminology issues: dormancy, fenofaza, podloga, karenca, local thresholds, 2nd generation. | A) Single glossary block in S5. B) Per-entry decoders. C) Defer. | A — single glossary is cheaper and more maintainable. |
| Complete variety examples in sour cherry/plum contexts? | Template examples omit catalog-supported varieties. | A) Complete lists verbatim from catalog. B) Keep representative subset. C) Defer. | A — low-risk display polish. |

No owner decision blocks S3.4.

---

## 13. Better-than-current opportunities

| Opportunity | Why better | Risk | Recommendation |
|---|---|---|---|
| Promote sweet cherry net entry as cross-species bird-net pattern. | Best material/timing guidance in file. | Low. | Queue for S4/S5. |
| Promote sweet cherry yellow-plate monitoring as non-pheromone monitoring pattern. | Strong install/cadence/evidence-vs-treatment wording. | Low. | Use as S5/S3.4 reference. |
| Apply sweet cherry install spec to sour cherry monitoring. | Same pest/device, currently inconsistent. | Low if source-backed. | Queue for S5. |
| Apply sweet cherry/plum net spec to sour cherry. | Same material category, missing detail. | Low. | Queue for S5. |
| Borrow apple `after petal fall` cue for plum post-bloom. | More beginner-observable. | Low. | Queue for S5. |
| Borrow apple fruitlet-size cue for plum thinning. | Stronger beginner timing cue. | Low. | Queue for S5. |
| Decode `2nd generation` only after source check. | Removes opaque agronomic term safely. | Risk if invented. | S3 source check → S5 wording. |
| Add shared beginner glossary. | Consolidates repeated terminology fixes. | Low. | Queue for S5. |
| Apply apple regional caveat to all three species. | Product-vision consistency. | Low. | Queue for S5. |
| Complete sour cherry/plum variety examples from catalog. | Better catalog/template alignment. | Low. | Queue for S5. |
| Restate karenca/pčele/propisi decoder in plum 2nd-gen entry. | Consistency with other spray entries. | Low. | Queue for S5. |

---

## 14. Recommended next step

Append S3.3 findings to `V2_S3_AUDIT_FINDINGS_DRAFT.md`, then proceed to S3.4 stone fruit batch 2:

- peach
- nectarine
- apricot
- almond

Reasoning:

- The findings format scales without modification.
- Sweet cherry and plum introduce useful reference patterns for bird-net and non-pheromone monitoring.
- All identified gaps are wording polish, display polish, source-check items, or owner decisions for S4/S5.
- No targeted S3.3 fix is required before S3.4.

---

## 15. What NOT to do next

- Do not rewrite all templates broadly.
- Do not rewrite sweet cherry, sour cherry, or plum blocks.
- Do not add `climateProfile`, `regionProfile`, `baseClimate`, `offsetDays`, or numeric regional offsets.
- Do not add hardcoded commercial product brand names.
- Do not add new sweet cherry, sour cherry, or plum varieties.
- Do not finalize `action_window_definition`, `monitoring_program`, `stage_vocabulary`, or `open_condition` records.
- Do not turn trap catches into automatic treatment rules.
- Do not treat plum 2nd-generation as automatic spray trigger.
- Do not add rain-cover guidance without source-backed audit and owner approval.
- Do not invent a beginner decoder for `2nd generation` without source backing.
- Do not implement runtime code, gates, weather logic, or recommendation logic.

---

# S3.4 Stone Fruit Audit Batch 2 — Peach + Nectarine + Apricot + Almond

## 1. Executive verdict

Peach, nectarine, apricot, and almond are ready for S3 scale-up as-is.

All four species correctly handle their species-specific failure modes.

Peach and nectarine elevate leaf curl (`Taphrina deformans`) as a critical pre-bud-swell risk, name the disease, give the timing rule while buds are still closed or just beginning to swell, and preserve no-bloom-spraying safety.

Apricot and almond correctly frame early bloom / frost as the primary crop-failure risk. Frost monitoring entries are information/advisory actions, not unsupported protection instructions. Apricot also has the strongest viral-disease wording in the file: Šarka / Plum pox virus is explicitly not treated as chemically curable.

Almond is the lightest species in this batch and should receive source-backed S5 polish, especially around disease/pest monitoring and post-bloom target naming. This does not block S3 scale-up.

Recommendation:

- Append S3.4 findings to `V2_S3_AUDIT_FINDINGS_DRAFT.md`.
- Then proceed to S3.5 Mediterranean audit: olive, fig, pomegranate.
- Do not run a targeted stone batch 2 wording fix before S3.5.

After this section is appended, all 10 standard fruit trees that use the shared block are audited. Remaining S3 sessions cover species that do not use the shared standard fruit tree block.

---

## 2. Stone batch 2 coverage summary

| Area | Peach status | Nectarine status | Apricot status | Almond status | Notes |
|---|---|---|---|---|---|
| Shared yearly work | OK | OK | OK | OK | All inherit the 10 shared standard fruit tree entries; prior shared findings carry over. |
| Species-specific work | OK | OK | OK | Minor gap | Peach: 6 entries. Nectarine: 6 entries. Apricot: 6 entries. Almond: 6 entries but lighter content. |
| Harvest / variety linkage | OK | OK | OK | Minor gap | Peach, nectarine, and apricot examples match catalog except Mađarska najbolja missing from apricot examples. Almond examples match catalog but harvest cue depth is lighter. |
| Monitoring | OK | OK | OK | Minor gap | Peach/nectarine have aphid + oriental fruit moth entries. Apricot has separate frost + šarka/aphid monitoring. Almond monitoring is too generic and needs source check. |
| Frost / bloom risk | n/a | n/a | Excellent | Excellent | Apricot and almond correctly frame frost as primary risk and avoid unsupported protection automation. |
| Leaf curl / disease pressure | Excellent | Excellent | n/a | OK | Peach/nectarine are strong. Almond references shared risk with peach/nectarine but is lighter. |
| Spray/protection safety | OK | OK | OK | OK | No bloom/bee-flight violations found. Almond label/spacing wording is less explicit. |
| Beginner clarity | Minor gap | Minor gap | Minor gap | Minor gap | Repeated terminology gaps continue: fenofaza, bud state, post-bloom, expert advice. Almond §4 and §5 are the thinnest. |
| Regional caveat | Missing | Missing | Missing | Missing | Apple regional caveat pattern is absent from all four species. Queue for S5. |
| Product/material category clarity | OK | OK | OK | Minor gap | Almond post-bloom says target disease without naming targets inline. |

---

## 3. Shared-block findings relevant to peach / nectarine / apricot / almond

The shared block applies to all four species. Prior shared findings carry over:

- `fenofaza` appears without full beginner translation in shared winter copper context.
- `stručni/lokalni savjet` is not decoded into concrete resource types.
- shared spring fertilization does not name a beginner-readable fertilizer category.
- shared winter copper lacks the full label/regulation decoder line used elsewhere.
- shared winter copper lacks a plain beginner plant-state cue such as dormant / buds still closed / before bloom.
- apple's regional caveat pattern is not present in the shared block and is missing from these species.
- `bujno stablo` remains undefined in shared fertilization context.

Stone-batch-2-specific shared concerns:

- `Krečenje debla` is especially relevant for stone fruit and is already correctly called out in the shared block.
- Peach and nectarine can layer shared winter copper, leaf-curl copper, and post-pruning copper.
- Apricot can layer shared winter copper, apricot pre-bloom copper, and post-pruning copper.
- Almond can layer shared winter copper, pre-bloom almond copper, almond leaf-curl copper, and post-pruning copper.
- Almond has the strongest anti-duplication copper wording in the file: "Ne duplicirati bakrene tretmane ako je isti fenološki prozor već pokriven." Queue this as the cross-species cumulative-copper pattern for S5 Spray Safety Notes.
- Early-blooming species can create oil/copper sequencing confusion; S5 should clarify planning around oil and pre-bloom copper while preserving product-label authority.

---

## 4. Peach entry-by-entry findings

| Entry | Source section | Calendar planning window | Purpose clarity | Beginner cues | Product/material category | Skip/delay/avoid | Monitoring/treatment safety | Regional caveat | Status | Finding |
|---|---|---|---|---|---|---|---|---|---|---|
| Bakar – Kovrčavost lista (KRITIČNO – breskva) | PEACH §1 | `2.10–3.5` | Excellent — leaf curl / `Taphrina deformans` named as critical peach risk. | OK — while buds are closed or just beginning to swell. | OK — registered copper preparation. | OK — wet spring second treatment only if justified; oil/copper spacing stated. | OK | absent | OK | Strong leaf-curl entry. Minor decoder gaps: expert/local advice and full label/regulation wording. |
| Praćenje lisnih uši i breskvinog savijača | PEACH §2 | `4.15–7.31` | OK — aphids + oriental fruit moth / `Grapholita molesta`. | OK — weekly underside/young-shoot inspection. | OK — registered product if treatment justified; pheromone trap named. | OK — treatment only with visible problem / threshold. | OK — monitoring does not equal treatment. | n/a | OK | Combined two-target entry; possible S5 split/design decision. |
| Post-bloom zaštita – monilija i štetnici | PEACH §3 | `5.5–5.25` | OK — monilia + peach moth. | Minor gap — `after bloom` should be beginner-decoded as after petal fall. | OK — registered fungicide for monilia; insecticide conditional. | OK — only if monitoring / visible pests / expert advice justify. | OK — no bloom or bee flight; explicit bee-toxicity wording. | n/a | OK | Bee-protection wording is strong. Queue petal-fall cue polish. |
| Prorjeđivanje plodova – breskva | PEACH §4 | `5.20–6.10` | OK — overcropping, fruit size/quality, branch breakage / alternate bearing. | OK — 1 fruit per 10–15 cm branch; remove twins/damaged fruit. | n/a | OK — young/no-crop skip. | n/a | n/a | OK | Could add apple-style fruitlet-size cue in S5. |
| Mreža protiv ptica – breskva | PEACH §5 | `7.10–7.25` | OK — bird pressure before harvest. | OK — when fruit starts changing color. | Minor gap — 4×4 m given but side-zipper detail absent. | OK — remove after harvest; young/no-crop skip. | n/a | n/a | Minor gap | Borrow sweet cherry / plum net spec in S5. |
| Berba breskve | PEACH §6 | `6.25–9.5` | OK. | Excellent — multiple passes, color, softness, room-temperature ripening, gentle handling. | n/a | OK — overripe fruit hygiene. | n/a | n/a | OK | Strong harvest entry. |

---

## 5. Nectarine entry-by-entry findings

| Entry | Source section | Calendar planning window | Purpose clarity | Beginner cues | Product/material category | Skip/delay/avoid | Monitoring/treatment safety | Regional caveat | Status | Finding |
|---|---|---|---|---|---|---|---|---|---|---|
| Bakar – kovrčavost lista (KRITIČNO – nektarina) | NECTARINE §1 | `2.10–3.5` | Excellent — nectarine sensitivity to leaf curl is clear. | OK — buds closed or just beginning to swell. | OK — registered copper preparation. | OK — wet spring second treatment only if justified; oil/copper spacing stated. | OK | absent | OK | Strong sensitivity framing. Minor decoder gaps carry over from peach. |
| Praćenje lisnih uši i breskvinog savijača | NECTARINE §2 | `4.15–7.31` | OK — aphids + oriental fruit moth. | OK — weekly underside/young-shoot inspection. | OK — registered product if treatment justified; pheromone trap named. | OK — treatment only with visible problem / threshold. | OK | n/a | OK | Combined two-target entry; possible S5 split/design decision. |
| Post-bloom zaštita – monilija i štetnici | NECTARINE §3 | `5.5–5.25` | OK. | Minor gap — `after bloom` should be beginner-decoded as after petal fall. | OK. | OK — conditional treatment only. | OK — no bloom / no bee flight; full decoder line. | n/a | OK | Mirrors peach. |
| Prorjeđivanje plodova – nektarina | NECTARINE §4 | `5.20–6.10` | OK — overcropping / fruit quality. | OK — 1 fruit per 10–15 cm branch. | n/a | OK — strong consequences if skipped; young/no-crop skip. | n/a | n/a | OK | Could add fruitlet-size cue in S5. |
| Mreža protiv ptica – nektarina | NECTARINE §5 | `7.20–8.5` | OK — bird pressure before harvest. | Excellent — color-change cue. | OK — 4×4 m and side-zipper detail present. | OK — remove after harvest; young/no-crop skip. | n/a | n/a | OK | Stronger than peach net entry. |
| Berba nektarine | NECTARINE §6 | `7.1–9.10` | OK. | Excellent — multiple passes, color, firmness, avoid early harvest, thin skin handling, storage. | n/a | OK. | n/a | n/a | OK | Strong harvest entry. |

---

## 6. Apricot entry-by-entry findings

| Entry | Source section | Calendar planning window | Purpose clarity | Beginner cues | Product/material category | Skip/delay/avoid | Monitoring/treatment safety | Regional caveat | Status | Finding |
|---|---|---|---|---|---|---|---|---|---|---|
| Bakar – PRIJE cvatnje (KRITIČNO – marelica) | APRICOT §1 | `1.20–2.15` | Excellent — pre-bloom timing, preventive scope, and non-curative viral-disease boundary are clear. | OK — buds closed or just starting to swell. | OK — registered copper preparation. | OK — cannot fully recover if missed; oil/copper spacing stated. | OK | absent | OK | Self-flagged S3 source-check item remains. Strong wording. |
| Praćenje mraza za cvatnje (marelica) | APRICOT §2 | `2.1–3.31` | Excellent — frost is primary crop-failure risk. | OK — daily forecast monitoring during bloom; approximate -1°C warning is hedged. | OK — possible small-tree protection materials named as examples. | n/a | OK — information action, user acts by local conditions. | n/a | OK | Gold-standard frost-as-information wording. |
| Praćenje lisnih ušiju i šarke (marelica) | APRICOT §3 | `4.1–5.15` | Excellent — šarka / Plum pox virus has no curative treatment; aphids are vector context. | OK — yellow rings/spots as possible symptoms. | OK — registered insecticide only for visible aphid colony / vector pressure. | OK — expert confirmation and local phytosanitary recommendations. | Excellent — viral disease not treated as chemically curable. | n/a | OK | Gold-standard viral-disease wording. Expert resource decoder still needed cross-cuttingly. |
| Post-bloom zaštita – monilija (marelica) | APRICOT §4 | `4.15–5.15` | OK — monilia named. | Minor gap — `after bloom / adapt to tree state` should specify petal fall / no open flowers. | OK — registered fungicide for monilia. | OK — only if monitoring / visible pests / expert advice justify. | OK — never spray open flowers; full decoder line. | n/a | OK | Queue petal-fall cue polish. |
| Prorjeđivanje plodova – marelica | APRICOT §5 | `5.1–5.25` | OK — overcropping after successful bloom. | OK — 1 fruit per 8–10 cm branch. | n/a | Excellent — if frost destroyed flowers, thinning may be irrelevant; young/no-crop skip. | n/a | n/a | OK | Strong frost-conditional awareness. Could add fruitlet-size cue. |
| Berba marelice | APRICOT §6 | `6.5–7.25` | OK. | Excellent — fast uneven ripening, 2–3 passes, color, softening, fragile fruit, storage. | n/a | OK. | n/a | n/a | OK | Strong closing loop: low crop is often frost-related. |

Apricot agronomic-context notes:

- Mađarska najbolja / Magyar kajszi exists in catalog but is missing from template examples. Queue S5 display polish.
- Apricot special-case warning is strong and should inform almond wording.
- Harcot is not in catalog and should not be added without variety workflow.

---

## 7. Almond entry-by-entry findings

| Entry | Source section | Calendar planning window | Purpose clarity | Beginner cues | Product/material category | Skip/delay/avoid | Monitoring/treatment safety | Regional caveat | Status | Finding |
|---|---|---|---|---|---|---|---|---|---|---|
| Bakar – PRIJE cvatnje badema (KRITIČNO) | ALMOND §1 | `1.25–2.20` | OK — early bloom and preventive copper timing. | Minor gap — `fenofaza` / `fenološki prozor` jargon. | OK — registered copper preparation implied. | OK — never on open bloom; do not duplicate copper if same phenological window already covered. | OK | absent | Minor gap | Best cumulative-copper wording in file; promote to S5 Spray Safety Notes. Restate 7–10 day oil/copper spacing more clearly. |
| Praćenje mraza tijekom cvatnje | ALMOND §2 | `2.1–3.31` | OK — frost is primary crop-failure risk in continental climate. | Minor gap — lighter than apricot frost entry; lacks threshold/cue detail. | n/a | n/a | OK — app does not decide; user chooses protection. | n/a | Minor gap | Borrow apricot frost wording in S5. |
| Bakar – kovrčavost lista (badem) | ALMOND §3 | `2.10–3.10` | OK — shares `Taphrina deformans` risk with peach/nectarine. | OK — buds still closed. | OK implied. | Minor gap — oil/copper spacing says see label rather than restating 7–10 days. | OK | n/a | Minor gap | Mirror peach/nectarine wording more closely in S5. |
| Praćenje bolesti i štetnika – badem | ALMOND §4 | `4.15–8.15` | Minor gap — too generic. | Weak — no named targets, no cadence, no scouting cues. | n/a | Partial — user decides by observation. | OK, but weakly actionable. | n/a | S3 source check | Thinnest monitoring entry in the file. Do not finalize as monitoring-program record without source-backed target names. |
| Post-cvatnja zaštita – badem (po potrebi) | ALMOND §5 | `4.10–5.10` | OK as conditional protection. | Minor gap — after bloom should be petal-fall decoded. | Weak — says target almond disease without naming targets inline. | OK — only if monitoring/symptoms/history/expert advice justify. | OK — no bloom / no bee flight; full decoder line. | n/a | Minor gap | Source-check target disease names before S5 wording. |
| Berba badema | ALMOND §6 | `8.20–9.30` | OK. | OK — hull naturally cracks; shake tree or collect on tarp; dry in shell 1–2 weeks. | n/a | n/a | n/a | n/a | Minor gap | Functional but lighter than other harvest entries; optional S5 enrichment. |

Almond agronomic-context notes:

- Ferragnès, Ferraduel, and Supernova examples match catalog.
- Texas, Tuono, Nonpareil are not in catalog and should not be added without variety workflow.
- Almond pre-audit status correctly says full S3 review is required; S3.4 now records that almond is acceptable but needs source-backed S5 polish.

---

## 8. Candidate mapping notes

Audit notes only. These are not final V2 records.

| Source entry | Possible V2 concept | Confidence | Why | Do not finalize because |
|---|---|---|---|---|
| Peach leaf-curl copper | `action_window_definition` candidate, bud-closed cue + calendar fallback | High | Concrete phenology cue and calendar window. | Stage vocabulary not locked; copper spacing remains advisory notes. |
| Peach aphid + moth monitoring | Two monitoring-program candidates or combined monitoring entry | Medium | Aphid scouting + pheromone trap signals present. | Split vs combined shape is S5 design decision. |
| Peach post-bloom protection | `action_window_definition` candidate, after-bloom anchor | High | Named disease/pest targets and calendar window. | Petal-fall vocabulary not finalized. |
| Peach thinning | `action_window_definition` candidate | High | Quantitative spacing and calendar window. | Fruitlet-stage vocabulary not finalized. |
| Peach bird net | `action_window_definition` candidate | High | Bounded window and observed color/pressure cue. | Material spec polish queued. |
| Peach harvest | harvest action linked to catalog window | High | Catalog and template align. | Runtime variety pinning belongs later. |
| Nectarine entries | Parallel mappings to peach entries | High/Medium | Same structure and stronger sensitivity framing. | Same limitations as peach. |
| Apricot pre-bloom copper | `action_window_definition` candidate with strong missed-window semantics | High | Explicit "cannot fully recover if missed" and bud-closed cue. | Self-flagged S3 source-check remains before promotion. |
| Apricot frost monitoring | observation/advisory action window, not monitoring-program | Medium | Frost is not pest/disease target; information action wording present. | Do not map to monitoring-program; final observation/advisory shape is S5. |
| Apricot aphid + šarka monitoring | scouting monitoring-program candidate | High | Named targets and visible symptoms. | Multi-target shape and virus/vector split are S5 decisions. |
| Apricot post-bloom protection | `action_window_definition` candidate | High | Named monilia target and calendar. | Petal-fall cue polish queued. |
| Apricot thinning | action-window candidate with frost-conditional skip note | High | Calendar and quantitative spacing present. | Do not formalize frost-event gate. |
| Apricot harvest | harvest action linked to catalog window | High | Catalog and template align. | Runtime variety pinning later. |
| Almond pre-bloom copper | `action_window_definition` candidate | High | Early bloom / pre-bloom copper context. | Source-check and cumulative-copper wording promotion are S5. |
| Almond frost monitoring | observation/advisory action window, not monitoring-program | Medium | Frost is not pest/disease target. | Final observation/advisory shape is S5. |
| Almond leaf-curl copper | `action_window_definition` candidate | High | Cross-references peach/nectarine risk and bud-closed cue. | Wording/source confidence polish queued. |
| Almond disease/pest monitoring | monitoring-program candidate only after source check | Low | No target, no cadence, no scouting cue detail. | Per audit rules, do not finalize as monitoring-program without named targets. |
| Almond post-bloom protection | conditional action-window candidate | Medium | Conditional post-bloom protection present. | Target diseases not named; source check needed. |
| Almond harvest | harvest action linked to catalog window + hull-cracking cue | High | Catalog and template align. | Harvest cue enrichment optional. |

---

## 9. Beginner-clarity findings

| ID | Finding | Where | Disposition |
|---|---|---|---|
| BC-Pe1 | `Stručni/lokalni savjet` undefined. | Peach entries. | Queue for S4/S5 glossary/decoder. |
| BC-Pe2 | Combined aphid + moth monitoring could be split or clarified. | Peach monitoring. | Queue for S5 design decision. |
| BC-Pe3 | `After bloom` lacks `after petal fall` cue. | Peach post-bloom. | Queue for S4/S5. |
| BC-Pe4 | Fruitlet-size cue missing from thinning. | Peach thinning. | Queue for S4/S5. |
| BC-Pe5 | Peach bird-net side-zipper detail absent. | Peach bird net. | Queue for S4/S5. |
| BC-N1 | Same as peach for expert advice, combined monitoring, post-bloom, thinning. | Nectarine entries. | Queue for S4/S5. |
| BC-Apr1 | Expert/local phytosanitary advice undefined, especially for šarka. | Apricot entries. | Queue for S4/S5. |
| BC-Apr2 | `Adapt to tree state` lacks concrete petal-fall cue. | Apricot post-bloom. | Queue for S4/S5. |
| BC-Apr3 | Fruitlet-size cue missing from thinning. | Apricot thinning. | Queue for S4/S5. |
| BC-Apr4 | `Fenofaza` appears bare. | Apricot pre-bloom copper. | Queue for S4/S5. |
| BC-Apr5 | Mađarska najbolja / Magyar kajszi missing from apricot examples. | Apricot agronomic context. | Queue for S5 display polish. |
| BC-A1 | Almond frost monitoring lighter than apricot. | Almond frost monitoring. | Queue for S4/S5. |
| BC-A2 | Almond oil/copper interval says see label instead of restating 7–10 days. | Almond copper entries. | Queue for S4/S5. |
| BC-A3 | Almond disease/pest monitoring has no named targets, cadence, or cues. | Almond monitoring. | S3 source check before S5. |
| BC-A4 | Almond post-bloom target diseases not named inline. | Almond post-bloom. | S3 source check + queue S5. |
| BC-A5 | Almond harvest entry is functional but lighter than other harvest entries. | Almond harvest. | Nice-to-have / defer. |
| BC-A6 | Almond cumulative-copper wording is strong but uses `fenološki prozor`. | Almond pre-bloom copper. | Queue for S4/S5; promote pattern with beginner wording. |

No finding blocks S3.5.

---

## 10. Safety / no-auto-spray findings

| Constraint | Peach | Nectarine | Apricot | Almond |
|---|---|---|---|---|
| No automatic spray calendar | Preserved. | Preserved. | Preserved. | Preserved. |
| Monitoring does not equal treatment | Preserved. | Preserved. | Preserved, with strong šarka/vector limitation. | Preserved, but almond monitoring is weakly actionable. |
| No treatment during bloom / bee flight | Preserved. | Preserved. | Preserved; "never spray open flowers" is explicit. | Preserved. |
| Weather constraints | Inherited/shared. | Inherited/shared. | Frost is informationally framed. | Same. |
| Label / local regulation constraints | Preserved; minor decoder gaps. | Preserved; minor decoder gaps. | Preserved. | Mostly preserved; spacing/decoder wording lighter. |
| Leaf-curl copper remains pre-bud/pre-bloom | Preserved. | Preserved. | n/a. | Preserved. |
| Frost monitoring does not become unsupported frost-protection instructions | n/a | n/a | Preserved. | Preserved, lighter than apricot. |
| Viral disease / šarka not treated as chemically curable | n/a | n/a | Excellent. | n/a. |
| Post-bloom protection remains conditional | Preserved. | Preserved. | Preserved. | Preserved. |
| Trap/monitoring findings are evidence only | Preserved. | Preserved. | Preserved. | Preserved, but almond targets need source check. |

No safety blocker found.

Gold-standard patterns identified:

- Apricot šarka wording is the reference pattern for viral disease handling.
- Apricot frost-as-information wording is the reference pattern for non-pest monitoring/advisory actions.
- Almond cumulative-copper anti-duplication wording is the reference pattern for S5 Spray Safety Notes.

---

## 11. Regional / climate findings

Peach, nectarine, apricot, and almond do not include the apple regional caveat in their agronomic-context blocks.

Stone-batch-2-specific regional issues:

- Peach/nectarine leaf-curl timing is highly region-sensitive because bud break may occur earlier in warm coastal/Mediterranean climates and later in colder continental/alpine climates.
- Apricot/almond early bloom and frost exposure differ strongly between Mediterranean and continental locations.
- Current wording correctly avoids numeric offsets, but S5 should add qualitative caveats: warmer regions may reach bud/bloom stages earlier, colder regions later; plant state remains execution context.
- Apricot/almond may need Mediterranean-vs-continental frost-risk wording, still without numeric formulas.

Do not add regional offsets.

---

## 12. Catalog consistency check

### Peach

| Item | Catalog value | Template value | Match? |
|---|---|---|---|
| Springcrest | early, Jun 25 – Jul 15 | Springcrest / Redhaven, Jun–Jul | Yes |
| Redhaven | early, Jul 1 – Jul 20 | Springcrest / Redhaven, Jun–Jul | Yes |
| Royal Glory | mid, Jul 20 – Aug 5 | Royal Glory / Fayette, Jul–Aug | Yes |
| Fayette | mid, Aug 1 – Aug 20 | Royal Glory / Fayette, Jul–Aug | Yes |
| O'Henry | late, Aug 10 – Aug 31 | O'Henry, Aug | Yes |
| Fallback windows | Jun 25 – Sep 5 full range | harvest `6.25–9.5` | Yes |

Suncrest is not in catalog and not in template. Do not add without variety workflow.

### Nectarine

| Item | Catalog value | Template value | Match? |
|---|---|---|---|
| Caldesi 2000 | early, Jul 1 – Jul 20 | Caldesi 2000 / Big Top, Jul | Yes |
| Big Top | early, Jul 10 – Jul 31 | Caldesi 2000 / Big Top, Jul | Yes |
| Fantasia | mid, Aug 1 – Aug 20 | Fantasia / Stark Redgold, Aug | Yes |
| Stark Redgold | mid, Aug 5 – Aug 25 | Fantasia / Stark Redgold, Aug | Yes |
| Venus | late, Aug 15 – Sep 5 | Venus, Aug–Sep | Yes |
| Fallback windows | Jul 1 – Sep 10 full range | harvest `7.1–9.10` | Yes |

No inconsistency found.

### Apricot

| Item | Catalog value | Template value | Match? |
|---|---|---|---|
| Novosadska rodna | early, Jun 5 – Jun 25 | Novosadska rodna, Jun 5–25 | Yes |
| Goldrich | mid, Jun 20 – Jul 10 | Goldrich / Kioto / Hargrand, Jun–Jul | Yes |
| Kioto | mid, Jun 20 – Jul 10 | Goldrich / Kioto / Hargrand, Jun–Jul | Yes |
| Hargrand | mid, Jun 25 – Jul 15 | Goldrich / Kioto / Hargrand, Jun–Jul | Yes |
| Mađarska najbolja / Magyar kajszi | mid, Jun 25 – Jul 15 | not example-cited | Minor gap |
| Bergeron | late, Jul 5 – Jul 25 | Bergeron, Jul 5–25 | Yes |
| Fallback windows | Jun 5 – Jul 31 full range | harvest `6.5–7.25` | Yes, except late fallback extends to Jul 31 while template ends Jul 25 |

Note:

- Template examples match named examples.
- Catalog late fallback extends to Jul 31, while template harvest window ends Jul 25. Bergeron example is Jul 5–25, but fallback late band is Jul 5–31.
- This is a minor catalog/template alignment item for S5.
- Harcot is not in catalog and not in template. Do not add without variety workflow.

### Almond

| Item | Catalog value | Template value | Match? |
|---|---|---|---|
| Supernova | mid, Aug 25 – Sep 15 | Supernova, Aug–Sep | Yes |
| Ferragnès | late, Sep 5 – Sep 25 | Ferragnès / Ferraduel, Sep | Yes |
| Ferraduel | late, Sep 10 – Sep 30 | Ferragnès / Ferraduel, Sep | Yes |
| Fallback windows | Aug 20 – Sep 30 full range | harvest `8.20–9.30` | Yes |

Texas, Tuono, and Nonpareil are not in catalog and not in template. Do not add without variety workflow.

---

## 13. Owner decision items

| Decision | Why owner decision is needed | Options | Recommended default |
|---|---|---|---|
| Suncrest / Texas / Tuono / Nonpareil / Harcot variety candidates | Mentioned in S3.4 prompt but not present in catalog/template; variety additions require policy workflow. | A) Run variety-candidate workflow later. B) Defer. C) Reject. | B — defer to future variety additions. |
| Almond monitoring target names | Almond monitoring is too generic for final monitoring-program mapping. | A) Source-check and add targets in S5. B) Keep generic. C) Drop entry. | A — source check first. |
| Apricot frost-conditional thinning skip as gate? | `If frost destroyed bloom` is useful but not a final model gate. | A) Keep advisory note. B) Future model decision. C) Reject. | A — keep advisory in notes. |
| Frost monitoring mapping | Frost is not pest/disease monitoring-program target. | A) Map as observation action window. B) Create new advisory category later. C) Strip. | A — observation action-window candidate. |
| Promote almond cumulative-copper wording to Spray Safety Notes? | Best anti-duplication copper wording in file. | A) Promote in S5. B) Per-entry reminders. C) Defer. | A. |
| Combined-display variety examples | Template groups varieties in examples; catalog has individual entries. | A) Normalize one per line. B) Keep combined for beginner grouping. C) Defer. | B unless owner prefers explicit list. |

No owner decision blocks S3.5.

---

## 14. Better-than-current opportunities

| Opportunity | Why better | Risk | Recommendation |
|---|---|---|---|
| Promote apricot viral-disease wording as reusable pattern. | Strongest no-curative-viral-disease wording. | Low. | Queue for S4/S5. |
| Promote apricot frost-as-information wording. | Cleanly distinguishes observation from action. | Low. | Apply to almond in S5. |
| Promote almond cumulative-copper wording. | Closes cross-cutting copper duplication risk. | Low. | Add to Spray Safety Notes in S5. |
| Borrow apricot frost wording for almond. | Same risk class, almond currently lighter. | Low. | Queue for S5. |
| Source-check and name almond monitoring targets. | Fixes thinnest monitoring entry. | Risk if invented. | S3 source check → S5. |
| Apply apple regional caveat to all four species. | Product vision consistency. | Low. | Queue for S5. |
| Add Mediterranean-vs-continental qualitative frost-risk hedge for apricot/almond. | Multi-country realism without offsets. | Low. | Queue for S5. |
| Borrow petal-fall cue for post-bloom entries. | Beginner clarity. | Low. | Queue for S5. |
| Borrow fruitlet-size cue for thinning entries. | Beginner clarity. | Low. | Queue for S5. |
| Add side-zipper net detail to peach. | Consistency with nectarine/plum/sweet cherry. | Low. | Queue for S5. |
| Complete apricot variety examples with Mađarska najbolja. | Catalog/template alignment. | Low. | Queue for S5 display polish. |
| Consider almond harvest enrichment. | Better beginner guidance. | Low. | Nice-to-have / defer. |

---

## 15. Recommended next step

Append S3.4 findings to `V2_S3_AUDIT_FINDINGS_DRAFT.md`, then proceed to S3.5 Mediterranean audit:

- olive
- fig
- pomegranate

Reasoning:

- The findings format scales without modification.
- All 10 standard fruit trees that use the shared block will be audited after S3.4 is appended.
- Remaining sessions test non-shared-block species: Mediterranean, citrus, and nut.
- All S3.4 gaps are wording polish, source-check items, display polish, or S5 owner decisions.
- No targeted S3.4 fix is required before S3.5.

---

## 16. What NOT to do next

- Do not rewrite all templates broadly.
- Do not rewrite peach, nectarine, apricot, or almond blocks.
- Do not add `climateProfile`, `regionProfile`, `baseClimate`, `offsetDays`, or numeric regional offsets.
- Do not add hardcoded commercial product brand names.
- Do not add Suncrest, Texas, Tuono, Nonpareil, Harcot, or any other variety without variety workflow.
- Do not finalize `action_window_definition`, `monitoring_program`, `stage_vocabulary`, or `open_condition` records.
- Do not turn trap monitoring into automatic treatment.
- Do not add unsupported frost-protection instructions.
- Do not treat šarka / Plum pox virus as chemically curable.
- Do not move peach/nectarine/almond leaf-curl copper into bloom or post-bloom timing without source backing.
- Do not create a frost-event gate for apricot thinning.
- Do not finalize almond monitoring-program record without source-validating named targets.
- Do not map apricot/almond frost monitoring as a pest/disease monitoring-program.
- Do not invent almond/apricot regional timing rules.
- Do not invent almond disease names without source backing.
- Do not implement runtime code, gates, weather logic, or recommendation logic.
