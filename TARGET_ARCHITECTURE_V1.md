# TARGET ARCHITECTURE V1

## Purpose

Define the structural architecture of the app based on the V4 data model and domain rules.

The goal is to:
- keep the system simple
- support orchard-specific workflows
- enable future intelligence without breaking the core model

---

## Data Model

```js
{
  plants: { [id]: Plant },
  activities: Activity[],
  plans: Plan[]
}
```

### Core structure

- plants → object keyed by id
- activities → global array
- plans → predefined array (read-only definitions)

---

## Core Principles

### 1. Activities = source of truth

Activities represent real-world actions.

- every real action is stored as an activity
- activities are never derived
- activities drive history, calendar, and execution

---

### 2. Plans = intent (NOT execution)

Plans define what should happen, not what did happen.

- plans are read-only
- plans are not modified by user actions
- plans do NOT store execution state

---

### 3. Execution is derived

Plan execution state is ALWAYS derived from activities.

#### Derived states

- upcoming
- active
- done
- missed

#### Rules

- based on plan window (month/day)
- based on matching activity (DOMAIN_RULES)
- based on tolerance

#### Storage rules

- do NOT persist plan state
- do NOT add fields to plans
- do NOT mutate plans

#### Principle

Plans define intent.  
Activities define reality.

---

## Data Flow

### Plant → Activity → Plan relationship

- plants are independent entities
- activities reference plants via `plantIds[]`
- plans may target:
  - all plants
  - specific plants

#### Matching

- `activity.type === plan.activityType`
- plant overlap exists OR `appliesToAll === true`
- exact type match only (no fuzzy matching)

---

## Architectural Constraints

- single-file app (index.html)
- no frameworks
- localStorage persistence
- no backend dependency (V1)
- no over-engineering

---

## Plant Catalog (Future UI Layer)

Plants may be selected from a predefined catalog at input time.

### Catalog defines

- plant type
- optional varieties
- optional rootstocks
- future timing profiles

### Rules

- catalog is a UI/input layer
- catalog is NOT stored directly in current V1 v4 data model
- current V1 plant model has NO dedicated type field
- derived type may be shown in UI only
- selected catalog values may populate existing fields such as name and variety
- dedicated stored plant type or timing fields require explicit approval

### Purpose

- consistent naming
- enable translation
- enable future recommendations

---

## Translation Model

The app uses a dictionary-based translation system.

### Rules

- English (EN) is the source language
- all internal values use EN keys
- UI is translated via dictionary

### Example

- "spraying" → "prskanje" (HR)

### User settings

- selected language must be stored
- UI renders based on selected language

### Principle

- data is language-neutral
- UI is localized

---

## Onboarding State

The app must support first-run onboarding.

### Rules

- onboarding is triggered when no plants exist
- onboarding may collect:
  - language
  - first plant(s)
- onboarding must remain compatible with current V1 model
- plant selection may use catalog as a UI constraint only
- no new plant fields may be introduced without explicit approval

### Constraints

- user must create at least one plant
- onboarding completion and language may be stored outside the plant model

### Principle

- no empty app state
- user must enter a valid starting context

---

## What is NOT in V1

The following are intentionally excluded:

- weather engine
- disease model
- product database
- AI recommendations
- zones / garden hierarchy
- automation / scheduling engine

These are future layers built on top of:

- activities
- plans
- domain rules

---

## Final Principle

Keep the model simple.

Do not:

- add unnecessary fields
- introduce derived data into storage
- mutate plans
- over-engineer structure

Build on top of:

- activities (reality)
- plans (intent)
- domain rules (logic)