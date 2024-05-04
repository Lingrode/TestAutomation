Feature: Review

  @review
  Scenario: Add review on product
    Given User launch browser
    When User navigate to url 'https://automationexercise.com/'
    And Click on 'Products' button
    Then Verify user is navigated to ALL PRODUCTS page successfully

    When Click on 'View Product' button
    Then Verify 'Write Your Review' is visible

    When Enter name, email and review
    And Click 'Submit' button
    Then Verify success message 'Thank you for your review.'