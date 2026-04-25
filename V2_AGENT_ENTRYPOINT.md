# V2 Agent Entrypoint

## Status

Routing document only.

This document is not authoritative V2 truth, not schema, not runtime behavior, not implementation, and not domain logic.

It does not override locked source-of-truth documents.

Its purpose is to tell agents which documents to read for the current phase and prevent context drift.

---

## Mandatory first read for V2/S3 catalog-domain work

For any V2 catalog, domain, catalog-audit, or S3 work, read in this order:

1. `CLAUDE.md`
2. `V2_AGENT_ENTRYPOINT.md`
3. `PRODUCT_VISION.md`
4. `V2_PRINCIPLES.md`
5. `V2_DOMAIN_MODEL.md`
6. `V2_CATALOG_AUDIT.md`
7. `V2_S3_CATALOG_AUDIT_EXECUTION_PLAN.md`
8. `V2_PLANT_CATALOG.md`
9. `V2_ORCHARD_PLAN_TEMPLATES.md`
10. `V2_VARIETY_COVERAGE_POLICY.md`
11. `V2_VARIETY_CANDIDATE_MATRIX_DRAFT.md`

If any listed document is missing, stop and report.

---

## Current phase

Current phase: S3 catalog audit.

Current next step: Apple-only dry-run.

Allowed next output:

- create `V2_S3_AUDIT_FINDINGS_DRAFT.md`

Do not edit during the next step:

- `V2_PLANT_CATALOG.md`
- `V2_ORCHARD_PLAN_TEMPLATES.md`
- `V2_DOMAIN_MODEL.md`
- `PRODUCT_VISION.md`
- `V2_PRINCIPLES.md`

---

## S3 operating boundary

S3 is:

- source-backed audit
- findings
- ambiguity/defer queue
- owner decision queue
- candidate mapping notes

S3 is not:

- final schema authoring
- runtime behavior
- implementation
- final catalog/template mutation
- UI localization
- recommendation engine

For details, read `V2_S3_CATALOG_AUDIT_EXECUTION_PLAN.md`.

---

## After S3

After S3 is complete, perform a documentation inventory and simplification pass before expanding further.

Goal:

- reduce duplicated governance
- identify obsolete or superseded docs
- keep one clear source of truth per concern
- avoid documentation growth blocking implementation
