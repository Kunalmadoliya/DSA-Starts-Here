// Count + sort time O(n log n) space O(n)

const arr = [1, 1, 1, 2, 2, 3];

let mySet = {};

k = 2;
for (let i = 0; i < arr.length; i++) {
  if (mySet[arr[i]]) {
    mySet[arr[i]]++;
  } else {
    mySet[arr[i]] = 1;
  }
}

const entries = Object.entries(mySet);

entries.sort((a, b) => b[1] - a[1]);

const ans = [];

for (let i = 0; i < k; i++) {
  ans.push(Number(entries[i][0]));
}

// console.log(ans);

// Optimized · bucket sort time O(n) space O(n)

let map = new Map();

for (let i = 0; i < arr.length; i++) {
  map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}

const bucket = new Array(arr.length - 1).fill().map(() => []); //fill kardo indexes with empty array so in the future hum inn empty array mai apni values push kar paye

for (let [key, value] of map) {
  bucket[value].push(key);
}
const result = [];
for (let j = bucket.length - 1; j >= 0 && result.length < k; j--) {
  for (const nums of bucket[j]) {
    result.push(nums);

    if (result.length === k) break;
  }
}

console.log(result);

console.log(map);

console.log(bucket);
