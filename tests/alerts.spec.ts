import { test, expect } from '@playwright/test';
import { alertsPageLocators as loc } from '../locators/elementsPageLocators';

test('Handle simple alert popup', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  // Navigate to "Alerts, Frame & Windows" section
  await page.locator(loc.alertsFrameSection).click();

  // Click on "Alerts" menu item
  await page.locator(loc.alertsButton).click();

  // Click on button that triggers alert
  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('You clicked a button');
    await dialog.accept(); // Clicks 'OK'
  });

  await page.locator(loc.triggerAlertButton).click();
});
