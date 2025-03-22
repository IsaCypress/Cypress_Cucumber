import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import errorPage from '../pages/errorPage.js';


Given('estoy en la página de login de SauceDemo', () => {
  errorPage.navigateToLoginPage();
});


When('introduzco solo la contraseña {string} y hago clic en login', (password) => {
  errorPage.inputPassword(password);
  errorPage.clickLoginButton();
});

When('introduzco solo el username {string} y hago clic en login', (username) => {
    errorPage.inputUsername(username);
    errorPage.clickLoginButton();
});

When('introduzco el username {string} y la contraseña {string}', (username, password) => {
    errorPage.inputUsername(username);
    errorPage.inputPassword(password);
});

When('hago clic en el botón login', () => {
    errorPage.clickLoginButton();
});


Then('debería ver el mensaje de error {string}', (errorMessage) => {
    errorPage.validateErrorMessage(errorMessage);
});