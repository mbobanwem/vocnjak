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
7. quiet state when no meaningful content exists beyond the status sentence

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

Risk-awareness items stay inside `Praćenje` for S6.

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

*To be filled in S6. Subject to §0 hard constraints. User-facing label: `Dnevnik`; full title where space allows: `Dnevnik voćnjaka`.*

## 4. Biljke

*To be filled in S6. Subject to §0 hard constraints.*

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

*To be filled in S7.*

## 10. Monitoring capture flow

*To be filled in S7. Subject to §0 hard constraints. MUST include out-of-season disclosure per §0.2.*

## 11. Stage confirmation flow

*To be filled in S7.*

## 12. "Za pregledati" resolution flow

*To be filled in S7.*
