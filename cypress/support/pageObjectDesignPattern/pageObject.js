
export class NavigationPage {
    cart() {
        cy.get('[data-cy="shopping_cart_data_cy"]').click()
        cy.get('#mat-menu-panel-0')
            .contains('View Cart')
            .click()
    }
}

export const navigateTo = new NavigationPage();