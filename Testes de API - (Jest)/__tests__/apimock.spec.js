const { API_URL } = require('../config')
const request = require('supertest')

describe('Testes do tipo /GET', () => {
     // Função para validar a estrutura do objeto `geo`
     const validateGeo = (geo) => {
        expect(geo).toHaveProperty('lat')
        expect(geo).toHaveProperty('lng')
        expect(typeof geo.lat).toBe('string')
        expect(typeof geo.lng).toBe('string')
    }

    // Função para validar a estrutura do objeto `address`
    const validateAddress = (address) => {
        expect(address).toHaveProperty('street')
        expect(address).toHaveProperty('suite')
        expect(address).toHaveProperty('city')
        expect(address).toHaveProperty('zipcode')
        expect(address).toHaveProperty('geo')

        expect(typeof address.street).toBe('string')
        expect(typeof address.suite).toBe('string')
        expect(typeof address.city).toBe('string')
        expect(typeof address.zipcode).toBe('string')
        expect(typeof address.geo).toBe('object')

        validateGeo(address.geo)
    }

    // Função para validar a estrutura do objeto `company`
    const validateCompany = (company) => {
        expect(company).toHaveProperty('name')
        expect(company).toHaveProperty('catchPhrase')
        expect(company).toHaveProperty('bs')

        expect(typeof company.name).toBe('string')
        expect(typeof company.catchPhrase).toBe('string')
        expect(typeof company.bs).toBe('string')
    }

    // Função para validar a estrutura de um usuário
    const validateUser = (user) => {
        expect(user).toHaveProperty('id')
        expect(user).toHaveProperty('name')
        expect(user).toHaveProperty('username')
        expect(user).toHaveProperty('email')
        expect(user).toHaveProperty('address')
        expect(user).toHaveProperty('phone')
        expect(user).toHaveProperty('website')
        expect(user).toHaveProperty('company') // Validando o objeto 'company'

        expect(typeof user.id).toBe('number')
        expect(typeof user.name).toBe('string')
        expect(typeof user.username).toBe('string')
        expect(typeof user.email).toBe('string')
        expect(typeof user.phone).toBe('string')
        expect(typeof user.website).toBe('string')

        validateAddress(user.address)
        validateCompany(user.company) // Validando o objeto 'company'
    }

    it('Validar a lista de usuários com status 200', async () => {
        const response = await request(API_URL).get('/users')
       
        expect(response.status).toBe(200)
        
        // Valido se é um array e que não está vazio
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0)
        
        // Valida a estrutura de cada usuário no array
        response.body.forEach(validateUser);
    })
})

describe ('Testes do tipo /POST', () => {
    it('Deve retornar o status 404 em um endpoint inválido', async () => {
        const response = await request(API_URL).post('/postssssss')

        expect(response.status).toBe(404)
        expect(response.body).toEqual({})
    })

    it('Deve retornar o status 400 quando o campo obrigatório estiver ausente via POST', async () => {
        const response = await request(API_URL).post('/posts') 
            .send({});
    
        expect(response.status).toBe(400);  // Esperando um erro 400
        console.log(response.body);  // Mostra o corpo da resposta, que pode incluir uma mensagem de erro
    });
})
