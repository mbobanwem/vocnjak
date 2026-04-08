# VOCNJAK — V2 PROTECTION ENGINE

## PURPOSE

Introduce a context-aware decision layer on top of V1.

Goal:
- move from logging to guidance
- provide situational awareness
- improve real-world outcomes
- increase user trust and retention

---

## CURRENT LIMITATION

V1 system:
- knows plants
- knows activities
- knows plans
- does NOT know whether the user inspected the plant recently
- does NOT know whether the user noticed a potential issue
- does NOT guide the user what to check in the field

Result:
- app can still feel like a log tool
- user may follow plans and still miss real problems
- user may not know what to inspect or when

---

## USER REALITY

Users do NOT think in:
- plan windows
- activity matching
- derived state

Users think in:
- "What should I check now?"
- "Is this normal?"
- "Do I need to react?"
- "What kind of action is relevant?"

---

## STRATEGIC SHIFT

V2 is NOT:
- a smarter calendar
- an automated spraying system
- a chemistry engine
- a legal authority

V2 IS:
- a deterministic monitoring + recommendation layer

---

## CORE PRINCIPLE

The app does NOT prescribe.

The app provides:
- context
- direction
- awareness

The user decides.

---

## ARCHITECTURE RULES

V2 is:

- overlay only
- deterministic
- backward compatible

Uses ONLY:
- plants
- activities
- plans
- existing fields in current storage objects

No new stored entities.
No schema rewrite.

---

## APPROVED EXTENSION

V2 introduces one new allowed activity type:

- monitoring

Important:
- activity structure remains unchanged
- this is an approved extension of the allowed activity type set
- no extra activity fields are introduced

---

## SYSTEM COMPONENTS

V2 consists of:

1. Monitoring input
2. Monitoring KPI
3. Trigger engine
4. Recommendation UI

---

## RECOMMENDATION OBJECT

Recommendation output follows this structure:

- kind: pest | disease | monitoring | plan
- urgency: high | medium | low
- actionCategory: inspect | insecticide | fungicide | monitoring | wait
- confidence: strong | moderate | weak
- message: string
- productHintLevel: none | category | example_only

---

## SAFETY RULES

V2 MUST NOT:

- recommend exact products as required
- provide dosage
- provide mixing instructions
- claim legal suitability
- claim certainty it does not have
- replace user judgment

---

# SESSION V2.1 — MONITORING INPUT

## Goal

Enable structured user observations.

---

## Implementation

Add new allowed activity type:

- monitoring

When:

- activity.type === monitoring

Show preset monitoring options:

- monitoring:aphids_none
- monitoring:aphids_low
- monitoring:aphids_medium
- monitoring:aphids_high
- monitoring:trap_0
- monitoring:trap_1_5
- monitoring:trap_6_20
- monitoring:trap_20_plus
- monitoring:fungus_none
- monitoring:fungus_single_leaf
- monitoring:fungus_multiple_leaves
- monitoring:unknown

Store selected value in:

- notes

Rules:
- no new monitoring entity
- no structured monitoring object in storage
- notes remains plain text storage
- trigger logic MUST use only canonical preset values
- optional user free text may be added later, but MUST NOT drive engine logic

---

## Expected result

User can log:
- what they checked
- what level they observed
- whether they are unsure

Without needing to know exact diagnosis.

---

# SESSION V2.2 — MONITORING KPI (UX LAYER)

## Goal

Tell the user:
- what to check
- where to look
- what is OK
- what is suspicious
- what likely needs action

---

## KPI CARD STRUCTURE

Each KPI card MUST include:

1. What to check
2. Where to look
3. OK / healthy reference
4. Warning / suspicious reference
5. Action threshold
6. Input options
7. Why it matters
8. What to buy / prepare (category level only)

---

## KPI — APHIDS

### What to check
- young shoots
- underside of young leaves

### Where to look
- top 10–15 cm of soft new growth
- curled or sticky leaves

### OK / healthy
- 0–2 insects per shoot
- no grouping
- leaves flat
- no sticky residue

### Suspicious
- 3–10 insects on one shoot
- small groups appear
- mild curling

### Action threshold
- 10+ insects on one shoot
- multiple shoots affected
- visible leaf curling
- sticky residue present

### Definition
- "colony" = group of about 10 or more insects concentrated on one location

### Input options
- none
- low (1–2)
- medium (3–10)
- high (10+)
- not sure

### Why it matters
- aphids weaken new growth
- heavy presence can deform leaves and shoots
- early detection prevents escalation

### What to buy / prepare
- hand lens (optional)
- basic contact treatment category
- soap-based or oil-based solution category

Important:
- examples only
- not a mandatory product recommendation

---

## KPI — PHEROMONE TRAP

### What to check
- number of insects caught since last check

### Where to look
- trap insert / sticky surface
- compare with previous check

### OK / healthy
- 0–5 catches per week

### Warning
- 6–20 catches
- or visible increase from previous week

### Action threshold
- 20+ catches
- or strong week-to-week increase

### Input options
- 0
- 1–5
- 6–20
- 20+
- not sure

### Why it matters
- trap helps detect pest flight early
- helps time inspection and possible protection measures
- may reduce unnecessary spraying

### What to buy / prepare
- pheromone trap for the specific pest
- sticky inserts / replacement boards
- pheromone lure for the correct pest

Important:
- lure must match the target pest
- this is category guidance, not a mandatory shopping instruction

---

## KPI — FUNGAL RISK

### What to check
- leaves after rain, humidity, or prolonged wet period

### Where to look
- leaf surface
- underside of leaves
- clusters of leaves with visible change

### OK / healthy
- no spots
- no discoloration
- clean, normal leaf surface

### Suspicious
- isolated spots
- single leaf affected
- mild discoloration

### Action threshold
- multiple leaves affected
- visible spread
- repeated suspicious observations after wet weather

### Input options
- none
- single leaf
- multiple leaves
- not sure

### Why it matters
- prolonged moisture can increase disease pressure
- early observation is more useful than late reaction

### What to buy / prepare
- protective fungicide category
- basic inspection routine after wet periods

Important:
- examples only
- user must still check local registration and crop stage

---

## EDUCATION LAYER

Each KPI card should include simple educational context:

- what this problem is
- why users check it
- what “normal” looks like
- what “watch closely” looks like
- what “likely action” looks like

Rules:
- explain in plain language
- avoid expert-only vocabulary unless immediately explained
- quantify whenever possible
- do not rely on user already knowing the pest or disease

---

## OUTPUT PRINCIPLE

The app should not ask:

- "Do you know whether this is aphids?"

The app should ask:

- "How many small insects do you see on the young shoot?"
- "How many catches are in the trap this week?"
- "How many leaves show suspicious spots?"

User gives signal.
App interprets signal.

---

# SESSION V2.3 — TRIGGER ENGINE

## Goal

Convert monitoring + activity + plan context into deterministic recommendations.

---

## Rule group — Aphids

### Rule A1 — low / first signal
IF:
- recent monitoring includes monitoring:aphids_low
- AND no spraying exists in last 5 days

THEN:
- kind: pest
- urgency: medium
- actionCategory: inspect
- confidence: moderate
- message: "Low aphid presence detected — inspect again soon and watch young shoots."
- productHintLevel: none

### Rule A2 — medium / high signal
IF:
- recent monitoring includes monitoring:aphids_medium OR monitoring:aphids_high
- AND no spraying exists in last 5 days

THEN:
- kind: pest
- urgency: high
- actionCategory: insecticide
- confidence: moderate
- message: "Relevant aphid presence detected — consider treatment if repeated monitoring confirms active infestation."
- productHintLevel: category

---

## Rule group — Trap

### Rule T1 — warning level
IF:
- recent monitoring includes monitoring:trap_6_20

THEN:
- kind: monitoring
- urgency: medium
- actionCategory: inspect
- confidence: moderate
- message: "Trap catch is increasing — inspect plants and continue close monitoring."
- productHintLevel: none

### Rule T2 — action level
IF:
- recent monitoring includes monitoring:trap_20_plus

THEN:
- kind: pest
- urgency: high
- actionCategory: insecticide
- confidence: moderate
- message: "High trap catch detected — consider protective action if plant inspection confirms active risk."
- productHintLevel: category

---

## Rule group — Fungal risk

### Rule F1 — early signal
IF:
- recent monitoring includes monitoring:fungus_single_leaf
- AND no spraying exists in last 7 days

THEN:
- kind: disease
- urgency: medium
- actionCategory: inspect
- confidence: moderate
- message: "Possible fungal risk detected — inspect leaves again after wet weather."
- productHintLevel: none

### Rule F2 — stronger signal
IF:
- recent monitoring includes monitoring:fungus_multiple_leaves
- AND no spraying exists in last 7 days

THEN:
- kind: disease
- urgency: high
- actionCategory: fungicide
- confidence: moderate
- message: "Repeated or broader fungal risk detected — consider protective treatment if crop stage and conditions support it."
- productHintLevel: category

---

## Rule group — No monitoring

### Rule M1
IF:
- no monitoring exists in last 14 days
- AND current month is in 4–9

THEN:
- kind: monitoring
- urgency: medium
- actionCategory: inspect
- confidence: moderate
- message: "No recent monitoring recorded — inspect plants and traps."
- productHintLevel: none

---

## Rule group — Active plan without matching activity

### Rule P1
IF:
- plan state is active
- AND no matching activity exists

THEN:
- kind: plan
- urgency: low
- actionCategory: monitoring
- confidence: moderate
- message: "A planned activity window is currently active."
- productHintLevel: none

---

## PRODUCT HINT RULES

If productHintLevel is not none, show additional text such as:

- "Example categories only: contact insecticide, oil-based treatment, soap-based solution."
- "Check local registration and crop stage before use."

Rules:
- hints are examples only
- hints must not be presented as required action
- hints must not include dosage
- hints must not include mixing instructions
- hints must not claim legal suitability

---

# SESSION V2.4 — RECOMMENDATION UI

## Goal

Display deterministic recommendations in the existing app.

---

## Locations

Add recommendation panel to:

- Dashboard (top)
- Plant detail screen

---

## Rules

- max 3 recommendations
- sort by urgency
- no persistence
- no storage
- no new standalone screen required

---

## Display principles

Each recommendation card should show:

- urgency
- message
- action direction
- optional educational hint
- optional product category examples
- disclaimer when productHintLevel is not none

---

# BONUS — SETUP CHECKLIST (FUTURE)

## Purpose

Create lightweight seasonal preparation guidance.

This is NOT a replacement for plans.
It is a user confidence layer.

---

## Examples

### Spring checklist
- set pheromone trap
- inspect young shoots
- inspect after rainy period
- check first fungal signs

### Summer checklist
- continue trap checks
- inspect fruit damage
- inspect water stress
- inspect leaf health

---

## Rules

- checklist is guidance only
- checklist does not create stored tasks
- checklist is not a todo engine
- checklist may later be shown as seasonal helper cards

---

# FUTURE EXTENSIONS

V2 prepares the foundation for:

- AI image detection
- weather-based triggers
- stronger crop-stage-aware logic
- richer recommendation layer

## Future improvements (post V2.2)

- Show KPI cards only in active season (months 4–9)
- Display last monitoring value next to KPI thresholds
- Add quick action link from KPI → Add monitoring activity

---

# FINAL PRINCIPLE

V2 must remain:

- deterministic
- explainable
- safe

The app guides.

The user decides.