// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Click on 'Products' button
// 4. Verify that Brands are visible on left side bar
// 5. Click on any brand name
// 6. Verify that user is navigated to brand page and brand products are displayed
// 7. On left side bar, click on any other brand link
// 8. Verify that user is navigated to that brand page and can see products

describe('First Test', () => {
  it('View & Cart Brand Products', () => {
    cy.visit('http://automationexercise.com/');

    cy.get('a[href="/products"]').click()

    cy.get('.brands_products h2').should('be.visible');

    cy.get('.brands_products ul li:nth-child(4)').click();

    cy.url().should('include', '/brand_products/Mast%20&%20Harbour');

    cy.get('.brands_products ul li:nth-child(1)').click();

    cy.url().should('include', '/brand_products/Polo');
  })
})