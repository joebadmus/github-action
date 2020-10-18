class FooterSection {
  gotoFooter() {
    cy.scrollTo("bottom");
  }

  closeCookieConsent() {
    cy.get('div[class*="CookieConsentCross"]').click();
  }

  validateLinkIsPresent(linkText) {
    cy.get(".footer153").contains("a", linkText).should("be.visible");
  }

  validateSocialNetworksPresent() {
    cy.get('[data-testid="footer-container"]')
      .find('[class*="footer104"]')
      .should("be.visible");
  }

  validateQuickLinkQuickPresent() {
    cy.get('[data-testid*="footer-quick-links-link"]').should("be.visible");
  }

  validateMyAccountIsPresent() {
    cy.get('[data-testid*="footer-quick-links-myaccount"]').should(
      "be.visible"
    );
  }

  validateFootLinkFor(linkText, linkUrl) {
    cy.validateLinkHref(linkText, linkUrl);
  }

  ValidateMobileViewLinkIsPrestn() {
    cy.get('[data-testid="footer-copyright-switcher-mobiletoggle"]').should(
      "be.visible"
    );
  }

  validateFootLinkSectionIsDisplayed(){
    cy.get('[class="footer153"]').should('be.visible');
  }

  selectFootByText(linkText) {
    cy.get(".footer153").contains("a", linkText).should("be.visible").click();
  }
}

export default FooterSection;
