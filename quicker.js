const promise1 = Promise.resolve('Hey');
const promise2 = Promise.reject(new Error('Error done'));

// promise2.catch(console.log);
// console.log(promise1.then(console.log), 'outer log');
// console.log(promise2, 'rejected promise');
module.exports = { promise1, promise2 };
