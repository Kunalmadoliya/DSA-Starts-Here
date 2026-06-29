//BRUTE FORCE O(N)

let nums = [1, 3, 5, 6],
  target = 5;

var searchInsert = function (nums, target) {
  let i = 0;
  let j = i + 1;
  if (nums[i] > target && nums[i] !== target) return i;
  if (nums[j] > target && nums[i] < target && nums[i] !== target) return j;

  for (let k = 0; k < nums.length; k++) {
    if (nums[k] === target) return k;
  }

  return nums.length;
};

// Optimal Solution O(logn)

var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
