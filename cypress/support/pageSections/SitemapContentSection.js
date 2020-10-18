class SitemapContentSection {

    verifyPageIsDisplayed() {
        cy.location().should((loc) =>{
            expect(loc.toString()).to.contain("sitemap");
        });

        cy.get('[data-index="03_1"]').should('be.visible');
    }
}
export default SitemapContentSection;
