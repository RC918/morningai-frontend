import { getTranslations } from 'next-intl/server';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

type Props = {
  params: Promise<{ locale: string }>;
};

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'zh-TW' }, { locale: 'zh-CN' }, { locale: 'en' }];
}

export default async function I18nDemoPage({ params }: Props) {
  const { locale } = await params;
  
  const t = await getTranslations('home');
  const tNav = await getTranslations('navigation');
  const tTheme = await getTranslations('theme');
  const tLang = await getTranslations('language');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-foreground">
          Internationalization Demo
        </h1>
        <p className="text-lg text-muted-foreground">
          Demonstrating multi-language support with next-intl
        </p>
        <div className="flex justify-center gap-2">
          <Badge variant="primary">繁體中文</Badge>
          <Badge variant="primary">简体中文</Badge>
          <Badge variant="primary">English</Badge>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Home Page Translations */}
        <Card>
          <CardHeader>
            <CardTitle>Home Page Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-2">Title</h3>
              <p className="text-lg font-medium">{t('title')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-2">Subtitle</h3>
              <p>{t('subtitle')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-2">Description</h3>
              <p className="text-sm">{t('description')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-2">CTA Button</h3>
              <p className="text-sm font-medium">{t('cta.button')}</p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Translations */}
        <Card>
          <CardHeader>
            <CardTitle>Navigation Menu</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">{tNav('home')}</span>
              </div>
              <div>
                <span className="font-medium">{tNav('components')}</span>
              </div>
              <div>
                <span className="font-medium">{tNav('documentation')}</span>
              </div>
              <div>
                <span className="font-medium">{tNav('about')}</span>
              </div>
              <div>
                <span className="font-medium">{tNav('contact')}</span>
              </div>
              <div>
                <span className="font-medium">{tNav('features')}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Theme Translations */}
        <Card>
          <CardHeader>
            <CardTitle>Theme System</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="text-center">
                <div className="w-8 h-8 bg-background border-2 border-border rounded mb-2"></div>
                <span className="text-sm">{tTheme('light')}</span>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-foreground rounded mb-2"></div>
                <span className="text-sm">{tTheme('dark')}</span>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-gradient-to-br from-background to-foreground rounded mb-2"></div>
                <span className="text-sm">{tTheme('system')}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {tTheme('switchTheme')}
            </p>
          </CardContent>
        </Card>

        {/* Language Translations */}
        <Card>
          <CardHeader>
            <CardTitle>Language System</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                {tLang('currentLanguage')}
              </h3>
              <p className="text-lg">🌐 {tLang('switchLanguage')}</p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Language detection is automatic based on browser preferences.</p>
              <p>Use the language switcher in the navigation to change languages.</p>
            </div>
          </CardContent>
        </Card>

        {/* Features Section */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Features Section</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <h3 className="font-semibold">{t('features.accessibility.title')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('features.accessibility.description')}
                </p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-semibold">{t('features.responsive.title')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('features.responsive.description')}
                </p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-semibold">{t('features.performance.title')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('features.performance.description')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Language Coverage Stats */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Translation Coverage</h2>
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%+</div>
            <div className="text-sm text-muted-foreground">Coverage Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Translation Keys</div>
          </div>
        </div>
      </div>
    </div>
  );
}

