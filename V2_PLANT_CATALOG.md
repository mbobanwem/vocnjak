# V2 PLANT CATALOG — DOMAIN INPUT (pre-S3)

## Status
Input-only material for S3 audit. NOT authoritative V2 truth. Domain content (species, varieties, harvest windows, mediterranean / nut handling, and deferred citrus / fig reference material) is preserved; V1 runtime / storage / generation framing has been removed. Promotion to V2 spec requires S3–S5 audit and owner sign-off.

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

## Plant identity (domain note)

The catalog identifies each plant by its species key (apple, pear, quince, …) plus an optional variety. Section 12 is the structured reference for current species keys, groups, varieties, harvest windows, and mediterranean / nut handling. Deferred citrus and fig reference material is explicitly non-current. Persistence and runtime routing decisions are out of scope for this input file.

---

## 2. Design Principles

- No free text input
- Minimal but sufficient coverage (EU focus)
- Variety optional
- Always have a deterministic timing source: fallback timing bands for timing-driving species, or species/subtype seasonProfile where fallback bands do not apply
- Avoid over-engineering

---

## 3. Plant Types (Supported)

### Core fruit trees

- Apple
- Pear
- Plum
- Sweet cherry
- Sour cherry
- Peach
- Nectarine
- Apricot
- Quince
- Almond

---

### Mediterranean / warm climate

- Olive
- Pomegranate

---

### Nut trees

Walnut, hazelnut (classified under `nut` for user selection, organization, and shared-template discovery; each species has its own template — see `V2_ORCHARD_PLAN_TEMPLATES.md` Block 6).

---

Deferred / future warm-climate candidates:

- Fig is deferred from current V2 support.
- Citrus / agrumi (lemon, orange, mandarin) are deferred from current V2 support.

---

## 4. Knowledge tiers / selection levels

A catalog plant can be described at the most specific supported level the user knows.

For timing-driving species, the three-tier timing model applies:

**Tier 1 — variety known**
A timing-driving variety is identified (e.g. *Fuji apple*). Timing is taken from the variety entry.

**Tier 2 — timing band known, variety unknown**
The variety is unknown but the approximate ripening band is known: **Early / Mid / Late**. Timing is taken from the fallback band.
Example: an old apple tree of unknown variety that ripens in August → Early.

**Tier 3 — species only**
Neither variety nor band is known. Timing defaults to **Mid**.
Example: a just-bought apple sapling with no label → Mid.

For timing-driving species, variety and fallback band describe the same timing axis; exactly one applies per plant.

For seasonProfile species, fallback timing bands do not apply. Timing is taken from the species or subtype `seasonProfile`.

A seasonProfile species may still expose user-facing-only varieties where useful for selection/display/trust. These varieties do not change timing or plan behavior.

Current seasonProfile handling:
- olive may expose user-facing-only varieties
- pomegranate is species-level only

---

## 5. Timing profile

Each plant resolves to a timing source deterministically from its catalog shape:

- timing-driving species: variety harvestWindow → fallback harvestWindow → default Mid fallback
- seasonProfile species: species seasonProfile

No other timing sources are defined in this input file. Region offsets, fine tuning, and rootstock influence are out of scope.

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

A supported species may expose optional `varieties`.

There are two variety forms. The parent species shape determines which form applies.

### Form A — timing-driving variety

Used under species that declare `fallback` timing bands.

Required fields:

- `timing`: one of `early`, `mid`, `late`
- `harvestWindow`: month/day harvest range

Optional fields:

- `bloomWindow`: reserved metadata only; not active logic unless already stated elsewhere

Example:

```json
{
  "timing": "early | mid | late",
  "harvestWindow": { "monthStart": int, "dayStart": int, "monthEnd": int, "dayEnd": int }
}
```

Rules:

- timing-driving varieties are used only where variety-specific timing is source-backed and useful
- do not use combined timing values like `early-mid` or `mid-late`
- existing timing-driving species keep their current strict requirements

Timing-driving varieties:

- apple
- pear
- quince
- sweet_cherry
- sour_cherry
- plum
- peach
- nectarine
- apricot
- almond
- walnut
- hazelnut

### Form B — user-facing-only variety

Used under species that declare a `seasonProfile`.

Representation:

```json
{
  "variety_key": {}
}
```

Rules:

- empty object is intentional
- it means selectable/displayable variety label only
- no `timing`
- no `harvestWindow`
- no `bloomWindow`
- no variety-specific plan behavior
- timing remains species-level through `seasonProfile`

SeasonProfile species with user-facing-only varieties:

- olive

SeasonProfile species without varieties in this phase:

- pomegranate

## 8. Timing Constraint

Allowed timing values:

- `early`
- `mid`
- `late`

No combined values. Reason: keeps the timing model simple, avoids ambiguity.

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
| Topaz            | topaz            | mid    | Sep 20 – Oct 10            | mid April          |
| Elstar           | elstar           | mid    | Sep 10 – Sep 30            | mid April          |
| Fuji             | fuji             | late   | Oct 10 – Nov 5             | mid April          |
| Granny Smith     | granny_smith     | late   | Oct 1 – Oct 20             | mid April          |
| Idared           | idared           | late   | Oct 1 – Oct 20             | mid April          |

**Fallback harvest windows:**
- early → Aug 1 – Sep 5
- mid   → Aug 20 – Sep 30
- late  → Sep 25 – Oct 20

---

### 🍒 SWEET CHERRY

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

---

### 🍒 SOUR CHERRY

| Variety         | Key           | Timing | Harvest window (Zagreb) | Bloom (approx)  |
|-----------------|---------------|--------|-------------------------|-----------------|
| Oblačinska      | oblacinska    | early  | Jun 20 – Jul 5          | early April     |
| Marasca         | marasca       | mid    | Jul 1 – Jul 15          | early April     |
| Montmorency     | montmorency   | mid    | Jul 5 – Jul 20          | early April     |
| Morello / Schattenmorelle | morello | late | Jul 10 – Jul 31 | early April |

**Fallback harvest windows:**
- early → Jun 20 – Jul 10
- mid   → Jul 1 – Jul 20
- late  → Jul 15 – Jul 31

---

### 🫐 PLUM

| Variety            | Key                  | Timing | Harvest window (Zagreb) | Bloom (approx)   |
|--------------------|----------------------|--------|-------------------------|------------------|
| Čačanska rana      | cacanska_rana        | early  | Jul 20 – Aug 10         | late March       |
| Čačanska lepotica  | cacanska_lepotica    | early  | Aug 1 – Aug 20          | late March       |
| Čačanska najbolja  | cacanska_najbolja    | mid    | Aug 10 – Aug 31         | early April      |
| Stanley            | stanley              | late   | Aug 20 – Sep 10         | early April      |
| Bistrica / Požegača | bistrica            | late   | Aug 25 – Sep 20         | early April      |
| Président          | prezident            | late   | Sep 1 – Sep 20          | mid April        |

**Fallback harvest windows:**
- early → Jul 20 – Aug 15
- mid   → Aug 10 – Aug 31
- late  → Aug 20 – Sep 20

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

---

### 🍑 NECTARINE

| Variety       | Key           | Timing | Harvest window (Zagreb) | Bloom (approx)   |
|---------------|---------------|--------|-------------------------|------------------|
| Caldesi 2000  | caldesi_2000  | early  | Jul 1 – Jul 20          | late March       |
| Big Top       | big_top       | early  | Jul 10 – Jul 31         | late March       |
| Fantasia      | fantasia      | late   | Aug 10 – Sep 5          | early April      |
| Stark Redgold | stark_redgold | mid    | Aug 5 – Aug 25          | early April      |
| Venus         | venus         | late   | Aug 15 – Sep 5          | mid April        |

**Fallback harvest windows:**
- early → Jul 1 – Jul 31
- mid   → Aug 1 – Aug 25
- late  → Aug 15 – Sep 10

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

---

### 🍐 QUINCE

| Variety       | Key           | Timing | Harvest window (Zagreb) | Bloom (approx)  |
|---------------|---------------|--------|-------------------------|-----------------|
| Leskovačka    | leskovacka    | mid    | Oct 1 – Oct 20          | early May       |
| Vranjska      | vranjska      | mid    | Oct 5 – Oct 25          | early May       |
| Champion      | champion      | late   | Oct 15 – Nov 5          | early May       |

**Fallback harvest windows:**
- mid   → Oct 1 – Oct 25
- late  → Oct 15 – Nov 10

---

### 🟠 APRICOT

| Variety           | Key                | Timing | Harvest window (Zagreb) | Bloom (approx)          |
|-------------------|--------------------|--------|-------------------------|-------------------------|
| Novosadska rodna  | novosadska_rodna   | early  | Jun 5 – Jun 25          | late Feb – early March  |
| Kioto             | kioto              | mid    | Jun 20 – Jul 10         | early March             |
| Goldrich          | goldrich           | mid    | Jun 20 – Jul 10         | early March             |
| Hargrand          | hargrand           | mid    | Jun 25 – Jul 15         | early March             |
| Mađarska najbolja / Magyar kajszi | madjarska_najbolja | mid | Jun 25 – Jul 15 | early March |
| Bergeron          | bergeron           | late   | Jul 5 – Jul 25          | mid March               |

**Fallback harvest windows:**
- early → Jun 5 – Jun 25
- mid   → Jun 20 – Jul 15
- late  → Jul 5 – Jul 31

**⚠️ Important for all apricot varieties:** apricot blooms in February–March. Late frost is the main risk. Copper spray must be applied BEFORE bloom (January–February). Poor harvest is often caused by frost, not pests or disease.

---

### 🟤 ALMOND

| Variety     | Key         | Timing | Harvest window (Zagreb) | Bloom (approx)         |
|-------------|-------------|--------|-------------------------|------------------------|
| Ferragnès   | ferragnes   | late   | Sep 5 – Sep 25          | late Feb – early March |
| Ferraduel   | ferraduel   | late   | Sep 10 – Sep 30         | late Feb – early March |
| Supernova   | supernova   | mid    | Aug 25 – Sep 15         | early March            |

**Fallback harvest windows:**
- mid   → Aug 20 – Sep 15
- late  → Sep 5 – Sep 30

**⚠️ Important for all almond varieties:** almond blooms extremely early (late Feb – March). Frost during bloom is the main cause of crop loss in continental EU. Preventive copper must be applied BEFORE bud swell. Never spray during open bloom.

---

### 🌰 WALNUT

| Variety    | Key         | Timing | Harvest window (Zagreb) | Bloom (approx) |
|------------|-------------|--------|-------------------------|----------------|
| Chandler   | chandler    | late   | Sep 20 – Oct 15         | mid May        |
| Franquette | franquette  | late   | Sep 25 – Oct 20         | mid May        |
| Šejnovo    | sejnovo     | mid    | Sep 10 – Oct 1          | early May      |

**Fallback harvest windows:**
- mid   → Sep 10 – Oct 5
- late  → Sep 20 – Oct 20

**Note:** walnut "harvest window" in this file describes the natural drop / gathering period (nuts fall when ripe); semantic refinement deferred to S3 audit.

---

### 🌰 HAZELNUT

| Variety           | Key               | Timing | Harvest window (Zagreb) | Bloom (approx) |
|-------------------|-------------------|--------|-------------------------|----------------|
| Istarski dugi     | istarski_dugi     | mid    | Aug 25 – Sep 15         | late Feb       |
| Tonda di Giffoni  | tonda_di_giffoni  | mid    | Aug 20 – Sep 10         | late Feb       |
| Ennis             | ennis             | late   | Sep 1 – Sep 25          | early March    |

**Fallback harvest windows:**
- mid   → Aug 25 – Sep 15
- late  → Sep 1 – Sep 25

**Note:** hazelnut "harvest window" in this file describes the natural drop / gathering period; semantic refinement deferred to S3 audit.

---

## 10. Mediterranean Plants

Mediterranean is a UX/navigation grouping, not a weaker domain model.
Olive and pomegranate are current full fruit species.
Group membership does not determine whether a species can have varieties.

Olive uses `seasonProfile: "mediterranean"` and supports user-facing-only varieties, Form B per Section 7.
Olive varieties are selectable for user recognition, orchard memory, and product trust.
Olive varieties do NOT affect timing.
Olive varieties do NOT affect plan templates.
Olive varieties must NOT have `timing`, `harvestWindow`, or `bloomWindow`.

Olive starter set:

| Cultivar | Key | Primary relevance | Timing role |
|----------|-----|-------------------|-------------|
| Oblica | oblica | Croatia / Adriatic | none |
| Istarska bjelica | istarska_bjelica | Croatia / Istria | none |
| Leccino | leccino | Italy / broad EU | none |
| Frantoio | frantoio | Italy / broad EU | none |
| Coratina | coratina | Italy | none |
| Picholine | picholine | France / Provence | none |
| Aglandau | aglandau | France / Provence | none |

Deferred olive variety entries:

- Lastovka
- Levantinka
- Buža
- Pendolino

Reason:

- Lastovka, Levantinka, and Buža are valid future local/regional additions but not needed in the starter set.
- Pendolino is deferred because pollination-role semantics must not become hidden runtime behavior.

Fig is deferred from current V2 support.

Reason:

- fig behavior is type-dependent: one-crop figs and two-crop figs do not share a universal harvest model.
- pruning guidance depends on whether the crop is on old wood, new growth, or both.
- regional interpretation differs significantly between Mediterranean/coastal and continental contexts.

Future reintroduction requires a dedicated source-backed fig domain definition. Do not add fig varieties, one-crop/two-crop fields, or simplified single-window fig support in current V2.

Pomegranate remains species-level in this phase: no varieties; variety modeling deferred.
Pomegranate is classified under `mediterranean` for organizing purposes; its template in `V2_ORCHARD_PLAN_TEMPLATES.md` is structurally independent, and the species-specific template is authoritative.

---

## Mediterranean Season Profile

Applies to:
- Olive
- Pomegranate

Rules:
- Mediterranean plants do NOT use Early / Mid / Late fallback timing
- Mediterranean plants do NOT require variety timing
- Mediterranean plants use simplified seasonal handling
- detailed regional adaptation is deferred

Interpretation:
- olive and pomegranate are supported plant types
- they use a simplified season profile
- exact phenology is not modeled in the current catalog

---

## 11. Deferred Citrus Reference (not current V2 support)

Citrus is not current V2 support.
This section is preserved as future/deferred input only.
Do not use it for current catalog selection, active timing resolution, or plan generation.

Citrus was deferred because Zagreb / continental baseline windows are not reliable for lemon, orange, and mandarin.
Future reintroduction requires a climate/location/regional timing strategy or equivalent owner-approved mechanism.

Archived pre-S4 citrus shape used a subtype model (lemon | orange | mandarin), each subtype carrying a seasonProfile. This is future reference only.

### Archived citrus season profiles

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

Archived notes:
- future citrus support may need lemon / orange / mandarin as proper supported fruit species or an owner-approved equivalent model.
- citrus must not return as partial current support.
- citrus must not use current Zagreb / continental calendar windows without future climate/location/regional timing support.

---

> **Pre-audit status (content expansion pass, 2026-04-24)**
>
> The following species are new to this input file and have NOT yet been audited:
> - sour_cherry (Prunus cerasus)
> - quince (Cydonia oblonga)
> - almond (Prunus dulcis)
> - walnut (Juglans regia)
> - hazelnut (Corylus avellana)
> - pomegranate (Punica granatum)
>
> Variety harvest windows, bloom timing, and disease notes are conservative baseline
> proposals drawn from general continental-EU hobby-orchard practice. They do NOT
> carry regional-source provenance. S3 audit must verify against regional references
> (Savjetodavna služba publications, Glasnik zaštite bilja, established pomology
> references for nut trees and marginal warm-climate plants) before release.
>
> **Group definition and species-specific override rule**
>
> Group (`pome`, `stone`, `mediterranean`, `nut`) is an **organizing classification**. It is used for:
>
> - **user selection** — a user picking a plant can filter by agronomic family;
> - **organization** — species sharing a broad agronomic profile are grouped together for navigation and display;
> - **shared-template discovery** — group membership makes it easy to find the shared baseline that applies to the family (e.g. the shared block for `pome` + `stone`);
> - **identifying baseline actions** — where a baseline is genuinely applicable across the group (e.g. winter copper and dormant oil for `pome` + `stone`).
>
> Group membership does **not** imply that all species in the group share the same full work plan.
>
> Each species' actual work plan is built up from, in order:
>
> 1. the **shared block**, where it is explicitly applicable to the species (per the block's own scope statement);
> 2. the **species-specific template block** in `V2_ORCHARD_PLAN_TEMPLATES.md`.
>
> **Species-specific override rule — species-specific template wins.** Where a species' per-species block introduces, modifies, or contradicts the shared baseline, the per-species block is authoritative for that species. Group membership never forces a species to follow a plan that does not match its own template. See `V2_ORCHARD_PLAN_TEMPLATES.md` for the full Species-specific override rule paragraph and the concrete divergence examples.
>
> Concrete examples of divergence inside `stone`:
>
> - peach and nectarine carry leaf-curl (kovrčavost) copper;
> - apricot and almond carry pre-bloom copper + frost-risk handling (early bloomers);
> - sweet_cherry and sour_cherry carry cherry-fly monitoring and optional bird-net;
> - plum carries plum-specific pest and fruit handling;
> - pear (within `pome`) carries fire-blight (vatrostuh) copper.
>
> Within `mediterranean`, olive and pomegranate each have a distinct Block 6 template. Fig is deferred from current V2 support. Pomegranate's template is structurally independent. The `mediterranean` label organizes current supported Mediterranean species together for navigation; it does not generate template content for any of them.
>
> **S3 items that remain open:**
>
> - agronomic validation of the six new species (variety timing, bloom windows, pest / disease notes);
> - `nut` group name — S3 may keep, rename (e.g. `tree_nut`), or split. Templates are independent of the chosen name;
> - pomegranate's final grouping — S3 may keep it under `mediterranean` as an organizing label or promote it to its own group. Pomegranate's template is already structurally independent, so this is a labeling decision, not a template-structure decision.
>
> Individual note entries above do NOT carry per-line audit markers — the entire
> block for these six species is subject to full S3 review.

---

## 12. Consolidated catalog data (reference JSON)

The JSON below is the machine-readable form of the species tables and prose above. Where a table and the JSON disagree, the JSON is the reference for this input file. Final V2 authority is established only after S3–S5 audit and owner sign-off.

```json
{
  "apple": {
  "group": "pome",
  "varieties": {
      "gala":             { "timing": "mid",  "harvestWindow": { "monthStart": 8,  "dayStart": 20, "monthEnd": 9,  "dayEnd": 10 } },
      "golden_delicious": { "timing": "mid",  "harvestWindow": { "monthStart": 9,  "dayStart": 10, "monthEnd": 9,  "dayEnd": 30 } },
      "jonagold":         { "timing": "mid",  "harvestWindow": { "monthStart": 9,  "dayStart": 15, "monthEnd": 10, "dayEnd": 5  } },
      "topaz":            { "timing": "mid",  "harvestWindow": { "monthStart": 9,  "dayStart": 20, "monthEnd": 10, "dayEnd": 10 } },
      "elstar":           { "timing": "mid",  "harvestWindow": { "monthStart": 9,  "dayStart": 10, "monthEnd": 9,  "dayEnd": 30 } },
      "fuji":             { "timing": "late", "harvestWindow": { "monthStart": 10, "dayStart": 10, "monthEnd": 11, "dayEnd": 5 } },
      "granny_smith":     { "timing": "late", "harvestWindow": { "monthStart": 10, "dayStart": 1,  "monthEnd": 10, "dayEnd": 20 } },
      "idared":           { "timing": "late", "harvestWindow": { "monthStart": 10, "dayStart": 1,  "monthEnd": 10, "dayEnd": 20 } }
    },
    "fallback": {
      "early": { "harvestWindow": { "monthStart": 8,  "dayStart": 1,  "monthEnd": 9,  "dayEnd": 5  } },
      "mid":   { "harvestWindow": { "monthStart": 8,  "dayStart": 20, "monthEnd": 9,  "dayEnd": 30 } },
      "late":  { "harvestWindow": { "monthStart": 9,  "dayStart": 25, "monthEnd": 10, "dayEnd": 20 } }
    }
  },

 "sweet_cherry": {
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

  "sour_cherry": {
  "group": "stone",
  "varieties": {
      "oblacinska":  { "timing": "early", "harvestWindow": { "monthStart": 6, "dayStart": 20, "monthEnd": 7, "dayEnd": 5  } },
      "marasca":     { "timing": "mid",   "harvestWindow": { "monthStart": 7, "dayStart": 1,  "monthEnd": 7, "dayEnd": 15 } },
      "montmorency": { "timing": "mid",   "harvestWindow": { "monthStart": 7, "dayStart": 5,  "monthEnd": 7, "dayEnd": 20 } },
      "morello":     { "timing": "late",  "harvestWindow": { "monthStart": 7, "dayStart": 10, "monthEnd": 7, "dayEnd": 31 } }
    },
    "fallback": {
      "early": { "harvestWindow": { "monthStart": 6, "dayStart": 20, "monthEnd": 7, "dayEnd": 10 } },
      "mid":   { "harvestWindow": { "monthStart": 7, "dayStart": 1,  "monthEnd": 7, "dayEnd": 20 } },
      "late":  { "harvestWindow": { "monthStart": 7, "dayStart": 15, "monthEnd": 7, "dayEnd": 31 } }
    }
  },

  "plum": {
  "group": "stone",
  "varieties": {
      "cacanska_rana":     { "timing": "early", "harvestWindow": { "monthStart": 7, "dayStart": 20, "monthEnd": 8, "dayEnd": 10 } },
      "cacanska_lepotica": { "timing": "early", "harvestWindow": { "monthStart": 8, "dayStart": 1,  "monthEnd": 8, "dayEnd": 20 } },
      "cacanska_najbolja": { "timing": "mid",   "harvestWindow": { "monthStart": 8, "dayStart": 10, "monthEnd": 8, "dayEnd": 31 } },
      "stanley":           { "timing": "late",  "harvestWindow": { "monthStart": 8, "dayStart": 20, "monthEnd": 9, "dayEnd": 10 } },
      "prezident":         { "timing": "late",  "harvestWindow": { "monthStart": 9, "dayStart": 1,  "monthEnd": 9, "dayEnd": 20 } },
      "bistrica":          { "timing": "late",  "harvestWindow": { "monthStart": 8, "dayStart": 25, "monthEnd": 9, "dayEnd": 20 } }
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
      "fantasia":      { "timing": "late",  "harvestWindow": { "monthStart": 8, "dayStart": 10, "monthEnd": 9, "dayEnd": 5 } },
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

  "quince": {
  "group": "pome",
  "varieties": {
      "leskovacka": { "timing": "mid",  "harvestWindow": { "monthStart": 10, "dayStart": 1,  "monthEnd": 10, "dayEnd": 20 } },
      "vranjska":   { "timing": "mid",  "harvestWindow": { "monthStart": 10, "dayStart": 5,  "monthEnd": 10, "dayEnd": 25 } },
      "champion":   { "timing": "late", "harvestWindow": { "monthStart": 10, "dayStart": 15, "monthEnd": 11, "dayEnd": 5  } }
    },
    "fallback": {
      "mid":  { "harvestWindow": { "monthStart": 10, "dayStart": 1,  "monthEnd": 10, "dayEnd": 25 } },
      "late": { "harvestWindow": { "monthStart": 10, "dayStart": 15, "monthEnd": 11, "dayEnd": 10 } }
    }
  },

  "apricot": {
  "group": "stone",
  "varieties": {
      "novosadska_rodna": { "timing": "early", "harvestWindow": { "monthStart": 6, "dayStart": 5,  "monthEnd": 6, "dayEnd": 25 } },
      "kioto":            { "timing": "mid",   "harvestWindow": { "monthStart": 6, "dayStart": 20, "monthEnd": 7, "dayEnd": 10 } },
      "goldrich":         { "timing": "mid",   "harvestWindow": { "monthStart": 6, "dayStart": 20, "monthEnd": 7, "dayEnd": 10 } },
      "hargrand":         { "timing": "mid",   "harvestWindow": { "monthStart": 6, "dayStart": 25, "monthEnd": 7, "dayEnd": 15 } },
      "bergeron":         { "timing": "late",  "harvestWindow": { "monthStart": 7, "dayStart": 5,  "monthEnd": 7, "dayEnd": 25 } },
      "madjarska_najbolja": { "timing": "mid", "harvestWindow": { "monthStart": 6, "dayStart": 25, "monthEnd": 7, "dayEnd": 15 } }
    },
    "fallback": {
      "early": { "harvestWindow": { "monthStart": 6, "dayStart": 5,  "monthEnd": 6, "dayEnd": 25 } },
      "mid":   { "harvestWindow": { "monthStart": 6, "dayStart": 20, "monthEnd": 7, "dayEnd": 15 } },
      "late":  { "harvestWindow": { "monthStart": 7, "dayStart": 5,  "monthEnd": 7, "dayEnd": 31 } }
    }
  },

  "almond": {
  "group": "stone",
  "varieties": {
      "ferragnes": { "timing": "late", "harvestWindow": { "monthStart": 9, "dayStart": 5,  "monthEnd": 9, "dayEnd": 25 } },
      "ferraduel": { "timing": "late", "harvestWindow": { "monthStart": 9, "dayStart": 10, "monthEnd": 9, "dayEnd": 30 } },
      "supernova": { "timing": "mid",  "harvestWindow": { "monthStart": 8, "dayStart": 25, "monthEnd": 9, "dayEnd": 15 } }
    },
    "fallback": {
      "mid":  { "harvestWindow": { "monthStart": 8, "dayStart": 20, "monthEnd": 9, "dayEnd": 15 } },
      "late": { "harvestWindow": { "monthStart": 9, "dayStart": 5,  "monthEnd": 9, "dayEnd": 30 } }
    }
  },

  "walnut": {
  "group": "nut",
  "varieties": {
      "chandler":   { "timing": "late", "harvestWindow": { "monthStart": 9, "dayStart": 20, "monthEnd": 10, "dayEnd": 15 } },
      "franquette": { "timing": "late", "harvestWindow": { "monthStart": 9, "dayStart": 25, "monthEnd": 10, "dayEnd": 20 } },
      "sejnovo":    { "timing": "mid",  "harvestWindow": { "monthStart": 9, "dayStart": 10, "monthEnd": 10, "dayEnd": 1  } }
    },
    "fallback": {
      "mid":  { "harvestWindow": { "monthStart": 9, "dayStart": 10, "monthEnd": 10, "dayEnd": 5  } },
      "late": { "harvestWindow": { "monthStart": 9, "dayStart": 20, "monthEnd": 10, "dayEnd": 20 } }
    }
  },

  "hazelnut": {
  "group": "nut",
  "varieties": {
      "istarski_dugi":    { "timing": "mid",  "harvestWindow": { "monthStart": 8, "dayStart": 25, "monthEnd": 9, "dayEnd": 15 } },
      "tonda_di_giffoni": { "timing": "mid",  "harvestWindow": { "monthStart": 8, "dayStart": 20, "monthEnd": 9, "dayEnd": 10 } },
      "ennis":            { "timing": "late", "harvestWindow": { "monthStart": 9, "dayStart": 1,  "monthEnd": 9, "dayEnd": 25 } }
    },
    "fallback": {
      "mid":  { "harvestWindow": { "monthStart": 8, "dayStart": 25, "monthEnd": 9, "dayEnd": 15 } },
      "late": { "harvestWindow": { "monthStart": 9, "dayStart": 1,  "monthEnd": 9, "dayEnd": 25 } }
    }
  },

  "olive": {
    "group": "mediterranean",
    "seasonProfile": "mediterranean",
    "varieties": {
      "oblica": {},
      "istarska_bjelica": {},
      "leccino": {},
      "frantoio": {},
      "coratina": {},
      "picholine": {},
      "aglandau": {}
    }
  },
  "pomegranate": { "group": "mediterranean", "seasonProfile": "mediterranean" }
}
```

**Deferred citrus note:** citrus is excluded from the current structured reference. Lemon, orange, and mandarin may return only through future owner-approved citrus/domain work with climate/location/regional timing support.

---

## 14. What is not in scope for the current catalog

- Berries (strawberry, blueberry, etc.)
- Exotic plants
- Current citrus support
- Current fig support
- Detailed phenology stages
- Disease-specific mapping
- Yield prediction
- Rootstock influence on timing
- Region offsets

---

## 15. Future extension candidates (non-binding)

Non-binding ideas for later consideration. None of the items below are active in the current catalog, and listing them here does not imply approval:

- add more varieties
- add region-specific defaults
- add disease susceptibility
- add rootstock influence
- remote catalog updates
- activate `bloomWindow` in timing logic
- add climate-zone offsets
- add user fine-tuning for timing
- add phenology-based planning

The current catalog uses `harvestWindow` as the only active timing window. No future field may be treated as implemented unless explicitly opened in the roadmap.

---

## Final Principle

Catalog must be:
- simple enough for user
- structured enough to be consumed deterministically
- stable enough to avoid refactoring
