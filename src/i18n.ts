// src/i18n.ts
import {getRequestConfig} from 'next-intl/server';

const SUPPORTED = ['zh-TW', 'zh-CN', 'en'] as const;

export default getRequestConfig(async ({locale}) => {
  // 正規化：不合法就回預設
  let validLocale: string = locale || 'zh-TW';
  if (!SUPPORTED.includes(validLocale as any)) {
    validLocale = 'zh-TW';
  }

  // 讀取對應語系 JSON（需開啟 tsconfig resolveJsonModule）
  const messages = (await import(`./i18n/messages/${validLocale}.json`)).default;

  // 冒煙檢查：若三語 LANG_CHECK 沒對上，直接讓 Build 失敗（避免「看似成功其實錯檔」）
  if (process.env.NODE_ENV === 'production' && messages?.LANG_CHECK) {
    const expectMap: Record<string, string> = {
      'zh-TW': '繁中 OK',
      'zh-CN': '简中 OK',
      'en': 'EN OK'
    };
    if (messages.LANG_CHECK !== expectMap[validLocale]) {
      throw new Error(
        `Messages mismatch: loaded "${messages.LANG_CHECK}" for locale "${validLocale}". ` +
        `Check file path / name / content under src/i18n/messages/${validLocale}.json`
      );
    }
  }

  // v4 正確回傳 shape：包含 locale 和 messages
  return {
    locale: validLocale,
    messages
  };
});

