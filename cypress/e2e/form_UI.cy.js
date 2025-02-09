describe('Testes automatizados de UI para o formulário de cadastro de usuário', () => {

  beforeEach(() => {
    cy.visit('cypress/fixtures/form.html')
  })

  context('Validação dos campos obrigatórios', () => {
    it('Nome não preenchido', () => {
      cy.preencherFormulario('', 'harry@gmail.com', 'harry@gmail.com', 'Oitocaracteres123')
      cy.get('[data-cy="botao-submit"]').click()
      cy.get('[data-cy="erro-nome"]').should('have.text', 'O nome é obrigatório.')
    })

    it('Email não preenchido', () => {
      cy.preencherFormulario('Nome', ' ', 'harry@gmail.com', 'Oitocaracteres123')
      cy.get('[data-cy="botao-submit"]').click()
      cy.get('[data-cy="erro-email"]').should('have.text', 'O e-mail é obrigatório.')
    })

    it('Confirmação de E-mail não preenchido', () => {
      cy.preencherFormulario('Nome', 'harry@gmail.com', ' ', 'Oitocaracteres123')
      cy.get('[data-cy="botao-submit"]').click()
      cy.get('[data-cy="erro-confirmar-email"]').should('have.text', 'Os e-mails não coincidem.')
    })

    it('Senha não preenchida', () => {
      cy.preencherFormulario('Nome', 'harry@gmail.com', 'harry@gmail.com', '')
      cy.get('[data-cy="botao-submit"]').click()
      cy.get('[data-cy="erro-senha"]').should('have.text', 'A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número.')
    })

    it('Todos os campos não preenchidos', () => {
      cy.preencherFormulario('', '', '', '')
      cy.get('[data-cy="botao-submit"]').click()
      cy.get('[data-cy="erro-senha"]').should('have.text', 'A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número.')
    })
  })

})