# MIGRATION PLAN V1 (LOCKED)

## Target structure

{
  plants: {},
  activities: [],
  plans: []
}

---

## Plants

- Source: vocnjak_v3.plants (array or object)
- Target: object keyed by "plant_" + old key

### Allowed fields (ONLY these)

- id
- name
- type
- variety
- rootstock
- plantedAt
- location
- notes
- legacyStatus

### Rules

- id = "plant_" + old key
- preserve original notes
- map status conservatively
- store original status in legacyStatus

---

## Activities

- Source: entries
- Target: global array

### Rules

- entries → activities
- must reference plantId
- preserve date
- preserve notes
- product = "" (empty string ALWAYS)

---

## Plans

- Source: todos

### Rules

- ONLY todos with monthStart → plans
- others are ignored
- preserve:
  - plantId
  - type
  - notes
  - monthStart

---

## Status mapping

- done → completed
- pending → planned
- other → keep original in legacyStatus

---

## Constraints

- NO new fields
- NO schema changes
- NO UI changes
- NO refactoring

---

## Safety

- backup before migration
- never overwrite vocnjak_v3

---

## Validation

- plants is object and not empty
- activities is array
- plans is array

If fails:
- STOP
- console.error
