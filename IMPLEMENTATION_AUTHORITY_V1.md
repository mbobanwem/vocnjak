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
- Sessions 1–17 are DONE (includes 13B, 14, 15, 16, 17)
- Session 17.4 — Plant Type Schema Approval = DONE (docs-only schema approval; rules locked in this file under "Plant Identity & Lifecycle Rules (V1 Override)")
- Session 17.5 — Plant Catalog + Plant Management (Add + Delete) = DONE (catalog-backed Add Plant; required `plant.type`; required citrus subtype; deterministic HARD Delete Plant cascade in a single localStorage write; no plan generation)
- Session 17.6 — Template → Persisted Plans = DONE (ORCHARD_PLAN_TEMPLATES populated; _generatePlansForPlant added; Add Plant now generates and persists plans into v4.plans[]; backfillGeneratedPlans added; Core Domain Bridge COMPLETE)

### V2 overlay status
- Session V2.1 — Monitoring Input = DONE
- Session V2.2 — Monitoring KPI = DONE
- Session V2.3 — Trigger Engine = DONE
- Session V2.4 — Recommendation UI = DONE

### Current next step
- Session 18 — Supabase Backup (requires explicit authorization before implementation)

The Core Domain Bridge (Sessions 17.4, 17.5, 17.6) is COMPLETE. All three steps are done. See "Core Domain Bridge" and "Plant Identity & Lifecycle Rules (V1 Override)" sections below — the locked rules in those sections remain in force and are NOT weakened by this status update.

Session 18 is now the next step. It still requires explicit authorization before implementation — Supabase integration is protected by CLAUDE.md scope rules and must not be touched without explicit user instruction.

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

---

## Core Domain Bridge (Roadmap Exception Between Session 17 and Session 18)

### Purpose
Sessions 17.4, 17.5, and 17.6 are an explicit, intentional roadmap insertion between Session 17 and Session 18. They close a product-critical gap: the app cannot meaningfully benefit from cloud backup (Session 18) or calendar sync (Session 19) while plant input is free-text, plant identity is unstable, and no plans are generated from orchard templates.

### Classification
- this is CORE DOMAIN work
- this is NOT monitoring, V2, recommendation, AI, or polish
- this is the deterministic bridge: plant identity → catalog-backed input → orchard template generation → persisted plans surfaced in UI

### Scope rules
- Session 17.4 approves a single schema extension: `plant.type` (string, required for new plants). DOCUMENTATION ONLY — no code changes.
- Session 17.5 implements catalog-backed Add Plant AND deterministic Delete Plant cascade.
- Session 17.6 generates plans from orchard templates and PERSISTS them in `v4.plans[]`.
- ONLY one new field (`plant.type`) is approved across the entire bridge. No other field is added on plant, activity, or plan.
- Generated plans are PERSISTED — runtime-only / derived-only plan generation is FORBIDDEN.
- Session 17 export/import contract continues to read raw `vocnjak_v4` — generated plans are part of `v4.plans[]` so they ARE included in the export, by design.
- Legacy plants (pre-17.4) without `plant.type` remain valid. They are NOT auto-migrated. They produce zero generated plans.

### Authority
- PLANT_CATALOG_V1.md becomes the runtime data source for Session 17.5 catalog selectors (still direction-only for everything beyond that explicit scope)
- ORCHARD_PLAN_TEMPLATES_V1.md becomes the runtime data source for Session 17.6 generation (still direction-only for everything beyond that explicit scope)
- MIGRATION_PLAN_V1.md is NOT modified — `plant.type` is documented as an APPROVED SCHEMA EXTENSION here, in the same pattern as the monitoring activity-type exception above
- DOMAIN_RULES_V1.md IS modified to reflect: new `plant.type` field, catalog-backed Add Plant, Delete Plant cascade, persisted plan generation
- TARGET_ARCHITECTURE_V1.md is updated to reflect persisted plan generation and stored `plant.type`

### After completion
- Session 18 (Supabase Backup) resumes as the next step
- the exception is closed
- no roadmap renumbering occurs (inserted sessions use decimal numbering 17.4 / 17.5 / 17.6)

### Rationale
- Session 20 (First-Run Onboarding) already mandates PLANT_CATALOG_V1 integration per EXECUTION_ROADMAP_V1.md Phase 4
- this insertion is a forward-pull from Session 20: ONLY plant-identity-related work is promoted forward (catalog selection + delete + plan generation). Full onboarding (language selection, climate zone, first-run gating) remains at Session 20.
- promoting catalog + delete + persisted plan generation forward delivers complete orchard guidance before cloud/sync layers are built on top of an empty-state app
- keeps Session 18+ numbering stable

---

## Plant Identity & Lifecycle Rules (V1 Override)

This section LOCKS the new plant identity model and the orchard plan generation model. These rules OVERRIDE older direction-only language wherever conflict arises.

### Plant Identity (mandatory)
- `plant.type` is REQUIRED for all new plants created from Session 17.5 onward
- allowed values for `plant.type` (closed set):
  - `apple`
  - `pear`
  - `plum`
  - `cherry`
  - `peach`
  - `nectarine`
  - `apricot`
  - `olive`
  - `fig`
  - `citrus`
- `plant.type` MUST be selected via the catalog — free text is FORBIDDEN
- `plant.type` MUST NEVER be reverse-derived, parsed, guessed, or inferred from `plant.name`, `plant.variety`, or any other field
- `plant.name` and `plant.variety` continue to exist as user-facing labels but they are NOT identity
- legacy plants without `plant.type` remain valid; they MUST NOT be auto-migrated, auto-tagged, or rewritten

### Catalog authority
- PLANT_CATALOG_V1.md is the authoritative runtime source of allowed `plant.type` values, varieties, and timing groups
- Add Plant UI MUST reject any save where `plant.type` is missing or not in the allowed set

### Delete Plant (deterministic HARD delete with cascade)
- delete is HARD — there is NO soft delete, archive, inactive, hidden, or trash state
- delete steps (in order, atomic in a single localStorage write):
  1. remove plant from `v4.plants` (delete by id)
  2. for every plan in `v4.plans` where `plan.appliesToAll === false`:
     - remove the deleted id from `plan.plantIds`
     - if `plan.plantIds` becomes empty, delete the plan
  3. plans where `plan.appliesToAll === true` are NEVER removed by delete
  4. for every activity in `v4.activities`:
     - remove the deleted id from `activity.plantIds`
     - if `activity.plantIds` becomes empty, delete the activity
  5. all generated plans with id matching `gen:plant:<deletedId>:*` are removed by step 2 (their `plantIds` collapses to empty)
- delete MUST require user confirmation (single confirmation modal)
- delete MUST be atomic in localStorage — partial cascade is FORBIDDEN
- after delete, no reference to the removed id may remain anywhere in `v4`

### Persisted plan generation (mandatory)
- plans generated from orchard templates MUST be PERSISTED into `v4.plans[]`
- runtime-only / derived-only plan generation is FORBIDDEN
- generated plans MUST carry deterministic id: `gen:plant:<plantId>:<templateKey>`
- generated plans coexist with manual / migrated plans in `v4.plans[]`
- generation runs immediately after Add Plant for the newly created plant only
- cascade-delete of generated plans is handled by the standard Delete Plant cascade above (they live in `v4.plans[]`)
- re-running generation for a plant that already has its generated plans MUST be a NO-OP (deterministic id check prevents duplicate insert)
- generation MUST NEVER mutate or rewrite manually authored plans
- generation MUST NEVER mutate or rewrite previously generated plans
- generated plans ARE included in Session 17 export/import (they are part of `vocnjak_v4`)
- generated plans ARE included in Session 18 Supabase backup (same reason)

### Forbidden behavior (locks)
This section explicitly forbids the following patterns. Future agents MUST NOT reintroduce them under any rationale:
- reverse parsing of `plant.type` from `plant.name`, `plant.variety`, or anything else
- soft delete, archive state, inactive flag, hidden flag, trash state, or any "logically deleted" pattern
- runtime-only / derived-only plan generation
- mixing persisted and runtime-derived plans in the rendered plan list
- using lifecycle-based (event-based, non-persisted) plan generation as a general or parallel plan system — only template-based persisted plans are allowed for the core orchard flow; lifecycle extensions are SECONDARY, optional, and scoped per-use-case
- adding any plant field beyond `plant.type` (e.g. `catalogKey`, `climateZone`, `rootstockId`) without a separate explicit approval session
- adding any plan field (e.g. `origin`, `templateId`, `generatedAt`) — the deterministic id prefix `gen:plant:` is the only marker

### Authority precedence
- this section OVERRIDES older "Plant Input Rules" sentences in DOMAIN_RULES_V1.md wherever they conflict
- this section OVERRIDES "current V1 plant model has NO dedicated type field" language anywhere it still appears
- this section is the canonical source of truth for plant identity and plant lifecycle in V1

---

## Backup / Import Rules (v4)

- Only `vocnjak_v4` is considered valid export/import user data
- Export MUST include only `vocnjak_v4`
- Export MUST NOT include:
  - v3 data
  - migration backups
  - runtime/derived state
  - helper or backup keys

- Import MUST:
  - fully replace existing `vocnjak_v4`
  - validate before write
  - fail completely if validation fails
  - back up current state to `vocnjak_v4_preimport_backup` before valid overwrite

- Import MUST NOT:
  - partially import data
  - skip invalid entries
  - auto-correct values
  - infer missing fields
  - merge with existing state

- Rationale:
  - data integrity
  - predictability
  - debuggability
  - no silent corruption

- Any future attempt to introduce:
  - tolerant import
  - auto-repair
  - merge behavior

  must be opened as a separate explicit session and must NOT modify the existing strict import behavior by default.