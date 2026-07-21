var maxSlidingWindow = function (nums, k) {
  let left = 0,
    right = k - 1,
    arr = [];

  while (right < nums.length) {
    let max = nums[left];

    for (let i = left; i <= right; i++) {
      max = Math.max(max, nums[i]);
    }

    arr.push(max);

    left++;
    right++;
  }

  return arr
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
