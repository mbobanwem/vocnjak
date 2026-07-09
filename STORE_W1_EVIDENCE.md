# STORE-W1 Evidence

Session: Session 21 - Native app path / PWA bridge / portability proof
Substep: STORE-W1
Date: 2026-07-09
Status: repository-side implementation and verification complete; owner-iPhone Safari physical export/import evidence not run in this environment.

## Authority

Read for this STORE-W1 pass:

- `ROADMAP.md` Session 21 / STORE-W1
- `DISTRIBUTION_DECISION_RECORD.md` section 10
- `CORE_AUDIT.md` canonical-core and D2 boundaries
- `CURRENT_STATE.md`
- `REGIONALIZATION_DECISION_RECORD.md`
- `PRODUCT_VISION.md`
- `V2_PRINCIPLES.md`
- `V2_AGENT_ENTRYPOINT.md`
- relevant `V2_ARCHITECTURE.md`, `V2_DOMAIN_MODEL.md`, and `V2_UX_MODEL.md` export/import and storage sections
- `README.md`
- `vocnjak-seasonal-pass-a-evidence.md`

Key constraints preserved:

- PWA/web remains bridge/dev/verifier only.
- `validateForBackup` remains the only authoritative full-store validator.
- Validated V2 JSON export/import remains the portability contract.
- No schema, data model, validator, canonical import/export semantic, timezone, catalog/content, native shell, sync/cloud/account, monetization, AI/photo, notification, install-promotion, icon, or public web-product work was implemented.

## Implementation Findings

| STORE-W1 item | Result |
|---|---|
| Offline cold-start correctness in `sw.js` | Required implementation. Navigation is now network-first for Safari redirect safety, with cached exact-page fallback and app-shell fallback when the origin is unreachable. |
| Safari redirect rationale | Preserved in `sw.js` comments and behavior: navigation still goes to network first; cache is used only on network failure. |
| `navigator.storage.persist()` | Required implementation. Startup requests persistent storage when supported; unsupported/denied/failure paths only log and are non-fatal. |
| Font self-hosting/bundling | Required implementation. Google Fonts runtime links removed; DM Sans, Playfair Display, and Fraunces WOFF2 assets are local under `fonts/`. |
| `manifest.json` stale-copy cleanup | Required implementation. Description no longer describes a generic garden/task/treatment app. No icon or identity redesign. |
| Owner-iPhone Safari export/import evidence | Not run here. Exact owner steps are below. |
| Privacy/support page stubs | Required implementation. Added minimal `privacy.html` and `support.html`, cached by the service worker. |
| D2 bridge-channel evidence | Captured through browser export/import round-trip; no V2 pre-import backup key observed; no policy change implemented. |

## Verification Results

Repository verifiers:

```text
node tools/verify-reg-r1-runtime.mjs
RESULT: PASS (32/32)

node tools/verify-content-parity.mjs
RESULT: PASS
```

Syntax/static checks:

```text
node --check sw.js
PASS

manifest JSON parse
PASS

remote font reference scan
PASS - no fonts.googleapis / fonts.gstatic runtime references found in active app files
```

In-app Browser smoke check:

```text
URL: http://127.0.0.1:8766/
Title: Dnevnik Voćnjaka
V2 active: yes
Visible route: Pregled
Postavke/export/import controls present: yes
Browser-captured console warnings/errors: none
Note: Browser domSnapshot API failed in this environment with incrementalAriaSnapshot missing, so rendered checks used Browser evaluate/screenshot and storage/service-worker checks used local Chrome/CDP.
```

Chrome/CDP online bridge check:

```text
Service worker controlled page: true
Controller script: http://127.0.0.1:8766/sw.js
Cache names: ["vocnjak-store-w1-v2"]
Missing cached STORE-W1 assets: []
Remote font requests: []
Local font resources observed: fonts/fonts.css plus local WOFF2 assets
Storage persistence supported: true
navigator.storage.persist() result in headless Chrome: false
Persist denial was non-fatal; validator still returned []
manifest.json status: valid parsed JSON with cleaned description
privacy.html status: 200, STORE-W1 stub present
support.html status: 200, STORE-W1 stub present
```

Export/import bridge-channel check:

```text
Sample one-plant V2 store validation: []
Export status: Sigurnosna kopija spremljena: vocnjak-v2-2026-07-09T135610.json
Exported JSON validation: []
Exported plant count: 1
Exported plant label: STORE-W1 test apple

Invalid import status: Uvoz ne prolazi provjeru: settings.country unknown or not live.
Invalid import preserved existing data: true
Invalid import confirmation panel visible: false

Valid import ready status: Datoteka je spremna. Potvrdi zamjenu svih podataka.
Valid import confirmation panel visible: true
Valid import success status: Uvoz je uspješan. Osvježi stranicu da vidiš promjene.
Imported JSON validation after replace: []
Imported plant count: 1
Imported plant label: STORE-W1 test apple

Observed V2 pre-import backup keys: []
Observed backup/preimport-related keys in test profile: []
```

Server-down offline navigation proof:

```text
Setup: service worker installed, Cache Storage populated, local HTTP server stopped, browser HTTP cache disabled.
Navigation URL: http://127.0.0.1:8766/index.html?server-down-cold=<timestamp>
Result: page loaded
Title: Dnevnik Voćnjaka
HTML class: v2-active
Service worker controlled: true
Validator type: function
Store validation after offline load: []
Cache names: ["vocnjak-store-w1-v2"]
Remote font requests during offline load: []
Observed text included Pregled and seasonal content for the preserved one-plant store.
```

## D2 Evidence

Confirmed bridge behavior:

- V2 export validates the complete store with `validateForBackup` before producing JSON.
- V2 import validates the complete candidate with `validateForBackup` before showing the confirmation panel.
- Invalid import fails closed and leaves current `vocnjak_v2` byte-identical in the tested path.
- Valid import replaces the full V2 store only after explicit confirmation.
- The tested valid export/import round-trip preserved a one-plant V2 store and validated after import.

Observed policy facts:

- No V2 pre-import backup key was created in the tested bridge import path.
- Existing export re-persist behavior was not changed.
- STORE-W1 did not decide D2 policy. D2 remains a CAP-BUILD plan item.

D3:

- STORE-W1 testing did not trip the 1 MB import size cap.
- The cap was not changed.

## Owner-iPhone Safari Steps

Physical owner-iPhone Safari evidence was not executed here. To collect it:

1. Use the owner’s normal Safari bridge URL. For service-worker/offline checks on iPhone, the URL must be a secure context such as HTTPS; a plain `http://<Mac LAN IP>` page can still test export/import but generally will not prove iOS service-worker offline behavior.
2. Open the app online in iPhone Safari.
3. Open Postavke.
4. Tap `Izvezi sigurnosnu kopiju` and save the JSON file in Files.
5. Without editing the JSON, tap `Uvezi sigurnosnu kopiju`, choose the exported file, and wait for `Datoteka je spremna. Potvrdi zamjenu svih podataka.`
6. Tap `Da, uvezi`.
7. Confirm the success message appears, reload Safari, and verify the orchard data is still present.
8. Record device model, iOS version, Safari/PWA mode, URL type (HTTPS or other), export filename, import status text, and whether data remained present after reload.

Do not mark owner-iPhone Safari evidence PASS until those physical steps are actually run.
