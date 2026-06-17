import {Page, Locator}from '@playwright/test';


export default class ParabankRegisterPage {  
    readonly firstnameField: Locator;
    readonly lastnameField: Locator
    readonly addressField: Locator;
    readonly cityField: Locator;
    readonly stateField: Locator
    readonly zipCodeField: Locator;
    readonly phoneNumberField: Locator;

        readonly ssnField: Locator;
    readonly usernameField: Locator;
    readonly passwordField: Locator 
    readonly confirmPasswordField: Locator;
    readonly registerButton: Locator;

    constructor(public page: Page) {
    this.firstnameField = page.locator('[name="customer.firstName"]');
    this.lastnameField = page.locator('[name="customer.lastName"]');
    this.addressField = page.locator('[name="customer.address.street"]');
    this.cityField = page.locator('[name="customer.address.city"]');
    this.stateField = page.locator('[name="customer.address.state"]');
    this.zipCodeField = page.locator('[name="customer.address.zipCode"]');
    this.phoneNumberField = page.locator('[name="customer.phoneNumber"]');
    this.ssnField = page.locator('[name="customer.ssn"]');
    this.usernameField = page.locator('[name="customer.username"]');
    this.passwordField = page.locator('[name="customer.password"]');
    this.confirmPasswordField = page.locator('[name="repeatedPassword"]');
    this.registerButton = page.getByRole('button', { name: 'Register' });

}

async enterFirstName(firstname: string) {
    await this.firstnameField.fill(firstname);}
async enterLastName(lastname: string) {
    await this.lastnameField.fill(lastname);}       
async enterAddress(address: string) {
    await this.addressField.fill(address);} 
        
async enterCity(city: string) {
    await this.cityField.fill(city);}

async enterState(state: string) {
    await this.stateField.fill(state);}
async enterZipCode(zipcode: string) {
    await this.zipCodeField.fill(zipcode);} 
async enterPhoneNumber(phonenumber: string) {
    await this.phoneNumberField.fill(phonenumber);}
async enterSSN(ssn: string) {
    await this.ssnField.fill(ssn);} 

async enterUsername(username: string) {
    await this.usernameField.fill(username);}       
async enterPassword(password: string) {
    await this.passwordField.fill(password);}
async enterConfirmPassword(confirmpassword: string) {
    await this.confirmPasswordField.fill(confirmpassword);} 
async clickRegister() {
    await this.registerButton.click();}

}

