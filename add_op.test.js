const {test, expect }= require('@jest/globals');
const add_op = require('./add_op');

test ('Deve retornar o sinal de menos', () => {
    expect(add_op('-')).toBe('-')
  
});