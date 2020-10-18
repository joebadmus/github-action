import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";

Then("I should be taken to the Terms and Conditions page", () => {
    let termsAndConditionsPage = PageHelper.createPagewith("TermsAndConditionsPage");
    termsAndConditionsPage.termsAndConditionsContentSection().verifyPageIsDisplayed();
});

