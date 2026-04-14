# TARGET ARCHITECTURE V1

## Purpose

Define the structural architecture of the app based on the V4 data model and domain rules.

The goal is to:
- keep the system simple
- support orchard-specific workflows
- enable future intelligence without breaking the core model

The system is organized in three layers:

1. Data layer (persisted)
2. Lifecycle layer (event-based task generation)
3. Derived layer (runtime recommendations & filtering)

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

## Plan System Hierarchy (V1)

V1 has exactly one primary plan system and one narrow optional extension. They are NOT peers.

### PRIMARY — Template-based persisted plans
- driven by `plant.type` (Session 17.4 approved stored field)
- sourced from ORCHARD_PLAN_TEMPLATES_V1.md via PLANT_CATALOG_V1.md
- PERSISTED into `v4.plans[]`
- user-owned data (included in export, import, and cloud backup)
- this is the plan layer used by calendar, dashboard, and plant detail

### SECONDARY — Lifecycle-based non-persisted extensions
- event-based (e.g. `plantedDate`)
- NOT persisted
- NOT part of the main plan system
- narrow, explicitly approved per use-case
- MUST NOT be used as a general or parallel plan engine
- MUST NOT be expanded into a generic relative-plan engine

### Single-source rule
- all calendar / dashboard / plant-detail plans come from `v4.plans[]`
- lifecycle-based extensions MUST NOT be mixed into the rendered plan list as if they were persisted plans
- any new event-based item requires a separate, explicit approval session

---

## Lifecycle-based Plans (Controlled Extension — SECONDARY, OPTIONAL)

This is NOT the primary plan system. This is NOT a general plan generator. This is NOT persisted. This is NOT a parallel plan engine.

It is a narrow, optional extension reserved for a small set of explicitly approved event-based cases. The PRIMARY plan system is the template-based persisted layer defined below and summarised in "Plan System Hierarchy (V1)".

Hard constraints:
- MUST NOT be used as a general plan engine
- MUST NOT be expanded into a generic relative-plan engine
- MUST NOT be persisted into `v4.plans[]`
- MUST NOT be mixed with persisted plans in the rendered plan list
- MUST NOT be introduced beyond its explicitly approved use cases without a separate approval session

Purpose (narrow):
- support critical plant-development actions tied to events (e.g. planting) that cannot be expressed as calendar-window plans

Characteristics:
- generated from existing data (e.g. `plantedDate`)
- NOT persisted as standalone plans
- NOT a generic engine
- limited to explicitly defined use cases

Approved use cases (closed set):
- formative pruning (year 1)
  - trigger: `plantedDate` + ~60 days
  - window: ~30 days
  - condition: user confirms shoot length (10–20 cm)

### Practical guidance

When shoots reach 10–20 cm:

- keep 3–4 strongest branches
- branches should be:
  - at least ~60–80 cm above ground
  - evenly spaced around the trunk (different directions)
  - with a wide angle (~45°) from the trunk
- remove all other shoots

Goal:
- create a balanced, open crown structure for future growth

Design decision:
- this is a controlled, secondary extension — not a parallel plan layer
- avoids introducing a generic relative-plan engine in V1
- prioritizes correctness and simplicity over flexibility
- the primary plan system remains template-based persisted plans

---

## Template-based Plan Generation (Persisted Layer — PRIMARY plan system, Session 17.6 scope)

This is the PRIMARY plan system in V1.

- all calendar / dashboard / plant-detail plans come from `v4.plans[]`
- generation happens once — on Add Plant — for the newly created plant only
- generated plans are user-owned data (included in export, import, and cloud backup)

Generates plans from catalog-driven orchard templates and PERSISTS them into `v4.plans[]`. Runtime-only generation is forbidden.

Purpose:
- generate per-plant plan items from ORCHARD_PLAN_TEMPLATES_V1.md so the calendar and dashboard surface meaningful orchard work without manual plan creation
- keep generation deterministic and bounded
- ensure generated plans are part of user-owned data (export, import, cloud backup)

Characteristics:
- generated from existing data (`plant.type` → orchard templates)
- PERSISTED into `v4.plans[]` (NOT a runtime-only layer)
- INCLUDED in Session 17 export (they live in `vocnjak_v4`)
- INCLUDED in Session 18 Supabase backup
- deterministic — no heuristics, no fuzzy matching, no AI
- bound to the data in PLANT_CATALOG_V1.md and ORCHARD_PLAN_TEMPLATES_V1.md

Rules:
- each generated plan carries a deterministic id: `gen:plant:<plantId>:<templateKey>`
- stored plans (manual / migrated) and generated plans coexist in `v4.plans[]`
- generation runs immediately after Add Plant for the newly created plant only
- delete plant cascade removes the plant id from every plan's `plantIds`; generated plans for the deleted plant collapse to empty `plantIds` and are removed by the same cascade
- generation MUST NOT mutate or rewrite previously stored manual plans
- generation MUST NOT mutate or rewrite previously generated plans (re-running for an existing plant is a no-op via deterministic id check)
- plan state (upcoming / active / done / missed) is derived per DOMAIN_RULES 5.4 identically for stored and generated plans
- plants without `plant.type` produce zero generated plans (legacy-safe)

Design decision:
- generated plans are user-owned data, not derived state
- they live in `v4.plans[]` so backup / export / sync surfaces are complete and consistent
- the deterministic id prefix `gen:plant:` makes generated plans identifiable for cascade and dedup
- runtime-only generation was rejected because it would split user-visible data between persisted and ephemeral layers

---

## Architectural Constraints

- single-file app (index.html)
- no frameworks
- localStorage persistence
- no backend dependency (V1)
- no over-engineering

---

## Plant Catalog (Runtime Input Layer — Session 17.5)

Plants are selected from a predefined catalog at input time. Catalog selection is mandatory for new plants from Session 17.5 onward.

### Catalog defines

- plant type (closed set: `apple`, `pear`, `plum`, `cherry`, `peach`, `nectarine`, `apricot`, `olive`, `fig`, `citrus`)
- optional varieties
- optional fallback timing groups (early / mid / late)
- optional citrus subtypes (lemon / orange / mandarin)
- future: rootstocks, climate zones, bloomWindow narrowing

### Rules

- `plant.type` IS a stored runtime key (approved schema extension — Session 17.4)
- `plant.type` is the only canonical identity for plan-template selection
- `plant.type` is the minimum schema expansion required to make orchard guidance work — no other plant fields are added
- `plant.name` and `plant.variety` continue to exist alongside `plant.type` as user-facing labels
- catalog values populate `plant.type` (canonical) and may populate `plant.name` and `plant.variety` (display)
- `plant.type` MUST NEVER be reverse-derived from `name` or any other field
- legacy plants without `plant.type` remain valid; they receive no auto-migration

### Why only `plant.type` is stored

- minimal schema impact: one new required field instead of full catalog persistence
- catalog reference data (varieties, harvestWindow, etc.) stays external in PLANT_CATALOG_V1.md and is recomputable
- `plant.type` is the only field the runtime needs to deterministically pick orchard templates and surface guidance

### Purpose

- consistent naming
- deterministic plan-template selection (Session 17.6)
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
- plant selection MUST use the catalog (PLANT_CATALOG_V1.md) — selection writes the canonical stored `plant.type` (Session 17.4); free-text plant type is FORBIDDEN
- no new plant fields beyond the approved `plant.type` may be introduced without explicit approval

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