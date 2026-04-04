# VOCNJAK — V1 MIGRATION PLAN (APPROVED)

**Status: LOCKED — ne mijenjati bez eksplicitnog odobrenja.**

---

## Decisions

### 1. Plants structure
Plants je **object keyed by id**, ne array.
Activities i plans su **arrays**.

```json
{
  "plants": {
    "plant_tresnja": { "id": "plant_tresnja", ... },
    "plant_jabuka":  { "id": "plant_jabuka",  ... }
  },
  "activities": [ ... ],
  "plans":      [ ... ]
}
```

---

### 2. Plant fields V1
```json
{
  "id": "plant_tresnja",
  "name": "Trešnja Kordia",
  "variety": "Kordia",
  "rootstock": "Gisela 5",
  "plantedDate": "2026-03-15",
  "status": "forming",
  "legacyStatus": "prati",
  "notes": ""
}
```

---

### 3. Activity fields V1
```json
{
  "id": "act_abc123",
  "type": "spraying",
  "date": "2026-03-22",
  "status": "done",
  "plantIds": ["plant_tresnja", "plant_jabuka"],
  "product": "",
  "notes": "Prskano bakrom (Cuprablau Z 35 WG) – zimski tretman."
}
```

Product je uvijek prazan u migraciji.
Cijeli originalni tekst ostaje u notes.

ID format: jednostavni generirani string bez externe biblioteke.
Primjer: `"act_" + Date.now() + "_" + Math.random().toString(36).slice(2,7)`

---

### 4. Plan fields V1
```json
{
  "id": "plan_xyz789",
  "title": "Bijelo ulje",
  "activityType": "spraying",
  "appliesToAll": true,
  "plantIds": [],
  "monthStart": 2,
  "dayStart": 1,
  "monthEnd": 2,
  "dayEnd": 14,
  "skipYear": 2026,
  "notes": ""
}
```

`appliesToAll: true` za globalne planove.
`plantIds: []` ostaje prazan kad je appliesToAll true.
Render logika: `plan.appliesToAll || plan.plantIds.includes(plantId)`

---

### 5. Status mapping

| Stari status | Novi status | legacyStatus |
|-------------|-------------|--------------|
| dobro | forming | dobro |
| prati | forming | prati |
| hitno | issue | hitno |
| odradjeno | forming | odradjeno |

Pravilo: sumnja → forming. Issue samo za hitno.
legacyStatus se čuva zauvijek.

---

### 6. Type mapping

| Stari tip | Novi tip |
|-----------|----------|
| prskanje | spraying |
| rezidba | pruning |
| sadnja | planting |
| berba | harvest |
| navodnjavanje | watering |
| gnojidba | fertilizing |
| bilješka | observation |
| odrađeno | observation |
| tretman | spraying |
| analiza | observation |

---

### 7. Storage keys

| Key | Sadržaj |
|-----|---------|
| vocnjak_v3 | stari model (ne brisati) |
| vocnjak_v3_premigration | kopija original prije migracije |
| vocnjak_v4 | novi model |
| vocnjak_user_key | UUID korisnika |
| vocnjak_weather_cache | cached prognoza |
| vocnjak_alerts | dismissed alertovi |

---

## Fazni plan — sesije za Code

### Sesija 1 — Migration only
```
Pročitaj sve .md fileove.

Napiši migrateV3toV4() funkciju:
- Ulaz: localStorage vocnjak_v3
- Izlaz: {plants: {}, activities: [], plans: []}
- Spremi original kao vocnjak_v3_premigration PRIJE migracije
- Pokreni migraciju
- Validiraj rezultat:
  * plants je object i nije prazan
  * activities je array
  * plans je array
- AKO validacija prođe: spremi kao vocnjak_v4
- AKO validacija ne prođe:
  * NE diruj vocnjak_v3
  * NE spremi vocnjak_v4
  * console.error("Migration failed: [razlog]")
  * App nastavlja raditi na starom modelu
- Console.log uspjeha: "Migrirano: X plants, Y activities, Z plans"

ID format za nove objekte:
  "act_" + Date.now() + "_" + Math.random().toString(36).slice(2,7)
  "plan_" + Date.now() + "_" + Math.random().toString(36).slice(2,7)

Pravila migracije:
- plants: object keyed by "plant_" + stari key
- entries → activities, type mapiran, product prazan, notes = original
- todos s monthStart → plans, appliesToAll ako je bio za "sve"
- status mapping konzervativno, legacyStatus čuva original
- Ne diraj UI
- Ne briši vocnjak_v3

Commitaj i pushaj.
```

---

### Sesija 2 — Dashboard
```
Pročitaj sve .md fileove.

Adaptiraj renderOverview() na vocnjak_v4 model.

Stat kartice — prikaži točno ovo, ništa više:
1. broj biljki (Object.keys(plants).length)
2. broj planova ovaj mjesec (plans filtered by current month)
3. broj aktivnosti ovaj tjedan (activities filtered by this week)

Ne dodavaj "hitno" logiku ako ne postoji jasno u modelu.
Bez weather widget za sada (sakrij).
Bez alertova za sada (sakrij).

Commitaj i pushaj.
```

---

### Sesija 3 — Plant detail
```
Pročitaj sve .md fileove.

Adaptiraj renderPlantScreen() na vocnjak_v4 model:
- prikaži plant info iz plants[plantId]
- prikaži aktivnosti iz activities[] gdje plantIds.includes(plantId)
- sortiraj po datumu, najnovije prvo
- status badge na temelju plant.status
- bez add activity forme za sada

Commitaj i pushaj.
```

---

### Sesija 4 — Add Activity
```
Pročitaj sve .md fileove.

Napravi Add Activity flow:
1. odaberi tip (spraying, pruning, fertilizing,
   watering, planting, harvest, observation, problem)
2. multi-select biljke (checkbox lista svih plants)
3. datum (default danas)
4. product (text field, optional)
5. notes (optional)
6. spremi activity:
   {
     id: "act_" + Date.now() + "_" + Math.random().toString(36).slice(2,7),
     type, date, status: "done",
     plantIds: odabrani,
     product, notes
   }

Ne koristiti externe biblioteke za ID generaciju.

Commitaj i pushaj.
```

---

### Sesija 5 — Kalendar
```
Pročitaj sve .md fileove.

Adaptiraj Calendar screen na vocnjak_v4:
- plans prikazati kao "planned" (žuta točka)
- activities sa status "done" prikazati kao "done" (zelena točka)
- activities sa status "skipped" prikazati kao "skipped" (siva točka)
  (prikaži skipped vizualno čak i ako add flow ne može još kreirati skipped)

Commitaj i pushaj.
```

---

### Sesija 6 — Weather widget
```
Pročitaj sve .md fileove.

Restore weather widget na novi model:
- spray window logika gleda plans[] za spraying
  s aktivnim monthStart/monthEnd prozorom
- cache u vocnjak_weather_cache
- prikaži samo ako postoji aktivan spray plan

Commitaj i pushaj.
```

---

### Sesija 7 — Export/Import JSON
```
Pročitaj sve .md fileove.

Restore Sync ekran na novi model:
- Export: kopira vocnjak_v4 JSON
- Import: validiraj plants/activities/plans, spremi kao vocnjak_v4
- "Zadnji export" timestamp

Commitaj i pushaj.
```

---

### Sesija 8 — Supabase backup
```
Pročitaj sve .md fileove.

Restore Supabase sync na novi model:
- backup/restore vocnjak_v4 JSON
- upsert po user_key
- "Zadnji backup" timestamp u UI

Commitaj i pushaj.
```

---

### Sesija 9 — iCal sync
```
Pročitaj sve .md fileove.

Restore iCal sync na novi model:
- kad activity dobije status "done",
  nađi odgovarajući plan u plans[]
  i ažuriraj .ics na GitHubu

Commitaj i pushaj.
```

---

## Usable milestone

App je usable nakon sesija 1–4:
- Podaci nisu izgubljeni (rollback ako migracija padne)
- Dashboard prikazuje biljke, planove, aktivnosti
- Plant detail prikazuje povijest
- Možeš dodati aktivnost za više biljaka

Sesije 5–9 su restore, ne blocking za korištenje.

---

## Što nije u V1

- products[] kao entitet
- zones[]
- gardens[]
- AI photo analiza
- Multilanguage
- App Store
- "hitno" logika (osim legacyStatus)
- Urgent notifications
