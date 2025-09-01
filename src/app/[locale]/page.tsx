import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n/config';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

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

  // Enable static rendering
  setRequestLocale(locale);
  
  const t = await getTranslations('home');
  const tStats = await getTranslations('stats');

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">
          {t('title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/components">
            <Button size="lg" className="w-full sm:w-auto">
              {t('viewComponents')}
            </Button>
          </Link>
          <Link href="https://github.com/RC918/morningai-frontend#readme" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              {t('viewDocumentation')}
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">16+</div>
          <div className="text-sm text-muted-foreground">{tStats('coreComponents')}</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">8</div>
          <div className="text-sm text-muted-foreground">{tStats('componentStates')}</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">3</div>
          <div className="text-sm text-muted-foreground">{tStats('responsiveBreakpoints')}</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">100%</div>
          <div className="text-sm text-muted-foreground">{tStats('typescript')}</div>
        </div>
      </div>

      {/* Features Section */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-lg text-muted-foreground">{t('features.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">{t('features.accessibility.title')}</h3>
            <p className="text-muted-foreground">{t('features.accessibility.description')}</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">{t('features.responsive.title')}</h3>
            <p className="text-muted-foreground">{t('features.responsive.description')}</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">{t('features.performance.title')}</h3>
            <p className="text-muted-foreground">{t('features.performance.description')}</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">{t('features.typescript.title')}</h3>
            <p className="text-muted-foreground">{t('features.typescript.description')}</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">{t('features.theming.title')}</h3>
            <p className="text-muted-foreground">{t('features.theming.description')}</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">{t('features.developer.title')}</h3>
            <p className="text-muted-foreground">{t('features.developer.description')}</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6 mt-16 py-16 bg-muted/50 rounded-lg">
        <h2 className="text-3xl font-bold">{t('cta.title')}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('cta.description')}
        </p>
        <Link href="/components">
          <Button size="lg">
            {t('cta.button')}
          </Button>
        </Link>
      </div>
    </div>
  );
}

