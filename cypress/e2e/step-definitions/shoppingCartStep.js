import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { ShoppingCartPage} from "../pages/shoppingCartPage"

//Instancias de clase
let shoppingCartPage = new ShoppingCartPage();

//const shoppingCartStep = new ShoppingCartStep();

Given("I am on the shopping cart page", () => {
   shoppingCartPage.visit();
})


Given("I click on cart", () => {
    shoppingCartPage.clickCartButton();
 }) 


Given("there should be no inventory items in the cart", () => {
    shoppingCartPage.notItemCar();
 })  
