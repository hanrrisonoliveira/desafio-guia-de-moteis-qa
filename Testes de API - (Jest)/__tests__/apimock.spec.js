const { API_URL } = require('../config')
const request = require('supertest')

describe('Testes do tipo /GET', () => {
    it('Validar a lista de usuários com status 200', async () => {
        const response = await request(API_URL).get('/users')
       
        expect(response.status).toBe(200)
        
        // Valido se é um array e que não está vazio
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0)
        
        // Valido a estrutura do array
        response.body.forEach(user => {
            expect(user).toHaveProperty('id')
            expect(user).toHaveProperty('name')
            expect(user).toHaveProperty('username')
            expect(user).toHaveProperty('email')
            expect(user).toHaveProperty('address')
            expect(user).toHaveProperty('phone')
            expect(user).toHaveProperty('website')        
        })
    })
})

describe ('Testes do tipo /POST', () => {
    it('Deve retornar o status 404 em um endpoint inválido', async () => {
        const response = await request(API_URL).get('/postssssss')

        expect(response.status).toBe(404)
        expect(response.body).toEqual({})
    })
})
