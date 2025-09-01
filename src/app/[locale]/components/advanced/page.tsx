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

  return <AdvancedComponentsClient />;
}

