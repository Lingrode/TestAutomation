Feature: Verify Products

  @products
  Scenario: Verify All Products and product detail page
    Given User launch browser
    When User navigate to url 'https://automationexercise.com/'
    Then User verify that home page is visible successfully

    When Click on 'Products' button
    And Verify user is navigated to ALL PRODUCTS page successfully
    Then The products list is visible

    When Click on 'View Product' of first product
    And User is landed to product detail page
    Then Verify that detail detail is visible: product name, category, price, availability, condition, brand