//brute force time O(n³) space O(n)

// const nums = [-4, -1, -1, 0, 1, 2];
// const set = new Set();
// const result = [];

// for (let i = 0; i < nums.length - 2; i++) {
//   for (let j = i + 1; j < nums.length - 1; j++) {
//     for (let k = j + 1; k < nums.length; k++) {
//       if (nums[i] + nums[j] + nums[k] === 0) {
//         const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b); // in ascending order [-1 -1  2]

//         const key = triplet.join(","); // -1,-1,2

//         if (!set.has(key)) {
//           set.add(key); //only unique value gets added
//           result.push(triplet);
//         }
//       }
//     }
//   }
// }

// return result;

// Optimized  time O(n²)  space O(1)

const nums = [-4, -1, -1, 0, 1, 2];
const result = [];

nums.sort((a,b) => a - b)

for (let i = 0; i < nums.length - 2; i++) {
  if (i > 0 && nums[i] === nums[i - 1]) {
    continue;
  }
  if (nums[i] > 0)  break // sored order if it is bigger than zero the solution can never be zero 

  let j = i + 1;
  let k = nums.length - 1;

  while (j < k) {
    const sum = nums[i] + nums[j] + nums[k];

    if (sum === 0) {
      result.push([nums[i], nums[j], nums[k]]);
      j++;
      k--;
      while (j < k && nums[j] === nums[j - 1]) j++; // for duplicated
      while (j < k && nums[k] === nums[k + 1]) k--; // for duplicated
    } else if (sum < 0) j++;
    else k--;
  }
}

console.log(result);
