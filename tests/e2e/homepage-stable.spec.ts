import { test, expect } from '@playwright/test'

test.describe('Homepage Core Functionality', () => {
  test('shows hero and pricing (hydration-safe)', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    
    // Wait for hydration marker set by Hero
    await page.waitForSelector('#hero[data-e2e-ready="1"]', { timeout: 10000 })

    // Copy can be localized, so assert more resiliently
    const title = page.locator('#hero h1')
    await expect(title).toBeVisible()
    await expect(title).toHaveText(/smart design/i)

    // Pricing section presence (use data-section if you have it; otherwise heading text)
    await expect(page.locator('text=/Pricing|方案|價格/i')).toBeVisible()
  })

  test('displays hero stats correctly', async ({ page }) => {
    await page.goto('/')
    
    // Wait for hydration
    await page.waitForSelector('#hero[data-e2e-ready="1"]', { timeout: 10000 })
    
    // Check stats are visible
    await expect(page.locator('text=500+')).toBeVisible()
    await expect(page.locator('text=99%')).toBeVisible()
    await expect(page.locator('text=Components')).toBeVisible()
    await expect(page.locator('text=Satisfaction')).toBeVisible()
  })
})

test.setTimeout(45000)

