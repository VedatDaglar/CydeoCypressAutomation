/* eslint-disable no-undef */
export class NavigateTo {
  loginPage() {
    cy.visit(Cypress.env('login')); // Cypress.env : thakes the parameter takes the code and defines the paranthesis
  }
}

export const navigateTo = new NavigateTo();
