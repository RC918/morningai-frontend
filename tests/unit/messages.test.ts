import { describe, it, expect } from '@jest/globals';
import { MESSAGES } from '../../src/i18n/messages';

const locales = ['zh-TW', 'zh-CN', 'en'];
const requiredKeys = [
  'LANG_CHECK',
  'common.title',
  'common.description'
];

describe('Messages Integrity Tests', () => {
  it('should have all required locales', () => {
    for (const locale of locales) {
      expect(MESSAGES).toHaveProperty(locale);
      expect(MESSAGES[locale]).toBeDefined();
    }
  });

  it('should have all required keys for each locale', () => {
    for (const locale of locales) {
      const messages = MESSAGES[locale];
      
      for (const key of requiredKeys) {
        const keyParts = key.split('.');
        let current = messages;
        
        for (const part of keyParts) {
          expect(current).toHaveProperty(part);
          current = current[part];
        }
        
        expect(current).toBeDefined();
        expect(typeof current).toBe('string');
        expect(current.length).toBeGreaterThan(0);
      }
    }
  });

  it('should have unique LANG_CHECK values', () => {
    const langCheckValues = locales.map(locale => MESSAGES[locale].LANG_CHECK);
    const uniqueValues = new Set(langCheckValues);
    
    expect(uniqueValues.size).toBe(locales.length);
  });

  it('should have consistent message structure across locales', () => {
    const baseLocale = 'zh-TW';
    const baseKeys = getAllKeys(MESSAGES[baseLocale]);
    
    for (const locale of locales) {
      if (locale === baseLocale) continue;
      
      const localeKeys = getAllKeys(MESSAGES[locale]);
      expect(localeKeys.sort()).toEqual(baseKeys.sort());
    }
  });
});

function getAllKeys(obj: any, prefix = ''): string[] {
  let keys: string[] = [];
  
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      keys = keys.concat(getAllKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  
  return keys;
}

