const divide = require('./operators.js');

describe('divide', () => {
    test('division works', () => {
        const num1 = 6;
        const num2 = 2;
        const expected = 3;

        const result = divide(num1, num2);
        expect(result).toBe(expected);
    });
    test('dividing negative numbers works', () => {
        const num1 = 10;
        const num2 = -2;
        const expected = -5;

        const result = divide(num1, num2);
        expect(result).toBe(expected);
    });

});
