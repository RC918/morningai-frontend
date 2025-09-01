// src/middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['zh-TW', 'zh-CN', 'en'],
  defaultLocale: 'zh-TW',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/', '/(zh-TW|zh-CN|en)(/.*)?'],
};

