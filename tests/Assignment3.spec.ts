// Test case 1: Positive LogIn test


import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login';

const invalid_username ='testingusername';

const invalid_password ='testingpassword';

const valid_password ='Password123';

const valid_username ='student';

const error_message ='Your username is invalid!';




test('Verify user can logged in successfuuly to https://practicetestautomation.com/practice-test-login/', async ({ page }) => {
  // Navigate to website
  await page.goto('https://practicetestautomation.com/practice-test-login/');


      const loginPage = new LoginPage(page);
      await loginPage.enterUsername('student');
      await loginPage.enterPassword(valid_password);
      await loginPage.clickSubmit();
      console.log('User logged in successfully');




      
}
);
test('Verify Negative username test', async ({ page }) => {
  // Navigate to website
  await page.goto('https://practicetestautomation.com/practice-test-login/');
        const loginPage = new LoginPage(page);
        await loginPage.enterPassword(valid_password);
        await loginPage.enterUsername(invalid_username);
        await loginPage.submitButton
  await expect(page.locator('#error')).toHaveText(error_message);
  console.log(error_message);

}
);

test('Verify Negative password test', async ({ page }) => {
  // Navigate to website
  await page.goto('https://practicetestautomation.com/practice-test-login/');
        const loginPage = new LoginPage(page);
        await loginPage.enterPassword(invalid_password);
        await loginPage.enterUsername(valid_username);
        await loginPage.clickSubmit();
        await page.waitForTimeout(3000);
  await expect(page.locator('#error')).toHaveText("Your password is invalid!");

}
);
