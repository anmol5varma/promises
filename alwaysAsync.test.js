const testFile = require('./alwaysAsync');

describe('Test for showing resolve is async', () => {
  {
    const output = ['MAIN PROGRAM', 'PROMISE VALUE'];
    test('The function should return desired output', () => {
      // const returnFun = (value) => {
      //   expect(value).toEqual(output);
      // };
      // testFile(returnFun);
      expect.assertions(1);
      return expect(testFile().promise2).resolves.toEqual(output);
    });
  }
  test('Promise resovle value', () => {
    expect.assertions(1);
    return expect(testFile().promise).resolves.toBe('PROMISE VALUE');
  });
});
