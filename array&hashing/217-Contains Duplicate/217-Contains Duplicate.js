// Brute force time O(n²) space O(1)

let nums = [
  7, 10, 5, 5, 6, 6, 4, 10, 5, 4, 9, 4, 9, 6, 5, 9, 6, 3, 6, 5, 6, 7, 7, 4, 9,
  9, 10, 5, 8, 1, 8, 3, 2, 7, 5, 10, 1, 8, 5, 8, 4, 3, 6, 4, 9, 4, 2, 8, 3, 2,
  2, 1, 5, 6, 3, 2, 6, 1, 8, 6, 2, 9, 1, 4, 5, 10, 8, 5, 10, 5, 10, 1, 4, 8, 3,
  6, 4, 10, 9, 1, 1, 1, 2, 2, 9, 6, 6, 8, 1, 9, 2, 5, 5, 2, 1, 8, 5, 2, 3, 10,
];

// if (nums.length === 1) return false;
// for (let i = 0; i < nums.length - 1; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] === nums[j]) {
//       return true;
//     }
//   }
// }
// console.log(false);

// Optimized · set time O(n) space O(n)

let set = new Set();
let duplicate = false;

for (let i = 0; i < nums.length; i++) {
  if (set.has(nums[i])) {
    duplicate = true;
    break;
  }
  set.add(nums[i]);
}

console.log(set);

console.log(duplicate);
