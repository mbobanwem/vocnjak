# ORCHARD_PLAN_TEMPLATES_V1.md

## Status
DRAFT — Source of truth for predefined orchard plans (V1)

---

## Purpose

This file defines **predefined orchard work (plans)** per plant species and variety.

It serves as a **canonical template source** for generating `plans[]` in the app.

This file does NOT:
- store user data
- modify schema
- introduce new fields

This file DOES:
- define WHAT work should happen during the year
- map that work to existing plan structure
- enable deterministic plan generation

---

## Core Principles

1. Plans = intent
2. Activities = reality
3. Plan state = derived (never stored)

This file must fully respect:
- DOMAIN_RULES_V1.md
- CURRENT_STATE.md
- MIGRATION_PLAN_V1.md

---

## Constraints (STRICT)

- DO NOT introduce new fields
- DO NOT change plan schema
- DO NOT add heuristics or AI logic
- DO NOT include user-specific data
- DO NOT include IDs (plantIds generated later)
- MUST be deterministic
- MUST map to existing plan structure

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

---

## Supported Plant Types

Defined in PLANT_CATALOG_V1.md:

**Core fruit trees:** apple, pear, plum, cherry, peach, nectarine, apricot

**Mediterranean:** olive, fig

**Citrus (special model):** lemon, orange, mandarin

---

## Notes Convention

- `youngTreeSkip: true` — skip for trees in year 1–2 (no fruit production expected)
- `conditionBased: true` — execute ONLY if stated condition is met (trap reading, pest observed, weather)
- All spray activities assume: dry weather, no wind, temp above 5°C, morning or evening application
- Spray rule: white oil and copper NEVER on same day — minimum 7–10 day gap

---

## Completeness Checklist (per standard fruit tree)

Every standard fruit tree (apple, pear, plum, cherry, peach, nectarine, apricot) must have:

| # | Activity              | activityType      |
|---|-----------------------|-------------------|
| 1 | Whitewash             | whitewash         |
| 2 | White mineral oil     | spraying          |
| 3 | Copper – winter       | spraying          |
| 4 | Winter pruning        | pruning           |
| 5 | Copper on wounds      | spraying          |
| 6 | Monitoring traps      | monitoring        |
| 7 | Post-bloom spray      | spraying          |
| 8 | Fruit thinning        | thinning          |
| 9 | Bird netting          | protection        |
|10 | Watering              | watering          |
|11 | Summer pruning        | pruning           |
|12 | Harvest               | harvest           |
|13 | Stop watering         | watering_stop     |
|14 | Autumn inspection     | inspection        |

Note: Items 6, 7, 8, 9 carry `youngTreeSkip: true`.
Note: Item 6, 7 carry `conditionBased: true` where explicitly stated.
Note: Apricot has additional frost monitoring activity.
Note: Nectarine and Peach have additional critical copper activity for leaf curl.
Note: Olive and Fig follow a different checklist — see their sections.

---

---

# ══════════════════════════════════════════════════════
# SHARED BLOCK
# Activities applied to ALL standard fruit trees.
# appliesToAll: true
# Generator applies these to every plant automatically.
# Do NOT duplicate per-species below.
# ══════════════════════════════════════════════════════

## SHARED — ALL STANDARD FRUIT TREES

### 1. Whitewash

- activityType: "whitewash"
  title: "Krečenje debla"
  appliesToAll: true
  monthStart: 1
  dayStart: 15
  monthEnd: 2
  dayEnd: 10
  notes: >
    Zaštita kore od zimskog pucanja uzrokovanog izmjenom mraza i sunca.
    Važno za sve koštičave (trešnja, šljiva, nektarina, breskva, marelica) i mlade jabuke/kruške.
    Vapnena boja ili komercijalni bijeli premaz za voćke.
    Nanijeti po suhom vremenu, temperatura iznad 0°C.
    Mlada stabla (god. 1–2): primijeniti — štiti tanku koru.

---

### 2. White mineral oil

- activityType: "spraying"
  title: "Bijelo mineralno ulje"
  appliesToAll: true
  monthStart: 2
  dayStart: 1
  monthEnd: 2
  dayEnd: 15
  notes: >
    Uništava prezimljujuća jaja štetnika: grinje, lisne uši, štitaste uši.
    Prskati po suhom vremenu, bez vjetra, temperatura min. 5°C.
    Dobro natopiti sve grane i koru debla.
    RAZMAK OD BAKRA: min. 7–10 dana — ne miješati, ne primjenjivati previše blizu.
    Mlada stabla: primijeniti bez iznimke.

---

### 3. Copper – winter

- activityType: "spraying"
  title: "Bakar – zimska zaštita"
  appliesToAll: true
  monthStart: 2
  dayStart: 15
  monthEnd: 2
  dayEnd: 28
  notes: >
    Zaštita od gljivičnih bolesti i bakterija: rak kore, monilija, čađavost, pjegavost.
    Preparat: Cuprablau Z 35 WG ili ekvivalentni bakreni fungicid.
    RAZMAK OD ULJA: min. 7–10 dana.
    Prskati po suhom, bez vjetra.
    Mlada stabla: primijeniti.

---

### 4. Winter pruning

- activityType: "pruning"
  title: "Zimska rezidba"
  appliesToAll: true
  monthStart: 3
  dayStart: 1
  monthEnd: 3
  dayEnd: 15
  notes: >
    Ukloniti suhe, bolesne, križajuće i preguste grane.
    Cilj: prozračena krošnja, visina max. ~3 m.
    Alat: Felco 8 škare, lopper, pila. Rezati po suhom.
    Rane veće od 2 cm premazati fungicidnim premazom (Lac Balsam).
    Mlada stabla god. 1–2: formiranje oblika — vaza (koštičave) ili vreteno/spindle (jabuka, kruška).
    Ne rezati za mraza ili kiše.

---

### 5. Copper on wounds

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
    RAZMAK OD ULJA: min. 7–10 dana.

---

### 6. Watering – season

- activityType: "watering"
  title: "Sezonsko navodnjavanje"
  appliesToAll: true
  monthStart: 6
  dayStart: 20
  monthEnd: 8
  dayEnd: 31
  notes: >
    Upaliti kada prestane redovita kiša (obično kraj lipnja).
    20–40 L po stablu tjedno. Prilagoditi oborinama — pratiti kišomjer.
    Mlada stabla (god. 1–2): prioritet — 30–50 L tjedno, pratiti vlagu tla redovito.
    Drip sustav preporučen za ujednačenu vlagu i manje bolesti.
    Navodnjavanje ujutro ili navečer — ne po vrućini.

---

### 7. Summer pruning

- activityType: "pruning"
  title: "Ljetna rezidba"
  appliesToAll: true
  monthStart: 7
  dayStart: 1
  monthEnd: 7
  dayEnd: 15
  notes: >
    Uklanjanje vodopija (vertikalni snažni izbojci) i pregustih grana.
    Prosvjetljavanje krošnje za bolju obojenost i razvoj plodova.
    Rezati kada novi izdanci dosegnu 10–20 cm.
    Ne rezati po vrućini iznad 30°C — opeče koru.

---

### 8. Stop watering

- activityType: "watering_stop"
  title: "Gašenje navodnjavanja"
  appliesToAll: true
  monthStart: 9
  dayStart: 1
  monthEnd: 9
  dayEnd: 15
  notes: >
    Ugasiti 2–3 tjedna prije berbe zadnje voćke u sezoni (obično jabuka).
    Jabuka treba suhoću u završnoj fazi za bolji okus, čvrstoću i trajnost.
    Ako je samo jedan ventil za cijeli vrt: gasiti sve odjednom oko 1. rujna.
    Trešnja, nektarina, breskva, šljiva i marelica su već pobrane — nema konflikta.

---

### 9. Autumn inspection

- activityType: "inspection"
  title: "Pregled za zimu"
  appliesToAll: true
  monthStart: 10
  dayStart: 1
  monthEnd: 10
  dayEnd: 31
  notes: >
    Pregledati debla i grane: pukotine, rak kore, oštećenja od štetnika.
    Provjeriti vezice — ne smiju rezati koru, labaviti ako pritišću.
    Provjeriti spiralne zaštite od glodavaca (zimi aktivni, posebno miševi i zečevi).
    Ukloniti sve mumificirane plodove i lišće sa stabla i s tla — izvor zaraze za sljedeću sezonu.
    Prilagoditi kolce i potpore mladim stablima ako su se pomaknuli.

---

---

# ══════════════════════════════════════════════════════
# PER-SPECIES TEMPLATES
# Specific activities per plant type.
# Shared block applies additionally — do NOT duplicate here.
# ══════════════════════════════════════════════════════


---

## 🍎 APPLE (Malus domestica)

### Bloom window (Zagreb baseline)
Cvatnja: travanj (kasne sorte kao Fuji: poč.–kraj travnja)

### Variety timing table

| Variety          | Timing | Harvest (Zagreb)  |
|------------------|--------|-------------------|
| Fuji             | late   | 25.9.–15.10.      |
| Gala             | mid    | 20.8.–10.9.       |
| Granny Smith     | late   | 1.10.–20.10.      |
| Golden Delicious | mid    | 10.9.–30.9.       |
| Idared           | late   | 1.10.–20.10.      |
| Jonagold         | mid    | 15.9.–5.10.       |

### Fallback harvest
- early → 10.8.–5.9.
- mid   → 1.9.–30.9.
- late  → 25.9.–20.10.

---

### SPRING — monitoring

- activityType: "monitoring"
  title: "Feromonska klopka – jabučni savijač"
  monthStart: 4
  dayStart: 25
  monthEnd: 5
  dayEnd: 5
  youngTreeSkip: true
  notes: >
    Jabučni savijač (Cydia pomonella) — crvi u plodovima jabuke.
    Postaviti na 1.5–2 m visine, u sjenu krošnje.
    Tjedno pregledavati ulov.
    Prag: nagli rast ulova → insekticid unutar 7–10 dana.
    Mlada stabla (god. 1–2): preskočiti — nema plodova.

- activityType: "monitoring"
  title: "Praćenje klopke – 2. generacija savijača"
  monthStart: 6
  dayStart: 1
  monthEnd: 6
  dayEnd: 30
  youngTreeSkip: true
  conditionBased: true
  notes: >
    Nastavak praćenja iz travnja.
    Insekticid (Mospilan 20 SP) SAMO ako ulov naglo raste.
    Mospilan NIKAD za cvatnje ili pri aktivnom letu pčela.

---

### GROWTH — post-bloom spray

- activityType: "spraying"
  title: "Zaštita ploda – fungicid + insekticid"
  monthStart: 5
  dayStart: 10
  monthEnd: 5
  dayEnd: 30
  youngTreeSkip: true
  notes: >
    Primijeniti NAKON završetka cvatnje — pčele moraju biti izvan cvjetova.
    Score 250 EC + Mospilan 20 SP — miješati u jednom prolazu.
    Score štiti od krastavosti jabuke (Venturia inaequalis).
    Mospilan štiti od jabučnog savijača (Cydia pomonella).
    Mospilan je toksičan za pčele — NIKAD za cvatnje.
    Mlada stabla: preskočiti.

- activityType: "spraying"
  title: "Insekticid – 2. generacija savijača"
  monthStart: 6
  dayStart: 10
  monthEnd: 6
  dayEnd: 30
  youngTreeSkip: true
  conditionBased: true
  notes: >
    Mospilan 20 SP — SAMO ako klopke pokažu nagli porast ulova.
    Nije preventivno prskanje.
    Primijeniti ujutro ili navečer, ne za ljetnih vrućina.

---

### GROWTH — thinning

- activityType: "thinning"
  title: "Prorjeđivanje plodova"
  monthStart: 5
  dayStart: 20
  monthEnd: 6
  dayEnd: 10
  youngTreeSkip: true
  notes: >
    Ostaviti 1 plod na svakih 10–15 cm grane.
    Ukloniti sitne, oštećene i blizance.
    Jabuka je sklona alternativnoj rodnosti — redovito prorjeđivanje to smanjuje.
    Bez prorjeđivanja: sitni plodovi, preveliko opterećenje grana.
    Mlada stabla: preskočiti.

---

### SUMMER — bird protection

- activityType: "protection"
  title: "Zaštita od štetočina (po potrebi)"
  monthStart: 8
  dayStart: 1
  monthEnd: 9
  dayEnd: 25
  youngTreeSkip: true
  conditionBased: true
  notes: >
    Jabuka Fuji i druge kasne sorte rijetko napadnute pticama dok je plod čvrst.
    Pratiti vizualno. Mreža nije standardna potreba za jabuku.
    Ako se primijeti oštećenje od ptica: postaviti zastrašivače ili mrežu.

---

### HARVEST

- activityType: "harvest"
  title: "Berba jabuke"
  monthStart: 9
  dayStart: 25
  monthEnd: 10
  dayEnd: 15
  notes: >
    Brati zakretanjem ploda (ne čupati, ne vući — oštećuje peteljku i uzrokuje trulež).
    Test zrelosti: plod lako otpada pri laganom zakretanju, sjemenke smeđe.
    Fuji: čekati punu zrelost — ako se bere prerano, nema razvijenog okusa.
    Brati po suhom vremenu, izbjegavati jutarnju rosu.
    Ne ostavljati oštećene plodove na stablu — uzrokuju moniliju.
    Čuvati na 0–4°C — Fuji traje i do proljeća u dobrim uvjetima.


---

## 🍐 PEAR (Pyrus communis)

### Bloom window (Zagreb baseline)
Cvatnja: kraj ožujka – poč. travnja (nešto ranije od jabuke)

### Variety timing table

| Variety        | Timing | Harvest (Zagreb) |
|----------------|--------|-----------------|
| Williams       | early  | 1.8.–20.8.      |
| Conference     | mid    | 25.8.–15.9.     |
| Beurré Bosc    | mid    | 1.9.–20.9.      |
| Abate Fetel    | late   | 15.9.–5.10.     |
| Concorde       | mid    | 20.8.–10.9.     |

### Fallback harvest
- early → 1.8.–25.8.
- mid   → 25.8.–20.9.
- late  → 15.9.–10.10.

### Special note — fire blight
Kruška je osjetljiva na vatrostuh (Erwinia amylovora) — bakterijska bolest bez kemijskog lijeka.
Prevencija: bakar preventivno, rezidba oboljelih dijelova odmah (alat dezinficirati između rezova).

---

### SPRING — fire blight copper

- activityType: "spraying"
  title: "Bakar – zaštita od vatrostuh (kruška)"
  monthStart: 3
  dayStart: 15
  monthEnd: 4
  dayEnd: 10
  notes: >
    Kruška je jedina standardna voćka s ozbiljnim rizikom vatrostuh (Erwinia amylovora).
    Primijeniti bakar preventivno oko cvatnje.
    PAŽNJA: cvatnja kruške je ranije od jabuke — prilagoditi termin prema stanju stabla.
    Ne prskati direktno na otvorene cvjetove (oštećenje cvijeta i pčela).
    Cuprablau Z 35 WG ili ekvivalent.
    Razmak od bijelog ulja: min. 7–10 dana.

---

### SPRING — monitoring

- activityType: "monitoring"
  title: "Praćenje kruškine buhe i savijača"
  monthStart: 4
  dayStart: 20
  monthEnd: 5
  dayEnd: 15
  youngTreeSkip: true
  notes: >
    Kruškina buha (Cacopsylla pyri) — značajan štetnik kruške, izlučuje mednu rosu.
    Kruškini savijač (Grapholita molesta) može biti prisutan.
    Tjedno pregledavati nove izbojke i naličje listova.
    Insekticid Mospilan samo pri vidljivom problemu.

---

### GROWTH — post-bloom spray

- activityType: "spraying"
  title: "Zaštita ploda – fungicid + insekticid"
  monthStart: 5
  dayStart: 1
  monthEnd: 5
  dayEnd: 25
  youngTreeSkip: true
  notes: >
    Nakon cvatnje. Score 250 EC + Mospilan 20 SP — jedan prolaz.
    Zaštita od krastavosti kruške (Venturia pirina) i štetnika.
    Mospilan NIKAD za cvatnje.
    Mlada stabla: preskočiti.

---

### GROWTH — thinning

- activityType: "thinning"
  title: "Prorjeđivanje plodova"
  monthStart: 5
  dayStart: 20
  monthEnd: 6
  dayEnd: 15
  youngTreeSkip: true
  notes: >
    Kruška ne zahtijeva agresivno prorjeđivanje kao jabuka, ali pomaže kvaliteti.
    Ostaviti 1–2 ploda na grozdu, razmak ~10 cm.
    Ukloniti oštećene i deformirane plodove.
    Mlada stabla: preskočiti.

---

### SUMMER — bird protection

- activityType: "protection"
  title: "Zaštita od ptica – kruška"
  monthStart: 7
  dayStart: 20
  monthEnd: 8
  dayEnd: 25
  youngTreeSkip: true
  conditionBased: true
  notes: >
    Kruška može biti napadnuta pticama pred samu berbu.
    Pratiti vizualno — mreža po potrebi.
    Postaviti kada plodovi počnu sazrijevati.

---

### HARVEST

- activityType: "harvest"
  title: "Berba kruške"
  monthStart: 8
  dayStart: 1
  monthEnd: 9
  dayEnd: 20
  notes: >
    KRITIČNO: brati PRIJE pune zrelosti — kruška dozrijeva nakon berbe, ne na stablu.
    Test zrelosti na stablu: plod se lako odvaja zakretanjem, ali još čvrst.
    Dozrijevanje nakon berbe: sobna temperatura 3–7 dana.
    NE čekati da omekša na stablu — bit će brašnasta i neukusna.
    Brati pažljivo — kruška lako dobiva modrice koje uzrokuju trulež.
    Čuvati na 0–4°C — usporava dozrijevanje.


---

## 🍒 CHERRY (Prunus avium)

### Bloom window (Zagreb baseline)
Cvatnja: kraj ožujka – poč. travnja

### Variety timing table

| Variety  | Timing | Harvest (Zagreb) |
|----------|--------|-----------------|
| Kordia   | mid    | 20.6.–5.7.      |
| Burlat   | early  | 1.6.–15.6.      |
| Regina   | late   | 5.7.–20.7.      |
| Van      | mid    | 15.6.–30.6.     |
| Stella   | mid    | 15.6.–30.6.     |
| Summit   | late   | 1.7.–20.7.      |

### Fallback harvest
- early → 1.6.–15.6.
- mid   → 15.6.–5.7.
- late  → 5.7.–25.7.

### Special notes
Trešnjina muha (Rhagoletis cerasi) — jedini ozbiljan insektni štetnik trešnje u EU klimi.
Gisela 5 podloga: slabobujnija, raniji prinos, lakša zaštita mrežom.
Trešnja puca od kiše pred berbu — mreža štiti i od toga.
Trešnja se NE prorjeđuje standardno (stablo samo regulira), ali je moguće ručno ukloniti blizance.

---

### SPRING — monitoring

- activityType: "monitoring"
  title: "Žute ljepljive ploče – trešnjina muha"
  monthStart: 4
  dayStart: 25
  monthEnd: 5
  dayEnd: 10
  youngTreeSkip: true
  notes: >
    Trešnjina muha (Rhagoletis cerasi) — najvažniji štetnik trešnje u EU.
    Postaviti 2–3 žute ploče po stablu na visinu 1.5–2 m, u sjenu krošnje.
    Tjedno pregledavati ulov:
    — 0–2 muhe/tjedan → nema tretmana
    — nagli porast → Mospilan unutar 7–10 dana od prvog masovnog leta
    Mospilan karenca: min. 14 dana od primjene do berbe.
    Mlada stabla: preskočiti.

- activityType: "monitoring"
  title: "Praćenje žutih ploča – lipanj"
  monthStart: 6
  dayStart: 1
  monthEnd: 6
  dayEnd: 20
  youngTreeSkip: true
  conditionBased: true
  notes: >
    Nastavak praćenja. Let muhe intenzivan od poč. lipnja do berbe.
    Insekticid samo pri visokom ulovu i uz dovoljnu karencu do berbe (min. 14 dana).
    Ako je berba za 10 dana ili manje: ne tretirati.

---

### GROWTH — thinning (optional)

- activityType: "thinning"
  title: "Prorjeđivanje trešnje (po želji)"
  monthStart: 5
  dayStart: 15
  monthEnd: 6
  dayEnd: 1
  youngTreeSkip: true
  conditionBased: true
  notes: >
    Trešnja nije obavezna za prorjeđivanje — stablo samo regulira broj plodova.
    Gisela 5 ne prerodi ekscesivno.
    Po želji: ukloniti blizance (dva srasla ploda) i sitne zaostale.
    Ostaviti ~5–8 cm razmaka između plodova u grozdu.
    Znakovi previše: grane vise jako pod težinom, svi plodovi sitni i blijedi.
    Ovo smanjuje broj plodova koje trebaš skupljati s tla — štedi leđa.

---

### PROTECTION — bird net

- activityType: "protection"
  title: "Mreža protiv ptica"
  monthStart: 6
  dayStart: 15
  monthEnd: 6
  dayEnd: 30
  youngTreeSkip: true
  notes: >
    Postaviti 2–3 tjedna prije berbe (za Kordiju: oko 15.–20.6.).
    Za ranije sorte (Burlat): postaviti već početkom lipnja.
    Veličina: min. 4×4 m, preporučeno 5×5 m.
    Tip: s bočnim zipperom za lagan pristup pri berbi bez skidanja mreže.
    Mreža štiti i od kiše → smanjuje pucanje plodova pred berbu.
    Skinuti odmah nakon berbe — ne ostavljati na stablu.

---

### HARVEST

- activityType: "harvest"
  title: "Berba trešnje"
  monthStart: 6
  dayStart: 20
  monthEnd: 7
  dayEnd: 5
  notes: >
    Brati sa peteljkom — plod bez peteljke traje znatno kraće.
    Brati po suhom vremenu i u hladnijem dijelu dana (jutro, večer).
    Trešnja se ne čuva dugo: 3–5 dana u hladnjaku na 0–4°C.
    Ne brati mokre plodove — pucaju i brzo trunu.
    Test zrelosti: tamnocrvena boja (Kordia), čvrstoća uz blag pritisak popušta.
    Ne ostavljati prezrele plodove na stablu — privlače ose i uzrokuju gnilobu.


---

## 🍑 NECTARINE (Prunus persica var. nucipersica)

### Bloom window (Zagreb baseline)
Cvatnja: kraj ožujka – poč. travnja

### Variety timing table

| Variety      | Timing | Harvest (Zagreb) |
|--------------|--------|-----------------|
| Fantasia     | mid    | 1.8.–20.8.      |
| Big Top      | early  | 10.7.–31.7.     |
| Independence | early  | 1.7.–20.7.      |
| Stark Red Gold | mid  | 5.8.–25.8.      |

### Fallback harvest
- early → 1.7.–31.7.
- mid   → 1.8.–20.8.
- late  → 15.8.–10.9.

### Special note — leaf curl
Nektarina je IZNIMNO osjetljiva na kovrčavost lista (Taphrina deformans).
Jednom zaražena grana nema lijeka — samo preventiva bakrom dok su pupovi zatvoreni.
Propušteno prskanje u veljači = sigurna zaraza za vlažnog proljeća.

---

### WINTER — critical copper for leaf curl

- activityType: "spraying"
  title: "Bakar – kovrčavost lista (KRITIČNO za nektarinu)"
  monthStart: 2
  dayStart: 10
  monthEnd: 3
  dayEnd: 5
  notes: >
    KRITIČNO — ne smije se propustiti.
    Primijeniti dok su pupovi nektarine još zatvoreni ili tek počinju bubriti.
    Kovrčavost lista (Taphrina deformans): nema lijeka nakon zaraze, samo prevencija.
    Cuprablau Z 35 WG ili ekvivalent.
    Vlažno proljeće: 2 tretmana u razmaku 7–10 dana.
    Ovo prskanje je DODATAK zimskom bakru iz shared bloka.
    Razmak od bijelog ulja: min. 7–10 dana.
    Mlada stabla: primijeniti — posebno važno u prvim godinama.

---

### SPRING — monitoring

- activityType: "monitoring"
  title: "Praćenje štetnika – breskvin savijač i lisne uši"
  monthStart: 4
  dayStart: 15
  monthEnd: 5
  dayEnd: 20
  youngTreeSkip: true
  conditionBased: true
  notes: >
    Pregledavati naličje listova i mlade izbojke tjedno.
    Lisne uši na nektarini mogu biti problem — Mospilan pri vidljivoj koloniji.
    Breskvin savijač (Grapholita molesta): pratiti feromonskom klopkom ako dostupna.

---

### GROWTH — post-bloom spray

- activityType: "spraying"
  title: "Zaštita ploda – fungicid + insekticid"
  monthStart: 5
  dayStart: 5
  monthEnd: 5
  dayEnd: 25
  youngTreeSkip: true
  notes: >
    Nakon završetka cvatnje.
    Score 250 EC + Mospilan 20 SP — u jednom prolazu.
    Zaštita od monililje (Monilinia laxa) i breskvinog savijača.
    Mospilan NIKAD za cvatnje — toksičan za pčele.
    Mlada stabla: preskočiti.

---

### GROWTH — thinning

- activityType: "thinning"
  title: "Prorjeđivanje plodova"
  monthStart: 5
  dayStart: 20
  monthEnd: 6
  dayEnd: 10
  youngTreeSkip: true
  notes: >
    OBAVEZNO za nektarinu — jako prorodi bez prorjeđivanja.
    Ostaviti 1 plod na 10–15 cm grane.
    Ukloniti sve blizance, sitne i oštećene.
    Bez prorjeđivanja: sitni plodovi, lom grana od težine, iscrpljenost stabla.
    Mlada stabla: preskočiti.

---

### PROTECTION — bird net

- activityType: "protection"
  title: "Mreža protiv ptica"
  monthStart: 7
  dayStart: 20
  monthEnd: 8
  dayEnd: 5
  youngTreeSkip: true
  notes: >
    Postaviti kada plodovi počnu mijenjati boju (žuto-narančasta osnova vidljiva).
    Kos i drozd napadaju nektarinu agresivno pred berbu.
    Veličina mreže: min. 4×4 m. Tip s bočnim zipperom preporučen.
    Skinuti odmah nakon berbe.

---

### HARVEST

- activityType: "harvest"
  title: "Berba nektarine"
  monthStart: 8
  dayStart: 1
  monthEnd: 8
  dayEnd: 20
  notes: >
    VIŠE PROLAZA — plodovi ne dozrijevaju istovremeno (3–4 prolaza u ~3 tjedna).
    Test zrelosti: blago popuštanje pri pritisku oko peteljke, osnovna boja žuto-narančasta.
    NE brati prerano — nektarina ne dozrijeva nakon berbe (za razliku od kruške).
    Brati pažljivo — kožica je tanka i lako se oštećuje.
    Čuvati na 0–4°C do 2 tjedna.
    Fantasia: berba 1.–20.8., pratiti stanje svakih 3–4 dana.


---

## 🍑 PEACH (Prunus persica)

### Bloom window (Zagreb baseline)
Cvatnja: kraj ožujka – poč. travnja (nešto ranije od nektarine)

### Variety timing table

| Variety    | Timing | Harvest (Zagreb) |
|------------|--------|-----------------|
| Redhaven   | early  | 1.7.–20.7.      |
| Elberta    | mid    | 1.8.–20.8.      |
| Hale       | mid    | 15.7.–5.8.      |
| Dixieland  | late   | 1.8.–25.8.      |
| Reliance   | early  | 25.6.–15.7.     |

### Fallback harvest
- early → 25.6.–25.7.
- mid   → 25.7.–20.8.
- late  → 10.8.–5.9.

### Special note
Breskva i nektarina imaju gotovo identičan tretman.
Kovrčavost lista jednako kritična kao kod nektarine.
Breskva je nešto otpornija na neke bolesti (dlakava kožica), ali ne na Taphrina deformans.

---

### WINTER — critical copper for leaf curl

- activityType: "spraying"
  title: "Bakar – kovrčavost lista (KRITIČNO za breskvu)"
  monthStart: 2
  dayStart: 10
  monthEnd: 3
  dayEnd: 5
  notes: >
    KRITIČNO — identično kao kod nektarine, ne smije se propustiti.
    Primijeniti dok su pupovi zatvoreni ili tek počinju bubriti.
    Kovrčavost lista (Taphrina deformans) — jednom zaražena grana, nema lijeka.
    Cuprablau Z 35 WG ili ekvivalent.
    Vlažno proljeće: 2 tretmana u razmaku 7–10 dana.
    Ovo je DODATAK zimskom bakru iz shared bloka.
    Razmak od bijelog ulja: min. 7–10 dana.

---

### SPRING — monitoring

- activityType: "monitoring"
  title: "Praćenje štetnika – lisne uši i savijač"
  monthStart: 4
  dayStart: 15
  monthEnd: 5
  dayEnd: 20
  youngTreeSkip: true
  conditionBased: true
  notes: >
    Tjedno pregledavati naličje listova i vršne izbojke.
    Lisne uši na breskvi: Mospilan pri vidljivoj koloniji.
    Breskvin savijač (Grapholita molesta): feromonska klopka ako dostupna.

---

### GROWTH — post-bloom spray

- activityType: "spraying"
  title: "Zaštita ploda – fungicid + insekticid"
  monthStart: 5
  dayStart: 5
  monthEnd: 5
  dayEnd: 25
  youngTreeSkip: true
  notes: >
    Nakon cvatnje. Score 250 EC + Mospilan 20 SP — jednom prolazo.
    Zaštita od monililje (Monilinia laxa) i breskvinog savijača.
    Mospilan NIKAD za cvatnje.
    Mlada stabla: preskočiti.

---

### GROWTH — thinning

- activityType: "thinning"
  title: "Prorjeđivanje plodova"
  monthStart: 5
  dayStart: 20
  monthEnd: 6
  dayEnd: 10
  youngTreeSkip: true
  notes: >
    OBAVEZNO — breskva jako prorodi bez prorjeđivanja.
    Ostaviti 1 plod na 10–15 cm grane.
    Ukloniti blizance i oštećene plodove.
    Bez prorjeđivanja: sitni plodovi, lom grana, alternativna rodnost.
    Mlada stabla: preskočiti.

---

### PROTECTION — bird net

- activityType: "protection"
  title: "Mreža protiv ptica"
  monthStart: 7
  dayStart: 10
  monthEnd: 7
  dayEnd: 25
  youngTreeSkip: true
  notes: >
    Postaviti kada plodovi počnu mijenjati boju (ružičasto-crvena osnova).
    Kos i drozd napadaju breskvu pred berbu.
    Veličina: min. 4×4 m. Skinuti odmah nakon berbe.

---

### HARVEST

- activityType: "harvest"
  title: "Berba breskve"
  monthStart: 7
  dayStart: 1
  monthEnd: 8
  dayEnd: 25
  notes: >
    Više prolaza — plodovi ne dozrijevaju istovremeno.
    Test zrelosti: blago popuštanje pri pritisku, osnovna boja žuto-narančasta.
    Brati pažljivo — dlakava kožica nježnija nego što izgleda.
    Na sobnoj temperaturi dozrijeva 2–3 dana nakon berbe.
    Ne ostavljati prezrele plodove — privlače ose i uzrokuju moniliju.
    Čuvati na 0–4°C do 1–2 tjedna.


---

## 🟠 APRICOT (Prunus armeniaca)

### ⚠️ SPECIAL CASE — EARLIEST BLOOM, HIGHEST FROST RISK

Marelica cvate NAJRANIJE od svih voćki — veljača do ožujak.
Kasni mraz ispod -1°C za cvatnje = propao rod. Nije bolest, nije štetnik.
Lokacija sadnje je kritična: izbjegavati udoline (mraz se slijeva dolje), sjeverne strane.

### Bloom window (Zagreb baseline)
Cvatnja: VELJAČA – OŽUJAK (ovisno o sorti i godini)

### Variety timing table

| Variety   | Timing | Cvatnja (Zagreb) | Harvest (Zagreb) |
|-----------|--------|-----------------|-----------------|
| Harcot    | early  | poč. veljača    | 5.6.–25.6.      |
| Goldrich  | mid    | kraj veljača    | 20.6.–10.7.     |
| Roxana    | mid    | kraj veljača    | 25.6.–15.7.     |
| Bergeron  | late   | poč. ožujak     | 5.7.–25.7.      |
| Trevatt   | late   | poč. ožujak     | 10.7.–31.7.     |

### Fallback harvest
- early → 5.6.–25.6.
- mid   → 20.6.–15.7.
- late  → 5.7.–31.7.

---

### WINTER — pre-bloom copper (CRITICAL timing)

- activityType: "spraying"
  title: "Bakar – zaštita PRIJE cvatnje (KRITIČNO za marelicu)"
  monthStart: 1
  dayStart: 20
  monthEnd: 2
  dayEnd: 15
  notes: >
    KRITIČNO: marelica cvate u veljači/ožujku — bakar mora biti primijenjen PRIJE.
    Prskati dok su pupovi još zatvoreni ili tek počinju bubriti.
    Zaštita od: šarke (Plum pox virus, prenose lisne uši), monililje, pjegavosti kore.
    Cuprablau Z 35 WG ili ekvivalent.
    Ako se propusti ovaj termin, ne može se naknadno kompenzirati.
    Razmak od bijelog ulja: min. 7–10 dana.
    Ovo je DODATAK zimskom bakru iz shared bloka — primijeniti ranije.

---

### SPRING — frost monitoring (special to apricot)

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
    Informacijska radnja — korisnik mora reagirati prema lokalnim uvjetima.

---

### SPRING — monitoring

- activityType: "monitoring"
  title: "Praćenje lisnih ušiju i šarke"
  monthStart: 4
  dayStart: 1
  monthEnd: 5
  dayEnd: 15
  youngTreeSkip: true
  conditionBased: true
  notes: >
    Šarka (Plum pox virus) se prenosi lisnim ušima — pratiti kolonije na naličju listova.
    Vizualni pregled: karakteristični žuti prstenovi/mrlje na listovima = šarka.
    Šarka nema lijeka — zaražena stabla se moraju ukloniti.
    Mospilan pri vidljivoj koloniji lisnih uši (preventivna kontrola vektora).

---

### GROWTH — post-bloom spray

- activityType: "spraying"
  title: "Zaštita ploda – fungicid"
  monthStart: 4
  dayStart: 15
  monthEnd: 5
  dayEnd: 15
  youngTreeSkip: true
  notes: >
    Nakon cvatnje (marelica cvate ranije — prilagoditi termin).
    Score 250 EC za zaštitu od monililje (Monilinia laxa).
    Mospilan dodati samo pri vidljivim štetnicima.
    NIKAD prskati otvorene cvjetove.
    Mlada stabla: preskočiti.

---

### GROWTH — thinning

- activityType: "thinning"
  title: "Prorjeđivanje plodova"
  monthStart: 5
  dayStart: 1
  monthEnd: 5
  dayEnd: 25
  youngTreeSkip: true
  notes: >
    Marelica jako prorodi (ako nije bilo mraza koji je uništio cvjetove).
    Ostaviti 1 plod na 8–10 cm grane.
    Ukloniti blizance i oštećene plodove.
    Bez prorjeđivanja: sitni plodovi, lom grana, iscrpljenost stabla.
    Mlada stabla: preskočiti.

---

### HARVEST

- activityType: "harvest"
  title: "Berba marelice"
  monthStart: 6
  dayStart: 5
  monthEnd: 7
  dayEnd: 25
  notes: >
    Marelica dozrijeva brzo i neravnomjerno — 2–3 prolaza kroz ~2 tjedna.
    Test zrelosti: narančasta boja s crvenim rumenilom, blago popuštanje pri pritisku.
    Brati pažljivo — jako se oštećuje i brzo trune.
    Rok: 2–3 dana na sobnoj temperaturi, do 1 tjedan na 0–4°C.
    Ne ostavljati prezrele plodove na stablu — privlače ose i uzrokuju moniliju.
    Ako je rod manji od očekivanog → uzrok je vjerojatno mraz za cvatnje, ne bolest.


---

## 🫐 PLUM (Prunus domestica)

### Bloom window (Zagreb baseline)
Cvatnja: kraj ožujka – poč. travnja

### Variety timing table

| Variety         | Timing | Harvest (Zagreb) |
|-----------------|--------|-----------------|
| Stanley         | late   | 20.8.–10.9.     |
| Čačanska lepotica | early | 20.7.–10.8.   |
| Požegača        | mid    | 10.8.–31.8.     |
| Ruth Gerstetter | early  | 25.7.–15.8.     |
| Althann         | mid    | 5.8.–25.8.      |

### Fallback harvest
- early → 20.7.–10.8.
- mid   → 1.8.–25.8.
- late  → 20.8.–15.9.

---

### SPRING — monitoring

- activityType: "monitoring"
  title: "Feromonska klopka – šljivin savijač"
  monthStart: 4
  dayStart: 25
  monthEnd: 5
  dayEnd: 5
  youngTreeSkip: true
  notes: >
    Šljivin savijač (Cydia funebrana) — crvi u plodovima šljive.
    Postaviti klopku na 1.5–2 m visine.
    Tjedno pregledavati ulov.
    Prag: nagli porast ulova → insekticid unutar 7–10 dana.
    Mlada stabla: preskočiti.

- activityType: "monitoring"
  title: "Praćenje klopke – 2. generacija savijača"
  monthStart: 6
  dayStart: 15
  monthEnd: 7
  dayEnd: 15
  youngTreeSkip: true
  conditionBased: true
  notes: >
    Druga generacija šljivinog savijača — sredina lipnja do sredine srpnja.
    Insekticid (Mospilan) samo pri visokom ulovu.

---

### GROWTH — post-bloom spray

- activityType: "spraying"
  title: "Zaštita ploda – fungicid + insekticid"
  monthStart: 5
  dayStart: 5
  monthEnd: 5
  dayEnd: 25
  youngTreeSkip: true
  notes: >
    Nakon cvatnje. Score 250 EC + Mospilan 20 SP — jedan prolaz.
    Zaštita od šljive od monililje, pjegavosti lista i šljivinog savijača.
    Mospilan NIKAD za cvatnje.
    Mlada stabla: preskočiti.

- activityType: "spraying"
  title: "Insekticid – 2. generacija savijača"
  monthStart: 6
  dayStart: 15
  monthEnd: 7
  dayEnd: 10
  youngTreeSkip: true
  conditionBased: true
  notes: >
    Mospilan 20 SP — SAMO ako klopke pokažu nagli porast.
    Primijeniti ujutro ili navečer.
    Nije preventivno prskanje.

---

### GROWTH — thinning

- activityType: "thinning"
  title: "Prorjeđivanje plodova"
  monthStart: 5
  dayStart: 20
  monthEnd: 6
  dayEnd: 15
  youngTreeSkip: true
  notes: >
    Šljiva sklona prerodu — prorjeđivanje bitno za kvalitetu.
    Ostaviti 1 plod na 8–10 cm grane.
    Ukloniti blizance i oštećene.
    Posebno važno za kasne sorte (Stanley) jer plodovi trebaju dugo rasti.
    Mlada stabla: preskočiti.

---

### PROTECTION — bird net

- activityType: "protection"
  title: "Mreža protiv ptica"
  monthStart: 8
  dayStart: 8
  monthEnd: 8
  dayEnd: 22
  youngTreeSkip: true
  notes: >
    Postaviti 1–2 tjedna prije berbe, kada šljiva počne omekšavati.
    Kos i drozd napadaju šljivu agresivno pred berbu.
    Veličina: min. 4×4 m. Tip s bočnim zipperom preporučen.
    Skinuti odmah nakon berbe.

---

### HARVEST

- activityType: "harvest"
  title: "Berba šljive"
  monthStart: 8
  dayStart: 20
  monthEnd: 9
  dayEnd: 10
  notes: >
    Stanley: berba kraj kolovoza, puna zrelost ~20.8.–10.9.
    Test: plod omekšao, tamno ljubičasta boja, lako se odvaja.
    Brati u više navrata — ne dozrijeva sve odjednom.
    Ne ostavljati prezrele plodove — privlače ose, uzrokuju moniliju.
    Za sušenje i pekmez: ostaviti dulje na stablu za veći udio šećera.


---

---

# ══════════════════════════════════════════════════════
# MEDITERRANEAN PLANTS
# Different climate requirements.
# Shared block does NOT fully apply — see per-species notes.
# ══════════════════════════════════════════════════════


---

## 🫒 OLIVE (Olea europaea)

### Climate note
Maslina je zimzelena — ne gubi lišće, nema zimskog mirovanja kao listopadne voćke.
Otporna na sušu, osjetljiva na dugotrajne mrazeve ispod -7°C.
Standardni spray program (ulje, bakar, Score, Mospilan) NE primjenjuje se.

### Shared block application for olive
- Whitewash: NE (nije standardno)
- White oil: NE (nije potrebno za maslinove štetike)
- Copper winter: NE (osim preventivno za paunovo oko — po potrebi)
- Winter pruning: DA
- Copper on wounds: DA (preporučeno)
- Summer pruning: DA (opcijsko)
- Watering: NE (otporna na sušu; samo mlada stabla)
- Watering_stop: NE
- Inspection: DA

---

### WINTER — pruning

- activityType: "pruning"
  title: "Rezidba masline"
  monthStart: 2
  dayStart: 15
  monthEnd: 3
  dayEnd: 31
  notes: >
    Rezati NAKON prohladnog dijela zime (maslina cvate na jednogodišnjem drvu).
    Ukloniti suhare, vodopije i grane koje rastu prema unutra krošnje.
    Cilj: otvorena krošnja u obliku vaze, dobra cirkulacija zraka.
    Svaka 2–3 godine: jača rezidba za obnovu rodnog drva.
    Mlada stabla god. 1–3: formiranje oblika — ne rezati agresivno.
    Rane premazati (Lac Balsam) za rezove iznad 3 cm.

- activityType: "spraying"
  title: "Bakar na rane (maslina)"
  monthStart: 3
  dayStart: 1
  monthEnd: 3
  dayEnd: 31
  notes: >
    Primijeniti unutar 1–2 dana nakon rezidbe.
    Zaštita od bakterioze (Pseudomonas savastanoi — maslinin rak).
    Cuprablau Z 35 WG ili ekvivalent.

---

### SPRING — monitoring and optional copper

- activityType: "monitoring"
  title: "Vizualni pregled – paunovo oko i maslinin moljac"
  monthStart: 4
  dayStart: 1
  monthEnd: 5
  dayEnd: 31
  conditionBased: true
  notes: >
    Paunovo oko (Spilocaea oleagina): žute mrlje s tamnim rubom na listu → bakar po potrebi.
    Maslinin moljac (Prays oleae): mali bijeli leptir, napada cvjetove i plodove.
    Vizualni pregled — tretman samo pri vidljivom problemu.

- activityType: "spraying"
  title: "Bakar – paunovo oko (po potrebi)"
  monthStart: 4
  dayStart: 1
  monthEnd: 5
  dayEnd: 31
  conditionBased: true
  notes: >
    Primijeniti samo pri vidljivim simptomima paunovog oka.
    Cuprablau Z 35 WG.
    Nije standardno preventivno prskanje za maslinike u kontinentalnoj klimi.

---

### SUMMER — olive fly monitoring

- activityType: "monitoring"
  title: "Praćenje maslinove muhe"
  monthStart: 7
  dayStart: 1
  monthEnd: 10
  dayEnd: 31
  youngTreeSkip: true
  notes: >
    Maslinova muha (Bactrocera oleae) — najvažniji štetnik masline.
    Postaviti žute ljepljive ploče s atraktantom.
    Tjedno pregledavati.
    Pri jakom naletu: insekticid specifičan za maslinovu muhu (spinosad ili kaolin).

---

### SUMMER — optional pruning

- activityType: "pruning"
  title: "Ljetna korekcijska rezidba masline"
  monthStart: 6
  dayStart: 1
  monthEnd: 7
  dayEnd: 15
  conditionBased: true
  notes: >
    Opcijsko uklanjanje vodopija i pregustih izbojaka.
    Ne rezati agresivno — smanjuje rod tekuće godine.
    Maslina rodi na jednogodišnjem drvu — ne treba ljetnu rezidbu svake godine.

---

### HARVEST

- activityType: "harvest"
  title: "Berba maslina"
  monthStart: 11
  dayStart: 1
  monthEnd: 1
  dayEnd: 31
  notes: >
    Zelene masline za ulje: studeni (veći udio polifenola, manji prinos ulja).
    Crne masline: prosinac–siječanj (veći prinos ulja, milder okus).
    Za konzumne masline u salamuri: brati zelene, studeni.
    Metode berbe: ručno češljanje, mreža ispod stabla, električni češalj.
    Preraditi u ulje što brže nakon berbe (max. 24–48h).

---

### AUTUMN — inspection

- activityType: "inspection"
  title: "Pregled masline za zimu"
  monthStart: 10
  dayStart: 15
  monthEnd: 11
  dayEnd: 30
  notes: >
    Pregledati krošnju: suhe grane, znakovi bolesti.
    Za kontinentalnu klimu (Zagreb): provjeriti prognoziran mraz.
    Mlada stabla: zaštititi deblo agrotekstilom za mrazove ispod -7°C.
    Ukloniti ostatke plodova s tla.


---

## 🌿 FIG (Ficus carica)

### Climate note
Smokva je iznimno otporna, malo zahtijeva.
Standardni spray program NE primjenjuje se (nema uobičajenih bolesti ni štetnika u hladnijem EU).
Shared block djelomično primjenjiv — vidi ispod.

### Shared block application for fig
- Whitewash: NE (nije standardno)
- White oil: NE (nije korisno)
- Copper winter: NE
- Winter pruning: DA (opsežnija nego kod ostalih)
- Copper on wounds: OPCIJSKO (preporučeno za veće rezove)
- Summer pruning: DA
- Watering: OPCIJSKO (otporna na sušu; mlada stabla DA)
- Watering_stop: NE
- Inspection: DA

---

### WINTER — pruning

- activityType: "pruning"
  title: "Zimska rezidba smokve"
  monthStart: 2
  dayStart: 15
  monthEnd: 3
  dayEnd: 15
  notes: >
    Rezati KASNO u zimi (veljača–ožujak) — smokva je osjetljiva na kasne mrazeve.
    Ukloniti suhare, oštećene grane i stare iscrpljene grane starije od 3–4 godine.
    Smokva rodi na jednogodišnjem i dvogodišnjem drvu — paziti što se reže.
    Bijeli mliječni sok iz rezova je normalan (pazi na kožu — može iritirati).
    Veće rane premazati.
    Mlada stabla: formiranje oblika — vaza s 3–5 glavnih grana.

---

### SPRING — monitoring

- activityType: "monitoring"
  title: "Pregled smokve – smokvin moljac i kornjaši"
  monthStart: 5
  dayStart: 1
  monthEnd: 6
  dayEnd: 30
  conditionBased: true
  notes: >
    Smokva rijetko ima ozbiljne štetnika u kontinentalnoj klimi.
    Vizualni pregled listova i nezrelih plodova.
    Smokvin osičar (Blastophaga psenes): potreban za oprašivanje nekih sorti — nije štetnik.
    Grinje i lisne uši: rijetko, samo pri suhim vrućim ljetima.

---

### SUMMER — pruning and watering

- activityType: "pruning"
  title: "Ljetno skraćivanje izdanaka"
  monthStart: 6
  dayStart: 15
  monthEnd: 7
  dayEnd: 15
  notes: >
    Pinciranje (skraćivanje) jakih izdanaka na 5–6 listova iznad ploda.
    Usmjerava energiju u razvoj plodova.
    Ne rezati previše — smanjuje asimilacijsku površinu.

- activityType: "watering"
  title: "Navodnjavanje smokve"
  monthStart: 6
  dayStart: 20
  monthEnd: 8
  dayEnd: 20
  conditionBased: true
  notes: >
    Smokva je otporna na sušu — odrasla stabla obično ne trebaju navodnjavanje.
    Mlada stabla (god. 1–3): 20–30 L tjedno za suhih perioda.
    Napomena: prekomjerno navodnjavanje može uzrokovati pucanje plodova.

---

### HARVEST — two crops

- activityType: "harvest"
  title: "Berba prevremenih smokava (zimske)"
  monthStart: 7
  dayStart: 1
  monthEnd: 8
  dayEnd: 15
  notes: >
    Prevremene (zimske) smokve: plodovi koji su prezimili na prošlogodišnjem drvu.
    Ne nalaze se na svim sortama — ovisno o sorti i klimi.
    Test: meka na dodir, počinje se spuštati vrh ploda, pokazuje kapljicu meda.
    Brati pažljivo i konzumirati odmah (traju 1–2 dana).

- activityType: "harvest"
  title: "Berba glavnog roda smokve"
  monthStart: 8
  dayStart: 15
  monthEnd: 10
  dayEnd: 15
  notes: >
    Glavni rod: kolovoz–listopad ovisno o sorti i klimi.
    Smokva dozrijeva postupno — brati samo zrele, ostavljati nedozrele.
    Test: plod mekan, koža počinje pucati, boja tamni.
    Brati pažljivo (osjetljiv plod) i konzumirati odmah ili sušiti.
    Ne ostavljati prezrele plodove na stablu — privlače ose i uzrokuju gnilobu.

---

### AUTUMN — inspection

- activityType: "inspection"
  title: "Pregled smokve za zimu"
  monthStart: 10
  dayStart: 15
  monthEnd: 11
  dayEnd: 30
  notes: >
    Ukloniti sve nezrele plodove koji neće sazrjeti — uzrok zaraze.
    Pregledati deblo i grane.
    Za kontinentalnu klimu (Zagreb): mlada stabla zaštititi agrotekstilom ili slamom oko debla.
    Smokva podnosi do -10°C u kratkim periodima, ali mlada stabla su osjetljivija.


---

---

# ══════════════════════════════════════════════════════
# CITRUS — SPECIAL MODEL
# Does NOT use standard orchard cycle.
# Does NOT use Early/Mid/Late timing.
# Uses seasonProfile instead.
# Shared block does NOT apply.
# ══════════════════════════════════════════════════════

## 🍋🍊🍊 CITRUS (Lemon / Orange / Mandarin)

### Model note
Citrus plan templates koriste poseban model (seasonProfile).
Nisu kompatibilni sa standardnim orchard ciklusom.
V1 implementacija: generičke upute po sezoni bez strogog datumskog rasporeda.

### Data model (from PLANT_CATALOG_V1)

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

---

### 🍋 LEMON (Citrus limon) — seasonProfile: multi_cycle

Limun cvate i rodi gotovo kontinuirano (3–4 ciklusa godišnje).
Nema jednog berbalnog prozora — plodovi su prisutni cijelu godinu.

- activityType: "pruning"
  title: "Proljetna rezidba limuna"
  monthStart: 3
  dayStart: 1
  monthEnd: 3
  dayEnd: 31
  notes: >
    Ukloniti suhe grane i vodopije.
    Limun ne podnosi agresivnu rezidbu — samo korekcijska rezidba.
    Rezati IZMEĐU cvatnji da se ne izgubi rod.

- activityType: "spraying"
  title: "Zaštita od štetnika – limun"
  monthStart: 4
  dayStart: 1
  monthEnd: 5
  dayEnd: 31
  conditionBased: true
  notes: >
    Štitaste uši i lisne uši česti problem na limunu u zatvorenom/zaštićenom uzgoju.
    Bijelo ulje pri pojavi (ne preventivno).
    Na otvorenom u kontinentalnoj klimi: rijedak problem.

- activityType: "watering"
  title: "Navodnjavanje limuna"
  monthStart: 4
  dayStart: 1
  monthEnd: 9
  dayEnd: 30
  notes: >
    Redovito navodnjavanje — limun ne podnosi ni sušu ni prekomjernu vlagu.
    Koristiti vodu bez vapna ako je moguće.
    Lončani uzgoj: provjeriti vlagu tla svaki dan ljeti.

- activityType: "harvest"
  title: "Berba limuna (kontinuirana)"
  monthStart: 1
  dayStart: 1
  monthEnd: 12
  dayEnd: 31
  notes: >
    Limun rodi kontinuirano — brati prema zrelosti pojedinačnih plodova.
    Test: plod dostigao punu veličinu i boju (žuta ili zeleno-žuta ovisno o klimi).
    Brati s peteljkom i listićem za dulje trajanje.

- activityType: "inspection"
  title: "Pregled limuna za zimu"
  monthStart: 10
  dayStart: 1
  monthEnd: 11
  dayEnd: 15
  notes: >
    Limun nije otporan na mraz — ispod -3°C oštećenje plodova, ispod -5°C grana.
    Za uzgoj u kontinentalnoj klimi: premjestiti u zaštićeni prostor (5–10°C).
    Pregledati na štetnika pred zimski smještaj.

---

### 🍊 ORANGE (Citrus sinensis) — seasonProfile: winter

Naranča cvate u proljeće, plodovi dozrijevaju zimi.
Manje otporna na mraz od mandarine.

- activityType: "pruning"
  title: "Proljetna rezidba naranče"
  monthStart: 3
  dayStart: 1
  monthEnd: 4
  dayEnd: 15
  notes: >
    Korekcijska rezidba — ukloniti suhe i bolesne grane.
    Naranča ne podnosi jaku rezidbu.
    Rezati NAKON cvatnje u proljeće.

- activityType: "watering"
  title: "Navodnjavanje naranče"
  monthStart: 4
  dayStart: 1
  monthEnd: 9
  dayEnd: 30
  notes: >
    Redovito navodnjavanje u vegetacijskom periodu.
    Smanjiti zimi — u mirovanju potrebe su manje.

- activityType: "spraying"
  title: "Zaštita od štetnika – naranča"
  monthStart: 4
  dayStart: 1
  monthEnd: 6
  dayEnd: 30
  conditionBased: true
  notes: >
    Štitaste uši i lisne uši — bijelo ulje pri pojavi.
    Na otvorenom u sjevernoj klimi: rijedak problem.

- activityType: "harvest"
  title: "Berba naranče"
  monthStart: 12
  dayStart: 1
  monthEnd: 2
  dayEnd: 28
  notes: >
    Naranča dozrijeva zimi — prosinac do veljača ovisno o sorti i klimi.
    Test: puna boja (narančasta), meka na pritisak.
    U kontinentalnoj klimi (Zagreb): uzgoj moguć jedino u loncima unutra zimi.
    Naranča može ostati na stablu tjednima nakon zrelosti bez kvarenja.

- activityType: "inspection"
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

Mandarina je najotpornija citrus vrsta na hladnoću (do -7°C kratkoročno).
Dozrijeva u jesen — rujan do studeni.

- activityType: "pruning"
  title: "Proljetna rezidba mandarine"
  monthStart: 3
  dayStart: 1
  monthEnd: 4
  dayEnd: 15
  notes: >
    Korekcijska rezidba — ukloniti suhe i prekrižene grane.
    Mandarina ne podnosi agresivnu rezidbu.

- activityType: "watering"
  title: "Navodnjavanje mandarine"
  monthStart: 4
  dayStart: 1
  monthEnd: 9
  dayEnd: 30
  notes: >
    Redovito navodnjavanje u vegetacijskom periodu.
    Zimi smanjiti.

- activityType: "spraying"
  title: "Zaštita od štetnika – mandarina"
  monthStart: 4
  dayStart: 1
  monthEnd: 6
  dayEnd: 30
  conditionBased: true
  notes: >
    Štitaste uši — bijelo ulje pri pojavi.
    Rijedak problem u kontinentalnoj klimi na otvorenom.

- activityType: "harvest"
  title: "Berba mandarine"
  monthStart: 9
  dayStart: 15
  monthEnd: 11
  dayEnd: 30
  notes: >
    Mandarina dozrijeva u jesen — rujan do studeni.
    Test: puna narančasta boja, lako se odvaja s peteljke.
    Može ostati na stablu 2–3 tjedna nakon zrelosti.
    Brati s peteljkom za dulje trajanje.

- activityType: "inspection"
  title: "Priprema mandarine za zimu"
  monthStart: 11
  dayStart: 1
  monthEnd: 11
  dayEnd: 30
  notes: >
    Mandarina je najhladnootpornija citrus vrsta — podnosi kratke mrazeve do -7°C.
    Za uzgoj u loncima: premjestiti unutra pri prvim mrazovima.
    Pregledati na štetnika pred zimski smještaj.

---

---

# ══════════════════════════════════════════════════════
# IMPLEMENTATION NOTES
# ══════════════════════════════════════════════════════

## Generation priority

1. `shared` block → apply to all standard fruit trees automatically
2. Per-species specific block → apply additionally
3. `youngTreeSkip: true` → engine skips for trees in year 1–2
4. `conditionBased: true` → display but mark as "only if condition met"

## Young tree logic (year 1–2)

Track planting year in plant model.
For year 1–2:
- Skip all `youngTreeSkip: true` activities
- Show label: "Preskočeno – mlado stablo"
- Pruning and watering: always apply
- Whitewash and copper: always apply

## Spray safety rules (enforce in engine)

- White oil and copper: NEVER on same day — min. 7–10 day gap
- Mospilan: NEVER during bloom or when bees are active
- Score + Mospilan: can be mixed in one pass (post-bloom only)
- Apricot copper: must be applied BEFORE bloom (January–February) — alert user
- Nectarine/Peach copper (leaf curl): must be applied while buds still closed — alert user
- Citrus: standard spray rules do NOT apply

## Mediterranean plants (olive, fig)

- Shared block does NOT fully apply — see per-species note at top of each section
- No white oil, no copper winter, no Score/Mospilan standard program
- Engine must check plant type before applying shared block

## Citrus

- Completely separate engine path
- Uses seasonProfile, not monthStart/monthEnd standard fields
- V1: display static guidance per subtype

---

# ══════════════════════════════════════════════════════
# COMPLETENESS VERIFICATION
# ══════════════════════════════════════════════════════

## All plant types from PLANT_CATALOG_V1 — coverage check

| Plant     | Whitewash | Oil | Cu-winter | Cu-leafcurl | Pruning | Cu-wounds | Traps | Spray | Thin | Net | Water | Sum-prune | Harvest | Stop-water | Inspect |
|-----------|-----------|-----|-----------|-------------|---------|-----------|-------|-------|------|-----|-------|-----------|---------|------------|---------|
| Apple     | SHARED    | SHARED | SHARED |  —        | SHARED  | SHARED    | ✓     | ✓     | ✓    | cond| SHARED| SHARED    | ✓       | SHARED     | SHARED  |
| Pear      | SHARED    | SHARED | SHARED |  —        | SHARED  | SHARED    | ✓     | ✓     | ✓    | cond| SHARED| SHARED    | ✓       | SHARED     | SHARED  |
| Cherry    | SHARED    | SHARED | SHARED |  —        | SHARED  | SHARED    | ✓     |  —    | opt  | ✓   | SHARED| SHARED    | ✓       | SHARED     | SHARED  |
| Nectarine | SHARED    | SHARED | SHARED |  ✓        | SHARED  | SHARED    | cond  | ✓     | ✓    | ✓   | SHARED| SHARED    | ✓       | SHARED     | SHARED  |
| Peach     | SHARED    | SHARED | SHARED |  ✓        | SHARED  | SHARED    | cond  | ✓     | ✓    | ✓   | SHARED| SHARED    | ✓       | SHARED     | SHARED  |
| Plum      | SHARED    | SHARED | SHARED |  —        | SHARED  | SHARED    | ✓     | ✓     | ✓    | ✓   | SHARED| SHARED    | ✓       | SHARED     | SHARED  |
| Apricot   | SHARED    | SHARED | SHARED+EARLY | —    | SHARED  | SHARED    | cond  | ✓     | ✓    | —   | SHARED| SHARED    | ✓       | SHARED     | SHARED  |
| Olive     |  —        |  —  |   —       |  —          | ✓       | ✓         | cond  |  cond |  —   |  —  |  —    | opt       | ✓       |  —         | ✓       |
| Fig       |  —        |  —  |   —       |  —          | ✓       | opt       |  cond |  —    |  —   |  —  | cond  | ✓         | ✓×2     |  —         | ✓       |
| Lemon     | n/a citrus|  —  |   —       |  —          | ✓       |  —        |  cond |  cond |  —   |  —  | ✓     |  —        | ✓       |  —         | ✓       |
| Orange    | n/a citrus|  —  |   —       |  —          | ✓       |  —        |  cond |  cond |  —   |  —  | ✓     |  —        | ✓       |  —         | ✓       |
| Mandarin  | n/a citrus|  —  |   —       |  —          | ✓       |  —        |  cond |  cond |  —   |  —  | ✓     |  —        | ✓       |  —         | ✓       |

Legend: SHARED = covered in shared block | ✓ = defined in species block | cond = conditionBased | opt = optional | — = not applicable

## All 10 plant types confirmed present: ✓
Apple ✓ | Pear ✓ | Cherry ✓ | Nectarine ✓ | Peach ✓ | Plum ✓ | Apricot ✓ | Olive ✓ | Fig ✓ | Citrus (Lemon ✓ Orange ✓ Mandarin ✓)

---

# END OF FILE