'use client';

import { useTranslations } from 'next-intl';

export default function TermsPage() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="prose prose-lg mx-auto">
        <h1 className="text-4xl font-bold mb-8">{t('terms.title')}</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.acceptance.title')}</h2>
            <p className="text-muted-foreground">{t('terms.acceptance.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.services.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.services.content')}</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>{t('terms.services.item1')}</li>
              <li>{t('terms.services.item2')}</li>
              <li>{t('terms.services.item3')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.userResponsibilities.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.userResponsibilities.content')}</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>{t('terms.userResponsibilities.item1')}</li>
              <li>{t('terms.userResponsibilities.item2')}</li>
              <li>{t('terms.userResponsibilities.item3')}</li>
              <li>{t('terms.userResponsibilities.item4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.intellectualProperty.title')}</h2>
            <p className="text-muted-foreground">{t('terms.intellectualProperty.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.limitation.title')}</h2>
            <p className="text-muted-foreground">{t('terms.limitation.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.termination.title')}</h2>
            <p className="text-muted-foreground">{t('terms.termination.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.changes.title')}</h2>
            <p className="text-muted-foreground">{t('terms.changes.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.contact.title')}</h2>
            <p className="text-muted-foreground">{t('terms.contact.content')}</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            {t('terms.lastUpdated')}: {t('terms.lastUpdatedDate')}
          </p>
        </div>
      </div>
    </div>
  );
}
