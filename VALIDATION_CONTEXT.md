# VALIDATION CONTEXT

This file is for validation only — not for changing schema or logic.

---

## V4 data validation rules

### After migration (migrateV3toV4)

1. `plants` must be a non-empty object
2. `activities` must be an array
3. `plans` must be an array
4. Every plant key must start with "plant_"
5. Every activity must have: id, type, date, status, plantIds, product, notes
6. Every activity.plantIds must be an array
7. Every activity.type must be one of: spraying, pruning, fertilizing, watering, planting, harvest, observation, problem
8. Every activity.status must be one of: planned, done, skipped

### If validation fails

- console.error with details
- STOP — do not proceed with rendering
- Do not overwrite vocnjak_v3

---

## Activity ID format

```
"act_" + Date.now() + "_" + Math.random().toString(36).slice(2,7)
```

Example: `act_1711234567890_x7k2m`

---

## Plant ID format

```
"plant_" + legacyKey
```

Example: `plant_tresnja`, `plant_jabuka`

---

## Storage validation

| Key | Type | Required |
|-----|------|----------|
| vocnjak_v3 | JSON string | Yes (legacy) |
| vocnjak_v4 | JSON string | Yes (after migration) |
| vocnjak_v3_premigration | JSON string | Yes (backup, created by migration) |

---

## What this file does NOT do

- Does NOT define schema — see MIGRATION_PLAN_V1.md and TARGET_ARCHITECTURE_V1.md
- Does NOT define UI behavior — see UX_IMPROVEMENTS.md
- Does NOT override MIGRATION_PLAN_V1.md
