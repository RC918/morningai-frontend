'use client';

import { useTranslations } from 'next-intl';

export default function I18nDemoPage() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{t('i18nDemo.title')}</h1>
      <div className="space-y-4">
        <p>{t('i18nDemo.description')}</p>
        <div className="bg-card p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">{t('navigation.home')}</h2>
          <p>{t('theme.light')}</p>
          <p>{t('language.current')}</p>
        </div>
      </div>
    </div>
  );
}
