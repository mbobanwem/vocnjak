# VOCNJAK — Claude Code Instructions (FINAL)

---

## SOURCE OF TRUTH (READ FIRST — ALWAYS)

Before making ANY change, you MUST read:

1. MIGRATION_PLAN_V1.md (LOCKED — absolute truth)
2. EXECUTION_ROADMAP_V1.md (execution order)
3. TARGET_ARCHITECTURE_V1.md
4. CURRENT_STATE.md

Additional context:

5. DOMAIN_RULES_V1.md (allowed behavior within V1)
6. UX_IMPROVEMENTS.md (UX direction)
7. VALIDATION_CONTEXT.md (validation logic)
8. PLANT_CATALOG_V1.md (plant types, varieties, timing — UI layer only)

Future context (DO NOT IMPLEMENT):

9. DOMAIN_DIRECTION_V2.md

---

## CRITICAL RULES (NON-NEGOTIABLE)

- MIGRATION_PLAN_V1.md is LOCKED
- NEVER change data model, field names, or structure
- NEVER introduce new fields
- NEVER introduce new features unless explicitly instructed

- DO NOT assume missing logic
- DO NOT “improve” anything outside task scope
- DO NOT refactor unrelated code

If anything is unclear:
→ STOP and ask

---

## EXECUTION MODE

You are executing a predefined plan.

- Work ONLY on the current session
- Follow EXECUTION_ROADMAP_V1.md exactly
- Do NOT skip steps
- Do NOT anticipate future sessions

---

## SCOPE CONTROL

You MUST NOT touch:

- PWA logic
- Supabase
- Weather integration
- iCal integration

Unless explicitly instructed.

---

## DOMAIN RULES (CRITICAL)

- The system is deterministic
- NO heuristics allowed
- NO assumptions allowed

- Activities are the ONLY source of truth
- Plans are NOT editable
- Plan state is ALWAYS derived (never stored)

If logic cannot be derived:
→ STOP and ask

---

## DOMAIN BOUNDARY

- DOMAIN_RULES_V1.md defines current behavior
- DOMAIN_DIRECTION_V2.md is FUTURE ONLY

NEVER:
- implement V2 ideas
- anticipate V2 logic

If unsure:
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

## VALIDATION RULE

- All validation must follow VALIDATION_CONTEXT.md
- Do NOT invent validation rules

---

## COMMIT RULE (STRICT)

- NEVER commit or push unless explicitly told:
  "Approved for commit"

- After implementation:
  → STOP
  → WAIT for review

---

## POLISH RULE

- POLISH_BACKLOG.md is for non-critical improvements
- NEVER implement polish without explicit instruction
- NEVER create sessions for cosmetic fixes

---

## FINAL PRINCIPLE

You are not designing the system.

You are executing a predefined, deterministic system.

When in doubt:
→ STOP
→ ASK