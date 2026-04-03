# VISION AND STRATEGY

## What is Vocnjak

iPhone-first PWA for tracking orchard activities — spraying, pruning, harvest, observations.

---

## Core principle

The app exists to answer two questions quickly:
1. What do I need to do today/this week?
2. What did I do to this plant and when?

---

## Target user

Solo orchard owner in Zagreb, Croatia. Opens the app daily on iPhone. Needs to log activities in under 30 seconds while standing in the garden.

---

## Technical strategy

- Single HTML file (no build step, no framework)
- PWA for iPhone home screen installation
- Local-first (localStorage) with optional Supabase sync
- Vanilla JS — no dependencies except Google Fonts
- Deploy = git push to GitHub Pages

---

## Product priorities (ordered)

1. Fast activity logging (one hand, few taps)
2. Plant history (open plant → see everything)
3. Calendar (planned vs done vs overdue)
4. Dashboard (today, this week, what's late)
5. Sync / backup (Supabase, export)

---

## Out of scope

- Generic garden management
- Lawn tracking
- Multi-user collaboration
- IoT / irrigation control
- Complex analytics
- Desktop-first design

---

## Migration strategy

V3 (note-based, per-plant) → V4 (structured, global activities)

- V3 data is never deleted
- V4 runs alongside V3
- Migration is one-time, safe, with backup
- UI detects V4 and renders accordingly
- Legacy V3 UI paths preserved as fallback

---

## Quality bar

- App must work offline
- App must not lose data
- Add activity must take < 30 seconds
- No form should have more than 5 fields
- Every screen must be usable with one thumb
