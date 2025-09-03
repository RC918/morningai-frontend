#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const LOCALES = ['zh-TW', 'zh-CN', 'en'];
const MESSAGES_DIR = path.join(__dirname, '../src/i18n/messages');

function flattenObject(obj, prefix = '') {
  const flattened = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        Object.assign(flattened, flattenObject(obj[key], newKey));
      } else {
        flattened[newKey] = obj[key];
      }
    }
  }
  
  return flattened;
}

function loadMessages(locale) {
  const filePath = path.join(MESSAGES_DIR, `${locale}.json`);
  
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Translation file not found: ${filePath}`);
    process.exit(1);
  }
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const messages = JSON.parse(content);
    return flattenObject(messages);
  } catch (error) {
    console.error(`❌ Error parsing ${locale}.json:`, error.message);
    process.exit(1);
  }
}

function main() {
  console.log('🔍 Checking i18n translation consistency...\n');
  
  const allMessages = {};
  const allKeys = new Set();
  
  // Load all translation files
  for (const locale of LOCALES) {
    console.log(`📖 Loading ${locale}.json...`);
    allMessages[locale] = loadMessages(locale);
    
    // Collect all keys
    Object.keys(allMessages[locale]).forEach(key => allKeys.add(key));
  }
  
  console.log(`\n📊 Found ${allKeys.size} unique translation keys across ${LOCALES.length} locales\n`);
  
  let hasErrors = false;
  const missingKeys = {};
  
  // Check for missing keys in each locale
  for (const locale of LOCALES) {
    missingKeys[locale] = [];
    
    for (const key of allKeys) {
      if (!allMessages[locale].hasOwnProperty(key)) {
        missingKeys[locale].push(key);
        hasErrors = true;
      }
    }
  }
  
  // Report results
  if (hasErrors) {
    console.log('❌ Translation inconsistencies found:\n');
    
    for (const locale of LOCALES) {
      if (missingKeys[locale].length > 0) {
        console.log(`🔴 Missing keys in ${locale}.json (${missingKeys[locale].length}):`);
        missingKeys[locale].forEach(key => {
          console.log(`   - ${key}`);
        });
        console.log('');
      }
    }
    
    console.log('💡 Please add the missing translation keys to ensure consistency.\n');
    process.exit(1);
  } else {
    console.log('✅ All translation files are consistent!\n');
    
    // Show summary
    for (const locale of LOCALES) {
      const keyCount = Object.keys(allMessages[locale]).length;
      console.log(`📋 ${locale}.json: ${keyCount} keys`);
    }
    
    console.log('\n🎉 i18n check passed successfully!');
  }
}

if (require.main === module) {
  main();
}

module.exports = { flattenObject, loadMessages };

