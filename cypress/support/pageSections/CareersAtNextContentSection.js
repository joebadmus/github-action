class CareersAtNextContentSection {

    verifyPageIsDisplayed() {
        cy.location().should((loc) =>{
            expect(loc.toString()).to.equal("https://careers.next.co.uk/");
        });

        cy.get(".town").should('be.visible');
    }
}
export default CareersAtNextContentSection;
