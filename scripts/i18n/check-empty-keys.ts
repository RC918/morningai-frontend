#!/usr/bin/env ts-node
/**
 * 檢查 locales 中的「空值」：空字串、只含空白、null、undefined、缺值
 * 目標：在 CI/本機直接 fail，避免把空值帶上線造成顯示 key。
 *
 * 支援資料夾：
 * - process.env.I18N_DIR 或預設 "messages"
 * 檔名：
 * - {locale}.json  (例如 en.json, zh-CN.json, zh-TW.json)
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

function walk(
  obj: any,
  baseObj: any,
  prefix: string[],
  collect: (info: { key: string; locale: string; value: any; reason: string }) => void,
  locale: string
) {
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    for (const k of Object.keys(baseObj || obj)) {
      const next = obj?.[k];
      const nextBase = baseObj?.[k];
      walk(next, nextBase, [...prefix, k], collect, locale);
    }
    return;
  }
  const fullKey = prefix.join('.');
  const val = obj;
  if (val === undefined) {
    collect({ key: fullKey, locale, value: val, reason: 'missing' });
  } else if (val === null) {
    collect({ key: fullKey, locale, value: val, reason: 'null' });
  } else if (typeof val === 'string') {
    if (val.trim().length === 0) {
      collect({ key: fullKey, locale, value: val, reason: 'empty-string' });
    }
  }
}

function main() {
  const basePath = path.join(I18N_DIR, `${BASE}.json`);
  if (!fs.existsSync(basePath)) {
    console.error(`[i18n:lint] Base file not found: ${basePath}`);
    process.exit(2);
  }
  const base = readJSON(basePath);
  const issues: { key: string; locale: string; reason: string }[] = [];

  for (const locale of LOCALES) {
    if (locale === BASE) continue;
    const p = path.join(I18N_DIR, `${locale}.json`);
    if (!fs.existsSync(p)) {
      console.error(`[i18n:lint] Locale file missing: ${p}`);
      issues.push({ key: '(file)', locale, reason: 'file-missing' });
      continue;
    }
    const data = readJSON(p);
    walk(
      data,
      base,
      [],
      (info) => {
        issues.push({ key: info.key, locale, reason: info.reason });
      },
      locale
    );
  }

  if (issues.length) {
    console.error(`\n❌ Found ${issues.length} empty/missing i18n values:\n`);
    for (const it of issues) {
      console.error(` - [${it.locale}] ${it.key}  (${it.reason})`);
    }
    console.error('\n提示：可執行 `npm run i18n:sync` 自動用 en 回填空值。');
    process.exit(1);
  } else {
    console.log('✅ No empty or missing i18n values.');
  }
}

main();

