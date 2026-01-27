const add = require('./operators.js');

describe('add', () => {
    test('addition works', () => {
        const num1 = 2;
        const num2 = 3;
        const expected = 5;

        const result = add(num1, num2);
        expect(result).toBe(expected);
    });
    test('adding negative numbers works', () => {
        const num1 = -5;
        const num2 = 2;
        const expected = -3;

        const result = add(num1, num2);
        expect(result).toBe(expected);
    });

});
