import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // 你的專案支援的語系
  locales: ['en', 'zh-CN', 'zh-TW'],
  // 沒有語系前綴時導向的預設語系
  defaultLocale: 'en',
  // 可選：自動偵測瀏覽器語系並第一次導向
  localeDetection: true
});

// 排除 API、_next、以及靜態資源
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

