# VOCNJAK — DOMAIN DIRECTION V2

## PURPOSE

Preserve good future domain ideas without changing current V1 implementation.

This file is for:
- future product direction
- future domain expansion
- future onboarding / recommendation / monetization logic

It is NOT a source of truth for current implementation.

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
- deterministic before AI
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

Future plan intelligence may include:
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