// src/i18n.ts
import {getRequestConfig} from 'next-intl/server';

const SUPPORTED = ['zh-TW', 'zh-CN', 'en'] as const;

const messageLoaders: Record<string, () => Promise<any>> = {
  'zh-TW': () => import('./src/i18n/messages/zh-TW.json'),
  'zh-CN': () => import('./src/i18n/messages/zh-CN.json'),
  'en': () => import('./src/i18n/messages/en.json')
};

export default getRequestConfig(async ({locale}) => {
  let validLocale: string = locale || 'zh-TW';
  if (!SUPPORTED.includes(validLocale as any)) validLocale = 'zh-TW';

  const loader = messageLoaders[validLocale];
  if (!loader) throw new Error(`No message loader for locale: ${validLocale}`);

  const messages = (await loader()).default;

  // 冒煙檢查（請先保留，不要只在 prod）
  const expect: Record<string, string> = {
    'zh-TW': '繁中 OK',
    'zh-CN': '简中 OK',
    'en': 'EN OK'
  };
  if (messages?.LANG_CHECK !== expect[validLocale]) {
    throw new Error(
      `Messages mismatch for ${validLocale}. Loaded: "${messages?.LANG_CHECK}". ` +
      `Check src/i18n/messages/${validLocale}.json (case-sensitive) & bundling.`
    );
  }

  return {locale: validLocale, messages};
});

