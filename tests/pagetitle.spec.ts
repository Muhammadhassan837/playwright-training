import { test, expect } from '@playwright/test';

// Verify page title

test.describe('Verify logged in page title and logout', async () => {
    test.use({ storageState: 'playwright/.auth/authentication.json' });
    test('should verify page title and logout successfully', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/overview.htm');
    

  await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm');
  console.log('URL validation successfully');

  await expect(page.getByRole('heading', { name: 'Welcome abc' })).toBeVisible();
  console.log('Heading validation successfully');

  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
  console.log('User logged out successfully');
})
});

