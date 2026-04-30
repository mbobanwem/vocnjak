# POLISH BACKLOG

Small UX / UI / copy issues.
Do NOT implement individually.
Resolve only in batch sessions.

---

## RULE

If it's not blocking usage → it goes here.
If an item affects data model, execution logic, validation, or plan matching → it does NOT belong here.
---

## PLANTS

- Tabs show only 2 letters (e.g. "Fu") → improve readability
- Plant detail for new plants has no emoji / subtitle → add fallback

---

## ACTIVITIES

- Toast messages inconsistent (❌ vs text)
- Empty state copy can be improved

---

## GENERAL

- Minor spacing inconsistencies
- Copy tweaks (HR text improvements)

## Sync / Settings / Data Utility redesign

Current `Sync / Sinkroniziraj` is a temporary mixed utility/data-management screen, not a long-term core orchard surface. It currently mixes Claude export/import, legacy JSON backup/download/import, v4 JSON export/import, iCal/GitHub reminder sync, Supabase cloud backup/restore, GitHub token/repo setup, Supabase URL / anon key / SQL setup / user key, and usage instructions.

Long-term direction: move `Sync` out of primary bottom navigation. Recommended future core nav:

```text
Pregled | Kalendar | Dodaj | Dnevnik | Biljke
```

Settings/data utilities should move under future `Postavke` or an equivalent secondary settings entry:

```text
Postavke
├─ Moj profil
├─ Voćnjak
├─ Podaci i sigurnost
├─ Podaci za Claude
├─ Integracije
└─ Napredno
```

Current function mapping:

- `Izvezi dnevnik` / `Kopiraj dnevnik u clipboard` → `Podaci za Claude`
- `Uvezi dnevnik` / Claude JSON import → `Podaci za Claude` or possible retirement
- legacy `Preuzmi backup` → `Podaci i sigurnost`
- `Sigurnosna kopija (v4)` export/import → `Podaci i sigurnost`
- `Cloud backup (Supabase)` backup/restore actions → `Podaci i sigurnost`
- Supabase URL / anon key / SQL / user key → `Napredno`
- `iCal sync` → `Integracije`
- GitHub repo/token setup → `Integracije` / `Napredno`
- `Kako koristiti` Claude instructions → `Podaci za Claude`, not generic help

Terminology conflicts: `Izvezi dnevnik`, `Kopiraj dnevnik u clipboard`, `Uvezi dnevnik`, and export heading `DNEVNIK VOCNJAKA` conflict with S6 terminology because `Dnevnik` is reserved for the chronological history surface for Activities and Observations. Preferred replacements: `Izvezi podatke za Claude`, `Kopiraj podatke za Claude`, `Uvezi podatke iz JSON-a`, `Uvezi podatke od Claudea`, `PODACI VOĆNJAKA`.

Future profile/settings fields are data-model decisions, not current implementation: user first name, user last name, email, app language, orchard name, editable city/region, editable weather location, preferred language/locale.

Security/privacy notes for future session: GitHub PAT should not be a normal visible UI field; Supabase URL/anon key/SQL setup belongs under advanced/admin setup; user key should not be shown in normal UI; clipboard export copies full app/orchard data and needs explicit disclosure; import/restore workflows need strong safety copy and backup behavior.

Out of scope now: no runtime change, no schema change, no Settings implementation, no bottom-nav runtime change. Revisit during a future Settings / Navigation / Polish session.

# 🟡 V2 Monitoring & UX Polish

## Monitoring / Plant detail

- Monitoring section prikazuje sve KPI kartice odmah nakon dodavanja biljke → djeluje preopterećeno i zbunjujuće  
- Nedostaje kontekst “što sada provjeriti” → korisnik ne zna odakle krenuti  
- Razmotriti prikaz samo relevantnih KPI-eva (sezonski / kontekstualno)

## Activity / Dnevnik

- Monitoring zapis se prikazuje kao raw value (`monitoring:aphids_none`) → nije user-friendly  
- Potrebno mapiranje na čitljiv tekst (npr. “Lisne uši: nema”)

## Legacy UI

- “Zadaci nisu dostupni u v4 modelu” blok je zastario i zbunjujući  
- Razmotriti uklanjanje ili zamjenu relevantnim sadržajem

## Add screen UX

- Monitoring input lista je duga i zahtijeva scroll → potencijalno naporno za korisnika  
- Razmotriti kompaktniji prikaz (grupiranje / kraći izbori)
