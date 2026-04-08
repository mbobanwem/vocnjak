# VOCNJAK — V2 PROTECTION ENGINE

## PURPOSE

Introduce a context-aware decision layer on top of V1.

Goal:
- move from logging → guidance
- provide situational awareness
- improve real-world outcomes
- increase user trust and retention

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
- read-only (uses V1 data)
- deterministic
- backward compatible

Uses ONLY:
- plants
- activities
- plans

No new stored entities.
No schema changes.

---

## APPROVED EXTENSION

V2 introduces a new allowed activity type:

- monitoring

This is an extension of the allowed activity type set.
The activity structure itself remains unchanged.

---

## USER REALITY

Users think in:

- "I see something"
- "Do I need to react?"
- "What should I do now?"

NOT in:
- plans
- timelines
- activity matching

---

## SYSTEM COMPONENTS

V2 consists of:

1. Monitoring input (user observations)
2. Monitoring KPI (what to check)
3. Trigger engine (rules)
4. Recommendations (UI only)

---

## RECOMMENDATION OBJECT
