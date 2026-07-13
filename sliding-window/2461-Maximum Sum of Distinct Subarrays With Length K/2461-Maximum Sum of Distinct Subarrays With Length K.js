// optmise time o(n)  space o(1)

var maximumSubarraySum = function (nums, k) {
  let set = new Set();
  let maxSum = 0,
    sum = 0,
    l = 0;

  for (let r = 0; r < nums.length; r++) {
    while (set.has(nums[r])) {
      set.delete(nums[l]);
      sum -= nums[l++];
    }

    set.add(nums[r]);

    sum += nums[r];

    if (r - l + 1 === k) {
      maxSum = Math.max(maxSum, sum);
      set.delete(nums[l]);
      sum -= nums[l++];
    }
  }
  return maxSum;
};

maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3);
