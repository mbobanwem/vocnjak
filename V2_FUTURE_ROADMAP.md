# VOCNJAK V2 — FUTURE ROADMAP (NON-BINDING)

---

## 1. Purpose

This document is a **non-binding idea container**.

It exists to:
- preserve useful ideas from V1, archive, and past discussions
- prevent loss of valuable thinking
- avoid polluting active V2 specification

---

## 2. Strict rules

This document is:

- ❌ NOT a source of truth
- ❌ NOT an implementation spec
- ❌ NOT part of active sessions (S1–S11)
- ❌ NOT allowed to define domain logic

This document is:

- ✅ a collection of future ideas
- ✅ a reference for potential future sessions
- ✅ a safe place for unresolved thinking

---

## 3. Promotion rule

Nothing from this document may enter V2 core unless:

1. A dedicated session is created (e.g. S12+)
2. Scope is clearly defined
3. Logic is rewritten into the correct V2 document
4. Project owner signs off

---

## 4. Future directions (candidate areas)

### 4.1 Advanced phenology

- finer stage granularity (beyond initial 8 stages)
- stage prediction improvements
- dynamic adjustment based on observations
- cross-species stage alignment

---

### 4.2 Monitoring expansion

- richer trap tracking (history, trends)
- multi-trap aggregation per plant
- visual monitoring dashboards
- improved scouting workflows

---

### 4.3 Advisory layer improvements

- clearer explanation of "why this action"
- structured reasoning display (not AI-generated decisions)
- confidence indicators based on known inputs (NOT inference)
- better separation of action vs explanation

---

### 4.4 Weather enhancements

- multi-day weather trends
- rainfall accumulation logic
- frost risk visualization
- improved cache handling UX

---

### 4.5 Regional adaptation

- climate zone profiles
- region-based timing offsets
- user-adjustable timing shifts
- localized catalog variants

Deferred architecture decision — regional / climate timing:

- Regional and climate-based timing was considered during the pre-S3 catalog/template stabilization work.
- Decision for current V2: do **not** introduce `climateProfile`, `regionProfile`, `baseClimate`, `offsetDays`, or numeric regional calendar shifts.
- Reason: V2 is phenology-first. Calendar windows are baseline reminders, not universal truth. Observed plant state and user-recorded observations should remain the primary timing authority where available.
- Numeric regional offsets such as “Dalmatia = 0 days, Istria = +X days, Zagreb = +Y days” are intentionally deferred because they risk unsourced false precision.
- Mediterranean species and pomegranate should continue to use wide seasonal windows, species `seasonProfile`, and observation-oriented notes until a dedicated future session audits regional timing.
- Citrus reintroduction is explicitly deferred until after a source-backed, owner-approved regional timing / climate adaptation strategy exists.
- Fig reintroduction is deferred to a post-S11 domain-definition session because fig behavior is type-dependent and region-sensitive.
- Future regional adaptation, if opened, should evaluate:
  - climate zone profiles
  - region-based timing offsets
  - user-adjustable timing shifts
  - localized catalog variants
  - container / protected overwintering context
  - phenology / observation gates before numeric offsets
- Any future promotion into V2 core requires a dedicated session, source-backed audit, explicit owner approval, and rewrite into the correct active V2 document.

---

### 4.6 Catalog evolution

- more species support
- expanded variety lists
- disease susceptibility metadata
- rootstock influence (if ever introduced)

Deferred citrus reintroduction:

- Citrus is a planned post-current-V2 candidate, not current selectable plant support.
- Citrus must not return as partial subtype-only support.
- Lemon, orange, and mandarin should be treated as proper supported fruit species before re-entry.
- Future citrus work should include curated top varieties/subtypes for target countries where useful.
- Future citrus work requires full source-backed plan templates, not weak container-biased placeholders.
- Mediterranean/coastal vs continental growing context must be handled through the future regional timing / climate adaptation strategy before citrus returns.

Deferred fig reintroduction:

- Fig is a planned post-S11 candidate, not current selectable plant support.
- Fig must not return with partial or simplified one-size-fits-all harvest guidance.
- Future fig work requires a dedicated domain definition for one-crop vs two-crop behavior.
- Future fig work must distinguish breba and main crop handling where relevant.
- Pruning guidance must align with crop type and fruiting wood behavior.
- Source-backed harvest timing and clear Mediterranean/coastal vs continental interpretation are required before re-entry.
- Optional variety/type coverage for target regions may be opened only inside the future fig domain session.

---

### 4.7 UX extensions (non-core)

- richer end-of-season summaries
- multi-year orchard history views
- seasonal comparisons
- improved visualization of "on track vs missed"

---

### 4.8 Data & reporting

- export options (PDF / summary)
- season reports
- simple analytics (counts, success rate)
- orchard timeline view

---

### 4.9 Integrations (deferred)

- calendar integrations (iCal improvements)
- optional sync enhancements
- backup/export automation

---

### 4.10 AI (strictly limited scope)

Allowed:
- text rephrasing
- translation
- explanation formatting

NOT allowed:
- generating recommendations
- deciding actions
- inferring missing data

---

## 5. Deferred questions

These are open questions that require structured sessions before inclusion:

- how far should phenology modeling go?
- what level of monitoring detail is useful vs overkill?
- how to present uncertainty without heuristics?
- what is the right level of regional adaptation?
- how to keep UX simple while system grows?

---

## 6. Explicit exclusions (for now)

These are intentionally NOT part of V2 core:

- daily task lists
- push-based action forcing
- automatic decision-making
- AI-generated agronomic logic
- complex farm management features
- inventory / commerce features

---

## 7. Relationship to V2 system

This document:

- does NOT override `V2_PRINCIPLES.md`
- does NOT influence `V2_DOMAIN_MODEL.md`
- does NOT affect current sessions

It is **completely external to execution**.

---

## FINAL NOTE

This document protects the system from:

- premature optimization
- uncontrolled idea injection
- scope creep

All ideas here are **optional, deferred, and non-binding**.
