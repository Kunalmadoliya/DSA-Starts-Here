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

topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2);
