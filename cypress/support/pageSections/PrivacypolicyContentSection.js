class PrivacypolicyContentSection {

    verifyPageIsDisplayed() {
        cy.location().should((loc) =>{
            expect(loc.toString()).to.contain("privacypolicy");
        });

        cy.get("div[data-index='03_1']").should('be.visible');
    }
}
export default PrivacypolicyContentSection;
