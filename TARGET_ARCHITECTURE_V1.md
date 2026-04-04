# TARGET ARCHITECTURE V1

## Data model

{
  plants: { [id]: Plant },
  activities: Activity[],
  plans: Plan[]
}

## Key rules

- plants is object keyed by id
- activities are global (not per plant)
- plans define future work

## Why

- support multi-plant activities
- enable better calendar
- simplify queries
- prepare for future features

## Constraints

- single-file JS stays
- no framework
- minimal structure
- no over-engineering

## Not in V1

- products as entity
- zones
- gardens
- AI features
