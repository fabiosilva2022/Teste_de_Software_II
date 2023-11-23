
describe('Meu Perfil', () => {
  beforeEach(()=>{
    cy.visit("https://front-cras.app.fslab.dev")
    cy.get('#email').type('arao_couves@gmail.com')
    cy.get('#senha').type('Ab@2022ifro')
    cy.get('.styles_button__dr0t2').click();
    cy.get('.styles_buttonMenu__mmyUS > img').click();
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/listar"] > .styles_containerLinkText__Rz0Qr').click();
  })


  it('Deve alterar os campos e a senha', () => {
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/perfil"] > .styles_containerLinkText__Rz0Qr').click();
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > .styles_containerButtonHidden__TaoLq > img').click();
    cy.get('.styles_button__dr0t2').click();
    cy.get('#senha').type('Ab@2022ifro');
    cy.get('#confirmarSenha').type('Ab@2022ifro');
    cy.get('.styles_container__NSLBw > .styles_button__dr0t2').click();
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > div.styles_containerLink__L2Kg7 > .styles_textButtonLogout__4V0gM > img').click();
    cy.get(':nth-child(2) > .styles_button__dr0t2').click();
    cy.await('1000')
  })

  it('Deve realizar o login para confirmar a alteração da senha', () => {
    cy.visit("https://front-cras.app.fslab.dev")
    cy.get('#email').type('arao_couves@gmail.com')
    cy.get('#senha').type('Ab@2022ifro')
    cy.get('.styles_button__dr0t2').click();
  })
  
})

