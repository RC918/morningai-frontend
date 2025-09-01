// src/i18n/request.ts
import {getRequestConfig} from 'next-intl/server';
import {locales} from './config';

export default getRequestConfig(async ({locale}) => {
  // Use default locale if locale is not provided or invalid
  const validLocale = locale && locales.includes(locale as any) ? locale : 'zh-TW';

  // 使用函數內部的動態導入，避免被靜態優化
  let messages;
  try {
    if (validLocale === 'zh-TW') {
      messages = (await import('@/i18n/messages/zh-TW.json')).default;
    } else if (validLocale === 'zh-CN') {
      messages = (await import('@/i18n/messages/zh-CN.json')).default;
    } else if (validLocale === 'en') {
      messages = (await import('@/i18n/messages/en.json')).default;
    } else {
      messages = (await import('@/i18n/messages/zh-TW.json')).default;
    }
  } catch (error) {
    console.error(`Failed to load messages for locale ${validLocale}:`, error);
    messages = (await import('@/i18n/messages/zh-TW.json')).default;
  }

  if (!messages) {
    throw new Error(`No messages found for locale: ${validLocale}`);
  }

  // 冒煙檢查——確保載入正確的語言檔案
  const expectMap: Record<string, string> = {
    'zh-TW': '繁中 OK',
    'zh-CN': '简中 OK',
    'en': 'EN OK'
  };
  
  if (messages?.LANG_CHECK !== expectMap[validLocale]) {
    throw new Error(
      `Messages mismatch for ${validLocale}. Loaded: "${messages?.LANG_CHECK}". ` +
      `Expected: "${expectMap[validLocale]}". Check src/i18n/messages/${validLocale}.json`
    );
  }

  return {
    locale: validLocale,
    messages
  };
});

