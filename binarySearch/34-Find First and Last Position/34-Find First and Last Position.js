var searchRange = function (nums, target) {
  let start = 0,
    end = nums.length - 1;

  if (nums.length === 0) {
    return [-1, -1];
  }

  while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      let save = mid

    if (nums[mid] === target) {
      if (nums[mid - 1] === target) {
        save = mid - 1
      }

      return [save,start]
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  console.log(save);
};
console.log(searchRange([5, 7, 7, 8, 8, 8, 8, 8,10], 8));
