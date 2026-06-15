## 1. Executive verdict

UXR.1a is ready.

UXR.1a can be CSS-only: declare Phase B design tokens under `.v2-active` and do not consume them yet.

No blocker exists before UXR.1a.

Findings that affect later sessions only:
- UXR.2a must flip empty hash from Biljke to Pregled while keeping `#v2` as the Biljke compatibility alias.
- UXR.2b/2c can relocate scaffold/status/import/export controls if existing IDs are preserved and not duplicated.
- UXR.3d should map species identity from the current runtime field `plant.species`; no `plant.species_id` field exists in runtime today.
- UXR.5b should reorder Plant detail sections toward the accepted mockup order without hiding source-backed notes.

This audit does not create a new planning loop. The accepted Phase B plan remains implementable in small sessions.

## 2. Git gate result

Command:

```bash
git branch --show-current
```

Output:

```text
main
```

Command:

```bash
git status --short
```

Output:

```text
?? Claude-design/
```

Command:

```bash
git pull --ff-only
```

Output:

```text
Already up to date.
```

Result: passed. Branch is `main`. Working tree was clean except the expected untracked local reference folder `Claude-design/`.

`Claude-design/` is untracked local reference material only. It was read for the audit and must not be staged or committed.

## 3. Files read

Required project docs read:
- `CLAUDE.md`
- `PRODUCT_VISION.md`
- `V2_PRINCIPLES.md`
- `V2_CURRENT_STATE.md`
- `V2_EXECUTION_ROADMAP.md`
- `V2_UX_MODEL.md`
- `V2_DOMAIN_MODEL.md`
- `V2_ARCHITECTURE.md`
- `POLISH_BACKLOG.md`
- `V2_ORCHARD_PLAN_TEMPLATES.md`
- `V2_PLANT_CATALOG.md`
- `V2_VARIETY_COVERAGE_POLICY.md`
- `V2_CATALOG_AUDIT.md`
- `V2_S3_AUDIT_CONSOLIDATION.md`
- `V2_S3_CATALOG_AUDIT_EXECUTION_PLAN.md`
- `README.md`

Runtime read:
- `index.html`

Claude Design reference files read:
- `Claude-design/PHASE_B_DESIGN_PROPOSAL_V2.md`
- `Claude-design/CODEX_PHASE_B_PLAN.md`
- `Claude-design/Vocnjak Phase B Mockup.html`
- `Claude-design/UXR_FINAL_PLAN.md`

Additional read-only checks:
- `manifest.json`
- `sw.js`

All required files were read.

## 4. Route map

Route normalization is in `normalizeRouteHash(hash)` at `index.html:8869`.

Alias normalization:

| Hash input | Normalized hash | Route returned | Params extracted | Render target/screen | Type | Phase B bottom nav | Phase B top back |
| --- | --- | --- | --- | --- | --- | --- | --- |
| empty hash | empty hash | `list` currently | none | `renderList()` / Biljke | current default primary route; target default becomes Pregled in UXR.2a | currently show; after UXR.2a this route becomes Pregled and should show | no |
| `#v2` | `#v2` | `list` | none | `renderList()` / Biljke | compatibility primary alias | show | no |
| `#biljke` | `#v2` | `list` | none | `renderList()` / Biljke | primary alias | show | no |
| `#pregled` | `#v2/pregled` | `pregled` | none | `renderPregled()` | primary alias | show | no |
| `#v2/pregled` | same | `pregled` | none | `renderPregled()` | primary route | show | no |
| `#kalendar` | `#v2/kalendar` | `kalendar` | none | `renderKalendar()` | primary alias | show | no |
| `#v2/kalendar` | same | `kalendar` | none | `renderKalendar()` | primary route | show | no |
| `#dnevnik` | `#v2/diary` | `diary` | none | `renderDiary(route)` | primary alias | show | no |
| `#v2/diary` | same | `diary` | none | `renderDiary(route)` | primary route | show | no |
| `#legacy` | same | legacy escape before V2 boot | none | legacy app, because `v2-active` is not added | legacy escape | no V2 nav | no V2 back |

Routes returned by `getRoute()` at `index.html:8877`:

| Hash input | Route returned | Params extracted | Render target/screen | Type | Phase B bottom nav | Phase B top back |
| --- | --- | --- | --- | --- | --- | --- |
| `#v2/add` | `add` | none | `renderAdd()` | form route | hide | yes |
| `#v2/activity/add` | `activity_add` | none | `renderActivityAdd(route)` | form route | hide | yes |
| `#v2/activity/add/<catalog_version>/<window_def_id>/<cycle_year>` | `activity_add` | `catalog_version`, `window_def_id`, `cycle_year` as Number | `renderActivityAdd(route)` | contextual form route | hide | yes |
| malformed `#v2/activity/add/...` | `activity_add` | no trusted params | `renderActivityAdd(route)` | compatibility fallback form route | hide | yes |
| `#v2/diary/plant/<plant_id>` | `plant_diary` | decoded `plant_id`; malformed flag when missing/invalid | `renderDiary(route)` | detail-filtered diary route | show | yes, back to Plant detail |
| `#v2/seasonal-action/<catalog_version>/<window_def_id>/<cycle_year>` | `seasonal_action` | `catalog_version`, `window_def_id`, `cycle_year` as Number | `renderSeasonalActionDetail(route)` | detail route | show | yes |
| malformed `#v2/seasonal-action/...` | `kalendar` | none | `renderKalendar()` | defensive fallback | show | no |
| `#v2/activity/<activity_id>/correct` | `correction` | decoded `activity_id`, `record_type: activity` | `renderCorrection(route)` | correction form route | hide | yes |
| malformed activity correction route | `diary` | none | `renderDiary(route)` | defensive fallback | show | no |
| `#v2/observation/<observation_id>/correct` | `correction` | decoded `observation_id`, `record_type: observation` | `renderCorrection(route)` | correction form route | hide | yes |
| malformed observation correction route | `diary` | none | `renderDiary(route)` | defensive fallback | show | no |
| `#v2/observation-group/<observation_group_id>/correct` | `correction` | decoded `observation_group_id`, `record_type: observation_group` | `renderCorrection(route)` | correction form route | hide | yes |
| malformed observation-group correction route | `diary` | none | `renderDiary(route)` | defensive fallback | show | no |
| `#v2/plant/<plant_id>` | `detail` | decoded `plant_id`; malformed flag when missing/invalid | `renderDetail(route)` | Plant detail route | show | yes |
| malformed `#v2/plant/...` decode | `list` | none | `renderList()` | defensive fallback | show | no |
| any other hash | `list` | none | `renderList()` | unknown-route fallback | show | no |

Observation routes:
- Correction routes exist for observations and observation groups.
- Add Opažanje, trap count, stage, and visual inspection/scouting capture are currently inline controls inside Plant detail, not standalone route branches.

Archive routes:
- No standalone archive route exists.
- Archive controls are inline in Plant detail.
- Archived plants are shown as an archived section in Biljke.

Old `#v2/...` routes remain supported. `#v2` remains Biljke. The empty-hash default is the only route-default behavior that should change in UXR.2a.

## 5. Hash assignment and back/cancel handler audit

Route builder helpers:

| Hash literal/pattern | File/line | Context | User action | Assumes `#v2` means Biljke | UXR.2a impact | Later shell/back preservation |
| --- | --- | --- | --- | --- | --- | --- |
| `#v2/plant/<id>` | `index.html:8506` | `plantDetailRoute(plantId)` | Plant row, save plant, detail return links | no | none | preserve helper |
| `#v2/diary/plant/<id>` | `index.html:8510` | `plantDiaryRoute(plantId)` | Full plant diary button | no | none | preserve helper |
| `#v2/seasonal-action/...` | `index.html:8514` | `seasonalActionRoute(occurrence)` | Seasonal cards/details | no | none | preserve helper |
| `#v2/activity/add/...` | `index.html:8521` | `activityAddRoute(occurrence)` | Seasonal detail evidence capture | no | none | preserve helper |
| `#v2/activity/<id>/correct` | `index.html:8528` | `activityCorrectionRoute(activityId)` | Correct activity button | no | none | preserve helper |
| `#v2/observation/<id>/correct` | `index.html:8532` | `observationCorrectionRoute(observationId)` | Correct observation button | no | none | preserve helper |
| `#v2/observation-group/<id>/correct` | `index.html:8536` | `observationGroupCorrectionRoute(groupId)` | Correct grouped observation button | no | none | preserve helper |

Direct hash assignments and hardcoded references:

| Exact hash literal | File/line | Handler/function/context | User action | Assumes `#v2` means Biljke | UXR.2a impact | Preserve/replace later |
| --- | --- | --- | --- | --- | --- | --- |
| `#v2/add` | `index.html:9021` | `renderList()` add plant button | Tap `Dodaj voćku` | no | none | preserve route |
| `#v2/pregled` | `index.html:9028` | `renderList()` nav button | Tap `Pregled` from Biljke | no | none | likely replace with bottom nav helper later |
| `#v2/kalendar` | `index.html:9031` | `renderList()` nav button | Tap `Kalendar` from Biljke | no | none | likely replace with bottom nav helper later |
| `#v2/activity/add` | `index.html:9034` | `renderList()` primary action | Tap `Dodaj evidenciju` from Biljke | no | none | later remove/demote from Biljke primary surface, route must remain |
| `#v2/diary` | `index.html:9037` | `renderList()` nav button | Tap `Dnevnik` from Biljke | no | none | likely replace with bottom nav helper later |
| `#v2` | `index.html:9638` | `renderDetail()` not-found back button | Tap back from missing plant | yes | none, because `#v2` remains Biljke | preserve or route via shell back |
| `#v2` | `index.html:9843` | `renderDetail()` top back button | Tap back from Plant detail | yes | none | preserve semantics |
| `#v2` | `index.html:10012` | `renderAdd()` cancel button | Cancel Add Plant | yes | none | preserve form cancel target or shell back |
| `#v2` | `index.html:10742` | `renderActivityAdd()` back button | Tap back from Add Evidence | yes | none | contextual back may improve later, but preserve no validation behavior change |
| `#v2` | `index.html:10805` | `renderActivityAdd()` cancel button | Cancel Add Evidence | yes | none | preserve or replace with focused-flow cancel |
| `#v2/diary` | `index.html:10907` | `saveActivity()` success | Save activity/evidence | no | none | preserve post-save destination unless later explicitly changes |
| `#v2/pregled` | `index.html:11419` | `appendSeasonalNav()` button | Seasonal nav Pregled | no | none | likely bottom nav later |
| `#v2/kalendar` | `index.html:11422` | `appendSeasonalNav()` button | Seasonal nav Kalendar | no | none | likely bottom nav later |
| `#v2` | `index.html:11425` | `appendSeasonalNav()` button | Seasonal nav Biljke | yes | none | preserve Biljke alias |
| `#v2/kalendar` | `index.html:11906` | `renderSeasonalActionDetail()` back | Tap back from Seasonal action detail | no | none | preserve detail back target |
| `#v2/diary` | `index.html:11962` | `renderSeasonalActionDetail()` diary link | Tap diary from Seasonal action detail | no | none | preserve |
| `#v2` | `index.html:12333` | `renderDiary()` back when not plant-scoped | Tap back from Dnevnik | yes | none | later primary nav may replace |
| `#v2/diary` | `index.html:12380` | `renderActivityCorrection()` back | Tap back from activity correction | no | none | preserve |
| `#v2/diary` | `index.html:12453` | `renderActivityCorrection()` cancel | Cancel activity correction | no | none | preserve |
| `#v2/diary` | `index.html:12722` | `renderObservationCorrection()` back | Tap back from observation correction | no | none | preserve |
| `#v2/diary` | `index.html:12829` | `renderObservationCorrection()` cancel | Cancel observation correction | no | none | preserve |
| `#v2/diary` | `index.html:12932` | `saveActivityCorrection()` success | Save activity correction | no | none | preserve |
| `#v2/diary` | `index.html:13104` | `saveObservationCorrection()` success | Save observation correction | no | none | preserve |
| `#legacy` | `index.html:3613` | `v2ExitBtn` click listener using `history.replaceState` | Tap legacy escape | no | none | preserve escape behavior; can relocate button |

Dynamic assignments:
- `index.html:9071` and `index.html:9094`: Plant rows navigate through `plantDetailRoute(plant.id)`.
- `index.html:9918`: Full plant diary button navigates through `plantDiaryRoute(plant.id)`.
- `index.html:10263`: Save Add Plant navigates to the new Plant detail route.
- `index.html:10415`, `10488`, `10586`, `10658`: Inline observation saves either rerender current detail or navigate to the Plant detail route.
- `index.html:11404` and `11444`: Pregled/Calendar seasonal cards navigate through `seasonalActionRoute(occurrence)`.
- `index.html:11921`: Seasonal detail evidence button navigates through `activityAddRoute(occurrence)`.
- `index.html:12025`, `12137`, `12150`: Diary correction buttons navigate through correction route helpers.

No `href="#v2..."` references were found.

Result: UXR.2a does not require rewriting hardcoded `#v2` back/cancel handlers because the locked target keeps `#v2` as Biljke. Later shell/back-affordance work must preserve these destinations unless the session explicitly introduces a safer contextual back helper.

## 6. Route-default flip impact

Current behavior:

```js
if (h === '#v2' || h === '') return { name: 'list' };
```

Target later behavior:

```js
if (h === '') return { name: 'pregled' };
if (h === '#v2') return { name: 'list' };
```

Consumers of empty hash:
- Slice 0 boot treats empty hash as V2-active at `index.html:506`, because only `#legacy` skips V2 activation.
- `getRoute()` currently maps empty hash to Biljke.
- No runtime code assigns `location.hash = ''`.
- Manual hash clearing and PWA/browser launch without a hash are the meaningful empty-hash consumers.

PWA install/start URL implications:
- `manifest.json` uses `"start_url": "./index.html"`, with no hash.
- After UXR.2a, installed PWA launch will open Pregled instead of Biljke.
- This matches the locked owner decision and requires no `manifest.json` change.

Hashchange listener side effects:
- The V2 router listens with `window.addEventListener('hashchange', render)` at `index.html:13140`.
- The flip changes only which view renders when hash is empty.
- It does not alter storage, validators, import/export, or deep-link parsing.

Initial-load behavior:
- Current no-hash initial load: V2 active, Biljke rendered.
- Target no-hash initial load: V2 active, Pregled rendered.
- `#v2` must still render Biljke.

Deep-link compatibility:
- `#v2`, `#biljke`, `#pregled`, `#kalendar`, `#dnevnik`, and old `#v2/...` routes remain supported.
- Detail and form deep links remain unchanged.

`#legacy` fallback path:
- `#legacy` is handled before V2 rendering by the Slice 0 boot block.
- UXR.2a does not affect the legacy escape path.

Safety:
- The route flip is a one-line/two-line safe router change when done in UXR.2a.
- Required verification must include no-hash launch, `#v2`, the four primary aliases, all old `#v2/...` detail/form routes, and `#legacy`.

Blocker before UXR.2a: none found.

## 7. ID consumer map

Every `getElementById('v2*')` call found in `index.html`:

| ID | Line | Operation | Context | Category | UXR.2c relocation safe if ID preserved | Event listener dependency | Duplicate ID risk |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `v2Shell` | `3607` | `setAttribute('aria-hidden', 'false')` | Slice 0 boot | scaffold | yes | no | duplicate could reveal/update wrong shell |
| `v2ExitBtn` | `3611` | `addEventListener('click', ...)` | legacy escape | scaffold/navigation | yes | yes | duplicate could attach listener to wrong button |
| `v2StoreStatus` | `3636` | `textContent = message` | `setStatus()` | status/data utility | yes | no | duplicate could update wrong visible status |
| `v2CatalogStatus` | `6224` | `textContent = message` | `setCatalogStatus()` | status/data utility | yes | no | duplicate could update wrong visible status |
| `v2BackupStatus` | `6850` | `textContent = message` | V2 backup status helper | status/data utility | yes | no | duplicate could update wrong visible status |
| `v2ExportBtn` | `8092` | `addEventListener('click', exportV2)` | backup export setup | data utility | yes | yes | duplicate could leave visible button inert |
| `v2ImportBtn` | `8095` | `addEventListener('click', ...)` | backup import setup | data utility | yes | yes | duplicate could leave visible button inert |
| `v2ImportFile` | `8096` | `.click()` from import button; `addEventListener('change', ...)` | hidden file input | data utility/form | yes | yes | duplicate could open/read wrong input |
| `v2Plants` | `8115` | cached as `v2ScreenRoot` | V2 screen registry | render/navigation | yes if screen root role preserved | no | duplicate breaks view toggling |
| `v2Pregled` | `8116` | cached in `screens.pregled` | V2 screen registry | render/navigation | no relocation expected | no | duplicate breaks view toggling |
| `v2Kalendar` | `8117` | cached in `screens.kalendar` | V2 screen registry | render/navigation | no relocation expected | no | duplicate breaks view toggling |
| `v2SeasonalAction` | `8118` | cached in `screens.seasonalAction` | V2 screen registry | render/navigation | no relocation expected | no | duplicate breaks view toggling |
| `v2PlantsList` | `8119` | cached in `screens.list` | V2 screen registry | render/navigation | no relocation expected | no | duplicate breaks view toggling |
| `v2PlantsAddForm` | `8120` | cached in `screens.add` | V2 screen registry | render/form | no relocation expected | submit listener at `13114` | duplicate breaks view toggling/form |
| `v2PlantsDetail` | `8121` | cached in `screens.detail` | V2 screen registry | render/detail | no relocation expected | no | duplicate breaks view toggling |
| `v2ActivityCapture` | `8122` | cached in `screens.activityAdd` | V2 screen registry | render/form | no relocation expected | submit listener at `13118` | duplicate breaks view toggling/form |
| `v2Diary` | `8123` | cached in `screens.diary` | V2 screen registry | render/navigation | no relocation expected | no | duplicate breaks view toggling |
| `v2CorrectionForm` | `8124` | cached in `screens.correction` | V2 screen registry | render/form | no relocation expected | submit listener at `13122` | duplicate breaks view toggling/form |
| `v2CalendarMonth${currentMonth}` | `11869` | `scrollIntoView(...)` | Calendar current-month focus | render utility | yes if month IDs remain unique | no | duplicate scrolls wrong month |

Required relocation-sensitive IDs:
- `v2StoreStatus`: rendered once at `index.html:554`.
- `v2CatalogStatus`: rendered once at `index.html:557`.
- `v2BackupStatus`: rendered once at `index.html:560`.
- `v2ExportBtn`: rendered once at `index.html:561`.
- `v2ImportBtn`: rendered once at `index.html:562`.
- `v2ImportFile`: rendered once at `index.html:563`.
- `v2ExitBtn`: rendered once at `index.html:580`.

Conclusion: UXR.2c relocation is safe for these controls if IDs are preserved exactly once and listener setup remains after the nodes exist. Duplicate IDs would break behavior because every consumer uses `document.getElementById(...)`, which returns only the first match.

## 8. Position-dependent hooks

Search terms audited:

```text
childNodes
children
firstElementChild
lastElementChild
nextSibling
previousSibling
parentElement
closest(
querySelector(
querySelectorAll(
:nth-child
:first-child
:last-child
> :first-child
> *
> p
> div
```

Relevant findings:

| Line/function | Selector or traversal | Position-dependent | UXR.2b/2c relocation risk | Safe mitigation |
| --- | --- | --- | --- | --- |
| `index.html:8376`, `clearNode(node)` | `while (node.firstChild) node.removeChild(node.firstChild)` | no, only clears all children | none for scaffold relocation | keep screen root clearing scoped to the active screen |
| `index.html:11869`, `renderKalendar()` | `document.getElementById('v2CalendarMonth' + currentMonth)` | no, ID-based | none if month IDs stay unique | preserve generated month IDs |
| `index.html:8034-8036`, `exportV2()` | `document.body.appendChild(a)` / `removeChild(a)` | no scaffold dependency | none | keep export link ephemeral |

Legacy-only query selectors:
- `index.html:2775`: `document.querySelectorAll(".v4-plant-check:checked")`
- `index.html:2784`: `document.querySelector('input[name="v4Monitoring"]:checked')`

These are legacy V4 selectors, not V2 relocation hooks.

No V2 code was found that assumes scaffold/status/import/export nodes are direct siblings or direct children of a specific container. No V2 `closest(...)`, `parentElement`, sibling traversal, `:nth-child`, `:first-child`, or `:last-child` dependency blocks UXR.2b/2c.

## 9. Scaffold inventory

Current primary V2 scaffold nodes that later UXR.2c should relocate into Postavke/Data Utility:

| Node | Current parent/container | Current purpose | JS references | Event listeners | Relocation risk | Proposed destination |
| --- | --- | --- | --- | --- | --- | --- |
| `h1`, text `Vocnjak V2` | `#v2Shell` | Slice 0 title/scaffold heading | none | none | low | O aplikaciji / Dijagnostika |
| `p`, text `Slice 0 — ljuska` | `#v2Shell` | scaffold/debug copy | none | none | low | O aplikaciji / Dijagnostika |
| `p#v2StoreStatus` | `#v2Shell` | store/schema/runtime status | `setStatus()` at `3636` | none | low if ID preserved | O aplikaciji / Dijagnostika |
| `p#v2CatalogStatus` | `#v2Shell` | catalog status | `setCatalogStatus()` at `6224` | none | low if ID preserved | O aplikaciji / Dijagnostika |
| `p#v2BackupStatus` | `#v2Shell` | backup/import/export status | backup status helper at `6850` | none | low if ID preserved | Podaci i sigurnost |
| `button#v2ExportBtn`, text `Izvezi V2 sigurnosnu kopiju` | `#v2Shell` | export backup action | listener setup at `8092` | click | low if ID preserved | Podaci i sigurnost |
| `button#v2ImportBtn`, text `Uvezi V2 sigurnosnu kopiju` | `#v2Shell` | import backup action | listener setup at `8095`, triggers file input | click | low if ID preserved | Podaci i sigurnost |
| `input#v2ImportFile[type=file]` | `#v2Shell` | hidden import file picker | listener setup at `8096`, `8101` | change | low if ID preserved | Podaci i sigurnost, near import confirm panel |
| `button#v2ExitBtn`, text `Natrag na staru aplikaciju` | `#v2Shell` | legacy escape | listener setup at `3611` | click | low if ID preserved | Napredno |

Archive controls:
- Current archive UI is not scaffold-level. It is rendered by `appendArchiveSection()` at `index.html:9757` inside Plant detail.
- Purpose: archive/unarchive plant lifecycle management.
- Proposed destination remains Plant detail for the per-plant action unless a later Postavke/Voćnjak sheet explicitly adds an orchard-level archive view.
- Relocation risk: medium only if form submit/listener wiring is changed; no UXR.1a impact.

Diagnostics/status controls:
- Diagnostics are currently limited to store, catalog, and backup status text plus the legacy escape.
- Proposed destination: O aplikaciji / Dijagnostika and Napredno as above.

## 10. CSS scope audit

Current CSS organization:
- Legacy/global CSS starts near `index.html:17`.
- V2 CSS starts at `index.html:177` with `/* BEGIN V2 SHELL - Slice 0 */`.
- V2 Plants CSS starts at `index.html:189` with `/* BEGIN V2 PLANTS - Slice 1 */`.
- V2 Activities CSS starts at `index.html:428` with `/* BEGIN V2 ACTIVITIES - Slice 2 */`.
- The active V2 shell rule `.v2-active .header, .v2-active .form-container, .v2-active .bottom-nav { display: none; }` hides legacy UI while V2 is active.

Current V2 scoping convention:
- Mixed. Some shell behavior is scoped by `.v2-active`, but most V2 visual selectors are global ID/class selectors such as `#v2Shell`, `#v2Plants`, `.v2-plants-card`, `.v2-plants-grid`, and `.v2-pill`.
- Because V2 class names are prefixed, current leakage risk is low. UXR.1a should still scope tokens under `.v2-active`.

Global selectors that could affect legacy:
- Legacy `:root`, `*`, `body`, `.header`, `.form-container`, `.bottom-nav`, `.card`, `.btn-*`, `.form-*`, and `.cal-*` selectors must not be edited in UXR.1a.
- V2 selectors without `.v2-active` are mostly ID/prefix scoped, but UXR.1a should not broaden them.

Legacy selectors that must not be touched:
- `:root` design tokens used by the legacy app.
- `.header`, `.form-container`, `.bottom-nav`, `.card`, `.btn`, `.btn-*`, `.form-group`, `.form-control`, `.calendar-*`, `.v4-*`.

Existing CSS variables/tokens:
- Legacy `:root` defines tokens such as `--bg`, `--card`, `--primary`, `--primary-dark`, `--text`, `--muted`, `--border`, `--success`, `--danger`, `--warning`, and `--accent`.
- V2 currently does not have a separate scoped Phase B token block.

Mobile/safe-area CSS:
- Existing legacy bottom nav uses `padding-bottom: calc(10px + env(safe-area-inset-bottom))`.
- Body has mobile viewport sizing and bottom padding in legacy CSS.
- V2 currently has simple responsive rules at `max-width: 700px`, `max-width: 640px`, and `max-width: 520px`.

Form/button/card/list styles:
- V2 cards use `.v2-plants-card`, `.v2-plants-detail-card`, `.v2-seasonal-card`, `.v2-diary-item`, `.v2-correction-current`.
- V2 buttons use `.v2-plants-btn`, `.v2-plants-btn.secondary`, `.v2-plants-btn.ghost`, `.v2-plants-btn.danger`.
- V2 forms use `.v2-plants-form`, `.v2-plants-field`, `.v2-checkbox-row`, `.v2-observation-form`, `.v2-correction-grid`.

Risky selectors UXR.1a must avoid:
- Do not edit legacy `:root` tokens.
- Do not consume new tokens in existing selectors yet.
- Do not touch `.v2-active .header, .v2-active .form-container, .v2-active .bottom-nav`.
- Do not change `.hidden`, `[hidden]`, screen root display, form, button, list, or card selectors.

Exact insertion point for UXR.1a tokens:
- Insert immediately after `/* BEGIN V2 SHELL - Slice 0 */` at `index.html:177`, before the existing `.v2-active .header...` rule.

Expected UXR.1a scope:

```css
.v2-active {
  --v2-...: ...;
}
```

Conclusion: UXR.1a can be CSS-only and visually near-zero-diff because the tokens will be declared but not consumed.

## 11. Render audit by screen

### Pregled

- Function/block: `renderPregled()` at `index.html:11766`.
- DOM summary: clears `screens.pregled`, appends header/nav, reads store/snapshot, empty state or status sentence, young-tree section, B2 monitoring/risk section, seasonal sections.
- Visual hooks available: `.v2-plants-topbar`, `.v2-plants-muted`, `.v2-seasonal-section`, `.v2-seasonal-card`, `.v2-pill`, B2 cards.
- Missing hooks for later UXR: hero wrapper, weather hint zone, card hierarchy classes aligned to mockup, bottom nav active state.
- Risky assumptions: current order places B2/Praćenje before `Sada aktualno`; V2_UX_MODEL places Praćenje later. Later work should correct order without changing copy semantics.
- Blocks UXR.1a: no.

### Kalendar

- Function/block: `renderKalendar()` at `index.html:11820`.
- DOM summary: header/nav, one section per month, seasonal actions, young-tree reminders, B2 monitoring, current-month scroll by generated month ID.
- Visual hooks available: `.v2-calendar-month`, `.v2-seasonal-section`, `.v2-seasonal-card`.
- Missing hooks: Phase B calendar month band/header treatment and bottom nav shell hooks.
- Risky assumptions: current-month scroll depends on unique `v2CalendarMonth<month>` IDs.
- Blocks UXR.1a: no.

### Biljke Empty

- Function/block: `renderList()` at `index.html:9013`.
- DOM summary: topbar, add button, primary navigation/action buttons, empty message.
- Visual hooks available: `.v2-plants-topbar`, `.v2-plants-actions`, `.v2-plants-muted`.
- Missing hooks: Phase B empty orchard visual, primary bottom nav shell, Postavke entry.
- Risky assumptions: none for UXR.1a.
- Blocks UXR.1a: no.

### Biljke Populated

- Function/block: `renderList()` at `index.html:9013`.
- DOM summary: active plants as button-like rows/cards, archived plants section when present.
- Visual hooks available: `.v2-plants-grid`, `.v2-plants-card`, `.v2-plants-meta`, `.v2-pill`.
- Missing hooks: species icon/accent class hook; row/card split for mockup.
- Risky assumptions: `Dodaj evidenciju` is currently a primary Biljke action and must be demoted/removed from that surface later while keeping route accessible.
- Blocks UXR.1a: no.

### Add Plant

- Function/block: `renderAdd()` at `index.html:9956`.
- DOM summary: h2, message, form fields for species, variety, dates, notes, display label, submit/cancel.
- Visual hooks available: `.v2-plants-form`, `.v2-plants-field`, `.v2-plants-actions`.
- Missing hooks: focused form shell/top back; bottom nav hide rule for form route.
- Risky assumptions: submit handler is attached to `v2PlantsAddForm`; preserve ID and validation behavior.
- Blocks UXR.1a: no.

### Plant Detail

- Function/block: `renderDetail()` at `index.html:9826`.
- DOM summary: back/status/title, Karton, lifecycle/archive, young-tree section, current seasonal actions, B2 detail sections, observations/capture, trap advisory, plant diary preview.
- Visual hooks available: `.v2-plants-detail-card`, `.v2-seasonal-section`, `.v2-seasonal-card`, `.v2-observation-*`, `.v2-diary-list`.
- Missing hooks: mockup detail header, species icon, section-specific hooks for Karton/Klopke/Vizualni pregled/Što gledati/Opažanja.
- Risky assumptions: several inline forms live inside detail; later visual/form sessions must not break save/correction behavior.
- Blocks UXR.1a: no.

### Seasonal Action Detail

- Function/block: `renderSeasonalActionDetail(route)` at `index.html:11876`.
- DOM summary: header/nav, back to Kalendar, title/meta, purpose, contextual evidence action, source-backed `Napomene`, safety notes, per-plant evidence, Dnevnik link.
- Visual hooks available: `.v2-seasonal-card`, `.v2-seasonal-section`, `.v2-plants-actions`.
- Missing hooks: detail hero/card treatment and clearer notes hierarchy.
- Risky assumptions: source-backed notes are visible and must remain visible after card styling.
- Blocks UXR.1a: no.

### Add Evidence / Activity

- Function/block: `renderActivityAdd(route)` at `index.html:10736`.
- DOM summary: back button, form title, optional contextual seasonal action, plant checklist, date/status/notes, submit/cancel.
- Visual hooks available: `.v2-plants-form`, `.v2-checkbox-row`, `.v2-plants-actions`.
- Missing hooks: focused form route shell and hidden bottom nav.
- Risky assumptions: route params preselect contextual action; import/export/storage must not be touched.
- Blocks UXR.1a: no.

### Observation / Add Opažanje

- Function/block: `appendNoteObservationCaptureSection()` at `index.html:9293`.
- DOM summary: Plant detail section with note observation button, inline form, notes field, save/cancel.
- Visual hooks available: `.v2-observation-capture`, `.v2-observation-form`, `.v2-observation-actions`.
- Missing hooks: mockup Opažanja section styling.
- Risky assumptions: inline current field refs are cleared by `setViews()` when detail route deactivates.
- Blocks UXR.1a: no.

### Visual Inspection / Scouting

- Function/block: `appendPlantDetailB2Section()` at `index.html:9115`.
- DOM summary: B2 monitoring/scouting guidance and capture controls embedded in Plant detail.
- Visual hooks available: `.v2-b2-section`, `.v2-b2-card`, `.v2-observation-*`.
- Missing hooks: dedicated Vizualni pregled and Što gledati section styling.
- Risky assumptions: no standalone scouting route exists; later form/nav treatment should account for inline behavior.
- Blocks UXR.1a: no.

### Correction Forms

- Function/block: `renderCorrection(route)` dispatches to `renderActivityCorrection()` at `index.html:12373` or `renderObservationCorrection()` at `index.html:12715`.
- DOM summary: current record summary, correction form, fields, submit/cancel.
- Visual hooks available: `.v2-correction-current`, `.v2-correction-grid`, `.v2-plants-form`.
- Missing hooks: focused form shell/top back; bottom nav hide rule.
- Risky assumptions: grouped observation correction is payload-only; do not change correction marker semantics.
- Blocks UXR.1a: no.

### Dnevnik

- Function/block: `renderDiary(route)` at `index.html:12322`, rows from `appendDiaryItems()` and helpers.
- DOM summary: h2/topbar, back button, optional plant-scoped meta, empty state or chronological list.
- Visual hooks available: `.v2-diary-list`, `.v2-diary-item`, `.v2-diary-title`, `.v2-diary-meta`.
- Missing hooks: timeline styling and row type markers.
- Risky assumptions: chronological sort and correction markers must be preserved.
- Blocks UXR.1a: no.

### Archive

- Function/block: `appendArchiveSection()` at `index.html:9757`; archived list section in `renderList()`.
- DOM summary: per-plant lifecycle card with archive/unarchive action and optional reason/date; archived plants listed separately in Biljke.
- Visual hooks available: `.v2-archive-*`, `.v2-plants-card`.
- Missing hooks: top-menu/archive action placement for Phase B detail layout.
- Risky assumptions: no archive route; archive form is inline.
- Blocks UXR.1a: no.

### Settings/Data Utility/Scaffold

- Function/block: static scaffold nodes at `index.html:549`, listeners around `3607`, `8092`.
- DOM summary: V2 title/status/export/import/legacy escape above screen roots.
- Visual hooks available: IDs only; no Postavke sheet exists yet.
- Missing hooks: Postavke/Data Utility shell and grouped panels.
- Risky assumptions: IDs must remain unique for listener/status behavior.
- Blocks UXR.1a: no.

### Legacy Escape

- Function/block: `v2ExitBtn` listener at `index.html:3611`.
- DOM summary: `history.replaceState(... '#legacy')` then reload.
- Visual hooks available: button ID only.
- Missing hooks: later placement under Napredno.
- Risky assumptions: must preserve escape behavior.
- Blocks UXR.1a: no.

## 12. Section order + copy map

### Pregled

Current render order in `renderPregled()`:
1. Topbar/title and seasonal nav.
2. Empty-state if no active plants.
3. Status sentence: `Danas je aktualno...`, `Za provjeru...`, `Uskoro...`.
4. `Mlade voćke`.
5. B2 `Sezonsko praćenje` / Praćenje.
6. `Sada aktualno`.
7. `Za provjeru: nema evidencije`.
8. `Uskoro`.
9. Quiet state: `Danas nema posebnih sezonskih podsjetnika.`

Comparison to `V2_UX_MODEL.md`:
- The locked model wants status sentence, `Sada aktualno`, weather hint if present, `Za provjeru`, `Uskoro`, `Praćenje`, plan-change signal if present, quiet state.
- Runtime currently has no weather hint and no explicit plan-change signal section.
- Runtime places B2/Praćenje before `Sada aktualno`; later hero/card work should move Praćenje after Uskoro while preserving source-backed B2 content.

Later hero/card work can preserve the locked order, but it should consciously correct the current B2 placement.

### Dnevnik

Current row format:
- Activity records are grouped into activity diary cards with title `<date> · <action label>`.
- Observation records render as note, trap, stage, visual inspection/scouting, or grouped observation cards.
- Correction markers display `ispravljeno`.
- Chronological order is preserved by `diaryItemsForResult()` sorting effective event date descending, then recorded time descending, then ID.
- `nakon razdoblja` semantics appear in activity status/evidence display and must be preserved by later styling.

Later timeline styling can preserve Activity records, Observation records, correction markers, `ispravljeno`, late/`nakon razdoblja` meaning, and chronological order.

### Plant detail

Current section order:
1. Top back/status/title.
2. `Karton`.
3. Archive/lifecycle section (`Životni vijek voćke`) when applicable.
4. `Mlada voćka`.
5. `Trenutne sezonske radnje`.
6. B2 sections including `Praćenje` and `Sezonske napomene`.
7. `Opažanja`, including inline note, trap, and stage capture.
8. `Klopke`.
9. `Dnevnik ove voćke`.

Later UXR.5b target placement:
- `Karton`: near top, after detail header.
- `Mlada voćka`: after Karton when relevant.
- `Trenutne sezonske radnje`: after Mlada voćka.
- `Klopke`: before visual inspection when trap guidance exists.
- `Vizualni pregled`: own section from current B2 scouting/capture content.
- `Što gledati`: source-backed guidance from B2/scouting notes.
- `Opažanja`: capture and latest observations after guidance.
- `Dnevnik ove voćke`: near bottom.
- Archive action: demoted/secondary action near bottom or detail overflow, not above the main seasonal content.

## 13. Phase A footprint protection

Phase A copy/behavior that must not regress:

| Item | Current runtime location | Later session may touch | Avoid regression by |
| --- | --- | --- | --- |
| Pregled seasonal cards clickable | `appendSeasonalCard(..., true)` at `index.html:11440`; `renderPregled()` calls at `11802-11804` | UXR.3/UXR.4 card styling | keep click listener and seasonal detail route |
| Calendar-window disclaimer rewrite | `SEASONAL_DETAIL_BASELINE_NOTE_HR` at `index.html:11874`, rendered at `11911` | UXR.4 detail styling | keep copy and placement visible |
| Harvest/winter `purposeCue` rewrite | Seasonal card/detail purpose cue usage around `index.html:11409`, `11451` | UXR.3/UXR.4 card styling | do not rewrite purpose strings while styling |
| Dnevnik empty-state copy uses `evidencija` | Plant preview around `index.html:9910`; Dnevnik empty state at `12357` | UXR.6 timeline styling | preserve wording |
| Mlade voćke heading parity | `appendYoungTreePregledSection()`, `appendYoungTreeCalendarSection()`, `appendYoungTreePlantDetailSection()` | UXR.3/UXR.5 styling | keep heading meaning and parity across screens |
| Pregled empty-section copy | `renderPregled()` calls at `index.html:11802-11806` | UXR.3 Pregled hero/cards | preserve exact empty meanings |
| Canonical catalog refresh branch | canonical refresh branch at `index.html:6654-6666`, status text at `6662`, console log at `6663` | any storage-adjacent session | avoid storage/schema/import/export changes in Phase B visual sessions |
| `#pregled` alias | `normalizeRouteHash()` at `index.html:8870` | UXR.2a shell/routes | preserve alias |
| `#kalendar` alias | `normalizeRouteHash()` at `index.html:8871` | UXR.2a shell/routes | preserve alias |
| `#biljke` alias | `normalizeRouteHash()` at `index.html:8872` | UXR.2a shell/routes | preserve alias to `#v2` |
| `#dnevnik` alias | `normalizeRouteHash()` at `index.html:8873` | UXR.2a shell/routes | preserve alias |
| old `#v2/...` routes | `getRoute()` at `index.html:8877` | UXR.2a shell/routes | do not rename old deep links |
| `#legacy` escape | Slice 0 boot at `index.html:506`; listener at `3611` | UXR.2c scaffold relocation | preserve escape behavior |

## 14. Plan Templates visibility risk

This is not a Plan Templates editing session. No Plan Templates content should be changed in Phase B visual work.

Current source-backed visibility:
- `V2_ORCHARD_PLAN_TEMPLATES.md` contains plant-state/fenology instructions and timing constraints.
- Current runtime carries source-backed notes into seasonal detail through `appendCanonicalTextSection('Napomene', found.def.notes)` at `index.html:11925`.
- Spray and bee-safety notes are rendered separately through `appendSpraySafetyNotes()` at `index.html:11927`.
- Generic disclaimer text is separate from specific notes in Seasonal action detail.

Specific text/risk checks:

| Content | Current risk classification | Notes |
| --- | --- | --- |
| plant-state/fenology instructions | already OK; must verify before V2 Done | Present in source-backed notes and B2 guidance; visual cards must not collapse them away |
| `dok su pupovi zatvoreni` | already OK; must verify before V2 Done | Present in source templates/runtime notes |
| `nakon opadanja latica` | already OK; must verify before V2 Done | Present in source templates/runtime notes |
| `ne tijekom cvatnje` | already OK; must verify before V2 Done | Present as safety/timing guidance |
| `ne tijekom aktivnog leta pčela` | already OK; must verify before V2 Done | Present in spray/bee safety guidance |
| source-backed `Napomene` | already OK; must verify before V2 Done | Seasonal detail currently renders notes visibly |
| generic disclaimer separated from specific notes | already OK | Baseline note and `Napomene` are separate |
| visual cards/detail screens hiding or over-generalizing notes | must verify before V2 Done | UXR.4/UXR.5 must keep notes inspectable and not replace them with generic copy |

Separate Plan Templates micro-session:
- Only if a later audit identifies incorrect source content, such as a species-specific timing inconsistency.
- Not a Phase B blocker for UXR.1a.

## 15. Species_id field audit

Runtime field reality:
- No `plant.species_id` reads were found in `index.html`.
- Current V2 runtime stores and reads species identity as `plant.species`.
- `renderAdd()` writes `species: species` when creating a plant.
- Validators require `plant.species` to be a catalog-supported string.

Where plant species is read:
- Plant validation and store validation.
- Species label display through `speciesLabel(...)`.
- Plant list and detail rendering.
- Seasonal/action filtering and catalog matching.
- Variety coverage and fallback logic.

CSS class mapping safety:
- It is safe in a later session to add a visual class mapping based on the existing `plant.species` value.
- Do not add or require a new `species_id` schema field.
- Treat `plant.species_id` in Phase B language as conceptual unless a future schema session explicitly changes it, which is out of scope here.

Display translation:
- Species values are stored as canonical IDs such as `apple`.
- Display labels are translated through `SPECIES_LABEL_HR`, for example `apple` -> `Jabuka`.
- Visual mapping should use canonical stored IDs, not translated labels.

Missing/unknown species:
- Current validators should prevent persisted unknown species in valid V2 data.
- A defensive fallback is still required for missing/unknown values, especially for old/imported/corrupt/in-memory data.
- Unknown species must use a neutral generic identity visual with no diagnosis, ripeness, urgency, or treatment implication.

Verified current `EXPECTED_SPECIES` source-of-truth list from `index.html:6206`:

```text
apple
sweet_cherry
sour_cherry
plum
peach
nectarine
pear
quince
apricot
almond
walnut
hazelnut
olive
pomegranate
```

This is the complete current `EXPECTED_SPECIES` list.

`fig` is not in the Phase B species icon set.

`citrus` is not in the Phase B species icon set.

Legacy/catalog history mentions fig/citrus as excluded/deferred in source docs and legacy data, but they must stay out of Phase B species icons unless a future source-of-truth catalog session adds them.

## 16. Font fallback impact

Later UXR.1b target strategy:

```css
--v2-display: 'Fraunces', 'Source Serif Pro', Georgia, 'Times New Roman', serif;
--v2-body: 'DM Sans', -apple-system, 'Segoe UI', sans-serif;
```

Impact:
- Adding the Google Fonts link is isolated to `index.html`.
- `manifest.json` does not need to change.
- `sw.js` does not need to change.
- Offline fallback is acceptable: the app should render with the fallback stack if Fraunces is unavailable.
- Current `sw.js` already treats Google Fonts URLs with a network-first cache path, so no service worker change is needed.
- Mockup layout should survive fallback font metrics, but hero/card typography should be checked on iPhone widths once tokens are consumed by later sessions.

Later sessions consuming display/body tokens:
- UXR.1b declares the font tokens/link.
- UXR.3 Pregled visual shell and hero likely consumes `--v2-display`.
- UXR.4 Kalendar and seasonal detail consumes body/card tokens.
- UXR.5 Biljke/Plant detail consumes both display and body tokens.
- UXR.6 Dnevnik/timeline consumes body tokens.

Blocker before UXR.1b: none found.

Do not add fonts in UXR.0.

## 17. UXR.1a readiness

UXR.1a is ready to implement.

UXR.1a can be CSS-only.

UXR.1a should touch only the `index.html` `<style>` block.

Exact recommended insertion point:
- Immediately after `/* BEGIN V2 SHELL - Slice 0 */` at `index.html:177`.
- Before the existing `.v2-active .header, .v2-active .form-container, .v2-active .bottom-nav` rule.

Exact selector/scope:

```css
.v2-active {
  --v2-...: ...;
}
```

UXR.1a must not touch:
- JavaScript.
- DOM/HTML structure outside the token insertion.
- Routes.
- Storage.
- Validators.
- Import/export behavior.
- Plan Templates.
- `manifest.json`.
- `sw.js`.
- `Claude-design/`.
- Existing legacy `:root` tokens.
- Existing selectors, unless needed only to insert the new scoped token block.

Required verification checks:

```bash
git status --short
git diff --check
git diff -- index.html
```

Manual route smoke check after UXR.1a:
- No-hash load.
- `#v2`
- `#pregled`
- `#kalendar`
- `#biljke`
- `#dnevnik`
- `#v2/add`
- `#v2/activity/add`
- `#v2/diary`
- `#legacy`

Expected verification result:
- Only a scoped CSS token block changes.
- No visible/behavioral runtime diff beyond inert CSS custom properties.
- No blocker.

## 18. Proposed UXR.1a implementation prompt

````text
Approved for commit — UXR.1a

You are Codex working on the Vocnjak App V2 project.

Implement UXR.1a only.

Scope:
- Add Phase B Adriatic CSS custom properties only.
- CSS tokens only.
- Tokens must be scoped under `.v2-active`.
- Insert the token block immediately after `/* BEGIN V2 SHELL - Slice 0 */` in `index.html`.
- Do not consume the tokens in existing selectors yet.
- Expected visual diff is near-zero.

Do not change:
- JS
- DOM
- routes
- storage
- validators
- import/export behavior
- Plan Templates
- `manifest.json`
- `sw.js`
- `Claude-design/`

Do not commit `Claude-design/`.

Run verification before committing:

```bash
git status --short
git diff --check
git diff -- index.html
```

Also smoke-check the V2 routes:
- no hash
- `#v2`
- `#pregled`
- `#kalendar`
- `#biljke`
- `#dnevnik`
- `#v2/add`
- `#v2/activity/add`
- `#v2/diary`
- `#legacy`

Return the exact focused diff summary.

Commit with an appropriate UXR.1a commit message and stop.

Do not push unless explicitly instructed.
````
