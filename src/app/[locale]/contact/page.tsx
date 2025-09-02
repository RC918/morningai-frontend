'use client';

import { useTranslations } from 'next-intl';
import { CTAButton } from '@/components/ui/CTAButton';

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t('contact.hero.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('contact.hero.description')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-card rounded-lg p-8 border">
          <h2 className="text-2xl font-semibold mb-6">{t('contact.form.title')}</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('contact.form.name')}
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border rounded-md"
                placeholder={t('contact.form.namePlaceholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('contact.form.email')}
              </label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border rounded-md"
                placeholder={t('contact.form.emailPlaceholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('contact.form.subject')}
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border rounded-md"
                placeholder={t('contact.form.subjectPlaceholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('contact.form.message')}
              </label>
              <textarea 
                rows={5}
                className="w-full px-3 py-2 border rounded-md"
                placeholder={t('contact.form.messagePlaceholder')}
              />
            </div>
            <CTAButton 
              variant="primary" 
              size="lg" 
              className="w-full"
              ctaText="contact_form_submit"
            >
              {t('contact.form.submit')}
            </CTAButton>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('contact.info.title')}</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">{t('contact.info.email.title')}</h4>
                <p className="text-muted-foreground">{t('contact.info.email.value')}</p>
              </div>
              <div>
                <h4 className="font-medium">{t('contact.info.phone.title')}</h4>
                <p className="text-muted-foreground">{t('contact.info.phone.value')}</p>
              </div>
              <div>
                <h4 className="font-medium">{t('contact.info.address.title')}</h4>
                <p className="text-muted-foreground">{t('contact.info.address.value')}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">{t('contact.hours.title')}</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>{t('contact.hours.weekdays')}</span>
                <span className="text-muted-foreground">{t('contact.hours.weekdaysTime')}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('contact.hours.weekend')}</span>
                <span className="text-muted-foreground">{t('contact.hours.weekendTime')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
