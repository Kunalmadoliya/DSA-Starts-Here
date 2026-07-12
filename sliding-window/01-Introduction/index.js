let arr = [1, 12, -5, -6, 50, 3];
let k = 4;

let sum = 0;

for (let i = 0; i < k; i++) {
  sum += arr[i];
}

let maxSum = sum;

for (let i = k; i < arr.length; i++) {
  sum = sum - arr[i - k] + arr[i];
  maxSum = Math.max(maxSum, sum);
}

console.log(maxSum);



