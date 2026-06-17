import { Page } from '@playwright/test';
import expandLoginPage from '../pages/expandlogin';



export async function doLogin(page: Page, username: string, password: string) {
    const loginPage = new expandLoginPage(page);
    await page.goto('https://practice.expandtesting.com/login');
    await loginPage.enterUsername(username);
    await loginPage.enterPassword(password);
    await loginPage.clickSubmit();
}