import { test, expect } from '@playwright/test'
import { gamePanel, statValue } from './helpers'

test.describe('Home page', () => {
  test('loads the game with core UI panels', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByTestId('monster-sprite')).toBeVisible()
    await expect(page.getByTestId('store-seller')).toBeVisible()
    await expect(gamePanel(page, 'Skills')).toBeVisible()
    await expect(gamePanel(page, 'Backpack')).toBeVisible()
  })

  test('shows initial player stats', async ({ page }) => {
    await page.goto('/')

    await expect(statValue(page, 'experience')).toHaveText('0')
    await expect(statValue(page, 'level')).toHaveText('1')
  })

  test('opens the store when clicking the seller', async ({ page }) => {
    await page.goto('/')

    await page.getByTestId('store-seller').click()

    await expect(gamePanel(page, 'Store')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Buy' }).first()).toBeVisible()
  })
})
