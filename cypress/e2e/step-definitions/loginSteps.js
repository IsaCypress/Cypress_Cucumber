import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor"; 
 
// Clases importadas 
import { LoginPage} from "../pages/commonPage" 
 
//Instancias de clase 
let loginPage = new LoginPage(); 


Given("I visit {string}", (url) => { 
    loginPage.typeStandarUser(url); 
  }); 