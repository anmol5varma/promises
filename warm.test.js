const testFun = require('./warm.js');

describe('Test the callback function', () => {
  test('The function should return TIMED OUT!', () => {
    expect(testFun.timeOut()).toEqual('TIMED OUT!');
  });
});
