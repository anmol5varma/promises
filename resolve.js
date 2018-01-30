function resolveReject() {
  const promise = new Promise(((resolve, reject) => {
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE'));
  }));
  return promise;
}

// function onReject(error) {
//   console.log(error.message);
// }
// promise.then(console.log(), onReject);

// Your solution here
module.exports = resolveReject;
