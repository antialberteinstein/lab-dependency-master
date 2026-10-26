const { add } = require('./add');

describe('add', () => {
    test('should return the sum of two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('should return the sum of two negative numbers', () => {
        expect(add(-2, -3)).toBe(-5);
    });

    test('should return zero when adding two zeros', () => {
        expect(add(0, 0)).toBe(0);
    });

    test('should handle a positive and a negative number', () => {
        expect(add(5, -3)).toBe(2);
    });
});
