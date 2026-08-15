//brute force o(n2) space o(1)

var searchMatrix = function (matrix, target) {
  let rows = matrix.length,
    cols = matrix[0].length,
    start = 0,
    end = rows - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (matrix[mid][cols - 1] < target) {
      start = mid + 1;
    } else if (matrix[mid][0] > target) {
      end = mid - 1;
    } else {
        let low = 0 , high = cols - 1
        while(low <= high){
            let smid = Math.floor(low + (high - end)/2)
             if(matrix[mid][smid] === target){
                return true
             }else if(matrix[mid][smid] > target){
                high = smid - 1
             }else{
                low = smid + 1
             }
        }
        return false
    }
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
);


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let m = matrix.length, n = matrix[0].length
    let start = 0, end = (m * n - 1)

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2)

        let row = Math.floor(mid / n), col = mid % n

        if (matrix[row][col] === target) {
            return true
        } else if (matrix[row][col] > target) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return false
};