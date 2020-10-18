import CareersAtNextContentSection from "../../../pageSections/CareersAtNextContentSection";

class CareersAtNextPage {

    constructor() {
        cy.log(`Application on ${globalThis.countryUnderTest.name} Careers@next page`);
    }

    careersAtNextContentSection() {
        return new CareersAtNextContentSection();
    }

    goto(){
        cy.visit(Cypress.env("Careers@next"));
    }
}

export default CareersAtNextPage;
