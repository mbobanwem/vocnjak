# VOCNJAK — V2 PRINCIPLES

## Product identity

Vocnjak is a **trusted seasonal guide for hobby orchards**, not a daily task list.

User reality:
- occasional app use — sometimes weekly, sometimes monthly
- wants to know what to do, when, why, and with what
- wants to avoid unnecessary spraying and not miss critical actions
- wants to understand and plan, not be pushed

The app helps the user **make decisions**, not produce tasks.

---

## Core principles (locked)

1. **Activities are the only source of truth.** Real-world events are captured as immutable activity records. All higher-level state derives from activities.
2. **Phenology is the primary time axis.** Calendar is a fallback. Windows are anchored to phenological stages with tolerance.
3. **Weather is advisory, never blocking.** Advice never hides, defers, or forbids an action.
4. **Catalog + instance + overlay is the plan model.** Catalog is versioned and expert-authored. Instance is derived and pinned per species. Overlay preserves user edits across upgrades.
5. **No AI-authored action recommendations.** Actions are expert-reviewed. AI may reformulate or translate, never author.
6. **Every recommendation has provenance.** Author, evidence source, last-reviewed date.
7. **Deterministic logic only.** Same input → same output. No heuristics, no black-box behavior, no hidden state.
8. **Monitoring is a first-class entity.** Traps, scouting, and stage observations have structured schemas. Monitoring never infers missing data.
9. **Home answers "am I on track," not "what's today."** Pregled surfaces active / upcoming / missed; status line always confirms orchard state.

---

## Non-goals

- generic gardening app
- daily task manager
- complex farm ERP
- AI-authored or black-box recommendations
- inventory / commerce features in core
- forced upgrades, push-notification nagging, opaque UX

---

## Scope boundaries

Out of scope unless explicitly approved:
- PWA implementation details (kept as-is from V1)
- Supabase / sync / monetization
- iCal / external calendar integrations

---

## Authority

Single approver: project owner. No committee, no parallel review.

---

## Governing documents (active)

- `V2_DOMAIN_MODEL.md` — schemas, enums, vocabulary
- `V2_UX_MODEL.md` — surfaces and flows
- `V2_ARCHITECTURE.md` — data model, algorithms, migration
- `V2_EXECUTION_ROADMAP.md` — implementation session order
- `V2_CATALOG_AUDIT.md` — catalog v1.0 audit status
- `V2_PLANT_CATALOG.md` — plant catalog content
- `V2_ORCHARD_PLAN_TEMPLATES.md` — action templates

V1 and deferred future-direction docs are preserved in `/archive/` and are **not load-bearing** for V2 execution.
