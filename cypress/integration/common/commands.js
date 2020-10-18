Cypress.Commands.add("validateLinkHref", (linkText, linkUrl)=> {
    cy.contains("a",linkText)
    .invoke("attr", "href")
    .should("contain", linkUrl);

});

Cypress.Commands.add("clickLinkByText", (linkText)=> {
    cy.contains("a",linkText)
    .should("be.visible")
    .click();
});