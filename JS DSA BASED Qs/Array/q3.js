// 3. Write a function to rotate a matrix by 90 degrees clockwise.
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate90deg(matrix) {
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  return matrix;
}

console.log("90deg rotated:");
 console.log(rotate90deg(matrix));
