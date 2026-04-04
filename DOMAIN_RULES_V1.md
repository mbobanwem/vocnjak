# VOCNJAK — DOMAIN RULES V1

## PURPOSE

Define strict domain rules for:
- plants
- activities
- basic recommendation logic

Goal:
- prevent ambiguity
- prevent AI hallucination
- ensure consistent data model usage

---

# 1. PLANT MODEL (V1)

## Structure

```js
plant = {
  id: string,
  name: string,
  type: string,
  variety?: string,
  plantingDate?: string, // ISO date (YYYY-MM-DD)
  status?: string
}
```

## Rules

- `id` is unique and stable
- `name` is user-defined (e.g. "Fuji jabuka")
- `type` is a normalized category (see below)
- `variety` is optional (e.g. "Fuji", "Kordia")
- `plantingDate` is optional but recommended
- `status` is optional (e.g. "Razvija se")

## Plant Types (V1 allowed values)

- jabuka
- kruška
- trešnja
- višnja
- šljiva
- breskva
- nektarina
- marelica
- smokva
- ostalo

### Rules

- lowercase only
- no plural forms (e.g. NOT "jabuke")
- no synonyms
- UI must normalize user input to one of these values

---

# 2. ACTIVITY MODEL (V1)

## Structure

```js
activity = {
  id: string,
  plantIds: string[],
  type: string,
  date: string, // ISO date (YYYY-MM-DD)
  note?: string
}
```

## Rules

- `id` is unique
- `plantIds` must contain at least 1 valid plant id
- `type` must be from allowed list
- `date` must be valid ISO format (YYYY-MM-DD)
- `note` is optional
- no additional fields allowed in V1

## Activity Types (V1 allowed values)

- sadnja
- zalijevanje
- prskanje
- rezidba
- gnojidba
- zaštita
- ostalo

## UX Rules (STRICT)

- label MUST be: "Tip aktivnosti"
- type MUST be selected before save

Validation message MUST be EXACTLY:

"Odaberi tip aktivnosti"

No variations allowed.

## UX Defaults

- default date = today
- note = optional
- plant must already be selected (contextual add)

---

# 3. PLAN MODEL (REFERENCE ONLY)

Plans must follow MIGRATION_PLAN_V1.md exactly.

Rules:
- DO NOT modify structure
- DO NOT extend fields
- DO NOT introduce alternative logic

---

# 4. BASIC RECOMMENDATION RULES (V1 — NON-AI)

These rules are deterministic and must NOT use AI.

## 4.1 Young Plant Rule

IF:
- plantingDate exists
AND
- plant age < 1 year

THEN:
- suppress fruit-related actions
- suppress advanced spraying plans
- allow:
  - zalijevanje
  - basic zaštita
  - early formiranje krošnje (future)

## 4.2 Seasonal Spray Window (simplified)

IF:
- month = 2 or 3

THEN:
- suggest bakar (copper spraying)

## 4.3 Watering Reminder

IF:
- month = 6, 7 or 8
AND
- no "zalijevanje" activity in last 7 days

THEN:
- suggest watering

## 4.4 Activity → Plan Completion

IF:
- activity.type matches plan.type
AND
- activity date is within plan window

THEN:
- mark plan as DONE

---

# 5. DATA CONSISTENCY RULES

- no mutation outside defined models
- no dynamic fields
- no schema drift
- no implicit conversions
- no hidden fields

---

# 6. STRICT RULES FOR AGENTS

Agents (Claude / GPT) MUST:

- NEVER invent new fields
- NEVER rename fields
- NEVER extend models without explicit instruction
- NEVER assume values outside allowed lists
- ALWAYS validate inputs before save
- ALWAYS follow MIGRATION_PLAN_V1.md as source of truth

IF unsure:
→ DO NOTHING and ask for clarification

---

# 7. NON-GOALS (V1)

- no AI-based recommendations
- no probabilistic logic
- no machine learning
- no external APIs required for core logic

---

# FINAL PRINCIPLE

This app must be:

- deterministic
- predictable
- explainable

NOT:

- heuristic
- guess-based
- over-engineered

Keep it simple.