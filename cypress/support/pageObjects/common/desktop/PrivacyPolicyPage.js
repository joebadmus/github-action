import FooterSection from "../../../pageSections/FooterSection";
import PrivacypolicyContentSection from "../../../pageSections/PrivacypolicyContentSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";

class PrivacyPolicyPage {
  constructor() {
    cy.log(
      `Application on ${globalThis.countryUnderTest.name} Privacy Policy Page`
    );
  }

  goto(){
    cy.get('[aria-label="Privacy Policy"]').first().click();
  }

  headerTopBarSection() {
    return new HeaderTopBarSection();
  }

  PrivacypolicyContentSection() {
    return new PrivacypolicyContentSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default PrivacyPolicyPage;
