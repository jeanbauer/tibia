import { Page, Locator } from '@playwright/test'

export function gamePanel(page: Page, name: string): Locator {
  return page.getByTestId(`panel-${name.toLowerCase()}`)
}

export function statValue(page: Page, label: 'experience' | 'level'): Locator {
  return page.getByTestId(`stat-${label}`)
}

export function backpackGold(page: Page): Locator {
  return page.getByTestId('backpack-gold')
}
