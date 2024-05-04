Feature: Cart

  @cart
  Scenario: Add to cart from Recommended items
    Given User launch browser
    When User navigate to url 'https://automationexercise.com/'
    And Scroll to bottom of page
    Then Verify 'RECOMMENDED ITEMS' are visible

    When Click on 'Add To Cart' on Recommended product
    And Click on 'View Cart' button
    Then Verify that product is displayed in cart page