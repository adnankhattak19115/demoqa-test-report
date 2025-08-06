import { test, expect } from '@playwright/test';
import { clickOnElementsCard } from '../pages/homePage';
import {
  clickButtonsPage,
  performClick,
  performRightClick,
  performDoubleClick,
  getClickMessage,
  getRightClickMessage,
  getDoubleClickMessage,
} from '../pages/elementsPage';

test('Button Actions: Click, Right Click, Double Click', async ({ page }) => {
  await page.goto('https://demoqa.com');

  await clickOnElementsCard(page);
  await clickButtonsPage(page);

  await performClick(page);
  expect((await getClickMessage(page))?.trim()).toBe('You have done a dynamic click');

  await performRightClick(page);
  expect((await getRightClickMessage(page))?.trim()).toBe('You have done a right click');

  await performDoubleClick(page);
  expect((await getDoubleClickMessage(page))?.trim()).toBe('You have done a double click');
});
