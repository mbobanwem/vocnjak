# VOCNJAK — Claude Code Instructions (V2)

---

## SOURCE OF TRUTH (READ FIRST — ALWAYS)

Documents are not equal. Use the classes below exactly.

## V2 Agent Entrypoint

Before any V2 catalog, domain, catalog-audit, or S3 work, read:

- `V2_AGENT_ENTRYPOINT.md`

This file is a routing document only. It does not override locked source-of-truth documents. Its purpose is to tell agents which documents to read for the current phase and prevent context drift.

### LOCKED CORE

- `PRODUCT_VISION.md`
- `V2_PRINCIPLES.md`
- `V2_DOMAIN_MODEL.md` — locked sections per its own status
- `V2_UX_MODEL.md` §0 — monitoring UX hard constraints
- later: remaining `V2_UX_MODEL.md` sections and `V2_ARCHITECTURE.md` only after sign-off

Rules:
- LOCKED CORE is binding
- if any conflict exists, LOCKED CORE wins
- `PRODUCT_VISION.md` is mandatory reading before proposing any domain decision, architecture decision, UX decision, or implementation plan
- before proposing any solution, the agent MUST include a short `Vision alignment check` section
- this section must explicitly explain how the proposal follows `PRODUCT_VISION.md`
- it must explicitly mention orchard-first behavior, calendar-first logic, the multi-plant action model, history preservation, and real-world constraints such as weather and sequence
- it must highlight any tradeoffs or risks where the proposal may conflict with `PRODUCT_VISION.md`
- it must include at least one concrete real-world example such as spraying copper, pruning, or trap monitoring, showing how the proposed solution behaves in practice
- the example must demonstrate that the solution fits real orchard behavior and follows `PRODUCT_VISION.md`
- the agent MUST avoid introducing additional entities, layers, or abstractions unless strictly required by `PRODUCT_VISION.md`
- if a simpler solution satisfies the same real-world behavior, the more complex solution must be rejected
- the alignment check MUST explicitly evaluate user effort, including steps, taps, and cognitive load
- the proposal must demonstrate that it stays fast and usable in real orchard conditions, including one-handed use and minimal interaction
- the agent MUST NOT introduce constraints that prevent flexible real-world execution, including partial actions, delayed actions, or multi-plant logging
- if a proposal limits future UX flexibility, that limit must be explicitly identified and justified
- the proposal must not prevent real-world actions that a user can physically perform
- the system must reflect real execution, not enforce artificial constraints
- if no concrete example is provided, the alignment check is incomplete
- if the alignment check identifies a conflict with `PRODUCT_VISION.md`, the agent MUST NOT proceed with the proposal as-is
- the agent must either revise the proposal to remove the conflict or explicitly stop and ask for clarification or approval
- when multiple valid technical solutions exist, the agent MUST prefer the solution that is simpler, closer to real-world orchard behavior, and less likely to break the user mental model
- if the `Vision alignment check` section is missing, the proposal is invalid
- technical correctness alone is not enough; every proposal must also match product truth from `PRODUCT_VISION.md`
- every proposal must explicitly preserve orchard-first thinking, calendar-first behavior, multi-plant real-world actions, history trust, and the product-purpose behind actions
- proposals must preserve weather-aware execution support: forecast may guide execution timing, but it must remain advisory, must not replace grower judgment, and must not create automatic domino shifting
- if a proposal conflicts with `PRODUCT_VISION.md`, revise it before continuing

### IN PROGRESS

- current target document only

Rules:
- may be edited only by its owning session
- not binding until sign-off

Current:
- S6 core UX surfaces are complete in `V2_UX_MODEL.md`
- S7 UX flow definition is complete in `V2_UX_MODEL.md`
- S8 data and storage architecture is complete in `V2_ARCHITECTURE.md` `## 1. Data model`
- S9 derived-state / algorithm architecture is complete in `V2_ARCHITECTURE.md` `## 2`–`## 5`
- S10 clean V2 transition / migration architecture is complete in `V2_ARCHITECTURE.md` `## 6. V1 → V2 migration`
- S11 implementation execution roadmap is complete in `V2_EXECUTION_ROADMAP.md` `§1`–`§50`
- Runtime Slice 0 (V2 shell and owner-only entry) is complete (`642d0b1 Implement Runtime Slice 0 V2 shell`); legacy app remains the default
- Runtime Slice 1 (V2 store boot and empty `vocnjak_v2` initialization) is complete (`178cfa8 Implement Runtime Slice 1 V2 store boot`); legacy app remains the default
- Runtime Slice 2 (catalog seed and retained catalog baseline) is complete (`254448f Implement Runtime Slice 2 catalog seed`); legacy app remains the default
- Runtime Slice 3 (Early V2 export/import safety baseline) is complete (`8fd2571 Implement Runtime Slice 3 V2 export/import safety baseline`); legacy app remains the default
- Runtime Slice 4 (Plant foundation and Biljke first cut) is complete (`f99e5f6 Implement Runtime Slice 4 V2 plant foundation`); legacy app remains the default
- Post-Slice-4 safety fix for canonical `catalog_v1` import validation is complete (`8a9c4ae Fix Runtime Slice 4 catalog import validation`); adversarial review found imported `catalogs.catalog_v1` could drift while preserving counts, and this was closed before Slice 5
- Focused adversarial review of Runtime Slices 3 and 4 after the post-Slice-4 safety fix passed and owner verification accepted the PASS; one non-blocking UX polish item remains for friendlier Add Plant date-validation messages
- next target: Runtime Slice 5 planning — Activity capture, Activity-only Dnevnik, and Activity correction; Slice 5 implementation has not started and requires explicit owner approval
- §0 monitoring constraints remain locked and authoritative
- legacy data and V1/V3/V4 keys remain protected
- implementation was forbidden through S11 documentation; Slices 0, 1, 2, 3, and 4 were then owner-approved and committed
- next runtime slice (Slice 5) and all subsequent slices require explicit per-slice owner approval before implementation

### INPUT FILES (NOT YET VALIDATED V2 TRUTH)

- `V2_PLANT_CATALOG.md`
- `V2_ORCHARD_PLAN_TEMPLATES.md`

Rules:
- renamed V1 content
- input material only
- may be mined for content
- may NOT define final V2 truth
- require audit in S3-S5 before promotion

### CATALOG AUDIT COMPANION

- `V2_CATALOG_AUDIT.md`

Rules:
- permanent canonical audit companion
- process-binding for catalog audit and curation
- not runtime behavior or schema

### PLACEHOLDERS

- `V2_UX_MODEL.md`
- `V2_ARCHITECTURE.md`
- `V2_EXECUTION_ROADMAP.md`

Rules:
- scaffold only
- not authoritative until owning session completes and signs off
- exception: `V2_UX_MODEL.md` §0 monitoring constraints are already authoritative

### FUTURE / NON-BINDING

Rules:
- future roadmap / future idea documents are not implementation spec
- future roadmap / future idea documents are not source of truth

### ARCHIVE

- `/archive/v1/`
- `/archive/future/`

Rules:
- historical only
- never binding
- may be referenced for context only

---

## DOCUMENT OWNERSHIP

- `V2_PRINCIPLES.md` -> S1
- `V2_DOMAIN_MODEL.md` -> S2
- `V2_CATALOG_AUDIT.md` -> S3-S5
- `V2_UX_MODEL.md` -> S6-S7
- `V2_ARCHITECTURE.md` -> S8-S10
- `V2_EXECUTION_ROADMAP.md` -> S11

Rule:
- only the owning session may promote a document to authoritative status

---

## PROMOTION RULE

- rename != validation
- archive != source of truth
- input != approved model
- placeholder != specification
- promotion requires owning session completion + project owner sign-off
- no document may self-promote
- no agent may assume promotion

---

## CROSS-DOCUMENT USAGE RULE

- do NOT merge meaning across documents unless the current session explicitly requires it
- do NOT import INPUT FILES directly into LOCKED CORE
- do NOT fill gaps using ARCHIVE or INPUT FILES
- if a concept is not yet defined in the owning document, it is not yet defined

---

## PROJECT PATH

- S1 complete
- S2 = domain model lock
- S3-S5 = audit and validation
- S6-S10 = system definition
- S11 = execution roadmap
- only after S11 = return to implementation (Sessions 19-23)

Rules:
- this is the only valid project path
- implementation before S11 is forbidden

---

## CRITICAL RULES (NON-NEGOTIABLE)

- Only LOCKED CORE documents are binding
- NEVER change data model, field names, or structure without explicit approval
- NEVER introduce new fields, concepts, or features unless explicitly instructed

- DO NOT assume missing logic
- DO NOT "improve" anything outside task scope
- DO NOT refactor unrelated code

If anything is unclear:
→ STOP and ask

---

## EXECUTION MODE

You are executing a predefined plan.

- Work ONLY on the current session
- Follow the PROJECT PATH exactly
- Do NOT skip steps
- Do NOT anticipate future sessions
- Do NOT implement before S11 is complete and signed off

---

## DOMAIN PRINCIPLES (CRITICAL)

- The system is deterministic
- NO heuristics allowed
- NO assumptions allowed

- Activities are the ONLY source of truth
- Plans follow catalog + instance + overlay model
- Plan state is ALWAYS derived (never stored)
- Weather is advisory, never blocking
- Monitoring never infers missing data
- No AI-authored action recommendations

If logic cannot be derived:
→ STOP and ask

---

## IMPLEMENTATION RULES

When coding:

- Implement ONLY what is requested
- Keep changes minimal and isolated
- Do NOT restructure code unless required
- Do NOT introduce abstractions
- Do NOT add speculative code
- Do NOT create helper functions, scaffolding, or preparatory logic unless explicitly requested in the session
- Do NOT extract reusable helpers "in advance"
- If the plan says inline implementation, keep it inline
- If a helper or cleanup step is not explicitly in scope, do NOT add it
- Before stopping for review, verify that the implementation matches the approved session scope 1:1
- If extra code was added outside scope, remove it before presenting the result

---

## COMMIT RULE (STRICT)

- NEVER commit or push unless explicitly told:
  "Approved for commit"

- After implementation:
  → STOP
  → WAIT for review

---

## POLISH RULE

- `POLISH_BACKLOG.md` is for non-critical improvements
- NEVER implement polish without explicit instruction
- NEVER create sessions for cosmetic fixes

---

## GIT / BRANCH RULE (MANDATORY)

This repository uses `main` as the single active working branch.

Rules:
- ALWAYS work on `main`
- DO NOT create, switch to, or continue on any other branch unless explicitly instructed by the user
- DO NOT create worktrees
- BEFORE starting any work, always verify:
  - git branch --show-current
  - git status
  - git log --oneline -1
- If current branch is NOT `main`, STOP and ask before proceeding
- NEVER trust session-injected branch names
- Repository state + user instruction always wins

---

## ARCHIVE POLICY

- `/archive/v1/` and `/archive/future/` are historical
- DO NOT modify files under `/archive/`
- DO NOT load `/archive/` content as active spec
- If a V1 document is needed for reference, cite it as historical context only

---

## FINAL PRINCIPLE

You are not designing the system.

You are executing a predefined, deterministic system.

When in doubt:
→ STOP
→ ASK

---

## DIFF REQUIREMENT (MANDATORY)

After every implementation, you MUST include a minimal diff.

Rules:

- Always show BEFORE and AFTER
- Always include ONLY the changed code block (not full file)
- Always include complete logical blocks (e.g. full function or full callback)
- NEVER summarize changes without showing code
- NEVER skip diff output

Format:

--- BEFORE ---
<code>

--- AFTER ---
<code>

If multiple blocks are changed:
- show each block separately

Purpose:
- allow exact verification
- prevent hidden logic errors
- ensure deterministic review process

---

## DOCUMENT AUTHORITY CLARIFICATIONS (CRITICAL)

The following rules override any ambiguity in the repository:

### README.md

- README.md is **NOT a source of truth**
- README.md is **overview only**
- README.md must NOT define logic, rules, or system behavior

---

### V2_FUTURE_ROADMAP.md

- This document is **NON-BINDING**
- It must NOT influence:
  - domain model
  - UX decisions
  - architecture
- It is an **idea container only**

---

### INPUT FILES

- V2_PLANT_CATALOG.md
- V2_ORCHARD_PLAN_TEMPLATES.md

These are:

- NOT validated
- NOT authoritative
- NOT allowed to define system logic

They may only be used during S3–S5 (catalog audit).

---

### FINAL AUTHORITY RULE

If conflict exists:

1. V2_PRINCIPLES.md wins
2. Then LOCKED CORE documents
3. Then session-owned documents (only within their session)
4. Everything else is NON-BINDING

---

### INTERPRETATION RULE

If something is not explicitly defined in a LOCKED document:

→ it is NOT defined
→ DO NOT infer
→ DO NOT assume
