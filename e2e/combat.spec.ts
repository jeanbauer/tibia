import { test, expect } from '@playwright/test'
import { backpackGold, statValue } from './helpers'

test.describe('Combat', () => {
  test('killing a monster awards XP and gold', async ({ page }) => {
    await page.goto('/')

    const monster = page.getByTestId('monster-sprite')
    await expect(monster).toBeVisible()

    // 40 damage per hit; 100 HP → 3 clicks to kill
    await monster.click()
    await monster.click()
    await monster.click()

    await expect(statValue(page, 'experience')).toHaveText('25')

    // Started with 1 gp, +15 on kill = 16 gp
    await expect(backpackGold(page)).toHaveAttribute('data-gold', '16')
  })
})
