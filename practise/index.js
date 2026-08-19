// var topKFrequent = function (nums, k) {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], (map.get(nums[i]) || 0) + 1);
//   }

//   //   .fill([]) → Ek dabba, sab usi ko use kar rahe hain. ❌
//   // .fill().map(() => []) → Har bande ko apna alag dabba mila hai. ✅

//   const bucket = new Array(nums.length - 1).fill().map(() => []);

//   for (const [keys, values] of map) {
//     bucket[values].push(keys);
//   }

//   const result = [];

//   for (let i = bucket.length - 1; i >= 0; i--) {
//     for (const value of bucket[i]) {
//       if (result.length === k) break;

//       result.push(value);
//     }
//   }

//   return result;
// };

// // topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2);

// var productExceptSelf = function (arr) {
//   let prefix = 1,
//     suffix = 1,
//     ans = [];

//   for (let i = 1; i < arr.length; i++) {
//     ans[0] = prefix;
//     ans[i] = arr[i - 1] * ans[i - 1];
//   }

//   for (let j = ans.length - 1; j >= 0; j--) {
//     ans[j] = ans[j] * suffix;
//     suffix = suffix * arr[j];
//   }
//   console.log(ans);
// };

// // productExceptSelf([1, 2, 3, 4]);

// var longestConsecutive = function (nums) {
//   const set = new Set(nums);
//   let longest = 1;

//   for (const num of set) {
//     // Agar current number se pehle wala number exist nahi karta, tabhi ye sequence ka first number hai aur yahin se counting start karo.
//     // if( 3-1 ) 2 aleady present hai while wali condition mai jaiga
//     if (!set.has(num - 1)) {
//       let currentNum = num;
//       let count = 1;

//       while (set.has(currentNum + 1)) {
//         currentNum++;
//         count++;
//       }

//       longest = Math.max(longest, count);
//     }
//   }

//   console.log(longest);
// };

// longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);

// // for (let i = 0; i < nums.length; i++) {
// //   let multiply = 1;
// //   for (let j = 0; j < nums.length; j++) {
// //     if (i !== j) {
// //       multiply *= nums[j];
// //     }
// //   }

// //   arr2.push(multiply);
// // }

// // console.log(arr2);

// let nums = [1, 2, 3, 4];
// let prefix = [],
//   pref = 1;
// let suffix = [],
//   suff = 1;
// let arr2 = [];

// for (let i = 0; i < nums.length; i++) {
//   prefix[i] = pref;
//   pref = pref * nums[i];
// }

// for (let i = nums.length - 1; i >= 0; i--) {
//   suffix[i] = suff;
//   suff *= nums[i];
// }

// for (let j = 0; j < nums.length; j++) {
//   arr2[j] = prefix[j] * suffix[j];
// }
// console.log(prefix);
// console.log(suffix);

// console.log(arr2);

// var maximumSubarraySum = function (nums, k) {
//   const set = new Set();
//   let i = 0,
//     sum = 0,
//     maxSum = 0;

//   for (let j = 0; i < nums.length; j++) {
//     while (set.has(nums[j])) {
//       set.delete(nums[i]);
//       sum -= nums[i];
//       i++;
//     }

//     set.add(nums[j]);
//     sum += nums[j];

//     if (j - i + 1 === k) {
//       maxSum = Math.max(sum, maxSum);
//       set.delete(nums[i]);
//       sum -= nums[i];
//       i++;
//     }
//   }
//   console.log(maxSum);
// };

// maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3);

// var maxScore = function (nums, k) {
//   let lsum = 0,
//     rSum = nums.length - 1;
//   max = 0;

//   for (let i = 0; i < k; i++) {
//     lsum += nums[i];
//   }
//   max = lsum;
//   for (let i = k - 1; i >= 0; i--) {
//     lsum -= nums[i];
//     rSum += nums[i];

//     max = Math.max(lsum, rSum);
//   }
//   console.log(max);
// };

// maxScore([1, 2, 3, 4, 5, 6, 1], 3);

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestConsecutive = function (nums) {
//   nums.sort((a, b) => a - b);

//   let longest = 0;

//   let count = 1;

//   for (let j = 1; j < nums.length; j++) {
//     if (nums[j] === nums[j - 1]) continue;

//     if (nums[j] === nums[j - 1] + 1) {
//       count++;
//     } else {
//       break;
//     }
//   }

//   longest = Math.max(longest, count);

//   return longest;
// };

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4

// longestConsecutive([100, 4, 200, 1, 3, 2]);

// var findMaxAverage = function (nums, k) {
//   let sum = 0;
//   for (let i = 0; i < k; i++) {
//     sum += nums[i];
//   }

//   let max = sum;

//   console.log(max);

//   for (let i = k; i < nums.length; i++) {
//     sum = sum - nums[i - k + 1] + nums[i];
//     max = Math.max(sum, max);
//     return max / k;
//   }
// };

// findMaxAverage([1, 12, -5, -6, 50, 3], 4);

// var maximumSubarraySum = function (nums, k) {
//   let set = new Set();
//   let sum = 0,
//     maxSum = 0;
//   left = 0;

//   for (let i = 0; i < nums.length; i++) {
//     while (set.has(nums[i])) {
//       set.delete(nums[left]);
//       sum = sum - nums[left++];
//     }
//     set.add(nums[i]);
//     sum = sum + nums[i];

//     if (i - left + 1 === k) {
//       maxSum = Math.max(sum, maxSum);
//     }
//   }

//   console.log(maxSum);
// };

// maximumSubarraySum([5, 5, 4, 2, 9, 9, 9], 3);

// var maxScore = function (cardPoints, k) {
//   let lSum = 0,
//     rsum = 0;

//   for (let i = 0; i < k; i++) {
//     lSum += cardPoints[i];
//   }

//   let maxSum = lSum;

//   for (let j = k - 1; j >= 0; j--) {
//     lSum -= cardPoints[j];
//     rsum += cardPoints[j];

//     console.log(lSum);
//     console.log(rsum);

//     maxSum = Math.max(maxSum, lSum + rsum);
//     console.log(maxSum);
//   }

//   console.log(maxSum);
// };

// maxScore([1, 2, 3, 4, 5, 6, 1], 3);

// var lengthOfLongestSubstring = function (s) {
//   let set = new Set();
//   let r = 0,
//     l = 0,
//     max = 0

//   while (r < s.length) {
//     while (set.has(s[r])) {
//       set.delete(s[l]);
//       l++;
//     }
//     set.add(s[r]);

//     max = Math.max(max, r - l + 1);
//     r++;
//   }

//   return max
// };

// lengthOfLongestSubstring("abcabcbb");

// var characterReplacement = function (s, k) {
//   let max = 0,
//     r = 0,
//     maxChar = 0;
//   count = new Array(26).fill(0);

//   for (let i = 0; i < s.length; i++) {
//     const index = s.charCodeAt(i) - "A".charCodeAt(0);
//     count[index]++;

//     maxChar = Math.max(maxChar, count[index]);

//     while (i - r + 1 - maxChar > k) {
//       const leftIdx = s.charCodeAt(r) - "A".charCodeAt(0);
//       count[leftIdx]--;
//       r++;
//     }

//     max = Math.max(i - r + 1, max);
//   }

//   console.log(max);
// }

// characterReplacement("AABABBA", 1);

// var minWindow = function (s, t) {
//   let arr = new Array(126).fill(0);

//   for (let char of t) {
//     arr[char.charCodeAt(0)]++;
//   }

//   let tLength = t.length;
//   let left = 0;

//   let minLenght = Infinity;
//   let minStart = 0;

//   for (let right = 0; right < s.length; right++) {
//     let ch = s.charCodeAt(right);

//     if (arr[ch] > 0) {
//       tLength--;
//     }
//     arr[ch]--;

//     while (tLength === 0) {
//       if (right - left + 1 < minLenght) {
//         minLenght = right - left + 1;
//         minStart = left;
//       }

//       let start = s.charCodeAt(left);
//       arr[start]++;

//       if (arr[start] > 0) {
//         tLength++;
//       }

//       left++;
//     }
//   }

//   return minLenght === Infinity ? "" : s.slice(minStart, minStart + minLenght);
// };

// minWindow("ADOBECODEBANC", "ABC");

// var checkInclusion = function (s1, s2) {
//   const arr = new Array(26).fill(0);

//   for (const s of s1) {
//     const ch = s.charCodeAt(0) - "a".charCodeAt(0);
//     arr[ch]++;
//   }

//   let length = s1.length;

//   for (let r = 0; r < s2.length; r++) {
//     let ch = s2.charCodeAt(r) - "a".charCodeAt(0);

//     if (arr[ch] > 0) {
//       length--;
//     }
//     arr[ch]--;

//     if (r < length - 1) {
//       continue;
//     }

//     if (length === 0) return true;

//     let leftIdx = s2.charCodeAt(r - length + 1) - "a".charCodeAt(0);
//     arr[leftIdx]++;
//     if (arr[leftCh] > 0) count++;
//   }

//   return false;
// };

// checkInclusion("ab", "eidboaooo");

//heap
let arr = [50, 30, 40, 10, 20];

function leftChildren(i) {
  let left = 2 * i + 1;
  return arr[left];
}

function rightChlidren(i) {
  let right = 2 * i + 2;
  return arr[right];
}

function parent(i) {
  let pen = Math.floor((i - 1) / 2);
  return arr[pen];
}

function getChildren(i) {
  let left = leftChildren(i);
  let right = rightChlidren(i);

  return [left, right];
}

function findNonLeafNode(arr) {
  let last = arr.length;

  return Math.floor(last / 2) - 1;
}

//LEVEL 2: Identify Leaf / Non-Leaf
function identifyLeafNode(n) {
  const leafIdx = [],
    nonLeaf = [];
  let nonLeafNode = Math.floor(n / 2) - 1;

  for (let i = 0; i < n; i++) {
    if (i <= nonLeafNode) {
      nonLeaf.push(i);
    } else {
      leafIdx.push(i);
    }
  }

  return {leaves: leafIdx, nonLeaves: nonLeaf};
}
console.log(identifyLeafNode(10));

console.log(findNonLeafNode([9, 8, 7, 6, 5, 4, 3]));

//LEVEL 3: Heap Property Check (Valid ya Invalid)

function isValidMaxHeap(arr1) {
  let i = arr1.length - 1; // fix 1: last valid index se start

  while (i > 0) {
    // fix 2: root ko child ki tarah check nahi karna
    let parent = Math.floor((i - 1) / 2);

    if (arr1[i] > arr1[parent]) {
      return false;
    }
    i--;
  }

  return true;
}

function isValidMinHeap(arr1) {
  let i = arr1.length - 1; // fix 1: last valid index se start

  while (i > 0) {
    // fix 2: root ko child ki tarah check nahi karna
    let parent = Math.floor((i - 1) / 2);

    if (arr1[i] < arr1[parent]) {
      return false;
    }
    i--;
  }

  return true;
}

console.log(isValidMaxHeap([10, 7, 9, 5, 15, 8, 3, 2, 4]));
console.log(isValidMinHeap([1, 3, 2, 0, 5]));

//LEVEL 4: Manual Heapify (Kaagaz Pe Trace Karo)

function heapify(arr, n, i) {
  let larget = i;
  let leftChild = 2 * i + 1;
  let rightChild = 2 * i + 2;

  if (leftChild < n && arr[larget] < arr[leftChild]) {
    larget = leftChild;
  }

  if (rightChild < n && arr[rightChild] > arr[larget]) {
    larget = rightChild;
  }

  if (larget !== i) {
    let temp = arr[i];
    arr[i] = arr[larget];
    arr[larget] = temp;

    heapify(arr, n, larget);
  }
}

function buildMaxHeap(arr) {
  let n = arr.length;

  let findNonleaf = Math.floor(n / 2) - 1;

  for (let i = findNonleaf; i >= 0; i--) {
    heapify(arr, n, i);
  }

  return arr;
}

console.log(buildMaxHeap([1, 12, 9, 5, 6]));

function validMinHeap(arr, k) {
  let i = arr.length;

  while (i > 0) {
    let parent = Math.floor((i - 1) / 2);

    if (arr[i] < arr[parent]) {
      return false;
    }

    i--;
  }
  return true;
}

function minHeapify(arr, n, i) {
  let smallest = i;
  let leftChild = 2 * i + 1;
  let rightChild = 2 * i + 2;

  if (leftChild < n && arr[leftChild] < arr[smallest]) {
    smallest = leftChild;
  }

  if (rightChild < n && arr[rightChild] < arr[smallest]) {
    smallest = rightChild;
  }

  if (smallest !== i) {
    let temp = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = temp;

    minHeapify(arr, n, smallest);
  }
}

function buildMinHeap(arr, k) {
  let n = k; // sirf pehle k elements ka heap banana hai, poore array ka nahi


  for (let i = 0; i < k; i++) {
    minHeapify(arr, n, i);
  }

  for (let i = k; i < arr.length; i++) {
    let currentElem = arr[i]

    if(currentElem > arr[0]){
      arr[0] = currentElem

      minHeapify(arr , k)
    }
    
  }
 
  return arr[0]
}

console.log(buildMinHeap([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
