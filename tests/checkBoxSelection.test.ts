import { test, expect } from '@playwright/test';
import { clickOnElementsCard } from '../pages/homePage';
import { clickCheckBox, expandAllCheckBoxes, selectVeuCheckBox } from '../pages/elementsPage';

test('Check Box Selection - VEU', async ({ page }) => {
  await page.goto('https://demoqa.com');

  await clickOnElementsCard(page);
  await clickCheckBox(page);
  await expandAllCheckBoxes(page);
  await selectVeuCheckBox(page);

  // Optional assertion example
  const successOutput = await page.locator('#result').textContent();
  console.log("Check Box Result:", successOutput);

  // You can assert that "veu" is included in the result
  expect(successOutput?.toLowerCase()).toContain('veu');
});
