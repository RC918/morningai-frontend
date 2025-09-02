import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { MESSAGES } from '@/i18n/messages';

const locales = ['zh-TW', 'zh-CN', 'en'] as const;

type Props = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'zh-TW' }, { locale: 'zh-CN' }, { locale: 'en' }];
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const t = await getTranslations('common');
  const langCheck = (MESSAGES as any)[locale]?.LANG_CHECK ?? 'MISSING';

  return (
    <div className="container mx-auto px-4 py-16">
      {/* 煙霧測試區域 */}
      <div className="bg-muted p-4 rounded-lg max-w-md mx-auto mb-8">
        <p id="lang-check" className="font-mono text-sm font-bold">
          LANG_CHECK: {langCheck}
        </p>
        <p id="locale" className="font-mono text-sm text-muted-foreground">
          Locale: {locale}
        </p>
      </div>

      {/* Hero Section */}
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">
          {t('title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href={`/${locale}/components`}>
            <Button size="lg" className="w-full sm:w-auto">
              查看元件庫
            </Button>
          </Link>
          <Link href="https://github.com/RC918/morningai-frontend#readme" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              查看文檔
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

