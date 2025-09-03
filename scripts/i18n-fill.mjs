// scripts/i18n-fill.mjs
import fs from 'node:fs';
import path from 'node:path';

function fill(base, target) {
  if (Array.isArray(base)) return target ?? base;
  if (typeof base === 'object' && base) {
    const out = {...(target || {})};
    for (const k of Object.keys(base)) {
      out[k] = fill(base[k], target?.[k]);
    }
    return out;
  }
  // 使用英文作為 placeholder，方便後續翻譯
  return target ?? base;
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

function saveMessages(locale, messages) {
  const filePath = path.join('src/i18n/messages', `${locale}.json`);
  const backup = `${filePath}.backup-${Date.now()}`;
  
  // 備份原檔案
  if (fs.existsSync(filePath)) {
    fs.copyFileSync(filePath, backup);
    console.log(`📦 Backup created: ${backup}`);
  }
  
  // 寫入新檔案
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2) + '\n');
  console.log(`✅ Updated: ${filePath}`);
}

console.log('🔧 Auto-filling missing i18n keys...\n');

// 載入英文作為基準
const en = loadMessages('en');

// 處理 zh-TW
console.log('📝 Processing zh-TW...');
const zhTW = loadMessages('zh-TW');
const filledZhTW = fill(en, zhTW);
saveMessages('zh-TW', filledZhTW);

// 處理 zh-CN
console.log('📝 Processing zh-CN...');
const zhCN = loadMessages('zh-CN');
const filledZhCN = fill(en, zhCN);
saveMessages('zh-CN', filledZhCN);

console.log('\n🎉 Auto-fill completed!');
console.log('');
console.log('📋 Next steps:');
console.log('1. Review the updated files');
console.log('2. Replace English placeholders with proper translations');
console.log('3. Run `npm run i18n:check` to verify consistency');
console.log('4. Test the application: `npm run dev`');

