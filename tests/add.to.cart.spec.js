const { test, expect } = require('@playwright/test');

test('user can add product to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  await page.click('#add-to-cart-sauce-labs-backpack');

  const cartBadge = page.locator('.shopping_cart_badge');

  await expect(cartBadge).toHaveText('1');
});
