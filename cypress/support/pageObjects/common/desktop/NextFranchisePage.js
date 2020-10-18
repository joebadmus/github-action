import FooterSection from "../../../pageSections/FooterSection";
import NextFranchiseMainGridSection from "../../../pageSections/NextFranchiseMainGridSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";


class NextFranchisePage {
  constructor(){
    cy.log(
      `Application on ${globalThis.countryUnderTest.name} Next Franchise Page`
    );
  }
  
 
  goto(){
    cy.get('[aria-label="Next Franchise"').first().click();
  }

  headerTopBarSection(){
    return new HeaderTopBarSection();
  }
  
  NextFranchiseMainGridSection(){
    return new NextFranchiseMainGridSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default NextFranchisePage;
