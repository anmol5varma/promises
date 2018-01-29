const promise = new Promise((fullfill, reject) => {
  setTimeout(() => {
    fullfill('FULFILLED!');
  }, 300);
});

promise.then(console.log);
