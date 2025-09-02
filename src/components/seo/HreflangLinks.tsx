'use client';

import { useParams } from 'next/navigation';

interface HreflangLinksProps {
  pathname: string;
}

const LOCALES = ['zh-TW', 'zh-CN', 'en'] as const;
const LOCALE_MAPPING = {
  'zh-TW': 'zh-Hant',
  'zh-CN': 'zh-Hans', 
  'en': 'en'
} as const;

export function HreflangLinks({ pathname }: HreflangLinksProps) {
  const params = useParams();
  const currentLocale = params.locale as string;
  
  // 移除當前 locale 前綴，獲取純路徑
  const cleanPath = pathname.replace(`/${currentLocale}`, '') || '';
  
  return (
    <>
      {LOCALES.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={LOCALE_MAPPING[locale]}
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/${locale}${cleanPath}`}
        />
      ))}
      {/* x-default 指向預設語言 */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${process.env.NEXT_PUBLIC_SITE_URL}/zh-TW${cleanPath}`}
      />
    </>
  );
}

