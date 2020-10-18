import TheCompanyContentSection from "../../../pageSections/TheCompanyContentSection";

class TheCompanyPage {

    constructor() {
        cy.log(`Application on ${globalThis.countryUnderTest.name} The Company page`);
    }

    theCompanyContentSection() {
        return new TheCompanyContentSection();
    }

    goto(){
        cy.visit(Cypress.env("TheCompany"));
    }
}

export default TheCompanyPage;
