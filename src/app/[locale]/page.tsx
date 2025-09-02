import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CTAButton } from '@/components/ui/CTAButton';
import { MESSAGES } from '@/i18n/messages';

const locales = ['zh-TW', 'zh-CN', 'en'] as const;

type Props = {
  params: { locale: string };
};

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'zh-TW' }, { locale: 'zh-CN' }, { locale: 'en' }];
}

export default async function HomePage({ params }: Props) {
  const { locale } = params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Enable static rendering - v3 使用 unstable_setRequestLocale
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations();
  const langCheck = (MESSAGES as any)[locale]?.LANG_CHECK ?? 'MISSING';

  return (
    <div>
      {/* 煙霧測試區域 - 開發用 */}
      <div className="bg-muted p-4 rounded-lg max-w-md mx-auto mb-8 container">
        <p id="lang-check" className="font-mono text-sm font-bold">
          LANG_CHECK: {langCheck}
        </p>
        <p id="locale" className="font-mono text-sm text-muted-foreground">
          Locale: {locale}
        </p>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            {t('common.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('common.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <CTAButton 
              variant="primary" 
              size="lg"
              ctaText="hero_get_started"
            >
              {t('cta.getStarted')}
            </CTAButton>
            <CTAButton 
              variant="outline" 
              size="lg"
              ctaText="hero_view_demo"
            >
              <Link href={`/${locale}/demo`}>
                {t('cta.viewDemo')}
              </Link>
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('features.hero.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('features.hero.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('features.aiDesign.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('features.aiDesign.description')}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('features.componentLibrary.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('features.componentLibrary.description')}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('features.workflow.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('features.workflow.description')}
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href={`/${locale}/features`}>
              <CTAButton 
                variant="outline" 
                size="lg"
                ctaText="home_view_all_features"
              >
                {t('cta.viewAllFeatures')}
              </CTAButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('pricing.hero.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('pricing.hero.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="border rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">
                {t('pricing.free.name')}
              </h3>
              <div className="text-3xl font-bold mb-4">
                {t('pricing.free.price')}
              </div>
              <p className="text-muted-foreground mb-6">
                {t('pricing.free.description')}
              </p>
              <CTAButton 
                variant="outline" 
                size="lg" 
                className="w-full"
                ctaText="pricing_free_get_started"
              >
                {t('cta.getStarted')}
              </CTAButton>
            </div>
            
            {/* Pro Plan */}
            <div className="border-2 border-primary rounded-lg p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                {t('pricing.popular')}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('pricing.pro.name')}
              </h3>
              <div className="text-3xl font-bold mb-4">
                {t('pricing.pro.price')}
              </div>
              <p className="text-muted-foreground mb-6">
                {t('pricing.pro.description')}
              </p>
              <CTAButton 
                variant="primary" 
                size="lg" 
                className="w-full"
                ctaText="pricing_pro_get_started"
              >
                {t('cta.getStarted')}
              </CTAButton>
            </div>
            
            {/* Enterprise Plan */}
            <div className="border rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">
                {t('pricing.enterprise.name')}
              </h3>
              <div className="text-3xl font-bold mb-4">
                {t('pricing.enterprise.price')}
              </div>
              <p className="text-muted-foreground mb-6">
                {t('pricing.enterprise.description')}
              </p>
              <CTAButton 
                variant="outline" 
                size="lg" 
                className="w-full"
                ctaText="pricing_enterprise_contact"
              >
                {t('cta.contactSales')}
              </CTAButton>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href={`/${locale}/pricing`}>
              <CTAButton 
                variant="outline" 
                size="lg"
                ctaText="home_view_all_pricing"
              >
                {t('cta.viewAllPricing')}
              </CTAButton>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('cta.readyToStart.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('cta.readyToStart.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                variant="primary" 
                size="lg"
                ctaText="final_cta_get_started"
              >
                {t('cta.getStarted')}
              </CTAButton>
              <Link href={`/${locale}/contact`}>
                <CTAButton 
                  variant="outline" 
                  size="lg"
                  ctaText="final_cta_contact_us"
                >
                  {t('cta.contactUs')}
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

