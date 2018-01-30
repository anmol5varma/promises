const testFile = require('./resolve');

describe('Test for only resolve but not reject', () => {
  test('The function should return a Promise', () => {
    expect(testFile()).toBeInstanceOf(Promise);
  });
  test('Promise resovle value', () => {
    expect.assertions(1);
    return expect(testFile()).resolves.toBe('I FIRED');
  });
});
