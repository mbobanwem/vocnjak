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
  type: string,          // REQUIRED for new plants — catalog-backed canonical identity (Session 17.4+)
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
- `type` is REQUIRED for new plants (added Session 17.4 — approved schema extension; see IMPLEMENTATION_AUTHORITY_V1.md "Plant Identity & Lifecycle Rules (V1 Override)")
- `type` allowed values (closed set): `apple`, `pear`, `plum`, `cherry`, `peach`, `nectarine`, `apricot`, `olive`, `fig`, `citrus`
- `type` MUST be selected from the catalog; free-text type is FORBIDDEN for new plants
- `type` MUST NEVER be reverse-derived, parsed, or inferred from `name`, `variety`, or any other field
- pre-existing plants created before Session 17.4 may have `type` missing or empty — they remain valid and MUST NOT be auto-migrated
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

V1 storage now includes a stored `type` field as canonical plant identity (approved Session 17.4).

Rules:
- `type` is the canonical identity used for plan-template selection (Session 17.6) and any future type-aware logic
- `type` MUST be set from the catalog at Add Plant time (Session 17.5+)
- `type` MUST NEVER be reverse-parsed, inferred, or guessed from `name` or any other field
- if `type` is missing on a legacy plant, the app MUST treat it as "unknown type" — no template generation, no auto-fix, no rewrite
- legacy plants with missing `type` are valid and MUST NOT be migrated, rewritten, or rejected

Plant detail display fields in V1:
- `name`
- stored `type` (or `—` placeholder for legacy plants)
- `variety`
- `rootstock`
- `plantedDate`
- `status`

Display rules:
- if `variety`, `rootstock`, or `plantedDate` is empty → show `—`
- if stored `type` is missing on a legacy plant → show `—`
- `plantedDate` is displayed in localized UI format
- V1 plant detail is read-only unless explicitly approved otherwise (Delete Plant action — Session 17.5 — is the explicitly approved exception)

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

- plans are predefined OR generated from orchard templates (Session 17.6)
- generated plans MUST be PERSISTED into `v4.plans[]` — runtime-only generation is FORBIDDEN
- plans are user-read-only — user cannot edit individual plan fields
- plan execution state is derived at runtime (see section 5)

Strict rules:
- do NOT mutate plan data after persistence
- generation from templates MUST follow Session 17.6 rules and IMPLEMENTATION_AUTHORITY_V1.md "Plant Identity & Lifecycle Rules (V1 Override)"
- generated plans MUST carry deterministic id prefix `gen:plant:<plantId>:<templateKey>`
- generated plans appear in export/import (Session 17) and Supabase backup (Session 18) — they are part of `v4.plans[]`
- do NOT adjust plan windows in storage outside of approved generation
- do NOT mutate or rewrite manually authored plans during generation
- re-running generation for a plant that already has its generated plans MUST be a no-op (deterministic id prevents duplicate insert)

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

Minimum required user input (Session 17.5+):
- `type` (catalog selection — closed set of 10 allowed values)
- `name` (display label, may be auto-suggested from catalog)

Defaults:
- `status = "forming"`
- `legacyStatus = ""`
- `notes = ""`

If planted date is not changed:
- today is acceptable default

Rules:
- `type` MUST be selected from catalog — free-text is FORBIDDEN
- variety and fallback timing group are mutually exclusive (per PLANT_CATALOG_V1.md)
- save MUST fail if `type` is missing or not in the allowed set
- save MUST never create a plant with an unknown / non-catalog `type` value
- legacy plants without `type` are NOT auto-migrated by the Add Plant flow

## Delete Plant (Session 17.5)

Delete is a deterministic HARD delete with cascade.

Steps (in order, atomic in a single localStorage write):
1. remove plant from `v4.plants` (delete by id)
2. for every plan in `v4.plans` where `plan.appliesToAll === false`:
   - remove the deleted id from `plan.plantIds`
   - if `plan.plantIds` becomes empty, delete the plan
3. plans where `plan.appliesToAll === true` are NEVER removed by delete
4. for every activity in `v4.activities`:
   - remove the deleted id from `activity.plantIds`
   - if `activity.plantIds` becomes empty, delete the activity
5. all generated plans with id matching `gen:plant:<deletedId>:*` are removed by step 2 (their `plantIds` collapses to empty)

Strict prohibitions:
- NO soft delete
- NO archive state
- NO inactive flag on plant
- NO hidden flag
- NO trash / recycle state
- NO field added to mark deletion

Rules:
- delete MUST require user confirmation (single confirmation modal)
- delete MUST be atomic in localStorage — partial cascade is FORBIDDEN
- delete MUST NOT touch other plants' data
- after delete, no reference to the removed id may remain anywhere in `v4`

---

# 5. CURRENT RECOMMENDATION / DISPLAY RULES (V1)

These rules are deterministic and must remain compatible with current V1 fields.

## Principle

Plans represent seasonal guidance, not strict schedules.

---

## 5.1 Active Work Model

V1 does NOT use daily tasks.

The app should surface:
- active work
- missed work

The app should NOT surface:
- completed work inside active work list
- artificial "today-only" tasks

Rules:
- completed plans must be excluded from active work list
- empty state should communicate that no active work currently exists

---

## 5.2 Young Plant Rule

A plant is considered young if:
- plantedDate is within last 12 months from current date
OR
- status === "forming"

Either condition alone is sufficient.

If plant is young, apply this filtering:

HIDE plans where activityType is:
- harvest

SHOW all other plans, including:
- watering
- pruning
- spraying
- fertilizing
- observation
- planting
- problem

Rules:
- no interpretation of plan intent allowed
- pruning is always shown for young plants
- spraying is always shown for young plants
- filtering is based only on activityType value
- no title parsing
- no heuristics
- filtering applies at render time only
- do NOT store a derived "young" field
- if plantedDate is empty, fall back to status check only

---

## 5.3 Watering Gap Rule

Watering gap prompt may be shown only if:
- current month is between April (4) and September (9)
AND
- no watering activity exists in last 14 days

---

## 5.4 Plan State Rule

Plan states are derived in UI/runtime only.

Allowed derived states:
- upcoming
- active
- done
- missed

State MUST be derived in this EXACT order:

1. if matching activity exists → state = done (overrides all other states)
2. else if currentDate < startDate → state = upcoming
3. else if currentDate <= endDate → state = active
4. else if currentDate > effectiveEnd → state = missed

Rules:
- evaluation order MUST NOT change
- "done" MUST override ALL other states, including missed
- do NOT store these states as new V1 fields
- do NOT introduce "late"
- do NOT introduce "skipped"
- state MUST be recalculated on every render

"Matching activity" definition: see Section 5.5.
Tolerance window definition: see Section 5.6.

---

## 5.5 Matching Activity Rule

A plan is matched by an activity only if:
- normalized(activity.type) === normalized(plan.activityType)
- activity date is within allowed tolerance window (see 5.6)
- AND one of:
  - plan.appliesToAll === true
  - plant overlap exists between activity.plantIds and plan.plantIds

If multiple matching activities exist:
- one valid match is sufficient
- do not require unique mapping
- do not invalidate plan if duplicates exist

Rules:
- exact normalized type match only
- one matching activity is sufficient
- one multi-plant activity may satisfy multiple plant-specific plans if overlap exists

Normalization rule:
- lowercase
- trimmed string

---

## 5.6 Timing Tolerance Rule

V1 uses a fixed symmetric tolerance window.

Rule:
- tolerance = ±7 days from plan window

Matching condition:

activity.date MUST be within:
- startDate - 7 days
- endDate + 7 days

Rules:
- early execution is allowed ONLY within -7 days
- late execution is allowed ONLY within +7 days
- no unlimited early execution
- no dynamic tolerance

Purpose:
- keep matching deterministic
- avoid ambiguity

---

## 5.7 Missed Work Rule

If:
- effectiveEnd has passed
- no matching activity exists within window + tolerance

Then:
- plan is shown as missed in UI

If:
- matching activity exists

Then:
- plan is done
- do not show it in active work list

---

## 5.8 Weather & Safety Constraints

V1 does NOT implement weather-aware or safety-aware decision logic.

Rules:
- do NOT block activities based on weather in V1
- do NOT block activities based on bloom / pollinator risk in V1
- do NOT block activities based on pre-harvest interval in V1

Display principle:
- V1 may show advisory prompts later
- V1 must NOT enforce safety decisions automatically

---

## 5.9 Interval Flexibility Rule

V1 does NOT recalculate future plan windows.

Rules:
- delayed execution may still match ONLY within tolerance
- future plans do NOT shift automatically
- no dependency logic between plans
- no global seasonal drift

Principle:
- preserve original seasonal timing
- keep execution deterministic

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