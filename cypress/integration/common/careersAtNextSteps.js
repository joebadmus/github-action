import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";

Then("I should be taken to Careers at next page", () => {
    let careersAtNextPage = PageHelper.createPagewith('Careers@NextPage');
    careersAtNextPage.careersAtNextContentSection().verifyPageIsDisplayed();
});