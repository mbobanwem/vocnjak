# VOCNJAK — DOMAIN RULES V1

## PURPOSE

Define strict domain rules for current V1 implementation.

This file must stay fully compatible with:
- MIGRATION_PLAN_V1.md
- TARGET_ARCHITECTURE_V1.md
- UX_IMPROVEMENTS.md

Goal:
- prevent ambiguity
- prevent AI hallucination
- ensure consistent V1 data usage

---

## IMPORTANT

This file does NOT change the V1 data model.

If any conflict exists:
- MIGRATION_PLAN_V1.md wins

---

# 1. PLANT MODEL (V1)

## Structure

```js
plant = {
  id: string,
  name: string,
  variety: string,
  rootstock: string,
  plantedDate: string,   // ISO date (YYYY-MM-DD) or ""
  status: string,
  legacyStatus: string,
  notes: string
}
```

## Rules

- `id` is unique and stable
- `name` is user-facing plant name (e.g. "Fuji jabuka", "Trešnja Kordia")
- `variety` is optional in practice, but field exists in V1
- `rootstock` is optional in practice, but field exists in V1
- `plantedDate` may be empty string if unknown
- `status` must follow current V1 status usage
- `legacyStatus` is preserved for compatibility / migration history
- `notes` is always present, even if empty

## Status Rules

Current V1 statuses in active usage:
- `forming`
- `issue`

Rule:
- use `forming` as default safe state
- use `issue` only for clearly problematic / urgent state
- do not invent new statuses without explicit approval

---

# 2. ACTIVITY MODEL (V1)

## Structure

```js
activity = {
  id: string,
  type: string,
  date: string,      // ISO date (YYYY-MM-DD)
  status: string,
  plantIds: string[],
  product: string,
  notes: string
}
```

## Rules

- `id` is unique
- `type` must be from allowed V1 list
- `date` must be valid ISO format (YYYY-MM-DD)
- `status` is currently `done` in active add flow
- `plantIds` must contain at least 1 valid plant id
- `product` always exists, even if empty
- `notes` always exists, even if empty
- no extra fields allowed in V1

## Activity Types (internal V1 values)

- `spraying`
- `pruning`
- `planting`
- `harvest`
- `watering`
- `fertilizing`
- `observation`
- `problem`

Rule:
- these are internal stored values
- UI labels may be Croatian
- stored value must remain English V1 type

## Activity Status Rules

Current V1 active behavior:
- add flow creates activities with `status: "done"`

Rule:
- do not invent additional activity statuses in V1 unless explicitly approved
- skipped/missed logic may be derived in UI, but not invented in storage without approval

---

# 3. PLAN MODEL (REFERENCE ONLY)

Plans must follow MIGRATION_PLAN_V1.md exactly.

## Structure

```js
plan = {
  id: string,
  title: string,
  activityType: string,
  appliesToAll: boolean,
  plantIds: string[],
  monthStart: number,
  dayStart: number,
  monthEnd: number,
  dayEnd: number,
  skipYear: number,
  notes: string
}
```

## Rules

- do NOT modify field names
- do NOT extend plan model
- do NOT invent alternative storage shape
- `activityType` must align with activity internal type values
- applicability is defined only by:
  - `appliesToAll`
  - `plantIds`

---

# 4. UX VALIDATION RULES (V1)

## Add Activity

Label must be:
- `Tip aktivnosti`

Validation message for missing type must be EXACTLY:
- `Odaberi tip aktivnosti`

Validation message for no selected plants:
- `Odaberi barem jednu biljku`

Defaults:
- date defaults to today
- notes default to empty string
- product defaults to empty string

## Add Plant

Minimum required user input:
- `name`

Defaults:
- `status = "forming"`
- `legacyStatus = ""`
- `notes = ""`

If planted date is not changed:
- today is acceptable default

---

# 5. CURRENT RECOMMENDATION / DISPLAY RULES (V1)

These rules are deterministic and must remain compatible with current V1 fields.

## 5.1 Young Plant Rule

A plant is considered young if:
- `plantedDate` is within last 12 months
OR
- `status === "forming"`

Then:
- suppress fruiting-context plans
- suppress harvest / traps / nets context
- never suppress care plans:
  - watering
  - pruning
  - spraying
  - fertilizing
  - observation

If unsure:
- show the plan

## 5.2 Watering Gap Rule

Watering gap prompt may be shown only if:
- current month is 4–9
AND
- no `watering` activity exists in last 14 days

## 5.3 Plan State Rule

Derived plan states are UI logic only:

- `upcoming`
- `active`
- `done`
- `missed`

These are derived from:
- current date
- plan window
- matching activity existence

Do not store these as new fields in V1 unless explicitly approved.

## 5.4 Matching Activity Rule

A matching activity for a plan means:
- same `activityType` / `type`
- activity date within plan window
- plant overlap OR `appliesToAll === true`

---

# 6. DATA CONSISTENCY RULES

- no mutation outside defined models
- no dynamic fields
- no schema drift
- no implicit conversions
- no hidden fields
- no alternative naming

Examples:
- use `plantedDate`, NOT `plantingDate`
- use `notes`, NOT `note`
- use `product`, NOT `products`
- use `type` internal English value, not localized stored value

---

# 7. STRICT RULES FOR AGENTS

Agents (Claude / GPT) MUST:

- NEVER invent new fields
- NEVER rename fields
- NEVER extend models without explicit instruction
- NEVER assume values outside allowed V1 lists
- ALWAYS validate against MIGRATION_PLAN_V1.md
- ALWAYS keep implementation compatible with current storage

If unsure:
→ DO NOTHING and ask for clarification

---

# 8. NON-GOALS (V1)

- no AI-based recommendations
- no probabilistic logic
- no machine learning
- no external APIs required for core logic
- no new entities such as products, tools, gardens, zones

---

# FINAL PRINCIPLE

V1 must be:

- deterministic
- predictable
- explainable
- migration-safe

Keep it simple.