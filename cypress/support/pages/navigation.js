/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
export class NavigateTo {
  loginPage() {
    cypress.visit(Cypress.env('login'));
  }
}

export const navigateTo = new NavigateTo();
