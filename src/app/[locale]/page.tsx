'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { CTAButton } from '@/components/ui/CTAButton';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export const dynamic = "force-static"; // keep SSR output stable

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}

