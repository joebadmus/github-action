const {
  Before,
  After,
  Given,
  Then
} = require("cypress-cucumber-preprocessor/steps");

// this will get called before each scenario
Before(() => {
cy.clearLocalStorage();
cy.clearCookies();

});

// this will only get called before scenarios tagged with @foo
Before({ tags: "@mobile" }, () => {
  //This is demo view port setting, we need to update with correct setting
  cy.viewport(320, 568);
});
