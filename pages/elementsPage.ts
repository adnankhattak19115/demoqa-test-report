import { Page, expect } from "@playwright/test";
import path from "path";
import {    elementsPageLocators, 
            checkBoxLocators, 
            radioButtonLocators, 
            webTableLocators,
            buttonPageLocators,
            linksPageLocators,
            brokenLinksLocators,
            uploadDownloadLocators
 } from "../locators/elementsPageLocators";

export async function clickTextBox(page: Page) {
  await page.locator(elementsPageLocators.textBoxButton).click();
}

export async function fillTextBoxForm(page: Page, fullName: string, email: string, currentAddress: string, permanentAddress: string) {
  await page.locator(elementsPageLocators.userNameInput).fill(fullName);
  await page.locator(elementsPageLocators.userEmailInput).fill(email);
  await page.locator(elementsPageLocators.currentAddressInput).fill(currentAddress);
  await page.locator(elementsPageLocators.permanentAddressInput).fill(permanentAddress);
}

export async function submitTextBoxForm(page: Page) {
  await page.locator(elementsPageLocators.submitButton).click();
}


export async function clickCheckBox(page: Page) {
  await page.locator(checkBoxLocators.checkBoxButton).click();
}

export async function expandAllCheckBoxes(page: Page) {
  await page.locator(checkBoxLocators.expandAllButton).click();
}

export async function selectVeuCheckBox(page: Page) {
  await page.locator(checkBoxLocators.veuCheckBox).click();
}

export async function clickRadioButtonPage(page: Page) {
  await page.locator(radioButtonLocators.radioButtonNav).click();
}

export async function selectYesRadioButton(page: Page) {
  await page.locator(radioButtonLocators.yesRadioButton).click();
}

export async function getRadioButtonConfirmationText(page: Page): Promise<string | null> {
  return await page.locator(radioButtonLocators.confirmationText).textContent();
}

export async function clickWebTables(page: Page) {
  await page.locator(webTableLocators.webTableNav).click();
}

export async function searchInWebTable(page: Page, name: string) {
  await page.locator(webTableLocators.searchInput).fill(name);
}

export async function isNameVisible(page: Page, name: string): Promise<boolean> {
  return await page.locator(webTableLocators.foundName).isVisible();
}

export async function clickAddRecord(page: Page) {
  await page.locator(webTableLocators.addButton).click();
}

export async function fillNewUserForm(
  page: Page,
  firstName: string,
  lastName: string,
  email: string,
  age: string,
  salary: string,
  department: string
) {
  await page.locator(webTableLocators.firstNameInput).fill(firstName);
  await page.locator(webTableLocators.lastNameInput).fill(lastName);
  await page.locator(webTableLocators.emailInput).fill(email);
  await page.locator(webTableLocators.ageInput).fill(age);
  await page.locator(webTableLocators.salaryInput).fill(salary);
  await page.locator(webTableLocators.departmentInput).fill(department);
}

export async function submitUserForm(page: Page) {
  await page.locator(webTableLocators.submitButton).click();
}

export async function clickButtonsPage(page: Page) {
  await page.locator(buttonPageLocators.buttonsNav).click();
}

export async function performClick(page: Page) {
  await page.locator(buttonPageLocators.clickMeButton).click();
}

export async function performRightClick(page: Page) {
  await page.locator(buttonPageLocators.rightClickButton).click({ button: 'right' });
}

export async function performDoubleClick(page: Page) {
  await page.locator(buttonPageLocators.doubleClickButton).dblclick();
}

export async function getClickMessage(page: Page): Promise<string | null> {
  return await page.locator(buttonPageLocators.dynamicClickMessage).textContent();
}

export async function getRightClickMessage(page: Page): Promise<string | null> {
  return await page.locator(buttonPageLocators.rightClickMessage).textContent();
}

export async function getDoubleClickMessage(page: Page): Promise<string | null> {
  return await page.locator(buttonPageLocators.doubleClickMessage).textContent();
}

export async function clickLinksPage(page: Page) {
  await page.locator(linksPageLocators.linksNav).click();
}

export async function clickSimpleLink(page: Page) {
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.locator(linksPageLocators.simpleLink).click()
  ]);
  await newPage.waitForLoadState('domcontentloaded');
  return newPage;
}

export async function clickDynamicLink(page: Page) {
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.locator(linksPageLocators.dynamicLink).click()
  ]);
  await newPage.waitForLoadState('domcontentloaded');
  return newPage;
}

export async function isToolsqaImageVisible(page: Page): Promise<boolean> {
  return await page.locator(linksPageLocators.toolsqaImage).isVisible();
}

export async function navigateToBrokenLinks(page: Page) {
  await page.waitForSelector(brokenLinksLocators.elementsCard, { timeout: 20000 });
  await page.locator(brokenLinksLocators.elementsCard).scrollIntoViewIfNeeded();
  await page.locator(brokenLinksLocators.elementsCard).click();
  await page.locator(brokenLinksLocators.brokenLinksButton).click();
}

export async function checkValidImage(page: Page) {
  const validImage = page.locator(brokenLinksLocators.validImage);
  await expect(validImage).toBeVisible();
  
  // Check image loads successfully
  const imageStatus = await validImage.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0);
  expect(imageStatus).toBe(true);
}

export async function checkBrokenImage(page: Page) {
  const brokenImage = page.locator(brokenLinksLocators.brokenImage);
  await expect(brokenImage).toBeVisible();

  // Check image failed to load
  const imageStatus = await brokenImage.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0);
  expect(imageStatus).toBe(false);
}

export async function navigateToUploadDownload(page: Page) {
  await page.locator(uploadDownloadLocators.elementsCard).click();
  await page.locator(uploadDownloadLocators.uploadDownloadButton).click();
}

export async function downloadFile(page: Page) {
  const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    page.locator(uploadDownloadLocators.downloadButton).click()
  ]);

  const pathDownloaded = await download.path();
  expect(pathDownloaded).not.toBeNull();
}

export async function uploadFile(page: Page) {
  const filePath = path.resolve("test-data/sampleFile.jpeg");
  await page.setInputFiles(uploadDownloadLocators.uploadInput, filePath);
  
  const uploadedFileName = await page.locator("#uploadedFilePath").textContent();
  expect(uploadedFileName).toContain("sampleFile.jpeg");
}