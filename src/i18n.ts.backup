// src/i18n.ts
import {getRequestConfig} from 'next-intl/server';

const SUPPORTED = ['zh-TW', 'zh-CN', 'en'] as const;

const messageLoaders: Record<string, () => Promise<any>> = {
  'zh-TW': () => import('./i18n/messages/zh-TW.json'),
  'zh-CN': () => import('./i18n/messages/zh-CN.json'),
  'en': () => import('./i18n/messages/en.json')
};

// 深度合併函數 - 以 base 為基準，用 override 覆蓋
function deepMerge<T>(base: T, override: Partial<T>): T {
  if (Array.isArray(base)) return (override as any) ?? base;
  if (typeof base === 'object' && base) {
    const out: any = {...base};
    for (const k of Object.keys(override || {})) {
      const bv = (base as any)[k];
      const ov = (override as any)[k];
      out[k] = (bv && typeof bv === 'object' && !Array.isArray(bv))
        ? deepMerge(bv, ov as any)
        : (ov ?? bv);
    }
    return out;
  }
  return (override as any) ?? base;
}

export default getRequestConfig(async ({locale}) => {
  let validLocale: string = locale || 'zh-TW';
  if (!SUPPORTED.includes(validLocale as any)) validLocale = 'zh-TW';

  const loader = messageLoaders[validLocale];
  if (!loader) throw new Error(`No message loader for locale: ${validLocale}`);

  // 載入英文作為基準
  const enMessages = (await messageLoaders['en']()).default;
  const localeMessages = (await loader()).default;

  // 深度合併：以英文為基準，用當前語言覆蓋
  const messages = validLocale === 'en' ? localeMessages : deepMerge(enMessages, localeMessages);

  // 冒煙檢查（請先保留，不要只在 prod）
  const expect: Record<string, string> = {
    'zh-TW': '繁中 OK',
    'zh-CN': '简中 OK',
    'en': 'EN OK'
  };
  if (messages?.LANG_CHECK !== expect[validLocale]) {
    console.warn(
      `Messages mismatch for ${validLocale}. Loaded: "${messages?.LANG_CHECK}". ` +
      `Using fallback merge. Check src/i18n/messages/${validLocale}.json`
    );
  }

  return {locale: validLocale, messages};
});

