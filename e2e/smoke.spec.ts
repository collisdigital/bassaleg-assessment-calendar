/* eslint-disable no-undef */
import { test, expect } from '@playwright/test';
// @ts-expect-error - Import attributes are a newer feature, and we need this for node 22 compatibility if not using 'with' or if module resolution differs
import testData from './fixtures/data.json' with { type: 'json' };

test.describe('Assessment Calendar Smoke Test', () => {
  test.beforeEach(async ({ page }) => {
    // Inject test data before the page loads
    await page.addInitScript((data) => {
      // @ts-expect-error - APP_DATA is added to window type in global.d.ts but this context is isolated
      window.APP_DATA = data;
    }, testData);
  });

  test('loads the application with correct title and data', async ({ page }) => {
    await page.goto('/');

    // Verify Page Title
    await expect(page).toHaveTitle(/E2E Test Calendar/);

    // Verify Main Heading matches the injected filename
    const mainHeading = page.getByRole('heading', { level: 1 });
    await expect(mainHeading).toHaveText('E2E Test Calendar');

    // Verify the test subject is visible in the view
    // Note: The view defaults to month or timeline depending on width.
    // We check for the text "E2E Subject" which should be present in the assessment card/item.
    await expect(page.getByText('E2E Subject')).toBeVisible();

    // Verify the type badge is visible
    await expect(page.getByText('Exam')).toBeVisible();
  });
});
