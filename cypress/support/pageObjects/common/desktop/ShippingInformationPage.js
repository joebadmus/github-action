import FooterSection from "../../../pageSections/FooterSection";
import StorefrontContentSection from "../../../pageSections/StorefrontContentSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";

class ShippingInformationPage {
  
  constructor() {
    cy.log(`Application on ${globalThis.countryUnderTest.name} Shipping Info Page`);
  }

  goto(){
    cy.get('[aria-label="Shipping Information"]').first().click();
  }

  headerTopBarSection() {
    return new HeaderTopBarSection();
  }
  storefrontContentSection() {
    return new StorefrontContentSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default ShippingInformationPage;
