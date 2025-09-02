'use client';

import { useTranslations } from 'next-intl';
import { CTAButton } from '@/components/ui/CTAButton';

export default function FAQPage() {
  const t = useTranslations();

  const faqs = [
    {
      id: 'general-1',
      question: t('faq.general.q1'),
      answer: t('faq.general.a1')
    },
    {
      id: 'general-2', 
      question: t('faq.general.q2'),
      answer: t('faq.general.a2')
    },
    {
      id: 'pricing-1',
      question: t('faq.pricing.q1'),
      answer: t('faq.pricing.a1')
    },
    {
      id: 'pricing-2',
      question: t('faq.pricing.q2'),
      answer: t('faq.pricing.a2')
    },
    {
      id: 'technical-1',
      question: t('faq.technical.q1'),
      answer: t('faq.technical.a1')
    },
    {
      id: 'technical-2',
      question: t('faq.technical.q2'),
      answer: t('faq.technical.a2')
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t('faq.hero.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('faq.hero.description')}
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-6 mb-16">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="text-center bg-primary/5 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">
          {t('faq.contact.title')}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('faq.contact.description')}
        </p>
        <CTAButton 
          variant="primary" 
          size="lg"
          ctaText="faq_contact_us"
        >
          {t('cta.contactUs')}
        </CTAButton>
      </div>
    </div>
  );
}
