import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // 直接載入 JSON 檔案，避免複雜的動態載入
  const messages = (await import(`../messages/${locale}.json`)).default;
  return { messages };
});

