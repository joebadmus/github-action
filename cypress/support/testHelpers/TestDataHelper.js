let primaryLanguageFooters = require("../../fixtures/primaryLanguageFooters.json");
let secondLanguageFooter = require("../../fixtures/secondLanguageFooter.json");

class TestDataHelper {
  static getFooterFor(marketType, linkText) {
    let marketFooters = footer[marketType.substring(0, 2)];
    if (marketFooters === undefined)
      throw `The market ${marketType} does not exist`;

    for (var i = 0; i < marketFooters.length; i++) {
      if (linkText === marketFooters[i].linkText) {
        return marketFooters[i];
      }
    }
    throw `The link '${linkText}' does not exist`;
  }

  static getPrimaryLanguageFooterLinks(countryCode) {
    debugger;
    let marketFooters = primaryLanguageFooters[countryCode];
    if (marketFooters === undefined)
      throw `The country code ${countryCode} does not exist`;
    return marketFooters;
  }
  
  static getSecondLanguageFooterLinks(countryCode) {
    debugger;
    let marketFooters = secondLanguageFooter[countryCode];
    if (marketFooters === undefined)
      throw `The country code ${countryCode} does not exist`;
    return marketFooters;
  }

  static getCountryCode(country) {
    let dictionary = {
      MEXICO: "MX",
      CANADA: "CA",
      BULGARIA: "BG",
      CROATIA: "HR",
      CZECH: "CZ",
      TURKEY: "TR",
      THAILAND: "TH",
      TAIWAN: "TW",
      USA: "US",
      SWEDEN: "SE",
      SWITZERLAND: "CH",
      ARMENIA: "AM",
      AUSTRALIA: "AU",
      AUSTRIA: "AT",
      AZERBAIJAN: "AZ",
      BAHRAIN: "BH",
      DENMARK: "DK",
      UAE: "AE",
      UKRAINE: "UA",
      SPAIN: "ES",
      SOUTH_KOREA: "KR",
      SOUTH_AFRICA: "ZA",
      SINGAPORE: "SG",
      SERBIA: "RS",
      ROMANIA: "RO",
      QATAR: "QA"
    };

    var keys = Object.keys(dictionary);

    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === country.toUpperCase()) {
        let countryCode = dictionary[keys[i]];
        cy.log("Country code for " + countryCode + " is returned for " + country);
        return countryCode;
      }
    }
    throw `Country code does not exist for "${country}" `;
  }

  static getInternationalFooterIndex(footerText) {
    // if (footerText === "Size Guide") return 0;
    if (footerText === "Returns Information") return 0;
    if (footerText === "Shipping Information") return 1;
    if (footerText === "Contact Us") return 2;
    if (footerText === "Sitemap") return 3;
    if (footerText === "Privacy Policy") return 4;
    if (footerText === "Terms & Conditions") return 5;
    if (footerText === "Media & Press") return 6;
    if (footerText === "The Company") return 7;
    if (footerText === "Careers@next") return 8;
    if (footerText === "Next Franchise") return 9;
    if (footerText === "Next Affiliates") return 10;
    throw `The footer ${footerText} does not exist`;
  }

  static setTestCountry(value) {
    let countryUrl = Cypress.env(value);
    if (countryUrl === undefined) throw `Country ${value} is not found`;

    let countryUnderTest = {
      name: value,
      code: TestDataHelper.getCountryCode(value),
      url: countryUrl,
    };
    globalThis.countryUnderTest = countryUnderTest;
  }
}

export default TestDataHelper;
