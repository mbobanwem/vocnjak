# TARGET ARCHITECTURE V1

## Purpose

Define the structural architecture of the app based on the V4 data model and domain rules.

The goal is to:
- keep the system simple
- support orchard-specific workflows
- enable future intelligence without breaking the core model

---

# DATA MODEL

```js
{
  plants: { [id]: Plant },
  activities: Activity[],
  plans: Plan[]
}

Core structure
	•	plants → object keyed by id
	•	activities → global array
	•	plans → predefined array (read-only definitions)

⸻

CORE PRINCIPLES

1. Activities = source of truth

Activities represent real-world actions.
	•	every real action is stored as an activity
	•	activities are never derived
	•	activities drive history, calendar, and execution

⸻

2. Plans = intent (NOT execution)

Plans define what should happen, not what did happen.
	•	plans are read-only
	•	plans are not modified by user actions
	•	plans do NOT store execution state

⸻

3. Execution is derived

Plan execution state is ALWAYS derived from activities.

Derived states include:
	•	upcoming
	•	active
	•	done
	•	missed
	•	late

Rules:
	•	based on plan window (month/day)
	•	based on matching activity (DOMAIN_RULES 5.5)
	•	based on tolerance (DOMAIN_RULES 5.6)

Storage rules:
	•	do NOT persist plan state
	•	do NOT add fields to plans
	•	do NOT mutate plans

Principle:
Plans define intent.
Activities define reality.

⸻

DATA FLOW

Plant → Activity → Plan relationship
	•	plants are independent entities
	•	activities reference plants via plantIds[]
	•	plans may target:
	•	all plants
	•	specific plants

Matching:
	•	activity.type must match plan.activityType
	•	plant overlap must exist (or appliesToAll = true)

⸻

ARCHITECTURAL CONSTRAINTS
	•	single-file app (index.html)
	•	no frameworks
	•	localStorage persistence
	•	no backend dependency (V1)
	•	no over-engineering

⸻

PLANT CATALOG (FUTURE LAYER)

Plants should be selected from a predefined catalog (UI layer).

Catalog defines:
	•	plant type (apple, cherry, plum…)
	•	optional varieties
	•	optional rootstocks
	•	future timing profiles

Rules:
	•	catalog is NOT stored in v4 data model
	•	plant type in storage remains a string
	•	catalog is used only for input consistency

Purpose:
	•	consistent naming
	•	enable translation
	•	enable future recommendations

⸻

TRANSLATION MODEL

The app uses a dictionary-based translation system.

Rules:
	•	English (EN) is the source language
	•	all internal values use EN keys
	•	UI is translated via dictionary

Example:
	•	“spraying” → “prskanje” (HR)

User settings:
	•	selected language must be stored
	•	UI renders based on selected language

Principle:
	•	data is language-neutral
	•	UI is localized

⸻

ONBOARDING STATE

The app must support first-run onboarding.

Rules:
	•	onboarding is triggered when no plants exist
	•	onboarding collects:
	•	language
	•	first plant(s)
	•	onboarding completion must be stored

Constraints:
	•	user must create at least one plant
	•	plant type must come from catalog (UI constraint)

Principle:
	•	no empty app state
	•	user must enter a valid starting context

⸻

WHAT IS NOT IN V1

The following are intentionally excluded:
	•	weather engine
	•	disease model
	•	product database
	•	AI recommendations
	•	zones / garden hierarchy
	•	automation / scheduling engine

These are future layers built on top of:
	•	activities
	•	plans
	•	domain rules

⸻

FINAL PRINCIPLE

Keep the model simple.

Do not:
	•	add unnecessary fields
	•	introduce derived data into storage
	•	mutate plans
	•	over-engineer structure

Build on top of:
	•	activities (reality)
	•	plans (intent)
	•	domain rules (logic)