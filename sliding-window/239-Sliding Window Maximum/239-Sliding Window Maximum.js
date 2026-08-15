//brute force o(n.m) and space o(n)

var maxSlidingWindow = function (nums, k) {
  let arr = [],
    max = 0;

  for (let i = 0; i < k; i++) {
    max = Math.max(max, nums[i]);
  }
  arr.push(max);

  for (let i = k; i < nums.length; i++) {
    let prevElem = nums[i - k];

    if (prevElem === max) {
      // agar jo nikal raha hai wahi max tha, to poori window rescan karo
      max = nums[i - k + 1];
      for (let j = i - k + 1; j <= i; j++) {
        max = Math.max(max, nums[j]);
      }
    } else {
      max = Math.max(max, nums[i]);
    }

    arr.push(max);
  }

  return arr;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
