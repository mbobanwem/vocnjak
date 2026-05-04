# V2 Execution Roadmap

**Status:** S11.A complete. S11.B–S11.D pending.

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
