# UX IMPROVEMENTS

## Core principle
App must be fast and usable on iPhone with one hand.
One core question drives every screen: "Do I need to do something now?"

---

## Mental model
Seasonal orchard assistant — not a task manager.

Tracks what happened.
Surfaces what's relevant now.
Reminds about open work windows.

Does not schedule.
Does not alert in real-time.

---

## Dashboard

**Goal:** Answer "Is there anything open right now?"

**Structure:**
1. Current month label
2. Active plan windows (plans whose window includes current date)
3. Recent activity — minimal: date + type only
4. Young plant notice — one static line if relevant

**Rules:**
- "Nothing to do" is a valid and explicit state
- Never show blank screen
- No long lists
- No weekly grouping
- Do not silently hide items (dataset is expected to stay small)
- Spray recommendation space is reserved but empty until weather widget is restored

---

## Plan states (V1)

Derived at render time using current date:

| State   | Condition |
|---------|----------|
| upcoming | current date < window start |
| active   | current date within window |
| done     | window passed AND matching activity exists |
| missed   | window passed AND no matching activity |

**Matching activity:**
- same activityType (exact match)
- date within plan window
- plant overlap OR appliesToAll = true

No additional states in V1.

---

## Add Activity

Must be the fastest flow in the app.

- Minimal steps
- Multi-select plants
- Quick save
- Default date: today

---

## Plant Detail

- Clear status
- Activity history (newest first)
- No noise

---

## Calendar

- Planned windows: visual marker
- Done activities: visual marker
- Missed windows: visual marker (derived, not manual)
- Easy monthly overview

---

## Context-aware filtering (young trees)

Trees in establishment phase should not see plans relevant only to mature trees.

**Definition (V1):**
- plantedDate within last 12 months OR status === "forming"

**Rules:**
- Hide fruiting-context plans (harvest, traps, nets)
- Never hide care plans (watering, pruning, spraying, fertilizing, observation)
- When in doubt → show the plan

---

## Contextual prompts

Maximum three types in V1:

1. Active plan window with no logged activity
2. Young plant notice (single static line)
3. Watering gap

**Watering gap rule:**
- no watering activity in last 14 days
- only during growing season (months 4–9)

Any new prompt type requires explicit decision.

---

## Equipment / tools

- Static contextual hints only
- No inventory
- No new entity
- No separate screen

---

## Anti-patterns

- Task manager UX
- Weekly planning views
- Long lists
- Hidden actions
- Desktop-style UI
- Decorative UI without function
- Prompts that create anxiety
- Blank states that look like errors