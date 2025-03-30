Feature: Compra de articulos

Background:
  Given I login and keep the sesion for the standar_user


Scenario: "Complete checkout process with two products in the cart"
Given I Add to the cart the product with data-test "add-to-cart-sauce-labs-backpack"
And I Add to the cart the product with data-test "add-to-cart-sauce-labs-onesie"
And I go to cart page
And I check "Sauce Labs Backpack" appears in the cart page
And I check "Sauce Labs Onesie" appears in the cart page
And I check that the number 2 appears in the shopping cart badge
When I click on "Checkout" button
And I check the url should contain the endpoint "checkout-step-one"
And I fill  correctly the formulary
And I click on "Continue" button
And  I check the url should contain the endpoint "checkout-step-two"
And I check that the products appears with the correct name and price
And I click in the "Finish" button
Then  I check the url should contain the endpoint "checkout-complete"
And In the screen appears the message "Thank you for your order!"
And I click on the button "Back Home"
And I check shopping cart badge should  "not.exist