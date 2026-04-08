# CURRENT STATE

## TECH

- single-file index.html (~1300+ lines)
- vanilla JS
- localStorage persistence
- PWA (manifest + service worker)

---

## DATA MODEL

### v3 (legacy)
- data[plantId].entries[]
- data[plantId].todos[]
- per-plant structure

### v4 (current target)
- plants (object keyed by id)
- activities (global array)
- plans (global array)

Migration from v3 → v4 is implemented.

---

## IMPLEMENTED (V1 SESSIONS)

### Migration (Session 1)
- v3 → v4 migration
- backup of old data
- safe initialization of v4

### Overview / Dashboard — baseline (Session 2)
- plant count, plans this month, activities this week
- v4-aware rendering

### Plant Detail (Session 3)
- reads from v4.plants and v4.activities
- shows plant status and activity history
- no write to legacy model

### Add Activity (Session 4)
- form-based activity creation
- type, date, multi-plant, notes, product
- saves to v4.activities only

### Calendar (Session 5)
- v4-based rendering
- planned (yellow), done (green)
- day click shows relevant items
- derived plan states (upcoming / active / done / missed) not yet implemented

### Calendar Day Click Fix (Session 5A)
- day click correctly wired to v4 data

### Dashboard Orchard-First Rewrite (Session 6)
- dashboard redesigned around orchard-first UX direction
- active plan windows surfaced
- recent activity minimal display
- young plant notice

### Add Activity UX Polish (Session 7)
- improved validation feedback
- flow tightened

### Fresh-State + Add Plant Unblock (Session 8)
- fresh-state (no data) handled correctly
- Add Plant flow accessible from fresh state

### Activities Complete (Session 9)
- strict validation added for type, date, and plantIds
- safe save flow enforced
- allowed activity types are enforced on save
- invalid activities cannot be stored through Add Activity flow

### Activity Management (Session 10)
- activity list screen added
- activity detail screen added
- delete activity flow added
- overview includes entry point to all activities

---

## CURRENT LIMITATIONS

- plan state derivation (upcoming / active / done / missed) not yet implemented
- no activity edit
- no recommendation engine
- no onboarding flow
- no multi-language support
- no tools / equipment layer
- no weather integration restored
- no subscription logic

---

## CURRENT FOCUS

Next step:
→ Session 11 — Plans: Read Model

---

## IMPORTANT

- v4 is the active model
- legacy v3 exists only for migration compatibility
- all new features must use v4 only

## Parallel Tracks

### Core App (V1)
- Session 10 — Activity Management (current)
- Next: Session 11 — (continue existing roadmap)

### Protection Engine (V2)
- Not started
- Next: Session V2.1 — Monitoring Input

Notes:
- V2 is an overlay layer (read-only on V1 data)
- V2 introduces monitoring, triggers, and recommendations
- V2 does NOT modify V1 data model structure