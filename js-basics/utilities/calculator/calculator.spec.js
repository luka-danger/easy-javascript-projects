const calculator = require('./calculator')

describe('add', () =>  {
    test('adds 0 and 0', () => {
        expect(calculator.add(0,0)).toBe(0); 
    }); 

    test.skip('adds 2 and 2', () => {
        expect(calculator.add(2,2)).toBe(4);
    })
    test.skip('adds positive numbers', () => {
        expect(calculator.add(6,2)).toBe(8);
    })
}); 