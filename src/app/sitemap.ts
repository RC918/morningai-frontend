import { MetadataRoute } from 'next';

const LOCALES = ['zh-TW', 'zh-CN', 'en'] as const;
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://morningai-frontend-ten.vercel.app';

// 定義所有頁面路由
const PAGES = [
  '',           // 首頁
  '/features',  // 功能頁面
  '/pricing',   // 價格頁面
  '/faq',       // FAQ
  '/contact',   // 聯絡我們
  '/demo',      // 示範
  '/privacy',   // 隱私政策
  '/terms',     // 服務條款
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];
  
  // 為每個語言和頁面生成 sitemap 條目
  LOCALES.forEach((locale) => {
    PAGES.forEach((page) => {
      sitemap.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1.0 : 0.8, // 首頁優先級最高
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((altLocale) => [
              altLocale === 'zh-TW' ? 'zh-Hant' : 
              altLocale === 'zh-CN' ? 'zh-Hans' : 'en',
              `${BASE_URL}/${altLocale}${page}`
            ])
          )
        }
      });
    });
  });
  
  return sitemap;
}

