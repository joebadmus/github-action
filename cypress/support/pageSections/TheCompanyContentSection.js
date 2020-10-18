class TheCompanyContentSection {

    verifyPageIsDisplayed() {
        cy.location().should((loc) =>{
            expect(loc.toString()).to.equal("https://www.nextplc.co.uk/");
        });

        cy.get("#nav-media-level1").invoke("attr", "class").should('not.contain','selected');
    }

    acceptCookieConsent() {
        cy.get('#cc-saveAll-startBtn').click();
    }
}
export default TheCompanyContentSection;
