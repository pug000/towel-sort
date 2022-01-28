
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined) {
    return [];
  }
  if (matrix) {
    matrix.forEach((elem, index) => {
      if (index % 2) {
        elem.reverse();
      }
    })
    return matrix.concat.apply([], matrix);
  }
}
