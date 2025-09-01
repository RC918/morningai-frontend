import { unstable_setRequestLocale } from 'next-intl/server';
import AdvancedComponentsClient from './AdvancedComponentsClient';

interface Props {
  params: Promise<{ locale: string }>;
}

// SSG：明確產出三語頁面
export function generateStaticParams() {
  return [{ locale: 'zh-TW' }, { locale: 'zh-CN' }, { locale: 'en' }];
}

export const dynamic = 'force-static';

export default async function AdvancedComponentsPage({ params }: Props) {
  const { locale } = await params;
  
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return <AdvancedComponentsClient />;
}

