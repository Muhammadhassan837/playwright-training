
/*

// npx playwright codegen extendsion auto script with just click and fill action and then modify the script with assertion to validate the test case

import { test, expect, Page } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('heading', { name: 'Logged In Successfully' }).click();
  await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
  await page.getByText('Congratulations student. You').click();
  await expect(page.getByText('Congratulations student. You')).toBeVisible();
});


*/
// Working with functions to make the code more reusable and maintainable



import { test, expect, Page } from '@playwright/test';
import { username, password } from '../Fixtures/credentialsconstant'; // Importing username and password from credentialsconstant.ts
import { baseUrl } from '../Fixtures/urlconstant'; // Importing baseUrl from urlconstant.ts

test('test', async ({ page }) => {
    await navigateToLoginPage(page);

    await fillLoginForm(page, username, password);

    await submitLoginForm(page);

    await verifySuccessfulLogin(page);


});


async function navigateToLoginPage(page: Page) {
  await page.goto(`${baseUrl}/practice-test-login/`);
  
}


async function fillLoginForm(page: Page, username: string, password: string) {
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
}

async function submitLoginForm(page: Page) {
  await page.getByRole('button', { name: 'Submit' }).click();
}

async function verifySuccessfulLogin(page: Page) {
  await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
}