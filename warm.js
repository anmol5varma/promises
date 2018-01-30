function timeOut() {
  const val = 'TIMED OUT!';
  console.log(val);
  return val;
}
const fun = setTimeout(timeOut, 300);

module.exports = { timeOut, fun };
