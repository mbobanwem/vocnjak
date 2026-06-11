# Vocnjak Post-V2 Roadmap

## Status and authority

V2 is Done. V2 is the current product and runtime baseline.

This document is the canonical post-V2 roadmap. It consolidates the V2 Done baseline, the owner's long-term product direction, useful historical intent from old V1 Sessions 20-26, roadmap synthesis findings, regionalization risk, mobile/store direction, notification gaps, and long-term AI/subscription tracks.

Old V1 Sessions 20-26 are not active session numbers. Their useful product intent is preserved here and translated into a V2-owned roadmap. The old numbering is retired.

Archived docs remain historical input only. They are not active authority and must not be resumed directly. Post-V2 phases are owner-gated; this document does not authorize implementation by itself.

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
- Store/mobile architecture must avoid a thin remote WebView "skalamerija."
- PWA-first, single-file V2 runtime remains the current baseline, but store/mobile packaging is an owner-gated architecture decision.
- Capacitor-bundled, TWA, and native paths require later audit and current platform verification before selection.
- AI photo analysis is a long-term strategic feature, but it must be gated by safety, privacy, store, backend, and payment decisions.

## Retired V1 Sessions 20-26 mapping

The old numbering is retired. The table below preserves useful intent only.

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

Objective: create this document and add minimal pointers from active docs.

Out of scope: runtime changes, schema changes, storage changes, Plan Templates changes, archive rewrites, or reopening V2.

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

Phase 1 progress (content reliability): S1 apple + nectarine runtime parity restore is complete (`adb2b90`). Apple and stone-fruit post-bloom beginner clarity — apple scab / mildew, nectarine / peach / plum / apricot post-bloom monilia, plum pjegavost lista, apricot mraz-vs-monilija — is complete, with peach / nectarine leaf-curl recognition wording and shared spray-safety relevance filtering (`2ac3701`, `8fa4d58`, `4d06be5`, `f4951c3`, `4502f0c`); the beginner-clarity copy-ordering rule is active (`8846754`). The automated source/runtime content parity verifier is complete and pushed (`799caae`; run with `node tools/verify-content-parity.mjs`). S5-A is complete at `bcecdf0` — quince post-bloom fungicide projection, almond post-bloom fungicide projection, olive post-harvest pruning (Dec runtime + January note prose SAFE_TRANSFORM); verifier PASS. Remaining Phase 1 candidates: hazelnut pollination awareness (external fact-check pending), adult walnut summer pruning (external fact-check pending), and the Fuji / Fantasia harvest-timing owner decisions. Source-first discipline holds: Plan Templates remain source of truth and may stay fuller than the condensed runtime `Napomene` projection; no source-backed content is removed to match runtime.

Out of scope: broad regionalization, BBCH, hidden offsets, automatic treatment shifting, symptom diagnosis, or AI.

### Phase 2 - Early decision spikes

Objective: make key product and architecture decisions before runtime work.

Store/mobile architecture decision:

- Objective: choose the approved path for modern mobile/store readiness.
- Why it matters: the app must feel modern, fast, offline-capable, and acceptable for App Store / Google Play without becoming a thin remote WebView wrapper.
- Owner decisions: PWA-only for now, TWA, Capacitor-bundled, native shell, or native rewrite path; required offline baseline; native permissions; app metadata; store-review expectations.
- Out of scope: implementation, payment code, broad refactor, or framework migration unless separately approved.

Regionalization / Zagreb baseline decision:

- Objective: decide how V2 evolves beyond the Zagreb/continental Croatia baseline.
- Why it matters: Paris, Berlin, southern Italy, coastal Croatia, alpine areas, and local microclimates do not share one reliable calendar.
- Owner decisions: target countries and launch order; whether/when to add country or region fields; source model; regional content granularity; localization priority.
- Out of scope: hidden numeric offsets, automatic treatment-window shifting, BBCH/climate engine, or unsupported precision.

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

Include:

- source-backed regional/country Plan Templates;
- broad region/climate bands only when source-backed;
- Paris/Berlin/southern Italy timing problem;
- no hidden numeric offsets;
- no automatic treatment-window shifting;
- no BBCH/climate engine unless separately researched and approved.

### Phase 6 - Public PWA readiness

Objective: prepare public web/PWA release from the V2 baseline.

Include:

- deployment verification;
- manifest, service worker, and icon review;
- privacy/legal/support materials;
- export/import public-user testing;
- storage/security review;
- release checklist.

### Phase 7 - Mobile/store architecture implementation path

Objective: execute the approved mobile/store direction.

Include:

- PWA/TWA/Capacitor/native decision record;
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
- mobile/store architecture path;
- free tier guarantees;
- AI photo scope and retention policy;
- subscription/payment model;
- legacy app fate.

## Immediate next sessions

Recommended sequence after this docs commit:

1. Phase 1 content reliability / Plan Templates closeout.
2. Phase 2 decision spike: regionalization / Zagreb baseline.
3. Phase 2 decision spike: store/mobile architecture.

Do not implement those in this roadmap session.

## Stop conditions

Stop and ask the owner before any work that would:

- change runtime code;
- change schema/model/storage/import-export;
- edit `index.html`, `manifest.json`, `sw.js`, Plan Templates, plant catalog, architecture, UX model, domain model, archives, or `Claude-design/`;
- reopen V2 Done;
- resume old V1 Sessions 20-26 directly;
- treat archived docs as active authority;
- implement regional offsets, notifications, mobile packaging, AI, subscription, paywall, or payments without a dedicated owner-approved session.
