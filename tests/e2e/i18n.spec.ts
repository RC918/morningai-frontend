import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const locales = ['zh-TW', 'zh-CN', 'en'];
const expectedLangChecks = {
  'zh-TW': '繁中 OK',
  'zh-CN': '简中 OK',
  'en': 'EN OK'
};

// 證據收集結果
const evidenceData: any = {
  timestamp: new Date().toISOString(),
  results: {}
};

test.describe('i18n Functionality', () => {
  for (const locale of locales) {
    test(`should have correct HTML lang attribute for ${locale}`, async ({ page }) => {
      await page.goto(`/${locale}`);
      
      // 驗證 HTML lang 屬性
      const htmlLang = await page.evaluate(() => document.documentElement.lang);
      expect(htmlLang).toBe(locale);
      
      // 收集證據
      evidenceData.results[locale] = evidenceData.results[locale] || {};
      evidenceData.results[locale].htmlLang = htmlLang;
    });

    test(`should display correct LANG_CHECK for ${locale}`, async ({ page }) => {
      await page.goto(`/${locale}`);
      
      // 等待頁面載入
      await page.waitForSelector('#lang-check');
      
      // 驗證 LANG_CHECK 文案
      const langCheckText = await page.textContent('#lang-check');
      expect(langCheckText).toContain(expectedLangChecks[locale]);
      
      // 收集證據
      evidenceData.results[locale] = evidenceData.results[locale] || {};
      evidenceData.results[locale].langCheck = langCheckText;
    });

    test(`should display correct locale info for ${locale}`, async ({ page }) => {
      await page.goto(`/${locale}`);
      
      // 等待頁面載入
      await page.waitForSelector('#locale');
      
      // 驗證 Locale 顯示
      const localeText = await page.textContent('#locale');
      expect(localeText).toContain(locale);
      
      // 收集證據
      evidenceData.results[locale] = evidenceData.results[locale] || {};
      evidenceData.results[locale].localeDisplay = localeText;
    });

    test(`should render page successfully for ${locale}`, async ({ page }) => {
      const response = await page.goto(`/${locale}`);
      
      // 驗證狀態碼
      expect(response?.status()).toBe(200);
      
      // 驗證關鍵元素存在
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('#lang-check')).toBeVisible();
      
      // 收集證據
      evidenceData.results[locale] = evidenceData.results[locale] || {};
      evidenceData.results[locale].statusCode = response?.status();
      evidenceData.results[locale].hasTitle = await page.locator('h1').isVisible();
    });
  }

  test('should have working navigation between locales', async ({ page }) => {
    // 測試語言切換功能
    await page.goto('/zh-TW');
    
    // 驗證頁面標題
    await expect(page).toHaveTitle(/Morning AI/);
    
    // 測試直接導航到其他語言
    await page.goto('/zh-CN');
    const htmlLang = await page.evaluate(() => document.documentElement.lang);
    expect(htmlLang).toBe('zh-CN');
    
    await page.goto('/en');
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
    const evidencePath = path.join(process.cwd(), 'evidence', 'dom', 'lang_check.json');
    fs.mkdirSync(path.dirname(evidencePath), { recursive: true });
    fs.writeFileSync(evidencePath, JSON.stringify(evidenceData, null, 2));
  });
});

