'use client';

import { useTranslations } from 'next-intl';
import { CTAButton } from '@/components/ui/CTAButton';

export default function DemoPage() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t('demo.hero.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          {t('demo.hero.description')}
        </p>
        <CTAButton 
          variant="primary" 
          size="lg"
          ctaText="demo_hero_cta"
        >
          {t('demo.hero.cta')}
        </CTAButton>
      </div>

      {/* Demo Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-card rounded-lg p-6 border text-center">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold mb-2">{t('demo.features.design.title')}</h3>
          <p className="text-muted-foreground">{t('demo.features.design.description')}</p>
        </div>
        
        <div className="bg-card rounded-lg p-6 border text-center">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-2">{t('demo.features.speed.title')}</h3>
          <p className="text-muted-foreground">{t('demo.features.speed.description')}</p>
        </div>
        
        <div className="bg-card rounded-lg p-6 border text-center">
          <div className="text-4xl mb-4">🔧</div>
          <h3 className="text-xl font-semibold mb-2">{t('demo.features.tools.title')}</h3>
          <p className="text-muted-foreground">{t('demo.features.tools.description')}</p>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="bg-primary/5 rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          {t('demo.interactive.title')}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('demo.interactive.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton 
            variant="primary" 
            size="lg"
            ctaText="demo_start_trial"
          >
            {t('demo.interactive.startTrial')}
          </CTAButton>
          <CTAButton 
            variant="outline" 
            size="lg"
            ctaText="demo_schedule_demo"
          >
            {t('demo.interactive.scheduleDemo')}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
