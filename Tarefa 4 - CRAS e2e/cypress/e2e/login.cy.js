/// <reference types="cypress"/>
describe('login', () => {
    it('Deve realizar o login com sucesso- cenário de  sucesso', () => {
      cy.visit('https://front-cras.app.fslab.dev/')
      cy.get('#email').type('adelson.moreira7293298820@gmail.com')
      cy.get('#senha').type('123')
      cy.get('.styles_button__dr0t2').click()
    })

    it('Deve retornar mensagem de erro devido usuário inválido  - cenário de insucesso', () => {
      cy.visit('https://front-cras.app.fslab.dev/')
      cy.get('#email').type('adelson.moreira7293298820@gmail.com')
      cy.get('#senha').type('1234')
      cy.get('.styles_button__dr0t2').click()
      cy.contains('Usuário ou Senha inválida!')
    })

    it('Deve retornar msg dos campos obrigatório para login - cenário de insucesso', () => {
      cy.visit('https://front-cras.app.fslab.dev/')
      cy.get('#email')
      cy.get('#senha').type('123')
      cy.get('.styles_button__dr0t2').click()
      cy.contains('O email é obrigatório')
    })  
    
    it('Deve retornar msg dos campos obrigatório para login - cenário de insucesso', () => {
      cy.visit('https://front-cras.app.fslab.dev/')
      cy.get('#email').type('adelson.moreira7293298820@gmail.com')
      cy.get('#senha')
      cy.get('.styles_button__dr0t2').click()
      cy.contains('A senha é obrigatória')
    })
  })