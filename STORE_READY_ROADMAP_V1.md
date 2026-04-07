# VOCNJAK — STORE READINESS ROADMAP V1

## PURPOSE

Prepare the app for real users and future App Store / Google Play release.

This phase is NOT about polish.
This phase is about:
- correct data inputs
- meaningful recommendations
- product value
- monetization readiness

---

## CORE PRINCIPLE

The app must evolve from:
→ "activity logger"

to:
→ "orchard assistant that tells user what to do"

---

# 🟣 PHASE 6 — STORE READINESS

---

## 🔹 Session 17 — FIRST-RUN ONBOARDING

### GOAL
Collect minimum data required for meaningful recommendations.

### SCOPE

Add onboarding flow on first app launch.

User inputs:
- Language selection (HR default, EN optional)
- Plants:
  - type (required)
  - variety (optional)
  - planting date (optional)

### RULES

- Keep it simple (no wizard complexity)
- Save data ONLY into existing V1-compatible structure
- MUST NOT introduce new data model fields
- Location is OUT OF SCOPE for this session

### DONE CRITERIA

- First launch → onboarding shown
- After completion → app usable
- Data persists correctly

---

## 🔹 Session 18 — MULTI-LANGUAGE (BASIC)

### GOAL
Prepare app for multiple languages.

### SCOPE

- Introduce simple translation object (dictionary)
- Replace hardcoded strings with keys
- Languages:
  - HR (default)
  - EN (initial)

### RULES

- No external libraries
- Keep translation system simple (object-based)

### DONE

- App can switch HR ↔ EN
- All main UI texts covered

---

## 🔹 Session 19 — RECOMMENDATION ENGINE (V1)

### GOAL
App starts suggesting what user should do.

### SCOPE

- Based ONLY on:
  - plant type
  - current month
  - existing activities (history)

Examples:
- “Vrijeme za bakar”
- “Provjeri lisne uši”
- “Zalij biljke (ljeto)”

### RULES

- No AI, no external API
- Hardcoded knowledge rules
- MUST NOT introduce new derived fields (e.g. growth stage)
- MUST use only data available in V1 model

### DONE

- User sees suggestions
- Suggestions change by month

---

## 🔹 Session 20 — TOOLS & EQUIPMENT LAYER

### GOAL
Help users discover what they need (huge value)

### SCOPE

- Map activities → recommended tools
- Examples:
  - prskanje → prskalica
  - zaštita → feromonske klopke
  - rezidba → škare

### RULES

- No ecommerce
- No external links required

### DONE

- Activity shows “recommended tools”
- User learns what to use

---

## 🔹 Session 21 — PLAN INTELLIGENCE

### GOAL
Connect plans + recommendations + activities.

### SCOPE

- Suggest actions from plans
- Highlight:
  - upcoming
  - active
  - missed

### RULES

- Plan state MUST be derived (no stored state)
- MUST use existing plan + activity logic from V1
- MUST NOT introduce new plan fields
- MUST NOT use "skipped"

### DONE

- User sees what to do next
- Calendar + plans feel connected

---

## 🔹 Session 22 — SUBSCRIPTION MODEL (DESIGN ONLY)

### GOAL
Define monetization clearly BEFORE implementation

### OPTIONS

#### Option A — Freemium
- Free:
  - basic tracking
- Paid:
  - recommendations
  - smart alerts
  - tools guidance

#### Option B — Premium only
- full app behind paywall

#### Option C — Hybrid
- free limited plants
- paid unlimited + intelligence

### RECOMMENDATION

Start with:
→ Freemium + unlock “smart assistant”

### DONE

- Clear decision:
  - what is free
  - what is paid

---

## 🔹 Session 23 — PAYWALL UX

### GOAL
Introduce upgrade moment

### SCOPE

- Simple paywall screen
- Trigger:
  - when accessing recommendations

### DONE

- User understands value of upgrade

---

## 🔹 Session 24 — STORE PREPARATION (TECH)

### GOAL
Prepare for mobile distribution

### SCOPE

- App metadata
- Icons
- Basic privacy text
- Decide:
  - keep PWA + wrapper
  - or future mobile app

### DONE

- Ready for next phase (publishing)

---

# 🚨 IMPORTANT NOTES

- Do NOT implement payments yet
- Do NOT overbuild onboarding
- Do NOT add backend yet

---

# 🎯 FINAL RESULT OF THIS PHASE

User:
- installs app
- inputs basic data
- gets clear recommendations
- understands what to do
- sees value → ready for subscription

---

END