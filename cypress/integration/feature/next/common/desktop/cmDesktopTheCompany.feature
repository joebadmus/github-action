@international @footer  @desktop @ignore
Feature: Platform Mod International The Company Page
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links

    Scenario: Platform Mod Check The Company Page is Displayed
        Given I am an "anonymous" user "desktop" on "Armenia" viewing "TheCompany".
        Then I should be taken to The Company page
