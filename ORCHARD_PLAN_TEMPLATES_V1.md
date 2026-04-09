# ORCHARD_PLAN_TEMPLATES_V1.md

## Status
FINAL DRAFT — Source of truth for predefined orchard plans (V1)
Aligned with PLANT_CATALOG_V1.md and DOMAIN_RULES_V1.md.

---

## Purpose

This file defines **predefined orchard work (plans)** per plant species.

It serves as a **canonical template source** for generating `plans[]` in the app.

This file does NOT:
- store user data
- modify schema
- introduce new fields
- duplicate plant catalog logic

This file DOES:
- define WHAT orchard work should happen during the year
- map that work to existing V1 plan structure
- enable deterministic plan generation
- preserve agronomic context in notes

---

## Core Principles

1. Plans = intent
2. Activities = reality
3. Plan state = derived (never stored)

This file must fully respect:
- DOMAIN_RULES_V1.md
- MIGRATION_PLAN_V1.md
- TARGET_ARCHITECTURE_V1.md

---

## Constraints (STRICT)

- DO NOT introduce new fields
- DO NOT change plan schema
- DO NOT add heuristics or AI logic
- DO NOT include user-specific data
- DO NOT include IDs (plantIds generated later)
- MUST be deterministic
- MUST map to existing plan structure
- MUST use only V1-compatible activityType values

---

## Plan Structure Mapping

Each template entry must map to existing plan fields:

| Template Field | Maps to           |
|----------------|-------------------|
| activityType   | plan.activityType |
| title          | plan.title        |
| monthStart     | plan.monthStart   |
| dayStart       | plan.dayStart     |
| monthEnd       | plan.monthEnd     |
| dayEnd         | plan.dayEnd       |
| notes          | plan.notes        |
| appliesToAll   | plan.appliesToAll (if true) |

No other fields are allowed in template entries.

---

## Supported Plant Types

Defined in PLANT_CATALOG_V1.md:

**Core fruit trees:** apple, pear, plum, cherry, peach, nectarine, apricot

**Mediterranean:** olive, fig

**Citrus (special model):** lemon, orange, mandarin

---

## Template Interpretation Rules

Templates define orchard work only. They do NOT encode engine logic.

Rules:
- template entries must use only existing V1-compatible plan fields
- no custom fields are allowed in entries
- young-tree relevance must be described in `notes`, not in custom fields
- condition-based execution must be described in `notes`, not in custom fields
- agronomic complexity belongs in `notes`
- variety timing belongs in PLANT_CATALOG_V1.md, not here

### Young tree interpretation (notes only)

Some activities are not relevant for trees in year 1–2 before first bearing.

Examples: fruit thinning, bird netting, fruit pest trap programs.

These are documented in `notes` per entry.
This file does NOT enforce suppression — notes describe relevance only.
Any future filtering must follow the active roadmap session when that scope is opened.
Current V1 does not suppress plans based on tree age at generation or render time.

### Condition-based interpretation (notes only)

Some activities should only happen if a condition is met.

Examples: insecticide after trap threshold, second copper spray in wet spring, bird net if pressure observed.

These are documented in `notes` per entry.
This file does NOT encode conditions as fields.

---

## ActivityType Mapping Rule

Templates MUST use only V1-compatible internal activity types:

| Allowed internal type | Used for |
|-----------------------|----------|
| spraying              | all spray treatments |
| pruning               | all pruning and pinching |
| fertilizing           | all fertilization |
| watering              | irrigation activities |
| planting              | planting operations |
| harvest               | all harvest activities |
| observation           | whitewash, thinning, netting, inspection, shutdown reminders |
| problem               | visible pest or disease incidents |
| monitoring            | trap placement, scouting, visual checks |

**Mapping examples for orchard-specific titles:**

- "Krečenje debla" → activityType: `observation`
- "Prorjeđivanje plodova" → activityType: `observation`
- "Mreža protiv ptica" → activityType: `observation`
- "Gašenje navodnjavanja" → activityType: `observation`
- "Pregled za zimu" → activityType: `observation`
- "Praćenje feromonskih klopki" → activityType: `monitoring`
- "Gnojidba" → activityType: `fertilizing`

The orchard meaning stays in `title`.
The V1 model compatibility stays in `activityType`.

---

## Spray Safety Notes

Agronomic interpretation only. Not schema fields.

- White oil and copper must NEVER be applied on the same day
- Minimum 7–10 days gap between white oil and copper application
- All spray activities assume: dry weather, no wind, temperature above 5°C
- Insecticide must not be applied during bloom or active bee flight
- Score + Mospilan may be mixed and applied in one pass, post-bloom only
- Apricot copper must be applied BEFORE bloom (January–February window)
- Nectarine and Peach copper for leaf curl must be applied while buds are still closed
- Citrus: standard EU fruit tree spray rules do not apply

---

## Completeness Principle

Every supported plant type must have sufficient template coverage to generate a useful annual orchard plan.

Expected coverage for standard fruit trees:
- winter trunk care
- dormant spray (oil)
- dormant spray (copper)
- pruning
- wound protection after pruning
- spring monitoring
- post-bloom protection
- fruit thinning guidance
- bird protection guidance
- irrigation period
- summer pruning
- harvest
- season shutdown
- autumn inspection

Mediterranean plants and citrus follow different coverage logic — see their sections.

---

---

# ══════════════════════════════════════════════════════
# SHARED BLOCK
# Common baseline for all standard fruit trees:
# apple, pear, plum, cherry, peach, nectarine, apricot
#
# Mediterranean plants and citrus are handled separately.
# Do NOT apply this block to olive, fig, or citrus.
# ══════════════════════════════════════════════════════

## SHARED — STANDARD FRUIT TREES

### 1. Krečenje debla

- activityType: "observation"
  title: "Krečenje debla"
  appliesToAll: true
  monthStart: 1
  dayStart: 15
  monthEnd: 2
  dayEnd: 10
  notes: >
    Zimsko krečenje debla radi zaštite kore od pucanja zbog izmjene mraza i sunca.
    Posebno važno za koštičave vrste i stabla s tankom korom.
    Vapnena boja ili komercijalni bijeli premaz za voćke.
    Primijeniti po suhom vremenu, temperatura iznad 0°C.
    Za mlada stabla: preporučeno, ne preskakati.

---

### 2. Bijelo mineralno ulje

- activityType: "spraying"
  title: "Bijelo mineralno ulje"
  appliesToAll: true
  monthStart: 2
  dayStart: 1
  monthEnd: 2
  dayEnd: 15
  notes: >
    Dormant oil tretman protiv prezimljujućih jaja i oblika štetnika:
    grinje, lisne uši, štitaste uši.
    Prskati po suhom, bez vjetra, iznad 5°C. Dobro natopiti grane i koru.
    VAŽNO: minimalni razmak od bakra je 7–10 dana — ne miješati, ne primjenjivati previše blizu.
    Za mlada stabla: primijeniti.

---

### 3. Bakar – zimska zaštita

- activityType: "spraying"
  title: "Bakar – zimska zaštita"
  appliesToAll: true
  monthStart: 2
  dayStart: 15
  monthEnd: 2
  dayEnd: 28
  notes: >
    Zimski bakreni fungicid: zaštita od raka kore, pjegavosti, monililje i srodnih bolesti.
    Primijeniti uz razmak od bijelog ulja najmanje 7–10 dana.
    Preparat: Cuprablau Z 35 WG ili ekvivalent.
    Prskati po suhom vremenu.
    Za mlada stabla: primijeniti.

---

### 4. Zimska rezidba

- activityType: "pruning"
  title: "Zimska rezidba"
  appliesToAll: true
  monthStart: 3
  dayStart: 1
  monthEnd: 3
  dayEnd: 15
  notes: >
    Ukloniti suhe, bolesne, križajuće i preguste grane.
    Cilj: prozračna krošnja, kontrolirana visina stabla.
    Rezati po suhom vremenu. Alat dezinficirati između stabala.
    Veće rane zaštititi premazom (Lac Balsam) za rezove iznad 2 cm.
    Za mlada stabla god. 1–2: fokus na formiranje uzgojnog oblika —
    vaza (koštičave) ili vreteno/spindle (jabuka, kruška). Ne rezati rodno drvo.

---

### 5. Bakar na rane nakon rezidbe

- activityType: "spraying"
  title: "Bakar na rane nakon rezidbe"
  appliesToAll: true
  monthStart: 3
  dayStart: 1
  monthEnd: 3
  dayEnd: 20
  notes: >
    Primijeniti unutar 1–2 dana nakon rezidbe.
    Zaštita svježih reznih rana od prodora gljivica i bakterija.
    Cuprablau Z 35 WG ili ekvivalent.
    Razmak od bijelog ulja: min. 7–10 dana.

---

### 6. Sezonsko navodnjavanje

- activityType: "watering"
  title: "Sezonsko navodnjavanje"
  appliesToAll: true
  monthStart: 6
  dayStart: 20
  monthEnd: 8
  dayEnd: 31
  notes: >
    Sezonski period navodnjavanja za sušni dio godine.
    Pokrenuti kada prestane redovita kiša, obično kraj lipnja.
    Odrasla stabla: okvirno 20–40 L po stablu tjedno, prilagoditi oborinama i tlu.
    Mlada stabla: prioritet — pratiti vlagu tla redovito, 30–50 L tjedno.
    Navodnjavanje ujutro ili navečer. Drip sustav preporučen.

---

### 7. Ljetna rezidba

- activityType: "pruning"
  title: "Ljetna rezidba"
  appliesToAll: true
  monthStart: 7
  dayStart: 1
  monthEnd: 7
  dayEnd: 15
  notes: >
    Uklanjanje vodopija i pregustih ljetnih izbojaka.
    Cilj: bolja osvijetljenost krošnje, kontrola bujnosti.
    Rezati kada novi izdanci dosegnu 10–20 cm.
    Ne rezati po ekstremnim vrućinama iznad 30°C.

---

### 8. Gašenje navodnjavanja

- activityType: "observation"
  title: "Gašenje navodnjavanja"
  appliesToAll: true
  monthStart: 9
  dayStart: 1
  monthEnd: 9
  dayEnd: 15
  notes: >
    Završetak sezonskog navodnjavanja pred kasne berbe.
    Jabuka i kasne sorte: ugasiti 2–3 tjedna prije berbe za bolji okus i čvrstoću ploda.
    Ako je cijeli vrt na jednom ventilu: gasiti oko 1. rujna —
    trešnja, nektarina, breskva i šljiva su tada već pobrane.
    Tumačiti kao orchard management podsjetnik, ne kao obaveznu radnju u svakom scenariju.

---

### 9. Pregled za zimu

- activityType: "observation"
  title: "Pregled za zimu"
  appliesToAll: true
  monthStart: 10
  dayStart: 1
  monthEnd: 10
  dayEnd: 31
  notes: >
    Jesenski pregled stabala pred zimu:
    stanje debla i rana, vezice (ne smiju rezati koru), zaštita od glodavaca,
    potpore mladih stabala, mumificirani plodovi na stablu i tlu.
    Ukloniti sve izvore zaraze.
    Posebno važno za mlada stabla i stabla koja su imala stres u sezoni.

---

---

# ══════════════════════════════════════════════════════
# PER-SPECIES TEMPLATES
# Species-specific orchard work additions.
# Shared block above is the common baseline for all standard fruit trees.
#
# Per-species sections add only what is specific:
# — species-specific monitoring
# — species-specific spray timing or context
# — thinning guidance
# — bird protection guidance
# — harvest interpretation
# — special disease or frost notes
#
# Do NOT duplicate shared activities unless timing or meaning differs.
# Young-tree and condition logic belongs in notes, not in custom fields.
# ══════════════════════════════════════════════════════

---

## 🍎 APPLE (Malus domestica)

### Agronomic context
Cvatnja (Zagreb baseline): travanj.
Berba: ovisno o sorti ili fallback grupi — vidi PLANT_CATALOG_V1.md.
Harvest window examples: Gala (aug–sep), Fuji / Idared (sep–oct).

---

### 1. Post-bloom zaštita (krastavost, pepelnica)

- activityType: "spraying"
  title: "Post-bloom zaštita – krastavost i pepelnica"
  monthStart: 4
  dayStart: 10
  monthEnd: 5
  dayEnd: 10
  notes: >
    Ključna zaštita protiv krastavosti jabuke (Venturia inaequalis) i pepelnice.
    Primijeniti nakon cvatnje kada se formiraju mladi listovi i plodovi.
    NE tretirati za cvatnje — pčele moraju biti zaštićene.
    Score 250 EC + Mospilan 20 SP mogu se miješati u jednom prolazu.
    Tretmane ponavljati prema infekcijskom pritisku i kiši.
    Za mlada stabla god. 1–2 bez ploda: manje kritično, ali nije na odmet.

---

### 2. Praćenje savijača ploda

- activityType: "monitoring"
  title: "Praćenje jabučnog savijača (feromonske klopke)"
  monthStart: 4
  dayStart: 25
  monthEnd: 8
  dayEnd: 15
  notes: >
    Jabučni savijač (Cydia pomonella) — crvi u plodovima jabuke.
    Postaviti feromonsku klopku na 1.5–2 m visine, u sjenu krošnje.
    Tjedno pregledavati ulov.
    Tretman insekticidom (Mospilan) samo ako ulov prijeđe prag štetnosti —
    nagli porast = tretman unutar 7–10 dana.
    Za mlada stabla god. 1–2 bez ploda: nije prioritet.

---

### 3. Prorjeđivanje plodova

- activityType: "observation"
  title: "Prorjeđivanje plodova"
  monthStart: 5
  dayStart: 15
  monthEnd: 6
  dayEnd: 15
  notes: >
    Uklanjanje viška plodova radi bolje veličine i kvalitete uroda.
    Ostaviti 1 plod na 10–15 cm grane. Ukloniti blizance i oštećene plodove.
    Jabuka je sklona alternativnoj rodnosti — redovito prorjeđivanje smanjuje taj problem.
    Za mlada stabla god. 1–2 bez značajnog uroda: nije potrebno.

---

### 4. Mreža protiv ptica

- activityType: "observation"
  title: "Mreža protiv ptica – jabuka"
  monthStart: 8
  dayStart: 15
  monthEnd: 10
  dayEnd: 1
  notes: >
    Jabuka Fuji i kasne sorte rijetko su intenzivno napadnute pticama dok su plodovi čvrsti.
    Postaviti mrežu samo ako postoji vidljiv pritisak ptica.
    Za rane i srednje sorte: pratiti i reagirati prema situaciji.
    Za mlada stabla god. 1–2 bez uroda: nije potrebno.

---

### 5. Berba

- activityType: "harvest"
  title: "Berba jabuke"
  monthStart: 8
  dayStart: 20
  monthEnd: 10
  dayEnd: 20
  notes: >
    Termin berbe ovisi o sorti ili fallback grupi — vidi PLANT_CATALOG_V1.md za harvestWindow.
    Primjeri: Gala (aug 20 – sep 10), Fuji / Idared (sep 25 – oct 15).
    Brati zakretanjem ploda — ne čupati, ne vući.
    Test zrelosti: plod lako otpada pri laganom zakretanju, sjemenke smeđe.
    Fuji: čekati punu zrelost — prerano ubrana Fuji jabuka nema okusa.
    Brati po suhom, izbjegavati jutarnju rosu.
    Ne ostavljati oštećene plodove — uzrokuju moniliju.

---

## 🍐 PEAR (Pyrus communis)

### Agronomic context
Cvatnja (Zagreb baseline): kraj ožujka – poč. travnja, nešto ranije od jabuke.
Berba: ovisno o sorti ili fallback grupi — vidi PLANT_CATALOG_V1.md.
Harvest window examples: Williams / Santa Maria (aug), Conference / Bosc (aug–sep), Abate Fetel (sep–oct).
Posebna napomena: vatrostuh (Erwinia amylovora) je bakterijska bolest bez kemijskog lijeka.
Preventiva bakrom oko cvatnje je ključna.

---

### 1. Bakar – zaštita od vatrostuh

- activityType: "spraying"
  title: "Bakar – preventivna zaštita od vatrostuh"
  monthStart: 3
  dayStart: 15
  monthEnd: 4
  dayEnd: 10
  notes: >
    Kruška je jedina standardna voćka s ozbiljnim rizikom vatrostuh (Erwinia amylovora).
    Primijeniti bakar preventivno oko cvatnje.
    Cvatnja kruške je ranije od jabuke — pratiti stanje pupova i prilagoditi termin.
    NE prskati direktno na otvorene cvjetove — oštećuje cvjetove i pčele.
    Cuprablau Z 35 WG ili ekvivalent.
    Razmak od bijelog ulja: min. 7–10 dana.
    Ako se pojave simptomi vatrostuh (tamnosmeđe uvenule grane): odmah rezati ispod vidljive zaraze,
    dezinficirati alat između rezova, spaliti rezani material.

---

### 2. Praćenje štetnika

- activityType: "monitoring"
  title: "Praćenje kruškine buhe i savijača"
  monthStart: 4
  dayStart: 20
  monthEnd: 8
  dayEnd: 15
  notes: >
    Kruškina buha (Cacopsylla pyri): štitaste uši na naličju listova, medna rosa, čađavica.
    Vizualni pregled mladih izbojaka i listova tjedno.
    Tretman (bijelo ulje ili Mospilan) samo pri vidljivom problemu.
    Kruškini savijač (Grapholita molesta): feromonska klopka ako je dostupna.
    Za mlada stabla: fokus na lisne uši i buhu.

---

### 3. Post-bloom zaštita

- activityType: "spraying"
  title: "Post-bloom zaštita – krastavost kruške"
  monthStart: 4
  dayStart: 15
  monthEnd: 5
  dayEnd: 15
  notes: >
    Zaštita od krastavosti kruške (Venturia pirina) i monililje.
    Primijeniti nakon cvatnje. Score 250 EC + Mospilan 20 SP.
    NE tretirati za cvatnje.
    Za mlada stabla god. 1–2: manje kritično, ali korisno u vlažnim sezonama.

---

### 4. Prorjeđivanje plodova

- activityType: "observation"
  title: "Prorjeđivanje plodova – kruška"
  monthStart: 5
  dayStart: 20
  monthEnd: 6
  dayEnd: 15
  notes: >
    Kruška ne zahtijeva agresivno prorjeđivanje kao jabuka.
    Ostaviti 1–2 ploda po grozdu, razmak oko 10 cm.
    Ukloniti oštećene i deformirane plodove.
    Za mlada stabla god. 1–2: nije potrebno.

---

### 5. Mreža protiv ptica

- activityType: "observation"
  title: "Mreža protiv ptica – kruška"
  monthStart: 7
  dayStart: 20
  monthEnd: 9
  dayEnd: 15
  notes: >
    Kruška može biti napadnuta pticama pred samu berbu.
    Pratiti vizualno — mreža po potrebi kada plodovi počnu sazrijevati.
    Za mlada stabla bez uroda: nije potrebno.

---

### 6. Berba

- activityType: "harvest"
  title: "Berba kruške"
  monthStart: 8
  dayStart: 1
  monthEnd: 10
  dayEnd: 5
  notes: >
    Termin berbe ovisi o sorti ili fallback grupi — vidi PLANT_CATALOG_V1.md za harvestWindow.
    KRITIČNO: brati PRIJE potpune konzumne zrelosti — kruška dozrijeva nakon berbe, ne na stablu.
    Test na stablu: plod se lako odvaja zakretanjem, ali još čvrst.
    Dozrijevanje nakon berbe: sobna temperatura 3–7 dana.
    NE čekati da omekša na stablu — bit će brašnasta i neukusna.
    Brati pažljivo — lako dobiva modrice.

---

## 🍒 CHERRY (Prunus avium)

### Agronomic context
Cvatnja (Zagreb baseline): kraj ožujka – poč. travnja.
Berba: ovisno o sorti ili fallback grupi — vidi PLANT_CATALOG_V1.md.
Harvest window examples: Burlat (jun 1–15), Kordia (jun 20 – jul 5), Regina / Summit (jul 5–25).
Trešnjina muha (Rhagoletis cerasi): jedini ozbiljan insektni štetnik trešnje u EU klimi.
Trešnja puca od kiše pred berbu — mreža štiti i od toga.
Gisela 5 podloga: slabobujnija, raniji prinos, lakša zaštita mrežom.

---

### 1. Praćenje trešnjine muhe

- activityType: "monitoring"
  title: "Praćenje trešnjine muhe – žute ljepljive ploče"
  monthStart: 4
  dayStart: 25
  monthEnd: 6
  dayEnd: 20
  notes: >
    Trešnjina muha (Rhagoletis cerasi) — najvažniji štetnik trešnje u EU.
    Postaviti 2–3 žute ljepljive ploče po stablu na visinu 1.5–2 m, u sjenu krošnje.
    Tjedno pregledavati:
    — 0–2 muhe/tjedan → nema tretmana
    — nagli porast → insekticid (Mospilan) unutar 7–10 dana od prvog masovnog leta.
    Mospilan karenca: min. 14 dana do berbe — ne tretirati ako je berba za 10 dana ili manje.
    Za mlada stabla god. 1–2 bez ploda: nije prioritet.

---

### 2. Prorjeđivanje trešnje

- activityType: "observation"
  title: "Prorjeđivanje trešnje (po potrebi)"
  monthStart: 5
  dayStart: 15
  monthEnd: 6
  dayEnd: 1
  notes: >
    Trešnja nije obavezna za prorjeđivanje — stablo samo regulira broj plodova.
    Gisela 5 ne prerodi ekscesivno.
    Po želji: ukloniti blizance (dva srasla ploda) i sitne zaostale plodove.
    Ostaviti ~5–8 cm razmaka između plodova u grozdu.
    Znakovi previše: grane vise jako pod težinom, svi plodovi sitni i blijedi.
    Ovo smanjuje broj plodova koji padaju na tlo i štedi leđa pri čišćenju.
    Za mlada stabla god. 1–2: nije potrebno.

---

### 3. Mreža protiv ptica

- activityType: "observation"
  title: "Mreža protiv ptica – trešnja"
  monthStart: 6
  dayStart: 1
  monthEnd: 6
  dayEnd: 30
  notes: >
    Postaviti 2–3 tjedna prije berbe.
    Za Kordiju (berba 20.6.–5.7.): postaviti oko 1.–15.6.
    Za ranije sorte (Burlat, berba od 1.6.): postaviti već kraj svibnja.
    Veličina: min. 4×4 m, preporučeno 5×5 m.
    Tip: s bočnim zipperom za pristup pri berbi bez skidanja mreže.
    Mreža štiti i od kiše → smanjuje pucanje plodova pred berbu.
    Skinuti odmah nakon berbe.
    Za mlada stabla god. 1–2 bez uroda: nije potrebno.

---

### 4. Berba

- activityType: "harvest"
  title: "Berba trešnje"
  monthStart: 6
  dayStart: 1
  monthEnd: 7
  dayEnd: 25
  notes: >
    Termin ovisi o sorti ili fallback grupi — vidi PLANT_CATALOG_V1.md za harvestWindow.
    Brati sa peteljkom — plod bez peteljke traje znatno kraće (max 1–2 dana).
    Brati po suhom vremenu, u hladnijem dijelu dana (jutro, večer).
    Test zrelosti: puna tamnocrvena boja, čvrstoća uz blag pritisak popušta.
    Ne brati mokre plodove — pucaju i brzo trunu.
    Čuvanje: 3–5 dana na 0–4°C.
    Ne ostavljati prezrele plodove na stablu — privlače ose, uzrokuju gnilobu.

---

## 🍑 NECTARINE (Prunus persica var. nucipersica)

### Agronomic context
Cvatnja (Zagreb baseline): kraj ožujka – poč. travnja.
Berba: ovisno o sorti ili fallback grupi — vidi PLANT_CATALOG_V1.md.
Harvest window examples: Caldesi 2000 / Big Top (jul), Fantasia / Stark Redgold (aug), Venus (aug–sep).
POSEBNA NAPOMENA: Nektarina je iznimno osjetljiva na kovrčavost lista (Taphrina deformans).
Jednom zaražena grana nema lijeka — samo prevencija bakrom dok su pupovi zatvoreni.
Propušteno prskanje u veljači/ožujku = sigurna zaraza u vlažnom proljeću.

---

### 1. Bakar – kovrčavost lista (KRITIČNO)

- activityType: "spraying"
  title: "Bakar – kovrčavost lista (KRITIČNO – nektarina)"
  monthStart: 2
  dayStart: 10
  monthEnd: 3
  dayEnd: 5
  notes: >
    KRITIČNO ZA NEKTARINU — ne smije se propustiti.
    Primijeniti dok su pupovi nektarine još zatvoreni ili tek počinju bubriti.
    Taphrina deformans: nema lijeka nakon zaraze — jedino preventiva.
    Cuprablau Z 35 WG ili ekvivalent.
    Ako je proljeće vlažno: 2 tretmana u razmaku 7–10 dana.
    Ovo prskanje je DODATAK zimskom bakru iz shared bloka — primijeniti specifično za nektarinu.
    Razmak od bijelog ulja: min. 7–10 dana.
    Za mlada stabla: primijeniti — posebno važno u prvim godinama.

---

### 2. Praćenje štetnika

- activityType: "monitoring"
  title: "Praćenje lisnih ušiju i breskvinog savijača"
  monthStart: 4
  dayStart: 15
  monthEnd: 7
  dayEnd: 31
  notes: >
    Tjedno pregledavati naličje listova i mlade izbojke.
    Lisne uši na nektarini mogu biti problem — Mospilan pri vidljivoj koloniji.
    Breskvin savijač (Grapholita molesta): feromonska klopka ako je dostupna.
    Tretman samo pri vidljivom problemu ili prijeđenom pragu.
    Za mlada stabla: fokus na lisne uši.

---

### 3. Post-bloom zaštita

- activityType: "spraying"
  title: "Post-bloom zaštita – monilija i štetnici"
  monthStart: 5
  dayStart: 5
  monthEnd: 5
  dayEnd: 25
  notes: >
    Primijeniti nakon završetka cvatnje.
    Score 250 EC + Mospilan 20 SP — u jednom prolazu.
    Zaštita od monililje (Monilinia laxa) i breskvinog savijača.
    Mospilan NIKAD za cvatnje — toksičan za pčele.
    Za mlada stabla god. 1–2: nije obavezno, ali preporučeno u vlažnim sezonama.

---

### 4. Prorjeđivanje plodova

- activityType: "observation"
  title: "Prorjeđivanje plodova – nektarina"
  monthStart: 5
  dayStart: 20
  monthEnd: 6
  dayEnd: 10
  notes: >
    PREPORUČENO za nektarinu — jako prorodi bez prorjeđivanja.
    Ostaviti 1 plod na 10–15 cm grane.
    Ukloniti blizance, sitne i oštećene plodove.
    Bez prorjeđivanja: sitni plodovi, lom grana od težine, iscrpljenost stabla.
    Za mlada stabla god. 1–2 bez uroda: nije potrebno.

---

### 5. Mreža protiv ptica

- activityType: "observation"
  title: "Mreža protiv ptica – nektarina"
  monthStart: 7
  dayStart: 20
  monthEnd: 8
  dayEnd: 5
  notes: >
    Postaviti kada plodovi počnu mijenjati boju (žuto-narančasta osnova vidljiva).
    Kos i drozd napadaju nektarinu agresivno pred berbu.
    Veličina mreže: min. 4×4 m. Tip s bočnim zipperom preporučen.
    Skinuti odmah nakon berbe.
    Za mlada stabla god. 1–2 bez uroda: nije potrebno.

---

### 6. Berba

- activityType: "harvest"
  title: "Berba nektarine"
  monthStart: 7
  dayStart: 1
  monthEnd: 9
  dayEnd: 5
  notes: >
    Termin ovisi o sorti ili fallback grupi — vidi PLANT_CATALOG_V1.md za harvestWindow.
    VIŠE PROLAZA — plodovi ne dozrijevaju istovremeno (3–4 prolaza u ~3 tjedna).
    Test zrelosti: blago popuštanje pri pritisku oko peteljke, osnovna boja žuto-narančasta.
    NE brati prerano — nektarina ne dozrijeva nakon berbe kao kruška.
    Brati pažljivo — tanka kožica lako se oštećuje.
    Čuvati na 0–4°C do 2 tjedna.

---

## 🍑 PEACH (Prunus persica)

### Agronomic context
Cvatnja (Zagreb baseline): kraj ožujka – poč. travnja, nešto ranije od nektarine.
Berba: ovisno o sorti ili fallback grupi — vidi PLANT_CATALOG_V1.md.
Harvest window examples: Springcrest / Redhaven (jun–jul), Royal Glory / Fayette (jul–aug), O'Henry (aug).
Kovrčavost lista jednako kritična kao kod nektarine. Tretman identičan.

---

### 1. Bakar – kovrčavost lista (KRITIČNO)

- activityType: "spraying"
  title: "Bakar – kovrčavost lista (KRITIČNO – breskva)"
  monthStart: 2
  dayStart: 10
  monthEnd: 3
  dayEnd: 5
  notes: >
    KRITIČNO ZA BRESKVU — identično kao kod nektarine, ne smije se propustiti.
    Primijeniti dok su pupovi zatvoreni ili tek počinju bubriti.
    Taphrina deformans — jednom zaražena grana, nema lijeka.
    Cuprablau Z 35 WG ili ekvivalent.
    Vlažno proljeće: 2 tretmana u razmaku 7–10 dana.
    Ovo prskanje je DODATAK zimskom bakru iz shared bloka.
    Razmak od bijelog ulja: min. 7–10 dana.

---

### 2. Praćenje štetnika

- activityType: "monitoring"
  title: "Praćenje lisnih ušiju i breskvinog savijača"
  monthStart: 4
  dayStart: 15
  monthEnd: 7
  dayEnd: 31
  notes: >
    Tjedno pregledavati naličje listova i vršne izbojke.
    Lisne uši: Mospilan pri vidljivoj koloniji.
    Breskvin savijač (Grapholita molesta): feromonska klopka ako je dostupna.
    Tretman samo pri vidljivom problemu.

---

### 3. Post-bloom zaštita

- activityType: "spraying"
  title: "Post-bloom zaštita – monilija i štetnici"
  monthStart: 5
  dayStart: 5
  monthEnd: 5
  dayEnd: 25
  notes: >
    Nakon cvatnje. Score 250 EC + Mospilan 20 SP — u jednom prolazu.
    Zaštita od monililje (Monilinia laxa) i breskvinog savijača.
    Mospilan NIKAD za cvatnje.
    Za mlada stabla god. 1–2: nije obavezno, korisno u vlažnim sezonama.

---

### 4. Prorjeđivanje plodova

- activityType: "observation"
  title: "Prorjeđivanje plodova – breskva"
  monthStart: 5
  dayStart: 20
  monthEnd: 6
  dayEnd: 10
  notes: >
    PREPORUČENO — breskva jako prorodi bez prorjeđivanja.
    Ostaviti 1 plod na 10–15 cm grane.
    Ukloniti blizance i oštećene plodove.
    Bez prorjeđivanja: sitni plodovi, lom grana, alternativna rodnost.
    Za mlada stabla god. 1–2 bez uroda: nije potrebno.

---

### 5. Mreža protiv ptica

- activityType: "observation"
  title: "Mreža protiv ptica – breskva"
  monthStart: 7
  dayStart: 10
  monthEnd: 7
  dayEnd: 25
  notes: >
    Postaviti kada plodovi počnu mijenjati boju (ružičasto-crvena osnova).
    Kos i drozd napadaju breskvu pred berbu.
    Veličina: min. 4×4 m. Skinuti odmah nakon berbe.
    Za mlada stabla god. 1–2 bez uroda: nije potrebno.

---

### 6. Berba

- activityType: "harvest"
  title: "Berba breskve"
  monthStart: 6
  dayStart: 25
  monthEnd: 8
  dayEnd: 31
  notes: >
    Termin ovisi o sorti ili fallback grupi — vidi PLANT_CATALOG_V1.md za harvestWindow.
    Više prolaza — plodovi ne dozrijevaju istovremeno.
    Test zrelosti: blago popuštanje pri pritisku, osnovna boja žuto-narančasta.
    Brati pažljivo — dlakava kožica nježnija nego što izgleda.
    Na sobnoj temperaturi dozrijeva 2–3 dana nakon berbe.
    Ne ostavljati prezrele plodove — privlače ose, uzrokuju moniliju.

---

## 🟠 APRICOT (Prunus armeniaca)

### ⚠️ Poseban slučaj — najranija cvatnja, najveći rizik od mraza

Marelica cvate NAJRANIJE — veljača do ožujak.
Mraz ispod -1°C za cvatnje = propao rod. Nije bolest ni štetnik.
Lokacija sadnje je kritična: izbjegavati udoline i sjeverne strane.

### Agronomic context
Cvatnja (Zagreb baseline): VELJAČA – OŽUJAK (ovisno o sorti i godini).
Berba: ovisno o sorti ili fallback grupi — vidi PLANT_CATALOG_V1.md.
Harvest window examples: Novosadska rodna (jun 5–25), Goldrich / Kioto / Hargrand (jun–jul), Bergeron (jul 5–25).

---

### 1. Bakar – PRIJE cvatnje (KRITIČNO)

- activityType: "spraying"
  title: "Bakar – zaštita PRIJE cvatnje (KRITIČNO – marelica)"
  monthStart: 1
  dayStart: 20
  monthEnd: 2
  dayEnd: 15
  notes: >
    KRITIČNO: marelica cvate u veljači/ožujku — bakar mora biti primijenjen PRIJE.
    Prskati dok su pupovi još zatvoreni ili tek počinju bubriti.
    Zaštita od: šarke (Plum pox virus, vektori su lisne uši), monililje, pjegavosti kore.
    Cuprablau Z 35 WG ili ekvivalent.
    Ako se propusti ovaj termin, ne može se naknadno kompenzirati.
    Razmak od bijelog ulja: min. 7–10 dana.
    Ovo je DODATAK zimskom bakru iz shared bloka — primijeniti ranije, prilagođeno marelici.

---

### 2. Praćenje mraza za cvatnje

- activityType: "monitoring"
  title: "Praćenje mraza za cvatnje marelice"
  monthStart: 2
  dayStart: 1
  monthEnd: 3
  dayEnd: 31
  notes: >
    Marelica cvate u veljači/ožujku — mraz je najveći neprijatelj.
    Pratiti vremensku prognozu svakodnevno za cvatnje.
    Kritična temperatura: ispod -1°C za otvorene cvjetove → oštećenje.
    Moguće mjere zaštite za manja stabla: agrotekstil (navlaka), dimni lonci.
    Ovo je informacijska radnja — korisnik mora reagirati prema lokalnim uvjetima.
    Loš rod marelice je najčešće uzrokovan mrazom, ne bolešću ni štetnicima.

---

### 3. Praćenje lisnih ušiju i šarke

- activityType: "monitoring"
  title: "Praćenje lisnih ušiju i šarke (marelica)"
  monthStart: 4
  dayStart: 1
  monthEnd: 5
  dayEnd: 15
  notes: >
    Šarka (Plum pox virus) se prenosi lisnim ušima — pratiti kolonije na naličju listova.
    Vizualni pregled: žuti prstenovi/mrlje na listovima = mogući simptom šarke.
    Šarka nema lijeka — zaražena stabla moraju se ukloniti.
    Mospilan pri vidljivoj koloniji lisnih uši (preventivna kontrola vektora šarke).
    Za mlada stabla: posebno pratiti.

---

### 4. Post-bloom zaštita

- activityType: "spraying"
  title: "Post-bloom zaštita – monilija (marelica)"
  monthStart: 4
  dayStart: 15
  monthEnd: 5
  dayEnd: 15
  notes: >
    Nakon cvatnje (marelica cvate ranije — prilagoditi termin prema stanju stabla).
    Score 250 EC za zaštitu od monililje (Monilinia laxa).
    Mospilan dodati samo pri vidljivim štetnicima.
    NIKAD prskati otvorene cvjetove.
    Za mlada stabla god. 1–2: nije obavezno.

---

### 5. Prorjeđivanje plodova

- activityType: "observation"
  title: "Prorjeđivanje plodova – marelica"
  monthStart: 5
  dayStart: 1
  monthEnd: 5
  dayEnd: 25
  notes: >
    Marelica jako prorodi (ako nije bilo mraza koji je uništio cvjetove).
    Ostaviti 1 plod na 8–10 cm grane.
    Ukloniti blizance i oštećene plodove.
    Bez prorjeđivanja: sitni plodovi, lom grana, iscrpljenost stabla.
    Za mlada stabla god. 1–2 bez uroda: nije potrebno.

---

### 6. Berba

- activityType: "harvest"
  title: "Berba marelice"
  monthStart: 6
  dayStart: 5
  monthEnd: 7
  dayEnd: 25
  notes: >
    Termin ovisi o sorti ili fallback grupi — vidi PLANT_CATALOG_V1.md za harvestWindow.
    Marelica dozrijeva brzo i neravnomjerno — 2–3 prolaza kroz ~2 tjedna.
    Test zrelosti: narančasta boja s crvenim rumenilom, blago popuštanje pri pritisku.
    Brati pažljivo — lako se oštećuje i brzo trune.
    Rok: 2–3 dana na sobnoj temperaturi, do 1 tjedan na 0–4°C.
    Ne ostavljati prezrele plodove — privlače ose, uzrokuju moniliju.
    Ako je rod manji od očekivanog → uzrok je gotovo uvijek mraz za cvatnje.

---

## 🫐 PLUM (Prunus domestica)

### Agronomic context
Cvatnja (Zagreb baseline): kraj ožujka – poč. travnja.
Berba: ovisno o sorti ili fallback grupi — vidi PLANT_CATALOG_V1.md.
Harvest window examples: Čačanska rana (jul–aug), Čačanska najbolja (aug), Stanley / Président (aug–sep).

---

### 1. Praćenje šljivinog savijača

- activityType: "monitoring"
  title: "Praćenje šljivinog savijača (feromonske klopke)"
  monthStart: 4
  dayStart: 25
  monthEnd: 7
  dayEnd: 15
  notes: >
    Šljivin savijač (Cydia funebrana) — crvi u plodovima šljive.
    Postaviti feromonsku klopku na 1.5–2 m visine.
    Tjedno pregledavati ulov.
    Nagli porast ulova = insekticid unutar 7–10 dana.
    Praćenje traje i za 2. generaciju (sredina lipnja – sredina srpnja).
    Za mlada stabla god. 1–2 bez ploda: nije prioritet.

---

### 2. Post-bloom zaštita

- activityType: "spraying"
  title: "Post-bloom zaštita – monilija i šljivin savijač"
  monthStart: 5
  dayStart: 5
  monthEnd: 5
  dayEnd: 25
  notes: >
    Nakon cvatnje. Score 250 EC + Mospilan 20 SP — jedan prolaz.
    Zaštita od monililje, pjegavosti lista i šljivinog savijača.
    Mospilan NIKAD za cvatnje.
    Za mlada stabla god. 1–2: nije obavezno.

---

### 3. Insekticid – 2. generacija savijača

- activityType: "spraying"
  title: "Insekticid – 2. generacija šljivinog savijača"
  monthStart: 6
  dayStart: 15
  monthEnd: 7
  dayEnd: 10
  notes: >
    Mospilan 20 SP — SAMO ako klopke pokažu nagli porast ulova.
    Nije preventivno prskanje.
    Primijeniti ujutro ili navečer.
    Za mlada stabla god. 1–2 bez ploda: nije potrebno.

---

### 4. Prorjeđivanje plodova

- activityType: "observation"
  title: "Prorjeđivanje plodova – šljiva"
  monthStart: 5
  dayStart: 20
  monthEnd: 6
  dayEnd: 15
  notes: >
    Šljiva je sklona prerodu — prorjeđivanje bitno za kvalitetu.
    Ostaviti 1 plod na 8–10 cm grane.
    Ukloniti blizance i oštećene.
    Posebno važno za kasne sorte (Stanley) jer plodovi trebaju dugo rasti.
    Za mlada stabla god. 1–2 bez uroda: nije potrebno.

---

### 5. Mreža protiv ptica

- activityType: "observation"
  title: "Mreža protiv ptica – šljiva"
  monthStart: 8
  dayStart: 8
  monthEnd: 8
  dayEnd: 22
  notes: >
    Postaviti 1–2 tjedna prije berbe, kada šljiva počne omekšavati.
    Kos i drozd napadaju šljivu agresivno pred berbu.
    Veličina: min. 4×4 m. Tip s bočnim zipperom preporučen.
    Skinuti odmah nakon berbe.
    Za mlada stabla god. 1–2 bez uroda: nije potrebno.

---

### 6. Berba

- activityType: "harvest"
  title: "Berba šljive"
  monthStart: 7
  dayStart: 20
  monthEnd: 9
  dayEnd: 20
  notes: >
    Termin ovisi o sorti ili fallback grupi — vidi PLANT_CATALOG_V1.md za harvestWindow.
    Brati u više navrata — ne dozrijeva sve odjednom.
    Test: plod omekšao, puna boja, lako se odvaja.
    Ne ostavljati prezrele plodove — privlače ose, uzrokuju moniliju.
    Za sušenje i pekmez: ostaviti dulje na stablu za veći udio šećera.

---

---

# ══════════════════════════════════════════════════════
# BLOCK 6 — MEDITERRANEAN & CITRUS (Special Templates)
#
# These plants DO NOT use:
# — standard orchard cycle
# — early / mid / late timing groups
# — shared block from above
#
# Engine MUST branch:
# IF plant.type IN (olive, fig, citrus)
#   → use Block 6 templates only
# ELSE
#   → use standard templates + shared block
# ══════════════════════════════════════════════════════

---

## 🫒 OLIVE (Olea europaea)

### Agronomic context
Zimzelena biljka — nema zimskog mirovanja kao listopadne voćke.
Otporna na sušu, osjetljiva na dugotrajne mrazeve ispod -7°C.
Standardni spray program (bijelo ulje, bakar, Score, Mospilan) NE primjenjuje se.
Shared block NE primjenjuje se.

---

### 1. Zimska rezidba masline

- activityType: "pruning"
  title: "Zimska rezidba masline"
  monthStart: 2
  dayStart: 1
  monthEnd: 3
  dayEnd: 15
  notes: >
    Rezati nakon najhladnijeg dijela zime.
    Ukloniti suhare, vodopije i grane prema unutra krošnje.
    Cilj: otvorena krošnja u obliku vaze, dobra cirkulacija zraka.
    Svake 2–3 godine: jača rezidba za obnovu rodnog drva.
    Mlada stabla god. 1–3: samo formiranje oblika, ne rezati agresivno.
    Veće rane premazati (Lac Balsam) za rezove iznad 3 cm.

---

### 2. Bakar na rane (maslina)

- activityType: "spraying"
  title: "Bakar na rane – maslina"
  monthStart: 2
  dayStart: 1
  monthEnd: 3
  dayEnd: 31
  notes: >
    Primijeniti unutar 1–2 dana nakon rezidbe.
    Zaštita od bakterioze masline (Pseudomonas savastanoi — maslinin rak).
    Cuprablau Z 35 WG ili ekvivalent.

---

### 3. Gnojidba masline

- activityType: "fertilizing"
  title: "Gnojidba masline"
  monthStart: 3
  dayStart: 1
  monthEnd: 4
  dayEnd: 15
  notes: >
    NPK gnojivo s povišenim dušikom za poticanje vegetativnog rasta.
    Primijeniti oko stabla, ne direktno na deblo ili korijen.
    Mlada stabla: polovica preporučene doze prve 2–3 godine.

---

### 4. Vizualni pregled – paunovo oko i maslinin moljac

- activityType: "monitoring"
  title: "Praćenje paunovog oka i maslinovog moljca"
  monthStart: 4
  dayStart: 1
  monthEnd: 5
  dayEnd: 31
  notes: >
    Paunovo oko (Spilocaea oleagina): žute mrlje s tamnim rubom na listu — tretman bakrom po potrebi.
    Maslinin moljac (Prays oleae): napada cvjetove i plodove.
    Vizualni pregled — tretman samo pri vidljivom problemu.
    U kontinentalnoj klimi rijedak problem na otvorenom.

---

### 5. Praćenje maslinove muhe

- activityType: "monitoring"
  title: "Praćenje maslinove muhe"
  monthStart: 6
  dayStart: 1
  monthEnd: 9
  dayEnd: 30
  notes: >
    Maslinova muha (Bactrocera oleae) — najvažniji štetnik masline.
    Postaviti žute ljepljive ploče s atraktantom.
    Tjedno pregledavati.
    Pri jakom naletu: insekticid specifičan za maslinovu muhu (spinosad ili kaolin zemlja).
    Za mlada stabla bez ploda: manje relevantno.

---

### 6. Zaštita od maslinove muhe

- activityType: "spraying"
  title: "Zaštita od maslinove muhe (po potrebi)"
  monthStart: 6
  dayStart: 1
  monthEnd: 9
  dayEnd: 30
  notes: >
    Primijeniti SAMO ako praćenje (monitoring) pokaže visok ulov.
    Spinosad (organsko) ili kaolin zemlja kao fizička barijera.
    Nije preventivno prskanje.
    Za mlada stabla bez ploda: nije potrebno.

---

### 7. Ljetna korekcijska rezidba masline

- activityType: "pruning"
  title: "Ljetna korekcijska rezidba masline"
  monthStart: 6
  dayStart: 1
  monthEnd: 7
  dayEnd: 15
  notes: >
    Opcijsko uklanjanje vodopija i pregustih izbojaka.
    Ne rezati agresivno — smanjuje rod tekuće godine.
    Maslina rodi na jednogodišnjem drvu — ljetna rezidba nije obavezna svake godine.

---

### 8. Navodnjavanje masline

- activityType: "watering"
  title: "Navodnjavanje masline (mlada stabla)"
  monthStart: 6
  dayStart: 1
  monthEnd: 8
  dayEnd: 31
  notes: >
    Maslina je otporna na sušu — odrasla stabla obično ne trebaju navodnjavanje.
    Mlada stabla god. 1–3: 20–30 L tjedno za suhih perioda.
    Prekomjerno navodnjavanje šteti.

---

### 9. Berba maslina

- activityType: "harvest"
  title: "Berba maslina"
  monthStart: 10
  dayStart: 1
  monthEnd: 12
  dayEnd: 31
  notes: >
    Zelene masline za ulje s više polifenola: studeni.
    Crne masline za veći prinos ulja: prosinac–siječanj.
    Za konzumne masline u salamuri: brati zelene, studeni.
    Metode: ručno češljanje, mreža ispod stabla, električni češalj.
    Preraditi u ulje max. 24–48h nakon berbe.

---

### 10. Rezidba masline nakon berbe

- activityType: "pruning"
  title: "Korekcijska rezidba masline nakon berbe"
  monthStart: 12
  dayStart: 1
  monthEnd: 1
  dayEnd: 15
  notes: >
    Laka korekcijska rezidba odmah nakon berbe.
    Ukloniti iscrpljene grane i urediti krošnju za sljedeću sezonu.
    Ne rezati agresivno.

---

### 11. Pregled masline za zimu

- activityType: "observation"
  title: "Pregled masline za zimu"
  monthStart: 10
  dayStart: 15
  monthEnd: 11
  dayEnd: 30
  notes: >
    Pregledati krošnju: suhe grane, znakovi bolesti.
    Za kontinentalnu klimu: provjeriti prognozu mrazeva.
    Mlada stabla: zaštititi deblo agrotekstilom za mrazeve ispod -7°C.
    Ukloniti ostatke plodova s tla.

---

## 🌿 FIG (Ficus carica)

### Agronomic context
Iznimno otporna biljka, malo zahtijeva.
Standardni spray program NE primjenjuje se.
Shared block NE primjenjuje se.
Posebna napomena: smokva podnosi do -10°C kratkoročno, ali mlada stabla su osjetljivija.

---

### 1. Zimska rezidba smokve

- activityType: "pruning"
  title: "Zimska rezidba smokve"
  monthStart: 2
  dayStart: 1
  monthEnd: 3
  dayEnd: 1
  notes: >
    Rezati kasno u zimi (veljača–ožujak) — smokva je osjetljiva na kasne mrazeve.
    Ukloniti suhare i stare iscrpljene grane starije od 3–4 godine.
    Smokva rodi na jednogodišnjem i dvogodišnjem drvu — paziti što se reže.
    Bijeli mliječni sok iz rezova je normalan (pazi na kožu — može iritirati).
    Veće rane premazati.
    Mlada stabla: formiranje oblika — vaza s 3–5 glavnih grana.

---

### 2. Gnojidba smokve

- activityType: "fertilizing"
  title: "Gnojidba smokve"
  monthStart: 3
  dayStart: 1
  monthEnd: 4
  dayEnd: 15
  notes: >
    Umjerena gnojidba — smokva ne treba puno.
    NPK s povišenim kalijem za kvalitetu ploda.
    Prekomjerna gnojidba dušikom: puno lišća, malo plodova.

---

### 3. Pregled smokve – štetnici i bolesti

- activityType: "monitoring"
  title: "Pregled smokve – štetnici i bolesti"
  monthStart: 5
  dayStart: 1
  monthEnd: 6
  dayEnd: 30
  notes: >
    Smokva rijetko ima ozbiljnih štetnika u kontinentalnoj klimi.
    Vizualni pregled listova i nezrelih plodova.
    Grinje i lisne uši: rijetko, samo pri suhim vrućim ljetima.

---

### 4. Ljetno skraćivanje izdanaka

- activityType: "pruning"
  title: "Ljetno skraćivanje izdanaka smokve"
  monthStart: 6
  dayStart: 15
  monthEnd: 7
  dayEnd: 15
  notes: >
    Pinciranje (skraćivanje) jakih izdanaka na 5–6 listova iznad ploda.
    Usmjerava energiju u razvoj plodova.
    Ne rezati previše — smanjuje asimilacijsku površinu.

---

### 5. Navodnjavanje smokve

- activityType: "watering"
  title: "Navodnjavanje smokve (mlada stabla)"
  monthStart: 6
  dayStart: 20
  monthEnd: 8
  dayEnd: 20
  notes: >
    Smokva je otporna na sušu — odrasla stabla obično ne trebaju.
    Mlada stabla god. 1–3: 20–30 L tjedno za suhih perioda.
    Prekomjerno navodnjavanje uzrokuje pucanje plodova.

---

### 6. Berba ranih smokava

- activityType: "harvest"
  title: "Berba ranih (zimskih) smokava"
  monthStart: 6
  dayStart: 15
  monthEnd: 7
  dayEnd: 10
  notes: >
    Rane smokve: plodovi koji su prezimili na prošlogodišnjem drvu.
    Nisu prisutne na svim sortama — ovisi o sorti i klimi.
    Test: meka na dodir, vrh se spušta, kapljica meda vidljiva.
    Brati pažljivo — traju 1–2 dana.

---

### 7. Berba glavnog roda

- activityType: "harvest"
  title: "Berba glavnog roda smokve"
  monthStart: 8
  dayStart: 1
  monthEnd: 10
  dayEnd: 15
  notes: >
    Glavni rod: kolovoz–listopad ovisno o sorti i klimi.
    Brati samo zrele — smokva dozrijeva postupno, više prolaza.
    Test: plod mekan, koža počinje pucati, boja tamni.
    Brati pažljivo, konzumirati odmah ili sušiti.
    Ne ostavljati prezrele plodove — privlače ose i uzrokuju gnilobu.

---

### 8. Zimska zaštita smokve

- activityType: "observation"
  title: "Zimska zaštita smokve – mlada stabla"
  monthStart: 11
  dayStart: 15
  monthEnd: 2
  dayEnd: 15
  notes: >
    Relevantno za mlada stabla god. 1–3 u kontinentalnoj klimi.
    Omotati deblo agrotekstilom ili slamom.
    Smokva podnosi do -10°C kratkoročno, ali mlada stabla osjetljivija.
    Ukloniti zaštitu čim prođe opasnost od mraza u proljeće.
    Odrasla zdrava stabla obično ne trebaju zaštitu.

---

### 9. Pregled smokve za zimu

- activityType: "observation"
  title: "Pregled smokve za zimu"
  monthStart: 10
  dayStart: 15
  monthEnd: 11
  dayEnd: 30
  notes: >
    Ukloniti sve nezrele plodove koji neće sazrjeti — izvor zaraze.
    Pregledati deblo i grane na pukotine.
    Za mlada stabla: pripremiti zaštitu za zimu.

---

---

# ══════════════════════════════════════════════════════
# CITRUS — SPECIAL MODEL
# Citrus uses subtype seasonProfile — NOT standard timing groups.
# Subtype required: lemon | orange | mandarin
# Shared block does NOT apply.
# Engine must use subtype to select the correct template below.
# ══════════════════════════════════════════════════════

## CITRUS model note

Citrus plan templates koriste poseban model (seasonProfile) iz PLANT_CATALOG_V1.md.
Nisu kompatibilni sa standardnim orchard ciklusom.

```
citrus subtypes:
  lemon    → seasonProfile: multi_cycle
  orange   → seasonProfile: winter
  mandarin → seasonProfile: autumn
```

---

### 🍋 LEMON (Citrus limon) — seasonProfile: multi_cycle

Limun cvate i rodi gotovo kontinuirano (3–4 ciklusa godišnje).
Nema jednog berbalnog prozora — plodovi su prisutni cijelu godinu.

---

- activityType: "pruning"
  title: "Korekcijska rezidba limuna"
  monthStart: 2
  dayStart: 1
  monthEnd: 3
  dayEnd: 31
  notes: >
    Ukloniti suhe grane i vodopije.
    Limun ne podnosi agresivnu rezidbu — samo korekcijska.
    Rezati između cvatnji da se ne izgubi rod.

- activityType: "fertilizing"
  title: "Gnojidba limuna"
  monthStart: 3
  dayStart: 1
  monthEnd: 10
  dayEnd: 1
  notes: >
    Limun je pohlepan — gnojiti svaka 4–6 tjedana u vegetaciji.
    Koristiti gnojivo za citrus s mikroelementima (Mg, Fe, Mn).
    Žuto lišće = nedostatak željeza ili dušika.

- activityType: "watering"
  title: "Navodnjavanje limuna"
  monthStart: 4
  dayStart: 1
  monthEnd: 10
  dayEnd: 31
  notes: >
    Redovito navodnjavanje — limun ne podnosi ni sušu ni prekomjernu vlagu.
    Lončani uzgoj: svakodnevna provjera ljeti.
    Koristiti vodu bez vapna ako je moguće.

- activityType: "monitoring"
  title: "Praćenje štetnika – limun"
  monthStart: 4
  dayStart: 1
  monthEnd: 10
  dayEnd: 31
  notes: >
    Štitaste uši i lisne uši česti u zatvorenom/zaštićenom uzgoju.
    Vizualni pregled naličja listova tjedno.
    Tretman (bijelo ulje) pri pojavi — ne preventivno.

- activityType: "spraying"
  title: "Zaštita od štetnika – limun (po potrebi)"
  monthStart: 4
  dayStart: 1
  monthEnd: 10
  dayEnd: 31
  notes: >
    Bijelo mineralno ulje pri pojavi štitastih uši ili lisnih ušiju.
    Paučinac: akaricid pri vidljivim znakovima.
    Samo ako monitoring pokaže problem.

- activityType: "harvest"
  title: "Berba limuna (kontinuirana)"
  monthStart: 1
  dayStart: 1
  monthEnd: 12
  dayEnd: 31
  notes: >
    Limun rodi kontinuirano — brati prema zrelosti.
    Test: puna veličina i žuta boja.
    Brati s peteljkom i listićem za dulje trajanje.

- activityType: "observation"
  title: "Priprema limuna za zimu"
  monthStart: 10
  dayStart: 1
  monthEnd: 11
  dayEnd: 15
  notes: >
    Limun nije otporan na mraz — oštećenje ispod -3°C, grane stradaju ispod -5°C.
    Za kontinentalnu klimu: premjestiti u zaštićeni prostor (5–10°C) prije mrazova.
    Pregledati na štetnika pred zimski smještaj.

---

### 🍊 ORANGE (Citrus sinensis) — seasonProfile: winter

Naranča cvate u proljeće, plodovi dozrijevaju zimi.

---

- activityType: "pruning"
  title: "Korekcijska rezidba naranče"
  monthStart: 2
  dayStart: 15
  monthEnd: 3
  dayEnd: 15
  notes: >
    Korekcijska rezidba — ukloniti suhe i bolesne grane.
    Naranča ne podnosi jaku rezidbu.

- activityType: "fertilizing"
  title: "Gnojidba naranče"
  monthStart: 3
  dayStart: 1
  monthEnd: 5
  dayEnd: 1
  notes: >
    NPK gnojivo za citrus s mikroelementima u proljeće.
    Ponavljati prema potrebi kroz vegetaciju.

- activityType: "watering"
  title: "Navodnjavanje naranče"
  monthStart: 4
  dayStart: 1
  monthEnd: 9
  dayEnd: 30
  notes: >
    Redovito u vegetacijskom periodu.
    Zimi smanjiti — u mirovanju potrebe su manje.

- activityType: "monitoring"
  title: "Praćenje štetnika – naranča"
  monthStart: 4
  dayStart: 1
  monthEnd: 6
  dayEnd: 30
  notes: >
    Štitaste uši i lisne uši — vizualni pregled naličja listova.
    Tretman (bijelo ulje) pri pojavi. Na otvorenom u sjevernoj klimi rijedak problem.

- activityType: "spraying"
  title: "Zaštita od štetnika – naranča (po potrebi)"
  monthStart: 4
  dayStart: 1
  monthEnd: 6
  dayEnd: 30
  notes: >
    Bijelo ulje pri pojavi štitastih uši.
    Samo ako monitoring pokaže problem.

- activityType: "harvest"
  title: "Berba naranče"
  monthStart: 12
  dayStart: 1
  monthEnd: 2
  dayEnd: 28
  notes: >
    Naranča dozrijeva zimi — prosinac do veljača.
    Može ostati na stablu tjednima nakon zrelosti bez kvarenja.
    Za kontinentalnu klimu: uzgoj moguć u loncima, unutra zimi.

- activityType: "observation"
  title: "Priprema naranče za zimu"
  monthStart: 10
  dayStart: 1
  monthEnd: 11
  dayEnd: 15
  notes: >
    Premjestiti u zaštićen prostor (min. 5°C) prije prvih mrazova.
    Pregledati na štetnika.
    Smanjiti navodnjavanje.

---

### 🍊 MANDARIN (Citrus reticulata) — seasonProfile: autumn

Mandarina dozrijeva u jesen. Najhladnootpornija citrus vrsta (do -7°C kratkoročno).

---

- activityType: "pruning"
  title: "Korekcijska rezidba mandarine"
  monthStart: 2
  dayStart: 15
  monthEnd: 3
  dayEnd: 15
  notes: >
    Korekcijska rezidba — ukloniti suhe i prekrižene grane.
    Mandarina ne podnosi agresivnu rezidbu.

- activityType: "fertilizing"
  title: "Gnojidba mandarine"
  monthStart: 3
  dayStart: 1
  monthEnd: 5
  dayEnd: 1
  notes: >
    NPK gnojivo za citrus s mikroelementima u proljeće.

- activityType: "watering"
  title: "Navodnjavanje mandarine"
  monthStart: 4
  dayStart: 1
  monthEnd: 9
  dayEnd: 30
  notes: >
    Redovito u vegetacijskom periodu.
    Zimi smanjiti.

- activityType: "monitoring"
  title: "Praćenje štetnika – mandarina"
  monthStart: 4
  dayStart: 1
  monthEnd: 6
  dayEnd: 30
  notes: >
    Štitaste uši — vizualni pregled naličja listova.
    Tretman pri pojavi. Rijedak problem u kontinentalnoj klimi.

- activityType: "spraying"
  title: "Zaštita od štetnika – mandarina (po potrebi)"
  monthStart: 4
  dayStart: 1
  monthEnd: 6
  dayEnd: 30
  notes: >
    Bijelo ulje pri pojavi štitastih uši.
    Samo ako monitoring pokaže problem.

- activityType: "harvest"
  title: "Berba mandarine"
  monthStart: 9
  dayStart: 15
  monthEnd: 11
  dayEnd: 30
  notes: >
    Mandarina dozrijeva u jesen — rujan do studeni.
    Može ostati na stablu 2–3 tjedna nakon zrelosti.
    Brati s peteljkom za dulje trajanje.

- activityType: "observation"
  title: "Priprema mandarine za zimu"
  monthStart: 11
  dayStart: 1
  monthEnd: 11
  dayEnd: 30
  notes: >
    Najhladnootpornija citrus vrsta — podnosi kratke mrazeve do -7°C.
    Za lončani uzgoj: premjestiti unutra pri prvim mrazovima.
    Pregledati na štetnika pred zimski smještaj.

---

---

# ══════════════════════════════════════════════════════
# FINAL RULES
# ══════════════════════════════════════════════════════

## Template path reference (future generation context)

This section describes how a future plan generation layer may use catalog selection context
to route templates correctly. This is NOT a current V1 runtime rule.

PLANT_CATALOG_V1.md and TARGET_ARCHITECTURE_V1.md both state that plant.type and plant.group
are NOT stored fields in the current V1 data model. Catalog values are UI/input layer only.
This routing logic applies when roadmap opens plan generation scope (Session 13+).

When a future generation layer has catalog selection context available:

```
catalog.group == "pome" or "stone"
  -- standard templates: shared block + per-species block

catalog.group == "mediterranean"
  -- Block 6 Mediterranean templates only (olive or fig)
  -- do NOT apply shared block

catalog.group == "citrus"
  -- Block 6 Citrus templates only
  -- subtype required (lemon | orange | mandarin)
  -- do NOT apply shared block
```

Reference:
- "pome"          -- apple, pear
- "stone"         -- cherry, plum, peach, nectarine, apricot
- "mediterranean" -- olive, fig
- "citrus"        -- lemon, orange, mandarin

## Template composition notes (future generation context)

These notes describe intended composition when a future generation layer is built.
They are NOT current implementation rules and must NOT be read as executable V1 behavior.

1. Shared block is the common baseline for standard fruit trees (pome + stone)
2. Per-species blocks add species-specific activities on top of the shared baseline
3. Young-tree relevance is described in notes per entry -- future filtering layer may
   interpret these notes when roadmap opens that scope (Session 14+); current V1 does not
   suppress or filter plans based on tree age
4. Condition-based activities are described in notes -- future layer may surface them as
   advisory when conditions are met; current V1 does not enforce conditions
5. Mediterranean and citrus follow separate template paths -- Block 6 only

## Spray rules (agronomic notes — for future generation and display context)

- White oil and copper: NEVER on same day — min. 7–10 day gap
- Mospilan: NEVER during bloom or active bee flight
- Score + Mospilan: can be mixed in one pass, post-bloom only
- Apricot copper: must come BEFORE bloom (January–February)
- Nectarine / Peach copper (leaf curl): must come while buds still closed
- Citrus: standard EU fruit tree spray rules do NOT apply

## Harvest timing

Harvest window for standard fruit trees is NOT encoded here.
It comes from PLANT_CATALOG_V1.md (variety.harvestWindow or fallback.harvestWindow).
This file provides harvest activity templates with broad windows.
When roadmap opens plan generation scope, a future generation layer may narrow the harvest window using catalog harvestWindow data.

## ActivityType validity

All entries in this file use only V1-compatible activity types:
spraying, pruning, fertilizing, watering, planting, harvest, observation, problem, monitoring.

No custom fields exist in any entry in this file.
All special logic (young tree, condition-based, timing notes) is in `notes` text only.

---

# ══════════════════════════════════════════════════════
# COMPLETENESS VERIFICATION
# ══════════════════════════════════════════════════════

## Coverage check — all plant types from PLANT_CATALOG_V1

| Plant     | Trunk care | Oil  | Cu-winter | Cu-special | Pruning | Monitoring | Spray | Thinning | Net  | Fertilize | Water | Harvest | Shutdown | Inspect |
|-----------|-----------|------|-----------|------------|---------|------------|-------|----------|------|-----------|-------|---------|----------|---------|
| Apple     | SHARED    |SHARED| SHARED    | —          | SHARED  | ✓          | ✓     | ✓        | ✓    | —         |SHARED | ✓       | SHARED   | SHARED  |
| Pear      | SHARED    |SHARED| SHARED    | ✓ vatrostuh| SHARED  | ✓          | ✓     | ✓        | ✓    | —         |SHARED | ✓       | SHARED   | SHARED  |
| Cherry    | SHARED    |SHARED| SHARED    | —          | SHARED  | ✓          | —     | ✓ (opt)  | ✓    | —         |SHARED | ✓       | SHARED   | SHARED  |
| Nectarine | SHARED    |SHARED| SHARED    | ✓ kovrčavost| SHARED | ✓          | ✓     | ✓        | ✓    | —         |SHARED | ✓       | SHARED   | SHARED  |
| Peach     | SHARED    |SHARED| SHARED    | ✓ kovrčavost| SHARED | ✓          | ✓     | ✓        | ✓    | —         |SHARED | ✓       | SHARED   | SHARED  |
| Plum      | SHARED    |SHARED| SHARED    | —          | SHARED  | ✓          | ✓     | ✓        | ✓    | —         |SHARED | ✓       | SHARED   | SHARED  |
| Apricot   | SHARED    |SHARED| SHARED    | ✓ pred cvatnj| SHARED| ✓ mraz+šark| ✓     | ✓        | —    | —         |SHARED | ✓       | SHARED   | SHARED  |
| Olive     | —         | —    | —         | —          | ✓ ×2    | ✓ ×2       | ✓ opt | —        | —    | ✓         | ✓     | ✓       | —        | ✓       |
| Fig       | —         | —    | —         | —          | ✓ ×2    | ✓          | —     | —        | —    | ✓         | ✓     | ✓ ×2    | ✓ (mlada) | ✓      |
| Lemon     | —         | —    | —         | —          | ✓       | ✓          | ✓ opt | —        | —    | ✓         | ✓     | ✓       | ✓        | —       |
| Orange    | —         | —    | —         | —          | ✓       | ✓          | ✓ opt | —        | —    | ✓         | ✓     | ✓       | ✓        | —       |
| Mandarin  | —         | —    | —         | —          | ✓       | ✓          | ✓ opt | —        | —    | ✓         | ✓     | ✓       | ✓        | —       |

Legend: SHARED = covered in shared block | ✓ = defined in species/block section | opt = condition-based | — = not applicable

## All 12 plant types confirmed present: ✓
Apple ✓ | Pear ✓ | Cherry ✓ | Nectarine ✓ | Peach ✓ | Plum ✓ | Apricot ✓
Olive ✓ | Fig ✓ | Lemon ✓ | Orange ✓ | Mandarin ✓

---

# END OF FILE
