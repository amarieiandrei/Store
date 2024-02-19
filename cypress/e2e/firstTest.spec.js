/// <reference types="cypress" />

describe('First test suite', () => {

    beforeEach('Navigate to application', () => {
        cy.visit('/')
    })

    it('first test', () => {
        // by Tag name
        cy.get('button')

        // by ID
        cy.get('#shopping_cart')

        // by Class value
        cy.get('.mat-mdc-menu-trigger.mdc-icon-button.mat-mdc-icon-button.mat-unthemed.mat-mdc-button-base')

        // by Attribute name
        cy.get('[routerlink]')

        // by Attribute and value
        cy.get('[routerlink="home"]')

        // by Entire Class value
        cy.get('[class="mat-mdc-menu-trigger mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base"]')

        // by two attributes
        cy.get('[routerlink="home"][href="/home"]')

        // by tag, attribute id and class
        cy.get('button#shopping_cart.mat-mdc-menu-trigger.mdc-icon-button.mat-mdc-icon-button.mat-unthemed.mat-mdc-button-base')

        // cypress test ID
        cy.get('[data-cy="shopping_cart_data_cy"]').click()
    })

    it.only('second test', () => {
        cy.get('[data-cy="categories"]').click()
        cy.get('[data-cy="category"]').contains('jewelery').click()

        // Theory
        // get() - find elements on the page by locator globally
        // find() - find child elements by locator
        // contains() - find elements by HTML text and by text and locator

        cy.get('mat-grid-list').find('mat-grid-tile').contains('electronics');
    })
})