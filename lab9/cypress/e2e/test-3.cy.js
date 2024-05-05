// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Test Cases' button
// 5. Verify user is navigated to test cases page successfully

describe('Third Test', () => {
  it('Verify Test Cases Page', () => {
    cy.visit('http://automationexercise.com/');

    cy.title().should('eq', 'Automation Exercise');

    cy.contains('Test Cases').click();

    cy.title().should('eq', 'Automation Practice Website for UI Testing - Test Cases');
  })
})