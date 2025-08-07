// tests/slider.test.ts

import { test, expect } from '@playwright/test';
import { sliderLocators as loc } from '../locators/elementsPageLocators';

test('Slider value selection and verification', async ({ page }) => {
  await page.goto('https://demoqa.com');

  // Click on the Widgets section
  await page.locator(loc.widgetsSection).click();

  // Click on the Slider option
  await page.locator(loc.sliderMenuItem).click();

  // Move slider to 70 using keyboard
  const slider = page.locator(loc.sliderInput);
  await slider.focus();

  // Move right from 25 (default) to 70
  for (let i = 0; i < 45; i++) {
    await page.keyboard.press('ArrowRight');
  }

  // Assert the value is 70
  const value = await page.locator(loc.sliderValueBox).inputValue();
  expect(value).toBe('70');
});
