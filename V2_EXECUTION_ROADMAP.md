# V2 Execution Roadmap

**Status:** S11.A, S11.B, S11.C1, S11.C2, and S11.D complete. Runtime implementation is underway; Runtime Slices 0–7 are complete through S7.4. B2 metadata-only projection boundary is complete; Runtime Slice 8 Step 1, Step 2, and Step 3 are complete. Full Runtime Slice 8 is not complete and later Slice 8 steps remain deferred.

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
- No tracker edits to `CLAUDE.md` or `V2_CURRENT_STATE.md` during S11.C1.

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
- S8 storage (immutable Activity / Observation / Correction; Plant archive flag; export / import shape)
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

Status: STEP 1 + STEP 2 + STEP 3 COMPLETE — Plant detail read-only B2 preview is implemented, Plant detail free-standing note Observation capture + Dnevnik evidence is implemented, and read-only Pregled/Kalendar B2 monitoring/risk visibility is implemented. Full Runtime Slice 8 is not complete and later Slice 8 steps remain deferred until owner-approved.

Purpose:

Make V2 start consuming B2 monitoring/risk metadata safely without turning monitoring into a task manager, warning system, treatment recommender, or diagnosis engine. Slice 8 starts with a narrow Plant detail read-only preview, then later adds broader surfaces and writes only after the owner approves their semantics.

Approved decomposition:

1. First implementation — Plant detail read-only B2 monitoring/risk preview. **Complete.**
   - Consumes B2 metadata through an explicit S8 read path.
   - Shows plant-specific monitoring and risk-awareness context only on Plant detail.
   - Keeps monitoring items and risk-awareness items visually/textually separated.
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
4. Later structured observation capture.
   - Deferred until registries/vocabularies are owner-approved.
   - Includes `trap` capture, `scouting` capture with `target_code`, `symptom` capture with `symptom_code`, `stage_obs` capture with `stage_code`, program-attached observations, target/pest registry, symptom registry, stage vocabulary, monitoring program declarations, multi-plant observation capture, and observation correction.
   - Only later monitoring-context steps may introduce observation-record states such as neutral `Bez zapisa` / `Zadnji zapis` where §0 permits them.
5. Later stage confirmation.
   - Deferred until the owner approves minimal stage vocabulary.
   - Stage confirmation must remain optional and non-blocking.

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
- Later only: program-attached observation capture, structured trap/scouting/symptom/stage capture, monitoring-context record displays, and stage confirmation.
- Stage vocabulary rule: B2 did not add `stage_vocabulary[]`. Stage confirmation stays deferred until the owner approves a minimal generic MVP vocabulary or an explicit stage-write deferral/restriction.

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

## 37. Slice 9 — Observation correction and archive/lifecycle baseline

Purpose:

Close correction and lifecycle in V2. Owner can correct Observation records (including stage observations) using additive Correction records. Owner can archive plants without losing history.

Allowed touch points:

- `index.html` only, inside the V2 region. Observation correction entry, Correction write reusing the Slice 5 shape, Plant archive flag UI, archive-state filtering in snapshot consumers.

Must not touch:

- Plan upgrade review or Za pregledati cues (post-usable).
- Legacy delete paths.
- Legacy keys.
- Legacy plant-archive UX (read-only).

Depends on:

- Slice 5 (Correction record shape — Slice 9 reuses it for Observation correction; one Correction shape per S8 §1.24).
- Slice 8 (Observation records to correct; stage observation records).
- S11.C1 Slice 4 (Plant identity for archive flag).

Produces:

- Observation correction per V2_UX_MODEL.md §17 + §11.11: additive Correction record linked to the original Observation; original is not mutated; Dnevnik / Detalj / Plant detail render the corrected version with the §3.9 correction marker.
- Stage-code correction per §11.11 using the same Correction shape.
- Archive / lifecycle per V2_UX_MODEL.md §14 + §4.14 + §4.16 + V2_ARCHITECTURE.md §4.10: archive flag + date + reason on Plant; archived plants excluded from active orchard scope (Pregled, Kalendar, current actions) but visible for historical query (Dnevnik archived plants per §3.12, archived-scope rendering per §4.10).
- No-delete invariant per §14: archive is reversible; no Plant record is ever physically removed; history of archived plants remains queryable.

Manual verification:

- Correct an Observation date → Correction record written; original Observation bytes unchanged; Plant detail / Dnevnik / Detalj show corrected date with §3.9 marker.
- Correct a stage code → same pattern; snapshot stage effect updated per §4.11.
- Archive a plant → archive flag set; plant disappears from Biljke active list (§4.14) and from Pregled / Kalendar active scope (§4.10); plant remains visible in archived view; Dnevnik history preserved.
- Unarchive a plant → archive flag cleared; plant returns to active scope.
- Export → JSON contains correction records and archive flags.
- Round-trip import → all corrections and archive states preserved.
- Legacy `vocnjak_v4` VALUE byte-equal across session.

Stop conditions:

- Observation correction would mutate the original record.
- Archive would delete records.
- Archive would silently rewrite history.
- Slice 9 would touch plan upgrade review or Za pregledati cues.
- Slice 9 would require any new persistent storage key.
- Slice 9 would diverge the Correction record shape from Slice 5.

Parallelization notes:

- Within Slice 9, Observation correction and archive are independent — may be drafted in parallel by two implementers, commit serially as one slice or as 2 sub-unit commits within one owner-approved scope.

---

## 38. C2 default-readiness boundary

S11.C2 itself does not flip the default. The actual "V2 becomes default" decision belongs to S11.D milestone gating (§17 V2 activation strategy + S11.D verification gates).

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
- tracker sync timing (`CLAUDE.md` and `V2_CURRENT_STATE.md` sync after S11.D approval, per §10)
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
- B2 stable-id source-map projection grouping is complete as metadata only and was NOT implemented by B1 or B1.1. Runtime Slice 8 Step 1 added Plant detail read-only B2 monitoring/risk preview only; Runtime Slice 8 Step 2 added Plant detail free-standing note Observation capture and Dnevnik / plant-history `Opažanja` rows only; Runtime Slice 8 Step 3 added read-only Pregled/Kalendar B2 monitoring/risk visibility only. `monitoring_programs[]`, minimal generic `stage_vocabulary[]` or stage-write deferral/restriction, structured/program-attached observation capture, and broader monitoring/risk runtime integration remain later owner-approved Slice 8 work. The current B2 projection does not add `awareness_definitions[]`, `target_registry[]`, or `symptom_registry[]`.
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
- Full Runtime Slice 8 is not complete
- Still deferred: structured trap/scouting/symptom/stage capture, program-attached observations, observation correction, monitoring-context record-status copy, diagnosis/treatment logic, and stage confirmation
- Next work is planning/approval for the next S8 step

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

- The actual default flip is owner-approved and must not happen automatically.
- The flip moves V2 to be the default surface and moves the legacy app behind an "Old app" entry.
- The flip does not delete legacy data, legacy keys, or legacy code paths.
- The flip may require a service worker `CACHE_NAME` bump (see §47); this is the only sanctioned place to bump `CACHE_NAME`.
- The flip should be reversible: the owner can flip back to legacy default if a regression is found.

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

Post-S8 Step 3 tracker note: Runtime Slices 0–7 are complete through `d61cc90 Harden S7 seasonal action detail display`, B2 metadata-only projection boundary is complete, Runtime Slice 8 Step 1 is complete as Plant detail-only read-only B2 monitoring/risk preview, Runtime Slice 8 Step 2 is complete as Plant detail free-standing note Observation capture plus Dnevnik / plant-history evidence under `Opažanja`, and Runtime Slice 8 Step 3 is complete as read-only Pregled/Kalendar B2 monitoring/risk visibility. Full Runtime Slice 8 is not complete. The seasonal snapshot remains private, read-time, derived, and non-persisted. Later Slice 8 steps remain deferred until owner-approved.
