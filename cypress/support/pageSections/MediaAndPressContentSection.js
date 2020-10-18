class MediaAndPressContentSection {

    verifyPageIsDisplayed() {
        cy.location().should((loc) =>{
            expect(loc.toString()).to.equal("https://www.nextplc.co.uk/media/media-contacts");
        });

        cy.get("#nav-media-level1").invoke("attr", "class").should('contain','selected');
    }

    acceptCookieConsent() {
        cy.get('#cc-saveAll-startBtn').click();
    }
}
export default MediaAndPressContentSection;
