import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // 檢查環境變數來決定robots.txt內容
  const nodeEnv = process.env.NODE_ENV;
  const vercelEnv = process.env.VERCEL_ENV;
  
  // 判斷是否為生產環境
  const isProduction = nodeEnv === 'production' && vercelEnv === 'production';
  
  let robotsContent: string;
  
  if (isProduction) {
    // Production環境 - 允許搜尋引擎索引
    robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.morningai.me/sitemap.xml`;
  } else {
    // Staging/Development環境 - 禁止搜尋引擎索引
    robotsContent = `User-agent: *
Disallow: /

# This is a staging environment
# Production site: https://www.morningai.me`;
  }
  
  return new NextResponse(robotsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  } );
}
