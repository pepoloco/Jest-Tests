function calc(cart) {

    return cart.reduce((total, item) => total + item.price * item.quantity, 0);

}

module.exports = calc;