import FooterSection from "../../../pageSections/FooterSection";
import QuickshopContentSection from "../../../pageSections/QuickshopContentSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";

class QuickshopPage {
  constructor() {
    // cy.visit(globalThis.countryUnderTest);
    cy.log(`Application on ${globalThis.countryUnderTest.name} Quickshop page`);
  }

  goto(){
    cy.get('[data-testid*="footer-quick-links-link"]').click();
  }
  headerTopBarSection() {
    return new HeaderTopBarSection();
  }

  QuickshopContentSection() {
    return new QuickshopContentSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default QuickshopPage;
