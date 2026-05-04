# V2 Execution Roadmap

**Status:** S11.A and S11.B complete. S11.C1–S11.D pending.

This document converts the completed V2 specification stack (S6–S10) into an implementation execution roadmap. It is bound by the locked core documents and does not authorize runtime implementation by itself.

---

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
- `V2_CURRENT_STATE.md`
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
- `V2_CURRENT_STATE.md` must not be edited during S11.A, S11.B, S11.C1, or S11.C2.

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
