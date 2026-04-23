# V2_UX_MODEL

**Status:** placeholder — to be filled in S6 (core surfaces) and S7 (interactive flows). §0 Monitoring UX hard constraints are authoritative and seeded by S2.8; they override any UX proposal that conflicts with them.

---

## 0. Monitoring UX — Hard Constraints (LOCKED, S2.8)

These constraints are **hard, not advisory**. They override every other UX proposal in this document and any future UX work. They derive from `V2_DOMAIN_MODEL.md` §1.7 (monitoring program entity, free-standing invariant, neutrality rule) and Principle 8 of `V2_PRINCIPLES.md`. Any screen, flow, copy, marker, or analytic that violates them is invalid and MUST be revised before implementation.

### 0.1 Forbidden monitoring phrasing

Monitoring UI copy MUST NOT use reminder, compliance, or nudge language. The line binds on **semantics**, not vocabulary — renaming forbidden phrasing to avoid the literal tokens is still forbidden when the meaning matches.

**Forbidden examples (and all semantic equivalents in any language):**

- ❌ "it's been X days since your last check"
- ❌ "you should check again"
- ❌ "check now"
- ❌ "time to check"
- ❌ "don't forget"
- ❌ "missing data"
- ❌ "inactive monitoring"
- ❌ "low monitoring activity"
- ❌ "your monitoring feels quiet"
- ❌ "stale data"
- ❌ "no records yet — consider logging"
- ❌ "N programs need attention"
- ❌ "overdue check"
- ❌ any time-since-last comparison against cadence or any expected frequency

**Allowed (neutral factual display only):**

- ✅ "aktivno" / "active"
- ✅ "uskoro — počinje <date>" / "upcoming — starts <date>"
- ✅ "završeno" / "ended"
- ✅ "bez zapisa" / "no records" (neutral descriptor, never alarm styling)
- ✅ "zadnja provjera: <date>" / "last check: <date>" (pure factual timestamp, no judgment)
- ✅ `cadence` displayed as a static interval declaration ("preporuka: tjedno" / "suggested: weekly") with no time-elapsed comparison

### 0.2 Free-standing observation — UI rule

Free-standing Observations (`program_id = null`) are first-class plant-history entries. They are permanently disjoint from monitoring programs (FS-INV, `V2_DOMAIN_MODEL.md` §1.7.4). The UI MUST respect this invariant:

- **MUST** display free-standing Observations only in plant history (chronological view alongside all other activities and observations).
- **MUST NOT** display free-standing Observations inside any monitoring program UI surface — program cards, program timelines, program history views, program detail screens.
- **MUST NOT** offer any "attach to program," "link observation," "reattach," or "move to program" action on a free-standing Observation. Attachment is permanently impossible.
- **MAY** render an optional neutral marker ("not linked to a monitoring program" or equivalent) — informational only.
- **MUST NOT** apply warning, error, or alarm styling to free-standing Observations. Visual treatment is identical to program-attached Observations.
- **MUST** show a neutral capture-time disclosure when the grower logs an Observation whose `observed_on` falls outside the chosen program's active season: "This observation will be saved in history. It is outside the current [program-label] monitoring season." The capture MUST succeed; evidence is never discarded; the record is stored free-standing per `V2_DOMAIN_MODEL.md` §1.7.3 L5b.

### 0.3 Monitoring card constraints

A monitoring program card (home, calendar, plant detail) MUST respect the neutrality rule:

- **MUST NOT** derive urgency from lack of observations.
- **MUST NOT** derive "overdue," "late," "behind," or any judgment state from cadence drift. Program state is exclusively one of `{pre_season, active, ended}` per `V2_DOMAIN_MODEL.md` §1.7.5; no fourth value may be rendered under any styling pretext.
- **MUST NOT** display compliance, completeness, or coverage measures ("2 of 4 checks done," "50% scouted," "1 check missing this week").
- **MUST NOT** change color, iconography, or styling based on observation absence or cadence elapsed. `ended` with zero observations renders identically to `ended` with many observations in terms of alarm/warning styling.
- **MAY** show:
  - program state (`pre_season` / `active` / `ended`) as a factual label.
  - last observation's `observed_on` date as a factual timestamp.
  - observation count in history as a factual number (never as a score).
  - `cadence` as a static interval declaration (never as a compliance measure).
  - "bez zapisa" / "no records" as a neutral descriptor.
  - program `notes` (agronomic purpose, target lifecycle, threshold hints) for grower reading.

### 0.4 UI must not simulate analytics

UI surfaces MUST NOT compute or display metrics derived from observation presence, absence, or frequency. This mirrors the analytics neutrality boundary (`V2_DOMAIN_MODEL.md` §1.7.6.a) at the UI layer.

Forbidden UI metrics (and all semantic equivalents):

- ❌ "N programs with observations this season"
- ❌ "M programs without observations this season"
- ❌ "average observations per program"
- ❌ "monitoring coverage: X%"
- ❌ "engagement with monitoring"
- ❌ "active monitoring rate"
- ❌ "cadence compliance"
- ❌ any percentage, score, rate, or ratio whose numerator or denominator counts monitoring observations

The UI may render aggregate information unrelated to program-quality judgment: "you have 4 plants" is fine; "you have 4 plants with active monitoring programs" is fine; "you have 4 plants, 2 of which have recent observations" is forbidden (it's a presence metric in disguise).

### 0.5 Copy boundary — revision obligation

If any UX copy in this document or a sibling UX document contains phrasing that conflicts with §0.1, that copy MUST be revised before implementation. Do not leave a contradiction in place on the expectation that future implementation will "remember the chat context" or "know better." The hard constraints here govern every downstream surface.

### 0.6 Scope of hard constraints

§0.1–§0.5 cover monitoring-specific UX behavior. They do NOT prescribe:

- Screen layout, visual hierarchy, typography, or color palette.
- Navigation structure between Pregled / Kalendar / Zapisi / Biljke.
- Capture-flow UX details beyond the disclosure obligation (§0.2 last item).
- Non-monitoring UI (action-windows, activities outside monitoring, gate-state rendering per `V2_DOMAIN_MODEL.md` §0.5).

Those remain to be filled by S6–S7 below, subject to the hard constraints above.

### 0.7 Enforcement

Every UX proposal (mockup, flow, copy sample) touching monitoring MUST be checked against §0.1–§0.5 before acceptance. A future agent adding UX content to this document:

1. Reads §0 first.
2. Checks each proposed surface against §0.1–§0.5.
3. Revises any proposed surface that violates the hard constraints before writing it into §1–§11.

Violations caught after implementation are corrected at the earliest opportunity; there is no grace period for neutrality breaches.

---

## 1. Pregled (home)

*To be filled in S6. Subject to §0 hard constraints.*

## 2. Kalendar

*To be filled in S6. Subject to §0 hard constraints.*

## 3. Zapisi

*To be filled in S6. Subject to §0 hard constraints.*

## 4. Biljke

*To be filled in S6. Subject to §0 hard constraints.*

## 5. Window state → section mapping

*To be filled in S6.*

## 6. End-of-season summary sheet

*To be filled in S6. Subject to §0 hard constraints — no "missed monitoring" roll-up, no compliance scorecard.*

## 7. Weather 24–72h and >72h states

*To be filled in S6.*

## 8. Plan upgrade review flow

*To be filled in S7.*

## 9. Monitoring capture flow

*To be filled in S7. Subject to §0 hard constraints. MUST include out-of-season disclosure per §0.2.*

## 10. Stage confirmation flow

*To be filled in S7.*

## 11. "Za pregledati" resolution flow

*To be filled in S7.*
