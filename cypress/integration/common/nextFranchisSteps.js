import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";


Then("I should be taken to Next Franchise page", () => {

let nextFranchisePage = PageHelper.createPagewith("NextFranchisePage");

nextFranchisePage.NextFranchiseMainGridSection().verifyPageIsDisplayed();
});