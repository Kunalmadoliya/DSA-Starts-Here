// Optimized · sliding window time O(n) space O(1)

var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxsum = sum;

  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];

    maxsum = Math.max(maxsum, sum);
    maxsum / k;
  }

  console.log(maxsum/k);
};

findMaxAverage([1,12,-5,-6,50,3], 4);
