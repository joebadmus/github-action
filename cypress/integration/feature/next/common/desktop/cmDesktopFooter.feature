@international @footer  @desktop
Feature: International Footer Links
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links


    # Scenario Outline: Platform Mod enabled footer content are displayed correctly
    #     Given I am an "anonymous" user "desktop" on "<domain>" viewing "Home".
    #     When I am viewing the footer of the page
    #     Then I should see all footer content are displayed correctly
    #         | footer_content |
    #         | Social Media   |
    #         | MyAccount      |
    #         | Quickshop      |
    #         | LinkLists      |

    #     Examples:
    #         | domain      |
    #         | Austria     |
    #         | Canada      |
    #         | Czech       |
    #         | Mexico      |
    #         | Bulgaria    |
    #         | Bahrain     |
    #         | Croatia     |
    #         | Turkey      |
    #         | Thailand    |
    #         | Taiwan      |
    #         | USA         |
    #         | Sweden      |
    #         | Switzerland |
    #         | South_Korea |
    #         | Serbia      |
    #         | Romania     |
    #         | Qatar       |
    #         | Singapore   |



    # Scenario Outline: PlatMod enabled footer content are displayed correctly for duolingo
    #     Given I am an "anonymous" user "desktop" on "<domain>" viewing "Home".
    #     When I am viewing the footer of the page for the second language
    #     Then I should see all footer content are displayed correctly
    #         | footer_content |
    #         | Social Media   |
    #         | MyAccount      |
    #         | Quickshop      |
    #         | LinkLists      |

    #     Examples:
    #         | domain      | 
    #         | Canada      | 
    #         | Austria     | 
    #         | Bahrain     | 
    #         | Czech       | 
    #         | Bulgaria    | 
    #         | South_Korea | 
    #         | Spain       | 
    #         | Romania     | 
    #         | Qatar       | 



   Scenario Outline: PlatMod enabled footer all pages
        Given I am an "anonymous" user "desktop" on "<domain>" viewing "Home".
        When I navigate to the pages from home
            | page                |
            | Landing               |
            | Login               |
            | Favourites          |
            | Quickshop           |
            | ReturnsInformation  |
            | ShippingInformation |
            | TermsAndConditions  |
            | NextFranchise       |
            | PrivacyPolicy       |
            | ContactUs           |
            | Sitemap             |
            | ShoppingBag         |
            | ProductList         |
            # | AccountSummary      |
            
        Then I should see that the new platform mod footer is present

        Examples:
            | domain   |
            # | Canada   |
            # | Austria  |
            # | Bahrain  |
            | Bulgaria |
            # | Czech    |

