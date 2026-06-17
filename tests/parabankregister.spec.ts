// Test case 1: Positive LogIn test

import { test, Page } from '@playwright/test';
import parabankRegisterPage from '../pages/register';

export async function doRegister(page: Page, username: string) {
    const register = new parabankRegisterPage(page);
    await page.goto('https://parabank.parasoft.com/parabank/register.htm');
    await register.enterFirstName('abc');
    await register.enterLastName('xyz');
    await register.enterAddress('abc');
    await register.enterCity('xyz');
    await register.enterState('abc');
    await register.enterZipCode('12345');
    await register.enterPhoneNumber('1234567890');
    await register.enterSSN('123-45-6789');
    await register.enterUsername('abc_' + Date.now());
    await register.enterPassword('123');
    await register.enterConfirmPassword('123');
    await register.clickRegister();
}

test.describe('Verify user can register successfully', () => {
    test('should register successfully', async ({ page }) => {
        await doRegister(page, 'abc_' + Date.now());
        console.log('User registered successfully');
    });
});