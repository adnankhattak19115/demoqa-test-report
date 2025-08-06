import { test, expect } from '@playwright/test';
import { clickOnElementsCard } from '../pages/homePage';
import { clickRadioButtonPage, selectYesRadioButton, getRadioButtonConfirmationText } from '../pages/elementsPage';

test('Radio Button Selection - Yes', async ({ page }) => {
  await page.goto('https://demoqa.com');

  await clickOnElementsCard(page);
  await clickRadioButtonPage(page);
  await selectYesRadioButton(page);

  const confirmation = await getRadioButtonConfirmationText(page);
  expect(confirmation?.trim()).toBe('You have selected Yes');
});
