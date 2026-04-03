# MIGRATION RULES — Session 1

## Scope
Migration from vocnjak_v3 → vocnjak_v4

## Target structure

{
  plants: {},
  activities: [],
  plans: []
}

## Rules

- plants must be object keyed by "plant_" + old key
- activities are global (not per plant)
- plans are derived from todos

## Safety

- ALWAYS create backup before migration:
  vocnjak_v3 → vocnjak_v3_premigration

- NEVER overwrite vocnjak_v3

## Validation

- plants must be object and not empty
- activities must be array
- plans must be array

If validation fails:
- STOP execution
- console.error("Migration failed")
- keep old data

## Mapping

Follow STRICTLY:
- status mapping
- type mapping

Defined in:
@MIGRATION_PLAN_V1.md

## Forbidden

- No UI changes
- No refactoring
- No new fields
- No schema changes

## Goal

Safe migration without breaking app.
