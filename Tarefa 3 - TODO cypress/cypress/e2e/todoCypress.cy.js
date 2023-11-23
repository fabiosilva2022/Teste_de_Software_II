describe('Aplicativo de tarefas cypress', () => {
  beforeEach(()=>{
    cy.visit('https://example.cypress.io/todo')
  })
  
  it('Deve exibe os itens de tarefas por padrão do aplicativo', () => {
    cy.get('.todo-list li').should('have.length',2);
    cy.get('.todo-list li').first().should('have.text','Pay electric bill');
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog');    
  });

  it('Deve adcionar um novo ítens de tarefas', () => {
    const novoItem = 'Comida para gato'
    cy.get('[data-test="new-todo"]').type(`${novoItem}{enter}`);
    cy.get('.todo-list li').should('have.length', 3).last().should('have.text',novoItem);
  });
  it('Deve marcar um item como concluído', () => {      });
    context('Usando uma tarefa verificada', () => {
    
      beforeEach(() => {

        cy.contains('Pay electric bill')
          .parent()
          .find('input[type=checkbox]')
          .check()   }); 
          
          it('Deve filtrar tarefas incompletas', () => {
            cy.contains('Active').click();
            cy.get('.todo-list li').should('have.length', 1);
          });
          it('Deve filtrar por tarefas concluídas', () => {
            cy.contains('Completed').click();
            cy.get('.todo-list li').should('have.length', 1);
          });
          it('Deve excluir todas as tarefas concluídas', () => {
            cy.contains('Clear completed').click();
          });
      });
      
})