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

## Roadmap phases

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

Phase 1 progress (content reliability): S1 apple + nectarine runtime parity restore is complete (`adb2b90`). Apple and stone-fruit post-bloom beginner clarity — apple scab / mildew, nectarine / peach / plum / apricot post-bloom monilia, plum pjegavost lista, apricot mraz-vs-monilija — is complete, with peach / nectarine leaf-curl recognition wording and shared spray-safety relevance filtering (`2ac3701`, `8fa4d58`, `4d06be5`, `f4951c3`, `4502f0c`); the beginner-clarity copy-ordering rule is active (`8846754`). The automated source/runtime content parity verifier is complete and pushed (`799caae`; run with `node tools/verify-content-parity.mjs`). S5-A is complete at `bcecdf0` — quince post-bloom fungicide projection, almond post-bloom fungicide projection, olive post-harvest pruning (Dec runtime + January note prose SAFE_TRANSFORM); verifier PASS. The Fuji / Fantasia harvest-timing correction (S6) is complete: Fuji 10.10.–05.11. (`late`), Fantasia 10.08.–05.09. (`late`). The hazelnut pollination and adult walnut summer pruning source-check flags (S5-B) are resolved in `V2_ORCHARD_PLAN_TEMPLATES.md` (docs-only). No specific Phase 1 content-reliability flags remain; only open-ended future catalog/content parity and optional non-blocking polish. Source-first discipline holds: Plan Templates remain source of truth and may stay fuller than the condensed runtime `Napomene` projection; no source-backed content is removed to match runtime.

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

Recommended sequence after this authority cleanup:

1. Phase 1 content reliability / Plan Templates closeout.
2. Regionalization decision: recorded in `REGIONALIZATION_DECISION_RECORD.md` (REG-D1 done); REG sessions remain owner-gated by session id.
3. Native/store distribution decision: recorded in `DISTRIBUTION_DECISION_RECORD.md` (STORE-D1 done); STORE/CAP/CORE/LEGACY/APP-ID/NOTIF sessions remain owner-gated by session id. The corrected order starts with `CAP-SPIKE`, and `STORE-W1` is parallel-safe with it but does not block it.

Do not implement those in this roadmap session.

## Stop conditions

Stop and ask the owner before any work that would:

- change runtime code;
- change schema/model/storage/import-export;
- edit `index.html`, `manifest.json`, `sw.js`, Plan Templates, plant catalog, architecture, UX model, domain model, archives, or archived design artifacts under `archive/design/Claude-design/`;
- reopen V2 Done;
- resume old V1 Sessions 20-26 directly;
- treat archived docs as active authority;
- implement regional offsets, notifications, mobile packaging, AI, subscription, paywall, or payments without a dedicated owner-approved session.
