# VOCNJAK — V1 MIGRATION PLAN (APPROVED)

Status: LOCKED — ne mijenjati bez eksplicitnog odobrenja.

---

## Decisions

### 1. Plants structure
Plants je object keyed by id, ne array.  
Activities i plans su arrays.

Primjer strukture:
plants:
  plant_tresnja:
    id: plant_tresnja
  plant_jabuka:
    id: plant_jabuka

activities: []
plans: []

---

### 2. Plant fields V1

id: plant_tresnja  
name: Trešnja Kordia  
variety: Kordia  
rootstock: Gisela 5  
plantedDate: 2026-03-15  
status: forming  
legacyStatus: prati  
notes: ""

---

### 3. Activity fields V1

id: act_abc123  
type: spraying  
date: 2026-03-22  
status: done  
plantIds: [plant_tresnja, plant_jabuka]  
product: ""  
notes: Prskano bakrom (Cuprablau Z 35 WG) – zimski tretman.

Product je uvijek prazan u migraciji.  
Cijeli originalni tekst ostaje u notes.

ID format:
act_ + Date.now() + _ + Math.random().toString(36).slice(2,7)

---

### 4. Plan fields V1

id: plan_xyz789  
title: Bijelo ulje  
activityType: spraying  
appliesToAll: true  
plantIds: []  
monthStart: 2  
dayStart: 1  
monthEnd: 2  
dayEnd: 14  
skipYear: 2026  
notes: ""

appliesToAll: true za globalne planove  
plantIds ostaje prazan kad je appliesToAll true

---

### 5. Status mapping

dobro → forming  
prati → forming  
hitno → issue  
odradjeno → forming  

legacyStatus se uvijek čuva

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

vocnjak_v3  
vocnjak_v3_premigration  
vocnjak_v4  
vocnjak_user_key  
vocnjak_weather_cache  
vocnjak_alerts  

---

## Fazni plan — sesije za Code

### Sesija 1 — Migration only

Pročitaj sve .md fileove.

Napiši migrateV3toV4():
- ulaz: vocnjak_v3
- izlaz: plants, activities, plans

- napravi backup vocnjak_v3_premigration
- validiraj:
  plants je object
  activities array
  plans array

Ako fail → NE spremati vocnjak_v4  
Ako success → spremi vocnjak_v4  

Ne dirati UI.

Commitaj i pushaj.

---

### Sesija 2 — Dashboard

Pročitaj sve .md fileove.

renderOverview:
- broj biljki
- planovi ovaj mjesec
- aktivnosti ovaj tjedan

Bez weather i alertova.

Commitaj i pushaj.

---

### Sesija 3 — Plant detail

Pročitaj sve .md fileove.

renderPlantScreen:
- plant iz plants
- activities filtrirane po plantId
- sortiraj desc
- status badge

Bez add forme.

Commitaj i pushaj.

---

### Sesija 4 — Add Activity

Pročitaj sve .md fileove.

Form:
- type
- plants multi-select
- date
- product
- notes

Spremi activity:
id  
type  
date  
status: done  
plantIds  
product  
notes  

Bez novih typeova.

Commitaj i pushaj.

---

### Sesija 5 — Kalendar

Pročitaj sve .md fileove.

Calendar:
- plans → planned (žuta)
- activities done → zelena

Ne uvoditi skipped.

Commitaj i pushaj.

---

### Sesija 6 — Weather

Pročitaj sve .md fileove.

- koristi plans za spraying window
- koristi cache
- prikaz samo ako postoji aktivan plan

Commitaj i pushaj.

---

### Sesija 7 — Export/Import

Pročitaj sve .md fileove.

- export vocnjak_v4
- import validacija

Commitaj i pushaj.

---

### Sesija 8 — Supabase

Pročitaj sve .md fileove.

- backup vocnjak_v4
- restore
- upsert user_key

Commitaj i pushaj.

---

### Sesija 9 — Plan matching + state derivation

Pročitaj sve .md fileove.

READ-ONLY logika:

Matching:
- activity.type == plan.activityType
- plantIds match ili appliesToAll
- date unutar windowa ±7 dana

Date pravila:
- koristiti samo YYYY-MM-DD
- ignorirati time
- window je inclusive

State:
- upcoming
- active
- done
- missed

Ne uvoditi skipped  
Ne spremati ništa u storage  

Commitaj i pushaj.

---

## Usable milestone

Sesije 1–4:
- migration
- dashboard
- plant view
- add activity

---

## Što nije u V1

- products
- zones
- AI
- multilanguage
- alerts