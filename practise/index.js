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
