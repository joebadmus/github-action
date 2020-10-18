import FooterSection from "../../../pageSections/FooterSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";
import MainNavigationSection from "../../../pageSections/MainNavigationSection";

class ProductListPage {
  constructor() {
    cy.log(`Application on ${globalThis.countryUnderTest.name} Product List page`);
  }

  goto(){
      cy.get('#sli_search_1').type("Cap");
      cy.get('[class="SearchButton"]').click();
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

export default ProductListPage;
