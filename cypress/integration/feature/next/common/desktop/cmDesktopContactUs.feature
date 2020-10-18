@international @footer @desktop 
Feature: Platform Mod International Contact Us
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links
 
 @contactus
    Scenario Outline: Platform Mod Check Contact Us Page is Displayed
        Given I am an "anonymous" user "desktop" on "<domain>" viewing "Home".
        When I am viewing the footer of the page
        And I select the "Contact Us" from the footer
        Then I should be taken to Contact Us page

        Examples:
            | domain      |
            | Armenia     |
            | Australia   |
            | Austria     |
            | Azerbaijan  |
            | Bulgaria    |
            | Bahrain     |
            | Canada      |
            | Croatia     |
            | Denmark     |
            | Mexico      |
            | Sweden      |
            | Switzerland |
            | Taiwan      |
            | Thailand    |
            | Turkey      |
            #| UAE         |
            #| Ukraine     |
            | USA         |
            | Spain       |
            | South_Korea |
            | Serbia      |
            | Romania     |
            | Qatar       |
            | Singapore   |
