describe('Página de login, login incorreto', () => {
    it('Deve verificar as mensagens de dados obrigatórios no login', () => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

        cy.contains('Password is required!').should('exist')
        cy.getByData('loginUserName').type('Fabio');
        cy.getByData('loginPassword').type('teste12');
        cy.getByData('loginBtn').click()
        cy.on('window:alert',(alertText) => {
        expect(alertText).to.equal('Invalid username or password')
        cy.contains('lUser name is required!').should('exist')
});



});
});