describe('Página de login, cenário sucesso', () => {
    it('Deve realizar login com sucesso', () => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

cy.getByData('loginUserName').type('Lucineia');
cy.getByData('loginPassword').type('teste');
cy.getByData('loginBtn').click();
cy.getByData('register').click();
});
});