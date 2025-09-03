'use client';

import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="prose prose-lg mx-auto">
        <h1 className="text-4xl font-bold mb-8">{t('privacy.title')}</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.introduction.title')}</h2>
            <p className="text-muted-foreground">{t('privacy.introduction.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.dataCollection.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.dataCollection.content')}</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>{t('privacy.dataCollection.item1')}</li>
              <li>{t('privacy.dataCollection.item2')}</li>
              <li>{t('privacy.dataCollection.item3')}</li>
              <li>{t('privacy.dataCollection.item4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.dataUsage.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.dataUsage.content')}</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>{t('privacy.dataUsage.item1')}</li>
              <li>{t('privacy.dataUsage.item2')}</li>
              <li>{t('privacy.dataUsage.item3')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.dataSharing.title')}</h2>
            <p className="text-muted-foreground">{t('privacy.dataSharing.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.userRights.title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.userRights.content')}</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>{t('privacy.userRights.item1')}</li>
              <li>{t('privacy.userRights.item2')}</li>
              <li>{t('privacy.userRights.item3')}</li>
              <li>{t('privacy.userRights.item4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.contact.title')}</h2>
            <p className="text-muted-foreground">{t('privacy.contact.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.updates.title')}</h2>
            <p className="text-muted-foreground">{t('privacy.updates.content')}</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            {t('privacy.lastUpdated')}: {t('privacy.lastUpdatedDate')}
          </p>
        </div>
      </div>
    </div>
  );
}
