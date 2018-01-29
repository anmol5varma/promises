const testFun = require('./warm.js');

describe('Test the callback function', () => {
  test('The function should return TIMED OUT!', () => {
    expect(testFun()).toEqual('TIMED OUT!');
  });
});
