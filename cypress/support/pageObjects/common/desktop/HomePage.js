import FooterSection from "../../../pageSections/FooterSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";
import MainNavigationSection from "../../../pageSections/MainNavigationSection";

class HomePage {
  constructor() {
    cy.visit(globalThis.countryUnderTest.url);
    cy.log(`Application on ${globalThis.countryUnderTest.name} Home page`);
  }


  mainNavigationSection(){
    return MainNavigationSection();
  }
  
  headerTopBarSection(){
    return new HeaderTopBarSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default HomePage;
