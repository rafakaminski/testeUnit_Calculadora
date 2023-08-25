const {test, expect }= require('@jest/globals')
const limpar = require('./limpar')

test ('Deve retornar vazio', () => {
    expect(limpar()).toBe("")
});
