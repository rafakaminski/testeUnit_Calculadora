const {test, expect }= require('@jest/globals');
const adicionarNumero = require('./adicionarNumero');

test ('Deve retornar 1', () => {
    expect(adicionarNumero(1)).toBe(1)
  
});