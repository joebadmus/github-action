@international @footer  @desktop 
Feature: Platform Mod International Site Guide
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links

    Scenario Outline: Platform Mod Check Returns Information Page is Displayed
        Given I am an "anonymous" user "desktop" on "<domain>" viewing "Home".
        When I am viewing the footer of the page
        And I select the "Returns Information" from the footer
        Then I should be taken to Returns Information page

        Examples:
            | domain      |
            | Armenia     |
            | Australia   |