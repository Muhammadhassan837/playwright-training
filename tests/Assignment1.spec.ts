
// Test case 1: Positive LogIn test


import { test, expect } from '@playwright/test';
test('Verify user can logged in successfuuly to https://practicetestautomation.com/practice-test-login/', async ({ page }) => {
  // Navigate to website
  await page.goto('https://practicetestautomation.com/practice-test-login/');
    //enter userename
    await page.getByRole('textbox', { name: 'username' }).fill('student');
    //enter password
    await page.getByRole('textbox', { name: 'password'}).fill('Password123');
    //click login button
    await page.getByRole('button', { name: 'Submit' }).click();
      console.log('User logged in successfully');

  // Verify page title}
  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    console.log('URL validation successfully');

  await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible(); 
    console.log('Heading validation successfully');

  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
  console.log('User logged out successfully');

   
}
);

// Test case 2: Negative LogIn test with incorrect username


test('Verify Negative username test', async ({ page }) => {
  // Navigate to website
  await page.goto('https://practicetestautomation.com/practice-test-login/');
    //enter userename
    await page.getByRole('textbox', { name: 'username' }).fill('incorrectUser ');
    //enter password
    await page.getByRole('textbox', { name: 'password'}).fill('Password123');
    //click login button
    await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();
    await page.getByRole('button', { name: 'Submit' }).click();
  // Verify Validation message
  // await expect(page.getByText('Your username is invalid!')).toBeVisible();    (Not working)
  await expect(page.locator('#error')).toHaveText('Your username is invalid!');
    console.log('Negative username test passed');

}
);

// Test case 3: Negative LogIn test with incorrect password

test('Verify Negative password test', async ({ page }) => {
  // Navigate to website
  await page.goto('https://practicetestautomation.com/practice-test-login/'); 
    //enter userename
    await page.getByRole('textbox', { name: 'username' }).fill('student');
    //enter password

    await page.getByRole('textbox', { name: 'password'}).fill('incorrectPassword');
    //click login button
    await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();
    await page.getByRole('button', { name: 'Submit' }).click();
  // Verify Validation message
  // await expect(page.getByText('Your password is invalid!')).toBeVisible();    (Not working)
  await expect(page.locator('#error')).toHaveText('Your password is invalid!');
    console.log('Negative password test passed');
}); 


