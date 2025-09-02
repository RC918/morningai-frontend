import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { CTAButton } from '@/components/ui/CTAButton';

interface DemoPageProps {
  params: { locale: string };
}

export default function DemoPage({ params }: DemoPageProps) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations();

  const demoSections = [
    {
      id: 'ai-design',
      title: t('demo.aiDesign.title'),
      description: t('demo.aiDesign.description'),
      features: [
        t('demo.aiDesign.feature1'),
        t('demo.aiDesign.feature2'),
        t('demo.aiDesign.feature3')
      ],
      videoPlaceholder: '🎨 AI Design Demo'
    },
    {
      id: 'component-library',
      title: t('demo.componentLibrary.title'),
      description: t('demo.componentLibrary.description'),
      features: [
        t('demo.componentLibrary.feature1'),
        t('demo.componentLibrary.feature2'),
        t('demo.componentLibrary.feature3')
      ],
      videoPlaceholder: '🧩 Component Library Demo'
    },
    {
      id: 'workflow',
      title: t('demo.workflow.title'),
      description: t('demo.workflow.description'),
      features: [
        t('demo.workflow.feature1'),
        t('demo.workflow.feature2'),
        t('demo.workflow.feature3')
      ],
      videoPlaceholder: '⚡ Workflow Demo'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t('demo.hero.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          {t('demo.hero.description')}
        </p>
        <CTAButton 
          variant="primary" 
          size="lg"
          ctaText="demo_hero_cta"
        >
          {t('demo.hero.cta')}
        </CTAButton>
      </div>

      {/* Interactive Demo */}
      <div className="mb-16">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              {t('demo.interactive.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('demo.interactive.description')}
            </p>
          </div>
          
          {/* Demo Placeholder */}
          <div className="bg-white rounded-lg p-8 shadow-lg min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-2">
                {t('demo.interactive.placeholder')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('demo.interactive.placeholderDescription')}
              </p>
              <CTAButton 
                variant="primary"
                ctaText="demo_interactive_start"
              >
                {t('demo.interactive.start')}
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Sections */}
      <div className="space-y-16">
        {demoSections.map((section, index) => (
          <div 
            key={section.id} 
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}
          >
            <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
              <h3 className="text-3xl font-bold mb-4">{section.title}</h3>
              <p className="text-muted-foreground mb-6 text-lg">
                {section.description}
              </p>
              <ul className="space-y-3 mb-8">
                {section.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <CTAButton 
                variant="outline"
                ctaText={`demo_${section.id}_try`}
              >
                {t('demo.tryFeature')}
              </CTAButton>
            </div>
            
            <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
              <div className="bg-gradient-to-br from-muted/50 to-muted rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">{section.videoPlaceholder}</div>
                  <p className="text-muted-foreground">
                    {t('demo.videoPlaceholder')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Request Demo CTA */}
      <div className="text-center mt-16 bg-primary/5 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">
          {t('demo.request.title')}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('demo.request.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton 
            variant="primary" 
            size="lg"
            ctaText="demo_request_personal"
          >
            {t('demo.request.personal')}
          </CTAButton>
          <CTAButton 
            variant="outline" 
            size="lg"
            ctaText="demo_request_team"
          >
            {t('demo.request.team')}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

