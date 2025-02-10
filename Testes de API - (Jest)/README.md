## Objetivo do teste
O candidato deve criar testes automatizados para validar uma API REST, garantindo que:

✅ **A API responde corretamente →** Testar requisições **GET e POST.**

✅ **Respostas HTTP corretas →** Testar status **200, 400 e 500.**

✅ **Validação da estrutura do JSON →** O retorno da API deve conter os campos esperados.

📌 **API Mock para os Testes**

**Opção 1**: Utilizar a API mock abaixo:

🔗 https://jsonplaceholder.typicode.com/users

**Opção 2:** Caso prefira, o candidato pode **criar sua própria API mock** usando ferramentas como **Mockoon, JSON Server ou Postman Mock Server.**

💡 **Exemplo de Cenários de Teste:**

Fazer uma **requisição GET** e validar se os dados retornados estão corretos.

Enviar um **POST sem um campo obrigatório** e garantir que a API retorne erro **400.**

Simular um erro no servidor e garantir que ele retorne **500.**

## Casos de testes criados
### Casos de Teste - API
#### Testes do tipo /GET

+ **Validar a lista de usuários com status 200**

O endpoint deve retornar o status 200. 

A resposta deve ser um array de objetos de usuários.

O array não deve estar vazio.

Cada usuário no array deve possuir a estrutura validada.

#### Testes do tipo /POST
+ **Deve retornar o status 404 em um endpoint inválido**

Ao enviar um POST para o endpoint /postssssss, deve retornar o status 404

+ **Deve retornar o status 400 quando o campo obrigatório estiver ausente via POST**

Ao enviar um POST para /posts com o array vazio, deve retornar o status 400

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