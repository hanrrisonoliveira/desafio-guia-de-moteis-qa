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
      cy.get('[data-cy="erro-confirmar-email"]').should('have.text', 'Os e-mails não coincidem.')
    })

    it('Confirmação de E-mail não preenchido', () => {
      cy.preencherFormulario('Nome', 'harry@gmail.com', ' ', 'Oitocaracteres123@!')
      cy.get('[data-cy="botao-submit"]').click()
      cy.get('[data-cy="erro-confirmar-email"]').should('have.text', 'A confirmação de e-mail é obrigatória.')
    })

    it('Senha não preenchida', () => {
      cy.preencherFormulario('Nome', 'harry@gmail.com', 'harry@gmail.com', '')
      cy.get('[data-cy="botao-submit"]').click()
      cy.get('[data-cy="erro-senha"]').should('have.text', 'A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número.')
    })

    it('Todos os campos não preenchidos', () => {
      cy.preencherFormulario('', '', '', '')
      cy.get('[data-cy="botao-submit"]').click()
      cy.get('[data-cy="erro-nome"]').should('have.text', 'O nome é obrigatório.')
      cy.get('[data-cy="erro-email"]').should('have.text', 'O e-mail é obrigatório.')
      cy.get('[data-cy="erro-confirmar-email"]').should('have.text', 'A confirmação de e-mail é obrigatória.')
      cy.get('[data-cy="erro-senha"]').should('have.text', 'A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número.')
    })
  })

  context('Validações de senha', () => {
    it('Senha com menos de 8 caracteres', () => {
      cy.preencherFormulario('Nome', 'harry@gmail.com', 'harry@gmail.com', 'Passe1')
      cy.get('[data-cy="botao-submit"]').click()
      cy.get('[data-cy="erro-senha"]').should('have.text', 'A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número.')
    })

    it('Senha com 8 caracteres sem uma letra maiúscula e um número', () => {
      cy.preencherFormulario('Nome', 'harry@gmail.com', 'harry@gmail.com', 'parceiro')
      cy.get('[data-cy="botao-submit"]').click()
      cy.get('[data-cy="erro-senha"]').should('have.text', 'A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número.')
    })

    it('Senha com 8 caracteres contendo apenas uma letra maiúscula', () => {
      cy.preencherFormulario('Nome', 'harry@gmail.com', 'harry@gmail.com', 'Parceiro')
      cy.get('[data-cy="botao-submit"]').click()
      cy.get('[data-cy="erro-senha"]').should('have.text', 'A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número.')
    })

    it('Senha com 8 caracteres contendo apenas um número', () => {
      cy.preencherFormulario('Nome', 'harry@gmail.com', 'harry@gmail.com', 'parce1ro')
      cy.get('[data-cy="botao-submit"]').click()
      cy.get('[data-cy="erro-senha"]').should('have.text', 'A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número.')
    })

    it('Senha com 8 caracteres contendo uma letra maiúscula e um número', () => {
      cy.preencherFormulario('Nome', 'harry@gmail.com', 'harry@gmail.com', 'Parce1ro')
      cy.get('[data-cy="botao-submit"]').click()
      cy.get('[data-cy="mensagem-sucesso"]').should('have.text', 'Cadastro realizado com sucesso!')
    })

    it('Senha com mais de 8 caracteres contendo uma letra maiúscula e um número', () => {
      cy.preencherFormulario('Nome', 'harry@gmail.com', 'harry@gmail.com', 'Parce1roJp')
      cy.get('[data-cy="botao-submit"]').click()
      cy.get('[data-cy="mensagem-sucesso"]').should('have.text', 'Cadastro realizado com sucesso!')
    })

    it('Senha com mais de 8 caracteres contendo uma letra maiúscula', () => {
      cy.preencherFormulario('Nome', 'harry@gmail.com', 'harry@gmail.com', 'Maisdeumaletra')
      cy.get('[data-cy="botao-submit"]').click()
      cy.get('[data-cy="erro-senha"]').should('have.text', 'A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número.')
    })

    it('Senha com mais de 8 caracteres contendo um número', () => {
      cy.preencherFormulario('Nome', 'harry@gmail.com', 'harry@gmail.com', 'oitocaract3res')
      cy.get('[data-cy="botao-submit"]').click()
      cy.get('[data-cy="erro-senha"]').should('have.text', 'A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número.')
    })
    
    it('Senha com mais de 8 caracteres contendo uma letra maiúscula e um número', () => {
      cy.preencherFormulario('Nome', 'harry@gmail.com', 'harry@gmail.com', 'Maisde0itocaracteres')
      cy.get('[data-cy="botao-submit"]').click()
      cy.get('[data-cy="mensagem-sucesso"]').should('have.text', 'Cadastro realizado com sucesso!')
    })
  })

})