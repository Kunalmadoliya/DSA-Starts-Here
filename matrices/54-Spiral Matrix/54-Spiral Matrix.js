var spiralOrder = function (matrix) {
  let arr = [];
  let top = 0,
    bottom = matrix.length - 1;
  let right = matrix[0].length - 1,
    left = 0;
  while (top <= bottom && left <= right) {
    // → left to right
    for (let j = left; j <= right; j++) {
      arr.push(matrix[top][j]);
    }
    top++;

    // ↓ top to bottom
    for (let i = top; i <= bottom; i++) {
      arr.push(matrix[i][right]);
    }
    right--;

    // ← right to left
    for (let j = right; j >= left; j--) {
      arr.push(matrix[bottom][j]);
    }
    bottom--;

    // ↑ bottom to top
    for (let i = bottom; i >= top; i--) {
      arr.push(matrix[i][left]);
    }
    left++;
  }

  return arr;
};

console.log(spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])
);
