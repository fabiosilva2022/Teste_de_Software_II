/// <reference types="cypress"/>

Cypress.Commands.add('login',(user, password) => {
    cy.visit('https://front-cras.app.fslab.dev/')
    cy.get('#email').type('dev@gmail.com')
    cy.get('#senha').type('123');
    cy.get('.styles_button__dr0t2').click();
    cy.get('.styles_buttonMenu__mmyUS > img').click();

})