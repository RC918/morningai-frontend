import { useTranslations } from 'next-intl';
import { HreflangLinks } from './HreflangLinks';
import { CanonicalLink } from './CanonicalLink';

interface SEOHeadProps {
  locale: string;
  pathname: string;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function SEOHead({
  locale,
  pathname,
  title,
  description,
  keywords,
  ogImage,
  noindex = false
}: SEOHeadProps) {
  const t = useTranslations('seo');
  
  // 使用傳入的值或回退到翻譯
  const pageTitle = title || t('defaultTitle');
  const pageDescription = description || t('defaultDescription');
  const pageKeywords = keywords || t('defaultKeywords');
  
  // 建構完整標題
  const fullTitle = title ? `${title} | ${t('siteName')}` : t('siteName');
  
  // 建構 OG URL
  const ogUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;
  
  // 根據頁面和語言選擇 OG 圖片
  const getOGImage = () => {
    if (ogImage) return ogImage;
    
    const pageName = pathname.split('/').pop() || 'home';
    return `${process.env.NEXT_PUBLIC_SITE_URL}/og/${pageName}-${locale}.png`;
  };
  
  const ogImageUrl = getOGImage();
  
  return (
    <>
      {/* 基本 Meta 標籤 */}
      <title>{fullTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical */}
      <CanonicalLink pathname={pathname} />
      
      {/* Hreflang */}
      <HreflangLinks pathname={pathname} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={t('siteName')} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      
      {/* 語言相關 */}
      <meta httpEquiv="content-language" content={locale} />
    </>
  );
}

