/// <reference types="cypress" />

import { navigateTo } from "../support/pageObjectDesignPattern/pageObject"

describe('Test with Page Objects', () => {
    beforeEach('open application', () => {
        cy.visit('/')
    })

    it('navigation across the pages', () => {
        navigateTo.cart()
    })

    // it.only('Using Global Commands', () => {
    //     cy.openApplication();
    // })
})