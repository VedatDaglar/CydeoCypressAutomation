/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/// <reference types="cypress" />

import faker from 'faker';

describe('Input Forms Tests', () => {
  beforeEach('Navigate to registration page', () => {
    cy.clearCookies();
    cy.visit('/registration_form');
  });

  it.skip('Check different input box fields and verify', () => {
    // fill the form for username and other info
    cy.get('input[name="firstname"]').type('Mike');
    cy.get('input[name="lastname"]').type('Brown');
    cy.get('input[name="username"]').type('ChuckNorris');
    /**
     * Math.random(): creates a number between 0 - 1 ~ 0.005678
     * Math.floor : makes it a whole number
     */
    let email = `formtest${Math.floor(100000 + Math.random() * 900000)}@cydeo.com`;
    cy.get('input[name="email"]').type(email);

    let password = `test${Math.floor(100000 + Math.random() * 900000)}`;
    cy.get('input[name="password"]').type(password);

    let phoneNumber = `555-000-${Math.floor(1000 + Math.random() * 9000)}`; // four digit extension number
    
    cy.get('input[name="phone"]').type(phoneNumber);
    cy.get('input[name="birthday"]').type('02/23/1985');
    
  });

  it.skip('Check different radio buttons actions ', () => {
        cy.get('.radio')
        .find('[type=radio]')
        .then((radio => {
            // get all radio buttons,  select the first one and verify that it is checked
            cy.wrap(radio).first().check().should('be.checked'); // cypress works in a chainable functions structure
            /**
             * radio : is a Jquery element, cy.wrap(radio) : turns it into Cypress Object so that I can use Cypress functions 
             *  first() : selects first element
             *  check() : checks it out
             *  should() : verify whatever I provide as parameter 'be.checked'
             */
            // get all radio buttons, select the second one and verify that it is checked and confirmation label is visible
            cy.wrap(radio).eq(1).check().should('be.checked');
            cy.get('[data-bv-icon-for*="gender"]').should('be.visible'); // common function used in tests 
            // third radio button is NOT checked
            cy.wrap(radio).eq(2).should('not.be.checked');
        }))
  });

  it('Check different checkbox actions',() => {
    // get all checkboxes, select JAVA and verify

    cy.get('[type*="checkbox"]').then((checkbox) => {
      cy.wrap(checkbox).eq(1).check().should('be.checked');
      // uncheck JAVA
      cy.wrap(checkbox).eq(1).uncheck().should('not.be.checked');
    })


  })



});
