const sumArray = require('./testArrayOfSum')
test('Sums of the array of numbers', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
});

