const calculator = require('./calculator')

describe('add', () =>  {
    test('adds 0 and 0', () => {
        expect(calculator.add(0,0)).toBe(0); 
    }); 

    test('adds 2 and 2', () => {
        expect(calculator.add(2,2)).toBe(4);
    })
    test('adds positive numbers', () => {
        expect(calculator.add(6,2)).toBe(8);
    })
}); 

describe('subtract', () =>  {
    test('subtracts 0 and 0', () => {
        expect(calculator.subtract(0,0)).toBe(0); 
    }); 

    test('subtracts 2 and 2', () => {
        expect(calculator.subtract(2,2)).toBe(0);
    })
    test('subtracts positive numbers', () => {
        expect(calculator.subtract(6,2)).toBe(4);
    })
}); 