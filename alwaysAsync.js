function alwaysAsync() {
  const arr = [];
  const promise = new Promise((resolve) => {
    resolve('PROMISE VALUE');
  });
  const promise2 = promise.then((val) => { console.log(val); arr.push(val); return arr; });
  arr.push('MAIN PROGRAM');
  return { promise, promise2 };
}

module.exports = alwaysAsync;
