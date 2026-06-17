import { test as setup } from '@playwright/test';
//import { doRegister } from './parabankregister.spec';
import { doLogin } from './expand_login.spec';

const authFile = 'playwright/.auth/authentication.json';
const expandAuthFile = 'playwright/.auth/expand_authentication.json';

/*setup('Register and save authentication state', async ({ page }) => {
    await doRegister(page, 'abc_' + Date.now());

    await page.context().storageState({ path: authFile });
    console.log('Authentication state saved to file:', authFile);

});
*/
setup('Login and save expand authentication state', async ({ page }) => {
    await doLogin(page, 'practice', 'SuperSecretPassword!');

    await page.context().storageState({ path: expandAuthFile });
    console.log('Authentication state saved to file:', expandAuthFile);
});

