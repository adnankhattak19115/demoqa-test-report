// tests/progressBar.test.ts

import { test, expect } from '@playwright/test';
import { progressBarLocators as loc } from '../locators/elementsPageLocators';

test('Start and stop the Progress Bar after 3 seconds', async ({ page }) => {
  await page.goto('https://demoqa.com');

  // Click on the Widgets section
  await page.locator(loc.widgetsSection).click();

  // Click on the Progress Bar option
  await page.locator(loc.progressBarMenuItem).click();

  // Click Start button
  await page.locator(loc.startStopButton).click();

  // Wait for 3 seconds
  await page.waitForTimeout(3000);

  // Click Stop button
  await page.locator(loc.startStopButton).click();

  // Optional: Get current progress value
  const progress = await page.locator('#progressBar').getAttribute('aria-valuenow');
  console.log(`Progress reached: ${progress}%`);
});
