# VOCNJAK V2 — CURRENT STATE

## Status

Operational tracker.

This document is not source of truth, not schema, not runtime behavior, not implementation, and not catalog content.

It tracks current phase, completed documentation milestones, next sessions, future roadmap pointers, and stop conditions so agents do not reopen closed work or drift from the owner-approved path.

If this document conflicts with locked/core documents, locked/core documents win.

This document should be updated after relevant documentation/session commits.

---

## Current phase

Phase: Pre-S3 readiness / S3 preparation.

Current goal:

Finish documentation control so the project stops looping and can enter structured S3–S5 catalog and plan-template audit/validation.

Current immediate next step:

S3.7 — Nut audit: walnut, hazelnut.

S3.0B, S3.1, S3.2, S3.3, S3.4, S3.5, and S3.6 are complete; proceed to nut audit.

---

## Product stance now locked for current V2

Vocnjak V2 is:

- calendar-first for beginner planning
- plant-state-aware for execution
- orchard-first
- beginner-friendly
- multi-country aware
- practical, not academic
- no automatic spray calendar
- no pesticide recommendation engine
- no phenology-only expert system

Calendar windows remain important because users need to plan ahead: buy materials, prepare tools, schedule work, understand the season, and avoid being surprised by orchard tasks.

A calendar window such as `15.1.–31.1.` is an approximate planning period, not a blind instruction.

When the user opens an action, the app must explain the practical agronomic meaning in beginner language:

- what the action is for
- what problem it prevents or reduces
- what plant state or real-world cue to check
- what weather or safety conditions matter
- what product/material category is needed where relevant
- when to skip, delay, or avoid the action

Regional/climate numeric offsets are not part of current V2.

Do not introduce:

- `climateProfile`
- `regionProfile`
- `baseClimate`
- `offsetDays`
- hidden regional shifts
- hardcoded regional formulas

Regional adaptation is future work.

---

## Completed milestones

### DONE — Pre-S3 orchard plan template closure

Commit:

- `bdda809 Finalize V2 orchard plan template closure`

Status:

- `V2_ORCHARD_PLAN_TEMPLATES.md` contains template coverage for the 18 supported plant types / subtypes.
- Shared block exists for standard fruit trees.
- Mediterranean, citrus, and nut groups are handled separately.
- Monitoring does not equal treatment.
- No automatic spray calendar.

Remaining before S3:

- run plan-template readiness audit to check practical usefulness and beginner clarity across all 18 types.

### DONE — Plant catalog variety model

Commit:

- `29dc0d2 Finalize V2 plant catalog variety model`

Status:

- `V2_PLANT_CATALOG.md` supports timing-driving varieties and user-facing-only varieties.

### DONE — Validated catalog varieties

Commit:

- `13c2b1b Add validated V2 catalog varieties`

Status:

- approved validated varieties added.
- olive user-facing-only variety model added.
- citrus remains subtype-based.
- no olive timing-driving model.

### DONE — Deferred regional timing decision

Commit:

- `c86baa7 Record deferred regional timing decision`

Status:

- regional/climate numeric timing shifts deferred.
- no `climateProfile`, `regionProfile`, `baseClimate`, `offsetDays`, or hardcoded regional formulas in current V2.

### DONE — Calendar-first product vision clarification

Commits:

- `ffa6231 Clarify calendar-first product vision`
- `39cc684 Clarify calendar windows as planning periods`

Status:

- `PRODUCT_VISION.md` now explicitly protects calendar windows as the beginner planning surface.
- Product vision now requires beginner-language explanations for agronomic cues and product-label wording.
- Product vision now includes owner decision / vision-change rule.
- `V2_AGENT_ENTRYPOINT.md` includes calendar-first, plant-state-aware guardrail for future agents.

---

## Active roadmap before S3 audit

### S3.0B — Plan Template Readiness Audit

Type: read-only audit.

Status: DONE — read-only analysis completed.

Verdict:

- `V2_ORCHARD_PLAN_TEMPLATES.md` is structurally ready for S3.
- All 18 supported plant types / subtypes have template coverage.
- No major blocker was found.
- Proceed to `S3.1 — Apple-only S3 audit dry-run`.
- Do not run a broad S3.0C rewrite before S3.1.

Known non-blocking findings to preserve for S3/S4/S5:

- Regional caveat wording is strongest in apple and should be evaluated for consistent use elsewhere.
- Beginner explanations should be checked for terms such as dormancy, fenofaza, bud swell, threshold, pressure, wet spring, expert/local advice, and product-label wording.
- “Stručni savjet” / “lokalni pragovi” should become more beginner-actionable where used.
- Walnut and hazelnut lack explicit fertilization/irrigation entries; S3 should verify whether this is acceptable or needs targeted guidance, especially for young plants.
- Pomegranate spring/summer guidance is light and should be source-checked.
- Almond is somewhat lighter than peach/nectarine and should be source-checked.
- No automatic spray calendar was found.
- Product/material categories are generally present and no hardcoded product-brand recommendation pattern was found.

Goal:

Check whether `V2_ORCHARD_PLAN_TEMPLATES.md` is practically ready for S3 across all 18 plant types / subtypes.

Do not edit templates in this session.

Audit each plant type / subtype for:

1. yearly plan coverage exists
2. harvest window or harvest guidance exists
3. pruning guidance exists, or absence is justified
4. fertilization guidance exists, or absence is justified
5. irrigation guidance exists, or absence is justified
6. monitoring / pest / disease guidance exists where relevant
7. spray/protection guidance exists only where justified
8. beginner clarity is sufficient
9. product/material category is explained where relevant
10. plant-state / real-world cues are explained in plain language
11. skip/delay/avoid conditions are explained where relevant
12. young-tree relevance is explained where relevant
13. regional/climate caveats are present only as notes, not numeric offsets
14. no automatic spray calendar is introduced
15. no pesticide recommendation engine is introduced

Output:

- findings table by all 18 plant types / subtypes
- concrete gap list
- owner decision items
- recommended targeted fix sessions, if needed

Allowed files:

- create or edit a findings draft only if explicitly requested by owner

Not allowed:

- editing `V2_ORCHARD_PLAN_TEMPLATES.md`
- editing `V2_PLANT_CATALOG.md`
- editing model/schema/runtime docs

Exit criteria:

- owner confirms whether targeted fixes are needed before S3.

---

### S3.0C — Targeted Plan Template Fix Pass

Type: conditional edit session.

Only do this if S3.0B identifies concrete gaps and owner approves fixes.

Allowed changes:

- improve beginner clarity
- add product/material category wording
- add practical “what to look for” wording
- add skip/delay/avoid wording
- clarify regional caveats without numeric offsets
- add missing obvious plan guidance only with owner approval

Forbidden changes:

- schema/model changes
- climateProfile / regionProfile / offsetDays
- automatic spray decisions
- pesticide recommendation engine
- new variety expansion
- broad rewrite of templates
- runtime implementation

Exit criteria:

- plan templates are stable enough to enter S3 audit.

---

### S3.0D — Pre-S3 readiness closure

Type: documentation checkpoint.

Goal:

Confirm that:

- `PRODUCT_VISION.md` is clarified
- `V2_AGENT_ENTRYPOINT.md` is clarified
- `V2_CURRENT_STATE.md` is updated
- `V2_PLANT_CATALOG.md` is stable pre-S3 input
- `V2_ORCHARD_PLAN_TEMPLATES.md` is stable pre-S3 input
- no known blocker remains before S3 apple-only dry-run

Exit criteria:

- owner approves moving into S3.1.

---

## S3–S5 roadmap — catalog and plan-template audit / validation

S3–S5 are connected and should close the catalog + orchard plan-template documentation track before UX/architecture work begins.

This roadmap is provisional and should be refined as S3 findings emerge.

### S3 — Audit findings and dry-run validation

Purpose:

- audit stabilized pre-S3 inputs
- create source-backed findings
- identify unsafe wording, vague beginner guidance, and source gaps
- preserve ambiguity instead of guessing
- queue owner decisions
- produce candidate mapping notes only where useful

S3 starts small:

- S3.1 — Apple-only S3 audit dry-run
- S3.2 — Pome group audit: pear + quince
- S3.3 — Stone fruit audit batch 1: sweet_cherry, sour_cherry, plum
- S3.4 — Stone fruit audit batch 2: peach, nectarine, apricot, almond
- S3.5 — Mediterranean audit: olive, fig, pomegranate
- S3.6 — Citrus audit: lemon, orange, mandarin
- S3.7 — Nut audit: walnut, hazelnut
- S3.8 — S3 findings consolidation

### S3.1 — Apple-only S3 audit dry-run

Status: DONE — apple dry-run materialized.

Commit:

- `633e56c Add S3 apple audit findings draft`

Output:

- `V2_S3_AUDIT_FINDINGS_DRAFT.md`

Verdict:

- Apple is ready for S3 scale-up as-is.
- The apple findings format is accepted as the working S3 findings format.
- No targeted apple wording fix is required before S3.2.
- Apple can serve as the reference pattern for scaling S3 to pome and later groups.

Known apple follow-up items preserved for S4/S5:

- Shared fertilization entry should name a beginner-readable product/material category.
- `fenofaza`, `stručni/lokalni savjet`, `bujno stablo`, and similar terms should be decoded in beginner language.
- Winter copper should receive a clearer plant-state cue and consistent label/regulation wording.
- Apple bird-net entry should be considered for size/type/fixing specificity similar to cherry/peach entries.
- Apple regional caveat is a good reusable pattern for other species.
- Apple harvest template window does not cover the early fallback start, but no current catalog apple variety is `timing: early`; defer unless early apple varieties are added or owner decides otherwise.
- Seasonal irrigation mapping remains an owner/S4/S5 decision because it behaves more like a care period than a discrete action.

Do not fix these now.

Disposition:

- Queue apple wording and mapping items for S4/S5 targeted resolution.
- Proceed to S3.2 pome audit.

### S3.2 — Pome group audit

Status: DONE — pome findings appended.

Commit:

- `82d754b Append S3 pome audit findings`

Output:

- `V2_S3_AUDIT_FINDINGS_DRAFT.md`

Scope completed:

- apple — completed in S3.1
- pear — completed in S3.2
- quince — completed in S3.2

Verdict:

- Pome group is ready for S3 scale-up as-is.
- Pear and quince findings scale the apple S3.1 format without modification.
- No targeted pome wording fix is required before S3.3.
- Pome findings should be resolved later through S4/S5 owner decisions and targeted fixes.

Known pome follow-up items preserved for S4/S5:

- Apple regional caveat pattern should be considered for pear, quince, and later all species.
- Shared beginner wording still needs cleanup for terms such as `fenofaza`, `dormancy`, bud stage, bloom stage, `stručni/lokalni savjet`, `threshold`, and `pressure`.
- Shared fertilization entry should name a beginner-readable product/material category.
- Shared winter copper should receive clearer plant-state wording and consistent label/regulation wording.
- Pear monitoring may need to split into pear psylla scouting and moth/codling trap monitoring, but only as an S5 design decision.
- Quince codling/moth trap handling requires S3 source check before adding trap guidance.
- Cumulative early-season copper wording should be considered in S4/S5, especially where shared winter copper, post-pruning copper, and pear/quince pre-bloom copper can stack.
- Pear/quince bird-net and product/material specificity should be considered for S4/S5 consistency.
- Bosc / Bosc's Bottle display wording is a minor naming polish item for S5.

Do not fix these now.

Disposition:

- Queue pome wording, monitoring-shape, and mapping items for S4/S5 targeted resolution.
- Proceed to S3.3 stone fruit batch 1.

### S3.3 — Stone fruit audit batch 1

Status: DONE — stone fruit batch 1 findings appended.

Commit:

- `b35bf5f Append S3 stone fruit batch 1 findings`

Output:

- `V2_S3_AUDIT_FINDINGS_DRAFT.md`

Scope completed:

- sweet_cherry
- sour_cherry
- plum

Verdict:

- Stone fruit batch 1 is ready for S3 scale-up as-is.
- Sweet cherry and plum findings scale the established S3 format without modification.
- Sweet cherry now provides two strong reference patterns:
  - yellow sticky plate monitoring for cherry fruit fly
  - bird-net material/timing guidance
- No targeted stone batch 1 wording fix is required before S3.4.
- Stone batch 1 findings should be resolved later through S4/S5 owner decisions and targeted fixes.

Known stone batch 1 follow-up items preserved for S4/S5:

- Sweet cherry yellow sticky plate monitoring should be treated as the reference pattern for non-pheromone monitoring.
- Sweet cherry bird-net entry should be treated as the reference pattern for bird-net material/timing guidance.
- Sour cherry monitoring install details are lighter than sweet cherry and should be considered for S5 polish.
- Sour cherry bird-net material details are missing and should be considered for S5 polish.
- Plum `2. generacija šljivinog savijača` requires source check before beginner-facing decoding or sharper timing wording.
- Plum `2nd generation` wording must not become an automatic spray trigger.
- Sweet cherry rain-cover / fruit-cracking guidance remains deferred and must not be added without source-backed audit and owner approval.
- Sour cherry and plum variety example lists should be completed or deliberately kept representative in S5.
- Glossary need is increasing: `fenofaza`, `dormancy`, `podloga`, `karenca`, `lokalni pragovi`, `stručni savjet`, `2. generacija`.

Do not fix these now.

Disposition:

- Queue stone batch 1 wording, source-check, monitoring-shape, glossary, and mapping items for S4/S5 targeted resolution.
- Proceed to S3.4 stone fruit batch 2.

### S3.4 — Stone fruit audit batch 2

Status: DONE — stone fruit batch 2 findings appended.

Commit:

- `b8387b0 Append S3 stone fruit batch 2 findings`

Output:

- `V2_S3_AUDIT_FINDINGS_DRAFT.md`

Scope:

- peach
- nectarine
- apricot
- almond

Scope completed:

- peach
- nectarine
- apricot
- almond

Verdict:

- Stone fruit batch 2 is ready for S3 scale-up as-is.
- Peach, nectarine, apricot, and almond findings scale the established S3 format without modification.
- No targeted stone batch 2 wording fix is required before S3.5.
- Stone batch 2 findings should be resolved later through S4/S5 owner decisions, source checks, and targeted fixes.
- After S3.4, all 10 standard fruit trees that use the shared standard fruit tree block are audited:
  - apple
  - pear
  - quince
  - sweet_cherry
  - sour_cherry
  - plum
  - peach
  - nectarine
  - apricot
  - almond

Known stone batch 2 follow-up items preserved for S4/S5:

- Peach and nectarine leaf-curl entries are strong and should remain pre-bud / pre-bloom, not bloom or post-bloom treatment.
- Peach/nectarine monitoring entries combine aphids and oriental fruit moth; split vs combined shape is an S5 design decision.
- Apricot frost monitoring is a strong reference pattern for information/advisory actions and should not become unsupported frost-protection automation.
- Apricot šarka / Plum pox wording is a strong reference pattern for viral disease handling and must preserve the no-curative-treatment stance.
- Almond is the lightest species in this batch and needs source-backed S5 polish, especially disease/pest monitoring and post-bloom target naming.
- Almond monitoring must not be finalized as a `monitoring_program` without source-validating named targets.
- Almond cumulative-copper wording is the strongest anti-duplication copper wording in the file and should be considered for promotion to shared Spray Safety Notes.
- Apricot/almond frost monitoring should likely map as observation/advisory action-window candidates, not pest/disease `monitoring_program` records.
- Mađarska najbolja / Magyar kajszi is missing from apricot template examples and should be considered for S5 display polish.
- Suncrest, Texas, Tuono, Nonpareil, and Harcot are not current catalog/template varieties and must not be added without the variety workflow and owner approval.
- Regional caveat remains missing across stone batch 2 and should be handled as cross-species S5 wording polish.
- Mediterranean-vs-continental qualitative frost-risk caveat may be needed for apricot/almond, without numeric offsets.

Do not fix these now.

Disposition:

- Queue stone batch 2 wording, source-check, monitoring-shape, glossary, regional caveat, and mapping items for S4/S5 targeted resolution.
- Proceed to S3.5 Mediterranean audit.

### S3.5 — Mediterranean audit

Status: DONE — Mediterranean findings appended.

Commit:

- `1cbeff2 Append S3 Mediterranean findings`

Output:

- `V2_S3_AUDIT_FINDINGS_DRAFT.md`

Scope completed:

- olive
- fig
- pomegranate

Verdict:

- Mediterranean species are ready for S3 scale-up as-is.
- Olive, fig, and pomegranate findings scale the established S3 format without modification.
- Olive correctly preserves user-facing-only variety handling: olive varieties are selectable/displayable but do not drive timing.
- Fig correctly preserves early-crop / main-crop harvest split.
- Pomegranate is lighter than olive/fig, but acceptable for current S3 because it is explicitly marginal in continental EU climate and self-flagged for source audit.
- No targeted Mediterranean wording fix is required before S3.6.
- After S3.5, 13 of 18 supported species/subtypes are audited.

Known Mediterranean follow-up items preserved for S4/S5:

- Do not add olive variety timing, harvestWindow, or bloomWindow.
- Do not apply the pome/stone shared spray program to olive, fig, or pomegranate.
- Olive §6 monitoring → conditional treatment is the reference pattern for no-auto-spray monitoring/spray pairs.
- Olive organic/barrier/repellent wording is the reference pattern for registered-method flexibility.
- Fig milky-sap warning is a useful handler-safety pattern.
- Pomegranate fruit-cracking watch should map as observation/advisory, not pest/disease monitoring_program.
- Mediterranean species need a Mediterranean-specific regional caveat, not a direct copy of the apple caveat.
- Fig two-window harvest pattern needs S5 design confirmation.
- Long irrigation/care windows remain an S5 mapping/design item.
- Multi-target scouting program shape remains an S5 design item.
- Non-pest `praćenje` entries should likely map to observation action windows.
- Pomegranate spring/summer thinness is accepted for current scope unless owner opens a deeper Mediterranean-market expansion.
- Beginner glossary should include Mediterranean terms such as `vaza`, `pinciranje`, `izdanci`, `polifenoli`, local thresholds, and local registration.

Do not fix these now.

Disposition:

- Queue Mediterranean wording, source-check, monitoring-shape, observation/advisory mapping, regional caveat, and glossary items for S4/S5 targeted resolution.
- Proceed to S3.6 citrus audit.

### S3.6 — Citrus audit

Status: DONE — Citrus findings appended.

Commit:

- `1b4bec3 Append S3 citrus findings`

Output:

- `V2_S3_AUDIT_FINDINGS_DRAFT.md`

Scope completed:

- lemon
- orange
- mandarin

Verdict:

- Citrus is ready for S3 scale-up as-is.
- Lemon, orange, and mandarin findings scale the established S3 format without modification.
- Citrus subtype model is internally consistent: `citrus → lemon / orange / mandarin`.
- Lemon correctly uses `multi_cycle`.
- Orange correctly uses `winter`.
- Mandarin correctly uses `autumn`.
- No citrus varieties were added or recommended for current S3.
- No variety-specific citrus timing was introduced.
- Optional spray wording remains conditional.
- Monitoring remains evidence only.
- No targeted citrus wording fix is required before S3.7.
- After S3.6, 16 of 18 supported species/subtypes are audited.

Known citrus follow-up items preserved for S4/S5:

- Do not restructure citrus without owner decision.
- Do not add lemon, orange, or mandarin varieties in current S3.
- Do not add variety-specific citrus timing.
- `zaštićeni prostor` / protected winter location needs beginner-friendly explanation.
- Container-vs-ground reality needs clearer citrus wording.
- Lemon fertilization wording is the reference pattern for citrus micronutrients and yellow-leaf / iron-deficiency cue.
- Lemon watering wording is the reference pattern for container-aware watering and low-lime-water guidance.
- Mandarin cold-tolerance wording is the reference pattern for hedged multi-factor cold-sensitivity language.
- Orange cold-tolerance damage threshold needs source check before adding any number.
- Citrus needs a Mediterranean-vs-continental regional caveat.
- Return-to-outdoor / spring acclimatization guidance needs source check before adding.
- Citrus pest monitoring and optional treatment must remain advisory; scouting observations must not become formal gates.
- Lemon full-year harvest window remains an S5 design/owner decision item, but is acceptable for current S3.
- Beginner glossary should include citrus terms such as `zaštićeni prostor`, `lončani uzgoj`, `mikroelementi`, `kloroza`, `multi_cycle`, `kontinuirani rod`, `mikrolokacija`, and `podloga`.

Do not fix these now.

Disposition:

- Queue citrus wording, source-check, regional caveat, container/protected-location clarity, observation/advisory mapping, and glossary items for S4/S5 targeted resolution.
- Proceed to S3.7 nut audit.

### S3.7 — Nut audit

Status: NEXT

Scope:

- walnut
- hazelnut

Goal:

Audit walnut and hazelnut templates, nut-specific pruning, harvest and post-harvest handling, drying/storage guidance, walnut fly, hazelnut weevil, bud mite monitoring, optional treatment wording, fertilization and irrigation gaps, young-tree relevance, beginner clarity, product/material category clarity, monitoring vs treatment, no-auto-spray behavior, regional caveats, and source-check items.

Do not start S3 consolidation before S3.7 findings are appended and tracker is updated.

### S4 — Owner decision resolution and source-backed audit closure

Purpose:

Resolve the decision queue produced by S3.

S4 should decide:

- which S3 findings require template wording fixes
- which findings require catalog wording fixes
- which findings are deferred
- which findings become owner-approved corrections
- which uncertain agronomic claims need stronger sources
- which items are safe enough for current V2 and which remain future work
- how to handle ambiguous regional/climate notes without introducing numeric offsets

Expected S4 output:

- owner decision log or decision section
- resolved / deferred status for S3 findings
- approved targeted correction list
- explicit list of items not to fix in current V2

S4 is not:

- broad rewrite
- new variety expansion
- regional offset modeling
- runtime implementation

### S5 — Final pre-implementation catalog/template readiness

Purpose:

Turn S3 findings + S4 decisions into final pre-implementation documentation readiness.

S5 should:

- apply owner-approved targeted fixes
- verify plan templates remain calendar-first and beginner-readable
- verify catalog and templates remain aligned
- verify no automatic spray calendar was introduced
- verify product/material categories are clear without hardcoded brand recommendations
- verify regional/climate differences remain notes/deferred findings, not numeric offsets
- verify all 18 plant types/subtypes remain covered
- verify unresolved items are explicitly deferred

Expected S5 output:

- final pre-implementation catalog/template readiness sign-off
- updated findings/decision status
- no unresolved blocker before UX sessions
- clear handoff into S6

S5 exit criteria:

- owner approves catalog/template documentation as ready enough for UX/architecture work

---

## S6–S11 provisional roadmap — to be detailed later

S6–S11 are planned direction only. They must be detailed in their owning sessions and must continue to follow `PRODUCT_VISION.md`.

### S6 — UX core surfaces

Purpose:

Define the main user-facing screens and what each surface answers.

Candidate surfaces:

- Pregled / Home
- Calendar
- Plant list
- Plant detail
- History / records
- Monitoring surfaces
- Seasonal window detail

Key product requirement:

UX must stay calendar-first, beginner-friendly, and one-handed/iPhone-first.

### S7 — UX capture and interaction flows

Purpose:

Define how users record real orchard work.

Candidate flows:

- log activity
- log multi-plant activity
- log skip
- log observation
- log monitoring/trap check
- record harvest
- record symptoms/problem
- review history from plant detail
- handle outside-window activity without blocking

Key product requirement:

The user must not be forced into per-plant checklist behavior when one real orchard pass covers multiple plants.

### S8 — Data and storage architecture

Purpose:

Define V2 storage architecture after domain/UX shape is clear.

Candidate topics:

- stored entity shapes
- catalog version storage
- plan instance pinning
- overlay persistence
- activity and observation records
- localStorage structure
- backup/export implications

Key constraint:

No schema change should be introduced before S8 unless owner explicitly opens a locked-domain amendment.

### S9 — Derived state, upgrade diff, and advisory layers

Purpose:

Define deterministic algorithms and advisory integrations.

Candidate topics:

- window-state derivation
- gate-state display
- plan-state projection
- catalog upgrade diff
- overlay reconciliation
- weather advisory behavior
- monitoring program state display
- no inference from missing evidence

Key constraint:

Weather and monitoring remain advisory/evidence surfaces, not automatic decision engines.

### S10 — V1 to V2 migration architecture

Purpose:

Define migration from current app data to V2.

Candidate topics:

- V1/V4 localStorage migration
- backup before migration
- validation gates
- fail-closed behavior
- import/export compatibility
- preserving history
- catalog version pinning on migrated records where applicable

Key constraint:

No existing data may be deleted or silently rewritten. Migration must preserve trust.

### S11 — Implementation execution roadmap

Purpose:

Create the exact implementation roadmap before coding resumes.

Expected output:

- implementation sessions
- dependency graph
- verification gates
- commit order
- rollback/fail-safe expectations
- what can be implemented in the single-file vanilla JS app
- what remains deferred

S11 exit criteria:

- owner approves implementation roadmap
- only after S11 may coding resume

---

## Future candidate sessions

### Future — Regional planning-window strategy

Status: future candidate only.

Purpose:

Evaluate whether the app should support coarse regional planning-window profiles.

Possible direction:

- continental baseline
- warmer coastal / Mediterranean earlier
- colder continental / alpine later

Important:

- this must be planning-window support only, not blind execution logic
- no universal `±15 days` rule may be introduced without source-backed audit
- different action types may need different treatment
- different species may need different treatment
- observed plant state must remain execution context
- owner approval required

This is not part of S3.0 or S3 unless explicitly opened by owner.

---

## Stop conditions

Stop and ask the owner if a proposed change would:

- remove useful calendar planning windows
- convert the app into phenology-only logic
- add climateProfile / regionProfile / offsetDays / regional formulas
- introduce automatic treatment decisions
- introduce pesticide recommendation logic
- rewrite catalog/template content outside approved session
- add new species or varieties outside approved variety process
- weaken beginner clarity
- assume Zagreb dates are universal
- implement runtime behavior before the documentation path allows it
