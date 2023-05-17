/// <reference types="cypress" />

describe('Context: tests ', () => {
  beforeEach(() => {
    // run before each test case, beforeMethod in TestNG
    cy.clearCookies();
    cy.visit('/radio_buttons');
  });

  it('Check radio buttons', () => {
    cy.get('#blue').click();

    cy.get('#red').click();

    cy.get('#yellow').click();

    cy.get('#black').click();

    cy.get('#basketball').click();

    cy.get('#football').click();

    cy.get('#hockey').click();

    cy.get('#water_polo').click();
  });
});
