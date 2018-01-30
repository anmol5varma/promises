const testFile = require('./quicker');

describe('Test for only resolve and reject', () => {
  test('The function should resolve', (done) => {
    const callback = (val) => {
      expect(val).toBe('Hey');
      done();
    };
    testFile.promise1.then(callback);
  });
  test('The function should reject', (done) => {
    const callback = (val) => {
      expect(val.message).toBe('Error done');
      done();
    };
    testFile.promise2.catch(callback);
  });
});
