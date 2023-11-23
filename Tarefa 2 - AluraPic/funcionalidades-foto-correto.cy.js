describe('Funcionalidades Foto, cenário de sucesso', () => {

    beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
    
        it('Deve cadastrar com sucesso uma foto', () => {
        cy.getByData('loginUserName').type('fabio');
        cy.getByData('loginPassword').type('12345678');
        cy.getByData('loginBtn').click();
        cy.get(':nth-child(2) > a > .fa').click();
        cy.get('[type="file"]').selectFile('fabio.jpeg', {force:true});
        cy.get('[placeholder="photo description"]').type('Fériaaasss');
        cy.get('[type="submit"]').click();
        cy.contains('Upload complete').should('be.visible');
        cy.get('.fa-home').click();
        cy.get('.img-thumbnail').should('have.length',1);
        cy.wait(1000);
        cy.get('.img-thumbnail').first().click();
        cy.get('.fa-heart-o').click();
        cy.wait(1000);
        cy.get('[formcontrolname="comment"]').type('Curtindo litoral!');
        cy.get('[type="submit"]').click();
        cy.wait(5000);
        cy.get('.fa-trash-o').click();
    
    })
})