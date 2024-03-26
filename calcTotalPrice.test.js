const calcTotalPrice = require("./calcTotalprice");

describe('calcTotalPrice', () => {
    test('calculate total price of items in the cart', () => {
        const cart = [
            { price: 10, quantity: 2 },
            { price: 40, quantity: 1 },
            { price: 100, quantity: 2 },
        ];
        expect(calcTotalPrice(cart)).toBe(10 * 2 + 40 * 1 + 100 * 2);
    });
})

test('returns 0 for an empty cart', () => {
    const cart = [];
    expect(calcTotalPrice(cart)).toBe(0);
})

test('handles negative prices and quantities', () => {
    const cart = [
        { price: -10, quantity: 2 },
        { price: 40, quantity: -1 },
        { price: 5, quantity: 4 },
    ]
    expect(calcTotalPrice(cart)).toBe(0 + 20 * 0 + 5 * 4);
})