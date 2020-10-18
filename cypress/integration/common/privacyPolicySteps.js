import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";

Then("I should be taken to Privacy Policy page", () => {
    let privacyPolicyPage = PageHelper.createPagewith('PrivacyPolicyPage');
    privacyPolicyPage.PrivacypolicyContentSection().verifyPageIsDisplayed();
});