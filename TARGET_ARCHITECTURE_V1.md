# TARGET ARCHITECTURE V1

## Overview
Vocnjak uses a dual-storage model during migration:
- vocnjak_v3: legacy per-plant note-based model (read-only after migration)
- vocnjak_v4: new structured model with global activities

---

## vocnjak_v4 structure

```json
{
  "plants": {
    "plant_tresnja": {
      "id": "plant_tresnja",
      "name": "Trešnja Kordia",
      "type": "voćka",
      "variety": "Kordia",
      "rootstock": "Gisela 5",
      "plantedAt": "2026-03-01",
      "location": "Donji vrt",
      "notes": "",
      "legacyStatus": "prati"
    }
  },
  "activities": [
    {
      "id": "act_1711234567890_x7k2m",
      "type": "spraying",
      "date": "2026-03-22",
      "status": "done",
      "plantIds": ["plant_tresnja", "plant_jabuka"],
      "product": "",
      "notes": "Cuprablau Z 35 WG"
    }
  ],
  "plans": [
    {
      "id": "plan_1",
      "plantId": "plant_tresnja",
      "type": "spraying",
      "notes": "Bijelo mineralno ulje",
      "monthStart": 2
    }
  ]
}
```

---

## Plant keys

All plant IDs in v4 use "plant_" prefix:
- plant_tresnja
- plant_nektarina
- plant_jabuka
- plant_sljiva
- plant_magnolija
- plant_japtresnja
- plant_lagerstroemia
- plant_photinia
- plant_smreka
- plant_pampas

---

## Activity types (allowed values)

- spraying
- pruning
- fertilizing
- watering
- planting
- harvest
- observation
- problem

---

## Activity.status (allowed values)

- planned
- done
- skipped

---

## Key rules

- Activity.plantIds[] is an array — one activity can reference multiple plants
- Activities are global, not nested under plants
- Plans are migrated from todos that have monthStart
- vocnjak_v3 is never overwritten — backup saved to vocnjak_v3_premigration
- vocnjak_v4 code paths never call saveData() (which writes to v3)

---

## Storage keys

| Key | Purpose |
|-----|---------|
| vocnjak_v3 | Legacy data (read by old code paths) |
| vocnjak_v3_premigration | Backup before migration |
| vocnjak_v4 | New structured data |
| vocnjak_user_key | Encryption + Supabase user ID |
| vocnjak_last_sync | Last Supabase backup timestamp |
