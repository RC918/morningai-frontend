'use client';

import { useTranslations } from 'next-intl';

export default function ComponentsPage() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{t('components.title')}</h1>
      <div className="space-y-4">
        <p>{t('components.description')}</p>
      </div>
    </div>
  );
}
