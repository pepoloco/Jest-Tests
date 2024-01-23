const { reverseAndUppercase, fetchUserById, processData, mockLogger, handleClick } = require('./demo')
describe('reversedAndUppercase Function', () => {
    test("should reverse and uppercase a string", () => {
        const input = "haho";
        const expected = "OHAH";
        expect(reverseAndUppercase(input)).toBe(expected);

    })
    test("should return an empty string when input is empty", () => {
        expect(reverseAndUppercase("")).toBe("");
    });

    test("should correctly handle strings with special characters", () => {
        expect(reverseAndUppercase("!@#$%")).toBe("%$#@!");
    });
})

describe('fetchUserById', () => {
    it('fetches a user by ID', async () => {
        const user = await fetchUserById(1);
        expect(user).toEqual({ id: 1, name: "Pepo Banchev" })
    })
})
describe('processData', () => {
    it('calls logger once', () => {
        processData("test", mockLogger);
        expect(mockLogger.log).toHaveBeenCalledTimes(1);
    });
});

describe('handle clicks on button', () => {
    test('button has been clicked', () => {
        expect(handleClick()).toBe(1);
        expect(handleClick()).toBe(2);
        expect(handleClick()).toBe(3);
    })
})