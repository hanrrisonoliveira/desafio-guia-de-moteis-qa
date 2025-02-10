## Objetivo do teste
O candidato deve realizar um **teste de carga** simulando **100 usuários simultâneos acessando a API**, analisando:

✅ **Tempo de resposta →** A API consegue responder rapidamente sob carga?

✅ **Erros de requisição →** Existem falhas quando muitos usuários acessam ao mesmo tempo?

✅ **Uso de CPU/memória →** O sistema se mantém estável?

💡 **Exemplo de Cenário de Teste:**

Configurar um **teste de carga** para **100 usuários simultâneos** acessando a API mock.

Medir **tempo médio de resposta** e documentar os resultados.

Observar se há **erros 500 ou falhas de requisição** sob carga.

## Casos de testes criados
### Teste de carga

+ **Script: load_tests.js**

100 usuários virtuais com o tempo de duração de 30 segundos. 
O objetivo é avaliar se o status code retornado é 200 e se o tempo de resposta é menor que 500ms.


### Teste de stress
+ **Script: stress_tests.js**

50 usuários virtuais em 30 segundos, em seguida 1 minuto com 200 usuários virtuais e por fim 30 segundos para reduzir gradativamente a quantidade de usuários para zero.
O objetivo é avaliar se o status code retornado é 200 e se o tempo de resposta é menor que 1s.


## Instalação de dependências

```
choco install k6
```

## Execução dos testes

+ Execução do teste de carga:
```
k6 run load_tests.js
```

+ Execução do teste de stress:
```
k6 run stress_tests.js
```