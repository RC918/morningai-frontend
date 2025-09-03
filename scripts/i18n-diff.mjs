// scripts/i18n-diff.mjs
import fs from 'node:fs';
import path from 'node:path';

function flatten(obj, prefix = '', out = {}) {
  for (const [k, v] of Object.entries(obj || {})) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      flatten(v, key, out);
    } else {
      out[key] = v;
    }
  }
  return out;
}

function loadMessages(locale) {
  const filePath = path.join('src/i18n/messages', `${locale}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.error(`❌ Invalid JSON in ${filePath}:`, error.message);
    process.exit(1);
  }
}

console.log('🔍 Checking i18n message consistency...\n');

// 載入所有語言檔案
const en = loadMessages('en');
const zhTW = loadMessages('zh-TW');
const zhCN = loadMessages('zh-CN');

// 扁平化所有鍵值
const flatEn = flatten(en);
const flatZhTW = flatten(zhTW);
const flatZhCN = flatten(zhCN);

const enKeys = Object.keys(flatEn);
const zhTWKeys = Object.keys(flatZhTW);
const zhCNKeys = Object.keys(flatZhCN);

// 檢查 zh-TW 缺失
const missingInZhTW = enKeys.filter(k => !(k in flatZhTW));
const extraInZhTW = zhTWKeys.filter(k => !(k in flatEn));

// 檢查 zh-CN 缺失
const missingInZhCN = enKeys.filter(k => !(k in flatZhCN));
const extraInZhCN = zhCNKeys.filter(k => !(k in flatEn));

// 生成報告
const report = [
  `📊 i18n Message Consistency Report`,
  `Generated: ${new Date().toISOString()}`,
  ``,
  `📈 Statistics:`,
  `  English (base):     ${enKeys.length} keys`,
  `  Traditional Chinese: ${zhTWKeys.length} keys`,
  `  Simplified Chinese:  ${zhCNKeys.length} keys`,
  ``,
  `❌ Missing in zh-TW (${missingInZhTW.length} keys):`,
  ...missingInZhTW.map(k => `  - ${k}`),
  ``,
  `➕ Extra in zh-TW (${extraInZhTW.length} keys):`,
  ...extraInZhTW.map(k => `  + ${k}`),
  ``,
  `❌ Missing in zh-CN (${missingInZhCN.length} keys):`,
  ...missingInZhCN.map(k => `  - ${k}`),
  ``,
  `➕ Extra in zh-CN (${extraInZhCN.length} keys):`,
  ...extraInZhCN.map(k => `  + ${k}`),
  ``,
  `🎯 Priority Fix List (most critical first):`,
  ``,
  `1. Pricing page keys:`,
  ...missingInZhCN.filter(k => k.includes('pricing.')).map(k => `   - ${k}`),
  ``,
  `2. Features page keys:`,
  ...missingInZhCN.filter(k => k.includes('features.')).map(k => `   - ${k}`),
  ``,
  `3. FAQ page keys:`,
  ...missingInZhCN.filter(k => k.includes('faq.')).map(k => `   - ${k}`),
  ``,
  `4. Contact page keys:`,
  ...missingInZhCN.filter(k => k.includes('contact.')).map(k => `   - ${k}`),
  ``,
  `5. Other keys:`,
  ...missingInZhCN.filter(k => !k.includes('pricing.') && !k.includes('features.') && !k.includes('faq.') && !k.includes('contact.')).map(k => `   - ${k}`)
].join('\n');

// 寫入報告檔案
fs.writeFileSync('i18n-report.txt', report);

// 控制台輸出摘要
console.log('📊 Summary:');
console.log(`  English (base):      ${enKeys.length} keys`);
console.log(`  Traditional Chinese: ${zhTWKeys.length} keys (${missingInZhTW.length} missing, ${extraInZhTW.length} extra)`);
console.log(`  Simplified Chinese:  ${zhCNKeys.length} keys (${missingInZhCN.length} missing, ${extraInZhCN.length} extra)`);
console.log('');

if (missingInZhTW.length > 0 || missingInZhCN.length > 0) {
  console.log('❌ Translation keys are missing!');
  console.log('📄 Detailed report saved to: i18n-report.txt');
  console.log('');
  console.log('🚀 Quick fix: Run `npm run i18n:fill` to auto-fill missing keys');
  process.exit(1);
} else {
  console.log('✅ All translation keys are consistent!');
  process.exit(0);
}

