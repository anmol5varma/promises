const espromise = require('es6-promise');

function attachTitle(name) {
  if (typeof name === 'string') {
    return `DR. ${name}`;
  }
  return false;
}

function appendDR(name, callback) {
  const temp = Promise.resolve(name);
  temp.then(attachTitle).then(callback);
  // callback(name);
}


module.exports = { attachTitle, appendDR };
