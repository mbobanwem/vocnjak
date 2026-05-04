# V2 Execution Roadmap

**Status:** S11.A, S11.B, and S11.C1 complete. S11.C2 and S11.D pending.

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
