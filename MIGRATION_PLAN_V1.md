# VOCNJAK — V1 MIGRATION PLAN (APPROVED)

Status: LOCKED — ne mijenjati bez eksplicitnog odobrenja.

---

## Decisions

### 1. Plants structure
Plants je object keyed by id (ne array).  
Activities i plans su arrays.

Struktura:
- plants: { [plantId]: plant }
- activities: []
- plans: []

---

### 2. Plant fields V1

Obavezna polja:
- id
- name
- variety
- rootstock
- plantedDate
- status (forming | issue)
- legacyStatus (originalni status iz v3)
- notes

Pravilo:
- legacyStatus se uvijek čuva (ne briše se)

---

### 3. Activity fields V1

Obavezna polja:
- id
- type (spraying, pruning, fertilizing, watering, planting, harvest, observation, problem)
- date (YYYY-MM-DD)
- status ("done" — only allowed value in V1)
- plantIds (array)
- product (string, optional)
- notes (string, original tekst)

Pravila:
- status je uvijek "done" za sve kreirane aktivnosti
- product je uvijek prazan u migraciji
- cijeli originalni tekst ide u notes
- ne uvoditi nove type-ove izvan definiranog V1 seta

ID format:
act_ + Date.now() + _ + Math.random().toString(36).slice(2,7)

---

### 4. Plan fields V1

Obavezna polja:
- id
- title
- activityType (mora odgovarati activity.type)
- appliesToAll (boolean)
- plantIds (array)
- monthStart
- dayStart
- monthEnd
- dayEnd
- skipYear (optional)
- notes

Pravila:
- ako appliesToAll = true → plantIds ostaje []
- render logika: appliesToAll ili plantIds.includes(plantId)

ID format:
plan_ + Date.now() + _ + Math.random().toString(36).slice(2,7)

---

### 5. Status mapping

dobro → forming  
prati → forming  
hitno → issue  
odradjeno → forming  

Pravila:
- sumnja → forming
- issue koristiti samo za hitno
- legacyStatus čuva original

---

### 6. Type mapping

prskanje → spraying  
rezidba → pruning  
sadnja → planting  
berba → harvest  
navodnjavanje → watering  
gnojidba → fertilizing  
bilješka → observation  
odrađeno → observation  
tretman → spraying  
analiza → observation  

---

### 7. Storage keys

vocnjak_v3 (stari model — ne dirati)  
vocnjak_v3_premigration (backup prije migracije)  
vocnjak_v4 (novi model)  
vocnjak_user_key  
vocnjak_weather_cache  
vocnjak_alerts  

---

## Fazni plan — sesije za Code

### Sesija 1 — Migration only

Pročitaj sve .md fileove.

Napiši migrateV3toV4():

Ulaz:
- localStorage.vocnjak_v3

Izlaz:
- { plants: {}, activities: [], plans: [] }

Koraci:
1. Spremi backup:
   vocnjak_v3 → vocnjak_v3_premigration

2. Migracija:
- plants:
  - pretvori u object keyed by "plant_" + stari key
- entries → activities:
  - mapiraj type (prema Type mapping)
  - product = ""
  - notes = original tekst
  - status = "done"
- todos → plans:
  - monthStart/dayStart logika
  - appliesToAll ako je bilo "za sve"

3. Status mapping:
- mapirati prema pravilima
- legacyStatus spremiti original

4. Validacija:
- plants je object i nije prazan
- activities je array
- plans je array

5. Ako validacija NE prođe:
- NE spremati vocnjak_v4
- NE dirati vocnjak_v3
- console.error("Migration failed")

6. Ako validacija prođe:
- spremi vocnjak_v4
- console.log("Migrirano: X plants, Y activities, Z plans")

Pravila:
- ne dirati UI
- ne brisati vocnjak_v3

Commitaj i pushaj.

---

### Sesija 2 — Dashboard

Pročitaj sve .md fileove.

Adaptiraj renderOverview():

Prikaz:
1. broj biljki → Object.keys(plants).length  
2. broj planova ovaj mjesec  
3. broj aktivnosti ovaj tjedan  

Pravila:
- bez weather widgeta
- bez alertova
- bez dodatne logike

Commitaj i pushaj.

---

### Sesija 3 — Plant detail

Pročitaj sve .md fileove.

Adaptiraj renderPlantScreen():

- plant iz plants[plantId]
- activities filtrirane po plantId
- sortirati po datumu (najnovije prvo)
- status badge iz plant.status

Bez add activity forme.

Commitaj i pushaj.

---

### Sesija 4 — Add Activity

Pročitaj sve .md fileove.

Form:
- type (spraying, pruning, fertilizing, watering, planting, harvest, observation, problem)
- multi-select biljke
- date (default danas)
- product (optional)
- notes (optional)

Spremi activity:
- id (prema formatu)
- type
- date
- status: done
- plantIds
- product
- notes

Pravila:
- ne koristiti externe biblioteke
- ne uvoditi nove type-ove izvan definiranog V1 seta

Commitaj i pushaj.

---

### Sesija 5 — Kalendar

Pročitaj sve .md fileove.

Adaptiraj Calendar:

- plans → planned (žuta točka)
- activities status done → zelena točka

Pravila:
- ne uvoditi "skipped"
- ne spremati ništa novo u model

Commitaj i pushaj.

---

### Sesija 6 — Weather widget

Pročitaj sve .md fileove.

- koristiti plans[] za spraying window
- uzeti samo aktivne planove (window)
- koristiti cache (vocnjak_weather_cache)
- prikazati samo ako postoji aktivan spray plan

Commitaj i pushaj.

---

### Sesija 7 — Export / Import JSON

Pročitaj sve .md fileove.

Export:
- kopirati vocnjak_v4 JSON

Import:
- validirati:
  plants (object)
  activities (array)
  plans (array)
- spremiti kao vocnjak_v4

Dodati:
- "zadnji export" timestamp

Commitaj i pushaj.

---

### Sesija 8 — Supabase backup

Pročitaj sve .md fileove.

- backup vocnjak_v4 JSON
- restore vocnjak_v4 JSON
- upsert po user_key
- prikaz "zadnji backup" timestamp

Commitaj i pushaj.

---

### Sesija 9 — Plan matching + state derivation

Pročitaj sve .md fileove.

Implementirati READ-ONLY logiku za UI.

Matching:
- activity.type == plan.activityType
- activity.plantIds uključuje plantId ili appliesToAll
- activity.date unutar plan windowa ±7 dana

Date pravila:
- koristiti samo YYYY-MM-DD
- ignorirati time component
- window je inclusive

State (derived):
- upcoming → prije starta windowa
- active → unutar windowa
- done → postoji matching activity
- missed → prošao window + tolerancija bez activity

Pravila:
- ne uvoditi "skipped"
- ne spremati ništa u storage
- koristiti samo za UI

Commitaj i pushaj.

---

## Usable milestone

Nakon sesija 1–4 aplikacija je usable:
- migration sigurna
- dashboard radi
- plant detail radi
- može se dodati activity

Sesije 5–9 su dodatne (non-blocking).

---

## Što nije u V1

- products[] kao entitet  
- zones[]  
- gardens[]  
- AI analiza  
- multilanguage  
- App Store  
- urgent logika  
- push notifikacije  
