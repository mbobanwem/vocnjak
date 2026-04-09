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

## AI UX ENTRY POINT (V1)

AI must be accessible in a way that feels natural and contextual.

### Primary entry point

Location:
- plant detail screen

Action:
- button: "Analiziraj fotografiju"

Position:
- below plant header / basic info
- above activity history

Reason:
- user is already thinking about a specific plant
- no need for global AI entry point

---

### Secondary entry point (optional, later)

Location:
- monitoring / recommendations area

Use case:
- user sees issue → wants to confirm via photo

NOT required for initial implementation.

---

## AI UX FLOW (V1)

### Step 1 — trigger

User taps:
- "Analiziraj fotografiju"

---

### Step 2 — input

User can:
- take photo
- upload photo

---

### Step 3 — pre-processing

Before sending:

- resize image
- compress image
- target size:
  - max width: 512–768 px

---

### Step 4 — request

App sends:

- image
- minimal context:
  - plant type (if available)
  - plant age/status (optional)
  - timestamp (optional)

NO:
- full plant history
- no unnecessary payload

---

### Step 5 — response

Backend returns normalized response.

Response format is defined in:
- RESPONSE FORMAT (FUTURE DIRECTION)

---

### Step 6 — UI display

Show:

- short title (label/message)
- confidence indicator
- next step suggestion
- optional explanation

---

### Step 7 — user decision

User can:

- Save as:
  - observation
  - problem

OR:
- ignore result

Rules:
- NOTHING is auto-saved
- user must explicitly confirm

---

## AI RESULT → ACTIVITY MAPPING

AI result must map ONLY to existing activity types:

Allowed:

- observation
- problem

Rules:

- AI must NOT create new activity types
- AI must NOT introduce new fields
- saved activity must follow existing structure

---

## AI BUTTON VISIBILITY RULE

Button must always be visible on plant detail.

No conditions:
- no plan dependency
- no activity dependency
- no weather dependency

Reason:
- user-driven interaction

---

## AI ERROR HANDLING

If AI fails:

Show simple message:

- "Analiza nije uspjela. Pokušaj ponovno."

Rules:

- no technical errors shown
- no stack traces
- no provider messages

---

## AI LOADING STATE

During analysis:

- show loading indicator
- disable repeated taps

Optional:

- "Analiziram fotografiju..."

---

## AI RATE LIMIT UX

If limit reached:

Show:

- "Dosegnut je limit analiza za danas."

Optional (future):
- suggest upgrade

---

## AI SESSION RULES

- one request at a time
- no parallel analysis
- no background retries

---

## AI DATA FLOW (SIMPLIFIED)

Client:
- prepares image
- sends request

Backend:
- receives image
- calls AI provider
- normalizes response
- returns structured result

Client:
- renders result
- waits for user action

---

## AI STORAGE RULE

Default:
- do NOT store images
- do NOT store AI results permanently

If user saves result:
- only activity is stored
- NOT raw AI response

---

## AI VERSIONING (FUTURE SAFE)

AI behavior may change over time.

Rules:

- app must not depend on exact phrasing
- app must depend only on structured fields:
  - kind
  - label
  - confidence
  - nextAction

---

## AI NON-GOALS (IMPORTANT)

Do NOT build:

- chat interface
- conversational AI
- long explanations
- treatment engine
- dosage calculator
- product recommendations

AI is:
- quick assist
- not full advisory system

---

## FINAL UX PRINCIPLE

AI should feel like:

- quick help
- low friction
- safe suggestion

NOT:

- complex tool
- decision authority
- mandatory step

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

## AI BACKEND CONTRACT (V1 — FUTURE)

This section defines how the client communicates with the AI backend.

This is NOT for immediate implementation.
This defines expected structure to avoid future ambiguity.

---

### Endpoint

POST /ai/analyze-image

---

### Request (client → backend)

Payload:

- image: base64 or binary (compressed)
- plantId: optional
- plantType: optional
- timestamp: optional

Rules:

- image must be resized before sending (512–768px max width)
- no full-resolution images
- no full plant history sent

---

### Response (backend → client)

Must follow:

- RESPONSE FORMAT (FUTURE DIRECTION)

Rules:

- backend must normalize provider output
- client must never depend on raw provider output

---

### Error response

If analysis fails:

Return:

{
  "error": true
}

Client behavior:

- show generic message:
  - "Analiza nije uspjela. Pokušaj ponovno."

---

### Rate limiting (expected)

Backend should support:

- per-user daily limit
- per-user monthly limit
- request throttling

Client behavior:

- show:
  - "Dosegnut je limit analiza za danas."

---

### Idempotency (future)

Optional:

- same image → same result (within short time window)

Goal:

- avoid duplicate cost

---

### Security

- API keys must be stored only on backend
- client must not access provider directly

---

### Logging (future)

Optional:

- log requests count
- do NOT log raw images by default

---

## FINAL NOTE

AI backend must remain:

- replaceable
- minimal
- controlled

Client must remain:

- simple
- deterministic-first
- not dependent on AI