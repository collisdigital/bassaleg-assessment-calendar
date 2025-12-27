import { test, expect } from '@playwright/test';

test('renders assessments with bold and italic formatting', async ({ page }) => {
  // Use data from generated test data which includes formatted labels
  const yearId = 'year-10'; // We updated generate-test-data for Year 10

  await page.goto(`/#/${yearId}`);

  // Wait for the grid to load
  await page.waitForSelector('text=Year 10');

  // We need to find an assessment that contains bold/italic.
  // In `generate-test-data.js`, we generate:
  // `${yearName} **${subject}** ${type} ...`
  // or `... _Topic: ..._`

  // Let's look for a strong tag inside a button/cell
  const strongElement = page.locator('strong').first();
  await expect(strongElement).toBeVisible();

  const italicElement = page.locator('em').first();
  await expect(italicElement).toBeVisible();

  // Verify context
  // e.g. Year 10 **Maths** Exam
  const strongParent = strongElement.locator('xpath=..');
  const textContent = await strongParent.textContent();
  console.log('Found formatted text:', textContent);
  expect(textContent).toContain('Year 10');
});
