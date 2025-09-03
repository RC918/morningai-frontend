'use client';

import { useTranslations } from 'next-intl';
import { CTAButton } from '@/components/ui/CTAButton';

export default function FeaturesPage() {
  const t = useTranslations();

  const features = [
    {
      id: 'ai-powered',
      icon: '🤖',
      title: t('features.aiPowered.title'),
      description: t('features.aiPowered.description'),
      benefits: [
        t('features.aiPowered.benefit1'),
        t('features.aiPowered.benefit2'),
        t('features.aiPowered.benefit3')
      ]
    },
    {
      id: 'design-system',
      icon: '🎨',
      title: t('features.designSystem.title'),
      description: t('features.designSystem.description'),
      benefits: [
        t('features.designSystem.benefit1'),
        t('features.designSystem.benefit2'),
        t('features.designSystem.benefit3')
      ]
    },
    {
      id: 'enterprise-ready',
      icon: '🏢',
      title: t('features.enterpriseReady.title'),
      description: t('features.enterpriseReady.description'),
      benefits: [
        t('features.enterpriseReady.benefit1'),
        t('features.enterpriseReady.benefit2'),
        t('features.enterpriseReady.benefit3')
      ]
    },
    {
      id: 'developer-experience',
      icon: '👩‍💻',
      title: t('features.developerExperience.title'),
      description: t('features.developerExperience.description'),
      benefits: [
        t('features.developerExperience.benefit1'),
        t('features.developerExperience.benefit2'),
        t('features.developerExperience.benefit3')
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t('features.hero.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          {t('features.hero.description')}
        </p>
        <CTAButton 
          variant="primary" 
          size="lg"
          ctaText="features_hero_cta"
        >
          {t('cta.tryDemo')}
        </CTAButton>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {features.map((feature) => (
          <div key={feature.id} className="bg-card rounded-lg p-8 border">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-muted-foreground mb-6">{feature.description}</p>
            <ul className="space-y-2">
              {feature.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-primary/5 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">
          {t('features.cta.title')}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('features.cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton 
            variant="primary" 
            size="lg"
            ctaText="features_cta_primary"
          >
            {t('cta.getStarted')}
          </CTAButton>
          <CTAButton 
            variant="outline" 
            size="lg"
            ctaText="features_cta_secondary"
          >
            {t('cta.contactSales')}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

