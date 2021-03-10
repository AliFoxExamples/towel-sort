
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return !matrix || !(matrix.length) ? []:matrix.toString().split(",").map(el=>+el);
}
