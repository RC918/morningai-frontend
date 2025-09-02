import { locales } from '@/i18n/config';
import { notFound } from 'next/navigation';
import AdvancedComponentsClient from './AdvancedComponentsClient';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'zh-TW' }, { locale: 'zh-CN' }, { locale: 'en' }];
}

export default async function AdvancedComponentsPage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Enable static rendering

  return <AdvancedComponentsClient />;
}

