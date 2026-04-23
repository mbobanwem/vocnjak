# V2_CATALOG_AUDIT

**Status:** canonical audit companion — permanent. Seeded by S2.8; extended continuously by S3–S5 and every subsequent catalog audit activity.

---

## 1. Role and governance

V2_CATALOG_AUDIT.md is the **permanent, canonical audit companion** of the V2 catalog system. It is not a migration artifact, not a one-time deliverable, and not scaffolding that dissolves after S3–S5 completes.

Its role is continuous across all catalog lifecycle activities:

1. **V1 → V2 initial audit (S3–S5).** Read each entry of `V2_ORCHARD_PLAN_TEMPLATES.md`, apply the signal table (§2), obey the audit-never list (§3), record deferred items in §4, and produce V2 catalog content consistent with `V2_DOMAIN_MODEL.md` rules.
2. **Future catalog updates.** When the catalog version bumps (new species, new pest, revised windows, new monitoring programs), the same audit discipline applies. Signal table is reread; audit-never list binds the curator; deferred list captures ambiguity.
3. **External catalog imports.** Any externally-authored catalog material (regional agronomic data, third-party pest programs, standards bodies) is governed by this document. External content never reaches V2 catalog state without passing through audit.
4. **Structured-to-structured mappings.** Any transformation from one structured catalog shape to another (e.g., a V2.x schema revision changing `monitoring_program` shape) is itself an audit event. This document governs how mapping decisions are made, documented, and reviewed.
5. **Periodic catalog quality audits.** Revisiting existing catalog content for quality — confirming gates per `V2_DOMAIN_MODEL.md` §0.9.2 DS5, verifying provenance notes, checking rule-compliance — is a recurring audit activity governed by this document.

**Authority:** V2_CATALOG_AUDIT.md is owned by the audit function. S3–S5 is the first session to author content; all subsequent audits extend it. The document is not retired, archived, or superseded by `V2_DOMAIN_MODEL.md`. Model and audit documents coexist indefinitely.

**Boundary with V2_DOMAIN_MODEL.md (strict non-overlap):**

- **Model document (`V2_DOMAIN_MODEL.md`)** — *what V2 catalog content must satisfy*. Entities, enums, validation rules. Enforceable at validation time.
- **Audit document (this file)** — *how a human curator produces V2 catalog content from source material*. Reading signals, deferring ambiguity, documenting decisions. Applied during curation.
- Cross-references exist; duplication does not. When a model rule changes, `V2_DOMAIN_MODEL.md` is the single source of truth; this document may update its guidance to reflect the rule change, but never restates the rule itself.
- Model rule changes may trigger audit-guidance updates; audit-guidance changes never trigger model changes.

**If this document is not maintained:**

- New catalog content ships without signal-table discipline → mapping decisions become inconsistent.
- External imports arrive without audit → catalog receives unaudited material.
- Model rule changes don't propagate to audit guidance → curators work from stale references.
- Owner-review workflow becomes ad-hoc → deferred entries pile up or are silently committed.

All four break catalog integrity. Maintaining this document is not optional overhead; it is the catalog's integrity mechanism.

---

## 2. Signal table — human audit guidance

**Classification:** this signal table is **human audit guidance** — a reading aid for the curator processing source entries. It is NOT a rule, parser specification, regex set, runtime classifier, NLP pipeline, migration-script decision tree, ML model, or any form of automated text analysis.

**V1 notes is free-form Croatian text.** It has no grammar, no typed schema, no canonical vocabulary. No future agent may implement "audit automation" reading V1 notes to emit V2 catalog content. Every mapping decision MUST pass through explicit human curator judgment, recorded in §4 or in the catalog's provenance.

### 2.1 Four signals read per source entry

| Signal | What to look for in the source |
|--------|--------------------------------|
| **Install step?** | Imperative install language ("Postaviti", "Postavljanje", "install", "set up") combined with a physical device mention ("klopka", "ploča", "trap", "plate"). |
| **Recurring check pattern?** | Recurrence language ("tjedno", "svakih N dana", "pregledavati", "check weekly") OR threshold interpretation text ("0–2/tj.", "na porast → X"). |
| **Device mentioned?** | A physical device: klopka, ploča, plate, trap, sticky. Absence → visual scouting. |
| **Target pest named?** | A specific pest (e.g., "jabučni savijač", "trešnjina muha"). Monitoring programs without a named target are not monitoring. |

### 2.2 Mapping outcomes — the curator's decision table

| Install | Recurring | Device | Target | Outcome |
|---------|-----------|--------|--------|---------|
| Y | Y | Y | Y | **Setup action-window + monitoring_program** (`method.kind = trap`, `setup_window_def_id` references the install window). Notes split: install-specific text → action-window `notes`; campaign-level text (cadence, thresholds, target lifecycle) → program `notes`. |
| N | Y | Y | Y | **Flag for owner review.** Ambiguous — is install implicit (grower supplies)? Or was it omitted by mistake? Do not ship monitoring-program without setup unless owner confirms install is external to catalog. |
| Y | N | Y | Y | **Flag for owner review.** Install with no recurring check is atypical; recurring checks almost always exist. Confirm with owner before shipping. |
| N | Y | N | Y | **Monitoring_program only** (`method.kind = scouting`, `setup_window_def_id` absent). Pure visual inspection. |
| N | N | N | Y | **Flag for owner review.** A target is named but no install and no check pattern. Likely narrative entry, not monitoring. |
| Any | Any | Any | N | **Reject / flag.** Monitoring requires a named target. Unnamed "monitoring" is too vague to map. |

### 2.3 Default-shape preference (closing the setup-only loophole)

Default shape for any monitoring source material is **setup + program together** (row 1). Setup-only is not a legal outcome for monitoring entries — `V2_DOMAIN_MODEL.md` §1.6.2 makes orphan monitoring action-windows a validation error.

When a source entry supports both "setup + program" and ambiguity, the curator chooses setup + program. Lazy audit (dropping to a weaker shape because cadence or thresholds are thin) is forbidden by §3 item 3. Missing cadence → `cadence` field absent; program still ships.

### 2.4 What the signal table IS — restated positively

The signal table documents how a human curator should think about an ambiguous source entry. It ensures two curators reading the same source would reach the same mapping decision (determinism by shared reading conventions). It does not replace the curator's reading; it structures it.

### 2.5 What the signal table IS NOT (reiteration)

A future agent MUST NOT:

1. Implement the signal table as a function `classify(v1_notes: string) -> outcome`. Prohibited. Source text is not typed input.
2. Treat the signal table as a test oracle. Tests may assert V2 catalog content against expected values, but they may not assert "this source string produces this V2 shape" as a computed mapping.
3. Generalize the signal table into a scoring system, probability model, or ML pipeline. Audit is deterministic-by-human, not deterministic-by-algorithm.
4. Cache the signal table's outcomes as seed data for new audits. Every entry is read explicitly; no entry is auto-classified based on prior similar entries.

---

## 3. Audit MUST NEVER — process constraints

Binding on every curator during every audit. Process rules, not runtime rules.

Audit MUST NEVER:

1. **Invent a setup action** when the source entry does not describe one.
2. **Invent a monitoring program** when the source entry describes only one-shot work with no ongoing campaign.
3. **Assign a `cadence` value** when source notes do not specify one. The program's `cadence` field is left absent; this is valid. Missing cadence is never a reason to skip a gate (per `V2_DOMAIN_MODEL.md` §0.9.2 DS5).
4. **Assign `target_code`** without an explicit pest mention in source notes. No defaulting from species-level common pests.
5. **Assign `season_start` or `season_end`** from adjacent entries or calendar conventions. Use source's explicit MD values only.
6. **Set `method.kind = "trap"`** from species convention if a device is not explicitly mentioned in source.
7. **Merge two source entries** into one program or **split one source entry** into two programs, without explicit owner instruction.
8. **Retroactively set `program_id`** on any historical observation data during migration. Legacy observations stay free-standing permanently (FS-INV, `V2_DOMAIN_MODEL.md` §1.7.4).
9. **Declare a formal `open_condition` on a treatment action-window without verbatim-from-source backing.** A gate MAY be declared ONLY IF:
   - (a) the source material explicitly defines the gate (phenology precondition, symptom precondition, or prior-action sequence stated verbatim in source), OR
   - (b) the source material explicitly states a condition that is already directly representable by the locked `stage_obs` or `symptom` Observation types, with no reformulation required.

   Verbatim-from-source is the only admissible basis. Semantic interpretation, inferred agronomic knowledge, established practices of any origin (regional or otherwise), curator judgment about restrictiveness, and trap/scouting thresholds MUST NOT be gate inputs. If neither (a) nor (b) holds: NO GATE — the window ships gate-less, and decision context lives in notes + history + monitoring display per `V2_DOMAIN_MODEL.md §0.9.2 DS3`. Missing `cadence` is never a reason to invent a gate.

Violation of any of the above is a catalog-quality defect caught in owner review of audit output. The curator MUST flag the entry for owner review rather than guess.

---

## 4. Deferred audit list — mechanism

The **deferred audit list** is a structured record of source entries that cannot be confidently mapped by the curator alone. Each deferred entry preserves the original source material and surfaces a specific ambiguity for owner disposition before that entry is committed to V2 catalog content.

### 4.1 When to defer

A source entry MUST be deferred when:

- The signal table (§2.2) points to a "flag for owner review" row.
- Source notes contain content that audit cannot confidently route to action-window, program, or observation.
- The source entry implies catalog behavior that would require inventing a rule (per §3 items 1–8).
- Two or more plausible mapping decisions exist and the curator cannot choose between them deterministically.
- An existing model rule (§`V2_DOMAIN_MODEL.md`) would be violated by any plausible mapping.

### 4.2 Deferred-entry shape

Each deferred entry records:

- **Source reference** — the original entry's position in `V2_ORCHARD_PLAN_TEMPLATES.md` (or other source document), preserved verbatim.
- **Curator's reading** — plain-language summary of what the curator thinks the entry means.
- **Ambiguity** — the specific mapping question that cannot be answered without owner input.
- **Candidate outcomes** — enumerated options the curator considered.
- **Flag date** — ISO date the entry was deferred.
- **Owner disposition** — filled in when the owner resolves; records the chosen outcome and any notes.

### 4.3 Owner disposition workflow

1. Curator adds the entry to §5 (V1 → V2 audit status) with status `deferred` and links to its deferred-entry record.
2. Owner reviews deferred entries in a batch or individually.
3. Owner records the chosen outcome on the deferred entry; entry status in §5 moves to `resolved` with a reference to the owner disposition.
4. Resolved entries' V2 catalog content is then produced per the owner's chosen outcome.

**No deferred entry ships to V2 catalog without owner disposition.** Silent commits are forbidden.

---

## 5. V1 → V2 audit status (S3–S5 workflow)

To be filled by S3–S5 as the audit proceeds. Each row: one source entry (monitoring program or related action-window) with its mapping outcome.

### 5.1 Jabuka — audit status

*To be filled in S3.*

### 5.2 Višnja + trešnja — audit status

*To be filled in S4.*

### 5.3 Remaining launch species — audit status

*To be filled in S5.*

### 5.4 Deferred entries

*Populated as entries are flagged. Each deferred entry per §4.2.*

### 5.5 Catalog v1.0 sign-off

*To be filled at completion of S5.*

---

## 6. Cross-document references

- `V2_DOMAIN_MODEL.md` §1.7 — Monitoring program entity, validation, rules, free-standing invariant.
- `V2_DOMAIN_MODEL.md` §0.9.2 — `open_condition` scope, DS1–DS5 decision-support rules, DS5 gate-declaration audit rule.
- `V2_DOMAIN_MODEL.md` §6.8 — Monitoring program occurrence derivation.
- `V2_DOMAIN_MODEL.md` §1.2, §1.6.2 — `action_type = monitoring` reserved for monitoring-device installation; orphan monitoring action-windows are validation errors.
- `V2_DOMAIN_MODEL.md` §0.6a — Observation MUST-HAVE fields, including `catalog_version` pinning.
- `V2_DOMAIN_MODEL.md` §0.9.5 — record-integrity timing invariant (write-time; catalog upgrades never retroactively invalidate records).
- `V2_DOMAIN_MODEL.md` §0.11 — group-identity rule (display-only; no audit action on group semantics).
- `V2_UX_MODEL.md` — UX hard constraints on monitoring display (forbidden copy, neutrality translation).

---

## 7. Extension rules

When extending this document:

- Worked audit examples (per species, per program) go in §5.
- New signal-table rows — only if a real source-entry pattern is encountered that row 1–6 of §2.2 does not cover; owner must approve the new row.
- Changes to §3 audit-never list — require explicit owner approval; this list is process-binding.
- Model references — update when `V2_DOMAIN_MODEL.md` §§1.7, 6.8, 0.9.2, 1.2, 1.6.2 are amended.

This document is maintained under the same governance discipline as the model document: LOCKED CORE when entries are resolved; IN PROGRESS during active audit; owner-approved before sign-off.
