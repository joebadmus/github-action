import FooterSection from "../../../pageSections/FooterSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";

class FavouritesPage {
  constructor() {
    cy.log(
      `Application on ${globalThis.countryUnderTest.name} Favourites Page`
    );
  }

  goto(){
    cy.get('[class="FavouriteHeader"]>a').click();
  }

  headerTopBarSection() {
    return new HeaderTopBarSection();
  }

  footerSection() {
    return new FooterSection();
  }
}

export default FavouritesPage;
