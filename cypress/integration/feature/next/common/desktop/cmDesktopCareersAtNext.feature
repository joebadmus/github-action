@international @footer  @desktop
Feature: Platform Mod International Careers@next
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links

    Scenario: Platform Mod Check Careers@next Page is Displayed
        Given I am an "anonymous" user "desktop" on "Armenia" viewing "Careers@Next".
        Then I should be taken to Careers at next page
