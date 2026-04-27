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

---

# S3.5 Mediterranean Audit — Olive + Fig + Pomegranate

## 1. Executive verdict

Olive, fig, and pomegranate are ready for S3 scale-up as-is.

The three Mediterranean species correctly handle the structural shift away from the standard pome/stone shared block. Each species' template explicitly states that the standard spray program and shared block do not apply.

Olive is the most domain-rich Mediterranean template. It contains strong pruning, fertilization, irrigation, monitoring, conditional treatment, harvest, and winter-check guidance. It also preserves the catalog rule that olive varieties are user-facing-only and must not drive timing.

Fig has correct early-crop / main-crop harvest split, beginner-readable winter protection, and clear continental-climate sensitivity notes.

Pomegranate is the lightest of the three, but it is correctly framed as marginal in continental EU climate and self-flagged for source audit. Its spring/summer thinness is acceptable for current S3 scope.

Recommendation:

- Append S3.5 findings to `V2_S3_AUDIT_FINDINGS_DRAFT.md`.
- Then proceed to S3.6 citrus audit: lemon, orange, mandarin.
- Do not run a targeted Mediterranean wording fix before S3.6.

After this section is appended, 13 of 18 supported species/subtypes are audited.

---

## 2. Mediterranean coverage summary

| Area | Olive status | Fig status | Pomegranate status | Notes |
|---|---|---|---|---|
| Species-specific yearly work | OK | OK | Minor gap | Olive has 11 entries, fig 9, pomegranate 7. Pomegranate is lighter but defensible. |
| Harvest / variety linkage | OK | OK | OK | Olive harvest is species-level and use-case based. Fig has early crop + main crop. Pomegranate has one species-level window. |
| Monitoring | Excellent | OK | OK | Olive has dedicated disease/pest monitoring and conditional olive-fly response. Fig monitoring is light but appropriate. Pomegranate has scouting + cracking watch. |
| Spray/protection safety | OK | n/a | n/a | Olive conditional spray entries preserve no-auto-spray. Fig and pomegranate are deliberately spray-light/spray-free in this hobby context. |
| Winter / climate sensitivity | OK | Excellent | OK | Olive/fig/pomegranate all include continental winter sensitivity guidance for young trees. |
| Beginner clarity | Minor gap | Minor gap | Minor gap | Olive Latin pest names are useful but expert/local-threshold wording still needs decoder. Fig uses `pinciranje`, decoded inline. Pomegranate has a few pruning terms to decode. |
| Regional caveat | Needs Mediterranean-specific caveat | Needs Mediterranean-specific caveat | Partially present | Pomegranate has the best continental/marginal framing. Olive/fig have scattered continental caveats. |
| Product/material category clarity | OK | Minor gap | Minor gap | Olive is strong. Fig and pomegranate fertilizer/product wording could be tightened. |

---

## 3. Shared-block / non-shared-block findings

Olive, fig, and pomegranate correctly do not use the standard shared pome/stone block.

This is correct.

The template explicitly states for these species:

- standard pome/stone spray program does not apply
- shared block does not apply
- species-specific block is authoritative

Therefore, shared-block findings from S3.1–S3.4 such as shared winter copper wording, shared fertilization wording, and shared oil/copper spacing do not carry over directly.

Cross-cutting findings that still apply:

- `stručni savjet`, `lokalni pragovi`, and `lokalna registracija` need beginner-friendly decoding.
- regional caveat is still needed, but for Mediterranean species it must be Mediterranean-specific rather than a direct copy of the apple wording.

No structural shared-block ambiguity found.

---

## 4. Olive entry-by-entry findings

| Entry | Source section | Calendar planning window | Purpose clarity | Beginner cues | Product/material category | Skip/delay/avoid | Monitoring/treatment safety | Regional caveat | Status | Finding |
|---|---|---|---|---|---|---|---|---|---|---|
| Zimska rezidba masline | OLIVE §1 | `2.1–3.15` | OK — open vase-shaped canopy and air circulation. | OK — after coldest winter period; remove watershoots / inward branches. | OK — wound protection for large cuts if appropriate. | OK — young-tree and renewal pruning caveats. | n/a | absent | OK | `Vaza` pruning shape may need beginner glossary. |
| Bakar na rane (maslina) | OLIVE §2 | `2.1–3.31` | OK — bacterial olive knot / `Pseudomonas savastanoi`. | Excellent — within 1–2 days after pruning. | OK — registered copper preparation. | Minor gap — skip/weather/stress wording is light. | OK | absent | Minor gap | Add skip/delay wording in S5. Do not turn into automatic post-pruning gate. |
| Gnojidba masline | OLIVE §3 | `3.1–4.15` | OK — supports vegetative growth. | OK — apply around tree, not directly on trunk/root; young-tree half-dose. | OK — NPK with higher nitrogen named. | Minor gap — no soil/tree-state skip wording. | n/a | n/a | Minor gap | Stronger than shared fertilization, but S5 could tighten product/material and overfertilization wording. |
| Vizualni pregled – paunovo oko i maslinin moljac | OLIVE §4 | `4.1–5.31` | OK — `Spilocaea oleagina` and `Prays oleae` named. | OK — yellow spots with dark edge; moth affects flowers/fruit. | OK — registered product only if justified. | OK — rare in continental open-ground conditions. | OK — monitoring does not equal treatment. | partial | OK | Multi-target scouting candidate. Expert/local advice decoder still needed. |
| Praćenje maslinove muhe | OLIVE §5 | `6.1–9.30` | Excellent — `Bactrocera oleae` named as key olive pest. | OK — yellow sticky plates with attractant, weekly checks. | Excellent — yellow sticky plates with attractant; organic/barrier/repellent options mentioned. | OK — young-tree/no-fruit relevance. | OK — evidence only. | n/a | OK | Clean single-target trap-monitoring candidate. |
| Zaštita od maslinove muhe (po potrebi) | OLIVE §6 | `6.1–9.30` | OK — response to high olive-fly pressure. | n/a, linked to monitoring. | OK — registered method/product, including barrier/repellent options where registered. | Excellent — only if monitoring shows high catch; not preventive spraying; young/no-fruit skip. | Excellent — gold-standard monitoring → conditional treatment pair. | n/a | OK | Do not convert trap catch into formal gate. Keep notes/advisory. |
| Ljetna korekcijska rezidba masline | OLIVE §7 | `6.1–7.15` | OK — remove watershoots / overly dense shoots. | OK — olive bears on one-year wood. | n/a | Excellent — not mandatory every year; do not cut aggressively. | n/a | n/a | OK | Strong optional/reverse-default pattern. |
| Navodnjavanje masline (mlada stabla) | OLIVE §8 | `6.1–8.31` | OK — young-tree support in dry periods. | Excellent — young trees 20–30 L weekly in dry periods; adults usually do not need irrigation. | n/a | OK — overwatering harms. | n/a | n/a | OK | Long seasonal-care shape; S5 mapping decision shared with other irrigation entries. |
| Berba maslina | OLIVE §9 | `10.1–12.31` | OK. | Excellent — green oil, black oil, table olive use cases; processing within 24–48h. | OK — net under tree / electric comb. | n/a | n/a | n/a | OK | Strongest use-case-aware harvest entry. Species-level only; no variety timing. |
| Korekcijska rezidba masline nakon berbe | OLIVE §10 | `12.1–1.15` | OK — prepare canopy for next season. | OK — light correction after harvest. | n/a | OK — do not cut aggressively. | n/a | n/a | OK | Cross-year window; S5 implementation concern. |
| Pregled masline za zimu | OLIVE §11 | `10.15–11.30` | OK — winter readiness. | OK — dry branches, disease signs, frost forecast; young-tree agrotekstil below severe cold. | OK — agrotekstil. | n/a | n/a | partial | OK | Continental-climate hedge present. |

Olive catalog/model check:

- Olive varieties exist as user-facing-only Form B.
- Template does not create variety-specific olive timing.
- Template does not add harvestWindow/bloomWindow per olive variety.
- This is correct and must be preserved.

---

## 5. Fig entry-by-entry findings

| Entry | Source section | Calendar planning window | Purpose clarity | Beginner cues | Product/material category | Skip/delay/avoid | Monitoring/treatment safety | Regional caveat | Status | Finding |
|---|---|---|---|---|---|---|---|---|---|---|
| Zimska rezidba smokve | FIG §1 | `2.1–3.1` | OK — remove dry/old exhausted branches. | Excellent — fruiting on one-year/two-year wood; young-tree 3–5 main branches; milky sap skin warning. | OK — wound protection for larger cuts. | OK — after strongest frost. | n/a | partial | OK | Unique tool/skin safety warning; preserve. |
| Gnojidba smokve | FIG §2 | `3.1–4.15` | OK — moderate feeding. | Excellent — too much nitrogen = lots of leaves, few fruit. | OK — NPK with higher potassium. | Excellent — reverse-default: fig does not need much. | n/a | n/a | OK | Strong overfertilization consequence wording. |
| Pregled smokve – štetnici i bolesti | FIG §3 | `5.1–6.30` | OK — low-pressure scouting. | Minor gap — visual review named, but target detail is light. | n/a | Excellent — serious pests rare in continental climate. | OK — no automatic spray implied. | partial | OK | Lightness is acceptable for continental hobby fig; source-check if owner wants stronger target naming. |
| Ljetno skraćivanje izdanaka smokve | FIG §4 | `6.15–7.15` | OK — direct energy to fruit. | OK — `pinciranje` decoded inline as shortening; 5–6 leaves above fruit. | n/a | OK — do not overcut. | n/a | n/a | OK | Good inline terminology pattern. |
| Navodnjavanje smokve (mlada stabla) | FIG §5 | `6.20–8.20` | OK — young-tree drought support. | OK — young trees 20–30 L weekly. | n/a | OK — adults usually do not need irrigation; overwatering may contribute to fruit cracking. | n/a | n/a | OK | Strong drought-tolerant reverse-default pattern. |
| Berba ranih (zimskih) smokava | FIG §6 | `6.15–7.10` | OK — early crop from overwintered fruit. | Excellent — soft, drooping tip, honey droplet visible. | n/a | OK — not present on all varieties; depends on variety/climate. | n/a | partial | OK | Strong harvest cue; variety/climate dependency handled without variety expansion. |
| Berba glavnog roda smokve | FIG §7 | `8.1–10.15` | OK. | Excellent — soft fruit, skin begins cracking, color darkens, multiple passes. | n/a | OK — do not leave overripe fruit; wasp/rot warning. | n/a | n/a | OK | Strong harvest entry. |
| Zimska zaštita smokve – mlada stabla | FIG §8 | `11.15–2.15` | OK — young-tree winter protection. | Excellent — agrotekstil or straw; short-term -10°C tolerance; remove protection after frost danger. | OK — agrotekstil or straw. | OK — adults usually do not need protection. | n/a | excellent | OK | Reference-quality young-tree winter protection wording. |
| Pregled smokve za zimu | FIG §9 | `10.15–11.30` | OK — remove unripe fruit and check damage. | OK — unripe fruit as infection source; trunk/branch cracks. | n/a | n/a | n/a | n/a | OK | Good hygiene loop. |

Fig catalog/model check:

- Fig has no current variety model.
- Template does not invent fig varieties.
- Early-crop + main-crop two-window harvest pattern is useful but needs S5 design confirmation.

---

## 6. Pomegranate entry-by-entry findings

| Entry | Source section | Calendar planning window | Purpose clarity | Beginner cues | Product/material category | Skip/delay/avoid | Monitoring/treatment safety | Regional caveat | Status | Finding |
|---|---|---|---|---|---|---|---|---|---|---|
| Zimska rezidba šipka | POMEGRANATE §1 | `2.1–3.15` | OK — shape for sun penetration. | OK — grows as shrub or small tree; remove suckers/dry/dense inward growth. | n/a | Minor gap — skip wording light. | n/a | n/a | OK | `Izdanci` / `obnova grma` may need beginner glossary. |
| Gnojidba šipka (umjerena) | POMEGRANATE §2 | `3.1–4.15` | OK — modest spring feeding. | OK — too much nitrogen delays fruiting. | Minor gap — organic/mineral fertilizer is generic. | OK — moderate/reverse-default framing. | n/a | n/a | OK | Product/material category could be tighter in S5. |
| Praćenje štetnika – šipak | POMEGRANATE §3 | `5.1–8.31` | OK — pest scouting in low-pressure continental context. | OK — aphids on young shoots. | OK — registered product only if justified. | OK — treatment only if visible problem / local conditions / expert advice justify. | OK — monitoring does not equal treatment. | partial | OK | Low-pressure scouting is acceptable. |
| Praćenje pucanja ploda – šipak | POMEGRANATE §4 | `8.1–10.15` | OK — sudden water after drought can cause/contribute to cracking. | OK — local conditions and soil moisture. | n/a | OK — advisory only; user decides irrigation. | OK — non-pest observation, not treatment trigger. | n/a | OK | Strong non-pest observation/advisory pattern. |
| Navodnjavanje šipka | POMEGRANATE §5 | `6.15–8.31` | OK — deep watering while fruit develops. | OK — young trees 20–30 L weekly in dry periods. | n/a | OK — as needed. | n/a | n/a | OK | Same long seasonal-care mapping question as olive/fig irrigation. |
| Berba šipka | POMEGRANATE §6 | `10.1–11.15` | OK. | Excellent — fully colored fruit, metallic sound when tapped, cut with shears, storage 1–2 months. | OK — pruning shears. | n/a | n/a | n/a | OK | Distinctive acoustic harvest cue; preserve. |
| Zimska zaštita šipka (mlada stabla) | POMEGRANATE §7 | `11.15–12.31` | OK — young-tree winter protection. | OK — agrotekstil/straw, first 2–3 years, continental climate. | OK — agrotekstil or straw. | Minor gap — removal wording is awkward. | n/a | excellent | OK | Minor wording polish only. |

Pomegranate readiness note:

- Pomegranate spring/summer guidance is lighter than olive/fig.
- This is acceptable for current S3 because pomegranate is explicitly marked as marginal in continental EU climate and the template is self-flagged for S3 audit.
- No targeted fix required before S3.6.

---

## 7. Candidate mapping notes

Audit notes only. These are not final V2 records.

| Source entry | Possible V2 concept | Confidence | Why | Do not finalize because |
|---|---|---|---|---|
| Olive winter pruning | action-window candidate, pruning | High | Bounded calendar window and pruning purpose. | Renewal cycle remains advisory note; final shape S5. |
| Olive copper on wounds | action-window candidate + sequencing note | High | Explicit 1–2 days after pruning. | Do not finalize prior-activity gate without S4/S5 gate audit. |
| Olive fertilization | action-window candidate, fertilizing | High | Bounded window and material category. | S5. |
| Olive visual scouting for paunovo oko / olive moth | multi-target scouting monitoring-program candidate | Medium | Named targets and visible cue. | Multi-target vs split shape is S5 design decision. |
| Olive fruit fly monitoring | setup action window + monitoring-program candidate | High | Device, target, install, cadence all present. | Final program/window split belongs to S5. |
| Olive fruit fly protection | conditional action-window/advisory note | High | Explicit monitoring → conditional response pair. | Trap catch must not become formal gate. |
| Olive summer pruning | action-window candidate, optional pruning | High | Bounded window and optional framing. | S5. |
| Olive irrigation | long seasonal action/advisory care period | Owner decision | Young-tree weekly amount and adult skip-default present. | Same shape question as prior irrigation entries. |
| Olive harvest | species-level harvest action | High | Template has broad use-case-based harvest; no variety timing. | Catalog has user-facing-only olive varieties; do not introduce variety timing. |
| Olive post-harvest pruning | action-window candidate, cross-year pruning | High | Bounded cross-year window. | Cross-year handling is S5. |
| Olive winter check | observation action-window candidate | High | Bounded observation window. | S5. |
| Fig winter pruning | action-window candidate, pruning | High | Bounded window and safety note. | S5. |
| Fig fertilization | action-window candidate, fertilizing | High | Bounded window and NPK-K category. | S5. |
| Fig pest/disease scouting | scouting monitoring-program candidate, low confidence | Low-medium | Visual scouting exists but target detail is weak. | Source-check before strengthening; low pressure may justify lightness. |
| Fig summer pinching | action-window candidate, pruning/pinching | High | Bounded window and inline-decoded cue. | S5. |
| Fig irrigation | long seasonal action/advisory care period | Owner decision | Young-tree weekly amount, adult skip-default. | Same irrigation shape question as olive. |
| Fig early-crop harvest | species-level harvest action | High | Early crop window and clear cues. | Two harvest windows per species need S5 confirmation. |
| Fig main-crop harvest | species-level harvest action | High | Main crop window and strong cues. | Same two-window harvest design item. |
| Fig winter protection | observation/action-window candidate | High | Cross-year young-tree protection window. | S5. |
| Fig winter check | observation action-window candidate | High | Bounded observation window. | S5. |
| Pomegranate pruning | action-window candidate, pruning | High | Bounded window. | S5. |
| Pomegranate fertilization | action-window candidate, fertilizing | High | Bounded window. | S5. |
| Pomegranate pest scouting | scouting monitoring-program candidate | Medium | One target named: aphids on young shoots. | S5 finalization. |
| Pomegranate fruit cracking watch | observation/advisory action-window candidate, not monitoring-program | Medium | Fruit cracking is not a pest/disease target. | Map as observation/advisory, not monitoring_program. |
| Pomegranate irrigation | long seasonal action/advisory care period | Owner decision | Young-tree amount and fruit-development window. | Same irrigation shape question. |
| Pomegranate harvest | species-level harvest action | High | Distinctive maturity cue. | S5. |
| Pomegranate winter protection | observation/action-window candidate | High | Young-tree protection window. | S5. |

Cross-Mediterranean pattern:

- non-pest `praćenje` entries should map to observation/advisory action windows, not `monitoring_program`.
- multi-target scouting remains an S5 design decision.
- long irrigation/care windows remain an S5 owner/design decision.

---

## 8. Beginner-clarity findings

| ID | Finding | Where | Disposition |
|---|---|---|---|
| BC-O1 | `Vaza` pruning shape not decoded. | Olive pruning. | Queue for S4/S5 glossary. |
| BC-O2 | Olive copper-on-wounds lacks skip/weather/stress wording. | Olive copper on wounds. | Queue for S4/S5. |
| BC-O3 | `Stručni savjet`, `lokalni uvjeti`, `lokalna registracija` remain vague. | Olive monitoring/protection. | Queue for S4/S5 decoder. |
| BC-O4 | `Visok ulov` not decoded into beginner evidence language. | Olive fruit fly protection. | Queue for S4/S5; do not invent thresholds. |
| BC-O5 | `Polifenoli` may be unclear. | Olive harvest. | Nice-to-have / defer. |
| BC-F1 | `Pinciranje` is decoded inline and should be used as positive pattern. | Fig summer pruning. | Reference for S5. |
| BC-F2 | Milky sap / skin-irritation warning is unique and useful. | Fig winter pruning. | Reference for S5. |
| BC-F3 | Fig pest-monitoring targets are light. | Fig scouting. | Accept or source-check if owner wants more. |
| BC-Pom1 | `Izdanci` / `obnova grma` could be decoded. | Pomegranate pruning. | Queue for S4/S5 glossary. |
| BC-Pom2 | Metallic-sound harvest cue is distinctive and should be preserved. | Pomegranate harvest. | Reference for S5. |
| BC-Pom3 | Winter-protection removal wording is awkward. | Pomegranate winter protection. | Nice-to-have / defer. |
| BC-Med1 | Mediterranean-specific regional caveat needed. | All three agronomic-context blocks. | Queue for S5; owner wording decision. |

No finding blocks S3.6.

---

## 9. Safety / no-auto-spray findings

| Constraint | Olive | Fig | Pomegranate |
|---|---|---|---|
| No automatic spray calendar | Preserved. | Preserved. | Preserved. |
| Monitoring does not equal treatment | Preserved. | Preserved through low-pressure scouting. | Preserved. |
| Trap catch / visible symptoms are evidence only | Preserved. | n/a. | Preserved. |
| Weather constraints | Mostly OK; olive copper-on-wounds could use skip/weather wording. | n/a. | n/a. |
| Label / local regulation constraints | Preserved, especially in olive fruit-fly protection. | n/a. | Preserved in pest scouting. |
| No standard pome/stone spray program applied | Preserved explicitly. | Preserved explicitly. | Preserved explicitly. |
| Olive variety selection does not drive timing | Preserved. | n/a. | n/a. |
| Winter protection remains advisory | Preserved. | Preserved. | Preserved. |
| Marginal-climate guidance remains advisory | n/a. | Preserved. | Preserved. |

No safety blocker found.

Gold-standard patterns identified:

- Olive fruit fly monitoring/protection pair = best monitoring → conditional treatment pattern.
- Olive organic/barrier/repellent wording = best registered-method flexibility pattern.
- Fig milky-sap warning = best tool/handler safety pattern.
- Pomegranate fruit-cracking watch = strong non-pest observation/advisory pattern.
- Pomegranate metallic-sound cue = distinctive harvest readiness pattern.

---

## 10. Regional / climate findings

Mediterranean species need a different caveat than apple/pome/stone fruit.

For pome and stone fruit, apple's generic caveat works:

- warmer regions earlier
- colder regions later
- plant state and local conditions override date

For Mediterranean species, the issue is inverted:

- in Mediterranean/coastal locations, work may start earlier, pest pressure may be higher, and winter protection is often less relevant
- in continental/Zagreb-like locations, growth may be slower, winter protection is more important, and pest pressure is often lower
- in colder alpine/continental locations, winter survival may be the main constraint

Current documents partially handle this:

- olive has continental notes in monitoring and winter check
- fig has continental notes in pest pressure and winter protection
- pomegranate explicitly says it is marginal in continental EU climate

Gap:

- no unified Mediterranean-specific regional caveat exists in the agronomic-context blocks.

Recommended S5 direction:

- add a Mediterranean-specific caveat to olive, fig, and pomegranate
- do not add numeric offsets
- do not introduce climateProfile / regionProfile / offsetDays
- keep caveat qualitative and plant-state/local-condition aware

Suggested future wording for owner/S5 consideration:

"Kalendarski prozori su baseline za kontinentalni uzgoj. U mediteranskim/jadranskim podnebljima radnje mogu krenuti ranije, pritisak štetnika može biti veći, a zimska zaštita često nije potrebna. U hladnijim kontinentalnim/alpskim podnebljima rast je sporiji, a zimska zaštita kritična. Stanje biljke i lokalni uvjeti imaju prednost pred datumom."

Do not apply this now.

---

## 11. Catalog consistency check

### Olive

| Item | Catalog value | Template value | Match? |
|---|---|---|---|
| Group | mediterranean | olive block | Yes |
| Season profile | mediterranean | not directly referenced | OK |
| Varieties | Oblica, Istarska bjelica, Leccino, Frantoio, Coratina, Picholine, Aglandau | not used in template timing | Correct |
| Variety object shape | empty objects `{}` | no timing use | Correct |
| Variety timing / harvestWindow / bloomWindow | none | none | Correct |
| Species harvest timing | catalog silent | template `10.1–12.31` broad harvest | S5 design note |

Olive is compliant with user-facing-only variety model. Do not add olive timing by variety.

### Fig

| Item | Catalog value | Template value | Match? |
|---|---|---|---|
| Group | mediterranean | fig block | Yes |
| Season profile | mediterranean | not directly referenced | OK |
| Varieties | none | none | Correct |
| Harvest timing | catalog silent | early crop `6.15–7.10`, main crop `8.1–10.15` | S5 design note |

Fig two-window harvest is useful and agronomically plausible, but needs S5 design confirmation.

### Pomegranate

| Item | Catalog value | Template value | Match? |
|---|---|---|---|
| Group | mediterranean | pomegranate block | Yes |
| Season profile | mediterranean | not directly referenced | OK |
| Varieties | none | none | Correct |
| Harvest timing | catalog silent | `10.1–11.15` | S5 design note |
| Structural independence | catalog says pomegranate template is independent | template says independent | Correct |

No blocking catalog inconsistency.

---

## 12. Owner decision items

| Decision | Why owner decision is needed | Options | Recommended default |
|---|---|---|---|
| Mediterranean-specific regional caveat wording | Apple caveat does not fit Mediterranean species perfectly. | A) Add Mediterranean-specific caveat in S5. B) Use apple caveat. C) Defer. | A. |
| Olive species-level harvest timing vs catalog silence | Template has broad timing, catalog is silent. | A) Add species-level harvest window to catalog. B) Keep template as timing reference. C) Defer. | B. |
| Fig two-window harvest pattern | Two harvest windows for one species needs S5 design confirmation. | A) Keep two windows. B) Merge broad window. C) Defer. | A. |
| Pomegranate spring/summer thinness | Readiness audit flagged it; S3.5 confirms it is light but defensible. | A) Accept. B) Source-check more entries. C) Defer. | A. |
| Multi-target scouting program shape | Olive, quince, apricot and others use multi-target scouting. | A) Single program with multi-target list. B) Split per target. C) Defer. | A, to be confirmed in S5. |
| Non-pest `praćenje` mapping | Fruit cracking/frost/winter checks are not pest monitoring. | A) Map to observation action windows. B) Add new advisory concept. C) Defer. | A. |

No owner decision blocks S3.6.

---

## 13. Better-than-current opportunities

| Opportunity | Why better | Risk | Recommendation |
|---|---|---|---|
| Promote olive §6 as monitoring → conditional treatment reference pattern. | Best no-auto-spray pair in file. | Low. | Queue for S4/S5. |
| Promote olive §5 organic/barrier/repellent wording. | Best registered-method flexibility wording. | Low. | Queue for S4/S5. |
| Promote fig milky-sap warning. | Best handler-safety note. | Low. | Nice-to-have / S5. |
| Promote pomegranate metallic-sound cue. | Strong distinctive harvest cue. | Low. | Preserve in S5. |
| Promote reverse-default patterns from olive/fig irrigation and pruning. | Reduces unnecessary work. | Low. | Queue for S5. |
| Add Mediterranean-specific regional caveat. | Better than apple wording for these species. | Low. | Queue for S5, owner wording decision. |
| Add olive §2 skip/weather wording. | Aligns copper-on-wounds safety with rest of file. | Low. | Queue for S5. |
| Tighten olive/fig/pomegranate fertilization category wording. | More beginner-actionable. | Low. | Queue for S5. |
| Add beginner glossary covering Mediterranean terms too. | `vaza`, `pinciranje`, `izdanci`, `polifenoli`, local thresholds. | Low. | Queue for S5. |
| Keep pomegranate light unless owner expands Mediterranean-market scope. | Avoids fake precision. | Low. | Defer. |

---

## 14. Recommended next step

Append S3.5 findings to `V2_S3_AUDIT_FINDINGS_DRAFT.md`, then proceed to S3.6 citrus audit:

- lemon
- orange
- mandarin

Reasoning:

- The findings format scales without modification.
- Mediterranean species surface no blocker.
- Olive variety model is preserved.
- Non-shared-block behavior is correct.
- Pomegranate thinness is acceptable for current scope.
- All gaps are wording polish, S5 design items, or owner decisions.
- No targeted S3.5 fix is required before S3.6.

---

## 15. What NOT to do next

- Do not rewrite all templates broadly.
- Do not rewrite olive, fig, or pomegranate blocks.
- Do not add `climateProfile`, `regionProfile`, `baseClimate`, `offsetDays`, or numeric regional offsets.
- Do not add hardcoded commercial product brand names.
- Do not add new olive, fig, or pomegranate varieties.
- Do not add olive variety harvest windows.
- Do not add timing, harvestWindow, or bloomWindow to olive variety objects.
- Do not create variety-specific timing for olive.
- Do not finalize `action_window_definition`, `monitoring_program`, `stage_vocabulary`, or `open_condition` records.
- Do not declare trap catch / high catch as a formal gate.
- Do not declare olive copper-on-wounds as a formal prior-activity gate without S4/S5 gate audit.
- Do not apply the pome/stone shared spray program to olive, fig, or pomegranate.
- Do not invent winter-protection automation.
- Do not invent fig pest targets without source backing.
- Do not treat pomegranate's S3 audit marker as blocker.
- Do not finalize fig two-window harvest pattern before S5 design pass.
- Do not introduce olive variety-driven timing in S5.
- Do not discuss citrus structural changes in S3.5 output.
- Do not modify `V2_PLANT_CATALOG.md` to add olive/fig/pomegranate species harvest windows without owner decision.
- Do not implement runtime code, gates, weather logic, or recommendation logic.

---

# S3.6 Citrus Audit — Lemon + Orange + Mandarin

## 1. Executive verdict

Lemon, orange, and mandarin are ready for S3 scale-up as-is, but they contain the largest concentration of S5 wording-polish gaps found so far.

The three citrus subtypes are structurally sound:

- all three have a parallel seven-entry structure
- citrus remains subtype-based
- templates preserve `citrus → lemon / orange / mandarin`
- lemon correctly uses `multi_cycle`
- orange correctly uses `winter`
- mandarin correctly uses `autumn`
- no citrus varieties are introduced
- no variety-specific citrus timing is introduced
- the pome/stone shared spray block is not applied to citrus
- optional spray entries remain conditional
- monitoring remains evidence only

No blocker was found.

Recommendation:

- Append S3.6 findings to `V2_S3_AUDIT_FINDINGS_DRAFT.md`.
- Do not run a targeted citrus fix before S3.7.
- Proceed to S3.7 nut audit: walnut + hazelnut.
- Queue citrus wording, protected-location clarity, container reality, and selected source checks for S4/S5.

After S3.6, 16 of 18 supported species/subtypes are audited.

---

## 2. Citrus coverage summary

| Area | Lemon status | Orange status | Mandarin status | Notes |
|---|---|---|---|---|
| Subtype-specific yearly work | OK | OK | OK | All three have the same seven-entry structure: pruning, fertilizing, watering, pest monitoring, optional spray, harvest, winter prep. |
| Harvest / subtype linkage | Excellent | OK | OK | Lemon continuous harvest matches `multi_cycle`; orange winter harvest matches `winter`; mandarin autumn harvest matches `autumn`. |
| Pest monitoring | OK | OK | OK | All three preserve visual monitoring and conditional response. Lemon has the best container/protected-cultivation pest wording. |
| Optional treatment safety | OK | OK | OK | Optional spray entries remain conditional and do not create an automatic spray calendar. |
| Winter / protected-location handling | Minor gap | Minor gap | Minor gap | All three mention moving indoors/protected location, but “protected location” is not beginner-decoded. |
| Fertilization / watering | Minor gap | Minor gap | Minor gap | Lemon has the strongest fertilization and watering wording; orange/mandarin should inherit some lemon wording in S5. |
| Beginner clarity | Minor gap | Minor gap | Minor gap | Main gaps: `zaštićeni prostor`, `fenofaza`, container overwintering, winter watering, and spring return outside. |
| Regional caveat | Missing | Missing | Missing | Citrus needs a stronger Mediterranean-vs-continental caveat than standard pome/stone species. |
| Product/material category clarity | OK | Minor gap | Minor gap | Lemon names citrus micronutrients and low-lime water; orange/mandarin are lighter. |

---

## 3. Citrus subtype model findings

The citrus subtype model is internally consistent.

Current catalog structure remains:

```text
citrus
  lemon
  orange
  mandarin
```

Per catalog direction, citrus does not currently use variety selection. This is preserved.

S3.6 confirms:

- no citrus varieties are named in templates
- no lemon varieties are added
- no orange varieties are added
- no mandarin varieties are added
- no variety-specific citrus timing is created
- subtype `seasonProfile` is the timing driver
- lemon = `multi_cycle`
- orange = `winter`
- mandarin = `autumn`

Current model is sufficient for S3.

Future citrus variety modeling is a separate owner decision and must not be opened in S3.6.

Deferred variety examples must remain deferred:

- lemon: Eureka, Lisbon, Meyer / Improved Meyer
- orange: Washington Navel, Valencia, Tarocco, Moro, Sanguinello
- mandarin: Satsuma, Clementine, Nadorcott, Tangor

If citrus varieties are ever opened, they require the `V2_VARIETY_COVERAGE_POLICY.md` workflow and owner approval.

---

## 4. Lemon findings

Lemon is the strongest citrus subtype.

Key strengths:

- `multi_cycle` is correctly reflected in wide fertilization, watering, and harvest windows
- harvest is continuous and based on fruit maturity
- fertilization entry names citrus micronutrients
- yellow leaves are linked to possible iron/nitrogen deficiency
- watering entry explicitly mentions container growing
- watering entry mentions low-lime water
- pest monitoring acknowledges protected/indoor cultivation
- optional spray remains conditional
- winter prep includes cold thresholds

Key S4/S5 follow-up items:

- define what `zaštićeni prostor` means for beginners
- add winter watering guidance for lemon
- clarify protected-location light and ventilation needs
- add return-to-outdoor / spring acclimatization guidance only after source check
- keep continuous harvest as subtype-level, not variety-level
- do not create variety timing

Reference patterns from lemon:

- Lemon fertilization is the gold-standard citrus micronutrient pattern.
- Lemon watering is the gold-standard container-aware watering pattern.
- Lemon pest monitoring is the best citrus protected-cultivation pest wording.

Disposition:

- Lemon is ready for S3 scale-up as-is.
- Queue wording polish for S5.

---

## 5. Orange findings

Orange is structurally correct but lighter than lemon.

Key strengths:

- `winter` season profile is correctly reflected in the harvest window
- winter harvest timing is useful for planning
- winter harvest entry acknowledges continental container growing
- pest monitoring keeps treatment conditional
- winter prep includes protected-space requirement
- no variety timing is introduced

Key gaps:

- orange winter prep gives protected-space target (`min. 5°C`) but does not state a source-backed damage threshold
- orange fertilization lacks lemon’s yellow-leaf / iron cue
- orange fertilization does not list specific micronutrients
- orange watering lacks lemon’s container and low-lime-water guidance
- orange harvest cue is lighter than lemon/mandarin
- protected-location wording needs beginner explanation

S3 source-check item:

- Verify orange cold-tolerance / damage-threshold wording before adding any numeric threshold.

Disposition:

- Orange is ready for S3 scale-up as-is.
- Queue cold-threshold source check and S5 wording polish.
- Do not add an orange threshold from general knowledge.

---

## 6. Mandarin findings

Mandarin is structurally correct and has the best cold-tolerance wording among citrus.

Key strengths:

- `autumn` season profile is correctly reflected in the harvest window
- harvest window and harvest cue are useful for planning
- mandarin has the strongest hedged cold-tolerance wording
- it is correctly presented as the most cold-tolerant of the three citrus subtypes
- winter prep explicitly mentions container growing
- optional spray remains conditional
- no variety timing is introduced

Key gaps:

- mandarin fertilization is lighter than lemon
- mandarin watering lacks container and low-lime-water details
- mandarin pest monitoring is lighter than lemon
- `mikrolokacija`, `podloga`, and similar terms may need beginner glossary support
- protected-location wording needs beginner explanation

Reference pattern from mandarin:

- Mandarin §7 is the best citrus cold-tolerance wording pattern because it is hedged and multi-factor:
  - cultivar/subtype
  - rootstock
  - plant age
  - soil moisture
  - microclimate

Disposition:

- Mandarin is ready for S3 scale-up as-is.
- Queue wording polish for S5.

---

## 7. Candidate mapping notes

Audit notes only. These are not final V2 records.

| Source entry | Possible V2 concept | Confidence | Why | Do not finalize because |
|---|---|---|---|---|
| Citrus pruning entries | action-window candidate, pruning | High | Bounded calendar windows and subtype-specific pruning notes. | Final records belong to S5. |
| Citrus fertilization entries | action-window candidate, fertilizing | Medium | Lemon has recurring 4–6 week cadence; orange/mandarin are lighter. | Recurrence wording is advisory; final mapping belongs to S5. |
| Citrus watering entries | long seasonal care/action window | Owner decision | Multi-month watering behavior behaves more like seasonal care than a single discrete task. | Same long-window design question as prior irrigation entries. |
| Citrus pest monitoring entries | scouting monitoring-program candidate | Medium | Visual inspection and named pest categories exist. | Multi-target scouting shape remains S5 design item. |
| Citrus optional spray entries | conditional action/advisory note | High | `Po potrebi` and monitoring/visible-problem conditions are explicit. | Scouting observations must not become formal gates. |
| Citrus harvest entries | subtype-level harvest action | High | Harvest timing follows subtype `seasonProfile`. | Do not introduce variety timing. |
| Lemon continuous harvest | full-year subtype harvest action | Owner decision | `1.1–12.31` is structurally unusual but matches `multi_cycle`. | Accept as full-year action window unless S5 owner decision says otherwise. |
| Citrus winter prep entries | observation/action-window candidate | High | Bounded winter-prep windows exist. | Return-to-outdoor guidance is missing and needs source check before addition. |

---

## 8. Beginner-clarity findings

| ID | Finding | Where | Disposition |
|---|---|---|---|
| BC-Cit1 | `Zaštićeni prostor` / `premjestiti unutra` is not decoded. Beginner does not know whether this means garage, greenhouse, bright room, unheated room, etc. | Lemon/orange/mandarin winter prep. | Queue for S4/S5. |
| BC-Cit2 | Winter protected-location guidance lacks light, ventilation, watering reduction, and pest re-check details. | Citrus winter prep. | Queue for S4/S5. |
| BC-Cit3 | No return-to-outdoor / spring acclimatization guidance. | Citrus winter prep. | S3 source check, then S5 if approved. |
| BC-Cit4 | No frost-damage symptom / recovery guidance. | Citrus winter prep. | S3 source check / owner decision. |
| BC-Cit5 | `Fenofaza` appears in optional spray wording without beginner decoding. | Citrus optional spray entries. | Queue for S4/S5 glossary. |
| BC-Cit6 | `Stručni savjet`, `lokalni propisi`, and similar safety phrases still need a beginner resource decoder. | Citrus monitoring/spray entries. | Queue for S4/S5. |
| BC-Cit7 | Lemon’s yellow-leaf / iron-deficiency cue is not repeated for orange/mandarin. | Orange/mandarin fertilization. | Queue for S5. |
| BC-Cit8 | Lemon’s low-lime-water note is not repeated for orange/mandarin. | Orange/mandarin watering. | Queue for S5. |
| BC-Cit9 | Orange lacks a source-backed damage-threshold sentence. | Orange winter prep. | S3 source check before adding. |
| BC-Cit10 | Terms such as `mikrolokacija`, `podloga`, `multi_cycle`, `kontinuirani rod`, `mikroelementi`, and `kloroza` need glossary support. | Citrus and cross-file glossary. | Queue for S5. |

No beginner-clarity issue blocks S3.7.

---

## 9. Safety / no-auto-spray findings

Citrus preserves the no-auto-spray stance.

Confirmed:

- no automatic spray calendar
- monitoring does not equal treatment
- optional spray remains conditional
- visible pest pressure is evidence only
- label/local-regulation wording is present
- citrus does not inherit pome/stone shared spray program
- citrus uses subtype timing, not variety timing
- no runtime gate is created
- no pesticide recommendation engine is introduced

Important preservation rule:

- Do not turn citrus scouting observations into formal `open_condition` gates.
- Keep optional spray logic in notes/advisory wording until S5 explicitly decides otherwise.

---

## 10. Regional / climate findings

Citrus is the most regionally divergent group audited so far.

The same citrus subtype behaves very differently across:

- coastal Croatia / Adriatic
- Italy / southern France / Mediterranean regions
- Zagreb / continental Croatia
- Austria / Germany / alpine/continental regions

Current templates partially handle this, but the caveats are scattered.

S5 should add a citrus-specific regional caveat to the citrus agronomic-context section.

Recommended future wording for owner/S5 consideration:

```md
Kalendarski prozori su baseline za hobi uzgoj. Citrus je u mediteranskim/jadranskim podnebljima moguće uzgajati u tlu na zaštićenoj mikrolokaciji; u kontinentalnim i alpskim podnebljima realan je uglavnom lončani uzgoj sa zaštićenim zimskim smještajem. Toplije lokacije imaju dulju vegetacijsku sezonu, mogući veći urod i manju potrebu za zimskom zaštitom. Hladnije lokacije skraćuju vegetaciju, povećavaju važnost zaštite od mraza i ograničavaju izbor podtipa; mandarina je među ova tri podtipa najotpornija. Stanje biljke i lokalna mikrolokacija imaju prednost pred datumom.
```

Do not apply this now.

Do not add numeric regional offsets.

Do not introduce:

- `climateProfile`
- `regionProfile`
- `baseClimate`
- `offsetDays`
- hidden regional shifts
- regional formulas

---

## 11. Catalog consistency check

| Item | Catalog value | Template value | Match? |
|---|---|---|---|
| Top-level entity | `citrus` | Citrus Block 6 special template | Yes |
| Subtypes | `lemon`, `orange`, `mandarin` | Lemon, orange, mandarin blocks | Yes |
| Lemon seasonProfile | `multi_cycle` | Continuous harvest, extended fertilization/watering | Yes |
| Orange seasonProfile | `winter` | Winter harvest | Yes |
| Mandarin seasonProfile | `autumn` | Autumn harvest | Yes |
| Citrus varieties | none | none | Correct |
| Variety timing | none | none | Correct |
| Shared spray block | not applicable | not applied | Correct |
| S3 audit item | decide subtype model vs top-level species | still owner decision | Correct |

No catalog/template inconsistency blocks S3.7.

---

## 12. Owner decision items

| Decision | Why owner decision is needed | Options | Recommended default |
|---|---|---|---|
| Citrus identity model | Catalog currently models citrus as one entry with subtypes; future may promote subtypes to top-level species. | A) Keep subtype model. B) Promote lemon/orange/mandarin to top-level species. C) Defer. | A for current V2. |
| Citrus variety model | Citrus varieties could be useful in future paid markets, but current catalog explicitly defers them. | A) Defer. B) Open variety workflow. C) Add Form B only. | A. |
| Citrus regional caveat | Citrus needs stronger container-vs-ground and Mediterranean-vs-continental wording. | A) Add citrus-specific caveat in S5. B) Use generic apple caveat. C) Defer. | A. |
| Lemon full-year harvest window | `1.1–12.31` is unusual but matches multi-cycle lemon behavior. | A) Accept as full-year action window. B) Create special always-available semantic. C) Defer. | A. |
| Return-to-outdoor guidance | Winter prep exists, spring return does not. | A) Add single advisory note after source check. B) Add per-subtype entries. C) Defer. | A. |
| Orange cold-tolerance threshold | Orange lacks a source-backed damage threshold. | A) Source-check before adding. B) Leave as protected-space target only. C) Add unsourced estimate. | A. |
| Multi-target citrus scouting shape | Citrus adds more multi-target scouting examples. | A) Single program with multi-target list. B) Split per target. C) Defer. | A, confirm in S5. |

No owner decision blocks S3.7.

---

## 13. Better-than-current opportunities

| Opportunity | Why better | Risk | Recommendation |
|---|---|---|---|
| Promote lemon fertilization wording to orange/mandarin. | Adds visual yellow-leaf cue and specific micronutrients. | Low. | Queue for S5. |
| Promote lemon watering wording to orange/mandarin. | Adds container-aware watering and low-lime-water guidance. | Low. | Queue for S5. |
| Promote mandarin cold-tolerance hedge as pattern. | Best multi-factor cold-tolerance wording in file. | Low. | Queue for S5. |
| Promote orange continental-container sentence as regional pattern. | Names the real difference between coastal and continental citrus. | Low. | Queue for S5. |
| Add protected-location decoder. | Largest beginner clarity gap in citrus. | Low. | Queue for S5. |
| Add return-to-outdoor guidance after source check. | Continental container users need it. | Medium if unsourced. | Source-check first. |
| Add orange cold-threshold wording after source check. | Brings orange in line with lemon/mandarin. | Medium if unsourced. | Source-check first. |
| Add citrus terms to glossary. | Solves repeated beginner vocabulary gaps. | Low. | Queue for S5. |

---

## 14. Recommended next step

Append S3.6 findings to `V2_S3_AUDIT_FINDINGS_DRAFT.md`, then proceed to S3.7 nut audit:

- walnut
- hazelnut

Do not run a citrus fix before S3.7.

Reasoning:

- no citrus blocker was found
- subtype model is internally consistent
- seasonProfile mapping works
- no varieties are introduced
- optional spray wording is safe
- most findings are S5 wording-polish or source-check items

After S3.7 is appended, all 18 supported species/subtypes will be audited and S3 can move to consolidation.

---

## 15. What NOT to do next

- Do not rewrite all templates broadly.
- Do not rewrite lemon, orange, or mandarin blocks now.
- Do not restructure citrus.
- Do not promote lemon/orange/mandarin to top-level species without owner decision.
- Do not add citrus varieties.
- Do not add lemon varieties.
- Do not add orange varieties.
- Do not add mandarin varieties.
- Do not add variety-specific citrus timing.
- Do not add `harvestWindow` or `bloomWindow` to citrus varieties.
- Do not add `climateProfile`, `regionProfile`, `baseClimate`, `offsetDays`, or numeric regional formulas.
- Do not add hardcoded commercial product brands.
- Do not apply pome/stone shared spray program to citrus.
- Do not turn scouting observations into formal gates.
- Do not add orange cold-tolerance thresholds without source check.
- Do not invent return-to-outdoor or spring acclimatization timing without source backing.
- Do not implement runtime code.
- Do not finalize domain records.
- Do not start S4 before S3.7 is appended and tracker is updated.

---

# S3.7 Nut Audit — Walnut + Hazelnut

## 1. Executive verdict

Walnut and hazelnut are ready for S3 scale-up as-is.

Both nut species correctly handle their species-specific differences from standard pome/stone fruit templates.

Walnut has the strongest non-standard pruning timing rationale in the file. It explains that walnut can bleed / release sap more strongly when pruned during dormancy, so summer pruning is the safer/preferred window for larger cuts.

Hazelnut has the strongest bush-renewal pruning rule in the file. Its pruning entry gives concrete beginner-usable guidance: remove 1–2 oldest shoots yearly and keep 6–8 productive shoots.

Both species are correctly placed in the nut special-template block and explicitly exclude the standard shared pome/stone spray block.

The S3.0B-flagged fertilization/irrigation gap is confirmed, but it is not a blocker:

- missing fertilization/irrigation is acceptable for established trees in the current V2 scope
- young-tree watering is the only real practical gap
- young-tree watering should be an S4/S5 owner decision, not a S3 blocker

No blocker was found.

After S3.7 is appended, all 18 supported species/subtypes have been audited.

Recommendation:

- Append S3.7 findings to `V2_S3_AUDIT_FINDINGS_DRAFT.md`.
- Then update `V2_CURRENT_STATE.md` in a separate task to mark S3.7 done and S3 species/subtype audit complete.
- Proceed next to S3.8 findings consolidation.
- Do not run targeted nut fixes before S3.8.

---

## 2. Nut coverage summary

| Area | Walnut status | Hazelnut status | Notes |
|---|---|---|---|
| Species-specific yearly work | OK | OK / minor gap | Walnut has 6 entries; hazelnut has 5 entries. Both are usable. |
| Harvest / variety linkage | OK | OK | Template harvest windows cover catalog fallback windows. Both natural-drop harvest semantics are correctly self-flagged. |
| Pest monitoring | OK | OK | Walnut has walnut fly and codling-moth trap monitoring. Hazelnut has weevil and bud-mite scouting. |
| Optional treatment safety | OK | OK | Optional treatment remains conditional. Hazelnut is strongest on mechanical-first/IPM wording. |
| Pruning clarity | Excellent | Excellent | Walnut explains bleeding-aware summer pruning. Hazelnut explains bush-renewal pruning quantitatively. |
| Fertilization / watering | Missing but acceptable for established trees | Missing but acceptable for established trees | Young-tree watering is a real S5 owner-decision gap. |
| Beginner clarity | OK | OK | Several terms need glossary support, but entries are generally understandable. |
| Regional caveat | Missing | Missing | Standard apple-style warmer/cooler caveat should be added in S5. |
| Product/material category clarity | OK | Minor gap | Walnut has strong trap/material wording. Hazelnut treatment material wording is lighter. |
| Post-harvest drying/storage | OK | Partial | Both include drying guidance; mold/storage detail should be added in S5. |

---

## 3. Nut model / catalog findings

Walnut and hazelnut are correctly modeled as distinct supported species.

Current catalog structure:

```text
walnut
hazelnut
```

Both are in group:

```text
nut
```

Both use timing-driving varieties with harvest windows.

Current walnut varieties:

- Chandler
- Franquette
- Šejnovo

Current hazelnut varieties:

- Istarski dugi
- Tonda di Giffoni
- Ennis

No new varieties should be added in S3.7.

Future walnut or hazelnut variety expansion requires the `V2_VARIETY_COVERAGE_POLICY.md` workflow and owner approval.

Catalog/template consistency is good:

- walnut template harvest window covers current catalog fallback windows
- hazelnut template harvest window covers current catalog fallback windows
- both catalog and template correctly flag natural-drop / gathering harvest semantics
- no timing mismatch blocks S3 closure

Nut group naming remains a future owner decision if ever needed. Do not rename the group now.

---

## 4. Walnut findings

Walnut is structurally strong.

Key strengths:

- explains why walnut pruning timing differs from normal dormant pruning
- gives beginner-readable reason: walnut can bleed / release sap when pruned in dormancy
- summer pruning is clearly presented as safer/preferred for larger cuts
- walnut copper entry is conditional and not annual by default
- walnut fly monitoring is concrete and names yellow sticky trap with ammonium bait
- walnut fly wording explains that hull discoloration does not always mean the kernel is unusable
- codling-moth monitoring correctly notes that `Cydia pomonella` can also attack walnut
- harvest guidance is clear: nuts naturally drop, hull cracks, collect daily, dry in shell in one layer for 2–3 weeks
- winter check closes the hygiene loop by removing diseased hulls and checking trunk damage

Key follow-up items for S4/S5:

- add a short beginner decoder for walnut catkins / `resa`
- add mold/storage-risk wording to harvest/drying guidance
- consider wound-protection/material wording for large pruning cuts only if source-backed
- borrow apple codling-trap install detail for walnut codling-moth monitoring
- preserve the walnut bleeding-aware pruning pattern as a reference pattern

Disposition:

- Walnut is ready for S3 scale-up as-is.
- Queue wording/source-check items for S4/S5.

---

## 5. Hazelnut findings

Hazelnut is structurally usable and has one of the best pruning entries in the file.

Key strengths:

- bush-form growth is clearly recognized
- pruning entry gives concrete renewal guidance:
  - remove 1–2 oldest shoots yearly
  - keep 6–8 productive shoots
  - remove inner shoots for light
- hazelnut weevil monitoring names `Curculio nucum`
- weevil monitoring explains egg-laying into developing nuts
- shake-test scouting over a white sheet is concrete and beginner-actionable
- mechanical removal of attacked nuts is correctly prioritized for hobby growing
- bud-mite monitoring names `Phytoptus avellanae`
- swollen winter buds are a concrete visual cue
- bud-mite response is mechanical-first and does not jump to chemical treatment
- harvest guidance is clear: nuts naturally drop, collect daily, remove husk within a few days, dry 1–2 weeks, do not pick green-husk nuts from the tree

Key follow-up items for S4/S5:

- add mold/storage-risk wording to drying/storage guidance
- decode `izbojnice`, `izdanci`, and `obnova grma` in glossary or inline where useful
- source-check hazelnut pollination / cross-compatibility guidance
- consider a light frost-during-bloom advisory because hazelnut blooms very early
- tighten treatment material/product-category wording in bud-mite entry if source-backed
- preserve mechanical-first IPM wording as a reference pattern

Disposition:

- Hazelnut is ready for S3 scale-up as-is.
- Pollination compatibility is a real owner-decision/source-check item, but not a S3 blocker.

---

## 6. Fertilization / irrigation gap analysis

The S3.0B readiness audit correctly flagged that walnut and hazelnut currently have no fertilization or irrigation entries.

S3.7 classification:

### Established trees

For established walnut and hazelnut, the absence of scheduled fertilization and irrigation is acceptable in current V2.

Reasoning:

- mature walnut and hazelnut are not usually managed like peach/cherry/apricot
- adding scheduled fertilization or irrigation for established trees risks fake precision
- the current V2 product should not invent routine work just to fill a table
- established-tree absence is defensible for hobby orchards

Disposition:

```text
Accept current absence for established trees.
Do not add scheduled fertilization/irrigation for mature walnut or hazelnut in S3.
```

### Young trees

For young trees, the absence of watering guidance is a real practical gap.

Reasoning:

- young walnut and hazelnut trees need establishment support
- dry continental summers can stress young trees
- current templates give no guidance for a new owner
- existing templates already have a pattern for young-tree watering in olive/fig/pomegranate

Recommended S4/S5 owner decision:

```text
Add young-tree-only watering entries for walnut and hazelnut, probably mirroring the olive/fig/pomegranate pattern:
young trees, years 1–3, 20–30 L weekly during dry periods.
```

Do not add this now.

### Young-tree fertilization

Young-tree fertilization is more source-sensitive than watering.

Disposition:

```text
S3 source check / S4 owner decision before adding.
Do not add unsourced fertilization guidance.
```

### Dry-summer advisory

A single advisory note may be useful in S5:

```text
In very dry years or on shallow soil, young trees may need deep watering.
```

Do not add this now.

### Container relevance

Container/pot framing is not relevant for walnut or hazelnut.

Disposition:

```text
No container guidance needed.
```

---

## 7. Candidate mapping notes

Audit notes only. These are not final V2 records.

| Source entry | Possible V2 concept | Confidence | Why | Do not finalize because |
|---|---|---|---|---|
| Walnut summer pruning | action-window candidate, pruning | High | Bounded window and clear pruning purpose. | Exact timing and bleeding rationale remain source-check / S5 notes. |
| Walnut optional spring copper | conditional action/advisory | Medium | Calendar window and target disease exist; entry is explicitly non-annual. | Do not create an automatic copper rule or formal gate. |
| Walnut fly monitoring | setup action window + monitoring-program candidate | High | Target, device, attractant, cadence, and conditional response are present. | Final program/window split belongs to S5. |
| Walnut codling-moth monitoring | setup action window + monitoring-program candidate | High | Target and pheromone trap are present. | Install detail should be polished; final shape belongs to S5. |
| Walnut harvest | harvest action with natural-drop semantic | High | Catalog and template both describe natural drop / gathering period. | Do not create new harvest subtype now. |
| Walnut winter check | observation action-window candidate | High | Bounded checklist-style observation window. | S5 finalization. |
| Hazelnut pruning | action-window candidate, pruning | High | Bounded window and quantitative renewal rule. | Renewal cycle stays in notes. |
| Hazelnut weevil monitoring | scouting monitoring-program candidate | Medium | Target, scouting method, and conditional response are present. | Shake-test method needs S5 mapping decision. |
| Hazelnut bud-mite monitoring | scouting monitoring-program candidate | High | Target and visible swollen-bud cue are present. | S5 finalization. |
| Hazelnut harvest | harvest action with natural-drop semantic | High | Catalog and template both describe natural drop / gathering period. | Do not create new harvest subtype now. |
| Hazelnut winter check | observation action-window candidate | High | Bounded checklist-style observation window. | S5 finalization. |

Recommended mapping stance for S5:

- keep `harvest` as one action type
- express natural-drop/gathering semantics in notes
- do not create `harvest_natural_drop` unless owner explicitly decides otherwise

---

## 8. Beginner-clarity findings

| ID | Finding | Where | Disposition |
|---|---|---|---|
| BC-W1 | Walnut bleeding / sap release is explained well and should be preserved. | Walnut pruning. | Reference pattern. |
| BC-W2 | `Resa` / catkin is not beginner-decoded. | Walnut copper timing. | Queue for S5 glossary/inline decoder. |
| BC-W3 | `Stručni savjet` / `lokalni pragovi` remain vague. | Walnut monitoring/treatment entries. | Queue for S5 decoder. |
| BC-W4 | `Smanjenje inokuluma` is agronomic language. | Walnut winter check. | Queue for S5 glossary/inline decoder. |
| BC-W5 | Walnut codling trap detail is lighter than apple codling entry. | Walnut codling monitoring. | Queue for S5. |
| BC-W6 | Walnut drying lacks mold/storage-risk wording. | Walnut harvest. | Queue for S5. |
| BC-H1 | Hazelnut pruning terms are mostly understandable through context but should be included in glossary. | Hazelnut pruning. | Queue for S5 glossary. |
| BC-H2 | Big-bud mite is well decoded as swollen winter buds. | Hazelnut bud-mite monitoring. | Reference pattern. |
| BC-H3 | `Bakterijsko propadanje` is not decoded. | Hazelnut winter check. | Queue for S5. |
| BC-H4 | Hazelnut drying lacks mold/storage-risk wording. | Hazelnut harvest. | Queue for S5. |
| BC-H5 | Hazelnut pollination/cross-compatibility is mentioned in context but not represented as guidance. | Hazelnut agronomic context. | S3 source check + S4/S5 owner decision. |
| BC-N1 | Young-tree watering is missing for both nut species. | Walnut/hazelnut. | Owner decision for S5. |

No beginner-clarity issue blocks S3 closure.

---

## 9. Safety / no-auto-spray findings

Walnut and hazelnut preserve the no-auto-spray stance.

Confirmed:

- no automatic spray calendar
- monitoring does not equal treatment
- pest pressure is evidence only
- optional copper/treatment wording remains conditional
- walnut copper is explicitly not annual by default
- hazelnut uses mechanical-first IPM wording
- pome/stone shared spray block is not applied
- no unsupported curative treatment claim is introduced
- no formal runtime gate is created
- no fake precision is introduced through routine fertilization/irrigation for established trees

Hazelnut has the strongest mechanical-first pattern in the file:

```text
hobby growing → mechanical removal usually enough
chemical treatment only if evidence/local advice justifies it
```

Walnut has the strongest hobby-context skip-by-default pattern:

```text
not needed every year
dry previous season / low pressure → often no treatment
```

Both should be preserved as S5 reference patterns.

---

## 10. Regional / climate findings

Walnut and hazelnut are primarily continental-EU species in the current V2 context.

No Mediterranean-specific caveat is needed.

However, the standard apple-style regional caveat should be applied in S5:

```text
warmer regions may move earlier
colder regions may move later
plant state and local conditions override the date
```

Nut-specific notes:

- walnut late leafing and May bloom reduce frost-risk compared with apricot/almond
- hazelnut blooms very early and may need a frost-during-bloom advisory
- hazelnut pollination / compatibility is a real productivity factor and should be source-checked
- drought/young-tree watering matters mainly during establishment years
- no numeric regional offsets should be added

Do not add:

- `climateProfile`
- `regionProfile`
- `baseClimate`
- `offsetDays`
- formulas
- hidden regional shifts

---

## 11. Catalog consistency check

### Walnut

| Item | Catalog value | Template value | Match? |
|---|---|---|---|
| Plant type key | `walnut` | walnut block | Yes |
| Group | `nut` | nut special block | Yes |
| Varieties | Chandler, Franquette, Šejnovo | no new varieties | Correct |
| Harvest fallback | mid/late walnut windows | template `9.15–10.31` | Covered |
| Bloom | May / late leafing | template says late leafing and May bloom | Consistent |
| Harvest semantic | natural drop / gathering period | natural drop / hull cracks | Consistent |
| Shared block | not applicable | not applied | Correct |

### Hazelnut

| Item | Catalog value | Template value | Match? |
|---|---|---|---|
| Plant type key | `hazelnut` | hazelnut block | Yes |
| Group | `nut` | nut special block | Yes |
| Varieties | Istarski dugi, Tonda di Giffoni, Ennis | no new varieties | Correct |
| Harvest fallback | mid/late hazelnut windows | template `8.25–10.10` | Covered |
| Bloom | very early / February-March | template says very early / February | Consistent |
| Harvest semantic | natural drop / gathering period | natural drop / do not pick green husk | Consistent |
| Shared block | not applicable | not applied | Correct |

No catalog/template inconsistency blocks S3 closure.

---

## 12. Owner decision items

| Decision | Why owner decision is needed | Options | Recommended default |
|---|---|---|---|
| Young-tree watering for walnut/hazelnut | Real establishment gap; current templates give no guidance for new trees. | A) Add young-tree-only watering entries. B) Add advisory line only. C) Defer. | A in S5. |
| Young-tree fertilization | More source-sensitive than watering. | A) Source-check then add. B) Add generic light spring entry. C) Defer. | A or C; do not invent. |
| Hazelnut pollination / compatibility | Hazelnut productivity often depends on compatible pollinators. | A) Source-check and add advisory. B) Keep only context note. C) Defer. | A. |
| Hazelnut frost-during-bloom note | Hazelnut blooms very early. | A) Add short advisory. B) Add full frost-monitoring entry. C) Defer. | A after source check. |
| Walnut pruning timing finalization | Summer pruning window is self-flagged for source validation. | A) Source-check before S5 finalization. B) Keep current note. C) Defer. | A. |
| Natural-drop harvest semantic | Walnut/hazelnut harvest is gathering fallen ripe nuts, not active picking. | A) Keep one `harvest` action type with notes. B) Add subtype. C) Defer. | A. |
| Nut group name | Current `nut` group is internally consistent. | A) Keep `nut`. B) Rename to `tree_nut`. C) Split. | A. |
| Walnut/hazelnut variety expansion | Future market candidates exist but are out of scope. | A) Defer. B) Open variety workflow. C) Add now. | A. |

No owner decision blocks S3 closure.

---

## 13. Better-than-current opportunities

| Opportunity | Why better | Risk | Recommendation |
|---|---|---|---|
| Promote walnut bleeding-aware pruning as reference pattern. | Best example of explaining non-standard timing. | Low. | Queue for S5. |
| Promote walnut skip-by-default copper wording. | Best hobby-context no-treatment wording. | Low. | Queue for S5. |
| Promote walnut damage-vs-loss wording for walnut fly. | Helps users avoid panic when hull is affected but kernel may be usable. | Low. | Queue for S5. |
| Promote hazelnut renewal-pruning numbers. | Best quantitative bush-renewal guidance in file. | Low. | Queue for S5. |
| Promote hazelnut mechanical-first IPM wording. | Best practical non-chemical response pattern. | Low. | Queue for S5. |
| Add young-tree watering entries for walnut/hazelnut. | Closes the only true S3.0B nut gap. | Low if owner-approved. | S4/S5 owner decision. |
| Add hazelnut pollination advisory after source check. | Addresses a real productivity issue. | Medium if unsourced. | Source-check first. |
| Add mold/storage warning for walnut/hazelnut drying. | Improves post-harvest usability. | Low. | Queue for S5. |
| Add apple-style regional caveat to nut agronomic contexts. | Completes F3 cross-cutting consistency. | Low. | Queue for S5. |
| Add glossary terms: `resa`, `izbojnica`, `smanjenje inokuluma`, `bakterijsko propadanje`. | Improves beginner clarity. | Low. | Queue for S5 glossary. |

---

## 14. Recommended next step

Append S3.7 findings to `V2_S3_AUDIT_FINDINGS_DRAFT.md`.

Then, in a separate tracker task, update `V2_CURRENT_STATE.md` to mark:

```text
S3.7 DONE
S3 species/subtype audit complete
18 of 18 species/subtypes audited
next = S3.8 findings consolidation
```

After this append, S3.8 findings consolidation should begin.

S3.8 should consolidate:

- cross-cutting findings
- reference/gold-standard wording patterns
- owner decision queue
- source-check queue
- candidate mapping notes
- S4/S5 follow-up work

Do not start S4 before S3.8 is complete.

---

## 15. What NOT to do next

- Do not rewrite all templates broadly.
- Do not rewrite walnut or hazelnut blocks now.
- Do not add walnut varieties.
- Do not add hazelnut varieties.
- Do not rename the nut group.
- Do not add scheduled fertilization/irrigation for established walnut or hazelnut.
- Do not add young-tree watering entries without owner decision.
- Do not add hazelnut pollination guidance without source check.
- Do not add hazelnut frost thresholds without source check.
- Do not add climate offsets.
- Do not add `climateProfile`, `regionProfile`, `baseClimate`, or `offsetDays`.
- Do not add brand names.
- Do not apply pome/stone shared spray program to walnut or hazelnut.
- Do not create automatic spray rules.
- Do not convert trap/scouting observations into formal gates.
- Do not create `harvest_natural_drop` subtype now.
- Do not finalize domain records.
- Do not implement runtime code.
- Do not start S4 before S3.8 consolidation.
