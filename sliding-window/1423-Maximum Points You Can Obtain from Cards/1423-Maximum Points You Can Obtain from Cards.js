//brute force  time o(n^2) space o(1)

// var maxScore = function (arr, k) {
//   function leftMost(arr, count) {
//     let sum = 0;

//     for (let i = 0; i < count; i++) {
//       sum += arr[i];
//     }

//     return sum;
//   }

//   function rightMost(arr, count) {
//     let sum = 0;

//     for (let i = arr.length - count; i < arr.length; i++) {
//       sum += arr[i];
//     }

//     return sum;
//   }

//   function middleValue(arr, k) {
//     let max = 0;

//     for (let left = 0; left <= k; left++) {
//       let right = k - left;

//       let sum = leftMost(arr, left) + rightMost(arr, right);

//       max = Math.max(max, sum);
//     }

//     return max;
//   }

//   return middleValue(arr, k);
// };

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3)); // 12

maxScore([1, 2, 3, 4, 5, 6, 1], 3);

var maxScore = function (cardPoints, k) {
  let leftSum = 0,
    rightSum = 0;
  for (let i = 0; i < k; i++) {
    leftSum += cardPoints[i];
  }

  let maxSum = leftSum;

  const right = cardPoints.length - 1;

  for (let i = k - 1; i >= 0; i--) {
    leftSum -= cardPoints[i];
    rightSum += cardPoints[i--];
    maxSum = Math.max(maxSum, leftSum + right);
  }

  return maxSum;
};

maxScore([1, 2, 3, 4, 5, 6, 1], 3);

// optmise time o(n) space o(1)

var maxScore = function (cardPoints, k) {
    let lsum = 0; 
    let rsum = 0;
    let maxsum = 0;

    // Take first k elements from left
    for (let i = 0; i < k; i++) {
        lsum += cardPoints[i];
    }

    maxsum = lsum;

    let right = cardPoints.length - 1;

    // Shift from left to right
    for (let i = k - 1; i >= 0; i--) {
        lsum -= cardPoints[i];
        rsum += cardPoints[right--];
        maxsum = Math.max(maxsum, lsum + rsum);
    }

    return maxsum;
};