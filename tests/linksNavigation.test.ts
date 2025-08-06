import { test, expect } from '@playwright/test';
import { clickOnElementsCard } from '../pages/homePage';
import {
  clickLinksPage,
  clickSimpleLink,
  clickDynamicLink,
  isToolsqaImageVisible
} from '../pages/elementsPage';

test('Links Navigation - Simple & Dynamic Link', async ({ page }) => {
  await page.goto('https://demoqa.com');

  await clickOnElementsCard(page);
  await clickLinksPage(page);

  // ✅ Click on Simple Link
  const simplePage = await clickSimpleLink(page);
//   expect(await isToolsqaImageVisible(simplePage)).toBeTruthy();
  await simplePage.close();

  // ✅ Click on Dynamic Link
  const dynamicPage = await clickDynamicLink(page);
//   expect(await isToolsqaImageVisible(dynamicPage)).toBeTruthy();
  await dynamicPage.close();
});
