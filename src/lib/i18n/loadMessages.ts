import merge from 'deepmerge';

// 嘗試多個慣見路徑載入 JSON，找不到就回傳 {}
async function tryImport(path: string): Promise<Record<string, any>> {
  try {
    const mod = await import(path);
    return (mod as any).default ?? mod;
  } catch {
    return {};
  }
}

/**
 * 載入指定語系的 messages，並以 en 為基底做深度合併。
 * 任何缺失的 key 都會回退到英文，避免在 SSG/SSR 階段出現 key 原文。
 */
export async function loadMessages(locale: string) {
  // 優先嘗試常見的目錄結構：/messages、/locales、/i18n
  const en =
    (await tryImport('../../messages/en.json')) ||
    (await tryImport('../../locales/en.json')) ||
    (await tryImport('../../i18n/en.json')) ||
    {};

  // 目標語系
  const target =
    (await tryImport(`../../messages/${locale}.json`)) ||
    (await tryImport(`../../locales/${locale}.json`)) ||
    (await tryImport(`../../i18n/${locale}.json`)) ||
    {};

  // 深度合併，右邊覆蓋左邊；缺少的 key 自動回退到 en
  return merge(en, target, { arrayMerge: (_d, s) => s });
}

export const supportedLocales = ['en', 'zh-CN', 'zh-TW'] as const;
export type AppLocale = typeof supportedLocales[number];

