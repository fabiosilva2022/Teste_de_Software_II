describe('Página de cadastro, cenário de cadastro incorreto', () => {

  it('Deve verificar as mensagens de dados obrigatórios no cadastro', () => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');

    cy.getByData('register').click();
    cy.getByData('btnRegister').click();


    
    cy.contains('Email is required!').should('exist');
    cy.getByData('btnRegister').click();
    cy.contains('Full name is required!').should('be.visible');
    cy.contains('User name is required!').should('exist');
    cy.contains('Password is required!').should('exist');


  });
});