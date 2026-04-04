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

## SOURCE OF TRUTH

Always read before implementation:
- MIGRATION_PLAN_V1.md
- TARGET_ARCHITECTURE_V1.md
- CURRENT_STATE.md
- UX_IMPROVEMENTS.md