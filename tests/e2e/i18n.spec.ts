import { test, expect } from '@playwright/test';

const locales = ['zh-TW', 'zh-CN', 'en'];
const expectedLangChecks = {
  'zh-TW': '繁中 OK',
  'zh-CN': '简中 OK',
  'en': 'EN OK'
};

test.describe('i18n Functionality', () => {
  for (const locale of locales) {
    test(`should have correct HTML lang attribute for ${locale}`, async ({ page }) => {
      await page.goto(`/${locale}`);
      
      // 驗證 HTML lang 屬性
      const htmlLang = await page.evaluate(() => document.documentElement.lang);
      expect(htmlLang).toBe(locale);
    });

    test(`should display correct LANG_CHECK for ${locale}`, async ({ page }) => {
      await page.goto(`/${locale}`);
      
      // 等待頁面載入
      await page.waitForSelector('#lang-check');
      
      // 驗證 LANG_CHECK 文案
      const langCheckText = await page.textContent('#lang-check');
      expect(langCheckText).toContain(expectedLangChecks[locale]);
    });

    test(`should display correct locale info for ${locale}`, async ({ page }) => {
      await page.goto(`/${locale}`);
      
      // 等待頁面載入
      await page.waitForSelector('#locale');
      
      // 驗證 Locale 顯示
      const localeText = await page.textContent('#locale');
      expect(localeText).toContain(locale);
    });
  }

  test('should have working navigation between locales', async ({ page }) => {
    // 測試語言切換功能（如果有的話）
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
  });
});

