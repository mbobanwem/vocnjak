# VOCNJAK — Claude Code Instructions

@MIGRATION_PLAN_V1.md
@TARGET_ARCHITECTURE_V1.md
@CURRENT_STATE.md
@UX_IMPROVEMENTS.md
@VISION_AND_STRATEGY.md
@VALIDATION_CONTEXT.md

---

## CRITICAL RULES

- MIGRATION_PLAN_V1.md is LOCKED
- Do NOT change data model, field names, or structure
- Do NOT introduce new features unless explicitly asked
- Do NOT make assumptions about missing data or logic

If unsure → STOP

---

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

## SOURCE OF TRUTH

Always read before implementation:
- MIGRATION_PLAN_V1.md
- TARGET_ARCHITECTURE_V1.md
- CURRENT_STATE.md
- UX_IMPROVEMENTS.md