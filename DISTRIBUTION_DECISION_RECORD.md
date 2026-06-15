# VOCNJAK - DISTRIBUTION DECISION RECORD (STORE-D1)

Date: 2026-06-15
Owner: project owner
Runtime reference point: `036f05f Lock regionalization decision record`

This record authorizes nothing by itself. Each STORE/CAP/CORE/LEGACY/APP-ID/NOTIF session opens only by explicit owner instruction naming the session id.

---

## 1. Status

- Status: approved planning record / distribution decision record. This is NOT implementation and NOT implementation authorization.
- Runtime status: no native/store implementation exists.
- The current app remains the PWA/web bridge and dev runtime.
- The current runtime remains unchanged by this record.
- This record exists to prevent future reinterpretation of the owner's native/store distribution direction.

---

## 2. Owner position

- The long-term public product target is an iOS and Android mobile app.
- The app is used on mobile, in the orchard.
- Web/PWA was mainly a bridge so the owner could get something working and visible.
- Web/PWA is not intended as a long-term public product channel.
- The owner dislikes fragile hybrid compromises and wants a durable mobile solution.
- The owner wants the app to work perfectly on phones.

---

## 3. Product/channel framing

- The long-term public product target is a store-distributed native mobile app for iOS and Android.
- "Native mobile app" means an installed app with native capabilities, such as durable storage, share/import/export, notifications, and future camera/photo path.
- This does not mandate a native UI rewrite.
- The internal UI runtime is an implementation detail selected by proof.
- Web/PWA remains bridge, dev, preview, and content-verification surface only.
- Web/PWA has no long-term public product status unless the owner explicitly re-promotes it.
- Do not write that PWA is retired or deprecated now.

---

## 4. Canonical core contract

Canonical core is the UI-independent domain/content/contract layer. It includes:

- catalog and pack semantics
- source-backed guidance copy
- fail-closed validators
- deterministic derivation engine
- correction/effective-record semantics
- export/import JSON schema
- backup validation contract

Current reality:

- This core currently lives inside `index.html`.
- It is logically separable but not physically extracted.
- Native work must consume canonical contracts and must not fork validators, derivation, catalog semantics, correction semantics, or export/import JSON.
- Physical extraction requires an owner-approved session.
- `CORE-AUDIT` is mandatory before `CAP-BUILD`, native-module work, or KMP/native evaluation.
- Do not claim the core is already extracted.

---

## 5. Distribution strategy

- Capacitor-packaged shell is the first native vehicle to prove.
- Capacitor is not approved for production by this record.
- TWA is rejected as the planned path.
- TWA may exist only as an emergency Android-only fallback if explicitly owner-approved later.
- Full native rewrite is not approved.
- KMP/native rewrite is not a parallel implementation track.

---

## 6. CAP-SPIKE proof gate

`CAP-SPIKE` must prove/disprove Capacitor on real devices before any production native app work.

Required proof list:

- offline boot parity on real iPhone and Android
- bundled assets/fonts behavior
- app-owned JSON file storage feasibility
- temp+rename or equivalent write resilience
- app update survival
- backup/restore behavior
- validator round-trip
- synthetic large-store parse scale
- App Group/shared-container feasibility report only
- share/export/import round-trip
- local notification feasibility with app killed/offline
- owner quality bar on real iPhone
- VoiceOver and Dynamic Type path
- no build step imposed on canonical core
- App Store 4.2 defense case

These are proof items. This record does not state that any item is already solved.

---

## 7. Fallback and rewrite triggers

Fallback order:

1. Hand-rolled native shell if failure is Capacitor/tool/plugin-specific.
2. KMP/native evaluation if failure is webview/concept-level.

KMP/native may open only if explicitly triggered by one of:

- concept-level quality-bar failure of webview rendering
- required capability needing sustained background execution or deep OS integration beyond native modules
- material platform policy turns against webview-packaged apps
- owner pivots into real-time / AR / on-device-ML type product

KMP/native is not authorized by this record. Any KMP/native evaluation requires explicit owner instruction.

---

## 8. Storage and migration

- Native storage target hypothesis is an app-owned atomic JSON file in app private container.
- Same validated snapshot, same export/import contract.
- Capacitor Preferences / UserDefaults / SharedPreferences are not the orchard database.
- SQLite is deferred and requires separate owner approval supported by evidence.
- WebView/browser localStorage is bridge-only.
- App Group/shared container is feasibility-only until proven and needed.
- Platform backup is not sync and not cross-platform portability.
- Backup/restore behavior remains CAP-SPIKE proof.
- Migration from bridge/PWA to native is guided export/import only.
- Silent same-device localStorage migration is not a reliable/supported STORE-D1 path.
- No merge import.
- No silent migration.

---

## 9. Legacy gate

- Legacy v3/v4 code remains in `index.html`.
- Legacy includes old external service paths and old cloud/backup concepts.
- `LEGACY-D` is docs-only and decides removal/quarantine/preservation.
- `LEGACY-R` executes the approved removal/quarantine later.
- `LEGACY-R` is not required before scratch `CAP-SPIKE`.
- `LEGACY-R` is mandatory before first binary upload to App Store Connect or Play Console, including internal testing/TestFlight/internal tracks.
- Protected legacy localStorage keys must remain untouched/byte-identical through removal.

---

## 10. STORE-W1 bridge/dev correctness

- `STORE-W1` exists only for bridge/dev correctness and store-prereq stubs.
- It is not public PWA product investment.
- It is parallel-safe with `CAP-SPIKE`.
- It must complete before `STORE-SUB`.

Allowed scope only:

- offline cold-start fix in `sw.js`
- preserve Safari-redirect rationale
- device verification
- `navigator.storage.persist()`
- export/import round-trip check on owner iPhone Safari
- font self-hosting
- manifest stale copy cleanup only
- privacy/support page stubs

Forbidden:

- visual polish
- install-promotion UX
- icon redesign
- feature work
- schema/validator changes
- public web-product investment

---

## 11. APP-ID-D

- `APP-ID-D` is mandatory before `CAP-BUILD`.
- Scope:
  - app display name
  - store-name availability
  - bundle id
  - signing team/certificates/provisioning
  - Apple/Google developer account enrollment plan
  - icon/splash asset plan
  - privacy/support URL hosting decision
  - store metadata prerequisite checklist
- Actual values are not chosen in STORE-D1.

---

## 12. REG-PACKS-D dependency

STORE-D1 binding constraints for `REG-PACKS-D`:

- packs are bundled in native binary
- no remotely fetched packs by default
- pack data heart must be native-consumable JSON
- service-worker caching of packs is web/dev-channel only

Deferred to `REG-PACKS-D`:

- inline-until-second-pack vs split timing
- pure JSON + loader vs JSON-in-JS shim
- file naming
- cache versioning
- parity verifier integration

---

## 13. Notifications / AI / sync boundaries

Notifications:

- local, on-device scheduling inside native app later
- no push and no backend by default
- no notification work before `NOTIF-D`
- finite schedule strategy deferred to `NOTIF-D`
- calm, opt-in, no-pressure rules bind future design
- do not write exact hard iOS pending notification count

AI/photo:

- later Phase 10 feature
- photos never enter core JSON store
- AI output only user-confirmed Observation
- descriptive only
- no diagnosis/treatment/product/dose advice
- backend/provider/privacy/retention/cost later
- no AI/camera work authorized

Sync/cloud:

- platform backup is not sync
- export/import remains portability
- STORE-D1 introduces no accounts/cloud/sync
- future sync only by explicit owner-approved session

---

## 14. Final session map

| Order | Session id | Type | Mandatory? | Goal | Does | Does NOT | Gate |
|---:|---|---|---|---|---|---|---|
| 1 | `STORE-D1` | docs-only | Mandatory | Lock distribution decision record | Creates this record; compact roadmap pointer; short hard-stop block; tracker sync | Runtime, store assets, shell project, storage, migration, notifications, AI, sync, monetization | Owner approval of STORE-D1 |
| 2 | `CAP-SPIKE` | tooling scratch outside repo | Mandatory vehicle gate | Prove/disprove Capacitor shell on real devices | Tests shell feasibility, app-owned storage, update/backup behavior, validator round-trip, notifications feasibility, owner iPhone quality | Commits production native app, forks core contracts, changes runtime/docs without approval | STORE-D1 |
| 3 | `STORE-W1` | implementation | Mandatory bridge correctness before `STORE-SUB`; parallel-safe with `CAP-SPIKE` | Keep bridge/dev channel trustworthy and add store-prereq stubs | Fixes bridge/dev PWA correctness only within §10 | Public web-product investment, visual polish, install promotion, feature work, schema/validator changes | STORE-D1 |
| 4 | `CORE-AUDIT` | read-only/docs/tooling | Mandatory before `CAP-BUILD`, native-module work, or KMP/native evaluation | Inventory core/UI entanglement and enforce core boundaries | Maps canonical core, UI coupling, validators, derivation, export/import, and extraction risks | Extracts, rewrites, or forks the core | STORE-D1; recommended after CAP-SPIKE |
| 5 | `LEGACY-D` | docs-only | Mandatory before `LEGACY-R` | Decide legacy removal/quarantine/preservation | Defines protected keys, removal strategy, verification, and first-binary blocker | Deletes or edits legacy runtime | STORE-D1 |
| 6 | `APP-ID-D` | docs/decision | Mandatory before `CAP-BUILD` | Decide app identity/accounts/store prerequisites | Locks name, bundle id plan, signing, account plan, icon/splash plan, privacy/support hosting, metadata checklist | Creates accounts, assets, or app binaries; chooses values inside STORE-D1 | STORE-D1 |
| 7 | `REG-PACKS-D` | docs-only REG track | Mandatory before `REG-A-R` | Decide pack delivery mechanics under STORE-D1 constraints | Chooses pack format/delivery/cache/version/verifier approach | Creates pack files, edits runtime, fetches remote packs by default | REG-D1 + STORE-D1 |
| 8 | `LEGACY-R` | runtime removal/quarantine | Mandatory before first binary upload | Execute the approved legacy decision | Removes or quarantines legacy exactly as approved, preserving protected keys | Touches protected keys without byte proof, uploads binaries, changes unrelated runtime | LEGACY-D |
| 9 | `CAP-BUILD` | implementation | Owner-gated | Build first native app candidate | Implements approved shell path while consuming canonical contracts | Starts before CAP-SPIKE/CORE-AUDIT/APP-ID-D gates, forks validators/derivation/export-import | CAP-SPIKE + CORE-AUDIT + APP-ID-D; LEGACY-R before upload |
| 10 | `NOTIF-D` | docs-only | Owner-gated | Define notification product/scheduling scope | Decides local notification model, opt-in language, finite schedule strategy | Adds push/backend, pressure/nag/compliance copy, notification implementation | STORE-D1; likely after CAP-SPIKE |
| 11 | `STORE-SUB` | release | Owner-gated | Store submission / internal testing upload | Prepares/upload store candidate after gates | Uploads with legacy/privacy ambiguity, unproven storage, or unauthorized features | CAP-BUILD + LEGACY-R + STORE-W1 + owner approval |

---

## 15. Documentation placement

- This file is the canonical detailed distribution/mobile decision record.
- `POST_V2_ROADMAP.md` contains compact pointer and session list.
- `CLAUDE.md` contains only a short hard-stop block.
- `V2_CURRENT_STATE.md` contains only tracker/status.
- Architecture/domain/UX docs are not edited in STORE-D1.
- Runtime, `sw.js`, and `manifest.json` are not edited in STORE-D1.

---

## 16. Non-negotiable invariants

- STORE-D1 authorizes no implementation.
- Native app is product target; PWA/web is bridge/dev/verifier only.
- PWA is not retired now.
- Capacitor is first vehicle to prove, not production-approved.
- Canonical core must not be forked.
- No silent migration.
- No platform backup treated as sync.
- No runtime edits before named implementation session.
- No legacy code in first uploaded store binary.
- No remote pack fetch by default.
- No notifications, AI/photo, sync/cloud, monetization, accounts, or IAP from STORE-D1.
- Every session opens only by explicit owner instruction naming the session id.

---

## 17. Stop conditions

Stop before committing STORE-D1 if:

- any file outside the approved STORE-D1 docs scope changes
- runtime, `sw.js`, `manifest.json`, tools, icons, Plan Templates, plant catalog, architecture, domain, UX, or regionalization docs change
- verifier fails
- git status shows unexpected tracked changes

Stop in future sessions if:

- a STORE/CAP/CORE/LEGACY/APP-ID/NOTIF session is attempted without explicit owner instruction naming the session id
- an agent treats this record as implementation authorization
- an agent treats Capacitor as production-approved before CAP-SPIKE passes
- an agent starts native rewrite, KMP/native evaluation, or native-module work before the required gates
- an agent forks canonical core contracts instead of consuming them
- an agent proposes silent migration from bridge/PWA localStorage
- an agent treats platform backup as sync or cross-platform portability
- an agent tries to upload a store binary before LEGACY-R
- an agent adds remote pack fetching by default
- an agent adds notifications, AI/photo, sync/cloud, accounts, monetization, IAP, or store assets without the owning approved session
