## Objetivo do teste
O candidato deve escrever um teste automatizado para um formulário de cadastro de usuário, validando os seguintes requisitos:

✅ **Campos obrigatórios →** O formulário não deve permitir envio sem preencher todos os campos.

✅ **Senha forte →** A senha deve ter **mínimo 8 caracteres, 1 letra maiúscula e 1 número.**

✅ **Confirmação de e-mail →** O e-mail digitado no campo "Confirmação de E-mail" deve ser **igual ao e-mail principal.**

💡 **Exemplo de Cenários de Teste:**

Preencher o formulário corretamente e enviar → Deve exibir mensagem de sucesso.

Deixar campos obrigatórios vazios → Deve exibir mensagens de erro.

Digitar uma senha fraca (exemplo: "12345") → Deve exibir erro de validação.

Digitar e-mails diferentes nos campos de "E-mail" e "Confirmação de E-mail" → Deve exibir erro.

## Casos de testes criados
### Validação dos Campos Obrigatórios
+ **Nome não preenchido - Falha**
Exibe a mensagem "O nome é obrigatório."

+ **Email não preenchido - Falha**
Exibe as mensagens:
"O e-mail é obrigatório."
"Os e-mails não coincidem."

+ **Confirmação de E-mail não preenchida - Falha**
Exibe a mensagem "A confirmação de e-mail é obrigatória."

+ **Senha não preenchida - Falha**
Exibe a mensagem "A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número."

+ **Todos os campos não preenchidos - Falha**
Exibe as mensagens:

"O nome é obrigatório."

"O e-mail é obrigatório."

"A confirmação de e-mail é obrigatória."

"A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número."

### Validações de Senha
+ **Senha com menos de 8 caracteres - Falha**
Exibe a mensagem "A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número."

+ **Senha com 8 caracteres contendo apenas uma letra maiúscula - Falha**
Exibe a mensagem "A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número."

+ **Senha com 8 caracteres contendo apenas um número - Falha**
Exibe a mensagem "A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número."

+ **Senha com 8 caracteres sem uma letra maiúscula e um número - Falha**
Exibe a mensagem "A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número."

+ **Senha com 8 caracteres contendo uma letra maiúscula e um número - Sucesso**
Exibe a mensagem "Cadastro realizado com sucesso!"

+ **Senha com mais de 8 caracteres contendo uma letra maiúscula e um número - Sucesso**
Exibe a mensagem "Cadastro realizado com sucesso!"

+ **Senha com mais de 8 caracteres contendo uma letra maiúscula - Falha**
Exibe a mensagem "A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número."

+ **Senha com mais de 8 caracteres contendo um número - Falha**
Exibe a mensagem "A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número."

+ **Senha com mais de 8 caracteres sem uma letra maiúscula e sem um número - Falha**
Exibe a mensagem "A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número."

## Instalação de dependências

```
npm install
```

## Execução dos testes

### Para executar os testes via interface do Cypress:

```
npx cypress open
```
### Para executar todos os testes via terminal de comando: 

```
npx cypress run
```