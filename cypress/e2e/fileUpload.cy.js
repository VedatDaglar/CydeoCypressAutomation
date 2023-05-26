/* eslint-disable prettier/prettier */
/// <reference types="cypress" />

describe('Cypress File Upload Tests', () => {

    /**
     * Step 1:
     * In order to upload files in Cypress, we need to install plugin 
     * We will run following command:
     * npm install -dev cypress-file-upload
     * 
     * Step 2:
     * We need to import necessary command to our project
     * in our support folder we have commands.js file : this file is a good place for putting our utility methods (functions)
     * add following line:
     * import 'cypress-file-upload';
     * 
     * Step 3:
     * The file that you want to upload should be in your fixture folder
     */
   
    beforeEach(() => {
      // run before each test case, beforeMethod in TestNG
      cy.clearCookies();
      cy.visit('/upload');
    });
   
    it('Check Upload Function', () => {
    // loacte for choose file button
    cy.get('input#file-upload').attachFile('Git.png')
    // click on upload button
    cy.get('#file-submit').click();
    // assert that path message is displayed
    cy.get('#uploaded-files').then(() => {
        cy.contains('Git.png').should('be.visible');
    });

    });
    
});    