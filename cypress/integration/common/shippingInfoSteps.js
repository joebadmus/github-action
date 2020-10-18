import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageHelper from "../../support/testHelpers/PageHelper";

Then("I should be taken to Shipping Information page", () => {
    let shippingInfoPage = PageHelper.createPagewith('ShippingInformationPage');
    shippingInfoPage.storefrontContentSection().verifyPageIsDisplayed();
});