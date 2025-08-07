import { test, expect } from '@playwright/test';
import { practiceFormLocators as loc } from '../locators/elementsPageLocators';

test('Practice Form submission', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  await page.locator(loc.formsButton).click();
  await page.locator(loc.practiceFormButton).click();

//   await expect(page.locator(loc.formHeader)).toBeVisible();

  await page.locator(loc.firstName).fill('Adnan');
  await page.locator(loc.lastName).fill('Khattak');
  await page.locator(loc.email).fill('test@gmail.com');
  await page.locator(loc.genderMale).click();
  await page.locator(loc.mobileNumber).fill('1234567891');

  await page.locator(loc.dateOfBirth).click();
  await page.keyboard.press('Control+A');
  await page.keyboard.type('06 Aug 2025');
  await page.keyboard.press('Enter');

  // await page.locator(loc.subjectsInput).fill('Testing');
  // await page.keyboard.press('Enter');

//   await page.locator(loc.hobbiesSports).click();
  await page.locator(loc.address).fill('Testing');

//   await page.locator(loc.stateDropdown).click();
//   await page.locator(loc.stateOption).click();
//   await page.locator(loc.cityDropdown).click();
//   await page.locator(loc.cityOption).click();

  await page.locator(loc.submitButton).click({ force: true });

  // ✅ Wait for modal and close it
  await expect(page.locator(loc.modalDialog)).toBeVisible();  // Optional: to ensure modal appears
  await page.locator(loc.closeButton).click();
});
