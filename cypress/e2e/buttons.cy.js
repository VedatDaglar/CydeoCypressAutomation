

/// <reference types="cypress" />

describe('Context: My First Tests', () => {

    

    beforeEach(() => {
        // run before each test case, beforeMethod in TestNG
        cy.clearCookies();
        cy.visit('/multiple_buttons');
    })

   

    
    it('Check different button actions', () => {
        
        // select a button with text
        cy.contains('Button 2').should('be.visible').click();

        // assertion
        cy.contains('Clicked on button two!').should('be.visible');

    })  



    


})