var kthSmallest = function (matrix, k) {
  let m = matrix.length,
    n = matrix[0].length;

  let start = 0,
    end = Math.floor(m * n) - 1 , 
    low = 0
    

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    let count = mid - low + 1

    if(count === k){
       return matrix[mid][cols]
    }else if(matrix[mid][cols] > count ){
         end = mid -1
    }else {
        start = mid + 1
    }
  }
};

kthSmallest(
  [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ],
  8,
);
