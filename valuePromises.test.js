const testFile = require('./valuePromises');

describe('Test for valid string input', () => {
  test('The function should concat if string else return false', () => {
    expect(testFile.attachTitle('ANMOL')).toEqual('DR. ANMOL');
  });

  test('The function should concat if string else return false', () => {
    expect(testFile.attachTitle(123)).toEqual(false);
  });
});

describe('Test for promise chaining.', () => {
  test('The function should append', (done) => {
    const returnFun = (value) => {
      expect(value).toEqual('DR. ANMOL');
      done();
    };
    testFile.appendDR('ANMOL', returnFun);
  });
});
