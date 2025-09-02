import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { CTAButton } from '@/components/ui/CTAButton';

interface PricingPageProps {
  params: { locale: string };
}

export default function PricingPage({ params }: PricingPageProps) {
  unstable_setRequestLocale(params.locale);
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
      popular: false,
      ctaText: t('pricing.starter.cta')
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
        t('pricing.professional.feature5'),
        t('pricing.professional.feature6')
      ],
      popular: true,
      ctaText: t('pricing.professional.cta')
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
        t('pricing.enterprise.feature6'),
        t('pricing.enterprise.feature7')
      ],
      popular: false,
      ctaText: t('pricing.enterprise.cta')
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
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`relative bg-card rounded-lg p-8 border ${
              plan.popular ? 'border-primary shadow-lg scale-105' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  {t('pricing.popular')}
                </span>
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              <p className="text-muted-foreground">{plan.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <CTAButton 
              variant={plan.popular ? "primary" : "outline"}
              size="lg"
              className="w-full"
              ctaText={`pricing_${plan.id}_cta`}
            >
              {plan.ctaText}
            </CTAButton>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-8">
          {t('pricing.faq.title')}
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-left bg-card rounded-lg p-6 border">
              <h4 className="font-semibold mb-2">
                {t(`pricing.faq.question${i}`)}
              </h4>
              <p className="text-muted-foreground">
                {t(`pricing.faq.answer${i}`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Sales CTA */}
      <div className="text-center bg-primary/5 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">
          {t('pricing.contact.title')}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('pricing.contact.description')}
        </p>
        <CTAButton 
          variant="primary" 
          size="lg"
          ctaText="pricing_contact_sales"
        >
          {t('cta.contactSales')}
        </CTAButton>
      </div>
    </div>
  );
}

