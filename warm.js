function timeOut() {
  const val = 'TIMED OUT!';
  console.log(val);
  return val;
}
setTimeout(timeOut, 300);

module.exports = timeOut;
