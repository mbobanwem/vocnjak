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

## Variety coverage policy prerequisite

Before auditing, adding, removing, or promoting variety entries, read:

- `V2_VARIETY_COVERAGE_POLICY.md`

Variety additions MUST NOT be made ad hoc during S3.

Each variety candidate must be classified using the policy workflow before catalog edits:

- ADD NOW
- DEFER
- DO NOT ADD
- S3 AUDIT ITEM
- OWNER DECISION

The policy defines paid-market weighting, local-validation weighting, recommended target counts, inclusion criteria, and the required candidate review table.

S3 may validate variety windows and agronomic correctness, but owner approval is required before adding new varieties to `V2_PLANT_CATALOG.md`.

---

## Pre-S3 input stabilization checkpoint

Pre-S3 catalog/template input stabilization is complete for the initial 18 plant types.

Completed stabilization passes:

- pome group
- stone group
- mediterranean group
- nut group
- citrus group

After this checkpoint, `V2_PLANT_CATALOG.md` and `V2_ORCHARD_PLAN_TEMPLATES.md` should be treated as stabilized S3 input.

Do not make further wording, variety, group, timing, template, or safety-generalization changes before S3 unless one of these is true:

- the owner explicitly approves the change;
- a clear factual error is found;
- a clear safety issue is found;
- the change is part of the S3 audit itself.

This checkpoint does not promote the files to authoritative V2 truth.

The files remain PRE-S3 input only. S3 must still audit and validate:

- species and subtype identity;
- variety coverage and owner-approved variety decisions;
- harvest, bloom, fallback, and seasonProfile timing;
- shared-block applicability;
- monitoring vs action vs observation vs advisory semantics;
- final `activityType` mapping;
- citrus identity model;
- pomegranate grouping;
- nut group naming;
- treatment safety wording and label constraints;
- localization / final user-facing language.

S3 must read `V2_VARIETY_COVERAGE_POLICY.md` before adding, removing, or promoting variety entries.

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

S5 audit scope (per `V2_DOMAIN_MODEL.md §9`):

- *Pyrus communis* (Pear)
- *Prunus persica* (Peach)
- *Prunus persica* var. *nucipersica* (Nectarine)
- *Prunus domestica* (Plum)
- *Prunus armeniaca* (Apricot)
- *Olea europaea* (Olive)
- *Ficus carica* (Fig)
- *Citrus limon* (Lemon)
- *Citrus sinensis* (Orange)
- *Citrus reticulata* (Mandarin)
- *Juglans regia* (Walnut)
- *Corylus avellana* (Hazelnut)
- *Cydonia oblonga* (Quince)
- *Punica granatum* (Pomegranate)
- *Prunus dulcis* (Almond)

*To be filled in S5.*

### 5.4 Deferred entries

*Populated as entries are flagged. Each deferred entry per §4.2.*

### 5.5 Catalog v1.0 sign-off

*To be filled at completion of S5.*

---

## 6. Notes-field content — curator reference

This section is a curator reference for what content MAY belong in catalog `notes` fields (action-window `notes`, monitoring-program `notes`) when the source material explicitly supports it. It is advisory for the curator; it does NOT add rules, entities, schema fields, gate types, or runtime logic, and does NOT override §3 MUST NEVER.

The verbatim-from-source discipline of §3 item 9 applies to notes content as well: if the source material does not state the guidance, the curator MUST NOT invent it. Curator knowledge, regional convention, and general agronomic interpretation MUST NOT fill gaps. Notes remain silent where source is silent.

### 6.1 Post-action observation timing

Observations recorded shortly after a treatment may reflect residual action of that treatment rather than true orchard state. When source material explicitly states a post-action observation lag for a pest target, the curator MAY capture it as display-only advisory text in the monitoring program's `notes` field.

This is NOT a gate, NOT a derived rule, and NOT a runtime restriction. It does not affect `open_condition`, `effective_open`, `effective_close`, or any window-state derivation. Absent verbatim source backing, notes remain silent on post-action timing.

### 6.2 Standard inspection sites

When source material explicitly identifies inspection locations for a pest target (for example: young-shoot tips, undersides of leaves, curled or sticky leaves), the curator MAY include those locations as free-text guidance in the monitoring program's `notes` field.

No schema change is involved — content lives in existing `notes`. Curator knowledge, regional convention, and general agronomic interpretation MUST NOT fill gaps where source material is silent (analogue of §3 item 4).

### 6.3 Fungal inspection timing after wet periods

When source material explicitly describes timing-sensitive fungal scouting (for example: inspection after rain or after a prolonged wet period), that timing MAY appear in the relevant monitoring program's `notes` as display-only advisory text.

Such notes MUST NOT become weather-derived runtime logic or a weather-derived gate. Weather remains advisory and never blocking per `V2_DOMAIN_MODEL.md` §0.9.2 DS2. Absent verbatim source backing, notes remain silent on wet-period timing.

### 6.4 Copper — worked example for audit reasoning

This subsection illustrates how a curator might interpret a source-backed copper treatment through V2 structures. It is an audit-reasoning example, not catalog content and not a rule.

Assume, illustratively, a source entry for a species stating: "apply copper before bud-break; avoid during bloom; resume after petal-fall." The curator considers:

- Does the source back a phenology-anchored window (using stages already present in the species' locked stage vocabulary) with a calendar tolerance, rather than a pure calendar window?
- Does the source explicitly state a precondition mappable to `open_condition.requires_observation{observation_type = stage_obs}` for a stage that already exists in the catalog?
- Is the bloom-avoidance text a verbatim precondition (candidate for a gate under §3 item 9.a) or narrative guidance (belongs in `notes`)?

The actual catalog outcome — gate vs no-gate, window shape, tolerance — is determined by what the source states verbatim. Where source does not state a precondition verbatim, §3 item 9 applies: no gate; the window ships gate-less and the bloom-avoidance text lives in `notes`. A curator MUST NOT derive a bloom-phase gate from general agronomic knowledge alone.

### 6.5 Spring sequence ordering as advisory

When source material for a species explicitly states a meaningful seasonal ordering (for example: set trap first, then begin shoot inspection, then first fungal checks), the curator MAY capture that ordering as free-text advisory guidance in the relevant monitoring program's `notes`.

Such ordering MUST NOT become a formal `open_condition` unless the source's stated condition maps directly to `requires_prior_activity` or `requires_observation{stage_obs | symptom}` per §3 item 9.b; trap and scouting counts remain NOT a gate input per `V2_DOMAIN_MODEL.md` §0.9.2 DS1. Ordering MUST NOT become a new gate kind, a new observation kind, or a cross-program sequencing runtime mechanism.

---

## 7. Cross-document references

- `V2_DOMAIN_MODEL.md` §1.7 — Monitoring program entity, validation, rules, free-standing invariant.
- `V2_DOMAIN_MODEL.md` §0.9.2 — `open_condition` scope, DS1–DS5 decision-support rules, DS5 gate-declaration audit rule.
- `V2_DOMAIN_MODEL.md` §6.8 — Monitoring program occurrence derivation.
- `V2_DOMAIN_MODEL.md` §1.2, §1.6.2 — `action_type = monitoring` reserved for monitoring-device installation; orphan monitoring action-windows are validation errors.
- `V2_DOMAIN_MODEL.md` §0.6a — Observation MUST-HAVE fields, including `catalog_version` pinning.
- `V2_DOMAIN_MODEL.md` §0.9.5 — record-integrity timing invariant (write-time; catalog upgrades never retroactively invalidate records).
- `V2_DOMAIN_MODEL.md` §0.11 — group-identity rule (display-only; no audit action on group semantics).
- `V2_UX_MODEL.md` — UX hard constraints on monitoring display (forbidden copy, neutrality translation).

---

## 8. Extension rules

When extending this document:

- Worked audit examples (per species, per program) go in §5.
- New signal-table rows — only if a real source-entry pattern is encountered that row 1–6 of §2.2 does not cover; owner must approve the new row.
- Changes to §3 audit-never list — require explicit owner approval; this list is process-binding.
- Model references — update when `V2_DOMAIN_MODEL.md` §§1.7, 6.8, 0.9.2, 1.2, 1.6.2 are amended.

This document is maintained under the same governance discipline as the model document: LOCKED CORE when entries are resolved; IN PROGRESS during active audit; owner-approved before sign-off.
