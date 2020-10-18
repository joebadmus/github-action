class HeaderTopBarSection {
  changeCountryLanguage() {
    cy.get('[class*="flagSelectorContainer"]').click();

    cy.get('[class="languageButton"]')
      .invoke("attr", "class")
      .then(($languageButton) => {
        if (!$languageButton.includes("selected")) {
          cy.get("input.languageButton").last().click();
        }
      });

    cy.get("#btnFlagSelectorShopNow").click();
  }
}

export default HeaderTopBarSection;
