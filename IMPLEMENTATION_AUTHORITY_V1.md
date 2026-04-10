# IMPLEMENTATION AUTHORITY — V1 (OVERRIDE)

## PURPOSE

This file resolves conflicts between documents and defines the current execution truth.

If any conflict exists between documents:
→ THIS FILE HAS PRIORITY for implementation decisions.

---

## A. CURRENT EXECUTION STATE

- Current active model: v4
  - plants = object
  - activities = global array
  - plans = global array

- Migration is complete and stable
- Sessions 1–16 are DONE (includes 13B, 14, 15, 16)

### V2 overlay status
- Session V2.1 — Monitoring Input = DONE
- Session V2.2 — Monitoring KPI = DONE
- Session V2.3 — Trigger Engine = DONE
- Session V2.4 — Recommendation UI = DONE

### Current next step
- Session 17 — Export / Import JSON

---

## B. APPROVED EXCEPTIONS TO LOCKED V1 DOCS

### Monitoring activity type

`monitoring` is an APPROVED activity type in the current implementation.

This is an approved extension of the allowed activity type set.

Rules:
- monitoring is allowed in validation
- monitoring data already stored in current app must remain valid
- existing monitoring activities MUST NOT be rejected, removed, or rewritten
- monitoring does NOT change activity object structure
- monitoring does NOT introduce new fields

Important:
- this does NOT change the locked V1 activity object structure
- this does NOT authorize any additional schema changes

---

## C. HOW TO INTERPRET DOCUMENTS

### Locked structural authority
- MIGRATION_PLAN_V1.md
  - locked authority for V1 data model structure

### Execution authority
- EXECUTION_ROADMAP_V1.md
  - authority for execution order and active session

### Current implementation reality
- CURRENT_STATE.md
  - should reflect actual implemented state
  - if CURRENT_STATE.md is outdated or contradictory, this file overrides it

### Deterministic behavior authority
- DOMAIN_RULES_V1.md
  - authority for current runtime behavior unless an approved exception is explicitly declared here

### Direction-only documents
The following documents define direction only and MUST NOT be treated as automatic implementation authority:

- UX_IMPROVEMENTS.md
- PLANT_CATALOG_V1.md
- DOMAIN_DIRECTION_V2.md
- AI_STRATEGY_V1.md
- STORE_READY_ROADMAP_V1.md
- V2_PROTECTION_ENGINE.md
- ORCHARD_PLAN_TEMPLATES_V1.md

Rules:
- these files guide future work
- they do NOT override roadmap order
- they do NOT authorize schema changes
- they do NOT authorize implementation unless the current roadmap/session explicitly opens that scope
- V2_PROTECTION_ENGINE.md explains the approved monitoring exception and V2 overlay, but does NOT replace roadmap order

---

## D. IMPLEMENTATION RULE

When conflict appears:

1. follow MIGRATION_PLAN_V1.md for structure
2. follow EXECUTION_ROADMAP_V1.md for order
3. use this file to resolve approved exceptions and document interpretation
4. if still unclear → STOP and ask

---

## GOAL

Prevent:
- accidental regressions
- validation rollback
- schema drift
- premature implementation from future-direction files

Ensure:
- stable execution
- consistent agent behavior
- safe evolution of the app