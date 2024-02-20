/// <reference types="cypress" />

describe('Api Calls Testing Suite ...', () => {
    beforeEach('Open application', () => {
        // cy.intercept('GET', 'https://fakestoreapi.com/products?sort=desc&limit=12', { fixture: 'products.json' })
        // cy.intercept('GET', 'https://fakestoreapi.com/products*', { fixture: 'products.json' })
        cy.openApplication();
    })

    it('First API call', () => {
        cy.log('We are in the application')
        cy.get('mat-grid-list').find('mat-grid-tile').each((item, index) => {
            cy
                .wrap(item)
        })
    })

    it('Second API call', () => {
        cy.log('We are in the application');
        cy.get('mat-grid-list mat-grid-tile').then(tileList => {
            expect(tileList[0]).to.contain('1')
            expect(tileList[1]).to.contain('2')
        })

        cy.fixture('products').then(product => {
            const productLink = product[0].price;
            product[0].price = 22;
            expect(productLink).to.be.not.eq(product[0].price)
        })
    })

    it.only('Third API call', () => {
        cy.log('We are in the application');
        cy.get('[data-cy="categories"]').click();
        cy.intercept('GET', 'https://fakestoreapi.com/products/category/women\'s%20clothing?sort=desc&limit=12', { fixture: 'womenProducts.json' });
        cy.get('[data-cy="category"]').contains('women\'s clothing').click();
    })
})