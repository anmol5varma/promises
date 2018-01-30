// const promise = new Promise((resolve, reject) => {
//   reject(new Error('Error'));
// });
// function printA() {
//   console.log('A');
// }
//
// function printB() {
//   console.log('B');
// }
const promise = new Promise((resolve, reject) => {
  resolve('ey');
});

promise.then(console.log);
promise.then(console.log);
promise.then(console.log).then(console.log);
