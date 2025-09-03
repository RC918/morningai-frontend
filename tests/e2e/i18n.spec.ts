import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const locales = ['zh-TW', 'zh-CN', 'en'];

// 證據收集結果
const evidenceData: any = {
  timestamp: new Date().toISOString(),
  results: {}
};

test.describe('i18n Functionality', () => {
  test.beforeEach(async ({ page }) => {
    // 禁用動畫以提高測試穩定性
    await page.addInitScript(() => {
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
        }
      `;
      document.head.appendChild(style);
    });
  });

  for (const locale of locales) {
    test(`should have correct HTML lang attribute for ${locale}`, async ({ page }) => {
      await page.goto(`/${locale}`);
      await page.waitForLoadState('networkidle');
      
      // 驗證 HTML lang 屬性
      const htmlLang = await page.evaluate(() => document.documentElement.lang);
      expect(htmlLang).toBe(locale);
      
      // 收集證據
      evidenceData.results[locale] = evidenceData.results[locale] || {};
      evidenceData.results[locale].htmlLang = htmlLang;
    });

    test(`should render page successfully for ${locale}`, async ({ page }) => {
      const response = await page.goto(`/${locale}`);
      await page.waitForLoadState('networkidle');
      
      // 驗證狀態碼
      expect(response?.status()).toBe(200);
      
      // 驗證關鍵元素存在 - 使用更穩定的選擇器
      await expect(page.locator('h1').first()).toBeVisible({ timeout: 10000 });
      
      // 驗證頁面標題包含 Morning AI
      await expect(page).toHaveTitle(/Morning AI/);
      
      // 收集證據
      evidenceData.results[locale] = evidenceData.results[locale] || {};
      evidenceData.results[locale].statusCode = response?.status();
      evidenceData.results[locale].hasTitle = await page.locator('h1').first().isVisible();
    });

    test(`should display content without raw i18n keys for ${locale}`, async ({ page }) => {
      await page.goto(`/${locale}`);
      await page.waitForLoadState('networkidle');
      
      // 檢查頁面內容不包含原始 i18n 鍵值
      const pageContent = await page.textContent('body');
      
      // 驗證不包含常見的原始鍵值模式
      expect(pageContent).not.toMatch(/\b[a-z]+\.[a-z]+\.[a-z]+\b/); // 如 common.title.main
      expect(pageContent).not.toMatch(/\{\{[^}]+\}\}/); // 如 {{key}}
      expect(pageContent).not.toMatch(/\[missing:/); // 如 [missing:key]
      
      // 收集證據
      evidenceData.results[locale] = evidenceData.results[locale] || {};
      evidenceData.results[locale].hasRawKeys = false;
    });
  }

  test('should have working navigation between locales', async ({ page }) => {
    // 測試語言切換功能
    await page.goto('/zh-TW');
    await page.waitForLoadState('networkidle');
    
    // 驗證頁面標題
    await expect(page).toHaveTitle(/Morning AI/);
    
    // 測試直接導航到其他語言
    await page.goto('/zh-CN');
    await page.waitForLoadState('networkidle');
    const htmlLang = await page.evaluate(() => document.documentElement.lang);
    expect(htmlLang).toBe('zh-CN');
    
    await page.goto('/en');
    await page.waitForLoadState('networkidle');
    const htmlLangEn = await page.evaluate(() => document.documentElement.lang);
    expect(htmlLangEn).toBe('en');
    
    // 收集導航證據
    evidenceData.navigation = {
      'zh-TW_to_zh-CN': 'success',
      'zh-CN_to_en': 'success'
    };
  });

  test.afterAll(async () => {
    // 保存證據到檔案
    const evidencePath = path.join(process.cwd(), 'evidence', 'dom', 'i18n_check.json');
    fs.mkdirSync(path.dirname(evidencePath), { recursive: true });
    fs.writeFileSync(evidencePath, JSON.stringify(evidenceData, null, 2));
  });
});

