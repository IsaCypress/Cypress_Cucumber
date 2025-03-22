Feature: Error test suite

Background:
 Given I visit "https://www.saucedemo.com/"

Scenario: Error cuando el username está vacío
    Given estoy en la página de login de SauceDemo
    When introduzco solo la contraseña "secret_sauce" y hago clic en login
    Then debería ver el mensaje de error "Epic sadface: Username is required"

  Scenario: Error cuando la contraseña está vacía
    Given estoy en la página de login de SauceDemo
    When introduzco solo el username "standard_user" y hago clic en login
    Then debería ver el mensaje de error "Epic sadface: Password is required"

  Scenario: Error cuando las credenciales son incorrectas
    Given estoy en la página de login de SauceDemo
    When introduzco el username "wrong_user" y la contraseña "wrong_password"
    And hago clic en el botón login
    Then debería ver el mensaje de error "Epic sadface: Username and password do not match any user in this service"

  Scenario: Error cuando el usuario está bloqueado
    Given estoy en la página de login de SauceDemo
    When introduzco el username "locked_out_user" y la contraseña "secret_sauce"
    And hago clic en el botón login
    Then debería ver el mensaje de error "Epic sadface: Sorry, this user has been locked out."  