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
