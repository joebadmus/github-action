import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";

Then("I should be taken to The Company page", () => {
    let theCompanyPage = PageHelper.createPagewith('TheCompanyPage');
    theCompanyPage.theCompanyContentSection().acceptCookieConsent();
    theCompanyPage.theCompanyContentSection().verifyPageIsDisplayed();
});