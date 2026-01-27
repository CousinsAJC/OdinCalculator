const multiply = require('./operators.js');

describe('multiply', () => {
    test('multiplication works', () => {
        const num1 = 2;
        const num2 = 3;
        const expected = 6;

        const result = multiply(num1, num2);
        expect(result).toBe(expected);
    });
    test('multiplying negative numbers works', () => {
        const num1 = -5;
        const num2 = 2;
        const expected = -10;

        const result = multiply(num1, num2);
        expect(result).toBe(expected);
    });

});
