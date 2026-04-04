# VOCNJAK — Claude Code Instructions

@MIGRATION_PLAN_V1.md
@TARGET_ARCHITECTURE_V1.md
@CURRENT_STATE.md
@UX_IMPROVEMENTS.md
@VISION_AND_STRATEGY.md
@VALIDATION_CONTEXT.md

## CRITICAL RULES

- MIGRATION_PLAN_V1.md is LOCKED
- Do NOT change data model, field names, or structure
- Do NOT introduce new features unless explicitly asked
- Do NOT make assumptions about missing data or logic

- POLISH_BACKLOG.md contains non-critical UI/UX/copy issues
- Do NOT implement items from POLISH_BACKLOG.md unless explicitly instructed
- Never open a session for small UI/cosmetic fixes
- If a change is not functionally required → it belongs in POLISH_BACKLOG.md

- Focus strictly on the explicitly requested scope
- Do NOT include extra improvements, even if they seem obvious

If unsure → STOP and ask for clarification

## COMMIT RULE (CRITICAL)

- NEVER commit or push unless explicitly told:
  "Approved for commit"

- After implementation:
  ALWAYS stop and wait for review

- Even if code is correct:
  DO NOT commit automatically

- Default state after coding:
  WAIT FOR APPROVAL

---

## IMPLEMENTATION MODE

When implementing:
- do EXACTLY what is approved
- do NOT expand scope
- do NOT refactor unrelated code
- do NOT "improve" anything outside task

If something is unclear:
- STOP
- ASK

---

## SCOPE

- Work ONLY on the currently approved session
- Do NOT anticipate future sessions
- Do NOT modify unrelated code
- Do NOT touch unless explicitly requested:
  - PWA
  - Supabase
  - Weather
  - iCal

---

### SOURCE OF TRUTH

Always read these files BEFORE making changes:

1. MIGRATION_PLAN_V1.md (STRICT RULES — LOCKED)
2. TARGET_ARCHITECTURE_V1.md
3. CURRENT_STATE.md

Additional context files:

4. DOMAIN_RULES_V1.md (behavior rules aligned with V1 model)
5. EXECUTION_ROADMAP_V1.md (session order and execution plan)
6. STORE_READY_ROADMAP_V1.md (store readiness and monetization direction)
7. UX_IMPROVEMENTS.md (UX direction and improvements)
8. VALIDATION_CONTEXT.md (validation and decision context)

Future context (DO NOT IMPLEMENT without approval):

9. DOMAIN_DIRECTION_V2.md

---

## CRITICAL NOTES

- MIGRATION_PLAN_V1.md is LOCKED
- Do NOT change data model, field names, or structure

- DOMAIN_RULES_V1.md defines allowed behavior within V1
- DOMAIN_DIRECTION_V2.md is FUTURE context only

IMPORTANT:
- NEVER implement anything from DOMAIN_DIRECTION_V2.md unless explicitly instructed
- If unsure whether something belongs to V1 or V2 → STOP and ask

---

## IMPLEMENTATION PRIORITY

1. MIGRATION_PLAN_V1.md (absolute truth)
2. DOMAIN_RULES_V1.md (behavior rules)
3. TARGET_ARCHITECTURE_V1.md
4. UX_IMPROVEMENTS.md
5. Everything else