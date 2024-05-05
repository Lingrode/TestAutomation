// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Scroll down to footer
// 5. Verify text 'SUBSCRIPTION'
// 6. Enter email address in input and click arrow button
// 7. Verify success message 'You have been successfully subscribed!' is visible

describe('Fourth Test', () => {
  it('Verify Subscription in home page', () => {
    cy.visit('http://automationexercise.com/');

    cy.title().should('eq', 'Automation Exercise');

    cy.scrollTo('0%', '95%');

    cy.contains('Subscription').should('be.visible');

    cy.get('#susbscribe_email').type('liliv78506@deligy.com');
    cy.get('#subscribe').click();

    cy.contains('You have been successfully subscribed!').should('be.visible');
  })
})