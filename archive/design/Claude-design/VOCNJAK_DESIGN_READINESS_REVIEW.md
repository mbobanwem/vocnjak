# Vocnjak V2 — Final Design-Readiness Review

**Design review only. No code, no edits, no commit.** Independent product-design assessment of current `main` (post-UXR.6 + post-UXR stabilization: `a0cfc93`, `7595fc4`, `0f90de8`, `06102aa`, `a2b7a09`, `41603f1`).

Grounded in: live render of current `index.html` (Pregled default, Biljke empty, Add Plant form), plus full read of the consumed V2 CSS system (Adriatic tokens, Fraunces consumption, species icons, chips, hero, Kalendar timeline, Plant detail rhythm, Dnevnik timeline, Postavke sheet) at `index.html` lines 179–1550+.

---

## 1. Executive verdict

**Design-ready for V2 Done audit — after one small, well-bounded polish pass. Not a polish pass that reopens anything; a punch-list.**

The app no longer reads as a developer/staging page. The Phase B direction shipped intact: default load lands on Pregled (route flip live), the Adriatic shell + Fraunces display type + 4-tab frosted bottom nav + slide-up Postavke are all real and consumed, the species identity system is in, the scaffold is gone from primary UI. This is a coherent, calm, modern, orchard-first iPhone app. The bones are done and they are good.

I am **not** recommending another design iteration. I am recommending a **single focused punch-list pass** (call it UXR.7) of roughly 4–6 tiny, isolated fixes — each a few lines, none touching data/model/Plan-Templates/routing — and then proceed to V2 Done audit. The largest single item is a duplicated screen title. None is a structural redesign.

If the owner wanted to ship to V2 Done audit *today* without UXR.7, only **one** item is a genuine blocker (the duplicated H1 on form/detail screens — see §7). Everything else is legitimately deferrable. So the honest answer is: **one true blocker, fix it plus a handful of cheap wins in a single small pass, then audit.**

---

## 2. Current design quality assessment

**Visual hierarchy — strong.** The display/body split (Fraunces for titles + section heads + hero status, DM Sans for everything else) gives clear rank. The three-tier ink system (ink / ink-mid / ink-mute, the latter darkened to `#647079` in UXR.6) reads cleanly. Section headings, card titles, meta, and muted supporting text are each visibly their own tier. No mud.

**Navigation — strong and predictable.** Persistent 4-tab bottom nav (Pregled · Kalendar · Biljke · Dnevnik) with a calm active-tab top-stripe indicator. Top app bar carries the screen name + a single right affordance, back chevron on detail/form screens. This is the correct, boring, native answer. No hidden gestures, no swipe-only primaries. Spatial memory works.

**One-handed iPhone use — good.** Bottom nav and primary actions sit in the thumb arc. The inline "Dodaj voćku" row is a large 64 px target. Top-bar "⋯" and back chevron are reachable. Forms hide the bottom nav so the keyboard doesn't collide. The one caveat is the top-bar "⋯" sitting in the top-right corner — reachable on a 6.1" device, a stretch on a 6.7"; acceptable because it's a secondary affordance (settings), not a primary action.

**Outdoor readability — good, post-UXR.6.** Darkened ink-mute, AA-hardened contrast, cool off-white surfaces with high-contrast ink. The one residual is the hero month chip (~3.5:1) — discussed in §4.

**Emotional / premium feel — this is where Phase B earns its keep.** The Pregled hero (deep-Adriatic → sea → warm-dawn gradient, frosted month chip, tree-silhouette horizon, Fraunces italic status sentence laid over) is a genuine 2026-grade moment. The species-tinted plant cards with per-fruit accent stripes give the plant list life and rhythm. It feels like a made object, not a CRUD form. It is calm without being sterile.

**Orchard-first identity — clearly achieved.** Seasonal language, phenology-anchored windows, monitoring-as-fact (not alarm), no daily-task framing, no compliance scoring, no diagnosis. The chip vocabulary (Aktualno / Pri kraju / Uskoro / Odrađeno / Preskočeno, no red, no count badges) reinforces "informs, does not command." Kalendar as a vertical season timeline (not a day grid) is the single most important identity decision and it shipped correctly.

**Does it still feel like a prototype? — No.** Empty Pregled and empty Biljke read as intentional rest states, not broken screens. The scaffold H1, the "Slice N" status lines, the raw backup pills, and the bottom-of-every-screen exit button are all gone from primary UI (relocated into Postavke with IDs preserved). The staging-page problem that motivated Phase B is solved.

---

## 3. Surface-by-surface review

### Pregled
- **Status.** Done, modulo hero chip contrast.
- **Works.** Hero is the standout surface. Section order, calm cards, monitoring card treatment, empty-state copy all read well. Lands as default — the orchard answer is the front door.
- **Bothers.** Hero month/season chip contrast (~3.5:1, decorative). On a very tall orchard list the hero scrolls away — fine, it's a header not a control.
- **Blocks V2 Done?** No.
- **Minimal fix.** Chip text weight bump (see §4); defer otherwise.

### Kalendar
- **Status.** Done.
- **Works.** Vertical season timeline with sticky Fraunces month heads, current-month accent stripe, calm cards. Correct metaphor (bands across months, not appointments on days). `Mlade voćke` orientation preserved.
- **Bothers.** Nothing structural. Watch that very long seasons keep comfortable spacing between months (visual rhythm, not a defect).
- **Blocks V2 Done?** No.

### Biljke
- **Status.** Done.
- **Works.** Inline "+ Dodaj voćku" row exactly as designed — 64 px, labeled, empty-state helper "Prva voćka, krećemo." Single primary action; the old competing "Dodaj evidenciju" primary is gone. Species-tinted cards with accent stripes give the populated list life. Archive link pattern in place.
- **Bothers.** Nothing blocking. (When populated, confirm the species icon + accent stripe + optional "Sada aktualno" line stay balanced; verified in CSS, looks right.)
- **Blocks V2 Done?** No.

### Add Plant
- **Status.** Functional, needs the punch-list.
- **Works.** Back chevron returns to Biljke. The "ne znam" checkbox nested under each input — the honesty pattern — is intact and well-placed. Fields are legible.
- **Bothers (two real items).** (1) **The screen title renders twice** — top bar "Dodaj voćku" AND a body H1 "Dodaj voćku" immediately below it. This is the most prototype-ish thing left in the app and it repeats on every form/detail screen that has both a top-bar title and a body H1. (2) The **Vrsta `<select>` still has default system styling** (plain box + native chevron) while the text inputs got the Phase B rounded/cream-pale treatment — visually inconsistent, reads as half-styled.
- **Blocks V2 Done?** Item (1) yes (it's the one true blocker, §7). Item (2) is a cheap win, ideally same pass.
- **Minimal fix.** Suppress the body H1 where the top bar already shows the title (or vice-versa — keep one). Apply the existing V2 input styling to `<select>`.

### Seasonal action detail
- **Status.** Done (post-`06102aa` layout fix).
- **Works.** The reorder is correct: Title → Napomene → Sigurnost prskanja (when relevant) → Kada → Evidencija po voćkama → Dnevnik. The oversized segmented Pregled/Kalendar/Biljke nav was correctly removed from the detail. Scroll resets to top on open (`a2b7a09`). Source-backed Napomene preserved verbatim.
- **Bothers.** Only the same double-title pattern if a body H1 duplicates the top-bar action label (verify during the punch-list).
- **Blocks V2 Done?** No (assuming the double-title fix covers it).

### Plant detail
- **Status.** Done.
- **Works.** Section ladder with Fraunces headings + breathing rhythm: Karton voćke (2-column definition rows), Mlada voćka (italic-Fraunces commentary on pale tint, young trees only), Trenutne sezonske radnje, Klopke, Vizualni pregled, Što gledati, Opažanja, Dnevnik ove voćke. Species banner hero. Archive in "⋯". This is the richest surface and it reads as a notebook spread, not a long form.
- **Bothers.** Density — it's a long scroll when all sections are present. Acceptable for a once-or-twice-a-month visit; flat scroll beats tab cognition here. No collapsibles by default — correct.
- **Blocks V2 Done?** No.

### Dnevnik
- **Status.** Done.
- **Works.** Monthly sticky-header timeline, hairline rail, calm chips (Odrađeno plum / Preskočeno neutral), `ispravljeno` / `nakon razdoblja` as inline text markers. Reads as an almanac, not a feed. No score, no streak, no summary.
- **Bothers.** Corrected marker contrast (~4.4, brand-on-cream) — one notch under AA. Minor.
- **Blocks V2 Done?** No.

### Postavke / data utility
- **Status.** Done.
- **Works.** Slide-up sheet (no new route). Backup export/import with inline expand-to-confirm (no modal stacking). Voćnjak → Arhiva. O aplikaciji → Verzija + Dijagnostika collapsible holding the relocated Slice status nodes (IDs preserved). Napredno → "Otvori staru verziju." The dev scaffold has a sane, discoverable, non-shouting home. Post-stabilization fixed the overlay-blocking-taps bug (`0f90de8`).
- **Bothers.** Nothing blocking. Confirm during punch-list that the sheet's safe-area bottom padding is correct on a notched device and that scrim-tap-to-dismiss works.
- **Blocks V2 Done?** No.

### Forms / capture flows
- **Status.** Functional, shares the Add Plant punch-list items.
- **Works.** Bottom nav hidden on forms, sticky action bar, back chevron cancels. Capture types reachable from the right contexts (Plant detail, Seasonal action detail).
- **Bothers.** Double-title pattern; `<select>` styling consistency; verify sticky action bar clears the iOS keyboard on a real device.
- **Blocks V2 Done?** Double-title yes; rest no.

### Monitoring / risk cards
- **Status.** Done.
- **Works.** `Što gledati` as pale-green source-backed prose; trap advisory (`Klopke`) as cream-dark fact card; visual differentiation by surface/fill, not by alarm color. No urgency, no diagnosis, no treatment framing. This is exactly the §0-locked behavior expressed visually.
- **Bothers.** Nothing.
- **Blocks V2 Done?** No.

---

## 4. Known follow-ups judgment

### Hero month/season chip contrast (~3.5–3.7)
- **Design blocker before V2 Done?** No.
- **Accessibility blocker before V2 Done?** No — it is **decorative/supporting** text (the month/season label is redundant ambient context; the hero headline carries the actual answer and passes AA). WCAG treats redundant decorative text differently. Track it as a known, owned item, not an open failure.
- **Acceptable follow-up?** Yes.
- **Exact minimal treatment if fixed now.** Cheapest: bump the chip label weight (DM Sans 600 → 700) and a hair of size so it crosses the 3:1 large-text-ish threshold against the translucent pill — preserves the frosted-glass look. If that's not enough, a 1px inner text-shadow / subtle dark halo on the chip text only. **Do not** solidify the pill or add a scrim — that would damage the approved hero. Because the fix risks the signature hero detail, deferring is the *correct* call, not laziness.

### Corrected marker contrast (~4.4, brand-on-cream)
- **Design blocker?** No.
- **Accessibility blocker?** Marginal — 4.4 vs 4.5 AA. It is a small inline text marker. One notch under. Defensible to defer, cheap to fix.
- **Acceptable follow-up?** Yes, but it's so cheap I'd fold it into UXR.7.
- **Exact minimal treatment.** Swap the marker foreground token from `--v2-brand` to `--v2-brand-deep` (already in the palette) — one token change on one selector, pushes it over 4.5. Zero visual-direction risk.

### Springcrest peach harvest vs bird-net timing/content
- **Design blocker?** No — this is not design.
- **Accessibility blocker?** No.
- **Acceptable follow-up?** It is **Plant Templates timing/content parity**, i.e. content/data scope, explicitly out of Phase B and out of any UXR session. It must be handled in a catalog/template content session under the plan-template-projection rules, not here.
- **Treatment.** None in design scope. Route to a catalog/content session. Do not let it block the design audit.

---

## 5. Young-tree clarity

**Mostly clear; one small copy/design addition would strengthen it — borderline, owner's call.**

- **Does the user understand why some fruiting actions are absent?** Partially. The `Mlada voćka` commentary card on Plant detail (italic-Fraunces on pale tint, young trees only) explains that fruiting actions aren't the current focus and that establishment/structure/monitoring matter now. That's the right surface and the right tone. The gap: on **Pregled and Kalendar**, a young tree simply shows fewer actions with no inline "why." A beginner could read the sparseness as "the app has nothing for me" rather than "fruiting actions intentionally don't apply yet."
- **Does the user understand which young-tree guidance remains relevant?** Yes, on Plant detail (Mlada voćka + the `Mlade voćke` calendar orientation cards). The Step 8 young-tree filter is doing its job.
- **Does Plant detail make this clear enough?** Yes. Plant detail is the strongest surface for this.
- **Is a small copy/design addition needed before V2 Done?** **Not a blocker.** A nice-to-have: one calm line in the young-tree empty/sparse state on Pregled or Kalendar, e.g. "Mlada voćka — plodonosne radnje još nisu u fokusu." linking to the Plant detail explanation. This is a copy addition (no model change). I'd put it in the **follow-up backlog**, not UXR.7, unless the owner specifically wants beginner-onboarding hardened before audit. Recommendation: defer; the Plant detail explanation is sufficient for V2 Done.

---

## 6. Add Plant affordance

**Current state meets every requirement. No fix needed to the affordance itself.**

- Visible? Yes — full-width row at the top of Biljke, can't be missed.
- Labeled? Yes — "Dodaj voćku" text, not an icon-only plus.
- Thumb-friendly? Yes — 64 px tall, full content width.
- Not tiny-plus-only? Correct — it's a labeled row with a glyph.
- Not an oversized banner? Correct — 64 px, single row, helper text only in empty state.
- Clear about what happens? Yes — "Dodaj voćku" + empty-state helper "Prva voćka, krećemo." Tapping opens the Add Plant form.

The only Add-Plant-adjacent issues are on the **form** (double title, select styling — §3, §7), not the entry affordance. The affordance is done.

---

## 7. Design blockers

Only one true blocker.

- **Blocker:** Duplicated screen title on form/detail screens (top-bar title + body H1 both render the same text, e.g. "Dodaj voćku" twice on Add Plant).
- **Why it blocks:** It is the one remaining element that reads as unfinished/prototype. A polished native app shows the screen title once. Repeating it is the kind of thing a V2 Done audit (and any user) notices immediately, and it undercuts the premium feel Phase B otherwise achieves.
- **Smallest acceptable fix:** Render the title once. Either suppress the in-body H1 on screens where the top bar already shows the title, or drop the top-bar title text on those screens (keep the top bar title — it's the consistent pattern, so remove the body H1). CSS-only is possible (`display:none` on the body H1 within form/detail screens) if a JS change is undesirable; a small render change is cleaner.
- **Expected file/surface impact:** `index.html` — form + detail render blocks (Add Plant, capture forms, possibly Seasonal action detail / Plant detail if they carry a body H1). Presentation only. No data/model/route/Plan-Templates impact.
- **Should be done before V2 Done:** **Yes.**

Secondary item that is *not* a blocker but belongs in the same pass because it's nearly free:

- **Item:** Vrsta `<select>` uses default system styling while text inputs use Phase B styling — visual inconsistency on the Add Plant form.
- **Smallest fix:** Apply the existing V2 input styling (cream-pale fill, 1.5px border, radius, focus ring) to `<select>` within `.v2-active` forms; keep the native dropdown behavior.
- **Should be done before V2 Done:** Recommended, not required.

---

## 8. Follow-up backlog

**Visual polish later**
- Hero month/season chip contrast (weight bump or text-shadow; preserve frosted glass).
- Young-tree "why fewer actions" inline line on Pregled/Kalendar sparse state (copy addition).
- Plant detail density review if real-world use shows it's too long (consider section-level affordances — not collapsibles-by-default).

**Accessibility later (or fold into UXR.7 — both are one-liners)**
- Corrected marker contrast: `--v2-brand` → `--v2-brand-deep` on the marker selector.
- Final per-pair AA sweep on any tinted-chip-on-tinted-fill combination not already verified in UXR.6.

**Content / Plan Templates later (NOT design, NOT a UXR session)**
- Springcrest peach harvest vs bird-net timing/content parity — route to a catalog/template content session under plan-template-projection rules.

**Product feature later (explicitly NOT Phase B — the F-series)**
- F1 seasonal hero mood, F2 "prošle godine ovog tjedna", F3 naslovnica voćnjaka, F4 foto-traka rasta, F5 voćnjak iz zraka, F6 sezonska razglednica, F7 pull-to-refresh granom, F8 zoom viewer, F9 iCal export, F10 time-of-day tint. None blocks V2 Done. Each is a separate future product decision.

**Runtime bug later**
- None currently known beyond what post-UXR stabilization already fixed. Recommend a real-device pass (notched iPhone, PWA standalone) to confirm sheet safe-area bottom padding and sticky-action-bar vs keyboard during the punch-list, in case either surfaces a runtime fix.

---

## 9. Recommended next step

**Do one final focused polish pass (UXR.7), then proceed to V2 Done audit.** Do not iterate the design.

**UXR.7 exact scope (small, concrete, must not reopen Phase B):**
1. **Fix the duplicated screen title** on form/detail screens — render the title once (the blocker, §7).
2. **Style the Vrsta `<select>`** to match Phase B text inputs.
3. **Corrected marker contrast** — swap foreground to `--v2-brand-deep` (one token on one selector).
4. **Real-device confirmation pass** — notched iPhone + PWA standalone: top-bar safe-area, bottom-nav safe-area, Postavke sheet bottom padding + scrim-tap dismiss, sticky form action bar vs keyboard. Fix only what's found, CSS-only.

Optional, only if owner wants beginner-onboarding hardened before audit:
5. One calm young-tree "why fewer actions" line on Pregled/Kalendar sparse state (copy addition).

Everything in UXR.7 is presentation-only, a few lines each, no data/model/Plan-Templates/routing/monitoring change. After UXR.7 verification (snapshot validator `[]`, `#legacy` byte-identical, no console errors, real-device check), the app is ready for V2 Done audit.

If the owner chooses to skip UXR.7, fix item 1 (the blocker) at minimum, then audit. But the full UXR.7 is cheap and removes every "almost" from the app.

---

## 10. Anti-scope confirmation

I am explicitly **NOT** recommending:
- restarting or reopening Phase B
- another full design iteration or palette/typography change
- changing the data model or store shape
- changing Plan Templates content or timing (Springcrest item routes elsewhere)
- a new routing model or broad route redesign (the default-route flip already shipped; no further routing work)
- adding AI / diagnosis / treatment / dose recommendation behavior
- adding urgency / overdue / compliance / gamification / streaks / badges / count badges
- introducing a framework, React, Tailwind, TypeScript, or a build pipeline
- splitting the single-file app
- changing `manifest.json` or `sw.js`
- changing validators / import-export payload / snapshot computation / B2 / S8 monitoring logic
- adding any F-series product feature as part of V2 Done
- collapsibles-by-default or tab navigation inside Plant detail

UXR.7 is a punch-list, not a phase. After it: proceed to V2 Done audit.

*End of design-readiness review. No code. No edits. No commit.*
