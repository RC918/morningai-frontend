import { test, expect } from '@playwright/test';

test.describe('Homepage Core Functionality', () => {
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

  test('should display Hero section with correct content', async ({ page }) => {
    await page.goto('/');
    
    // 等待頁面完全載入
    await page.waitForLoadState('networkidle');
    
    // 驗證 Hero 標題
    await expect(page.getByRole('heading', { name: /We make/i })).toBeVisible({ timeout: 10000 });
    await expect(page.getByText('smart design,')).toBeVisible();
    await expect(page.getByText('& AI tools')).toBeVisible();
    
    // 驗證描述文字
    await expect(page.getByText(/Morning AI is a design system platform/)).toBeVisible();
    
    // 驗證 CTA 按鈕
    await expect(page.getByRole('button', { name: /LET'S TALK/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /View Demo/i })).toBeVisible();
  });

  test('should display Features section', async ({ page }) => {
    await page.goto('/');
    
    // 等待頁面載入
    await page.waitForLoadState('networkidle');
    
    // 滾動到 Features 部分
    await page.getByText('強大功能，無限可能').scrollIntoViewIfNeeded();
    
    // 驗證 Features 標題
    await expect(page.getByText('強大功能，無限可能')).toBeVisible({ timeout: 5000 });
    
    // 驗證三個主要功能
    await expect(page.getByText('AI 智能設計')).toBeVisible();
    await expect(page.getByText('元件庫系統')).toBeVisible();
    await expect(page.getByText('開發流程')).toBeVisible();
    
    // 驗證功能描述
    await expect(page.getByText('運用最先進的人工智能技術')).toBeVisible();
    await expect(page.getByText('500+ 精美組件')).toBeVisible();
    await expect(page.getByText('自動化部署')).toBeVisible();
  });

  test('should display Pricing section with three plans', async ({ page }) => {
    await page.goto('/');
    
    // 等待頁面載入
    await page.waitForLoadState('networkidle');
    
    // 滾動到 Pricing 部分
    await page.getByText('選擇適合您的方案').scrollIntoViewIfNeeded();
    
    // 驗證 Pricing 標題
    await expect(page.getByText('選擇適合您的方案')).toBeVisible({ timeout: 5000 });
    
    // 驗證三個定價方案
    await expect(page.getByText('入門版')).toBeVisible();
    await expect(page.getByText('專業版')).toBeVisible();
    await expect(page.getByText('企業版')).toBeVisible();
    
    // 驗證價格
    await expect(page.getByText('$29/月')).toBeVisible();
    await expect(page.getByText('$99/月')).toBeVisible();
    await expect(page.getByText('客製化')).toBeVisible();
    
    // 驗證 CTA 按鈕
    await expect(page.getByRole('button', { name: /選擇入門版/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /選擇專業版/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /聯繫我們/i })).toBeVisible();
  });

  test('should have working CTA buttons', async ({ page }) => {
    await page.goto('/');
    
    // 等待頁面載入
    await page.waitForLoadState('networkidle');
    
    // 測試 Hero 區域的 CTA 按鈕是否可點擊
    const letsTalkButton = page.getByRole('button', { name: /LET'S TALK/i });
    await expect(letsTalkButton).toBeVisible();
    await expect(letsTalkButton).toBeEnabled();
    
    const viewDemoButton = page.getByRole('button', { name: /View Demo/i });
    await expect(viewDemoButton).toBeVisible();
    await expect(viewDemoButton).toBeEnabled();
  });

  test('should be responsive on mobile', async ({ page }) => {
    // 設置移動端視窗大小
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // 等待頁面載入
    await page.waitForLoadState('networkidle');
    
    // 驗證移動端下的關鍵元素
    await expect(page.getByRole('heading', { name: /We make/i })).toBeVisible({ timeout: 10000 });
    await expect(page.getByText('smart design,')).toBeVisible();
    
    // 驗證移動端下的 CTA 按鈕
    await expect(page.getByRole('button', { name: /LET'S TALK/i })).toBeVisible();
  });

  test('should load without JavaScript errors', async ({ page }) => {
    const errors: string[] = [];
    
    // 監聽 JavaScript 錯誤
    page.on('pageerror', (error) => {
      errors.push(error.message);
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // 驗證沒有 JavaScript 錯誤
    expect(errors).toHaveLength(0);
  });
});

