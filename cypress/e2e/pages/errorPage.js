class errorPage {
    // Elementos de la página
    elements = {
      usernameInput: () => cy.get('[data-test="username"]'),
      passwordInput: () => cy.get('[data-test="password"]'),
      loginButton: () => cy.get('[data-test="login-button"]'),
      errorMessage: () => cy.get('[data-test="error"]')
    };
  
    // Métodos para interactuar con la página
    navigateToLoginPage() {
      cy.visit('https://www.saucedemo.com/');
    }
  
    inputUsername(username) {
      if (username) {
        this.elements.usernameInput().type(username);
      }
    }
  
    inputPassword(password) {
      if (password) {
        this.elements.passwordInput().type(password);
      }
    }
  
    clickLoginButton() {
      this.elements.loginButton().click();
    }
  
    login(username, password) {
      this.inputUsername(username);
      this.inputPassword(password);
      this.clickLoginButton();
    }
  
    validateErrorMessage(errorText) {
      this.elements.errorMessage()
        .should('be.visible')
        .and('contain.text', errorText);
    }
  }
  
  export default new errorPage();