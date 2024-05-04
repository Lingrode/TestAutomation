Feature: Login User

  @loginCorrect
  Scenario: Login User with correct email and password
    Given Launch browser
    When Navigate to url 'https://automationexercise.com/'
    Then Verify that home page is visible successfully

    When Click on 'Signup / Login' button
    Then Verify 'Login to your account' is visible

    When Enter correct email address and password
    And Click 'Login' button

    When Click 'Delete Account' button
    Then Verify 'ACCOUNT DELETED!' is visible

  @loginIncorrect
  Scenario: Login User with incorrect email and password
    Given Launch browser
    When Navigate to url 'https://automationexercise.com/'
    Then Verify that home page is visible successfully

    When Click on 'Signup / Login' button
    Then Verify 'Login to your account' is visible

    When Enter incorrect email address and password
    And Click 'Login' button
    Then Verify error 'Your email or password is incorrect!' is visible