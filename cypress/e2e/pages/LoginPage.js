import { CommonPage } from "./commonPage";

const usernameLocator = '[data-test="username"]'
const expectedUsernames = [
  'standard_user',
  'locked_out_user', 
  'problem_user',
  'performance_glitch_user',
  'error_user',
  'visual_user'
]

const passwordLocator = '[data-test="password"]'


export class LoginPage extends CommonPage{

  typeStandarUser() {
    cy.get(usernameLocator).type('standard_user');
  }

  typeCorrectPassword() {
    cy.get('[data-test="password"]').type('secret_sauce');
  }

  checkUrlIsNotMainPage() {
    cy.url().should('not.include', 'inventory.html');
  }

  clickLoginButton() {
    cy.get('[data-test="login-button"]').click();
  }

  correctLogin() {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.url().should('not.include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('not.exist');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('contain', 'Swag Labs');
  }

  //BETTER PRACTICES


 typeUser (user) {
  cy.get('[data-test="username"]').type(user);
 }

 typePassword (password) {
  cy.get('[data-test="password"]').type(password);
 }


 comprobarListadoNombres (expectedUsernames) {
  cy.get('[data-test="login-credentials"]').find('h4', 'login-credentials').nextAll('br').should('exist', 'expectedUsernames' )
}

errorSinUser () {
 cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required') 
}

errorSinPassword() {
  cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required') 
 }

 errorIncorrectDates() {
  cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service') 
 }

 errorBlockedUser() {
  cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.') 

}

} 
