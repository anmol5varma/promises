const testFile = require('./alwaysAsync');

describe('Test for showing resolve is async', () => {
  {
    const output = 'MAIN PROGRAM\nPROMISE VALUE';
    test('The function should return desired output', () => {
      const returnFun = (value) => {
        expect(value).toEqual(output);
      };
      testFile(returnFun);
      // expect(testFile()).toBeInstanceOf(Promise);
    });
  }
  test('Promise resovle value', () => {
    expect.assertions(1);
    return expect(testFile()).resolves.toBe('PROMISE VALUE');
  });
});
