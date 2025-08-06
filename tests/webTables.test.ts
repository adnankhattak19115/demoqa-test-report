import { test, expect } from '@playwright/test';
import { clickOnElementsCard } from '../pages/homePage';
import {
  clickWebTables,
  searchInWebTable,
  isNameVisible,
  clickAddRecord,
  fillNewUserForm,
  submitUserForm
} from '../pages/elementsPage';

test('Web Table Search and Add User', async ({ page }) => {
  await page.goto('https://demoqa.com');

  await clickOnElementsCard(page);
  await clickWebTables(page);

  // ✅ Step 1: Search and verify Kierra
  await searchInWebTable(page, 'Kierra');
  expect(await isNameVisible(page, 'Kierra')).toBeTruthy();

  // ✅ Step 2: Add new record
  await clickAddRecord(page);
  await fillNewUserForm(
    page,
    'Adnan',
    'Khattak',
    'testing@gmail.com',
    '20',
    '20',
    'Software Engineering'
  );
  await submitUserForm(page);

  // ✅ Step 3: Optionally search again for Adnan to verify (optional assertion)
  await searchInWebTable(page, 'Adnan');
  const isAdnanVisible = await page.locator("//div[normalize-space()='Adnan']").isVisible();
  expect(isAdnanVisible).toBeTruthy();
});
