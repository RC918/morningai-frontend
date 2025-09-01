// src/i18n.ts
import {getRequestConfig} from 'next-intl/server';

// 靜態導入所有訊息檔案
import zhTWMessages from './i18n/messages/zh-TW.json';
import zhCNMessages from './i18n/messages/zh-CN.json';
import enMessages from './i18n/messages/en.json';

const SUPPORTED = ['zh-TW', 'zh-CN', 'en'] as const;

// 靜態映射，避免動態導入被打包器優化
const messagesMap: Record<string, any> = {
  'zh-TW': zhTWMessages,
  'zh-CN': zhCNMessages,
  'en': enMessages
};

export default getRequestConfig(async ({locale}) => {
  let validLocale: string = locale || 'zh-TW';
  if (!SUPPORTED.includes(validLocale as any)) validLocale = 'zh-TW';

  const messages = messagesMap[validLocale];
  if (!messages) throw new Error(`No messages found for locale: ${validLocale}`);

  // 冒煙檢查——先**無條件**啟用（不要只在 production）
  const expectMap: Record<string, string> = {
    'zh-TW': '繁中 OK',
    'zh-CN': '简中 OK',
    'en': 'EN OK'
  };
  if (messages?.LANG_CHECK !== expectMap[validLocale]) {
    throw new Error(
      `Messages mismatch for ${validLocale}. Loaded: "${messages?.LANG_CHECK}". ` +
      `Check src/i18n/messages/${validLocale}.json (case-sensitive) & bundling.`
    );
  }

  return {
    locale: validLocale,
    messages
  };
});

