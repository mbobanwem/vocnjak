# AI_STRATEGY_V1.md

## STATUS

Planned only.  
Not implemented.

This document defines the future AI direction for Vocnjak App.

It is a strategy document:
- not a current execution file
- not a source of truth for V1 behavior
- not a trigger for immediate implementation

If conflict exists:
- MIGRATION_PLAN_V1.md wins for data model
- EXECUTION_ROADMAP_V1.md wins for active implementation order
- DOMAIN_RULES_V1.md wins for current deterministic behavior

---

## PURPOSE

Define a safe, practical, and monetizable direction for future AI features.

Goal:
- help users identify visible plant issues
- reduce uncertainty
- increase user trust and perceived value
- support future premium assistant features

AI must remain:
- optional
- controlled
- user-friendly
- non-blocking

The app must work fully without AI.

---

## CORE PRINCIPLES

### 1. AI is an assistant, not the system

AI may help the user:
- interpret a photo
- identify possible issue categories
- suggest next inspection/action direction

AI must NOT:
- replace deterministic core app logic
- silently modify plans
- silently create activities
- override user decisions
- act as legal or agronomic authority

---

### 2. AI must be optional

The product must remain useful without AI.

Core value must still come from:
- plants
- activities
- plans
- monitoring
- deterministic recommendations

AI is an added layer, not a dependency.

---

### 3. AI must be cost-controlled

AI cannot be an unlimited open-cost feature.

The system must:
- limit usage
- reduce unnecessary requests
- use image optimization
- avoid duplicate analysis
- reserve advanced usage for premium paths later

---

### 4. AI must be simple for users

Users must NOT need to:
- create API keys
- understand model names
- connect their own OpenAI / Claude account
- manage technical billing details

The UX must be:
- take photo
- ask question
- receive guided result

---

## ARCHITECTURE DECISION

### Chosen future direction

Use:
- app-owned AI integration

Do NOT use:
- user-provided API keys
- bring-your-own OpenAI account
- bring-your-own Claude account

Reason:
- orchard users are not technical users
- API key setup is poor UX
- support burden becomes too high
- consumer product should hide technical setup

---

## FUTURE AI UX FLOW

### Basic user flow

1. user opens plant detail or monitoring area
2. user taps:
   - "Analiziraj fotografiju"
3. user captures or uploads a photo
4. app resizes/compresses image
5. app sends image + minimal context to AI backend
6. backend returns structured result
7. app shows:
   - possible issue
   - confidence / uncertainty
   - suggested next step
8. user may optionally:
   - save result as activity
   - save as observation
   - ignore result

---

## AI OUTPUT ROLE

AI should return:
- possible issue category
- uncertainty when relevant
- suggested next step
- optional explanation in plain language

Examples:
- "Possible aphids"
- "Possible fungal symptom"
- "Not enough confidence — inspect again"

AI should NOT return:
- guaranteed diagnosis
- exact dosage
- exact tank-mix instructions
- legal suitability claims
- unsafe certainty

---

## COST CONTROL MODEL

### AI must be usage-limited

Possible future model:

Free tier:
- limited number of analyses per month (e.g. 3–5)

Paid tier:
- higher monthly limit
- or credit-based usage
- or bundled within subscription

---

### Required hard limits

AI layer should support:
- per-user daily limit
- per-user monthly limit
- request throttling
- abuse prevention

---

### Optimization requirements

To reduce cost:
- resize image before upload
- compress image before upload
- avoid sending full-resolution images
- avoid duplicate analysis without user intent

Recommended:
- max width ~512–768 px

---

## BACKEND DIRECTION

AI should be called through app-controlled backend.

Possible options:
- Supabase Edge Functions
- Cloudflare Workers
- simple API proxy

Client should NOT call AI providers directly.

Reason:
- protects secrets
- enables rate limits
- enables monetization control
- allows provider switching

---

## PROVIDER STRATEGY

Provider must remain replaceable.

Possible:
- OpenAI
- Anthropic
- others later

Rule:
- app controls response format
- provider raw output is never used directly

---

## RESPONSE FORMAT (FUTURE DIRECTION)

AI backend must normalize output into app-controlled structure.

Example response shape:

{
  "kind": "pest | disease | unknown",
  "label": "possible_aphids",
  "confidence": "low | medium | high",
  "message": "Possible aphids detected on young shoots.",
  "nextAction": "inspect | monitor | consider_treatment",
  "notes": "Plain-language explanation"
}

Rules:
- app consumes normalized response
- provider output does NOT define UI
- app controls presentation

---

## DATA MODEL INTEGRATION

Initial AI integration should NOT change data model.

Preferred storage:
- existing activity types:
  - observation
  - problem

Rules:
- AI result is NOT auto-saved
- user must confirm save
- no new AI entity initially
- no schema expansion required

---

---

## PRIVACY / IMAGE RETENTION

Default rule:
- original uploaded images should NOT be stored permanently

Preferred flow:
- user uploads image
- image is analyzed
- result is returned
- original image is discarded

If image storage is introduced later:
- it must be explicit
- user must understand what is stored
- retention duration must be defined
- storage must not be enabled silently

---

## AI VS DETERMINISTIC LOGIC

AI is a secondary advisory layer.

Rules:
- AI must NOT override activities
- AI must NOT override plans
- AI must NOT replace deterministic recommendation logic
- deterministic system remains the primary source of truth
- AI may suggest actions, but must NOT change derived state

Principle:
- plans define intent
- activities define reality
- AI adds interpretation, not authority

---

## ABUSE / RETRY CONTROL

AI usage must be protected from abuse and excessive cost.

Rules:
- repeated rapid requests must be rate-limited
- identical or near-identical repeated analysis should be limited or discouraged
- the system should avoid sending duplicate analysis requests without user intent

Recommended behavior:
- prevent multiple submissions within a short time window
- optionally reuse recent results for identical inputs
- guide user toward meaningful, intentional usage

---

## SAFETY RULES

AI must NOT:
- auto-create plans
- auto-complete plans
- auto-trigger spraying
- auto-trigger treatment
- bypass deterministic rules

App must:
- show uncertainty
- require user confirmation
- keep user in control

---

## MONETIZATION DIRECTION

AI is future premium feature.

Likely:
- core app free
- AI usage limited or paid

Reason:
- AI has real cost
- must not block onboarding
- should increase value, not friction

---

## NOT IN SCOPE NOW

Do NOT implement yet:
- AI backend
- billing
- provider integration
- prompt engineering
- moderation
- image storage pipeline
- user accounts for AI

This is strategy only.

---

## IMPLEMENTATION GATE

AI should start only after:
- plans system is stable
- monitoring UX is stable
- deterministic logic is proven
- product has real value

---

## PRODUCT RISKS

### Cost explosion
Mitigation:
- limits
- compression
- throttling

### Over-reliance
Mitigation:
- uncertainty messaging
- user confirmation

### Bad UX
Mitigation:
- no API keys
- simple flow

### Premature build
Mitigation:
- delay AI until core is proven

---

## FUTURE QUESTIONS

To resolve later:
1. best provider for cost/performance
2. free vs paid limits
3. storage of photos (yes/no)
4. where AI lives in UX (plant / monitoring)
5. privacy handling

---

## FINAL PRINCIPLE

AI should make the app:
- more helpful
- more confident
- more valuable

without making it:
- complex
- expensive
- dependent
- unsafe

Core deterministic system remains primary.
AI is a future assistant layer.