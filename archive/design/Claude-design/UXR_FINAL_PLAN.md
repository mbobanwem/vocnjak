# Vocnjak V2 — Phase B UXR Final Plan

**Finalni implementacijski charter.** Owner approved Phase B alone (F1–F10 explicitly out of scope). Codex review integrated. Sessions split per Codex recommendation. Each session = small, isolated, owner-approved per session.

**Companion files:** `PHASE_B_DESIGN_PROPOSAL_V2.md` (design strategy) · `CODEX_PHASE_B_PLAN.md` (handoff bridge with challenge prompts) · `Vocnjak Phase B Mockup.html` (visual canon).

**No implementation begins until owner posts `Approved for commit` per session.**

---

## 1. Phase B Done Definition

Phase B is "done" when, and only when, **all 16 UXR sessions below are shipped, verified, and owner-accepted.** No partial done. No deferring to "future polish." If a sub-task is in this plan, it ships in Phase B.

What ships, in user-visible terms:
- Default load goes to Pregled (not Biljke)
- Adriatic palette (`#1f4a5f` top bar, `#3a7a99` brand) replaces blue scaffold + green legacy on V2 surfaces
- Fraunces + DM Sans typography (Google Fonts + system fallback)
- 4-tab bottom nav (Pregled · Kalendar · Biljke · Dnevnik) with frosted-glass surface
- Top app bar in deep Adriatic, screen title + max one right affordance
- Slide-up Postavke sheet (no new route) holding Backup, Voćnjak (Arhiva), O aplikaciji (Verzija, Dijagnostika), Napredno (legacy escape)
- Pregled 2026 hero (gradient banner + horizon SVG + month chip + status sentence overlay)
- Per-species SVG icons + accent stripes + Plant detail species-banner — **all 14 catalog species** with generic fallback
- Calm status chips (Aktualno sea-pale, Pri kraju peach, Odrađeno plum-rose, Preskočeno neutral, no red, no count badges)
- Inline "+ Dodaj voćku" action row at top of Biljke
- `Dodaj evidenciju` removed from Biljke primary surface; available only via Plant detail + Seasonal action detail
- Plant detail with strong section breaks (Karton, Mlada voćka commentary, Trenutne sezonske radnje, Klopke, Vizualni pregled, Što gledati, Opažanja, Dnevnik ove voćke, Arhiviraj in "⋯")
- Kalendar as vertical season timeline with sticky-month headers (no day grid)
- Dnevnik as monthly sticky-header timeline with hairline rail + chips + markers
- Form screens hide bottom nav, sticky bottom action bar, "ne znam" checkbox nested under input, sticky helper "Prva voćka, krećemo." on Biljke empty
- All `v2*` ID consumers preserved; existing JS behavior identical; export/import unchanged; validator unchanged; storage unchanged
- WCAG AA contrast verified; 44 px touch targets; `prefers-reduced-motion` respected
- `#legacy` route byte-identical visually after every session

What does NOT ship in Phase B (genuinely separate, not deferred):
- F1–F10 from `CODEX_PHASE_B_PLAN.md` § 2 (seasonal hero mood, naslovnica voćnjaka, foto-traka rasta, voćnjak iz zraka, prošle godine, pull-to-refresh, razglednica, zoom viewer, iCal, time-of-day). These are separate future features for Phase C / D / Z, not Phase B work being deferred.

---

## 2. Owner Decisions (Resolved)

| # | Decision | Owner answer | Where it lands |
|---|---|---|---|
| 1 | Default route | **A** — empty hash → Pregled; `#v2` remains Biljke compatibility alias; `#biljke`, `#legacy`, all `#v2/...` routes preserved | UXR.2a |
| 2 | Fraunces font delivery | **A** — Google Fonts CDN with strong system fallback stack (`'Fraunces', 'Source Serif Pro', Georgia, 'Times New Roman', serif`); offline fallback acceptable; no `manifest.json` or `sw.js` change | UXR.1b |
| 3 | Import confirmation pattern | **A** — inline confirm panel inside Postavke sheet (expand-to-confirm); existing import/export/validation behavior unchanged; only presentation changes | UXR.2c |
| 4 | Species icon coverage | **B** — all 14 catalog-supported species in Phase B; generic neutral fallback for any unrecognized species_id | UXR.3d |
| 5 | Bottom nav on form screens | **A** — hide bottom nav on form screens (Dodaj voćku, Dodaj evidenciju, Dodaj opažanje, Zabilježi vizualni pregled, Korekcija); back chevron in top bar returns | UXR.2d + UXR.4 |
| 6 | Pregled hero contrast | **A** — keep mockup hero direction; text-shadow + WCAG AA check on iPhone viewport; add subtle dark scrim zone only if AA fails | UXR.3a |
| 7 | Dodaj evidenciju primary placement | **A** — remove from Biljke primary surface; remain available via Plant detail + Seasonal action detail context only; route unchanged (`#v2/activity/add[/...]` still works) | UXR.3c |

---

## 3. Canonical Species List (14, source-verified)

Source: `index.html` line 6206–6210, `EXPECTED_SPECIES` constant. Cross-verified against `EXPECTED_VARIETY_COUNTS` line 6213. Owner-approved variety counts match.

| # | species_id | hrvatski label | category | varieties (count) |
|---|---|---|---|---|
| 1 | `apple` | jabuka | pome | 8 |
| 2 | `sweet_cherry` | trešnja | stone | 5 |
| 3 | `sour_cherry` | višnja | stone | 4 |
| 4 | `plum` | šljiva | stone | 6 |
| 5 | `peach` | breskva | stone | 5 |
| 6 | `nectarine` | nektarina | stone | 5 |
| 7 | `pear` | kruška | pome | 5 |
| 8 | `quince` | dunja | pome | 3 |
| 9 | `apricot` | marelica | stone | 6 |
| 10 | `almond` | badem | stone (nut) | 3 |
| 11 | `walnut` | orah | nut | 3 |
| 12 | `hazelnut` | lijeska | nut | 3 |
| 13 | `olive` | maslina | special (Mediterranean) | 7 |
| 14 | `pomegranate` | šipak | special (Mediterranean) | 0 |

Deferred per `V2_FUTURE_ROADMAP.md`: `fig`, `citrus` (lemon/orange/mandarin). These are NOT in Phase B icon set.

**UXR.3d delivers:** one inline SVG icon per species above (14), one neutral generic fallback SVG (1), one species accent color per species (14, drawn from real fruit color), one Plant detail species-banner gradient per species (14). Total = 14 icons + 1 fallback + 14 accent colors + 14 banner gradients.

---

## 4. UXR Sessions Charter (16 sessions)

Each session: **owner approval required** before opening. **Browser verification + snapshot validator `[]` + `#legacy` byte-identical** mandatory at session close. **One commit per session.** If a session's verification fails, fix in same session before closing; do not advance to the next session.

### UXR.0 — Runtime IA + ID audit

- **Goal.** Walk every V2 surface live. Document every `getElementById('v2*')` consumer. Document every position-dependent JS hook (`childNodes`, `firstElementChild`, `nextSibling`, `previousSibling`, `:nth-child`, `> :first-child`). Document every route handler. Document every back/cancel handler that hardcodes `#v2`. Document every Postavke-bound action (Slice status text targets, backup/import IDs, exit button).
- **Files changed.** `UXR_AUDIT.md` (new) only.
- **Allowed.** Reading code, reading docs, running browser.
- **Forbidden.** Any `index.html` edit.
- **Verification.** Owner reads audit + signs off.
- **Output.** `UXR_AUDIT.md` containing: route map, ID consumer list, position-dependent hook list, scaffold node list, back/cancel handler list, copy-edit-touched-by-Phase-A list.

### UXR.1a — V2-scoped Phase B design tokens

- **Goal.** Add Phase B Adriatic CSS custom properties scoped to `.v2-active`. Tokens declared but not consumed by any V2 selector yet. Visual diff is approximately nil.
- **Files changed.** `index.html` `<style>` block additions only.
- **Allowed.** Adding `.v2-active { --v2-bg, --v2-cream, --v2-cream-2, --v2-surface, --v2-pale, --v2-ink, --v2-ink-mid, --v2-ink-mute, --v2-line, --v2-brand, --v2-brand-deep, --v2-brand-on, --v2-peach, --v2-peach-ink, --v2-plum, --v2-plum-ink, --v2-acc-jabuka, --v2-acc-sljiva, --v2-acc-tresnja, --v2-acc-orah, --v2-acc-kruska, --v2-acc-breskva, --v2-acc-visnja, --v2-acc-marelica, --v2-acc-badem, --v2-acc-lijeska, --v2-acc-dunja, --v2-acc-nektarina, --v2-acc-maslina, --v2-acc-sipak, --v2-acc-generic ... }`. Hex values from `Vocnjak Phase B Mockup.html` `:root` block.
- **Forbidden.** Editing legacy `:root`. Editing any legacy selector. Touching JS. Changing DOM. Changing `manifest.json` / `sw.js` / routing / storage / validators.
- **Verification.** Open Pregled, Kalendar, Biljke, Plant detail, Dnevnik, all forms. Visual diff approximately nil. `window.v2ValidateForBackup(JSON.parse(localStorage.getItem('vocnjak_v2')))` returns `[]`. `#legacy` byte-identical visually.

### UXR.1b — Fraunces + DM Sans typography link

- **Goal.** Add Google Fonts `<link>` for Fraunces (variable, `opsz` axis 9..144, weights 400/500/600/700, italic 400/500). Add `--v2-display: 'Fraunces', 'Source Serif Pro', Georgia, 'Times New Roman', serif;` token. Declare body-default font via `--v2-body: 'DM Sans', -apple-system, 'Segoe UI', sans-serif;`. Add `font-display: swap` ensures graceful fallback if Google Fonts unreachable.
- **Files changed.** `index.html` `<head>` (one `<link>` to Google Fonts) + `<style>` block tokens.
- **Allowed.** Single Google Fonts `<link>` for Fraunces. CSS custom properties for display + body font stacks. Owner explicitly approved Google Fonts dependency; offline fallback to Georgia/system stack acceptable.
- **Forbidden.** Changing `manifest.json`. Changing `sw.js`. Self-hosting font files (Phase B). Changing legacy font stack. Touching JS. Changing any V2 selector to consume `--v2-display` yet (consumption lands in UXR.3+).
- **Verification.** Fraunces loads when online; fallback stack renders correctly when offline (test by blocking Google Fonts in DevTools). `window.v2ValidateForBackup(...)` returns `[]`. `#legacy` byte-identical.

### UXR.2a — Default route flip + alias safety

- **Goal.** Change `getRoute()` line ~8870 from `if (h === '#v2' || h === '') return { name: 'list' };` to two-line block: `if (h === '') return { name: 'pregled' };` + `if (h === '#v2') return { name: 'list' };`. This makes empty hash land on Pregled while preserving `#v2` as Biljke alias. All existing back/cancel handlers that hardcode `'#v2'` continue to mean Biljke (compatibility unchanged).
- **Files changed.** `index.html` route block only (lines ~8869–8870). One JS edit.
- **Allowed.** The route change. Adding a single inline comment.
- **Forbidden.** Touching any other handler. Changing any other route. Touching DOM. Touching CSS.
- **Verification.** Open app with empty hash → lands on Pregled. Type `#v2` → lands on Biljke. Type `#biljke` → still resolves (audit in UXR.0 must confirm `#biljke` is or isn't a current route; if it's not, it doesn't need to be added in this session). Test every back-chevron / cancel from every screen — none breaks. `#legacy` still goes to legacy. `#v2/pregled`, `#v2/kalendar`, `#v2/diary`, `#v2/plant/<id>`, `#v2/add`, `#v2/seasonal-action/...`, `#v2/activity/add`, `#v2/.../correct` all resolve identically. `window.v2ValidateForBackup(...)` returns `[]`. `#legacy` byte-identical.

### UXR.2b — App shell: top app bar + bottom nav

- **Goal.** Build sticky top app bar (`--v2-brand-deep` background, screen title in `--v2-display`, max 1 right affordance) + 4-tab bottom nav (Pregled · Kalendar · Biljke · Dnevnik) with frosted-glass surface, inline SVG icons (4), active-tab top-stripe indicator. Active tab derived from current route.
- **Files changed.** `index.html` — `<style>` (shell CSS) + `#v2Shell` HTML restructure (new wrapper divs `#v2TopBar`, `#v2BottomNav` + DOM reorder to put content between them; existing surface containers like `#v2Plants`, `#v2Pregled` etc. moved into a `#v2Screen` scroll wrapper) + minimal JS to update top bar title text + active tab on route change.
- **Allowed.** New shell DOM scoped to V2. Reusing existing route handler — `render()` is extended to also call `setTopBar(title, rightAction)` and `setActiveTab(tabId)`. New IDs on genuinely new structural nodes only.
- **Forbidden.** Changing routes, adding routes. Modifying any existing `getElementById('v2*')` consumer. Changing what `setStatus()` / `setCatalogStatus()` write. Changing label text of relocated scaffold (UXR.4 renames Postavke labels). Adding count badges to tabs.
- **Verification.** Each tab navigates to its existing route. Active tab indicator correct on every route. Top bar title correct on every screen. Safe-area top + bottom padding respected on notched iPhone. Snapshot validator returns `[]`. Export/import still work via existing IDs (which haven't moved yet — UXR.2c moves them). `#legacy` byte-identical.

### UXR.2c — Postavke sheet + scaffold relocation + inline import confirm

- **Goal.** Build Postavke slide-up sheet (DOM overlay, not new route). Relocate Slice 0 H1, Slice status `<p>` nodes (`v2StoreStatus`, `v2CatalogStatus`, `v2BackupStatus`), V2 backup buttons (`v2ExportBtn`, `v2ImportBtn`, hidden `v2ImportFile`), legacy exit button (`v2ExitBtn`) **preserving every ID**. Sheet sections: Podaci i sigurnost (Izvezi sigurnosnu kopiju · Uvezi sigurnosnu kopiju) · Voćnjak (Arhiva link) · O aplikaciji (Verzija · Dijagnostika `<details>` containing the Slice status nodes) · Napredno (Otvori staru verziju). **Replace `window.confirm()` for import with inline expand-to-confirm panel** inside the sheet: tapping `Uvezi sigurnosnu kopiju` expands the row to show "Cijela V2 pohrana bit će zamijenjena. [Da, uvezi] [Odustani]" without opening a second modal.
- **Files changed.** `index.html` — `<style>` (sheet CSS) + `#v2Shell` DOM moves + minimal JS change to swap `window.confirm()` for inline panel state.
- **Allowed.** DOM relocation preserving IDs. New sheet wrapper + sections. Inline confirm pattern (replaces one `window.confirm()` call). Single new helper function `togglePostavkeSheet(open)`. Existing event listeners on `v2ExportBtn`/`v2ImportBtn`/`v2ExitBtn`/`v2ImportFile` continue to fire unchanged.
- **Forbidden.** Changing what `setStatus()` writes (UXR.4 might rename button labels but not status text). Changing export/import payload format. Changing validator behavior. Adding new IDs that compete with existing `v2*` IDs. Adding a route for the sheet. Stacking a confirm modal on top of the sheet.
- **Verification.** Open Postavke from "⋯" on Pregled. Each section visible. Tap export → file downloads (unchanged behavior). Tap import → expand-to-confirm appears; confirm → file picker opens; pick file → import runs (unchanged behavior); cancel → confirm collapses without opening picker. Tap "Otvori staru verziju" → lands on `#legacy` (unchanged behavior). Slice statuses visible inside Dijagnostika `<details>`. All `getElementById('v2StoreStatus' | 'v2CatalogStatus' | 'v2BackupStatus' | 'v2ExportBtn' | 'v2ImportBtn' | 'v2ImportFile' | 'v2ExitBtn')` still resolves to the relocated nodes. Snapshot validator returns `[]`. `#legacy` byte-identical.

### UXR.2d — Detail / form behavior: back chevron + hide bottom nav on forms

- **Goal.** Detail screens (Plant detail, Seasonal action detail) render the top bar back chevron that returns to the originating list. Form screens (Dodaj voćku, Dodaj evidenciju, Dodaj opažanje, Zabilježi vizualni pregled, Korekcija, Dodaj fazu razvoja) hide the bottom tab bar entirely while open (avoid keyboard collision); top bar back chevron acts as cancel; sticky bottom action bar holds Spremi + Odustani.
- **Files changed.** `index.html` — `<style>` (`.v2-bottom-nav-hidden` rule + sticky action bar) + minimal JS in `render()` to toggle hide-bottom-nav class on form route names.
- **Allowed.** New CSS class for hidden bottom nav. JS in `render()` to add/remove the class based on route name. No new routes. No new handlers. Existing form action elements untouched in this session.
- **Forbidden.** Changing form field markup. Changing form validation. Changing form submit behavior. Changing what Spremi does. Changing the sticky action bar polish — that's UXR.4. Adding new routes.
- **Verification.** Open any detail → back chevron returns to list. Open any form → bottom nav hidden, keyboard does not collide with sticky action bar. Close form via back chevron → bottom nav reappears. Existing `Spremi` and `Odustani` still work. Snapshot validator returns `[]`. `#legacy` byte-identical.

### UXR.3a — Pregled 2026 hero + status sentence overlay

- **Goal.** Build the Pregled full-width gradient hero (240 px min-height) at top of Pregled scroll. Layers: bottom-to-top gradient (`#1f4a5f → #3a7a99 → #d99060`), warm sun-glow radial top-right, dim corner radial bottom-left, frosted month/season chip ("Veljača · kasna zima" — chip text derives from current month + season range), horizon SVG silhouette (3 stylized trees), status sentence overlaid in Fraunces italic 28 px white with text-shadow.
- **Files changed.** `index.html` — `<style>` (`.v2-pregled-hero` + children) + Pregled render block updated to emit the hero markup above the existing status sentence + replace the legacy in-content status sentence with the hero-overlaid one (the hero IS the status sentence rendering on Pregled). Status sentence text content is unchanged — same `V2_UX_MODEL.md` §1.1 wording.
- **Allowed.** New CSS scoped to `.v2-pregled-hero`. Minimal render change to emit hero markup. Month/season chip text computed from current date.
- **Forbidden.** Changing the status sentence text content (the locked §1.1 wording). Adding any urgency / KPI / weather forecast affordance to the hero. Animating the hero. Touching the rest of Pregled section ordering (§1.3 lock).
- **Verification.** White-on-warm-dawn text passes WCAG AA at 28 px (if not, add subtle dark scrim zone behind text only). iPhone notch-safe. Hero respects safe-area top. Snapshot validator returns `[]`. `#legacy` byte-identical. Existing Pregled section order (Sada aktualno → Za provjeru → Uskoro → Praćenje → ...) preserved per §1.3.

### UXR.3b — Cards + status chips refresh

- **Goal.** Apply Phase B visual treatment to every V2 card kind: seasonal action card (white surface, 12 px radius, soft shadow, chip top-right), plant card (white + 4 px species accent stripe, left), monitoring card / `Što gledati` (pale-green fill, no shadow), trap-advisory card / `Klopke` (cream-dark fill), scouting card / `Vizualni pregled` (pale-green or white), risk-awareness card (cream-dark fill + 3 px brand stripe + italic Fraunces heading). Apply chip palette: Aktualno sea-pale · Pri kraju peach · Uskoro receded pale · Odrađeno plum-rose · Preskočeno neutral · `ispravljeno` / `nakon razdoblja` inline text markers, no chip background.
- **Files changed.** `index.html` — `<style>` (card + chip CSS) + `classList` additions in render functions where existing JS-built DOM lacks the class hooks.
- **Allowed.** New CSS. `el.classList.add(...)` additions in existing render code. Visual treatment of `Prošlo` chip (currently rendered) is **folded to prose per owner decision 6** — instead of rendering `Prošlo` chip, render `Bilo je aktualno od … do …` line per §2 wording. No new chip vocabulary.
- **Forbidden.** Editing what cards say (text content). Editing aggregation logic (§1.5 lock). Editing chip vocabulary (§1 lock). Editing Plan Templates content (`Napomene`). Editing source-backed `Što gledati` / `Što sada`. Adding red / urgent / overdue / due styling. Adding count badges. Editing monitoring / Activity / Observation / Correction logic.
- **Verification.** All chip labels match §1 vocabulary. No red surface anywhere. Card text content byte-identical pre/post (DOM textContent diff per surface). `Prošlo` chip no longer rendered; prose appears instead. Snapshot validator returns `[]`. `#legacy` byte-identical.

### UXR.3c — Biljke inline action row + Dodaj evidenciju demotion

- **Goal.** Replace any in-body navigation button stack on Biljke with the inline `+ Dodaj voćku` action row (64 px tall, full-width minus 16 px outer padding, hairline border + soft shadow, white surface, brand-green `+` glyph + "Dodaj voćku" label + empty-state helper "Prva voćka, krećemo." padded to keep row height constant at 64 px → zero layout shift on first plant capture). Remove `Dodaj evidenciju` primary button from Biljke entirely — capture flow remains reachable via Plant detail (`Dodaj opažanje`, `Dodaj fazu razvoja`, `Zabilježi vizualni pregled`) and via Seasonal action detail (`Zabilježi evidenciju`). Route `#v2/activity/add` continues to work and accept programmatic navigation.
- **Files changed.** `index.html` — `<style>` (action row CSS) + Biljke render block: remove `Dodaj evidenciju` button, add inline action row at top, add "Prikaži arhivirane (N)" link at bottom when archive non-empty.
- **Allowed.** Removing one `Dodaj evidenciju` button element from Biljke render. Adding inline action row. Adding the empty-state helper text. Adding the archive-link element.
- **Forbidden.** Removing or changing the `#v2/activity/add` route. Changing what `Dodaj evidenciju` does when invoked from other contexts. Changing capture form logic. Changing how Activity records are stored / validated / exported.
- **Verification.** Biljke shows single primary action (the inline row). Tap row → `#v2/add`. Empty Biljke shows helper text under the label. Populated Biljke shows the row without helper. Layout shift on first plant capture = 0 (row height constant). `Dodaj evidenciju` reachable from Plant detail and Seasonal action detail (unchanged). Snapshot validator returns `[]`. `#legacy` byte-identical.

### UXR.3d — Species identity: 14 inline SVG icons + accent stripes + Plant detail species-banner

- **Goal.** Embed 14 inline SVG icons (one per species in §3) + 1 generic fallback. Plant card receives a 56 × 56 species icon at left, species-tinted pale background, 4 px left accent stripe in real fruit color. Plant detail receives a 170 px full-width species-banner hero (gradient from light tint → mid → deep, species SVG centered 96 px). Render code maps `plant.species_id` → species class. Unknown species → generic fallback icon + generic neutral background.
- **Files changed.** `index.html` — `<style>` (species CSS — 14 species classes + generic) + inline SVG definitions (14 + 1 = 15 total) embedded once + `classList` additions in plant card + Plant detail render to add species class derived from `plant.species_id`.
- **Allowed.** SVG embedded inline (no external file). Class derivation from `plant.species_id` using a static mapping (`'apple' → 'jabuka'`, etc. — map the catalog ID to the CSS class). Fallback to `generic` class for unrecognized species. New CSS rules per species (icon background, accent stripe, banner gradient).
- **Forbidden.** External SVG files. Animated SVG. State-bound icon variants (no "ripe vs unripe", no "alarm" variant). Per-variety differentiation (same icon for Jabuka Fuji and Jabuka Idared). Editing `plant.species_id` field or schema. Editing catalog. Editing `EXPECTED_SPECIES` list.
- **Verification.** All 14 species render correctly. Generic fallback renders for unknown species (test by manually setting `plant.species_id = 'unknown'` in memory). Icons are visually distinct at 56 × 56 (apple ≠ pear ≠ quince — pome species need clear differentiation). Accent stripe color matches species. Plant detail banner gradient matches species. Snapshot validator returns `[]`. `#legacy` byte-identical.

### UXR.4 — Forms + capture flows polish + Postavke label rename + empty helper copy

- **Goal.** Apply Phase B form chrome to all capture forms (Dodaj voćku, Dodaj evidenciju, Dodaj opažanje, Zabilježi vizualni pregled, Dodaj fazu razvoja, Korekcija). "ne znam" checkbox nested directly under its related input (visual grouping fix). Sticky bottom action bar (visible without scrolling on tall forms). Rename Postavke button labels: `Izvezi V2 sigurnosnu kopiju` → `Izvezi sigurnosnu kopiju`; `Uvezi V2 sigurnosnu kopiju` → `Uvezi sigurnosnu kopiju`; `Natrag na staru aplikaciju` → `Otvori staru verziju`. Add empty-state helper `Prva voćka, krećemo.` to Biljke empty (lands in UXR.3c HTML but text copy approval consolidated here).
- **Files changed.** `index.html` — `<style>` (form CSS) + minimal DOM tweaks for sticky action bar wrappers + 3 button text edits in Postavke + 1 helper text in Biljke empty.
- **Allowed.** New CSS. Sticky action bar wrappers. Button label edits on the 3 Postavke buttons + the 1 helper line. No other user-content copy edits.
- **Forbidden.** Editing field names, field order, validator semantics. Editing the `ne znam` checkbox behavior (only its visual nesting changes). Editing what `setStatus()` writes. Editing status sentences, monitoring guidance, Plan Templates prose, chip labels, screen titles, source-backed copy.
- **Verification.** Each form submits end-to-end (same data, same validation, same persistence). Sticky action bar visible without scrolling. Postavke shows new button labels. Biljke empty shows helper. No other copy changed. Snapshot validator returns `[]`. `#legacy` byte-identical.

### UXR.5a — Kalendar vertical season timeline (NO day grid)

- **Goal.** Restyle Kalendar as vertical seasonal scroll: months as sticky H2 headers in Fraunces (current month gets 1 px brand-green accent stripe; other months hairline), action cards in date order beneath each month, calm chips. `Mlade voćke` orientation cards per-month (Step 8 contract preserved). End-of-season anchor at bottom. No 7×5 day grid. No day-cell dots. The legacy `.cal-*` CSS classes are NOT lifted into V2 — V2 Kalendar uses its own `.v2-kal-*` classes that produce the vertical timeline.
- **Files changed.** `index.html` — `<style>` (Kalendar CSS) + Kalendar render block: replace day-grid markup with month-section markup + action cards in date order per month + `Mlade voćke` cards rendered where currently rendered.
- **Allowed.** New CSS scoped to `.v2-kal-*`. Render restructure that emits monthly sections instead of day grid. Sticky-header behavior for month names.
- **Forbidden.** Changing the underlying snapshot computation that produces seasonal actions per month. Editing Step 8 year-1-2 young-tree relevance filter. Editing `Mlade voćke` orientation card content. Adding day cells. Adding "today" highlight box. Adding appointment-style time slots.
- **Verification.** Kalendar shows months as sections, current month accented. Action cards correctly placed per month. `Mlade voćke` orientation renders for year-1-2 plants. No day grid anywhere. Snapshot validator returns `[]`. `#legacy` byte-identical.

### UXR.5b — Plant detail rhythm

- **Goal.** Apply Phase B vertical rhythm to Plant detail. Hero block: plant species + sorta in Fraunces 30 px + quiet meta line (`podloga · godina X od sadnje · izvor`). Karton voćke: definition pairs in 2-column rows (label left uppercase tracked, value right). Mlada voćka: italic-Fraunces commentary card with `--v2-pale` tint (only when year 1-2 per Step 8). Section ladder rendered per `PHASE_B_DESIGN_PROPOSAL_V2.md` §4.6 with 24 px section breaks + Fraunces section headings. `Opažanja` two capture buttons demoted to secondary visual style (only one primary at a time per `single visible primary action` UX principle). `Arhiviraj voćku` moved into top-bar "⋯" menu — not a visible body button.
- **Files changed.** `index.html` — `<style>` (Plant detail CSS) + Plant detail render block: classList additions on existing section divs + restyle of Opažanja buttons + "⋯" top-bar menu wiring for Arhiviraj.
- **Allowed.** CSS + classList additions. One new "⋯" menu item handler for Arhiviraj (same archive action, different invocation surface). Plant detail species-banner ships in UXR.3d.
- **Forbidden.** Changing what each section CONTAINS (Karton fields, Mlada voćka text, Trenutne sezonske radnje data, Klopke advisory text, Vizualni pregled capture flow, Što gledati guidance text, Opažanja list, Dnevnik ove voćke rows). Changing archive logic (A1 lock). Hiding any section behind collapsibles by default.
- **Verification.** Plant detail renders the section ladder in correct order with breathing. Year-1-2 plant shows Mlada voćka commentary; year-3+ does not. Archive action reachable from "⋯" — same logic as before. Opažanja has only one visual primary at rest. Snapshot validator returns `[]`. `#legacy` byte-identical.

### UXR.5c — Dnevnik timeline + chips + markers + empty-state SVG

- **Goal.** Restyle Dnevnik as monthly sticky-header timeline. Month names in Fraunces, sticky to top of viewport on scroll, hairline beneath. Rows: hairline vertical timeline rail on left (3 px), event content right of rail. Row format `<date>. · <event label>` line + `<status / scope / markers>` line per §3 lock. `Odrađeno` chip (plum-rose) · `Preskočeno` chip (neutral cream) · `ispravljeno` inline text marker · `nakon razdoblja` inline text marker. Empty state: Phase A copy preserved + abstract branch SVG centered above (line-art, single color, `aria-hidden`). Same SVG motif on Pregled empty + Biljke empty (small variants).
- **Files changed.** `index.html` — `<style>` (Dnevnik CSS + empty SVG CSS) + Dnevnik render block: sticky monthly header wrappers + classList additions on rows + inline SVG in empty containers.
- **Allowed.** CSS + classList additions. Sticky-position on month headers. Embedded inline SVG in 3 empty-state containers (Pregled empty, Biljke empty, Dnevnik empty).
- **Forbidden.** Changing Activity / Observation / Correction text content. Changing sort order. Changing `ispravljeno` / `nakon razdoblja` derivation logic. Adding score / streak / "this month" summary. Per-state empty illustrations. Animated SVG.
- **Verification.** Dnevnik shows monthly sticky headers. Rows render the locked §3 format. Chips and markers calm. Empty states show SVG mark. Snapshot validator returns `[]`. `#legacy` byte-identical.

### UXR.6 — Accessibility + outdoor regression + final sign-off

- **Goal.** WCAG AA contrast verification per chip + text pair. Hero white-on-warm-dawn confirmed AA (or scrim added in UXR.3a). 44 px touch targets verified per surface. `prefers-reduced-motion` enforced (Postavke sheet slide-up animation short-circuited; any active-tab indicator fade short-circuited). Outdoor screenshot check if owner can provide. Final regression sweep: diff filtered to CSS / `classList` / minimal-JS-route-change at runtime level. Confirm: schema, validators, storage, import/export, snapshot computation, monitoring, B2, S8, Plan Templates, manifest, sw, Cloudflare all unchanged.
- **Files changed.** `index.html` — fixes only if regression finds issues (CSS-only fixes). No new content.
- **Allowed.** Contrast token tweaks. New `@media (prefers-reduced-motion: reduce)` blocks. Touch-target padding adjustments.
- **Forbidden.** Everything not on goal list.
- **Verification.** Contrast checker report attached per pair. Touch-target audit attached per surface. `#legacy` byte-identical. Snapshot validator returns `[]`. Export/import round-trip works on each owner platform. Sandbox: open every screen, navigate every tab, open Postavke, open every form, capture every kind, view every detail. No JS console errors. Owner sign-off — Phase B closes.

---

## 5. UXR.0 Audit Prompt — paste-ready for Codex

```text
Approved for commit — UXR.0 (audit only, no code).

Read UXR_FINAL_PLAN.md §4 UXR.0. Produce UXR_AUDIT.md containing exactly:

1. ROUTE MAP
   - List every route the current router returns (every branch of getRoute() in index.html).
   - For each route, the exact hash that produces it + the route name + any URL params.
   - List every `location.hash = '#v2'` or `location.hash = '#v2/...'` assignment in the codebase.
   - List every back/cancel handler that hardcodes a hash literal.

2. ID CONSUMER MAP
   - For every getElementById('v2*') call, document the ID, the file/line, the operation performed, and the JS handler/listener (if any).
   - Confirm every ID required to survive UXR.2c relocation (v2StoreStatus, v2CatalogStatus, v2BackupStatus, v2ExportBtn, v2ImportBtn, v2ImportFile, v2ExitBtn) is currently rendered exactly once.

3. POSITION-DEPENDENT HOOKS
   - Grep index.html for childNodes, firstElementChild, nextSibling, previousSibling, lastElementChild, :nth-child, > :first-child, > *, > p, > div used inside V2 code.
   - For each hit, document whether reparenting the children would break the hook.

4. SCAFFOLD INVENTORY
   - List every DOM node currently rendered as primary V2 UI that UXR.2c will relocate into Postavke. For each: tag, ID, current parent, what it does.

5. SECTION ORDER + COPY MAP
   - For Pregled, list the exact render order of sections (status sentence, Sada aktualno, weather hint when present, Za provjeru: nema evidencije, Uskoro, Praćenje, plan-change signal, quiet state). Confirm it matches V2_UX_MODEL.md §1.3.
   - For Dnevnik, confirm row format matches §3.
   - For Plant detail, list the section order currently rendered.

6. PHASE A FOOTPRINT
   - List every copy line touched by Phase A (cc22d24): clickable Pregled cards, calendar-window disclaimer rewrite, harvest/winter purposeCue rewrite, Dnevnik empty-state copy, Mlade voćke heading, Pregled Za provjeru/Uskoro empty-section copy, boot canonical-catalog refresh branch. Confirm none of UXR.1a/1b/2a/2b/2c/2d/3a/3b/3c/3d/4/5a/5b/5c/6 regresses these.

7. SPECIES_ID FIELD AUDIT
   - Document where plant.species_id is read in the render path. Confirm UXR.3d can safely add classList based on plant.species_id without touching field semantics.
   - List the 14 species IDs from EXPECTED_SPECIES (index.html ~6206) and confirm catalog seed produces all 14. Document the generic fallback path for an unrecognized species_id.

8. ROUTE-DEFAULT FLIP IMPACT
   - For the single-line getRoute() change in UXR.2a (empty hash now lands on pregled instead of list), identify every other consumer of the empty-hash case: PWA install behavior, hashchange listener side effects, deep-link compatibility, #legacy fallback path, any initial-load JS that branches on hash === ''. Confirm or refute "one-line change, no second-order effects."

9. FONT FALLBACK IMPACT
   - For UXR.1b Google Fonts Fraunces with system fallback stack ('Source Serif Pro', Georgia, 'Times New Roman', serif), confirm Phase B layouts (mockup file as reference) hold under fallback (text wrapping, line height, character widths) without breaking the design.
   - Confirm offline-only PWA launch still renders the app readably with fallback fonts.

Deliverable: UXR_AUDIT.md committed to repo. No code changes. No commit on index.html. Owner reads UXR_AUDIT.md before approving any subsequent UXR session.

Do not implement any UXR session beyond UXR.0 in this commit. Wait for "Approved for commit — UXR.1a" after owner reviews the audit.
```

---

## 6. Hard Boundaries (repeated for self-discipline)

Identical to `POLISH_BACKLOG.md` § "V2 Visual UX Refresh — Hard boundaries + UX anti-patterns." Phase B may not:

- introduce React / Tailwind / build pipeline / TypeScript / external UI library
- split the single-file app
- change `manifest.json` or `sw.js`
- change schema / validator / storage key / migration / import-export payload format / snapshot computation
- change Plan Templates content
- change B2 / S8 / monitoring / scouting / trap / stage / Observation / Correction logic
- introduce BBCH / phenology engine / regional offset / automatic date shifting
- introduce urgency / compliance / overdue / streak / gamification / dopamine loop
- introduce diagnosis / treatment recommendation / product / dose advice beyond existing source-backed wording
- introduce AI / photo recognition / paid / subscription / push notification
- introduce Cloudflare deployment change
- introduce hidden gestures, swipe-only primaries, modal stacking, infinite feeds, FAB stacks, skeleton loaders, smart reordering
- introduce count badges, progress meters, completion rings, confetti
- introduce new routes (except the one-line default-route flip in UXR.2a)
- regress `#legacy` visual byte-equality after any session
- defer any item that is in this plan to "later" — if it's not done, the session that owns it is not done

---

*End of plan. Implementation begins with `Approved for commit — UXR.0` paste of §5 prompt to Codex.*
