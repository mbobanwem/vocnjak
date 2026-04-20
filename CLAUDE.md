# VOCNJAK — Claude Code Instructions (V2)

---

## SOURCE OF TRUTH (READ FIRST — ALWAYS)

Before making ANY change, you MUST read:

1. `V2_PRINCIPLES.md` (locked product principles)
2. `V2_DOMAIN_MODEL.md` (schemas, vocabulary, enums)
3. `V2_UX_MODEL.md` (surfaces and flows)
4. `V2_ARCHITECTURE.md` (data model, algorithms, migration)
5. `V2_EXECUTION_ROADMAP.md` (implementation session order)
6. `V2_CATALOG_AUDIT.md` (catalog v1.0 status)
7. `V2_PLANT_CATALOG.md` (plant catalog content)
8. `V2_ORCHARD_PLAN_TEMPLATES.md` (action templates)

Archived (historical, not load-bearing):

- `/archive/v1/` — original V1 planning and rules
- `/archive/future/` — deferred future direction

---

## CRITICAL RULES (NON-NEGOTIABLE)

- `V2_PRINCIPLES.md` and `V2_DOMAIN_MODEL.md` are the locked specification
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
- Follow `V2_EXECUTION_ROADMAP.md` exactly
- Do NOT skip steps
- Do NOT anticipate future sessions

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
