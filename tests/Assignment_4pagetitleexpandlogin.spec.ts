import { test, expect } from '@playwright/test';

// Verify page title

test.describe('Verify logged in page title and logout', () => {
    test.use({ storageState: 'playwright/.auth/expand_authentication.json' });
    test('should verify page title and logout successfully', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/secure');

    await expect(page).toHaveURL('https://practice.expandtesting.com/secure');
    console.log('URL validation successfully');

    await expect(page.getByRole('heading', { name: 'Secure Area page for Automation Testing Practice' })).toBeVisible();
    console.log('Heading validation successfully');

    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
    await page.getByRole('link', { name: 'Logout' }).click();
    console.log('User logged out successfully');
    })
});

