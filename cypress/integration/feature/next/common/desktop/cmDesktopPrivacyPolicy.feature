@international @footer  @desktop 
Feature: Platform Mod International Privacy Policy
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links

 @contactus
    Scenario Outline: Platform Mod Check Privacy Policy Page is Displayed
        Given I am an "anonymous" user "desktop" on "<domain>" viewing "Home".
        When I am viewing the footer of the page
        And I select the "Privacy Policy" from the footer
        Then I should be taken to Privacy Policy page

        Examples:
            | domain      |   
            | Armenia     |
            | Australia   |
            