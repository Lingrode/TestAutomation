Feature: Verify Pages

  @page
  Scenario: Verify Test Cases Page
    Given I launch the browser
    When I navigate to url 'https://automationexercise.com/'
    Then I verify that the home page is visible successfully

    When I click "Test Cases" menu button
    Then I verify that navigated to test cases page successfully