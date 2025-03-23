import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { LoginPage} from "../pages/loginPage"

//Instancias de clase
let loginPage = new LoginPage();

Given("I type standar user in login page", () => {
  loginPage.typeStandarUser();
 });

Given("I type the correct password in login page", () => {
  loginPage.typeCorrectPassword();
});

Given("I check that url doesn't contain the endpoint inventory.html", () => {
  loginPage.checkUrlIsNotMainPage();
});

Given("I click on the login button", () => {
  loginPage.clickLoginButton();
});

Given("I login with valid user and password", () => {
  loginPage.correctLogin();
});

// Better practices

Given("I type the user name {string}", (user) => {
  loginPage.typeUser(user);
 });

 Given("I type the password {string}", (password) => {
  loginPage.typePassword(password);
 });


 Given("I can see the following {string}", (expectedUsernames) => {
  loginPage.comprobarListadoNombres(expectedUsernames)
});

//Ejercicio mensajes de error

Given("I check that the message {string}", () => {
  loginPage.errorSinUser()
});

Given("I check that sin password the message {string} appear", () => {
  loginPage.errorSinPassword()
});
 

Given("I check that with incorrect dates the message {string}", () => {
  loginPage.errorIncorrectDates()
});


Given("I check that the user has been blocked and the message is {string}", () => {
  loginPage.errorBlockedUser()
});


//Ejercicios  localizando la clase

Given("I can see the text {string}", (elementByClass) => {
  loginPage.textShow(elementByClass)
});

Given("the message with {string} is not displayed", (elementByBody) => {
  loginPage.textNotShow(elementByBody)
});