'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { trackLanguageSwitch } from '@/lib/analytics';
import { LanguageSwitcher } from './language-switcher';

export function LanguageSwitcherWithAnalytics() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = params.locale as string;

  // 監聽路由變化來追蹤語言切換
  useEffect(() => {
    const handleRouteChange = () => {
      const newLocale = window.location.pathname.split('/')[1];
      if (newLocale !== currentLocale && ['zh-TW', 'zh-CN', 'en'].includes(newLocale)) {
        trackLanguageSwitch(currentLocale, newLocale, pathname);
      }
    };

    // 監聽 popstate 事件 (瀏覽器前進/後退)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [currentLocale, pathname]);

  return <LanguageSwitcher />;
}

