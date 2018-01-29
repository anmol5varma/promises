const promise = new Promise(((fulfill, reject) => {
  const errorObject = Error('REJECTED!');
  setTimeout(() => reject(errorObject), 300);
}));

function onReject(error) {
  console.log(error.message);
}
promise.then(() => {}, onReject);

// Your solution here
