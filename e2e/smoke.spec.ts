import { test, expect } from '@playwright/test';

test.describe('Assessment Calendar Smoke Test', () => {
  test.beforeEach(async ({ page }) => {
    // Set fixed time matching the start of test data (Sept 1st 2025)
    await page.clock.install({ time: new Date('2025-09-01T10:00:00Z') });
  });

  test('loads the application, navigates to Year 10, and shows generated data', async ({ page }) => {
    await page.goto('/');

    // 1. Verify Landing Page
    await expect(page.getByRole('heading', { name: 'Bassaleg Assessment Calendars' })).toBeVisible();

    const year10Link = page.getByRole('link', { name: 'Year 10 Assessment Calendar' });
    await expect(year10Link).toBeVisible();

    // 2. Navigate to Year 10
    await year10Link.click();

    // 3. Verify Year View
    // The generated filename is "Year 10 Assessment Calendar"
    await expect(page).toHaveTitle(/Year 10 Assessment Calendar/);

    const mainHeading = page.getByRole('heading', { level: 1 });
    await expect(mainHeading).toHaveText('Year 10 Assessment Calendar');

    // 4. Verify Assessment Data is visible
    // We forced "Maths" and "Exam" on the first day (2025-09-01) in generate-test-data.js
    // Note: 'Maths' might appear multiple times (in filter, in card).
    await expect(page.getByText('Maths').first()).toBeVisible();
    await expect(page.getByText('Exam').first()).toBeVisible();
    await expect(page.getByText('Year 10 Maths Exam - Topic: Algebra')).toBeVisible();

    // 5. Verify "Return" button exists
    await expect(page.locator('a[title="Return to Year Selection"]')).toBeVisible();

    // 6. Navigate back
    await page.locator('a[title="Return to Year Selection"]').click();
    await expect(page.getByRole('heading', { name: 'Bassaleg Assessment Calendars' })).toBeVisible();
  });
});
