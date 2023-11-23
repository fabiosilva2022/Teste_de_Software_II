describe('Página de cadastro, cenário de cadastro com sucesso', () => {

  it('Deve realizar cadastro com sucesso', () => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');

    cy.getByData('register').click()
    cy.getByData('email').type('f.luiz.10@gmail.com')
    cy.getByData('fullName').type('Fabio Silva')
    cy.getByData('registerUserName').type('fabio')
    cy.getByData('registerPassword').type('12345678')
    cy.getByData('btnRegister').click()
    

  });
});