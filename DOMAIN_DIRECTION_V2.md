# VOCNJAK — DOMAIN DIRECTION V2

## PURPOSE

Preserve good future domain ideas without changing current V1 implementation.

This file is for:
- future product direction
- future domain expansion
- future onboarding / recommendation / monetization logic

It is NOT a source of truth for current implementation.

This file defines future direction but must NOT influence V1 execution.

---

## IMPORTANT

This file does NOT change V1 data model.

It must NOT be used for current implementation unless explicitly approved.

If conflict exists:
- MIGRATION_PLAN_V1.md wins for V1
- DOMAIN_RULES_V1.md wins for current behavior

---

# 1. FUTURE PRODUCT DIRECTION

The app should evolve from:
- plant/activity logger

to:
- orchard assistant that understands context and saves user time

Future value should come from:
- what to do now
- what is overdue
- what tools are needed
- what is relevant for this plant, in this season, in this location

---

# 1.1 CORE DOMAIN PRINCIPLES

The system is based on the following principles:

- activities are the only source of truth for real-world events
- plans are domain knowledge, not user-managed data
- plan state is always derived from activities
- no plan state is stored
- no manual override of plan state exists

All higher-level logic (calendar, dashboard, recommendations)
must derive from activities.

---

# 2. FUTURE PLANT DOMAIN EXPANSION

Possible future plant fields / derived properties:

- `type`
  - normalized orchard category
  - e.g. jabuka, kruška, trešnja, šljiva, nektarina

- `location`
  - garden / area / region / climate context

- `stage`
  - establishment
  - forming
  - productive
  - mature

- `ageYears`
  - derived from planted date

- `hasIrrigation`
  - whether plant is covered by irrigation

- `isFruitingRelevant`
  - derived helper, not necessarily stored

Rule:
- none of these are V1 requirements
- add only when explicitly approved

---

# 3. FUTURE ONBOARDING DIRECTION

Future first-run onboarding should capture minimum useful context:

- language
- location
- plant types
- variety
- planted date
- whether irrigation exists

Principles:
- no long wizard
- no setup fatigue
- only collect what improves recommendations

Goal:
- app should know enough to recommend useful actions without being generic

---

# 4. FUTURE RECOMMENDATION ENGINE

Recommendation engine should become rule-based orchard intelligence.

Potential inputs:
- plant type
- planted date / age
- growth stage
- current month
- weather context
- logged activities
- active plans

Potential outputs:
- what to do now
- what is overdue
- what can wait
- what is irrelevant for this plant

Principles:
- deterministic, rule-based logic only (no heuristics)
- explainable to user
- no black-box behavior

---

# 5. FUTURE TOOLS & EQUIPMENT LAYER

A strong product differentiator is saving user research time.

Future contextual guidance may include:
- for spraying → prskalica, protective equipment
- for protection → feromonske klopke, sticky traps, nets
- for pruning → škare, pile, sealant if needed
- for irrigation → drip hints, watering cadence

Principles:
- contextual, not inventory-heavy
- education first
- no ecommerce dependency required
- no separate complex tools entity in early versions

---

# 6. FUTURE LOCATION / CLIMATE LAYER

Location can become highly valuable later.

Possible future uses:
- region-adjusted spray windows
- watering suggestions by climate
- orchard timing adjusted to local season
- freeze / rain / wind awareness

Principle:
- location should improve recommendation quality
- location should not overcomplicate onboarding

---

# 7. FUTURE PLAN INTELLIGENCE

Plans should evolve from static windows to contextual work guidance.

Future plan intelligence (beyond V1, explicit approval required) may include:
- auto-suggested plans by plant type
- suppression of irrelevant plans for young plants
- escalation when plan becomes overdue
- linking recommendations to plan windows
- calendar + dashboard + plant detail all using same plan state logic

Goal:
- user should feel the app is helping, not just recording

---

# 8. FUTURE MULTI-LANGUAGE DIRECTION

Target future languages may include:
- HR
- EN
- DE
- IT
- FR
- ES

Principles:
- dictionary-based first
- no framework dependency
- internal stored values stay stable
- only UI copy is translated

Rule:
- data model should remain language-independent

---

# 9. FUTURE SUBSCRIPTION DIRECTION

Subscription makes sense only when the app becomes a real assistant.

## What should likely remain free
- plants
- activities
- basic dashboard
- basic calendar
- basic history

## What may become paid
- recommendations
- weekly “what to do now”
- weather-aware orchard guidance
- tools / equipment guidance
- advanced planning assistance
- contextual reminders

## Most likely model
Freemium:
- logging is free
- intelligence is paid

Principle:
- user must experience value before paywall

---

# 10. FUTURE PAYWALL PRINCIPLE

Paywall should appear at value moment, not at install.

Best future trigger:
- when user asks for assistant / recommendation / intelligence feature

Bad trigger:
- blocking basic logging before user understands value

---

# 11. FUTURE STORE DIRECTION

Before App Store / Google Play release, the product should have:

- clean onboarding
- multilingual basics
- meaningful recommendation layer
- clear subscription boundary
- privacy / billing / store readiness

Technical direction can later branch into:
- web core + wrapper
- modularized app shell
- future mobile-specific shell

This decision should happen only after core product logic is proven.

---

# 12. FUTURE NON-GOALS (UNTIL EXPLICITLY APPROVED)

Do NOT automatically evolve toward:

- complex farm ERP
- generic gardening app
- inventory-heavy system
- black-box AI assistant
- over-abstracted architecture

Keep future direction orchard-first and practical.

---

# FINAL PRINCIPLE

Future expansion should increase:
- clarity
- usefulness
- time saved for the user

Not:
- complexity
- setup burden
- technical overhead

---

## Structured Domain Knowledge (Future)

The system may later include structured "practical guidance" for key orchard activities.

Purpose:
- provide users with clear, actionable context (not just what to do, but how and why)
- improve decision-making without introducing a rule engine

Constraints:
- informational only (no automatic decisions)
- not part of core logic
- introduced only through explicit sessions

Potential areas:

- pheromone traps → interpretation of catch counts (normal vs alert vs treatment)
- spraying → when and why to spray (high-level guidance)
- watering → general thresholds (young vs established trees)
- pruning → extended structural guidance beyond initial lifecycle rules

Design intent:
- simple, structured, domain-accurate content
- no generic filler
- no hidden logic

---

## Weather Location Strategy (V2)

The system may later evolve weather context from a fixed-coordinate model to an orchard-location-aware model.

### Current limitation

- weather is tied to fixed coordinates (Zagreb)
- not suitable for users outside that region
- no orchard-based location awareness yet

### V2 direction

- weather must become orchard-location-aware
- location must NOT be hardcoded
- weather must be based on the orchard / garden location, not the user's current device location

Possible approaches (do NOT decide yet):

- orchard location set during onboarding
- current GPS used only as an optional initial suggestion
- manual confirmation / correction by the user
- orchard location stored as the long-term source of truth

### Constraints

- current GPS must NOT become the runtime source of weather by default
- user travel must NOT change orchard weather context
- must NOT block V1
- must NOT be implemented before V1 completion
- must remain simple (no over-engineering)
- must not introduce heavy configuration UX

### Note

- Session 16 intentionally uses hardcoded Zagreb
- this is a temporary V1 simplification