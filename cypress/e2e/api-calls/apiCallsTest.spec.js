/// <reference types="cypress" />

describe('Api Calls Testing Suite ...', () => {
    beforeEach('Open application', () => {
        cy.intercept('GET', 'https://fakestoreapi.com/products?sort=desc&limit=12', { fixture: 'products.json' })
        cy.openApplication();
    })

    it('First API call', () => {
        cy.log('We are in the application')
        cy.get('mat-grid-list').find('mat-grid-tile').each((item, index) => {
            cy
                .wrap(item)
        })
    })
})