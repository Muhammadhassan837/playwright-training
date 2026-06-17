
import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
test('should allow users to log in with valid credentials', async ({ page }) => {
await page.goto('https://practicetestautomation.com/practice-test-login/'); 

//select button
await expect(page.getByRole('textbox', { name: 'username' })).toBeVisible();
await (page.getByRole('textbox', { name: 'username' }).fill('student'));    

await expect(page.getByRole('textbox', { name: 'password' })).toBeVisible();
await ( page.getByRole('textbox', { name: 'password' }).fill('Password123'));


await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();   


await (page.getByRole('button', { name: 'Submit' })).click(); 


});
});
