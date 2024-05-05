// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible
// 6. Enter name and email address
// 7. Click 'Signup' button
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
// 9. Fill details: Title, Name, Email, Password, Date of birth
// 10. Select checkbox 'Sign up for our newsletter!'
// 11. Select checkbox 'Receive special offers from our partners!'
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
// 13. Click 'Create Account button'
// 14. Verify that 'ACCOUNT CREATED!' is visible
// 15. Click 'Continue' button
// 16. Verify that 'Logged in as username' is visible
// 17. Click 'Delete Account' button
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

describe('Second Test', () => {
  it('Register User', () => {
    cy.visit('http://automationexercise.com/');

    cy.title().should('eq', 'Automation Exercise');

    cy.contains('Signup / Login').click();

    cy.contains('New User Signup!').should('be.visible');

    cy.get('[name="name"]').type('Lingrode');
    cy.get('[data-qa="signup-email"]').type('naxigoh902@deligy.com');
    cy.get('[data-qa="signup-button"]').click();

    cy.contains('Enter Account Information').should('be.visible');

    cy.get('[data-qa="title"] input[value="Mr"]').check();
    cy.get('[data-qa="password"]').type('testtesting123');
    cy.get('[data-qa="days"]').select('21');
    cy.get('[data-qa="months"]').select('September');
    cy.get('[data-qa="years"]').select('2002');
    cy.get('input[name="newsletter"]').check();
    cy.get('input[name="optin"]').check();

    cy.get('[data-qa="first_name"]').type('Illia');
    cy.get('[data-qa="last_name"]').type('Hrymalo');
    cy.get('[data-qa="company"]').type('Nothing');
    cy.get('[data-qa="address"]').type('Addr1');
    cy.get('[data-qa="address2"]').type('Addr2');
    cy.get('[data-qa="country"]').select('Canada');
    cy.get('[data-qa="state"]').type('Ukraine');
    cy.get('[data-qa="city"]').type('Kyiv');
    cy.get('[data-qa="zipcode"]').type('91827');
    cy.get('[data-qa="mobile_number"]').type('380777777777');


    cy.get('[data-qa="create-account"]').click();

    cy.contains('Account Created!').should('be.visible');
    cy.contains('Continue').click();


    cy.contains('Logged in as Lingrode').should('be.visible');

    cy.contains('Delete Account').click();
    cy.contains('Account Deleted!').should('be.visible');

    cy.contains('Continue').click();

  })
})