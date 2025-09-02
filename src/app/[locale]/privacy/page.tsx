import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

interface PrivacyPageProps {
  params: { locale: string };
}

export default function PrivacyPage({ params }: PrivacyPageProps) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations();

  const sections = [
    {
      id: 'information-collection',
      title: t('privacy.informationCollection.title'),
      content: t('privacy.informationCollection.content')
    },
    {
      id: 'information-use',
      title: t('privacy.informationUse.title'),
      content: t('privacy.informationUse.content')
    },
    {
      id: 'information-sharing',
      title: t('privacy.informationSharing.title'),
      content: t('privacy.informationSharing.content')
    },
    {
      id: 'data-security',
      title: t('privacy.dataSecurity.title'),
      content: t('privacy.dataSecurity.content')
    },
    {
      id: 'cookies',
      title: t('privacy.cookies.title'),
      content: t('privacy.cookies.content')
    },
    {
      id: 'user-rights',
      title: t('privacy.userRights.title'),
      content: t('privacy.userRights.content')
    },
    {
      id: 'children-privacy',
      title: t('privacy.childrenPrivacy.title'),
      content: t('privacy.childrenPrivacy.content')
    },
    {
      id: 'policy-changes',
      title: t('privacy.policyChanges.title'),
      content: t('privacy.policyChanges.content')
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {t('privacy.title')}
        </h1>
        <p className="text-muted-foreground mb-4">
          {t('privacy.lastUpdated')}: {t('privacy.lastUpdatedDate')}
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('privacy.introduction')}
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-card rounded-lg p-6 border mb-12">
        <h2 className="text-xl font-semibold mb-4">
          {t('privacy.tableOfContents')}
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

      {/* Privacy Policy Sections */}
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
          {t('privacy.contact.title')}
        </h2>
        <p className="text-muted-foreground mb-4">
          {t('privacy.contact.description')}
        </p>
        <div className="space-y-2 text-muted-foreground">
          <p><strong>{t('privacy.contact.email')}:</strong> privacy@morningai.me</p>
          <p><strong>{t('privacy.contact.address')}:</strong> {t('privacy.contact.addressValue')}</p>
          <p><strong>{t('privacy.contact.phone')}:</strong> {t('privacy.contact.phoneValue')}</p>
        </div>
      </div>
    </div>
  );
}

