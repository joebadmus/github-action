class StorefrontContentSection {
  verifyPageIsDisplayed() {
    cy.get("#divStorefrontContentSection").should("be.visible");
  }
}

export default StorefrontContentSection;
