# V2 S3 Catalog Audit Execution Plan

## Status

Operational plan for S3 catalog audit execution.

This document is not authoritative V2 truth, not schema, not runtime behavior, not implementation, and not an edit to `V2_PLANT_CATALOG.md` or `V2_ORCHARD_PLAN_TEMPLATES.md`.

It does not modify catalog content, template content, domain-model rules, code, or runtime behavior.

Once committed after owner review, this becomes an owner-approved planning document for executing S3 safely. Until then, it is draft operational guidance.

---

## 1. Purpose

This document defines how to execute S3 safely after Pre-S3 catalog/template stabilization.

S3 must audit the stabilized Pre-S3 inputs as source material, preserve ambiguity, and prepare owner decisions without prematurely producing final catalog definitions. It should make later S4-S5 work cleaner by separating findings, unresolved questions, owner choices, and candidate mapping notes.

Vision alignment: Vocnjak is a trusted seasonal guide, not a daily task engine. S3 must preserve orchard-first, calendar-first, decision-support behavior: for example, an apple copper entry can be audited for timing, purpose, safety wording, and possible model mapping, but S3 must not turn it into automatic spray instructions, weather-blocked gates, or AI-authored recommendations.

---

## 2. What S3 is

S3 is:

- source-backed audit
- per-entry findings
- ambiguity/defer queue
- owner decision queue
- candidate mapping notes
- source validation of timing, naming, disease-resistance claims, regional suitability, and catalog impact

S3 may identify candidate mappings against the locked Domain Model, but must not produce final structured catalog definitions unless explicitly approved as staged S3 output. Final shapes are S5's deliverable.

S3 reads the stabilized catalog and templates as inputs. It records what is source-backed, what is ambiguous, what requires owner disposition, and where a later S5 mapping may be plausible.

---

## 3. What S3 is not

S3 is not:

- catalog/template mutation
- schema production
- runtime behavior
- implementation
- UI localization
- final structured mapping/output
- recommendation engine
- pesticide/product recommendation system
- uncontrolled variety expansion
- final `action_window_definition` production
- final `monitoring_program` production
- final `stage_vocabulary` production
- final `open_condition` declaration

S3 must not edit `V2_PLANT_CATALOG.md` or `V2_ORCHARD_PLAN_TEMPLATES.md` as part of ordinary audit execution.

---

## 4. Required source documents

| Document | Role in S3 |
|---|---|
| `V2_CATALOG_AUDIT.md` | Permanent governance/index/status pointer; supplies audit discipline, signal table, audit-never list, deferred-entry expectations, and Pre-S3 stabilization checkpoint. |
| `V2_PLANT_CATALOG.md` | Stabilized Pre-S3 catalog input: supported species, varieties, fallback timing, season profiles, group/subtype notes. Not authoritative final V2 truth. |
| `V2_ORCHARD_PLAN_TEMPLATES.md` | Stabilized Pre-S3 orchard-work input: species entries, activity tags, timing windows, notes, monitoring/spray context. Not authoritative final V2 truth. |
| `V2_VARIETY_COVERAGE_POLICY.md` | Governs variety candidate classification, market weighting, inclusion criteria, target counts, and no-ad-hoc-addition rule. |
| `V2_VARIETY_CANDIDATE_MATRIX_DRAFT.md` | Decision-support matrix only; queues variety candidates, aliases, source needs, and owner decisions. Does not authorize catalog edits. |
| `V2_DOMAIN_MODEL.md` | Locked validation target for candidate mapping notes. S3 may reference it but must not amend it or produce final shapes by default. |
| `V2_PRINCIPLES.md` | Locked product/domain principles: deterministic logic, weather advisory only, no AI-authored action recommendations, monitoring as first-class entity. |
| `PRODUCT_VISION.md` | Product truth: seasonal orchard decision support, not a task list; actions need purpose; products are not prescribed. |
| `CLAUDE.md` | Agent/governance instructions: document classes, project path, no implementation before S11, no new model terms without approval. |

---

## 5. S3 output types

Allowed S3 outputs:

- audit findings
- deferred-entry queue
- owner decision queue
- candidate mapping notes
- alias/canonical-key proposals
- source validation notes

S3 outputs should preserve source snippets, curator reasoning, confidence level, and the next required action. They should distinguish source-backed facts from candidate interpretations.

S3 does not produce final:

- `action_window_definition` records
- `monitoring_program` records
- `stage_vocabulary` lists
- `open_condition` declarations
- catalog v1.0 sign-off

Candidate mapping notes may say that a source entry appears compatible with an existing Domain Model concept, but must stop short of final catalog records unless the owner explicitly approves staged S3 output.

---

## 6. File strategy

`V2_CATALOG_AUDIT.md`  
= permanent governance/index/status pointer

`V2_S3_CATALOG_AUDIT_EXECUTION_PLAN.md`  
= this operational plan

`V2_S3_AUDIT_FINDINGS_DRAFT.md`  
= future mutable findings file, created during apple dry-run, not now

`V2_OWNER_DECISIONS_LOG.md`  
= future append-only decision log, created when first owner decision is recorded, not now

`V2_PLANT_CATALOG.md` / `V2_ORCHARD_PLAN_TEMPLATES.md`  
= stabilized Pre-S3 input, unchanged inside S3

Do not create `V2_S3_AUDIT_FINDINGS_DRAFT.md` or `V2_OWNER_DECISIONS_LOG.md` during this planning task.

---

## 7. Recommended S3 execution order

1. Repo/governance readiness check.
2. Read stabilized Pre-S3 inputs.
3. Audit species as-is, not blocked by unresolved model/grouping decisions.
4. Record per-entry findings using the audit signal table.
5. Record ambiguity/deferred entries.
6. Record owner decision items.
7. Record candidate mapping notes only where useful.
8. Validate timing/source claims as findings.
9. Audit variety matrix rows per policy.
10. Compile apple dry-run findings first.
11. Owner reviews apple dry-run.
12. Only then scale to cherry/sour cherry and remaining species.

This order keeps S3 read-only and gives the owner one small, reviewable sample before the audit scales across all species.

---

## 8. Variety matrix handling

`V2_VARIETY_CANDIDATE_MATRIX_DRAFT.md` is decision-support only.

Rules:

- `ADD NOW` is not permission to edit the catalog.
- No row may be promoted in bulk.
- Per-row owner approval is required.
- Source validation is required before any promotion.
- Alias canonicalization is not automatic.
- Proposed keys are draft suggestions, not final catalog keys.
- Variety additions must not be hidden inside wording, safety, timing, or S3 audit edits.

S3 may audit variety rows for source support, naming ambiguity, market relevance, timing band contribution, disease/resistance claims, and catalog-bloat risk. S3 must queue owner decisions rather than adding varieties directly.

---

## 9. Owner decisions vs S3 audit decisions

S3 audit decides / records:

- source-backed findings
- ambiguity
- candidate mapping notes
- timing/source validation
- alias/canonical-key proposals

Owner decides:

- variety promotions
- citrus subtype vs top-level species
- pomegranate grouping
- nut group naming
- no-variety model preservation
- scope expansion

Owner decisions can be queued. They do not block read-only audit unless a mutation would be required. If a catalog/template edit, model change, group rename, or scope expansion would be needed, stop that branch of work and record an owner decision item.

---

## 10. Croatian vs English / localization handling

Croatian is acceptable in Pre-S3 source docs.

S3 does not translate, finalize UI copy, or normalize language for production. Localization is deferred. Domain audit and UI copy must not be mixed.

S3 may note that a source phrase needs later localization review, but must not rewrite source content or treat Croatian wording as final app copy.

---

## 11. Model/runtime leakage guardrails

- S3 may reference the Domain Model only as a validation target.
- Do not introduce new schema/model terms.
- Do not create final gates.
- Do not create weather-derived gates.
- Do not convert treatment thresholds into runtime logic.
- Do not create AI recommendation logic.
- Do not implement anything.
- Do not infer missing observations, missing activities, or missing monitoring results.
- Do not treat pesticide/product wording as commercial product recommendations.
- Do not turn notes into automated behavior.

When source material suggests runtime pressure, record a candidate mapping note, deferred item, or owner decision item. Do not invent a model feature to make the source fit.

---

## 12. Stop conditions

Stop the current mapping/audit branch when any of these occur:

- source silent
- conflicting sources/readings
- alias ambiguity
- owner scope decision needed
- pesticide/product ambiguity
- schema/runtime change pressure
- dirty worktree / wrong branch
- any attempt to edit catalog/template directly

Default action: record a deferred item or owner decision item and continue with the next entry. Do not invent.

---

## 13. Apple dry-run as next step

The next execution step after this plan is:

Create `V2_S3_AUDIT_FINDINGS_DRAFT.md` with apple-only findings.

Rules for the Apple dry-run:

- Do not edit catalog/template.
- Do not promote varieties.
- Do not create final structured definitions.
- Record audit findings, deferred items, owner decisions, source validation notes, and candidate mapping notes only.
- Owner reviews apple dry-run before scaling.

The Apple dry-run should prove that the findings format is useful before S3 expands to cherry/sour cherry and the remaining species.

---

## 14. Do-not-touch list

Do not edit:

- `V2_PLANT_CATALOG.md`
- `V2_ORCHARD_PLAN_TEMPLATES.md`
- `V2_DOMAIN_MODEL.md`
- `V2_PRINCIPLES.md`
- `PRODUCT_VISION.md`
- `V2_VARIETY_COVERAGE_POLICY.md`
- `V2_VARIETY_CANDIDATE_MATRIX_DRAFT.md`
- code files
- archive
- branches/worktrees

Do not create branches, create worktrees, commit, or push unless explicitly instructed by the owner.

---

## 15. Final recommendation

Use this plan as the S3 operating boundary, then begin with an apple-only dry-run findings file.

The owner should review the apple dry-run before the audit scales. That review should confirm the findings format, the owner-decision queue shape, and whether candidate mapping notes are useful without drifting into final S5 catalog definition work.
