const fl = require('./fullfillPromise');

describe('Test the callback function', () => {
  test('works with promises', () => {
    expect.assertions(1);
    return fl().then(data => expect(data).toEqual('Mark'));
  });
});
