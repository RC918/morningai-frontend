import {getRequestConfig} from 'next-intl/server';

const TABLE = {
  'zh-TW': {LANG_CHECK: '繁中 OK', heroTitle: '晨間設計系統'},
  'zh-CN': {LANG_CHECK: '简中 OK', heroTitle: '晨间设计系统'},
  'en': {LANG_CHECK: 'EN OK',    heroTitle: 'Morning Design System'}
} as const;

export default getRequestConfig(async ({locale}) => {
  let validLocale: string = locale || 'zh-TW';
  if (!Object.keys(TABLE).includes(validLocale)) validLocale = 'zh-TW';
  return {locale: validLocale, messages: TABLE[validLocale as keyof typeof TABLE]};
});

