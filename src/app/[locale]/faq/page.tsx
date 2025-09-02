import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { CTAButton } from '@/components/ui/CTAButton';

interface FAQPageProps {
  params: { locale: string };
}

export default function FAQPage({ params }: FAQPageProps) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations();

  const faqCategories = [
    {
      id: 'general',
      title: t('faq.general.title'),
      questions: [
        {
          question: t('faq.general.q1.question'),
          answer: t('faq.general.q1.answer')
        },
        {
          question: t('faq.general.q2.question'),
          answer: t('faq.general.q2.answer')
        },
        {
          question: t('faq.general.q3.question'),
          answer: t('faq.general.q3.answer')
        }
      ]
    },
    {
      id: 'pricing',
      title: t('faq.pricing.title'),
      questions: [
        {
          question: t('faq.pricing.q1.question'),
          answer: t('faq.pricing.q1.answer')
        },
        {
          question: t('faq.pricing.q2.question'),
          answer: t('faq.pricing.q2.answer')
        },
        {
          question: t('faq.pricing.q3.question'),
          answer: t('faq.pricing.q3.answer')
        }
      ]
    },
    {
      id: 'technical',
      title: t('faq.technical.title'),
      questions: [
        {
          question: t('faq.technical.q1.question'),
          answer: t('faq.technical.q1.answer')
        },
        {
          question: t('faq.technical.q2.question'),
          answer: t('faq.technical.q2.answer')
        },
        {
          question: t('faq.technical.q3.question'),
          answer: t('faq.technical.q3.answer')
        }
      ]
    },
    {
      id: 'support',
      title: t('faq.support.title'),
      questions: [
        {
          question: t('faq.support.q1.question'),
          answer: t('faq.support.q1.answer')
        },
        {
          question: t('faq.support.q2.question'),
          answer: t('faq.support.q2.answer')
        },
        {
          question: t('faq.support.q3.question'),
          answer: t('faq.support.q3.answer')
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t('faq.hero.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          {t('faq.hero.description')}
        </p>
      </div>

      {/* FAQ Categories */}
      <div className="max-w-4xl mx-auto">
        {faqCategories.map((category, categoryIndex) => (
          <div key={category.id} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {category.title}
            </h2>
            <div className="space-y-4">
              {category.questions.map((faq, faqIndex) => (
                <details 
                  key={faqIndex}
                  className="bg-card rounded-lg border"
                >
                  <summary className="p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                    <span className="font-semibold">{faq.question}</span>
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Search Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">
          {t('faq.search.title')}
        </h2>
        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder={t('faq.search.placeholder')}
              className="w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <span className="text-muted-foreground">🔍</span>
            </button>
          </div>
        </div>
      </div>

      {/* Contact Support CTA */}
      <div className="text-center bg-primary/5 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">
          {t('faq.contact.title')}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('faq.contact.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton 
            variant="primary" 
            size="lg"
            ctaText="faq_contact_support"
          >
            {t('faq.contact.support')}
          </CTAButton>
          <CTAButton 
            variant="outline" 
            size="lg"
            ctaText="faq_contact_sales"
          >
            {t('cta.contactSales')}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

