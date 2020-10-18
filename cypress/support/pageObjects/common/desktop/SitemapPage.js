import FooterSection from "../../../pageSections/FooterSection";
import SitemapContentSection from "../../../pageSections/SitemapContentSection";
import HeaderTopBarSection from "../../../pageSections/HeaderTopBarSection";

class SitemapPage {
  constructor() {
    cy.log(`Application on ${globalThis.countryUnderTest.name} Sitemap Page`);
  }

  goto() {
    cy.get('[aria-label="Sitemap"]').first().click();
  }

  headerTopBarSection() {
    return new HeaderTopBarSection();
  }

  sitemapContentSection() {
    return new SitemapContentSection();
  }
  footerSection() {
    return new FooterSection();
  }
}
export default SitemapPage;
