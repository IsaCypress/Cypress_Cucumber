import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor"; 
 
// Clases importadas 
import { CommonPage} from "../pages/commonPage" 
 
//Instancias de clase 
let commonPage = new CommonPage(); //declarar una instancia (esperamos que se carguen todas las funciones y tengamos acceso a todas ellas)


Given("I visit {string}", (url) => { //el lenguaje debe representar lo que hace la funcion por detras
    commonPage.visitLink(url); 
  }); 