/* eslint-disable no-undef */
import { test, expect } from '@playwright/test';
// @ts-expect-error - Import attributes are a newer feature
import testData from './fixtures/data.json' with { type: 'json' };

test.describe('Assessment Calendar Smoke Test', () => {
  test.beforeEach(async ({ page }) => {
    // Set fixed time matching the test data (Sept 1st 2025)
    await page.clock.install({ time: new Date('2025-09-01T10:00:00Z') });

    // Inject test data
    await page.addInitScript((data) => {
      // @ts-expect-error - APP_DATA is added to window type in global.d.ts
      window.APP_DATA = data;
    }, testData);
  });

  test('loads the application, navigates to Year 10, and shows data', async ({ page }) => {
    await page.goto('/');

    // 1. Verify Landing Page
    await expect(page.getByRole('heading', { name: 'Bassaleg Assessment Calendars' })).toBeVisible();

    // The link card contains text "Year 10", playwritght's getByRole('link', { name: 'Year 10' }) should find it
    // effectively finding the link containing that text.
    const year10Link = page.getByRole('link', { name: 'Year 10 Assessment Calendar' });
    await expect(year10Link).toBeVisible();

    // 2. Navigate to Year 10
    await year10Link.click();

    // 3. Verify Year View
    await expect(page).toHaveTitle(/E2E Test Calendar/);

    const mainHeading = page.getByRole('heading', { level: 1 });
    await expect(mainHeading).toHaveText('E2E Test Calendar');

    // 4. Verify Assessment Data is visible (since we mocked the clock)
    await expect(page.getByText('E2E Subject')).toBeVisible();
    await expect(page.getByText('Exam')).toBeVisible();

    // 5. Verify "Return" button exists
    await expect(page.locator('a[title="Return to Year Selection"]')).toBeVisible();

    // 6. Navigate back
    await page.locator('a[title="Return to Year Selection"]').click();
    await expect(page.getByRole('heading', { name: 'Bassaleg Assessment Calendars' })).toBeVisible();
  });
});
