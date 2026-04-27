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

S3.2 — Pome group audit: pear + quince.

S3.0B and S3.1 are complete; proceed to the pome group audit.

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
- S3.6 — Citrus subtype audit: lemon, orange, mandarin
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

Status: NEXT

Scope:

- pear
- quince

Apple is already covered by S3.1 and should be used as the reference pattern, not re-audited unless a specific cross-check is needed.

Expected S3 output:

- `V2_S3_AUDIT_FINDINGS_DRAFT.md`
- findings by species/template entry
- beginner-clarity gaps
- source-validation gaps
- unsafe/ambiguous wording
- owner decision queue
- deferred regional/climate findings
- candidate mapping notes for S4/S5

S3 is not:

- final schema
- implementation
- runtime behavior
- automatic recommendation logic
- final catalog mutation unless owner explicitly opens a targeted edit pass

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
