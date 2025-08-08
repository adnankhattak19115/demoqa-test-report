// tests/tabs.test.ts

import { test, expect } from '@playwright/test';
import { tabsLocators as loc } from '../locators/elementsPageLocators';

test('Tabs content visibility test', async ({ page }) => {
  await page.goto('https://demoqa.com');

  // Click on the 'Widgets' section
  await page.locator(loc.widgetsSection).click();

  // Click on the 'Tabs' menu item
  await page.locator(loc.tabsMenuItem).click();

  // Click on 'What' tab and verify content
  await page.locator(loc.whatTab).click();  
  await expect(page.locator(loc.whatTabText)).toBeVisible();

  // Click on 'Origin' tab and verify content
  await page.locator(loc.originTab).click({ force: true });
  await expect(page.locator(loc.originTabText)).toBeVisible();

});
