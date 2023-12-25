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

describe('sum', () => {
    test('computes the sum of an empty array', () => {
        expect(calculator.sum([])).toBe(0);
    });
    test('computes the sum of one number', () => {
        expect(calculator.sum([7])).toBe(7);
    });
    test('computes the sum of two numbers', () => {
        expect(calculator.sum([7, 11])).toBe(18);
    });
    test('computes the sum of many numbers', () => {
        expect(calculator.sum([1, 3, 5, 7])).toBe(16);
    });
}); 

describe('multiply', () =>  {
    test('multiplies 0 and 0', () => {
        expect(calculator.multiply(0,0)).toBe(0); 
    }); 

    test('multiplies 2 and 2', () => {
        expect(calculator.multiply(2,2)).toBe(4);
    })
    test('multiplies positive numbers', () => {
        expect(calculator.multiply(6,2)).toBe(12);
    })
}); 
  