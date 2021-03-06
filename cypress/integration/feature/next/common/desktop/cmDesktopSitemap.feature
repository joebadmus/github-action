@international @footer  @desktop 
Feature: Platform Mod International Site Map
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links

@allure
    Scenario Outline: Platform Mod Check Sitemap Page is Displayed
        Given I am an "anonymous" user "desktop" on "<domain>" viewing "Home".
        When I am viewing the footer of the page
        And I select the "Sitemap" from the footer
        Then I should be taken to sitemap page

        Examples:
            | domain      |
            | Armenia     |
            | Australia   |
           