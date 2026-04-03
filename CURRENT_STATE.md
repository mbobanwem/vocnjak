# CURRENT STATE

## As of: 2026-04-03

---

## What is implemented on main

### V3 (legacy, fully working)
- 10 plants hardcoded in PLANTS array
- Per-plant entries (note-based diary)
- Per-plant todos (string or date-range objects)
- Harvest tracking for fruit plants
- Batch spray modal
- AI photo analysis (Anthropic API)
- Weather widget (Open-Meteo)
- iCal sync (GitHub API)
- Supabase cloud backup
- AES-GCM encrypted key storage
- PWA with offline fallback

### V4 (migration in progress)
- migrateV3toV4() — safe one-time migration from v3 to v4
- _loadV4() — reads vocnjak_v4 from localStorage
- _renderOverviewV4() — dashboard with plans this month, activities this week
- Plant detail screen adapted for v4
- Calendar adapted for v4 (getCalendarItemsV4)

### V4 NOT yet implemented
- Add Activity form (Session 4) — needs re-implementation
- Edit / delete activity
- Quick mark planned as done
- Filters by plant / type / zone

---

## Files on main

| File | Purpose |
|------|---------|
| index.html | Single-file app (HTML + CSS + JS) |
| sw.js | Service worker (cache-first, offline fallback) |
| manifest.json | PWA manifest |
| icons/ | PWA icons (192, 512, apple-touch) |
| CLAUDE.md | Agent instructions |
| MIGRATION_PLAN_V1.md | Locked migration spec |
| TARGET_ARCHITECTURE_V1.md | V4 data model spec |
| CURRENT_STATE.md | This file |
| UX_IMPROVEMENTS.md | Post-Session 4 UX backlog |
| VISION_AND_STRATEGY.md | Product vision |
| VALIDATION_CONTEXT.md | Validation rules |
| .gitignore | Git ignore rules |
| README.md | Repo readme |

---

## Branches

| Branch | Status |
|--------|--------|
| main | Canonical — v4 code + docs |
| claude/heuristic-cohen | Merged into main — can be deleted |
| claude/iphone-app-conversion-DSYtd | Docs source — can be deleted after verification |

---

## Session history

| Session | Work | Status |
|---------|------|--------|
| Session 1 | V3→V4 migration function | Done (on main) |
| Session 2 | Dashboard adapted for v4 | Done (on main) |
| Session 3 | Plant detail + Calendar for v4 | Done (on main) |
| Session 4 | Add Activity form | NOT done — needs re-implementation |
