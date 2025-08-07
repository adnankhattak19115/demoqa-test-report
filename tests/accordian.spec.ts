// tests/test_09_accordian.spec.ts
import { test, expect } from '@playwright/test';
import { accordianLocators as loc } from '../locators/elementsPageLocators';

test('Validate Accordian Tabs and Content Visibility', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  // Click on 'Widgets > Accordian'
  await page.locator("//h5[normalize-space()='Widgets']").click();
  await page.locator(loc.accordianMenu).click();

  // Click "What is Lorem Ipsum?" tab
  await page.locator(loc.section1).click();
//   await expect(page.locator(loc.section1Text)).toBeVisible();

  // Click "Where does it come from?" tab
  await page.locator(loc.section2).click();
  await expect(page.locator(loc.section2Text)).toBeVisible();
});
