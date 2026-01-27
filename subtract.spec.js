const subtract = require('./scripts.js');

describe('subtract', () => {
    test('subtracting #s works', () => {
        expect(subtract(10, 3)).toBe(7);
    });
    test('subtracting negatives', () => {
        expect(subtract(-3, 25)).toBe(-28);
    });
    test('subtracting negatives', () => {
        expect(subtract(25, -3)).toBe(28);
    });
});