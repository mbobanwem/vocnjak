# V2 ORCHARD PLAN TEMPLATES — DOMAIN INPUT (pre-S3)

## Status
Input-only material for S3 audit. NOT authoritative V2 truth. Agronomic content (species work entries, timing windows, product references, notes) is preserved as-is; V1 runtime / plan-schema / generation framing has been removed. Promotion to V2 spec requires S3–S5 audit and owner sign-off.

---

## Purpose

This file defines **predefined orchard work** per plant species. It captures:
- what orchard work should happen during the year
- the agronomic context for each action, kept in `notes`

It is not a runtime specification and does not define plan persistence, schema, or generation behavior.

---

## Template entry shape (domain note)

Each template entry is described with:

- `activityType` — legacy pre-audit category tag (see "Activity categories" below)
- `title` — short human-readable label
- `monthStart`, `dayStart`, `monthEnd`, `dayEnd` — calendar window (1-indexed months)
- `notes` — agronomic context, warnings, product references, young-tree relevance, condition-based execution guidance
- `appliesToAll` — when `true`, marks shared-block entries that apply to all pome + stone species

Young-tree relevance and condition-based execution live inside `notes`, not as custom fields.

---

## Supported Plant Types

Defined in V2_PLANT_CATALOG.md:

**Pome:** apple, pear, quince

**Stone:** sweet_cherry, sour_cherry, plum, peach, nectarine, apricot, almond

**Mediterranean:** olive, fig, pomegranate (pomegranate's template is structurally independent of olive and fig — see Block 6)

**Citrus:** lemon, orange, mandarin (subtype handling inside Block 6)

**Nut:** walnut, hazelnut

Group is an organizing classification used for user selection, organization, shared-template discovery, and identifying baseline actions where genuinely applicable. Group membership does not determine a species' full work plan — the species-specific template block is authoritative where it diverges.

---

## Template interpretation (domain note)

Young-tree relevance (year 1–2, no fruit yet) and condition-based execution (e.g. insecticide only after trap threshold, second copper only in wet spring, bird net only if pressure observed) are described inside `notes` per entry. This file does not encode them as custom fields, and does not specify how or when they are surfaced to the grower. Variety-specific timing lives in V2_PLANT_CATALOG.md, not here.

---

## Activity categories

Each entry carries an `activityType` tag drawn from the following pre-audit category set:

- `spraying` — spray treatments
- `pruning` — pruning and pinching
- `fertilizing` — fertilization
- `watering` — irrigation activities
- `planting` — planting operations
- `harvest` — harvest activities
- `observation` — whitewash, thinning, netting, inspection, shutdown reminders
- `problem` — visible pest or disease incidents
- `monitoring` — trap placement, scouting, visual checks

The `activityType` values in this file are **legacy pre-audit source metadata**. The final V2 mapping (including whether these categories survive as-is, get renamed, or get replaced) is decided by the S3–S5 audit.

**Monitoring entries require special audit.** Entries tagged `monitoring` capture observation cadence, target pests/diseases, and human decision context. They must NOT be treated as direct V2 action-windows; their shape in the V2 model (standalone monitoring program, trigger-only action, or otherwise) is an open S3–S5 question.

The orchard meaning stays in `title` and `notes`; the category tag is a coarse grouping only.

---

## Spray Safety Notes

Agronomic interpretation only. Not schema fields.

- White oil and copper must NEVER be applied on the same day
- Minimum 7–10 days gap between white oil and copper application
- All spray activities assume: dry weather, no wind, temperature above 5°C
- Insecticide must not be applied during bloom or active bee flight
- Fungicide + insecticide tank-mix is not universally safe — follow each product label and local guidance; apply only post-bloom and outside active bee flight
- Apricot copper must be applied BEFORE bloom (January–February window)
- Nectarine and Peach copper for leaf curl must be applied while buds are still closed
- Citrus: standard EU fruit tree spray rules do not apply

---

---

# ══════════════════════════════════════════════════════
# SHARED BLOCK
# Common baseline for all standard fruit trees:
# apple, pear, plum, sweet_cherry, sour_cherry, peach, nectarine, apricot, quince, almond
#
# Mediterranean plants, citrus, and nut trees are handled separately.
# Do NOT apply this block to olive, fig, pomegranate, citrus, walnut, or hazelnut.
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
    Preporučeno posebno za mlada ili izložena stabla; primjenu prilagoditi stanju stabla i lokalnim uvjetima.

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
    Za mlada stabla: primijeniti samo ako je prikladno prema stanju stabla, fenofazi i etiketi proizvoda.

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
    Registrirani bakreni pripravak prema etiketi proizvoda: zaštita od raka kore, pjegavosti, monilije i srodnih bolesti.
    Primijeniti uz razmak od bijelog ulja najmanje 7–10 dana.
    Prskati po suhom vremenu.
    Za mlada stabla: primijeniti samo ako je prikladno prema stanju stabla, fenofazi i etiketi proizvoda.

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
    Veće rane zaštititi sredstvom za zaštitu rana, ako je prikladno, prema preporuci stručnjaka ili etiketi proizvoda (za rezove iznad 2 cm).
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
    Ako je primjena prikladna prema stanju rana, vremenu i etiketi proizvoda, razmotriti primjenu unutar 1–2 dana nakon rezidbe.
    Zaštita svježih reznih rana od prodora gljivica i bakterija.
    Registrirani bakreni pripravak prema etiketi proizvoda.
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
    Smanjiti ili završiti navodnjavanje kada vremenski uvjeti i stanje tla to dopuštaju; kod mladih stabala i suše ne prekidati prerano.
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
Berba: ovisno o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md.
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
    Koristiti registrirani fungicid za krastavost/pepelnicu prema etiketi proizvoda.
    Insekticid razmatrati samo ako monitoring, vidljivi štetnici ili stručni savjet opravdavaju reakciju.
    Ne tretirati tijekom cvatnje ni tijekom aktivnog leta pčela.
    Poštovati etiketu proizvoda, doziranje, karencu i lokalne propise.
    Ponavljanje tretmana razmatrati prema infekcijskom pritisku, oborinama, etiketi proizvoda i stručnom/lokalnom savjetu.
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
    Eventualni tretman registriranim insekticidom razmatrati samo ako vidljivi problem, lokalni pragovi ili stručni savjet opravdavaju reakciju.
    Koristiti samo sredstvo registrirano za kulturu i štetnika prema etiketi proizvoda, uz poštovanje karence, zaštite pčela i lokalnih propisa.
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
    Termin berbe ovisi o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md za harvestWindow.
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
Berba: ovisno o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md.
Harvest window examples: Williams / Santa Maria (aug), Conference / Bosc (aug–sep), Abate Fetel (sep–oct).
Posebna napomena: bakterijska palež (Erwinia amylovora) je bakterijska bolest bez kemijskog lijeka.
Preventiva bakrom oko cvatnje je ključna.

---

### 1. Bakar – zaštita od bakterijske paleži

- activityType: "spraying"
  title: "Bakar – preventivna zaštita od bakterijske paleži"
  monthStart: 3
  dayStart: 15
  monthEnd: 4
  dayEnd: 10
  notes: >
    Kruška ima visok rizik od bakterijske paleži (Erwinia amylovora); dunja također zahtijeva S3 provjeru.
    Primijeniti bakar preventivno oko cvatnje.
    Cvatnja kruške je ranije od jabuke — pratiti stanje pupova i prilagoditi termin.
    NE prskati direktno na otvorene cvjetove — oštećuje cvjetove i pčele.
    Registrirani bakreni pripravak prema etiketi proizvoda.
    Razmak od bijelog ulja: min. 7–10 dana.
    Ako se pojave simptomi bakterijske paleži (tamnosmeđe uvenule grane): postupanje uskladiti sa stručnim savjetom i lokalnim fitosanitarnim preporukama.

---

### 2. Praćenje štetnika

- activityType: "monitoring"
  title: "Praćenje kruškine buhe i savijača"
  monthStart: 4
  dayStart: 20
  monthEnd: 8
  dayEnd: 15
  notes: >
    Kruškina buha (Cacopsylla pyri): ličinke/nimfe na mladim izbojima i naličju listova, medna rosa, čađavica.
    Vizualni pregled mladih izbojaka i listova tjedno.
    Tretman razmatrati samo pri vidljivom problemu — koristiti registrirano sredstvo (npr. bijelo ulje ili registrirani insekticid) prema etiketi proizvoda.
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
    Zaštita od krastavosti kruške (Venturia pirina) i monilije.
    Primijeniti nakon cvatnje.
    Koristiti registrirani fungicid za krastavost kruške i moniliju prema etiketi proizvoda.
    Insekticid razmatrati samo ako monitoring, vidljivi štetnici ili stručni savjet opravdavaju reakciju.
    Ne tretirati tijekom cvatnje ni tijekom aktivnog leta pčela.
    Poštovati etiketu proizvoda, doziranje, karencu i lokalne propise.
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
    Termin berbe ovisi o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md za harvestWindow.
    KRITIČNO: brati PRIJE potpune konzumne zrelosti — kruška dozrijeva nakon berbe, ne na stablu.
    Test na stablu: plod se lako odvaja zakretanjem, ali još čvrst.
    Dozrijevanje nakon berbe: sobna temperatura 3–7 dana.
    NE čekati da omekša na stablu — bit će brašnasta i neukusna.
    Brati pažljivo — lako dobiva modrice.

---

## 🍒 SWEET CHERRY (Prunus avium)

### Agronomic context
Cvatnja (Zagreb baseline): kraj ožujka – poč. travnja.
Berba: ovisno o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md.
Harvest window examples: Burlat (jun 1–15), Kordia (jun 20 – jul 5), Regina / Sweetheart (jul 5–25).
Trešnjina muha (Rhagoletis cerasi): jedan od glavnih insektnih štetnika trešnje u EU klimi.
Trešnja je sklona pucanju plodova nakon kiše pred berbu; to ostaje S3 audit item odvojeno od mreže protiv ptica.
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
    Trešnjina muha (Rhagoletis cerasi) — jedan od najvažnijih štetnika trešnje u EU uvjetima.
    Postaviti 2–3 žute ljepljive ploče po stablu na visinu 1.5–2 m, u sjenu krošnje.
    Tjedno pregledavati:
    — nizak ulov → uobičajeno nastaviti praćenje, osim ako lokalni pragovi ili stručni savjet upućuju drukčije
    — nagli porast ulova može značiti da treba provjeriti potrebu za reakcijom; eventualni tretman razmatrati samo ako lokalni pragovi, etiketa proizvoda ili stručni savjet opravdavaju reakciju.
    Koristiti samo sredstvo registrirano za kulturu i štetnika prema etiketi proizvoda; poštovati karencu do berbe (ne tretirati ako je berba preblizu propisane karence), zaštitu pčela i lokalne propise.
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
    Kod slabobujnih podloga opterećenje rodom svejedno pratiti.
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
    Mreža je primarno zaštita od ptica; zaštita od pucanja plodova zbog kiše zahtijeva posebnu provjeru/rain-cover pristup i ostaje S3 audit item.
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
    Termin ovisi o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md za harvestWindow.
    Brati sa peteljkom — plod bez peteljke traje znatno kraće (max 1–2 dana).
    Brati po suhom vremenu, u hladnijem dijelu dana (jutro, večer).
    Test zrelosti: puna tamnocrvena boja, čvrstoća uz blag pritisak popušta.
    Ne brati mokre plodove — pucaju i brzo trunu.
    Čuvanje: 3–5 dana na 0–4°C.
    Ne ostavljati prezrele plodove na stablu — privlače ose, uzrokuju gnilobu.

---

## 🍒 SOUR CHERRY (Prunus cerasus)

### Agronomic context
Cvatnja (Zagreb baseline): kraj ožujka – poč. travnja (uglavnom nekoliko dana iza slatke trešnje).
Berba: ovisno o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md.
Harvest window examples: Oblačinska (jun 20 – jul 5), Marasca / Montmorency (jul).
Primjenjuje se shared block kao za ostale standardne voćke.

---

### 1. Praćenje trešnjine muhe

- activityType: "monitoring"
  title: "Praćenje trešnjine muhe – višnja"
  monthStart: 4
  dayStart: 25
  monthEnd: 7
  dayEnd: 10
  notes: >
    Ista vrsta kao kod slatke trešnje (Rhagoletis cerasi).
    Tlak kod višnje često je niži nego kod trešnje, ali ovisi o lokaciji, sorti i godini.
    Žute ljepljive ploče, tjedni pregled.
    Eventualni tretman razmatrati samo ako lokalni pragovi, etiketa proizvoda ili stručni savjet opravdavaju reakciju.
    Koristiti samo sredstvo registrirano za kulturu i štetnika prema etiketi proizvoda; poštovati karencu, zaštitu pčela i lokalne propise.

---

### 2. Mreža protiv ptica (opcionalno)

- activityType: "observation"
  title: "Mreža protiv ptica – višnja (opcionalno)"
  monthStart: 6
  dayStart: 15
  monthEnd: 7
  dayEnd: 20
  notes: >
    Tlak ptica kod višnje manji nego kod slatke trešnje.
    Mreža i dalje korisna za koncentrirane hobi-sadnje.
    Postaviti oko 2 tjedna prije berbe.
    Za mlada stabla bez uroda: nije potrebno.

---

### 3. Prorjeđivanje (po potrebi)

- activityType: "observation"
  title: "Prorjeđivanje višnje (po potrebi)"
  monthStart: 5
  dayStart: 15
  monthEnd: 6
  dayEnd: 1
  notes: >
    Višnja se uglavnom samoregulira.
    Zabilježeno za korisnike koji žele krupniji plod za preradu.
    Za mlada stabla bez uroda: nije potrebno.

---

### 4. Berba

- activityType: "harvest"
  title: "Berba višnje"
  monthStart: 6
  dayStart: 20
  monthEnd: 7
  dayEnd: 31
  notes: >
    Termin ovisi o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md za harvestWindow.
    Za preradu moguće ostaviti na stablu do veće slatkoće.
    Brati po suhom vremenu.
    Ne ostavljati prezrele plodove — privlače ose.

---

## 🍑 NECTARINE (Prunus persica var. nucipersica)

### Agronomic context
Cvatnja (Zagreb baseline): kraj ožujka – poč. travnja.
Berba: ovisno o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md.
Harvest window examples: Caldesi 2000 / Big Top (jul), Fantasia / Stark Redgold (aug), Venus (aug–sep).
POSEBNA NAPOMENA: Nektarina je iznimno osjetljiva na kovrčavost lista (Taphrina deformans).
Nakon pojave simptoma mogućnosti su ograničene — naglasak je na prevenciji bakrom dok su pupovi zatvoreni.
Propušteno prskanje u veljači/ožujku = visok rizik zaraze, posebno u vlažnom proljeću.

---

### 1. Bakar – kovrčavost lista (KRITIČNO)

- activityType: "spraying"
  title: "Bakar – kovrčavost lista (KRITIČNO – nektarina)"
  monthStart: 2
  dayStart: 10
  monthEnd: 3
  dayEnd: 5
  notes: >
    KRITIČNO ZA NEKTARINU — vrlo važan preventivni termin.
    Primijeniti dok su pupovi nektarine još zatvoreni ili tek počinju bubriti.
    Taphrina deformans: nakon pojave simptoma mogućnosti su ograničene; naglasak je na prevenciji.
    Registrirani bakreni pripravak prema etiketi proizvoda.
    U vlažnom proljeću drugi tretman razmotriti prema fenofazi, oborinama, etiketi proizvoda i stručnom/lokalnom savjetu.
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
    Lisne uši na nektarini mogu biti problem — razmotriti registrirani insekticid za kulturu i štetnika prema etiketi proizvoda, pri vidljivoj koloniji.
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
    Koristiti registrirani fungicid za moniliju (Monilinia laxa) prema etiketi proizvoda.
    Insekticid za breskvinog savijača razmatrati samo ako monitoring, vidljivi štetnici ili stručni savjet opravdavaju reakciju.
    Ne tretirati tijekom cvatnje ni tijekom aktivnog leta pčela — insekticidi su toksični za pčele.
    Poštovati etiketu proizvoda, doziranje, karencu i lokalne propise.
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
  dayEnd: 10
  notes: >
    Termin ovisi o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md za harvestWindow.
    VIŠE PROLAZA — plodovi ne dozrijevaju istovremeno (3–4 prolaza u ~3 tjedna).
    Test zrelosti: blago popuštanje pri pritisku oko peteljke, osnovna boja žuto-narančasta.
    NE brati prerano — prerano ubrani plodovi ne razvijaju punu aromu i šećer kao plodovi ubrani u odgovarajućoj zrelosti.
    Brati pažljivo — tanka kožica lako se oštećuje.
    Čuvati na 0–4°C do 2 tjedna.

---

## 🍑 PEACH (Prunus persica)

### Agronomic context
Cvatnja (Zagreb baseline): kraj ožujka – poč. travnja, nešto ranije od nektarine.
Berba: ovisno o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md.
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
    KRITIČNO ZA BRESKVU — identično kao kod nektarine, vrlo važan preventivni termin.
    Primijeniti dok su pupovi zatvoreni ili tek počinju bubriti.
    Taphrina deformans: nakon pojave simptoma mogućnosti su ograničene; naglasak je na prevenciji.
    Registrirani bakreni pripravak prema etiketi proizvoda.
    U vlažnom proljeću drugi tretman razmotriti prema fenofazi, oborinama, etiketi proizvoda i stručnom/lokalnom savjetu.
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
    Lisne uši: razmotriti registrirani insekticid za kulturu i štetnika prema etiketi proizvoda, pri vidljivoj koloniji.
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
    Nakon cvatnje.
    Koristiti registrirani fungicid za moniliju (Monilinia laxa) prema etiketi proizvoda.
    Insekticid za breskvinog savijača razmatrati samo ako monitoring, vidljivi štetnici ili stručni savjet opravdavaju reakciju.
    Ne tretirati tijekom cvatnje ni tijekom aktivnog leta pčela.
    Poštovati etiketu proizvoda, doziranje, karencu i lokalne propise.
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
  monthEnd: 9
  dayEnd: 5
  notes: >
    Termin ovisi o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md za harvestWindow.
    Više prolaza — plodovi ne dozrijevaju istovremeno.
    Test zrelosti: blago popuštanje pri pritisku, osnovna boja žuto-narančasta.
    Brati pažljivo — dlakava kožica nježnija nego što izgleda.
    Na sobnoj temperaturi dozrijeva 2–3 dana nakon berbe.
    Ne ostavljati prezrele plodove — privlače ose, uzrokuju moniliju.

---

## 🟠 APRICOT (Prunus armeniaca)

### ⚠️ Poseban slučaj — najranija cvatnja, najveći rizik od mraza

Marelica cvate NAJRANIJE — veljača do ožujak.
Temperature ispod približno -1°C tijekom cvatnje mogu ozbiljno oštetiti ili uništiti rod, ovisno o fenofazi, trajanju zahlađenja i lokalnim uvjetima. Nije bolest ni štetnik.
Lokacija sadnje je kritična: izbjegavati udoline i sjeverne strane.

### Agronomic context
Cvatnja (Zagreb baseline): VELJAČA – OŽUJAK (ovisno o sorti i godini).
Berba: ovisno o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md.
Harvest window examples: Novosadska rodna (jun 5–25), Goldrich / Kioto / Hargrand (jun–jul), Bergeron (jul 5–25).

*S3 audit item: verify this timing / pest / disease claim against regional sources before promotion.*

---

### 1. Bakar – PRIJE cvatnje (KRITIČNO)

- activityType: "spraying"
  title: "Bakar – zaštita PRIJE cvatnje (KRITIČNO – marelica)"
  monthStart: 1
  dayStart: 20
  monthEnd: 2
  dayEnd: 15
  notes: >
    KRITIČNO: marelica cvate u veljači/ožujku — bakar treba primijeniti PRIJE, ako je prikladno prema fenofazi i etiketi proizvoda.
    Prskati dok su pupovi još zatvoreni ili tek počinju bubriti.
    Registrirani bakreni pripravak prema etiketi proizvoda odnosi se na preventivnu zaštitu od relevantnih gljivičnih i bakterijskih bolesti, ne na liječenje virusnih bolesti.

    Šarka (Plum pox virus) nema kurativni tretman; lisne uši su vektori. Simptome šarke treba potvrditi stručnjak, a postupanje uskladiti s lokalnim fitosanitarnim preporukama.
    Ako se propusti ovaj termin, ne može se u potpunosti nadoknaditi; kasnije mjere ovise o stvarnom problemu, fenofazi i etiketi proizvoda.
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
    Temperature ispod približno -1°C tijekom cvatnje mogu ozbiljno oštetiti ili uništiti rod, ovisno o fenofazi, trajanju zahlađenja i lokalnim uvjetima.
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
    Smanjenje lisnih uši ne jamči zaštitu od šarke.
    Vizualni pregled: žuti prstenovi/mrlje na listovima = mogući simptom šarke.
    Ako se sumnja na šarku, simptome treba potvrditi stručnjak, a postupanje uskladiti s lokalnim fitosanitarnim preporukama.
    Razmotriti registrirani insekticid za kulturu i štetnika prema etiketi proizvoda pri vidljivoj koloniji lisnih uši (preventivna kontrola vektora šarke).
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
    Koristiti registrirani fungicid za moniliju (Monilinia laxa) prema etiketi proizvoda.
    Insekticid razmatrati samo ako monitoring, vidljivi štetnici ili stručni savjet opravdavaju reakciju.
    Ne tretirati tijekom cvatnje ni tijekom aktivnog leta pčela.
    Poštovati etiketu proizvoda, doziranje, karencu i lokalne propise.
    Nikad ne prskati otvorene cvjetove.
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
    Termin ovisi o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md za harvestWindow.
    Marelica dozrijeva brzo i neravnomjerno — 2–3 prolaza kroz ~2 tjedna.
    Test zrelosti: narančasta boja s crvenim rumenilom, blago popuštanje pri pritisku.
    Brati pažljivo — lako se oštećuje i brzo trune.
    Rok: 2–3 dana na sobnoj temperaturi, do 1 tjedan na 0–4°C.
    Ne ostavljati prezrele plodove — privlače ose, uzrokuju moniliju.
    Ako je rod manji od očekivanog → uzrok je vrlo često mraz za cvatnje.

---

## 🫐 PLUM (Prunus domestica)

### Agronomic context
Cvatnja (Zagreb baseline): kraj ožujka – poč. travnja.
Berba: ovisno o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md.
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
    Nagli porast ulova može značiti da treba provjeriti potrebu za reakcijom; eventualni tretman razmatrati samo ako lokalni pragovi, etiketa proizvoda ili stručni savjet opravdavaju reakciju.
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
    Nakon cvatnje.
    Koristiti registrirani fungicid za moniliju i pjegavost lista prema etiketi proizvoda.
    Insekticid za šljivinog savijača razmatrati samo ako monitoring, vidljivi štetnici ili stručni savjet opravdavaju reakciju.
    Ne tretirati tijekom cvatnje ni tijekom aktivnog leta pčela.
    Poštovati etiketu proizvoda, doziranje, karencu i lokalne propise.
    Za mlada stabla god. 1–2: nije obavezno.

---

### 3. Reakcija po potrebi – 2. generacija savijača

*S3 audit item: verify this timing / pest / disease claim against regional sources before promotion.*

- activityType: "spraying"
  title: "Reakcija po potrebi – 2. generacija šljivinog savijača"
  monthStart: 6
  dayStart: 15
  monthEnd: 7
  dayEnd: 10
  notes: >
    Registrirani insekticid za kulturu i štetnika prema etiketi proizvoda — razmatrati samo ako klopke pokažu jasan signal koji, u kombinaciji s lokalnim pragovima ili stručnim savjetom, opravdava reakciju.
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
    Termin ovisi o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md za harvestWindow.
    Brati u više navrata — ne dozrijeva sve odjednom.
    Test: plod omekšao, puna boja, lako se odvaja.
    Ne ostavljati prezrele plodove — privlače ose, uzrokuju moniliju.
    Za sušenje i pekmez: ostaviti dulje na stablu za veći udio šećera.

---

## 🍐 QUINCE (Cydonia oblonga)

### Agronomic context
Cvatnja (Zagreb baseline): kraj travnja – početak svibnja (kasnije od jabuke/kruške).
Berba: ovisno o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md.
Harvest window examples: Leskovačka / Vranjska (oct), Champion (oct – early nov).
Dunja pripada pome grupi; dijeli rizik bakterijske paleži (Erwinia amylovora) s kruškom.
Primjenjuje se shared block kao za ostale standardne voćke.

---

### 1. Bakar – pred cvatnju

- activityType: "spraying"
  title: "Bakar – pred cvatnju dunje"
  monthStart: 3
  dayStart: 20
  monthEnd: 4
  dayEnd: 15
  notes: >
    Preventivni bakar oko mirovanja pupa protiv bakterijske paleži (Erwinia amylovora).
    Koristiti registrirani bakreni pripravak prema etiketi proizvoda.
    Ne tretirati tijekom cvatnje ni tijekom aktivnog leta pčela.
    Razmak od dormant ulja: vidi preporuku na etiketi proizvoda.

---

### 2. Praćenje savijača i monilije

- activityType: "monitoring"
  title: "Praćenje savijača i monilije – dunja"
  monthStart: 4
  dayStart: 25
  monthEnd: 8
  dayEnd: 15
  notes: >
    Kruškin savijač (Cydia pyrivora), povremeno jabučni (C. pomonella).
    Monilija (Monilinia) na plodu u vlažnim sezonama.
    Tjedni vizualni pregled.
    Korisnik odlučuje o akciji na temelju opažanja.

---

### 3. Fungicid/insekticid post-cvatnja (po potrebi)

- activityType: "spraying"
  title: "Post-cvatnja zaštita – dunja (po potrebi)"
  monthStart: 5
  dayStart: 1
  monthEnd: 5
  dayEnd: 25
  notes: >
    Nakon cvatnje, po potrebi, ako praćenje, vidljivi štetnici ili stručni savjet opravdavaju reakciju.
    Koristiti registrirani fungicid za ciljanu bolest dunje prema etiketi proizvoda.
    Insekticid razmatrati samo ako monitoring, vidljivi štetnici dunje ili stručni savjet opravdavaju reakciju.
    Ne tretirati tijekom cvatnje ni tijekom aktivnog leta pčela.
    Poštovati etiketu proizvoda, doziranje, karencu i lokalne propise.

---

### 4. Berba

- activityType: "harvest"
  title: "Berba dunje"
  monthStart: 10
  dayStart: 1
  monthEnd: 11
  dayEnd: 10
  notes: >
    Termin ovisi o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md za harvestWindow.
    Dunja dozrijeva i nakon skidanja; čuvati hladno i suho 2–4 tjedna prije prerade.

---

## 🟤 ALMOND (Prunus dulcis)

### ⚠️ Poseban slučaj — iznimno rana cvatnja, najveći rizik od mraza u kontinentalnoj klimi

Badem cvate izrazito rano (veljača – ožujak, moguća slična dinamika kao marelica).
Mraz za cvatnje je primarni uzrok gubitka roda, ne bolest.
Lokacija sadnje je kritična: izbjegavati udoline.

### Agronomic context
Cvatnja (Zagreb baseline): VELJAČA – OŽUJAK (ovisno o sorti i godini).
Berba: ovisno o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md.
Harvest window examples: Supernova (aug–sep), Ferragnès / Ferraduel (sep).
Badem dijeli rizik Taphrina deformans (kovrčavost lista) s breskvom/nektarinom.
Primjenjuje se shared block kao za ostale standardne voćke.

---

### 1. Bakar – PRIJE cvatnje (KRITIČNO)

- activityType: "spraying"
  title: "Bakar – PRIJE cvatnje badema (KRITIČNO)"
  monthStart: 1
  dayStart: 25
  monthEnd: 2
  dayEnd: 20
  notes: >
    KRITIČNO za badem — cvate izrazito rano.
    Preventivni bakar je važan termin ako je prikladno prema fenofazi, vremenu i etiketi proizvoda.
    NIKAD na otvorenom cvatu.
    Razmak od bijelog ulja: vidi etiketu proizvoda.
    Ovo je DODATAK zimskom bakru iz shared bloka — primijeniti ranije, prilagođeno bademu.
    Ne duplicirati bakrene tretmane ako je isti fenološki prozor već pokriven; poštovati razmak, fenofazu i etiketu proizvoda.

---

### 2. Praćenje mraza tijekom cvatnje

- activityType: "monitoring"
  title: "Praćenje mraza za cvatnje badema"
  monthStart: 2
  dayStart: 1
  monthEnd: 3
  dayEnd: 31
  notes: >
    Mraz je primarni uzrok gubitka roda badema u kontinentalnom podneblju, ne bolest.
    Pratiti lokalnu prognozu.
    Aplikacija ne donosi odluke — korisnik bira zaštitu (agrotekstil, itd.).
    Loš rod badema je najčešće uzrokovan mrazom.

---

### 3. Bakar – kovrčavost lista

- activityType: "spraying"
  title: "Bakar – kovrčavost lista (badem)"
  monthStart: 2
  dayStart: 10
  monthEnd: 3
  dayEnd: 10
  notes: >
    Badem dijeli rizik Taphrina deformans s breskvom/nektarinom.
    Bakar dok su pupovi još zatvoreni.
    Nakon pojave simptoma mogućnosti su ograničene; naglasak je na prevenciji.
    Razmak od bijelog ulja: vidi etiketu.

---

### 4. Praćenje bolesti i štetnika

- activityType: "monitoring"
  title: "Praćenje bolesti i štetnika – badem"
  monthStart: 4
  dayStart: 15
  monthEnd: 8
  dayEnd: 15
  notes: >
    Vizualni pregled listova i plodova.
    Korisnik odlučuje o tretmanu na temelju opažanja.

---

### 5. Fungicid/insekticid post-cvatnja (po potrebi)

- activityType: "spraying"
  title: "Post-cvatnja zaštita – badem (po potrebi)"
  monthStart: 4
  dayStart: 10
  monthEnd: 5
  dayEnd: 10
  notes: >
    Nakon cvatnje, po potrebi, ako praćenje pokaže pritisak (monilija, lisne uši).
    NIKAD tijekom cvatnje.
    Tip proizvoda i karenca: vidi etiketu.

---

### 6. Berba

- activityType: "harvest"
  title: "Berba badema"
  monthStart: 8
  dayStart: 20
  monthEnd: 9
  dayEnd: 30
  notes: >
    Termin ovisi o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md za harvestWindow.
    Žetva kad kožuh prirodno puca; stresti stablo ili pustiti da padne na ceradu.
    Sušiti u ljusci 1–2 tjedna.

---

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
> Group (`pome`, `stone`, `mediterranean`, `citrus`, `nut`) is an **organizing classification**. It is used for:
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
> 2. the **species-specific template block** in this file;
> 3. **subtype-specific handling** where defined (currently: `citrus` species carry a `lemon` | `orange` | `mandarin` subtype used inside the Block 6 citrus template).
>
> **Species-specific override rule — species-specific template wins.** Where a species' per-species block introduces, modifies, or contradicts the shared baseline, the per-species block is authoritative for that species. Group membership never forces a species to follow a plan that does not match its own template.
>
> Concrete examples of divergence inside `stone`:
>
> - peach and nectarine carry leaf-curl (kovrčavost) copper;
> - apricot and almond carry pre-bloom copper + frost-risk handling (early bloomers);
> - sweet_cherry and sour_cherry carry cherry-fly monitoring and optional bird-net;
> - plum carries plum-specific pest and fruit handling;
> - pear (within `pome`) carries fire-blight / bakterijska palež copper.
>
> Within `mediterranean`, olive, fig, and pomegranate each have a distinct Block 6 template. Pomegranate's template is structurally independent of olive and fig. The `mediterranean` label organizes the three species together for navigation; it does not generate template content for any of them.
>
> **S3 items that remain open:**
>
> - agronomic validation of the six new species (variety timing, bloom windows, pest / disease notes);
> - `nut` group name — S3 may keep, rename (e.g. `tree_nut`), or split. Templates are independent of the chosen name;
> - pomegranate's final grouping — S3 may keep it under `mediterranean` as an organizing label or promote it to its own group. Pomegranate's template is already structurally independent, so this is a labeling decision, not a template-structure decision.
>
> Individual note entries below do NOT carry per-line audit markers — the entire block for these six species is subject to full S3 review.

---

# ══════════════════════════════════════════════════════
# BLOCK 6 — MEDITERRANEAN, NUT & CITRUS (Special Templates)
#
# These plants DO NOT use:
# — standard orchard cycle
# — early / mid / late timing groups
# — shared block from above
#
# Mediterranean (olive, fig, pomegranate), citrus (lemon, orange, mandarin),
# and nut (walnut, hazelnut) each have their own species-specific template set
# below. Pomegranate is grouped under mediterranean as an organizing label
# but has its own template structurally independent of olive and fig.
# Citrus uses a subtype (lemon | orange | mandarin) inside the citrus template.
# ══════════════════════════════════════════════════════

---

## 🫒 OLIVE (Olea europaea)

### Agronomic context
Zimzelena biljka — nema zimskog mirovanja kao listopadne voćke.
Otporna na sušu, osjetljiva na dugotrajne mrazeve ispod -7°C.
Standardni spray program (bijelo ulje, bakar, fungicidi i insekticidi uobičajeni za listopadne voćke) NE primjenjuje se.
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
    Veće rane premazati sredstvom za zaštitu rana, ako je prikladno, prema preporuci stručnjaka ili etiketi proizvoda (za rezove iznad 3 cm).

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
    Registrirani bakreni pripravak prema etiketi proizvoda.

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
    Pri jakom naletu: razmotriti registrirano sredstvo ili dopuštenu metodu zaštite prema etiketi proizvoda (uključujući organske opcije i registriranu barijernu ili repelentnu metodu, prema lokalnoj registraciji).
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
    Registrirano sredstvo ili dopuštena metoda zaštite prema etiketi proizvoda (uključujući organske opcije) ili registrirana barijerna/repelentna metoda kao fizička barijera.
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

## 🔴 POMEGRANATE (Punica granatum) — custom Block 6

### Agronomic context
Šipak je marginalan u kontinentalnoj EU klimi; u Samoboru / Zagrebu uspijeva kao veliki grm ili malo stablo s povremenom potrebom za zimskom zaštitom mladih stabala.

*S3 audit item: verify this timing / pest / disease claim against regional sources before promotion.*

Standardni spray program (bijelo ulje, zimski bakar, fungicidi i insekticidi uobičajeni za listopadne voćke) NE primjenjuje se.
Shared block NE primjenjuje se.
**Template-structure note:** Pomegranate is classified under `mediterranean` for organizing purposes. Its Block 6 template below is the full work plan for pomegranate and is structurally independent of olive and fig — the species-specific block is authoritative.

---

### 1. Zimska rezidba šipka

- activityType: "pruning"
  title: "Zimska rezidba šipka"
  monthStart: 2
  dayStart: 1
  monthEnd: 3
  dayEnd: 15
  notes: >
    Šipak raste kao veliki grm ili malo stablo.
    Ukloniti izdanke (osim kod obnove), suhe grane, unutarnje guste izbojke.
    Oblikovati za prodor sunca.
    Mlada stabla: samo lagano formiranje.

---

### 2. Gnojidba šipka (umjerena)

- activityType: "fertilizing"
  title: "Gnojidba šipka (umjerena)"
  monthStart: 3
  dayStart: 1
  monthEnd: 4
  dayEnd: 15
  notes: >
    Šipak je nezahtjevan.
    Previše dušika odgađa plodonošenje.
    Umjereno organsko ili mineralno gnojivo u proljeće; doziranje prema etiketi.

---

### 3. Praćenje štetnika

- activityType: "monitoring"
  title: "Praćenje štetnika – šipak"
  monthStart: 5
  dayStart: 1
  monthEnd: 8
  dayEnd: 31
  notes: >
    Šipak u kontinentalnom EU rijetko ima ozbiljne štetnike.
    Vizualni pregled za lisne uši na mladim izbojcima.
    Korisnik odlučuje o tretmanu na temelju vidljivog problema.

---

### 4. Praćenje pucanja ploda

- activityType: "monitoring"
  title: "Praćenje pucanja ploda – šipak"
  monthStart: 8
  dayStart: 1
  monthEnd: 10
  dayEnd: 15
  notes: >
    Nagla voda nakon suše uzrokuje puknuće ploda.
    Praćenje lokalnih uvjeta i stanja tla — savjetodavno; korisnik odlučuje o navodnjavanju.

---

### 5. Navodnjavanje šipka

- activityType: "watering"
  title: "Navodnjavanje šipka"
  monthStart: 6
  dayStart: 15
  monthEnd: 8
  dayEnd: 31
  notes: >
    Duboko zalijevanje dok se plod razvija.
    Mlada stabla: 20–30 L tjedno u suhim razdobljima.

---

### 6. Berba šipka

- activityType: "harvest"
  title: "Berba šipka"
  monthStart: 10
  dayStart: 1
  monthEnd: 11
  dayEnd: 15
  notes: >
    Termin: kad je plod potpuno obojen i pri kuckanju zvuči metalno.
    Rezati škarama; ne čupati.
    Čuvanje hladno i suho 1–2 mjeseca.

---

### 7. Zimska zaštita šipka (mlada stabla)

- activityType: "observation"
  title: "Zimska zaštita šipka (mlada stabla)"
  monthStart: 11
  dayStart: 15
  monthEnd: 12
  dayEnd: 31
  notes: >
    Šipak podnosi kratkotrajno -10°C; mlada stabla osjetljivija.
    Omotati deblo agrotekstilom ili slamom prve 2–3 godine u kontinentalnom podneblju.
    Uklanjanje zaštite u proljeće — kad prođe posljednja opasnost od mraza — obavit će se u sljedećoj sezoni.

---

---

# ══════════════════════════════════════════════════════
# BLOCK 6 — NUT TREES (Special Templates, `nut` group)
#
# walnut and hazelnut do NOT use:
# — standard orchard cycle
# — shared block
#
# Group `nut`: walnut and hazelnut. The group organizes these species for user
# selection, navigation, and shared-template discovery. Each species below has
# its own Block 6 template, which is authoritative for that species. S3 may
# rename the group; the templates are unaffected.
# ══════════════════════════════════════════════════════

---

## 🌰 WALNUT (Juglans regia) — custom Block 6

### Agronomic context
Orah raste kao veliko stablo s kasnim listanjem i cvatnjom (svibanj).

*S3 audit item: verify this timing / pest / disease claim against regional sources before promotion.*

Orah može jako suziti/krvariti kod rezidbe u mirovanju — ljetni termin je sigurniji/preporučeni prozor za veće rezove; točan termin ostaje S3 audit item.
Standardni spray program NE primjenjuje se.
Shared block NE primjenjuje se.
Classified under `nut`. The Block 6 template below is the full work plan for this species — the species-specific block is authoritative. S3 may refine the group name; the template below is independent of that decision.

---

### 1. Ljetna rezidba oraha

- activityType: "pruning"
  title: "Ljetna rezidba oraha"
  monthStart: 7
  dayStart: 15
  monthEnd: 8
  dayEnd: 15
  notes: >
    Orah može jako suziti/krvariti kod rezidbe u mirovanju.
    Ljetni termin je sigurniji/preporučeni prozor za veće rezove; točan termin ostaje S3 audit item.
    Ukloniti križajuće i suhe grane.
    Mlada stabla: formirati niski stablašić prvih 3–5 godina.

---

### 2. Bakar – rano u proljeće (po potrebi)

- activityType: "spraying"
  title: "Bakar – rano u proljeće (orah, po potrebi)"
  monthStart: 4
  dayStart: 1
  monthEnd: 4
  dayEnd: 20
  notes: >
    Preventivni bakar protiv bakterijske pjegavosti oraha (Xanthomonas arboricola).
    Aplikacija kod bubrenja pupa i cvatnje resa.
    NIJE potrebno svake godine — ako je prethodna sezona bila suha, tlak nizak.
    Hobi uzgoj: često bez tretmana.

---

### 3. Praćenje orahove muhe

- activityType: "monitoring"
  title: "Praćenje orahove muhe"
  monthStart: 7
  dayStart: 1
  monthEnd: 9
  dayEnd: 15
  notes: >
    Rhagoletis completa — žuta ljepljiva klopka s amonijevim mamcem.
    Tjedni pregled.
    Muha obezbojuje kožuh, ali jezgra često ostaje jestiva.
    Tretman samo na jasno značajan ulov.

---

### 4. Praćenje jabučnog savijača na orahu

- activityType: "monitoring"
  title: "Praćenje jabučnog savijača – orah"
  monthStart: 5
  dayStart: 1
  monthEnd: 8
  dayEnd: 15
  notes: >
    Cydia pomonella napada i orah.
    Feromonska klopka.
    Hobi uzgoj: tretman rijetko nužan.

---

### 5. Berba oraha

- activityType: "harvest"
  title: "Berba oraha"
  monthStart: 9
  dayStart: 15
  monthEnd: 10
  dayEnd: 31
  notes: >
    Termin ovisi o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md za harvestWindow.
    Orasi prirodno padaju kad su zreli; kožuh puca.
    Skupljati dnevno u vrhuncu otpadanja.
    Sušiti u ljusci u jednom sloju 2–3 tjedna prije skladištenja.

---

### 6. Pregled oraha za zimu

- activityType: "observation"
  title: "Pregled oraha za zimu"
  monthStart: 10
  dayStart: 15
  monthEnd: 11
  dayEnd: 30
  notes: >
    Pregledati deblo na znakove dosadnika.
    Ukloniti bolesne kožuhe (smanjenje sljedećesezonskog inokuluma).
    Malčirati bazu mladih stabala protiv glodavaca.

---

## 🌰 HAZELNUT (Corylus avellana) — custom Block 6

### Agronomic context
Lijeska se uzgaja kao grm s više produktivnih izbojnica.

*S3 audit item: verify this timing / pest / disease claim against regional sources before promotion.*

Cvate izrazito rano (veljača), samoopraživanje vjetrom.
Standardni spray program NE primjenjuje se.
Shared block NE primjenjuje se.
Classified under `nut`. The Block 6 template below is the full work plan for this species — the species-specific block is authoritative. S3 may refine the group name; the template below is independent of that decision.

---

### 1. Zimska rezidba lijeske

- activityType: "pruning"
  title: "Zimska rezidba lijeske"
  monthStart: 2
  dayStart: 1
  monthEnd: 3
  dayEnd: 15
  notes: >
    Lijeska se uzgaja kao grm.
    Ukloniti 1–2 najstarije izbojnice godišnje, zadržati 6–8 produktivnih.
    Prorijediti unutarnje izbojke za svjetlo.
    Izdanci: ukloniti osim kod obnove grma.

---

### 2. Praćenje ljeskovog pipe

- activityType: "monitoring"
  title: "Praćenje ljeskovog pipe"
  monthStart: 5
  dayStart: 1
  monthEnd: 7
  dayEnd: 15
  notes: >
    Curculio nucum — odrasla ženka polaže jaja u razvijajuće plodove.
    Kuckanje grana preko bijele plahte za prebrojavanje odraslih.
    Hobi uzgoj: mehaničko uklanjanje napadnutih plodova obično dovoljno;
    kemijski tretman po potrebi — vidi etiketu.

---

### 3. Praćenje pupoljkove grinje

- activityType: "monitoring"
  title: "Praćenje pupoljkove grinje – lijeska"
  monthStart: 3
  dayStart: 1
  monthEnd: 4
  dayEnd: 30
  notes: >
    Phytoptus avellanae — nabrekli zimski pupovi vidljivi kasnom zimom.
    Primarni hobi pristup: mehaničko uklanjanje i spaljivanje napadnutih pupova.
    Sumporni tretman kod teže zaraze — vidi etiketu.

---

### 4. Berba lješnjaka

- activityType: "harvest"
  title: "Berba lješnjaka"
  monthStart: 8
  dayStart: 25
  monthEnd: 10
  dayEnd: 10
  notes: >
    Termin ovisi o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md za harvestWindow.
    Plodovi padaju prirodno kad su zreli; skupljati dnevno u vrhuncu.
    Oljuštiti kožuh unutar nekoliko dana, sušiti 1–2 tjedna.
    NE brati sa stabla dok je kožuh zelen — nezreli.

---

### 5. Pregled lijeske za zimu

- activityType: "observation"
  title: "Pregled lijeske za zimu"
  monthStart: 10
  dayStart: 15
  monthEnd: 11
  dayEnd: 30
  notes: >
    Ukloniti pale bolesne plodove (prezimljenje pipe).
    Pregledati izbojnice na znakove bakterijskog propadanja.
    Malčirati bazu mladih grmova.

---

---

# ══════════════════════════════════════════════════════
# CITRUS — SPECIAL MODEL
# Citrus uses subtype seasonProfile — NOT standard timing groups.
# Subtype required: lemon | orange | mandarin.
# Shared block does NOT apply. Each subtype has its own entries below.
# ══════════════════════════════════════════════════════

## CITRUS model note

Citrus plan templates koriste poseban model (seasonProfile) iz V2_PLANT_CATALOG.md.
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

## Grouping reference

Groups used in this file are an organizing classification only:

- `pome`          — apple, pear, quince
- `stone`         — sweet_cherry, sour_cherry, plum, peach, nectarine, apricot, almond
- `mediterranean` — olive, fig, pomegranate
- `citrus`        — lemon, orange, mandarin
- `nut`           — walnut, hazelnut

**Species-specific override rule.** Where a species' per-species block introduces, modifies, or contradicts the shared baseline, the per-species block is authoritative for that species. Group membership never overrides the species-specific block.

- `stone` members share a real baseline (trunk care, dormant oil, winter copper, pruning, watering, shutdown, inspection), and each species carries specifics in its own block — leaf-curl copper (peach / nectarine), early-bloom + frost-risk handling (apricot, almond), cherry-fly monitoring + optional bird-net (sweet_cherry, sour_cherry), plum-specific pest / fruit handling.
- `pome` members share the same baseline, with per-species specifics for pear (fire-blight copper) and quince (pome-specific copper timing).
- `mediterranean`, `citrus`, and `nut` members do not share the baseline. Each species has its own Block 6 template. Pomegranate's template is structurally independent of olive and fig. Citrus uses a subtype (lemon | orange | mandarin) inside its Block 6 template.

## Template composition

A species' work plan is composed from, in order:

1. the **shared block**, where the block's scope explicitly applies to the species (pome + stone);
2. the **species-specific template block** in this file;
3. **subtype-specific handling** where defined (currently: citrus species carry a `lemon` | `orange` | `mandarin` subtype inside the Block 6 citrus template).

Young-tree relevance and condition-based execution are described in `notes` per entry and are not encoded as custom fields. How and when they are surfaced to the grower is out of scope for this input file.

## Spray rules

- White oil and copper: NEVER on same day — min. 7–10 day gap
- Insecticides: NEVER during bloom or active bee flight — follow each product label for specific restrictions
- Fungicide + insecticide tank-mix: not universally safe — follow each product label and local guidance; apply only post-bloom and outside active bee flight
- Apricot copper: must come BEFORE bloom (January–February)
- Nectarine / Peach copper (leaf curl): must come while buds still closed
- Citrus: standard EU fruit tree spray rules do NOT apply

## Harvest timing

Harvest window for standard fruit trees is not encoded here. The catalog (`V2_PLANT_CATALOG.md`) holds the authoritative harvest window (variety.harvestWindow when a variety is selected, otherwise fallback.harvestWindow). Entries in this file use broad windows per species.

---

# ══════════════════════════════════════════════════════
# COMPLETENESS VERIFICATION
# ══════════════════════════════════════════════════════

## Coverage check — all plant types from V2_PLANT_CATALOG.md

| Plant        | Trunk care | Oil  | Cu-winter | Cu-special   | Pruning  | Monitoring | Spray | Thinning | Net  | Fertilize | Water  | Harvest | Shutdown  | Inspect |
|--------------|-----------|------|-----------|--------------|----------|------------|-------|----------|------|-----------|--------|---------|-----------|---------|
| Apple        | SHARED    |SHARED| SHARED    | —            | SHARED   | ✓          | ✓     | ✓        | ✓    | —         | SHARED | ✓       | SHARED    | SHARED  |
| Pear         | SHARED    |SHARED| SHARED    | ✓ bakt. palež| SHARED   | ✓          | ✓     | ✓        | ✓    | —         | SHARED | ✓       | SHARED    | SHARED  |
| Quince       | SHARED    |SHARED| SHARED    | ✓ pred cvatnj| SHARED   | ✓          | ✓     | —        | —    | —         | SHARED | ✓       | SHARED    | SHARED  |
| Sweet cherry | SHARED    |SHARED| SHARED    | —            | SHARED   | ✓          | —     | ✓ (opt)  | ✓    | —         | SHARED | ✓       | SHARED    | SHARED  |
| Sour cherry  | SHARED    |SHARED| SHARED    | —            | SHARED   | ✓          | —     | ✓ (opt)  | ✓    | —         | SHARED | ✓       | SHARED    | SHARED  |
| Plum         | SHARED    |SHARED| SHARED    | —            | SHARED   | ✓          | ✓     | ✓        | ✓    | —         | SHARED | ✓       | SHARED    | SHARED  |
| Peach        | SHARED    |SHARED| SHARED    | ✓ kovrčavost | SHARED   | ✓          | ✓     | ✓        | ✓    | —         | SHARED | ✓       | SHARED    | SHARED  |
| Nectarine    | SHARED    |SHARED| SHARED    | ✓ kovrčavost | SHARED   | ✓          | ✓     | ✓        | ✓    | —         | SHARED | ✓       | SHARED    | SHARED  |
| Apricot      | SHARED    |SHARED| SHARED    | ✓ pred cvatnj| SHARED   | ✓ mraz+šark| ✓     | ✓        | —    | —         | SHARED | ✓       | SHARED    | SHARED  |
| Almond       | SHARED    |SHARED| SHARED    | ✓ ×2 (pred+krč)| SHARED | ✓ mraz+bol | ✓     | —        | —    | —         | SHARED | ✓       | SHARED    | SHARED  |
| Olive        | —         | —    | —         | —            | ✓ ×2     | ✓ ×2       | ✓ opt | —        | —    | ✓         | ✓      | ✓       | —         | ✓       |
| Fig          | —         | —    | —         | —            | ✓ ×2     | ✓          | —     | —        | —    | ✓         | ✓      | ✓ ×2    | ✓ (mlada) | ✓       |
| Pomegranate  | —         | —    | —         | —            | ✓        | ✓ ×2       | —     | —        | —    | ✓         | ✓      | ✓       | ✓ (mlada) | —       |
| Lemon        | —         | —    | —         | —            | ✓        | ✓          | ✓ opt | —        | —    | ✓         | ✓      | ✓       | ✓         | —       |
| Orange       | —         | —    | —         | —            | ✓        | ✓          | ✓ opt | —        | —    | ✓         | ✓      | ✓       | ✓         | —       |
| Mandarin     | —         | —    | —         | —            | ✓        | ✓          | ✓ opt | —        | —    | ✓         | ✓      | ✓       | ✓         | —       |
| Walnut       | —         | —    | —         | ✓ rano prolj | ✓ ljetna | ✓ ×2       | —     | —        | —    | —         | —      | ✓       | —         | ✓ zima  |
| Hazelnut     | —         | —    | —         | —            | ✓ zimska | ✓ ×2       | —     | —        | —    | —         | —      | ✓       | —         | ✓ zima  |

Legend: SHARED = covered in shared block | ✓ = defined in species/block section | opt = notes indicate optional / condition-dependent relevance | — = not applicable

## All 18 plant types confirmed present: ✓

Pome + stone (standard — shared block + per-species block applies):
Apple ✓ | Pear ✓ | Quince ✓ | Sweet cherry ✓ | Sour cherry ✓ | Plum ✓ | Peach ✓ | Nectarine ✓ | Apricot ✓ | Almond ✓

Mediterranean (Block 6 — no shared block):
Olive ✓ | Fig ✓ | Pomegranate ✓ (custom Block 6, structurally independent of olive/fig)

Citrus (Block 6 — no shared block):
Lemon ✓ | Orange ✓ | Mandarin ✓

Nut (Block 6 — no shared block; each species has its own custom template):
Walnut ✓ | Hazelnut ✓

---

# END OF FILE
