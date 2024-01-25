const asyncFunc = require('./asyncTest');

describe('asyncFunc tests', () => {
    test('Return data as an array or obj', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({ data: 'data' }),
            })
        );

        const data = await asyncFunc();
        expect(data).toEqual({ data: 'data' });
    });

    test('Throw an error on fetch', async () => {
        global.fetch = jest.fn(() => Promise.reject(new Error('Network error')));

        await expect(asyncFunc()).rejects.toThrow('Network error');
    });
});
