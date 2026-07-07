// Optimized · hash map time O(n) space O(n)

const arr = [3, 2, 5, 6, 4, 9, 5];
target = 10;

let set = new Set();

for (let i = 0; i < arr.length; i++) {
  let newSum = target - arr[i];

  if (set.has(arr[i])) continue;

  if (set.has(newSum)) {
    console.log(arr[i], newSum);
  } else {
    set.add(arr[i]);
  }
}

console.log(set);
