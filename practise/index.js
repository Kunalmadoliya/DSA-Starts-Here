var topKFrequent = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  //   .fill([]) → Ek dabba, sab usi ko use kar rahe hain. ❌
  // .fill().map(() => []) → Har bande ko apna alag dabba mila hai. ✅

  const bucket = new Array(nums.length - 1).fill().map(() => []);

  for (const [keys, values] of map) {
    bucket[values].push(keys);
  }

  const result = [];

  for (let i = bucket.length - 1; i >= 0; i--) {
    for (const value of bucket[i]) {
      if (result.length === k) break;

      result.push(value);
    }
  }

  return result;
};

// topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2);

var productExceptSelf = function (arr) {
  let prefix = 1,
    suffix = 1,
    ans = [];

  for (let i = 1; i < arr.length; i++) {
    ans[0] = prefix;
    ans[i] = arr[i - 1] * ans[i - 1];
  }

  for (let j = ans.length - 1; j >= 0; j--) {
    ans[j] = ans[j] * suffix;
    suffix = suffix * arr[j];
  }
  console.log(ans);
};

// productExceptSelf([1, 2, 3, 4]);

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longest = 1;

  for (const num of set) {
    // Agar current number se pehle wala number exist nahi karta, tabhi ye sequence ka first number hai aur yahin se counting start karo.
    // if( 3-1 ) 2 aleady present hai while wali condition mai jaiga
    if (!set.has(num - 1)) {
      let currentNum = num;
      let count = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        count++;
      }

      longest = Math.max(longest, count);
    }
  }

  console.log(longest);
};

longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);

// for (let i = 0; i < nums.length; i++) {
//   let multiply = 1;
//   for (let j = 0; j < nums.length; j++) {
//     if (i !== j) {
//       multiply *= nums[j];
//     }
//   }

//   arr2.push(multiply);
// }

// console.log(arr2);

let nums = [1, 2, 3, 4];
let prefix = [],
  pref = 1;
let suffix = [],
  suff = 1;
let arr2 = [];

for (let i = 0; i < nums.length; i++) {
  prefix[i] = pref;
  pref = pref * nums[i];
}

for (let i = nums.length - 1; i >= 0; i--) {
  suffix[i] = suff;
  suff *= nums[i];
}

for (let j = 0; j < nums.length; j++) {
  arr2[j] = prefix[j] * suffix[j];
}
console.log(prefix);
console.log(suffix);

console.log(arr2);

var maximumSubarraySum = function (nums, k) {
  const set = new Set();
  let i = 0,
    sum = 0,
    maxSum = 0;

  for (let j = 0; i < nums.length; j++) {
    while (set.has(nums[j])) {
      set.delete(nums[i]);
      sum -= nums[i];
      i++;
    }

    set.add(nums[j]);
    sum += nums[j];

    if (j - i + 1 === k) {
      maxSum = Math.max(sum, maxSum);
      set.delete(nums[i]);
      sum -= nums[i];
      i++;
    }
  }
  console.log(maxSum);
};

maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3);

var maxScore = function (nums, k) {
  let lsum = 0,
    rSum = nums.length - 1;
  max = 0;

  for (let i = 0; i < k; i++) {
    lsum += nums[i];
  }
  max = lsum;
  for (let i = k - 1; i >= 0; i--) {
    lsum -= nums[i];
    rSum += nums[i];

    max = Math.max(lsum, rSum);
  }
  console.log(max);
};

maxScore([1, 2, 3, 4, 5, 6, 1], 3);

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  nums.sort((a, b) => a - b);

  let longest = 0;

  let count = 1;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] === nums[j - 1]) continue;

    if (nums[j] === nums[j - 1] + 1) {
      count++;
    } else {
      break;
    }
  }

  longest = Math.max(longest, count);

  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4

longestConsecutive([100, 4, 200, 1, 3, 2]);

var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = sum;

  console.log(max);

  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k + 1] + nums[i];
    max = Math.max(sum, max);
    return max / k;
  }
};

findMaxAverage([1, 12, -5, -6, 50, 3], 4);
