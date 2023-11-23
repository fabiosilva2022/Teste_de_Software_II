/// <reference types="cypress"/>
describe('pessoas', () => {
    beforeEach(()=>{
        cy.visit("https://front-cras.app.fslab.dev");
        cy.get('#email').type('dev@gmail.com');
        cy.get('#senha').type('123');
        cy.get('.styles_button__dr0t2').click();
        cy.get('.styles_buttonMenu__mmyUS > img').click()
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"] > .styles_containerLinkText__Rz0Qr').click();
    })
    it.only('Deve cadastrar pessoa com todos os campos preenchidos', () => {
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > .styles_containerButtonHidden__TaoLq > img').click();
        cy.get('.styles_header__BM6ek').click();     
        cy.get(':nth-child(4) > .styles_container__NSLBw > #buscar').click();
        cy.get('#cpf').type('000.000.000-00');
        cy.get('#nit').type('001.00005-3');
        cy.get('#dataNascimento').type('1983-04-16');
        cy.get('#estrangeiro').select('Não');
        cy.get('#pais').type('Brasil');
        cy.get('#estado').select('Rondônia');
        cy.get('#cidade').select('Vilhena');
        cy.get('#bairro').type('Barão');
        cy.get('#logradouro').type("Rua Lá de Casa");
        cy.get('#cep').type('76984-100');
        cy.get('#numero').type('1250');
        cy.get('#telefone').type('(69) 99900-0000');
        cy.get('#telefoneContato').type('(69) 98888-0000');
        cy.get('#nome').type('Fredderico Fretas');
        cy.get('[type="submit"]').click();

    })
    it('Deve retornar msg de campos obrigatórios', () => {
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"] > .styles_containerLinkText__Rz0Qr').click();
        cy.get(':nth-child(4) > .styles_container__NSLBw > #buscar').click();
        cy.get('[type="submit"]').click();
        cy.get ('contains','Nome é obrigatório');
        cy.get('#nome').should('contains','Data de nascimento é obrigatório');

    })
    it('Deve buscar uma pessoa pelo nome e alterar seus dados', () => {
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"] > .styles_containerLinkText__Rz0Qr').click();
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
        cy.get(':nth-child(1) > #nome').should('Frederico Lopres Silva');
        cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click();
        cy.get(':nth-child(10) > :nth-child(5) > .styles_container__NSLBw > [alt="Editar pessoa"]').click();
        cy.get('#nome').type('Frederico Lopres Pacheco');
        cy.get('[type="submit"]').click();
    })
    it('Deve buscar uma pessoa pelo cpf alterar seus dados', () => {
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"] > .styles_containerLinkText__Rz0Qr').click();
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
        cy.get(':nth-child(2) > #nome').type('700.131.601-04');
        cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click();
        cy.get('[alt="Editar pessoa"]').click();
        cy.get('#logradouro').type('Rua Abeirada');
        cy.get('[type="submit"]').click();
    }) 
    it('Deve cadastrar atendimento para a pessoa', () => {
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"] > .styles_containerLinkText__Rz0Qr').click();
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"]').click();
        cy.get(':nth-child(2) > #nome').type('200.001.849-82');
        cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click();
        cy.get('[alt="Cadastrar atendimento"]').click();
        cy.get('#dataAtendimento').type('2023-12-11');
        cy.get('#tipo').select('Passe Livre Estadual');
        cy.get('#observacao').type('Agora vai');
        cy.get('[type="submit"]').click();
    }) 
    it('Deve visualizar os dados da pessoa', () => {
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"] > .styles_containerLinkText__Rz0Qr').click();
    cy.get(':nth-child(1) > #nome').type('Abdias Carvalho');
    cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Informações da pessoa"]').click();
    
    })
    it('Deve buscar pessoa listar os atendimentos recebidos e aterar os dados', () => {
        cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/pessoas/listar"] > .styles_containerLinkText__Rz0Qr').click();
        cy.get(':nth-child(1) > #nome').should('Abdias Carvalho');
        cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Ver atendimentos dessa pessoa"]').click();
        cy.get('[type="submit"]').click();
        })
    


})