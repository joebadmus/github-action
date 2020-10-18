import FooterSection from "../../../pageSections/FooterSection";
import StorefrontContentSection from "../../../pageSections/StorefrontContentSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";

class ReturnsInformationPage {
  constructor() {
    cy.log(
      `Application on ${globalThis.countryUnderTest.name} Returns Information Page`
    );
  }

  goto(){
    cy.get('[aria-label="Returns Information"]').first().click();
  }

  headerTopBarSection(){
    return new HeaderTopBarSection();
  }
  
  storefrontContentSection() {
    return new StorefrontContentSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default ReturnsInformationPage;
