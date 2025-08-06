import { Page } from "@playwright/test";
import { homePageLocators } from "../locators/homePageLocators";

export async function clickOnElementsCard(page: Page) {
  await page.locator(homePageLocators.elementsCard).click();
}
