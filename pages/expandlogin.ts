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

async enterUsername(username: string) {
    await this.loginField.fill(username);}

async enterPassword(password: string) {
    await this.passwordField.fill(password);}
async clickSubmit() {
    await this.submitButton.click();}   
}

