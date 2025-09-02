'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { CTAButton } from '@/components/ui/CTAButton';

// 硬編碼翻譯 - 快速修復阻斷問題
const translations = {
  'zh-TW': {
    title: '強大功能，無限可能',
    description: '探索 Morning AI 的完整功能套件，從智能設計系統到企業級解決方案，我們提供您成功所需的一切工具。',
    heroTitle: '強大功能，無限可能',
    heroDescription: '從個人開發者到大型企業，我們提供完整的定價方案，滿足不同規模的需求。',
    getStarted: '立即開始',
    viewDemo: '查看示範',
    aiDesignTitle: 'AI 智能設計',
    aiDesignDescription: 'AI 驅動的設計系統，自動生成一致的 UI 元件',
    componentLibraryTitle: '元件庫',
    componentLibraryDescription: '豐富的 React 元件庫，支援完整的設計系統',
    workflowTitle: '工作流程優化',
    workflowDescription: '簡化開發流程，提升團隊協作效率',
    viewAllFeatures: '查看所有功能',
    pricingTitle: '選擇適合您的方案',
    pricingDescription: '從個人開發者到大型企業，我們提供完整的定價方案，滿足不同規模的需求。',
    freeName: '免費',
    freePrice: '免費',
    freeDescription: '適合個人開發者和小型專案',
    proName: 'NT$ 990',
    proPrice: 'NT$ 990',
    proDescription: '適合專業開發者和成長中的團隊',
    enterpriseName: '客製化',
    enterprisePrice: '客製化',
    enterpriseDescription: '適合大型企業和組織',
    popular: '最受歡迎',
    contactSales: '聯絡銷售',
    viewAllPricing: '查看所有價格',
    readyToStartTitle: '準備開始了嗎？',
    readyToStartDescription: '立即開始使用 Morning AI，體驗前所未有的開發效率。',
    contactUs: '聯絡我們'
  },
  'zh-CN': {
    title: '强大功能，无限可能',
    description: '探索 Morning AI 的完整功能套件，从智能设计系统到企业级解决方案，我们提供您成功所需的一切工具。',
    heroTitle: '强大功能，无限可能',
    heroDescription: '从个人开发者到大型企业，我们提供完整的定价方案，满足不同规模的需求。',
    getStarted: '立即开始',
    viewDemo: '查看示范',
    aiDesignTitle: 'AI 智能设计',
    aiDesignDescription: 'AI 驱动的设计系统，自动生成一致的 UI 组件',
    componentLibraryTitle: '组件库',
    componentLibraryDescription: '丰富的 React 组件库，支持完整的设计系统',
    workflowTitle: '工作流程优化',
    workflowDescription: '简化开发流程，提升团队协作效率',
    viewAllFeatures: '查看所有功能',
    pricingTitle: '选择适合您的方案',
    pricingDescription: '从个人开发者到大型企业，我们提供完整的定价方案，满足不同规模的需求。',
    freeName: '免费',
    freePrice: '免费',
    freeDescription: '适合个人开发者和小型项目',
    proName: 'NT$ 990',
    proPrice: 'NT$ 990',
    proDescription: '适合专业开发者和成长中的团队',
    enterpriseName: '定制化',
    enterprisePrice: '定制化',
    enterpriseDescription: '适合大型企业和组织',
    popular: '最受欢迎',
    contactSales: '联系销售',
    viewAllPricing: '查看所有价格',
    readyToStartTitle: '准备开始了吗？',
    readyToStartDescription: '立即开始使用 Morning AI，体验前所未有的开发效率。',
    contactUs: '联系我们'
  },
  'en': {
    title: 'Powerful Features, Unlimited Possibilities',
    description: 'Explore Morning AI\'s complete feature suite, from intelligent design systems to enterprise-grade solutions, we provide all the tools you need for success.',
    heroTitle: 'Powerful Features, Unlimited Possibilities',
    heroDescription: 'From individual developers to large enterprises, we provide complete pricing plans to meet the needs of different scales.',
    getStarted: 'Get Started',
    viewDemo: 'View Demo',
    aiDesignTitle: 'AI Smart Design',
    aiDesignDescription: 'AI-driven design system that automatically generates consistent UI components',
    componentLibraryTitle: 'Component Library',
    componentLibraryDescription: 'Rich React component library with complete design system support',
    workflowTitle: 'Workflow Optimization',
    workflowDescription: 'Streamline development processes and improve team collaboration efficiency',
    viewAllFeatures: 'View All Features',
    pricingTitle: 'Choose the Right Plan for You',
    pricingDescription: 'From individual developers to large enterprises, we provide complete pricing plans to meet the needs of different scales.',
    freeName: 'Free',
    freePrice: 'Free',
    freeDescription: 'Perfect for individual developers and small projects',
    proName: 'NT$ 990',
    proPrice: 'NT$ 990',
    proDescription: 'Perfect for professional developers and growing teams',
    enterpriseName: 'Custom',
    enterprisePrice: 'Custom',
    enterpriseDescription: 'Perfect for large enterprises and organizations',
    popular: 'Most Popular',
    contactSales: 'Contact Sales',
    viewAllPricing: 'View All Pricing',
    readyToStartTitle: 'Ready to Get Started?',
    readyToStartDescription: 'Start using Morning AI today and experience unprecedented development efficiency.',
    contactUs: 'Contact Us'
  }
};

export default function HomePage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations();
  
  // 使用硬編碼翻譯作為fallback
  const getText = (key: string) => {
    const localeTexts = translations[locale as keyof typeof translations] || translations['zh-TW'];
    return localeTexts[key as keyof typeof localeTexts] || key;
  };

  return (
    <div>
      {/* 開發環境調試區域 */}
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-muted p-4 rounded-lg max-w-md mx-auto mb-8 container">
          <p id="lang-check" className="font-mono text-sm font-bold">
            LANG_CHECK: {locale === 'zh-TW' ? '繁中 OK' : locale === 'zh-CN' ? '简中 OK' : 'EN OK'}
          </p>
          <p id="locale" className="font-mono text-sm text-muted-foreground">
            Locale: {locale}
          </p>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            {getText('title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {getText('description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <CTAButton 
              variant="primary" 
              size="lg"
              ctaText="hero_get_started"
            >
              {getText('getStarted')}
            </CTAButton>
            <CTAButton 
              variant="outline" 
              size="lg"
              ctaText="hero_view_demo"
            >
              <Link href={`/${locale}/demo`}>
                {getText('viewDemo')}
              </Link>
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {getText('heroTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {getText('heroDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {getText('aiDesignTitle')}
              </h3>
              <p className="text-muted-foreground">
                {getText('aiDesignDescription')}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {getText('componentLibraryTitle')}
              </h3>
              <p className="text-muted-foreground">
                {getText('componentLibraryDescription')}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {getText('workflowTitle')}
              </h3>
              <p className="text-muted-foreground">
                {getText('workflowDescription')}
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href={`/${locale}/features`}>
              <CTAButton 
                variant="outline" 
                size="lg"
                ctaText="home_view_all_features"
              >
                {getText('viewAllFeatures')}
              </CTAButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {getText('pricingTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {getText('pricingDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="border rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">
                {getText('freeName')}
              </h3>
              <div className="text-3xl font-bold mb-4">
                {getText('freePrice')}
              </div>
              <p className="text-muted-foreground mb-6">
                {getText('freeDescription')}
              </p>
              <CTAButton 
                variant="outline" 
                size="lg" 
                className="w-full"
                ctaText="pricing_free_get_started"
              >
                {getText('getStarted')}
              </CTAButton>
            </div>
            
            {/* Pro Plan */}
            <div className="border-2 border-primary rounded-lg p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                {getText('popular')}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {getText('proName')}
              </h3>
              <div className="text-3xl font-bold mb-4">
                {getText('proPrice')}
              </div>
              <p className="text-muted-foreground mb-6">
                {getText('proDescription')}
              </p>
              <CTAButton 
                variant="primary" 
                size="lg" 
                className="w-full"
                ctaText="pricing_pro_get_started"
              >
                {getText('getStarted')}
              </CTAButton>
            </div>
            
            {/* Enterprise Plan */}
            <div className="border rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">
                {getText('enterpriseName')}
              </h3>
              <div className="text-3xl font-bold mb-4">
                {getText('enterprisePrice')}
              </div>
              <p className="text-muted-foreground mb-6">
                {getText('enterpriseDescription')}
              </p>
              <CTAButton 
                variant="outline" 
                size="lg" 
                className="w-full"
                ctaText="pricing_enterprise_contact"
              >
                {getText('contactSales')}
              </CTAButton>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href={`/${locale}/pricing`}>
              <CTAButton 
                variant="outline" 
                size="lg"
                ctaText="home_view_all_pricing"
              >
                {getText('viewAllPricing')}
              </CTAButton>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {getText('readyToStartTitle')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {getText('readyToStartDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                variant="primary" 
                size="lg"
                ctaText="final_cta_get_started"
              >
                {getText('getStarted')}
              </CTAButton>
              <Link href={`/${locale}/contact`}>
                <CTAButton 
                  variant="outline" 
                  size="lg"
                  ctaText="final_cta_contact_us"
                >
                  {getText('contactUs')}
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

