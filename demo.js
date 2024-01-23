function reverseAndUppercase(str) {
    return str.split('').reverse().join('').toUpperCase();
}
function fetchUserById(id) {
    return Promise.resolve({ id: id, name: "Pepo Banchev" });
}


function processData(data, logger) {
    logger.log("Processing data");
    return data.toUpperCase();
}
const mockLogger = {
    log: jest.fn()
};

let count = 0;
function handleClick() {
    count++;
    return count
}

module.exports = { reverseAndUppercase, fetchUserById, processData, mockLogger, handleClick };