const { test, expect } = require('@playwright/test');

test('invalid login shows error message', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'wrong_user');
  await page.fill('#password', 'wrong_password');

  await page.click('#login-button');

  const errorMessage = page.locator('[data-test="error"]');

  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Username and password do not match');
});
