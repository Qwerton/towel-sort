module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  const result = [];
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      let columnIndx;
      i % 2 === 0 ? columnIndx = j : columnIndx = (matrix[i].length - 1 - j);
      result.push(matrix[i][columnIndx]);
    }
  }
  return result;
}
