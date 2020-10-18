import FooterSection from "../../../pageSections/FooterSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";
import MainNavigationSection from "../../../pageSections/MainNavigationSection";

class LandingPage {
  constructor() {
    cy.log(`Application on ${globalThis.countryUnderTest.name} Landing page`);
  }

  goto(){
    debugger;
    let menuIndex = Math.floor((Math.random() * 10) + 1);
        cy.get('span[class*="DepartmentText"]').eq(menuIndex).click();
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

export default LandingPage;
