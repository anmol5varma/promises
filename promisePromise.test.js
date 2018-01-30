const testFile = require('./promisePromise');

describe('Test for reject.', () => {
  test('The function should return a Promise', () => {
    expect(testFile()).toBeInstanceOf(Promise);
  });
  test('Promise resovle value', () => {
    expect.assertions(1);
    return expect(testFile()).resolves.toBe('HeyEveryone');
  });
});
