// src/i18n/request.ts
import {getRequestConfig} from 'next-intl/server';
import {locales} from './config';

export default getRequestConfig(async ({requestLocale}) => {
  // 使用新的 requestLocale API
  let locale = await requestLocale;
  
  // Use default locale if locale is not provided or invalid
  const validLocale = locale && locales.includes(locale as any) ? locale : 'zh-TW';

  // 使用靜態導入映射，確保SSG階段能正確載入
  const messagesMap = {
    'zh-TW': () => import('@/i18n/messages/zh-TW.json'),
    'zh-CN': () => import('@/i18n/messages/zh-CN.json'),
    'en': () => import('@/i18n/messages/en.json')
  };

  let messages;
  try {
    const messageLoader = messagesMap[validLocale as keyof typeof messagesMap] || messagesMap['zh-TW'];
    messages = (await messageLoader()).default;
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
    console.warn(
      `Messages mismatch for ${validLocale}. Loaded: "${messages?.LANG_CHECK}". ` +
      `Expected: "${expectMap[validLocale]}". Check src/i18n/messages/${validLocale}.json`
    );
  }

  return {
    locale: validLocale,
    messages
  };
});

