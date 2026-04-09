# ORCHARD_PLAN_TEMPLATES_V1.md

## Status
DRAFT — Source of truth for predefined orchard plans (V1)

---

## Purpose

This file defines **predefined orchard work (plans)** per plant species and variety.

It serves as a **canonical template source** for generating `plans[]` in the app.

This file does NOT:
- store user data
- modify schema
- introduce new fields

This file DOES:
- define WHAT work should happen during the year
- map that work to existing plan structure
- enable deterministic plan generation

---

## Core Principles

1. Plans = intent  
2. Activities = reality  
3. Plan state = derived (never stored)  

This file must fully respect:
- DOMAIN_RULES_V1.md
- CURRENT_STATE.md
- MIGRATION_PLAN_V1.md

---

## Constraints (STRICT)

- DO NOT introduce new fields
- DO NOT change plan schema
- DO NOT add heuristics or AI logic
- DO NOT include user-specific data
- DO NOT include IDs (plantIds generated later)
- MUST be deterministic
- MUST map to existing plan structure

---

## Plan Structure Mapping

Each template entry must map to existing plan fields:

| Template Field | Maps to |
|----------------|--------|
| activityType   | plan.activityType |
| title          | plan.title |
| monthStart     | plan.monthStart |
| dayStart       | plan.dayStart |
| monthEnd       | plan.monthEnd |
| dayEnd         | plan.dayEnd |
| notes          | plan.notes |
| appliesToAll   | plan.appliesToAll (if true) |

---

## Supported Plant Types

Defined in PLANT_CATALOG_V1.md:

- apple
- plum
- cherry
- nectarine

---

# 🌳 ORCHARD PLAN TEMPLATES — V1 (FULL)

---

## 🍎 APPLE (Malus domestica)

### WINTER

- activityType: "whitewash"
  title: "Krečenje debla"
  monthStart: 1
  dayStart: 15
  monthEnd: 2
  dayEnd: 10
  notes: "Zaštita od pucanja kore, sunčanih opeklina i štetnika"

- activityType: "spraying"
  title: "Bijelo ulje"
  monthStart: 2
  dayStart: 1
  monthEnd: 2
  dayEnd: 15
  notes: "Uništava prezimljujuća jaja štetnika. Prskati po suhom vremenu."

- activityType: "spraying"
  title: "Bakar – fungicid"
  monthStart: 2
  dayStart: 15
  monthEnd: 2
  dayEnd: 28
  notes: "Zaštita od gljivičnih bolesti. Razmak min 7–10 dana od ulja."

---

### SPRING

- activityType: "pruning"
  title: "Zimska rezidba"
  monthStart: 3
  dayStart: 1
  monthEnd: 3
  dayEnd: 15
  notes: "Ukloniti suhe, bolesne i preguste grane. Održavati visinu i oblik."

- activityType: "spraying"
  title: "Bakar na rane"
  monthStart: 3
  dayStart: 1
  monthEnd: 3
  dayEnd: 20
  notes: "Primijeniti unutar 1–2 dana nakon rezidbe."

- activityType: "monitoring"
  title: "Feromonska klopka – jabučni savijač"
  monthStart: 4
  dayStart: 25
  monthEnd: 5
  dayEnd: 5
  notes: "Praćenje populacije. Nagli rast ulova = tretman unutar 7–10 dana."

---

### GROWTH

- activityType: "spraying"
  title: "Zaštita ploda (fungicid + insekticid)"
  monthStart: 5
  dayStart: 10
  monthEnd: 5
  dayEnd: 30
  notes: "Score + Mospilan. Štiti od krastavosti i štetnika."

- activityType: "thinning"
  title: "Prorjeđivanje plodova"
  monthStart: 5
  dayStart: 20
  monthEnd: 6
  dayEnd: 10
  notes: "Ostaviti 1 plod svakih 10–15 cm. Ukloniti sitne i oštećene."

---

### SUMMER

- activityType: "watering"
  title: "Navodnjavanje"
  monthStart: 6
  dayStart: 20
  monthEnd: 8
  dayEnd: 31
  notes: "20–40 L po stablu tjedno. Prilagoditi oborinama."

- activityType: "pruning"
  title: "Ljetna rezidba"
  monthStart: 7
  dayStart: 1
  monthEnd: 7
  dayEnd: 20
  notes: "Uklanjanje vodopija i prozračivanje krošnje."

---

### HARVEST

- activityType: "harvest"
  title: "Berba jabuke"
  monthStart: 9
  dayStart: 25
  monthEnd: 10
  dayEnd: 15
  notes: "Brati zakretanjem ploda. Ne čupati."

---

### AUTUMN

- activityType: "watering_stop"
  title: "Gašenje navodnjavanja"
  monthStart: 9
  dayStart: 1
  monthEnd: 9
  dayEnd: 15

- activityType: "inspection"
  title: "Pregled za zimu"
  monthStart: 10
  dayStart: 1
  monthEnd: 10
  dayEnd: 31

---

## 🍑 NECTARINE (Prunus persica)

### WINTER

- activityType: "whitewash"
  title: "Krečenje debla"
  monthStart: 1
  dayStart: 15
  monthEnd: 2
  dayEnd: 10

- activityType: "spraying"
  title: "Bijelo ulje"
  monthStart: 2
  dayStart: 1
  monthEnd: 2
  dayEnd: 15

- activityType: "spraying"
  title: "Bakar – kovrčavost lista"
  monthStart: 2
  dayStart: 10
  monthEnd: 3
  dayEnd: 5
  notes: "Ključno prskanje protiv kovrčavosti."

---

### SPRING

- activityType: "pruning"
  title: "Rezidba"
  monthStart: 3
  dayStart: 1
  monthEnd: 3
  dayEnd: 15

- activityType: "spraying"
  title: "Bakar nakon rezidbe"
  monthStart: 3
  dayStart: 1
  monthEnd: 3
  dayEnd: 20

---

### GROWTH

- activityType: "thinning"
  title: "Prorjeđivanje plodova"
  monthStart: 5
  dayStart: 20
  monthEnd: 6
  dayEnd: 10
  notes: "Ostaviti 1 plod na 10–15 cm."

---

### SUMMER

- activityType: "watering"
  title: "Navodnjavanje"
  monthStart: 6
  dayStart: 20
  monthEnd: 8
  dayEnd: 31

- activityType: "pruning"
  title: "Ljetna rezidba"
  monthStart: 7
  dayStart: 1
  monthEnd: 7
  dayEnd: 20

---

### HARVEST

- activityType: "harvest"
  title: "Berba nektarine"
  monthStart: 7
  dayStart: 25
  monthEnd: 8
  dayEnd: 10
  notes: "Više prolaza. Plodovi ne dozrijevaju istovremeno."

---

## 🍒 CHERRY (Prunus avium)

### SPRING

- activityType: "monitoring"
  title: "Žute ljepljive ploče"
  monthStart: 4
  dayStart: 25
  monthEnd: 5
  dayEnd: 10
  notes: "Praćenje trešnjine muhe."

---

### SUMMER

- activityType: "protection"
  title: "Mreža protiv ptica"
  monthStart: 6
  dayStart: 10
  monthEnd: 6
  dayEnd: 30

---

### HARVEST

- activityType: "harvest"
  title: "Berba trešnje"
  monthStart: 6
  dayStart: 20
  monthEnd: 7
  dayEnd: 5

---

## 🍑 PLUM (Prunus domestica)

### SPRING

- activityType: "monitoring"
  title: "Feromonska klopka – šljivin savijač"
  monthStart: 4
  dayStart: 25
  monthEnd: 5
  dayEnd: 5

---

### GROWTH

- activityType: "thinning"
  title: "Prorjeđivanje plodova"
  monthStart: 5
  dayStart: 20
  monthEnd: 6
  dayEnd: 10

---

### HARVEST

- activityType: "harvest"
  title: "Berba šljive"
  monthStart: 8
  dayStart: 20
  monthEnd: 9
  dayEnd: 10

## Notes

- Exact dates may shift based on climate
- This is Zagreb baseline
- Generation layer may adjust timing later (not in this file)

---

## Future Extensions

- climate zones
- dynamic adjustment
- pest detection triggers

---

# FUTURE SUGGESTIONS — SMART ORCHARD LOGIC (V2+)

## Goal

Transform the orchard calendar from a static schedule into a decision-support system.

The goal is not only to tell the user what to do, but also:
- when NOT to do it
- when to delay
- when to skip entirely
- when action is critical

This reduces unnecessary treatments and improves real-world outcomes.

---

## 1. WEATHER-AWARE ACTIONS

### Problem

Static calendar ignores real conditions (rain, wind, temperature).

### Solution

Each activity gets execution conditions:

conditions:
- noRain: true
- maxWind: 3
- minTemp: 8
- dryWindowHours: 6

### UX Behavior

- If conditions NOT met:
  - Do not apply (rain/wind)
- Suggest:
  - Try in 1–2 days

---

## 2. TREE AGE / DEVELOPMENT STAGE

### Problem

Young trees should not follow full production schedule.

### Solution

stage:
- young
- developing
- mature

### Logic Examples

#### Young trees (year 1–2)

- No fungicide programs
- No pheromone traps
- No fruit thinning
- Watering is critical
- Structure pruning only

#### Developing (year 3–4)

- Light protection
- First yield management

#### Mature

- Full program

---

## 3. PEST-DRIVEN ACTIONS (TRAPS)

### Problem

Spraying without actual pest pressure.

### Solution

trap status:
- trap: codling_moth
- status: active | not_detected

### Behavior

- If NOT detected → skip spraying
- If detected → trigger action

### UX

- Monitor
- Action required

---

## 4. PHENOLOGY (REAL TREE STATE)

### Problem

Calendar does not match real plant state.

### Solution

phenology:
- dormant
- bud
- bloom
- fruit_set
- ripening

### Effect

- If bloom delayed → delay spraying
- If early season → shift earlier
- If late season → shift later

---

## 5. IRRIGATION LOGIC

### Problem

Watering is static or missing.

### Solution

Trigger watering if:
- no irrigation system
- temperature above 28°C
- no rain for several days

Action:
- Water tree (30–50L)

---

## 6. EQUIPMENT AND MATERIAL GUIDANCE

Each activity includes required equipment:

equipment:
- sprayer
- protective gear
- pheromone trap

---

## 7. AI IMAGE INPUT (FUTURE)

User takes a photo.

System detects:
- disease
- pest damage
- nutrient deficiency

Output:
- probable issue
- suggested treatment category

---

## 8. UNCERTAINTY HANDLING

System must not present full certainty.

Use:
- Likely aphids
- Possible fungal infection
- Monitor before treatment

---

## 9. SKIP LOGIC (CRITICAL)

System must explicitly allow skipping actions.

Examples:

- no fruit → no thinning
- no pest → no spraying
- young tree → no treatment

---

## 10. IMPLEMENTATION STRATEGY

V1:
- static calendar

V2:
- weather + stage

V3:
- traps + phenology

V4:
- AI + prediction

---

## FINAL PRINCIPLE

System behaves like an experienced gardener, not a checklist.

- adaptive
- conservative
- avoids unnecessary work
- reduces chemical use
- prioritizes plant health

(NOT PART OF V1)