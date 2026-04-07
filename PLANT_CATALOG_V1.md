# PLANT_CATALOG_V1 (FINAL)

---

## 1. Purpose

Plant catalog defines:

- which plants are supported
- how user selects plants (controlled input)
- how timing is assigned to each plant

Catalog is NOT logic.

Catalog provides structured input for:
- plan generation
- timing adjustments
- UX consistency

---

## 2. Design Principles

- No free text input
- Minimal but sufficient coverage (EU focus)
- Variety optional
- Always have fallback (timing group)
- Avoid over-engineering

---

## 3. Plant Types (Supported)

### Core fruit trees

- Apple
- Pear
- Plum
- Cherry
- Peach
- Nectarine
- Apricot

---

### Mediterranean / warm climate

- Olive
- Fig

---

### Citrus (grouped)

Citrus is one category with subtype:

- Lemon
- Orange
- Mandarin

---

## 4. Selection Model

Each plant must be created via:

### Step 1 — Plant type (required)

User selects predefined type.

---

### Step 2 — Variety (optional)

If known:

Examples:

- Apple → Fuji, Gala, Granny Smith
- Cherry → Kordia
- Plum → Stanley

---

### Step 3 — Fallback (required if variety unknown)

User selects:

- Early
- Mid
- Late

---

## 5. Timing Profile

Each plant resolves to a **timing profile**.

### Resolution logic

- If variety exists → use variety profile
- Else → use fallback (Early / Mid / Late)

---

## 6. Timing Groups (Fallback)

Used when variety is unknown.

| Group | Meaning |
|------|--------|
| Early | earlier flowering and harvest |
| Mid   | standard timing |
| Late  | delayed flowering and harvest |

---

## 7. Variety Strategy (V1)

Varieties are included ONLY when:

- widely used
- timing significantly differs
- adds real value

### Timing constraint

Allowed timing values:

- early
- mid
- late

No combined values (e.g. early_mid) are allowed.

Reason:
- keeps engine simple
- avoids ambiguity

### Example (Apple)

- Fuji → Late
- Gala → Early–Mid
- Granny Smith → Late

### Rule

Each variety must map to:

- timing group
- optional offsets (future)

---

## 8. Regional Influence

Final timing is calculated as:

- base timing (catalog)
- plus region offset
- plus user fine tuning

---

## 9. Data Model (Implementation-ready)

Example structure:

```json
{
  "apple": {
    "label": "Apple",
    "varieties": {
      "fuji": { "timing": "late" },
      "gala": { "timing": "mid" },
      "granny_smith": { "timing": "late" }
    },
    "fallback": ["early", "mid", "late"]
  }
}
```

---

## 10. Citrus Special Handling

Citrus is grouped but keeps subtype.

```json
{
  "citrus": {
    "label": "Citrus",
    "subtypes": {
      "lemon": { "timing": "multi_cycle" },
      "orange": { "timing": "winter" },
      "mandarin": { "timing": "autumn" }
    }
  }
}
```

### Rules

- user selects citrus → subtype required
- citrus does NOT use Early/Mid/Late
- uses predefined seasonal logic

---

## 11. UX Constraints

- user never types plant name
- always selects from list
- icon + label required
- selection must be fast (one-hand use)

---

## 12. What is NOT included (V1)

- berries (strawberry, blueberry, etc.)
- exotic plants
- detailed phenology stages
- disease-specific mapping
- yield prediction

---

## 13. Future Extensions (V2+)

- add more varieties
- add region-specific defaults
- add disease susceptibility
- add rootstock influence
- remote catalog updates

---

## Final Principle

Catalog must be:

- simple enough for user
- structured enough for engine
- stable enough to avoid refactoring