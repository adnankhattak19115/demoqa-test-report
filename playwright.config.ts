import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  use: {
    headless: false, // 👈 show browser
    browserName: 'chromium', // 👈 use Chrome
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    actionTimeout: 15000, // optional: individual action timeout
    navigationTimeout: 30000,
  },
  reporter: [['html', { outputFolder: 'playwright-report' }], ['allure-playwright'], ['list'],],
});
