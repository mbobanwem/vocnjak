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
- `Claude-design/` remains local reference material only and is not committed.
- Next session: `UXR.1b — Fraunces + DM Sans typography link`.
- Later-session audit notes: runtime uses `plant.species`, not `plant.species_id`, so UXR.3d must map species visuals from `plant.species`; the Pregled section-order discrepancy belongs to UXR.3a/UXR.3b, not UXR.1b; UXR.2a later flips empty hash to Pregled while keeping `#v2` as the Biljke compatibility alias.
- **Sequencing prerequisite:** Phase B came AFTER S7, B2, S8, the owner-approved A2/A1 baseline decisions, the Plan Templates runtime fidelity / content parity runtime patch at `c9645c4 Implement Plan Templates runtime parity fixes`, and the Phase A functional UX/copy polish runtime at `cc22d24 Polish V2 UX copy and Pregled click affordance` per `V2_EXECUTION_ROADMAP.md §0`.
- Current V2 Done order:
  1. complete B2 / Runtime Slice 8 / Post-S8 Observation correction (done)
  2. A2 default V2 / remove `#v2` gate after owner approval (done)
  3. A1 archive/lifecycle baseline after owner approval (done)
  4. Plan Templates runtime fidelity / content parity session (done at `c9645c4 Implement Plan Templates runtime parity fixes`)
  5. Phase A — Functional UX/copy polish runtime (done at `cc22d24 Polish V2 UX copy and Pregled click affordance`; owner mobile browser verification passed)
  6. Phase B UXR active: UXR.0 audit complete, UXR.1a tokens complete, next UXR.1b
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

Current Phase B session authority is `Claude-design/UXR_FINAL_PLAN.md` as local-only reference material. The older high-level outline below remains historical framing only; do not use it to override the accepted UXR.0/UXR.1a/UXR.1b session sequence.

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

Continue only through the currently opened UXR session. The next implementation session is UXR.1b.
