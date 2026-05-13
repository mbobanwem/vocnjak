# V2_UX_MODEL

**Status:** §0 Monitoring UX hard constraints are locked and authoritative. Sections 1–5 define S6 core surfaces. Sections 9–17 contain future flow contracts and placeholders. Runtime Slice 7 is complete through S7.4; B2 metadata-only projection boundary is complete; Runtime Slice 8 has not started. This document defines UX guidance only; no runtime/schema implementation is defined here.

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
- **MUST** show a neutral capture-time disclosure when the grower logs an Observation whose `observed_on` falls outside the chosen program's active season. The disclosure copy is: "This observation will be saved in history. It is outside the current [program-label] monitoring season." This copy lives in this document as the single source of truth; `V2_DOMAIN_MODEL.md §1.7.3 L5b` references it and does not duplicate it. The capture MUST succeed; evidence is never discarded; the record is stored free-standing per `V2_DOMAIN_MODEL.md` §1.7.3 L5b.

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

**Affirmative rule — zero-setup and zero-observation programs.** A scouting program (`method.kind = scouting`, no setup required) with zero Observations during `active` state MUST still render factually: the program label, program state as `aktivno`, `bez zapisa` as a neutral descriptor, the program `notes` (agronomic purpose, target context) for grower reading, and — if declared — `cadence` as a static interval declaration. No alarm styling, no nudge copy, no "start your first check" prompt. The card exists during the program's active season regardless of evidence presence; its visibility is a property of the program's state, not of the record set.

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

Pregled is the orchard summary surface.

It answers, in 0 taps, what is currently seasonally relevant in the orchard.

Pregled is:

- orchard-level
- seasonal-action-level
- calendar-first
- beginner-readable
- iPhone-first
- not plant-first
- not a daily task list
- not a generic dashboard
- not a compliance screen
- not a monitoring nag screen

### 1.1 Always-visible status sentence

Pregled must always start with a short, neutral orchard status sentence.

Allowed examples:

```text
Trenutno su aktualne 2 sezonske radnje.
Trenutno su aktualne 3 sezonske radnje. Jedna je pri kraju.
Trenutno nema aktualnih sezonskih radnji. Sljedeća počinje 12.4.
```

The status sentence must not use:

- scores
- praise
- guilt
- achievement framing
- task framing
- "sve je odrađeno"
- "nema zadataka danas"
- "bravo"
- "kasniš"

### 1.2 User-facing terminology

User-facing Home copy must avoid the literal term `prozor` for domain windows.

Use natural Croatian wording such as:

```text
Sada aktualno
Ova radnja je aktualna od 15.2. do 28.2.
Ova radnja je aktualna do 28.2.
Počinje 12.4.
Bilo je aktualno od 1.2. do 15.2.
Sezonska radnja
Razdoblje za radnju
Primjenjuje se na 8 voćki.
```

Technical documentation may still use `window` when referring to the domain model.

Use `Primjenjuje se na`, not `Vrijedi za` or `Odnosi se na`.

For seasonal action outcome copy on Home, prefer `evidencija` / `evidentirano` over `zapis`.

Examples:

```text
Za provjeru: nema evidencije
Nema evidencije za 8 voćki.
Evidentirano za 4/8 voćki.
```

`Zapis` may remain a technical/documentation term for Activity and Observation records. Monitoring copy remains governed by §0.

### 1.3 Home structure

Pregled uses conditional sections only.

Empty sections and filler cards must not render.

Top-to-bottom order:

1. status sentence
2. `Sada aktualno`
3. orchard-relevant weather advisory/warning, preferably inline on relevant cards; global only when one advisory applies to multiple visible cards
4. `Za provjeru: nema evidencije`
5. `Uskoro`
6. `Praćenje`
7. plan-change review signal, only when one or more active plants have available plan changes
8. quiet state when no meaningful content exists beyond the status sentence

Plan-change review signal:

```text
Promjene plana za pregled
Za 2 voćke postoje promjene plana.
Pregledaj prije primjene.
```

Singular variant:

```text
Za 1 voćku postoje promjene plana.
```

Rules:

- appears after `Praćenje`, before quiet state
- calm informational card/section only
- routes to Biljke filtered to affected plants
- does not apply changes from Pregled
- in-app only; no external notification
- no urgency, alarm, task, progress, or compliance styling

### 1.4 Sada aktualno

`Sada aktualno` contains seasonal actions that are currently active or closing soon.

Open and closing-soon actions are not split into separate top-level sections.

A card may show:

- action name
- status such as `Aktualno` or `Pri kraju`
- date copy, for example `Ova radnja je aktualna od 15.2. do 28.2.`
- plant scope, for example `Primjenjuje se na 8 voćki.`
- short purpose cue when the title alone is not beginner-clear, for example `Za prezimljujuće štetnike.`
- record status copy where relevant, for example `Evidentirano za 4/8 voćki.`
- gate chip only when gate-state is identical for all plants represented by the card
- short weather hint when relevant

Pregled consumes the domain-derived `closing-soon` state from `V2_DOMAIN_MODEL.md` and renders it as `Pri kraju`.

S6 must not restate or redefine the `closing-soon` threshold.

Closing-soon actions may receive stronger visual hierarchy if later design confirms it. Closing-soon styling must not use error/destructive semantics.

Home cards are grouped by seasonal action. A seasonal action applying to multiple plants remains one Home card.

Pregled must not show per-plant checklist fan-out.

Default partial-record copy:

```text
Evidentirano za 4/8 voćki.
```

Specific record copy is allowed only when true:

```text
Odrađeno za 4/8 voćki.
```

only when the counted records are `done`.

```text
Preskočeno za 4/8 voćki.
```

only when the counted records are `skipped`.

Forbidden partial-record patterns:

- progress bars
- percentages
- completion scores
- achievement framing
- guilt or pressure copy
- per-plant checklist fan-out

If gate-state differs across plants, Pregled does not show a gate chip.

Per-plant gate-state belongs in seasonal action detail.

Do not introduce a new `mješovito` gate-state.

### 1.5 Aggregation rule

Pregled must not aggregate cards by visible title alone.

Cards may be aggregated only when the card-level date copy, status, purpose/context, catalog-backed identity, and user-facing meaning are compatible for every plant represented by the card.

If plants have different catalog versions or different effective dates/status/purpose such that one card would not be true for all plants, Pregled must split the cards or defer detail to a lower-level surface rather than presenting misleading merged copy.

### 1.6 Za provjeru: nema evidencije

This section corresponds to domain windows in terminal `missed` state, but user-facing copy must not use missed / overdue / needs-attention framing.

User-facing section title:

```text
Za provjeru: nema evidencije
```

This means the relevant period has ended and no `done` or `skipped` record exists.

This section must not become a generic attention queue.

This section appears only when it has at least one item.

Example:

```text
Bijelo mineralno ulje
Bilo je aktualno od 1.2. do 15.2.
Nema evidencije za 8 voćki.
```

After a user records `skipped`, the item no longer belongs in this section.

This section must not use alarm, guilt, failure, or urgency copy.

### 1.7 Uskoro

`Uskoro` gives a limited lookahead.

It shows:

- up to 3 nearest upcoming seasonal actions in the next 30 days
- if no upcoming seasonal action exists in the next 30 days, the first next upcoming seasonal action regardless of date

Full season context belongs in Calendar / season timeline, not on Pregled.

Example:

```text
Postavljanje mreže protiv ptica
Počinje 12.4.
Primjenjuje se na trešnju Kordia.
```

### 1.8 Praćenje

`Praćenje` is a glance surface only and is governed by locked §0.

Home monitoring cards may be aggregated by monitoring program declaration / cycle where appropriate and may show plant scope count.

They must not fan out per plant.

Example:

```text
Praćenje jabučnog savijača
Aktivno praćenje za 6 voćki.
Bez zapisa.
```

The phrase `Bez zapisa` remains allowed for monitoring because §0 explicitly permits it as neutral monitoring copy.

Beginner explanation of the monitored target belongs in Monitoring program detail, not on Home.

Home monitoring must not show:

- time since last observation
- compliance or cadence drift
- `još nema zapisa`
- "start checking" prompts
- alarm styling for absence of observations
- monitoring coverage / engagement / completion metrics
- free-standing observations inside monitoring cards

### 1.9 Weather advisory / warning

Weather is not decorative.

Weather appears on Home only when orchard-relevant.

Prefer weather hints inline on relevant seasonal action cards.

A global weather block is allowed only when one advisory affects multiple visible cards or the orchard context broadly.

Weather may reference:

- rain
- wind
- frost
- heat
- useful dry/calm forecast context

Weather copy may remind the user to check local forecast, actual orchard conditions, and product label where relevant, because the weather source does not know the exact micro-location.

Allowed examples:

```text
Upozorenje: moguća kiša za oko 36 sati.
Za prskanje je važno suho i mirno vrijeme prije i nakon primjene.
Provjeri lokalnu prognozu i stvarne uvjete u vrtu prije odluke.
```

```text
Prognoza pokazuje moguć suhi period za nekoliko dana.
Provjeri lokalnu prognozu i etiketu proizvoda prije odluke.
```

Weather must not:

- command orchard action
- block actions
- hide actions
- auto-schedule actions
- auto-shift seasonal action dates
- score actions
- rank Home cards by weather

If there is a weather warning but no visible current/upcoming seasonal action or active awareness/monitoring context, Home does not become a generic weather dashboard.

### 1.10 Quiet state

Pregled must not show empty sections or filler cards.

If no current, completed-without-record, upcoming, monitoring, or orchard-relevant weather content exists, the orchard may be quiet.

Allowed examples:

```text
Trenutno nema aktualnih sezonskih radnji.
```

```text
Trenutno nema aktualnih sezonskih radnji. Sljedeća počinje 12.4.
```

Forbidden quiet-state examples:

```text
Sve je odrađeno.
Nema zadataka danas.
Bravo, sve je pod kontrolom.
```

### 1.11 Pregled must not do

Pregled must not:

- behave like a daily task list
- use `zadatak`, `to-do`, `trebaš`, `moraš`, `kasniš`, `hitno`, or equivalent pressure copy
- use `prozor` as user-facing window copy
- fan out one seasonal action into per-plant task cards
- aggregate cards by visible label alone
- show progress bars, percentages, completion scores, or achievement framing
- derive urgency from missing monitoring observations
- show monitoring compliance, engagement, coverage, or cadence-drift metrics
- command action based on weather
- hide, block, reschedule, or reorder seasonal actions based on weather
- generate AI-authored action recommendations

### 1.12 S6 / S7 boundary

Pregled defines what is shown and where the user can drill in.

Capture flows belong to S7.

S7 owns:

- logging an Activity
- multi-plant capture
- recording a skip
- recording an Observation
- monitoring capture
- stage confirmation

### 1.13 Cross-surface terminology note — Dnevnik / History

The chronological history surface for Activities and Observations uses the bottom navigation label `Dnevnik`.

Where space allows, the full surface title is `Dnevnik voćnjaka`.

Do not use `Zapisi` as the main user-facing surface label.

`Dnevnik` is proof of what happened in the orchard. It is not analytics, scoring, compliance, or reporting.

## 2. Kalendar

Kalendar is the current-season timeline surface.

It answers:

- how the current orchard season is distributed across months
- what seasonal actions are current, upcoming, or past
- where monitoring and risk-awareness items sit during the season
- how seasonal actions relate to the calendar without becoming a daily task list

Kalendar is:

- orchard-level
- seasonal-action-level
- month-by-month
- current-cycle-year scoped
- calendar-first
- beginner-readable
- iPhone-first
- complementary to `Pregled`, not a duplicate of it

Kalendar is not:

- a daily task list
- a dot-only month grid
- a per-day input surface
- a per-plant checklist
- a generic dashboard
- a multi-year history surface
- a weather dashboard
- a monitoring nag screen
- a compliance / coverage / score surface
- an AI recommendation surface

### 2.1 Product separation

The main surfaces have distinct responsibilities:

- `Pregled / Home` = quick current status.
- `Kalendar / Calendar` = full current-season context.
- `Dnevnik voćnjaka` = proof/history across years.

Kalendar covers the current cycle year.

Previous and next cycle years are outside S6 Kalendar.

Multi-year history belongs to `Dnevnik voćnjaka` or future reporting, not S6 Kalendar.

### 2.2 Primary Calendar model

Kalendar uses a:

```text
month-by-month vertical seasonal timeline
```

A classic dot-grid calendar is not the S6 primary Kalendar surface.

A compact dot-grid may be reconsidered later as a secondary view, but must not replace the month-by-month seasonal timeline.

### 2.3 Top-level structure

Top-to-bottom order:

1. optional global weather advisory band, only when one near-term advisory affects multiple visible current/near-term cards
2. year context header
3. month sections for the current cycle year
4. neutral empty-season line only if the entire cycle year has no seasonal actions, monitoring, or risk-awareness items

Default opening behavior:

- Kalendar opens at the current month.
- User can scroll earlier/later months in the current cycle year.
- Kalendar does not open prior or next cycle years in S6.

Year header copy:

```text
Sezona 2026.
```

### 2.4 Month section

Each month header:

```text
Travanj 2026.
```

Current month subtitle:

```text
Danas je 12.4.
```

This is neutral orientation only. It must not create urgency or "today task" framing.

Each month may contain subgroups, only when non-empty:

1. `Sezonske radnje`
2. `Praćenje`

Subgroup order:

- `Sezonske radnje`
- then `Praćenje`

Do not render empty subgroup headers.

### 2.5 Month discoverability / monitoring visibility

If a month has many `Sezonske radnje`, the user may not scroll far enough to notice `Praćenje` lower down.

Therefore:

- Month header must expose non-empty category presence before the card list.
- If monitoring/risk exists, the preview must include count plus earliest start date or short label.
- This is to make monitoring/risk discoverable before deep scrolling.

Allowed examples:

```text
3 sezonske radnje · Praćenje od 15.4.
4 sezonske radnje · Praćenje od 15.4. · Rizik od mraza
```

Later design may use visual grouping, chips, anchors, sticky subheaders, or color accents to distinguish `Sezonske radnje`, `Praćenje`, and risk-awareness cards.

S6 must not hardcode exact colors or component behavior.

Visual emphasis must not imply compliance, failure, urgency, or mandatory action.

### 2.6 Empty month behavior

A month is empty only when it has:

- no seasonal actions
- no monitoring programs
- no risk-awareness items

Empty month copy:

```text
Nema sezonskih radnji ni praćenja u ovom mjesecu.
```

Do not show this line if the month has monitoring or risk-awareness items.

Do not use achievement framing.

Forbidden examples:

```text
Sve je odrađeno.
Nema zadataka danas.
Bravo.
```

### 2.7 Calendar card identity and grouping

One card represents one seasonal action or one monitoring program at orchard scope for one occurrence / cycle.

Cards must not aggregate by visible title alone.

Cards may aggregate across plants only when all of these are compatible for every represented plant:

- catalog-backed identity
- effective date copy
- status
- purpose/context
- catalog version
- user-facing meaning

If not compatible, split cards rather than showing misleading merged copy.

Examples:

- `Bakar – zimska zaštita` and `Bakar nakon rezidbe` must not merge just because both mention copper.
- Same visible title with different species timing must split.
- Same action across different catalog versions must split if date/status/purpose copy would not be true for all represented plants.

A monitoring program card and a seasonal action card are never merged.

### 2.8 Plant scope

Use:

```text
Primjenjuje se na 8 voćki.
Primjenjuje se na trešnju Kordia.
```

Do not use:

```text
Vrijedi za
Odnosi se na
```

Do not list every plant on Kalendar cards.

Per-plant breakdown belongs in seasonal action detail or plant detail.

### 2.9 User-facing terminology

Kalendar user-facing copy must avoid the literal term `prozor`.

Do not use user-facing:

```text
prozor
otvoreni prozori
zatvoreni prozori
rok
```

Use natural Croatian date copy:

```text
Aktualno od 15.2. do 28.2.
Aktualno do 28.2. — pri kraju.
Počinje 12.4.
Bilo je aktualno od 1.2. do 15.2.
```

Kalendar consumes the domain-derived `closing-soon` state from `V2_DOMAIN_MODEL.md` and renders it as:

```text
Pri kraju
```

S6 must not restate or redefine the `closing-soon` threshold.

### 2.10 Evidence / outcome copy

Use `evidencija` / `evidentirano` for seasonal action outcome copy.

Default partial evidence copy:

```text
Evidentirano za 4/8 voćki.
```

Specific copy only when true:

```text
Odrađeno za 4/8 voćki.
```

only when counted records are `done`.

```text
Preskočeno za 4/8 voćki.
```

only when counted records are `skipped`.

Past with no done/skipped evidence:

```text
Nema evidencije za 8 voćki.
```

Forbidden:

- progress bars
- percentages
- completion scores
- achievement framing
- guilt copy
- pressure copy
- per-plant checklist fan-out

### 2.11 Monitoring copy

Monitoring cards are governed by locked §0.

Monitoring may use:

```text
Bez zapisa.
```

because §0 explicitly permits it as neutral monitoring copy.

Monitoring cards may show:

- program label
- program state
- factual date range
- factual last-check date
- observation count as factual number
- cadence only as static interval declaration, if declared
- plant scope count

Monitoring cards must not show:

- time since last observation
- cadence drift
- compliance metrics
- coverage metrics
- engagement metrics
- "start checking" prompts
- "trebaš provjeriti"
- "vrijeme za provjeru"
- alarm styling for absence of observations
- free-standing observations inside monitoring cards

Free-standing observations belong to plant history / Dnevnik context, not monitoring cards.

### 2.12 Risk-awareness items

Risk-awareness / monitoring presentation is not implemented in S6/S7/B2 runtime. B2 has resolved the source-map/projection grouping as metadata only, separate from seasonal snapshot and hidden until Slice 8. Runtime Slice 8 is the first allowed consumer and must not implement monitoring or risk-awareness surfaces outside the B2-approved boundary. `V2_UX_MODEL.md` §0 remains authoritative for monitoring hard constraints.

They must be textually distinct from pest/disease monitoring.

Use natural Croatian labels:

```text
Rizik od mraza
Rizik od pucanja plodova
Rizik od suše
Rizik od vrućine
```

Do not use:

```text
Svijest o ...
```

Risk-awareness cards must not imply automatic treatment.

For frost risk, do not use vague copy like:

```text
Primjenjuje se na osjetljive voćke.
```

Use clearer beginner copy:

```text
Posebno važno za voćke u cvatnji i tek zametnute plodove.
```

Example:

```text
Rizik od mraza
Aktualno od 1.4. do 30.4.
Posebno važno za voćke u cvatnji i tek zametnute plodove.
```

Full explanation belongs in the relevant detail surface.

### 2.13 Long-running seasonal actions / care items

Long-running seasonal actions or care items may span multiple months.

Start month copy:

```text
Sezonsko navodnjavanje
Aktualno od 15.4. do 31.8.
Primjenjuje se na 8 voćki.
```

Continuation month copy while active:

```text
Nastavlja se: sezonsko navodnjavanje
Aktualno do 31.8.
Primjenjuje se na 8 voćki.
```

After a long-running item has fully closed, Kalendar may still show compact continuation/history markers in overlapped months within the current cycle year.

Do not require users to find only the start month to understand that the item was relevant in later months.

Allowed historical continuation example:

```text
Navodnjavanje mladih voćki
Bilo je aktualno i tijekom ovog mjeseca, do 31.8.
```

### 2.14 Irrigation / watering special rule

Watering / irrigation is not a normal one-time action.

Users may water by:

- drip irrigation
- bucket
- hose
- sprinkler
- irrigation controller
- no infrastructure

Kalendar must not present irrigation as a fixed one-time task or prescribe exact method, duration, volume, or frequency.

Treat irrigation/watering as long-running seasonal care context.

Kalendar-level copy must stay short and non-prescriptive.

Allowed Kalendar copy:

```text
Navodnjavanje mladih voćki
Sezonska napomena od 15.4. do 31.8.
Način i količina ovise o opremi, tlu, vremenu i starosti voćke.
```

Continuation copy:

```text
Nastavlja se: navodnjavanje mladih voćki
Sezonska napomena do 31.8.
Način i količina ovise o uvjetima.
```

Kalendar must not show:

```text
Zalij danas.
Uključi zonu 2 sata.
Daj 60 L vode.
Obavezno zalij 3 puta tjedno.
```

Approximate watering guidance belongs in seasonal action detail, not Kalendar.

Seasonal action detail, not Kalendar, is the correct surface for orientation such as:

- young fruit trees in dry periods may often need roughly `20–30 L` per week
- deeper watering `1–2 times weekly` is usually preferable to frequent shallow watering
- adjust for rainfall, soil, mulch, plant age, heat, irrigation method, and actual soil moisture
- for drip systems, estimate volume from emitter flow × number of emitters × runtime

Do not put those numeric details in Kalendar.

### 2.15 Purpose cue

A short purpose cue is optional.

Show it only when the title alone is not beginner-clear.

Examples:

```text
Bijelo mineralno ulje
Za prezimljujuće štetnike.
```

Do not force a purpose cue on obvious cards such as:

```text
Berba
Postavljanje mreže protiv ptica
```

Full explanation belongs in seasonal action detail or monitoring program detail.

### 2.16 Young-tree relevance

Kalendar does not hide or invent young-tree relevance.

If catalog/template notes provide a clear young-tree caveat, Kalendar may show a short non-prescriptive cue.

Full explanation belongs in detail.

Kalendar must not infer guilt, pressure, or automatic hiding for young trees.

### 2.17 Weather

Weather hints appear only on near-term visible cards or as a global band when one near-term advisory affects multiple visible current/near-term cards.

Far-future month cards must not carry weather hints.

Weather may reference:

- rain
- wind
- frost
- heat
- useful dry/calm forecast context

Weather copy may remind the user to check:

- local forecast
- actual orchard/garden conditions
- product label where relevant

Kalendar follows Home §1.9: forecast data does not know the exact micro-location, so weather copy may remind the user to check local forecast and actual orchard conditions.

Weather must not:

- command orchard action
- block actions
- hide actions
- auto-schedule
- auto-shift
- score actions
- rank cards by weather

### 2.18 Tap destination

Card tap opens:

- seasonal action detail, or
- monitoring program detail

Kalendar itself does not show inline logging buttons.

Capture flows belong to S7.

S7 owns:

- logging an Activity
- recording a skip
- multi-plant capture
- recording an Observation
- monitoring capture
- stage confirmation

### 2.19 Plant filter

No plant filter in S6 Kalendar.

Kalendar default is orchard-wide.

Plant-specific seasonal view belongs in Plant detail.

### 2.20 Kalendar must not do

Kalendar must not:

- behave like a daily task list
- use `zadatak`, `to-do`, `trebaš`, `moraš`, `kasniš`, `hitno`, `overdue`, or equivalent pressure copy
- use `prozor` as user-facing window copy
- duplicate Home section names as Kalendar structure
- fan out one seasonal action into per-plant task cards
- aggregate cards by visible label alone
- show progress bars, percentages, completion scores, or achievement framing
- bury monitoring/risk items without a discoverability signal in the month header area
- derive urgency from missing monitoring observations
- show monitoring compliance, engagement, coverage, or cadence-drift metrics
- command action based on weather
- hide, block, reschedule, or reorder seasonal actions based on weather
- generate AI-authored action recommendations

## 3. Dnevnik

Use Model E+:

```text
Event-date chronological Dnevnik with year/month groups, lightweight filters, grouped multi-plant rows, contextual scoped add, two-axis date honesty, and future correction/search dependencies.
```

User-facing label:

```text
Dnevnik
```

Full title where space allows:

```text
Dnevnik voćnjaka
```

### 3.1 Product role

Dnevnik is the chronological proof/history surface for Activities and Observations.

It answers:

- what happened in the orchard
- when it happened
- which plant or plants it applied to
- whether evidence was added later
- whether a seasonal action happened after its relevant period
- what happened to one plant over time, especially for agronomist or agro-pharmacy conversations

Dnevnik is:

- chronological proof/history
- orchard-wide by default
- year/month grouped
- filterable
- history-preserving
- simple on iPhone
- useful for agronomist/agro-pharmacy conversations through plant-filtered routes

Dnevnik is not:

- a daily task list
- a capture-first surface
- a compliance surface
- a scoreboard
- a backup/export/import screen
- a monitoring nag screen
- a replacement for `Pregled`, `Kalendar`, `Biljke`, or `Detalj sezonske radnje`

### 3.2 Model

Dnevnik uses:

```text
Model E+ — Event-date chronological Dnevnik with year/month groups, lightweight filters, grouped multi-plant rows, contextual scoped add, two-axis date honesty, and future correction/search dependencies.
```

The core rule is:

```text
history follows the event date, not the date evidence was added to the app
```

### 3.3 Default Dnevnik

Default title:

```text
Dnevnik voćnjaka
```

Default structure:

```text
Dnevnik voćnjaka

[Voćka] [Tip evidencije] [Sezona / godina]

Sezona 2026.
Ožujak 2026.

22.3.2026. · Bakar — zimska zaštita
Odrađeno · 8 voćki
```

Rules:

- no add button in default Dnevnik
- no export/import/backup controls
- no score
- no compliance
- no `sve je odrađeno`
- no `nema zadataka danas`
- no weather block
- no status sentence from Pregled

### 3.4 Plant-filtered Dnevnik

Route:

```text
Biljke → Plant detail → Otvori dnevnik ove voćke
```

Title:

```text
Dnevnik ove voćke
Trešnja — Kordia · donji vrt
```

Contextual entry:

```text
Dodaj evidenciju za ovu voćku
```

Rules:

- S6 defines label and placement only
- S7 owns full capture flow
- plant is prefilled in capture flow
- default row grouping still uses event date
- archived plant route must still work

### 3.5 Seasonal-action-filtered Dnevnik

Route:

```text
Detalj sezonske radnje → Otvori u Dnevniku voćnjaka
```

Title example:

```text
Dnevnik voćnjaka — Bakar, zimska zaštita
```

Contextual entry:

```text
Dodaj evidenciju za ovu radnju
```

Rules:

- S6 defines label and placement only
- S7 owns full capture flow
- seasonal action is prefilled in capture flow
- internally, a seasonal-action filter is keyed by the catalog-backed action-window identity (`window_def_id` + `catalog_version`), not by bare `action_type`
- the user sees the orchard-language label, for example `Bakar — zimska zaštita`; the user must not see `window_def_id`
- default scope is all years, newest first
- no score/streak/compliance

### 3.6 Year/month grouping

Rows are grouped by event date:

- Activity `occurred_on`
- Observation `observed_on`

Rules:

- do not group by `recorded_at`
- years newest first
- months newest first
- rows newest first inside month
- empty years and months do not render
- lifecycle dates (`planted_at`, future `purchased_at`, future `archived_at`) are not synthetic Dnevnik rows in S6

### 3.7 Filters

Filters:

```text
Voćka
Tip evidencije
Sezona / godina
```

`Tip evidencije` buckets:

```text
Sezonske radnje
Praćenje
Opažanja
```

Mapping:

```text
Sezonske radnje → Activity records
Praćenje → program-attached monitoring observations
Opažanja → free-standing observations, symptoms, phenology/stage observations
```

Rules:

- filters are single-select in S6
- filters compose with AND semantics
- no search in S6
- second-level filters are future dependency
- broad category filtering/search may use `action_type`, but seasonal-action filtering must use window identity; `action_type = copper` is not enough to distinguish `Bakar — zimska zaštita`, `Bakar — rano proljeće`, and `Bakar — nakon rezidbe`
- do not create monitoring coverage / compliance views

Future search and second-level filters should support common recall needs such as:

- prskanja
- rezidba
- berba
- kupnja/sadnja if future lifecycle events are modeled
- cvatnja/fenofaza
- trešnjina muha
- free-standing notes and observations

### 3.8 Row anatomy

Default row:

```text
<date>. · <event label>
<status / scope / markers>
```

Example:

```text
22.3.2026. · Bakar — zimska zaštita
Odrađeno · 8 voćki
```

Expansion may show:

```text
Radnja: 22.3.2026.
Evidencija dodana: 10.4.2026.
```

Multi-plant rows expand to show plant scope.

Expansion may also show:

- plant names included in the grouped row
- notes, when present
- catalog/version-resolved label context, when needed to keep historical meaning clear
- free-standing observation marker, when applicable
- correction status in the future, after a correction flow exists

### 3.9 Marker semantics

There are two independent marker axes.

#### Late execution / outside period

Marker:

```text
nakon razdoblja
```

Meaning:

- the event happened after the relevant seasonal action period
- derived from seasonal-action/window context
- not a stored Activity status
- should show in default Dnevnik when reliably computable
- otherwise omit rather than guess

#### Late logging / retroactive entry

Marker:

```text
evidentirano naknadno
```

Meaning:

- the event happened earlier
- the evidence was added to the app later
- based on `recorded_at - occurred_on/observed_on`
- inline marker threshold: `≥ 7 days`
- expanded row shows exact event date and evidence-added date

If both apply, order:

```text
nakon razdoblja · evidentirano naknadno
```

#### Correction marker

Correction marker copy must be owner-approved before implementation.

Candidate neutral marker:

```text
ispravljeno
```

Rules:

- correction marker is display-only
- original records remain visible and immutable
- marker rendering must follow the correction storage / derived-display rules approved for the implementing slice
- do not invent destructive edit/delete copy
- do not expose technical correction terms in the Dnevnik row

### 3.10 Row examples

Normal done:

```text
10.2.2026. · Bakar — zimska zaštita
Odrađeno · Trešnja Kordia
```

Skipped:

```text
22.2.2026. · Bijelo mineralno ulje
Preskočeno · Trešnja Kordia
```

Performed in period, entered late:

```text
10.2.2026. · Bakar — zimska zaštita
Odrađeno · Trešnja Kordia · evidentirano naknadno
```

Performed after period:

```text
20.2.2026. · Bakar — zimska zaštita
Odrađeno · Trešnja Kordia · nakon razdoblja
```

Performed after period and entered late:

```text
20.2.2026. · Bakar — zimska zaštita
Odrađeno · Trešnja Kordia · nakon razdoblja · evidentirano naknadno
```

Free-standing observation:

```text
3.6.2026. · Opažanje
Trešnja Kordia — slabo zametanje plodova
```

Expanded free-standing observation may show:

```text
nije vezano uz program praćenja
```

Monitoring observation:

```text
12.5.2026. · Praćenje jabučnog savijača — provjera klopke
2 ulova · Jabuka Fuji
```

Multi-plant grouped activity:

```text
22.3.2026. · Bakar — zimska zaštita
Odrađeno · 8 voćki
```

Archived plant record:

```text
22.3.2026. · Bakar — zimska zaštita
Odrađeno · Šljiva Stanley (arhivirana)
```

### 3.11 Multi-plant grouping

Rules:

- one real-world grouped Activity/Observation renders as one row
- do not fan out one grouped action into per-plant rows by default
- row expansion may show plant scope
- plant-filtered Dnevnik may still show grouped rows that include the filtered plant
- no progress bars or percentages

Grouping is display/query behavior only.

It must not change immutable record identity, window-state derivation, monitoring program derivation, or correction behavior.

### 3.12 Archived plants

Rules:

- archived plant history remains visible
- archived plants may appear in plant filter with `(arhivirana)` suffix
- archived plant rows may show `(arhivirana)` suffix
- no fading
- no strikethrough
- no warning/error styling
- archive flow belongs to `## 14. Plant lifecycle / archive flow`

### 3.13 Free-standing observations

Rules:

- free-standing observations are first-class history records
- they appear under `Opažanja`, not `Praćenje`
- do not downgrade or alarm-style them
- marker `nije vezano uz program praćenja` appears in expansion by default; inline only when needed to avoid confusion
- free-standing observations must not be shown as missing monitoring evidence
- no attach-to-program flow

### 3.14 Monitoring rows

Locked §0 applies.

Program-attached monitoring observations appear under:

```text
Praćenje
```

Rules:

- no time-since-last
- no cadence drift
- no compliance/coverage/engagement metrics
- no `start checking`
- no `vrijeme za provjeru`
- no alarm styling for absence
- absence of monitoring observations is not a Dnevnik row

### 3.15 Empty states

Use:

```text
Još nema evidencije.
Još nema evidencije za ovu voćku.
Još nema evidencije za ovu sezonsku radnju.
U sezoni 2024. nema evidencije.
```

Do not use:

```text
Sve je odrađeno.
Bravo.
Nema zadataka danas.
Bez zapisa.
```

`Bez zapisa` remains monitoring-specific per locked §0.

### 3.16 Export/import prohibition

Dnevnik must not host:

```text
Izvezi dnevnik
Uvezi dnevnik
Kopiraj dnevnik
DNEVNIK VOCNJAKA export heading
```

Backup/export/import belongs to future Settings / data safety, not Dnevnik.

### 3.17 Correction boundary

Rules:

- Dnevnik does not edit or delete records in S6
- records are immutable
- wrong date / wrong plant / wrong action / wrong status / wrong note requires future correction flow
- future correction must annotate or supersede, not mutate existing records
- Dnevnik may later render correction status neutrally
- no destructive delete

### 3.18 Dnevnik must not do

Dnevnik must not:

- behave like a task list
- use `zadatak`, `trebaš`, `moraš`, `kasniš`, `hitno`, or `overdue`
- show progress bars, percentages, or completion score
- show monitoring compliance, coverage, or cadence drift
- show weather blocks
- host backup/export/import
- edit/delete immutable records
- turn free-standing observations into monitoring evidence
- generate AI recommendations

## 4. Biljke

Biljke is the plant profile and plant-specific lens surface.

Use Model G+:

```text
Karton voćke profile model with bounded plant-specific lens
```

Biljke combines:

```text
Karton voćke + plant-specific seasonal context + Dnevnik entry point + lifecycle / plan-management entry points
```

It exists so the grower can answer:

- what exactly this plant is
- how to distinguish it from similar plants in the orchard
- what stable species/variety context matters
- what current plant-specific seasonal context is relevant
- what has happened to this plant over time
- where to manage the plant's lifecycle later without losing history

Real anchor case:

A cherry is not fruiting. The grower goes to an agronomist or agro-pharmacy and needs to answer:

- which variety?
- which rootstock?
- when planted?
- when purchased?
- source/nursery?
- where is it in the orchard?
- did it flower?
- was it pruned?
- was it sprayed?
- did it have harvest?
- what observations exist?

Biljke must support that conversation without becoming a per-plant task list.

### 4.1 Product role

Biljke is:

- plant-level
- profile-first
- history-aware
- seasonally contextual
- beginner-readable
- iPhone-first
- a route into `Dnevnik` for one plant
- a future entry point for plant lifecycle and plan-management flows

Biljke is not:

- a second `Pregled`
- a replacement for `Kalendar`
- a full `Dnevnik`
- a per-plant checklist
- a capture form
- an edit/archive implementation spec
- a schema/model patch

### 4.2 Biljke list

Biljke list stays scannable.

Default sort:

```text
stable app/orchard order
```

Do not sort dynamically by urgency, seasonal state, monitoring state, or `planted_at` descending.

Each row may show:

- line 1: display label if available; otherwise species + variety
- line 2: optional short disambiguator when useful, such as position/rootstock
- optional one light seasonal cue
- optional small neutral plan-change marker when that plant has available plan changes

Allowed row example:

```text
Trešnja — Kordia
Položaj: donji vrt · Podloga: Gisela 5
Aktualno: Postavljanje mreže protiv ptica
```

If this is too much for a compact row, exact visual grouping, truncation, and component behavior are later design decisions. S6 defines the allowed content and forbidden content.

Plan-change row marker:

```text
Promjene plana
```

Rules:

- only when that plant has available plan changes
- row still opens Plant detail
- marker is discovery only
- marker must not replace plant identity
- marker must not make Biljke a task list
- marker must not use alarm, progress, task, or compliance framing
- marker does not replace the locked Plant detail §4.13 signal

Rows must not show:

- evidence counts
- monitoring absence
- `Bez zapisa`
- compliance/cadence state
- progress bars
- percentages
- task framing
- per-plant checklist controls
- alarm styling from missing data

### 4.3 Add plant entry point

Biljke list must reserve a prominent add-plant entry point:

```text
Dodaj voćku
```

Rules:

- visible and easy to tap on iPhone
- not a tiny `+`
- belongs to Biljke
- S6 defines placement/label/boundary only
- full add flow belongs to S7/S8 plant profile management

### 4.4 Plant detail structure

Plant detail is the profile surface for one real plant.

Recommended top-to-bottom structure:

1. plant title / display identity
2. archived-state marker only when the plant is archived
3. `Karton voćke`
4. current seasonal actions for this plant
5. `Na što obratiti pažnju`
6. `Sezonski rizici`
7. monitoring for this plant
8. `Dnevnik ove voćke`
9. future plan/lifecycle entry points

Above the fold should prioritize:

- plant identity
- `Karton voćke`
- current seasonal context, when present
- `Dnevnik ove voćke` entry point

Plant detail may omit empty seasonal sections. Do not render filler blocks just to make the screen look complete.

### 4.5 Karton voćke

Plant detail must include:

```text
Karton voćke
```

Karton voćke is the canonical plant profile block.

Fields that S6 UX requires:

```text
Vrsta
Sorta
Podloga
Posađeno
Kupljeno
Izvor / rasadnik
Položaj / oznaka
Bilješka
Korisnička oznaka / ime
```

Example:

```text
Trešnja — Kordia
Podloga: Gisela 5
Posađeno: 15.3.2026.
Kupljeno: 14.3.2026.
Izvor: Agrocar
Položaj: donji vrt
Bilješka: jednogodišnja sadnica
```

Rules:

- Use the user's display label when available.
- If no display label exists, fall back to species + variety where known.
- If variety is unknown or absent, use a clear species-level label.
- `Položaj / oznaka` exists to disambiguate duplicate or similar plants, not to define weather location or GPS behavior.
- Do not infer rootstock, source, purchase date, or location.
- Do not hide missing profile fields silently on Plant detail when they are product-important.

Current locked domain may not contain all Karton voćke fields. S6 records the UX requirement and future dependency; it does not add fields to `V2_DOMAIN_MODEL.md`.

### 4.6 Missing / unknown data

Plant detail must distinguish:

```text
nije upisano
ne znam
```

Semantics:

- `nije upisano` = no value provided
- `ne znam` = user explicitly chose unknown

Examples:

```text
Podloga: nije upisano
Podloga: ne znam
Položaj: nije upisano
Položaj: ne znam
```

Rules:

- Missing and explicitly unknown are neutral states.
- Do not use warning/error styling.
- Do not treat `ne znam` as a value the app should keep asking for.
- Do not derive seasonal behavior from missing or unknown profile data unless a future locked model explicitly defines that behavior.
- Storage, validation, and edit controls for these states belong to future plant profile management, not S6.

### 4.7 Current seasonal actions for this plant

Plant detail may show current plant-specific seasonal actions.

This section is a bounded lens, not a task list and not a second Home.

Allowed content:

- action label
- natural date/relevance copy
- status such as `Aktualno` or `Pri kraju`
- short purpose cue when the title alone is not beginner-clear
- optional neutral reference to existing plant evidence only when it helps identify recent context; full evidence state belongs in `Detalj sezonske radnje` and `Dnevnik ove voćke`
- route to Seasonal action detail

Allowed examples:

```text
Aktualno
Postavljanje mreže protiv ptica
Aktualno od 1.6. do 30.6.
```

```text
Bakar – kovrčavost lista
Bilo je aktualno od 10.2. do 5.3.
```

Rules:

- Use the same `Pri kraju` rendering for domain-derived `closing-soon`; do not restate or redefine the threshold.
- Do not show per-plant capture controls here.
- Do not show checkboxes.
- Do not show progress bars or percentages.
- Do not duplicate `Pregled` section structure.
- Do not sort the whole plant list by this section.
- If no seasonal action is current for the plant, omit the section or show a compact neutral empty line; do not invent filler tasks.

### 4.8 Na što obratiti pažnju

Plant detail may show stable species/variety sensitivities:

```text
Na što obratiti pažnju
```

Do not use:

```text
Slabosti sorte
```

Allowed cherry examples:

```text
Pucanje plodova nakon kiše prije berbe.
Ptice prije berbe.
Trešnjina muha tijekom dozrijevanja plodova.
Mraz tijekom cvatnje i ranog razvoja plodova.
```

Rules:

- Use authored catalog/template content only.
- Do not invent AI diagnosis.
- Do not imply a treatment pipeline.
- Do not imply the plant currently has the issue.
- Keep copy educational and calm.
- Full monitoring/risk detail belongs in Monitoring / Awareness detail, not this block.

### 4.9 Sezonski rizici

Plant detail may show time-bound active risk-awareness items:

```text
Sezonski rizici
```

Do not use:

```text
svijest
```

Rules:

- `Sezonski rizici` is separate from `Na što obratiti pažnju`.
- Show only time-bound active or near-term risk-awareness context relevant to this plant.
- Risk-awareness detail remains separate from Seasonal action detail.
- Do not imply automatic treatment.
- Do not use alarm styling by default.
- Do not create a detect -> treat pipeline.
- Tap destination is future Monitoring / Awareness detail.

Allowed examples:

```text
Rizik od pucanja plodova
Aktualno pred berbu, posebno nakon obilne kiše.
```

```text
Rizik od mraza
Posebno važno tijekom cvatnje i ranog razvoja plodova.
```

### 4.10 Monitoring

Monitoring may appear on Plant detail, but locked §0 governs it completely.

Plant detail monitoring may show:

- monitoring program label
- program state (`pre_season`, `active`, `ended`) in neutral user-facing copy
- factual date range
- factual last observation date
- factual observation count, only as history context
- `cadence` only as static interval declaration, if declared
- `Bez zapisa` only in monitoring context and only as neutral copy
- route to Monitoring / Awareness detail or Monitoring capture flow when those are defined

Plant detail monitoring must not show:

- time since last observation
- cadence drift
- compliance metrics
- coverage metrics
- engagement metrics
- "start checking" prompts
- "trebaš provjeriti"
- "vrijeme za provjeru"
- alarm styling for absence of observations
- free-standing observations inside monitoring cards

Free-standing observations belong in `Dnevnik ove voćke` / Dnevnik context, not monitoring cards.

### 4.11 Dnevnik ove voćke

Plant detail must include:

```text
Dnevnik ove voćke
```

This block supports quick real-world recall, including the agronomist/agro-pharmacy conversation.

It should show:

- current-year factual summary
- 5–7 recent Activities + Observations
- link to Dnevnik filtered by this plant

Preferred copy:

```text
Dnevnik ove voćke
U 2026.: 3 prskanja, 1 rezidba, 0 berbi, 2 opažanja.

Otvori dnevnik ove voćke
```

Rules:

- Prefer `opažanja` over `zapisa praćenja` in general history copy.
- Current-year summary must be factual, not scoring.
- Recent records are a preview only.
- Full year/month navigation belongs in `Dnevnik`, not Plant detail.
- Full multi-year history belongs in `Dnevnik`, not Plant detail.
- Free-standing observations appear here as normal plant-history records, not inside monitoring cards.

### 4.12 Add / edit / archive entry points

Plant detail and Biljke list reserve future lifecycle/profile entry points.

Add plant:

```text
Dodaj voćku
```

Edit plant card:

```text
Uredi karton voćke
```

Archive plant:

```text
Arhiviraj voćku
```

Do not use:

```text
Obriši biljku
```

Rules:

- S6 defines labels, placement expectations, and boundaries only.
- Full add/edit/archive flows belong to future S7/S8 sections.
- `Dodaj voćku` must be visible and easy to tap on iPhone.
- `Uredi karton voćke` belongs on Plant detail.
- `Arhiviraj voćku` preserves history and Dnevnik.
- Optional explanatory copy for future archive confirmation may use `Ukloni iz aktivnog voćnjaka`, but the primary action label is `Arhiviraj voćku`.

### 4.13 Plan/template update signal

Plant detail is the future place for a per-plant plan/template update signal:

```text
Ažuriranje plana dostupno
Pregledaj promjene prije primjene.
```

Rules:

- No silent update.
- No destructive regenerate button.
- Do not render dead UI before the review flow exists.
- Behavior belongs to `## 9. Plan upgrade review flow`.
- The future flow must preserve overlays/history and avoid silent regeneration.

### 4.14 Active vs archived plant visibility

Archive removes a plant from the active orchard without deleting history.

Rules:

- Archived plants should not appear in the default active Biljke list.
- Archived plants should remain reachable through Dnevnik/history/archive access.
- Archived plants should not generate future/current seasonal actions after archive date.
- Historical records before archive date remain preserved and visible.
- Past records must retain plant identity labels, including display label and disambiguators where available.
- Archive must not rewrite or delete Activity or Observation records.
- Restore/replacement behavior is future flow scope.

S6 does not define storage fields, archive confirmation, restore mechanics, or migration behavior.

### 4.15 Future dependency table

S6 Biljke records UX requirements that current locked domain may not yet support.

Do not implement these as schema changes in S6.

| S6 UX requirement | Future owner | Must resolve later | Recommended target |
|---|---|---|---|
| `display_label` / `Korisnička oznaka / ime` | S7/S8 | stored shape, fallback display, duplicate handling | `## 13. Plant profile management flow` + S8 data/storage |
| `rootstock` / `Podloga` | S7/S8 | value entry, `nije upisano`, `ne znam`, import/export | `## 13. Plant profile management flow` + S8 data/storage |
| `purchased_at` / `Kupljeno` | S7/S8 | date entry, missing/unknown semantics, import/export | `## 13. Plant profile management flow` + S8 data/storage |
| `source_label` / `Izvor / rasadnik` | S7/S8 | free text vs controlled value, import/export | `## 13. Plant profile management flow` + S8 data/storage |
| `position_label` / `Položaj / oznaka` | S7/S8 | duplicate disambiguation, copy, import/export | `## 13. Plant profile management flow` + S8 data/storage |
| `profile_note` / `Bilješka` | S7/S8 | edit behavior, import/export | `## 13. Plant profile management flow` + S8 data/storage |
| per-field unknown state | S7/S8 | `nije upisano` vs `ne znam` representation | `## 13. Plant profile management flow` + S8 data/storage |
| `archived_at` / archive state | S7/S8/S9 | active vs archived scope, archive date, generated action exclusion | `## 14. Plant lifecycle / archive flow` + S8/S9 |
| archive reason, if used | S7/S8 | whether it exists, copy, import/export | `## 14. Plant lifecycle / archive flow` |
| stable app/orchard order source | S7/S8 | initial order, reorder policy, import/export | `## 13. Plant profile management flow` + S8 data/storage |
| `Dodaj voćku` | S7/S8 | add flow, initial plan generation, validation | `## 13. Plant profile management flow` |
| `Uredi karton voćke` | S7/S8 | edit flow, validation, data preservation | `## 13. Plant profile management flow` |
| `Arhiviraj voćku` | S7/S8/S9 | archive flow, history preservation, restore/replacement | `## 14. Plant lifecycle / archive flow` |
| `Dnevnik ove voćke` | S6/S7 | plant filter, year/month navigation, archived access | `## 3. Dnevnik` |
| `Ažuriranje plana dostupno` | S7/S9 | review-before-apply, overlay preservation, no regeneration | `## 9. Plan upgrade review flow` |
| `Sezonski rizici` tap destination | S6/S7 | risk-awareness detail, no treatment pipeline | `## 15. Monitoring / Awareness detail` |
| Monitoring on Plant detail | S6/S7 | detail/capture routing while preserving §0 | `## 10. Monitoring capture flow` + `## 15. Monitoring / Awareness detail` |
| Stable species/variety sensitivities source | future catalog/content session | authored source/structure; no AI diagnosis | future catalog/content owner, referenced by `## 15. Monitoring / Awareness detail` |

### 4.16 S6 / S7 / S8 / S9 boundary

S6 owns:

- Biljke list content rules
- Plant detail structure
- `Karton voćke` UX requirement
- copy labels for add/edit/archive entry points
- plant-specific seasonal lens boundaries
- Dnevnik preview and route requirement
- future dependency map

S7 owns:

- add plant flow
- edit plant card flow
- archive confirmation flow
- Dnevnik plant-filter interactions
- monitoring capture route behavior
- capture labels, forms, validation, and error states

S8 owns:

- stored plant profile shape
- missing/unknown representation
- archive state storage
- import/export implications
- stable order storage
- migration/storage architecture

S9 owns:

- derived active vs archived seasonal scope
- plan/template update diff
- review-before-apply behavior
- overlay reconciliation
- weather/advisory derived layers where relevant

### 4.17 Biljke must not do

Biljke must not:

- behave like a daily task list
- become a second `Pregled`
- replace `Kalendar`
- replace full `Dnevnik`
- show per-plant checklist controls
- duplicate capture actions per seasonal row
- sort plants dynamically by urgency
- infer facts from missing profile data
- treat missing rootstock/location/source as an error
- derive urgency from missing monitoring observations
- show monitoring compliance, coverage, engagement, or cadence-drift metrics
- show free-standing observations inside monitoring cards
- use `Slabosti sorte`
- use `svijest`
- use `Obriši biljku`
- silently update plan/template versions
- offer destructive plan regeneration
- hide archived plant history
- define S7/S8/S9 implementation details

## 5. Detalj sezonske radnje

Detalj sezonske radnje is the drill-in destination for `Pregled` and `Kalendar` cards that represent seasonal actions whose outcome can be captured as Activity evidence.

This surface covers:

- one-time / short seasonal actions: copper, white oil, pruning, bird net, fertilization, harvest, thinning, winter inspection
- long-running seasonal care: irrigation / watering, with a special non-prescriptive block

This surface does not cover:

- monitoring program detail
- awareness/risk detail
- `Dnevnik` / multi-year history
- Plant detail
- S7 capture flow

This section only defines Seasonal action detail. Monitoring program detail and Monitoring / Awareness detail remain separate future S6 surfaces and must not be inferred from this section.

Risk-awareness cards such as:

```text
Rizik od mraza
Rizik od pucanja plodova
Rizik od suše
Rizik od vrućine
```

belong to a separate Monitoring / Awareness detail surface, not Seasonal action detail.

### 5.1 Product role

Detalj sezonske radnje is:

- orchard-level by default
- seasonal-action-level
- current-cycle occurrence detail
- evidence-aware, not checklist-driven
- beginner-readable
- iPhone-first
- a detail surface for understanding before deciding

It is not:

- a daily task list
- a per-plant checklist
- a monitoring nag screen
- a weather decision engine
- a multi-year report
- an AI recommendation surface
- an S7 capture form

### 5.2 Layered hybrid model

Use Model F — layered hybrid.

Above the fold:

- action title
- date/relevance copy
- plant scope
- orchard-level evidence summary
- optional uniform gate chip
- optional near-term weather hint

Below the fold:

- purpose / beginner explanation
- conditions and cautions
- young-tree caveat, if authored in catalog/template content
- product/material category, if authored in catalog/template content
- irrigation special block, only for irrigation/watering
- expandable or secondary per-plant evidence
- single screen-level capture entry placeholder
- `Dnevnik voćnjaka` footer link

### 5.3 Identity

The detail is bound to one catalog-backed seasonal-action occurrence, equivalent to:

```text
(window_def_id, catalog_version, cycle_year, scoped plant set)
```

Never aggregate by visible label alone.

Examples:

- `Bakar – zimska zaštita`
- `Bakar nakon rezidbe`
- species-specific copper actions

must remain distinct when their catalog identity, timing, purpose, or scoped plants differ.

### 5.4 User-facing terminology

Use committed terminology:

```text
Primjenjuje se na
evidencija
evidentirano
Dnevnik
Dnevnik voćnjaka
Pri kraju
```

Avoid user-facing:

```text
prozor
zadatak
trebaš
moraš
kasniš
hitno
overdue
mješovito
još 4 voćke
sve je odrađeno
bravo
```

`Bez zapisa` is reserved for monitoring per locked §0 and must not be used on Seasonal action detail.

### 5.5 Date / relevance copy

Use natural Croatian date copy:

```text
Aktualno od 15.2. do 28.2.
Aktualno do 28.2. — pri kraju.
Počinje 12.4.
Bilo je aktualno od 1.2. do 15.2.
```

Consume the domain-derived `closing-soon` state and render it as:

```text
Pri kraju
```

S6 must not restate or redefine the `closing-soon` threshold.

### 5.6 Plant scope

Use:

```text
Primjenjuje se na 8 voćki.
Primjenjuje se na trešnju Kordia.
```

Do not use:

```text
Vrijedi za
Odnosi se na
```

Do not list every plant in the top summary.

Per-plant breakdown belongs in the secondary per-plant evidence block.

### 5.7 Orchard-level evidence summary

Allowed summary copy:

```text
Evidentirano za 4/8 voćki.
Odrađeno za 4/8 voćki.
Preskočeno za 4/8 voćki.
Nema evidencije za 8 voćki.
Odrađeno za sve voćke.
Preskočeno za sve voćke.
Evidentirano za sve voćke.
```

Rules:

- `Odrađeno` only when counted records are done.
- `Preskočeno` only when counted records are skipped.
- `Evidentirano` for mixed done/skipped or generic evidence.
- `Nema evidencije` only for past/closed seasonal action contexts with no done/skipped evidence.
- Do not show evidence copy for future actions with no records unless there is meaningful pre-existing evidence.

Forbidden:

- progress bars
- percentages
- scores
- achievement framing
- guilt copy
- pressure copy
- per-plant fan-out in the top summary

### 5.8 Per-plant evidence

Per-plant evidence is secondary.

It must not dominate the screen.

It must not precede the orchard-level summary.

It may be inline for small scope, but should be summary-first / collapsible / secondary for larger scope.

S6 defines the principle, not exact threshold or component behavior.

Row-state mapping:

| Context | Row copy |
|---|---|
| done | `Evidentirano 18.2.` |
| done_late | `Evidentirano 5.3. nakon razdoblja.` |
| skipped | `Preskočeno 22.2.` |
| current/open with no record | `Nije evidentirano` |
| past closed with no record | `Nema evidencije` |
| upcoming | `Još nije aktualno` |

Per-plant rows must not show:

- checkboxes
- per-plant capture buttons
- countdowns like `još 4 voćke`
- progress bars
- urgency colors
- guilt copy

Tap on a plant row may later route to Plant detail, but must not invoke capture directly in S6.

### 5.9 Gate-state

Gate-state chips use only the locked enum:

```text
čeka
otvoreno
propušteno
ne primjenjuje se
```

Do not introduce:

```text
mješovito
```

Rules:

- Show a top-level gate chip only when `open_condition` exists and gate-state is uniform across all scoped plants.
- If gate-state differs across plants, do not show a mixed top chip.
- Per-plant rows may show per-plant gate chips only where meaningful.
- If no `open_condition` exists, omit gate-state UI entirely.
- Bare `čeka` must have beginner context, for example `Otvara se nakon zimske rezidbe.`

### 5.10 Purpose / beginner explanation

This detail surface is the canonical place for full beginner explanation.

It may explain:

- what the action is
- why it matters
- what plant state / timing matters
- when to skip/delay/avoid
- product/material category
- young-tree caveats, if authored in catalog/template content

Use plain Croatian.

Avoid unexplained agronomic terms.

Do not use AI-authored recommendations.

### 5.11 Authored catalog/template content boundary

Detail may surface authored catalog/template explanatory content where available, such as young-tree caveats, product/material category, spacing notes, plant-state cues, and skip/delay notes.

S6 does not require these to exist as separate structured fields.

### 5.12 Product / material category

Use category labels only.

No commercial brand names.

Prefer crop/use-specific label-based wording:

```text
registrirani bakreni pripravak za konkretnu voćku i namjenu prema etiketi proizvoda
bijelo / mineralno / parafinsko ulje registrirano za konkretnu voćku i namjenu prema etiketi proizvoda
mreža protiv ptica odgovarajuće veličine
agrotekstil ili pokrov za zaštitu od mraza
sredstvo za zaštitu rana
kap na kap
kanta
crijevo
prskalica
kontroler navodnjavanja
bez infrastrukture
```

### 5.13 Young-tree caveats

Surface young-tree caveats only when authored catalog/template content provides them.

Do not structurally hide actions based on young-tree assumptions.

Examples:

```text
Za mlada stabla god. 1–2 bez uroda: obično nije potrebno.
Za mlada stabla: primjenjuje se samo ako postoji stvaran razlog ili lokalni savjet.
Za mlada stabla god. 1–2: fokus na formiranje uzgojnog oblika.
```

These must be factual and non-guilt-inducing.

### 5.14 Irrigation / watering

Irrigation/watering stays inside Seasonal action detail as long-running seasonal care, not a separate surface.

Kalendar stays short.

Detail may include educational orientation.

Allowed direction:

- in dry periods young fruit trees may often need roughly `20–30 L` per week
- deeper watering `1–2 times weekly` is usually preferable to frequent shallow watering
- adjust for rainfall, soil, mulch, plant age, heat, irrigation method, actual soil moisture
- drip systems: emitter flow × number of emitters × runtime
- users may use `kap na kap`, `kanta`, `crijevo`, `prskalica`, `kontroler navodnjavanja`, or `bez infrastrukture`

Frame as orientation, not a command.

Example:

```text
Orijentacija, ne uputa:
Mlade voćke u sušnim razdobljima često trebaju otprilike 20–30 L vode tjedno.
Bolje je zaliti rjeđe i dublje, npr. 1–2 puta tjedno, nego često plitko.
Prilagodi količinu kiši, tlu, malču, dobi voćke, vrućini, načinu zalijevanja i stvarnoj vlazi tla.
Za kap na kap: protok kapaljke × broj kapaljki × trajanje = približna količina vode.
```

Must not show:

```text
Zalij danas.
Uključi zonu 2 sata.
Daj 60 L vode.
Obavezno zalij 3 puta tjedno.
```

### 5.15 Bird net / variety timing

Do not hardcode variety-specific dates in UX model.

Detail may say:

```text
Točno vrijeme ovisi o sorti, očekivanoj berbi, promjeni boje plodova i pritisku ptica.
Kao orijentacija: postaviti prije sazrijevanja, kada plodovi počinju mijenjati boju i prije jačeg pritiska ptica.
Ako nema vidljivog pritiska ptica ili nema uroda, postavljanje se može preskočiti.
```

Catalog/template data owns specific timing.

### 5.16 Weather / local conditions

Weather is advisory only.

Allowed examples:

```text
Upozorenje: moguća kiša za oko 36 sati.
Za prskanje je važno suho i mirno vrijeme prije i nakon primjene.
Provjeri lokalnu prognozu i stvarne uvjete u vrtu prije odluke.
```

Weather must not:

- command action
- block action
- hide action
- auto-shift action
- score action
- rank cards by weather

Weather/local-condition copy may remind users that forecast data does not know the exact micro-location.

### 5.17 Dnevnik relationship

No prior-year excerpt in Seasonal action detail.

Only link:

```text
Otvori u Dnevniku voćnjaka
```

`Dnevnik` owns multi-year proof/history.

### 5.18 Capture entry

S6 may name a single screen-level placeholder:

```text
Dodaj evidenciju
```

Rules:

- one screen-level entry
- not duplicated per plant row
- final label and flow are owned by S7

S7 owns:

- form fields
- validation
- multi-plant selection
- skip flow
- confirmation copy
- error states
- whether it is a button/sheet/full-screen flow

### 5.19 Seasonal action detail must not do

Detalj sezonske radnje must not:

- behave like a task detail
- use `prozor`, `zadatak`, `trebaš`, `moraš`, `kasniš`, `hitno`, or `overdue`
- display per-plant checklist controls
- duplicate capture actions per plant
- show progress bars, percentages, scores, or achievement framing
- use `Bez zapisa`
- render monitoring or risk-awareness detail
- show prior-year excerpts or analytics
- use branded product names
- prescribe irrigation as a command
- command, block, hide, or reschedule based on weather
- define S7 capture flows

## 6. Window state → section mapping

*To be filled in S6.*

## 7. End-of-season summary sheet

*To be filled in S6. Subject to §0 hard constraints — no "missed monitoring" roll-up, no compliance scorecard.*

## 8. Weather 24–72h and >72h states

*To be filled in S6.*

## 9. Plan upgrade review flow

Owner: S7.

Plan upgrade review defines the UX flow for reviewing available plan changes before the user applies them to one plant.

This is UX flow documentation only. It does not define runtime implementation, storage mechanics, id generation, trigger logic, plan comparison engine, template reconciliation, user adjustment reconciliation, import/export behavior, migration, or derived-state algorithms.

### 9.1 Purpose and boundary

§9 owns UX documentation for:

- plan-change discovery labels
- per-plant review entry
- review screen shape
- history-preservation copy
- change bucket labels
- apply and postpone behavior
- forbidden silent or destructive behavior
- dependency notes for S8/S9

§9 does not own:

- trigger logic for when changes become available
- plan comparison engine
- storage shape
- persistence for postponed review state
- template reconciliation mechanics
- user adjustment reconciliation mechanics
- derived active-plan state
- Dnevnik row rendering
- import/export behavior
- migration behavior
- runtime implementation

Current §9 is per-plant only.

Current §9 does not include:

- orchard-wide or batch application
- external notifications
- permanent hide/ignore action
- undo-after-apply flow
- source, citation, or technical identifier UI
- exact technical before/after comparison

### 9.2 Entry model

Plant detail remains the direct per-plant review entry.

Keep the locked §4.13 Plant detail signal copy verbatim:

```text
Ažuriranje plana dostupno
Pregledaj promjene prije primjene.
```

Home/Pregled may show a calm aggregate discovery signal when one or more active plants have available plan changes:

```text
Promjene plana za pregled
Za 2 voćke postoje promjene plana.
Pregledaj prije primjene.
```

Singular variant:

```text
Za 1 voćku postoje promjene plana.
```

Home/Pregled signal rules:

- discovery only
- routes to Biljke filtered to affected plants
- does not apply changes
- does not include an orchard-wide apply action
- in-app only; no external notification
- no urgency, alarm, task, progress, or compliance styling

Biljke rows may show a small neutral marker for affected plants:

```text
Promjene plana
```

Biljke marker rules:

- discovery only
- row still opens Plant detail
- does not replace plant identity
- does not replace the locked Plant detail §4.13 signal
- no alarm, progress, task, or compliance framing

### 9.3 Review screen

Screen title:

```text
Pregled promjena plana
```

The screen is scoped to one plant.

The screen shows:

- plant identity
- the available change summary
- history-preservation block
- non-empty change buckets
- primary apply action
- secondary postpone action

Review screen rules:

- one plant is reviewed at a time
- applying requires explicit user tap
- no silent apply
- no second confirmation modal
- no orchard-wide or batch action
- no source, citation, or technical identifier UI
- no exact technical before/after comparison in current §9
- no treatment advice
- no weather-based blocking or rescheduling
- S9 owns generated review content

### 9.4 History preservation

Use this block on the review screen:

```text
Što ostaje sačuvano
Dnevnik se ne mijenja.
Postojeće evidencije, opažanja, bilješke i ispravci za ovu voćku ostaju vidljivi.
Promjene utječu samo na budući prikaz plana za ovu voćku.
```

Rules:

- history remains visible
- existing Activity evidence remains unchanged
- existing Observation evidence remains unchanged
- existing notes remain unchanged
- existing corrections remain unchanged
- past Dnevnik rows are not rewritten
- current §9 does not define Dnevnik correction or marker rendering

### 9.5 Change buckets

Use these bucket labels:

```text
Buduće sezonske radnje
Praćenje
Pojašnjenja radnji
```

Rules:

- render a bucket only when non-empty
- bucket content is a beginner-readable summary
- bucket content must explain what kind of visible plan content changes
- no exact technical before/after comparison in current §9
- no schema or technical identifiers
- no source, citation, or technical identifier UI
- no treatment advice
- S9 owns bucket content generation

Bucket intent:

- `Buduće sezonske radnje` = future seasonal action timing, labels, visibility, or practical wording may change
- `Praćenje` = monitoring or awareness plan text/period/context may change
- `Pojašnjenja radnji` = explanatory text for existing plan items may become clearer

### 9.6 Apply / postpone behavior

Primary action:

```text
Primijeni promjene plana
```

Secondary action:

```text
Ostavi postojeći plan za sada
```

After apply:

```text
Promjene plana primijenjene.
```

Apply rules:

- user must explicitly tap the primary action
- apply affects only the reviewed plant
- no second confirmation modal
- after apply, return to Plant detail or the entry surface with neutral success copy
- current §9 does not define an undo-after-apply flow

Postpone rules:

- postpone applies nothing
- postpone returns to the entry surface
- signal may remain visible after postpone
- no escalation or nagging after postpone
- no permanent hide/ignore action in current §9
- exact postponed-state persistence is S8/S9

### 9.7 Monitoring update boundary

If a plan change includes monitoring or awareness content, §9 may summarize it only inside:

```text
Praćenje
```

Rules:

- obey locked §0 Monitoring UX constraints
- no monitoring compliance language
- no cadence pressure
- no absence-as-failure wording
- no treatment recommendation
- no threshold interpretation
- no detect-to-treat framing
- no route that implies treatment after observation
- do not define §15 Monitoring / Awareness detail
- do not define monitoring capture fields

§9 may say that monitoring plan text, period, or context changed. It must not tell the user to check immediately or imply they failed to monitor.

### 9.8 No silent update / no destructive regenerate

Rules:

- no plan changes are applied without explicit user action
- no plan content is replaced without review
- no destructive plan rebuilding action
- no reset-style action
- no automatic weather-triggered plan change
- no weather-based blocking, hiding, rescheduling, or reordering
- no AI-authored explanation or recommendation
- existing Dnevnik history remains preserved

### 9.9 Relationship to other sections

S6 Dnevnik dependency:

- Dnevnik seasonal-action filters and historical labels depend on stable historical catalog/version resolution.
- Plan upgrade review must not rewrite historical Dnevnik rows.
- Historical Activity and Observation rows must remain understandable after catalog labels, timing, or explanatory text evolve.

Concise boundaries:

- §1 = Home/Pregled aggregate discovery signal
- §4 = Plant detail direct entry and Biljke row marker
- §3 = Dnevnik/history rendering
- §10 = Monitoring capture
- §13 = Plant profile edits that may later make review available
- §14 = Plant archive flow
- §15 = Monitoring / Awareness detail
- §16 = Activity evidence capture
- §17 = Record correction
- S8/S9 = storage, comparison, reconciliation, and derived-state effects

### 9.10 S8/S9 dependency notes

Dependency notes for S8/S9:

- availability trigger logic
- plan comparison engine
- storage shape for review/apply state
- exact persistence for postponed review state
- template reconciliation
- user plan adjustment reconciliation
- generated bucket summaries
- Dnevnik historical-label resolution
- derived active-plan effects after apply
- import/export impact
- migration impact

§9 defines user-facing flow, labels, and boundaries only.

### 9.11 Forbidden §9 copy / behavior

§9 must not introduce:

- pressure or urgency copy for applying plan changes
- copy implying the old plan is invalid
- copy implying changes already happened before explicit apply
- automatic apply behavior
- orchard-wide or batch application
- external notifications
- permanent hide/ignore action
- undo-after-apply flow in current §9
- destructive plan rebuilding
- reset-style plan actions
- exact technical before/after comparison
- technical schema identifiers
- source, citation, or technical identifier UI
- treatment recommendation
- monitoring compliance language
- monitoring absence judgment
- weather-triggered update logic
- weather blocking or rescheduling
- AI-authored explanation or recommendation

## 10. Monitoring capture flow

S7 Monitoring capture flow defines how the user records:

```text
Što sam vidio / provjerio?
```

This is distinct from §16 Activity evidence capture, which records:

```text
Što sam napravio?
```

§10 is the capture surface. §15 Monitoring / Awareness detail is the read/detail surface.

§10 must obey locked §0 Monitoring UX constraints.

### 10.1 Purpose and boundary

§10 owns UX documentation for:

- program-context monitoring capture
- free-standing observation capture from Plant detail
- observation date UX
- method-specific capture UX
- save/cancel behavior
- neutral out-of-season handling by reference to locked §0.2
- post-save UX

§10 does not own:

- Activity capture
- stage confirmation
- record correction
- Monitoring / Awareness detail content
- treatment recommendations
- diagnosis
- thresholds
- weather blocking
- reminders, nudges, or compliance behavior
- media/photo storage
- schema/runtime implementation

Cancel behavior:

- cancel/close exits capture without saving
- no observation or monitoring record is created on cancel

### 10.2 Entry points

Program-context capture may be entered from existing monitoring surfaces:

- Pregled monitoring card
- Kalendar monitoring item
- Plant detail monitoring section
- §15 Monitoring / Awareness detail when §15 is defined

Free-standing observation capture is entered from Plant detail / `Karton voćke`:

```text
Dodaj opažanje
```

Do not add in the first §10 patch:

- global Home/Pregled `Dodaj opažanje`
- global Dnevnik entry
- `Dnevnik ove voćke` entry

### 10.3 Program-context capture

Program-context capture is attached to a known monitoring program/context.

UX rules:

- program label/context is preselected
- plant is preselected where known
- plant must be selected or confirmed when program context covers multiple plants
- method context is shown read-only where known
- observation date defaults to today
- observation date is editable
- future dates are rejected
- notes are optional

Primary save copy:

```text
Spremi zapis
```

After save, show only:

```text
Zapis spremljen.
```

### 10.4 Free-standing observation capture

Free-standing observation capture is available from Plant detail / `Karton voćke`.

Title:

```text
Dodaj opažanje
```

UX rules:

- plant is preselected from Plant detail
- the record is not attached to a monitoring program
- the user records a notable plant observation, not a daily "nothing unusual" habit

User-facing helper:

```text
Slobodno opažanje. Neće biti vezano uz program praćenja.
```

Use these capture choices:

```text
Vidim simptom / promjenu
Bilješka
```

Do not use:

- `Drugo`
- free-standing `Ne vidim ništa neuobičajeno` in current §10

Primary save copy:

```text
Spremi opažanje
```

After save, show only:

```text
Opažanje spremljeno.
```

### 10.5 Trap check UX

When the program method is trap-based, the UI must be fast and touch-friendly.

The capture UI offers two obvious quick paths:

```text
Bez ulova
Broj ulova
```

Rules:

- if there is no catch, the user taps `Bez ulova`
- if catch exists, the user enters the count in `Broj ulova`
- save remains disabled until one of these paths is set
- the user does not need to understand form payloads or hidden structure

Helper copy:

```text
Broj ulova spremamo u povijest. Aplikacija ga ne tumači.
```

Trap capture must not include:

- threshold interpretation
- treatment recommendation
- pressure score
- severity score

### 10.6 Visual scouting UX

For visual scouting, use:

```text
Primijećeno
Nije primijećeno
```

Helper copy:

```text
Bilježi samo ono što si vidio/la — ne procjenu stanja voćke.
```

Rules:

- save remains disabled until one option is selected
- notes are optional
- `Nije primijećeno` means only that the user did not notice the target during this check
- `Nije primijećeno` must not imply that the plant is safe, clean, resolved, or problem-free

### 10.7 Date behavior

Observation date behavior:

- observation date is visible
- observation date defaults to today
- observation date is editable
- past dates are allowed
- future dates are rejected
- recorded date is system-managed

Future-date error copy:

```text
Datum ne može biti u budućnosti. Opažanje opisuje stvarno opaženo stanje.
```

### 10.8 Out-of-season behavior

Out-of-season program-context capture is allowed.

UX rules:

- save remains enabled
- do not use late, wrong, or blocking language
- show the locked disclosure defined in `V2_UX_MODEL.md §0.2`
- do not duplicate, paraphrase, or translate the §0.2 disclosure copy inside §10

Storage behavior is governed by `V2_DOMAIN_MODEL.md §1.7.3 L5b`.

§10 cites that rule; it does not redefine it.

### 10.9 Multi-plant monitoring boundary

Current §10 does not support multi-plant monitoring capture.

One monitoring observation means:

```text
one plant + one program/context
```

Current §10 must not include:

- bulk capture
- copy/duplicate same observation to another plant
- coverage language
- progress language
- checklist language

Future multi-plant monitoring requires a future owner-approved UX session. It is not merely an S8/S9 implementation detail.

### 10.10 Treatment-advice boundary

§10 contains no treatment advice.

§10 must not include:

- spray recommendation
- product advice
- diagnosis
- threshold interpretation
- routing to seasonal action detail

After save, show only one of:

```text
Zapis spremljen.
Opažanje spremljeno.
```

When §15 is defined, it must resolve post-capture read/detail behavior and program-note access without treatment recommendations.

§15 must resolve:

- how the user reads program context after saving an observation
- how existing program notes are surfaced
- how the app helps the user understand monitoring evidence without recommending treatment
- how to avoid a detect → treat pipeline
- whether any neutral route from §10 to §15 exists
- how `what now?` is handled without becoming advice

### 10.11 Relationship to other sections

Concise boundaries:

- §16 = Activity evidence capture
- §15 = Monitoring / Awareness read/detail surface
- §11 = Stage confirmation
- §17 = Record correction
- Dnevnik row rendering belongs to §3
- locked monitoring constraints belong to §0

Stage confirmation belongs to §11. §10 must not define stage fields.

### 10.12 S8/S9 / future dependency notes

Dependency notes for S8/S9 or later:

- observation persistence shape
- payload per method
- program/cycle write resolution, governed by domain and implemented later
- overlap prompt mechanics
- symptom registry/target resolution

Future topic outside current §10:

- photos/media as a future AI/media/storage topic
- multi-plant monitoring as a future owner-approved UX session

### 10.13 Forbidden §10 copy / behavior

§10 must not introduce:

- task/compliance language
- reminders or nudges
- time-since-last phrasing
- overdue/missed monitoring
- "check now" prompts
- coverage/progress metrics
- treatment recommendations
- spray/product advice
- severity/pressure scores
- "safe/clean/problem solved" wording
- `Drugo`
- photos/media field
- global observation FAB
- multi-plant monitoring capture
- destructive edit/delete

Forbidden examples:

```text
zadatak
provjeri sada
vrijeme za provjeru
nisi provjerio
monitoring nije odrađen
kasniš
overdue
coverage
engagement
pregledao 8/10
treba prskati
preporučeno tretiranje
tretiraj sada
što da prskam
sigurno
čisto
bez problema
OK
all clear
```

## 11. Stage confirmation flow

Owner: S7.

Stage confirmation defines how the grower records a visible development stage for one plant.

This is UX flow documentation only. It does not define runtime implementation, storage mechanics, final stage ids, catalog mapping, derived-state algorithms, plan shifting, regional timing, weather adjustment, AI recognition, import/export behavior, or migration.

Stage confirmation records what the grower clearly sees on a plant. It must stay a simple history-preserving observation flow, not a checklist, required task, diagnosis engine, treatment recommender, or automatic plan-recalculation UI.

### 11.1 Purpose and boundary

§11 owns UX documentation for:

- the current Plant detail entry point
- one-screen stage confirmation flow
- beginner-facing MVP stage labels
- observation date UX
- uncertainty behavior
- plan-impact copy
- save/cancel behavior
- Dnevnik/history boundary
- S8/S9 dependency notes

§11 does not own:

- monitoring capture
- symptom capture
- trap/scouting capture
- Activity evidence capture
- Monitoring / Awareness detail
- record correction flow
- stage-code correction
- plan upgrade review
- §12 "Za pregledati" resolution behavior
- final storage schema
- stage id / mapping implementation
- derived-state algorithm
- plan-shift algorithm
- per-species phenology modeling
- BBCH modeling
- AI/photo stage recognition
- weather or regional offsets
- diagnosis
- treatment recommendation

### 11.2 Entry model

Current active entry:

```text
Plant detail → Zabilježi razvojnu fazu
```

Rules:

- Plant detail is the only active entry in the first §11 patch.
- The plant is preselected from Plant detail.
- Current §11 records one plant at a time.
- Do not add a Home/Pregled entry.
- Do not add a Kalendar entry.
- Do not add a global add/FAB entry.
- Do not add a Seasonal action detail entry in current §11.
- Do not add a §12 "Za pregledati" route in current §11.
- Do not add a §15 Monitoring / Awareness route.

Reason:

- Plant detail has clear plant context.
- Other entries risk turning stage confirmation into a checklist, prompt, or prerequisite.

### 11.3 One-screen flow

Screen title:

```text
Zabilježi razvojnu fazu
```

Screen sections:

```text
<plant identity>

Razvojna faza
Datum opažanja
Bilješka (neobavezno)
<plan-impact note>
Spremi fazu
Odustani
```

Rules:

- Use one simple screen.
- Do not use a multi-step wizard in current §11.
- Do not require stage confirmation before any Activity evidence flow.
- Do not show per-plant checklist controls.
- Do not show progress, streaks, completion, or compliance.
- Do not infer that a missing stage confirmation means the stage did not happen.

### 11.4 MVP stage labels

Use this current MVP beginner-facing stage label set:

```text
Mirovanje
Pupovi bubre
Cvatnja počela
Cvatnja završila
Formiranje ploda
Plod mijenja boju
Dozrijevanje
Berba
Opadanje lista
```

Rules:

- Show beginner-readable labels.
- Do not show BBCH codes.
- Do not show raw `stage_code`.
- Do not require the grower to understand technical phenology vocabulary.
- Do not branch by species in §11.
- Current §11 does not define full BBCH modeling.
- Current §11 does not define per-species phenology modeling.
- Future catalog/content work may refine labels per species later.
- B2/S8 storage mapping must use catalog `stage_vocabulary[]` entries; it must not invent species-specific phenology, BBCH, timing, ordering, or plan effects.
- The current generic MVP vocabulary may use only `dormant`, `bud_swell`, `bloom`, `fruit_set`, `ripening`, and `leaf_drop`. Any §11 label that cannot be safely mapped to that vocabulary remains display-only until vocabulary exists or Slice 8 stage confirmation writes for that label are explicitly deferred/restricted.

### 11.5 Uncertainty behavior

Use helper copy:

```text
Ako nisi siguran/na, nemoj spremati fazu. Zabilježi samo ono što jasno vidiš.
```

Rules:

- Do not save uncertain stage records.
- Do not offer `Nisam siguran/na` as a saved stage value.
- Do not create an unknown-stage record.
- Do not force stage confirmation.
- The user may cancel without penalty.
- Do not automatically route uncertainty to §10.
- Do not interpret uncertainty as missing data, failure, or orchard risk.

### 11.6 Date behavior

Use:

```text
Datum opažanja
```

Rules:

- Date defaults to today.
- Date is editable.
- Past dates are allowed.
- Future dates are rejected.
- Recorded date is system-managed.
- Retroactive stage confirmation is allowed when it describes a real observed past state.

Future-date error:

```text
Datum ne može biti u budućnosti. Faza opisuje stvarno opaženo stanje.
```

### 11.7 Plan-impact copy

Use:

```text
Ovaj zapis može utjecati na prikaz budućih sezonskih radnji za ovu voćku.
Ne znači da treba odmah nešto raditi.
```

Rules:

- Copy is informational.
- Do not promise that the plan will change.
- Do not claim that dates will shift.
- Do not say any action is now available because the stage was saved.
- Do not instruct treatment or orchard work.
- S9 owns derived plan behavior and any future plan effects.

### 11.8 Save and cancel

Save:

```text
Spremi fazu
```

Cancel:

```text
Odustani
```

After save:

```text
Faza zabilježena.
```

Cancel guard if the user selected a stage or typed a note:

```text
Odustati? Faza neće biti spremljena.
```

Rules:

- Save is enabled only when a stage label is selected and the date is valid.
- Cancel exits without saving.
- Closing the flow follows the same no-save behavior as cancel.
- After save, return to Plant detail or the entry surface with neutral success copy.
- Do not show a next-task suggestion after save.
- Do not route to Seasonal action detail after save as advice.

### 11.9 Dnevnik / history

Stage confirmation is history.

Rules:

- A saved stage confirmation appears in Dnevnik as an Observation/history record.
- Dnevnik renders stage confirmation under `Opažanja`, not `Praćenje`.
- §11 does not define final Dnevnik row rendering.
- §3 owns Dnevnik row, group, filter, and marker rules.
- S8/S9 own storage, lookup, and derived rendering details.
- Do not show compliance, progress, streak, or completion copy for stage confirmations.
- Do not create a missing-stage Dnevnik row.

### 11.10 Relationship to other sections

Concise boundaries:

- §10 Monitoring capture is separate; §11 does not define trap, scouting, symptom, or free-standing observation capture.
- §15 Monitoring / Awareness detail is separate; §11 is not monitoring/risk detail.
- §16 Activity evidence capture remains available; stage confirmation is never required before activity logging.
- §17 Record correction remains separate; current §11 does not define stage-code correction.
- §9 Plan upgrade review remains separate; stage confirmation does not explain plan updates.
- §12 "Za pregledati" may later route to §11, but current §11 does not define §12 behavior.
- S8/S9 own storage, ids, derived-state behavior, and any plan effects.

### 11.11 Stage-code correction boundary

Current §11 does not define stage-code correction.

Rules:

- If the grower later realizes the stage was wrong, current app behavior may allow another stage observation later.
- Formal stage-code correction is future owner-approved correction work.
- Do not define correction flow here.
- Do not modify §17 from §11.
- Do not destructively edit or delete the original stage observation.

### 11.12 S8/S9 and future dependency notes

Dependency notes for S8/S9 or later:

- stored observation shape for stage confirmation
- stage ids / mapping for the MVP labels
- relationship between MVP labels and catalog-backed stage references
- Dnevnik rendering for stage observations
- derived plan-state effects after stage observations
- whether future species-specific labels replace or refine the MVP label set
- future route activation from §5 or §12, if owner-approved
- formal stage-code correction behavior

These dependencies must not be implemented or specified in §11.

### 11.13 Forbidden §11 copy / behavior

Do not use as §11 UI copy:

```text
nisi potvrdio fazu
faza nedostaje
provjeri fazu sada
vrijeme je za fazu
faza je obavezna
treba zabilježiti fazu prije radnje
moraš potvrditi fazu
faza kasni
overdue stage
stage missing
zadatak: faza
checklist
BBCH
stage_code
AI prepoznavanje
prepoznavanje fotografije
fotografiraj za fazu
plan se automatski mijenja
plan se pomiče za X dana
radnja je sada dostupna
sigurno pokrenuti radnju
treba prskati
prskaj sada
preporučeno tretiranje
```

§11 must not introduce:

- multi-plant stage confirmation
- global stage entry
- Kalendar stage prompt
- Home/Pregled stage prompt
- stage confirmation as prerequisite
- treatment recommendation
- diagnosis
- weather or regional offset logic
- S9 plan-shift algorithm
- storage decisions
- schema decisions
- runtime decisions
- import/export decisions
- migration decisions

## 12. "Za pregledati" resolution flow

Owner: S7.

`Za pregledati` is a calm review surface. It helps the grower choose what to look at next and then route into the already-defined detail or capture flow.

This is UX flow documentation only. It does not define cue generation, cue ordering, persistence, derived-state updates, import/export effects, storage, schema, or runtime behavior.

### 12.1 Purpose and boundary

§12 defines what happens after a user opens an item or list surfaced as:

```text
Za pregledati
```

Review cues may originate from:

- seasonal-action review context
- evidence context the grower may want to inspect
- monitoring or awareness context that deserves reading
- stage or phenology context that may be relevant
- plan-change review signal
- future non-alarm review cues

Rules:

- `Za pregledati` items are not themselves evidence.
- §12 is routing and review only.
- The user can open a relevant detail surface and decide no record is needed.
- The user can record Activity evidence through §16.
- The user can record Monitoring / Observation evidence through §10.
- The user can record Stage confirmation through §11.
- The user can open Monitoring / Awareness detail through §15.
- The user can open Plan upgrade review through §9.
- The user can leave an item for later with no penalty.
- §12 does not create a separate final-state control for seasonal actions, monitoring, stage, plan, or records.
- §12 does not introduce destructive actions.
- §12 does not clear a cue behind the user's back.

### 12.2 Entry surface

`Za pregledati` may be entered from Pregled/Home or from any other surface where the review cue is shown.

§12 does not add Home layout, Pregled sections, card ordering, or Home copy. §1 remains the source of truth for Pregled/Home.

Once opened, the screen title is:

```text
Za pregledati
```

### 12.3 Item language

Item copy is neutral and describes the kind of review.

Allowed examples:

```text
Pregledaj sezonsku radnju
Pregledaj praćenje
Pregledaj razvojnu fazu
Pregledaj promjene plana
Pregledaj opažanje
```

Rules:

- Use calm review wording.
- Do not use blame, urgency, audit, alarm, or forced-action wording.
- Do not use copy that says a record is absent as a warning.
- Do not style review cues as failures.
- Do not present review cues as machine-written orchard advice.

### 12.4 Resolution action matrix

| Item type | Primary route | Optional route | Allowed CTA copy | Rules |
| --- | --- | --- | --- | --- |
| Seasonal action review item | Open §5 Seasonal action detail. | Route to §16 with the relevant seasonal action and plant context. | `Otvori radnju`; optional `Dodaj evidenciju`. | §12 does not duplicate §16 fields. The cue may remain visible until S9 updates derived visibility. No local one-tap finalization exists in §12. |
| Monitoring review item | Open §15 Monitoring / Awareness detail. | Route to §10 `Dodaj zapis o praćenju` only when explicitly chosen. | `Otvori praćenje`; `Dodaj zapis o praćenju`. | No inspect-now wording, time-since-last wording, cadence judgment, ratio, threshold interpretation, or spray/material advice. |
| Awareness / risk review item | Open §15 Awareness / risk detail. | Route to §10 free-standing observation capture when explicitly chosen. | `Otvori detalje`; `Zabilježi što vidiš`. | Neutral next-step guidance is allowed. Do not ask the user to confirm a disease or pest conclusion. Do not route directly to orchard-work instructions or material application. |
| Stage / phenology review item | Open §11 Stage confirmation flow. | None in §12. | `Zabilježi razvojnu fazu`. | Stage confirmation remains optional. Do not frame the stage as late, required, or blocking another flow. The user may leave it for later with no penalty. |
| Plan upgrade review item | Open §9 Plan upgrade review flow. | None in §12. | `Pregledaj promjene plana`. | No auto-apply. Do not say the existing plan is invalid. Do not add urgency. |
| Existing observation / record review item | Open Dnevnik record detail or the relevant detail surface. | Route to §17 when correction is explicitly chosen. | `Otvori zapis`; `Ispravi zapis`. | Show `Ispravi zapis` only when it opens §17 and does not duplicate correction UI. |

### 12.5 Leave for later

§12 supports:

```text
Ostavi za kasnije
```

Rules:

- Applies no record.
- Changes no evidence.
- Does not mean the underlying item is finalized.
- Does not hide the item permanently unless S8/S9 later define postponed visibility.
- Has no penalty.
- Does not escalate.
- Does not add nagging copy.
- Exact persistence is owned by S8/S9.
- Use no label that implies final closure without evidence or a defined downstream flow.

### 12.6 Empty state

If there are no review cues, show:

```text
Nema ničega za pregledati.
```

Rules:

- Keep the empty state neutral.
- Do not add praise or achievement framing.
- Do not imply the grower finished orchard work.

### 12.7 Dnevnik relationship

§12 itself does not create Dnevnik rows.

Only downstream flows create records:

- §16 Activity evidence
- §10 Observation / monitoring evidence
- §11 Stage confirmation
- §17 correction

Rules:

- Opening a `Za pregledati` cue does not write to Dnevnik.
- Leaving a cue for later does not write to Dnevnik.
- Opening a detail surface without saving downstream evidence does not write to Dnevnik.
- Dnevnik row rendering remains owned by §3 and the downstream flow that created the record.

### 12.8 Relationship to S8/S9

S8/S9 own:

- cue generation
- cue ordering
- cue persistence
- postponed state
- when a cue disappears
- derived-state update
- visibility after evidence, correction, stage, or plan update
- import/export impact

§12 owns only UX labels, routes, and no-pressure review behavior.

### 12.9 Non-goals

§12 does not introduce:

- alarm queues
- audit trackers
- machine-written orchard advice
- disease or pest conclusions
- threshold interpretation
- direct material-application routes
- weather-based access rules
- mandatory action before the user can continue
- forced stage confirmation
- forced monitoring capture
- forced evidence capture
- destructive delete
- automatic cue clearing
- schema, storage, runtime, or import/export decisions

## 13. Plant profile management flow

Owner: S7.

Plant profile management defines the UX flow for adding a new plant and editing the `Karton voćke` for an existing plant.

This is UX flow documentation only. It does not define runtime implementation, storage mechanics, catalog pinning, id generation, migration, derived-state algorithms, plan recalculation, or regional timing logic.

### 13.1 Purpose and boundary

§13 owns:

- `Dodaj voćku`
- `Uredi karton voćke`
- plant profile form UX
- missing vs unknown UX
- validation copy
- save and cancel behavior
- routing after save

§13 does not own:

- storage schema
- migration
- plan generation
- catalog pinning
- catalog content
- regional timing
- plan recalculation
- archive or delete flow
- import/export behavior

### 13.2 Entry points

`Dodaj voćku` appears as a large primary action at the top of `Biljke`.

In an empty Biljke state, `Dodaj voćku` is also the primary call to action.

Rules:

- `Dodaj voćku` must be visible and easy to tap on iPhone.
- It must not be hidden in Settings.
- It must not be reduced to a tiny `+` icon.
- It belongs to `Biljke`.
- `Uredi karton voćke` starts from Plant detail / `Karton voćke`.

### 13.3 Add plant flow

Add flow steps:

1. Screen title:

```text
Dodaj voćku
```

2. The first field is:

```text
Vrsta
```

3. `Vrsta` is required.
4. Save is disabled until `Vrsta` is selected.
5. After `Vrsta` is selected, show the relevant profile fields for that species.
6. The user may save with only `Vrsta` selected.
7. After save, route to the new Plant detail with `Karton voćke` visible.
8. Success copy:

```text
Voćka spremljena.
```

Save with species only is allowed because real growers often know only what the plant is. The flow may gently invite better timing detail, but it must not block the user or turn profile entry into clerical work.

### 13.4 Species / Vrsta picker

`Vrsta` is a controlled picker.

Rules:

- Show only current supported species.
- Use user-facing species names, not species codes.
- Do not allow free-text species entry.
- Do not show future or deferred species as selectable.
- Citrus and fig are not selectable current species.
- `Trešnja` and `Višnja` remain distinct user-facing choices.
- Do not add regional selection, climate selection, or timing adjustment in this picker.

If search or filtering is available and the user searches for an unsupported species, use neutral copy:

```text
Ta vrsta još nije podržana za sezonski plan u ovoj verziji.
```

Do not name specific deferred species in the normal picker UI.

### 13.5 Variety / Sorta behavior

For timing-driving species:

- `Sorta` uses catalog-defined values for the selected species.
- Do not allow free-text `Sorta`.
- Include:

```text
ne znam
```

- If `Sorta = ne znam`, show `Vrijeme dozrijevanja`.

For seasonProfile species:

- If the catalog exposes user-facing-only varieties, show catalog-defined display varieties plus `ne znam`.
- Do not show `Vrijeme dozrijevanja`.
- If the catalog has no varieties for that species, omit the `Sorta` row.

§13 must not hardcode concrete variety lists, expand variety lists, remove varieties, rename varieties, or define catalog content. The exact variety values belong to the catalog.

### 13.6 Unknown variety / timing flow

For a timing-driving species, if the user does not know the variety, the flow asks one beginner-readable timing question:

```text
Vrijeme dozrijevanja
```

Options:

```text
rana
srednja
kasna
ne znam
```

Rules:

- Show `Vrijeme dozrijevanja` only after `Sorta = ne znam`.
- Use beginner wording.
- Do not expose technical model language.
- Save remains allowed even if the user does not answer `Vrijeme dozrijevanja`.
- If the user only selects `Vrsta`, show an optional neutral hint:

```text
Ako znaš sortu ili otprilike kada dozrijeva, sezonski periodi mogu biti precizniji.
```

This hint is not a warning, not a blocker, and not a completeness nag.

### 13.7 Profile fields

`Podloga`:

- free text
- optional
- `ne znam` allowed
- profile-only
- does not drive current plan behavior
- no rootstock catalog in §13

`Posađeno`:

- date picker
- optional
- `ne znam` allowed
- future dates rejected

`Kupljeno`:

- date picker
- optional
- `ne znam` allowed
- future dates rejected

`Izvor / rasadnik`:

- free text
- optional
- `ne znam` allowed

`Položaj / oznaka`:

- free text
- optional
- `ne znam` allowed
- disambiguation only
- not GPS, weather location, or regional timing input

`Bilješka`:

- free text
- optional
- no `ne znam`

`Korisnička oznaka / ime`:

- free text
- optional
- no `ne znam`
- display label only
- not a technical id

### 13.8 `nije upisano` vs `ne znam`

Plant profile UX must distinguish:

```text
nije upisano
ne znam
```

Semantics:

- `nije upisano` = no value entered.
- `ne znam` = user explicitly does not know.

Rules:

- Do not collapse these states.
- Do not use alarm or warning styling for either state.
- Do not treat either state as a profile error.
- Do not keep nagging the user to complete fields.
- Do not infer facts from either state.

### 13.9 Date validation

Future dates are rejected for:

- `Posađeno`
- `Kupljeno`

Validation copy:

```text
Datum ne može biti u budućnosti.
```

§13 does not add validation between `Kupljeno` and `Posađeno`.

### 13.10 Edit plant flow

Edit starts from:

```text
Uredi karton voćke
```

Edit flow rules:

- Reuse the Add layout with existing values prefilled.
- The user may edit profile fields.
- Save action copy:

```text
Spremi promjene
```

- Success copy:

```text
Promjene spremljene.
```

If the user changes `Vrsta`, `Sorta`, or `Vrijeme dozrijevanja`, show neutral inline copy:

```text
Promjena vrste, sorte ili vremena dozrijevanja može utjecati na buduće sezonske radnje za ovu voćku. Postojeći zapisi u Dnevniku ostaju nepromijenjeni.
```

Rules:

- Do not block the edit solely because identity or timing fields changed.
- Do not edit, delete, or rewrite historical Activity or Observation records.
- Do not define plan recalculation logic in §13.
- Do not offer a destructive regenerate action.
- Archive and delete behavior remain outside §13.

### 13.11 Regional boundary

§13 does not introduce regional timing.

Forbidden in §13:

- `climateProfile`
- `regionProfile`
- `offsetDays`
- hidden regional shifts
- hardcoded regional formulas
- local precision promises
- Zagreb-only copy

The species picker follows current supported catalog scope. Future regional adaptation belongs outside §13.

### 13.12 S8/S9 dependency notes

S8 owns:

- stored plant profile shape
- missing/unknown representation
- import/export implications
- migration/storage architecture

S8/S9 own:

- initial plan creation for a newly added plant

S9 owns:

- plan generation semantics
- plan review/update semantics
- any derived effect of changing `Vrsta`, `Sorta`, or `Vrijeme dozrijevanja`
- overlay reconciliation

§13 defines user-facing flow, labels, validation copy, and routing only. It does not define implementation.

### 13.13 Forbidden §13 copy / behavior

§13 must not allow:

- free-text `Vrsta`
- free-text timing-driving `Sorta`
- adding deferred species through Add plant
- `Obriši biljku`
- destructive edit/delete of history
- plan regeneration or recalculation language

§13 user-facing copy must not expose:

```text
species code
catalog version
plan instance
overlay
Tier
fallback
Mid default
timing band
climateProfile
regionProfile
offsetDays
```

§13 user-facing copy must not use task/completeness pressure:

```text
missing information
complete your profile
nedostaju podaci
dovrši profil
moraš
trebaš
hitno
kasniš
```

## 14. Plant lifecycle / archive flow

S7 Plant lifecycle / archive flow defines the non-destructive UX for removing a plant from the active orchard while preserving its history.

Archive means:

```text
the plant is no longer in the active orchard
```

Archive is not delete.

### 14.1 Purpose and boundary

§14 owns UX documentation for:

- archive entry point
- archive confirmation UX
- archive date UX
- optional archive reason/note UX
- post-archive UX
- non-destructive archive copy
- replacement pointer, if shown
- dependency notes for S8/S9

§14 does not own:

- destructive delete
- restore / unarchive in current patch
- record correction
- Dnevnik row rendering
- plan generation
- plan recalculation
- active-scope derivation algorithm
- storage schema
- migration/import/export
- replacement plant linking
- catalog/template behavior

### 14.2 Entry point

Archive starts from Plant detail / `Karton voćke`.

Primary user-facing action:

```text
Arhiviraj voćku
```

Place the action lower on Plant detail in a lifecycle section.

Recommended lifecycle section label:

```text
Životni vijek voćke
```

Rules:

- do not show `Arhiviraj voćku` on Biljke list rows
- do not hide archive in Settings
- do not use long-press as the entry
- do not use destructive or danger-style language
- do not present archive as delete

### 14.3 Archive confirmation screen

Screen title:

```text
Arhiviraj voćku
```

Confirmation body:

```text
Ovo je za voćku koja više nije u aktivnom voćnjaku.
Povijest i Dnevnik ostaju sačuvani.
Buduće sezonske radnje i praćenje za ovu voćku više se neće prikazivati u aktivnom planu.
```

Rules:

- use one confirmation screen
- do not use a double modal
- save button is explicit
- cancel is available
- no destructive delete copy
- no plan regeneration copy

Primary action:

```text
Arhiviraj voćku
```

Secondary action:

```text
Odustani
```

After save, show:

```text
Voćka arhivirana.
```

### 14.4 Archive date

Use:

```text
Datum arhiviranja
```

Rules:

- date is visible
- date defaults to today
- date is editable
- past dates are allowed
- future dates are rejected
- date describes the real date when the plant left the active orchard

Future-date validation copy:

```text
Datum ne može biti u budućnosti. Arhiviranje opisuje stvarni događaj.
```

S8/S9 own storage and active-scope derivation.

### 14.5 Reason / note

Archive reason is optional.

Use chips:

```text
Osušila se
Izvađena
Zamijenjena
```

Do not include:

```text
Drugo
```

Use optional note:

```text
Bilješka — neobavezno
```

Notes cover all other cases.

### 14.6 Post-archive state

After save:

- user stays on Plant detail in archived state
- archived state uses neutral copy
- history remains visible
- `Dnevnik ove voćke` remains accessible
- archived plant does not appear as an active work target
- future seasonal actions and monitoring no longer show in the active plan for this plant
- §14 does not define the active-scope algorithm

Dnevnik rendering remains governed by §3:

- archived plant records remain visible in Dnevnik
- archive must not delete or rewrite Activities or Observations
- archived plants may appear in Dnevnik filters and rows with a neutral `(arhivirana)` suffix

### 14.7 Replacement pointer

If the user archived because a new plant was planted, archived Plant detail may show neutral pointer copy:

```text
Ako je posađena nova voćka, dodaj je kao novu voćku.
```

CTA:

```text
Dodaj novu voćku
```

Rules:

- routes to §13 Add plant flow
- no prefilled fields
- no auto-copy of position/label
- no old/new identity link
- no history merge
- replacement linking is out of current §14

### 14.8 Restore / mistaken archive boundary

Current §14 does not include:

```text
Vrati u aktivne
```

Rules:

- no restore flow in current §14
- no unarchive flow in current §14
- if archive was a mistake, correction/admin recovery is a future owner-approved flow
- §17 is adjacent for correction principles, but §14 does not define mistaken archive correction
- do not imply destructive deletion; archive remains non-destructive

### 14.9 Delete boundary

Destructive delete is forbidden.

Do not allow or use:

```text
Obriši voćku
Izbriši voćku
Ukloni iz povijesti
Trajno ukloni
Obriši sve zapise
```

Archive must never delete:

- Plant identity/history
- Activity records
- Observation records
- Dnevnik records

### 14.10 Relationship to other sections

Concise boundaries:

- §13 = add/edit plant profile
- §16 = Activity evidence capture
- §10 = Monitoring capture
- §17 = correction principles, but not archive restore in current §14
- §3 = Dnevnik/history rendering
- S8/S9 = storage, active-scope derivation, future plan behavior

### 14.11 S8/S9 dependency notes

Dependency notes for S8/S9 or later:

- archive state storage is S8/S9
- archive date storage is S8/S9
- archive reason/note storage is S8/S9
- active vs archived scope derivation is S9
- exclusion from future/current active plan surfaces after archive date is S9
- migration/import/export impact is S8/S9
- future restore/admin recovery semantics are future owner-approved flow
- replacement linking, if ever added, is future owner-approved flow

### 14.12 Forbidden §14 copy / behavior

§14 must not introduce:

- destructive delete
- restore/unarchive in current §14
- plan regeneration / recalculation language
- archive as task/compliance action
- coverage/progress metrics
- technical schema copy
- automatic replacement linking
- automatic field copy to new plant
- Dnevnik row-format redefinition

Forbidden examples:

```text
Obriši voćku
Izbriši voćku
Ukloni iz povijesti
Trajno ukloni
Obriši sve zapise
Regeneriraj plan
Plan se ponovno generira
Vrati u aktivne (forbidden in current §14 only; future owner-approved restore/admin recovery flow may define this later)
restore / unarchive (forbidden in current §14 only; future owner-approved restore/admin recovery flow may define this later)
archived_at
active scope
entity state
plan instance
overlay
coverage
progress
```

## 15. Monitoring / Awareness detail

Owner: S7.

Monitoring / Awareness detail defines how the grower reads monitoring and awareness context after seeing a monitoring card, risk row, or related plant-context surface.

This is a read/detail surface. It is not a capture form, diagnosis engine, treatment recommender, threshold engine, compliance tracker, "check now" system, or detect-to-treat pipeline.

§15 must obey locked §0 Monitoring UX constraints.

### 15.1 Purpose and boundary

§15 owns UX documentation for:

- monitoring program detail
- awareness / risk detail
- content slots for reading context
- factual monitoring-record display for program-attached observations
- neutral routes to §10 capture
- safe next-step copy that preserves user agency without recommending treatment
- Dnevnik and plan-update boundaries

§15 does not own:

- §10 monitoring/free-standing observation capture form fields
- §10 validation, save behavior, out-of-season disclosure, or storage behavior
- Activity evidence capture
- Dnevnik row rendering
- record correction
- diagnosis
- treatment recommendation
- threshold interpretation
- trap/scouting pressure or severity scoring
- weather gating
- runtime implementation
- storage schema
- catalog/content authoring
- source/citation UI
- plan diff or catalog-version explanation

Safe next-step rule:

- §15 may tell the user to record what they see.
- §15 may tell the user the record remains part of history.
- §15 may tell the user to consult a poljoapoteka, agronomist, or qualified expert when unsure.
- This is allowed safe guidance and is not a treatment recommendation.

§15 must not:

- confirm diagnosis
- say the plant definitely has a disease or pest
- recommend a product
- recommend dosage
- recommend spraying now
- interpret trap count thresholds
- infer severity or pressure
- route directly to seasonal action detail as treatment advice

### 15.2 Variant model

Monitoring / Awareness detail has two configurations of one read/detail surface:

1. Monitoring program detail
2. Awareness / risk detail

Both variants are plant-context detail surfaces. Both use authored content slots. Neither variant authors agronomic content in §15.

### 15.3 Variant A — Monitoring program detail

Purpose:

- read/detail surface for one declared monitoring program in plant context
- explain the program context
- show factual attached monitoring records
- route to §10 monitoring capture
- give a safe next step without interpreting records

Entry points:

- Pregled monitoring card
- Kalendar monitoring item
- Plant detail monitoring section
- future §15-compatible route from Monitoring / Awareness surfaces if defined

Dnevnik boundary:

- Dnevnik monitoring rows are not primary §15 entry points in current §15.
- A Dnevnik row opens record detail / expanded row first.
- A record detail may later expose a secondary link:

```text
Otvori program praćenja
```

- §15 must not redefine Dnevnik row behavior.

Screen sections:

```text
<program label>
<plant identity>

Što je ovo
Kada je važno
Kako se prati
Zabilježeni zapisi
<safe next-step note>
Dodaj zapis o praćenju
Otvori dnevnik ove voćke
```

Record display:

- Show only program-attached observations for this program/context.
- Show up to 5 recent factual records.
- Records may show factual date, method result, and note when present.
- Trap examples may show `Bez ulova` or `Broj ulova: 3`.
- Scouting examples may show `Primijećeno` or `Nije primijećeno`.
- Do not show free-standing observations.
- Do not infer related observations.
- Do not show trends.
- Do not interpret thresholds.
- Do not infer pressure or severity.
- Do not recommend treatment.
- Do not show compliance, progress, or cadence completion.

No-records state:

```text
Bez zapisa.
```

Rules:

- Use only inside Variant A `Zabilježeni zapisi`.
- Use neutral styling only.
- Do not pair with a prompt to start logging.
- Do not use `još nema zapisa`.

CTA:

```text
Dodaj zapis o praćenju
```

CTA rules:

- In `active` state, the CTA may be primary.
- In `pre_season`, `ended`, or out-of-season context, the CTA may appear as a quiet secondary action.
- No check-now framing.
- No out-of-season nudging.
- Do not block real capture.
- §10 owns out-of-season disclosure and capture storage behavior.
- §15 must not duplicate §10 form fields or disclosure copy.

Safe next-step copy:

```text
Broj ulova i zapisi praćenja spremaju se kao povijest. Aplikacija ih ne tumači kao prag za tretiranje.
Ako nisi siguran/na što zapis znači, pokaži zapis u poljoapoteci ili stručnoj osobi.
```

Rules:

- This copy may be shown when records exist, especially trap/scouting evidence.
- It may also be shown as a generic footer note if useful.
- It must not become threshold advice.
- It must not recommend treatment.

### 15.4 Variant B — Awareness / risk detail

Purpose:

- read/detail surface for awareness-only content or seasonal risk
- explain what to watch for
- not behave like a monitoring program
- not show records in current §15
- give a safe next step if the grower sees described symptoms or concerning signs

Entry points:

- `§4.9 Sezonski rizici` rows route to Variant B.
- `§4.8 Na što obratiti pažnju` stable-awareness routing is supported by §15 only when a route exists.
- Current §15 patch does not activate §4.8 tappable routing.
- If §4.8 becomes tappable later, it may use Variant B.

Screen sections:

```text
<awareness/risk label>
<plant identity>

Što je ovo
Kada je važno
Na što obratiti pažnju
<safe next-step note>
Zabilježi što vidiš
Otvori dnevnik ove voćke
```

CTA:

```text
Zabilježi što vidiš
```

CTA rules:

- Routes to existing §10 free-standing observation capture (`Dodaj opažanje`).
- Plant context is preselected.
- Observation remains free-standing.
- No attach-to-program behavior.
- No diagnosis confirmation.
- No treatment route.
- No seasonal-action detail route as advice.

Records:

- Variant B does not show related observations in current §15.
- Do not automatically match free-standing observations to risks.
- Do not infer a relationship between an observation and a disease/risk.
- Do not show program observations inside awareness detail.
- Full history access is via:

```text
Otvori dnevnik ove voćke
```

Safe next-step copy:

```text
Ako vidiš ovakve simptome, zabilježi što vidiš i provjeri s poljoapotekom ili stručnom osobom.
Aplikacija ne potvrđuje dijagnozu i ne odabire tretiranje.
```

Rules:

- This is allowed safe guidance.
- It must not say the plant definitely has the disease/pest.
- It must not recommend a product or spraying.
- It must not route directly to Seasonal action detail as treatment advice.

### 15.5 Content slots

§15 declares content slots only.

Content authoring is outside §15.

Slots:

```text
Što je ovo
Kada je važno
Kako se prati
Na što obratiti pažnju
```

Slot rules:

- Use beginner-readable Croatian.
- Use authored catalog/template/content source only.
- Do not create a final agronomic or citation database in §15.
- Do not invent AI-authored diagnosis.
- Do not include treatment recommendations.
- Do not interpret thresholds.
- Content/source ownership belongs to catalog/content/S8/S9/future owner responsibility.

Variant slot use:

- Variant A uses `Što je ovo`, `Kada je važno`, and `Kako se prati`.
- Variant B uses `Što je ovo`, `Kada je važno`, and `Na što obratiti pažnju`.
- Exact content text is not defined in §15.

### 15.6 Relationship to §9

§9 owns plan-change review.

§15 displays current monitoring/awareness context after changes are applied.

§15 must not explain:

- what changed in a plan update
- why a plan update exists
- old vs new plan diff
- catalog version changes

### 15.7 Relationship to §10

§10 is capture.

§15 is read/detail.

§15 may route to §10, but must not duplicate:

- §10 form fields
- §10 validation
- §10 out-of-season disclosure
- §10 save behavior
- §10 storage behavior

Out-of-season program-context capture remains governed by §10 and locked §0.2. §15 may show a quiet route to capture, but it must not restate or paraphrase the capture-time disclosure.

### 15.8 Relationship to Dnevnik

Dnevnik remains the chronological history surface.

Rules:

- Variant A may show a short factual preview of program-attached monitoring observations.
- Variant A links to `Otvori dnevnik ove voćke` for full plant history.
- Variant B does not show records in current §15.
- Variant B links to `Otvori dnevnik ove voćke` for full plant history.
- Free-standing observations remain in Dnevnik / plant history.
- Free-standing observations must not appear inside monitoring program records.
- Program observations must not appear inside awareness detail.
- §15 must not create attach, move, relink, or reinterpret behavior.

### 15.9 S8/S9 and future dependency notes

Dependency notes for S8/S9 or later:

- stored query shape for program-attached observation previews
- resolving current monitoring/awareness context after plan changes are applied
- content/source storage and retrieval for §15 slots
- whether stable-awareness §4.8 rows become tappable
- future record-detail secondary link to `Otvori program praćenja`

These dependencies must not be implemented or specified in §15.

### 15.10 Forbidden §15 copy / behavior

Do not use as §15 UI copy:

```text
trebaš provjeriti
provjeri sada
vrijeme za provjeru
nisi provjerio
nisi pratio
monitoring nije odrađen
kasniš s provjerom
prošlo je X dana od zadnje provjere
zadnji put si provjerio prije X dana
još nema zapisa
razmotri unos
preporučeno tretiranje
preporučeno prskanje
treba prskati
prskaj sada
tretiraj sada
prag je dosegnut
pritisak bolesti
visoka opasnost
severity
pressure
score
detect → treat
ovo znači da
ovo upućuje na
vjerojatno imaš
sigurno je
čisto je
problem je riješen
sve je u redu
all clear
OK
0/4 provjera
1/4 provjera
pokriveno X%
engagement
coverage
compliance
poveži s programom
premjesti u program
program_id
catalog_version
window_def_id
overlay
plan instance
```

§15 must not introduce:

- free-standing observation inside monitoring program records
- program observations inside awareness detail
- attach-to-program
- diagnosis confirmation
- treatment routing
- product or dose recommendation
- "spray now" recommendation
- threshold interpretation
- pressure or severity scoring
- compliance or progress metrics
- time-since-last logic
- exact agronomic content authoring
- photo/media features
- weather gating
- runtime decisions
- storage decisions
- schema decisions

## 16. Evidence capture flow

Owner: S7.

Evidence capture defines the S7 UX flow for recording Activity evidence.

This is UX flow documentation only. It does not define runtime implementation, storage mechanics, id generation, schema, or derived-state algorithms.

Evidence capture is required by:

- `Detalj sezonske radnje`
- `Dnevnik ove voćke`
- `Dnevnik` filtered by seasonal action
- future global add entry, if added

### 16.1 Scope and boundaries

§16 owns Activity evidence capture:

- form fields
- validation copy
- multi-plant selection UX
- save-review surface
- neutral outside-period disclosure
- post-save UX

§16 may route to adjacent flows when the entry context is not Activity evidence, but it must not absorb them:

- monitoring-specific capture remains governed by `## 10. Monitoring capture flow` and locked §0
- stage confirmation remains governed by `## 11. Stage confirmation flow`
- correction remains governed by `## 17. Record correction flow`
- observational contexts may route to the appropriate Observation capture flow

§16 must not:

- define monitoring capture fields or monitoring cadence behavior
- define stage confirmation behavior
- define record correction behavior
- define Dnevnik row format or marker semantics
- define storage, schema, id generation, or write mechanics
- introduce task-list framing

### 16.2 Entry labels

```text
Dodaj evidenciju
Dodaj evidenciju za ovu voćku
Dodaj evidenciju za ovu radnju
```

### 16.3 Entry contexts

From Seasonal action detail:

- the seasonal action is preselected
- all relevant plants are shown
- all relevant plants are preselected by default
- selected scope is visible before save
- the user can quickly deselect plants that were not part of the real-world action

From plant context / `Dnevnik ove voćke` / `Dodaj evidenciju za ovu voćku`:

- the plant is preselected
- the flow makes no broad multi-plant assumption
- multi-plant selector may be hidden or reduced to the selected plant
- broader plant scope may appear only if the user explicitly expands scope

From action-filtered Dnevnik / `Dodaj evidenciju za ovu radnju`:

- the seasonal action is preselected
- relevant plants are shown
- plant scope must be reviewed before save

From a global Activity entry, if one is implemented:

- the user selects the seasonal action from real catalog action-window definitions
- the picker shows orchard-language labels such as `Bakar — zimska zaštita`, `Bakar — rano proljeće`, `Bakar — nakon rezidbe`, `Zimska rezidba`, and `Ljetna rezidba`
- the picker must not expose `window_def_id`, `catalog_version`, schema names, or technical ids
- `action_type` may support broad grouping/search, but it is not the picker identity

### 16.4 Plant selector

The plant selector must be optimized for one-handed, outdoor use:

- large tappable rows or cards
- whole row/card selectable
- clear selected and unselected visual state
- no tiny checkbox UI
- no dense desktop table
- selected count remains visible through the save action

Helper copy:

```text
Označi voćke za koje želiš spremiti evidenciju.
```

Save button includes selected count:

```text
Spremi evidenciju za 3 voćke
```

If zero plants are selected:

- save is disabled
- show:

```text
Odaberi barem jednu voćku.
```

### 16.5 Fields and labels

Use:

```text
Dodaj evidenciju
Datum radnje
Odrađeno
Preskočeno
Bilješka (neobavezno)
Odustani
Evidencija spremljena.
```

Status behavior:

- default status is `Odrađeno`
- alternative status is `Preskočeno`
- `Preskočeno` is the only skipped Activity status copy in this flow
- `Propušteno` must not be offered as a user-selectable Activity evidence status in §16 because it can sound like blame/guilt while the user is recording evidence
- this restriction does not change existing domain/display concepts or existing uses of `propušteno` outside §16

### 16.6 Date behavior

`Datum radnje` is always visible.

Rules:

- default is today
- directly editable
- past dates are allowed
- future dates are rejected
- `recorded_at` is the system date and is not user-editable
- show helper copy only when the event date differs from today:

```text
Evidencija se dodaje danas.
```

Future-date error:

```text
Datum ne može biti u budućnosti. Evidencija opisuje stvarnu radnju koja se već dogodila.
```

Retroactive event dates are legal when they describe real past events. Dnevnik renders date honesty per §3.

### 16.7 Outside-period capture

Capture outside the relevant period is allowed when it describes real orchard work.

Rules:

- save remains enabled
- use neutral disclosure only
- no guilt copy
- no late-task language
- §16 does not define Dnevnik markers
- Dnevnik renders per §3
- after-period capture may later render `nakon razdoblja` per §3 when existing marker rules apply
- pre-open capture must not invent a new Dnevnik marker

Disclosure after period:

```text
Ova radnja je bila aktualna do <date>. Evidencija će se spremiti u Dnevnik pod stvarnim datumom radnje.
```

Disclosure before period:

```text
Ova radnja postaje aktualna <date>. Evidencija će se spremiti u Dnevnik pod stvarnim datumom radnje.
```

### 16.8 Save behavior

No extra confirmation step is required for normal cases.

The capture screen itself is the review surface. Before save, the screen must make these visible:

- selected plant count
- selected plants or current plant scope
- `Datum radnje`
- status
- outside-period disclosure, when applicable

Save behavior:

- save creates evidence only for selected plants
- unselected plants get no record
- after save, return to the entry surface or relevant detail surface
- show:

```text
Evidencija spremljena.
```

Dnevnik display follows §3 row, group, and marker rules.

### 16.9 Multi-plant grouping dependency

One multi-plant capture represents one real-world pass.

Selected plants are shown as one grouped event in Dnevnik where §3 grouping rules apply.

Domain grouping semantics are governed by `V2_DOMAIN_MODEL.md §0.11`.

Storage, id generation, atomic write behavior, persistence, and derived-state implementation are S8/S9 concerns and are not defined here.

### 16.10 Forbidden §16 capture copy

Do not use as §16 capture/status/validation copy:

```text
Odgođeno
Kasni
Kasniš
zadatak
trebaš
moraš
hitno
overdue
zakasnio
Ne možeš više evidentirati
```

Also do not use as a user-selectable Activity evidence status in §16:

```text
Propušteno
```

Do not globally change or ban existing uses of `propušteno` outside §16.

## 17. Record correction flow

Owner: S7.

Record correction defines the non-destructive UX for correcting Activity and Observation records while preserving trust in Dnevnik history.

This is UX flow documentation only. It does not define runtime implementation, storage mechanics, id generation, correction persistence, migration, import/export behavior, or derived-state algorithms.

Records are immutable. Correction is additive.

### 17.1 Purpose and boundary

§17 owns UX documentation for:

- correction entry point
- correction UX for Activity records
- correction UX for Observation records
- user-facing correction labels
- correction save/cancel behavior
- non-destructive correction copy
- forbidden destructive edit/delete behavior
- dependency notes for S8/S9

§17 does not own:

- destructive delete
- in-place record edit
- Dnevnik row rendering algorithm
- correction storage schema
- derived-state recalculation
- duplicate suppression / merge / ignore behavior
- plant profile edits
- plant archive correction
- plan upgrade correction
- stage-code correction
- migration/import/export behavior

### 17.2 Entry point

Correction starts from:

- record detail
- expanded Dnevnik row detail

Single entry label:

```text
Ispravi zapis
```

Rules:

- no global correction screen
- no long-press-only entry
- no hidden admin entry
- no destructive edit/delete entry

### 17.3 Core correction behavior

Original Activity and Observation records remain visible.

Correction is saved as additive correction. The original record is not edited in place, deleted, hidden, or rewritten.

Use copy:

```text
Ispravak se sprema kao novi zapis. Originalni zapis ostaje vidljiv u Dnevniku.
```

Rules:

- Dnevnik remains the source of history
- §3 owns Dnevnik row rendering and correction markers
- S8/S9 own storage and derived-state consequences
- no hidden Dnevnik rewrite
- no destructive delete

### 17.4 Correction screen

Use one correction screen for all correction types.

Screen title:

```text
Ispravi zapis
```

The screen shows the original record summary at the top.

Correction chips depend on record type.

Always include:

```text
Bilješka ispravka — neobavezno
```

Helper:

```text
Što si točno ispravio/la i zašto?
```

Save:

```text
Spremi ispravak
```

Cancel:

```text
Odustani
```

After save:

```text
Ispravak spremljen.
```

Cancel guard:

```text
Odustati? Ispravak neće biti spremljen.
```

### 17.5 Activity correction chips

For Activity records, use:

```text
Krivi datum
Kriva voćka
Kriva radnja
Krivi status
Bilješka
```

Rules:

- `Krivi datum` shows corrected event date field
- `Kriva voćka` shows single-plant picker
- `Kriva radnja` shows corrected seasonal action/action context picker
- `Krivi status` shows `Odrađeno / Preskočeno`
- `Bilješka` allows correction/explanation of note
- multi-select chips are allowed
- no `Nešto drugo`

### 17.6 Observation correction chips

For generic Observation records, use:

```text
Krivi datum
Kriva voćka
Bilješka
```

For trap Observation records, additionally allow:

```text
Krivi broj ulova
```

For scouting Observation records, additionally allow:

```text
Krivi nalaz
```

Rules:

- `Krivi broj ulova` uses the same user-facing concept as §10:
  - `Broj ulova`
- `Krivi nalaz` uses the same user-facing choices as §10:
  - `Primijećeno`
  - `Nije primijećeno`
- no treatment advice
- no threshold interpretation
- no pressure/severity score
- no `Nešto drugo`

### 17.7 Date correction

The corrected date field appears only when `Krivi datum` is selected.

Rules:

- past dates are allowed
- future dates are rejected

Future-date error:

```text
Datum ne može biti u budućnosti. Ispravak opisuje stvarni događaj koji se već dogodio.
```

### 17.8 Wrong plant / multi-plant boundary

Wrong plant correction targets one immutable per-plant record.

Rules:

- original record remains visible
- correction must not silently move history
- correction must not reshape multi-plant groups
- correction must not change `activity_group_id`
- correction must not add/remove group members
- grouped Dnevnik rendering remains §3 responsibility
- S8/S9 own correction linkage/storage

### 17.9 Monitoring/free-standing boundary

Correction must not change monitoring attachment context.

Rules:

- correction must not attach free-standing observations to monitoring programs
- correction must not detach program-context observations from programs
- correction must not mutate `program_id`
- no retroactive program attachment
- if the user needs a correct program-context observation, they create a new observation via §10
- if the user needs to explain that the original was entered wrong, they use `Ispravi zapis` with `Bilješka`

### 17.10 Active-plan disclosure

Show this disclosure on Activity correction screens:

```text
Ispravak može utjecati na prikaz ove sezonske radnje u aktivnom planu. Izvorni zapis ostaje sačuvan u Dnevniku.
```

Rules:

- Activity correction uses the disclosure
- note-only Observation correction does not use the disclosure
- §17 does not define the active-plan algorithm
- S9 owns derived-state behavior

### 17.11 Duplicate boundary

Current §17 does not include duplicate marking.

Current §17 must not include:

```text
Označi kao duplikat
```

Current §17 also does not define:

- a `(duplikat)` Dnevnik marker
- duplicate suppression
- duplicate merge
- duplicate ignore behavior
- hidden duplicate hiding

Duplicate handling is a future owner-approved correction/admin flow.

If a user accidentally duplicates a record now, they may add an explanatory correction note. §17 does not promise suppression, hiding, merging, or ignoring.

### 17.12 Correction-of-correction boundary

Current §17 does not support correcting a correction record.

If a correction was wrong, the user creates another correction against the same original record.

Rules:

- no recursive correction trees
- no correction-detail branching model in current §17

### 17.13 Stage observation boundary

Current §17 may correct date, plant, and note for stage observations if those records exist.

Stage value/code correction belongs to §11 Stage confirmation or to a future owner-approved amendment.

§17 does not define stage-code correction.

### 17.14 Delete boundary

Destructive delete is forbidden.

Do not allow or use:

```text
Obriši zapis
Izbriši zapis
Trajno obriši
Ukloni iz povijesti
Ukloni iz Dnevnika
```

Correction must never delete:

- Activity records
- Observation records
- original evidence
- Dnevnik history

### 17.15 Relationship to other sections

Concise boundaries:

- §16 = creates Activity evidence
- §10 = creates Observation evidence
- §13 = edits Plant profile, not records
- §14 = archives Plant, not records
- §3 = Dnevnik/history rendering
- §11 = Stage confirmation; stage-code correction not defined in §17
- §9 = Plan upgrade review
- S8/S9 = correction storage and derived-state effects

### 17.16 S8/S9 dependency notes

Dependency notes for S8/S9 or later:

- correction storage shape is S8/S9
- correction linkage to original is S8/S9
- Dnevnik correction marker rendering is §3/S8/S9
- effective display after multiple corrections must be deterministic before implementation; later corrections target the same original record, not prior Correction records
- derived active-plan effects are S9
- duplicate semantics are future owner-approved correction/admin flow
- import/export/migration impact is S8/S9

### 17.17 Forbidden §17 copy / behavior

§17 must not introduce:

- destructive delete
- in-place edit
- hidden rewrite
- duplicate marker in current §17
- `Nešto drugo`
- `Drugo`
- program attachment mutation
- free-standing → program conversion
- group reshaping
- correction-of-correction
- active-plan algorithm promises
- technical schema copy
- treatment advice

Forbidden examples:

```text
Obriši zapis
Izbriši zapis
Trajno obriši
Ukloni iz povijesti
Ukloni iz Dnevnika
Uredi zapis
Prepiši zapis
Označi kao duplikat
duplikat
Nešto drugo
Drugo
Poveži s programom praćenja
Premjesti u program praćenja
Promijeni program praćenja
Regeneriraj plan
Plan se ponovno generira
program_id
activity_group_id
record entity
supersede / superseding (forbidden in user-facing copy; internal dependency notes may use non-user-facing terminology if needed)
mutate
void
override
v1
```
