import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I navigate to the yellow or blue game {string}', async ({ page }, url) => {
  await page.goto(url);
});

When('I click on the generate color button', async ({ page }) => {
  await page.getByRole('button', { name: 'Generate Color' }).click();
  await page.waitForSelector('.color');
});

When('I hit the wrong button', async ({ page }) => {
  const generatedColor = await page.locator('.color').innerText();
  if (generatedColor === 'BLUE') {
    await page.getByRole('button', { name: 'YELLOW' }).click();
  } else {
    await page.getByRole('button', { name: 'BLUE' }).click();
  }
});

Then('an error message should be shown for yellow or blue game', async ({ page }) => {
  const message = page.getByTestId("message");
  await expect(message).toContainText("Try again!")
});

When('I hit the right button', async ({ page }) => {
  const generatedColor = await page.locator('.color').innerText();
  if (generatedColor === 'BLUE') {
    await page.getByRole('button', { name: 'BLUE' }).click();
  } else {
    await page.getByRole('button', { name: 'YELLOW' }).click();
  }
});

Then('a success message should be shown for yellow or blue game', async ({ page }) => {
  const message = page.getByTestId("message");
  await expect(message).toContainText("Success!")
});

