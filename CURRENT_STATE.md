# CURRENT STATE

## TECH

- single-file index.html (~1300+ lines)
- vanilla JS
- localStorage persistence
- PWA (manifest + service worker)

---

## DATA MODEL

The app supports two data modes:

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

The following functionality is already implemented:

### Migration (Session 1)
- v3 → v4 migration
- backup of old data
- safe initialization of v4

### Overview / Dashboard (Session 2)
- displays:
  - plant count
  - plans this month
  - activities this week
- v4-aware rendering

### Plant Detail (Session 3)
- reads from:
  - v4.plants
  - v4.activities
- shows:
  - plant status
  - activity history
- no write operations to legacy model

### Add Activity (Session 4)
- form-based activity creation
- supports:
  - type
  - date
  - multiple plants
  - notes / product
- saves to v4.activities only

### Calendar (Session 5)
- v4-based rendering
- shows:
  - planned (yellow)
  - done (green)
  - skipped (gray)
- day click shows relevant items

---

## CURRENT LIMITATIONS

- no recommendation engine yet
- no onboarding flow
- no multi-language support
- no tools/equipment layer
- no subscription logic

---

## CURRENT FOCUS

Continue implementing V1 execution roadmap.

Next step:
→ Session 9 (plan matching + state derivation)

---

## IMPORTANT

- v4 is the active model
- legacy v3 exists only for migration compatibility
- all new features must use v4 only