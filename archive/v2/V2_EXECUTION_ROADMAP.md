# V2 Execution Roadmap

**Authority note:** This document records the completed V2 execution baseline. Active roadmap authority now lives in `ROADMAP.md`; chronological state/history lives in `CURRENT_STATE.md`.

**Status:** S11.A, S11.B, S11.C1, S11.C2, and S11.D complete. Runtime implementation for the current V2 baseline is complete; Runtime Slices 0–8 are complete for their approved scopes. B2 metadata-only projection boundary is complete. Runtime Slice 8 is closed for the approved S8 scope: Step 1, Step 2, Step 3, Step 4a, Step 5a, Step 6, Step 7 numeric-band runtime, Step 7b context-only trap advisory runtime, Step 7c bounded visual scouting runtime, Step 7d source-backed scouting guidance runtime, and Step 7e monitoring guidance parity runtime are complete. Step 7c docs lock was committed at `7e388c5`; Step 7c runtime was committed at `588e413`; Step 7d source-backed scouting guidance runtime was committed at `5f64257 Add Step 7d scouting guidance`; Step 7e monitoring guidance parity runtime was committed at `36433aa Add Step 7e monitoring guidance parity`; tracker sync after Step 7e was committed at `c5521ac Sync trackers after Step 7e guidance parity`. Step 7 coverage is complete and no unresolved S8 blocker row remains. Post-S8 Observation correction is complete for the approved scope: docs lock at `1ef2009`, validator/model runtime at `60cc32c`, and UI/display runtime at `6d5b19d`. A2 default V2 / remove `#v2` gate and A1 archive/lifecycle baseline are complete. Plan Templates runtime fidelity / content parity runtime patch is complete at `c9645c4 Implement Plan Templates runtime parity fixes`. Phase B / UXR is complete through UXR.7 for the V2 Done baseline; UXR.0 (`5ef720d`), UXR.1a (`8163d1c`), UXR.1b (`8702836`), UXR.2a (`559012c`), UXR.2b (`927555d Add Phase B V2 app shell`), UXR.2c (`a78840a Add Phase B settings sheet`), UXR.2d (`17e5439 Refine Phase B detail and form shell`), UXR.3a Pregled hero + section order (`44eff72 Add Phase B Pregled hero`), UXR.3b Cards/chips/list visual system (`9c46712 Refine Phase B Pregled cards`), and UXR.3c Biljke Add Plant pattern / primary actions (`166f26f Refine Phase B Biljke actions`) are complete; the `UXR.4 — Forms + capture flows polish + Postavke label rename` is complete at `9223f81 Refine Phase B form flows` (`index.html`-only: sticky bottom action bar scoped to `html.v2-active.v2-route-form .v2-plants-actions` on the three true form routes `add` / `activity_add` / `correction` only; 15 user-facing `v2BackupStatus` `Slice 3 —` strings rewritten to clean Croatian with behavior/validation/payload unchanged; Postavke button labels + `ne znam` nesting already complete from earlier sessions; Plant detail inline capture forms untouched and deferred to UXR.5b; no top-bar `Spremi` CTA), UXR.3d species identity is complete at `473e1c7`, UXR.5 split-confirmed 5a/5b/5c is complete, UXR.6 accessibility/outdoor usability is complete at `a0cfc93`, and UXR.7 final mobile stabilization is complete through `aa63351`, `3d42e27`, `97585bc`, `f4b97e9`, and `353c6e1`. Young-Tree Formative Completion is complete at `7bf61c0 Complete young-tree formative guidance`; V2 Done audit passed with non-blocking follow-ups; V2 is marked Done. Broader phenology-aware stage confirmation, broad/general scouting beyond Step 7c, symptom capture / `Observation.symptom` / symptom registry, program-attached observations, BBCH/phenology engine, regional offsets, automatic date shifting, plan recalculation, urgency/overdue/compliance, treatment recommendation, diagnosis, and AI/paid/subscription work remain Post-S8 / owner-approved future work and do not block V2 Done.

**Post-UXR runtime stabilization update:** After UXR.6, three focused `index.html`-only runtime fixes were pushed and verified: `0f90de8 Fix V2 shell overlay and legacy navigation`, `06102aa Improve seasonal action detail layout`, and `a2b7a09 Reset V2 scroll position on route changes`. Together they restored closed-Postavke hit testing, same-document `#legacy` / V2 hash transitions, Seasonal action detail mobile information order, and route-keyed scroll-to-top behavior. They did not change storage/model, validators, import/export payloads, B2/S8 monitoring logic, Plan Templates, `manifest.json`, `sw.js`, or route semantics beyond the shell-level legacy bridge and scroll reset on rendered route changes.

**UXR.7 / final mobile stabilization update:** Complete through five `index.html`-only runtime commits: `aa63351 Polish final V2 form and marker details` (duplicated-title fix using the existing `v2-sr-only` pattern, V2-scoped `.v2-plants-field select` styling, corrected-marker token changed to `--v2-brand-deep`), `3d42e27 Fix final V2 mobile layout issues` (Pregled hero full-bleed fix, Add Plant/form horizontal-overflow hardening with `min-width: 0`, Kalendar opens near current month rather than January), `97585bc Fix final V2 mobile layout and pre-planting evidence` (top-bar title clipping fix, Pregled hero top-strip fix, V2 horizontal containment, initial pre-planting missed/no-evidence filtering from existing plant dates), `f4b97e9 Fix V2 mobile overflow and pre-planting missed evidence` (stronger V2-only mobile horizontal containment, `touch-action: pan-y` on V2 shell/nav, missed/no-evidence filter revised to skip missed occurrences when `effective_open < plantExistenceYmd`; verified with plant planted `2026-03-15` so early pre-planting windows no longer appear while later post-plant missed evidence still appears), and `353c6e1 Fix V2 date field layout and affordance` (final Add Plant date-field clipping fix, strengthened V2 form-control sizing, targeted native `input[type="date"]` styling, CSS calendar SVG affordance, native `type="date"` preserved, no custom picker, no JS widget, no storage/value-format change). Owner real iPhone/PWA verification after `353c6e1` accepted the final mobile state: Pregled title no longer clips, hero is full width and acceptable, Kalendar opens at the current month, Seasonal action detail remains good, Add Plant has no true horizontal scroll, `Posađeno` and `Kupljeno` date fields render with closed right border and calendar affordance, pre-planting early missed/no-evidence issue is resolved, and remaining Add Plant visual style is acceptable for V2 Done. UXR.7 / final mobile stabilization is complete. Young-Tree Formative Completion is complete at `7bf61c0 Complete young-tree formative guidance`; V2 Done audit passed with non-blocking follow-ups; V2 is marked Done.

Phase B / UXR progress record: Phase B / UXR is complete through UXR.7 for the V2 Done baseline. `UXR.0 — Runtime IA + ID audit` is complete at `5ef720d Add Phase B UXR audit`. `UXR.1a — V2-scoped Phase B design tokens` is complete at `8163d1c Add Phase B V2 design tokens`; it changed only the `index.html` CSS token block under `.v2-active`, consumed no tokens, and changed no JS, DOM, routes, storage, validators, import/export behavior, Plan Templates, `manifest.json`, or `sw.js`. `UXR.1b — Fraunces + DM Sans typography link` is complete at `8702836 Add Phase B typography font loading`; it changed only Phase B Google Fonts loading in `index.html` `<head>` and the V2 body font fallback token adjustment, if present. The existing legacy font link was not changed, and no JS, DOM body structure, routes, storage, validators, import/export behavior, Plan Templates, `manifest.json`, or `sw.js` changed. `UXR.2a — Default route flip + alias safety` is complete at `559012cc67357333d60cfcc37ba17afdf3db6ae6 Set Pregled as default V2 route`; empty hash / no hash now opens Pregled, `#v2` remains the Biljke compatibility alias, `#biljke` remains Biljke, and `#pregled`, `#kalendar`, `#dnevnik`, `#legacy`, and old `#v2/...` routes remain supported. UXR.2a changed only the default route branch in `index.html`; no CSS, DOM, font, storage, validator, import/export, `manifest.json`, or `sw.js` change was made. Backup validator was not available in Browser automation, but the patch was route-only and route smoke checks passed. `UXR.2b — App shell: top app bar + bottom nav` is complete at `927555d Add Phase B V2 app shell`. UXR.2b changed only `index.html` and added: a sticky V2 top app bar in deep Adriatic with a Fraunces title slot (`#v2TopBar` / `#v2TopBarTitle`); a fixed four-tab bottom nav with frosted-glass surface (`#v2BottomNav` with four `<a class="v2-bottomnav-tab" data-tab="…" href="#…">` tabs for Pregled · Kalendar · Biljke · Dnevnik); a deterministic, route-name-only active-tab indicator (`TOP_BAR_TITLES` and `ACTIVE_TAB_BY_ROUTE` maps, plus a small `updateShellChrome(route)` helper called as the first statement of the existing `render()`); and an `#v2Content` wrapper that holds the existing scaffold and screen registry between the new bars with `padding-bottom: calc(var(--safe-bottom) + 96px)` clearance. UXR.2b preserved every existing V2 screen root ID (`v2Plants`, `v2Pregled`, `v2Kalendar`, `v2SeasonalAction`, `v2PlantsList`, `v2PlantsAddForm`, `v2PlantsDetail`, `v2ActivityCapture`, `v2Diary`, `v2CorrectionForm`), all back/cancel destinations, `#v2` as the Biljke compatibility alias, `#legacy`, every old `#v2/...` deep link, import/export behavior, validators/storage, Plan Templates content, `manifest.json`, and `sw.js`. UXR.2b did NOT implement the Postavke sheet, scaffold relocation, inline import confirm, form hide-bottom-nav behavior, top-bar back chevron, Pregled hero / cards / section-order changes, or species icons. Browser route smoke check passed for empty hash, `#v2`, `#biljke`, `#pregled`, `#kalendar`, `#dnevnik`, `#v2/pregled`, `#v2/kalendar`, `#v2/diary`, `#v2/add`, `#v2/activity/add`, malformed `#v2/plant/...` / `#v2/seasonal-action/...` / correction deep links, and bottom-nav tap navigation for all four tabs; backup validator returned `[]`; no console errors. `UXR.2c — Postavke sheet + scaffold relocation + inline import confirm` is complete at `a78840a Add Phase B settings sheet`. UXR.2c changed only `index.html` and added: a top-bar `⋯` affordance (`#v2TopBarPostavkeBtn`) opening a slide-up `#v2Postavke` sheet (`role="dialog" aria-modal="true"`, backdrop, frosted-glass-style cream surface, sticky header with "Postavke" title + "Gotovo" close button, body grouped into Podaci i sigurnost / O aplikaciji / Napredno); static relocation of the V2 H1 / Slice 0 note / `v2StoreStatus` / `v2CatalogStatus` / `v2BackupStatus` / `v2ExportBtn` / `v2ImportBtn` / `v2ImportFile` / `v2ExitBtn` nodes into the sheet (every ID preserved exactly once); a post-validation inline import confirm panel (`#v2ImportConfirm` with `v2ImportConfirmYes` / `v2ImportConfirmCancel`) that keeps the parsed validated payload in memory only and writes to `localStorage` only after the user taps "Da, uvezi"; cancellation paths ("Odustani" / sheet close via Gotovo / Escape / backdrop) discard the pending payload, reset `v2ImportFile.value`, and write `Slice 3 — uvoz prekinut.`; minimal focus management (focus moves to "Gotovo" on open, restores to the trigger on close); body scroll lock via `html.v2-active.v2-postavke-locked`; reduced-motion respected; a narrow `v2-postavke-close` custom DOM event on `#v2Postavke` bridges sheet close to Slice 3 import discard (no global state, no shared namespace). UXR.2c preserved every existing V2 ID, route behavior, default route, `#v2` alias, `#legacy`, old `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, and `sw.js`; did NOT implement UXR.2d (top-bar back chevron, hide-bottom-nav-on-forms, sticky form action bar, route-specific back behavior), UXR.3, archive route/surface (Voćnjak section intentionally omitted because no standalone archive surface exists today), species icons, or any storage/schema/validator/payload changes. Browser verification passed for all 29 IDs unique, route smoke, Postavke open/close via tap/Escape/backdrop, focus into Gotovo and back to trigger, body scroll lock, export, import-invalid-JSON fail-closed, import-wrong-shape fail-closed, import-valid-then-Odustani no-write, import-valid-then-sheet-close-during-pending no-write, import-valid-then-Da-uvezi writes, backup validator `[]`, `#legacy` renders no V2 chrome. `Claude-design/` remains local reference material only and is not committed; transient local `.claude/` preview/config junk was removed and is not committed. Later UXR carry-forward notes: runtime uses `plant.species`, not `plant.species_id`, so UXR.3d must map species visuals from `plant.species`; Pregled section-order correction belongs to UXR.3a/UXR.3b, not UXR.2c; `activity_add` currently maps the active tab to Biljke via the back-target rule and may be revisited when `Dodaj evidenciju` is demoted in UXR.3c; form routes still show the bottom nav because hide-on-forms belongs to UXR.2d; UXR.2c places `v2BackupStatus` in Podaci i sigurnost (next to the buttons) rather than under Dijagnostika so import/export feedback stays visible — a deliberate refinement over the source plan that may be revisited in UXR.4 if needed; Voćnjak / Arhiva sheet entry is deferred until a standalone archive surface exists; full focus trap is deferred to UXR.6 a11y pass. `UXR.2d — Detail / form behavior: back chevron + hide bottom nav on forms` is complete at `17e5439 Refine Phase B detail and form shell`. UXR.2d changed only `index.html` and added a Claude-Design-aligned top-bar text-back affordance (`< ParentLabel` matching `Claude-design/Vocnjak Phase B Mockup.html` `.app-top-back`) using deterministic hash targets — `detail` → `< Biljke` / `#v2`, `seasonal_action` → `< Kalendar` / `#v2/kalendar`, `plant_diary` → `< Voćka` (or `< Biljke` when plant_id absent/invalid) / `plantDetailRoute(plant_id)` (or `#v2`), `add` / `activity_add` → `< Biljke` / `#v2`, `correction` → `< Dnevnik` / `#v2/diary`. Detail routes intentionally render NO center title (back-text carries parent context, matching the mockup); form routes show the existing in-app action heading as the top-bar title (`Dodaj voćku` / `Dodaj evidenciju` / `Korekcija`). A new `v2-route-form` class on `<html>` (set on `add` / `activity_add` / `correction` only) hides the bottom nav AND the Postavke `⋯` trigger and drops `#v2Content` padding-bottom from `calc(var(--safe-bottom) + 96px)` to `calc(var(--safe-bottom) + 24px)` so forms feel like focused iPhone modals. Back chevron uses `location.hash =` against the back target — no `history.back()`. Existing in-screen back/cancel controls are intentionally preserved (carry-forward for UXR.5b / UXR.4 to demote alongside their screen-specific redesign). Existing Postavke open/close / focus management / scroll lock / inline import confirm (UXR.2c) and bottom-nav active-tab state (UXR.2b) are unchanged on routes where they remain visible. UXR.2d preserved every existing V2 ID (one net-new `v2TopBarBackBtn` + `v2TopBarBackLabel`), route table, default route, route aliases, `#v2` alias, `#legacy`, old `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, and `sw.js`; did NOT implement UXR.3, UXR.4 (sticky form action bar, top-bar Spremi CTA, broader copy polish), UXR.5, archive route/surface, species icons, or any storage/schema/validator/payload changes. Browser verification passed for 31 IDs unique, all routes including malformed deep links (route classification + title + back label + back target + bottom-nav visibility + Postavke visibility + content padding per the locked table), back-button tap navigation for every detail/form route resolves to the expected target, Postavke regression on primary routes (open/close via Gotovo/Escape/backdrop, focus management, scroll lock), Postavke hidden on form routes (`display: none` + `offsetParent === null`), form submit handlers + in-screen Odustani button preserved, legacy escape button still present, backup validator `[]`, `#legacy` renders no V2 chrome. Later UXR.2d carry-forward notes: in-screen `Natrag` back buttons exist alongside the top-bar back chevron on detail/form routes — temporary duplication intentional for UXR.5b / UXR.4 to demote alongside per-screen redesign; in-screen `Odustani` cancel buttons on form routes are NOT duplicates of back (different semantics) and should be preserved or repositioned by UXR.4 sticky action bar; backup status text still reads `Slice 3 — …` and is candidate for copy polish in UXR.4; UXR.4 also owns adding the form-route top-bar Spremi CTA and the sticky form action bar. `UXR.3a — Pregled hero + section order` is complete at `44eff72 Add Phase B Pregled hero`. UXR.3a changed only `index.html` and added the accepted Claude Design Pregled hero immediately below the app shell on the Pregled route: a full-bleed Adriatic gradient section (`linear-gradient(180deg, var(--v2-brand-deep) 0%, var(--v2-brand) 55%, #d99060 100%)`) with measured runtime margins (`-24px -16px 24px`), a sun-glow + dim-corner radial overlay via `::before`, a backdrop-blur uppercase month chip with peach dot indicator (`Svibanj · kasno proljeće` style from a 12-entry display-only `V2_PREGLED_HERO_MONTH_QUALIFIER_HR` table scoped to the hero helper and explicitly commented as "visual copy only — must not be used for scheduling, phenology logic, urgency, plant-state decisions, action-window timing, or recommendations"), the existing runtime `seasonalStatusSentence(...)` rendered as Fraunces italic with `text-shadow: var(--v2-shadow-hero-text, 0 1px 8px rgba(20,32,40,0.32))` and a deterministic, fallback-safe accent span (`.v2-pregled-status-accent`) wrapping only the count phrase (`1 sezonska radnja` or `N sezonske radnje`), and a static decorative horizon SVG (3 tree silhouettes) absolutely positioned at the hero base. A visually hidden `<h1 class="v2-sr-only">Pregled</h1>` was added inside the hero `<section role="region" aria-label="Sezonski pregled">` to preserve a proper page heading after `appendSeasonalHeader` was skipped on Pregled. The Pregled section order is now aligned to locked `V2_UX_MODEL.md` §1.3: hero → `Sada aktualno` → `Za provjeru: nema evidencije` → `Uskoro` → `Praćenje` (B2/Praćenje, neutral text, unchanged styling) → `Mlade voćke` (existing `appendYoungTreePregledSection`, unchanged styling) → final quiet line (only when all five lists are empty). A minimal Pregled-only hero-coupled rhythm rule (`#v2Pregled .v2-seasonal-section h3` → Fraunces 20px / 500 / `letter-spacing: -0.01em` / `--v2-ink` / `margin: 28px 0 12px`, with `:first-of-type` margin-top 4px) bridges premium hero typography to section headings below without redesigning cards/chips/lists. `appendSeasonalHeader` removal was scoped to `renderPregled` only — Kalendar (`renderKalendar`) and Seasonal Action Detail (`renderSeasonalActionDetail`) still call it unchanged. The standalone `<p class="v2-plants-status">` element was removed from `renderPregled` (its content now lives inside the hero); the `.v2-plants-status` CSS rule is unchanged and remains used by Plant detail and Diary. The hero JS helpers (`V2_PREGLED_HERO_MONTH_QUALIFIER_HR`, `buildHeroStatusElement`, `appendPregledHero`) live inside the same V2 Plants IIFE as `renderPregled`, immediately above it. The accent wrap uses controlled-input `indexOf` against locked `seasonalStatusSentence` output and falls back to plain text on no match. The full-bleed margin uses measured `#v2Content` (16px horizontal / 16px top padding) and `#v2Plants` (24px top margin) values — not blindly copied from the mockup — plus `box-sizing: border-box; max-width: 100%; overflow: hidden;` to prevent horizontal overflow at narrow viewports. Browser verification passed at 320px and 390px viewport widths with a temporary DevTools-only `vocnjak_v2` store carrying a single valid Idared apple plant (immediately removed after screenshots; rebuilt empty store backup validator returned `[]`); the empty-plant gate continued to short-circuit before hero render; Kalendar still rendered with its `appendSeasonalHeader` h2 + `Sezona 2026.` subtitle + in-screen seasonal nav; `#legacy` continued to render with no V2 chrome; Postavke open/close still worked. UXR.3a preserved every existing V2 ID, route table, default route, route aliases, `#v2` alias, `#legacy`, all old `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, and `sw.js`. UXR.3a did NOT implement UXR.3b (broader card/chip/list visual system), UXR.4 (sticky form action bar, top-bar Spremi CTA, broader copy polish), UXR.5, archive route/surface, species icons, Plant detail species banner, Pregled empty-state illustration (mockup screen 02), or any storage/schema/validator/payload changes. The Pregled monitoring heading copy alignment from `Sezonsko praćenje` to `Praćenje` shipped as the UXR.3a follow-up at `fec7bfb Align Pregled monitoring heading` — Pregled-only one-line change to `appendB2PregledSection` (`index.html:12194`) with no logic, storage, validator, Plan Templates, manifest, or sw change. `UXR.3b — Cards/chips/list visual system` is complete at `9c46712 Refine Phase B Pregled cards`. UXR.3b changed only `index.html` and applied the accepted Claude Design Adriatic card/chip/list visual system to Pregled with strict session-boundary discipline: a new Pregled-scoped CSS block (`BEGIN UXR.3b — Pregled cards / chips / Praćenje / list` / `END UXR.3b`) delivers white seasonal cards with 18px radius, 1px `var(--v2-line)` border, soft layered shadow `0 1px 0 rgba(255,255,255,0.6) inset, 0 4px 14px rgba(31,74,95,0.08)`, 16px 18px padding, and a calm 1px `:active` micro-press; a consistent `.v2-seasonal-card-top` flex wrapper on Pregled `appendSeasonalCard` outputs holds the title (DM Sans 16/600 `var(--v2-ink)`) and the new top-right status chip; chip variants consume UXR.1a tokens — `.v2-seasonal-status--aktualno` uses `--v2-chip-current-bg/fg` sea-pale on brand-deep, `.v2-seasonal-status--pri-kraju` uses `--v2-chip-ending-bg/fg` warm peach on peach-ink, `.v2-seasonal-status--uskoro` uses `--v2-chip-upcoming-bg/fg` faded pale-sea on muted ink, with no red, no amber-alarm, no icons, no countdown, no urgency framing; meta typography 13px `var(--v2-ink-mid)`, note typography 13px `var(--v2-ink-mute)`; section rhythm drops the cold slate `border-top` from `.v2-seasonal-section` and adds 12px list gap; Pregled empty-state line `.v2-plants-empty` and the Mlade voćke intro sentence as a direct section-child meta receive matching calm typography. Praćenje on Pregled now renders inside a new `.v2-pregled-monitoring-card` neutral sea-pale info-card surface (`var(--v2-pale)` fill, 14px radius, 14px 16px padding, no shadow, no border) wrapping the existing B2 count sentence and the locked `Detalji su na kartonu voćke.` deflection note. Mlade voćke cards on Pregled are visually unified through the same `#v2Pregled`-scoped CSS on the existing markup; `appendYoungTreeContextCard` is intentionally **unchanged**, so Plant detail Mlada voćka section and Kalendar Mlade voćke section render byte-identical DOM and byte-identical visual to today. Runtime markup changes are limited to two narrowly-gated edits: `appendSeasonalCard` (Pregled-only branch on `context === 'current' | 'upcoming' | 'missed'`; Kalendar `context === 'calendar'` falls through to the unchanged path, so `.v2-seasonal-card-top` cannot appear on Kalendar, Seasonal action detail, or Plant detail) and `appendB2PregledSection` (wraps the existing meta sentence + deflection note in the new info-card div; B2 logic, B2 data, and copy unchanged). A new local helper `pregledStatusChipVariant` next to `groupStatusLabel` maps the locked `Aktualno` / `Pri kraju` / `Uskoro` status strings to chip variant classes. UXR.3b preserved every existing V2 ID, route table, default route, route aliases, `#v2` alias, `#legacy`, all `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, `sw.js`, B2/S8 monitoring logic, Activity/Observation/Correction logic, archive lifecycle logic, `appendYoungTreeContextCard`, `appendPlantSeasonalActionCard`, `appendB2CalendarCard`, `appendSeasonalSection`, `appendSeasonalHeader`, `renderKalendar`, `renderSeasonalActionDetail`, `renderDetail`, and the UXR.3a Pregled hero. Plant detail / Kalendar / Seasonal action detail / Dnevnik / Postavke / `#legacy` DOM are byte-identical to today. UXR.3b did NOT implement UXR.3c (Biljke Add Plant pattern / Dodaj evidenciju demotion), UXR.3d (per-species icons / Plant detail species banner), UXR.4 (sticky form action bar / top-bar Spremi CTA / Postavke label rename), UXR.5a (Kalendar timeline), UXR.5b (Plant detail rhythm), UXR.5c (Dnevnik timeline), UXR.6 (a11y / `prefers-reduced-motion` pass), archive route/surface, species icons, Plant detail Mlada voćka italic-Fraunces commentary card, Pregled empty-state illustration, or any storage/schema/validator/import-export/Plan Templates/routes/manifest/sw changes. Static no-leakage proof: `grep` confirms `.v2-seasonal-card-top` appears only inside the gated `appendSeasonalCard` branch and Pregled-scoped CSS rules; `.v2-pregled-monitoring-card` appears only inside `appendB2PregledSection` and Pregled-scoped CSS rules; `appendYoungTreeContextCard` body is byte-identical to its pre-UXR.3b form. Owner browser verification (validator returns `[]`, Pregled visual states, Kalendar / Plant detail / Postavke / `#legacy` regression) is recommended via DevTools per the standard UXR pattern. `UXR.3c — Biljke Add Plant pattern / primary actions` is complete at `166f26f Refine Phase B Biljke actions`. UXR.3c changed only `index.html` and refined the Biljke primary surface under a new Biljke-scoped CSS block (`BEGIN UXR.3c — Biljke action row / archive toggle / list surface` / `END UXR.3c`) scoped to `.v2-active #v2PlantsList`: an inline `+ Dodaj voćku` action row (constant 64 px frame, white surface, hairline border, soft shadow, brand-green inline SVG plus glyph, DM Sans 16/600 label, optional 13 ink-mute helper `Prva voćka, krećemo.` appended only when `plants.length === 0`) replaced the prior `v2-plants-topbar` div + `v2-activity-actions` four-button strip (Pregled · Kalendar · `Dodaj evidenciju` · Dnevnik); `Dodaj evidenciju` is demoted from the Biljke body entirely while `#v2/activity/add` and its contextual entries from Seasonal action detail (`renderSeasonalActionDetail` capture button) and Plant detail (`Dodaj opažanje`, `Dodaj ulov iz klopke`, `Dodaj fazu razvoja`, `Zabilježi vizualni pregled`) remain intact; duplicate in-body Pregled / Kalendar / Dnevnik buttons were removed because UXR.2b bottom-nav owns primary nav; the always-visible `Arhivirane voćke` section became a quiet ephemeral expand-on-tap toggle (`Prikaži arhivirane (N)` ↔ `Sakrij arhivirane (N)`, `aria-expanded` flips false/true, `aria-controls="v2PlantsArchiveList"`, collapsed every render, no localStorage, no route/hash, no history entry, no persisted expanded state); the duplicate in-body `<h2>Biljke</h2>` was removed because the top app bar already shows `Biljke` (UXR.2b mapped `TOP_BAR_TITLES.list = 'Biljke'`; UXR.3c does NOT touch `TOP_BAR_TITLES`) and a visually-hidden `<h1 class="v2-sr-only">Biljke</h1>` was added for a11y heading semantics; the muted `Još nema unesenih voćki.` paragraph was dropped (helper replaces it) while `Nema aktivnih voćki.` is preserved for the active-empty + archived-non-empty edge case; minimal `#v2PlantsList`-scoped surface polish on `.v2-plants-row` / `.v2-plants-list` consumes UXR.1a tokens without any species class, species icon, accent stripe, or per-plant `Sada aktualno` line (all four reserved for UXR.3d). UXR.3c preserved every existing V2 ID, route table, default route, route aliases, `#v2` / `#biljke` aliases, `#legacy`, all `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, `sw.js`, B2/S8 monitoring logic, Activity/Observation/Correction logic, A1 archive lifecycle, `TOP_BAR_TITLES`, `ACTIVE_TAB_BY_ROUTE`, `updateShellChrome` body, every render function outside `renderList`, every `append*` helper, and every plant/archive helper (`activePlants`, `archivedPlants`, `plantTitleWithArchiveMarker`, `plantDetailRoute`). Plant detail / Kalendar / Pregled / Seasonal action detail / Dnevnik / Postavke / `#legacy` runtime code paths are untouched and no UXR.3c CSS selector targets those screen roots. UXR.3c did NOT implement UXR.3d (per-species icons / accent stripes / Plant detail species banner / per-plant `Sada aktualno` line), UXR.4 (forms / sticky action bar / Postavke label rename), UXR.5a (Kalendar timeline), UXR.5b (Plant detail rhythm / `⋯` overflow Arhiviraj), UXR.5c (Dnevnik timeline / empty-state SVG), UXR.6 (a11y pass), an archive route, a Postavke Voćnjak entry, a Pregled empty action-row mirror, or any storage/schema/validator/import-export/Plan Templates/routes/manifest/sw changes. The `UXR.4 — Forms + capture flows polish + Postavke label rename` is complete at `9223f81 Refine Phase B form flows` (`index.html`-only: sticky bottom action bar scoped to `html.v2-active.v2-route-form .v2-plants-actions` on the three true form routes `add` / `activity_add` / `correction` only; 15 user-facing `v2BackupStatus` `Slice 3 —` strings rewritten to clean Croatian with behavior/validation/payload unchanged; Postavke button labels + `ne znam` nesting already complete from earlier sessions; Plant detail inline capture forms untouched and deferred to UXR.5b; no top-bar `Spremi` CTA), UXR.3d species identity is complete at `473e1c7`, UXR.5 split-confirmed 5a/5b/5c is complete, UXR.6 accessibility/outdoor usability is complete at `a0cfc93`, and UXR.7 final mobile stabilization is complete through `aa63351`, `3d42e27`, `97585bc`, `f4b97e9`, and `353c6e1`.

This document converts the completed V2 specification stack (S6–S10) into an implementation execution roadmap. It is bound by the locked core documents and does not authorize runtime implementation by itself.

Post-S8 Observation correction completion record:

1. Documentation lock for Observation correction using the existing additive Correction model: `1ef2009`.
2. Runtime validator/model implementation for supported Observation kinds only (`note`, `trap`, `stage_obs`, and `scouting`): `60cc32c`.
3. UI/display implementation using deterministic effective Observation composition in Dnevnik and Plant detail: `6d5b19d`.
4. Tracker sync: current documentation-only package.

Observation correction should no longer be treated as the next open package. A2 default V2 / remove `#v2` gate is complete. A1 archive/lifecycle baseline is complete. Plan Templates runtime fidelity / content parity runtime patch is complete at `c9645c4 Implement Plan Templates runtime parity fixes`. Current path to V2 Done is defined in §0: UX/design polish through UXR.7 / final mobile stabilization is complete, and Young-Tree Formative Completion is complete at `7bf61c0 Complete young-tree formative guidance`; V2 Done audit passed with non-blocking follow-ups; V2 is marked Done. Remaining Post-S8 carry-forward items are future owner-decision work unless the owner explicitly changes the path.

Locked first-scope boundaries: Strategy A grouped Observation correction only, no grouped date/plant correction, no group splitting, no effective regrouping, no `correction_group_id`, no new Observation kinds, no program-attached Observations, no broad scouting/symptom registry, no diagnosis, no treatment/product/dose advice, no pressure/urgency/compliance logic, no Plan Templates changes, and no S8 reopening.

Calendar baseline / execution-condition guidance clarification:

- Plan Templates date windows are Zagreb / continental Croatia baseline planning windows. They tell the grower when to pay attention; they are not hard commands and not "do this on this date" instructions.
- Warmer regions such as Dalmatia may be roughly two weeks or more earlier in real life, depending on season, microclimate, exposure, and actual plant state. The app does not calculate or store that shift.
- Runtime must preserve approved Plan Templates action-window notes as read-only seasonal action detail guidance when they explain plant state / phenophase, dormancy, bud swelling, bloom / open flowers, after petal fall, young fruit, weather conditions, bee safety, label / karenca constraints, skip / delay / do-not-duplicate logic, or local expert / agricultural pharmacy / agronomist guidance.
- Do not defer source-backed execution-condition text just because broader phenology-aware stage confirmation, BBCH, plan automation, regional adaptation, or structured symptom/scouting models remain deferred.
- Do not replace source-backed condition text with generic "ask expert" wording only, and do not invent condition logic that is not in Plan Templates.
- This clarification does not authorize BBCH, a phenology engine, `climateProfile` / `regionProfile` / `offsetDays`, automatic date shifting, plan recalculation, stage-based unlocking/blocking, urgency / overdue / compliance behavior, treatment recommendations, product/dose advice beyond source-backed Plan Templates safety wording, AI diagnosis, AI treatment behavior, schema changes, Plan Templates edits, or runtime implementation.

Examples:

- A Zagreb baseline winter copper / oil window remains the planning reminder. In Dalmatia or another warm exposed location, the relevant dormancy / bud-swell condition may arrive roughly two weeks or more earlier. Seasonal action detail should keep the date window visible and also show the Plan Templates condition text: late dormancy / before vegetation starts, suitable dry calm weather, no rain or strong frost where present, product-label constraints, and spacing / do-not-duplicate rules.
- Winter pruning may have a calendar baseline, but execution guidance such as dry weather, after strongest frosts, and before strong vegetation start where present must remain visible. The app informs; it does not predict frost, move pruning dates, create BBCH logic, or show "you are late" behavior.

---

## 0. Current roadmap from Post-S8 to V2 Done

This section is the current controlling roadmap after Runtime Slice 8 closure and Post-S8 Observation correction. It supersedes older "next work from Post-S8 carry-forward" wording and older Slice 9 wording where those imply that Observation correction is still open or that the next implementation should be chosen ad hoc from the carry-forward queue.

Current factual state:

- Runtime Slices 0-8 are complete for their approved scopes.
- Post-S8 Observation correction is complete for the approved scope (`1ef2009`, `60cc32c`, `6d5b19d`).
- A2 default V2 / remove `#v2` gate is complete. Normal/original URL and empty hash load V2; `#v2` and `#v2/...` remain backward-compatible aliases; `#legacy` is the temporary legacy fallback; the V2 old-app button routes to `#legacy`; no legacy data was deleted; protected legacy keys were not migrated or deleted; no schema/model, Plan Templates, service-worker, or manifest change was made.
- A1 archive/lifecycle runtime is complete. Archive uses only Plant `archived_at?`, `archive_reason?`, and `archive_note?`; missing `archived_at` means active and present `archived_at` means archived. Active Biljke/Pregled/Kalendar/seasonal scope excludes archived plants; archived Plant detail, global Dnevnik, Plant detail history, and historical Activity/Observation correction remain available; export/import validation preserves valid archive fields and fails closed on malformed archive fields.
- Plan Templates execution-condition guidance is clarified and locked as read-only guidance: Zagreb / continental Croatia planning windows remain visible; warmer regions such as Dalmatia may be roughly two weeks or more earlier in real life; no BBCH, phenology engine, regional offsets, automatic date shifting, urgency, overdue, compliance, treatment recommendation, or product/dose logic is authorized.
- Plan Templates runtime fidelity / content parity runtime patch is complete at `c9645c4 Implement Plan Templates runtime parity fixes`. Three source-backed display/copy parity fixes landed in `index.html` only: a universal calendar-window baseline disclaimer rendered only on Seasonal action detail (user-facing copy intentionally does not name Zagreb or continental Croatia); `purposeCue` extended for `harvest` / `Pregled za zimu` / `Gašenje navodnjavanja`; and two source-backed Plan Templates lines restored in `SPECIES_ACTION_WINDOW_NOTES['peach.copper.leaf_curl_buds_closed']`. No schema/model, no validators, no import/export, no Plan Templates edit, no B2/source-map/guidance change, no trap/scouting capture change, no `manifest.json`, no `sw.js`, no S8 reopening. Owner browser verification passed (`window.v2ValidateForBackup(parsed)` returned `[]`; export/import validation returned `[]`; protected legacy keys byte-equal before/after; no Pregled/Kalendar/Plant-card disclaimer leakage; local `file://` `manifest.json` CORS warnings ignored as expected).
- Phase A UX/copy polish runtime is complete at `cc22d24 Polish V2 UX copy and Pregled click affordance`. The commit changed `index.html` only and shipped: Pregled seasonal cards now route to Seasonal action detail (parity with Kalendar and Plant detail); the universal calendar-window disclaimer constant rewritten to `Datumi su okvirni podsjetnik. Stvarno stanje voćke i lokalni uvjeti imaju prednost pred datumom: u toplijim krajevima radnje mogu krenuti ranije, a u hladnijim krajevima kasnije.` (placement on Seasonal action detail unchanged; the previous `Kalendarski prozor` / unexplained `fenofaza` wording dropped only from the generic disclaimer copy); harvest `purposeCue` rewritten to `Namjena: berba kad plodovi dosegnu zrelost.`; `Pregled za zimu` `purposeCue` rewritten to `Namjena: provjera debla, vezica, zaštite od glodavaca i mumificiranih plodova.`; V2 Dnevnik empty-state copy at `renderDetail` and `renderDiary` now uses `Još nema evidencije.` / `Još nema evidencije za ovu voćku.`; `appendYoungTreeCalendarSection` heading swapped to `<h3>Mlade voćke</h3>` for parity with Pregled; Pregled `Za provjeru` and `Uskoro` empty-section copy tightened (locked §1.10 quiet-state line preserved); Plant detail young-tree orientation labelling verified (existing `<h3>Mlada voćka</h3>` is contextually correct for one plant — no markup change needed); and a V2 boot canonical-catalog refresh branch was added that, when `meta.active_catalog_version === 'catalog_v1'` and stored `parsed.catalogs.catalog_v1` is missing or differs from in-memory `CATALOG_V1`, replaces only `parsed.catalogs.catalog_v1 = CATALOG_V1` while preserving plants, activities, observations, corrections, archive fields, plan_instances, plan_overlays, review_state and all other user data, then writes the same `vocnjak_v2` key and logs `vocnjak: catalog refreshed from canonical catalog_v1` once. The refresh branch reuses existing helpers (`catalogDeepEquals`, `CATALOG_V1`, `setCatalogStatus`) and does not weaken `isValidCatalogV1`, `validateForBackup`, or any other validator. No schema/model, no validators, no import/export, no Plan Templates edit, no B2/source-map/guidance change, no trap/scouting capture change, no `manifest.json`, no `sw.js`, no protected legacy-key mutation, no S8 reopening, no A1/A2 change. Concrete plant-state / phenology guidance in source-backed `STANDARD_ACTION_WINDOW_NOTES` and `SPECIES_ACTION_WINDOW_NOTES` prose (including surviving `fenofaza`, `dok su pupovi zatvoreni`, `nakon opadanja latica`, `ne tijekom cvatnje`, and similar wording rendered as `Napomene` on Seasonal action detail) was not removed, not paraphrased, and not rewritten — only the unexplained jargon `fenofaza` in the generic calendar disclaimer was dropped. Owner mobile browser verification passed: the red `Pohrana ne prolazi validaciju: catalog_v1.action_window_definitions[106].note value differs from canonical catalog` no longer appears on stale mobile stores; console shows `vocnjak: V2 store loaded; format v1` and `vocnjak: catalog already loaded; active_catalog_version=catalog_v1` on subsequent loads after the one-time refresh; `window.v2ValidateForBackup(JSON.parse(localStorage.getItem('vocnjak_v2')))` returns `[]`; local `file://` `manifest.json` CORS warning is expected and is not treated as a V2 runtime bug. Phase A and Phase B / UXR through UXR.7 are complete for the V2 Done baseline.
- Phase B / UXR is complete through UXR.7 for the V2 Done baseline. UXR.0 audit is complete at `5ef720d`; UXR.1a V2-scoped Phase B design tokens are complete at `8163d1c`; UXR.1b Fraunces + DM Sans typography loading is complete at `8702836`; UXR.2a default route flip is complete at `559012cc67357333d60cfcc37ba17afdf3db6ae6 Set Pregled as default V2 route`; UXR.2b app shell (top app bar + four-tab bottom nav + active-tab state + `#v2Content` wrapper) is complete at `927555d Add Phase B V2 app shell`; UXR.2c Postavke sheet + scaffold relocation + inline import confirm is complete at `a78840a Add Phase B settings sheet`; and UXR.2d Detail/form shell (top-bar text-back + hide bottom nav and Postavke on form routes) is complete at `17e5439 Refine Phase B detail and form shell`. UXR.2d changed only `index.html`, added the Claude-Design-aligned text-back affordance pattern (`< Biljke` / `< Kalendar` / `< Voćka` / `< Dnevnik` per deterministic route classification), used no center title on detail routes per the mockup, kept the existing in-app action heading as form-route top-bar title, hid bottom nav + Postavke `⋯` on `add` / `activity_add` / `correction` via `html.v2-route-form` (with reduced content padding-bottom), and preserved every existing in-screen back/cancel control for later screen-redesign sessions. UXR.2d preserved every existing V2 ID (one net-new `v2TopBarBackBtn` + `v2TopBarBackLabel`), route table, default route, route aliases, `#v2` alias, `#legacy`, old `#v2/...` deep links, import/export payload format, validators/storage, Plan Templates content, `manifest.json`, and `sw.js`; did NOT implement UXR.3, UXR.4, UXR.5, archive route, species icons, or any storage/schema/validator/payload changes. Browser verification passed (31 IDs unique, all 14 route shapes including malformed deep links, back-button tap navigation for every detail/form route, Postavke regression on primary routes, Postavke hidden on form routes, form submit handlers + Odustani button preserved, legacy escape preserved, backup validator `[]`, `#legacy` renders no V2 chrome). UXR.3a Pregled hero + section order is complete at `44eff72 Add Phase B Pregled hero`. UXR.3b Cards/chips/list visual system is complete at `9c46712 Refine Phase B Pregled cards` — Pregled-only refresh that consumed UXR.1a chip tokens for `Aktualno` / `Pri kraju` / `Uskoro`, added the `.v2-seasonal-card-top` wrapper inside `appendSeasonalCard` only for Pregled contexts (`current` / `upcoming` / `missed`; Kalendar `calendar` context untouched), and wrapped the existing B2 sentence + `Detalji su na kartonu voćke.` deflection note in a new `.v2-pregled-monitoring-card` neutral sea-pale surface in `appendB2PregledSection`; `appendYoungTreeContextCard`, `appendPlantSeasonalActionCard`, `appendB2CalendarCard`, and every Plant detail / Kalendar / Seasonal action detail render function are unchanged. UXR.3c Biljke Add Plant pattern / primary actions is complete at `166f26f Refine Phase B Biljke actions` — Biljke-only inline `+ Dodaj voćku` action row replacing the scaffold topbar + four-button strip, `Dodaj evidenciju` demoted from the Biljke body (route and contextual entries preserved), duplicate Pregled / Kalendar / Dnevnik body buttons removed, ephemeral expand-on-tap archive toggle, in-body `<h2>Biljke</h2>` replaced by a visually-hidden `<h1>`, and `#v2PlantsList`-scoped row/list surface polish; `TOP_BAR_TITLES`, every render function outside `renderList`, and every `append*` / archive helper unchanged. The `UXR.4 — Forms + capture flows polish + Postavke label rename` is complete at `9223f81 Refine Phase B form flows` (`index.html`-only: sticky bottom action bar scoped to `html.v2-active.v2-route-form .v2-plants-actions` on the three true form routes `add` / `activity_add` / `correction` only; 15 user-facing `v2BackupStatus` `Slice 3 —` strings rewritten to clean Croatian with behavior/validation/payload unchanged; Postavke button labels + `ne znam` nesting already complete from earlier sessions; Plant detail inline capture forms untouched and deferred to UXR.5b; no top-bar `Spremi` CTA), UXR.3d species identity is complete at `473e1c7`, UXR.5 split-confirmed 5a/5b/5c is complete, UXR.6 accessibility/outdoor usability is complete at `a0cfc93`, and UXR.7 final mobile stabilization is complete through `aa63351`, `3d42e27`, `97585bc`, `f4b97e9`, and `353c6e1`.
- The normal/original URL now loads V2. The current runtime proof is the Slice 0 activation gate in `index.html` that adds `v2-active` whenever `location.hash !== '#legacy'`; `#legacy` is the temporary legacy fallback.
- Broad scouting expansion, `Observation.symptom`, program-attached observations, broader phenology-aware stage confirmation, regional adaptation, AI, and paid/subscription ideas remain future owner-decision work. Springcrest peach harvest vs bird-net timing remains unresolved as a future Plan Templates parity / content timing item, not UX polish.

Completed order to V2 Done:

0. **Roadmap / documentation consolidation - complete.** Purpose: record this path so future agents stop inventing next steps. User-visible behavior: none. Hard boundaries: no runtime implementation, no `index.html`, no schema/model change, no Plan Templates edit.
1. **A2 - Default V2 / remove `#v2` gate - complete.** Purpose achieved: the normal/original URL and empty hash load V2, `#v2` and `#v2/...` remain backward-compatible aliases, `#legacy` is the temporary legacy fallback, and the V2 old-app button routes to `#legacy`. The implementation did not delete legacy data, migrate/delete protected legacy keys, change schema/model, edit Plan Templates, or change `manifest.json` / `sw.js`.
2. **A1 - Archive / lifecycle baseline - complete.** Purpose achieved: the owner can remove a plant from the active orchard without losing identity or history. Plant detail offers `Arhiviraj voćku`; after archive, the plant leaves active Biljke/Pregled/Kalendar/seasonal scope while Dnevnik/history remains visible with neutral archived labeling. Runtime uses the locked fields only: `archived_at?` optional `YYYY-MM-DD`; `archive_reason?` optional enum `died | removed | other`; `archive_note?` optional trimmed non-empty string, max 1000 characters; absence of `archived_at` means active, presence means archived; reason/note are valid only when `archived_at` is present. Historical Activity/Observation correction remains allowed for records tied to archived plants. The implementation did not add delete, destructive behavior, unarchive/restore, replacement-tree/graft/replant logic, legacy delete paths, deleted flag/status enum/replacement Plant reference/unarchive field, Plan Templates parity, UX polish, or S8 reopening.
3. **Plan Templates runtime fidelity / content parity session - complete.** Runtime patch is complete at `c9645c4 Implement Plan Templates runtime parity fixes`. Three source-backed display/copy parity fixes shipped in `index.html` only: (1) a universal calendar-window baseline disclaimer rendered only on Seasonal action detail (`#v2/seasonal-action/...`), below the date line and above `Napomene`, with user-facing copy that intentionally does not name Zagreb or continental Croatia so warmer/coastal Croatian regions and neighbouring continental regions are not excluded; (2) `purposeCue` extended with three `Namjena` cases for `harvest` action_type (`Namjena: berba u optimalno doba.`), `Pregled za zimu` label (`Namjena: priprema voćnjaka za zimu.`), and `Gašenje navodnjavanja` label (`Namjena: prilagodba zalijevanja sezoni.`); (3) two source-backed Plan Templates lines restored in `SPECIES_ACTION_WINDOW_NOTES['peach.copper.leaf_curl_buds_closed']` (the Taphrina prevention-only context and the "if curled leaves are already visible, the preventive timing is past; record the issue for next season instead of late spraying" note). The patch added no schema, no catalog field, no validator/import/export change, no Plan Templates edit, no B2/source-map/guidance change, no trap/scouting capture change, no `manifest.json` change, no `sw.js` change, and no S8 reopening. The disclaimer constant was relocated into the same IIFE as `renderSeasonalActionDetail` after a `ReferenceError` scope bug was caught and fixed in browser verification. Owner browser verification passed: Seasonal action detail opened without `ReferenceError`; disclaimer rendered correctly and did not mention Zagreb or continental Croatia; Pregled, Kalendar, and Plant detail seasonal cards did not show the disclaimer; `window.v2ValidateForBackup(parsed)` returned `[]`; export/import validation returned `[]`; the protected legacy key before/after snapshot was byte-equal; local `file://` `manifest.json` CORS warnings were ignored as expected and not treated as app errors. Owner-noted UX/copy follow-ups deferred to the upcoming UX/design polish session: the `Namjena: berba u optimalno doba.` and `Namjena: priprema voćnjaka za zimu.` cues may be too generic; and peach Springcrest harvest around 25.06 vs bird-net around 10.07 looks suspicious as a possible Plan Templates parity issue (classify later, do not touch now). Hard boundaries remain: no `V2_ORCHARD_PLAN_TEMPLATES.md` edit, no BBCH, no phenology engine, no automatic regional offset, no automatic date shifting, no plan recalculation, no urgency/overdue/compliance, no treatment recommendation, no product/dose advice beyond existing source-backed safety/label wording, no `Observation.symptom`, no `symptom_code`, no broad symptom registry, no broader scouting beyond Step 7c, no program-attached observations, no AI diagnosis, and no S8 reopening.
4. **UX/design polish session.** Phase A — Functional UX polish runtime is complete at `cc22d24 Polish V2 UX copy and Pregled click affordance`; owner mobile browser verification passed. Phase A made Pregled seasonal cards clickable to Seasonal action detail; rewrote the calendar-window disclaimer constant to jargon-free wording (placement unchanged); rewrote harvest and `Pregled za zimu` `purposeCue` strings to more concrete informational copy; rewrote V2 Dnevnik empty-state copy to `Još nema evidencije` wording at `renderDetail` and `renderDiary`; gave Kalendar young-tree heading `<h3>Mlade voćke</h3>` parity with Pregled; tightened Pregled `Za provjeru` and `Uskoro` empty-section copy while preserving the §1.10 quiet-state line; verified Plant detail young-tree orientation labelling (no markup change needed); and added a canonical-catalog refresh branch on V2 boot that replaces only `parsed.catalogs.catalog_v1 = CATALOG_V1` when stored catalog is missing or drifts from canonical, preserving all user data and emitting `vocnjak: catalog refreshed from canonical catalog_v1` once. The patch changed `index.html` only; no schema/model, no validators, no import/export, no Plan Templates edit, no B2/source-map/guidance change, no trap/scouting capture change, no `manifest.json`, no `sw.js`, no protected legacy-key mutation, no S8 reopening, no A1/A2 change. Concrete plant-state / phenology guidance in source-backed `STANDARD_ACTION_WINDOW_NOTES` / `SPECIES_ACTION_WINDOW_NOTES` prose was not removed, not paraphrased, and not rewritten; only the unexplained jargon `fenofaza` in the generic calendar disclaimer was dropped. Owner mobile verification confirmed `window.v2ValidateForBackup(parsed)` returns `[]`, the row-106 red validation message is gone, and the `file://` `manifest.json` CORS warning is expected and not a V2 runtime bug. Phase A and Phase B / UXR through UXR.7 are complete for the V2 Done baseline. **Phase B — V2 visual usability refresh is complete through UXR.7 for the V2 Done baseline.** UXR.0 audit is complete at `5ef720d`; UXR.1a V2-scoped design tokens are complete at `8163d1c` and changed only the inert `.v2-active` CSS token block in `index.html`; UXR.1b Fraunces + DM Sans typography loading is complete at `8702836` and changed only the Phase B font loading in `<head>` plus the V2 body font fallback token adjustment, if present; UXR.2a default route flip is complete at `559012cc67357333d60cfcc37ba17afdf3db6ae6 Set Pregled as default V2 route`; UXR.2b app shell (top app bar + four-tab bottom nav + active-tab state + `#v2Content` wrapper) is complete at `927555d Add Phase B V2 app shell`; UXR.2c Postavke sheet + scaffold relocation + inline import confirm is complete at `a78840a Add Phase B settings sheet`; and UXR.2d Detail/form shell (top-bar text-back + hide bottom nav and Postavke on form routes) is complete at `17e5439 Refine Phase B detail and form shell`. UXR.2d changed only `index.html`, added the Claude-Design-aligned text-back affordance (`< ParentLabel`), used no center title on detail routes per the mockup, kept existing in-app action headings as form-route top-bar titles, hid bottom nav + Postavke on `add` / `activity_add` / `correction` via `html.v2-route-form` with reduced content padding-bottom, preserved every existing V2 ID and back/cancel destination and route behavior and import/export payload and validators/storage and Plan Templates / `manifest.json` / `sw.js`, and did NOT implement UXR.3 / UXR.4 / UXR.5 / archive route / species icons / new routes / storage / schema / validator / payload changes. UXR.3a Pregled hero + section order is complete at `44eff72 Add Phase B Pregled hero`. UXR.3b Cards/chips/list visual system is complete at `9c46712 Refine Phase B Pregled cards` — Pregled-only Adriatic card surface refresh, calm Aktualno / Pri kraju / Uskoro chip variants top-right of titles, new `.v2-pregled-monitoring-card` sea-pale info-card surface for Praćenje, Mlade voćke unified through Pregled-scoped CSS on existing markup, `appendYoungTreeContextCard` / `appendPlantSeasonalActionCard` / `appendB2CalendarCard` / Plant detail / Kalendar / Seasonal action detail / Dnevnik DOM all unchanged. UXR.3c Biljke Add Plant pattern / primary actions is complete at `166f26f Refine Phase B Biljke actions` — Biljke-only inline `+ Dodaj voćku` action row replacing the scaffold topbar + four-button strip, `Dodaj evidenciju` demoted from the Biljke body (route and contextual entries preserved), duplicate Pregled / Kalendar / Dnevnik body buttons removed, ephemeral expand-on-tap archive toggle, in-body `<h2>Biljke</h2>` replaced by a visually-hidden `<h1>` (top app bar already shows `Biljke`), and `#v2PlantsList`-scoped row/list surface polish; `renderAdd`, `renderActivityAdd`, `renderDetail`, `renderPregled`, `renderKalendar`, `renderDiary`, `renderSeasonalActionDetail`, `TOP_BAR_TITLES`, and every `append*` / archive helper unchanged. Subsequent Phase B slices through UXR.7 are complete for the V2 Done baseline; no React, Tailwind, framework, build pipeline, component system, `manifest.json` / `sw.js`, schema/model/storage/validator/import-export, Plan Templates content, BBCH/phenology engine/regional offsets/automatic date shifting/urgency/overdue/compliance/diagnosis/treatment/AI/paid-subscription work is authorized by this status line. Springcrest peach harvest vs bird-net timing remains unresolved as a future Plan Templates parity / content timing item, not UX polish.
5. **V2 Done audit - complete.** PASS WITH NON-BLOCKING FOLLOW-UPS; V2 is marked Done for the current owner-approved baseline. Why last: it must verify the final default route, archive baseline, Plan Templates runtime fidelity, Phase A polish, and any approved Phase B polish state together. Example user-visible behavior: owner can open normal URL, manage plants, log/correct Activities and supported Observations, export/import backups, read Plan Templates guidance, and return to legacy if needed, with no blocked PWA/cache/deployment issue. Audit result: accepted PASS WITH NON-BLOCKING FOLLOW-UPS. Hard boundaries remain: audit added no new features; follow-ups require separate owner-approved sessions.

The Plan Templates runtime fidelity / content parity session must verify at minimum:

- action windows are represented with correct labels, periods, purpose, and notes;
- execution-condition text is preserved as read-only guidance where present, including plant state / phenophase, dormancy, bud swelling, bloom / open flowers, after petal fall, young fruit, dry weather, rain, frost, wind, label constraints, bee safety, karenca / safety wording, and skip / delay / do-not-duplicate logic;
- monitoring / observation guidance is represented where present, including `Što gledati`, `Što sada`, and the safe next step to photograph / bring a sample / ask a local agricultural pharmacy, agronomist, or expert, while the app does not diagnose and does not decide treatment;
- species/variety-specific Plan Templates content is not flattened into generic species-only text where the source is more specific;
- fallback / variety harvest timing remains source-backed where Plan Templates defines it;
- every missing or misplaced Plan Templates guidance item is either fixed in the app within the approved runtime/content parity scope or explicitly classified as future owner-approved model work.

Do not call this session broader phenology, and do not defer it because BBCH, automation, or broader models remain deferred.

Items explicitly not blocking V2 Done unless the owner reopens them:

- broad/general scouting registry or capture beyond Step 7c;
- `Observation.symptom`, `symptom_code`, and symptom registry/source map;
- program-attached observations;
- broader phenology-aware stage confirmation, BBCH, phenology engine, plan recalculation, regional offsets, or automatic date shifting;
- orphan-code fallback display and outside-period disclosure polish;
- `Bez zapisa` / `Zadnji zapis` monitoring record-status semantics beyond the approved neutral behavior;
- optional trap numeric extensions for rows without source-backed thresholds;
- Plan upgrade review, Za pregledati cues, Settings/Postavke split, sync/cloud/iCal/AES-GCM redesign, native storage engine selection, legacy retirement, fig/citrus expansion, regional adaptation, AI/photo analysis, paid/subscription/paywall work, push notifications.

After V2 Done:

- Revisit `V2_FUTURE_ROADMAP.md` under its promotion rule.
- Revisit parked V1/future store-readiness concepts, including `archive/future/STORE_READY_ROADMAP_V1.md` Sessions 19, 20, and later items, as concept references only. They are not active V2 implementation authority.
- Keep archived V1 roadmaps historical unless a future owner-approved session promotes a specific idea into the active V2 docs.

Minimum set of steps to V2 Done:

```text
docs consolidation complete -> A2 default V2 complete -> A1 no-delete archive baseline complete -> Plan Templates runtime fidelity / content parity runtime patch complete at c9645c4 -> Phase A functional UX/copy polish complete at cc22d24 (owner mobile verification passed) -> Phase B UXR complete: UXR.0 audit complete at 5ef720d -> UXR.1a tokens complete at 8163d1c -> UXR.1b typography loading complete at 8702836 -> UXR.2a default route flip complete at 559012c -> UXR.2b app shell (top app bar + four-tab bottom nav + active-tab state + #v2Content wrapper) complete at 927555d -> UXR.2c Postavke sheet + scaffold relocation + inline import confirm complete at a78840a -> UXR.2d Detail/form shell (top-bar text-back + hide bottom nav and Postavke on form routes) complete at 17e5439 -> UXR.3a Pregled hero + section order complete at 44eff72 -> UXR.3b Cards/chips/list visual system complete at 9c46712 -> UXR.3c Biljke Add Plant pattern / primary actions complete at 166f26f -> UXR.3d complete at `473e1c7` -> UXR.4 forms + capture flows polish + Postavke label rename complete at `9223f81` (sticky bottom action bar on form routes only + backup `Slice 3 —` copy polish) -> UXR.5 split-confirmed 5a -> 5b -> 5c; UXR.5a Kalendar vertical season timeline complete (Kalendar-only anchored Fraunces month sections + current-month brand accent + per-month `N radnji` count; B2/Praćenje and Mlade voćke preserved; `#v2Kalendar`/`.v2-kal-*` scoped; shared `appendSeasonalCard`/`appendSeasonalHeader`/`appendSeasonalNav` untouched; no storage/validator/route/Plan Templates/manifest/sw change) -> UXR.5b Plant detail rhythm complete (Plant-detail-only `#v2PlantsDetail`/`.v2-pd-*` §4.6 rhythm: hero meta line, Karton 2-column def-list, Mlada voćka italic inset card after Karton, Fraunces section headings, `Dodaj opažanje` demoted to secondary, in-screen `Natrag` removed with shell back unchanged, archive moved to a quiet bottom `Životni vijek voćke` lifecycle section reusing the existing flow and fully reachable; note/trap/stage/scouting capture preserved; true plant-specific top-bar `⋯` overflow deferred to a shell/route-scope session; no base/shell/route/storage/validator/Plan Templates/manifest/sw change) -> UXR.5c Dnevnik timeline complete (standalone `#v2Diary` month-grouped timeline; sticky month headers verified below the shell top bar; hairline rail + node dots; Dnevnik-only scoped row rhythm; `Odrađeno`/`Preskočeno` chips via option-gated `statusChips`; `ispravljeno` inline; `appendDiaryItems` byte-identical; Plant detail diary preview did not opt in or change; Dnevnik empty state unchanged with no SVG per owner decision; no storage/schema/validator/catalog/Plan Templates/B2-S8/route/shell/manifest/sw change) -> UXR.6 — Accessibility + outdoor usability pass complete at a0cfc93 (V2-scoped `--v2-ink-mute` darkened to `#647079` preserving the strong/mid/muted three-tier hierarchy; targeted `.v2-pregled-monitoring-card > .v2-seasonal-note` fix to `--v2-ink-mid` 3.96 -> 6.84; keyboard `:focus-visible`; 44px top-bar tap targets; expanded `prefers-reduced-motion`; `aria-current="page"` on active bottom nav + segmented control; `role="alert"` on dynamic form-validation errors; validator `[]`, `#legacy` works, no console errors, `index.html`-only, no manifest/sw/Plan Templates/model/storage/validator/B2 change, `Claude-design/` not committed; deferred a11y follow-up: hero month-chip ~3.5–3.7; corrected-marker contrast later resolved at `aa63351`) -> post-UXR runtime stabilization complete at `0f90de8`, `06102aa`, and `a2b7a09` (closed Postavke overlay hit testing, same-document legacy/V2 shell bridge, Seasonal action detail mobile order, route-keyed scroll reset; `index.html`-only; validator `[]`; no storage/model/Plan Templates/manifest/sw change) -> UXR.7 / final mobile stabilization complete through `aa63351`, `3d42e27`, `97585bc`, `f4b97e9`, and `353c6e1` (final mobile overflow/date-field fixes and pre-planting missed/no-evidence filter fix; `index.html`-only; no storage/schema/validator/import-export/B2/Activity/Observation semantic change; owner iPhone/PWA verification accepted) -> Young-Tree Formative Completion complete at 7bf61c0 -> V2 Done audit PASS WITH NON-BLOCKING FOLLOW-UPS -> V2 Done
```

## 1. Purpose

S11 converts the completed documentation from S6–S10 into an implementation execution roadmap.

S11 is the bridge between architecture and runtime implementation.

S11 itself does not implement runtime code. S11 produces the deterministic, gated plan that a later runtime session will follow.

The S11 output answers:

- in what order V2 should be built
- what must be safe before what
- where commits land and on which branch
- which runtime systems must remain untouched during early implementation
- how each implementation slice is verified before the next slice begins
- when trackers get updated

---

## 2. Authority and inputs

S11 is bound by:

- `PRODUCT_VISION.md`
- `V2_PRINCIPLES.md`
- `V2_DOMAIN_MODEL.md`
- `V2_UX_MODEL.md`
- `V2_ARCHITECTURE.md`
- `CURRENT_STATE.md`
- `CLAUDE.md`

S11 must not override domain, UX, or architecture decisions. S11 only orders, sequences, and gates them.

If a conflict appears between S11 and any of the bound documents, S11 must stop and ask the owner. S11 does not unilaterally reinterpret S2 (domain), S6–S7 (UX), S8 (data), S9 (derived state), or S10 (transition).

---

## 3. S11 boundary

S11 owns:

- implementation order
- patch grouping for documentation patches inside S11
- runtime safety boundaries
- commit boundaries and git safety rules
- verification approach
- usable / default milestone definitions (defined later in S11.D)
- stop conditions (defined later in S11.D)
- parallel implementation policy (defined later in S11.C2 and S11.D)

S11 does not own:

- runtime code
- schema or domain changes
- UX route or copy changes
- catalog or template edits
- storage engine final selection
- cloud or sync implementation
- native implementation
- weather refactor
- Supabase, iCal, or AES-GCM refactor

If S11 needs a decision in any of those areas, S11 must escalate, not decide.

---

## 4. Approved S11 patch plan

S11 itself is split into five documentation patches. They are approved as a set:

- **S11.A** — Roadmap authority, sequencing principles, commit/runtime safety boundaries
- **S11.B** — Storage substrate, V2 key, clean-start contract, activation strategy
- **S11.C1** — Foundation slices: V2 shell, store boot, catalog seed, Plants, early export/import safety
- **S11.C2** — Usable/default slices: Activity, Dnevnik, snapshot, Pregled, Kalendar, details, monitoring/stage/correction/archive split
- **S11.D** — Verification gates, usable/default milestones, stop conditions, tracker sync timing

Rules:

- The five patches are approved.
- Do not micro-patch S11 beyond these unless a stop condition appears.
- Do not combine these patches unless the owner explicitly approves.
- Tracker sync happens only after S11.D (see §10).

---

## 5. Implementation approval rule

No runtime implementation starts until S11.A–S11.D are complete and explicitly approved.

After S11 completion, the first runtime implementation begins with the foundation slice defined in S11.C1. No other runtime work may run ahead of that slice.

---

## 6. Sequencing principles

These principles bind every S11 implementation slice:

- foundation before surfaces
- read safety before write expansion
- export/import safety before heavy real-data capture
- multi-plant Activity from the first Activity implementation
- history immutability from the first write implementation
- legacy keys untouched
- weather advisory only
- storage substrate boundary before UI reads/writes
- V2 must remain testable without breaking the legacy app
- parallel implementation only after the foundation slice is stable and explicitly approved

A slice that violates any of these principles is not allowed to enter implementation.

---

## 7. Commit and git safety rules

Every documentation patch inside S11 and every runtime implementation commit after S11 must obey these rules:

- branch must be `main` for commit and push
- working tree clean before edits
- `git pull --ff-only` before editing if the branch was just switched to `main`
- `git diff --check` before commit
- targeted `git add` only — never bulk `add .` or `add -A`
- never stage `.DS_Store`
- never stage `.claude` or `.claude/worktrees`
- never stage unexpected files
- one logical runtime slice per commit, or a small commit group only when slices share a single approval boundary
- run `git status` before commit
- if unexpected files appear, stop and report — do not silently revert or include them

These rules apply equally to S11.A–S11.D documentation patches and to runtime patches that begin after S11 is approved.

---

## 8. Runtime safety boundaries

Early implementation must not touch the following systems unless a later S11 section explicitly schedules them:

- `manifest.json`
- `sw.js`
- weather provider, weather cache, weather widget refactor
- Supabase backup
- iCal / GitHub sync
- AES-GCM secure storage
- Cloudflare Pages deployment configuration
- V1 / V3 / V4 localStorage keys
- legacy import / migration code
- catalog / template files

The following sensitive legacy localStorage keys (verified present in `index.html` by read-only reconnaissance during S11.A) must not be read, written, deleted, renamed, or otherwise modified during early implementation:

- `vocnjak_v3`
- `vocnjak_v4`
- `vocnjak_v3_premigration`
- `vocnjak_v4_preimport_backup`
- `vocnjak_user_key`
- `vocnjak_gh_token`
- `vocnjak_gh_repo`
- `vocnjak_sb_url`
- `vocnjak_sb_key`

Additional `vocnjak_*` keys discovered in `index.html` during the same reconnaissance and added to the protected set (real names from the runtime, not invented):

- `vocnjak_data`
- `vocnjak_kalendar_puni_v2`
- `vocnjak_salt_2026`
- `vocnjak_v4_last_supabase_backup`

If exact key names differ in a future runtime state, the names found in the project files are authoritative. Do not invent new names. Do not migrate, rename, or repurpose any key in the protected set as part of early implementation.

The service worker cache name found in `sw.js` (`vocnjak-v1`) is part of the runtime safety surface. It must not be renamed or invalidated as part of early implementation.

---

## 9. Systems deferred from early implementation

The following systems are explicitly deferred from early implementation and may not be opened without an explicit later S11 (or post-S11) decision:

- cloud / sync / account identity
- native storage engine selection
- Supabase / iCal / Postavke redesign
- Settings / Postavke split
- legacy data cleanup
- fig and citrus catalog expansion
- regional / climate offsets
- AI / photo recognition
- push notifications

Deferral is not rejection. These items remain candidates for future sessions, governed by `V2_FUTURE_ROADMAP.md` and owner decisions, not by S11 implementation slices.

---

## 10. Tracker sync timing

Trackers must not be updated during S11.A–S11.C.

Specifically:

- `CLAUDE.md` must not be edited during S11.A, S11.B, S11.C1, or S11.C2.
- `CURRENT_STATE.md` must not be edited during S11.A, S11.B, S11.C1, or S11.C2.

Tracker sync happens once after S11.D is complete and approved. That single tracker sync records:

- S11 completion
- the next runtime implementation gate
- any updated stop conditions

Until that sync, the only document that may change inside S11 is `V2_EXECUTION_ROADMAP.md` itself, one patch at a time.

---

## 11. Handoff to S11.B

S11.B owns the next set of decisions. S11.B will define:

- the first runtime storage posture
- the new V2 storage key (name, scope, and write boundary)
- the store read / write boundary
- the clean-start contract
- the V2 activation strategy
- the native / public storage review stop condition

S11.A does not define any of these. S11.B is authorized to begin only after S11.A is committed to `main` and the owner explicitly opens S11.B.

---

## 12. S11.B purpose

S11.B defines the storage and activation posture for the first runtime implementation.

S11.B does not implement storage. S11.B does not select the final native storage engine. S11.B does not define runtime code.

S11.B exists so that S11.C1 can begin foundation slices against a fixed storage and activation contract instead of inventing one slice by slice.

---

## 13. First runtime storage posture

Decision:

The first V2 runtime uses a single JSON blob under a new V2 storage key, behind a thin `store.read()` / `store.write()` boundary.

Why this posture:

- minimal change from the current single-file PWA
- matches the S8 root-store boundary
- easy V2 export / import
- keeps future IndexedDB, native, or SQLite migration possible
- avoids per-collection localStorage sprawl

Constraints:

- This is the owner / dev / early V2 posture. It is not the final native or public storage decision.
- Derived caches have zero authority. Source of truth lives in the root V2 store, per S8.
- No direct localStorage access outside the store boundary in V2 runtime slices.

Do not choose IndexedDB, SQLite, Room, or Core Data now. Native storage selection is deferred to §18 review.

---

## 14. V2 store key and namespace boundary

The new V2 storage key is:

`vocnjak_v2`

Rules:

- V2 runtime writes only to `vocnjak_v2` for V2 app state.
- V2 runtime must not read legacy keys as V2 data.
- V2 runtime must not write legacy keys.
- V2 runtime must not delete legacy keys.
- Legacy raw export remains archive / reference only per S10. It is not V2 import material.

Protected legacy keys (V2 runtime must not read, write, delete, or rename any of these — same set as §8):

- `vocnjak_v3`
- `vocnjak_v4`
- `vocnjak_v3_premigration`
- `vocnjak_v4_preimport_backup`
- `vocnjak_user_key`
- `vocnjak_gh_token`
- `vocnjak_gh_repo`
- `vocnjak_sb_url`
- `vocnjak_sb_key`
- `vocnjak_data`
- `vocnjak_kalendar_puni_v2`
- `vocnjak_salt_2026`
- `vocnjak_v4_last_supabase_backup`

Do not introduce any other new storage keys in S11.B. Future keys (for example a separate cache or feature flag) are out of scope for S11.B and require explicit later approval.

---

## 15. Store read/write boundary

S11.B requires a runtime store boundary, but not its code.

Required semantics:

- All V2 storage access goes through one small store boundary.
- The store boundary is the only layer that reads or writes `vocnjak_v2`.
- UI surfaces consume store data through the runtime state layer, not by direct storage calls.
- Validation happens before write.
- Import validation happens before replace.
- Pre-import backup belongs to the export / import slice (S11.C1 onward), not to the boundary itself.

Conceptual roles (no function names, no signatures):

- store read boundary
- store write boundary
- store validation boundary

UI, snapshot, derived caches, and any future surface read through the runtime state layer fed by these boundaries. They never call `localStorage` directly.

---

## 16. Clean-start contract

This contract restates and binds the S10 transition decision for runtime use.

Rules:

- If no valid V2 store exists, initialize an empty V2 store under `vocnjak_v2`.
- Do not migrate plants from legacy keys.
- Do not migrate copper spray history.
- Do not migrate activities, observations, or plans.
- The owner manually adds plants in V2.
- The owner manually logs copper spray (or any prior action) as a normal V2 Activity if desired.
- A clean start must not be reported as "migration complete". A clean start is a clean start.
- The legacy app and its data remain available until explicit retirement (out of scope for S11).

---

## 17. V2 activation strategy

Rollout:

- V2 is introduced behind an owner-only V2 entry / mode during runtime slices.
- The legacy app remains the default until a usable / default milestone (defined in S11.D) is approved.
- V2 must be testable without breaking the legacy app.
- After the approved milestone, V2 may become the default and the legacy app may move behind an "Old app" entry.
- Activation does not delete the legacy app or its data.

Boundaries:

- The mode switch / V2 entry must not trigger any legacy migration or write paths.
- V2 boot must not run any legacy write paths.
- V2 tests must include before / after legacy key checks to prove no legacy key changed during V2 activation.

S11.B does not define exact UI copy, route names, or the toggle mechanism. Those belong to S11.C1 / S11.C2 surfaces and S11.D milestone gating.

---

## 18. Native/public storage review stop condition

Before any public or native release of V2, storage must be reviewed.

The review must consider:

- iOS backup eligibility
- Android Auto Backup eligibility
- PWA persistence limitations
- V2 export / import portability
- data size and quota
- whether localStorage remains acceptable
- whether IndexedDB, native SQLite, or file storage is needed

Rules:

- Platform backup may help same-platform restore.
- Platform backup is not sync.
- Platform backup is not iPhone ↔ Android portability.
- V2 export / import remains the platform-neutral portability contract per S10.

Do not select the final native storage engine inside S11. Selection requires the review above plus owner approval, and is a stop condition for any public or native release that has not completed the review.

---

## 19. S11.B non-goals

S11.B does not define:

- runtime implementation
- exact function names
- final JSON schema
- IndexedDB / SQLite / Room / Core Data choice
- cloud / sync / account identity
- Supabase / iCal redesign
- AES-GCM expansion
- service worker cache change
- V1 / V3 / V4 migration
- legacy cleanup
- exact UI copy

Anything in this list that is needed later belongs to S11.C1, S11.C2, S11.D, or post-S11 sessions.

---

## 20. Handoff to S11.C1

S11.C1 owns the foundation slices:

- V2 shell
- store boot
- empty `vocnjak_v2` initialization
- catalog seed
- Plants foundation
- early export / import safety

S11.C1 must obey the S11.B storage and activation rules:

- single `vocnjak_v2` key for V2 state
- store read / write boundary as the only path to storage
- clean-start contract on first boot
- legacy keys untouched
- V2 testable without breaking the legacy app

S11.C1 is authorized to begin only after S11.B is committed to `main` and the owner explicitly opens S11.C1.

---

## 21. S11.C1 purpose

S11.C1 defines the foundation runtime slices that the first V2 implementation will follow. S11.C1 is documentation; it does not implement runtime code, surfaces, or storage.

S11.C1 exists so that the first runtime work has a fixed slice sequence, a fixed scope per slice, fixed verification expectations, and fixed boundaries against legacy code. Any runtime slice that drifts outside what S11.C1 defines must stop and route to a new S11 patch or to S11.D.

S11.C1 binds:

- S2 domain model (Plant identity, immutable Activity / Observation, group identity, no inferred state)
- S6 / S7 UX surfaces (Biljke §4, Karton voćke §4.5, Add plant entry §4.3, Plant detail §4.4)
- S8 storage (root store shape §1.3, retained catalog version invariants §1.4, Plant persisted shape §1.5, export/import shape §1.21–§1.24)
- S10 clean V2 transition (clean initialization §6.5, manual recovery §6.6, V2 portability §6.7, source classification §6.9, forbidden behavior §6.11)
- S11.A safety boundaries (§7 git rules, §8 runtime safety, §9 deferrals, §10 tracker timing)
- S11.B storage and activation (§14 V2 key, §15 store boundary, §16 clean-start contract, §17 activation, §18 native review, §19 non-goals)

S11.C1 does not redefine any of these. S11.C1 only orders runtime slices against them.

---

## 22. Foundation slice overview

S11.C1 has five foundation slices, in this order:

- Slice 0 — V2 shell and owner-only entry
- Slice 1 — Store boot and empty `vocnjak_v2` initialization
- Slice 2 — Catalog seed and retained catalog baseline
- Slice 3 — Early V2 export / import safety baseline
- Slice 4 — Plant foundation and Biljke first cut

Reality of the current codebase: V2 is built inside the same single-file PWA as the legacy app. Every foundation slice will land inside `index.html`. Each slice must be a tightly scoped diff in a clearly demarcated V2 region; no slice may interleave with or refactor legacy code paths.

Cross-cutting rules that bind every slice:

- Single store key for V2 state: `vocnjak_v2` (per §14). No other new V2 storage key in S11.C1.
- The store boundary is the only path to `vocnjak_v2` (per §15). UI surfaces consume store data through the runtime state layer, never via direct `localStorage`.
- All 13 protected legacy keys (per §8 / §14) must not be read, written, deleted, or renamed by any V2 code path.
- Legacy boot and any legacy migration code must remain functionally byte-identical. V2 must not suppress, condition, or mutate legacy boot.
- No service worker `CACHE_NAME` bump, no `manifest.json` change, no weather / Supabase / iCal / AES-GCM refactor.
- No catalog content edits to `V2_PLANT_CATALOG.md` or `V2_ORCHARD_PLAN_TEMPLATES.md`.
- No tracker edits to `CLAUDE.md` or `CURRENT_STATE.md` during S11.C1.

---

## 23. Slice 0 — V2 shell and owner-only entry

Purpose:

Prove that V2 can render inside the existing PWA without disturbing the legacy app. No store, no data, no real surfaces.

Allowed touch points:

- `index.html` only. A new top-level container in a clearly demarcated V2 region. An owner-only entry mechanism (URL hash or hidden owner-only toggle), ephemeral only.

Must not touch:

- `manifest.json`, `sw.js`, weather code, Supabase / iCal / GitHub sync, AES-GCM, any of the 13 protected legacy keys, catalog / template docs, the legacy boot init, or any legacy `localStorage` call site.

Depends on:

- Nothing. First slice.

Produces:

- A V2 shell that renders a single placeholder screen reachable only via the owner-only entry. No storage reads or writes. Legacy app continues to boot and behave normally.

Manual verification:

- Hard-reload `index.html` without the V2 entry → legacy app renders identically; no `vocnjak_v2` key exists.
- Use the V2 entry → V2 shell renders; legacy DOM remains in place but inert / aria-hidden / off-screen.
- Local Storage: no new V2 keys; `vocnjak_v2` does not yet exist (it lands in Slice 1).
- All 13 protected legacy keys retain the same VALUES they had before the V2 session (see §28 verification rule).

Stop conditions:

- The V2 entry would require a new persistent storage key (forbidden per §14).
- The V2 entry would require modifying legacy code paths.
- Owner-only entry would suppress, condition, or replace any legacy boot path.

---

## 24. Slice 1 — Store boot and empty `vocnjak_v2` initialization

Purpose:

Introduce the store boundary as the only path to `vocnjak_v2`. Initialize an empty V2 store on first V2 entry. Lock the JSON top-level shape so later slices fill collections, not invent shape.

Allowed touch points:

- `index.html` only, inside the V2 region. The store boundary is a thin layer with three conceptual roles: store read boundary, store write boundary, store validation boundary.

Must not touch:

- Legacy keys (read / write / delete / rename). Legacy `localStorage` call sites. `manifest.json`. `sw.js`.

Depends on:

- Slice 0 (V2 shell exists).

Produces:

- A `vocnjak_v2` localStorage key containing a serialized V2 root store with all S8 §1.3 collections present-but-empty: `meta`, `catalogs`, `plants`, `plan_instances`, `plan_overlays`, `activities`, `observations`, `corrections`, `review_state`.
- Three conceptual boundaries: store read, store write, store validation. No function-name commitment in S11.C1.
- Clean-start contract per §16: if `vocnjak_v2` absent, init empty; never read legacy keys as V2 data; do not claim "migration complete" when starting clean.

Manual verification:

- Wipe `vocnjak_v2`, enter V2 → key reappears with the §1.3 shape.
- Existing valid `vocnjak_v2` → V2 boot does not reinitialize; existing data preserved.
- Corrupt `vocnjak_v2` JSON → V2 surface fails closed, no silent overwrite; legacy app remains usable.
- All V2 storage access goes through the boundary; no V2 code path calls `localStorage.getItem("vocnjak_v3" / "vocnjak_v4" / ...)`.
- Legacy key VALUES unchanged across this session (see §28).

Stop conditions:

- The boundary cannot be expressed without leaking direct `localStorage` calls outside the boundary.
- The shape would deviate from S8 §1.3.
- The boundary would require selecting a final native storage engine (deferred per §18).

---

## 25. Slice 2 — Catalog seed and retained catalog baseline

Purpose:

Seed exactly one retained catalog version inside the V2 store, but only the subset required by the S11.C1 Plant foundation. This is a foundation-scoped catalog seed; it is not a full retained catalog baseline.

Allowed touch points:

- `index.html` only, inside the V2 region. Catalog content is build-time-derived from already-approved V2 catalog / template docs and carried as inline static data.

Must not touch:

- `V2_PLANT_CATALOG.md`, `V2_ORCHARD_PLAN_TEMPLATES.md`, `V2_CATALOG_AUDIT.md`, `V2_S3_AUDIT_CONSOLIDATION.md`. No catalog content edits and no catalog re-authoring.

Depends on:

- Slice 1 (store exists; `meta` and `catalogs` collections present).

Slice 2 catalog seed scope rule:

- Slice 2 seeds only the catalog subset required for the S11.C1 Plant foundation:
  - retained `catalog_version` metadata
  - supported species
  - varieties
  - user-facing labels
  - variety / timing metadata needed by Add Plant / Biljke / Plant detail
- Action-window definitions, monitoring program declarations, and stage vocabulary may be introduced later, with the runtime slice that first consumes them, but only from already-approved V2 catalog / template docs and without catalog re-authoring.
- Slice 2 must not present empty action-window arrays, empty monitoring-program arrays, or empty stage-vocabulary arrays as if they were a final retained catalog baseline. A foundation-scoped catalog seed is honest: what is present is approved and consumed; what is absent is explicitly out of S11.C1 scope.

Produces:

- A single `catalog_version` populated under `catalogs[catalog_version]` with the foundation-scoped subset above.
- The active catalog version pointer in `meta` set to this version.
- Retained catalog reference invariants per S8 §1.4: any plant later written in Slice 4 references this `catalog_version` via the §1.5 Plant persisted shape and is resolvable against the seeded subset.

Manual verification:

- After Slice 2 boot, `vocnjak_v2.catalogs` contains exactly one version with the supported species per V2_PLANT_CATALOG.md §3 (apple, sweet_cherry, sour_cherry, plum, peach, nectarine, pear, quince, apricot, almond, walnut, hazelnut, olive, pomegranate; citrus and fig excluded per S4 owner decision).
- `meta.active_catalog_version` matches.
- Variety data model per V2_PLANT_CATALOG.md §7 (Form A timing-driving / Form B user-facing-only) is preserved in the seeded shape.
- Reloading does not re-seed; the catalog version is retained, not regenerated.
- Action-window definitions, monitoring program declarations, and stage vocabulary are not present as empty arrays masquerading as completed seed.

Stop conditions:

- Catalog seeding would require a content edit to `V2_PLANT_CATALOG.md` or `V2_ORCHARD_PLAN_TEMPLATES.md`.
- The implementer notices a catalog gap (missing variety, mistyped timing, etc.) — route to a separate S5.x session, do not edit catalog inside S11.C1.
- The seed would require introducing action-window or monitoring-program semantics that the S11.C1 Plant foundation does not consume.

---

## 26. Slice 3 — Early V2 export/import safety baseline

Purpose:

Land V2 export emit and V2 import validate-and-replace BEFORE Plant foundation, so any plant added in Slice 4 is immediately backupable and the import validation path is exercised against a meaningful catalog reference graph (without the pressure of real plant data on disk yet).

Allowed touch points:

- `index.html` only, inside the V2 region. Export emit, import validate-and-replace, and an owner-only entry to trigger them.

Must not touch:

- Legacy keys. The legacy `vocnjak_v4` export / import code paths must remain functionally byte-identical and must continue to work for the legacy app.

Depends on:

- Slice 1 (shape locked) and Slice 2 (at least one catalog version exists so reference invariants are real).

Produces:

- Export = serialize current `vocnjak_v2` to a downloadable JSON file with the S8 §1.21 full-state snapshot shape (`meta` + retained `catalogs` + `plants` + `plan_instances` + `plan_overlays` + `activities` + `observations` + `corrections` + `review_state`). At Slice 3, every collection except `catalogs` is empty; the export is still valid.
- Import = file picker + parse + S8 §1.22 / §1.23 fail-closed validation against the same shape, then full replace of `vocnjak_v2`. No merge, no partial accept, no auto-fix, no relinking, no catalog-version substitution, no duplicate suppression. If validation fails, the original `vocnjak_v2` is untouched.
- Pre-import safety: in-memory rollback during the import transaction (no new persistent backup key, per §14). Owner may optionally export the current store before import as a precaution.

Manual verification:

- Empty (or near-empty) store → export → JSON contains all 9 collections with the seeded catalog version present and the rest empty.
- Round-trip: export → modify a benign field → import → store matches the modified file (replace, not merge).
- Import a malformed file (missing collection, bad JSON, missing `catalog_version` reference, etc.) → fail closed; original store unchanged.
- Import a file with a `catalog_version` not in the importing instance's retained catalogs → fail closed per S8 §1.23.
- Legacy `vocnjak_v4` export / import code in `index.html` is unchanged and continues to work for the legacy app.

Stop conditions:

- Import requires merge, partial-accept, auto-fix, relinking, or catalog-version substitution to be useful (forbidden per S8 §1.22 / §1.23).
- Export shape would deviate from S8 §1.21.
- A new persistent backup key would be required (forbidden per §14).

---

## 27. Slice 4 — Plant foundation and Biljke first cut

Purpose:

Make V2 useful by letting the owner enter real plants. Land Add Plant (Karton voćke fields), Biljke list, and Plant detail's static blocks per V2_UX_MODEL.md §4. Each plant added is immediately backupable via Slice 3.

Allowed touch points:

- `index.html` only, inside the V2 region. UI for Biljke list, Add Plant flow, Plant detail with Karton voćke.

Must not touch:

- Activity, Observation, Plan instance, Plan overlay, Correction, monitoring programs (all S11.C2). Pregled, Kalendar, Dnevnik (all S11.C2). Legacy keys. Plan-change marker logic on Biljke rows (depends on plan diff from S9.B; render as null placeholder until S11.C2). `current seasonal actions for this plant` (depends on snapshot from S9; render empty or omit per V2_UX_MODEL.md §4.4).

Depends on:

- Slice 1 (store + Plants collection)
- Slice 2 (species / variety references)
- Slice 3 (export / import safety so any plant added is immediately recoverable)

Produces:

- Add Plant flow per V2_UX_MODEL.md §4.3 (Dodaj voćku) with Karton voćke fields per §4.5: `Vrsta`, `Sorta`, `Podloga`, `Posađeno`, `Kupljeno`, `Izvor / rasadnik`, `Položaj / oznaka`, `Bilješka`, `Korisnička oznaka / ime`. Per §4.6 missing/unknown distinction (`nije upisano` vs `ne znam`). Plant write goes through Slice 1 store boundary; `plant_id` stable from first write per S8 §1.5.
- Biljke list per §4.2: stable orchard order; row content per the §4.2 allowed shape; no dynamic urgency sort; no checklist framing; no compliance copy. Plan-change marker rendered as null placeholder.
- Plant detail per §4.4 with these sections rendered: plant title / identity, archived marker (false at this stage), Karton voćke (§4.5), `Dnevnik ove voćke` entry point as non-functional placeholder. Sections 4.7 / 4.8 / 4.9 / 4.10 / 4.11 may render as empty placeholders or be omitted per §4.4 "may omit empty seasonal sections".

Manual verification:

- Add a plant (for example Trešnja — Kordia, Podloga Gisela 5, Posađeno 15.3.2026, Položaj donji vrt) → appears in Biljke list with stable order.
- Open the plant → Karton voćke shows all entered fields; missing fields render as `nije upisano`, not as blank.
- Add 4 plants → list order is stable across reload.
- Export → JSON contains all 4 plants under `plants` with stable `plant_id` values.
- Wipe `vocnjak_v2`, import the exported JSON → all 4 plants reappear with the same `plant_id` values.
- Legacy key VALUES unchanged across the entire Slice 4 session (see §28).

Stop conditions:

- Plant detail or Biljke would require derived state (snapshot, plan diff) to render correctly — defer to S11.C2.
- Add Plant would require a species or variety not in the Slice 2 seeded catalog.
- A plan-change marker would need to compute real diff logic in Slice 4. Render as null placeholder; defer to S11.C2.

---

## 28. S11.C1 serialization rule

Foundation slices commit serially in the order Slice 0 → Slice 1 → Slice 2 → Slice 3 → Slice 4.

Rules:

- One slice per commit, or a small commit group only when the group is one slice's coherent set of changes.
- A slice does not begin until the previous slice is committed to `main` and the owner explicitly opens the next slice.
- Parallel implementation of S11.C1 slices is forbidden. Parallel design discussion is allowed; parallel commits are not.
- Parallel implementation policy beyond foundation is deferred to S11.D.

Verification rule for "legacy non-disturbance":

- Verification asserts that legacy key VALUES are unchanged across V2 activation, NOT that legacy keys are never written-to.
- The legacy boot init may rewrite `vocnjak_v4` with identical content on every page load; this is allowed legacy behavior and must not be suppressed by V2.
- A test that asserts "no `setItem('vocnjak_v4', ...)` was called" produces false positives. The correct assertion is: legacy key VALUE before the V2 session is identical to the same legacy key VALUE after the V2 session.

---

## 29. S11.C1 non-goals

S11.C1 does not define or implement:

- runtime code (S11.C1 is documentation; runtime begins after S11.A–S11.D are complete and explicitly approved)
- changes to S8, S9, or S10
- final native storage engine
- Activity, Observation, Plan instance, Plan overlay, Correction
- Dnevnik
- Snapshot algorithm or any S9 derived state
- Pregled, Kalendar, Detalj sezonske radnje
- Plan-change review flow
- Monitoring or Awareness UI
- Stage confirmation, correction, or archive flows
- Weather provider, weather cache, or weather widget
- Supabase backup, iCal sync, GitHub sync
- AES-GCM expansion
- service worker `CACHE_NAME` bump (`sw.js` is unchanged; owner uses hard reload during foundation testing)
- `manifest.json` change
- Settings / Postavke split
- catalog or template content edits
- legacy code refactor (existing legacy `localStorage` call sites are not touched)
- exact UI copy beyond labels already locked in V2_UX_MODEL.md §4.5
- new persistent storage keys beyond `vocnjak_v2`
- persistent owner-only V2 entry (entry is ephemeral in S11.C1; persistent activation is S11.D milestone gating)

Anything in this list that is needed later belongs to S11.C2, S11.D, or post-S11 sessions.

---

## 30. Handoff to S11.C2

S11.C2 owns the usable / default surfaces:

- Activity (single and multi-plant)
- Dnevnik
- Snapshot algorithm (from S9.A)
- Pregled
- Kalendar
- Detalj sezonske radnje
- Monitoring / Awareness, stage confirmation, correction, and archive splits

S11.C2 must obey all S11.A–S11.C1 rules, including:

- single `vocnjak_v2` key for V2 state
- store read / write boundary as the only path to storage
- clean-start contract on first boot
- legacy keys untouched (legacy key VALUES unchanged, per §28)
- V2 testable without breaking the legacy app
- foundation slices remain stable; S11.C2 may extend the Slice 2 catalog seed with action-window definitions, monitoring program declarations, and stage vocabulary as the surfaces that consume them are introduced, but only from already-approved V2 catalog / template docs and without catalog re-authoring

S11.C2 is authorized to begin only after S11.C1 is committed to `main` and the owner explicitly opens S11.C2.

---

## 31. S11.C2 purpose

S11.C2 defines the usable / default runtime slices that follow the S11.C1 foundation. S11.C2 is documentation; it does not implement runtime code, surfaces, or storage.

S11.C2 exists so that the second wave of runtime work has a fixed slice sequence, fixed scope per slice, fixed verification expectations, and explicit boundaries against legacy code and post-usable surfaces. Any runtime slice that drifts outside what S11.C2 defines must stop and route to a new S11 patch or to S11.D.

S11.C2 binds:

- S2 domain model (Activity §0.6, Observation §0.6a, group identity §0.11, no inferred state)
- S6 / S7 UX surfaces (Pregled §1, Kalendar §2, Dnevnik §3, Detalj sezonske radnje §5, monitoring capture §10, stage confirmation §11, plant lifecycle §14, monitoring detail §15, evidence capture §16, record correction §17)
- S8 storage (immutable Activity / Observation / Correction; Plant `archived_at` / `archive_reason` / `archive_note`; export / import shape)
- S9.A derived state (active-window snapshot §4); S9.B upgrade diff and overlay reconciliation are out of S11.C2
- S10 clean V2 transition (legacy keys untouched, no migration)
- S11.A safety boundaries (§7 git rules, §8 runtime safety, §9 deferrals, §10 tracker timing)
- S11.B storage and activation (§14 V2 key, §15 store boundary, §17 activation, §19 non-goals)
- S11.C1 foundation (§22 cross-cutting rules, §28 serialization rule, §28 legacy key VALUES verification rule, §30 catalog seed extension rule)

S11.C2 does not redefine any of these. S11.C2 only orders runtime slices against them.

---

## 32. Usable/default slice overview

S11.C2 has five usable / default slices, after the completed Pre-Slice-5 Action Window Seed prerequisite and the completed Pre-Slice-7 Action Window Notes Projection prerequisite:

- Prerequisite — Pre-Slice-5 Action Window Seed
- Slice 5 — Activity capture, Activity-only Dnevnik, and Activity correction
- Slice 6 — Active-window snapshot, Pregled, and Kalendar
- Prerequisite — Pre-Slice-7 Action Window Notes Projection (B1 + B1.1)
- Slice 7 — Plant detail integration, Detalj sezonske radnje, and advisory weather composition
- Slice 8 — Plant detail B2 preview first, then observations/stage
- Slice 9 — Observation correction and archive / lifecycle baseline

All five slices land inside `index.html` in a clearly demarcated V2 region. No slice may interleave with or refactor legacy code paths. Naming overlap with the legacy app (Pregled, Kalendar, Dnevnik, Aktivnost) is intentional; code-path overlap is not.

Cross-cutting rules that bind every S11.C2 slice (in addition to §22):

- Activity is multi-plant from the first Activity implementation (per §6).
- History is immutable from the first write implementation (per §6). All edits land as additive Correction records linked to originals; no in-place mutation.
- The active-window snapshot is a read-time projection. Derived caches have zero authority. No window state, gate state, plan state, or aggregate is stored back to `vocnjak_v2`.
- Weather is advisory only. Weather must not change window state, gate state, plan state, cue ordering, cue existence, effective open / close dates, Activity matching, monitoring state, archive visibility, or stage effects.
- Monitoring absence is neutral. No warning, no overdue badge, no compliance copy on missing observations or unconfirmed stages.
- Single capture path. Each capture surface (Activity, Observation, stage confirmation) has exactly one write boundary; no surface re-implements capture.
- Same Correction record shape across Activity (Slice 5) and Observation (Slice 9). Per S8 §1.24 handoff: one Correction storage shape.
- Catalog seed extension only from already-approved V2 catalog / template docs and without catalog re-authoring (per §30). Pre-Slice-5 Action Window Seed supplied real action-window definitions before Slice 5; Slice 6 still owns snapshot / Pregled / Kalendar, not the first action-window seed. B2 has resolved source-map/projection grouping as metadata only before Runtime Slice 8. Slice 8 consumes only B2-approved boundaries and must not independently introduce monitoring declarations, risk-awareness UI, new registries, or stage vocabulary. The current boundary adds no `awareness_definitions[]`, `target_registry[]`, or `symptom_registry[]`.
- Verification of legacy non-disturbance asserts that legacy key VALUES are unchanged, NOT that legacy keys are never written-to (per §28).

---

### 32.1 Pre-Slice-5 Action Window Seed prerequisite

Purpose:

Resolve the `window_def_id` source-of-truth blocker before Activity capture. Slice 5 writes immutable Activity records, and `V2_DOMAIN_MODEL.md §0.6` requires those records to carry real `window_def_id` values. Historically, Runtime Slice 2 created a foundation-only `catalog_v1` with species / variety / fallback / harvest data but no action-window definitions.

Status:

- The Action Window Seed prerequisite has been implemented by `df6a7fc Implement Action Window Seed prerequisite`.
- Canonical `catalog_v1` now has source-backed real action-window definitions and real stable `window_def_id` values.
- Owner browser verification passed and focused adversarial review passed.
- Runtime Slice 5 has since completed at `8bc630a Implement Runtime Slice 5 activity capture`.
- Runtime Slice 6 has since completed at `99e76c8 Implement Runtime Slice 6 snapshot and calendar surfaces`.

Decision:

- Keep `window_def_id` required.
- Do not synthesize fake `window_def_id` values.
- Do not make `window_def_id` nullable or sentinel-based.
- Do not weaken Activity identity.
- Do not move full Slice 6 before Slice 5.
- Move only real action-window seeding out of Slice 6 into this prerequisite.
- Keep Pregled / Kalendar / snapshot derivation in Slice 6.
- Treat V2 `catalog_v1` as the first usable V2 canonical catalog after this prerequisite lands.
- Do not introduce `catalog_v2` merely to preserve the incomplete pre-usable V2 dev seed.
- Current `vocnjak_v2` dev/test stores may be reset or deterministically upgraded.
- Protected legacy storage keys remain untouched.

Plan-template-first rule:

- Pre-Slice-5 Action Window Seed MUST start from `PRODUCT_VISION.md`, `V2_ORCHARD_PLAN_TEMPLATES.md`, `V2_PLANT_CATALOG.md`, and the audit/consolidation docs.
- A species-by-species source map is REQUIRED before implementation.
- The source map MUST preserve shared-source rows, species-specific overrides, variety/fallback harvest timing, and deferred monitoring/awareness/watering carry-forward.
- A generic minimum seed is invalid. STOP if the plan starts from runtime convenience instead of approved orchard work-plan structure.
- The plan-template-first rule remains hardened by `bcaf3a2 Harden plan-template projection rules`.
- Runtime Slice 5 has since completed after owner approval. The same source-backed, plan-template-first discipline remains required before any future catalog/action-window/orchard-plan runtime work.

Allowed touch points for the completed runtime prerequisite:

- `index.html` only, inside the V2 region.
- Canonical `CATALOG_V1` seed shape and exact-canonical validation.
- V2 store boot / validation behavior only as needed to reset or deterministically upgrade pre-usable `vocnjak_v2` dev/test stores.
- Export / import validation only as needed to keep canonical catalog validation fail-closed.

Must not touch:

- Activity capture, Activity-only Dnevnik, or Activity correction implementation (Slice 5).
- Snapshot, Pregled, or Kalendar (Slice 6).
- Plant detail live integration, Detalj sezonske radnje, or weather composition (Slice 7).
- Observation, stage confirmation, monitoring programs, or stage vocabulary (Slice 8), except where the locked domain model already requires action-window validation to reject orphan `monitoring` action-windows.
- Legacy app logic or protected legacy keys.
- V2 catalog/template input docs unless the owner explicitly opens catalog-content curation.

Produces:

- Real catalog-backed action-window definitions in canonical V2 `catalog_v1`.
- Stable source-backed `window_def_id` values suitable for Activity records.
- Orchard-language labels such as `Bakar — zimska zaštita`, `Bakar — rano proljeće`, `Bakar — nakon rezidbe`, `Zimska rezidba`, and `Ljetna rezidba`.
- Runtime validation that rejects missing, duplicate, synthetic, null, or sentinel `window_def_id` values.
- A clean compatibility stance for pre-usable V2 dev/test stores and backups.

Manual verification:

- Clean `#v2` boot initializes / loads canonical `catalog_v1` with non-empty action-window definitions.
- Every action-window has a stable `window_def_id`, valid `action_type`, non-empty label, valid anchor / tolerance, and required provenance by catalog fallback.
- Canonical catalog drift is rejected by import validation.
- Old foundation-only V2 dev/test stores are reset or deterministically upgraded according to the owner-approved prerequisite behavior.
- Protected legacy key VALUES remain unchanged.

Stop conditions:

- A proposed Activity write would still lack a real `window_def_id`.
- Any implementation proposes synthetic, generated-at-write, nullable, or sentinel `window_def_id` values.
- The prerequisite tries to introduce full Slice 6 snapshot / Pregled / Kalendar behavior.
- The prerequisite introduces `catalog_v2` only to preserve incomplete pre-usable V2 dev history.
- Any protected legacy key would be read as V2 state, rewritten, deleted, normalized, or migrated.

---

### 32.2 Pre-Slice-7 Action Window Notes Projection prerequisite

Purpose:

Project canonical action-window notes into V2 `catalog_v1` so Runtime Slice 7 Detalj sezonske radnje can render practical seasonal-action guidance from the catalog without owning content authoring. The prerequisite is canonical action-window notes projection only. It does not start Runtime Slice 7 and does not implement Monitoring/Praćenje, awareness/risk, stage vocabulary, target/symptom registry, or any new UI surface.

Status:

- The Pre-Slice-7 Action Window Notes Projection prerequisite has been implemented in two commits.
- B1 landed as `ad9a113 Project action-window notes into canonical catalog`.
- B1.1 landed as `a1b5307 Clean B1 action-window notes boundary`.
- Both commits changed `index.html` only.
- At B1/B1.1 closure, Runtime Slice 7 had not started; it has since completed through S7.4.

B1 added:

- optional canonical `action_window_definitions[].notes` field (string when present, absent otherwise).
- canonical / runtime support for projected action-window notes via `STANDARD_ACTION_WINDOW_NOTES`, `SPECIES_ACTION_WINDOW_NOTES`, `notesForSpeciesWindow`, and `harvestNotesForSpecies`.
- the Croatian shared `spray_safety_notes` constant (`ACTION_WINDOW_SPRAY_SAFETY_NOTES_HR`) attached to canonical `catalog_v1` for future Slice 7 Detalj composition.
- validator support for `notes` (optional non-empty string when present) and for `spray_safety_notes` (non-empty string array, length and content equal to canonical) at both the simple and the detailed `validateForBackup` layers.
- canonical drift detection on the new fields via `compareCanonicalCatalogNode` so any divergent note string fails closed.
- a deterministic refresh path for old `vocnjak_v2` stores that lack B1 notes via `isB1RefreshableCatalogV1` / `normalizeStoreCatalogForCurrentCanonical`, gated on the stored catalog matching canonical minus the B1 projection (`spray_safety_notes` and per-window `notes` are stripped before comparison) and on the stored catalog having no `spray_safety_notes` and no per-window `notes` of its own.

B1.1 cleaned the projected note text by removing:

- monitoring decision prose ("razmatrati samo ako monitoring", "Monitoring/Praćenje pomaže odluci", "praćenje bakterijske paleži", "Pratiti vizualno -").
- awareness / risk prose (specific pure-frost awareness, pucanje plodova awareness, disease-pressure-history awareness).
- pathogen / symptom registry prose (`Venturia inaequalis`, `Venturia pirina`, `Taphrina deformans`, `Monilinia laxa`, `Pseudomonas savastanoi`, `šarka`, "vidljiva kovrčavost lista znači…").
- frost-diagnostic prose (apricot post-frost crop explanation, "POST-MRAZNI ROD", "mraz je razlog").
- history-coaching prose ("zabilježiti štetu od mraza u povijest", "povijest pomaže razlikovati godine s mrazom od godina s bolešću ili štetnicima", "zabilježiti problem za iduću sezonu").

B1.1 preserved practical seasonal-action guidance:

- fenofaza / timing cues, safe-execution wording (suho, bez vjetra, ≥5 °C, ne tijekom cvatnje, izvan leta pčela, prema etiketi proizvoda).
- oil/copper 7–10-day spacing, "ne duplicirati" / "ne automatski" guidance.
- product-category / label wording, young-tree caveats.
- thinning / harvest / bird-net practical guidance.
- the spray-safety constant.
- the four owner-approved direct frost-action lines: `trunk_whitewash` purpose, `oil.dormant` "Ne primjenjivati ako je najavljen mraz", olive young-tree agrotekstil ≤−7 °C, pomegranate winter-wrap, and quince "Brati prije jačeg mraza" harvest deadline.

Allowed touch points (used by B1/B1.1 only):

- `index.html` only, inside the V2 region.
- B1: `actionWindow()` signature and body, `addStandardFruitWindow` / `addSpeciesWindow` / `addHarvestWindow` callers, `STANDARD_ACTION_WINDOW_NOTES` / `SPECIES_ACTION_WINDOW_NOTES` / `HARVEST_ACTION_WINDOW_NOTES` definitions, `notesForSpeciesWindow` / `harvestNotesForSpecies` helpers, `ACTION_WINDOW_SPRAY_SAFETY_NOTES_HR` constant, canonical `CATALOG_V1` shape addition (`spray_safety_notes`), validators (`hasValidActionWindowDefinitions`, `hasValidSpraySafetyNotes`, `hasValidCatalog`, detailed `validateActionWindowDefinition`, `validateSpraySafetyNotes`, `validateCatalogV1`), refresh helpers (`catalogDeepEquals`, `catalogWithoutB1Projection`, `hasAnyActionWindowNotes`, `isB1RefreshableCatalogV1`, `normalizeStoreCatalogForCurrentCanonical`), Slice-2 boot refresh path, V2 export and import paths.
- B1.1: only the content of `STANDARD_ACTION_WINDOW_NOTES`, `SPECIES_ACTION_WINDOW_NOTES`, and `HARVEST_ACTION_WINDOW_NOTES` was edited.

Must not touch:

- Activity capture, Activity-only Dnevnik, or Activity correction implementation (Slice 5).
- Snapshot, Pregled, or Kalendar (Slice 6).
- Plant detail live integration, Detalj sezonske radnje, or weather composition (completed later through S7.4; not touched by B1/B1.1).
- Observation, stage confirmation, monitoring programs, risk-awareness rendering, minimal generic stage vocabulary or stage-write deferral/restriction (Slice 8); B2 source-map projection grouping is complete as private metadata only and does not add `awareness_definitions[]`, `target_registry[]`, or `symptom_registry[]`.
- Observation correction, archive (Slice 9).
- Plan upgrade review or Za pregledati cues (post-usable).
- Legacy app logic or protected legacy keys.
- V2 catalog/template input docs.
- `manifest.json`, `sw.js`, weather / Supabase / iCal / encryption code.

Implementation precision:

- B1/B1.1 changed `index.html` only. No other repo files were modified by either commit.
- canonical `window_def_id`, `label`, `action_type`, `anchor`, and `tolerance` values are unchanged from before B1.
- after B1.1, validators / canonical refresh / `spray_safety_notes` structure / `actionWindow()` / `buildActionWindowDefinitions` / `CATALOG_V1` structure / V2 export / import handlers / Activity / Correction validators are byte-identical to `ad9a113`. B1.1 only edited the three note-map constants.
- no `window.v2Snapshot` global was introduced.
- no new globals (`window.<name> = ...`) were introduced by either commit.
- no new `innerHTML`, `outerHTML`, `document.write`, `eval`, or `new Function(` calls were introduced.
- Slice 6 surfaces are unchanged: `renderPregled`, `renderKalendar`, and the seasonal-action placeholder (`Detalj sezonske radnje stiže u Slice 7.`) are not in either B1 or B1.1.
- Activity and Correction schemas / validators are unchanged.

Verification precision:

- source-inspection / static grep verification was performed against `index.html` after B1.1: no `monitoring|Monitoring|Praćenje|praćenje|klop|trap|scouting`, `Taphrina|Venturia|Monilinia|Erwinia|Pseudomonas|šarka`, or `Cuprablau|Score|Mospilan|Lac Balsam|Bordo|Switch` matches inside the three note-map constants. The four owner-approved frost-action lines remain.
- full browser runtime verification of B1.1 was not performed for the B1.1 commit.
- Cloudflare deployment verification was not performed.
- full import/export UI round-trip was not performed.
- direct protected legacy localStorage byte-dump comparison was not performed; protected legacy isolation was checked by source isolation only.

B2 / Slice 8 boundary after B2 metadata-only implementation (NOT implemented by B1/B1.1):

- source-map projection grouping by stable ids: `monitoring_track` / `risk_awareness_track` is complete as private metadata only
- `monitoring_programs[]` remains unimplemented until an owner-approved Slice 8 boundary consumes B2 metadata
- minimal generic MVP `stage_vocabulary[]`, or Slice 8 stage confirmation writes deferred/restricted until vocabulary exists, remains unimplemented
- Kalendar `Praćenje` content: §2.11 monitoring cards and §2.12 risk-awareness cards
- Pregled `Praćenje` content
- Plant detail §4.10 monitoring UI and §4.9 Sezonski rizici feed
- observation capture / observation rows
- no `awareness_definitions[]`, `target_registry[]`, or `symptom_registry[]` in the current B2 projection

Slice 7 boundary:

- Slice 7 later consumed canonical `action_window_definitions[].notes` projected by B1/B1.1 inside completed S7 detail surfaces.
- Slice 7 did not rely on monitoring or awareness content; B2 metadata-only projection boundary is complete and Runtime Slice 8 is the first allowed consumer.
- Slice 7 is complete through S7.4.

Stop conditions:

- A proposed B-prerequisite change would touch validators / canonical refresh / `spray_safety_notes` structure / `actionWindow()` / `buildActionWindowDefinitions` / `CATALOG_V1` structure / V2 export / import handlers / Activity / Correction code / Pregled / Kalendar renderers / seasonal-action placeholder.
- A proposed B-prerequisite change would add or imply Monitoring / Praćenje, awareness / risk, stage vocabulary, target registry, symptom registry, or any new UI surface.
- A proposed B-prerequisite change would introduce `window.v2Snapshot`, any new global, or any new `innerHTML` / `eval` / `Function(` / `document.write` call.
- A proposed B-prerequisite change would change canonical `window_def_id`, `label`, `action_type`, `anchor`, or `tolerance` values.
- A proposed B-prerequisite change would touch `V2_ORCHARD_PLAN_TEMPLATES.md`, `V2_PLANT_CATALOG.md`, `manifest.json`, `sw.js`, or any legacy / weather / Supabase / iCal / encryption code path.

---

## 33. Slice 5 — Activity capture, Activity-only Dnevnik, and Activity correction

Status: COMPLETE — implemented and pushed to `main` at `8bc630a Implement Runtime Slice 5 activity capture`.

Purpose:

Make V2 useful for capturing real orchard work. Owner can log a single Activity covering multiple plants in one pass; review Activity history in Dnevnik; correct mistaken Activity dates / status / notes via additive Correction records.

Allowed touch points:

- `index.html` only, inside the V2 region. Activity capture form, multi-plant selection UI, Activity-only Dnevnik render, Activity correction entry, additive Correction write.

Must not touch:

- Snapshot, Pregled, Kalendar (Slice 6).
- Plant detail live integration, Detalj sezonske radnje, weather composition (Slice 7).
- Observation, stage confirmation, monitoring (Slice 8).
- Observation correction, archive (Slice 9).
- Plan upgrade review or Za pregledati cues (post-usable; out of S11.C2).
- Legacy keys.
- Legacy V4 capture / Dnevnik flows in `index.html`. They must remain functionally byte-identical for the legacy app.

Depends on:

- Pre-Slice-5 Action Window Seed prerequisite (real action-window definitions and real `window_def_id` values in canonical V2 `catalog_v1`).
- Pre-Slice-5 Activity provenance and Correction storage-shape doc patch: Runtime Slice 5 Activity provenance is locked as `provenance: { source: "user" }`, and Correction records use the exact persisted shape in `V2_DOMAIN_MODEL.md §0.6c` / `V2_ARCHITECTURE.md §1.14`.
- S11.C1 Slice 4 (stable `plant_id` per §1.5).
- S11.C1 Slice 2 (retained `catalog_version`).
- S11.C1 Slice 1 (store read / write / validation boundary).
- S11.C1 Slice 3 (export / import safety so Activity records and Correction records are immediately portable).

Produces:

- Activity write per V2_DOMAIN_MODEL.md §0.6: `activity_id`, `plant_id`, real catalog-backed `window_def_id`, `catalog_version`, `action_type`, `status` ∈ {done, skipped}, `occurred_on`, `recorded_at`, required `provenance: { source: "user" }`, optional `activity_group_id`, optional `notes`. Temporal-order rule (`occurred_on ≤ recorded_at`) enforced at write time. Synthetic, null, sentinel, or write-time-fabricated `window_def_id` values are invalid.
- Multi-plant capture per V2_UX_MODEL.md §16 + V2_DOMAIN_MODEL.md §0.11: a single capture pass over N selected plants writes N Activity records sharing one freshly-minted `activity_group_id`. Runtime Slice 5 uses one status per capture and requires grouped records to share `window_def_id`, `catalog_version`, `action_type`, `occurred_on`, `recorded_at`, and `status`; they differ by `activity_id` and `plant_id`. Group identity is display / query identity only; never derivation authority.
- Activity applicability validation per V2_DOMAIN_MODEL.md §0.6b: species-first windows, variety harvest windows, fallback harvest windows, unknown variety + unknown ripening -> `fallback.mid.harvest` where available, olive/pomegranate species-level harvest, and canonical `action_type` matching are enforced by the validator, not only by UI filtering.
- Activity-only Dnevnik per V2_UX_MODEL.md §3: default Dnevnik (§3.3), plant-filtered (§3.4), seasonal-action-filtered (§3.5), year / month grouping (§3.6), row anatomy (§3.8), marker semantics (§3.9), multi-plant grouping (§3.11). At Slice 5: no observation rows, no archived-plant rows.
- Activity correction per V2_UX_MODEL.md §17 + V2_DOMAIN_MODEL.md §0.6c + V2_ARCHITECTURE.md §1.14 / §4.9: a Correction record with `correction_id`, `original_record_id`, `original_record_type`, `correction_types`, `corrected_values`, optional `explanation`, and `created_at` links to the original Activity; the original is not mutated; Dnevnik displays the corrected version with the §3.9 correction marker.

Implementation summary:

- Runtime Slice 5 landed in `index.html` at `8bc630a Implement Runtime Slice 5 activity capture`.
- The implementation added global Activity capture, Activity-only Dnevnik, additive Activity correction, and validator/import/export support for Activity and Correction records.
- Slice 5 remained independent of Slice 6 snapshot / Pregled / Kalendar state and did not implement observations, monitoring programs, weather, Supabase, iCal/GitHub sync, or legacy app changes.
- Known deferred gap: `V2_UX_MODEL.md` §16.7 outside-period disclosure was not implemented in Slice 5. Safe implementation requires window-active-period derivation and overlaps with Slice 6 snapshot/window-state logic; it remains non-blocking guidance, not a write-time invariant.

Manual verification:

- Local browser verification was performed on `http://localhost:8765/index.html#v2`.
- Initial `vocnjak_v2` validator returned `[]`.
- Basic Activity capture passed.
- Activity shape/provenance passed.
- Multi-plant Activity capture passed.
- Grouped Activity invariant passed.
- Correction creation passed.
- Correction shape passed.
- Dnevnik effective correction display passed with `ispravljeno`.
- Final `vocnjak_v2` validator returned `[]`.
- Protected legacy key byte-equality passed for `vocnjak_v3`, `vocnjak_v4`, `vocnjak_v3_premigration`, and `vocnjak_v4_preimport_backup`.
- Negative validator tests passed: cross-species window rejected, invalid provenance rejected, correction missing target rejected, mixed group status rejected, and the Zagreb-midnight valid case accepted.
- Full Cloudflare deployment verification was not performed.
- Full import/export UI round-trip was not manually verified. Validator/import/export support for Activity and Correction records exists in runtime, but this manual Slice 5 verification did not include a full import/export UI round-trip.

Stop conditions:

- Activity capture would be single-plant only.
- Activity write would omit required `provenance: { source: "user" }` or invent additional provenance fields.
- Correction write would use fields outside the locked `V2_DOMAIN_MODEL.md §0.6c` / `V2_ARCHITECTURE.md §1.14` shape.
- Activity correction would mutate the original record in place.
- Dnevnik would treat `activity_group_id` as derivation authority.
- Activity write would require any snapshot dependency (snapshot lands in Slice 6; Slice 5 is snapshot-independent).
- Activity write would touch any legacy key.

Parallelization notes:

- Cannot parallelize across slices. Slice 6 reads Slice 5 records.
- Within Slice 5, Activity write + Dnevnik render + Activity correction may be drafted in parallel by two implementers but commit serially as one slice (or as 2-3 sub-unit commits within one owner-approved scope).

---

## 34. Slice 6 — Active-window snapshot, Pregled, and Kalendar

Status: COMPLETE — implemented and pushed to `main` at `99e76c8 Implement Runtime Slice 6 snapshot and calendar surfaces`.

Purpose:

Make V2 visible. Implement the deterministic active-window snapshot read model per V2_ARCHITECTURE.md §4. Render Pregled per V2_UX_MODEL.md §1 and Kalendar per §2 from snapshot output.

Allowed touch points:

- `index.html` only, inside the V2 region. Snapshot algorithm, Pregled rendering, Kalendar rendering. Slice 6 assumes the Pre-Slice-5 Action Window Seed prerequisite already supplied action-window definitions; it does not own the first action-window seed.

Must not touch:

- Plant detail live integration, Detalj sezonske radnje, weather composition (Slice 7).
- Observation, stage confirmation, monitoring (Slice 8).
- Observation correction, archive (Slice 9).
- Plan upgrade review (post-usable).
- Za pregledati cues (post-usable).
- Legacy keys.
- Legacy V4 Pregled / Kalendar flows. They must remain functionally byte-identical.

Depends on:

- Slice 5 (Activity records and Activity correction records to project).
- Pre-Slice-5 Action Window Seed prerequisite (canonical `catalog_v1` with action-window definitions).
- S11.C1 Slice 2 (catalog with species / variety foundation, later extended by the prerequisite).

Produces:

- Snapshot per V2_ARCHITECTURE.md §4: inputs (current date, active + archived Plants, retained catalogs, Plan instances + pinning, Plan overlays, Activities, Observations [empty in Slice 6], Corrections, archive state, review state, cue state, weather [absent in Slice 6]); outputs (projected windows per plant, window state per §0.4, gate state per §0.5, plant aggregate, orchard aggregate; monitoring / cue projections empty in Slice 6).
- Window state derivation per §4.6 (independently per plant + window_def_id + cycle_year per §6.3; group identity is never derivation authority).
- Activity evidence matching per §4.8; Activity correction effects per §4.9.
- Pregled per V2_UX_MODEL.md §1: always-visible status sentence (§1.1), Sada aktualno (§1.4), aggregation rule (§1.5), Za provjeru: nema evidencije (§1.6), Uskoro (§1.7), quiet state (§1.10). At Slice 6: no Praćenje surface (§1.8 — Slice 8), no weather advisory band (§1.9 — Slice 7).
- Kalendar per V2_UX_MODEL.md §2: month sections (§2.4), card identity and grouping (§2.7), plant scope (§2.8), evidence / outcome copy (§2.10), purpose cue (§2.15), young-tree relevance (§2.16), tap destination (§2.18 — opens placeholder until Slice 7 Detalj). At Slice 6: no monitoring copy (§2.11 — Slice 8), no weather inline (§2.17 — Slice 7).

Implementation summary:

- Runtime Slice 6 landed in `index.html` at `99e76c8 Implement Runtime Slice 6 snapshot and calendar surfaces`.
- The implementation added a private deterministic read-time snapshot, Pregled rendering from the snapshot, Kalendar rendering from the snapshot, and a minimal seasonal-action placeholder route showing `Detalj sezonske radnje stiže u Slice 7.`
- No derived seasonal state is persisted to `vocnjak_v2`.
- No `window.v2Snapshot` or new global snapshot/debug API was added.
- Pregled/Kalendar render no visible Monitoring/Praćenje UI in Slice 6; Monitoring/Praćenje remains product-critical and deferred to Slice 8.
- Rich agronomic instruction/details remain deferred to Runtime Slice 7 Detalj sezonske radnje.
- `V2_UX_MODEL.md` §16.7 outside-period disclosure was not implemented in Slice 6; it remains Slice-6-adjacent polish or later owner-approved work.

Manual verification:

- Owner manual local verification was performed after commit `99e76c8`.
- `#v2/kalendar` loads and renders seasonal action cards.
- `#v2/pregled` loads and renders neutral overview.
- Kalendar current-month behavior was observed; owner had scrolled upward to January in one screenshot.
- Kalendar placeholder route works and shows `Detalj sezonske radnje stiže u Slice 7.`
- Legacy app without `#v2` loads normally.
- `window.v2ValidateForBackup(JSON.parse(localStorage.getItem("vocnjak_v2")))` returned `[]`.
- `"v2Snapshot" in window` returned `false`.
- Kalendar renders `Sezonske radnje` only.
- Pregled/Kalendar render no visible Praćenje/Monitoring UI.
- Pregled/Kalendar render no weather or risk-awareness UI.
- No forbidden task/compliance/progress wording was observed in screenshots.
- Cloudflare deployment verification was not performed.
- Full import/export UI round-trip was not performed.
- Direct protected legacy localStorage byte-dump comparison was not performed; source isolation and legacy no-hash smoke test passed.
- Cloudflare production state is not claimed.

Deferred / next-slice notes:

- Runtime Slice 7 is complete through S7.4; Plant detail seasonal cards, Detalj sezonske radnje, Plant detail diary preview, and display hardening landed.
- Monitoring/Praćenje remains product-critical and must later appear in Kalendar/Pregled, but visible Monitoring UI is not part of Slice 6.
- Runtime Slice 8 first implementation is complete: Plant detail read-only B2 monitoring/risk preview only. Pregled/Kalendar integration was later owner-approved and completed in Runtime Slice 8 Step 3.

Stop conditions:

- Snapshot would store derived state (forbidden per §0.3 / §4.4).
- Pregled adopts task-manager / compliance / progress framing (forbidden per §1.11).
- Kalendar reorders or filters cards by urgency (forbidden per §2.20).
- Snapshot would require weather to gate or order anything (forbidden per §5.5; weather lands in Slice 7 only as advisory).
- Snapshot would treat absence of monitoring or observation records as warning (forbidden per §0).
- Snapshot would use `activity_group_id` as derivation input.

Parallelization notes:

- Within Slice 6, snapshot must land first; Pregled and Kalendar may then be drafted in parallel but commit serially. Not parallelizable with Slice 7.

---

## 35. Slice 7 — Plant detail integration, Detalj sezonske radnje, and advisory weather composition

Purpose:

Make V2 deeply visible per plant and per action. Populate Plant detail's live sections from snapshot. Ship Detalj sezonske radnje for per-window deep view. Optionally add advisory weather composition as inline notes if and only if weather data is available through a clearly read-only boundary.

Status: COMPLETE — Runtime Slice 7 landed through S7.4 in `index.html` only. S7.1 added Plant detail seasonal action cards, S7.2 added Detalj sezonske radnje, S7.3 added Plant detail Dnevnik preview / plant-scoped diary integration, and S7.4 hardened seasonal-action display.

Current tracker note: S7.4 was a display-only hardening slice. It removed technical seasonal-action identity leakage, suppressed `Uvjet: ne primjenjuje se.` when no `open_condition` exists, aligned seasonal detail titles with user-facing card wording, and reused existing `Namjena:` purpose cues on Plant detail seasonal cards. It did not change action windows, evidence matching, multi-plant logging, the history model, schema, persistence, monitoring, observations, weather logic, or snapshot persistence. The seasonal snapshot remains private, read-time, derived, and non-persisted. B2 metadata-only projection boundary is complete; Runtime Slice 8 Step 1 is complete as Plant detail-only read-only preview.

Allowed touch points:

- `index.html` only, inside the V2 region. Plant detail live sections (§4.7–§4.11), Detalj sezonske radnje surface, Activity capture entry from Detalj (§5.18 — opens Slice 5 capture), per-plant Dnevnik (§3.4) integration.

Must not touch:

- Observation, stage confirmation, monitoring write (Slice 8).
- Observation correction, archive (Slice 9).
- Plan upgrade review or Za pregledati cues (post-usable).
- Legacy weather provider / cache / widget code paths. Slice 7 may consume current-conditions data only through a clearly read-only boundary (see Slice 7 weather rule below). No refactor.
- Legacy keys.

Depends on:

- Slice 6 (snapshot output).
- S11.C1 Slice 4 (Plant detail static blocks ready for live-section fill).

Slice 7 weather rule (strict):

- Slice 7 may display advisory weather only if existing weather data is available through a clearly read-only boundary that does not refactor, mutate, or depend on legacy app state.
- If advisory weather cannot be composed without touching or refactoring legacy weather provider / cache / widget code, omit weather from Slice 7 and defer weather display to a later owner-approved session.
- Weather is optional for Slice 7. Plant detail and Detalj sezonske radnje must still work without weather.
- When weather is composed, it follows V2_ARCHITECTURE.md §5.4: inline neutral notes on relevant Detalj cards; global Pregled / Kalendar weather band only when one advisory applies to multiple visible current or near-term cards; far-future windows carry no weather notes.
- When weather is composed, it must not change window state, gate state, plan state, cue ordering, cue existence, effective open / close dates, Activity matching, monitoring state, archive visibility, or stage effects (per §5.5).

Produces:

- Plant detail per V2_UX_MODEL.md §4.7 current seasonal actions (snapshot-fed), §4.8 Na što obratiti pažnju (snapshot-fed), §4.9 Sezonski rizici (snapshot-fed where data exists), §4.11 Dnevnik ove voćke (plant-filtered Dnevnik per §3.4). At Slice 7: §4.10 monitoring section remains placeholder until Slice 8.
- Plan-change marker on Biljke list (§4.2) remains null placeholder; depends on plan diff (S9.B, post-usable).
- Detalj sezonske radnje per V2_UX_MODEL.md §5: identity (§5.3), date / relevance copy (§5.5), plant scope (§5.6), orchard-level evidence summary (§5.7), per-plant evidence (§5.8), gate-state (§5.9), purpose / beginner explanation (§5.10), authored catalog content boundary (§5.11), product / material category (§5.12), young-tree caveats (§5.13), irrigation / watering (§5.14), bird net / variety timing (§5.15), Dnevnik relationship (§5.17), capture entry (§5.18 — opens Slice 5).
- Optionally: advisory weather composition per the Slice 7 weather rule above.

Manual verification:

- Open a plant from Biljke → Plant detail shows current seasonal actions populated from snapshot, with stable orchard order.
- Tap a current seasonal action card → Detalj sezonske radnje opens with orchard-level evidence summary, per-plant evidence, gate state, and authored catalog explanation.
- Tap "Logiraj aktivnost" from Detalj → Slice 5 Activity capture opens with the action context preselected.
- Per-plant Dnevnik (§4.11) opens scoped to that plant.
- If weather is composed: inline note appears on Detalj cards for near-term actions; far-future cards carry no weather note; Pregled / Kalendar show a global weather band only when one advisory affects multiple current cards.
- If weather is omitted: Plant detail and Detalj still render correctly with no weather affordances and no missing-data placeholders. Defer note may be added to S11.D or a later session.
- Legacy `vocnjak_v4` VALUE byte-equal across session.
- Legacy weather widget continues to render in legacy DOM unchanged.

Stop conditions:

- Weather composition would refactor or mutate the legacy weather provider / cache / widget. Omit weather and defer.
- Weather composition would create a hidden V2-to-legacy runtime dependency. Omit weather and defer.
- Weather would change window / gate / plan state, ordering, or visibility (per §5.5).
- Plant detail would render derived state that snapshot does not produce.
- Detalj would author treatment / dose / brand recommendations.
- Plant detail or Detalj would attempt monitoring rendering.

Parallelization notes:

- Within Slice 7, Plant detail and Detalj may be designed in parallel but commit serially. If weather is composed, ship weather last within Slice 7 to avoid double-touching surfaces. Not parallelizable with Slice 8.

---

## 36. Slice 8 — Plant detail B2 preview, notes, then read-only Pregled/Kalendar visibility

Status: RUNTIME SLICE 8 CLOSED FOR THE APPROVED S8 SCOPE; STEPS 1–6, STEP 7, STEP 7B, STEP 7C, STEP 7D, AND STEP 7E RUNTIME COMPLETE — Plant detail read-only B2 preview, Plant detail free-standing note Observation capture + Dnevnik evidence, read-only Pregled/Kalendar B2 monitoring/risk visibility, bounded free-standing trap count capture, minimal free-standing stage diary `kind = "stage_obs"` capture, multi-plant free-standing `note` / `stage_obs` Observation capture, source-backed trap advisory display, bounded Plan Templates-backed visual scouting capture, source-backed read-only `Što sada` guidance for the existing Step 7c visual scouting sources, and bounded read-only `Što gledati` guidance parity for the 21 monitoring-only B2 rows are implemented in `index.html`. Step 7 numeric-band runtime covers sweet cherry, sour cherry, and plum rows 654/860/1596/1643. Step 7b context-only trap advisory runtime at `b1d840c` also covers apple row 337, olive row 2455, walnut row 2949, and walnut row 2977. Step 6 runtime is complete at `8c7d135 Implement multi-plant observation capture` for multi-plant free-standing `note` and `stage_obs` capture only. Step 7c docs lock was committed at `7e388c5 Lock Step 7c visual scouting capture model`; Step 7c runtime was committed at `588e413 Implement Step 7c visual scouting capture`; Step 7d source-backed scouting guidance runtime was committed at `5f64257 Add Step 7d scouting guidance`; Step 7e monitoring guidance parity runtime was committed at `36433aa Add Step 7e monitoring guidance parity`; tracker sync after Step 7e was committed at `c5521ac Sync trackers after Step 7e guidance parity`. Step 7 coverage is complete and no unresolved S8 blocker row remains.

Purpose:

Make V2 start consuming B2 monitoring/risk metadata safely without turning monitoring into a task manager, warning system, treatment recommender, or diagnosis engine. Slice 8 starts with a narrow Plant detail read-only preview, then later adds broader surfaces and writes only after the owner approves their semantics.

Approved decomposition:

1. First implementation — Plant detail read-only B2 monitoring/risk preview. **Complete.**
   - Consumes B2 metadata through an explicit S8 read path.
   - Shows plant-specific monitoring and risk-awareness context only on Plant detail.
   - Keeps monitoring items and risk-awareness items visually/textually separated.
   - As of `81c0fdb`, existing Plant detail B2 preview cards also render curated, source-backed, read-only `Što gledati` guidance bullets. This is Plant-detail-only display guidance: it renders no raw Plan Templates notes, adds no structured persistence, no `target_code` / `symptom_code`, no registry, no `Observation.scouting` / `Observation.symptom` writes, and changes no validators/import/export/schema/localStorage, Pregled/Kalendar, Dnevnik, S8/Step 6/Step 7 closure status, or treatment/pressure/urgency/compliance logic.
   - As of `36433aa Add Step 7e monitoring guidance parity`, B2 source-row guidance coverage is complete for read-only S8 purposes: 14 previously existing `Što gledati` rows, 21 Step 7e monitoring-only `Što gledati` rows, and 6 risk-awareness rows intentionally kept as seasonal context rather than checklist rows. Step 7e extended only `B2_READONLY_GUIDANCE_BY_SOURCE_ROW` with source-backed beginner visible-sign bullets from `V2_ORCHARD_PLAN_TEMPLATES.md`; it did not add schema, validators, payload fields, storage, routes, renderer changes, new source maps, `symptom_code`, `Observation.symptom`, broad registries, diagnosis, treatment/product/dose advice, pressure/urgency/compliance logic, trap/scouting capture changes, or Step 7d `Što sada` changes.
   - Does not add persistence, observation writes, Dnevnik observation rows, new routes, tap-through detail, CTAs, Pregled, Kalendar, or `Bez zapisa`.
   - Does not change `buildSeasonalSnapshot(...).monitoring`; it remains empty.
   - Keeps B2 metadata private, non-global, non-persisted, and separate from snapshot.
2. S8 Step 2: Plant detail free-standing note Observation capture + Dnevnik evidence. **Complete.**
   - Uses `kind = "note"` with `payload = { text: string }`.
   - Plant detail only.
   - Captures one free-standing one-plant note Observation with `program_id = null`.
   - Renders saved note Observations in Dnevnik under `Opažanja`, not `Praćenje`.
   - Comes before Pregled/Kalendar monitoring integration.
   - Does not add program attachment, structured observation kinds, observation correction, Pregled/Kalendar entry points, `Bez zapisa`, `Zadnji zapis`, or snapshot monitoring output.
3. S8 Step 3: read-only Pregled/Kalendar monitoring/risk visibility. **Complete.**
   - Uses the private B2 projection boundary plus private source-row date-window metadata from `V2_ORCHARD_PLAN_TEMPLATES.md`.
   - Pregled shows only current overlapping seasonal monitoring/risk context.
   - Kalendar shows B2 monitoring/risk date ranges under `Praćenje` for overlapped months.
   - Does not derive urgency, compliance, or scheduled-work pressure from B2 metadata.
   - Does not add capture, program attachment, structured observation kinds, observation correction, snapshot monitoring output, storage shape changes, validators, registries, global B2 exposure, diagnosis, or treatment advice.
4. S8 Step 4a runtime implementation — bounded free-standing trap capture. **Complete.**
   - Implements the minimal `kind = "trap"` path for Plant-detail-only, one-plant-only, free-standing factual count capture with `program_id = null`.
   - Uses only a closed, plan-template-backed `trap_capture_sources[]` map for validation/display.
   - Runtime validation/import paths support valid trap Observations for this bounded capture path, without adding Pregled/Kalendar changes, monitoring-program attachment, broad import/export behavior, or wider observation scope.
   - Does not add a broad target/pest registry, symptom registry, stage vocabulary, diagnosis target registry, pest ontology, or plan-template replacement.
   - Does not use B2 `projected_id` values as pest/target identifiers; `projected_id` remains traceability/display metadata only.
   - Approved first runtime source rows are `337`, `654`, `860`, `1596`, `1643`, `2455`, `2949`, and `2977`.
   - Row `516` pear remains out of first Step 4a as-is because it is split-required: trap Observation/advisory content must be separated from fruit-signal scouting/symptom Observation content by owner-approved split.
   - Rows `1064` nectarine and `1228` peach remain out of first Step 4a as-is because they are mixed optional-trap plus visual shoot/fruit-sign scouting/symptom Observation content.
   - Row `2004` quince is not a trap capture/advisory row in the current source; the source explicitly says pheromone trap use is not described until confirmed by sources.
5. S8 Step 5a — minimal stage diary observation. **Complete (`1fb4e34`).**
   - Documents and implements a minimal `kind = "stage_obs"` diary path for Plant-detail-only, one-plant-only, free-standing factual stage capture with `program_id = null` and user provenance.
   - Uses only a closed, owner-approved `stage_diary_vocabulary[]` of nine entries (`dormant`, `bud_swell`, `bloom_started`, `bloom_finished`, `fruit_set`, `color_change`, `ripening`, `harvest`, `leaf_fall`) documented in `V2_DOMAIN_MODEL.md §3.2.3a`.
   - Defines the write-time invariant, fail-closed validation, and export/import preservation shapes in `V2_ARCHITECTURE.md §1.11, §1.20, §1.21, §1.22, §1.23`.
   - Defines the Plant detail entry point `Dodaj fazu razvoja`, the save copy `Spremi fazu razvoja`, the save toast `Opažanje spremljeno.`, and the Dnevnik factual row shape `Faza razvoja — <label_hr>` in `V2_UX_MODEL.md §0.8, §3.13, §10.5a, §10.12`.
   - Does not introduce a phenology engine, BBCH, per-species phenology, plan recalculation, action unlocking/blocking, diagnosis, treatment advice, weather/stage automation, pressure/severity scoring, compliance UX, multi-plant stage capture, program-attached stage capture, observation correction for stage diary, or any broader stage registry.
   - Runtime implementation of Step 5a is complete in `index.html`; broader phenology-aware stage confirmation (§11) remains tracked in the Post-S8 Carry-forward Action Map below.
6. **S8 Step 6 — Multi-plant structured Observation capture.** **Runtime-complete for note/stage_obs (`8c7d135`).**
   - Implements multi-plant free-standing Observation capture from Plant detail for `kind = "note"` and `kind = "stage_obs"` only.
   - Note/stage forms allow selecting multiple plants. Runtime creates one Observation record per selected plant; multi-plant saves share `observation_group_id`; single-plant saves remain ungrouped.
   - Each record has one `plant_id`, a unique `observation_id`, shared observed date/time/payload within the group, and `program_id = null`.
   - Global Dnevnik groups multi-plant note/stage observations into one factual card with plant count/list. Plant detail history remains plant-scoped.
   - Backup/import validation accepts valid grouped note/stage observations and rejects invalid group usage, including group ids on unsupported kinds.
   - Does not implement multi-plant `trap`, `Observation.scouting`, `Observation.symptom`, `target_code`, `symptom_code`, registries, diagnosis, treatment recommendation, pressure/urgency/compliance logic, program attachment, raw Plan Templates rendering, new routes, or new surfaces.
7. **S8 Step 7 — Template runtime coverage gate + source-backed trap advisory bands + read-only observation status.** Coverage gate context recorded; Step 7 numeric-band runtime, Step 7b context-only trap advisory runtime, Step 7c bounded visual scouting runtime, Step 7d source-backed scouting guidance runtime, and Step 7e monitoring guidance parity runtime are pushed on main.
   - Historical first action before Step 7 runtime: Claude analysis/proposal produced a traceability table — the table was the gate.
   - Coverage gate maps `V2_ORCHARD_PLAN_TEMPLATES.md` → bounded source maps / docs → `index.html` runtime → visible UX surfaces. Required columns: Source row / entry, Species, Template content summary, S8 relevance, Expected V2 destination, Current runtime status, Evidence in `index.html` / docs, Gap, Priority, Required next action. Allowed "Current runtime status" values: `implemented`, `partially implemented`, `missing`, `intentionally not runtime`, `blocked by owner decision`. Allowed "Priority" values: `S8 blocker`, `S8 polish`, `remaining V2`, `post-V2`. Scope covers monitoring rows, trap rows, trap advisory / count interpretation bands, risk-awareness rows, scouting references, symptom references, stage / phenology cues relevant to `stage_obs`, and beginner guidance.
   - Step 7 must answer explicitly: which plan-template monitoring/observation items are already represented in Plant detail, in Pregled, in Kalendar, in Dnevnik / Observation capture; which are source-backed but not visible to the user yet; and which are missing and must block S8 closure.
   - Trap advisory display: extract bands only from `V2_ORCHARD_PLAN_TEMPLATES.md`, preserve existing trap count guidance as MUST-PRESERVE (cherry / sour cherry fly bands at 1–5, 5–15, 20–30+ with local-expert / agricultural-pharmacy advice; plum moth bands at 0–3 / 5–10 / 30+ weekly), do not invent global thresholds, respect per-species/per-pest/per-row wording, define safe UI wording for Plant detail and optionally Pregled/Kalendar read-only status.
   - Allowed examples: `Zadnji spremljeni zapis: 15.06.2026.` · `Ulov u zadnjih 7 dana: 3 — nizak/pozadinski ulov; nastavi pratiti.` · `Ulov u zadnjih 7 dana: 30+ — moguć jak pritisak; zatraži lokalni stručni savjet / savjet poljoprivredne apoteke.`
   - Hard boundary: no product names; no dosage; no automatic treatment recommendation; no `prskaj sada`; no due/overdue; no `kasniš`; no checkbox/task framing; no compliance UX; no diagnosis.
   - Closure result (Slice 8 closure gate): Step 7's coverage gate says `S8 can close`, every `S8 blocker` row has been resolved, and Runtime Slice 8 is closed for the approved S8 scope.
   - Runtime status: Step 7 numeric-band runtime is pushed on main at `905af41 Implement S8 Step 7 trap advisory display`, covering sweet cherry, sour cherry, and plum rows 654/860/1596/1643. Step 7b context-only trap advisory runtime is pushed on main at `b1d840c Add S8 Step 7b context-only trap advisory`, covering apple row 337, olive row 2455, walnut row 2949, and walnut row 2977. Step 7c bounded visual scouting runtime is pushed on main at `588e413 Implement Step 7c visual scouting capture` after docs lock at `7e388c5 Lock Step 7c visual scouting capture model`. Step 7d source-backed scouting guidance runtime is pushed on main at `5f64257 Add Step 7d scouting guidance`. Step 7e monitoring guidance parity runtime is pushed on main at `36433aa Add Step 7e monitoring guidance parity`.
8. **S8 Step 7b — Trap Advisory Source-Coverage Gap Map.** Recorded; documentation/tracking only.
   - Purpose: prevent silent loss or wrong-surface placement of plan-template monitoring guidance after the Step 7 runtime patches. Trap count is `Observation.kind = trap`; visual scouting is `Observation.kind = scouting`; visible problem signs are `Observation.kind = symptom`; phenology/stage records are `Observation.kind = stage_obs`. Scouting and symptom content are Observations, not Activities.
   - Historical first action: record the gap map in `CURRENT_STATE.md` under the Runtime Slice 8 tracker area, then have it owner-reviewed.
   - Coverage map species and required next actions:
     - `apple` — codling moth / jabučni savijač: owner-approved context-only advisory runtime implemented at `b1d840c` — source-backed `Sažetak izvora` from row 337 plus shared pest-agnostic `Orijentir za razgovor` block; no numeric bands. Step 7c visual fruit-sign capture is implemented at `588e413` via `scouting_source_337`. Required next action: source-backed numeric trap extension only if concrete numeric treatment thresholds emerge from owner-approved source review; no Step 7c runtime action remains.
     - `pear` — row 516 fruit moth / codling-like monitoring: Row 516 pear remains split-required for trap/advisory vs visual-sign semantics. Step 7c bounded visual fruit-sign capture is implemented at `588e413` via `scouting_source_516`; optional trap/advisory content remains separate. Required next action: no Step 7c runtime action remains; add any `Klopke`/advisory display only for the trap part after owner decision.
     - `quince` — row 2004 codling-like fruit scouting: Step 7c bounded visual fruit-sign capture is implemented at `588e413` via `scouting_source_2004`. Row 2004 quince is not a trap advisory candidate in the current source; the source explicitly says pheromone trap use is not described until confirmed by sources. Do not show `Klopke`, trap count, or invented thresholds for quince. Quince remains present in `V2_PLANT_CATALOG.md`; this is not catalog deferral. Required next action: no Step 7c runtime action remains.
     - `peach` — row 1228 Grapholita / fruit moth monitoring: Row 1228 peach remains mixed optional-trap plus visual shoot/fruit-sign content. Step 7c bounded visual shoot/fruit-sign capture is implemented at `588e413` via `scouting_source_1228`; optional trap content remains separate. Required next action: no Step 7c runtime action remains; decide separately whether an optional trap capture path is source-backed enough.
     - `nectarine` — row 1064 Grapholita / fruit moth monitoring: Row 1064 nectarine remains mixed optional-trap plus visual shoot/fruit-sign content. Step 7c bounded visual shoot/fruit-sign capture is implemented at `588e413` via `scouting_source_1064`; optional trap content remains separate. Required next action: no Step 7c runtime action remains; decide separately whether an optional trap capture path is source-backed enough.
     - `walnut` — walnut fly / codling monitoring (source rows 2949, 2977): owner-approved context-only advisory runtime implemented at `b1d840c` — source-backed `Sažetak izvora` from rows 2949 and 2977 plus shared pest-agnostic `Orijentir za razgovor` block; no numeric bands. Step 7c green-husk visual-sign capture is implemented at `588e413` for row 2949 via `scouting_source_2949`; row 2977 remains trap-advisory only. Required next action: source-backed numeric trap extension only if concrete numeric treatment thresholds emerge from owner-approved source review; no Step 7c runtime action remains.
     - `olive` — olive fly trap (source row 2455): owner-approved context-only advisory runtime implemented at `b1d840c` — source-backed `Sažetak izvora` from row 2455 plus shared pest-agnostic `Orijentir za razgovor` block; no numeric bands. Required next action: source-backed numeric trap extension only if concrete numeric treatment thresholds emerge from owner-approved source review.
     - `sweet_cherry` — cherry fly: numeric-band `Klopke` runtime implemented in `905af41`; fruit-signal / inspection-orientation copy is not a blocker. Required next action: leave runtime unchanged unless owner approves source-backed display polish.
     - `sour_cherry` — cherry fly: numeric-band `Klopke` runtime implemented in `905af41`; fruit-signal / inspection-orientation copy is not a blocker. Required next action: leave runtime unchanged unless owner approves source-backed display polish.
     - `plum` — plum moth spring/summer: numeric-band `Klopke` runtime implemented in `905af41` for the trap part. Step 7c bounded visual fruit-sign capture is implemented at `588e413` via `scouting_source_1596` and `scouting_source_1643`. Required next action: leave current trap runtime unchanged; no Step 7c runtime action remains.
   - Hard rules (binding for any future Step 7 expansion): do not invent trap thresholds; do not create generic global bands for treatment thresholds (the pest-agnostic `Orijentir za razgovor` count-orientation block is conversation orientation only, never a treatment threshold, pressure score, severity score, or spray recommendation, and must always end with the explicit `Ovo nije prag za tretman.` disclaimer); do not turn advisory text into treatment instruction (no product names, no dosage, no `prskaj sada`, no `tretiraj`, no diagnosis, no `kasniš`/`obavezno`/`due`/`overdue`/`missed`, no checkbox/task framing, no compliance UX); do not persist advisory `band` / `level` / `severity` / `pressure_score` / `advisory` in Observation payload; if a source lacks explicit trap/klopka/ulov content, do not classify it as `Klopke`; if a source describes visible signs such as pjege, ubodi, ulazne rupe, piljevina, smola, venuće, sušenje izboja, deformacije, trulež, or otpali plodovi, route that content to scouting/symptom Observation handling, not Activity; if a source contains both trap count and visible symptoms/signals, split the destination; do not flatten it into one action or one `Klopke` card. Apple codling moth context-only advisory runtime is implemented at `b1d840c`; a source-backed numeric trap extension remains possible only if concrete numeric treatment thresholds emerge from owner-approved source review.
   - After Step 7c, Step 7d, and Step 7e: this gap map is recorded; visual-sign rows approved for Step 7c now have a bounded source-row-backed `Observation.kind = "scouting"` destination; existing Step 7c visual scouting source rows now show source-backed read-only `Što sada` guidance in Plant detail cards, the open scouting form, and Dnevnik cards; monitoring-only B2 rows approved for Step 7e now have bounded read-only `Što gledati` guidance parity through `B2_READONLY_GUIDANCE_BY_SOURCE_ROW`; trap capture/advisory remains separate from scouting capture; any further optional trap numeric extension, broad/general scouting registry, or symptom registry requires owner decision.
   - Step 7b does not introduce new schema, new runtime, new fields, new vocabulary, new registry, or new UI surface. It is tracking-only.
8a. **S8 Step 7c — Bounded Plan Templates-backed visual scouting capture.** **Runtime-complete (`588e413`); docs lock complete (`7e388c5`).**
   - Bounded Plan Templates-backed visual scouting capture is complete as a closed source-row-backed adapter, not a broad registry.
   - Persisted shape is `kind = "scouting"`, `program_id = null`, `payload.finding = { mode: "presence", value: boolean }`, source-row-local `selected_sign_keys`, and optional trimmed `note`.
   - Plant detail CTA is `Zabilježi vizualni pregled`; presence results are `Nema vidljivih znakova` and `Ima vidljivih znakova`.
   - Multi-plant scouting capture is implemented. Dnevnik grouped rendering is implemented. Plant detail history remains plant-scoped.
   - Backup/import validation accepts valid scouting records and rejects invalid scouting payloads.
   - No persisted Croatian labels, no raw Plan Templates prose in payload, no `symptom_code`, no `Observation.symptom`, no diagnosis, no treatment recommendation, no product/dose advice, no pressure/urgency/compliance logic, and no trap-path merge.
   - Broad/general scouting registry and broad/general symptom registry are not implemented. Trap capture/advisory remains separate.
8b. **S8 Step 7d — Source-backed visual scouting guidance.** **Runtime-complete (`5f64257`).**
   - Adds source-backed read-only `Što sada` guidance for the existing Step 7c visual scouting sources only, using guidance already present in `V2_ORCHARD_PLAN_TEMPLATES.md` source rows.
   - Guidance appears on Plant detail visual scouting cards, inside the open scouting form after result selection, and in Dnevnik scouting cards.
   - Guidance is display-only and not persisted; Observation payload shape, validator/import/export shape, and backup behavior are unchanged.
   - No `symptom_code`, no `Observation.symptom`, no diagnosis, no treatment/product/dose advice, no pressure/urgency/compliance logic, no broad registry, and no trap capture/advisory change.
   - Visual-scouting `lokalni pragovi` wording was not used. Beginner next step is to photograph or bring fruit/leaf/shoot/sample and ask a local agricultural pharmacy, agronomist, or expert; the app does not decide treatment.
8c. **S8 Step 7e — Bounded `Što gledati` monitoring guidance parity.** **Runtime-complete (`36433aa`).**
   - Adds bounded read-only `Što gledati` guidance parity for the 21 monitoring-only B2 source rows already visible in Plant detail / Pregled / Kalendar.
   - Extends only `B2_READONLY_GUIDANCE_BY_SOURCE_ROW` with exactly 21 `b2ReadonlyGuidance('Što gledati', [...])` entries using source-backed beginner visible-sign bullets from `V2_ORCHARD_PLAN_TEMPLATES.md`.
   - Rows added: `446`, `484`, `747`, `918`, `1049`, `1213`, `1079`, `1243`, `1418`, `1443`, `1481`, `1694`, `1732`, `1757`, `1931`, `1969`, `2182`, `2227`, `2429`, `2440`, `2779`.
   - B2 source-row guidance coverage is now complete for read-only S8 purposes: 14 previously existing `Što gledati` rows, 21 Step 7e monitoring-only rows, and 6 risk-awareness rows intentionally seasonal context rather than checklist rows.
   - Risk-awareness rows `796`, `1375`, `1809`, `2132`, `2795`, and `3089` remain seasonal context, not checklist rows.
   - No schema, validators, payload fields, storage, routes, renderer changes, source maps, `symptom_code`, `Observation.symptom`, broad registries, diagnosis, treatment/product/dose advice, pressure/urgency/compliance logic, trap/scouting capture changes, or Step 7d `Što sada` changes.
9. **S8 Year-1–2 young-tree relevance addendum.** **Runtime-complete; UX-spec sanctioned.**
   - Runtime: for plants in year 1 or year 2 after planting, Pregled and the main Kalendar view structurally hide from primary surfaces the fruit-only seasonal actions, monitoring items, and risk-awareness items whose approved Plan Templates / source context state are not relevant to young, non-bearing trees (harvest, fruit thinning, bird-net, fruit-load checks, codling moth, fruit fly, fruit cracking, fruit drop, hazelnut weevil; owner-curated fruit-only source row set).
   - Year-3+ plants restore the normal plan; the exception does not apply.
   - Non-fruit-only content remains visible for year-1–2 plants: formative pruning, summer shoot care, watering and establishment context, leaf and shoot monitoring, aphid scouting, sharka, monilia, fire blight, frost awareness, peacock spot, bud mite, fertilization, winter inspection, winter protection.
   - In place of suppressed cards, Pregled / Kalendar / Plant detail render read-only "Mlade voćke" / "Mlada voćka" orientation cards drawn from authored Plan Template young-tree notes. Watering content here is info-only orientation, not Activity / compliance / done / skipped / missed / overdue.
   - Read-time display-relevance rule only: no persisted state, no schema change, no validator change, no backup / import / export change.
   - `V2_UX_MODEL.md` §2.16 and §5.13 were amended to sanction this narrow exception; the general no-automatic-hiding rule continues to bind every plant and every item outside the year-1–2 fruit-only frame.
   - Trap capture hiding for year-1–2 fruit-only rows is a Runtime Slice 8 simplification, not a permanent product rule. If the owner later wants sentinel-trap logging on young trees, the exception MUST be narrowed — keep primary monitoring / risk surfaces clean for year-1–2 plants, but restore the optional capture path — rather than generalising the hiding rule.
   - This addendum did not by itself close Slice 8. Step 7c runtime is complete for bounded Plan Templates-backed visual scouting capture only; Step 7d runtime is complete for source-backed read-only guidance on those existing Step 7c visual scouting sources only; Step 7e runtime is complete for bounded read-only `Što gledati` guidance parity on the 21 monitoring-only B2 rows. Runtime Slice 8 closure is recorded here for the approved S8 scope.
   - Status note: runtime is pushed on main at `9074e7b Implement S8 year-1-2 young-tree relevance`.

S8 closure / Post-S8 carry-forward:

Runtime Slice 8 is closed for the approved S8 scope. Steps 1, 2, 3, 4a, 5a, 6, 7, 7b, 7c, 7d, and 7e are runtime-complete. Step 7 numeric-band runtime is pushed on main at `905af41` for sweet cherry, sour cherry, and plum rows 654/860/1596/1643. Step 7b context-only trap advisory runtime is pushed on main at `b1d840c` for apple row 337, olive row 2455, walnut row 2949, and walnut row 2977. Step 7c bounded visual scouting runtime is pushed on main at `588e413` after the docs lock at `7e388c5`; Step 7d source-backed scouting guidance runtime is pushed on main at `5f64257`; Step 7e monitoring guidance parity runtime is pushed on main at `36433aa`; tracker sync after Step 7e is pushed on main at `c5521ac`. Step 7 coverage is complete, B2 read-only guidance coverage is complete for S8 purposes, and no unresolved S8 blocker row remains.

Closure evidence: B2 read-only source-row guidance coverage is complete for S8 purposes: 14 previously existing `Što gledati` rows, 21 Step 7e monitoring-only `Što gledati` rows, and 6 risk-awareness rows intentionally seasonal context rather than checklist rows. Trap rows are covered by numeric advisory for 654, 860, 1596, and 1643, and by context-only advisory for 337, 2455, 2949, and 2977. Step 7c covers approved visual scouting source rows 337, 516, 1064, 1228, 1596, 1643, 2004, 2949, 3160, and 3188. Structured capture remains bounded to `note`, `trap`, `stage_obs`, and scouting for the approved Step 7c rows only.

Post-S8 selection rule:

1. Post-V2 work after V2 Done is governed by §0. Do not select ad hoc from the Post-S8 Carry-forward Action Map; carry-forward items remain future owner-decision backlog unless the owner explicitly opens post-V2 follow-up planning.
2. Post-S8 Observation correction is complete for the approved scope: docs lock at `1ef2009`, validator/model runtime at `60cc32c`, and UI/display runtime at `6d5b19d`.
3. Broad/general durable scouting target identifiers still require owner approval before `Observation.scouting` writes outside the bounded Step 7c source-row-backed adapter.
4. Multi-plant grouping for free-standing `note` / `stage_obs` Observations is complete in Step 6; bounded multi-plant visual scouting capture is complete in Step 7c; source-backed display-only guidance for those visual scouting rows is complete in Step 7d; bounded read-only `Što gledati` parity for monitoring-only B2 rows is complete in Step 7e; future structured scouting/symptom Observation grouping beyond Step 7c still requires owner approval.
5. Approve symptom identifiers before `Observation.symptom` writes.

This sequence references `V2_DOMAIN_MODEL.md §0.2b` for projection dispositions, `V2_ARCHITECTURE.md §6.5c` for guidance-vs-persistence architecture, and `V2_UX_MODEL.md §0.9` for user-facing guidance behavior. The roadmap records order only; it does not redefine the model.

Post-S8 Carry-forward Action Map:

Carried forward means tracked for a future owner-approved session, not abandoned. Items below do not reopen or block Runtime Slice 8; they queue up for owner-approved sessions after S8 closure. Agents must not use carry-forward wording to skip owner-approved work, remove plan-template guidance, expand scope without explicit owner approval, or duplicate concepts that already exist in `archive/future/STORE_READY_ROADMAP_V1.md` or `archive/v1/AI_STRATEGY_V1.md`.

Completed after S8 closure:

- Observation correction: complete for the approved Post-S8 scope. It reuses the additive Correction model for supported Observation kinds only (`note`, `trap`, `stage_obs`, `scouting`); original Observations remain immutable; Dnevnik and Plant detail render effective Observation values with the neutral `ispravljeno` marker; Plant detail filters by effective `plant_id`; Dnevnik sorts Observations by effective `observed_on`, then original `recorded_at`, then id; grouped Strategy A is implemented for note/stage_obs/scouting shared payload correction only. Grouped trap correction, grouped date/plant correction, group splitting, and `correction_group_id` are not implemented.

Remaining owner-decision queue:

MEDIUM:

- Broader scouting capture beyond the bounded Step 7c source rows — return condition: after owner-approved bounded scouting source-map / target identifier semantics. No broad pest registry. No diagnosis.
- Symptom capture / `Observation.symptom` — return condition: after owner-approved symptom source-map / registry and UX copy that avoids diagnosis. No "ovo je bolest X" wording.
- Owner-approved symptom source map / registry before any `symptom_code` — return condition: explicit owner approval of symptom identifiers and UX copy that avoids diagnosis.
- Program-attached observations — return condition: after free-standing capture is stable and owner approves program attachment semantics. Free-standing `note` / `trap` / `stage_obs` remain the current shape.
- Broader phenology-aware stage confirmation beyond the Step 5a diary vocabulary (§11) — return condition: after owner-approved broader phenology vocabulary / plan-effect semantics / BBCH decision. Beyond the Step 5a nine-entry `stage_diary_vocabulary[]`. This does not defer approved source-backed plant-state / weather / safety execution-condition text already present in Plan Templates action-window notes; those notes remain read-only seasonal action guidance.

LOW / polish:

- Orphan-code fallback display — return condition: low-risk polish pass. Show `Nepoznata faza razvoja` instead of raw `stage_code` if a historical code no longer resolves; analogous fallback for trap codes. No schema change.
- Deferred outside-period disclosure / `V2_UX_MODEL.md §16.7` — return condition: later owner-approved polish if still tracked.
- `Bez zapisa` / `Zadnji zapis` — return condition: after owner-approved non-compliance display rule.
- Pregled/Kalendar capture/status beyond Step 7 — return condition: after Plant detail capture/history is accepted and owner approves non-task, non-compliance display semantics not already covered by Step 7.

Post-V2 completion boundary (not next after S8):

- AI-assisted image analysis (paid subscription) — see `V2_FUTURE_ROADMAP.md §4.11`. Concept already exists historically in `archive/v1/AI_STRATEGY_V1.md` and is connected to the existing subscription / paywall / multilingual concept references in `archive/future/STORE_READY_ROADMAP_V1.md` (Sessions 17, 18, 22, 23) per `CLAUDE.md` archive policy (historical reference only, not binding). Required wording: "AI-assisted image analysis belongs to a future paid/subscription capability discussion and must be reconciled with the existing store-readiness subscription/paywall/multilingual concept references before promotion into V2 core." This is post-V2 completion boundary, not next after S8. Hard boundaries: no AI diagnosis; no AI treatment instruction; no pesticide/product recommendation; no AI-authored action recommendation; no implementation now.
- Any paid/subscription AI features — future paid/subscription capability discussion only; no implementation now.
- Any diagnosis/treatment recommendation system — only if separately owner-approved in future with strict guardrails. No AI diagnosis, disease confirmation, pest confirmation, product recommendation, dose advice, `prskaj`, or `tretiraj` now.

Allowed first-step touch points:

- `index.html` only when implementation begins, inside the V2 region and limited to Plant detail rendering plus the explicit S8 B2 read path.
- Docs/trackers that record the approved owner scope.

Must not touch:

- Pregled or Kalendar in the first implementation step.
- Observation writes, Dnevnik observation rows, Activity capture, correction, archive, or persistence in the first implementation step.
- New routes, tap-through detail, or CTAs such as `Dodaj opažanje` in the first implementation step.
- `buildSeasonalSnapshot(...).monitoring`; it remains empty.
- Observation correction, archive (Slice 9).
- Treatment / diagnosis / dose / brand recommendation (forbidden per §10.10 + §0).
- Plan upgrade review (post-usable).
- Za pregledati cues (post-usable).
- Legacy keys.
- Legacy weather, monitoring, or sync code (read-only).

Depends on:

- Slice 7 (Plant detail §4.10 monitoring section ready for read-only fill; Plant detail already has plant context).
- Slice 6 (Pregled/Kalendar/snapshot exist but are explicitly out of the first S8 implementation).
- B2 metadata-only projection boundary for stable-id source-map grouping; minimal generic MVP stage vocabulary remains a Slice 8 owner decision or stage-write deferral/restriction.

Produces:

- First step: a calm read-only Plant detail preview of B2 monitoring/risk metadata is implemented.
- First step: separated Monitoring and Risk-awareness sections if both are shown on Plant detail are implemented.
- First step: no record-status copy such as `Bez zapisa` because observation capture does not exist yet.
- B2 projection boundary remains unchanged: B2 metadata-only implementation resolves the owner-accepted 41-entry source working set into 36 projected B2 items with 5 merge groups. This is the current resolved projection from the source map, not immutable final catalog truth. Composite split/combine decisions stay in this current resolved projection and must preserve source-map traceability.
- Rendering separation per V2_UX_MODEL.md §15 + V2_ARCHITECTURE.md §4.12–§4.13: `monitoring_track` stable ids feed štetnici/bolesti monitoring surfaces; `risk_awareness_track` stable ids feed promatranje/rizik/stanje surfaces. This is audit/projection metadata only, not new canonical runtime schema, not a new user data model, and not a registry. Runtime must not infer the track from Croatian label pattern-matching.
- First-step examples: `Praćenje šljivinog savijača — proljetni let` and `Sezonska napomena: postoji rizik pucanja plodova nakon jače kiše`.
- S8 Step 2 runtime: Plant detail `kind = "note"` capture + Dnevnik evidence is implemented, with no program attachment and no structured observation registry dependency.
- S8 Step 3 runtime: Pregled §1.8 Praćenje plus Kalendar §2.11 monitoring / §2.12 risk-awareness visibility are implemented read-only, without capture or record-status semantics.
- S8 Step 4a runtime: bounded `trap_capture_sources[]` trap count capture is implemented as Plant-detail-only, one-plant-only, free-standing `kind = "trap"` Observations with `program_id = null`, factual Dnevnik / plant-history evidence, and validator/import-path support for valid trap records.
- Later only: program-attached observation capture, broad/general scouting or symptom capture beyond the bounded Step 7c adapter, monitoring-context record displays, and broader phenology-aware stage confirmation.
- Stage vocabulary rule: B2 did not add `stage_vocabulary[]`. S8 Step 5a documentation introduces a bounded `stage_diary_vocabulary[]` for the diary path only; broader phenology-aware stage confirmation stays deferred until the owner approves a broader vocabulary or an explicit stage-write deferral/restriction.
- S8 Step 5a runtime: bounded `stage_diary_vocabulary[]` and the free-standing diary `kind = "stage_obs"` capture path are implemented as Plant-detail-only, one-plant-only, free-standing diary capture with `program_id = null`.

Manual verification:

- First step: open Plant detail for plants with relevant B2 metadata → read-only monitoring/risk preview appears only there, with monitoring and risk-awareness separated.
- First step: Pregled and Kalendar show no monitoring/risk content.
- First step: no `Dodaj opažanje`, no `Dodaj zapis o praćenju`, no tap-through detail, and no new route.
- First step: no `Bez zapisa` copy because observation capture is not available yet.
- First step: `buildSeasonalSnapshot(...).monitoring` remains empty and no snapshot output is persisted or exposed globally.
- Step 2: Plant detail `Dodaj opažanje` saves a trimmed `payload.text` note Observation, defaults date to today, rejects empty / >1000-char / future-date input, and stores `program_id = null` with no `observation_group_id`.
- Step 2: saved note Observations appear under `Opažanja` in Dnevnik and in the plant-specific history preview.
- Step 2: Activity capture, Activity correction, and Activity Dnevnik rows still work.
- Step 2: Pregled and Kalendar still show no note Observation entry point or `Opažanja` UI.
- Step 4a runtime verification: Plant detail saves only one-plant free-standing trap Observations from approved trap source rows, rejects unknown source/target combinations, negative or non-integer counts, future dates, non-user provenance, and any `program_id` other than `null`, and renders factual trap evidence under `Opažanja` only.
- Monitoring/risk copy remains neutral, factual, and non-pressuring.
- Legacy `vocnjak_v4` VALUE byte-equal across session.

Stop conditions:

- First implementation touches Pregled or Kalendar.
- First implementation adds observation writes, Dnevnik observation rows, routes, CTAs, or `Bez zapisa`.
- First implementation changes snapshot monitoring output or persists/exposes B2 metadata globally.
- S8 Step 2 implementation uses `trap`, `scouting`, `symptom`, or `stage_obs` instead of the approved `kind = "note"` shape.
- S8 Step 2 implementation attaches notes to monitoring programs, creates registries/vocabularies, adds Pregled/Kalendar monitoring/risk UI, adds `Bez zapisa` / `Zadnji zapis`, or changes snapshot output.
- Observation capture would derive stale / overdue state from missing observations.
- Stage missing would generate a cue or task.
- Monitoring would auto-recommend treatment, dose, brand, or product.
- Multi-plant single observation would be allowed.
- Slice 8 would require Observation correction logic (defer to Slice 9).
- Slice 8 would require plan upgrade review or Za pregledati cues.

Parallelization notes:

- Do not parallelize the first Slice 8 implementation across Pregled/Kalendar/Plant detail. Land Plant detail read-only preview first, then review before approving later S8 steps.

---

## 37. Completed lifecycle scope — archive baseline after Observation correction

Status:

- Observation correction is complete for the approved Post-S8 scope (`1ef2009`, `60cc32c`, `6d5b19d`) and must not be treated as open Slice 9 work.
- A2 default V2 is complete.
- A1 archive/lifecycle baseline runtime is complete. Plan Templates runtime fidelity / content parity runtime patch is complete at `c9645c4 Implement Plan Templates runtime parity fixes`. UX/design polish through UXR.7, Young-Tree Formative Completion at `7bf61c0`, and V2 Done audit are complete; V2 is marked Done.

Purpose:

Implement non-destructive plant archive behavior after the default V2 cutover. Archive lets the owner remove a plant from the active orchard without losing Plant identity or history.

Completed A1 touch points:

- `index.html` only, inside the V2 region.
- Plant detail archive entry and confirmation UI.
- Plant `archived_at` / `archive_reason` / `archive_note` write path using the documented archive fields.
- Validation/import/export support for archive fields.
- Active-scope filtering in Biljke, Pregled, Kalendar, Plant detail seasonal context, monitoring/risk context, and active orchard aggregates.
- Dnevnik/history rendering for archived plants.
- Historical Activity/Observation correction remains allowed for records tied to archived plants.

Must not touch:

- Default-route behavior unless the owner explicitly combines A1 with a later routing patch. Current recommended order keeps A2 separate and first.
- Plan upgrade review or Za pregledati cues.
- Legacy delete paths.
- Legacy keys or legacy plant-archive UX.
- Destructive delete behavior.
- Restore/unarchive/admin recovery unless the owner explicitly opens that as a separate decision.
- Replacement-tree logic, graft/replant model, replacement Plant reference, deleted flag, status/lifecycle enum, or unarchive field.

Completion dependencies:

- A2 default V2 / `#v2` cutover landed first.
- S11.C1 Slice 4 (stable Plant identity).
- S8/S9 documented archive storage and active-scope rules (`V2_UX_MODEL.md §14`, `V2_ARCHITECTURE.md §1.15` and §4.10).
- Current completed Observation correction for supported Observation kinds, only as existing history behavior; A1 must not reopen Observation correction.

Produced:

- Archive / lifecycle baseline per `V2_UX_MODEL.md §14`, `V2_UX_MODEL.md §4.14/§4.16`, and `V2_ARCHITECTURE.md §1.15/§4.10`: `archived_at` plus optional `archive_reason` / `archive_note` on Plant.
- Archived plants are excluded from active orchard scope from the archive date forward.
- Archived plant history remains queryable in Dnevnik/history and archived Plant routes.
- New active Activity/Observation capture is not offered for archived Plants.
- Historical Activity/Observation correction remains allowed for records tied to archived Plants.
- Neutral archived labeling such as `(arhivirana)` where the UX model defines it.
- No delete and no destructive rewrite of Plant, Activity, Observation, Correction, catalog, Plan instance, Plan overlay, or Dnevnik history.

Manual verification completed for the A1 session:

- Archive a plant -> archive fields are written; no Plant record is removed.
- Archived plant disappears from active Biljke/Pregled/Kalendar/current seasonal scope after the archive date.
- Archived plant history remains visible in Dnevnik/history with neutral archived labeling.
- Export/import validator round-trip preserves archive fields exactly.
- Malformed archive fields fail closed: invalid/future `archived_at`, unknown `archive_reason`, reason/note without `archived_at`, blank/untrimmed/too-long `archive_note`, and unexpected archive-like fields.
- New active Activity/Observation capture is not offered for the archived plant.
- Activity/Observation correction still works for historical records tied to the archived plant.
- Protected legacy keys remain outside the A1 write path; A1 writes only `vocnjak_v2`.
- No restore/unarchive UI appears.

Stop conditions:

- Archive would delete records.
- Archive would silently rewrite or hide history.
- Archive would introduce destructive delete copy or UI.
- A1 would implement restore/unarchive without explicit owner approval.
- A1 would touch plan upgrade review, Za pregledati cues, default-route behavior, legacy delete paths, or protected legacy keys.
- A1 would require a new persistent storage key beyond `vocnjak_v2`.

Parallelization notes:

- A1 is a single owner-approved lifecycle baseline session. Do not pair it with default-route work, UX polish, or future parked items unless the owner explicitly changes the sequence.

---

## 38. C2 default-readiness boundary

S11.C2 itself does not flip the default. The actual "V2 becomes default" decision belongs to S11.D milestone gating (§17 V2 activation strategy + S11.D verification gates).

Current status after S8 + Observation correction:

- The recommended default-readiness prerequisite (Slice 8 complete and approved) is satisfied for the approved S8 scope.
- Post-S8 Observation correction is also complete.
- Therefore default V2 / removing the `#v2` gate is eligible to be opened as A2, but it is not already authorized. A2 requires an explicit owner-approved analysis and implementation session.
- A2 must verify normal URL behavior, legacy fallback/old-app access, protected legacy data/key preservation, V2 export/import posture, PWA start URL behavior, service-worker/cache implications, and deployment/hard-refresh behavior.

Recommended minimum for default:

- Slice 8 complete and approved.
- Rationale: Slice 5 + Slice 6 + Slice 7 cover Activity, snapshot, Pregled, Kalendar, Plant detail, Detalj, and (optionally) advisory weather. Slice 8 adds monitoring, stage confirmation, and observation capture. Without Slice 8, owners running formal monitoring programs must remain in the legacy app; this is incomplete relative to V2 product identity per V2_UX_MODEL.md §0 + PRODUCT_VISION.md.

Documented owner-speed alternative:

- Slice 7 complete and approved, with monitoring deferred to a post-default session.
- Rationale: covers ~90% of daily orchard work for casual growers (capture + correction + visibility + per-plant context + per-action context). Cost: monitoring users keep using the legacy app until Slice 8 lands.

Both options preserve:

- Activity correction available from Slice 5 (first-day mistakes are recoverable).
- Export / import safety from S11.C1 Slice 3 (data is portable from day 1 of capture).
- Legacy app remains available behind an "Old app" entry per §17.
- Legacy data and keys remain untouched.

S11.D ratifies the choice and defines:

- The actual default-flip toggle behavior.
- The persistent V2-mode setting (S11.C2 keeps V2 entry ephemeral per S11.C1 §23).
- Service worker `CACHE_NAME` bump if hard-reload becomes impractical for owners during testing.
- The post-Slice-9 / public-native release gate via §18 native review.

---

## 39. C2 post-usable deferrals

S11.C2 does not include the following surfaces. Each is named here so it is clear they are deferred and not forgotten.

- **Plan upgrade review** (V2_UX_MODEL.md §9 + V2_ARCHITECTURE.md §2 / §3 / §2.15 handoff). Depends on a second `catalog_version` existing and on S9.B upgrade diff + overlay reconciliation. Defer to a later session that opens catalog versioning.
- **Za pregledati cues** (V2_UX_MODEL.md §12 + V2_ARCHITECTURE.md §4.14 cue projection). Depends on mature monitoring / stage state plus cue projection. Defer to post-default session.
- **Persistent V2 mode toggle / default-flip** (V2_EXECUTION_ROADMAP.md §17 V2 activation strategy). Belongs to S11.D milestone gating.
- **Service worker `CACHE_NAME` bump** (`sw.js`). Defer to S11.D milestone decision; do not bump inside any S11.C2 slice. If hard-reload becomes impractical for owners during testing, escalate to S11.D.
- **Settings / Postavke split** (S11.B §19 deferral). Defer until V2 settings surface accumulates enough items.
- **Supabase backup redesign**, **iCal sync redesign**, **GitHub sync redesign**, **AES-GCM secure storage redesign** (S11.B §19 deferrals). Each is a future separate session.
- **Native storage engine selection** (S11.B §18 native review). Future separate session.
- **Legacy data cleanup / legacy retirement** (S11.B §19 deferral). Future separate session, owner-explicit.
- **Catalog content edits** (forbidden per S11.A §3 + S11.C1 §25 / §30). Catalog gaps discovered during S11.C2 implementation must route to a separate S5.x session.
- **Fig and citrus catalog expansion** (S11.B §19 + S4 owner decisions). Future separate session.
- **Regional / climate offsets, AI / photo recognition, push notifications** (S11.B §19). Future.

If any S11.C2 slice would require one of these, STOP and escalate. Do not implement in S11.C2.

---

## 40. Handoff to S11.D

S11.D owns:

- verification gates across S11.C1 and S11.C2 slices
- usable / default milestone definitions, including the actual default-flip gate (per §38)
- stop conditions consolidated across S11.A / S11.B / S11.C1 / S11.C2
- tracker sync timing (`CLAUDE.md` and `CURRENT_STATE.md` sync after S11.D approval, per §10)
- service worker `CACHE_NAME` bump decision if testing-window reload friction warrants it
- public / native release gate via §18 native storage review
- authorization for any post-usable parallelization policy
- handoff to post-S11 sessions for plan upgrade review, Za pregledati cues, Settings split, native storage selection, legacy cleanup, and other §39 deferrals

S11.D is authorized to begin only after S11.C2 is committed to `main` and the owner explicitly opens S11.D.

---

## 41. S11.D purpose

S11.D closes the V2 execution roadmap. S11.D defines:

- universal verification gates that bind every runtime slice
- the manual test matrix expressed as slice-specific verification gates for runtime Slice 0–9
- usable / default / public-native milestone boundaries
- consolidated runtime stop conditions
- parallel implementation policy
- final S11 closure checklist
- runtime handoff to Slice 0

S11.D is documentation-only. No runtime implementation starts in S11.D.

S11.D edits only `V2_EXECUTION_ROADMAP.md` and respects the legacy non-disturbance rule per §28: legacy key VALUES remain unchanged across V2 sessions; legacy boot may rewrite `vocnjak_v4` with identical content on every page load and that is allowed legacy behavior.

---

## 42. Universal verification gates

These gates apply to every runtime slice (S11.C1 Slices 0–4 and S11.C2 Slices 5–9).

Process gates:

- branch is `main` before commit and push
- working tree clean before edits
- targeted `git add` only — never bulk `add .` or `add -A`
- `git diff --check` clean before commit
- never stage `.DS_Store`
- never stage `.claude` or `.claude/worktrees`
- never stage unexpected files

Runtime gates:

- app loads with no console errors
- legacy app still opens and behaves identically to before the V2 session
- PWA still loads offline
- iPhone Safari / Add to Home Screen smoke test passes
- V2 shell is reachable through the approved owner-only V2 entry per §17 + §23
- legacy key VALUES are unchanged across the V2 session (per §28)
- no V2 code path reads or writes legacy keys as V2 data (per §14 + §22)
- `vocnjak_v2` is the only V2 runtime store key (per §14)
- where applicable: export / import round-trip preserves all records (per §26)
- where applicable: invalid import fails closed; original `vocnjak_v2` is unchanged (per §26)
- where applicable: same persisted facts + same evaluation date produce the same displayed snapshot (per §34 + §4.16)
- weather absence does not break V2 (per §35)

Important wording:

- Verification checks legacy key VALUES, not whether legacy boot touched the keys.
- Legacy boot may rewrite `vocnjak_v4` with identical content on every page load; this is allowed legacy behavior and must not be suppressed by V2.

---

## 43. Slice-specific verification gates

The per-slice "Manual verification" blocks in §23–§37 remain authoritative. The gates below are a quick-reference summary and add the minimum-required checks per slice.

Slice 0 — V2 shell:

- V2 shell appears via the approved owner-only entry
- `vocnjak_v2` is not yet created
- legacy app unchanged; legacy key VALUES unchanged
- no new persistent storage key for the V2 mode toggle

Slice 1 — Store boot:

- empty `vocnjak_v2` is created with the §1.3 root shape
- corrupt `vocnjak_v2` fails safely; no silent overwrite
- no legacy key VALUE changed across the session
- the store boundary is the only path to `vocnjak_v2`

Slice 2 — Catalog seed:

- exactly one retained catalog baseline exists under `catalogs[catalog_version]`
- the active catalog pointer in `meta` is set
- no catalog or template doc was edited
- only the foundation-scoped subset is seeded (per §25 catalog seed scope rule)

Slice 3 — Export / import safety:

- V2 export / import round-trip preserves all collections
- invalid import is rejected and original `vocnjak_v2` is unchanged
- a raw legacy export file is not accepted as a V2 import (per §6.9 source classification)
- legacy `vocnjak_v4` export / import code in `index.html` continues to work

Slice 4 — Plant foundation:

- owner can add plants; `plant_id` is stable and immutable from first write
- `nije upisano` vs `ne znam` distinction preserved per §4.6
- export / import preserves all plants with the same `plant_id` values
- the plan-change marker on Biljke rows renders as a null placeholder

Slice 5 — Activity capture, Activity-only Dnevnik, and Activity correction:

- completed at `8bc630a Implement Runtime Slice 5 activity capture`
- multi-plant Activity creates N per-plant records sharing one `activity_group_id`
- future-dated `occurred_on` is rejected at write time
- Activity correction is additive; original Activity bytes are unchanged
- Dnevnik renders the corrected version with the §3.9 correction marker
- validator/import/export support for Activity and Correction records exists; full import/export UI round-trip was not manually verified in Slice 5
- `V2_UX_MODEL.md` §16.7 outside-period disclosure remains deferred as non-blocking Slice 6-adjacent polish

Slice 6 — Snapshot, Pregled, Kalendar:

- completed at `99e76c8 Implement Runtime Slice 6 snapshot and calendar surfaces`
- `#v2/pregled` and `#v2/kalendar` render from a private read-time snapshot
- the snapshot is derived; no derived state is stored back to `vocnjak_v2`
- no `window.v2Snapshot` or new global snapshot/debug API was added
- Pregled renders without task / compliance / progress framing
- Kalendar renders without urgency reordering or hidden cards
- Kalendar renders `Sezonske radnje` only in Slice 6; visible Monitoring/Praćenje is deferred to Slice 8
- `activity_group_id` is not used as derivation authority
- `V2_UX_MODEL.md` §16.7 outside-period disclosure remains deferred as Slice-6-adjacent polish or later owner-approved work

Pre-Slice-7 Action Window Notes Projection prerequisite (B1 + B1.1):

- B1 completed at `ad9a113 Project action-window notes into canonical catalog`
- B1.1 completed at `a1b5307 Clean B1 action-window notes boundary`
- both commits changed `index.html` only
- canonical `action_window_definitions[].notes` is optional and validated as non-empty string when present
- canonical `spray_safety_notes` constant array is attached to `catalog_v1` and validated to equal canonical
- canonical drift on the new fields fails closed via `compareCanonicalCatalogNode`
- pre-B1 stores are deterministically refreshable via `isB1RefreshableCatalogV1` / `normalizeStoreCatalogForCurrentCanonical` only when the stored catalog matches canonical minus the B1 projection and contains no own `notes` or `spray_safety_notes`
- canonical `window_def_id`, `label`, `action_type`, `anchor`, and `tolerance` values are unchanged from before B1
- B1.1 only edited the content of `STANDARD_ACTION_WINDOW_NOTES`, `SPECIES_ACTION_WINDOW_NOTES`, and `HARVEST_ACTION_WINDOW_NOTES`; validators / canonical refresh / `spray_safety_notes` structure / `actionWindow()` / `buildActionWindowDefinitions` / `CATALOG_V1` structure / V2 export / import handlers / Activity / Correction validators are byte-identical between B1 and B1.1
- B1.1 removed monitoring decision prose, awareness/risk prose, pathogen / symptom registry prose, frost-diagnostic prose, and history-coaching prose from the projected note text
- B1.1 preserved practical seasonal-action guidance: fenofaza / timing cues, safe-execution wording, oil/copper spacing, "ne duplicirati" / "ne automatski" guidance, product-category / label wording, young-tree caveats, thinning / harvest / bird-net practical guidance, the spray-safety constant, and the four owner-approved direct frost-action lines (`trunk_whitewash` purpose, `oil.dormant` "Ne primjenjivati ako je najavljen mraz", olive young-tree agrotekstil ≤−7 °C, pomegranate winter-wrap, quince "Brati prije jačeg mraza" harvest deadline)
- no `window.v2Snapshot` or new global was introduced
- no new `innerHTML`, `outerHTML`, `document.write`, `eval`, or `new Function(` calls were introduced
- Slice 6 surfaces (Pregled / Kalendar / seasonal-action placeholder) are unchanged
- Activity and Correction schemas / validators are unchanged
- B2 stable-id source-map projection grouping is complete as metadata only and was NOT implemented by B1 or B1.1. Runtime Slice 8 Step 1 added Plant detail read-only B2 monitoring/risk preview only; Runtime Slice 8 Step 2 added Plant detail free-standing note Observation capture and Dnevnik / plant-history `Opažanja` rows only; Runtime Slice 8 Step 3 added read-only Pregled/Kalendar B2 monitoring/risk visibility only. `monitoring_programs[]`, minimal generic `stage_vocabulary[]` or stage-write deferral/restriction, structured/program-attached observation capture, and broader monitoring/risk runtime integration remain Post-S8 / owner-approved future work. The current B2 projection does not add `awareness_definitions[]`, `target_registry[]`, or `symptom_registry[]`.
- full browser runtime verification, Cloudflare deployment verification, full import/export UI round-trip, and direct protected legacy localStorage byte-dump comparison were not performed for the B1 or B1.1 commits

Slice 7 — Plant detail, Detalj, optional weather:

- Plant detail and Detalj sezonske radnje render correctly from snapshot
- weather is optional; its absence does not break Plant detail or Detalj
- weather, when present, never gates, reorders, blocks, or reschedules
- the legacy weather widget continues to render in legacy DOM unchanged

Slice 8 — Plant detail B2 preview first, then observations/stage:

- Step 1 complete: Plant detail read-only B2 monitoring/risk preview, with monitoring and risk-awareness separated if both appear on Plant detail
- Step 2 complete: Plant detail free-standing note Observation capture + Dnevnik evidence under `Opažanja`
- Step 3 complete: read-only Pregled/Kalendar B2 monitoring/risk visibility under neutral seasonal copy
- Step 4a runtime complete: bounded free-standing trap count capture uses only approved trap source rows `337`, `654`, `860`, `1596`, `1643`, `2455`, `2949`, and `2977`
- Step 5a runtime complete: bounded free-standing `kind = "stage_obs"` diary capture uses only the approved `stage_diary_vocabulary[]`
- Step 6 runtime complete: multi-plant free-standing `note` / `stage_obs` capture with `observation_group_id`
- Step 7 / Step 7b runtime complete: numeric advisory covers 654, 860, 1596, and 1643; context-only advisory covers 337, 2455, 2949, and 2977
- Step 7c runtime complete: bounded Plan Templates-backed visual scouting capture uses existing Step 7c source rows only
- Step 7d runtime complete: source-backed read-only `Što sada` guidance appears on visual scouting cards, in the open scouting form, and in Dnevnik, without persisted payload/schema/validator/import/export changes
- Step 7e runtime complete: bounded read-only `Što gledati` parity covers the 21 monitoring-only B2 rows by extending only `B2_READONLY_GUIDANCE_BY_SOURCE_ROW`
- Runtime Slice 8 is closed for the approved S8 scope; Step 7 coverage is complete and no unresolved S8 blocker row remains
- Post-S8 Observation correction is complete: docs lock at `1ef2009`, validator/model runtime at `60cc32c`, and UI/display runtime at `6d5b19d`
- Post-S8 / owner-approved future work remains: broader scouting capture beyond Step 7c; symptom capture / `Observation.symptom`; owner-approved symptom source map / registry before any `symptom_code`; program-attached observations; broader phenology-aware stage confirmation beyond Step 5a diary capture; low-risk fallback/display polish; AI-assisted image analysis or paid/subscription AI; and any diagnosis/treatment recommendation system only if separately owner-approved with strict guardrails
- V2 Done path in §0 is complete; do not select from remaining Post-S8 carry-forward unless the owner explicitly opens post-V2 follow-up planning

Slice 9 — Observation correction, archive / lifecycle:

- Observation correction is additive; original Observation bytes are unchanged
- archive sets a flag; no Plant record is physically removed (per §14)
- archived plant history remains queryable in Dnevnik archived view per §3.12
- archive-state filtering applies in active scope per §4.10

---

## 44. Usable V2 milestone

Definition:

- Usable V2 for owner field testing = Slices 0 through 7 complete and verified.

At the Usable milestone, the owner can:

- enter plants
- export and import a V2 backup
- log real activities, including multi-plant capture
- review activities in Dnevnik and correct mistakes via additive Correction records
- see Pregled with current orchard reality
- see Kalendar with seasonal action windows
- open Plant detail with live current-action and history sections
- open Detalj sezonske radnje with per-plant evidence and beginner explanation
- see advisory weather only if available without legacy refactor (per §35 Slice 7 weather rule)

Caveat:

- Monitoring, stage confirmation, and Observation capture may still be incomplete at the Usable milestone. Owners running formal monitoring programs continue to use the legacy app until the Default milestone.

Usable does not imply default. The legacy app remains the default mode at Usable. The default flip is owner-approved and gated by §45.

---

## 45. Default V2 milestone

Recommended definition:

- Default V2 = Slices 0 through 8 complete and verified.

Reason:

- Slice 8 adds Observation, stage confirmation, and monitoring / awareness baseline. These are part of V2 product identity per V2_UX_MODEL.md §0 monitoring constraints + PRODUCT_VISION.md. Without Slice 8, owners running formal monitoring must remain in the legacy app, which contradicts "default V2".

Documented owner-speed alternative:

- The owner may choose Default at Slice 7 if speed is preferred over monitoring completeness. In that case, monitoring users must keep the legacy app available until Slice 8 lands. This trade-off is owner-explicit and must be recorded with the default-flip decision.

Default-flip behavior:

- The actual default flip was owner-approved and completed in A2; future reversals or changes still require explicit owner approval.
- The flip moved V2 to be the default surface and moved the legacy app behind the temporary `#legacy` fallback / old-app entry.
- The flip does not delete legacy data, legacy keys, or legacy code paths.
- The A2 flip did not require a service worker `CACHE_NAME` bump; future cache changes still require explicit owner approval and verification.
- The flip should be reversible: the owner can flip back to legacy default if a regression is found.

Current A2 completion record:

- A2 default V2 / remove `#v2` gate is complete.
- Normal/original URL and empty hash load V2.
- `#v2` and `#v2/...` remain backward-compatible V2 aliases.
- `#legacy` is the temporary legacy fallback, and the V2 old-app button routes to `#legacy`.
- The implementation did not delete legacy code or data, did not migrate/delete protected legacy storage keys, did not rename `vocnjak_v2`, did not change schema/model, did not edit Plan Templates, and did not change `manifest.json` or `sw.js`.
- Plan Templates runtime fidelity / content parity runtime patch is complete at `c9645c4 Implement Plan Templates runtime parity fixes`. UX/design polish through UXR.7, Young-Tree Formative Completion at `7bf61c0`, and V2 Done audit are complete; V2 is marked Done.

---

## 46. Public/native readiness milestone

Definition:

- Public / native readiness = Slices 0 through 9 complete and verified, plus storage substrate review per §18 native review.

At Public / native readiness:

- archive / lifecycle works (Slice 9)
- Observation correction works (Slice 9)
- export / import round-trip is tested across realistic data volumes
- invalid import fail-closed is tested with multiple failure shapes
- same-platform platform backup posture is reviewed (iCloud / Android Auto Backup)
- cross-platform transfer still uses V2 export / import as the only portability contract per §18 + §6.7
- native / public storage review is complete (eligible storage location, quota review, backup eligibility, persistence semantics)

Out of scope for the Public / native readiness milestone:

- Final native storage engine selection. The §18 native review evaluates options and recommends; the actual selection is a separate post-S11 decision.
- Plan upgrade review, Za pregledati cues, Settings split, and other §39 deferrals.

---

## 47. Runtime stop conditions

Consolidated runtime stop conditions across S11.A, S11.B, S11.C1, S11.C2, and S11.D. If a runtime slice would require any of the following, STOP and route to a new patch or session:

- a domain or schema change is needed (S2 / S8 owners; not S11)
- a UX route or copy change is needed beyond approved docs (S6 / S7 owners)
- a catalog or template content edit is needed (S5 / S5.x owner; not S11)
- a runtime slice would need to read or write any legacy key as V2 data
- a runtime slice would need a new persistent storage key beyond `vocnjak_v2`
- import would need to be tolerant, merge-style, or partial-accept
- a slice would need destructive edit or delete of Activity, Observation, or Correction history
- multi-plant Activity cannot be implemented from the first Activity slice
- `activity_group_id` would be used as derivation authority
- the snapshot would need to persist any derived state back to `vocnjak_v2`
- weather would gate, reorder, block, or reschedule any plan / window / cue
- monitoring absence would become a warning, overdue badge, or compliance copy
- stage missing would become a task or cue
- archive would delete records
- plan upgrade review is needed before a post-usable session opens it
- Za pregledati cues are needed before a post-usable session opens them
- service worker `CACHE_NAME` bump is needed before owner approval (the only sanctioned bump is the one tied to the default flip per §45)
- `manifest.json` change is needed
- legacy weather, Supabase, iCal / GitHub sync, or AES-GCM refactor is needed
- parallel commits to `main` would overlap (per §48)

If a stop condition fires, do not work around it. Route to the owning session.

---

## 48. Parallel implementation policy

Hard rules:

- Runtime slices commit serially in slice order: 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9.
- Cross-slice parallel commits to `main` are forbidden.
- Cross-slice parallel planning and design are allowed. Two implementers may draft Slice N+1 design while Slice N is in commit.
- Two implementers may work disjoint sub-units within a single slice only after the owner assigns merge order.
- Same-slice sub-unit commits are allowed only under one owner-approved slice scope.
- After each runtime commit, the next agent must `git pull --ff-only` `main` before editing.
- If both Codex and Claude Code are used, they must not edit overlapping `index.html` regions at the same time.

Foundation-specific:

- Foundation Slices 0–4 are especially serialized. The store boundary, V2 shell, catalog seed, export / import safety, and Plant foundation are foundational and tightly interdependent; no parallel commits.

Post-foundation:

- After Slice 6 snapshot is stable, design work for later slices may happen in parallel; commits still land serially.

Default-flip and post-default:

- The default flip per §45 is a single owner-approved commit.
- Post-default sessions (plan upgrade review, Za pregledati cues, Settings split, etc.) are independent sessions and follow their own owner-approved order.

---

## 49. S11 closure checklist

Documentation-only checklist for S11 closure:

- [x] S11.A complete (`627c83d Define S11 roadmap authority and runtime safety`)
- [x] S11.B complete (`3822f1e Define S11 storage and activation posture`)
- [x] S11.C1 complete (`bf7b066 Define S11 foundation slice plan`)
- [x] S11.C2 complete (`a56fe75 Define S11 usable-default slice plan`)
- [x] S11.D complete (this patch)
- [x] `V2_EXECUTION_ROADMAP.md` contains §1 through §50
- [x] at S11 closure, runtime implementation had not started (historical)
- [x] tracker sync landed after S11.D
- [x] next phase at S11 closure was runtime Slice 0 — V2 shell and owner-only entry; Runtime Slices 0–6 have since completed through `99e76c8 Implement Runtime Slice 6 snapshot and calendar surfaces`

S11.D roadmap closure is complete before tracker sync. Project-level S11 closure is complete only after the tracker sync commit lands.

---

## 50. Handoff to runtime implementation

Historical handoff note: after S11.D and its tracker sync were committed, the next approved work was:

- Runtime Slice 0 — V2 shell and owner-only entry (per §23)

Runtime Slice 0 rules (re-stated for the handoff):

- edit `index.html` only, inside a clearly demarcated V2 region
- no `vocnjak_v2` write yet (the write boundary lands in Slice 1)
- no legacy key read or write as V2 data
- legacy app remains the default
- V2 entry is ephemeral (URL hash or a hidden owner-only toggle); no persistent V2-mode storage key
- no `manifest.json` change, no `sw.js` change, no weather / Supabase / iCal / AES-GCM changes

Runtime implementation still requires explicit owner approval after S11 is closed. Even with this roadmap complete, no runtime work begins until the owner explicitly opens runtime Slice 0.

Post-S8 closure tracker note: Runtime Slices 0–7 are complete through `d61cc90 Harden S7 seasonal action detail display`, B2 metadata-only projection boundary is complete, Runtime Slice 8 Step 1 is complete as Plant detail-only read-only B2 monitoring/risk preview, Runtime Slice 8 Step 2 is complete as Plant detail free-standing note Observation capture plus Dnevnik / plant-history evidence under `Opažanja`, Runtime Slice 8 Step 3 is complete as read-only Pregled/Kalendar B2 monitoring/risk visibility, Runtime Slice 8 Step 4a is complete as Plant-detail-only free-standing trap count capture plus Dnevnik / plant-history evidence under `Opažanja`, Runtime Slice 8 Step 5a is complete as bounded free-standing `stage_obs` diary capture, Runtime Slice 8 Step 6 is complete for multi-plant free-standing `note` / `stage_obs`, Runtime Slice 8 Step 7 numeric advisory covers 654, 860, 1596, and 1643, Runtime Slice 8 Step 7b context-only advisory covers 337, 2455, 2949, and 2977, Runtime Slice 8 Step 7c is complete as bounded Plan Templates-backed visual scouting capture at `588e413` after docs lock at `7e388c5`, Runtime Slice 8 Step 7d is complete as source-backed read-only `Što sada` scouting guidance at `5f64257`, and Runtime Slice 8 Step 7e is complete as bounded read-only `Što gledati` guidance parity at `36433aa Add Step 7e monitoring guidance parity`. Step 7e extended only `B2_READONLY_GUIDANCE_BY_SOURCE_ROW` with 21 source-backed beginner visible-sign entries for monitoring-only B2 rows. It did not add schema, validators, payload fields, storage, routes, renderer changes, source maps, `symptom_code`, `Observation.symptom`, broad registries, diagnosis, treatment/product/dose advice, pressure/urgency/compliance logic, risk-awareness checklist rows, trap/scouting capture changes, or Step 7d `Što sada` changes. B2 source-row guidance coverage is complete for read-only S8 purposes: 14 previously existing `Što gledati` rows, 21 Step 7e monitoring-only rows, and 6 risk-awareness rows intentionally seasonal context rather than checklist rows. Runtime Slice 8 is closed for the approved S8 scope; Step 7 coverage is complete and no unresolved S8 blocker row remains. The seasonal snapshot remains private, read-time, derived, and non-persisted. Post-S8 Observation correction is complete: docs lock at `1ef2009`, validator/model runtime at `60cc32c`, and UI/display runtime at `6d5b19d`. A2 default V2 is complete, and A1 archive/lifecycle runtime is complete with no delete, no unarchive/restore, no replacement logic, preserved Dnevnik/history, archived-plant active-scope exclusion, and archive-field import/export validation. Plan Templates runtime fidelity / content parity runtime patch is complete at `c9645c4 Implement Plan Templates runtime parity fixes` with three source-backed display/copy parity fixes in `index.html` only (universal calendar-window baseline disclaimer on Seasonal action detail; `purposeCue` extension for `harvest` / `Pregled za zimu` / `Gašenje navodnjavanja`; two restored Plan Templates Taphrina/prevention-only lines in `peach.copper.leaf_curl_buds_closed`); no schema/model, no validators, no import/export, no Plan Templates edit, no B2/source-map/guidance change, no trap/scouting capture change, no `manifest.json`, no `sw.js`, no S8 reopening; owner browser verification passed. Completed V2 Done path in §0: UX/design polish through UXR.7 / final mobile stabilization is complete, Young-Tree Formative Completion is complete at `7bf61c0 Complete young-tree formative guidance`, V2 Done audit passed with non-blocking follow-ups, and V2 is marked Done. Remaining Post-S8 carry-forward items are future owner-decision work unless the owner explicitly opens post-V2 follow-up planning.
