import { getRequestConfig } from 'next-intl/server';
import { loadMessages } from './loadMessages';

export default getRequestConfig(async ({locale}) => {
  // 使用安全載入：自動把空值視為缺值並回退到 en
  const messages = await loadMessages(locale);
  return { messages };
});

