# PLANT_CATALOG_V1 (FINAL)

---

## 1. Purpose

Plant catalog defines:

- which plants are supported
- how user selects plants (controlled input)
- how timing is assigned to each plant

Catalog is NOT logic.

Catalog provides structured input for:
- plan matching context
- timing adjustments
- UX consistency

---

## V1 Storage Rules (CRITICAL)

The catalog is a UI/input layer ONLY.

Rules:
- catalog data is NOT stored directly in the v4 plant model
- plant.type does NOT exist as a stored field in V1
- selected catalog values may populate existing fields (name, variety) only
- no new plant fields may be introduced without explicit approval
- timing profiles and region offsets are future features — do NOT implement in V1

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

Three-tier selection — user picks whichever level they know:

### Tier 1 — User knows the variety

User selects plant type → then selects variety from list.

System derives timing automatically from catalog.
No further input required.

Example: *"I have a Fuji apple"* → timing: late, harvest: Sep 25–Oct 15

---

### Tier 2 — User knows when it ripens, but not the variety

User selects plant type → then selects fallback timing: **Early / Mid / Late**

Covers the case: old tree in garden, unknown variety, but user knows roughly when it ripens.

Example: *"I have an apple tree that ripens in August"* → Early

---

### Tier 3 — User knows only the plant type

User selects plant type only.

System defaults to **Mid** automatically. No additional input.

Example: *"I bought an apple sapling, variety unknown"* → Mid

---

### Rules

- Variety and fallback are mutually exclusive
- System must enforce exactly one timing source:
  - Variety selected → timing from variety catalog entry
  - Fallback selected → timing from fallback group
  - Nothing selected → system defaults to Mid
- Variety selection makes fallback selection NOT required
- Fallback selection makes variety selection NOT required

---

## 5. Timing Profile

Each plant resolves to a **timing profile**.

### Resolution logic

```
if variety selected  → timing = variety.timing
else if fallback selected → timing = fallback (early | mid | late)
else → timing = "mid" (default)
```

---

## Timing Resolution Rule (FINAL)

The system MUST resolve timing using exactly one of these sources, in this order:

1. variety timing
2. fallback timing
3. default = mid

Rules:
- no other timing source is allowed in V1
- region offsets are NOT part of V1
- fine tuning is NOT part of V1
- rootstock influence is NOT part of V1

---

## 6. Timing Groups (Fallback)

Used when variety is unknown.

| Group | Meaning                        |
|-------|-------------------------------|
| Early | Earlier flowering and harvest  |
| Mid   | Standard timing (default)     |
| Late  | Delayed flowering and harvest  |

---

## 7. Variety Data Model

Each variety has exactly:

```json
{
  "timing": "early | mid | late",
  "harvestWindow": { "monthStart": int, "dayStart": int, "monthEnd": int, "dayEnd": int },
  "bloomWindow": { "monthStart": int, "dayStart": int, "monthEnd": int, "dayEnd": int }
}
```

### Rules

- `timing` is required
- `harvestWindow` is required for V1
- `bloomWindow` is optional in V1, reserved for future phenology engine
- No combined timing values (e.g. early_mid) — single value only
- All windows are Zagreb baseline — region offsets are future (V2+)

---

## Bloom Window (Future)

`bloomWindow` is future-ready metadata only.

Rules:
- `bloomWindow` is NOT used by the V1 engine
- `harvestWindow` is the only active timing window used by V1 runtime logic
- `bloomWindow` may later support:
  - phenology modeling
  - disease timing
  - advanced planning
- V1 implementation MUST NOT depend on `bloomWindow`

---

## 8. Timing Constraint

Allowed timing values:

- `early`
- `mid`
- `late`

No combined values. Reason: keeps engine simple, avoids ambiguity.

---

## 9. Full Variety Catalog

All harvest windows are **Zagreb baseline** (continental EU climate).
Months are 1-indexed (1 = January).

---

### 🍎 APPLE

| Variety          | Key              | Timing | Harvest window (Zagreb)    | Bloom (approx)     |
|------------------|------------------|--------|----------------------------|--------------------|
| Gala             | gala             | mid    | Aug 20 – Sep 10            | early April        |
| Golden Delicious | golden_delicious | mid    | Sep 10 – Sep 30            | early April        |
| Jonagold         | jonagold         | mid    | Sep 15 – Oct 5             | mid April          |
| Fuji             | fuji             | late   | Sep 25 – Oct 15            | mid April          |
| Granny Smith     | granny_smith     | late   | Oct 1 – Oct 20             | mid April          |
| Idared           | idared           | late   | Oct 1 – Oct 20             | mid April          |

**Fallback harvest windows:**
- early → Aug 1 – Sep 5
- mid   → Aug 20 – Sep 30
- late  → Sep 25 – Oct 20

```json
"apple": {
  "varieties": {
    "gala":             { "timing": "mid",  "harvestWindow": { "monthStart": 8, "dayStart": 20, "monthEnd": 9,  "dayEnd": 10 } },
    "golden_delicious": { "timing": "mid",  "harvestWindow": { "monthStart": 9, "dayStart": 10, "monthEnd": 9,  "dayEnd": 30 } },
    "jonagold":         { "timing": "mid",  "harvestWindow": { "monthStart": 9, "dayStart": 15, "monthEnd": 10, "dayEnd": 5  } },
    "fuji":             { "timing": "late", "harvestWindow": { "monthStart": 9, "dayStart": 25, "monthEnd": 10, "dayEnd": 15 } },
    "granny_smith":     { "timing": "late", "harvestWindow": { "monthStart": 10,"dayStart": 1,  "monthEnd": 10, "dayEnd": 20 } },
    "idared":           { "timing": "late", "harvestWindow": { "monthStart": 10,"dayStart": 1,  "monthEnd": 10, "dayEnd": 20 } }
  },
  "fallback": {
    "early": { "harvestWindow": { "monthStart": 8,  "dayStart": 1,  "monthEnd": 9,  "dayEnd": 5  } },
    "mid":   { "harvestWindow": { "monthStart": 8,  "dayStart": 20, "monthEnd": 9,  "dayEnd": 30 } },
    "late":  { "harvestWindow": { "monthStart": 9,  "dayStart": 25, "monthEnd": 10, "dayEnd": 20 } }
  }
}
```

---

### 🍒 CHERRY

| Variety     | Key         | Timing | Harvest window (Zagreb) | Bloom (approx)   |
|-------------|-------------|--------|-------------------------|------------------|
| Burlat      | burlat      | early  | Jun 1 – Jun 15          | late March       |
| Kordia      | kordia      | mid    | Jun 20 – Jul 5          | early April      |
| Lapins      | lapins      | mid    | Jun 25 – Jul 10         | early April      |
| Regina      | regina      | late   | Jul 5 – Jul 20          | mid April        |
| Sweetheart  | sweetheart  | late   | Jul 10 – Jul 25         | mid April        |

**Fallback harvest windows:**
- early → Jun 1 – Jun 15
- mid   → Jun 15 – Jul 5
- late  → Jul 5 – Jul 25

```json
"cherry": {
  "varieties": {
    "burlat":     { "timing": "early", "harvestWindow": { "monthStart": 6, "dayStart": 1,  "monthEnd": 6, "dayEnd": 15 } },
    "kordia":     { "timing": "mid",   "harvestWindow": { "monthStart": 6, "dayStart": 20, "monthEnd": 7, "dayEnd": 5  } },
    "lapins":     { "timing": "mid",   "harvestWindow": { "monthStart": 6, "dayStart": 25, "monthEnd": 7, "dayEnd": 10 } },
    "regina":     { "timing": "late",  "harvestWindow": { "monthStart": 7, "dayStart": 5,  "monthEnd": 7, "dayEnd": 20 } },
    "sweetheart": { "timing": "late",  "harvestWindow": { "monthStart": 7, "dayStart": 10, "monthEnd": 7, "dayEnd": 25 } }
  },
  "fallback": {
    "early": { "harvestWindow": { "monthStart": 6, "dayStart": 1,  "monthEnd": 6, "dayEnd": 15 } },
    "mid":   { "harvestWindow": { "monthStart": 6, "dayStart": 15, "monthEnd": 7, "dayEnd": 5  } },
    "late":  { "harvestWindow": { "monthStart": 7, "dayStart": 5,  "monthEnd": 7, "dayEnd": 25 } }
  }
}
```

---

### 🫐 PLUM

| Variety            | Key                  | Timing | Harvest window (Zagreb) | Bloom (approx)   |
|--------------------|----------------------|--------|-------------------------|------------------|
| Čačanska rana      | cacanska_rana        | early  | Jul 20 – Aug 10         | late March       |
| Čačanska lepotica  | cacanska_lepotica    | early  | Aug 1 – Aug 20          | late March       |
| Čačanska najbolja  | cacanska_najbolja    | mid    | Aug 10 – Aug 31         | early April      |
| Stanley            | stanley              | late   | Aug 20 – Sep 10         | early April      |
| Président          | prezident            | late   | Sep 1 – Sep 20          | mid April        |

**Fallback harvest windows:**
- early → Jul 20 – Aug 15
- mid   → Aug 10 – Aug 31
- late  → Aug 20 – Sep 20

```json
"plum": {
  "varieties": {
    "cacanska_rana":      { "timing": "early", "harvestWindow": { "monthStart": 7, "dayStart": 20, "monthEnd": 8, "dayEnd": 10 } },
    "cacanska_lepotica":  { "timing": "early", "harvestWindow": { "monthStart": 8, "dayStart": 1,  "monthEnd": 8, "dayEnd": 20 } },
    "cacanska_najbolja":  { "timing": "mid",   "harvestWindow": { "monthStart": 8, "dayStart": 10, "monthEnd": 8, "dayEnd": 31 } },
    "stanley":            { "timing": "late",  "harvestWindow": { "monthStart": 8, "dayStart": 20, "monthEnd": 9, "dayEnd": 10 } },
    "prezident":          { "timing": "late",  "harvestWindow": { "monthStart": 9, "dayStart": 1,  "monthEnd": 9, "dayEnd": 20 } }
  },
  "fallback": {
    "early": { "harvestWindow": { "monthStart": 7, "dayStart": 20, "monthEnd": 8, "dayEnd": 15 } },
    "mid":   { "harvestWindow": { "monthStart": 8, "dayStart": 10, "monthEnd": 8, "dayEnd": 31 } },
    "late":  { "harvestWindow": { "monthStart": 8, "dayStart": 20, "monthEnd": 9, "dayEnd": 20 } }
  }
}
```

---

### 🍑 PEACH

| Variety      | Key          | Timing | Harvest window (Zagreb) | Bloom (approx)   |
|--------------|--------------|--------|-------------------------|------------------|
| Springcrest  | springcrest  | early  | Jun 25 – Jul 15         | late March       |
| Redhaven     | redhaven     | early  | Jul 1 – Jul 20          | late March       |
| Royal Glory  | royal_glory  | mid    | Jul 20 – Aug 5          | early April      |
| Fayette      | fayette      | mid    | Aug 1 – Aug 20          | early April      |
| O'Henry      | o_henry      | late   | Aug 10 – Aug 31         | mid April        |

**Fallback harvest windows:**
- early → Jun 25 – Jul 20
- mid   → Jul 20 – Aug 20
- late  → Aug 10 – Sep 5

```json
"peach": {
  "varieties": {
    "springcrest": { "timing": "early", "harvestWindow": { "monthStart": 6, "dayStart": 25, "monthEnd": 7, "dayEnd": 15 } },
    "redhaven":    { "timing": "early", "harvestWindow": { "monthStart": 7, "dayStart": 1,  "monthEnd": 7, "dayEnd": 20 } },
    "royal_glory": { "timing": "mid",   "harvestWindow": { "monthStart": 7, "dayStart": 20, "monthEnd": 8, "dayEnd": 5  } },
    "fayette":     { "timing": "mid",   "harvestWindow": { "monthStart": 8, "dayStart": 1,  "monthEnd": 8, "dayEnd": 20 } },
    "o_henry":     { "timing": "late",  "harvestWindow": { "monthStart": 8, "dayStart": 10, "monthEnd": 8, "dayEnd": 31 } }
  },
  "fallback": {
    "early": { "harvestWindow": { "monthStart": 6, "dayStart": 25, "monthEnd": 7, "dayEnd": 20 } },
    "mid":   { "harvestWindow": { "monthStart": 7, "dayStart": 20, "monthEnd": 8, "dayEnd": 20 } },
    "late":  { "harvestWindow": { "monthStart": 8, "dayStart": 10, "monthEnd": 9, "dayEnd": 5  } }
  }
}
```

---

### 🍑 NECTARINE

| Variety       | Key           | Timing | Harvest window (Zagreb) | Bloom (approx)   |
|---------------|---------------|--------|-------------------------|------------------|
| Caldesi 2000  | caldesi_2000  | early  | Jul 1 – Jul 20          | late March       |
| Big Top       | big_top       | early  | Jul 10 – Jul 31         | late March       |
| Fantasia      | fantasia      | mid    | Aug 1 – Aug 20          | early April      |
| Stark Redgold | stark_redgold | mid    | Aug 5 – Aug 25          | early April      |
| Venus         | venus         | late   | Aug 15 – Sep 5          | mid April        |

**Fallback harvest windows:**
- early → Jul 1 – Jul 31
- mid   → Aug 1 – Aug 25
- late  → Aug 15 – Sep 10

```json
"nectarine": {
  "varieties": {
    "caldesi_2000":  { "timing": "early", "harvestWindow": { "monthStart": 7, "dayStart": 1,  "monthEnd": 7, "dayEnd": 20 } },
    "big_top":       { "timing": "early", "harvestWindow": { "monthStart": 7, "dayStart": 10, "monthEnd": 7, "dayEnd": 31 } },
    "fantasia":      { "timing": "mid",   "harvestWindow": { "monthStart": 8, "dayStart": 1,  "monthEnd": 8, "dayEnd": 20 } },
    "stark_redgold": { "timing": "mid",   "harvestWindow": { "monthStart": 8, "dayStart": 5,  "monthEnd": 8, "dayEnd": 25 } },
    "venus":         { "timing": "late",  "harvestWindow": { "monthStart": 8, "dayStart": 15, "monthEnd": 9, "dayEnd": 5  } }
  },
  "fallback": {
    "early": { "harvestWindow": { "monthStart": 7, "dayStart": 1,  "monthEnd": 7, "dayEnd": 31 } },
    "mid":   { "harvestWindow": { "monthStart": 8, "dayStart": 1,  "monthEnd": 8, "dayEnd": 25 } },
    "late":  { "harvestWindow": { "monthStart": 8, "dayStart": 15, "monthEnd": 9, "dayEnd": 10 } }
  }
}
```

---

### 🍐 PEAR

| Variety       | Key           | Timing | Harvest window (Zagreb) | Bloom (approx)     |
|---------------|---------------|--------|-------------------------|--------------------|
| Santa Maria   | santa_maria   | early  | Aug 5 – Aug 25          | late March         |
| Williams      | williams      | early  | Aug 1 – Aug 20          | late March         |
| Conference    | conference    | mid    | Aug 25 – Sep 15         | early April        |
| Bosc's Bottle | boscs_bottle  | mid    | Sep 1 – Sep 20          | early April        |
| Abate Fetel   | abate_fetel   | late   | Sep 15 – Oct 5          | mid April          |

**Fallback harvest windows:**
- early → Aug 1 – Aug 25
- mid   → Aug 25 – Sep 20
- late  → Sep 15 – Oct 5

**⚠️ Important for all pear varieties:** harvest BEFORE full ripeness — pear ripens off the tree. If it softens on the tree it will be mealy.

```json
"pear": {
  "varieties": {
    "santa_maria":  { "timing": "early", "harvestWindow": { "monthStart": 8, "dayStart": 5,  "monthEnd": 8, "dayEnd": 25 } },
    "williams":     { "timing": "early", "harvestWindow": { "monthStart": 8, "dayStart": 1,  "monthEnd": 8, "dayEnd": 20 } },
    "conference":   { "timing": "mid",   "harvestWindow": { "monthStart": 8, "dayStart": 25, "monthEnd": 9, "dayEnd": 15 } },
    "boscs_bottle": { "timing": "mid",   "harvestWindow": { "monthStart": 9, "dayStart": 1,  "monthEnd": 9, "dayEnd": 20 } },
    "abate_fetel":  { "timing": "late",  "harvestWindow": { "monthStart": 9, "dayStart": 15, "monthEnd": 10,"dayEnd": 5  } }
  },
  "fallback": {
    "early": { "harvestWindow": { "monthStart": 8, "dayStart": 1,  "monthEnd": 8, "dayEnd": 25 } },
    "mid":   { "harvestWindow": { "monthStart": 8, "dayStart": 25, "monthEnd": 9, "dayEnd": 20 } },
    "late":  { "harvestWindow": { "monthStart": 9, "dayStart": 15, "monthEnd": 10,"dayEnd": 5  } }
  }
}
```

---

### 🟠 APRICOT

| Variety           | Key                | Timing | Harvest window (Zagreb) | Bloom (approx)          |
|-------------------|--------------------|--------|-------------------------|-------------------------|
| Novosadska rodna  | novosadska_rodna   | early  | Jun 5 – Jun 25          | late Feb – early March  |
| Kioto             | kioto              | mid    | Jun 20 – Jul 10         | early March             |
| Goldrich          | goldrich           | mid    | Jun 20 – Jul 10         | early March             |
| Hargrand          | hargrand           | mid    | Jun 25 – Jul 15         | early March             |
| Bergeron          | bergeron           | late   | Jul 5 – Jul 25          | mid March               |

**Fallback harvest windows:**
- early → Jun 5 – Jun 25
- mid   → Jun 20 – Jul 15
- late  → Jul 5 – Jul 31

**⚠️ Important for all apricot varieties:** apricot blooms in February–March. Late frost is the main risk. Copper spray must be applied BEFORE bloom (January–February). Poor harvest is often caused by frost, not pests or disease.

```json
"apricot": {
  "varieties": {
    "novosadska_rodna": { "timing": "early", "harvestWindow": { "monthStart": 6, "dayStart": 5,  "monthEnd": 6, "dayEnd": 25 } },
    "kioto":            { "timing": "mid",   "harvestWindow": { "monthStart": 6, "dayStart": 20, "monthEnd": 7, "dayEnd": 10 } },
    "goldrich":         { "timing": "mid",   "harvestWindow": { "monthStart": 6, "dayStart": 20, "monthEnd": 7, "dayEnd": 10 } },
    "hargrand":         { "timing": "mid",   "harvestWindow": { "monthStart": 6, "dayStart": 25, "monthEnd": 7, "dayEnd": 15 } },
    "bergeron":         { "timing": "late",  "harvestWindow": { "monthStart": 7, "dayStart": 5,  "monthEnd": 7, "dayEnd": 25 } }
  },
  "fallback": {
    "early": { "harvestWindow": { "monthStart": 6, "dayStart": 5,  "monthEnd": 6, "dayEnd": 25 } },
    "mid":   { "harvestWindow": { "monthStart": 6, "dayStart": 20, "monthEnd": 7, "dayEnd": 15 } },
    "late":  { "harvestWindow": { "monthStart": 7, "dayStart": 5,  "monthEnd": 7, "dayEnd": 31 } }
  }
}
```

---

## 10. Mediterranean Plants (no variety model in V1)

Olive and Fig do not have a variety-based timing model in V1.
User selects type only. No fallback, no variety.

```json
"olive": { "group": "mediterranean", "seasonProfile": "mediterranean" },
"fig":   { "group": "mediterranean", "seasonProfile": "mediterranean" }
```

---

## Mediterranean Season Profile

Applies to:
- Olive
- Fig

Rules:
- Mediterranean plants do NOT use Early / Mid / Late fallback timing
- Mediterranean plants do NOT require variety timing in V1
- Mediterranean plants use simplified seasonal handling in V1
- detailed regional adaptation is future work

V1 interpretation:
- olive and fig are supported plant types
- they use a simplified season profile
- exact phenology is not modeled in V1

---

## 11. Citrus Special Handling

Citrus uses seasonProfile model — no timing groups, no variety timing.

```json
{
  "citrus": {
    "subtypes": {
      "lemon":    { "seasonProfile": "multi_cycle" },
      "orange":   { "seasonProfile": "winter" },
      "mandarin": { "seasonProfile": "autumn" }
    }
  }
}
```
### Citrus Season Profiles

`multi_cycle`
- multiple flowering cycles per year
- multiple fruiting waves are possible
- typical for lemon

`winter`
- main harvest season is winter
- typical for orange

`autumn`
- main harvest season is autumn
- typical for mandarin

Rules:
- user selects citrus → subtype required (lemon / orange / mandarin)
- citrus does NOT use Early/Mid/Late
- citrus does NOT use variety selection in V1
- uses seasonProfile instead

---

## ⚠️ Source of Truth

The JSON block in **Section 12 — Complete Data Model** is the ONLY source of truth used by the application.

Rules:
- tables above are documentation only
- descriptive text above is explanatory only
- if any table or paragraph conflicts with the JSON in Section 12, the JSON wins
- runtime logic must depend on the JSON block only
---

## 12. Complete Data Model (V1, implementation-ready)

```json
{
  "apple": {
  "group": "pome",
  "varieties": {
      "gala":             { "timing": "mid",  "harvestWindow": { "monthStart": 8,  "dayStart": 20, "monthEnd": 9,  "dayEnd": 10 } },
      "golden_delicious": { "timing": "mid",  "harvestWindow": { "monthStart": 9,  "dayStart": 10, "monthEnd": 9,  "dayEnd": 30 } },
      "jonagold":         { "timing": "mid",  "harvestWindow": { "monthStart": 9,  "dayStart": 15, "monthEnd": 10, "dayEnd": 5  } },
      "fuji":             { "timing": "late", "harvestWindow": { "monthStart": 9,  "dayStart": 25, "monthEnd": 10, "dayEnd": 15 } },
      "granny_smith":     { "timing": "late", "harvestWindow": { "monthStart": 10, "dayStart": 1,  "monthEnd": 10, "dayEnd": 20 } },
      "idared":           { "timing": "late", "harvestWindow": { "monthStart": 10, "dayStart": 1,  "monthEnd": 10, "dayEnd": 20 } }
    },
    "fallback": {
      "early": { "harvestWindow": { "monthStart": 8,  "dayStart": 1,  "monthEnd": 9,  "dayEnd": 5  } },
      "mid":   { "harvestWindow": { "monthStart": 8,  "dayStart": 20, "monthEnd": 9,  "dayEnd": 30 } },
      "late":  { "harvestWindow": { "monthStart": 9,  "dayStart": 25, "monthEnd": 10, "dayEnd": 20 } }
    }
  },

 "cherry": {
  "group": "stone",
  "varieties": {
      "burlat":     { "timing": "early", "harvestWindow": { "monthStart": 6, "dayStart": 1,  "monthEnd": 6, "dayEnd": 15 } },
      "kordia":     { "timing": "mid",   "harvestWindow": { "monthStart": 6, "dayStart": 20, "monthEnd": 7, "dayEnd": 5  } },
      "lapins":     { "timing": "mid",   "harvestWindow": { "monthStart": 6, "dayStart": 25, "monthEnd": 7, "dayEnd": 10 } },
      "regina":     { "timing": "late",  "harvestWindow": { "monthStart": 7, "dayStart": 5,  "monthEnd": 7, "dayEnd": 20 } },
      "sweetheart": { "timing": "late",  "harvestWindow": { "monthStart": 7, "dayStart": 10, "monthEnd": 7, "dayEnd": 25 } }
    },
    "fallback": {
      "early": { "harvestWindow": { "monthStart": 6, "dayStart": 1,  "monthEnd": 6, "dayEnd": 15 } },
      "mid":   { "harvestWindow": { "monthStart": 6, "dayStart": 15, "monthEnd": 7, "dayEnd": 5  } },
      "late":  { "harvestWindow": { "monthStart": 7, "dayStart": 5,  "monthEnd": 7, "dayEnd": 25 } }
    }
  },

  "plum": {
  "group": "stone",
  "varieties": {
      "cacanska_rana":     { "timing": "early", "harvestWindow": { "monthStart": 7, "dayStart": 20, "monthEnd": 8, "dayEnd": 10 } },
      "cacanska_lepotica": { "timing": "early", "harvestWindow": { "monthStart": 8, "dayStart": 1,  "monthEnd": 8, "dayEnd": 20 } },
      "cacanska_najbolja": { "timing": "mid",   "harvestWindow": { "monthStart": 8, "dayStart": 10, "monthEnd": 8, "dayEnd": 31 } },
      "stanley":           { "timing": "late",  "harvestWindow": { "monthStart": 8, "dayStart": 20, "monthEnd": 9, "dayEnd": 10 } },
      "prezident":         { "timing": "late",  "harvestWindow": { "monthStart": 9, "dayStart": 1,  "monthEnd": 9, "dayEnd": 20 } }
    },
    "fallback": {
      "early": { "harvestWindow": { "monthStart": 7, "dayStart": 20, "monthEnd": 8, "dayEnd": 15 } },
      "mid":   { "harvestWindow": { "monthStart": 8, "dayStart": 10, "monthEnd": 8, "dayEnd": 31 } },
      "late":  { "harvestWindow": { "monthStart": 8, "dayStart": 20, "monthEnd": 9, "dayEnd": 20 } }
    }
  },

  "peach": {
  "group": "stone",
  "varieties": {
      "springcrest": { "timing": "early", "harvestWindow": { "monthStart": 6, "dayStart": 25, "monthEnd": 7, "dayEnd": 15 } },
      "redhaven":    { "timing": "early", "harvestWindow": { "monthStart": 7, "dayStart": 1,  "monthEnd": 7, "dayEnd": 20 } },
      "royal_glory": { "timing": "mid",   "harvestWindow": { "monthStart": 7, "dayStart": 20, "monthEnd": 8, "dayEnd": 5  } },
      "fayette":     { "timing": "mid",   "harvestWindow": { "monthStart": 8, "dayStart": 1,  "monthEnd": 8, "dayEnd": 20 } },
      "o_henry":     { "timing": "late",  "harvestWindow": { "monthStart": 8, "dayStart": 10, "monthEnd": 8, "dayEnd": 31 } }
    },
    "fallback": {
      "early": { "harvestWindow": { "monthStart": 6, "dayStart": 25, "monthEnd": 7, "dayEnd": 20 } },
      "mid":   { "harvestWindow": { "monthStart": 7, "dayStart": 20, "monthEnd": 8, "dayEnd": 20 } },
      "late":  { "harvestWindow": { "monthStart": 8, "dayStart": 10, "monthEnd": 9, "dayEnd": 5  } }
    }
  },

"nectarine": {
  "group": "stone",
  "varieties": {
      "caldesi_2000":  { "timing": "early", "harvestWindow": { "monthStart": 7, "dayStart": 1,  "monthEnd": 7, "dayEnd": 20 } },
      "big_top":       { "timing": "early", "harvestWindow": { "monthStart": 7, "dayStart": 10, "monthEnd": 7, "dayEnd": 31 } },
      "fantasia":      { "timing": "mid",   "harvestWindow": { "monthStart": 8, "dayStart": 1,  "monthEnd": 8, "dayEnd": 20 } },
      "stark_redgold": { "timing": "mid",   "harvestWindow": { "monthStart": 8, "dayStart": 5,  "monthEnd": 8, "dayEnd": 25 } },
      "venus":         { "timing": "late",  "harvestWindow": { "monthStart": 8, "dayStart": 15, "monthEnd": 9, "dayEnd": 5  } }
    },
    "fallback": {
      "early": { "harvestWindow": { "monthStart": 7, "dayStart": 1,  "monthEnd": 7, "dayEnd": 31 } },
      "mid":   { "harvestWindow": { "monthStart": 8, "dayStart": 1,  "monthEnd": 8, "dayEnd": 25 } },
      "late":  { "harvestWindow": { "monthStart": 8, "dayStart": 15, "monthEnd": 9, "dayEnd": 10 } }
    }
  },

  "pear": {
  "group": "pome",
  "varieties": {
      "santa_maria":  { "timing": "early", "harvestWindow": { "monthStart": 8, "dayStart": 5,  "monthEnd": 8,  "dayEnd": 25 } },
      "williams":     { "timing": "early", "harvestWindow": { "monthStart": 8, "dayStart": 1,  "monthEnd": 8,  "dayEnd": 20 } },
      "conference":   { "timing": "mid",   "harvestWindow": { "monthStart": 8, "dayStart": 25, "monthEnd": 9,  "dayEnd": 15 } },
      "boscs_bottle": { "timing": "mid",   "harvestWindow": { "monthStart": 9, "dayStart": 1,  "monthEnd": 9,  "dayEnd": 20 } },
      "abate_fetel":  { "timing": "late",  "harvestWindow": { "monthStart": 9, "dayStart": 15, "monthEnd": 10, "dayEnd": 5  } }
    },
    "fallback": {
      "early": { "harvestWindow": { "monthStart": 8, "dayStart": 1,  "monthEnd": 8,  "dayEnd": 25 } },
      "mid":   { "harvestWindow": { "monthStart": 8, "dayStart": 25, "monthEnd": 9,  "dayEnd": 20 } },
      "late":  { "harvestWindow": { "monthStart": 9, "dayStart": 15, "monthEnd": 10, "dayEnd": 5  } }
    }
  },

  "apricot": {
  "group": "stone",
  "varieties": {
      "novosadska_rodna": { "timing": "early", "harvestWindow": { "monthStart": 6, "dayStart": 5,  "monthEnd": 6, "dayEnd": 25 } },
      "kioto":            { "timing": "mid",   "harvestWindow": { "monthStart": 6, "dayStart": 20, "monthEnd": 7, "dayEnd": 10 } },
      "goldrich":         { "timing": "mid",   "harvestWindow": { "monthStart": 6, "dayStart": 20, "monthEnd": 7, "dayEnd": 10 } },
      "hargrand":         { "timing": "mid",   "harvestWindow": { "monthStart": 6, "dayStart": 25, "monthEnd": 7, "dayEnd": 15 } },
      "bergeron":         { "timing": "late",  "harvestWindow": { "monthStart": 7, "dayStart": 5,  "monthEnd": 7, "dayEnd": 25 } }
    },
    "fallback": {
      "early": { "harvestWindow": { "monthStart": 6, "dayStart": 5,  "monthEnd": 6, "dayEnd": 25 } },
      "mid":   { "harvestWindow": { "monthStart": 6, "dayStart": 20, "monthEnd": 7, "dayEnd": 15 } },
      "late":  { "harvestWindow": { "monthStart": 7, "dayStart": 5,  "monthEnd": 7, "dayEnd": 31 } }
    }
  },

  "olive": { "group": "mediterranean", "seasonProfile": "mediterranean" },
  "fig":   { "group": "mediterranean", "seasonProfile": "mediterranean" },

"citrus": {
  "group": "citrus",
  "subtypes": {
      "lemon":    { "seasonProfile": "multi_cycle" },
      "orange":   { "seasonProfile": "winter" },
      "mandarin": { "seasonProfile": "autumn" }
    }
  }
}
```

---

## 13. UX Constraints

- User never types plant name or variety — always selects from list
- Icon + label required for every item
- Selection must be fast (one-hand use on mobile)
- Variety list is scrollable, not paginated — max 6 varieties per type keeps it manageable
- "I don't know" option always visible → goes to fallback or default Mid

---

## 14. What is NOT included (V1)

- Berries (strawberry, blueberry, etc.)
- Exotic plants
- Detailed phenology stages
- Disease-specific mapping
- Yield prediction
- Rootstock influence on timing
- Region offsets

---

## 15. Future Extensions (V2+)

Possible future extensions:

- add more varieties
- add region-specific defaults
- add disease susceptibility
- add rootstock influence
- remote catalog updates
- activate `bloomWindow` in runtime logic
- add climate-zone offsets
- add user fine-tuning for timing
- add phenology-based planning

Rules:
- none of the above are active in V1
- V1 runtime logic uses `harvestWindow` only
- no future field may be treated as implemented unless explicitly opened in roadmap

---

## Final Principle

Catalog must be:
- simple enough for user
- structured enough for engine
- stable enough to avoid refactoring

