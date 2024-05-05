// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Add products to cart
// 5. Click 'Cart' button
// 6. Verify that cart page is displayed
// 7. Click Proceed To Checkout
// 8. Click 'Register / Login' button
// 9. Fill all details in Signup and create account
// 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
// 11. Verify ' Logged in as username' at top
// 12.Click 'Cart' button
// 13. Click 'Proceed To Checkout' button
// 14. Verify Address Details and Review Your Order
// 15. Enter description in comment text area and click 'Place Order'
// 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
// 17. Click 'Pay and Confirm Order' button
// 18. Verify success message 'Your order has been placed successfully!'
// 19. Click 'Delete Account' button
// 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button

describe('Fifth Test', () => {
  it('Place Order: Register while Checkout', () => {
    cy.visit('http://automationexercise.com/');

    cy.title().should('eq', 'Automation Exercise');

    cy.contains('Add to cart').click();
    cy.get('[data-dismiss="modal"]').click();
    cy.get('a[data-product-id="3"]').first().click();
    cy.contains('View Cart').click();

    cy.title().should('eq', 'Automation Exercise - Checkout');

    cy.get('.check_out').click();

    cy.get('.modal-content a[href="/login"]').click();

    cy.get('[name="name"]').type('Lingrode');
    cy.get('[data-qa="signup-email"]').type('yemobo7232@amankro.com');
    cy.get('[data-qa="signup-button"]').click();

    cy.contains('Enter Account Information').should('be.visible');

    cy.get('[data-qa="title"] input[value="Mr"]').check();
    cy.get('[data-qa="password"]').type('testtesting123');
    cy.get('[data-qa="days"]').select('21');
    cy.get('[data-qa="months"]').select('September');
    cy.get('[data-qa="years"]').select('2002');

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

    cy.contains('Cart').click();

    cy.get('.check_out').click();

    cy.contains('Address Details').should('be.visible');
    cy.contains('Review Your Order').should('be.visible');

    cy.get('[name="message"]').type('Hello');
    cy.contains('Place Order').click();

    cy.get('[data-qa="name-on-card"]').type('Illia');
    cy.get('[data-qa="card-number"]').type('1234567890123456');
    cy.get('[data-qa="cvc"]').type('000');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').type('2100');
    cy.contains('Pay and Confirm Order').click();

    cy.contains('Order Placed!').should('be.visible');

    cy.contains('Delete Account').click();
    cy.contains('Account Deleted!').should('be.visible');

    cy.contains('Continue').click();
  })
})