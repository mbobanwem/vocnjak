# V2 VARIETY COVERAGE POLICY — PRE-S3 INPUT

## Status

PRE-S3 policy input.

This document is not authoritative V2 truth, not schema, not runtime behavior, and not implementation.

It defines how variety candidates should be evaluated before adding or removing varieties in `V2_PLANT_CATALOG.md`.

Final promotion requires owner decision and S3-S5 audit.

---

## 1. Purpose

The catalog is not intended to contain every possible variety.

The goal is to keep a curated list of common, commercially relevant, hobby-relevant, and strategically important varieties while preserving a fallback mechanism for all unlisted varieties.

Unlisted varieties should be handled through timing bands:

- Early
- Mid
- Late
- Unknown -> Mid fallback

This keeps the catalog useful without exploding into hundreds of varieties.

---

## 2. Market weighting

Variety selection should not be Balkan-first only.

Future paid-market relevance matters.

Priority weighting:

1. Paid-market priority:
   - Austria
   - Germany
   - Switzerland
   - Italy
   - France

2. Local validation priority:
   - Croatia
   - Slovenia
   - Bosnia and Herzegovina
   - Serbia
   - Kosovo

3. Existing user-owned or user-planned varieties:
   - must remain included unless explicitly removed by owner decision

This balances future commercial viability with the current Zagreb / regional validation context.

---

## 3. Inclusion criteria

A variety is a good candidate for inclusion when it satisfies one or more of the following:

1. common in paid target markets
2. common in nursery or commercial availability
3. relevant for hobby orchards
4. helps cover Early / Mid / Late harvest timing
5. has disease or resistance relevance
6. is already user-owned or user-planned
7. is regionally important enough that omitting it would weaken the catalog
8. avoids synonym clutter unless the synonym is regionally important

Do not add a variety only because it exists.

Do not add niche varieties without a clear reason.

---

## 4. Recommended target counts

The catalog should stay curated.

Recommended targets:

| Species type | Recommended count |
|---|---:|
| Core fruit species | around 8-12 varieties where useful |
| Secondary or marginal species | around 3-8 varieties |
| Species with weak or premature variety modeling | keep species-level or subtype-level model and defer variety expansion |

These are guidelines, not hard schema rules.

---

## 5. Current species guidance

### Core fruit species

Core fruit species may justify around 8-12 varieties if the varieties are relevant to paid markets, local validation, timing coverage, or disease/resistance context.

Likely core groups:

- apple
- pear
- plum
- sweet_cherry
- sour_cherry
- peach
- nectarine
- apricot

### Secondary / special species

These should usually remain smaller unless there is clear owner or market reason:

- quince
- almond
- walnut
- hazelnut
- olive
- fig
- pomegranate
- citrus subtypes

---

## 6. Variety candidate examples

These are candidate examples only.

They are not approved additions.

Owner decision and S3 audit are required before adding them to the catalog.

### Apple

Potential candidates:

- Topaz
- Elstar
- Braeburn
- Boskoop
- Pinova
- Cox Orange

Existing user-relevant / current varieties should remain unless explicitly removed.

### Pear

Potential candidates:

- Clapp's Favourite
- Lukasova
- Packham's Triumph
- Doyenne du Comice

### Plum

Potential candidates:

- Bistrica / Pozegaca
- Hanita
- Jojo
- Hauszwetsche type
- Valjevka

### Sweet cherry

Potential candidates:

- Van
- Summit
- Hedelfinger

### Sour cherry

Potential candidates:

- Kelleris
- Schattenmorelle / Morello
- Erdi botermo

### Apricot

Potential candidates:

- Madarska najbolja / Magyar kajszi
- Keckemetska ruza
- Orangered
- Orange Red

### Walnut

Potential candidates:

- Lara
- Fernor
- Fernette

### Hazelnut

Potential candidates:

- Rimski
- Cosford
- Hall's Giant
- Tonda Gentile

---

## 7. What must not happen automatically

Do not automatically add varieties during wording cleanup.

Do not hide variety expansion inside safety edits.

Do not change harvest windows without S3 validation.

Do not change bloom windows without S3 validation.

Do not change fallback logic without S3 validation.

Do not restructure citrus identity during variety work.

Do not rename groups during variety work.

Do not introduce schema fields.

Do not introduce runtime behavior.

---

## 8. Required classification for future variety decisions

Every variety candidate must be classified as one of:

### ADD NOW

Owner-approved and useful enough to add before S3 audit.

### DEFER

Potentially useful, but not needed before S3.

### DO NOT ADD

Too niche, unclear, duplicate, or not useful for the intended catalog.

### S3 AUDIT ITEM

Needs source-backed validation before inclusion.

### OWNER DECISION

Requires product owner decision before inclusion.

---

## 9. Required review format for future variety work

Before editing `V2_PLANT_CATALOG.md`, produce a table with:

| Species | Current varieties | Candidate | Market relevance | Timing band | Reason | Recommendation | Proposed key | Needs S3 source? |
|---|---|---|---|---|---|---|---|---|

No catalog edit should happen before owner approval.

---

## 10. When to use this document

Use this document:

1. before adding any new variety to `V2_PLANT_CATALOG.md`
2. before creating the owner decision matrix for varieties
3. at the start of S3 catalog audit
4. before deciding paid-market catalog positioning
5. before designing the final variety selection UX
6. before translating or promoting domain notes into user-facing app copy

---

## 11. Relationship to S3 audit

This document does not replace S3.

It prepares better input for S3.

S3 still decides:

- final catalog validity
- source-backed harvest and bloom windows
- timing band correctness
- variety inclusion based on audit evidence
- whether any variety-specific behavior becomes model data
- whether entries remain source notes or become structured concepts

---

## 12. Current decision

Proceed with agronomic curation by group, but do not add varieties ad hoc.

Before variety expansion, create an owner decision matrix using this policy.

Recommended sequence:

1. finish group-level agronomic curation
2. create variety candidate matrix using this policy
3. owner approves ADD NOW / DEFER / DO NOT ADD
4. edit catalog only for approved ADD NOW entries
5. then start S3 audit with cleaner input
