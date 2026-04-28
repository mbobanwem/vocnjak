# V2 S3 Audit Consolidation

## 0. Status

- Active S3 output.
- Consolidates S3.1-S3.7 audit findings.
- Action-ready input for S4 owner decisions and S5 targeted documentation fixes.
- Not source of truth for runtime/schema.
- Not an implementation spec.
- Detailed per-species evidence is archived at `archive/V2_S3_AUDIT_FINDINGS_DETAIL_2026-04.md`.
- S4 owner decision recorded: citrus is removed from current V2 supported scope and deferred to future roadmap work.
- S4 owner decision recorded: fig is removed from current V2 supported scope and deferred to future fig domain work.

## 1. Scope

Cover:

- all 18 pre-S4 candidate species/subtypes audited
- S4 owner decision removes citrus from current V2 supported scope
- S4 owner decision removes fig from current V2 supported scope
- input docs audited:
  - `V2_PLANT_CATALOG.md`
  - `V2_ORCHARD_PLAN_TEMPLATES.md`
- no catalog/template/domain model changes were made during S3
- no runtime changes were made
- calendar-first, plant-state-aware stance preserved
- no automatic spray calendar introduced

## 2. Executive verdict

S3.1-S3.7 species/subtype audit is complete.

All remaining current-V2 supported audited species/subtypes are usable for S4/S5 continuation. No blocker was found for the remaining current V2 scope.

S4 owner decision: lemon, orange, and mandarin must not ship in current V2. Citrus is deferred because the current subtype/container-biased model is not apple-level complete and risks wrong guidance.

S4 owner decision: fig must not ship in current V2. Fig is deferred because type-dependent one-crop/two-crop behavior, pruning dependency, and regional sensitivity cannot be safely represented by the current simplified model.

Most remaining work is:

- beginner clarity
- regional caveat consistency
- owner decisions
- source-check items
- S5 wording/documentation fixes

No schema/runtime implementation should start before S4/S5 are complete.

## 3. Coverage matrix — all 18 species/subtypes

| Species/subtype | S3 batch | Status | Key open items |
|---|---|---|---|
| apple | S3.1 | Audited | Early fallback harvest mismatch; shared fertilizer category; glossary/label wording. |
| pear | S3.2 | Audited | Monitoring split vs combined; cumulative copper wording; regional caveat. |
| quince | S3.2 | Audited | Codling trap option source check; target disease names; regional caveat. |
| sweet_cherry | S3.3 | Audited | Rain-cover/cracking source check; bird-net pattern propagation. |
| sour_cherry | S3.3 | Audited | Monitoring install detail; bird-net material detail; regional caveat. |
| plum | S3.3 | Audited | 2nd-generation plum moth timing/terminology source check. |
| peach | S3.4 | Audited | Monitoring shape; post-bloom clarity; regional caveat. |
| nectarine | S3.4 | Audited | Monitoring shape; post-bloom clarity; regional caveat. |
| apricot | S3.4 | Audited | Pre-bloom copper source check; frost advisory mapping; variety display polish. |
| almond | S3.4 | Audited | Monitoring targets; post-bloom disease names; cumulative copper pattern. |
| olive | S3.5 | Audited | Mediterranean caveat; no variety timing; monitoring-to-treatment pattern. |
| fig | S3.5 | Audited; removed from current V2 | Future fig domain definition required: one-crop/two-crop behavior, pruning dependency, regional sensitivity. |
| pomegranate | S3.5 | Audited | Light spring/summer guidance accepted; cracking observation mapping; source checks. |
| lemon | S3.6 | Audited; removed from current V2 | Future species-level citrus support gated by regional/climate strategy. |
| orange | S3.6 | Audited; removed from current V2 | Future species-level citrus support gated by regional/climate strategy. |
| mandarin | S3.6 | Audited; removed from current V2 | Future species-level citrus support gated by regional/climate strategy. |
| walnut | S3.7 | Audited | Summer pruning timing source check; natural-drop harvest semantics; young-tree water. |
| hazelnut | S3.7 | Audited | Pollination source check; young-tree water; natural-drop harvest semantics. |

## 4. Cross-cutting findings

- No-auto-spray stance held across all batches.
- Monitoring remains evidence, not automatic treatment.
- Pome/stone shared block is valid only for standard fruit trees.
- Mediterranean/citrus/nut special blocks correctly exclude shared pome/stone block; S4 removes citrus from current V2 rather than polishing the weak subtype model.
- Beginner glossary debt exists across all groups.
- Regional caveat wording is uneven.
- Cumulative copper wording needs S5 clarity.
- Long seasonal-care windows need S5 mapping/design decision.
- Natural-drop harvest for walnut/hazelnut should stay notes/advisory unless owner decides otherwise.
- No climate profile or numeric regional offset was introduced.

## 5. Beginner glossary / clarity queue

Queue these terms for S5 decoding. Do not write the full glossary in S3.8.

```text
fenofaza
dormancija
kasna dormancija
bubrenje pupa
opadanje latica
plodić
klikera
podloga
karenca
fenološko stanje
lokalni pragovi
stručni savjet
2. generacija
vaza
pinciranje
izdanci
obnova grma
polifenoli
zaštićeni prostor
mikrolokacija
multi_cycle
kontinuirani rod
mirovanje
lončani uzgoj
mikroelementi
kloroza
voda bez vapna
resa
izbojnica
smanjenje inokuluma
bakterijsko propadanje
```

## 6. Regional caveat queue

Standard apple-style caveat should be applied to pome, stone, and nut species where absent:

- warmer regions may be earlier
- colder regions may be later
- plant state and local conditions override date

Mediterranean-specific caveat needed for:

- olive
- pomegranate

Fig-specific regional interpretation is deferred with fig removal from current V2.

Citrus-specific caveat is deferred to future reintroduction work for:

- lemon
- orange
- mandarin

Current V2 does not keep citrus as supported plant scope.

Do not add:

- numeric offsets
- `climateProfile`
- `regionProfile`
- `offsetDays`
- formulas

Use qualitative, plant-state/local-condition-aware caveats only.

## 7. Source-check queue

| Item | Species/group | Why source check is needed | Disposition |
|---|---|---|---|
| Plum 2nd generation plum moth timing | plum | Existing wording is beginner-opaque and timing-sensitive. | Source-check before S5 wording. |
| Rain-cover / fruit cracking | sweet_cherry | Useful but absent from current source text. | Source-check before adding. |
| Pre-bloom copper timing | apricot | Early-bloom copper timing is sensitive. | Source-check before S5 finalization. |
| Monitoring targets | almond | Current monitoring target detail is thin. | Source-check named targets. |
| Post-bloom target disease names | almond | Post-bloom entry names no clear diseases inline. | Source-check before naming. |
| Timing/pest/disease regional claims | pomegranate | Template is light and marginal-climate framed. | Source-check if owner expands depth. |
| Cold-tolerance threshold | orange | Numeric damage threshold should not be invented. | Defer to future citrus reintroduction. |
| Return-to-outdoor / spring acclimatization | citrus | Missing for container users. | Defer to future citrus reintroduction. |
| Frost-damage recovery cues | citrus | Useful but absent. | Defer to future citrus reintroduction. |
| Summer pruning timing | walnut | Template self-flags timing validation. | Source-check before S5 finalization. |
| Optional copper timing | walnut | Bud/catkin timing is source-sensitive. | Source-check before sharpening. |
| Young-tree fertilization | walnut/hazelnut | More source-sensitive than watering. | Source-check or owner defer. |
| Pollination / cross-compatibility | hazelnut | Real productivity factor. | Source-check before guidance. |
| Frost-during-bloom advisory | hazelnut | Early bloom may matter. | Source-check before adding. |

## 8. Owner decision queue

| Decision | Context | Recommended default | Next phase |
|---|---|---|---|
| Apple early fallback harvest window mismatch | Template starts later than early fallback, but no current early apple variety. | Defer until early apple variety is added. | S4 |
| Pear monitoring split vs combined entry | Pear has multiple monitoring concerns. | Decide shape in S5 design. | S4/S5 |
| Quince codling trap option vs scouting-only | Trap guidance is not fully source-backed in current text. | Source-check before adding trap guidance. | S4 |
| Cumulative copper wording promotion | Multiple copper entries can stack in user perception. | Promote anti-duplication wording where approved. | S4/S5 |
| Multi-target scouting program shape | Several entries scout multiple targets. | Prefer one program with multi-target list, confirm in S5. | S4/S5 |
| Non-pest `praćenje` mapping | Fruit cracking, frost, winter checks are not pest monitoring. | Map to observation/advisory action windows. | S4/S5 |
| Fig harvest/crop-type model | Universal two-window fig harvest is not approved. Fig behavior is type-dependent: one-crop vs two-crop, breba vs main crop, pruning on old wood vs new growth, and regional sensitivity. | Remove fig from current V2; defer to future fig domain definition. | S4 recorded; future roadmap |
| Olive species-level harvest timing vs catalog silence | Template has species-level timing; catalog has no olive timing. | Keep template as timing reference for now. | S4/S5 |
| Pomegranate spring/summer thinness | Light but defensible for current scope. | Accept unless owner expands Mediterranean-market depth. | S4 |
| Citrus subtype model vs top-level species | Catalog uses `citrus` with weak lemon/orange/mandarin subtypes. | Current V2 decision: remove citrus from supported plants; future reintroduction requires regional timing / climate strategy and full citrus domain definition. | S4 recorded; S5 removal/future-roadmap handoff |
| Citrus variety modeling | Current catalog defers citrus varieties. | Defer; future citrus reintroduction should likely include curated lemon/orange/mandarin varieties/subtypes for target countries. | Future roadmap |
| Lemon full-year harvest window | `1.1-12.31` is unusual but matches `multi_cycle`. | Defer with citrus removal; revisit only during future full species-level lemon support. | Future roadmap |
| Citrus spring return/outdoor acclimatization | Winter prep exists, spring return does not. | Defer with citrus removal; source-check during future citrus reintroduction. | Future roadmap |
| Walnut/hazelnut young-tree watering | Practical establishment gap. | Add young-tree-only watering if owner approves. | S4/S5 |
| Hazelnut pollination/cross-compatibility | Real productivity item. | Source-check and add advisory if approved. | S4/S5 |
| Natural-drop harvest semantic | Walnut/hazelnut harvest is gathering fallen ripe nuts. | Keep `harvest` with notes, no new subtype. | S4/S5 |
| Nut group name | Current `nut` group is internally consistent. | Keep `nut`. | S4 |

Do not resolve these decisions in S3.8.

## 9. S5 documentation-fix queue

Shared standard-fruit-tree block:

- add file-level glossary
- propagate regional caveat where approved
- add cumulative copper anti-duplication wording
- improve fertilizer category clarity
- improve bird-net material/spec consistency
- improve monitoring install detail consistency
- keep trap threshold wording non-numeric unless source-backed
- clarify post-bloom `opadanje latica`
- propagate fruitlet `veličine klikera` cue where source-backed

Pome:

- resolve apple early fallback mismatch
- decide pear monitoring split vs combined shape
- source-check quince codling trap option
- tighten quince disease target wording if source-backed

Stone:

- source-check plum 2nd-generation wording
- source-check sweet cherry rain-cover/cracking
- polish sour cherry monitoring/net detail
- source-check almond monitoring targets and post-bloom disease names
- preserve apricot frost-as-information and šarka/no-curative-treatment wording

Mediterranean:

- add Mediterranean-specific regional caveat
- preserve olive no-variety-timing rule
- keep fig removed from current supported V2 scope
- preserve fig only as future roadmap/domain candidate
- do not keep fig with a simplified single-window or universal two-window harvest model
- map pomegranate fruit-cracking watch as observation/advisory
- tighten fertilization/product wording where useful

Citrus:

- remove citrus from current supported V2 scope in the active catalog/template pass
- preserve citrus only as future roadmap/domain candidate
- do not polish subtype/container guidance for current V2
- do not add citrus varieties now
- future reintroduction requires regional timing / climate strategy and full species-level templates

Nut:

- add walnut/hazelnut young-tree watering if owner approves
- add hazelnut pollination if source-backed and owner-approved
- add mold/storage warnings for walnut/hazelnut drying
- preserve walnut pruning and hazelnut mechanical-first patterns

## 10. Gold-standard / reference wording patterns

- apple regional caveat
- apple codling monitoring
- sweet cherry yellow sticky plate monitoring
- sweet cherry bird-net material/timing
- apricot frost-as-information wording
- apricot šarka / no-curative-treatment wording
- almond cumulative-copper anti-duplication wording
- olive monitoring -> conditional treatment pair
- olive registered organic/barrier/repellent method flexibility
- fig milky-sap skin warning (future reference only)
- pomegranate metallic-sound harvest cue
- lemon container-aware watering + water-quality wording (future reference only)
- lemon chlorosis / micronutrient cue (future reference only)
- mandarin hedged cold-tolerance wording (future reference only)
- orange continental-container hedge (future reference only)
- walnut bleeding-aware pruning
- walnut hobby-context skip-by-default copper wording
- walnut damage-vs-loss walnut-fly wording
- hazelnut bush-renewal pruning numbers
- hazelnut mechanical-first IPM wording

## 11. Candidate mapping notes for S5/S6

Candidate-only notes:

- monitoring_program candidates exist across apple, cherry, plum, olive, walnut, and hazelnut; citrus candidates are deferred with citrus removal.
- observation/advisory action-window candidates include winter checks, frost checks, fruit cracking, and other non-pest observations.
- multi-target scouting shape remains unresolved.
- non-pest monitoring should map to observation/advisory, not `monitoring_program`.
- long irrigation/care windows need a design decision.
- fig harvest windows are deferred; universal two-window harvest is not approved for current V2.
- lemon full-year harvest window is deferred with citrus removal and must be revisited only during future full citrus reintroduction.
- walnut/hazelnut natural-drop harvest stays notes/advisory unless owner decides otherwise.
- trap/scouting observations must not become formal gates.
- no final records were created during S3.

## 12. Explicitly deferred / do-not-fix-now

- no new varieties
- no fig support in current V2
- no fig varieties
- no one-crop/two-crop fig domain model in current V2
- no citrus varieties
- no citrus support in current V2
- no olive timing-driving varieties
- no walnut/hazelnut variety expansion
- no climate profiles or numeric offsets
- no pesticide brand names
- no automatic spray rules
- no runtime gates from trap/scouting
- no source-check fixes before S4/S5
- no S4 owner decisions resolved inside S3.8
- no S5 wording fixes applied inside S3.8

## 13. S4 handoff

S4 must resolve owner decisions from:

- source-check queue
- owner decision queue
- S5 documentation-fix queue

S4 outputs expected:

- approved fixes
- deferred items
- rejected items
- items needing external/source validation
- items allowed into S5

S4 must not:

- rewrite all docs
- add varieties without policy workflow
- add climate offsets
- implement runtime

## 14. S5 handoff

S5 applies only owner-approved targeted documentation fixes.

S5 inputs:

- this consolidation doc
- archived detailed findings only when evidence is needed
- S4 owner decision outcomes

S5 expected outputs:

- updated plant catalog/template docs where approved
- glossary/clarity improvements
- regional caveat consistency
- source-backed wording fixes
- no runtime implementation

## 15. Archived detailed evidence

Detailed per-species audit evidence is archived at:

`archive/V2_S3_AUDIT_FINDINGS_DETAIL_2026-04.md`

The archived file is historical evidence only. It is not the active S3 output and should not be listed in mandatory read order.

If a future audit cycle needs detailed evidence again, create a new dated detail file rather than editing the archived one.
