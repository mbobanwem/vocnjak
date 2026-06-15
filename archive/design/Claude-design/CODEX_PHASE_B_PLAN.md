# Vocnjak V2 — Phase B Codex Handoff

Codex-ready bridge document. Pairs with `PHASE_B_DESIGN_PROPOSAL_V2.md` (design strategy) and `Vocnjak Phase B Mockup.html` (visual reference, 7 iPhone screens).

**Codex role:** challenge this plan adversarially first (§4), then break it into safe, owner-approved implementation slices.

**Codex must NOT:** implement, commit, push, or write a diff before per-session owner approval. This is planning.

---

## 1. What the owner has approved

The owner has reviewed the design strategy and the visual mockup, and has approved the following direction and details. Each owner decision in `PHASE_B_DESIGN_PROPOSAL_V2.md` §9 is resolved here.

| # | Decision | Resolution |
|---|---|---|
| 1 | Design direction | **Mirna voćnjak bilježnica — Adriatic / sea variant.** Cream + green-deep direction was tried and rejected as feeling muzejski / 1950s. Adriatic deep-blue (`#1f4a5f` top bar, `#3a7a99` brand) + warm contrasts is the approved palette. |
| 2 | Default-route flip | **Approve.** Default landing flips from Biljke (`{name:'list'}`) to **Pregled** (`{name:'pregled'}`) so the orchard answer is the front door. One-line change in `getRoute()` (line ~8870). |
| 3 | Shell | **Approve.** Top app bar in `--brand-deep` (Adriatic) + 4-tab bottom nav (Pregled · Kalendar · Biljke · Dnevnik) + slide-up Postavke sheet. No new routes. |
| 4 | Arhiva discoverability | **Both.** Postavke → Voćnjak → Arhiva (canonical) + a quiet "Prikaži arhivirane (N)" link at the bottom of Biljke when archive is non-empty. |
| 5 | Add Plant pattern | **Variant A — inline action row at top of Biljke.** Full-width row, 64 px tall (constant; helper text vertical-padded so layout shift = 0), `+ Dodaj voćku` label, empty-state helper line "Prva voćka, krećemo." |
| 6 | `Prošlo` chip handling | **(a) Fold to prose.** Existing `Prošlo` rendering becomes prose `Bilo je aktualno od … do …` per §2 wording. Locked §1 vocabulary not opened. |
| 7 | Imagery scope | **Per-species inline SVG icons** instead of photos. Each plant card has a 56 × 56 species illustration (apple, plum, cherry, walnut, pear, peach) in single-color line-art with pastel species-tinted background. Plant detail hero has a 170 × full-width gradient banner with the species SVG centered. Empty states use a calm abstract branch motif. No user-uploaded photos in Phase B. |
| 8 | Copy edit scope | **Approve as scoped in §8B of proposal.** Phase B may rename Postavke button labels only (`Izvezi V2 sigurnosnu kopiju` → `Izvezi sigurnosnu kopiju`; `Natrag na staru aplikaciju` → `Otvori staru verziju`) **plus** the empty-state helper ("Prva voćka, krećemo."). No other user-content copy touched. |

### Additional approved details beyond the original §9

| Detail | Resolution |
|---|---|
| Display typeface | **Fraunces** (Google Fonts, variable, optical sizing) replaces Playfair Display. Fraunces is more contemporary; pairs with DM Sans for body. |
| Body typeface | **DM Sans** (already loaded) retained. |
| Page / app background | Cool off-white `--cream: #f5f7f8` replaces the warm cream. Page bg `#e3e8e9`. |
| Status chip palette | `Aktualno` pale sea (`#d6e6ec`) · `Pri kraju` peach (`#f4d2b3` / `#7a3f12`) · `Uskoro` faded pale sea · `Odrađeno` plum-rose (`#ead3dc` / `#6b3447`) · `Preskočeno` neutral cool. **No red, no amber-as-action.** |
| Per-species accent stripe | Plant cards have a 4 px left accent in real fruit color: jabuka lime, šljiva plum, trešnja cherry-red, orah bark, kruška honey, breskva warm-orange. |
| Pregled 2026 hero | Full-width banner at top of Pregled scroll: gradient from deep Adriatic → mid sea → warm dawn horizon, with stylized tree-silhouette horizon line, warm sun-glow radial, month/season chip in frosted-glass, and status sentence laid over in white Fraunces italic 28 px. **Only on Pregled.** Other screens use plain cream surface. |
| Bottom nav surface | Frosted glass (`rgba(245,247,248,0.85)` + `backdrop-filter: blur(20px) saturate(180%)`) with active-tab top-stripe in `--brand`. |
| Sheet scrim | Neutral dark `rgba(20,32,40,0.42)` — not green-tinted. |

### Mockup file is the visual canon

`Vocnjak Phase B Mockup.html` at project root shows 7 screens (Pregled populated, Pregled empty, Biljke, Plant detail top, Plant detail bottom, Kalendar, Dnevnik, Postavke sheet) rendered in the approved palette. When Codex or an implementing agent needs to know "what does Phase B want this to look like," that file is the answer.

The mockup is a **design artifact**. It does not consume `vocnjak_v2` store, does not touch the router, does not call `setStatus()`. It exists only to make the visual direction concrete.

---

## 2. Future feature ideas (NOT Phase B scope — owner-approved backlog only)

The owner asked what other features could make the app feel modern and engaging while staying orchard-first. These are **future backlog items**, not Phase B work. Each item respects all V2 hard boundaries.

| # | Feature | Type | Scope hint |
|---|---|---|---|
| F1 | **Sezonsko raspoloženje hero** | Visual | Pregled hero gradient shifts subtly per season (winter cool, spring fresh, summer warm, autumn amber). Same layout, different palette. |
| F2 | **"Prošle godine ovog tjedna"** | Visual + read | Below the hero on Pregled, when Dnevnik has prior-year history for the same week, render one calm line: "Prošle godine 22.2. — Bakar zimska zaštita, Odrađeno za 6 voćki." Pure read of existing data, no schema change. |
| F3 | **Naslovnica voćnjaka** | Photo feature | One large user-uploaded photo at top of Biljke. Stored in a separate localStorage key (`vocnjak_v2_photos`) — does not touch the canonical `vocnjak_v2` store or its validator. Backup/import can opt in or out. |
| F4 | **Foto-traka rasta po biljci** | Photo feature | Plant detail gets a photo gallery (multiple photos per plant over time). Same separate-key storage as F3. |
| F5 | **Voćnjak iz zraka** | Visual | Simple grid layout where owner places plant cards on a 2-D sketch space to mirror real-world layout. Spatial overview, not GPS, not map. |
| F6 | **Sezonska razglednica** | Read-only export | Generate a printable PDF of one plant: photo + meta + this-year Dnevnik. No new data, just a beautiful compose of existing data. |
| F7 | **Pull-to-refresh granom** | Micro-interaction | When user pulls to refresh, a small branch SVG draws itself instead of a generic spinner. Detail delight. |
| F8 | **Tap-to-zoom photo viewer** | Visual | iOS-standard full-screen photo viewer for any plant photo. Built when photos exist (depends on F3/F4). |
| F9 | **Calm iCal export** | Integration | Owner-triggered export of active seasonal actions as a `.ics` file. Owner imports into their own calendar app. No push notifications. No reverse sync. (Note: a partial iCal capability exists in legacy `Sync` screen — that's separate.) |
| F10 | **Time-of-day ambient tint** | Visual | Top app bar gets a subtle additional tint at sunrise / sunset times. Stays calm. |

### Explicitly NOT proposed (would break boundaries)

Push notifications · AI advice / diagnosis · cloud sync · social features / sharing-with-graph · streaks / badges / completion meters · weather forecast as instruction · auto-shift dates · auto-fill capture from photo recognition · paid features / subscription.

### Feature ordering recommendation

If owner opens any of F1–F10 later, recommend they ship in this order: **F7 (pull-to-refresh delight) → F1 (seasonal hero) → F2 (prošle godine) → F3 (naslovnica) → F4 (foto-traka) → F6 (razglednica) → F8 (zoom viewer) → F9 (iCal) → F5 (voćnjak iz zraka) → F10 (time-of-day)**. Each is one small slice. None blocks UXR.0–UXR.6.

---

## 3. Phase B implementation charter (sessions UXR.0 – UXR.6)

Each session is small, owner-approved per session, ends with regression verification. Codex should challenge granularity in §4 before this charter is opened.

### UXR.0 — Audit + IA confirmation

- **Goal.** Walk every V2 surface live. Audit every `getElementById('v2*')` consumer + every position-dependent JS hook (`childNodes`, `firstElementChild`, `nextSibling`, `:nth-child`). Produce `UXR_AUDIT.md` (new file).
- **Files changed.** `UXR_AUDIT.md` only.
- **Forbidden.** Any `index.html` edit. Any code change.
- **Verification.** Owner reads + approves.
- **Blocks the next session?** Yes.

### UXR.1 — V2-scoped design tokens + Fraunces font

- **Goal.** Add the Phase B Adriatic palette as V2-scoped CSS variables. Add Fraunces font from Google Fonts. Declared but not yet bound to any V2 selector (so visual diff is approximately nil).
- **Files changed.** `index.html` only — `<style>` block additions + one `<link>` for Fraunces in `<head>`.
- **Allowed.** Additive CSS variable declarations scoped to `.v2-active`. Font import for Fraunces (`opsz` variation axis only). The exact token block is in the mockup file's `:root {}` and can be lifted verbatim.
- **Forbidden.** Editing legacy `:root`. Editing any legacy selector. Touching JS. Changing any DOM. Editing `manifest.json` or `sw.js`. Changing storage, validators, routing.
- **Verification.** Open Pregled, Kalendar, Biljke, Plant detail, Dnevnik, Add form. Confirm visual diff is approximately nil (tokens declared but not consumed). `window.v2ValidateForBackup(parsed)` returns `[]`. `#legacy` byte-identical.

### UXR.2 — App shell: top app bar + bottom nav + Postavke sheet + scaffold relocation + default-route flip

- **Goal.** Build top app bar (Adriatic `--brand-deep`), 4-tab bottom nav, slide-up Postavke sheet. Relocate `<h1>Vocnjak V2</h1>` + Slice 0/1/2/3 status `<p>` nodes + V2 backup buttons + V2 exit button into Postavke, **preserving all IDs**. Remove `<h1>Vocnjak V2</h1>` from primary UI. Flip default route from `list` to `pregled` (one-line change in `getRoute()` line ~8870).
- **Files changed.** `index.html` only — `<style>` block (shell CSS) + `#v2Shell` HTML reorder + one-line `getRoute()` edit.
- **Allowed.** DOM reorder of existing nodes preserving IDs. New wrapper divs / nav / section elements scoped to V2. New IDs only for genuinely new structural nodes (e.g. `v2BottomNav`, `v2TopBar`, `v2PostavkeSheet`). Single-line router change for default route.
- **Forbidden.** Modifying any existing JS that consumes `v2*` IDs. Adding new routes. Changing what `setStatus()` / `setCatalogStatus()` write. Changing label text of relocated elements at this step (text polish lands in UXR.4).
- **Verification.** Each tab navigates correctly. Default load lands on Pregled. Existing `getElementById('v2ExportBtn' | 'v2ImportBtn' | 'v2ExitBtn' | 'v2StoreStatus' | 'v2CatalogStatus' | 'v2BackupStatus' | 'v2ImportFile')` resolves. Postavke sheet opens/closes. Export/import produce files. Legacy escape still works. `#legacy` byte-identical. `window.v2ValidateForBackup(parsed)` returns `[]`. iOS notched-device safe-area visually correct.
- **Highest-risk session.** Codex must challenge granularity here (§4 item 6) — may need to split into UXR.2a (top bar + bottom nav) + UXR.2b (Postavke sheet + scaffold relocation + route flip).

### UXR.3 — Pregled 2026 hero + Cards + status chips + per-species icons

- **Goal.** Build the Pregled 2026 hero (gradient banner + horizon SVG + month chip + status sentence overlay). Apply Phase B card styles to seasonal action cards, plant cards, monitoring (`Što gledati`) cards, trap-advisory (`Klopke`) cards, scouting (`Vizualni pregled`) cards, risk-awareness cards. Apply the chip palette. Add per-species inline SVG icons + species-tinted backgrounds + species accent stripes to plant cards. Add the Plant detail species-banner hero.
- **Files changed.** `index.html` — `<style>` additions + `classList` additions on existing JS-emitted DOM where needed to hook new styles. **No JS logic edits.**
- **Allowed.** New CSS rules scoped to `.v2-active .v2-card-*` etc. `el.classList.add(...)` additions in existing JS where strictly necessary to hook the new visual treatment by species (e.g. add `'jabuka' | 'sljiva' | 'tresnja' | 'orah' | 'kruska' | 'breskva' | 'generic'` class based on plant catalog species_id). Inline SVG embedded once in `index.html` and referenced or duplicated per plant card.
- **Forbidden.** Editing rendering logic that decides what text a card contains. Editing aggregation rules. Editing chip vocabulary. Editing rules that determine which section a card belongs to. Editing Plan Templates content. Editing source-backed `Što gledati` / `Što sada` / `Napomene` strings. Adding red / urgent / overdue styling. Adding count badges to chips. Editing monitoring / Activity / Observation / Correction logic. No `manifest.json`, no `sw.js`.
- **Verification.** All chip labels match locked §1 vocabulary. No red surface anywhere. Card text content byte-identical to pre-session (verifiable by DOM textContent diff per surface). Snapshot validator returns `[]`. `#legacy` byte-identical.

### UXR.4 — Forms + capture flows + Postavke label rename

- **Goal.** Sticky bottom action bar on Dodaj voćku, Dodaj evidenciju, Dodaj opažanje, Zabilježi vizualni pregled, Korekcija. Form field layout per §3.6 of design proposal (the "ne znam" checkbox nested under its input). Rename Postavke button labels (`Izvezi V2 sigurnosnu kopiju` → `Izvezi sigurnosnu kopiju`, `Uvezi V2 sigurnosnu kopiju` → `Uvezi sigurnosnu kopiju`, `Natrag na staru aplikaciju` → `Otvori staru verziju`). Add empty-state helper "Prva voćka, krećemo." to Biljke empty.
- **Files changed.** `index.html` — `<style>` + minimal DOM tweaks (sticky action bar wrapper) + 3 button labels.
- **Allowed.** New CSS. Sticky action bar wrapper. Label text edits on **buttons only** + the single Biljke empty-state helper line.
- **Forbidden.** Editing field names, field order, validator semantics, the `ne znam` checkbox behavior. Editing what `setStatus()` writes. Editing any other user-content copy.
- **Verification.** Form submit end-to-end (each capture type). Sticky bar visible on long forms. Postavke labels reflect new wording. Snapshot validator returns `[]`.

### UXR.5 — Dnevnik + Plant detail rhythm + Kalendar season timeline + optional empty-state SVG

- **Goal.** Dnevnik gets sticky-header monthly timeline + hairline timeline rail + calm row format with chips + `ispravljeno` / `nakon razdoblja` text markers. Plant detail gets vertical-rhythm polish per §4.6 of design proposal (Karton 2-column definition rows, italic-Fraunces `Mlada voćka` commentary card, hairline section breaks). Kalendar gets vertical season-timeline polish (Fraunces month headings, **no day grid**, sticky month sections with current-month accent stripe). If owner approves: add the abstract branch SVG to Pregled / Biljke / Dnevnik empty states.
- **Files changed.** `index.html` `<style>` only + (if imagery) inline SVG in empty-state DOM nodes.
- **Allowed.** CSS only by default. Inline SVG in empty-state containers only.
- **Forbidden.** DOM changes that touch event-bound elements. Logic edits. Editing what `<h3>Mlada voćke</h3>` Phase A added. Imagery on any non-empty surface. Per-species avatars in this session (already shipped in UXR.3 as plant card icons). Background motifs.
- **Verification.** Dnevnik rows visually polished; markers calm. Plant detail sections in correct vertical order. Kalendar shows seasonal months as vertical sections, not a day grid. Empty-state SVGs (if shipped) render at all viewport sizes, never above the screen title, `aria-hidden`. Snapshot validator returns `[]`.

### UXR.6 — Accessibility + outdoor regression pass + final sign-off

- **Goal.** WCAG AA verification on every color pair used in V2 (the species accent backgrounds vs ink, chip text vs chip fill, hero status white vs hero gradient mid-point — that one is the tightest, watch closely). 44 px touch targets on every tap surface. `prefers-reduced-motion` enforcement (no slide-up animation on Postavke sheet under reduced motion). Outdoor screenshot if owner can provide. Final diff filtered to CSS + class-only at runtime level.
- **Files changed.** `index.html` `<style>` only (fixes only if regression finds issues).
- **Forbidden.** Everything not on the above goal list.
- **Verification.** Contrast report per pair. Touch-target audit per surface. `#legacy` byte-identical. Snapshot validator returns `[]`. Export/import round-trip still works on each platform owner uses.

---

## 4. Codex challenge prompts

Codex should adversarially critique this plan before any UXR session opens. Paste each prompt section as needed.

### 4A — Cross-cut: locked-doc compliance

> Verify this plan against `V2_PRINCIPLES.md`, `V2_UX_MODEL.md` §0–§3, `POLISH_BACKLOG.md` Hard Boundaries + UX anti-patterns, and `V2_CURRENT_STATE.md`. For each session UXR.0–UXR.6, identify any item that violates a locked rule (binding §0 monitoring constraints, locked §1 status vocabulary, §1.5 card aggregation, §3 Dnevnik row format, no-React, no-Tailwind, no-build-pipeline, no `manifest.json` / `sw.js` change, no schema / validator / storage / Plan Templates / B2 / S8 change, no urgency / overdue / compliance / streak / gamification, no AI / diagnosis / treatment). Report each violation with the exact locked rule it breaks.

### 4B — Default-route flip risk

> The plan changes one line in `getRoute()` line ~8870 from returning `{name:'list'}` on empty hash to returning `{name:'pregled'}`. Identify every other consumer of the empty-hash case (PWA install behavior, deep-link compatibility, `#legacy` fallback path, hash-change listener side effects). Confirm or refute that this is genuinely a one-line change with no second-order effects. If refute, list the side effects and the minimum additional change needed.

### 4C — Scaffold relocation risk

> UXR.2 relocates `v2StoreStatus`, `v2CatalogStatus`, `v2BackupStatus`, `v2ExportBtn`, `v2ImportBtn`, `v2ImportFile`, `v2ExitBtn` into a Postavke sheet, preserving their IDs but changing their DOM parents. Search `index.html` for every consumer of these IDs and every position-dependent lookup (`childNodes`, `firstElementChild`, `nextSibling`, `previousSibling`, parent reference, `:nth-child`, `> :first-child`). Report any consumer that would break under reparenting. Identify any boot-order race where Slice 0/1/2/3 setStatus calls could fire before the new `<details>` parent is parsed.

### 4D — Pregled 2026 hero risk

> The Pregled hero is a 240 px tall gradient banner with overlaid status sentence, month chip, and horizon SVG. It is `position: relative` with the status sentence at z-index 3 and the gradient + horizon at z-index 1–2. Identify any failure mode: text contrast over the warm-dawn lower band (Fraunces italic white on `#d99060` is the worst pair), iOS notched-device safe-area, scroll-jank from the gradient + radial layers, `prefers-reduced-motion` consideration if any motion is added, `prefers-color-scheme` (no dark mode in Phase B but the dark surface of the hero may confuse adaptive UA chrome). Recommend mitigations.

### 4E — Per-species classList injection risk

> UXR.3 expects existing JS (the plant card renderer) to emit a species class (`jabuka | sljiva | tresnja | orah | kruska | breskva | generic`) on each `.v2-plant-card`. Read `index.html` and identify: (a) where the plant card is rendered, (b) the source field used to derive species (`catalog_v1` species id or plant.species_id), (c) what shape that field takes, (d) whether a classList addition can be made without changing what the card *says* (text content). Confirm or refute that this is class-only — if a logic edit is needed, propose the smallest possible addition.

### 4F — Imagery scope risk

> Phase B chose per-species SVG illustrations (drawn into `index.html` once, reused per card) over user-uploaded photos. (a) Are the 6 species illustrations distinct enough to be useful at 56 × 56 px? (b) Does an unknown species fall back to a calm generic icon, or does the renderer break? (c) Are the species illustrations free of any visual cue (e.g. ripe vs unripe fruit) that could read as a *status indicator* and create urgency framing? Confirm or recommend mitigation.

### 4G — Session granularity

> UXR.2 contains: top app bar build, bottom nav build, Postavke sheet build, scaffold relocation (7+ DOM nodes), default-route flip. UXR.3 contains: Pregled hero build, full card refresh across 6+ card kinds, chip palette, per-species icons + accent stripes + Plant detail species-banner. Are either of these sessions too broad for the "small commits per session" rule in `POLISH_BACKLOG.md`? Recommend whether to split each, and if so how (e.g. UXR.2a/UXR.2b/UXR.2c). Be conservative — the cost of an extra session is small; the cost of a hidden regression is large.

### 4H — PWA / manifest / sw risk

> The plan asserts no `manifest.json` or `sw.js` change. (a) Does removing `<h1>Vocnjak V2</h1>` from primary UI affect `theme-color` rendering? (b) Does the bottom nav with `padding-bottom: 24px` for safe-area break PWA standalone display? (c) Does the new Fraunces font being loaded change cache behavior in `sw.js`? (d) Does the Postavke sheet open correctly in iOS PWA standalone (no browser chrome)? Confirm or recommend mitigation.

### 4I — Owner decisions that may have been implicit

> Review §1 of this plan. Identify any design choice that's stated as resolved but was actually implicit (not asked of the owner explicitly). Common candidates: Fraunces font choice, frosted bottom nav, exact gradient hex stops on the Pregled hero, horizon-silhouette tree count, sun-glow placement, `month-chip` exact wording. List anything the owner should explicitly approve before UXR session opens.

### 4J — End-state sufficiency

> After UXR.0 → UXR.6, would the app pass a "does this look like a 2026 mobile product, not a staging page?" sniff test? Identify any 2026-standard pattern Phase B silently omits (haptic feedback hooks, dark mode, dynamic type / accessibility large text, RTL support, voice control hints, focus rings for keyboard nav, `:focus-visible` styling). For each: is it a Phase B regression risk or a future polish item?

---

## 5. Hard boundaries (repeated for self-discipline)

Identical to `POLISH_BACKLOG.md` § "V2 Visual UX Refresh — Hard boundaries" + UX anti-patterns. Codex must enforce.

- vanilla JS · single `index.html` · no React, Tailwind, build step, external UI library, TypeScript
- no schema / validator / storage key / migration / import-export / snapshot logic change
- no Plan Templates content change
- no B2 / S8 / monitoring / scouting / trap / stage / Observation / Correction logic change
- no BBCH / phenology engine / regional offset / automatic date shifting
- no urgency / compliance / overdue / streak / gamification / dopamine loop
- no diagnosis / treatment recommendation / product / dose advice beyond existing source-backed wording
- no AI / photo recognition / paid / subscription / push notification work
- no `manifest.json` / `sw.js` change unless explicitly opened
- no Cloudflare deployment change
- no hidden gestures · no swipe-only primary actions · no modal stacking · no infinite feeds · no FAB stacks · no skeleton loaders for local data · no smart reordering
- no count badges · no progress meters · no completion rings · no confetti
- routes: existing routes only; UXR.2 default-route flip is one line and is the only routing edit
- preserve all existing `v2*` IDs across DOM moves
- legacy / `#legacy` route byte-identical visually after each session

---

## 6. Companion files (this package)

| File | Role |
|---|---|
| `CODEX_PHASE_B_PLAN.md` (this file) | Codex handoff bridge. Decision summary + charter + challenge prompts + future-feature backlog. |
| `PHASE_B_DESIGN_PROPOSAL_V2.md` | Design strategy that this plan executes. Reference for visual rationale. |
| `Vocnjak Phase B Mockup.html` | Visual canon — 7 iPhone screens in the approved Adriatic palette. When in doubt, this file decides. |
| `POLISH_BACKLOG.md` (in repo) | Hard boundaries source-of-truth. Codex must respect verbatim. |
| `V2_PRINCIPLES.md`, `V2_UX_MODEL.md`, `V2_CURRENT_STATE.md` (in repo) | Locked rules + locked vocabulary + locked Pregled section order + locked Dnevnik row format. Codex must not propose anything that conflicts. |

---

## 7. Final handoff

Codex: read all six files in §6, run the challenge prompts in §4 against the plan, return a critique with verdicts of `holds / partially holds / breaks` per challenge section. If the plan holds, return a session-by-session breakdown of allowed code shapes (no diffs yet — code shapes) for UXR.0. If the plan breaks anywhere, return the specific mitigations and ask the owner to approve revisions before any session opens.

Implementation begins only after owner posts `Approved for commit` per session.

*End of Codex handoff document. No implementation. No commit. No diff.*
