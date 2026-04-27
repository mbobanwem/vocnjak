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
