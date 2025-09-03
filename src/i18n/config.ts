export const locales = ['zh-TW', 'zh-CN', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh-TW';

export const i18n = { 
  defaultLocale: 'zh-TW', 
  locales: ['zh-TW', 'zh-CN', 'en'] 
} as const;

export const localeNames: Record<Locale, string> = {
  'en': 'English',
  'zh-TW': '繁體中文',
  'zh-CN': '简体中文'
};

export const localeFlags: Record<Locale, string> = {
  'en': '🇺🇸',
  'zh-TW': '🇹🇼',
  'zh-CN': '🇨🇳'
};

