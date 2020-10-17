Feature: Login

    I want to login  Conduit
    @smoke
    Scenario: Conduit Login
        Given I Open the conduit loging page
        When I type in username and password
            | username      | password |
            | *****@***.com | ****4    |
        And I click on sign in button
        Then "Your Feed" should be shown

    @smoke
    Scenario: Conduit Login with dt
        Given I Open the conduit loging page
        When I signed with the below details
            | username | *****@***.com |
            | password | ****4         |
        And I click on sign in button
        Then "Your Feed" should be shown


    Scenario: Conduit Login With Feature
        Given I Open the conduit loging page
        When I login using my credentials
        And I click on sign in button
        Then "Your Feed" should be shown