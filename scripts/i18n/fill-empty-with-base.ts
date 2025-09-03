#!/usr/bin/env ts-node
/**
 * 將非 base 語系中的「空值」（missing/null/空字串）回填為 base(en) 值。
 * 只補空值，不覆寫已有內容；用於快速修復與防呆。
 */
import fs from 'fs';
import path from 'path';

const LOCALES = (process.env.I18N_LOCALES || 'en,zh-CN,zh-TW')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);
const I18N_DIR = process.env.I18N_DIR || 'messages';
const BASE = process.env.I18N_BASE || 'en';

type Dict = Record<string, any>;

function readJSON(p: string): Dict {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}
function writeJSON(p: string, obj: Dict) {
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n', 'utf8');
}

function mergeFill(target: any, base: any): [any, number] {
  let fixes = 0;
  if (base && typeof base === 'object' && !Array.isArray(base)) {
    const out: any = Array.isArray(target) ? {} : { ...(target || {}) };
    for (const k of Object.keys(base)) {
      const t = target?.[k];
      const b = base[k];
      if (b && typeof b === 'object' && !Array.isArray(b)) {
        const [child, f] = mergeFill(t, b);
        out[k] = child;
        fixes += f;
      } else {
        const isEmpty =
          t === undefined ||
          t === null ||
          (typeof t === 'string' && t.trim().length === 0);
        if (isEmpty) {
          out[k] = b;
          fixes++;
        } else {
          out[k] = t;
        }
      }
    }
    return [out, fixes];
  }
  return [target ?? base, 0];
}

function main() {
  const basePath = path.join(I18N_DIR, `${BASE}.json`);
  if (!fs.existsSync(basePath)) {
    console.error(`[i18n:sync] Base file not found: ${basePath}`);
    process.exit(2);
  }
  const base = readJSON(basePath);

  let total = 0;
  for (const locale of LOCALES) {
    if (locale === BASE) continue;
    const p = path.join(I18N_DIR, `${locale}.json`);
    if (!fs.existsSync(p)) {
      console.warn(`[i18n:sync] Skip missing locale: ${p}`);
      continue;
    }
    const data = readJSON(p);
    const [next, fixes] = mergeFill(data, base);
    if (fixes > 0) {
      writeJSON(p, next);
      console.log(`🛠️  Filled ${fixes} empty keys in ${locale}`);
      total += fixes;
    } else {
      console.log(`✅ No empty keys to fill in ${locale}`);
    }
  }

  if (total > 0) {
    console.log(`\n🎉 Done. Total filled: ${total}`);
  } else {
    console.log('\nNothing to update.');
  }
}

main();

