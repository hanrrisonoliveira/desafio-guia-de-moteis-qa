const { API_URL } = require('../config')
const request = require('supertest')

it('Primeiro teste', async () => {
    const response = await request(API_URL).get('/users')
    console.log(response.body)
})