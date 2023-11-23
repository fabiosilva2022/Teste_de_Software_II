describe('Tipo de atendimento', () => {
  beforeEach(()=>{
      cy.visit("https://front-cras.app.fslab.dev")
      cy.get('#email').type('dev@gmail.com');
      cy.get('#senha').type('123'); 
      cy.get('.styles_button__dr0t2').click();
      cy.get('.styles_buttonMenu__mmyUS > img').click();

    })

  it('Deve cadastrar tipo de atendimento com todos os campos preenchidos', () => {
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"] > .styles_containerLinkText__Rz0Qr').click();
      cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click();
      cy.get('#nome').type('FlS');
      cy.get('[type="submit"]').click();
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"]').click();
      
  })

   it('Deve retornar msg de campos obrigatórios', () => {
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"]').click();
      cy.get('.styles_buttonMenu__mmyUS > img').click();
      cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click();
      cy.get('#nome')         
      cy.get('[type="submit"]').click();
      cy.contains('Nome é obrigatório');

  })

  it('Deve pesquisar um tipo de atendimento e alterar seu nome', ()=>{
      cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"]').click();
      cy.get('.styles_buttonMenu__mmyUS > img').click();
      cy.get('#tipo').type('Fls');
      cy.get(':nth-child(2) > .styles_container__NSLBw > #buscar').click();
      cy.get('[alt="Editar tipo de atendimento"]')
      cy.get('#nome').type('FLS')
      cy.get('[type="submit"]').click();
     

     })
})
