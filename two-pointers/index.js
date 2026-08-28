let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function swap(nums, j, k) {
  let temp = nums[j];
  nums[j] = nums[k];
  nums[k] = temp;
}

var removeDuplicates = function (nums) {
  let i = 0,
    j =  1,
    k = 2;
 
  while (k < nums.length) {
    if (nums[i] === nums[k]) {
      k++;
    } else if (nums[j] === nums[k]) {
      k++;
    } else {
      swap(nums, j, k);
      i++
      j++
    }

  }
  return nums;
};

console.log(removeDuplicates(nums));
