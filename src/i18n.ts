// src/i18n.ts - 國際化配置 (Single Source of Truth)
import {getRequestConfig} from 'next-intl/server';

const SUPPORTED = ['zh-TW', 'zh-CN', 'en'] as const;

// 訊息載入器 - 指向正確的 messages 目錄
const messageLoaders: Record<string, () => Promise<any>> = {
  'zh-TW': () => import('./messages/zh-TW.json'),
  'zh-CN': () => import('./messages/zh-CN.json'),
  'en': () => import('./messages/en.json')
};

export default getRequestConfig(async ({locale}) => {
  // 驗證並設定預設語系
  let validLocale: string = locale || 'zh-TW';
  if (!SUPPORTED.includes(validLocale as any)) validLocale = 'zh-TW';

  // 載入對應語系的訊息
  const loader = messageLoaders[validLocale];
  if (!loader) {
    throw new Error(`No message loader for locale: ${validLocale}`);
  }

  const messages = (await loader()).default;

  // 語系正確性驗證 (冒煙測試)
  const expectLangCheck: Record<string, string> = {
    'zh-TW': '繁中 OK',
    'zh-CN': '简中 OK',
    'en': 'EN OK'
  };
  
  if (messages?.LANG_CHECK !== expectLangCheck[validLocale]) {
    throw new Error(
      `Messages mismatch for ${validLocale}. ` +
      `Expected: "${expectLangCheck[validLocale]}", ` +
      `Got: "${messages?.LANG_CHECK}". ` +
      `Please check src/messages/${validLocale}.json file.`
    );
  }

  return {
    locale: validLocale,
    messages
  };
});
