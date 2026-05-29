# POLISH BACKLOG

Small UX / UI / copy issues.
Do NOT implement individually.
Resolve only in batch sessions.

Provenance note: this file is a parking lot for future polish, UX, UXR, and visual-design work. Entries may come from V1/legacy app observations, current review observations, or Claude Design recommendations for future V2 design sessions. They may describe old, current, placeholder, proposed, or future surfaces; they do not prove that equivalent V2 runtime UI currently exists and do not authorize implementation outside the current roadmap/session. Future UXR/design recommendations must wait for dedicated UXR/visual refresh sessions. B2/S8 monitoring and risk behavior remains governed by `V2_UX_MODEL.md` §0, `V2_DOMAIN_MODEL.md`, `V2_CURRENT_STATE.md`, and `V2_EXECUTION_ROADMAP.md`.

---

## RULE

If it's not blocking usage → it goes here.
If an item affects data model, execution logic, validation, or plan matching → it does NOT belong here.
---

## PLANTS

- Tabs show only 2 letters (e.g. "Fu") → improve readability
- Plant detail for new plants has no emoji / subtitle → add fallback

---

## ACTIVITIES

- Toast messages inconsistent (❌ vs text)
- Empty state copy can be improved

---

## GENERAL

- Minor spacing inconsistencies
- Copy tweaks (HR text improvements)

## Plan Templates runtime parity — UX/copy follow-ups (after `c9645c4`)

Provenance: owner notes recorded during browser verification of `c9645c4 Implement Plan Templates runtime parity fixes`. Items 1 and 2 below were resolved by Phase A UX/copy polish at `cc22d24 Polish V2 UX copy and Pregled click affordance`; owner mobile browser verification passed. Item 3 (Springcrest) remains a future Plan Templates parity / content timing item, NOT UX polish. None are V2 Done blockers. None authorize runtime/model/schema/Plan Templates changes.

- ~~`Namjena: berba u optimalno doba.` may be too generic.~~ Resolved by Phase A `cc22d24`: harvest `purposeCue` rewritten to `Namjena: berba kad plodovi dosegnu zrelost.` — still informational, still pan-species, not prescriptive; the app does not decide harvest dates.
- ~~`Namjena: priprema voćnjaka za zimu.` may be too generic.~~ Resolved by Phase A `cc22d24`: `Pregled za zimu` `purposeCue` rewritten to `Namjena: provjera debla, vezica, zaštite od glodavaca i mumificiranih plodova.` — mirrors `STANDARD_ACTION_WINDOW_NOTES.winter_inspection` content; still informational, not prescriptive.
- Peach Springcrest harvest around 25.06 vs bird-net around 10.07 looks suspicious. Classify later as a possible Plan Templates parity issue — investigate whether the source-backed peach Springcrest harvest start and the species `peach.bird_net.pre_harvest` window are aligned to source. Do not touch now; this is owner-decision triage, not implementation. Remains UNRESOLVED; not UX polish.

Phase A also added two adjacent UX fixes outside the original three-item list above, both shipped at `cc22d24`: (a) the universal calendar-window disclaimer constant was rewritten to `Datumi su okvirni podsjetnik. Stvarno stanje voćke i lokalni uvjeti imaju prednost pred datumom: u toplijim krajevima radnje mogu krenuti ranije, a u hladnijim krajevima kasnije.`, dropping the previous `Kalendarski prozor` / unexplained `fenofaza` user-facing copy from the generic calendar disclaimer only (placement on Seasonal action detail unchanged; concrete plant-state guidance in source-backed `Napomene` prose preserved verbatim); (b) Pregled seasonal cards are now clickable to Seasonal action detail, matching Kalendar and Plant detail. Phase A also added a V2 boot canonical-catalog refresh branch that closed the mobile validation regression caused by stale `vocnjak_v2.catalogs.catalog_v1` after `c9645c4`. None of these are V2 Done blockers and none reopened Plan Templates content.

Hard boundaries for any future micro-session driven by this list: no `V2_ORCHARD_PLAN_TEMPLATES.md` edit unless separately approved; no BBCH; no phenology engine; no regional offset; no automatic date shifting; no plan recalculation; no urgency/overdue/compliance; no diagnosis; no treatment recommendation; no product/dose advice beyond existing source-backed safety wording; no `Observation.symptom`; no `symptom_code`; no symptom registry; no program-attached observations; no broader scouting beyond Step 7c; no AI; no paid/subscription work; no schema/model/storage/validator/import/export change; no S8 reopening; no A1/A2 change.

## Sync / Settings / Data Utility redesign

Current `Sync / Sinkroniziraj` is a temporary mixed utility/data-management screen, not a long-term core orchard surface. It currently mixes Claude export/import, legacy JSON backup/download/import, v4 JSON export/import, iCal/GitHub reminder sync, Supabase cloud backup/restore, GitHub token/repo setup, Supabase URL / anon key / SQL setup / user key, and usage instructions.

Long-term direction: move `Sync` out of primary bottom navigation. Recommended future core nav:

```text
Pregled | Kalendar | Dodaj | Dnevnik | Biljke
```

Settings/data utilities should move under future `Postavke` or an equivalent secondary settings entry:

```text
Postavke
├─ Moj profil
├─ Voćnjak
├─ Podaci i sigurnost
├─ Podaci za Claude
├─ Integracije
└─ Napredno
```

Current function mapping:

- `Izvezi dnevnik` / `Kopiraj dnevnik u clipboard` → `Podaci za Claude`
- `Uvezi dnevnik` / Claude JSON import → `Podaci za Claude` or possible retirement
- legacy `Preuzmi backup` → `Podaci i sigurnost`
- `Sigurnosna kopija (v4)` export/import → `Podaci i sigurnost`
- `Cloud backup (Supabase)` backup/restore actions → `Podaci i sigurnost`
- Supabase URL / anon key / SQL / user key → `Napredno`
- `iCal sync` → `Integracije`
- GitHub repo/token setup → `Integracije` / `Napredno`
- `Kako koristiti` Claude instructions → `Podaci za Claude`, not generic help

Terminology conflicts: `Izvezi dnevnik`, `Kopiraj dnevnik u clipboard`, `Uvezi dnevnik`, and export heading `DNEVNIK VOCNJAKA` conflict with S6 terminology because `Dnevnik` is reserved for the chronological history surface for Activities and Observations. Preferred replacements: `Izvezi podatke za Claude`, `Kopiraj podatke za Claude`, `Uvezi podatke iz JSON-a`, `Uvezi podatke od Claudea`, `PODACI VOĆNJAKA`.

Future profile/settings fields are data-model decisions, not current implementation: user first name, user last name, email, app language, orchard name, editable city/region, editable weather location, preferred language/locale.

Security/privacy notes for future session: GitHub PAT should not be a normal visible UI field; Supabase URL/anon key/SQL setup belongs under advanced/admin setup; user key should not be shown in normal UI; clipboard export copies full app/orchard data and needs explicit disclosure; import/restore workflows need strong safety copy and backup behavior.

Out of scope now: no runtime change, no schema change, no Settings implementation, no bottom-nav runtime change. Revisit during a future Settings / Navigation / Polish session.

# 🟡 V2 Monitoring & UX Polish

Provenance: V1/legacy UX observation and/or future UXR backlog, not current V2 runtime state.

## Monitoring / Plant detail

- Monitoring section prikazuje sve KPI kartice odmah nakon dodavanja biljke → djeluje preopterećeno i zbunjujuće  
- Nedostaje kontekst “što sada provjeriti” → korisnik ne zna odakle krenuti  
- Razmotriti prikaz samo relevantnih KPI-eva (sezonski / kontekstualno)

## Activity / Dnevnik

- Monitoring zapis se prikazuje kao raw value (`monitoring:aphids_none`) → nije user-friendly  
- Potrebno mapiranje na čitljiv tekst (npr. “Lisne uši: nema”)

## Legacy UI

- “Zadaci nisu dostupni u v4 modelu” blok je zastario i zbunjujući  
- Razmotriti uklanjanje ili zamjenu relevantnim sadržajem

## Add screen UX

- Monitoring input lista je duga i zahtijeva scroll → potencijalno naporno za korisnika  
- Razmotriti kompaktniji prikaz (grupiranje / kraći izbori)

---

# 🎨 V2 Visual UX Refresh (PHASE B UXR — ACTIVE)

Provenance: Claude Design recommendation backlog and the accepted Phase B UXR plan. Phase B is active, but every UXR implementation session still requires explicit owner approval.

Visual design slice for V2.

This section is **documentation/tracking only**. It is not itself an implementation session.

---

## Status

- **Active:** Phase B / UXR is open as a bounded, owner-approved visual usability track.
- `UXR.0 — Runtime IA + ID audit` is complete at `5ef720d Add Phase B UXR audit`.
- `UXR.1a — V2-scoped Phase B design tokens` is complete at `8163d1c Add Phase B V2 design tokens`. UXR.1a changed only the `index.html` CSS token block under `.v2-active`; it did not consume tokens and did not change JS, DOM, routes, storage, validators, import/export behavior, Plan Templates, `manifest.json`, or `sw.js`.
- `UXR.1b — Fraunces + DM Sans typography link` is complete at `8702836 Add Phase B typography font loading`. UXR.1b changed only Phase B Google Fonts loading in `index.html` `<head>` and the V2 body font fallback token adjustment, if present; the existing legacy font link was not changed, and no JS, DOM body structure, routes, storage, validators, import/export behavior, Plan Templates, `manifest.json`, or `sw.js` changed.
- `UXR.2a — Default route flip + alias safety` is complete at `559012cc67357333d60cfcc37ba17afdf3db6ae6 Set Pregled as default V2 route`. Empty hash / no hash now opens Pregled; `#v2` remains the Biljke compatibility alias; `#biljke` remains Biljke; and `#pregled`, `#kalendar`, `#dnevnik`, `#legacy`, and old `#v2/...` routes remain supported. UXR.2a changed only the default route branch in `index.html`; no CSS, DOM, font, storage, validator, import/export, `manifest.json`, or `sw.js` change was made. Backup validator was not available in Browser automation, but the patch was route-only and route smoke checks passed.
- `UXR.2b — App shell: top app bar + bottom nav` is complete at `927555d Add Phase B V2 app shell`. UXR.2b changed only `index.html` and added a sticky V2 top app bar in deep Adriatic, a fixed four-tab bottom nav (Pregled · Kalendar · Biljke · Dnevnik) with frosted-glass surface, a deterministic route-name-only active-tab indicator, and an `#v2Content` wrapper that holds the existing scaffold and screen registry between the new bars. UXR.2b preserved every existing V2 screen root ID, all back/cancel destinations, `#v2` as the Biljke compatibility alias, `#legacy`, every old `#v2/...` deep link, import/export behavior, validators/storage, Plan Templates content, `manifest.json`, and `sw.js`. UXR.2b did NOT implement the Postavke sheet, scaffold relocation, inline import confirm, form hide-bottom-nav behavior, top-bar back chevron, Pregled hero / cards / section-order changes, or species icons. Browser route smoke check, bottom-nav tap navigation for all four tabs, and backup validator (`[]`) passed; no console errors.
- `UXR.2c — Postavke sheet + scaffold relocation + inline import confirm` is complete at `a78840a Add Phase B settings sheet`. UXR.2c changed only `index.html` and relocated the V2 H1 / Slice 0 note / `v2StoreStatus` / `v2CatalogStatus` / `v2BackupStatus` / `v2ExportBtn` / `v2ImportBtn` / `v2ImportFile` / `v2ExitBtn` nodes into a new slide-up `#v2Postavke` sheet opened from a single top-bar `⋯` button (`#v2TopBarPostavkeBtn`). The sheet is grouped into Podaci i sigurnost (export, import, inline confirm panel, backup status), O aplikaciji (version line, Dijagnostika `<details>` containing the relocated V2 H1, Slice 0 note, `v2StoreStatus`, `v2CatalogStatus`), and Napredno (`v2ExitBtn` relabelled "Otvori staru verziju"). UXR.2c replaced the existing `window.confirm()` for import with a post-validation inline confirm panel (`#v2ImportConfirm` with `v2ImportConfirmYes` / `v2ImportConfirmCancel`) that keeps the parsed validated payload in memory only and writes to `localStorage` only after the user taps "Da, uvezi"; "Odustani" and sheet close (Gotovo / Escape / backdrop) discard the pending payload, reset `v2ImportFile.value`, and write `Slice 3 — uvoz prekinut.`. A narrow `v2-postavke-close` custom DOM event on `#v2Postavke` bridges sheet close to Slice 3 import discard — no global state, no shared namespace. UXR.2c added minimal focus management (focus moves to "Gotovo" on open, restores to the trigger on close), body scroll lock via `html.v2-active.v2-postavke-locked`, and reduced-motion respect. UXR.2c preserved every existing V2 ID, route behavior, default route, `#v2` alias, `#legacy`, old `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, and `sw.js`; did NOT implement UXR.2d, UXR.3, archive route/surface (Voćnjak section intentionally omitted), species icons, or any storage/schema/validator/payload changes. Browser verification passed for 29 unique IDs, all routes including malformed deep links, Postavke open/close via tap/Gotovo/Escape/backdrop, focus management, body scroll lock, export, three import paths (invalid JSON fail-closed, wrong-shape JSON fail-closed, valid then Odustani no-write, valid then sheet-close-during-pending no-write, valid then Da-uvezi writes), backup validator `[]`, `#legacy` renders no V2 chrome.
- `UXR.2d — Detail / form behavior: back chevron + hide bottom nav on forms` is complete at `17e5439 Refine Phase B detail and form shell`. UXR.2d changed only `index.html` and implemented the Claude-Design-aligned top-bar text-back affordance pattern from `Claude-design/Vocnjak Phase B Mockup.html` `.app-top-back`: a `<button id="v2TopBarBackBtn">` carrying a small SVG chevron + a DM Sans 15px 500 white parent-context label (`< Biljke` / `< Kalendar` / `< Voćka` / `< Dnevnik`), visible only on detail and form routes via the `hidden` attribute. Back targets are deterministic hash-only (no `history.back()`): `detail` → `< Biljke` / `#v2`; `seasonal_action` → `< Kalendar` / `#v2/kalendar`; `plant_diary` → `< Voćka` / `plantDetailRoute(plant_id)` when `route.plant_id` is valid, else `< Biljke` / `#v2`; `add` / `activity_add` → `< Biljke` / `#v2`; `correction` → `< Dnevnik` / `#v2/diary`. Detail routes intentionally render NO center title — the back-text label carries parent context per the mockup; form routes show the existing in-app action heading as the top-bar title (`Dodaj voćku` / `Dodaj evidenciju` / `Korekcija`). A new `v2-route-form` class on `<html>` (set on `add` / `activity_add` / `correction` only) hides the bottom nav and the Postavke `⋯` trigger and reduces `#v2Content` padding-bottom from `calc(var(--safe-bottom) + 96px)` to `calc(var(--safe-bottom) + 24px)` so forms feel like focused iPhone modals. Existing in-screen back/cancel controls are intentionally preserved — temporary visual duplication with the top-bar back chevron — to be demoted later by UXR.5b (Plant detail rhythm) and UXR.4 (form polish) as part of per-screen redesign sessions. UXR.2d preserved every existing V2 ID (one net-new `v2TopBarBackBtn` + `v2TopBarBackLabel`), route table, default route, route aliases, `#v2` alias, `#legacy`, old `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, and `sw.js`; did NOT implement UXR.3, UXR.4 (sticky form action bar, top-bar Spremi CTA, broader copy polish), UXR.5, archive route, species icons, or any storage/schema/validator/payload changes. Browser verification passed for 31 IDs unique, all 14 route shapes (route classification, title, back label, back target, bottom-nav visibility, Postavke visibility, content padding), back-button tap navigation for every detail/form route, Postavke open/close regression on primary routes, Postavke hidden on form routes (`display: none` + `offsetParent === null`), form submit handlers + in-screen Odustani button preserved, legacy escape preserved, backup validator `[]`, `#legacy` renders no V2 chrome.
- `UXR.3a — Pregled hero + section order` is complete at `44eff72 Add Phase B Pregled hero`. UXR.3a changed only `index.html` and added the accepted Claude Design Pregled hero (`Claude-design/Vocnjak Phase B Mockup.html` lines 1084–1095) immediately below the app shell on the Pregled route: a full-bleed Adriatic gradient section (`linear-gradient(180deg, var(--v2-brand-deep) 0%, var(--v2-brand) 55%, #d99060 100%)`) with measured runtime margins (`-24px -16px 24px`), a sun-glow + dim-corner radial overlay via `::before`, a backdrop-blur uppercase month chip with peach dot indicator (`Svibanj · kasno proljeće` style from a 12-entry display-only `V2_PREGLED_HERO_MONTH_QUALIFIER_HR` table scoped to the hero helper), the existing runtime `seasonalStatusSentence(...)` rendered as Fraunces italic with `text-shadow: var(--v2-shadow-hero-text, 0 1px 8px rgba(20,32,40,0.32))` and a deterministic, fallback-safe accent span (`.v2-pregled-status-accent`) wrapping only the count phrase (`1 sezonska radnja` or `N sezonske radnje`), and a static decorative horizon SVG (3 tree silhouettes) absolutely positioned at the hero base. A visually hidden `<h1 class="v2-sr-only">Pregled</h1>` was added inside the hero `<section role="region" aria-label="Sezonski pregled">` to preserve a proper page heading after `appendSeasonalHeader` was skipped on Pregled. The Pregled section order is now aligned to locked `V2_UX_MODEL.md` §1.3: hero → `Sada aktualno` → `Za provjeru: nema evidencije` → `Uskoro` → `Praćenje` (B2/Praćenje, neutral text, unchanged styling) → `Mlade voćke` (existing `appendYoungTreePregledSection`, unchanged styling) → final quiet line (only when all five lists are empty). A minimal Pregled-only hero-coupled rhythm rule (`#v2Pregled .v2-seasonal-section h3` → Fraunces 20px / 500 / `letter-spacing: -0.01em` / `--v2-ink` / `margin: 28px 0 12px`, with `:first-of-type` margin-top 4px) bridges the premium hero typography to the section headings below without redesigning cards/chips/lists. `appendSeasonalHeader` removal was scoped to `renderPregled` only — Kalendar (`renderKalendar` at `index.html:12569`) and Seasonal Action Detail (`renderSeasonalActionDetail`) still call it unchanged. The standalone `<p class="v2-plants-status">` element was removed from `renderPregled` (its content now lives inside the hero); the `.v2-plants-status` CSS rule is unchanged and remains used by Plant detail and Diary. The hero JS helpers (`V2_PREGLED_HERO_MONTH_QUALIFIER_HR`, `buildHeroStatusElement`, `appendPregledHero`) live inside the same V2 Plants IIFE as `renderPregled`, immediately above it. The accent wrap uses controlled-input `indexOf` against locked `seasonalStatusSentence` output and falls back to plain text on no match. The full-bleed margin uses measured `#v2Content` (16px horizontal / 16px top padding) and `#v2Plants` (24px top margin) values — not blindly copied from the mockup — plus `box-sizing: border-box; max-width: 100%; overflow: hidden;` to prevent horizontal overflow at narrow viewports. Browser verification passed at 320px and 390px viewport widths with a temporary DevTools-only `vocnjak_v2` store carrying a single valid Idared apple plant (immediately removed after screenshots; rebuilt empty store backup validator returned `[]`); the empty-plant gate continued to short-circuit before hero render; Kalendar still rendered with its `appendSeasonalHeader` h2 + `Sezona 2026.` subtitle + in-screen seasonal nav; `#legacy` continued to render with no V2 chrome; Postavke open/close still worked. UXR.3a preserved every existing V2 ID, route table, default route, route aliases, `#v2` alias, `#legacy`, all old `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, and `sw.js`. UXR.3a did NOT implement UXR.3b (broader card/chip/list visual system), UXR.4 (sticky form action bar, top-bar Spremi CTA, broader copy polish), UXR.5, archive route/surface, species icons, Plant detail species banner, Pregled empty-state illustration (mockup screen 02), or any storage/schema/validator/payload changes. The Pregled monitoring heading copy alignment from `Sezonsko praćenje` to `Praćenje` shipped as the UXR.3a follow-up at `fec7bfb Align Pregled monitoring heading` — Pregled-only one-line change to `appendB2PregledSection` with no logic, storage, validator, Plan Templates, manifest, or sw change.
- `Claude-design/` remains local reference material only and is not committed. Transient local `.claude/` preview/config junk used during UXR.2b / UXR.2c / UXR.2d / UXR.3a verification was removed and is not committed.
- `UXR.3b — Cards/chips/list visual system` is complete at `9c46712 Refine Phase B Pregled cards`. UXR.3b changed only `index.html` and applied the accepted Claude Design Adriatic card/chip/list visual system to Pregled with strict session-boundary discipline: a new Pregled-scoped `<style>` block (`BEGIN UXR.3b — Pregled cards / chips / Praćenje / list` / `END UXR.3b`) delivers white seasonal cards with 18 px radius, 1 px `var(--v2-line)` border, soft layered shadow `0 1px 0 rgba(255,255,255,0.6) inset, 0 4px 14px rgba(31,74,95,0.08)`, 16 px 18 px padding, and a calm 1 px `:active` micro-press; a consistent `.v2-seasonal-card-top` flex wrapper on Pregled `appendSeasonalCard` outputs holds the title (DM Sans 16 / 600 `var(--v2-ink)`) and the new top-right status chip; three calm chip variants consume the UXR.1a chip tokens — `.v2-seasonal-status--aktualno` (sea-pale on brand-deep), `.v2-seasonal-status--pri-kraju` (warm peach on peach-ink), `.v2-seasonal-status--uskoro` (faded pale-sea on muted ink) — with no red, no amber-alarm, no icons, no countdown, no urgency framing; meta typography 13 px `var(--v2-ink-mid)`, note typography 13 px `var(--v2-ink-mute)`; section rhythm drops the cold slate `border-top` from `.v2-seasonal-section` and adds 12 px list gap; Pregled `.v2-plants-empty` and the Mlade voćke intro sentence (as a direct section-child meta) receive matching calm typography. Praćenje on Pregled now renders inside a new `.v2-pregled-monitoring-card` neutral sea-pale info-card surface (`var(--v2-pale)` fill, 14 px radius, 14 px 16 px padding, no shadow, no border) wrapping the existing B2 count sentence and the locked `Detalji su na kartonu voćke.` deflection note — no B2 logic change, no new B2 data, no warning glyph. Mlade voćke cards on Pregled are visually unified through the same `#v2Pregled`-scoped CSS on the existing markup; `appendYoungTreeContextCard` is intentionally **unchanged**, so Plant detail Mlada voćka section and Kalendar Mlade voćke section render byte-identical DOM and byte-identical visual to today. Runtime markup changes are limited to two narrowly-gated edits — `appendSeasonalCard` (Pregled-only branch on `context === 'current' | 'upcoming' | 'missed'`; Kalendar `context === 'calendar'` falls through to the unchanged path, so `.v2-seasonal-card-top` cannot appear on Kalendar, Seasonal action detail, or Plant detail) and `appendB2PregledSection` (wraps existing meta sentence + deflection note in the new info-card div). A new local helper `pregledStatusChipVariant` next to `groupStatusLabel` maps the locked status strings to chip variant classes. UXR.3b preserved every existing V2 ID, route table, default route, route aliases, `#v2` alias, `#legacy`, all `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, `sw.js`, B2/S8 monitoring logic, Activity/Observation/Correction logic, archive lifecycle logic, `appendYoungTreeContextCard`, `appendPlantSeasonalActionCard`, `appendB2CalendarCard`, `appendSeasonalSection`, `appendSeasonalHeader`, `renderKalendar`, `renderSeasonalActionDetail`, `renderDetail`, and the UXR.3a Pregled hero. Plant detail / Kalendar / Seasonal action detail / Dnevnik / Postavke / `#legacy` DOM are byte-identical to today. UXR.3b did NOT implement UXR.3c (Biljke Add Plant pattern / Dodaj evidenciju demotion), UXR.3d (per-species icons / Plant detail species banner), UXR.4 (sticky form action bar / top-bar Spremi CTA / Postavke label rename), UXR.5a (Kalendar timeline), UXR.5b (Plant detail rhythm), UXR.5c (Dnevnik timeline), UXR.6 (a11y / `prefers-reduced-motion` pass), archive route/surface, species icons, Plant detail Mlada voćka italic-Fraunces commentary card, Pregled empty-state illustration, or any storage/schema/validator/import-export/Plan Templates/routes/manifest/sw changes. Static no-leakage proof: `grep` confirms `.v2-seasonal-card-top` appears only inside the gated `appendSeasonalCard` branch and Pregled-scoped CSS rules; `.v2-pregled-monitoring-card` appears only inside `appendB2PregledSection` and Pregled-scoped CSS rules; `appendYoungTreeContextCard` body is byte-identical to its pre-UXR.3b form. Owner browser verification (validator returns `[]`, Pregled visual states, Kalendar / Plant detail / Postavke / `#legacy` regression) is recommended via DevTools per the standard UXR pattern.
- `UXR.3c — Biljke Add Plant pattern / primary actions` is complete at `166f26f Refine Phase B Biljke actions`. UXR.3c changed only `index.html` and refined the Biljke primary surface under a new Biljke-scoped CSS block (`BEGIN UXR.3c — Biljke action row / archive toggle / list surface` / `END UXR.3c`, all selectors `.v2-active #v2PlantsList …`): an inline `+ Dodaj voćku` action row (constant 64 px frame, white surface, hairline border, soft shadow, brand-green inline SVG plus glyph, DM Sans 16/600 label, optional 13 ink-mute helper `Prva voćka, krećemo.` shown only when `plants.length === 0`) replaced the prior `v2-plants-topbar` div + `v2-activity-actions` four-button strip; `Dodaj evidenciju` was demoted from the Biljke body while `#v2/activity/add` and its Seasonal action detail + Plant detail contextual entries stay intact; duplicate in-body Pregled / Kalendar / Dnevnik buttons were removed (UXR.2b bottom-nav owns primary nav); the always-visible `Arhivirane voćke` section became a quiet ephemeral expand-on-tap toggle (`Prikaži arhivirane (N)` ↔ `Sakrij arhivirane (N)`, `aria-expanded` flips false/true, `aria-controls="v2PlantsArchiveList"`, collapsed every render, no localStorage / route / hash / history / persisted state); the duplicate in-body `<h2>Biljke</h2>` was removed (top app bar already shows `Biljke` via `TOP_BAR_TITLES.list`, untouched) and a visually-hidden `<h1 class="v2-sr-only">Biljke</h1>` added for a11y heading semantics; the muted `Još nema unesenih voćki.` paragraph was dropped while `Nema aktivnih voćki.` is kept for the active-empty + archived-non-empty edge case; minimal `#v2PlantsList`-scoped `.v2-plants-row` / `.v2-plants-list` surface polish with no species class, icon, accent stripe, or per-plant `Sada aktualno` line (all reserved for UXR.3d). UXR.3c preserved every existing V2 ID, route table, aliases, `#legacy`, import/export, validators/storage, Plan Templates content, `manifest.json`, `sw.js`, B2/S8 logic, Activity/Observation/Correction logic, A1 archive lifecycle, `TOP_BAR_TITLES`, every render function outside `renderList`, and every `append*` / archive helper; Plant detail / Kalendar / Pregled / Seasonal action detail / Dnevnik / Postavke / `#legacy` runtime code paths are untouched and no UXR.3c CSS targets those roots. UXR.3c did NOT implement UXR.3d (per-species icons / accent stripes / Plant detail species banner / per-plant live line), UXR.4 (forms / sticky action bar / Postavke label rename), UXR.5a (Kalendar timeline), UXR.5b (Plant detail rhythm / `⋯` overflow Arhiviraj), UXR.5c (Dnevnik timeline / empty-state SVG), UXR.6 (a11y pass), an archive route, a Postavke Voćnjak entry, a Pregled empty action-row mirror, or any storage/schema/validator/import-export/Plan Templates/routes/manifest/sw changes.
- Next session: `UXR.3d — per-species icons / Plant detail species banner`.
- Later-session audit notes: runtime uses `plant.species`, not `plant.species_id`, so UXR.3d must map species visuals from `plant.species`; the Pregled section-order discrepancy is closed by UXR.3a — broader card/chip restyle remains UXR.3b; `activity_add` currently maps the active tab to Biljke via the back-target rule and may be revisited when `Dodaj evidenciju` is demoted in UXR.3c; UXR.2c placed `v2BackupStatus` in Podaci i sigurnost (next to the buttons) rather than under Dijagnostika so import/export feedback stays visible — a deliberate refinement over the source spec text that may be revisited in UXR.4 if needed; Voćnjak / Arhiva sheet entry is deferred until a standalone archive surface exists; full focus trap is deferred to UXR.6 a11y pass; backup status text still reads `Slice 3 — …` and is candidate for copy polish in UXR.4; in-screen `Natrag` back buttons on detail/form screens visually duplicate the top-bar back chevron and should be demoted by UXR.5b / UXR.4 alongside per-screen redesign; in-screen `Odustani` cancel buttons on form routes are NOT duplicates of back (different semantics) and should be preserved or repositioned by UXR.4 sticky action bar; UXR.4 also owns adding the form-route top-bar Spremi CTA and the sticky form action bar; the Pregled hero accent span is intentionally scoped to the count phrase only (closing-soon clause not accented) and broader header-typography work on Kalendar / Biljke / Dnevnik stays UXR.3b/UXR.5 territory; `Sezonsko praćenje` → `Praćenje` heading copy alignment from locked `V2_UX_MODEL.md` §1.3 is complete as the UXR.3a follow-up at `fec7bfb Align Pregled monitoring heading`.
- **Sequencing prerequisite:** Phase B came AFTER S7, B2, S8, the owner-approved A2/A1 baseline decisions, the Plan Templates runtime fidelity / content parity runtime patch at `c9645c4 Implement Plan Templates runtime parity fixes`, and the Phase A functional UX/copy polish runtime at `cc22d24 Polish V2 UX copy and Pregled click affordance` per `V2_EXECUTION_ROADMAP.md §0`.
- Current V2 Done order:
  1. complete B2 / Runtime Slice 8 / Post-S8 Observation correction (done)
  2. A2 default V2 / remove `#v2` gate after owner approval (done)
  3. A1 archive/lifecycle baseline after owner approval (done)
  4. Plan Templates runtime fidelity / content parity session (done at `c9645c4 Implement Plan Templates runtime parity fixes`)
  5. Phase A — Functional UX/copy polish runtime (done at `cc22d24 Polish V2 UX copy and Pregled click affordance`; owner mobile browser verification passed)
  6. Phase B UXR active: UXR.0 audit complete, UXR.1a tokens complete, UXR.1b typography loading complete, UXR.2a default route flip complete, UXR.2b app shell complete at `927555d`, UXR.2c Postavke sheet + scaffold relocation + inline import confirm complete at `a78840a`, UXR.2d Detail/form shell (top-bar text-back + hide bottom nav and Postavke on form routes) complete at `17e5439`, UXR.3a Pregled hero + section order complete at `44eff72`, UXR.3b Cards/chips/list visual system complete at `9c46712`, UXR.3c Biljke Add Plant pattern / primary actions complete at `166f26f`, next UXR.3d per-species icons / Plant detail species banner
  7. V2 Done audit after all Phase B UXR sessions are shipped, verified, and owner-accepted
- Phase A does not close Phase B. Phase A shipped runtime copy and click-affordance fixes plus a V2 boot canonical-catalog refresh branch in `index.html` only; Phase B remains the separately approved visual usability refresh described below (design tokens, typography, branded V2 header, status chips, cards/lists refresh, forms/empty-state polish), still no framework / build pipeline / `manifest.json` / `sw.js` / schema / Plan Templates / BBCH / urgency / diagnosis / treatment / AI / paid-subscription work.
- No agent may begin the next visual-refresh implementation step without explicit per-session owner approval.

---

## Purpose

Modernize the V2 visual layer for iPhone / PWA use without changing any runtime behavior.

Target feel:

- modern 2026 iOS / PWA aesthetic
- premium orchard notebook, not a dashboard
- calm, practical, one-handed use
- outdoor-readable (sun, glare, gloves)
- strong section hierarchy, generous spacing, clear touch targets
- bottom-navigation polish, safe-area handling
- soft cards, subtle depth, no flashy motion
- compact status chips
- timeline-style Dnevnik polish
- seasonal action cards that are easy to scan
- monitoring cards that remain neutral and non-alarming
- risk / awareness cards visually distinct from pest / disease monitoring
- empty states that feel helpful, not broken

Explicitly avoid:

- ❌ dashboard clutter
- ❌ KPI-heavy UI
- ❌ gamification
- ❌ progress rings
- ❌ compliance charts
- ❌ flashy animations
- ❌ dense admin-panel feel
- ❌ "task manager" aesthetic

The app **informs, it does NOT instruct** (`V2_PRINCIPLES.md`). The visual layer must reinforce that posture.

---

## UX principles (orchard-first)

These are decision rules, not aesthetic preferences. When two design options conflict, the left-hand side wins. A choice that cannot be justified by one of these does not belong in this slice.

- orchard calm > productivity pressure
- readable outdoors > visual density
- one-thumb usage > desktop efficiency
- fast logging > perfect metadata
- informational > prescriptive
- seasonal context > task urgency
- history / evidence > recommendations
- stable navigation > clever UI
- predictable layout > novel interaction
- explicit affordances > hidden gestures
- single visible primary action > stacked / floating options
- absence of state is valid > forced empty-state nags

These principles are a direct extension of `V2_PRINCIPLES.md`. They do not introduce new product behavior; they constrain how existing behavior is presented.

---

## Hard boundaries (NON-NEGOTIABLE)

The visual refresh is **presentation-layer-only**. It MUST NOT:

- introduce React
- introduce Tailwind
- introduce any external UI library
- introduce a build pipeline
- introduce TypeScript
- split the single-file app
- create a component framework
- rewrite routing
- change data model
- change localStorage keys
- change migrations
- change validators
- change snapshot logic (private, read-time, derived — stays that way)
- change monitoring logic
- change Activity / Observation semantics
- change B2 / S8 rules or projection
- change the default URL / `#v2` cutover behavior
- change Cloudflare deployment
- change PWA / service worker behavior
- implement new features

This is **not** "redesign by rewrite". If a proposed visual change requires touching any of the above, it does NOT belong in this slice — it belongs in a separate, properly scoped session.

---

## UX anti-patterns (NON-NEGOTIABLE)

In addition to the technical boundaries above, the following interaction and layout patterns are forbidden. They consistently push the app toward task-manager, engagement-loop, or modern-frontend-rewrite territory and break the orchard-first posture.

DO NOT INTRODUCE:

- ❌ swipe-only or swipe-heavy primary interactions
- ❌ hidden gestures for critical actions (edge-swipe nav, long-press-only menus, shake-to-undo, etc.)
- ❌ infinite-scroll feeds
- ❌ modal stacking (a modal opening another modal)
- ❌ multi-step wizard flows for everyday capture (Activity / Observation must remain fast)
- ❌ floating or draggable UI elements
- ❌ animation-first navigation (transitions that gate comprehension or hide where you are)
- ❌ desktop sidebar layouts ported to phone
- ❌ adaptive / self-rearranging navigation based on recent use
- ❌ progress-psychology patterns (streaks, daily goals, completion meters, "X days in a row")
- ❌ dopamine / reward loops (badges, levels, achievements, confetti)
- ❌ FAB stacks or speed-dial menus that replace visible primary actions
- ❌ skeleton loaders for instant local data (this is a local-first PWA — empty until ready beats fake shimmer)
- ❌ toast pyramids (multiple toasts stacking on a single capture)
- ❌ "smart" reordering of plants, actions, or Dnevnik entries beyond the deterministic order already defined
- ❌ notification / nag patterns surfaced inside the UI (banners that demand action)

Every primary action must be reachable via a single, visible, predictable control. If a pattern above is the only way to express a requirement, the requirement is wrong for this app — restate it before designing around it.

---

## Suggested future sequence

Current Phase B session authority is `Claude-design/UXR_FINAL_PLAN.md` as local-only reference material. The older high-level outline below remains historical framing only; do not use it to override the accepted UXR.0/UXR.1a/UXR.1b/UXR.2a/UXR.2b/UXR.2c/UXR.2d/UXR.3a session sequence.

### UXR.1 — Visual audit

- inventory all V2 screens, surfaces, and shared UI fragments
- identify spacing, typography, hierarchy, contrast, touch-target, safe-area problems
- output: written audit document only
- **no code changes**

### UXR.2 — Design system constraints

- define allowed CSS-level primitives only: color tokens, spacing scale, typography scale, radii, shadows, motion timings
- written as plain CSS variables / utility classes inside the existing single-file app
- **no framework, no component rewrite, no JS API**

### UXR.3 — Core navigation + shell polish

- bottom nav visual polish
- screen headers
- iPhone safe-area handling (top notch, home indicator)
- PWA standalone ergonomics (status bar, splash, install affordance)
- thumb-zone review
- **routing untouched** — visual only

### UXR.4 — Card and list refresh

- seasonal action cards (Pregled / Kalendar)
- plant cards (Biljke)
- Dnevnik rows (timeline polish)
- status chips (open / upcoming / missed / done)
- monitoring vs risk-awareness visual differentiation
- **content, IDs, anchors, tolerances untouched**

### UXR.5 — Detail surfaces refresh

- plant detail
- seasonal action detail (Detalj sezonske radnje, post-S7)
- monitoring / risk detail (post-S8)
- empty-state polish across detail surfaces
- **derived-state computation untouched**

### UXR.6 — Accessibility + outdoor usability pass

- contrast (WCAG, plus sunlight reality check)
- minimum touch-target sizes
- font-size floor for outdoor reading
- reduced-motion respect (`prefers-reduced-motion`)
- one-handed reachability review
- **no logic changes**

### UXR.7 — Final polish + regression pass

- visual QA across all V2 surfaces
- explicit regression check: no data, model, routing, persistence, snapshot, or monitoring behavior changed
- diff must be CSS / HTML-class / markup-only at the runtime level
- **no migration**, **no schema change**, **no key change**

---

## Out of scope now

- no unapproved runtime change
- no unapproved `index.html` edit
- no unapproved CSS edit
- no design implementation
- no screenshots
- no commits beyond this documentation
- not part of S7, B2, or S8

Continue only through the currently opened UXR session. UXR.3a Pregled hero + section order is complete at `44eff72 Add Phase B Pregled hero`. UXR.3b Cards/chips/list visual system is complete at `9c46712 Refine Phase B Pregled cards` — Pregled-only Adriatic card surface refresh, calm Aktualno / Pri kraju / Uskoro chip variants top-right of titles, `.v2-pregled-monitoring-card` neutral sea-pale info-card surface for Praćenje, Mlade voćke unified via Pregled-scoped CSS on existing markup, `appendYoungTreeContextCard` and every Plant detail / Kalendar / Seasonal action detail / Dnevnik render function unchanged. UXR.3c Biljke Add Plant pattern / primary actions is complete at `166f26f Refine Phase B Biljke actions` — Biljke-only inline `+ Dodaj voćku` action row replacing the scaffold topbar + four-button strip, `Dodaj evidenciju` demoted from the Biljke body (route + contextual entries preserved), duplicate Pregled / Kalendar / Dnevnik body buttons removed, ephemeral expand-on-tap archive toggle, in-body `<h2>Biljke</h2>` replaced by a visually-hidden `<h1>`, and `#v2PlantsList`-scoped row/list surface polish; every render function outside `renderList` unchanged. The next implementation session is UXR.3d — per-species icons / Plant detail species banner.
