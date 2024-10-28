import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I navigate to wait game on {string}', async ({ page }, url) => {
  await page.goto(url);
});

When('I start the game', async ({ page }) => {
  await page.getByTestId('startBtn').click();
});

When('I end the game within 5 seconds', async ({ page }) => {
  await page.getByRole('button', { name: 'End Game' }).click();
})

Then('an error message should be shown', async ({ page }) => {
  const message = page.getByTestId("message");
  await expect(message).toContainText("Try again!")
});

When('I end the game after 5 seconds', async ({ page }) => {
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'End Game' }).click();
});

Then('a message with the reaction time should be shown', async ({ page }) => {
  const message = page.getByTestId("message");
  const subMessage = page.locator(".sub_message");
  await expect(message).toContainText('Success');
  await expect(subMessage).toContainText('above 5 seconds');
});