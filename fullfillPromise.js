function fulfil() {
  const promise = new Promise((fullfill, reject) => {
    setTimeout(() => {
      fullfill('FULFILLED!');
    }, 300);
  });
  return promise;
}
module.exports = fulfil;
// promise.then(console.log);
