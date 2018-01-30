function onReject(error) {
  console.log(error.message);
  return error.message;
}

function rejectPromise() {
  const promise = new Promise((fulfill, reject) => {
    const errorObject = Error('REJECTED!');
    setTimeout(() => reject(errorObject), 300);
  });
  return promise.catch(onReject);
}


// promise.then(() => {}, onReject);
module.exports = rejectPromise;
