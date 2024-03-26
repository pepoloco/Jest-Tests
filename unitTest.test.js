master
const calcFunc = require('./unitTest');

describe('Calcfunction to return a + calculation', () => {
    it('X(1) + Y(2) should return 3', () => {
        expect(calcFunc(1, 2)).toBe(3);
    });
});
