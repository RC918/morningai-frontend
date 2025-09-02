import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { CTAButton } from '@/components/ui/CTAButton';

interface ContactPageProps {
  params: { locale: string };
}

export default function ContactPage({ params }: ContactPageProps) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations();

  const contactMethods = [
    {
      id: 'sales',
      icon: '💼',
      title: t('contact.sales.title'),
      description: t('contact.sales.description'),
      action: t('contact.sales.action'),
      link: 'mailto:sales@morningai.me'
    },
    {
      id: 'support',
      icon: '🛠️',
      title: t('contact.support.title'),
      description: t('contact.support.description'),
      action: t('contact.support.action'),
      link: 'mailto:support@morningai.me'
    },
    {
      id: 'partnership',
      icon: '🤝',
      title: t('contact.partnership.title'),
      description: t('contact.partnership.description'),
      action: t('contact.partnership.action'),
      link: 'mailto:partners@morningai.me'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t('contact.hero.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          {t('contact.hero.description')}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-8">
            {t('contact.form.title')}
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('contact.form.firstName')}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={t('contact.form.firstNamePlaceholder')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('contact.form.lastName')}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={t('contact.form.lastNamePlaceholder')}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t('contact.form.emailPlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {t('contact.form.company')}
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t('contact.form.companyPlaceholder')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {t('contact.form.subject')}
              </label>
              <select className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">{t('contact.form.selectSubject')}</option>
                <option value="sales">{t('contact.form.subjectSales')}</option>
                <option value="support">{t('contact.form.subjectSupport')}</option>
                <option value="partnership">{t('contact.form.subjectPartnership')}</option>
                <option value="other">{t('contact.form.subjectOther')}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                rows={6}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
                placeholder={t('contact.form.messagePlaceholder')}
              ></textarea>
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

        {/* Contact Methods */}
        <div>
          <h2 className="text-3xl font-bold mb-8">
            {t('contact.methods.title')}
          </h2>
          <div className="space-y-6">
            {contactMethods.map((method) => (
              <div key={method.id} className="bg-card rounded-lg p-6 border">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">{method.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground mb-4">{method.description}</p>
                    <a
                      href={method.link}
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      {method.action} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Office Information */}
          <div className="mt-12 bg-primary/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">
              {t('contact.office.title')}
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>{t('contact.office.address')}</p>
              <p>{t('contact.office.phone')}</p>
              <p>{t('contact.office.hours')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ CTA */}
      <div className="text-center mt-16 bg-card rounded-lg p-12 border">
        <h2 className="text-3xl font-bold mb-4">
          {t('contact.faq.title')}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('contact.faq.description')}
        </p>
        <CTAButton 
          variant="outline" 
          size="lg"
          ctaText="contact_faq_link"
        >
          {t('contact.faq.action')}
        </CTAButton>
      </div>
    </div>
  );
}

