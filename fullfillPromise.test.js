const file = require('./fullfillPromise');

describe('Test the callback function', () => {
  test('works with promises', () => {
    expect.assertions(1);
    return file().then(data => expect(data).toEqual('FULFILLED!'));
  });
});
