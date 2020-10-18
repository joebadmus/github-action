import FooterSection from "../../../pageSections/FooterSection";
import StorefrontContentSection from "../../../pageSections/StorefrontContentSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";

class ContactUsPage {
 
  constructor() {
    cy.log(`Application on ${globalThis.countryUnderTest.name} Contact Us Page`);
  }

  goto(){
    cy.get('[aria-label="Contact Us"]').first().click();
  }
  headerTopBarSection(){
    return new HeaderTopBarSection();
  }

  StorefrontContentSection(){
    return new StorefrontContentSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default ContactUsPage;
