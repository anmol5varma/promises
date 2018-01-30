const espromise = require('es6-promise');

function promise() {
  const result = first().then(val => second(val))
    .then((val) => { console.log(val); return 'Console.log called from resolve value of second function'; }).then(console.log);
  return result;
}

module.exports = promise;
