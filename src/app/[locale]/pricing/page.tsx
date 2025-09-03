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
          <div 
            key={plan.id} 
            className={`relative bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
              plan.popular 
                ? 'border-blue-500 shadow-lg scale-105' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {t('pricing.popular')}
                </div>
              </div>
            )}
            
            {/* Card Content */}
            <div className={`p-8 h-full flex flex-col ${plan.popular ? 'pt-12' : 'pt-8'}`}>
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>
                <div className="text-gray-500 text-lg">
                  {plan.period}
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-center mb-8 leading-relaxed">
                {plan.description}
              </p>
              
              {/* Features */}
              <div className="flex-grow mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA Button */}
              <div className="mt-auto">
                <CTAButton
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500'
                  }`}
                  ctaText={`pricing_${plan.id}_cta`}
                >
                  {plan.cta}
                </CTAButton>
              </div>
            </div>
          </div>
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
