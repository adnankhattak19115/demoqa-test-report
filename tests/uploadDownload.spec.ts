import { test } from "@playwright/test";
import { navigateToUploadDownload, downloadFile, uploadFile } from "../pages/elementsPage";

test("Test Case 7: Upload and download functionality", async ({ page }) => {
  await page.goto("https://demoqa.com/");
  await navigateToUploadDownload(page);
  await downloadFile(page);
  await uploadFile(page);
});

