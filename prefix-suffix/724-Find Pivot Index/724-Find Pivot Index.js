//brute force time o(n) and space o(n)

// var pivotIndex = function (nums) {
//   let prefix = [],
//     suffix = [];

//   prefix[0] = 0;
//   suffix[nums.length - 1] = 0;

//   for (let i = 1; i < nums.length; i++) {
//     prefix[i] = prefix[i - 1] + nums[i - 1];
//   }

//   for (let i = nums.length - 2; i >= 0; i--) {
//     suffix[i] = suffix[i + 1] + nums[i + 1];
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (prefix[i] === suffix[i]) {
//       return i;
//     }
//   }

//   return -1;
// };

var pivotIndex = function (nums) {
  let left = 0,
    sum = 0,
    right = 0;

  for (let i = 0; i < nums.length ; i++) {
    sum += nums[i];
  }


    for (let i = 1; i < nums.length; i++) {
      left += nums[i - 1];
      right = sum - nums[i] - left;

      if (left === right) {
        return i;
      }
    }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
