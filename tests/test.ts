import { expect, test } from '@playwright/test';

const loadMoreButton = 'button[aria-label="Load more coffee"]';
const loadMoreButtonActive = 'button[aria-label="Load more coffee"]:not(:disabled)';

test('header has correct title', async ({ page }) => {
  await page.goto('/');
  expect(await page.textContent('header .title')).toBe('Coffee beans');
});

test('page has Load more button', async ({ page }) => {
  await page.goto('/');
  const button = page.locator(loadMoreButton);
  await button.waitFor();
});

test('one CoffeBean element after the page load', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(50);
  expect(await page.locator('.coffee-list > li').count()).toBe(1);
});

test('two CoffeBean elements after clicking Load more button', async ({ page }) => {
  await page.goto('/');
  const button = page.locator(loadMoreButtonActive);
  await button.waitFor();
  button.click();
  await page.waitForTimeout(50);
  expect(await page.locator('.coffee-list > li').count()).toBe(2);
});
