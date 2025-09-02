'use client';

import { useTranslations } from 'next-intl';
import { CTAButton } from '@/components/ui/CTAButton';

export default function PricingPage() {
  const t = useTranslations();

  const plans = [
    {
      id: 'starter',
      name: t('pricing.starter.name'),
      price: t('pricing.starter.price'),
      period: t('pricing.starter.period'),
      description: t('pricing.starter.description'),
      features: [
        t('pricing.starter.feature1'),
        t('pricing.starter.feature2'),
        t('pricing.starter.feature3'),
        t('pricing.starter.feature4')
      ],
      cta: t('pricing.starter.cta'),
      popular: false
    },
    {
      id: 'professional',
      name: t('pricing.professional.name'),
      price: t('pricing.professional.price'),
      period: t('pricing.professional.period'),
      description: t('pricing.professional.description'),
      features: [
        t('pricing.professional.feature1'),
        t('pricing.professional.feature2'),
        t('pricing.professional.feature3'),
        t('pricing.professional.feature4'),
        t('pricing.professional.feature5')
      ],
      cta: t('pricing.professional.cta'),
      popular: true
    },
    {
      id: 'enterprise',
      name: t('pricing.enterprise.name'),
      price: t('pricing.enterprise.price'),
      period: t('pricing.enterprise.period'),
      description: t('pricing.enterprise.description'),
      features: [
        t('pricing.enterprise.feature1'),
        t('pricing.enterprise.feature2'),
        t('pricing.enterprise.feature3'),
        t('pricing.enterprise.feature4'),
        t('pricing.enterprise.feature5'),
        t('pricing.enterprise.feature6')
      ],
      cta: t('pricing.enterprise.cta'),
      popular: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t('pricing.hero.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          {t('pricing.hero.description')}
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {plans.map((plan) => (
          <article 
            key={plan.id} 
            className={`relative bg-card rounded-lg border flex flex-col ${
              plan.popular ? 'border-primary border-2' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <span className="rounded-full px-3 py-1 text-sm font-semibold bg-primary text-primary-foreground shadow-md">
                  {t('pricing.popular')}
                </span>
              </div>
            )}
            
            {/* 為 Popular 標籤預留空間 */}
            <div className={`p-8 flex flex-col flex-grow ${plan.popular ? 'pt-10' : ''}`}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold mb-3 leading-normal">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2 leading-normal">{plan.price}</div>
                <div className="text-muted-foreground leading-normal">{plan.period}</div>
              </div>
              
              <p className="text-muted-foreground mb-6 text-center leading-normal">{plan.description}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                    <span className="leading-normal">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <CTAButton 
                variant={plan.popular ? "primary" : "outline"} 
                size="lg" 
                className="w-full mt-auto"
                ctaText={`pricing_${plan.id}_cta`}
              >
                {plan.cta}
              </CTAButton>
            </div>
          </article>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          {t('pricing.faq.title')}
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          {t('pricing.faq.description')}
        </p>
        <CTAButton 
          variant="outline" 
          size="lg"
          ctaText="pricing_contact_sales"
        >
          {t('cta.contactSales')}
        </CTAButton>
      </div>
    </div>
  );
}
