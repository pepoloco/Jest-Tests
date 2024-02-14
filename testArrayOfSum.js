function testArrayOfSum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

const numbers = testArrayOfSum([1, 2, 3]);
console.log(numbers);
module.exports = testArrayOfSum