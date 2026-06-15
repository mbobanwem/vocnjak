# Vocnjak Roadmap

## Status and authority

V2 is Done. V2 is the current product and runtime baseline.

`ROADMAP.md` is the single active roadmap authority. It tells agents what is next, what future session order is allowed, which ideas are completed / absorbed / retired / future-only, and which work remains owner-gated.

`CURRENT_STATE.md` is the chronological state/history record. It is not roadmap authority.

Decision records remain the detailed authorities for their tracks:

- `REGIONALIZATION_DECISION_RECORD.md` — regionalization / REG track
- `DISTRIBUTION_DECISION_RECORD.md` — native/store / STORE/CAP track

Archived V1 and concept docs remain historical input only. They are not active authority and must not be resumed directly. Old V1/concept sessions must not be resumed by number. REG and STORE/CAP are separate future tracks; they are not old Session 19, Session 21, or any other retired V1/concept session.

Broad Markdown hygiene, pointer cleanup beyond this authority rename, and archiving of completed docs are separate future sessions. This roadmap does not authorize implementation by itself.

## What to read first

For new work, read:

1. `CLAUDE.md`
2. `ROADMAP.md`
3. `CURRENT_STATE.md`
4. The relevant decision record if the work touches REG, STORE/CAP, native distribution, notifications, regionalization, sync/cloud, AI/photo, subscription, or payments.

New ideas belong in future roadmap sessions unless the owner explicitly opens an implementation session.

## Product end goal

Vocnjak should grow from the V2 Done baseline toward a calm, orchard-first product that can support:

- a multi-country fruit-tree app;
- multi-language support;
- regionalized, source-backed seasonal guidance;
- a modern iPhone/Android-capable app;
- App Store / Google Play readiness;
- calm opt-in notifications;
- safe AI photo analysis;
- a later subscription/payment path.

It must not become:

- a generic task manager;
- a pesticide prescription app;
- an AI diagnosis app;
- a compliance, overdue, or nagging system;
- a slow remote WebView wrapper.

## Non-negotiable principles

Post-V2 work must preserve:

- orchard-first behavior;
- calendar-first planning surfaces;
- source-backed Plan Templates;
- iPhone-first, one-handed UX;
- local-first data ownership;
- deterministic core logic;
- fast/offline baseline behavior;
- no fake regional precision;
- no hidden treatment offsets;
- no AI-authored treatment recommendations;
- no pesticide, product, or dose prescription;
- no paywall around core logging, history, export, import, or basic calendar visibility unless separately approved by the owner.

## Corrected roadmap facts

- V2 is the baseline. Legacy v4/iCal/Supabase-era functionality must not be assumed to exist in V2.
- iCal, GitHub `.ics`, and Supabase sync currently appear to be legacy/v4 concepts, not V2 architecture.
- V2 currently has no dedicated calendar export or notification architecture.
- V2 notification strategy is greenfield.
- Legacy iCal may remain a bridge or fallback only if the owner approves it.
- Regionalization and the current Zagreb/continental Croatia baseline are core product risks for multi-country launch.
- Native/store distribution is decision-recorded in `DISTRIBUTION_DECISION_RECORD.md`.
- Long-term public product target is a store-distributed iOS/Android native mobile app.
- Web/PWA remains bridge/dev/verifier only, not a long-term public product channel.
- Capacitor is the first native vehicle to prove in `CAP-SPIKE`, not production-approved by the decision record.
- TWA is rejected as the planned path.
- AI photo analysis is a long-term strategic feature, but it must be gated by safety, privacy, store, backend, and payment decisions.

## Retired V1 Sessions 20-26 mapping

The old numbering is retired. The table below preserves useful intent only. REG and STORE/CAP work is governed by the dedicated decision records and must not be inferred from these old session numbers.

| Old V1 item | Post-V2 translation |
|---|---|
| V1 Session 20 onboarding | Post-V2 onboarding plus region, language, and orchard setup |
| V1 Session 21 multi-language | i18n foundation plus localized content strategy |
| V1 Session 22 tools/equipment | Later source-backed materials and context guidance |
| V1 Session 23 store architecture | Modern mobile/store architecture decision |
| V1 Session 24 subscription | Later monetization strategy |
| V1 Session 25 paywall UX | Later paywall design after value, safety, and free-tier decisions |
| V1 Session 26 payments | Later platform/IAP/payment implementation |

## Post-Phase-1 numbered roadmap lock

The numbered sessions below are the owner-facing execution roadmap after Phase 1. These numbers are new Post-Phase-1 roadmap numbers and must not be confused with retired V1 Session 20-26 labels.

Technical labels such as `REG-R1-D`, `CAP-SPIKE`, `STORE-W1`, `CORE-AUDIT`, `APP-ID-D`, `NOTIF-D`, and `STORE-SUB` remain binding sublabels/gates under the numbered sessions.

This roadmap does not authorize implementation by itself. A session opens only when the owner explicitly approves that numbered session or explicitly names the technical sublabel/gate. The owner must explicitly approve any new numbered session, roadmap insertion, reorder, merge, split, or scope expansion. Agents must not add roadmap items because they "make sense."

Locked `REG-D1` and `STORE-D1` decisions remain stronger than this overview. If this overview conflicts with `REGIONALIZATION_DECISION_RECORD.md` or `DISTRIBUTION_DECISION_RECORD.md`, the decision record wins.

Archive documents are historical context only unless an active document explicitly points to them. Do not resume archived V1/concept sessions by number.

Every session must preserve the standing quality gates: relevant verifier PASS, content/source parity, fail-closed import/export posture, safety/privacy/support discipline where relevant, clean git status, no unrelated files, no stray worktrees or branches, and no staged local/tooling junk.

The next owner-facing session after Phase 1 closeout is Session 20 - Regionalization foundation. Within Session 20, the first technical substep is `REG-R1-D` unless the owner explicitly chooses a different numbered session.

Numbering expresses preferred owner-facing roadmap order, not proof that every later session is blocked by every earlier session. Parallel-safe tracks may be opened only when their prerequisites and owner approval are explicit. Session 21 may proceed in parallel with regional pack work after owner approval. It is not a prerequisite for `REG-A-D`, but production native work remains blocked by its gates.

| Session | Owner-facing name | Technical sublabels/gates | Classification | Locked boundaries |
|---:|---|---|---|---|
| 20 | Regionalization foundation | `REG-R1-D`, `REG-VER1`, `REG-R1-R`, `REG-CATF`, `REG-PACKS-D` | Mandatory before a second region/content pack; design first, then implementation gates; first owner-facing session after Phase 1. | No date offsets, formulas, or computed shifts. Every shipped regional date must be source-cited or intra-country byte-equal carry-forward where allowed. `catalog_v1` is permanent stored data and must never be renamed. `contentPack` is derived only; persisted version remains `catalog_version`. No persisted `contentPack` in plant records. No region switch that silently rewrites existing plant calendars/history. Unknown country/region/catalog imports fail closed. No second pack yet. No foreign region IDs before source-corpus sessions. Only live countries/regions appear in UI. |
| 21 | Native app path / PWA bridge / portability proof | `CAP-SPIKE`, `STORE-W1`, `CORE-AUDIT`, `APP-ID-D`, `LEGACY-D` | Mandatory before public native/store release; parallel-safe lane after owner approval; not a universal blocker for Session 22 / `REG-A-D`; proof/design first. | Capacitor is proof only, not production approval. Canonical core must not fork. No native validator fork. Guided export/import only. No silent same-device localStorage migration. Validated V2 export/import remains the portability contract across native, monetization, and sync decisions. Platform backup is not sync. No accounts/cloud/sync in this session. No icon/splash/name/bundle work before `APP-ID-D`. PWA remains bridge/dev/preview/content-verification unless owner re-promotes it. `manifest.json` / `sw.js` edits only inside `STORE-W1` allowed scope or explicit owning session. |
| 22 | First regional content pack - HR Adriatic | `REG-A-D`, `REG-A-R` | Mandatory before first new live pack; research/curation first, implementation later; validates the regional pack engine. | HR Adriatic / southern Croatia only unless owner changes target. `REG-A-D` is source dossier / ledger only. `REG-A-R` cannot start until Session 20 runtime/verifier/pack-delivery gates are complete and owner activates it. Requires complete source dossier, complete ledger, verifier PASS, and explicit owner activation. No foreign packs. No HR continental date offsets. No cross-country carry-forward. |
| 23 | Existing-plant regional adoption | `REG-UPG-D`, `REG-UPG-R` | Mandatory before moving existing plant calendars to a different content pack; design first. | Explicit per-plant adoption only. No silent rewrite. No history mutation. Existing plant records keep current calendars until adopted. Migration/import rules remain fail-closed. |
| 24 | User onboarding / first-run setup | `ONB-D`, `ONB-R` | Mandatory before public native/store release; design first; after regional foundation, first pack model, and adoption design. | Low-friction and iPhone-first. Minimal taps. Language, region, and content pack are distinct. Existing users are not forcibly reset. Onboarding must not invent regional precision or hardcode fields before Session 20/23 model decisions. First-run disclosure must state dates are calm reminders, not commands. |
| 25 | Multilingual / i18n foundation | `REG-I18N-F`, optional `I18N-D` | Mandatory before localized foreign-market release; design/tooling first. | Language renders content; language never selects agronomic timing. Country, region, language, and `contentPack` remain distinct. No translations/runtime strings before i18n architecture and validation policy. Localized agronomic content requires source/translation validation. Content pack and UI language are related but not the same thing. |
| 26 | Future country-region expansion | `REG-SI-F`, `REG-SI-D`, `REG-SI-R`, `REG-AT-F`, `REG-AT-D`, `REG-AT-R`, `REG-CTRY-*` | Mandatory per new country/content pack; repeatable source-corpus / design / runtime model. | No foreign country/region IDs before that country's source-corpus session. No cross-country carry-forward. First pack per country is country-sourced or absent. HR can donate methodology/taxonomy/verification structure, not foreign dates/legal/safety wording. |
| 27 | Native release execution gates | `LEGACY-R`, `CAP-BUILD`, `STORE-SUB` | Mandatory before first store upload; serial gate bucket, not one approval; implementation only after prerequisite gates. | Session 27 is not one approval. `LEGACY-R`, `CAP-BUILD`, and `STORE-SUB` open separately and serially under their own gates. `STORE-SUB` means store submission / store readiness, not subscription/paywall/payment. Subscription/paywall belongs to Session 32. No legacy key deletion before `LEGACY-D/R`; protected legacy keys remain protected. No first binary upload before legacy gates are complete. Store readiness must preserve export/import portability and local-first posture. |
| 28 | Notifications / reminders | `NOTIF-D`, later `NOTIF-R` only if approved | Owner-gated research/design first. | Wait for native/storage/onboarding decisions. Calm, opt-in reminders only. No overdue/compliance/nag copy. Local/on-device by default. No push/backend by default. No notification work before `NOTIF-D`. |
| 29 | Tools / equipment context | `TOOLS-D` | Optional future slot; not strict critical path; owner-gated design first. | Context/readiness only. No ecommerce. No purchase funnel. No inventory implementation unless owner separately approves. No pesticide/product/dose recommendation. No treatment prescription. Orchard-first and safety-bounded. |
| 30 | Scouting and recommendation safety | `SCOUT-D`, `REC-D` | Mandatory before recommendation/intelligence features; safety decision first. | No pressure/severity/recommendation state before safety decision. No pressure, severity, urgency, detect-to-treat, or treatment recommendation. No inference from missing or weak evidence. No invented pest/disease pressure. No treatment/product/dose advice. Safe deterministic context must be distinguished from forbidden diagnosis/treatment recommendation. |
| 31 | AI / photo analysis | `AI-D`, `PHOTO-D`, later `AI-R` only if approved | Mandatory before any AI/photo implementation; research/design only first. | Photos/media never enter core JSON store. AI output descriptive only. AI output may only become user-confirmed Observation if later approved. No AI diagnosis. No treatment/product/dose recommendation. No AI-authored action recommendation. Privacy, storage, retention, cost, backend/provider, and safety boundaries must be decided before implementation. |
| 32 | Subscription / paywall / payments | `SUB-D`, `PAY-D` | Mandatory before monetization. | Separate from `STORE-SUB`. No IAP/payment implementation before `SUB-D/PAY-D`. No paywall around core logging/history/export/import/basic calendar unless owner separately approves. Backup/export/import remain unpaywalled core unless owner separately approves. Free-tier boundaries must be decided before implementation. |
| 33 | Sync / cloud / accounts decision only | `SYNC-D` | Explicitly not approved now; decision-only; owner decision only. | Decision-only: accounts/cloud/sync are not approved now. Local-first remains current. Export/import remains portability contract. Platform backup is not sync. Supabase/cloud backup is not V2 sync unless separately approved. No accounts/cloud/merge/conflict/privacy semantics until separately approved. Sync/cloud/accounts cannot be bundled into native path. |

### Standing gate Q - Testing / verifier / content parity discipline

Standing gate Q is mandatory across all sessions. It is not a one-time implementation session and does not authorize feature work.

It contains the existing content parity verifier, the `REG-VER1` relationship, source/content/runtime parity checks, and clean git discipline. Relevant verifier PASS, content/source parity, catalog/runtime parity, fail-closed import/export posture, clean git status, no unrelated files, no `.DS_Store`, no `.claude`, no nested repos/submodules, no stray worktrees/branches, no untracked plan files, and targeted git add only are required where relevant.

### Standing gate S - Safety / privacy / support discipline

Standing gate S is mandatory where relevant. This gate blocks unsafe work; it is a gate only, not implementation approval.

It covers privacy/support metadata, AI/photo privacy and retention boundaries, account/cloud privacy boundaries, payment/subscription safety boundaries, and store/support/privacy disclosure obligations. Safety/privacy/support requirements bind every relevant session, but no accounts, AI, payments, store assets, push/backend, or cloud work becomes approved through this gate alone.

### Old-label mapping table

| Old label | New placement | Notes |
|---|---|---|
| `REG-D1` | Completed decision record before Session 20 | Preserved in `REGIONALIZATION_DECISION_RECORD.md`; not implementation approval. |
| `REG-R1-D` | Session 20 | First technical substep unless owner chooses a different numbered session. |
| `REG-VER1` | Session 20 / Standing gate Q | Verifier/tooling relationship for REG parity discipline. |
| `REG-R1-R` | Session 20 | Regional runtime foundation after design approval. |
| `REG-CATF` | Session 20 | Catalog/content-pack foundation after design approval. |
| `REG-PACKS-D` | Session 20 | Pack-delivery decision under REG-D1 and STORE-D1 constraints. |
| `CAP-SPIKE` | Session 21 | Proof gate only; not production approval. |
| `STORE-W1` | Session 21 | Bridge/dev correctness only; parallel-safe with `CAP-SPIKE`. |
| `CORE-AUDIT` | Session 21 | Mandatory before native build/native-module/KMP evaluation. |
| `APP-ID-D` | Session 21 | Mandatory before `CAP-BUILD`; no identity work before this gate. |
| `LEGACY-D` | Session 21 | Docs-only legacy decision before `LEGACY-R`. |
| `REG-A-D` | Session 22 | HR Adriatic source dossier / ledger only. |
| `REG-A-R` | Session 22 | First live regional pack activation after Session 20 gates and owner activation. |
| `REG-UPG-D` | Session 23 | Existing-plant regional adoption design. |
| `REG-UPG-R` | Session 23 | Existing-plant adoption runtime after design approval. |
| `REG-I18N-F` | Session 25 | i18n foundation for REG/language separation. |
| `REG-SI-F` | Session 26 | Slovenia source-corpus foundation. |
| `REG-SI-D` | Session 26 | Slovenia design gate. |
| `REG-SI-R` | Session 26 | Slovenia runtime only after source/design approval. |
| `REG-AT-F` | Session 26 | Austria source-corpus foundation. |
| `REG-AT-D` | Session 26 | Austria design gate. |
| `REG-AT-R` | Session 26 | Austria runtime only after source/design approval. |
| `REG-CTRY-*` | Session 26 | Repeatable country expansion pattern. |
| `NOTIF-D` | Session 28 | Notification/reminder design before any implementation. |
| `SCOUT-D` | Session 30 | Scouting safety decision before broader scouting features. |
| `REC-D` | Session 30 | Recommendation/intelligence safety decision before recommendation features. |
| `AI-D` | Session 31 | AI decision before any AI implementation. |
| `PHOTO-D` | Session 31 | Photo/media decision before any photo implementation. |
| `SUB-D` | Session 32 | Subscription/free-tier/paywall strategy decision. |
| `PAY-D` | Session 32 | Payment/IAP decision after monetization strategy. |
| `SYNC-D` | Session 33 | Sync/cloud/accounts decision only; no implementation approval. |
| `TOOLS-D` | Session 29 | Tools/equipment context design. |
| `ONB-D` | Session 24 | Onboarding/first-run design. |
| `ONB-R` | Session 24 | Onboarding runtime after design approval. |
| `LEGACY-R` | Session 27 | Runtime removal/quarantine after `LEGACY-D`; before first binary upload. |
| `CAP-BUILD` | Session 27 | Native build candidate only after prerequisite gates. |
| `STORE-SUB` | Session 27 | Store submission/readiness; not subscription/paywall/payment. |

## Detailed roadmap notes

The numbered roadmap lock above is the owner-facing order after Phase 1. The detailed phase notes below preserve active track detail and historical translation context only; they do not override the numbered lock or the REG/STORE decision records.

### Phase 0 - Canonical roadmap baseline

Objective: maintain `ROADMAP.md` as the single active roadmap authority and keep active docs pointed at `ROADMAP.md` / `CURRENT_STATE.md`.

Out of scope: runtime changes, schema changes, storage changes, Plan Templates changes, archive rewrites, broad Markdown hygiene, or reopening V2.

### Phase 1 - Content reliability / Plan Templates closeout

Objective: resolve known content follow-ups before broader public expansion.

Known candidates:

- Springcrest bird-net timing — resolved by S1.1 note clarification for early peach/nectarine varieties;
- hazelnut pollination awareness;
- olive cross-year pruning;
- quince/almond post-bloom projection;
- adult walnut summer pruning;
- apple post-bloom runtime parity and source-first beginner clarity;
- action-window and catalog source/runtime parity guardrail;
- future catalog/content parity;
- non-blocking visual/accessibility polish only if the owner prioritizes it.

Phase 1 progress (content reliability): S1 apple + nectarine runtime parity restore is complete (`adb2b90`). Apple and stone-fruit post-bloom beginner clarity — apple scab / mildew, nectarine / peach / plum / apricot post-bloom monilia, plum pjegavost lista, apricot mraz-vs-monilija — is complete, with peach / nectarine leaf-curl recognition wording and shared spray-safety relevance filtering (`2ac3701`, `8fa4d58`, `4d06be5`, `f4951c3`, `4502f0c`); the beginner-clarity copy-ordering rule is active (`8846754`). The automated source/runtime content parity verifier is complete and pushed (`799caae`; run with `node tools/verify-content-parity.mjs`). S5-A is complete at `bcecdf0` — quince post-bloom fungicide projection, almond post-bloom fungicide projection, olive post-harvest pruning (Dec runtime + January note prose SAFE_TRANSFORM); verifier PASS. The Fuji / Fantasia harvest-timing correction (S6) is complete: Fuji 10.10.–05.11. (`late`), Fantasia 10.08.–05.09. (`late`). The hazelnut pollination and adult walnut summer pruning source-check flags (S5-B) are resolved in `V2_ORCHARD_PLAN_TEMPLATES.md` (docs-only). No specific Phase 1 content-reliability flags remain; only open-ended future catalog/content parity and optional non-blocking polish. Phase 1 is closed, and the next owner-facing session is Session 20 under the numbered roadmap lock. Source-first discipline holds: Plan Templates remain source of truth and may stay fuller than the condensed runtime `Napomene` projection; no source-backed content is removed to match runtime.

Out of scope: broad regionalization, BBCH, hidden offsets, automatic treatment shifting, symptom diagnosis, or AI.

### Phase 2 - Early decision spikes

Objective: make key product and architecture decisions before runtime work.

Native/store distribution decision — DECIDED (STORE-D1):

- Detailed decision record: `DISTRIBUTION_DECISION_RECORD.md` (canonical). This roadmap keeps only this compact pointer.
- Native/store distribution is decision-recorded but NOT implemented. No runtime changes are authorized by the record.
- Long-term public product target is an iOS/Android native mobile app.
- Web/PWA is bridge/dev/verifier, not a long-term public product channel.
- Each STORE/CAP/CORE/LEGACY/APP-ID/NOTIF session opens only by explicit owner instruction naming the session id.
- Session track: `STORE-D1` (done), `CAP-SPIKE`, `STORE-W1`, `CORE-AUDIT`, `LEGACY-D`, `APP-ID-D`, `REG-PACKS-D`, `LEGACY-R`, `CAP-BUILD`, `NOTIF-D`, `STORE-SUB`.
- Hard rules (full list in the record): STORE-D1 authorizes no implementation; Capacitor is first vehicle to prove, not production-approved; canonical core must not be forked; no silent migration; no first uploaded store binary before `LEGACY-R`; no notifications, AI/photo, sync/cloud, monetization, accounts, or IAP without an approved owning session.

Regionalization / Zagreb baseline decision — DECIDED (REG-D1):

- Detailed decision record: `REGIONALIZATION_DECISION_RECORD.md` (canonical). This roadmap keeps only this compact pointer.
- The regionalization track is decision-recorded but NOT implemented. No runtime changes are authorized by the record.
- Each REG session opens only by explicit owner instruction naming the session id.
- Session track: `REG-D1` (done), `REG-R1-D`, `REG-VER1`, `REG-R1-R`, `REG-CATF`, `REG-PACKS-D`, `REG-A-D`, `REG-A-R`, `REG-UPG-D`, `REG-UPG-R`, `REG-SI-F`, `REG-I18N-F`, `REG-SI-D/R`, `REG-AT-F/D/R`, `REG-CTRY-*`.
- Owner-approved market/content priority: HR Adriatic → SI → AT → DE → IT → CH → FR → BA/RS/XK later.
- Hard rules (full list in the record): no numeric offsets or computed date shifts; no cross-country carry-forward; fail-closed import; only live countries/regions in UI; foreign region ids decided only at that country's source-corpus session.

Legacy iCal / notifications decision:

- Objective: decide whether V2 needs calendar export, local notifications, push notifications, or a legacy iCal bridge.
- Why it matters: V2 has no dedicated calendar export or notification architecture; legacy iCal appears outside V2.
- Owner decisions: keep/remove legacy bridge; V2 calendar export; native/local/push notification strategy; opt-in language.
- Out of scope: compliance language, overdue pressure, nagging, or automatic treatment decisions.

### Phase 3 - Onboarding + region/language setup

Objective: translate old V1 onboarding intent into V2.

Include:

- first-run orientation;
- language selection;
- country/region setup;
- orchard setup;
- first plant entry;
- baseline disclosure;
- low-friction and skippable steps where appropriate.

### Phase 4 - i18n / multi-language foundation

Objective: translate old V1 multi-language intent into a V2 i18n foundation.

Include:

- UI string architecture;
- HR/EN first unless the owner changes priority;
- DE/IT/FR based on target-market decision;
- Plan Templates localization policy;
- agronomic translation validation.

### Phase 5 - Regional content expansion

Objective: move beyond Zagreb/continental Croatia safely.

Execution model, session gates, and country registry: see `REGIONALIZATION_DECISION_RECORD.md`.

Include:

- source-backed regional/country Plan Templates;
- broad region/climate bands only when source-backed;
- Paris/Berlin/southern Italy timing problem;
- no hidden numeric offsets;
- no automatic treatment-window shifting;
- no BBCH/climate engine unless separately researched and approved.

### Phase 6 - Bridge/dev PWA correctness

Objective: keep the web/PWA bridge, dev, and verifier channel trustworthy until the native/store path replaces it. This is not public web-product investment.

Include:

- deployment verification;
- manifest stale-copy cleanup, service worker cold-start correctness, and font self-hosting only if opened by `STORE-W1`;
- privacy/support page stubs only if needed by store prerequisites;
- export/import bridge testing;
- storage/security review;
- bridge/dev correctness checklist.

### Phase 7 - Mobile/store architecture implementation path

Objective: execute the approved mobile/store direction.

Include:

- `DISTRIBUTION_DECISION_RECORD.md`;
- `CAP-SPIKE`;
- `CORE-AUDIT`;
- `APP-ID-D`;
- `LEGACY-D` / `LEGACY-R`;
- `CAP-BUILD`;
- `STORE-SUB`;
- modern 2026 app requirement;
- explicit rejection of thin remote WebView packaging;
- performance/offline expectations;
- native permissions;
- app metadata;
- store review readiness.

### Phase 8 - Notifications strategy

Objective: define and implement calm opt-in notifications only after architecture decisions.

Include:

- V2 calendar export if approved;
- native/local/push notifications after mobile shell if approved;
- no overdue, compliance, nag, or pressure language;
- legacy iCal bridge/fallback decision.

### Phase 9 - Tools/materials context

Objective: translate old V1 tools/equipment intent into source-backed V2 context guidance.

Include:

- source-backed equipment/material guidance;
- no ecommerce;
- no inventory;
- no noisy UI.

### Phase 10 - AI photo analysis

Objective: safely discover and later implement AI photo analysis.

Include:

- descriptive-only analysis;
- uncertainty/confidence;
- asking for more context or photos when needed;
- connection to Plan Templates and monitoring guidance;
- user-confirmed Dnevnik save only;
- privacy and image-retention policy;
- provider/backend/cost decisions;
- no diagnosis certainty;
- no pesticide prescription.

### Phase 11 - Subscription / paywall / payments

Objective: translate old V1 monetization intent into a V2-owned business path.

Include:

- free tier guarantees;
- AI photo credits as likely premium value;
- subscription model;
- paywall UX;
- platform IAP/payment rules;
- no paywall around core deterministic basics unless separately approved.

## Decision register

Owner decisions required before implementation:

- target countries and launch order;
- first languages;
- regionalization model;
- whether/when to add region/country field;
- whether legacy iCal remains a fallback;
- native/store implementation gates after STORE-D1;
- free tier guarantees;
- AI photo scope and retention policy;
- subscription/payment model;
- legacy app fate.

## Source documents

Roadmap content is grounded in:

- `CURRENT_STATE.md`
- `REGIONALIZATION_DECISION_RECORD.md`
- `DISTRIBUTION_DECISION_RECORD.md`
- `archive/v2/V2_EXECUTION_ROADMAP.md`
- `archive/v1/EXECUTION_ROADMAP_V1.md`
- `archive/future/STORE_READY_ROADMAP_V1.md`

## Immediate next sessions

Phase 1 content reliability is closed. `REG-D1` and `STORE-D1` are recorded decision sessions, not implementation sessions.

The next owner-facing session after Phase 1 closeout is Session 20 - Regionalization foundation. Within Session 20, the first technical substep is `REG-R1-D` unless the owner explicitly chooses a different numbered session.

Session 21 may proceed in parallel with regional pack work after owner approval. It is not a prerequisite for `REG-A-D`, but production native work remains blocked by its gates.

Future numbered sessions and technical sublabels remain owner-gated. Do not implement them in this roadmap session.

## Stop conditions

Stop and ask the owner before any work that would:

- change runtime code;
- change schema/model/storage/import-export;
- edit `index.html`, `manifest.json`, `sw.js`, Plan Templates, plant catalog, architecture, UX model, domain model, archives, or archived design artifacts under `archive/design/Claude-design/`;
- reopen V2 Done;
- resume old V1 Sessions 20-26 directly;
- treat archived docs as active authority;
- implement regional offsets, notifications, mobile packaging, AI, subscription, paywall, or payments without a dedicated owner-approved session.
