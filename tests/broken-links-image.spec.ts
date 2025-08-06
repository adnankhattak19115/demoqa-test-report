import { test } from "@playwright/test";
import { navigateToBrokenLinks, checkValidImage, checkBrokenImage } from "../pages/elementsPage";

test("Check valid and broken images", async ({ page }) => {
  await page.goto("https://demoqa.com/");
  await navigateToBrokenLinks(page);
  await checkValidImage(page);
  await checkBrokenImage(page);
});
