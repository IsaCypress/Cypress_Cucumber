import { CommonPage } from "./commonPage";

// Locators
const usernameLocator = '[data-test="username"]'
const acceptedtUserNames = ['standard_user','locked_out_user','problem_user','performance_glitch_user','error_user','visual_user'];
 // Locators
 cartBadgeLocator = '.shopping_cart_badge';
 checkoutButtonLocator = '[data-test="checkout"]';
 continueButtonLocator = '[data-test="continue"]';
 finishButtonLocator = '[data-test="finish"]';
 backHomeButtonLocator = '[data-test="back-to-products"]';
 firstNameLocator = '[data-test="firstName"]';
 lastNameLocator = '[data-test="lastName"]';
 postalCodeLocator = '[data-test="postalCode"]';
 inventoryItemLocator = '.inventory_item_name';
 thankyouMessageLocator = '.complete-header';
 inventoryItemPriceLocator = '.inventory_item_price';

// Functions
export class CheckoutProcessPage extends CommonPage{


    addProductByDataTest (elementByDataTest) {
    cy.get(`[data-test="${elementByDataTest}"]`).click();

    }

    //I go to cart page
    goToCartPage() {
        cy.get('.shopping_cart_link').click();
    }
    
    

    //I check "Sauce Labs Backpack" appears in the cart page
    //I check "Sauce Labs Onesie" appears in the cart page
    checkProductInCart(productName) {
        cy.get('.inventory_item_name').contains(productName).should('be.visible');
    }

    //I check that the number 2 appears in the shopping cart badge
    checkCartBadgeCount(count) {
        cy.get(this.cartBadgeLocator).should('contain', count);
    }
   
    //I click on "Checkout" button
    clickCheckoutButton() {
        cy.get(this.checkoutButtonLocator).click();
    }

    //I check the url should contain the endpoint "checkout-step-one"
    checkUrlEndpoint(endpoint) {
        cy.url().should('include', endpoint);
    }

    //I fill correctly the formulary
    fillCheckoutForm(firstName, lastName, postalCode) {
        cy.get(this.firstNameLocator).type(firstName);
        cy.get(this.lastNameLocator).type(lastName);
        cy.get(this.postalCodeLocator).type(postalCode);
    }

   //I check that the products appears with the correct name and price
   checkProductsInSummary(products) {
    products.forEach(product => {
        cy.get(this.inventoryItemLocator).contains(product.name).should('be.visible');
        cy.get(this.inventoryItemPriceLocator).contains(product.price).should('be.visible');
    });

    //I check the url should contain the endpoint {string}


    //I click in the "Finish" button
    clickFinishButton(finishButtonLocator); {
        cy.get(this.finishButtonLocator).click();
   
}

//In the screen appears the message "Thank you for your order!"
checkThankYouMessage(message); {
    cy.get(this.thankyouMessageLocator).should('contain', message);
}

//I click on the button "Back Home"
    clickBackHomeButton(); {
        cy.get(this.backHomeButtonLocator).click();
    }
}

   }
