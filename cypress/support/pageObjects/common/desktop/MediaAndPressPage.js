import MediaAndPressContentSection from "../../../pageSections/MediaAndPressContentSection";

class MediaAndPressPage {

    constructor() {
        cy.log(`Application on ${globalThis.countryUnderTest.name} Media & Press page`);
    }

    mediaAndPressContentSection() {
        return new MediaAndPressContentSection();
    }

    goto(){
        cy.visit(Cypress.env("Media&Press"));
    }
}

export default MediaAndPressPage;
