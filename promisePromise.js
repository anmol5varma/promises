// const espromise = require('es6-promise');

function first() {
  const promise1 = new Promise((resolve) => {
    resolve('Hey');
  });
  return promise1;
}

function second(value) {
  // console.log(value);
  return `${value}Everyone`;
}

function promise() {
  const result = first().then(second);
  // console.log(result);
  return result;
}
// promise();
module.exports = promise;
