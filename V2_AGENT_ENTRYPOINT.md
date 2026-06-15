# V2 Agent Entrypoint

## Status

Routing document only.

This document is not authoritative V2 truth, not schema, not runtime behavior, not implementation, and not domain logic.

It does not override locked source-of-truth documents.

Its purpose is to tell agents which documents to read for the current phase and prevent context drift.

---

## Mandatory first read for V2 catalog-domain work

For any V2 catalog, domain, catalog-audit, or pre-S6 documentation cleanup work, read in this order:

1. `CLAUDE.md`
2. `V2_AGENT_ENTRYPOINT.md`
3. `CURRENT_STATE.md`
4. `PRODUCT_VISION.md`
5. `V2_PRINCIPLES.md`
6. `V2_DOMAIN_MODEL.md`
7. `V2_CATALOG_AUDIT.md`
8. `V2_S3_AUDIT_CONSOLIDATION.md`
9. `V2_PLANT_CATALOG.md`
10. `V2_ORCHARD_PLAN_TEMPLATES.md`
11. `V2_VARIETY_COVERAGE_POLICY.md`
12. `V2_VARIETY_CANDIDATE_MATRIX_DRAFT.md`

If any listed document is missing, stop and report.

Historical / supporting reading only:

- `V2_S3_CATALOG_AUDIT_EXECUTION_PLAN.md` — original S3 execution plan; S3.1–S3.8 are complete. Not active current-state guidance.
- `archive/V2_S3_AUDIT_FINDINGS_DETAIL_2026-04.md` — detailed per-species audit evidence. Read only when consolidation evidence must be inspected.

---

## Current phase

This routing file does not carry current phase status or the current edit allowlist.

For roadmap authority and future session order, read `ROADMAP.md`. For current phase, chronological state/history, approved files, and stop conditions, read `CURRENT_STATE.md` and the active owner request. If this routing file appears to conflict with `ROADMAP.md` or `CURRENT_STATE.md`, the active authority document wins.

---

## Current V2 timing stance — calendar-first, plant-state-aware

For current V2/S3 catalog-domain work, the app is calendar-first from the user's perspective and plant-state-aware for execution.

This section is a routing guardrail only. It does not create new schema, new runtime behavior, or new source of truth. It clarifies how agents must interpret `PRODUCT_VISION.md` during S3.

Core stance:

- Calendar windows are the primary user-facing planning surface.
- Calendar windows tell the user when to pay attention.
- Approximate dates are useful and must remain visible where the catalog/templates define them.
- Do not remove useful baseline date windows merely because phenological cues are more agronomically precise.
- Do not convert V2 into a phenology-only system.
- Plant state / phenology helps the user decide whether an action makes sense inside or near the calendar window.
- Missing observation must not be treated as proof that a stage happened.
- Weather is advisory context only.
- Monitoring provides evidence, not automatic treatment decisions.
- History remains the proof of what was actually done.

Beginner clarity rule:

- Target users are not agronomists.
- Avoid unexplained agronomic terms in user-facing notes.
- If a term such as dormancy, bud swell, petal fall, fruitlet, pressure, threshold, or label restriction is used, explain in plain language what the user should look for.
- Do not write only “in dormancy”; explain it as a beginner-observable state such as “while the tree has no leaves or open flowers and before buds open.”
- Do not write only “according to product label”; pair it with the product category, for example “registered copper fungicide for fruit trees” or “white/mineral/paraffin oil registered for fruit trees.”
- The app may avoid hardcoded brand recommendations, but it must still tell the user what category of product or material they need.

Regional / climate stance for current V2:

- Zagreb / continental Croatia may be used as the initial baseline where current documents define Zagreb baseline windows.
- The app must not behave as if Zagreb dates are universal for all users.
- Warmer coastal / Mediterranean locations may reach relevant stages earlier.
- Colder continental, alpine, Austrian, German, or similar locations may reach relevant stages later.
- Current V2 must not introduce `climateProfile`, `regionProfile`, `baseClimate`, `offsetDays`, hidden regional shifts, or hardcoded regional formulas.
- Regional adaptation remains future/non-binding until a dedicated owner-approved session with source-backed audit.

Owner-decision rule:

- Agents must follow `PRODUCT_VISION.md`.
- If improving agronomic precision, audit structure, or architecture would weaken beginner planning, calendar usability, practical guidance, or the owner's product vision, stop and ask the owner.
- If a better long-term direction is identified, explain the tradeoff and ask the owner before changing direction.

S3 implication:

- S3 must preserve useful calendar windows.
- S3 may validate whether a source supports a plant-state cue or observation wording.
- S3 must not invent formal phenology gates from general agronomic knowledge.
- S3 must not add climate/region offset fields.
- S3 must record regional/climate differences as notes or deferred findings unless explicitly opened by the owner.

---

## Completed S3/S4/S5 context

Completed S3 output:

- `V2_S3_AUDIT_CONSOLIDATION.md`

Archived detailed evidence:

- `archive/V2_S3_AUDIT_FINDINGS_DETAIL_2026-04.md`

S3.1–S3.8 are complete.

S4 was:

- owner decision resolution
- source-check disposition
- approved/deferred/rejected fix selection
- handoff preparation for targeted S5 documentation fixes

S4 was not:

- final schema authoring
- runtime behavior
- implementation
- final catalog/template mutation
- UI localization
- recommendation engine

S5 applied owner-approved targeted catalog/template cleanup and is closed. Use `V2_S3_AUDIT_CONSOLIDATION.md` as historical S3/S4/S5 context. Read archived detail only when evidence behind a consolidation item must be inspected.

---

## After S3

After S3 is complete, perform a documentation inventory and simplification pass before expanding further.

Goal:

- reduce duplicated governance
- identify obsolete or superseded docs
- keep one clear source of truth per concern
- avoid documentation growth blocking implementation
