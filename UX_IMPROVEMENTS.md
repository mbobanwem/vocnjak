# UX IMPROVEMENTS V1 (FINAL)

---

## 1. Core Principle

App must be fast, simple, and usable on iPhone with one hand.

Every screen answers one question:

> "Do I need to do something now?"

---

## 2. Mental Model

Seasonal orchard assistant — not a task manager.

- Tracks what happened (activities)
- Understands seasonal timing (plans)
- Surfaces what is relevant now
- Respects real-world constraints (weather, delays, biology)

Does NOT:
- schedule tasks
- create artificial deadlines
- spam notifications
- behave like a todo app

---

## 3. Onboarding (MANDATORY)

User MUST complete onboarding before using the app.

### Minimum required:

1. Select region (coarse)
   - Continental
   - Mediterranean
   - Alpine / Cold

2. Fine tuning (optional but recommended)
   - slider: -14 to +14 days seasonal shift

3. Add at least 1 plant
   - if user skips → create placeholder plant

---

## 4. Plant Catalog (CONTROLLED INPUT)

User does NOT type plant names.

### Selection flow:

1. Choose plant type:
   - Apple
   - Pear
   - Plum
   - Cherry
   - Peach
   - Nectarine
   - Apricot
   - Olive
   - Fig
   - Citrus (group)
     - Lemon
     - Orange
     - Mandarin

2. Choose variety (if known)

3. OR fallback:
   - Early
   - Mid
   - Late

Each plant must have:
- type
- timing profile (derived from variety OR fallback)

---

## 5. Plan Evaluation Engine (CORE)

Plans are evaluated dynamically at render time.

### Plan states:

| State     | Condition |
|----------|----------|
| upcoming | before window |
| active   | inside window |
| done     | matched activity exists |
| missed   | window passed + no match |

---

### Matching rules (aligned with DOMAIN 5.5):

A plan is matched if:

- activity.type === plan.activityType (exact match only)
- activity date is within:
  - plan window OR
  - allowed tolerance window (see 5.6)
- AND:
  - appliesToAll = true
  OR
  - plant overlap exists

Rules:
- one match is enough
- duplicates allowed
- no fuzzy matching

---

### Tolerance window (DOMAIN 5.6)

Matching is allowed slightly outside plan window.

Used when:
- user delayed activity
- weather prevented execution

---

### Delay handling (CRITICAL RULE)

If an activity is completed late:

- DO NOT shift entire plan sequence
- ONLY adjust next interval

Example:

- Oil spray delayed → Feb 12
- Copper normally 15 days after
- Next window becomes ~10 days (compressed)

### Sequence dependency (CRITICAL)

Some plans depend on previous activities.

Example sequence:
- oil spray → copper spray → later treatments

Rules:

- next plan window is calculated based on:
  - previous matching activity date (if exists)
  - NOT only fixed calendar date

- if previous activity is missing:
  - fallback to default plan window

- if previous activity is delayed:
  - next window is recalculated (see Delay handling)

Goal:
- reflect real-world spraying sequences
- avoid rigid calendar behavior

---

## 6. Context Rules

---

### 6.1 Young plants

Definition:

- planted within last 12 months
OR
- status === "forming"

Rules:

Hide:
- harvest
- fruit thinning
- traps
- nets

Always show:
- watering
- pruning
- spraying
- fertilizing
- observation

---

### 6.2 Region + Fine tuning

Final timing =

plan base date  
+ region offset  
+ user fine tuning

---

### 6.3 Safety layer

#### Bee warning

Show warning if:
- activity = spraying
- plant is flowering
- safety warnings do NOT block activity logging

UI:
"⚠️ Do not spray during flowering (bees active)"

---

#### Pre-harvest restriction (Karenca)

If activity too close to harvest:

UI:
"⚠️ Too close to harvest — check product waiting period"

---

## 7. Dashboard (PRIORITIZED VIEW)

Goal:

> "What matters right now?"

---

### Order of elements:

1. Active plan windows (highest priority)
2. Warnings (bee / karenca)
3. Context prompts
4. Recent activity (minimal)

---

### Rules:

- max 5 visible items
- no scrolling required
- "Nothing to do" is valid state
- never show empty screen

---

## 8. Calendar

Monthly overview combining:

- plans (windows)
- activities

Priority on same day:
- activities override plans visually

---

### Visual markers:

- planned → yellow
- done → green
- missed → red/gray

---

### Click behavior:

On day click:

Show:

1. Activities (real actions)
2. Plans (context)

---

### Rules:

- do NOT hide data
- do NOT group by week
- keep simple

---

## 9. Add Activity (FASTEST FLOW)

Must be the fastest interaction.

---

### Defaults:

- date = today
- last used type (optional future)

---

### Input:

- type (required)
- plant(s) (multi-select)
- date
- optional:
  - product
  - notes

---

### Rules:

- no complex forms
- no validation friction
- instant save

---

## 10. Prompt System (LIMITED)

Max 3 prompt types:

---

### 1. Active plan without activity

Trigger:
- plan is active
- no matching activity

---

### 2. Watering gap

Trigger:
- no watering in last 14 days
- months 4–9 only

---

### 3. Young plant notice

Static info

---

### Rules:

- max 3 prompts at once
- no spam
- no anxiety UX

---

## 11. Equipment / Tools

- static hints only
- no inventory
- no tracking

Example:
"For cherry harvest, consider bird net"

---

## 12. Anti-patterns

NEVER:

- task manager UX
- weekly planning
- long lists
- hidden logic
- forced workflows
- desktop UI
- notification spam
- artificial urgency

---

## FINAL PRINCIPLE

The app must feel like:

> "A calm expert standing next to you in the orchard"

Not:

> "A system telling you what to do"