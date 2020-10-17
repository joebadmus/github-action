import LoginPage from "../../../pageObject/LoginPages";

let login = new LoginPage();

Given("I Open the conduit loging page", function () {
  cy.visit("http://react-redux.realworld.io/#/login");
});

When("I type in username and password", (datatable) => {
  datatable.hashes().forEach((element) => {
    login.email().type(element.username);
    login.password().type(element.password);
  });
});

When("I signed with the below details", (rowdata) => {
  const rawdata = rowdata.rowsHash();
  login.email().type(rawdata["username"]);
  login.password().type(rawdata["password"]);
});

When("I login using my credentials", function () {
  cy.fixture("userLoginDetails").then((user) => {
    login.email().type(user.email);
    login.password().type(user.password);
  });
});

When("I click on sign in button", function () {
  login.signIn().click();
});

Then("{string} should be shown", function (content) {
  cy.contains(content, { timeout: 10000 }).should("be.visible");
});
