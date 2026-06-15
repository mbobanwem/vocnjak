# Vocnjak V2 — Phase B Design Proposal

**Design strategy, not implementation. No code. No commit. No diff.**

Discovery was Phase 1. The earlier `PHASE_B_VISUAL_REFRESH_PROPOSAL.md` was a safe implementation charter. This document is the design strategy that should sit *above* that charter — what the app should become as a product, articulated independently, with strong opinions held loosely.

**Authoring stance.** Senior mobile product designer reviewing a small orchard-first iPhone app written in a single `index.html`. The product constraints are non-negotiable. The design is.

**Sources consulted for this proposal:**
- Live router map in `index.html` lines 8869–8968 (current truth: routes are `#v2/...`, no clean `#pregled` aliases yet, empty hash defaults to **Biljke** list, not Pregled)
- `V2_CURRENT_STATE.md` (Phase A complete; Phase B planning gate is the current goal)
- `V2_UX_MODEL.md` §0–§3 (locked monitoring constraints, Pregled section order, Dnevnik row format, status vocabulary)
- `V2_PRINCIPLES.md`, `PRODUCT_VISION.md`, `POLISH_BACKLOG.md` (UX principles + anti-patterns)
- `CLAUDE.md`, `V2_AGENT_ENTRYPOINT.md`
- 10 pre-Phase-A mobile screenshots
- Earlier `PHASE_B_VISUAL_REFRESH_PROPOSAL.md` (used as input, not as constraint)

**A correction to my earlier proposal.** I previously assumed the default-load screen was Pregled. It is not. The actual router (`getRoute()` line 8869) lands `#` and `#v2` on **Biljke (`list`)**. This is a fundamental product decision that the visual refresh has to take a position on — see §3 and decision 2.

**Repeated for self-discipline.** No React. No Tailwind. No build step. No external UI library. No `index.html` split. No schema, validator, storage key, import/export, snapshot, B2/S8, scouting/trap/observation/correction, Plan Templates, manifest, service worker. No urgency / compliance / overdue / streak / gamification / diagnosis / treatment / AI / paid work. No hidden gestures, swipe-only primaries, modal stacks, infinite feeds, FAB stacks, skeleton loaders. Router *table* may be touched only via a single, owner-approved default-route flip (one line) — not a rewrite.

---

## 1. Design diagnosis

The current V2 is functionally rich but **presents as a settings page for an app, not the app**. The functional richness post-Phase-A includes: clickable seasonal cards, Pregled lookahead grouping, Mlade voćke orientation, Klopke trap advisory, Vizualni pregled scouting capture, Što gledati monitoring guidance, multi-plant Observation capture, neutral Observation correction, archive lifecycle, calm calendar disclaimer. None of that depth comes across visually because the surface treatment masks it.

### 1.1 Ranked by impact

| # | Problem | What's happening | Impact |
|---|---|---|---|
| **D1** | Scaffold is the UI | `<h1>Vocnjak V2</h1>` + 3× "Slice N — …" + 2 backup pill buttons + exit pill occupy ~40% of every route's first viewport. The app announces it is under construction on every page load. | **Highest** |
| **D2** | No app shell | No persistent navigation. No top app bar. No bottom nav. Each screen renders its own vertical button stack (Pregled, Kalendar, Biljke, Dnevnik, Dodaj voćku, Dodaj evidenciju). Six pills, no spatial language. | **Highest** |
| **D3** | Wrong front door | Default landing is Biljke (plant list), not Pregled (status). For an orchard-first app whose product promise is "am I on track this season," the user should not land in inventory. They should land on the answer. | **High** |
| **D4** | Two competing blue primaries per screen | Biljke shows `Dodaj voćku` *and* `Dodaj evidenciju` as equal-weight blue primaries. The latter is invalid when zero plants. The eye cannot pick. | **High** |
| **D5** | V2 surfaces look like a generic admin scaffold | Blue `#2563eb` + slate `#cbd5e1` + system sans + `#1f2933` ink. The legacy brand (cream / deep green / Playfair Display + DM Sans) sits unused in the same `index.html`. The cream background bleeds through `body{}` while V2 paints cold blue on top. The brand fights itself. | **High** |
| **D6** | Kalendar at risk of becoming a generic day-grid | The legacy stylesheet still contains a full day-cell grid (`.cal-*` lines 110–135). Lifting it wholesale would make V2 Kalendar a 7×5 calendar of dots — the wrong metaphor for seasonal orchard work, which is *bands across months*, not *appointments on dates*. | **High** |
| **D7** | Plant detail is now 8–10 sections deep | After Step 7/7b/7c/7d/7e + A1 + Phase A, a single plant screen scrolls through: Karton voćke, Životni vijek / Arhiviraj, Mlada voćka (when young), Trenutne sezonske radnje, Klopke, Vizualni pregled, Što gledati, Opažanja, Dnevnik ove voćke. Flat list with no visual rhythm reads as "long form" rather than "orchard page." | **High** |
| **D8** | Dnevnik is a flat list, not a history | The proper Dnevnik metaphor is *almanac entries flowing through seasons* — sticky-header monthly timeline with calm chronological flow. A flat list of date-prefixed rows doesn't earn the metaphor. | **Medium-high** |
| **D9** | Status vocabulary partially adopted | One `Prošlo` chip exists on Plant detail in scaffold blue. The rest of the locked §1 vocabulary (`Aktualno`, `Pri kraju`, `Uskoro`, `Odrađeno`, `Preskočeno`) is enforced in copy but not visually expressed. | **Medium** |
| **D10** | Monitoring / risk content readable as alarm if styled wrong | `Što gledati` cards (Step 7e) and trap advisory (`Klopke`) are factual prose. If Phase B chooses an alert visual language for "things to watch," it crosses into compliance-dashboard territory and violates V2 principles. The risk is in the styling choice, not the content. | **Medium** |
| **D11** | Empty states correct in copy, empty in composition | Phase A polished the words ("Još nema evidencije."). Composition is still just text floating on background — no visual rest, no anchor, reads as "screen failed to load." | **Medium** |
| **D12** | iPhone-specific affordances missing | No safe-area handling on V2 surfaces. No reduced-motion respect on slide transitions (none exist yet, but will). Touch targets ≤ 36 px in some spots. No haptic feedback hooks where iOS expects them (and we won't add them — out of scope — but the *layout* should not depend on tactile compensation). | **Medium** |
| **D13** | `Natrag na staru aplikaciju` on every route tail | Bottom of every screen. Persistent reminder "the new app isn't done." Since A2 made V2 default, this affordance no longer needs to live in primary UI. | **Low-medium** |
| **D14** | Form action bars lose to scroll | `Dodaj voćku`, `Dodaj evidenciju`, `Korekcija`, `Vizualni pregled` — primary `Spremi` falls below fold on long forms. | **Low-medium** |

### 1.2 What Phase A did not solve (and Phase B should)

Phase A was copy + click-affordance. Structural problems untouched:

- The whole shell (D1, D2, D3, D13)
- The competing primaries (D4)
- The visual brand connection (D5)
- The Kalendar metaphor (D6)
- The Plant detail rhythm (D7)
- The Dnevnik timeline (D8)
- Status chip visual language (D9)
- Monitoring/risk treatment (D10)
- Empty-state visual rest (D11)

Phase B is therefore not "polish on top of Phase A." It is the first session in V2's history that owns the shell, the navigation, the visual language, and the section grammar.

---

## 2. Proposed product experience

### 2.1 Direction name and rationale

**Mirna voćnjak bilježnica.** "The calm orchard notebook." Kept from the earlier proposal — not because it was already approved but because it is the right answer when written down honestly.

A name justifies itself when it makes design decisions obvious. "Notebook" decides: typography over chrome, calm density, evidence over recommendation, history as front-matter, no dashboards, no progress meters, no compliance scores. "Orchard" decides: seasonal language, plant-specific identity, weather as advisory, no diagnosis, no treatment. "Calm" decides: muted palette, no red, no amber alarm, neutral chips, generous spacing, no urgency.

What I want to make clear that earlier proposals were not explicit about: this direction **does not blindly carry the legacy V1 design system forward**. It lifts specific tokens (cream, green-deep, Playfair, DM Sans) and **deliberately leaves others behind** (red urgency chip, green gradient alert banner, day-grid calendar, stat-card grid, weather widget gradient, tab-pill nav). The earlier proposal said "reuse legacy" which read as "polished V1." It is not. It is "V1 spirit reborn in iOS-native idioms."

### 2.2 Target experience in plain language

Open the app. Sticky top bar in deep orchard green says "Pregled." Below it, a generous Playfair Display sentence — italic, restful — answers the question you came to ask: *"Trenutno su aktualne 2 sezonske radnje. Jedna je pri kraju."* That sentence is the voice of the app. The cream paper beneath it carries one or two seasonal action cards, each with a calm green chip, factual date line, plant scope, and a one-line purpose cue. Below that, lookahead and the gentle "Praćenje" section. Bottom of screen, a small four-tab bar holds Pregled, Kalendar, Biljke, Dnevnik. Top right, a quiet "⋯" — the door to settings, never a button shouting for attention.

Switch to Kalendar. Not a day grid. A vertical seasonal scroll: month names as Playfair section headings, action cards beneath each month, calm chips. The current month has a subtle tinted band. Months scroll past like turning pages in a planting almanac. No 7×5 grid of empty dots demanding to be filled.

Switch to Biljke. An inline action row at the top — text-labeled "+ Dodaj voćku" with a one-line invitation when the list is empty. Below it, plant cards. Each card has a 3 px accent stripe in green, the species + sorta in Playfair, podloga and planting date in muted DM Sans. Tap any card and you land on Plant detail.

Plant detail reads like a notebook spread. Top: plant name in Playfair, quiet meta line (Podloga, godina X). Then sections separated by hairlines and 20–24 px breathing: Karton voćke as definition pairs in two columns, Mlada voćka as italic-Playfair commentary if young, Trenutne sezonske radnje as white action cards, Klopke as cream-dark fact card, Vizualni pregled as a calm capture surface with `Zabilježi vizualni pregled` as a contextual secondary, Što gledati as pale-green source-backed prose, Opažanja as a list with `Dodaj opažanje` inline-expandable, Dnevnik ove voćke as the last few rows with a "Prikaži cijeli dnevnik voćke" link. Archive is in a "⋯" menu.

Switch to Dnevnik. Monthly sticky-headers float as you scroll. Each row is a hairline-anchored entry: date in muted small-caps, event label in DM Sans 15, status meta below. `Odrađeno` is calm indigo. `ispravljeno` is a small inline marker. No score, no streak, no badges, no urgency.

Tap "⋯" on Pregled. A slide-up sheet rises from below, dimming the screen behind. "Postavke." Three grouped sections: Podaci i sigurnost (backup + import), Voćnjak (Arhiva link), O aplikaciji (verzija, Dijagnostika collapsible). Tap "Gotovo" to dismiss.

The whole app has no developer scaffold visible anywhere. No "Slice 0." No "Vocnjak V2" H1. No bottom-of-every-screen exit button. The status messages still update (their IDs are preserved); they just live inside the Dijagnostika collapsible where a user can find them if needed.

### 2.3 What it is not, explicitly

- **Not a dashboard.** No KPI tiles, no completion meters, no "you've logged 23 activities this season."
- **Not a productivity tool.** No streaks, badges, daily goals, "X days in a row."
- **Not a gardening app.** No watering reminders, no community feeds, no plant ID by photo.
- **Not a generic calendar.** No 7×5 day grid as primary Kalendar view.
- **Not a compliance app.** No "overdue," no red, no alarms, no nag banners.
- **Not a V1 clone with new colors.** Several legacy tokens, classes, and metaphors are deliberately left behind (red urgent chip, alert banner gradient, day grid, stat tiles, weather widget gradient, prati/hitno semantics).
- **Not a marketing surface.** No hero illustrations, no aspirational copy, no "welcome to your orchard" onboarding.

---

## 3. Navigation and app shell recommendation

### 3.1 The shell

**Persistent top app bar + persistent bottom tab bar + slide-up Postavke sheet.**

This is the recommendation, but only after considering and rejecting alternatives — see §3.5.

### 3.2 Top app bar (per screen)

48 px tall + `--safe-top`. Deep orchard green background. White text. Title left, max one affordance right. Back chevron on detail surfaces. No counts, no badges, no logos.

| Screen | Title | Right affordance |
|---|---|---|
| Pregled | "Pregled" | "⋯" → Postavke sheet |
| Kalendar | "Kalendar" | (none) |
| Biljke | "Biljke" | (none — add lives in screen body, see §5) |
| Plant detail | plant name in Playfair white | "⋯" → plant menu (Arhiviraj) |
| Seasonal action detail | action label, truncated if long | (back chevron only, no right) |
| Dnevnik | "Dnevnik" | (none) |
| Add/correction forms | form title | "Spremi" (right), back chevron cancels (left) |
| Postavke sheet | "Postavke" | "Gotovo" |
| Archive list (in Postavke) | "Arhiva" | (back chevron) |

### 3.3 Bottom tab bar

56 px + `--safe-bottom`. White surface, 1 px top border, four equal tabs. Inline SVG icon (24×24, 1.5 px stroke) over 11 px DM Sans label. Active tab: stronger icon stroke, brand-green tint on icon + label, 2 px inset top stripe in brand green. No badges.

Tabs:

| Slot | Label | Route consumed | Icon hint |
|---|---|---|---|
| 1 (leftmost) | **Pregled** | `#v2/pregled` | small sun-over-tree dot |
| 2 | **Kalendar** | `#v2/kalendar` | three horizontal bars (seasonal lanes, not grid) |
| 3 | **Biljke** | `#v2` / `#` (the empty/default route) | branching tree |
| 4 (rightmost) | **Dnevnik** | `#v2/diary` | small open book |

Two layout decisions that look small and aren't:

- **Pregled is slot 1, not slot 3.** iOS convention is "home in the middle," but for an orchard app the "voice" (Pregled) should sit at the natural read-from-left thumb start. This positions the *answer* before the *inventory*.
- **Biljke is slot 3, not slot 1.** The plant list is currently the *default route* in the router (see §3.4) but conceptually it is one of several destinations, not the spatial home. The mismatch resolves itself only if the default route also changes — see decision 2.

### 3.4 The default-route question (important)

Current behavior in `getRoute()` line 8870–8871:

```js
if (h === '#v2' || h === '') return { name: 'list' };   // Biljke
```

When a user opens the PWA from the home screen, types the URL, or hits refresh with no hash, they land on **Biljke**. The orchard answer ("am I on track this season?") requires a tab tap.

**Recommendation: flip the default route to Pregled.** Change one line:

```js
if (h === '#v2' || h === '') return { name: 'pregled' };
```

This is a single-line router change. The hard boundaries forbid "rewrite routing"; flipping a single default is not a rewrite. It is the most important UX decision in Phase B and worth owner sign-off on its own.

If owner declines this change, the bottom-nav layout I recommend in §3.3 still works — Pregled just sits at slot 1 even though it's not the default load. Friction is minor. But this proposal lands stronger if the front door opens onto Pregled.

### 3.5 Alternatives considered and rejected

I considered four other shell models before settling on top-bar + bottom-tabs + sheet:

**A) Stack/hub model — Pregled is hub, others reached only via in-content links.**
Pros: zero permanent navigation chrome; pure content. Cons: switching to Biljke or Kalendar requires going back to Pregled first; breaks one-tap section switching; fails the "predictable navigation > clever UI" UX principle. Reject.

**B) Drawer-only navigation — hamburger top-left opens a left drawer with all destinations.**
Pros: clean top bar; lots of room in the drawer. Cons: hides navigation behind a tap; iOS users expect bottom tabs for primary destinations; drawer navigation is 2010s Android-style. Reject.

**C) Horizontal swipe / paged carousel between Pregled / Kalendar / Biljke / Dnevnik.**
Pros: novel; gestural. Cons: violates "swipe-only primary interactions" UX anti-pattern; no visible navigation indicator; user has to memorize order. Reject hard.

**D) Top tabs (segmented) instead of bottom.**
Pros: leaves bottom for primary action. Cons: top tabs on phones are notoriously thumb-unreachable; smaller touch targets; reads like a web app not native. Reject.

The chosen shell is the most boring of the five and the most correct.

### 3.6 Add Plant / Add Evidence — where they live

**Dodaj voćku.** Inline action row at top of Biljke list (variant A from earlier proposal — analysis carries forward in §5). Visible, labeled, 56 px tall, scrolls with content. Not in bottom nav. Not in top bar.

**Dodaj evidenciju.** Two valid invocation contexts:
- From Plant detail: contextual button inside the `Opažanja` / `Aktivnosti` section
- From a seasonal action card: tap card → Seasonal action detail → capture there (Phase A made this possible)

Currently V2 also exposes `Dodaj evidenciju` as a top-level button on Biljke. **Recommendation: remove it from Biljke top-level.** Logging activity for a plant should start by selecting the plant (or selecting the action), not by entering an empty capture context. This eliminates competing-primary problem D4 cleanly.

**Dodaj opažanje / Zabilježi vizualni pregled / Dodaj fazu razvoja.** All contextual to Plant detail. They appear inside their respective sections as secondary-styled buttons that expand to inline forms when tapped (no full-screen modal for short forms; full screen only for plant capture).

### 3.7 Postavke (settings) — sheet, not route

Reasoning is in §2 of the earlier proposal and remains correct. Sheet over route because:
1. Settings is a tool, not a destination.
2. Sheet sidesteps the "is the router being rewritten?" question. Owner approves the default-route flip in §3.4 separately; the Postavke sheet adds zero new routes.
3. iOS native settings frequently use sheets (Share, Files actions, Mail compose). Cultural fit.
4. Sheet dismiss is unambiguous ("Gotovo" or scrim tap). Browser back is not relied upon.

**Modal-stacking risk (Codex flagged).** Import-confirmation `window.confirm()` from inside the sheet would create modal-on-modal. **Mitigation:** import confirmation is **not** a system `confirm()`. It is an inline confirmation panel that expands within the same sheet, replacing the import button row with "Cijela V2 pohrana bit će zamijenjena. Nastaviti?" + [Da, uvezi] [Odustani]. No second modal opens. Same pattern for any destructive action that surfaces inside Postavke.

### 3.8 Legacy escape (`#legacy`)

Currently a button at the bottom of every V2 screen ("Natrag na staru aplikaciju"). Recommendation: relocate into Postavke → Napredno → **"Otvori staru verziju."** A user typing `#legacy` directly still works. The affordance survives. It just stops shouting.

### 3.9 Where developer/diagnostic/scaffold lives after Phase B

All under Postavke. Specifically:

```
Postavke (slide-up sheet)
├─ Podaci i sigurnost
│  ├─ Izvezi sigurnosnu kopiju
│  └─ Uvezi sigurnosnu kopiju            ← inline expand-to-confirm pattern, no modal
├─ Voćnjak
│  └─ Arhiva                              → opens Arhiva list (inside sheet, with back chevron)
├─ O aplikaciji
│  ├─ Verzija (e.g. "V2, build cc22d24")
│  └─ Dijagnostika                        → collapsible <details>
│     ├─ Slice 0 — ljuska
│     ├─ Slice 1 — V2 pohrana
│     ├─ Slice 2 — katalog
│     └─ Slice 3 — sigurnosna kopija
└─ Napredno
   └─ Otvori staru verziju
```

The `v2StoreStatus`, `v2CatalogStatus`, `v2BackupStatus` DOM nodes are *moved* into Dijagnostika. Their IDs are preserved. The existing `setStatus()` / `setCatalogStatus()` JS continues to populate them with zero change.

---

## 4. Key screen concepts

For each screen: purpose, primary action, content hierarchy, visual treatment, what must not happen.

### 4.1 Pregled

- **Purpose.** Answer "am I on track this season?" in one screen.
- **Primary action.** Reading. Optional: tap a card → Seasonal action detail.
- **Content hierarchy** (locked by `V2_UX_MODEL.md` §1.3, Phase B respects):
  1. **Status sentence** as hero (24–28 px Playfair Display italic, generous top padding, `--text` ink). This is the voice of the app. Not muted, not small, not in a stat tile.
  2. `Sada aktualno` — section H2 in Playfair, then white action cards
  3. Weather advisory line if relevant (inline on affected cards or as a single contextual block above)
  4. `Za provjeru: nema evidencije` — section H2, then action cards with `Bilo je aktualno…` date line + prose `Nema evidencije za N voćki.` (no chip)
  5. `Uskoro` — section H2, then quieter cards (50% pale fill)
  6. `Praćenje` — section H2, then `Što gledati` cards (pale-green fill)
  7. Plan-change review signal when relevant
  8. Quiet-state line if nothing meaningful beyond the status sentence
- **Empty state (no plants).** Status sentence: "Dodaj voćku kako bi se prikazale sezonske radnje." Below: single inline action row primary `+ Dodaj voćku` linking to `#v2/add`. Empty-state illustration (if approved — see §6) sits between status sentence and the action row.
- **Visual treatment.** Cream background, white cards with soft shadow + 12 px radius, 1 px hairline section dividers, Playfair on section H2 + status sentence, DM Sans body.
- **What must not happen.** No KPI tiles. No progress ring. No "Bravo." No weather widget gradient. No red surface anywhere. No urgency framing on `Za provjeru`.

### 4.2 Kalendar

- **Purpose.** Full current-season context (`V2_UX_MODEL.md` §2).
- **Primary action.** Browse season; tap an action card → Seasonal action detail.
- **Content hierarchy.**
  1. Year header (small, muted) — "2026."
  2. Months as vertical sections with **sticky H2 headers** in Playfair. Current month gets a 1 px brand-green top accent stripe; other months get a hairline.
  3. Under each month: action cards in date order, calm chips
  4. `Mlade voćke` orientation cards rendered per-month where the year-1–2 filter applies (Step 8 contract)
  5. End-of-season anchor at the bottom — "Kraj sezone" hairline + space (visual full-stop)
- **Visual treatment.** Vertical scroll, no horizontal swipe between months. Cream background, white cards. Months breathe — 32 px before each month header, 16 px between cards.
- **What must not happen.** **No 7×5 day grid.** No day-cell dots. No "today" highlighted box. No appointment-style time slots. The metaphor is *season as a sequence of bands*, not *calendar of days*. The day-grid CSS from legacy is **explicitly not lifted**. (Owner's Codex challenge flagged this exact risk; this is the formal answer.)
- **Why not a day grid.** Orchard work is window-based with date tolerance — "winter copper between 1.2. and 28.2." A day grid forces precision the work doesn't have. A season timeline matches the actual decision-making model.

### 4.3 Biljke — empty

- **Purpose.** Invite first plant capture.
- **Primary action.** Add the first plant.
- **Content hierarchy.**
  1. Top bar: "Biljke"
  2. Inline action row: `+ Dodaj voćku` with one-line helper "Prva voćka, krećemo." (DM Sans 13, muted)
  3. Optional empty-state illustration (small SVG branch, see §6) centered below
  4. Optional secondary line: "Sve od jabuka i šljiva do oraha — katalog ima 14 vrsta." (subtle, DM Sans 13, muted) — only if owner wants to advertise scope. Default: omit.
- **What must not happen.** No marketing onboarding flow. No 3-card "Why Vocnjak" carousel. No demo data offer. No login. No "skip for now."

### 4.4 Biljke — populated

- **Purpose.** Show plants. Open Plant detail.
- **Primary action.** Tap a plant. Or add another via the inline row.
- **Content hierarchy.**
  1. Top bar: "Biljke"
  2. Inline action row: `+ Dodaj voćku` (no helper text when populated — see §5)
  3. Plant list — one card per active plant, in store order or alphabetical (locked behavior, Phase B doesn't reorder)
  4. Quiet link at list bottom: "Prikaži arhivirane (N)" — only when archive is non-empty; opens Postavke → Voćnjak → Arhiva, or a dedicated archive view in-line (decision 4)
- **Plant card composition** (one card):
  ```
  ┃ Jabuka — Fuji                     ← species + sorta, Playfair 17
  ┃ Mm106 · posađeno 15.3.2026.       ← podloga + date, DM Sans 13 muted
  ┃ Sada aktualno: Krečenje debla     ← only when there's a live aktualno action, DM Sans 13 ink-mid; otherwise omit
  ```
  Left accent stripe 3 px in `--v2-brand`. White surface, 1 px border, soft shadow.
- **What must not happen.** No count chip on the card ("3 zadatka"). No status indicator beyond the optional `Sada aktualno` line. No "last activity X days ago" — that's compliance framing.

### 4.5 Add Plant (Dodaj voćku)

- **Purpose.** Capture a plant honestly, including uncertainty.
- **Primary action.** Spremi voćku.
- **Content hierarchy.**
  1. Top bar: "Dodaj voćku" + right "Spremi" (disabled until form valid)
  2. Field groups, each with label above input, optional "ne znam" checkbox **nested directly under the related input** (not as a free-standing row)
  3. Sticky bottom action bar: `Spremi voćku` (primary) + `Odustani` (secondary) — visible without scrolling on tall forms
- **The "ne znam" pattern is a product asset.** Surfacing uncertainty as a first-class option is what makes this app feel honest. Phase B preserves it; only the visual nesting changes.
- **What must not happen.** No mandatory fields beyond Vrsta. No "tip" hints that read as agronomic instruction. No required-field red asterisks (Phase B preserves V2's calm validation).

### 4.6 Plant detail

- **Purpose.** The whole truth about one plant on one screen.
- **Primary action.** Reading. Contextual: capture an observation, mark an evidence, archive.
- **Content hierarchy** (top to bottom, all flat scroll, strong section breaks):
  1. **Top bar:** plant species + sorta in Playfair white · right "⋯" → menu (Arhiviraj voćku)
  2. **Plant header card:** restated plant name (large Playfair), quiet meta line (podloga · godina X · izvor), optional `Arhivirana` marker if archived
  3. **Karton voćke:** definition pairs as two-column rows (label left in DM Sans uppercase tracking, value right in DM Sans body); 8 rows max
  4. **Mlada voćka** (only year 1–2 per Step 8): italic Playfair paragraph as commentary, light background tint (`--v2-pale` at 40%) so it reads as inset orientation, not body content
  5. **Trenutne sezonske radnje:** section H2 Playfair, then white action cards
  6. **Klopke** (only when source-row supports): cream-dark card, "Zadnji spremljeni zapis" date line, advisory numeric band when present (no urgency framing)
  7. **Vizualni pregled** (Step 7c sources): pale-green or white card, calm "Zabilježi vizualni pregled" inline-secondary button
  8. **Što gledati** (Step 7e B2 guidance): pale-green fill section card, source-backed bullet list, small unobtrusive info-glyph at section H2 (decorative, `aria-hidden`)
  9. **Opažanja:** section H2, recent observation rows, two contextual secondary buttons inline `Dodaj opažanje` + `Dodaj fazu razvoja` (currently both primary blue in V2 — Phase B demotes one or both to secondary; only one is primary at a time)
  10. **Dnevnik ove voćke:** section H2, last 3–5 events, link "Prikaži cijeli dnevnik voćke" → `#v2/diary/plant/<id>`
- **Why no segmented tabs.** I considered tabs at top of Plant detail (Karton | Sada | Praćenje | Dnevnik). Rejected because for an orchard with 5–20 plants visited once or twice a month, scrolling a notebook page is more comfortable than memorizing tab semantics. Tabs add a cognitive layer for a 30-second visit. Flat scroll with strong section breaks does the job.
- **Why no collapsibles by default.** Hiding content behind chevrons reads as "this app has too much in it." Cards in V2 are factual; nothing here needs hiding.
- **Archive in "⋯" menu.** Not a visible button. Archive is rare lifecycle. The "⋯" menu opens a small sheet listing menu items (currently one: "Arhiviraj voćku"). Future menu items (export single plant, share) plug into the same menu.
- **What must not happen.** No tabs inside Plant detail. No collapsibles by default (Dijagnostika in Postavke is the one exception). No status-summary card at top ("3 outstanding actions"). No urgency framing on Klopke. No diagnostic framing on Što gledati or Vizualni pregled. No treatment recommendation anywhere.

### 4.7 Seasonal action detail

- **Purpose.** Everything about one seasonal action across the orchard.
- **Content hierarchy.**
  1. Top bar: action label · back chevron only
  2. Hero meta block: status chip (`Aktualno` / `Pri kraju` / `Bilo aktualno`) + date line + calendar disclaimer (Phase A copy) + `Namjena` (Phase A copy)
  3. `Napomene` (source-backed plant-state / phenology / safety prose — verbatim, locked)
  4. `Primjenjuje se na N voćki` — per-plant list rows, each tappable → Plant detail
  5. Capture affordance (when valid): inline primary `Zabilježi evidenciju`
  6. Aggregated evidence status (e.g. "Evidentirano za 4/8 voćki.") per `V2_UX_MODEL.md` §2.13 — prose, calm
- **What must not happen.** No "due in N days" countdown. No red on the date line. No "skip for all plants" bulk action. No treatment instructions beyond what `Napomene` already contain from Plan Templates.

### 4.8 Dnevnik

- **Purpose.** Orchard history. Almanac, not log.
- **Primary action.** Reading. Tap a row → opens correction flow (existing `#v2/.../correct` routes).
- **Content hierarchy.**
  1. Top bar: "Dnevnik"
  2. Monthly **sticky-header** sections — month name + year in Playfair, hairline beneath, sticks to top of viewport as user scrolls
  3. Rows inside each month — vertical hairline timeline on left (~3 px), event content right of it
  4. Row format (locked by §3): `<date>. · <event label>` line + `<status / scope / markers>` line
- **Status chips:** `Odrađeno` (calm indigo) · `Preskočeno` (cream-dark neutral). Text markers like `ispravljeno` and `nakon razdoblja` are inline text-only, no chip background.
- **Visual treatment.** Cream background, no card boxes (timeline rendering, not stacked cards), 14–16 px row vertical rhythm, 24 px between months.
- **Empty state.** "Još nema evidencije." (Phase A copy preserved.) Optional small SVG inkmark (see §6) if owner approves.
- **What must not happen.** No "X activities this month" summary. No completion percentage. No achievements. No "you logged N days in a row." No infinite scroll affordance beyond ordinary scrolling. No "load more" button.

### 4.9 Add Evidence / capture flows (Activity, Observation, Stage, Scouting)

- **Purpose.** Fast capture, honest fields.
- **Primary action.** Spremi.
- **Content hierarchy.**
  1. Top bar: form title (`Dodaj evidenciju`, `Dodaj opažanje`, `Dodaj fazu razvoja`, `Zabilježi vizualni pregled`) + right "Spremi"
  2. Plant-selection block when multi-plant allowed (checkbox list of plants with species + sorta; originating plant pre-checked when invoked from Plant detail)
  3. Per-kind fields (preserved from current implementation — Phase B styles only)
  4. Sticky action bar at bottom — primary + secondary
- **Multi-plant grouping rule** (locked): observations save with shared `observation_group_id` when multi-plant capture is used. Phase B does not touch this; it only ensures the multi-plant UI is clear and easy.
- **What must not happen.** No wizard with steps. No "smart defaults" that infer values. No suggested observations.

### 4.10 Monitoring / Risk sections (across Pregled + Plant detail)

Two card kinds, visually distinct **without** alarm semantics:

- **Monitoring (`Što gledati`)** — pale-green fill (`--v2-pale`), section-H2-stranded bullet prose, no shadow, no border accent. Reads as "natural fact about season."
- **Risk-awareness (when present)** — cream-dark fill, italic Playfair section heading, 3 px brand-green left stripe, prose only. Reads as "calm seasonal context." Per `V2_UX_MODEL.md` §0, never a checklist.

**The visual differentiation lives in the surface (fill color, accent, heading treatment), not in the chip semantics.** No red, no amber, no "check this now" framing. The user notices monitoring is different because the *card* looks different, not because something is alarming.

### 4.11 Archive state

- **Purpose.** Show archived plants. Archive is lifecycle, not delete (A1).
- **Where it lives.** Postavke → Voćnjak → Arhiva. Reached either via the sheet or via a quiet "Prikaži arhivirane (N)" link at the bottom of Biljke when archive is non-empty.
- **Content.** Same plant card style as Biljke, but desaturated 70%, with a small `Arhivirana` marker line and the archive date/reason/note if present.
- **What must not happen.** No "restore from archive" button — A1 explicitly excludes unarchive. No delete. No "are you sure?" friction beyond the existing archive flow.

### 4.12 Postavke sheet — internal screens

- **Postavke (root):** group titles + rows + chevrons. Tap a row → either inline expand (Backup buttons) or sub-screen within the sheet (Arhiva, Dijagnostika).
- **Dijagnostika collapsible:** the three Slice status `<p>` nodes preserved with their IDs, shown stacked, muted text, no shadow, no border. Hidden by default behind `<details>`.
- **Arhiva sub-screen:** opens within the sheet, top has a back chevron returning to Postavke root.

The sheet supports one level of nesting (root → sub-screen). No nested-modal stacking. Sheet dismisses via "Gotovo" or scrim tap.

---

## 5. Add Plant design decision (concrete)

Pattern: **inline action row at top of list, full-width, 56 px tall.**

**Recommended layout.**

- Position: directly below the top app bar, above the plant list. Scrolls with content (does not stick — see "Sticky?" below).
- Size: full content width minus 16 px outer padding (so ~ viewport - 32 px), 56 px tall, 12 px radius, 1 px hairline border, soft shadow, white surface.
- Content: left-aligned `+` glyph in brand green (20 × 20), then label "Dodaj voćku" in DM Sans 16 medium ink, centered-leading. Helper line (empty state only): "Prva voćka, krećemo." in DM Sans 13 muted, second line.
- Tap target: 56 px tall × full width — ~4× the size of an icon-only top-bar plus.
- Affordance hierarchy: visible always; no top-bar plus, no FAB, no oversized banner, no duplicate.

**Why this and not alternatives:**

- **Tiny top-bar `+`** — fails thumb-friendly + fails text-labeled. Rejected.
- **Big marketing banner** ("Welcome to your orchard, add your first plant!") — wastes vertical space, reads as marketing, fails calm posture. Rejected.
- **Floating action button (FAB)** — Material pattern, alien to iOS, can occlude content, can stack with bottom nav. Rejected.
- **Sticky bottom action above bottom nav** — visually competes with bottom nav, doubles vertical chrome at bottom of screen, breaks calm. Rejected.

**Sticky-on-scroll?**

Not by default. For an orchard with ≤ ~40 plants the inline row scrolls naturally and is rarely "lost" because the list is short. If owner reports that a long-scroll experience makes adding awkward, **then** add a sticky variant in a future tiny polish session — keep it small (40 px) and visually different from the resting state so it doesn't read as duplicate. **Do not** ship sticky-by-default; over-engineering for a problem the user may never hit.

**Helper text:**

- Empty state: "Prva voćka, krećemo." (DM Sans 13 muted)
- Populated state: no helper, single-line row only
- Layout-shift concern (Codex challenge #11): the row height changes from ~74 px (with helper) to ~56 px (without) when the user adds the first plant. **Mitigation:** keep row height constant at 64 px and pad the helper line vertically; on populated state the row uses the same 64 px with the label vertically centered. Layout shift = zero.

**Helper copy tone:**

- "Prva voćka, krećemo." is the calmest invitation I could write. "Krećemo" reads as casual, not pushy. Alternatives I rejected:
  - "Počni s prvom voćkom" — reads as instruction (closer to "naređuje")
  - "Dobro došli! Dodaj svoju prvu voćku." — marketing voice
  - "Tvoj voćnjak čeka." — too poetic, slightly maudlin
- If owner wants a different tone, this is one of the smallest edits and can be tuned in UXR.4.

---

## 6. Imagery / illustration decision

**Recommendation: yes, but minimal — empty states only.**

Honest assessment of trade-offs:

- **Argument for imagery:** typography + cards + icons alone risk reading as "well-designed text," not "premium app." Modern iOS apps (Things 3, Day One, Mela, Reminders) almost always have at least one tasteful visual touch — a hero glyph on empty state, a season marker, a section header illustration. Without any imagery, V2 may achieve "clean" but miss "premium."
- **Argument against imagery:** every illustration is a maintenance burden + an aesthetic gamble + a step closer to "generic gardening app" if executed without restraint. Vocnjak's brand voice is *factual notebook*, not *charming illustrator*.

**Resolution: a single restrained motif used in two or three empty states. Nowhere else.**

- **Where it appears.**
  - Pregled empty (no plants): yes
  - Biljke empty: yes
  - Dnevnik empty: maybe — only if it doesn't compete with the timeline-hairline metaphor; could simply be the hairline itself rendered as a calm horizontal stroke
- **What it is.** A single abstract line-art motif. Suggested: a simple branching shape — three or four lines suggesting a fruit-tree branch with one fruit, drawn as a single uniform stroke. Inspired by old fruit-pomology engravings but reduced to its essence. Roughly 100–120 px tall on phones, never larger.
- **Style.**
  - Inline SVG, no raster, no font icon library, no external image dependency
  - Single color: `--v2-ink-mute` (mid-warm gray) or `--v2-pale` (very faint green) — never high saturation, never multi-color
  - Stroke-only, ~1.5 px stroke, rounded line caps, no fills
  - `aria-hidden="true"` — meaning lives in adjacent text
  - Static, no animation, no `prefers-reduced-motion` opt-out needed because there is no motion to opt out of
- **What it must not be.**
  - Not photo-realistic. Not stock illustration. Not rounded-cute children's-book style. Not a literal apple-tree rendering. Not a background motif tiled behind cards. Not season-variant (spring/summer/fall/winter — premature scope). Not species-variant (one motif works for all 14 species). Not interactive (no tap on the illustration). Not data-bound (does not change with state).
- **When to defer.** If the abstract-branch motif doesn't read well at small phone size (a real risk), the right answer is "no imagery" — typography handles it. The proposal does *not* depend on imagery to succeed.

**Per-species avatars (small fruit glyphs on plant cards) — deferred.**

Tempting because it would help quick visual scan when the list grows. But:
- 14 species means 14 custom glyphs to commission/draw, each requiring iteration to avoid childish
- At thumbnail size (~16 px), abstract glyphs are hard to read and risk converging on cuteness
- Plant identification works fine via Playfair species name
- Defer to post-V2 polish session if ever

**Background motifs, page texture, decorative chrome — never in V2.**

These convert the calm notebook into a 2015 "rustic" web. Hard no.

---

## 7. Visual system direction

Not CSS — system description.

### 7.1 Palette

Existing legacy tokens, **selectively** aliased into V2-scoped vars. Not a blanket lift.

**Aliased (carried forward):**
- Cream background (`--cream`)
- Cream-dark for section fills and "outside the now" chips (`--cream-dark`)
- Deep orchard green for top bar + brand-deep ink (`--green-deep`)
- Mid orchard green for primary actions, accent stripes, bottom-nav active (`--green-mid`)
- Pale green for `Aktualno` chip + monitoring card fill (`--green-pale`)
- Warm ink (`--text`, `--text-mid`, `--text-light`)
- Warm hairline (`--border`)
- Indigo + indigo-pale for `Odrađeno` (`--indigo`, `--indigo-pale`)
- White for card surface

**Explicitly not aliased (left behind):**
- `--red` / `--red-pale` — no V2 surface uses these. Validation errors use muted ink-mid italic text, not red.
- `--amber` as action status — amber lives only in the weather-advisory token, never on an action card
- Legacy `s-hitno` chip — does not exist in V2
- Legacy `.alert-banner` green gradient — does not exist in V2
- Legacy `.stat-card` overview grid — does not exist in V2

### 7.2 Typography

- **Playfair Display 600.** Screen H1, plant species + sorta names, section H2 on detail surfaces, hero status sentence (italic). Used as voice, not chrome.
- **DM Sans 400/500.** Everything else — body, lists, forms, chips, buttons, top bar labels, bottom nav labels.
- **Italic Playfair Display 400** at body size only for `Mlada voćka` orientation paragraph and similar editorial-voice notes. Gives commentary a recognizable register.
- **Floor sizes (phone).** Body 15 px. Labels 11–12 px tracked 1.5 px uppercase. Status sentence 24–28 px.
- **No system stack.** No `-apple-system` fallback styling — the loaded fonts are the design.

### 7.3 Cards

Four kinds, visually distinct but obviously of the same family:

1. **Seasonal action card** — white, 1 px border, 12 px radius, soft shadow. Top-right corner: chip. Clickable.
2. **Plant card** — white, 1 px border, 12 px radius, soft shadow, 3 px left accent stripe in `--v2-brand`.
3. **Monitoring / "Što gledati" card** — pale-green fill (`--v2-pale`), no shadow, 12 px radius. Bullet list of source-backed prose.
4. **Trap-advisory ("Klopke") card** — cream-dark fill, no shadow, 12 px radius. Factual.

The differences are tuned so that a user can tell what kind of content sits inside the card *before reading the heading*.

### 7.4 Status chips

| Chip | Fill | Text | Notes |
|---|---|---|---|
| `Aktualno` | `--v2-pale` (#e8f0e8) | `--v2-brand-deep` (#1a3320) | The one "now" chip. |
| `Pri kraju` | `--v2-surface-2` (#ede9df) | `--v2-ink-mid` (#4a4535) | Descriptive. Not amber. |
| `Uskoro` | `--v2-pale` at 50% opacity | `--v2-ink-mute` (#8a8070) | Receded. |
| `Odrađeno` | `--v2-done-pale` (#e0e7ff) | `--v2-done` (#4338ca) | Calm indigo. |
| `Preskočeno` | `--v2-surface-2` | `--v2-ink-mid` | Same as `Pri kraju` — both "outside the now." |
| `Nema evidencije` | — | — | **No chip.** Prose. |
| `Prošlo` | (see decision 6) |  |  |
| `ispravljeno` | — | inline `--v2-ink-mute` text | No background. |
| `nakon razdoblja` | — | inline `--v2-ink-mute` text | No background. |

Visual rule: 12 px DM Sans 600, 3–4 px vertical padding, 8–10 px horizontal, 12 px radius. **No icon inside any chip.**

### 7.5 Icons

Inline SVG only. Used in: bottom-nav (4), back chevron, "⋯", "+", "Gotovo," Postavke section-row chevron, decorative section heading info-glyph in `Što gledati` (optional, `aria-hidden`).

Stroke 1.5–2.0 px, rounded line caps, no fills. Single-color, currentColor-driven. No icon font library.

### 7.6 Spacing and density

- Outer page padding: 16 px
- Between cards: 12 px
- Card → section heading above: 24 px
- Above section H2: 20–24 px
- Between major sections (e.g. between Karton voćke and Mlada voćka on Plant detail): 32 px
- Form field row height: 48–56 px
- Touch targets minimum 44 px

### 7.7 Forms

Field labels uppercase tracked 1.5 px in DM Sans 11–12, ink-mute. Inputs cream-pale fill, 1.5 px border, focus border in brand green. "ne znam" checkbox nested *below* its related input, not as a free-standing row. Sticky bottom action bar on long forms.

### 7.8 Timeline (Dnevnik)

Hairline vertical line on left (~3 px wide, brand green at 30% opacity). Rows attach right of it. Month sticky headers in Playfair, hairline beneath. Sticky-position respects safe-top.

### 7.9 Empty states

Centered, generous padding. Empty-state copy (Phase A polished) + optional SVG mark (decision 7). Empty cards (e.g. a Pregled section that has no items but the section header is shown) use a thin dashed `--v2-line` outline + ink-mute text — visual rest, not absence.

### 7.10 Motion

Minimal. Postavke sheet slides up over 200 ms. Bottom-nav tab transitions are instant (no slide animation). Active-tab indicator (2 px stripe) fades in over 100 ms. Everything respects `prefers-reduced-motion` — sheet appears instantly, no fade. No card hover effects (mobile-only). No card click ripple (Material idiom).

---

## 8. Risks and trade-offs

I am being honest about where this proposal can go wrong.

### 8.1 What might make the app too generic

- **Bottom nav + top bar is the standard 2025 iOS shell.** Used right, it's invisible. Used wrong, it makes the app look like Notes-with-a-skin. The differentiator must live in the typography, the status-sentence hero, the seasonal Kalendar metaphor, the calm chip vocabulary, and the cream/green palette. If those are weakened — say, top bar in slate gray + bottom nav with rounded square icons — the result is generic.
- **The single line-art motif** is one tuning decision away from "Etsy gardening illustration." If owner doesn't trust the execution, dropping imagery is correct.
- **Cards-with-shadows is the default everything-look right now.** What pulls V2 out of that: no card on every section (Dnevnik uses hairline, monitoring uses fill not shadow), restrained shadow intensity, 1 px border-pluss-shadow combination tuned warmly.

### 8.2 What might make the app too heavy

- **Hero status sentence at 24–28 px Playfair italic** is a strong typographic statement. If the orchard has nothing aktualno and the sentence reads "Trenutno nema aktualnih sezonskih radnji.", it occupies a lot of screen for a sentence that says "nothing now." Trade-off acknowledged: the sentence is the voice; it earns the space because it tells the user the answer in one read. Counter-design: make the sentence smaller (18 px) when there's nothing aktualno. Not recommended — inconsistency reads as bug.
- **Playfair section headings everywhere on Plant detail** could feel formal. Mitigation: DM Sans uppercase tracked labels for the smaller meta rows balance the seriffed H2s. If still too formal in testing, drop Playfair to detail-page H2 only.

### 8.3 What might break the calm orchard-first posture

- **Any red surface.** Already locked out, but vigilance during chip implementation.
- **Sticky add-row** (rejected as default) — if added, must be visually different from the resting row so it doesn't feel like the app is shouting "add a plant."
- **A `Pri kraju` chip in amber** — Codex would catch this immediately. The chip must use cream-dark / ink-mid, never amber.
- **Imagery sliding into illustration-app** — the safest fallback is no imagery.
- **The Kalendar season-timeline becoming a generic schedule** if it gets per-day rows instead of per-month bands. Discipline: months are sections, not lanes; cards inside a month are not in time-grid columns.

### 8.4 Where implementation risk is highest

- **UXR.2 (shell + scaffold demotion)** is the largest single session — top bar, bottom nav, Postavke sheet, scaffold relocation. Every `getElementById('v2…')` consumer must continue to resolve. The "DOM reorder preserves IDs but breaks `nextSibling` lookups" risk is real. Codex challenge #9 covers this; UXR.0 audit must surface every position-dependent JS hook before UXR.2 commits.
- **Default-route flip (one-line change in `getRoute()`)** is a router edit. Owner must explicitly approve this as a discrete decision. If owner declines, the bottom-nav still works.
- **The Phase B "no JS logic edit" boundary** is realistic for shell + tokens + chips + cards but **may not hold for Plant detail rhythm in UXR.5** if the existing render code emits sections in a way that prevents per-section class hooks. Mitigation: UXR.0 audit must confirm class-hook feasibility per section; if a section can't be hooked, that section is deferred to a future tiny session, not bundled.

### 8.5 What Codex should challenge

- Default-route flip (router change yes/no, scope of change)
- Sticky vs non-sticky Add Plant row (cycling concern)
- Hero status sentence at 24–28 px (does it feel too much when empty?)
- Plant detail flat scroll vs segmented tabs (am I being lazy or right?)
- Imagery — keep, drop, defer
- `Pri kraju` chip styling (no amber means it loses some legibility-as-state — is that ok?)
- Kalendar as season timeline vs hybrid (no day grid is a hard call)
- Bottom-nav slot order (Pregled at slot 1, not centered)

---

## 9. Design decisions for owner

Eight decisions. Each blocks a downstream session. Owner picks an option per row.

| # | Decision | Options | Recommended | Trade-off | Blocks |
|---|---|---|---|---|---|
| 1 | **Direction.** Approve "Mirna voćnjak bilježnica" as Phase B's single design direction, per §2. | (A) Approve. (B) Revise (specify what to change). | A | Locking direction means later sessions don't relitigate the basics. | UXR.0 |
| 2 | **Default-route flip.** Change `getRoute()` so empty hash / `#v2` lands on Pregled, not Biljke. | (A) Flip to Pregled. (B) Keep Biljke as default. | A | Flipping requires a one-line router edit (small but is a runtime change). Keeping means the front door is inventory, not status — the orchard answer is one tap away. | UXR.2 (and §3.3 tab layout) |
| 3 | **Shell.** Approve top app bar + 4-tab bottom nav + slide-up Postavke sheet, per §3. | (A) Approve. (B) Choose drawer instead of bottom nav. (C) Choose route-based settings instead of sheet. | A | Bottom nav is the standard answer for an iPhone app with 4 primary destinations. Sheet keeps router untouched. | UXR.2 |
| 4 | **Arhiva discoverability.** Where users find archived plants. | (A) Postavke → Voćnjak → Arhiva, plus a "Prikaži arhivirane (N)" link at bottom of Biljke. (B) Postavke only. (C) Biljke link only. | A | Both paths protect against users who don't think to open Postavke and users who don't scroll to the bottom of Biljke. | UXR.0 |
| 5 | **Add Plant pattern.** Per §5. | (A) Inline action row at top of Biljke (recommended). (B) Text-labeled pill in top bar. (C) Hybrid. | A | Inline row is largest hit target, single primary, scales across iPhones. Pill is always visible but smaller and competes with top bar. | UXR.2 |
| 6 | **`Prošlo` chip handling.** Currently rendered on Plant detail in scaffold blue. Vocabulary §1 doesn't enumerate it. | (A) Fold into prose ("Bilo je aktualno od … do …"). (B) Keep as chip with calm cream-dark fill. (C) Open §1 vocabulary to add `Prošlo` formally. | A | (A) keeps §1 locked. (C) opens locked spec. | UXR.3 |
| 7 | **Imagery scope.** Per §6. | (A) Empty-state inline SVG branch motif only — Pregled empty, Biljke empty, maybe Dnevnik empty. (B) No imagery anywhere. (C) Defer imagery entirely to a post-V2-Done session. | A | (A) adds tasteful warmth if executed well; risks "Etsy gardening." (B) safest; relies on typography alone. | UXR.5 |
| 8 | **Phase B copy edit boundary.** Phase B may edit *only* Postavke button labels (rename `Izvezi V2 sigurnosnu kopiju` → `Izvezi sigurnosnu kopiju`; `Natrag na staru aplikaciju` → `Otvori staru verziju`). Phase B may **not** edit user-content copy (status sentence, monitoring guidance, Plan Templates prose, chip labels, screen titles). | (A) Approve as scoped. (B) Approve plus the empty-state helper ("Prva voćka, krećemo."). (C) Restrict further. | B | (B) includes a minimal calm invitation tied to Add Plant pattern. | UXR.4 |

Session-by-session approval gate (each UXR.0–UXR.6 requires its own `Approved for commit`) is process-binding per `V2_CURRENT_STATE.md` and not a numbered decision here.

---

## 10. Suggested implementation sequencing (high-level only)

Not implementation. Not code. Sequence the design must flow through. Codex will turn this into safe runtime sessions later.

1. **Audit + IA confirmation.** Walk every V2 surface live. Surface every `getElementById('v2…')` consumer and confirm IDs survive planned DOM moves. Surface every position-dependent JS hook (`nextSibling`, `:nth-child`, etc.). Produce written audit. No code change.
2. **V2-scoped design tokens.** Aliases that consume existing legacy tokens, declared but not yet bound to V2 surfaces. CSS-only, additive.
3. **App shell.** Top app bar + 4-tab bottom nav + slide-up Postavke sheet. Scaffold relocation: `Vocnjak V2` H1 + Slice status `<p>`s + V2 backup buttons + V2 exit button all move into Postavke, IDs preserved. **Largest single session — owner should expect it to take longer than the others.** Optional default-route flip lands here (decision 2).
4. **Cards + chips + status vocabulary.** Apply the visual system from §7 to every V2 card and chip. Strict no-content-change: aggregation logic, plan-template prose, monitoring guidance, source-backed bullets all untouched.
5. **Kalendar metaphor.** Vertical season timeline with sticky-header months. Explicitly *not* a day grid. This is its own session because it's a metaphor change, not a style change.
6. **Plant detail rhythm.** Section-by-section visual treatment per §4.6. Strong section breaks. Italic-Playfair `Mlada voćka`. Inline-secondary capture CTAs. "⋯" menu for Arhiviraj.
7. **Forms + capture flows.** Sticky bottom action bars. "ne znam" nested inside field group. Postavke button labels renamed.
8. **Dnevnik timeline.** Hairline + sticky monthly headers. Status chips. `ispravljeno` / `nakon razdoblja` text markers calm.
9. **Optional imagery.** Empty-state SVG motif if owner approved decision 7. Otherwise skipped.
10. **Accessibility + outdoor regression pass.** WCAG AA contrast verification. 44 px touch targets. `prefers-reduced-motion`. Outdoor screenshot check. Final diff filtered to CSS + class-only at runtime level.

Codex will challenge whether any of these should be split further (especially #3) or merged. The design strategy doesn't fix granularity — the implementation review does.

---

*End of design proposal. No code. No commit. No diff. Hand off to Codex for adversarial challenge.*
