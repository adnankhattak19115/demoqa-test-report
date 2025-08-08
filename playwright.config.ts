import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 90000,
  // workers: 1,
  use: {
    headless: true, // 👈 show browser
    browserName: 'chromium', // 👈 use Chrome
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    actionTimeout: 30000, // optional: individual action timeout
    navigationTimeout: 50000,
  },
  reporter: [['html', { outputFolder: 'playwright-report' }], ['allure-playwright'], ['list'],],
});
