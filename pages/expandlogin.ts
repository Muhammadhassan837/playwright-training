import {Page, Locator}from '@playwright/test';


export default class ExpandLoginPage {  
    readonly loginField: Locator;
    readonly passwordField: Locator;
    readonly submitButton: Locator;

    constructor(public page: Page) {
    this.loginField = page.getByRole('textbox', { name: 'Username' });
    this.passwordField = page.getByRole('textbox', { name: 'Password' });
    this.submitButton = page.getByRole('button', { name: 'Login' });
    }

async enterUsername(Username: string) {
    await this.loginField.fill(Username);}

async enterPassword(Password: string) {
    await this.passwordField.fill(Password);}
async clickSubmit() {
    await this.submitButton.click();}   
}

