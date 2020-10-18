import FooterSection from "../../../pageSections/FooterSection";
import StorefrontContentSection from "../../../pageSections/StorefrontContentSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";

class LoginPage {
 
  constructor() {
    cy.log(`Application on ${globalThis.countryUnderTest.name} Login Page`);
  }

  goto(){
    cy.get('[data-link-id="DataLinkId"]',{force: true}).click();
  }

  headerTopBarSection(){
    return new HeaderTopBarSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default LoginPage;
