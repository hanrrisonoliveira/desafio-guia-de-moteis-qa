import { formularioLocators } from "./locators"

Cypress.Commands.add('preencherFormulario', (nome, email, confirmarEmail, senha) => {
    
    const preencherOuLimpar = (seletor, valor) => {
        if (valor) {
            cy.get(seletor).type(valor)
        } else {
            cy.get(seletor).clear()
        }
    }

    preencherOuLimpar(formularioLocators.nome, nome)
    preencherOuLimpar(formularioLocators.email, email)
    preencherOuLimpar(formularioLocators.confirmarEmail, confirmarEmail)
    preencherOuLimpar(formularioLocators.senha, senha, { log: false })
})