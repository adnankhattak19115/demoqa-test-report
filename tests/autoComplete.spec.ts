// tests/test_10_autoComplete.spec.ts
import { test, expect } from '@playwright/test';
import { autoCompleteLocators as loc } from '../locators/elementsPageLocators';

test('Validate Auto Complete with multiple and single color input', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  // Navigate to Widgets > Auto Complete
  await page.locator("//h5[normalize-space()='Widgets']").click();
  await page.locator(loc.autoCompleteMenu).click();

  // Fill multiple color values with Enter key
  await page.locator(loc.multiColorInput).fill('Blue');
  await page.keyboard.press('Enter');

  await page.locator(loc.multiColorInput).fill('Red');
  await page.keyboard.press('Enter');

  await page.locator(loc.multiColorInput).fill('Green');
  await page.keyboard.press('Enter');

  // Fill single color value
  await page.locator(loc.singleColorInput).fill('Red');
  await page.keyboard.press('Enter');

  // Add expectations to verify colors were selected
  await expect(page.locator('.auto-complete__multi-value__label')).toContainText(['Blue', 'Red', 'Green']);
//   await expect(page.locator('.auto-complete__single-value')).toHaveText('Red');
});
