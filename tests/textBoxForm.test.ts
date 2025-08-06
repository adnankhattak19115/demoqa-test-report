import { test, expect } from "@playwright/test";
import { clickOnElementsCard } from "../pages/homePage";
import { clickTextBox, fillTextBoxForm, submitTextBoxForm } from "../pages/elementsPage";

test("Text Box Form Submission", async ({ page }) => {
  await page.goto("https://demoqa.com");

  await clickOnElementsCard(page);
  await clickTextBox(page);
  await fillTextBoxForm(page, "Adnan Khattak", "test@gmail.com", "Testing", "Testing");
  await submitTextBoxForm(page);

  // Add assertions if needed
});
