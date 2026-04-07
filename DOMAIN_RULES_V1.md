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

This file does NOT change the V1 data model. This file defines behavior only.

If any conflict exists:
- MIGRATION_PLAN_V1.md wins

## LANGUAGE RULES (GLOBAL)

All internal data values MUST remain in English.

Examples:
- plant type: `apple`
- activity type: `spraying`
- timing group: `early`, `mid`, `late`, `unknown`

Rules:
- UI labels are localized
- localized labels MUST NEVER be stored in data
- variety names are not translated
- internal values are the only source used by logic / matching / engine

Examples:
- store `apple`, show `Jabuka`
- store `spraying`, show `Prskanje`
- store `late`, show `Kasna`

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

## Plant Input Rules (V1 display / UX)

Current V1 storage does NOT include a dedicated `type` field.

Rules:
- plant `type` may be shown in UI as a derived display value only
- derived type MUST NOT be stored back into V1 model unless explicitly approved
- if type cannot be derived safely, show placeholder `—`

Plant detail display fields in V1:
- `name`
- derived `type`
- `variety`
- `rootstock`
- `plantedDate`
- `status`

Display rules:
- if `variety`, `rootstock`, or `plantedDate` is empty → show `—`
- `plantedDate` is displayed in localized UI format
- V1 plant detail is read-only unless explicitly approved otherwise

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

Note:
Detailed validation and behavior rules are defined in section #9.
Section #2 defines structure and allowed values only.

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

## Plan Behavior Rules (V1)

- plans are predefined and stored
- plans are NOT generated dynamically in V1
- plans are read-only in V1
- plan execution state is derived at runtime (see section 5)

Strict rules:
- do NOT mutate plan data
- do NOT generate new plans without explicit instruction
- do NOT adjust plan windows in storage

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

Rules:
- internal stored `type` remains English
- UI labels may be localized
- save must fail if required fields are invalid
- save must never create partial activity objects

## Add Plant

Minimum required user input:
- `name`

Defaults:
- `status = "forming"`
- `legacyStatus = ""`
- `notes = ""`

If planted date is not changed:
- today is acceptable default

Rules:
- V1 plant creation remains compatible with existing V1 fields only
- no additional plant fields may be introduced without approval

---

# 5. CURRENT RECOMMENDATION / DISPLAY RULES (V1)

These rules are deterministic and must remain compatible with current V1 fields.

## Principle

Plans represent seasonal guidance, not strict schedules.

## 5.1 Active Work Model

V1 does NOT use daily tasks.

The app should surface:
- active work
- late work

The app should NOT surface:
- completed work inside active work list
- artificial "today-only" tasks
- completed plans must be excluded from active work list

Empty state should communicate:
- no active work currently

## 5.2 Young Plant Rule

A plant is considered young if:
- plantedDate is within last 12 months from current date
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

## 5.3 Watering Gap Rule

Watering gap prompt may be shown only if:
- current month is between April (4) and September (9)
AND
- no `watering` activity exists in last 14 days

## 5.4 Plan State Rule

Plan states are derived in UI/runtime only.

Allowed derived states:
- `upcoming`
- `active`
- `done`
- `missed`
- `late`

Definition:
- `done` = at least one matching activity exists (see 5.5)

Note:
V1 does not account for rainfall or weather conditions.
This rule is heuristic only.

Rules:
- do NOT store these states as new V1 fields
- derive them from current date, plan window, and activities

## 5.5 Matching Activity Rule

Priority:
- activity within plan window has priority over tolerance match
- if multiple valid activities exist, prefer the closest to plan window

A plan is matched by an activity only if:
- `activity.type === plan.activityType`
- activity date is within plan window OR within allowed tolerance window (see 5.6)
- AND one of:
  - `plan.appliesToAll === true`
  - plant overlap exists between `activity.plantIds` and `plan.plantIds`

If multiple matching activities exist:
- first valid match is sufficient
- do not require unique mapping
- do not invalidate plan if duplicates exist

Rules:
- exact type match only
- one matching activity is sufficient
- one multi-plant activity may satisfy multiple plant-specific plans if overlap exists

## 5.6 Timing Tolerance Rule

V1 allows limited tolerance for real-world delays.

Rule:
- late completion may still count as valid if activity happens within up to 7 days after plan window

Purpose:
- avoid false missed states due to rain / weather / unavoidable delay

Rules:
- do NOT globally shift all future plan windows
- tolerance is local to matching logic
- original seasonal timing should be preserved whenever possible

Early execution:

- activity may be considered valid if performed before the window
- no strict lower bound in V1
- do not enforce early restriction in logic

## 5.7 Late / Missed Work Rule

If:
- plan window has passed
- no matching activity exists within plan window or tolerance

Then:
- plan may be shown as late / missed in UI

If:
- matching activity exists

Then:
- do not show it in active work list
- show it only through history / completed state rendering

## 5.8 Weather & Safety Constraints

V1 does NOT implement weather-aware or safety-aware decision logic yet.

Rules:
- do NOT block activities based on weather in V1
- do NOT block activities based on bloom / pollinator risk in V1
- do NOT block activities based on pre-harvest interval in V1
- weather, bee safety, and harvest safety remain future advisory logic only

Display principle:
- V1 may show general contextual prompts later
- V1 must NOT enforce safety decisions automatically

Future direction:
- weather-aware timing
- avoid spraying during bloom / pollinator activity
- avoid spraying too close to harvest

## 5.9 Interval Flexibility Rule

V1 recognizes that real orchard work may compress ideal spacing between operations.

Rules:
- real execution may shorten the ideal gap between consecutive operations
- this does NOT globally shift the full seasonal plan
- this affects only local interpretation of the next relevant operation
- V1 does NOT implement full dependency recalculation

Principle:
- preserve original seasonal timing as much as possible
- allow practical real-world flexibility when work is delayed by rain or similar constraints

Examples:
- if one spraying activity is delayed by weather, the next relevant operation may still be considered valid with a shortened practical interval
- V1 should not assume the entire yearly schedule moves forward

---

# 6. DATA CONSISTENCY RULES

- no mutation outside defined models
- no dynamic fields
- no schema drift
- no implicit conversions
- no hidden fields
- no alternative naming
- use internal English values for logic even when UI is localized
- do not store translated labels in data
- do not infer or derive new fields into stored objects

Examples:
- use `plantedDate`, NOT `plantingDate`
- use `notes`, NOT `note`
- use `product`, NOT `products`
- use `type` internal English value, not localized stored value
- use `apple`, NOT `jabuka`
- use `late`, NOT `kasna`

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
# 9. ACTIVITY VALIDATION & SAFETY RULES (SESSION 9)

These rules define strict behavior for activity creation and storage.

---

## 9.1 Required fields

An activity MUST NOT be saved if:

- `type` is missing
- `plantIds` is empty
- `date` is missing or invalid

Validation messages must follow UX rules.

---

## 9.2 Defaults

When creating activity:

- `date` defaults to today (ISO format)
- `product` defaults to empty string ""
- `notes` defaults to empty string ""

---

## 9.3 Type rules

- `type` must be one of V1 allowed values:
  - spraying
  - pruning
  - planting
  - harvest
  - watering
  - fertilizing
  - observation
  - problem

- UI labels may be localized
- stored value MUST remain English internal value

---

## 9.4 Plant selection rules

- at least one plant must be selected
- `plantIds` must contain only valid existing plant ids
- no duplicates in `plantIds`

---

## 9.5 Date rules

- must be valid ISO format: YYYY-MM-DD
- must not be malformed
- future dates are allowed (no restriction in V1)

---

## 9.6 Status rules

- all newly created activities must have:
  - `status: "done"`

- do NOT introduce other statuses in V1 without approval

---

## 9.7 Duplicate handling

If an activity is created with:

- same `type`
- same `date`
- same `plantIds`

Then:

- allow creation (no blocking)
- do NOT auto-merge
- do NOT auto-deduplicate

Reason:
- keep logic simple in V1
- user control is preferred

---

## 9.8 Save guarantees

After saving activity:

- activity MUST appear immediately in:
  - plant detail screen
  - calendar (correct date)
  - dashboard (recent activity)

- no manual refresh required

---

## 9.9 Strict rule

Agents MUST:

- NOT save invalid activity
- NOT create partial objects
- NOT introduce new fields
- NOT mutate structure

If validation fails:
→ DO NOT SAVE
→ show validation message
---

# FINAL PRINCIPLE

V1 must be:

- deterministic
- predictable
- explainable
- migration-safe

Real-world execution always overrides strict calendar assumptions.

Keep it simple.