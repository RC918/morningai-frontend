import { setRequestLocale } from 'next-intl/server';
import AdvancedComponentsClient from './AdvancedComponentsClient';

interface Props {
  params: Promise<{ locale: string }>;
}

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'zh-TW' }, { locale: 'zh-CN' }, { locale: 'en' }];
}

export default async function AdvancedComponentsPage({ params }: Props) {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  return <AdvancedComponentsClient />;
}

