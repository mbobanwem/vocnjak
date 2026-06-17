#!/usr/bin/env node
//
// tools/verify-reg-r1-runtime.mjs
//
// Vocnjak REG-R1 runtime verifier - READ-ONLY, dev-only guardrail.
//
// Purpose
//   Prove the REG-R1-R regionalization foundation without relying on a
//   temporary /private/tmp verifier. The checks exercise the committed
//   index.html V2 store/catalog/backup runtime slices and static REG-R1
//   leakage boundaries.
//
// Run
//   node tools/verify-reg-r1-runtime.mjs
//   exit 0 = all checks pass, exit 1 = at least one check failed.

import { existsSync, readFileSync } from 'node:fs';
import vm from 'node:vm';

const REPO_ROOT = new URL('../', import.meta.url);

function read(relPath) {
  return readFileSync(new URL(relPath, REPO_ROOT), 'utf8');
}

function readIfExists(relPath) {
  const url = new URL(relPath, REPO_ROOT);
  return existsSync(url) ? readFileSync(url, 'utf8') : '';
}

const html = read('index.html');

function sliceBetween(text, startNeedle, endNeedle) {
  const start = text.indexOf(startNeedle);
  if (start === -1) throw new Error('marker not found: ' + startNeedle);
  const end = text.indexOf(endNeedle, start);
  if (end === -1) throw new Error('marker not found: ' + endNeedle);
  return text.slice(start, end + endNeedle.length);
}

const regRuntimeSource = sliceBetween(html, '// BEGIN V2 STORE', '// END V2 BACKUP');
const postavkeMarkup = sliceBetween(html, '<!-- BEGIN V2 POSTAVKE', '<!-- END V2 POSTAVKE');

class FakeClassList {
  constructor() {
    this.values = new Set();
  }
  add(...names) {
    for (const name of names) this.values.add(name);
  }
  remove(...names) {
    for (const name of names) this.values.delete(name);
  }
  contains(name) {
    return this.values.has(name);
  }
}

class FakeElement {
  constructor(tagName, id = '') {
    this.tagName = tagName.toUpperCase();
    this.id = id;
    this.classList = new FakeClassList();
    this.attributes = Object.create(null);
    this.listeners = Object.create(null);
    this.children = [];
    this.style = {};
    this.hidden = false;
    this.textContent = '';
    this.value = '';
    this.files = [];
    this.parentNode = null;
  }
  setAttribute(name, value) {
    this.attributes[name] = String(value);
  }
  getAttribute(name) {
    return this.attributes[name];
  }
  appendChild(child) {
    child.parentNode = this;
    this.children.push(child);
    return child;
  }
  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) this.children.splice(index, 1);
    child.parentNode = null;
    return child;
  }
  addEventListener(type, listener) {
    if (!this.listeners[type]) this.listeners[type] = [];
    this.listeners[type].push(listener);
  }
  dispatchEvent(event) {
    if (!event.target) event.target = this;
    const listeners = this.listeners[event.type] || [];
    for (const listener of listeners) listener.call(this, event);
    return true;
  }
  click() {
    this.dispatchEvent({
      type: 'click',
      target: this,
      preventDefault() {}
    });
  }
  focus() {}
  closest() {
    return null;
  }
  getBoundingClientRect() {
    return { top: 0, height: 0 };
  }
}

class FakeDocument {
  constructor() {
    this.elements = new Map();
    this.documentElement = new FakeElement('html', 'html');
    this.documentElement.classList.add('v2-active');
    this.body = new FakeElement('body', 'body');
    this.activeElement = this.body;
  }
  getElementById(id) {
    if (!this.elements.has(id)) this.elements.set(id, new FakeElement('div', id));
    return this.elements.get(id);
  }
  createElement(tagName) {
    return new FakeElement(tagName);
  }
  addEventListener() {}
  removeEventListener() {}
  contains() {
    return true;
  }
}

class FakeLocalStorage {
  constructor(seed = {}) {
    this.map = new Map(Object.entries(seed));
  }
  getItem(key) {
    return this.map.has(key) ? this.map.get(key) : null;
  }
  setItem(key, value) {
    this.map.set(key, String(value));
  }
  removeItem(key) {
    this.map.delete(key);
  }
  clear() {
    this.map.clear();
  }
}

class FakeBlob {
  constructor(parts, options = {}) {
    this.parts = parts.map((part) => String(part));
    this.type = options.type || '';
  }
  text() {
    return Promise.resolve(this.parts.join(''));
  }
}

class FakeFileReader {
  readAsText(file) {
    this.result = file.content;
    if (typeof this.onload === 'function') this.onload({ target: this });
  }
}

function byteSize(text) {
  return Buffer.byteLength(text, 'utf8');
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function stableJson(value) {
  return JSON.stringify(value);
}

function boot(seedStore) {
  const document = new FakeDocument();
  const localStorage = new FakeLocalStorage();
  const downloads = [];
  const runtimeLogs = [];
  if (arguments.length > 0) localStorage.setItem('vocnjak_v2', JSON.stringify(seedStore));

  const sandbox = {
    console: {
      log(...args) {
        runtimeLogs.push(['log', ...args]);
      },
      warn(...args) {
        runtimeLogs.push(['warn', ...args]);
      },
      error(...args) {
        runtimeLogs.push(['error', ...args]);
      }
    },
    document,
    localStorage,
    location: {
      hash: '#v2',
      pathname: '/index.html',
      search: '',
      reload() {}
    },
    navigator: {},
    Blob: FakeBlob,
    FileReader: FakeFileReader,
    URL: {
      createObjectURL(blob) {
        const url = 'blob:vocnjak-reg-r1-' + downloads.length;
        downloads.push({ url, blob });
        return url;
      },
      revokeObjectURL() {}
    },
    CustomEvent: class CustomEvent {
      constructor(type, init = {}) {
        this.type = type;
        this.bubbles = !!init.bubbles;
      }
    },
    addEventListener() {},
    removeEventListener() {}
  };
  sandbox.window = sandbox;

  const context = vm.createContext(sandbox);
  vm.runInContext(regRuntimeSource, context, { filename: 'index.html', timeout: 10000 });
  return { context, document, localStorage, downloads, runtimeLogs };
}

function readStore(harness) {
  const raw = harness.localStorage.getItem('vocnjak_v2');
  if (raw === null) throw new Error('vocnjak_v2 missing');
  return JSON.parse(raw);
}

function validStore() {
  return readStore(boot());
}

function makePlant(overrides = {}) {
  return {
    plant_id: 'plant_2026-06-17T08-00-00-000Z_abcde',
    catalog_version: 'catalog_v1',
    stable_order: 0,
    species: 'apple',
    ...overrides
  };
}

function makeV1Store({ withPlant = false } = {}) {
  const store = validStore();
  store.meta.store_format_version = 1;
  delete store.settings;
  if (withPlant) store.plants = [makePlant()];
  return store;
}

function contextJson(harness, value) {
  harness.context.__jsonInput = JSON.stringify(value);
  return vm.runInContext('JSON.parse(__jsonInput)', harness.context);
}

function validateInFreshRuntime(store) {
  const harness = boot();
  const parsed = contextJson(harness, store);
  return harness.context.window.v2ValidateForBackup(parsed);
}

function prepareInHarness(harness, store) {
  const parsed = contextJson(harness, store);
  return clone(harness.context.window.v2PrepareStoreForCurrentRuntime(parsed));
}

function expect(condition, message) {
  if (!condition) throw new Error(message);
}

function expectValid(errors) {
  expect(Array.isArray(errors), 'validator did not return an array');
  expect(errors.length === 0, 'expected valid store, got: ' + errors.join('; '));
}

function expectError(errors, needle) {
  expect(Array.isArray(errors), 'validator did not return an array');
  expect(
    errors.some((error) => error.indexOf(needle) !== -1),
    'expected error containing "' + needle + '", got: ' + errors.join('; ')
  );
}

function countOccurrences(text, needle) {
  let count = 0;
  let index = 0;
  while (true) {
    const next = text.indexOf(needle, index);
    if (next === -1) return count;
    count += 1;
    index = next + needle.length;
  }
}

function mutate(base, fn) {
  const next = clone(base);
  fn(next);
  return next;
}

const checks = [];

function check(id, title, fn) {
  checks.push({ id, title, fn });
}

check('01', 'New empty store initializes as v2', () => {
  const store = validStore();
  expect(store.meta.store_format_version === 2, 'store_format_version is not 2');
  expect(store.settings && store.settings.country === null && store.settings.region === null, 'settings null pair missing');
  expect(store.meta.active_catalog_version === 'catalog_v1', 'catalog_v1 was not seeded as active catalog');
  expectValid(validateInFreshRuntime(store));
  return 'format=2, settings present, catalog_v1 active';
});

check('02', 'Existing local v1 store migrates to v2', () => {
  const v1 = makeV1Store({ withPlant: true });
  const harness = boot(v1);
  const migrated = readStore(harness);
  expect(migrated.meta.store_format_version === 2, 'local store did not migrate to v2');
  expect(migrated.settings.country === null && migrated.settings.region === null, 'migrated settings are not null/null');
  expect(migrated.plants[0].catalog_version === 'catalog_v1', 'plant catalog_version changed during migration');
  expectValid(validateInFreshRuntime(migrated));
  return 'v1 local store became valid v2';
});

check('03', 'Imported v1 backup migrates in memory before replacement', () => {
  const harness = boot();
  const before = harness.localStorage.getItem('vocnjak_v2');
  const prepared = prepareInHarness(harness, makeV1Store({ withPlant: true }));
  expect(prepared.migrated === true, 'prepareStore did not report migrated=true');
  expect(prepared.store.meta.store_format_version === 2, 'prepared import is not v2');
  expect(prepared.store.settings.country === null && prepared.store.settings.region === null, 'prepared settings missing');
  expect(prepared.store.plants[0].catalog_version === 'catalog_v1', 'prepared plant pin changed');
  expect(harness.localStorage.getItem('vocnjak_v2') === before, 'prepareStore mutated localStorage before replacement');
  expectValid(validateInFreshRuntime(prepared.store));
  return 'prepareStore migrates v1 without replacing current storage';
});

check('04', 'Valid v2 backup imports successfully', () => {
  const harness = boot();
  const original = harness.localStorage.getItem('vocnjak_v2');
  const importStore = validStore();
  importStore.settings = { country: 'hr', region: 'hr.continental' };
  expectValid(validateInFreshRuntime(importStore));

  const raw = JSON.stringify(importStore);
  const input = harness.document.getElementById('v2ImportFile');
  input.files = [{ size: byteSize(raw), content: raw }];
  input.dispatchEvent({ type: 'change', target: input });
  expect(harness.localStorage.getItem('vocnjak_v2') === original, 'import replaced storage before confirmation');
  expect(harness.document.getElementById('v2ImportConfirm').hidden === false, 'import confirmation was not shown');

  harness.document.getElementById('v2ImportConfirmYes').click();
  expect(stableJson(readStore(harness)) === stableJson(importStore), 'confirmed import did not replace with valid v2 payload');
  return 'valid v2 file reaches pending state and confirmed replacement';
});

check('05', 'Export emits v2 and includes settings', () => {
  const harness = boot();
  harness.document.getElementById('v2ExportBtn').click();
  expect(harness.downloads.length === 1, 'export did not create one download blob');
  const exported = JSON.parse(harness.downloads[0].blob.parts.join(''));
  expect(exported.meta.store_format_version === 2, 'exported store is not v2');
  expect(exported.settings && Object.keys(exported.settings).sort().join(',') === 'country,region', 'exported settings missing or malformed');
  expectValid(validateInFreshRuntime(exported));
  return 'export blob is valid v2 with settings';
});

check('06', 'Settings are preserved by save candidates or rejected if missing', () => {
  const store = validStore();
  store.settings = { country: 'hr', region: 'hr.continental' };
  const nextStore = mutate(store, (draft) => {
    draft.plants.push(makePlant({ stable_order: 1, plant_id: 'plant_2026-06-17T08-00-00-001Z_faced' }));
  });
  expectValid(validateInFreshRuntime(nextStore));

  const missingSettings = mutate(nextStore, (draft) => {
    delete draft.settings;
  });
  expectError(validateInFreshRuntime(missingSettings), 'missing key: settings');
  expect(countOccurrences(html, 'settings: current.store.settings') >= 4, 'save candidate copy-through anchors missing');
  return 'validator rejects missing settings; save candidates copy current.store.settings';
});

check('07', 'Unknown country fails closed', () => {
  const store = mutate(validStore(), (draft) => {
    draft.settings = { country: 'si', region: 'hr.continental' };
  });
  expectError(validateInFreshRuntime(store), 'settings.country unknown or not live');
  return 'settings.country=si rejected';
});

check('08', 'Unknown region fails closed', () => {
  const store = mutate(validStore(), (draft) => {
    draft.settings = { country: 'hr', region: 'hr.adriatic' };
  });
  expectError(validateInFreshRuntime(store), 'settings.region unknown or not live');
  return 'settings.region=hr.adriatic rejected';
});

check('09', 'Unknown catalog fails closed', () => {
  const store = mutate(validStore(), (draft) => {
    draft.catalogs.catalog_v2 = clone(draft.catalogs.catalog_v1);
  });
  expectError(validateInFreshRuntime(store), 'catalogs contains unknown catalog');
  return 'extra catalog_v2 rejected';
});

check('10', 'Missing active catalog fails closed', () => {
  const store = mutate(validStore(), (draft) => {
    delete draft.catalogs.catalog_v1;
  });
  const errors = validateInFreshRuntime(store);
  expect(
    errors.some((error) => error.indexOf('catalogs must contain at least one known catalog') !== -1) ||
      errors.some((error) => error.indexOf('meta.active_catalog_version must be present in catalogs') !== -1),
    'expected missing active catalog error, got: ' + errors.join('; ')
  );
  expect(regRuntimeSource.indexOf('meta.active_catalog_version must be present in catalogs') !== -1, 'active-catalog presence guard missing in runtime source');
  return 'catalog_v1 removal rejected';
});

check('11', 'Missing referenced catalog_version fails closed', () => {
  const store = mutate(validStore(), (draft) => {
    draft.plants.push(makePlant({ catalog_version: 'catalog_missing' }));
  });
  expectError(validateInFreshRuntime(store), 'catalog_version must reference a known retained catalog');
  return 'plant reference to catalog_missing rejected';
});

check('12', 'Persisted contentPack fails closed anywhere in stored data', () => {
  const plantStore = mutate(validStore(), (draft) => {
    draft.plants.push(makePlant({ contentPack: 'catalog.hr.continental' }));
  });
  expectError(validateInFreshRuntime(plantStore), 'contentPack is forbidden');

  const nestedStore = mutate(validStore(), (draft) => {
    draft.review_state = { nested: { contentPack: 'catalog.hr.continental' } };
  });
  expectError(validateInFreshRuntime(nestedStore), 'contentPack is forbidden');
  return 'plant and nested review_state contentPack rejected';
});

check('13', 'Persisted pack_version fails closed anywhere in stored data', () => {
  const plantStore = mutate(validStore(), (draft) => {
    draft.plants.push(makePlant({ pack_version: 'v1' }));
  });
  expectError(validateInFreshRuntime(plantStore), 'pack_version is forbidden');

  const nestedStore = mutate(validStore(), (draft) => {
    draft.review_state = { nested: { pack_version: 'v1' } };
  });
  expectError(validateInFreshRuntime(nestedStore), 'pack_version is forbidden');
  return 'plant and nested review_state pack_version rejected';
});

check('14', 'settings.language fails closed', () => {
  const store = mutate(validStore(), (draft) => {
    draft.settings.language = 'hr';
  });
  expectError(validateInFreshRuntime(store), 'unexpected settings key: language');
  return 'settings.language rejected';
});

check('15', 'Existing plants keep pinned catalog_version', () => {
  const v1 = makeV1Store({ withPlant: true });
  const localMigrated = readStore(boot(v1));
  const importPrepared = prepareInHarness(boot(), v1).store;
  expect(localMigrated.plants[0].catalog_version === 'catalog_v1', 'local migration changed plant catalog_version');
  expect(importPrepared.plants[0].catalog_version === 'catalog_v1', 'import migration changed plant catalog_version');
  return 'local and import migrations keep plant pin catalog_v1';
});

check('16', 'HR Adriatic is not live, selectable, stored, or activated', () => {
  expect(html.indexOf('hr.adriatic') === -1, 'runtime contains hr.adriatic');
  expect(html.indexOf('Jadranska') === -1 && html.indexOf('Jadran') === -1, 'runtime contains Adriatic UI text');
  const store = mutate(validStore(), (draft) => {
    draft.settings = { country: 'hr', region: 'hr.adriatic' };
  });
  expectError(validateInFreshRuntime(store), 'settings.region unknown or not live');
  return 'no hr.adriatic runtime token; validator rejects it';
});

check('17', 'No foreign country or region ids are live', () => {
  expect(regRuntimeSource.indexOf('var LIVE_COUNTRIES = { hr: true };') !== -1, 'LIVE_COUNTRIES is not registry-of-one');
  expect(regRuntimeSource.indexOf("var LIVE_REGIONS = { 'hr.continental': { country: 'hr', catalog_version: 'catalog_v1' } };") !== -1, 'LIVE_REGIONS is not registry-of-one');
  for (const token of [' si:', ' at:', ' de:', ' it:', ' ch:', ' fr:', ' ba:', ' rs:', ' xk:', "'si.", "'at.", "'de.", "'it.", "'ch.", "'fr."]) {
    expect(regRuntimeSource.indexOf(token) === -1, 'foreign live token found: ' + token);
  }
  return 'live runtime constants contain only hr / hr.continental / catalog_v1';
});

check('18', 'No region picker is exposed', () => {
  expect(postavkeMarkup.indexOf('<select') === -1, 'Postavke contains a select control');
  expect(!/\b(country|region)\b/i.test(postavkeMarkup), 'Postavke exposes country/region ids');
  expect(!/(Regija|Drzava|Zemlja|Jadran|kontinental)/i.test(postavkeMarkup), 'Postavke exposes region/country copy');
  return 'Postavke has backup/about/advanced only';
});

check('19', 'No private-PWA baseline disclosure is shown', () => {
  const disclosureAnchor = 'Datumi su okvirni podsjetnici za kontinentalnu Hrvatsku';
  expect(html.indexOf(disclosureAnchor) === -1, 'future baseline disclosure is present in runtime');
  expect(postavkeMarkup.indexOf('kontinentalnu Hrvatsku') === -1, 'Postavke shows continental Croatia baseline disclosure');
  return 'future public disclosure copy absent from private PWA runtime';
});

check('20', 'No manifest/service-worker/native/sync/i18n/adoption/pack-delivery REG leakage', () => {
  const manifest = readIfExists('manifest.json');
  const sw = readIfExists('sw.js');
  const forbiddenInAux = [
    'hr.adriatic',
    'hr.continental',
    'catalog.hr',
    'catalog_v2',
    'contentPack',
    'pack_version',
    'settings.language',
    'i18n',
    'REG-',
    'regional',
    'adoption',
    'native',
    'packs/'
  ];
  for (const [name, source] of [['manifest.json', manifest], ['sw.js', sw]]) {
    for (const token of forbiddenInAux) {
      expect(source.indexOf(token) === -1, name + ' contains REG leakage token: ' + token);
    }
  }
  for (const token of ['settings.language', 'REG-PACKS', 'pack-delivery', 'pack delivery', 'existing-plant adoption']) {
    expect(html.indexOf(token) === -1, 'index.html contains later-scope token: ' + token);
  }
  return 'aux files and runtime contain no REG pack/i18n/adoption/native leakage tokens';
});

console.log('Vocnjak REG-R1 runtime verifier (read-only)');
console.log('');

let passed = 0;
for (const item of checks) {
  try {
    const detail = item.fn();
    passed += 1;
    console.log(item.id + ' PASS ' + item.title + ' - ' + detail);
  } catch (error) {
    console.log(item.id + ' FAIL ' + item.title + ' - ' + (error && error.message ? error.message : error));
  }
}

console.log('');
console.log('RESULT: ' + (passed === checks.length ? 'PASS' : 'FAIL') + ' (' + passed + '/' + checks.length + ')');
if (passed !== checks.length) process.exitCode = 1;
