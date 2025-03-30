import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { CheckoutProcessPage } from "../pages/checkoutProcessPage"
import { CommonPage } from "../pages/commonPage";

//Instancias de clase
let checkoutProcessPage = new CheckoutProcessPage();

const productData = [
   { name: "Sauce Labs Backpack", price: "29.99" },
   { name: "Sauce Labs Onesie", price: "7.99" }
];

 Given("I Add to the cart the product with data-test {string}", (elementByDataTest) => {
    checkoutProcessPage.addProductByDataTest(elementByDataTest);
 });


 //I go to cart page
 Given("I go to cart page", () => {
   checkoutProcessPage.goToCartPage();
});

//I check "Sauce Labs Backpack" appears in the cart page
//I check "Sauce Labs Onesie" appears in the cart page
Given("I check {string} appears in the cart page", (productName) => {
   checkoutProcessPage.checkProductInCart(productName);
});

//I check that the number 2 appears in the shopping cart badge
Given("I check that the number {int} appears in the shopping cart badge", (count) => {
   checkoutProcessPage.checkCartBadgeCount(count);
});

//I click on "Checkout" button
When("I click on {string} button", (buttonName) => {
   if (buttonName === "Checkout") {
       checkoutProcessPage.clickCheckoutButton();
   } else if (buttonName === "Continue") {
       checkoutProcessPage.clickContinueButton();
   } else if (buttonName === "Finish") {
       checkoutProcessPage.clickFinishButton();
   } else if (buttonName === "Back Home") {
       checkoutProcessPage.clickBackHomeButton();
   }
});

//I check the url should contain the endpoint "checkout-step-one"

Given("I check the url should contain the endpoint {string}", (endpoint) => {
   checkoutProcessPage.checkUrlEndpoint(endpoint);
});

//I fill correctly the formulary
Given("I fill correctly the formulary", () => {
   checkoutProcessPage.fillCheckoutForm("John", "Doe", "12345");
});


//I check that the products appears with the correct name and price
Given("I check that the products appears with the correct name and price", () => {
   checkoutProcessPage.checkProductsInSummary(productData);
});


//I check the url should contain the endpoint {string}
Given("I check the url should contain the endpoint {string}", (endpoint) => {
   checkoutProcessPage.checkUrlEndpoint(endpoint);
});

//In the screen appears the message "Thank you for your order!"
Given("In the screen appears the message {string}", (message) => {
   checkoutProcessPage.checkThankYouMessage(message);
});

Given("I check shopping cart badge should {string}", (expectation) => {
   if (expectation === "not.exist") {
       checkoutProcessPage.checkCartBadgeNotExist();
   }
});

