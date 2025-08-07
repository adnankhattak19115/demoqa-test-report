import { test, expect } from '@playwright/test';
import { datePickerLocators as loc } from '../locators/elementsPageLocators';

test('Date Picker selection', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  await page.locator("//h5[normalize-space()='Widgets']").click();
  await page.locator(loc.datePickerButton).click();

  await page.locator(loc.selectDateInput).click();
  await page.keyboard.press('Control+A');
  await page.keyboard.type('08/07/2025');
  await page.keyboard.press('Enter');

  await page.locator(loc.selectDateTimeInput).click();
  await page.keyboard.press('Control+A');
  await page.keyboard.type('August 7, 2025 10:40 AM');
  await page.keyboard.press('Enter');
});
