import { test, expect, Page } from '@playwright/test';
import {base_url} from '../Fixtures/URL.json'; // Importing baseUrl from URL.json
import dotenv from 'dotenv';
dotenv.config({ path: 'credentialsenv.env' }); // Load environment variables from .env file
const username = process.env.APP_USERNAME || 'defaultUsername'; // Get username from environment variable or use default
const password = process.env.APP_PASSWORD || 'defaultPassword'; // Get password from environment variable or use default


test('Verify user can logged in successfuuly to https://practicetestautomation.com/practice-test-login/', async ({ page }) => {
    await navigateToLoginPage(page);

    await fillLoginForm(page, username, password);

    await submitLoginForm(page);

    await verifySuccessfulLogin(page);


});

test('Verify page URL', async ({ page }) => {

    await navigateToLoginPage(page);

    await fillLoginForm(page, username, password);

    await submitLoginForm(page);

    await verifySuccessfulLogin(page);

    await verifypageURL(page);
});



async function navigateToLoginPage(page: Page) {
  await page.goto(`${base_url}/practice-test-login/`);
  
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


// Verify page URL

async function verifypageURL(page: Page) {
   await expect(page).toHaveURL(`${base_url}/logged-in-successfully/`);
    console.log('URL validation successfully');
     await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible(); 
    console.log('Heading validation successfully');

  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
  console.log('User logged out successfully');

   
}
