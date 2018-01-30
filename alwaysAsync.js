function alwaysAsync(callback) {
  const arr = [];
  const promise = new Promise((resolve, reject) => {
    resolve('PROMISE VALUE');
  });
  promise.then(arr.push).then(callback);
  arr.push('MAIN PROGRAM');
  return promise;
}

module.exports = alwaysAsync;
