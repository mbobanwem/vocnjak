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

**Mediterranean:** olive, pomegranate (fig is deferred from current V2 support; pomegranate's template is structurally independent — see Block 6)

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
# Do NOT apply this block to olive, pomegranate, citrus, walnut, or hazelnut.
# Fig is deferred from current V2 support and has no active shared-block coverage.
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
    Primijeniti u kasnoj dormanciji, što bliže bubrenju pupa, ali prije cvatnje i samo prema etiketi proizvoda.
    Prskati po suhom, bez vjetra, iznad 5°C. Dobro natopiti grane i koru.
    Ne primjenjivati ako je najavljen mraz, ako je stablo pod stresom ili ako etiketa ne dopušta primjenu u toj fenofazi.
    VAŽNO: minimalni razmak od bakra je 7–10 dana — ne miješati, ne primjenjivati previše blizu.
    Za mlada stabla: primijeniti samo ako postoji stvaran razlog ili stručni/lokalni savjet.

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
    Ako je rezidba obavljena u kasnoj dormanciji i registrirani bakreni tretman je prikladan prema etiketi proizvoda, vremenu i lokalnom savjetu, bakar može pokriti svježe rezne rane prije otvaranja pupova.
    Ne tretirati automatski nakon svake rezidbe: procijeniti veličinu rana, povijest bolesti i najavu kiše.
    Registrirani bakreni pripravak koristiti samo prema etiketi proizvoda.
    Ne prskati tijekom cvatnje; poštovati razmak i kompatibilnost s drugim pripravcima prema etiketi.

---

### 6. Rana proljetna gnojidba

- activityType: "fertilizing"
  title: "Rana proljetna gnojidba"
  appliesToAll: true
  monthStart: 3
  dayStart: 1
  monthEnd: 4
  dayEnd: 15
  notes: >
    Rana proljetna gnojidba podržava početak vegetacije, umjeren rast mladih stabala i formiranje uroda.
    Primijeniti prema stanju stabla, bujnosti, starosti, analizi tla ako postoji i uputama gnojiva.
    Ne gnojiti automatski ako je stablo već vrlo bujno, ako je tlo dobro opskrbljeno ili ako stručni savjet/analiza tla kaže drukčije.
    Ne pretjerivati s dušikom, posebno kod bujnih stabala ili kasno u sezoni.
    Za mlada stabla: cilj je umjeren rast i razvoj krošnje, ne forsiranje roda.

---

### 7. Sezonsko navodnjavanje

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
    Cilj je da zona korijena tijekom sušnog razdoblja dobije oko 25 mm vode tjedno iz kiše ili navodnjavanja.
    Prije zalijevanja provjeriti vlagu tla nekoliko centimetara ispod površine: ako je tlo još vlažno, smanjiti ili preskočiti; ako je suho i plod raste, zaliti dubinski.
    Mlada stabla imaju prioritet jer se korijen još razvija.
    Navodnjavanje ujutro ili navečer. Drip sustav preporučen.

---

### 8. Ljetna rezidba

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

### 9. Gašenje navodnjavanja

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

### 10. Pregled za zimu

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
Kalendarski prozori su baseline podsjetnici. U toplijim regijama radnje mogu krenuti ranije, u hladnijim kasnije. Fenološko stanje stabla i lokalni uvjeti imaju prednost pred datumom.

---

### 1. Post-bloom zaštita (krastavost, pepelnica)

- activityType: "spraying"
  title: "Post-bloom zaštita – krastavost i pepelnica"
  monthStart: 4
  dayStart: 10
  monthEnd: 5
  dayEnd: 10
  notes: >
    Zaštita protiv krastavosti jabuke (Venturia inaequalis) i pepelnice važna je od opadanja latica kroz rani razvoj mladih listova i plodova, osobito nakon kiše i u voćnjacima s poviješću bolesti.
    Koristiti samo registrirani fungicid za jabuku i ciljanu bolest prema etiketi proizvoda.
    Ako je proljeće suho, sorta/nasad nema povijest bolesti i plod nije prioritet, tretman se može smanjiti ili preskočiti.
    Ako su proljeće i krošnja vlažni, ako je bolest bila jaka prethodnih godina ili se vide prve pjege, pratiti kraći interval s etikete i lokalni/stručni savjet.
    Insekticid razmatrati samo ako monitoring, vidljivi štetnici ili stručni savjet opravdavaju reakciju.
    Ne tretirati tijekom cvatnje ni tijekom aktivnog leta pčela. Poštovati doziranje, karencu i lokalne propise.
    Za mlada stabla god. 1–2 bez ploda: zaštita ploda nije prioritet; reagirati samo ako bolest ugrožava zdravlje stabla.

---

### 2. Praćenje savijača ploda

- activityType: "monitoring"
  title: "Praćenje jabučnog savijača (feromonske klopke)"
  monthStart: 4
  dayStart: 25
  monthEnd: 8
  dayEnd: 15
  notes: >
    Jabučni savijač (Cydia pomonella) uzrokuje crvljivost i ulazne rupe u plodovima jabuke.
    Postaviti feromonsku klopku pri početku sezone leta, najkasnije oko cvatnje do neposredno nakon cvatnje, prema lokalnim uvjetima.
    Klopku postaviti na rubni ili vanjski dio krošnje, približno 1.5–2 m visine za kućni voćnjak, i pregledavati najmanje jednom tjedno.
    Pri svakom pregledu ukloniti ulov, zapisati broj i zamijeniti mamac prema uputi proizvođača.
    Ako nema ulova i nema oštećenja plodova, insekticid nije opravdan.
    Ako se ulov ponavlja ili se vide svježi ubodi/ulazne rupe na plodovima, usporediti s lokalnim pragovima ili stručnim savjetom prije tretmana.
    Koristiti samo sredstvo registrirano za jabuku i jabučnog savijača prema etiketi proizvoda, uz poštovanje karence, zaštite pčela i lokalnih propisa.
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
    Prorjeđivati nakon prirodnog otpadanja plodića, kada su plodići približno veličine klikera.
    Prvo ukloniti oštećene, deformirane, sitne i zbijene plodove.
    Kao osnovno pravilo ostaviti najbolji 1–2 ploda po cvjetnom grozdu ili približno 10–15 cm razmaka između plodova na grani.
    Ako je urod već slab, prorjeđivati minimalno. Ako je mlado ili slabo stablo preopterećeno, ostaviti vrlo malo plodova ili ih ukloniti radi razvoja krošnje.
    Prorjeđivanje poboljšava veličinu i kvalitetu plodova te smanjuje rizik alternativne rodnosti.

---

### 4. Mreža protiv ptica

- activityType: "observation"
  title: "Mreža protiv ptica – jabuka"
  monthStart: 8
  dayStart: 15
  monthEnd: 10
  dayEnd: 1
  notes: >
    Mreža nije standardna mjera za svaku jabuku; koristiti je kada postoje peckani plodovi, oboren plod ili ponavljani lokalni pritisak ptica.
    Rane sorte i plodovi koji rano dobivaju boju mogu biti izloženiji napadu.
    Postaviti mrežu prije većeg oštećenja, dok plodovi dozrijevaju, i učvrstiti je tako da ptice ne mogu dohvatiti rubne plodove kroz mrežu.
    Ako nema vidljivog pritiska ptica, mrežu preskočiti.
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
    Primjeri: Gala (aug 20 – sep 10), Fuji (sep 25 – oct 15), Idared (oct 1 – oct 20).
    Prije berbe provjeriti zrelost na nekoliko plodova: osnovna boja prelazi iz zelene prema žutoj, okus više nije škrobast, sjemenke su smeđe, a plod se lako odvaja laganim podizanjem i zakretanjem.
    Ne brati sve odjednom ako dio plodova još nije zreo; isto stablo može trebati više prolaza.
    Fuji: čekati punu zrelost — prerano ubrana Fuji jabuka nema okusa.
    Brati po suhom, izbjegavati jutarnju rosu.
    Oštećene, trule i mumificirane plodove ukloniti iz krošnje i ispod stabla jer mogu održavati bolesti i štetnike.

---

## 🍐 PEAR (Pyrus communis)

### Agronomic context
Cvatnja (Zagreb baseline): kraj ožujka – poč. travnja, nešto ranije od jabuke.
Berba: ovisno o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md.
Harvest window examples: Williams / Santa Maria (aug), Conference / Bosc (aug–sep), Abate Fetel (sep–oct).
Kalendarski prozori za Zagreb / kontinentalne uvjete su baseline podsjetnici. U toplijim regijama radnje mogu krenuti ranije, u hladnijim kasnije. Fenološko stanje stabla i lokalni uvjeti imaju prednost pred datumom.
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
    Kruška ima specifičan rizik od bakterijske paleži oko cvatnje, zato ova stavka nadopunjuje zajednički blok zimskog bakra i bakra nakon rezidbe.
    Zajednički zimski bakar je opća kasnozimska preventiva i primjenjuje se samo ako fenofaza, vrijeme, razmak od bijelog ulja i etiketa proizvoda to dopuštaju.
    Bakar na rane nakon rezidbe ima smisla samo ako je rezidba stvarno obavljena i ako svježe rane, povijest bolesti ili kišno vrijeme čine zaštitu opravdanom; nije automatski nakon svakog reza.
    Ova kruškina stavka je preventivni podsjetnik za razdoblje oko cvatnje i rizik bakterijske paleži; nije automatski treći bakreni tretman.
    Razmotriti je posebno kada je kruška oko bubrenja pupova ili ruba cvatnje, osobito uz vlažne uvjete, lokalni rizik ili povijest bakterijske paleži, ali samo ako etiketa, vrijeme, fenofaza i razmaci to dopuštaju.
    Ako je kruška već nedavno tretirana bakrom dok su pupovi bubrili, otvarali se ili je cvatnja počinjala, primjerice kroz zimski bakar ili bakar nakon rezidbe, ne ponavljati bakar samo zato što postoji ova stavka.
    Bakar je preventivan i ne liječi vidljive simptome bakterijske paleži.
    NE prskati direktno na otvorene cvjetove — oštećuje cvjetove i pčele.
    Poštovati razmak od bijelog ulja: min. 7–10 dana.
    Prskati samo kada fenofaza, vrijeme i etiketa proizvoda to dopuštaju.
    Koristiti samo registrirani bakreni pripravak prema etiketi proizvoda.
    Vidljive simptome ne pokušavati liječiti ovim prskanjem; za sumnjive simptome koristiti monitoring i lokalni/stručni savjet.

---

### 2. Praćenje bakterijske paleži

- activityType: "monitoring"
  title: "Praćenje bakterijske paleži – kruška"
  monthStart: 3
  dayStart: 20
  monthEnd: 6
  dayEnd: 30
  notes: >
    ŠTO GLEDATI:
    bakterijska palež je ozbiljna bolest; aplikacija ne dijagnosticira bolest.
    ovaj prozor je usmjeren na glavni rizik oko cvatnje i ranog rasta mladih izboja.
    pocrnjele ili uvenule cvjetove koji ostaju pričvršćeni.
    vrh mladog izboja savijen poput kukice / ovčarskog štapa.
    pocrnjele listove koji ostaju na izboju.
    naglo venuće mladih izboja ili grančica.
    moguće kapljice iscjetka u toplom i vlažnom vremenu.

    S ČIM SE MOŽE ZAMIJENITI:
    šteta od mraza nakon hladne noći.
    monilija cvijeta/grančice nakon vlažnog vremena.
    ožegotine od sunca, vrućina ili sušni stres.

    SIGURNI KORACI:
    fotografirati i zabilježiti datum.
    ne tretirati vidljive simptome bakrom kao lijekom.
    dezinficirati alat između rezova, npr. 70% alkoholom ili drugim prikladnim sredstvom za dezinfekciju alata.
    ne cijepiti i ne razmnožavati sa sumnjivog stabla.
    kod jake sumnje ne raditi veće rezove prije stručnog savjeta jer pogrešno rezanje ili alat mogu širiti problem.
    ako je sumnja jaka, zatražiti lokalni stručni / fitosanitarni savjet.

    VAŽNO:
    bakar je preventivan i ne liječi vidljive simptome.
    aplikacija ne potvrđuje bakterijsku palež i ne određuje tretman.
    u nekim regijama bolest može biti prijavna; provjeriti lokalna pravila.

---

### 3. Praćenje štetnika

- activityType: "monitoring"
  title: "Praćenje kruškine buhe"
  monthStart: 4
  dayStart: 20
  monthEnd: 8
  dayEnd: 15
  notes: >
    KADA:
    osobito u proljeće i rano ljeto, dok se razvijaju mladi izboji i mladi listovi.

    ŠTO GLEDATI:
    vrhove mladih izboja.
    naličje mladih listova.
    male mekane kukce / nimfe.
    mednu rosu ili ljepljive listove.
    čađavicu.
    mrave koji se kreću po izbojima ili deblu kao mogući znak medne rose.
    uvijen ili deformiran mladi rast.

    S ČIM SE MOŽE ZAMIJENITI:
    lisne uši također mogu stvarati mednu rosu i uvijati mlade listove.
    suša, vrućina ili oštećenje vjetrom mogu savijati mladi rast bez kolonija štetnika.

    ODLUČIVANJE:
    ako nema vidljivih kolonija, medne rose, čađavice ili deformacija mladog rasta, tretman nije opravdan.
    eventualni tretman razmatrati samo ako postoji vidljiv stvarni problem.
    koristiti samo sredstvo registrirano za krušku i ciljanu štetnu vrstu prema etiketi proizvoda.
    aplikacija informira; korisnik odlučuje i nema automatske preporuke za tretman.

    Za mlada stabla god. 1–2:
    fokus je zdrav rast mladih izboja.

- activityType: "monitoring"
  title: "Praćenje savijača ploda – kruška"
  monthStart: 4
  dayStart: 20
  monthEnd: 8
  dayEnd: 15
  notes: >
    KAKO POSTAVITI / PRATITI:
    savijač / moljac ploda prati se feromonskom klopkom ako je dostupna.
    postaviti ili početi provjeravati oko opadanja latica / nakon cvatnje, prema lokalnoj sezoni.
    pregledavati najmanje jednom tjedno; zapisati broj ulova i ukloniti ulov pri pregledu.
    ulov u klopci je dokaz aktivnosti, ne nalog za tretiranje.

    KAKO ČITATI ULOVE:

    bez ulova:
    nastaviti redovno praćenje.

    oko 1–4 leptira po klopci tjedno u ranijem letu:
    niska ili početna aktivnost; nastaviti pratiti i povremeno pregledati plodove.

    oko 5+ leptira po klopci tjedno u svibnju–lipnju / ranijem letu:
    povećana aktivnost; pažljivije pregledati plodove i provjeriti lokalni ili stručni savjet.

    oko 3+ leptira po klopci tjedno kasnije u sezoni ili blizu berbe:
    povećana zabrinutost jer su plodovi veći i karenca postaje važnija.

    nagli skok ulova, brzo punjenje klopke ili vrlo visok ulov, npr. oko 30+:
    moguć jak pritisak; aktivno provjeriti plodove, karencu, etiketu proizvoda i lokalni/stručni savjet.

    Ovi brojevi su informativni primjeri iz profesionalnih i savjetodavnih smjernica za orijentaciju, ne pravila aplikacije.
    Stvarni pragovi ovise o sorti, godini i lokalnim preporukama.

    SIGNAL NA PLODU:
    male ulazne rupice na plodu.
    piljevini sličan izmet / mrvice kod oštećenja.
    kapljice smole blizu oštećenja.
    rano otpali plodovi s mogućom ličinkom unutra.
    ulov u klopci zajedno sa svježim oštećenjem ploda jači je dokaz nego ulov sam.

    KARENCA:
    karenca je broj dana koji mora proći između prskanja i berbe.
    što je berba bliže, to su mogućnosti tretmana ograničenije.
    stvarna etiketa proizvoda odlučuje što je dopušteno.

    ODLUČIVANJE:
    aplikacija ne određuje tretman umjesto korisnika.
    ako se pritisak čini visok ili se vide svježa oštećenja, provjeriti lokalni/stručni savjet prije bilo kakvog tretiranja.
    koristiti samo sredstvo registrirano za krušku i ciljanu štetnu vrstu prema etiketi proizvoda.
    poštovati zaštitu pčela, karencu, etiketu proizvoda i lokalna pravila.

    Za mlada stabla bez ploda:
    zaštita ploda nije prioritet.

---

### 4. Post-bloom zaštita

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

### 5. Prorjeđivanje plodova

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

### 6. Mreža protiv ptica

- activityType: "observation"
  title: "Mreža protiv ptica – kruška"
  monthStart: 7
  dayStart: 20
  monthEnd: 9
  dayEnd: 15
  notes: >
    Kruška može biti napadnuta pticama pred samu berbu.
    Pratiti vizualno — mreža po potrebi kada plodovi počnu sazrijevati.
    Za mlada stabla bez ploda: nije potrebno.

---

### 7. Berba

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
Trešnja je sklona pucanju plodova nakon kiše pred berbu; to se prati odvojeno od mreže protiv ptica.
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
    KAKO POSTAVITI:
    2–3 žute ljepljive ploče po stablu, visina 1.5–2 m, u krošnji.
    Postaviti prije početka dozrijevanja plodova.
    Ploče pregledavati najmanje jednom tjedno, a pred berbu i češće.

    KAKO ČITATI ULOVE:

    Bez ulova:
    nastaviti redovni pregled.

    Nizak ulov:
    obično nekoliko muha po ploči (npr. oko 1–5 u razdoblju pregleda).
    tipična početna aktivnost — nastaviti pratiti.

    Povećana aktivnost:
    ulov je veći nego prethodni pregled ili se ponavlja u više pregleda
    (npr. više muha po ploči, često oko 5–15).
    pojačati praćenje i provjeriti lokalne preporuke.

    Jak pritisak:
    nagli skok ulova (npr. desetci muha po ploči, oko 20–30+ ili brzo punjenje ploče).
    moguć ozbiljan napad — odmah provjeriti lokalni savjet / poljoprivrednu apoteku.

    VAŽNO:
    Ovo su informativni primjeri, ne pravila aplikacije.
    Stvarni pragovi ovise o sorti, godini i lokalnim preporukama.

    PRIJE BILO KAKVOG TRETIRANJA:

    Karenca:
    karenca je broj dana koji mora proći od prskanja do berbe.
    uvijek provjeriti etiketu sredstva za trešnju.

    Pčele:
    ne tretirati tijekom cvatnje.
    ne tretirati tijekom aktivnog leta pčela.
    poštovati etiketu proizvoda.

    Aplikacija ne određuje tretman umjesto korisnika.

    Za mlada stabla (bez ploda):
    praćenje nije prioritet.

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
    Mreža je primarno zaštita od ptica; pucanje plodova zbog kiše prati se kao zaseban predberbeni problem.
    Skinuti odmah nakon berbe.
    Za mlada stabla god. 1–2 bez uroda: nije potrebno.

---

### 4. Praćenje monilije / smeđe truleži

- activityType: "monitoring"
  title: "Praćenje monilije / smeđe truleži (cvatnja → predberba)"
  monthStart: 3
  dayStart: 25
  monthEnd: 7
  dayEnd: 10
  notes: >
    KADA:
    tijekom i nakon cvatnje, pa sve do berbe

    ŠTO GLEDATI:

    cvjetovi naglo posmeđe i ostaju suhi na grančici
    vrhovi grančica se suše
    može se pojaviti smola
    u vlažnom vremenu vidi se siva praškasta prevlaka
    pred berbu: smeđa trule mjesta na plodu

    RAZLIKOVANJE MRAZA I MONILIJE:

    Više liči na MRAZ ako:
    — bila je hladna noć tijekom cvatnje
    — oštećenje se pojavilo odjednom
    — više zahvaćeni donji dijelovi krošnje
    — središte cvijeta pocrni
    — oštećenje se ne širi

    Više liči na MONILIJU ako:
    — nije bilo hladne noći, ali je bilo vlažno vrijeme
    — cvjetovi ostaju suhi na grančici
    — grančice se suše
    — pojavljuje se smola ili plijesan
    — oštećenje se širi kroz vrijeme

    ŠTO UČINITI:

    zabilježiti stanje i fotografirati
    odrezati zaražene grančice ispod oštećenja
    ukloniti iz voćnjaka

    VAŽNO:

    ovo je promatranje, ne automatski tretman
    za točnu dijagnozu i zaštitu konzultirati stručnjaka

---

### 5. Praćenje pucanja plodova nakon kiše

- activityType: "monitoring"
  title: "Praćenje pucanja plodova nakon kiše (predberba)"
  monthStart: 6
  dayStart: 1
  monthEnd: 7
  dayEnd: 25
  notes: >
    KADA:
    pred berbu, posebno nakon obilne kiše

    ŠTO GLEDATI:

    pukotine na plodovima
    često blizu peteljke ili na vrhu
    popucali plodovi brzo trunu
    pojavljuje se plijesan
    privlače ose

    ŠTO UČINITI:

    nakon kiše pregledati plodove
    ukloniti popucale plodove
    ako su plodovi zreli i dolazi nova kiša, razmotriti raniju berbu
    održavati ujednačeno zalijevanje kroz sezonu

    VAŽNO:

    pucanje plodova se ne rješava prskanjem
    neki uzgajivači koriste zaštitu od kiše, ali to nije standardna praksa u hobi uzgoju

---

### 6. Berba

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
Kalendarski prozori su Zagreb / kontinentalni baseline. U toplijim krajevima razvoj može krenuti ranije, u hladnijima kasnije; stanje stabla i lokalni uvjeti imaju prednost pred datumom.

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
    Svrha je spriječiti zarazu kovrčavosti lista unutar pupova prije nego se list otvori.
    Djeluje samo prije otvaranja pupova; kad se list razvije, zaštita više ne može doprijeti do već zaraženog tkiva.
    Ako se primijeni prerano i slijedi puno kiše, zaštita se može isprati pa drugi tretman može biti potreban samo prema stanju pupova/lista, oborinama, etiketi proizvoda i stručnom/lokalnom savjetu.
    Prskanje nakon otvaranja pupova nema učinka na kovrčavost lista.
    Prekasno prskanje može biti bez koristi i može oštetiti osjetljive pupove ili cvjetove.
    Vidljiva kovrčavost lista znači da je preventivni termin propušten: ne prskati sada zbog tog lista, nego zabilježiti problem i bolje planirati tretman prije otvaranja pupova iduće godine.
    Registrirani bakreni pripravak prema etiketi proizvoda.
    Ovo prskanje je DODATAK zimskom bakru iz shared bloka — primijeniti specifično za nektarinu.
    Ako je bakar već primijenjen u zimskom terminu, uzeti u obzir ukupnu sezonsku primjenu bakra i izbjeći nepotrebno ponavljanje.
    Razmak od bijelog ulja: min. 7–10 dana.
    Za mlada stabla: primijeniti — posebno važno u prvim godinama.

---

### 2. Praćenje štetnika i simptoma

- activityType: "monitoring"
  title: "Praćenje lisnih ušiju – nektarina"
  monthStart: 4
  dayStart: 15
  monthEnd: 7
  dayEnd: 31
  notes: >
    Pregledavati naličje mladih listova i vrhove izboja.
    Tražiti vidljive kolonije sitnih mekanih kukaca, uvijene ili izobličene mlade listove i ljepljivu mednu rosu.
    Mravi koji se kreću po izbojima ili deblu mogu značiti da je kolonija lisnih ušiju aktivna.
    Tretman razmatrati samo ako se vidi kolonija ili stvaran problem na mladom porastu.
    Koristiti samo registrirani insekticid za breskvu/nektarinu i lisne uši prema etiketi proizvoda.
    Poštovati etiketu proizvoda i zaštitu pčela; ne tretirati tijekom cvatnje ni tijekom aktivnog leta pčela.
    Za mlada stabla: fokus je zaštititi zdrav novi porast.

- activityType: "monitoring"
  title: "Praćenje breskvinog savijača – nektarina"
  monthStart: 4
  dayStart: 15
  monthEnd: 7
  dayEnd: 31
  notes: >
    Grapholita molesta / breskvin savijač može oštetiti mlade izboje i plodove nektarine.
    Ako je dostupna, koristiti feromonsku klopku; ulov u klopci je dokaz aktivnosti, ali sam po sebi nije nalog za tretman.
    Ako se klopka ne koristi, gledati vidljive znakove: venuće ili sušenje vrhova mladih izboja, male ulazne rupice na izbojima, mrvičastu piljevinu ili izmet nalik piljevini uz oštećen izboj ili plod i male ulazne rupice na plodu.
    Eventualni tretman razmatrati samo ako ulov u klopci, svježa vidljiva šteta ili lokalni/stručni savjet opravdavaju reakciju.
    Koristiti samo registrirani insekticid za breskvu/nektarinu i breskvinog savijača prema etiketi proizvoda.
    Poštovati zaštitu pčela i karencu.
    Za mlada stabla bez ploda: šteta na izbojima važnija je od štete na plodu.

- activityType: "monitoring"
  title: "Praćenje bolesti i simptoma – nektarina"
  monthStart: 5
  dayStart: 1
  monthEnd: 8
  dayEnd: 31
  notes: >
    Ovo je jedan vizualni pregled cvjetova, vrhova mladih izboja, listova i plodova; praćenje pomaže odluci, ali samo po sebi ne znači da treba prskati.
    Monilija na cvatu i grančicama: nakon cvatnje cvjetovi posmeđe i osuše se, ostaju pričvršćeni na grančici, vrhovi izboja mogu se sušiti, a na zahvaćenim mjestima može se pojaviti smola.
    Zahvaćene dijelove ukloniti čistim rezom ispod jasno bolesnog ili suhog dijela i iznijeti iz voćnjaka.
    Monilija na plodu: mekane smeđe pjege, sivi ili bež jastučići spora i mumificirani plodovi.
    Nektarina ima tanku kožicu pa se oštećenje i trulež mogu širiti brže; kljucani plodovi i oštećenja od osa često su ulazna mjesta za infekciju.
    Zaražene i mumificirane plodove ukloniti sa stabla i tla; ne ostavljati ih u krošnji ni ispod stabla.
    Kovrčavost lista: zadebljani, kovrčavi i izobličeni listovi, često crveni ili žuti; zaraza se dogodila ranije, dok je list bio unutar pupa.
    Kad se simptomi vide, prskanje više NE može popraviti list.
    Ne prskati sada zbog tog lista; zabilježiti problem za iduću godinu i poboljšati termin bakra prije otvaranja pupova.
    Oštećenja ploda: kljucani plodovi, ose, pucanje nakon kiše i druga oštećenja mogu biti ulazna mjesta za trulež.
    Za zaštitu od ptica koristiti postojeću stavku "Mreža protiv ptica – nektarina"; ovdje se samo bilježe oštećenja i rizik truleži.
    Higijena: ukloniti bolesne plodove, mumificirane plodove i jasno mrtve izboje.
    Izbjegavati jaču rezidbu po vrućini.
    Simptomi informiraju korisnikovu odluku unutar postojećih prozora.
    Simptomi ne otvaraju novi prozor i ne stvaraju obvezu tretmana.
    Prskanje ima smisla samo ako je pravilan prozor otvoren, etiketa proizvoda to dopušta i stanje biljke je prikladno.

---

### 3. Post-bloom zaštita

- activityType: "spraying"
  title: "Post-bloom zaštita – monilija i štetnici"
  monthStart: 5
  dayStart: 5
  monthEnd: 5
  dayEnd: 25
  notes: >
    Primijeniti nakon opadanja latica, kada nema otvorenih cvjetova i aktivnog leta pčela.
    Svrha je zaštita od monilije nakon faze zaraze cvijeta i mladih grančica te provjera potrebe za reakcijom na rane štetnike poput breskvinog savijača i lisnih ušiju.
    Tretman ima najviše smisla dok je mlado tkivo još osjetljivo, a prozor je otvoren.
    Prerano, dok još ima otvorenih cvjetova, tretman može ugroziti pčele i ometati zametanje plodova.
    Prekasno, zaraza je mogla već nastati i učinak može biti slabiji.
    Koristiti registrirani fungicid za moniliju (Monilinia laxa) prema etiketi proizvoda.
    Insekticid za breskvinog savijača ili lisne uši razmatrati samo ako monitoring, vidljiva svježa šteta ili stručni/lokalni savjet opravdavaju reakciju.
    Monitoring pomaže odluci unutar ovog prozora; ne otvara prozor i ne stvara obvezu tretmana.
    Ne tretirati tijekom cvatnje ni tijekom aktivnog leta pčela.
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
Kalendarski prozori su Zagreb / kontinentalni baseline. U toplijim krajevima razvoj može krenuti ranije, u hladnijima kasnije; stanje stabla i lokalni uvjeti imaju prednost pred datumom.

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
    Ako se u proljeće već vide kovrčavi listovi, preventivni termin je propušten; zabilježiti problem za iduću sezonu umjesto kasnog pokušaja popravljanja tog lista.
    Registrirani bakreni pripravak prema etiketi proizvoda.
    U vlažnom proljeću drugi tretman razmotriti prema fenofazi, oborinama, etiketi proizvoda i stručnom/lokalnom savjetu.
    Ovo prskanje je DODATAK zimskom bakru iz shared bloka.
    Razmak od bijelog ulja: min. 7–10 dana.

---

### 2. Praćenje štetnika i simptoma

- activityType: "monitoring"
  title: "Praćenje lisnih ušiju – breskva"
  monthStart: 4
  dayStart: 15
  monthEnd: 7
  dayEnd: 31
  notes: >
    Tjedno pregledavati naličje listova i vršne izbojke.
    Tražiti vidljive kolonije sitnih mekanih kukaca, uvijene ili izobličene mlade listove i ljepljivu mednu rosu.
    Mravi koji se kreću po izbojima ili deblu mogu značiti da je kolonija lisnih ušiju aktivna.
    Tretman razmatrati samo ako se vidi kolonija ili stvaran problem na mladom porastu.
    Koristiti samo registrirani insekticid za breskvu i lisne uši prema etiketi proizvoda.
    Ne tretirati tijekom cvatnje ni tijekom aktivnog leta pčela.
    Za mlada stabla bez ploda: cilj je zaštititi zdrav novi porast, ne plod.

- activityType: "monitoring"
  title: "Praćenje breskvinog savijača – breskva"
  monthStart: 4
  dayStart: 15
  monthEnd: 7
  dayEnd: 31
  notes: >
    Grapholita molesta / breskvin savijač može oštetiti mlade izboje i plodove.
    Ako je dostupna, koristiti feromonsku klopku; ulov u klopci je dokaz aktivnosti, ali sam po sebi nije nalog za tretman.
    Ako se klopka ne koristi, gledati vidljive znakove: venuće ili sušenje vrhova mladih izboja, male ulazne rupice na izbojima, mrvičastu piljevinu uz oštećen izboj ili plod i male ulazne rupice na plodu.
    Eventualni tretman razmatrati samo ako ulov u klopci, svježa vidljiva šteta ili lokalni/stručni savjet opravdavaju reakciju.
    Koristiti samo registrirani insekticid za breskvu i breskvinog savijača prema etiketi proizvoda.
    Poštovati zaštitu pčela i karencu.
    Za mlada stabla bez ploda: šteta na izbojima važnija je od štete na plodu.

- activityType: "monitoring"
  title: "Praćenje bolesti i simptoma – breskva"
  monthStart: 5
  dayStart: 1
  monthEnd: 8
  dayEnd: 31
  notes: >
    Ovo je vizualno praćenje i razumijevanje stanja, ne preporuka da se prska samo zato što je prozor otvoren.
    Jednim pregledom pogledati cvjetove, vrhove mladih izboja, listove i plodove.
    Monilija / smeđa trulež nakon cvatnje: cvjetovi naglo posmeđe i osuše se, suhi cvjetovi ostaju na grančici, vrhovi mladih izboja mogu se sušiti, a na zahvaćenim izbojima može se pojaviti smola.
    Smeđa trulež ploda blizu dozrijevanja: mekane smeđe pjege na plodu, sivi ili bež jastučići spora ili krugovi i mumificirani suhi plodovi koji ostaju na stablu.
    Kovrčavost lista: zadebljani, uvijeni i izobličeni mladi listovi, često s crvenom ili žutom bojom; kad se vidi, taj list se kasnim prskanjem ne može popraviti, nego problem treba zabilježiti za iduću godinu i bolje pogoditi preventivni termin prije otvaranja pupova.
    Oštećenja ploda: kljucani plodovi, ose oko oštećenih plodova, ulazne rupice ili plodovi koji trunu.
    Higijena: ukloniti jasno bolesne, trule ili mumificirane plodove sa stabla i tla.
    Jače zahvaćene male izboje ukloniti samo ako su jasno bolesni ili suhi, čistim rezom.
    Ne raditi jaču rezidbu zdravog porasta po vrućini.
    Simptomi pomažu razumjeti rizik i odlučiti što ima smisla unutar već valjanih prozora.
    Sami simptomi ne stvaraju novu preporuku za prskanje.
    Registrirani fungicid ili insekticid koristiti samo kad prozor, etiketa proizvoda, stanje biljke, vrijeme i lokalni/stručni savjet opravdavaju reakciju.

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
Kalendarski prozori su Zagreb / kontinentalni baseline. U toplijim krajevima razvoj može krenuti ranije, u hladnijima kasnije; stanje stabla i lokalni uvjeti imaju prednost pred datumom.

*S3 audit item: verify this timing / pest / disease claim against regional sources before promotion.*

---

### 1. Bakar – PRIJE cvatnje (KRITIČNO – marelica)

- activityType: "spraying"
  title: "Bakar – zaštita PRIJE cvatnje (KRITIČNO – marelica)"
  monthStart: 1
  dayStart: 20
  monthEnd: 2
  dayEnd: 15
  notes: >
    Marelica cvate ranije od većine voćaka, zato je termin bakra raniji.
    Bakar mora biti prije otvorene cvatnje, dok su pupovi zatvoreni ili tek počinju bubriti.
    Svrha je preventivna zaštita prije cvatnje od relevantnih gljivičnih i bakterijskih problema prema etiketi proizvoda.
    Bakar ne liječi šarku ni virusne bolesti.
    Ako se propusti ovaj termin, ne može se u potpunosti nadoknaditi kasnije.
    Nikad ne prskati otvorene cvjetove.
    Ovo je mareličin rani fenološki prozor za bakar.
    Ako je isti fenološki prozor već pokriven zimskim bakrom, ne duplicirati tretman; poštovati razmak, fenofazu i etiketu proizvoda.
    Razmak od bijelog ulja: min. 7–10 dana.

---

### 2. Praćenje mraza za cvatnje marelice

- activityType: "monitoring"
  title: "Praćenje mraza za cvatnje marelice"
  monthStart: 2
  dayStart: 1
  monthEnd: 3
  dayEnd: 31
  notes: >
    PRIJE RIZIKA:
    za vrijeme cvatnje svakodnevno pratiti lokalnu prognozu.
    hladne noći tijekom cvatnje mogu oštetiti rod.
    temperature ispod približno -1°C tijekom cvatnje mogu ozbiljno oštetiti ili uništiti rod, ovisno o fenofazi, trajanju zahlađenja i lokalnim uvjetima.
    mala stabla ponekad se mogu zaštititi agrotekstilom ili drugim lokalnim mjerama ako je praktično.

    ŠTO GLEDATI NAKON HLADNE NOĆI:
    smeđe ili crne cvjetove.
    pocrnjelo središte cvijeta.
    mladi plodići se smežuraju nakon nekoliko dana.
    šteta se pojavi naglo.

    MRAZ VS MONILIJA:

    Više liči na MRAZ ako:
    bila je jasna hladna noć tijekom cvatnje.
    šteta se pojavila odjednom.
    donji dio krošnje ili mrazišna mjesta više su zahvaćeni.
    šteta se ne nastavlja širiti.

    Više liči na MONILIJU ako:
    bilo je vlažno / sparno vrijeme, bez jasne hladne noći.
    cvjetovi se osuše i ostaju pričvršćeni.
    vrhovi mladica se suše.
    može se pojaviti smola.
    šteta se širi kroz vrijeme.

    VAŽNO:
    šteta od mraza ne može se popraviti prskanjem nakon što se dogodi.
    zabilježiti datum, temperaturu ako je poznata i vidljivu štetu.
    ako je mraz uništio cvatnju, kasnije prorjeđivanje možda neće biti potrebno.

---

### 3. Praćenje lisnih ušiju – marelica

- activityType: "monitoring"
  title: "Praćenje lisnih ušiju – marelica"
  monthStart: 4
  dayStart: 1
  monthEnd: 5
  dayEnd: 15
  notes: >
    Pregledati naličje mladih listova i vrhove mladica.
    Gledati vide li se kolonije lisnih ušiju.
    Gledati uvijene mlade listove.
    Gledati ljepljivu mednu rosu.
    Pratiti mrave.
    Lisne uši mogu širiti šarku.
    Smanjenje lisnih ušiju ne jamči zaštitu od šarke.
    Tretman razmatrati samo ako postoji vidljiva kolonija ili stvaran problem.
    Koristiti registrirano sredstvo za marelicu i ciljanu štetnu vrstu prema etiketi.
    Poštovati zaštitu pčela i etiketu.

    Za mlada stabla:
    posebno pratiti zdrav novi rast.

---

### 4. Praćenje šarke – marelica

- activityType: "monitoring"
  title: "Praćenje šarke – marelica"
  monthStart: 4
  dayStart: 1
  monthEnd: 8
  dayEnd: 31
  notes: >
    Šarka / Plum pox virus nema kurativno liječenje.
    Ne prskati protiv šarke.
    Simptome treba potvrditi stručnjak prije većih odluka.

    ŠTO GLEDATI:
    žute prstenove, lukove ili nepravilne šare na listovima.
    šare se mogu pojaviti oko žila.
    deformirane plodove.
    ulegnute šare ili prstenove na plodu.
    prijevremeno opadanje plodova može se pojaviti.
    simptomi se često ponavljaju kroz više sezona.

    S ČIM SE MOŽE ZAMIJENITI:
    manjak hraniva obično je ujednačeniji i nije prstenast.
    gljivične pjegavosti obično su pjege ili rupice, ne prstenaste šare.
    šteta od lisnih ušiju uvija mladice/listove i obično se vide kukci ili medna rosa.

    SIGURNI KORACI:
    fotografirati i zabilježiti datum.
    pratiti ponavljaju li se simptomi.
    ne cijepiti i ne razmnožavati sa sumnjivog stabla.
    kod sumnje konzultirati stručnjaka / lokalnu službu za zaštitu bilja.

    POVEZNICA S LISNIM UŠIMA:
    lisne uši mogu širiti virus.
    smanjenje lisnih ušiju može smanjiti pritisak vektora, ali ne liječi šarku i ne jamči zaštitu.

---

### 5. Praćenje monilije / smeđe truleži – marelica

- activityType: "monitoring"
  title: "Praćenje monilije / smeđe truleži – marelica"
  monthStart: 4
  dayStart: 1
  monthEnd: 7
  dayEnd: 31
  notes: >
    Ovo je vizualni pregled i praćenje rizika, ne nalog za tretiranje.

    CVAT / GRANČICE:
    cvjetovi posmeđe i osuše se.
    cvjetovi ostaju pričvršćeni.
    vrhovi mladica se suše.
    može se pojaviti smola.

    PLOD:
    mekane smeđe trule pjege.
    sivi/bež jastučići spora.
    mumificirani plodovi.

    MRAZ VS MONILIJA:
    mraz je obično nagao nakon hladne noći.
    monilija je vjerojatnija nakon vlažnog / sparnog vremena i može se širiti kroz vrijeme.
    ako nije jasno, zabilježiti stanje i konzultirati stručnjaka.

    HIGIJENA:
    ukloniti trule i mumificirane plodove sa stabla i tla.
    jasno bolesne/suhe male mladice ukloniti čistim rezom.
    ne rezati agresivno zdrav rast tijekom vrućine.

    ZNAČENJE:
    simptomi pomažu razumjeti rizik i povijest stabla.
    sami simptomi ne stvaraju preporuku za prskanje.
    ako dijagnoza ili zaštita nisu jasne, konzultirati stručnjaka / lokalni savjet.

---

### 6. Post-bloom zaštita – monilija (marelica)

- activityType: "spraying"
  title: "Post-bloom zaštita – monilija (marelica)"
  monthStart: 4
  dayStart: 15
  monthEnd: 5
  dayEnd: 15
  notes: >
    Nakon cvatnje / nakon opadanja latica, nikad tijekom otvorene cvatnje.
    Marelica cvate ranije — prilagoditi termin prema stanju stabla.
    Koristiti registrirani fungicid za moniliju (Monilinia laxa) prema etiketi proizvoda.
    Praćenje pomaže odluci unutar ovog prozora.
    Praćenje ne otvara novi prozor i ne stvara obvezu tretmana.
    Ne tretirati tijekom aktivnog leta pčela.
    Poštovati etiketu proizvoda, zaštitu pčela, karencu, lokalna pravila i lokalni savjet.
    Za mlada stabla god. 1–2: nije obavezno, ali može biti važno u vlažnim sezonama.

---

### 7. Prorjeđivanje plodova – marelica

- activityType: "observation"
  title: "Prorjeđivanje plodova – marelica"
  monthStart: 5
  dayStart: 1
  monthEnd: 5
  dayEnd: 25
  notes: >
    AKO MRAZ NIJE SMANJIO ROD:
    marelica može jako preroditi.
    ostaviti oko 1 plod na 8–10 cm grane.
    ukloniti blizance i oštećene plodove.
    bez prorjeđivanja: sitni plodovi, lom grana, iscrpljenost stabla.

    AKO JE MRAZ OŠTETIO CVATNJU I ZAMETANJE JE SLABO:
    ne prorjeđivati.
    ostaviti preostale plodove.
    malo plodova nakon cvatnje često znači štetu od mraza, ne bolest ili štetnika.

    Za mlada stabla god. 1–2 bez uroda: nije potrebno.

---

### 8. Berba marelice

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

    POST-MRAZNI ROD:
    ako je berba mnogo manja od očekivane, mraz tijekom cvatnje često je razlog.
    zabilježiti štetu od mraza u povijest.
    povijest pomaže razlikovati godine s mrazom od godina s bolešću ili štetnicima.

---

## 🫐 PLUM (Prunus domestica)

### Agronomic context
Cvatnja (Zagreb baseline): kraj ožujka – poč. travnja.
Berba: ovisno o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md.
Harvest window examples: Čačanska rana (jul–aug), Čačanska najbolja (aug), Stanley / Président (aug–sep).

---

### 1. Praćenje šljivinog savijača – proljetni let

- activityType: "monitoring"
  title: "Praćenje šljivinog savijača – proljetni let"
  monthStart: 4
  dayStart: 25
  monthEnd: 6
  dayEnd: 15
  notes: >
    Šljivin savijač / Cydia funebrana uzrokuje crvljive šljive i rano opadanje plodova.
    Koristiti feromonsku klopku ako je dostupna.
    Postaviti ili početi provjeravati oko opadanja latica / nakon cvatnje, ovisno o lokalnoj sezoni.
    Ista klopka nastavlja se koristiti u ljeto; tumačenje se mijenja u kasnijoj stavci.
    Pregledavati najmanje jednom tjedno.
    Ulov u klopci je dokaz aktivnosti, ne nalog za tretiranje.

    KAKO ČITATI ULOVE:

    0–3 leptira tjedno po klopci:
    nizak/pozadinski ulov; nastaviti tjedni pregled.

    oko 5–10 leptira tjedno, posebno ako se ponavlja:
    pojačana aktivnost; pažljivije pregledati plodove.

    30+ leptira u tjednu ili nagli skok s niske razine:
    moguć jak pritisak; zatražiti lokalni stručni savjet / savjet poljoprivredne apoteke.

    Ovi brojevi su informativni primjeri za orijentaciju, ne pravila aplikacije.

    SIGNAL NA PLODU:
    pregledati nekoliko mladih plodova.
    gledati male kapljice smole.
    gledati male ulazne rupice.
    provjeriti rano otpale plodove s ličinkom unutra.
    ulov u klopci zajedno sa znakovima na plodu jači je dokaz nego ulov sam.

    ODLUČIVANJE:
    nema samostalne preporuke za tretiranje iz aplikacije.
    Ako se pritisak čini visok, pitati lokalnog stručnjaka / poljoprivrednu apoteku što je dopušteno za šljivu, sortu, termin i etiketu.
    Ne koristiti insekticid tijekom aktivnog leta pčela.
    Poštovati etiketu i lokalna pravila.

    Za mlada stabla bez ploda:
    praćenje je niži prioritet.

---

### 2. Praćenje šljivinog savijača – ljetni let i predberba

- activityType: "monitoring"
  title: "Praćenje šljivinog savijača – ljetni let i predberba"
  monthStart: 6
  dayStart: 15
  monthEnd: 8
  dayEnd: 31
  notes: >
    Isti štetnik i ista klopka kao u proljeće; tumačenje se mijenja jer su plodovi veći i berba je bliže.
    Moguć je drugi let / kasniji pritisak.
    Nastaviti tjedno pregledavati klopku; pred berbu ili ako ulov raste, pregledavati češće.
    Ulov u klopci je dokaz aktivnosti, ne nalog za tretiranje.

    KAKO ČITATI ULOVE:

    0–3 leptira tjedno po klopci:
    nizak/pozadinski ulov; nastaviti tjedni pregled.

    oko 5–10 leptira tjedno, posebno ako se ponavlja:
    pojačana aktivnost; pažljivije pregledati plodove.

    30+ leptira u tjednu ili nagli skok s niske razine:
    moguć jak pritisak; zatražiti lokalni stručni savjet / savjet poljoprivredne apoteke.

    Ovi brojevi su informativni primjeri za orijentaciju, ne pravila aplikacije.

    SIGNAL NA PLODU:
    pregledati plodove i tražiti kapljice smole.
    tražiti ulazne ili izlazne rupice.
    provjeriti oštećene ili rano otpale plodove.
    otvoriti sumnjiv plod i provjeriti ima li ličinke.
    ulov u klopci zajedno sa znakovima na plodu jači je dokaz nego ulov sam.

    KARENCA:
    karenca je broj dana koji mora proći od prskanja do berbe.
    što je berba bliže, to manje sredstava može biti dopušteno.
    aplikacija ne može odrediti karencu.
    korisnik mora provjeriti stvarnu etiketu sredstva i lokalni savjet.

    SORTA I TERMIN:
    kod ranih sorti kasni signal može biti preblizu berbi.
    kod kasnijih sorti poput Stanley / Bistrica / Président može biti više vremena, ali etiketa i stručni savjet odlučuju.

    ODLUČIVANJE:
    nema samostalne preporuke za prskanje.
    jak signal znači: zatražiti lokalni stručni savjet / savjet poljoprivredne apoteke.
    zabilježiti opažanje i svaki stručni savjet u povijest.

---

### 3. Praćenje šarke

- activityType: "monitoring"
  title: "Praćenje šarke – šljiva"
  monthStart: 4
  dayStart: 1
  monthEnd: 8
  dayEnd: 31
  notes: >
    Šarka / Plum pox virus nema kurativno liječenje.
    Ne prskati protiv šarke.
    Simptome treba potvrditi stručnjak prije većih odluka.

    ŠTO GLEDATI:
    žute prstenove, lukove ili nepravilne šare na listovima.
    šare se mogu pojaviti oko žila.
    deformirane plodove.
    ulegnute šare ili prstenove na plodu.
    prijevremeno opadanje plodova može se pojaviti.
    simptomi se često ponavljaju kroz više sezona.

    S ČIM SE MOŽE ZAMIJENITI:
    manjak hraniva obično je ujednačeniji i nije prstenast.
    gljivične pjegavosti obično su pjege ili rupice, ne prstenaste šare.
    šteta od lisnih ušiju uvija mladice/listove i obično se vide kukci ili medna rosa.

    SIGURNI KORACI:
    fotografirati i zabilježiti datum.
    pratiti ponavljaju li se simptomi.
    ne cijepiti i ne razmnožavati sa sumnjivog stabla.
    kod sumnje konzultirati stručnjaka / lokalnu službu za zaštitu bilja.

    POVEZNICA S LISNIM UŠIMA:
    lisne uši mogu širiti virus.
    smanjenje lisnih ušiju može smanjiti pritisak vektora, ali ne liječi šarku i ne jamči zaštitu.

---

### 4. Praćenje lisnih ušiju

- activityType: "monitoring"
  title: "Praćenje lisnih ušiju – šljiva"
  monthStart: 4
  dayStart: 1
  monthEnd: 6
  dayEnd: 15
  notes: >
    Pregledati naličje mladih listova i vrhove mladica.
    Gledati uvijene mlade listove.
    Gledati ljepljivu mednu rosu.
    Pratiti mrave.
    Provjeriti vide li se kolonije lisnih ušiju.
    Lisne uši su važne i zato što mogu širiti šarku.
    Smanjenje lisnih ušiju ne jamči zaštitu od šarke.
    Tretman razmatrati samo ako postoji vidljiva kolonija ili stvaran problem.
    Koristiti registrirano sredstvo za šljivu i ciljanu štetnu vrstu prema etiketi.
    Poštovati zaštitu pčela i etiketu.

    Za mlada stabla:
    fokus je zaštita zdravog novog rasta.

---

### 5. Praćenje monilije / smeđe truleži

- activityType: "monitoring"
  title: "Praćenje monilije / smeđe truleži – šljiva"
  monthStart: 4
  dayStart: 1
  monthEnd: 9
  dayEnd: 15
  notes: >
    Ovo je vizualni pregled i praćenje rizika, ne nalog za tretiranje.

    CVAT / GRANČICE:
    cvjetovi posmeđe i osuše se.
    cvjetovi ostaju pričvršćeni.
    vrhovi mladica se suše.
    može se pojaviti smola.

    PLOD:
    mekane smeđe trule pjege.
    sivi/bež jastučići spora.
    mumificirani plodovi.

    HIGIJENA VOĆNJAKA:
    ukloniti trule i mumificirane plodove sa stabla i tla.
    jasno bolesne/suhe male mladice ukloniti čistim rezom.
    ne rezati agresivno zdrav rast tijekom vrućine.

    ZNAČENJE:
    simptomi pomažu razumjeti rizik i povijest stabla.
    sami simptomi ne stvaraju preporuku za prskanje.
    ako dijagnoza ili zaštita nisu jasne, konzultirati stručnjaka / lokalni savjet.

---

### 6. Post-bloom zaštita

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

### 7. Praćenje opadanja plodova

- activityType: "monitoring"
  title: "Praćenje opadanja plodova – šljiva"
  monthStart: 5
  dayStart: 20
  monthEnd: 9
  dayEnd: 15
  notes: >
    Ova stavka pomaže razumjeti što se događa s plodovima.
    Nije nalog za prskanje.
    Zabilježiti što se vidi i povezati s odgovarajućim praćenjem ili higijenom voćnjaka.

    NORMALNO LIPANJSKO OPADANJE:
    mnogo malih plodova otpadne u kratkom razdoblju.
    plod je malen i uglavnom čist.
    nema crva, truleži ni ulazne rupice.
    obično je riječ o normalnom samoprorjeđivanju.

    VIŠE LIČI NA SAVIJAČA:
    plodovi opadaju ponavljano.
    vidi se mala kapljica smole, ulazna rupica ili ličinka unutra.
    povezati s praćenjem šljivinog savijača.

    VIŠE LIČI NA MONILIJU:
    plod je smeđ, mekan i trune.
    vide se sivi/bež jastučići spora ili mumificirani plodovi.
    ukloniti iz voćnjaka.

    VIŠE LIČI NA SUŠU / STRES:
    plod se može smežurati ili otpadati tijekom suhog/vrućeg razdoblja.
    provjeriti vlagu tla i zalijevanje.

---

### 8. Prorjeđivanje plodova

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

### 9. Mreža protiv ptica

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

### 10. Berba

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

### 2. Praćenje dunje

- activityType: "monitoring"
  title: "Praćenje bolesti lista i ploda – dunja"
  monthStart: 4
  dayStart: 25
  monthEnd: 8
  dayEnd: 15
  notes: >
    Dunja može imati probleme s pjegama na listu i plodu, preranim otpadanjem lista te truleži/plodnim infekcijama, osobito u vlažnim sezonama.
    Tjedno ili nakon duljeg kišnog razdoblja pregledati:
    — pjege na listovima
    — prerano žućenje ili otpadanje lista
    — pjege, deformacije ili trulež na plodu
    Ako se simptomi pojačavaju, ako postoji povijest bolesti ili ako stručni/lokalni savjet opravdava reakciju, razmotriti registrirano sredstvo za dunju i ciljanu bolest prema etiketi proizvoda.
    Poštovati etiketu proizvoda, karencu, zaštitu pčela i lokalne propise.

- activityType: "monitoring"
  title: "Praćenje savijača – dunja"
  monthStart: 4
  dayStart: 25
  monthEnd: 8
  dayEnd: 15
  notes: >
    Tjedno ili nakon duljeg kišnog razdoblja pregledati:
    — svježe ubode ili ulazne rupe na plodu
    Kruškin savijač (Cydia pyrivora) i povremeno jabučni savijač (C. pomonella) mogu biti relevantni, ali tretman se ne izvodi automatski.
    Ako se vide svježi ubodi ili ulazne rupe, ili ako stručni savjet/lokalni pragovi opravdavaju reakciju, razmotriti registrirano sredstvo za dunju i ciljanu štetnu vrstu prema etiketi proizvoda.
    Poštovati etiketu proizvoda, karencu, zaštitu pčela i lokalne propise.

---

### 3. Fungicid/insekticid post-cvatnja (po potrebi)

- activityType: "spraying"
  title: "Post-cvatnja zaštita – dunja (po potrebi)"
  monthStart: 5
  dayStart: 1
  monthEnd: 5
  dayEnd: 25
  notes: >
    Nakon cvatnje, po potrebi, ako praćenje, vidljivi simptomi, povijest bolesti ili stručni savjet opravdavaju reakciju.
    Koristiti registrirani fungicid za ciljanu bolest dunje prema etiketi proizvoda.
    Insekticid razmatrati samo ako monitoring, vidljivi štetnici dunje ili stručni savjet opravdavaju reakciju.
    Ne tretirati tijekom cvatnje ni tijekom aktivnog leta pčela.
    Poštovati etiketu proizvoda, doziranje, karencu, zaštitu pčela i lokalne propise.

---

### 4. Provjera opterećenja plodovima – dunja

- activityType: "observation"
  title: "Provjera opterećenja plodovima – dunja"
  monthStart: 5
  dayStart: 20
  monthEnd: 6
  dayEnd: 20
  notes: >
    Dunja se ne prorjeđuje rutinski kao jabuka.
    Ako je stablo mlado, slabo ili se grane jako savijaju pod teretom plodova, ukloniti dio plodova radi sprječavanja loma grana i boljeg razvoja stabla.
    Ako je urod normalan i grane nisu opterećene, preskočiti.

---

### 5. Berba

- activityType: "harvest"
  title: "Berba dunje"
  monthStart: 10
  dayStart: 1
  monthEnd: 11
  dayEnd: 10
  notes: >
    Termin ovisi o sorti ili fallback grupi — vidi V2_PLANT_CATALOG.md za harvestWindow.
    Znakovi zrelosti: plod prelazi iz zelene u žutu/zlatnu boju, razvija jak miris i ostaje čvrst.
    Brati prije jačeg mraza; ne čekati da plod omekša na stablu.
    Plodovi su tvrdi, ali se lako nagnječe — brati pažljivo.
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
    Cvatnja badema je osjetljiva na mraz.
    Pratiti lokalnu prognozu dok su cvjetovi otvoreni.
    Nakon hladne noći pregledati otvorene cvjetove.
    Smeđi ili crni cvjetovi znače moguće oštećenje mrazom.
    Ovo je praćenje rizika, ne tretman.
    Korisnik odlučuje o zaštiti prema prognozi, stanju cvjetova i lokalnim uvjetima.

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

### 4. Praćenje badema

- activityType: "monitoring"
  title: "Praćenje bolesti – badem"
  monthStart: 4
  dayStart: 15
  monthEnd: 8
  dayEnd: 15
  notes: >
    Pregledati cvjetove, vrhove mladih izboja, listove i plodove.
    Monilija u cvatnji:
    — cvjetovi naglo posmeđe i ostanu suhi na grančici
    — vrhovi grančica se suše nakon cvatnje
    — može se pojaviti smola
    To znači da je zaraza već nastala.
    Odrezati zahvaćene dijelove ispod oštećenja i iznijeti ih iz voćnjaka.
    Šupljikavost lista:
    — male smeđe ili ljubičaste pjege
    — žuti rub oko pjege
    — kasnije nastaju rupice u listu
    Kovrčavost lista:
    — zadebljani i deformirani listovi
    — crvena ili žuta boja
    — pojavljuje se rano u sezoni
    Kad se vidi, list se više ne može popraviti; zabilježiti za bolji termin iduće godine.
    Red Leaf Blotch / crvenilo lista (Polystigma):
    — narančaste ili crvene pjege
    — obično se vidi kasnije u sezoni
    — list može prerano otpasti
    Češća je u toplijim/mediteranskim područjima, a rjeđa u kontinentalnim uvjetima.

- activityType: "monitoring"
  title: "Praćenje štetnika – badem"
  monthStart: 4
  dayStart: 15
  monthEnd: 8
  dayEnd: 15
  notes: >
    Pregledati vrhove mladih izboja i naličje listova.
    Tražiti male kukce na mladim izbojima.
    Uvijeni mladi listovi, ljepljiva medna rosa ili mravi znače aktivnu koloniju lisnih uši.
    Ako je kolonija vidljiva, razmotriti tretman prema etiketi proizvoda i stručnom/lokalnom savjetu.

---

### 5. Fungicid/insekticid post-cvatnja (po potrebi)

- activityType: "spraying"
  title: "Post-cvatnja zaštita – badem (po potrebi)"
  monthStart: 4
  dayStart: 10
  monthEnd: 5
  dayEnd: 10
  notes: >
    Nakon cvatnje, po potrebi, ako praćenje, vidljivi simptomi, povijest bolesti ili stručni savjet opravdavaju reakciju.
    Koristiti registrirani fungicid za ciljanu bolest badema prema etiketi proizvoda.
    Insekticid razmatrati samo ako monitoring, vidljivi štetnici badema ili stručni savjet opravdavaju reakciju.
    Ne tretirati tijekom cvatnje ni tijekom aktivnog leta pčela.
    Poštovati etiketu proizvoda, doziranje, karencu, zaštitu pčela i lokalne propise.

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
> Within `mediterranean`, olive and pomegranate each have a distinct Block 6 template. Fig is deferred from current V2 support. Pomegranate's template is structurally independent. The `mediterranean` label organizes current supported Mediterranean species together for navigation; it does not generate template content for any of them.
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
# Mediterranean (olive, pomegranate), citrus (lemon, orange, mandarin),
# and nut (walnut, hazelnut) each have their own species-specific template set
# below. Pomegranate is grouped under mediterranean as an organizing label
# but has its own template structurally independent of olive.
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

### 4. Vizualni pregled – maslina

- activityType: "monitoring"
  title: "Praćenje paunovog oka – maslina"
  monthStart: 4
  dayStart: 1
  monthEnd: 5
  dayEnd: 31
  notes: >
    Paunovo oko (Spilocaea oleagina): žute mrlje s tamnim rubom na listu.
    Vizualni pregled — tretman razmatrati samo ako simptomi, lokalni uvjeti ili stručni savjet opravdavaju reakciju; koristiti samo registrirano sredstvo prema etiketi proizvoda i lokalnim propisima.
    U kontinentalnoj klimi rijedak problem na otvorenom.

- activityType: "monitoring"
  title: "Praćenje maslinovog moljca – maslina"
  monthStart: 4
  dayStart: 1
  monthEnd: 5
  dayEnd: 31
  notes: >
    Maslinin moljac (Prays oleae): napada cvjetove i plodove.
    Vizualni pregled — tretman razmatrati samo ako simptomi, lokalni uvjeti ili stručni savjet opravdavaju reakciju; koristiti samo registrirano sredstvo prema etiketi proizvoda i lokalnim propisima.
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
    Barijerne ili repelentne metode razmatrati samo ako su prikladne i registrirane za kulturu/namjenu prema etiketi proizvoda.
    Ako se razmatra tretman, poštovati etiketu proizvoda, doziranje, karencu, zaštitu pčela i lokalne propise.
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

## Deferred — Fig / Smokva (not current V2 support)

This block is preserved as historical/input material only.

It is not an active current V2 template and is not approved for implementation.
Fig is removed from current supported V2 scope because its behavior is type-dependent:
one-crop figs and two-crop figs require different harvest interpretation, pruning logic,
and regional handling. Future reintroduction requires a dedicated source-backed fig
domain session before any plan-template coverage is promoted.

Do not use this block to generate current V2 plans.
Do not add fig varieties or a one-crop/two-crop model here.

### Archived input heading

FIG (Ficus carica)

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
    Rezati kasno zimi, nakon najjačih mrazeva — smokva je osjetljiva na kasne mrazeve.
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
    Prekomjerno navodnjavanje može pridonijeti pucanju plodova.

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
Šipak je marginalan u kontinentalnoj EU klimi. U Samoboru / Zagrebu može uspijevati ovisno o mikrolokaciji, zimi i zaštiti mladih stabala.

*S3 audit item: verify this timing / pest / disease claim against regional sources before promotion.*

Standardni spray program (bijelo ulje, zimski bakar, fungicidi i insekticidi uobičajeni za listopadne voćke) NE primjenjuje se.
Shared block NE primjenjuje se.
**Template-structure note:** Pomegranate is classified under `mediterranean` for organizing purposes. Its Block 6 template below is the full work plan for pomegranate and is structurally independent of olive — the species-specific block is authoritative.

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
    Eventualni tretman razmatrati samo ako vidljivi problem, lokalni uvjeti ili stručni savjet opravdavaju reakciju.
    Koristiti samo sredstvo registrirano za kulturu i štetnika prema etiketi proizvoda; poštovati karencu, zaštitu pčela i lokalne propise.

---

### 4. Praćenje pucanja ploda

- activityType: "monitoring"
  title: "Praćenje pucanja ploda – šipak"
  monthStart: 8
  dayStart: 1
  monthEnd: 10
  dayEnd: 15
  notes: >
    Nagla voda nakon suše može uzrokovati ili pridonijeti pucanju ploda.
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
    Po potrebi duboko zalijevanje dok se plod razvija.
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

Orah može jače ispuštati sok/krvariti kod rezidbe u mirovanju — ljetni termin je sigurniji/preporučeni prozor za veće rezove; točan termin ostaje S3 audit item.
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
    Orah može jače ispuštati sok/krvariti kod rezidbe u mirovanju.
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
    NIJE potrebno svake godine — ako je prethodna sezona bila suha, pritisak nizak.
    Koristiti registrirani pripravak prema etiketi proizvoda; poštovati doziranje, karencu, zaštitu pčela i lokalne propise.
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
    Eventualni tretman razmatrati samo ako lokalni pragovi ili stručni savjet opravdavaju reakciju; koristiti samo registrirano sredstvo za kulturu i štetnika prema etiketi proizvoda, uz poštovanje karence, zaštite pčela i lokalnih propisa.

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
    Eventualni tretman razmatrati samo ako monitoring, lokalni pragovi ili stručni savjet opravdavaju reakciju; koristiti samo registrirano sredstvo za kulturu i štetnika prema etiketi proizvoda, uz poštovanje karence, zaštite pčela i lokalnih propisa.

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
    Ukloniti bolesne kožuhe (smanjenje inokuluma za sljedeću sezonu).
    Malčirati bazu mladih stabala protiv glodavaca.

---

## 🌰 HAZELNUT (Corylus avellana) — custom Block 6

### Agronomic context
Lijeska se uzgaja kao grm s više produktivnih izbojnica.

*S3 audit item: verify this timing / pest / disease claim against regional sources before promotion.*

Cvate izrazito rano (veljača), oprašivanje vjetrom; sortna kompatibilnost i samooplodnost ostaju S3 audit item.
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

### 2. Praćenje ljeskove pipe

- activityType: "monitoring"
  title: "Praćenje ljeskove pipe"
  monthStart: 5
  dayStart: 1
  monthEnd: 7
  dayEnd: 15
  notes: >
    Curculio nucum — odrasla ženka polaže jaja u razvijajuće plodove.
    Kuckanje grana preko bijele plahte za prebrojavanje odraslih.
    Hobi uzgoj: mehaničko uklanjanje napadnutih plodova obično dovoljno;
    Eventualni tretman razmatrati samo ako lokalni pragovi, vidljiva šteta ili stručni savjet opravdavaju reakciju; koristiti samo registrirano sredstvo za kulturu i štetnika prema etiketi proizvoda, uz poštovanje karence, zaštite pčela i lokalnih propisa.

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
    Primarni hobi pristup: mehaničko uklanjanje i zbrinjavanje napadnutih pupova prema lokalnim propisima.
    Kod teže potvrđene zaraze eventualni tretman razmatrati samo prema etiketi proizvoda, lokalnim propisima i stručnom savjetu.

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
U ovom PRE-S3 inputu ne koriste standardni shared ciklus.

```
citrus subtypes:
  lemon    → seasonProfile: multi_cycle
  orange   → seasonProfile: winter
  mandarin → seasonProfile: autumn
```

---

### 🍋 LEMON (Citrus limon) — seasonProfile: multi_cycle

U povoljnim ili zaštićenim uvjetima limun može imati više ciklusa cvatnje i plodonošenja tijekom godine.
Nema jednog berbenog prozora — plodovi mogu biti prisutni kroz veći dio godine.

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
    Limun ima veće potrebe za hranivima — gnojiti svaka 4–6 tjedana u vegetaciji.
    Koristiti gnojivo za citrus s mikroelementima (Mg, Fe, Mn).
    Žuto lišće može upućivati na nedostatak željeza ili dušika.

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
    Eventualni tretman razmatrati samo ako monitoring, vidljivi problem ili stručni savjet opravdavaju reakciju.
    Koristiti samo sredstvo registrirano za kulturu i štetnika prema etiketi proizvoda; poštovati karencu, zaštitu pčela i lokalne propise.

- activityType: "spraying"
  title: "Zaštita od štetnika – limun (po potrebi)"
  monthStart: 4
  dayStart: 1
  monthEnd: 10
  dayEnd: 31
  notes: >
    Bijelo ulje ili drugo registrirano sredstvo razmatrati samo ako je prikladno prema kulturi, štetniku, fenofazi i etiketi proizvoda.
    Paučinac: registrirani pripravak razmatrati samo pri vidljivim znakovima i prema etiketi proizvoda.
    Poštovati doziranje, karencu, zaštitu pčela i lokalne propise.

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
    Limun nije otporan na mraz — moguća oštećenja ispod -3°C, a rizik od jačih oštećenja raste ispod -5°C.
    Za kontinentalnu klimu: premjestiti u zaštićeni prostor (5–10°C) prije mrazova.
    Pregledati na štetnike pred zimski smještaj.

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
    Eventualni tretman razmatrati samo ako monitoring, vidljivi problem ili stručni savjet opravdavaju reakciju.
    Koristiti samo sredstvo registrirano za kulturu i štetnika prema etiketi proizvoda; poštovati karencu, zaštitu pčela i lokalne propise.
    Na otvorenom u sjevernoj klimi rijedak problem.

- activityType: "spraying"
  title: "Zaštita od štetnika – naranča (po potrebi)"
  monthStart: 4
  dayStart: 1
  monthEnd: 6
  dayEnd: 30
  notes: >
    Bijelo ulje ili drugo registrirano sredstvo razmatrati samo ako je prikladno prema kulturi, štetniku, fenofazi i etiketi proizvoda.
    Poštovati doziranje, karencu, zaštitu pčela i lokalne propise.

- activityType: "harvest"
  title: "Berba naranče"
  monthStart: 12
  dayStart: 1
  monthEnd: 2
  dayEnd: 28
  notes: >
    Naranča dozrijeva zimi — prosinac do veljača.
    Može ostati na stablu neko vrijeme ako nema mraza ni oštećenja; redovito pratiti kvalitetu ploda.
    Za kontinentalnu klimu: uzgoj moguć u loncima, unutra zimi.

- activityType: "observation"
  title: "Priprema naranče za zimu"
  monthStart: 10
  dayStart: 1
  monthEnd: 11
  dayEnd: 15
  notes: >
    Premjestiti u zaštićen prostor (min. 5°C) prije prvih mrazova.
    Pregledati na štetnike.
    Smanjiti navodnjavanje.

---

### 🍊 MANDARIN (Citrus reticulata) — seasonProfile: autumn

Mandarina dozrijeva u jesen. Među ovdje navedenim citrusima relativno najotpornija na hladnoću (do oko -7°C kratkotrajno, ovisno o sorti, podlozi, starosti biljke, vlazi tla i mikrolokaciji).

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
    Eventualni tretman razmatrati samo ako monitoring, vidljivi problem ili stručni savjet opravdavaju reakciju.
    Koristiti samo sredstvo registrirano za kulturu i štetnika prema etiketi proizvoda; poštovati karencu, zaštitu pčela i lokalne propise.
    Rijedak problem u kontinentalnoj klimi.

- activityType: "spraying"
  title: "Zaštita od štetnika – mandarina (po potrebi)"
  monthStart: 4
  dayStart: 1
  monthEnd: 6
  dayEnd: 30
  notes: >
    Bijelo ulje ili drugo registrirano sredstvo razmatrati samo ako je prikladno prema kulturi, štetniku, fenofazi i etiketi proizvoda.
    Poštovati doziranje, karencu, zaštitu pčela i lokalne propise.

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
    Među ovdje navedenim citrusima relativno najotpornija na hladnoću — može podnijeti kratkotrajno do oko -7°C, ovisno o sorti, podlozi, starosti biljke, vlazi tla i mikrolokaciji.
    Za lončani uzgoj: premjestiti unutra pri prvim mrazovima.
    Pregledati na štetnike pred zimski smještaj.

---

---

# ══════════════════════════════════════════════════════
# FINAL RULES
# ══════════════════════════════════════════════════════

## Grouping reference

Groups used in this file are an organizing classification only:

- `pome`          — apple, pear, quince
- `stone`         — sweet_cherry, sour_cherry, plum, peach, nectarine, apricot, almond
- `mediterranean` — olive, pomegranate
- `citrus`        — lemon, orange, mandarin
- `nut`           — walnut, hazelnut

**Species-specific override rule.** Where a species' per-species block introduces, modifies, or contradicts the shared baseline, the per-species block is authoritative for that species. Group membership never overrides the species-specific block.

- `stone` members share a real baseline (trunk care, dormant oil, winter copper, pruning, watering, shutdown, inspection), and each species carries specifics in its own block — leaf-curl copper (peach / nectarine), early-bloom + frost-risk handling (apricot, almond), cherry-fly monitoring + optional bird-net (sweet_cherry, sour_cherry), plum-specific pest / fruit handling.
- `pome` members share the same baseline, with per-species specifics for pear (fire-blight copper) and quince (pome-specific copper timing).
- `mediterranean`, `citrus`, and `nut` members do not share the baseline. Current supported Mediterranean species each have their own Block 6 template. Fig is deferred from current V2 support. Pomegranate's template is structurally independent. Citrus uses a subtype (lemon | orange | mandarin) inside its Block 6 template.

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
| Apple        | SHARED    |SHARED| SHARED    | —            | SHARED   | ✓          | ✓     | ✓        | ✓    | SHARED    | SHARED | ✓       | SHARED    | SHARED  |
| Pear         | SHARED    |SHARED| SHARED    | ✓ bakt. palež| SHARED   | ✓          | ✓     | ✓        | ✓    | SHARED    | SHARED | ✓       | SHARED    | SHARED  |
| Quince       | SHARED    |SHARED| SHARED    | ✓ pred cvatnj| SHARED   | ✓          | ✓     | ✓ (opt)  | —    | SHARED    | SHARED | ✓       | SHARED    | SHARED  |
| Sweet cherry | SHARED    |SHARED| SHARED    | —            | SHARED   | ✓          | —     | ✓ (opt)  | ✓    | SHARED    | SHARED | ✓       | SHARED    | SHARED  |
| Sour cherry  | SHARED    |SHARED| SHARED    | —            | SHARED   | ✓          | —     | ✓ (opt)  | ✓    | SHARED    | SHARED | ✓       | SHARED    | SHARED  |
| Plum         | SHARED    |SHARED| SHARED    | —            | SHARED   | ✓          | ✓     | ✓        | ✓    | SHARED    | SHARED | ✓       | SHARED    | SHARED  |
| Peach        | SHARED    |SHARED| SHARED    | ✓ kovrčavost | SHARED   | ✓          | ✓     | ✓        | ✓    | SHARED    | SHARED | ✓       | SHARED    | SHARED  |
| Nectarine    | SHARED    |SHARED| SHARED    | ✓ kovrčavost | SHARED   | ✓          | ✓     | ✓        | ✓    | SHARED    | SHARED | ✓       | SHARED    | SHARED  |
| Apricot      | SHARED    |SHARED| SHARED    | ✓ pred cvatnj| SHARED   | ✓ mraz+šark| ✓     | ✓        | —    | SHARED    | SHARED | ✓       | SHARED    | SHARED  |
| Almond       | SHARED    |SHARED| SHARED    | ✓ ×2 (pred+krč)| SHARED | ✓ mraz+bol | ✓     | —        | —    | SHARED    | SHARED | ✓       | SHARED    | SHARED  |
| Olive        | —         | —    | —         | —            | ✓ ×2     | ✓ ×2       | ✓ opt | —        | —    | ✓         | ✓      | ✓       | —         | ✓       |
| Pomegranate  | —         | —    | —         | —            | ✓        | ✓ ×2       | —     | —        | —    | ✓         | ✓      | ✓       | ✓ (mlada) | —       |
| Lemon        | —         | —    | —         | —            | ✓        | ✓          | ✓ opt | —        | —    | ✓         | ✓      | ✓       | ✓         | —       |
| Orange       | —         | —    | —         | —            | ✓        | ✓          | ✓ opt | —        | —    | ✓         | ✓      | ✓       | ✓         | —       |
| Mandarin     | —         | —    | —         | —            | ✓        | ✓          | ✓ opt | —        | —    | ✓         | ✓      | ✓       | ✓         | —       |
| Walnut       | —         | —    | —         | ✓ rano prolj | ✓ ljetna | ✓ ×2       | —     | —        | —    | —         | —      | ✓       | —         | ✓ zima  |
| Hazelnut     | —         | —    | —         | —            | ✓ zimska | ✓ ×2       | —     | —        | —    | —         | —      | ✓       | —         | ✓ zima  |

Legend: SHARED = covered in shared block | ✓ = defined in species/block section | opt = notes indicate optional / condition-dependent relevance | — = not applicable

## Current V2 template coverage excludes deferred fig

Pome + stone (standard — shared block + per-species block applies):
Apple ✓ | Pear ✓ | Quince ✓ | Sweet cherry ✓ | Sour cherry ✓ | Plum ✓ | Peach ✓ | Nectarine ✓ | Apricot ✓ | Almond ✓

Mediterranean (Block 6 — no shared block):
Olive ✓ | Pomegranate ✓ (custom Block 6, structurally independent)

Deferred Mediterranean:
Fig deferred — not current V2 support

Citrus (Block 6 — no shared block):
Lemon ✓ | Orange ✓ | Mandarin ✓

Nut (Block 6 — no shared block; each species has its own custom template):
Walnut ✓ | Hazelnut ✓

---

# END OF FILE
