describe('Todo', () => {
  it('Adds 1 item', () => {
    
    cy.visit('http://todomvc.com/examples/vue/')
      .get('input.new-todo')
      .type('First Todo{enter}')
      .get('ul.todo-list li')
      .should('have.length',1)
      .should(el => {
        expect(el.text().trim()).to.eq('First Todo');
      })
      .get('footer.footer span.todo-count')
      .should(el => {
        expect(el.text().trim()).to.eq('1 item left');
      });

  });

  it('Adds 2 items', () => {
    cy.visit('http://todomvc.com/examples/vue/')
      .get('input.new-todo')
      .type('First Todo{enter}')
      .get('ul.todo-list li')
      .should('have.length',1)
      .should(el => {
        expect(el.text().trim()).to.eq('First Todo');
      })
      .get('footer.footer span.todo-count')
      .should(el => {
        expect(el.text().trim()).to.eq('1 item left');
      })
      .get('input.new-todo')
      .type('Second Todo{enter}')
      .get('ul.todo-list li')
      .should('have.length',2)
      .get('ul.todo-list li:nth-child(1)')
      .should(el => {
        expect(el.text().trim()).to.eq('First Todo');
      })
      .get('ul.todo-list li:nth-child(2)')
      .should(el => {
        expect(el.text().trim()).to.eq('Second Todo');
      });

  });
});