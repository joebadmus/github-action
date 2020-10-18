  
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";


Then("I should be taken to Returns Information page", () => {
let returnInformationPage = PageHelper.createPagewith("ReturnsInformationPage");

returnInformationPage.storefrontContentSection().verifyPageIsDisplayed();
});