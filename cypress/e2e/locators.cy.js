/// <reference types="cypress" />

describe('Context: My First Tests', () => {
  beforeEach(() => {
    // run before each test case, beforeMethod in TestNG
    cy.clearCookies();
    cy.visit('/login');
  });

  it('Check different locators strategies', () => {
    // By CSS locator (xpath doesn't work)
    cy.get("input[name='username']").type('CydeoStudent'); // every statement creates an object to be interacted and next command makes operation to the object created at the previous statement

    cy.get("[type='text']").clear(); // clear what is typed

    // tag name
    cy.get('input').each((item, index, list) => {
      // assert the length of the list is 2
      expect(list).to.have.length(2);
      expect(item).to.have.attr('type');
    });

    // by attribute name
    cy.get('[type]');

    // by class name
    cy.get('.btn.btn-primary');

    // by id
    cy.get('#wooden_spoon');

    // if I want to use text : no xpath in cypress, but it is possible with a different approach
    cy.get('button').should('contain', 'Login').click();
  });

  it('Check finding elements by travelling through DOM', () => {
    // Travel to find the login button : locate usernam box - got to parent form - then find button
    cy.get('input[name="username"]')
      .parents('form')
      .find('button')
      .should('contain', 'Login')
      .click();
  });

  it('Check different type of Assertions', () => {
    // Cypress itself bundles assertions provided by Chai, Sino and JQuery libraries

    // Should Assertion : does the Assertion directly ont the object itself
    cy.get('#wooden_spoon').should('contain', 'Login').and('have.class', 'btn btn-primary');

    // expect assertion: creates a subject of our test, then you implement different actions
    cy.get('#wooden_spoon').then((buttonElement) => {
      expect(buttonElement).to.have.text('Login');
      expect(buttonElement).to.have.class('btn btn-primary');
    });
  });
});
