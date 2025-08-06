import { test, expect } from '@playwright/test';
import { alertsFramesLocators as loc } from '../locators/elementsPageLocators';

test('Open new tab, window, and message window', async ({ page, context }) => {
  await page.goto('https://demoqa.com/');

  // Navigate to 'Alerts, Frame & Windows' section
  await page.locator(loc.alertsFrameSection).click();
  await page.locator(loc.browserWindowsButton).click();

  // Click on "New Tab"
  const [newTab] = await Promise.all([
    context.waitForEvent('page'),
    page.locator(loc.newTabButton).click()
  ]);
  await newTab.waitForLoadState();
  await newTab.close();

  // Click on "New Window"
  const [newWindow] = await Promise.all([
    context.waitForEvent('page'),
    page.locator(loc.newWindowButton).click()
  ]);
  await newWindow.waitForLoadState();
  await newWindow.close();

  // Click on "New Window Message"
  const [messageWindow] = await Promise.all([
    context.waitForEvent('page'),
    page.locator(loc.newWindowMessageButton).click()
  ]);
  await messageWindow.waitForLoadState();
  await messageWindow.close();
});
