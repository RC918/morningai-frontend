// src/app/api/healthcheck/route.ts
import { NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/i18n/config';

export async function GET() {
  // 獲取構建時的 commit hash (從環境變數或 package.json)
  const commitHash = process.env.VERCEL_GIT_COMMIT_SHA || 
                    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 
                    'unknown';
  
  // 獲取構建時間
  const buildTime = process.env.VERCEL_BUILD_TIME || 
                   new Date().toISOString();

  // 檢查翻譯檔案是否可載入
  const localeStatus: Record<string, boolean> = {};
  
  for (const locale of locales) {
    try {
      // 嘗試載入每個語系的翻譯檔案
      const messages = await import(`@/i18n/messages/${locale}.json`);
      localeStatus[locale] = !!messages.default && !!messages.default.LANG_CHECK;
    } catch (error) {
      localeStatus[locale] = false;
    }
  }

  const healthData = {
    service: 'morningai-frontend',
    version: '2.2.0',
    commit: commitHash,
    buildId: commitHash.substring(0, 7),
    buildTime,
    status: 'healthy',
    locales: locales,
    defaultLocale,
    localeStatus,
    features: {
      i18n: true,
      ssg: true,
      htmlLang: true,
      ezTests: true,
      unitTests: true
    },
    tech: {
      nextVersion: '14.2.32',
      nextIntlVersion: '3.22.0',
      nodeVersion: '20.x'
    },
    generatedAt: new Date().toISOString()
  };

  return NextResponse.json(healthData, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  });
}

