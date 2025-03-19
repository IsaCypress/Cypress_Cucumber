import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor"; 
 
// Clases importadas 
import { mainPage} from "../pages/commonPage" 
 
//Instancias de clase 
let mainPage = new mainPage(); 


Given("I visit {string}", (url) => { 
    mainPage.typeStandarUser(url); 
  });