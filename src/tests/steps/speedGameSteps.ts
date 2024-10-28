import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I navigate to speed game on {string}', async ({ page }, url) => {
  await page.goto(url);
});

When('I click on start game', async ({ page }) => {
  await page.getByTestId('startBtn').click();
});

When('I click on end game', async({page}) => {
  await page.getByRole('button', {name: "End Game"}).click();
})

Then('a success message should be shown', async ({ page }) => {
  const message = page.getByTestId(".data-testid");
  expect(message).toBeVisible;
});