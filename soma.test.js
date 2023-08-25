const {test, expect }= require('@jest/globals')
const soma = require('./soma')

test ('Soma (5,5) retornar 10', () => {
    expect(soma(5,5)).toBe(10)
});