#!/usr/bin/env node
//
// tools/verify-content-parity.mjs
//
// Vocnjak content-parity verifier — READ-ONLY, dev-only guardrail.
//
// Purpose
//   Prevent "parity by eye". After the Phase 1 content-reliability work
//   (source-backed beginner-clarity notes), this script proves that the
//   runtime (index.html) still carries the stable anchors that work
//   introduced, that the source (V2_ORCHARD_PLAN_TEMPLATES.md) still backs
//   them, and that the touched notes did not reintroduce discouraged wording.
//
// What this is NOT
//   - It is NOT a full JavaScript or Markdown parser. It uses string anchors
//     on purpose: short, distinctive, stable semantic phrases that survive
//     ordinary copy-polish but break loudly if a source-backed line is dropped.
//   - The discouraged-wording guard is scoped ONLY to the 7 Phase 1 note
//     blocks. Legacy / out-of-scope notes (e.g. pear post-bloom, olive copper,
//     the shared STANDARD notes) legitimately still use older phrasing such as
//     a "Primijeniti" opener, so a global ban would false-fail them.
//   - The catalog species list below is the CURRENT runtime key set, not a
//     desired future catalog. There is intentionally no `fig` and no `citrus`.
//
// Read-only contract
//   Imports only `node:fs` and uses only `readFileSync`. It never writes,
//   deletes, spawns a process, or touches the network. Running it does not
//   change any repo file or app data. Files are resolved relative to this
//   script via `import.meta.url`, so it runs from any working directory.
//
// Run
//   node tools/verify-content-parity.mjs
//   exit 0 = all checks pass, exit 1 = at least one check failed.

import { readFileSync } from 'node:fs';

// Resolve repo root from this file's location (tools/ -> repo root).
const REPO_ROOT = new URL('../', import.meta.url);
function read(relPath) {
  return readFileSync(new URL(relPath, REPO_ROOT), 'utf8');
}

// ---------------------------------------------------------------------------
// Anchor tables. Each anchor defends a specific Phase 1 content commit; keep
// the phrases stable and edit them only intentionally alongside a note change.
// ---------------------------------------------------------------------------

// Group A: the 7 Phase 1-touched runtime note blocks and the anchors that must
// appear INSIDE each block (block-scoped, not anywhere in the file).
const PHASE1_NOTE_ANCHORS = [
  {
    key: 'apple.fungicide.post_bloom_scab_mildew',
    anchors: [
      'Krastavost se na mladim listovima',
      'Pepelnica se vidi',
      'Aplikacija ne određuje tretman',
      'poljoprivrednu ljekarnu'
    ]
  },
  {
    key: 'peach.fungicide.post_bloom_monilia',
    anchors: [
      'Monilija (smeđa trulež)',
      'Što gledati:',
      'breskvin savijač, lisne uši',
      'Praćenje ne stvara obvezu tretmana',
      'Aplikacija ne određuje tretman'
    ]
  },
  {
    key: 'nectarine.fungicide.post_bloom_monilia',
    anchors: [
      'Monilija (smeđa trulež)',
      'Što gledati:',
      'breskvin savijač, lisne uši',
      'Aplikacija ne određuje tretman'
    ]
  },
  {
    key: 'plum.fungicide.post_bloom_monilia_leaf_spot',
    anchors: [
      'Monilija (smeđa trulež)',
      'Pjegavost lista pokazuje se kao sitne pjege ili rupice na listu',
      'Insekticid protiv šljivinog savijača'
    ]
  },
  {
    key: 'apricot.fungicide.post_bloom_monilia',
    anchors: [
      'Monilija (smeđa trulež)',
      'Mraz ili monilija?',
      'Štetu od mraza prskanje ne može popraviti'
    ]
  },
  {
    key: 'peach.copper.leaf_curl_buds_closed',
    anchors: [
      'Kovrčavost se vidi na mladim listovima',
      'Taphrina deformans'
    ]
  },
  {
    key: 'nectarine.copper.leaf_curl_buds_closed',
    anchors: [
      'Kovrčavost se vidi na mladim listovima'
    ]
  }
];

// Group A also: split prerano/prekasno guidance must exist somewhere in runtime.
const RUNTIME_SHARED_ANCHORS = ['Prerano prskanje', 'Prekasno prskanje'];

// Group B: discouraged wording, checked ONLY inside the 7 Phase 1 blocks above.
// Note: `prozor` and `obvezu tretmana` are intentionally NOT here — they appear
// legitimately ("fenološki prozor", "Praćenje ne stvara obvezu tretmana.").
const DISCOURAGED_SUBSTRINGS = [
  'apoteka',
  'nasad',
  'mlado tkivo',
  'tretman ima smisla',
  'obveza tretmana',
  'prozor je otvoren'
];

// Group C: spray-safety relevance-filtering helpers + canonical array, and the
// category literals. The category is `copper_peach_nectarine`, not `copper_peach`.
const SPRAY_HELPERS = [
  'spraySafetyNotesForWindow',
  'spraySafetyLineCategory',
  'isSprayActionType',
  'ACTION_WINDOW_SPRAY_SAFETY_NOTES_HR'
];
const SPRAY_CATEGORIES = [
  'copper_oil',
  'bees',
  'mixing',
  'copper_apricot',
  'copper_peach_nectarine'
];

// Group D: current runtime CATALOG_SPECIES keys (NOT a future catalog wishlist).
const RUNTIME_SPECIES_KEYS = [
  'apple', 'sweet_cherry', 'sour_cherry', 'plum', 'peach', 'nectarine',
  'pear', 'quince', 'apricot', 'almond', 'walnut', 'hazelnut',
  'olive', 'pomegranate'
];

// Group E: anchors that must still exist in the source so runtime anchors are
// not floating without a source-of-truth backing.
const SOURCE_ANCHORS = [
  'Mraz ili monilija',
  'Pjegavost lista',
  'Praćenje pomaže procijeniti',
  'smeđa trulež',
  'Kovrčavost',
  'Aplikacija ne određuje tretman'
];

// ---------------------------------------------------------------------------
// Extraction helpers (string slicing only; not a real parser).
// ---------------------------------------------------------------------------

// Returns the body between `'<key>': note([` and the next `])`, or null if the
// note key is not found. Note strings never contain `])`, so the first `])`
// after the marker is the true block end.
function extractNoteBlock(html, key) {
  const marker = "'" + key + "': note([";
  const start = html.indexOf(marker);
  if (start === -1) return null;
  const bodyStart = start + marker.length;
  const end = html.indexOf('])', bodyStart);
  if (end === -1) return null;
  return html.slice(bodyStart, end);
}

// Returns the content of the first quoted string line in a note block body.
function firstNoteLine(blockBody) {
  const m = /'([^']*)'/.exec(blockBody);
  return m ? m[1] : null;
}

// Returns the balanced `{ ... }` object literal that follows `marker`, using
// brace counting. Safe here because CATALOG_SPECIES values are numeric/nested
// objects with no braces inside string values.
function extractBalancedObject(text, marker) {
  const at = text.indexOf(marker);
  if (at === -1) return null;
  const open = text.indexOf('{', at);
  if (open === -1) return null;
  let depth = 0;
  for (let i = open; i < text.length; i++) {
    const ch = text[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) return text.slice(open, i + 1);
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Checks. Each returns { ok, lines: [{ ok, text }] } for grouped reporting.
// ---------------------------------------------------------------------------

function checkGroupA(html) {
  const lines = [];
  let ok = true;

  for (const entry of PHASE1_NOTE_ANCHORS) {
    const block = extractNoteBlock(html, entry.key);
    if (block === null) {
      ok = false;
      lines.push({ ok: false, text: entry.key + ': note block NOT FOUND' });
      continue;
    }
    const missing = entry.anchors.filter((a) => block.indexOf(a) === -1);
    if (missing.length === 0) {
      lines.push({ ok: true, text: entry.key });
    } else {
      ok = false;
      lines.push({ ok: false, text: entry.key + ': missing ' + missing.map((m) => '"' + m + '"').join(', ') });
    }
  }

  const missingShared = RUNTIME_SHARED_ANCHORS.filter((a) => html.indexOf(a) === -1);
  if (missingShared.length === 0) {
    lines.push({ ok: true, text: 'shared prerano/prekasno: ' + RUNTIME_SHARED_ANCHORS.join(' / ') });
  } else {
    ok = false;
    lines.push({ ok: false, text: 'shared prerano/prekasno: missing ' + missingShared.map((m) => '"' + m + '"').join(', ') });
  }

  return { ok, lines };
}

function checkGroupB(html) {
  const lines = [];
  let ok = true;

  for (const entry of PHASE1_NOTE_ANCHORS) {
    const block = extractNoteBlock(html, entry.key);
    if (block === null) {
      ok = false;
      lines.push({ ok: false, text: entry.key + ': note block NOT FOUND' });
      continue;
    }
    const violations = [];
    for (const bad of DISCOURAGED_SUBSTRINGS) {
      if (block.indexOf(bad) !== -1) violations.push('discouraged "' + bad + '"');
    }
    const first = firstNoteLine(block);
    if (first !== null) {
      if (first.indexOf('Primijeniti') === 0) violations.push('first line opens with "Primijeniti"');
      if (first === 'Nakon cvatnje.') violations.push('first line is bare "Nakon cvatnje."');
    }
    if (violations.length > 0) {
      ok = false;
      lines.push({ ok: false, text: entry.key + ': ' + violations.join('; ') });
    }
  }

  if (ok) lines.push({ ok: true, text: 'Phase 1 note blocks (7) clean' });
  return { ok, lines };
}

function checkGroupC(html) {
  const lines = [];
  let ok = true;

  const missingHelpers = SPRAY_HELPERS.filter((h) => html.indexOf(h) === -1);
  if (missingHelpers.length === 0) {
    lines.push({ ok: true, text: 'helpers present (' + SPRAY_HELPERS.length + ')' });
  } else {
    ok = false;
    lines.push({ ok: false, text: 'missing helpers: ' + missingHelpers.join(', ') });
  }

  const missingCats = SPRAY_CATEGORIES.filter((c) => html.indexOf(c) === -1);
  if (missingCats.length === 0) {
    lines.push({ ok: true, text: 'categories present (' + SPRAY_CATEGORIES.length + ')' });
  } else {
    ok = false;
    lines.push({ ok: false, text: 'missing categories: ' + missingCats.join(', ') });
  }

  return { ok, lines };
}

function checkGroupD(html) {
  const lines = [];
  let ok = true;

  const block = extractBalancedObject(html, 'var CATALOG_SPECIES = {');
  if (block === null) {
    return { ok: false, lines: [{ ok: false, text: 'CATALOG_SPECIES object NOT FOUND' }] };
  }
  const missing = RUNTIME_SPECIES_KEYS.filter((k) => block.indexOf('"' + k + '":') === -1);
  const found = RUNTIME_SPECIES_KEYS.length - missing.length;
  if (missing.length === 0) {
    lines.push({ ok: true, text: found + '/' + RUNTIME_SPECIES_KEYS.length + ' species keys' });
  } else {
    ok = false;
    lines.push({ ok: false, text: found + '/' + RUNTIME_SPECIES_KEYS.length + ' — missing: ' + missing.join(', ') });
  }
  return { ok, lines };
}

function checkGroupE(source) {
  const missing = SOURCE_ANCHORS.filter((a) => source.indexOf(a) === -1);
  if (missing.length === 0) {
    return { ok: true, lines: [{ ok: true, text: SOURCE_ANCHORS.length + ' source anchors present' }] };
  }
  return { ok: false, lines: [{ ok: false, text: 'missing: ' + missing.map((m) => '"' + m + '"').join(', ') }] };
}

// ---------------------------------------------------------------------------
// Runner
// ---------------------------------------------------------------------------

function printGroup(letter, title, result) {
  console.log(letter + '. ' + title);
  for (const line of result.lines) {
    console.log('  ' + (line.ok ? 'PASS ' : 'FAIL ') + line.text);
  }
  console.log('');
}

function main() {
  const html = read('index.html');
  const source = read('V2_ORCHARD_PLAN_TEMPLATES.md');

  const a = checkGroupA(html);
  const b = checkGroupB(html);
  const c = checkGroupC(html);
  const d = checkGroupD(html);
  const e = checkGroupE(source);

  console.log('Vocnjak content-parity verifier (read-only)');
  console.log('');
  printGroup('A', 'Runtime note anchors', a);
  printGroup('B', 'Discouraged wording (Phase 1 note blocks)', b);
  printGroup('C', 'Spray-safety helpers', c);
  printGroup('D', 'Catalog species keys', d);
  printGroup('E', 'Source anchors', e);

  const allOk = a.ok && b.ok && c.ok && d.ok && e.ok;
  console.log('RESULT: ' + (allOk ? 'PASS' : 'FAIL'));
  if (!allOk) process.exitCode = 1;
}

main();
