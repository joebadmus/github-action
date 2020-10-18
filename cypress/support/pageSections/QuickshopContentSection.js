class QuickshopContentSection {

    verifyPageIsDisplayed() {
        cy.location().should((loc) =>{
            expect(loc.toString()).to.contain("quickshop");
        });

        cy.get('id="QuickshopWrap"').should('be.visible');      
    }
}
export default QuickshopContentSection;
