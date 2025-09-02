'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { CTAButton } from '@/components/ui/CTAButton';

export default function HomePage() {
  const params = useParams();
  const locale = params.locale as string;
  
  // 使用多個namespace的翻譯
  const tCommon = useTranslations('common');
  const tFeatures = useTranslations('features');
  const tPricing = useTranslations('pricing');
  const tCta = useTranslations('cta');
  const tLang = useTranslations(); // 用於LANG_CHECK

  return (
    <div>
      {/* 開發環境調試區域 */}
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-muted p-4 rounded-lg max-w-md mx-auto mb-8 container">
          <p id="lang-check" className="font-mono text-sm font-bold">
            LANG_CHECK: {tLang('LANG_CHECK')}
          </p>
          <p id="locale" className="font-mono text-sm text-muted-foreground">
            Locale: {locale}
          </p>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            {tCommon('title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {tCommon('description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <CTAButton 
              variant="primary" 
              size="lg"
              ctaText="hero_get_started"
            >
              {tCta('getStarted')}
            </CTAButton>
            <CTAButton 
              variant="outline" 
              size="lg"
              ctaText="hero_view_demo"
            >
              <Link href={`/${locale}/demo`}>
                {tCta('viewDemo')}
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
              {tFeatures('hero.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {tFeatures('hero.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {tFeatures('aiDesign.title')}
              </h3>
              <p className="text-muted-foreground">
                {tFeatures('aiDesign.description')}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {tFeatures('componentLibrary.title')}
              </h3>
              <p className="text-muted-foreground">
                {tFeatures('componentLibrary.description')}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {tFeatures('workflow.title')}
              </h3>
              <p className="text-muted-foreground">
                {tFeatures('workflow.description')}
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
                {tCta('viewAllFeatures')}
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
              {tPricing('hero.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {tPricing('hero.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="border rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">
                {tPricing('free.name')}
              </h3>
              <div className="text-3xl font-bold mb-4">
                {tPricing('free.price')}
              </div>
              <p className="text-muted-foreground mb-6">
                {tPricing('free.description')}
              </p>
              <CTAButton 
                variant="outline" 
                size="lg" 
                className="w-full"
                ctaText="pricing_free_get_started"
              >
                {tCta('getStarted')}
              </CTAButton>
            </div>
            
            {/* Pro Plan */}
            <div className="border-2 border-primary rounded-lg p-6 text-center relative">
              <div 
                className="absolute text-white px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'hsl(var(--primary))',
                  zIndex: 10
                }}
              >
                {tPricing('popular')}
              </div>
              <div style={{ paddingTop: '3rem' }}>
                <h3 className="text-xl font-semibold mb-2">
                  {tPricing('pro.name')}
                </h3>
                <div className="text-3xl font-bold mb-4">
                  {tPricing('pro.price')}
                </div>
                <p className="text-muted-foreground mb-6">
                  {tPricing('pro.description')}
                </p>
                <CTAButton 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  ctaText="pricing_pro_get_started"
                >
                  {tCta('getStarted')}
                </CTAButton>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="border rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">
                {tPricing('enterprise.name')}
              </h3>
              <div className="text-3xl font-bold mb-4">
                {tPricing('enterprise.price')}
              </div>
              <p className="text-muted-foreground mb-6">
                {tPricing('enterprise.description')}
              </p>
              <CTAButton 
                variant="outline" 
                size="lg" 
                className="w-full"
                ctaText="pricing_enterprise_contact"
              >
                {tCta('contactSales')}
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
                {tCta('viewAllPricing')}
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
              {tCta('readyToStart.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {tCta('readyToStart.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                variant="primary" 
                size="lg"
                ctaText="final_cta_get_started"
              >
                {tCta('getStarted')}
              </CTAButton>
              <Link href={`/${locale}/contact`}>
                <CTAButton 
                  variant="outline" 
                  size="lg"
                  ctaText="final_cta_contact_us"
                >
                  {tCta('contactUs')}
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

