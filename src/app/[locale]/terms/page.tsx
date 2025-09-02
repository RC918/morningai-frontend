import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

interface TermsPageProps {
  params: { locale: string };
}

export default function TermsPage({ params }: TermsPageProps) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations();

  const sections = [
    {
      id: 'acceptance',
      title: t('terms.acceptance.title'),
      content: t('terms.acceptance.content')
    },
    {
      id: 'services',
      title: t('terms.services.title'),
      content: t('terms.services.content')
    },
    {
      id: 'user-accounts',
      title: t('terms.userAccounts.title'),
      content: t('terms.userAccounts.content')
    },
    {
      id: 'acceptable-use',
      title: t('terms.acceptableUse.title'),
      content: t('terms.acceptableUse.content')
    },
    {
      id: 'intellectual-property',
      title: t('terms.intellectualProperty.title'),
      content: t('terms.intellectualProperty.content')
    },
    {
      id: 'payment-terms',
      title: t('terms.paymentTerms.title'),
      content: t('terms.paymentTerms.content')
    },
    {
      id: 'privacy',
      title: t('terms.privacy.title'),
      content: t('terms.privacy.content')
    },
    {
      id: 'disclaimers',
      title: t('terms.disclaimers.title'),
      content: t('terms.disclaimers.content')
    },
    {
      id: 'limitation-liability',
      title: t('terms.limitationLiability.title'),
      content: t('terms.limitationLiability.content')
    },
    {
      id: 'termination',
      title: t('terms.termination.title'),
      content: t('terms.termination.content')
    },
    {
      id: 'governing-law',
      title: t('terms.governingLaw.title'),
      content: t('terms.governingLaw.content')
    },
    {
      id: 'changes',
      title: t('terms.changes.title'),
      content: t('terms.changes.content')
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {t('terms.title')}
        </h1>
        <p className="text-muted-foreground mb-4">
          {t('terms.lastUpdated')}: {t('terms.lastUpdatedDate')}
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('terms.introduction')}
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-card rounded-lg p-6 border mb-12">
        <h2 className="text-xl font-semibold mb-4">
          {t('terms.tableOfContents')}
        </h2>
        <ul className="space-y-2">
          {sections.map((section, index) => (
            <li key={section.id}>
              <a 
                href={`#${section.id}`}
                className="text-primary hover:underline"
              >
                {index + 1}. {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Terms Sections */}
      <div className="prose prose-lg max-w-none">
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 scroll-mt-8">
              {index + 1}. {section.title}
            </h2>
            <div className="text-muted-foreground leading-relaxed">
              {section.content.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Contact Information */}
      <div className="bg-primary/5 rounded-lg p-8 mt-12">
        <h2 className="text-2xl font-bold mb-4">
          {t('terms.contact.title')}
        </h2>
        <p className="text-muted-foreground mb-4">
          {t('terms.contact.description')}
        </p>
        <div className="space-y-2 text-muted-foreground">
          <p><strong>{t('terms.contact.email')}:</strong> legal@morningai.me</p>
          <p><strong>{t('terms.contact.address')}:</strong> {t('terms.contact.addressValue')}</p>
          <p><strong>{t('terms.contact.phone')}:</strong> {t('terms.contact.phoneValue')}</p>
        </div>
      </div>
    </div>
  );
}

