
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return !matrix || !(matrix.length) ? [] : matrix.map((el, i, arr)=>{
  
      return i&1? el.reverse():el;

  }).toString().split(',').map(el=>+el);
}