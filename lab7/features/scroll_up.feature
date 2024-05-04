Feature: Verify Scroll Up

  @scrollWithArrow
  Scenario: Verify Scroll Up using 'Arrow' button and Scroll Down functionality
    Given User launch browser
    When User navigate to url 'https://automationexercise.com/'
    Then User verify that home page is visible successfully

    When Scroll down page to bottom
    Then Verify 'SUBSCRIPTION' is visible

    When Click on arrow at bottom right side to move upward
    Then Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen

  @scrollWithoutArrow
  Scenario: Verify Scroll Up without 'Arrow' button and Scroll Down functionality
    Given User launch browser
    When User navigate to url 'https://automationexercise.com/'
    Then User verify that home page is visible successfully

    When Scroll down page to bottom
    Then Verify 'SUBSCRIPTION' is visible

    When Scroll up page to top
    Then Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen