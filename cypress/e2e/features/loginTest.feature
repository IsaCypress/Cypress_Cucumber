#Para comentar en un archivo .feature se hace con este símbolo #
#Esto es la descripción de la batería de test contenida en este archivo
Feature: Login test suite

Background:
#Esto es equivalente al beforeEach
 Given I visit "https://www.saucedemo.com/"
 
# Los Scenarios son los tests (lo que antes era "it")
 Scenario: login happy path
  Given I type standar user in login page
  And I type the correct password in login page
  And I check that url doesn't contain the endpoint inventory.html
  When I click on the login button
  Then I check url include the endpoint inventory.html

Scenario: simple login
  Given I login with valid user and password

 Scenario: Better login
  Given I type the user name "standard_user"
  And I type the password "secret_sauce"
  And I check that the url doesn't include the endpoint "inventory.html"
  When I click on the button with data-test "login-button"
  Then I check that the url include the endpoint "inventory.html"

 Scenario: The very best login test
  Given I type in the text box with data test "username" the text "standard_user"
  And I type in the text box with data test "password" the text "secret_sauce"
  And I check that the url doesn't include the endpoint "inventory.html"
  When I click on the button with data-test "login-button"
  Then I check that the url include the endpoint "inventory.html"


  Scenario: Verify accepted usernames are displayed on login page
    Given I can see the following "expectedUsernames"


 Scenario: Verify error menssage without username
  Given I type in the text box with data test "password" the text "secret_sauce"
  And  I click on the button with data-test "login-button"
  Then I check that the message "Epic sadface: Username is required"
   
Scenario: Verify error message without password
  Given I type in the text box with data test "username" the text "standard_user"
  And  I click on the button with data-test "login-button"
  Then I check that sin password the message "Epic sadface: Password is required" appear


Scenario: Verify error message when username and password are incorrect
  Given I type in the text box with data test "username" the text "Incorrect_user"
  And I type in the text box with data test "password" the text "Incorrect_password"
  And  I click on the button with data-test "login-button"
  Then I check that with incorrect dates the message "Epic sadface: Username and password do not match any user in this service"

Scenario: Verify error message when user has been blocked 
  Given I type in the text box with data test "username" the text "locked_out_user"
  And I type in the text box with data test "password" the text "secret_sauce"
  And  I click on the button with data-test "login-button"
  Then I check that the user has been blocked and the message is "Epic sadface: Username and password do not match any user in this service."