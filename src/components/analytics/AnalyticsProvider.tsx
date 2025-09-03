'use client';

import { useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';
import { GoogleAnalytics } from './GoogleAnalytics';
import { Mixpanel } from './Mixpanel';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as string;

  // 追蹤頁面瀏覽
  useEffect(() => {
    if (pathname) {
      const url = `${window.location.origin}${pathname}`;
      trackPageView(url, locale);
    }
  }, [pathname, locale]);

  return (
    <>
      {/* 分析腳本 */}
      <GoogleAnalytics />
      <Mixpanel />
      
      {/* 子元件 */}
      {children}
    </>
  );
}

