class TermsAndConditionsContentSection {
  verifyPageIsDisplayed() {
    cy.location().should((loc) => {
      expect(loc.toString()).to.contain("terms");
    });

    cy.get('[data-index="03_1"]').should("be.visible");
  }
}

export default TermsAndConditionsContentSection;
