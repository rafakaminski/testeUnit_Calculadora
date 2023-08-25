const {test, expect }= require('@jest/globals')
const total = require('./total')

test ('Deve retornar 3', () => {
    expect(total(1,2,'+')).toBe(3)
});
