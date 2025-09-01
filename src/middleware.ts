// src/middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['zh-TW', 'zh-CN', 'en'],
  defaultLocale: 'zh-TW',
  localePrefix: 'always',     // 與 App Router 設定一致
});

export const config = {
  matcher: [
    '/',                           // 根路徑
    '/(zh-TW|zh-CN|en)',           // 語系根
    '/(zh-TW|zh-CN|en)/:path*'     // 語系子路徑
  ]
};

