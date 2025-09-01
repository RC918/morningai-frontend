import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

type Props = {
  params: Promise<{ locale: string }>;
};

// SSG：明確產出三語頁面
export function generateStaticParams() {
  return [{ locale: 'zh-TW' }, { locale: 'zh-CN' }, { locale: 'en' }];
}

export const dynamic = 'force-static';

export default async function ComponentsPage({ params }: Props) {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('components');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-foreground">
          {t('title')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/components/advanced">
            <Button size="lg" className="w-full sm:w-auto">
              {t('advanced')}
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            {t('basic')}
          </Button>
        </div>
      </div>

      {/* Button Component */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{t('button.title')}</h2>
        
        <div className="space-y-8">
          {/* Variants */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t('button.variants')}</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="error">Error</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t('button.sizes')}</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </div>

          {/* States */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t('button.states')}</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Normal</Button>
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
              <Button>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                With Icon
              </Button>
              <Button fullWidth className="mt-4">{t('button.fullWidth')}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Input Component */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{t('input.title')}</h2>
        
        <div className="space-y-8 max-w-md">
          {/* Basic Input */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t('input.basic')}</h3>
            <Input
              label={t('input.name')}
              placeholder={t('input.namePlaceholder')}
              helperText={t('input.nameHelper')}
            />
          </div>

          {/* With Icon Input */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t('input.withIcon')}</h3>
            <Input
              label={t('input.email')}
              placeholder={t('input.emailPlaceholder')}
              leftIcon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              }
            />
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t('input.sizes')}</h3>
            <div className="space-y-3">
              <Input size="sm" placeholder={t('input.smallPlaceholder')} />
              <Input size="md" placeholder={t('input.mediumPlaceholder')} />
              <Input size="lg" placeholder={t('input.largePlaceholder')} />
            </div>
          </div>

          {/* States */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t('input.states')}</h3>
            <div className="space-y-3">
              <Input placeholder={t('input.normalState')} />
              <Input placeholder={t('input.successState')} variant="success" />
              <Input placeholder={t('input.errorState')} variant="error" />
              <Input placeholder={t('input.loadingState')} loading />
              <Input placeholder={t('input.disabledState')} disabled />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

