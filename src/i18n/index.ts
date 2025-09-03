// src/i18n/index.ts - 單一真相源 (Single Source of Truth)
import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale, type Locale} from './config';

// 支援的語系
export const SUPPORTED_LOCALES = locales;
export const DEFAULT_LOCALE = defaultLocale;

// 訊息載入器映射 - 使用可靠的靜態 import 路徑
const messageLoaders: Record<Locale, () => Promise<any>> = {
  'zh-TW': () => import('@/messages/zh-TW.json'),
  'zh-CN': () => import('@/messages/zh-CN.json'),
  'en': () => import('@/messages/en.json')
};

// 語言檢查映射
const LANG_CHECK_MAP: Record<Locale, string> = {
  'zh-TW': '繁中 OK',
  'zh-CN': '简中 OK',
  'en': 'EN OK'
};

// 獲取翻譯訊息
export async function getMessages(locale: string): Promise<any> {
  const validLocale = (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;
  
  const loader = messageLoaders[validLocale];
  if (!loader) {
    throw new Error(`No message loader for locale: ${validLocale}`);
  }

  try {
    const messages = (await loader()).default;
    
    // 冒煙檢查 - 確保載入正確的語言檔案
    const expectedCheck = LANG_CHECK_MAP[validLocale];
    if (messages?.LANG_CHECK !== expectedCheck) {
      console.error(
        `Messages mismatch for ${validLocale}. Loaded: "${messages?.LANG_CHECK}". ` +
        `Expected: "${expectedCheck}". Check src/i18n/messages/${validLocale}.json`
      );
      throw new Error(`Invalid messages for locale: ${validLocale}`);
    }

    return messages;
  } catch (error) {
    console.error(`Failed to load messages for locale ${validLocale}:`, error);
    throw error;
  }
}

// next-intl 配置
export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  
  // 使用預設語系如果語系無效
  const validLocale = (locale && locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;
  
  const messages = await getMessages(validLocale);

  return {
    locale: validLocale,
    messages
  };
});

// 導出配置相關
export * from './config';

