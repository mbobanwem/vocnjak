# VOCNJAK — Claude Code Instructions (V2)

---

## SOURCE OF TRUTH (READ FIRST — ALWAYS)

Documents are not equal. Use the classes below exactly.

### LOCKED CORE

- `V2_PRINCIPLES.md`
- later: `V2_DOMAIN_MODEL.md`, `V2_UX_MODEL.md`, and `V2_ARCHITECTURE.md` only after sign-off

Rules:
- LOCKED CORE is binding
- if any conflict exists, LOCKED CORE wins

### IN PROGRESS

- current target document only

Rules:
- may be edited only by its owning session
- not binding until sign-off

Current:
- `V2_DOMAIN_MODEL.md`
- becomes locked only after S2 sign-off

### INPUT FILES (NOT YET VALIDATED V2 TRUTH)

- `V2_PLANT_CATALOG.md`
- `V2_ORCHARD_PLAN_TEMPLATES.md`

Rules:
- renamed V1 content
- input material only
- may be mined for content
- may NOT define final V2 truth
- require audit in S3-S5 before promotion

### PLACEHOLDERS

- `V2_UX_MODEL.md`
- `V2_ARCHITECTURE.md`
- `V2_EXECUTION_ROADMAP.md`
- `V2_CATALOG_AUDIT.md`

Rules:
- scaffold only
- not authoritative until owning session completes and signs off

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
