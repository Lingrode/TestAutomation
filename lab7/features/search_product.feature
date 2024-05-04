Feature: Search Products

  @search
  Scenario: Search Product
    Given User launch browser
    When User navigate to url 'https://automationexercise.com/'
    Then User verify that home page is visible successfully

    When Click on 'Products' button
    Then Verify user is navigated to ALL PRODUCTS page successfully

    When Enter product name in search input and click search button
    And Verify that 'SEARCHED PRODUCTS' is visible
    Then Verify all the products related to search are visible