# 🔍 347. Top K Frequent Elements

**Difficulty:** Medium  
**Approach:** Hash Map + Bucket Sort

## Problem

Given an integer array `nums` and an integer `k`:

- Return the `k` numbers that appear the most.
- The order of the answer doesn't matter.

> **Required Time Complexity:** Better than `O(n log n)`

---

## Examples

```text
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

```text
Input: nums = [1], k = 1
Output: [1]
```

```text
Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
Output: [1,2]
```

---

## Idea

First, count how many times each number appears using a `Map`.

Then, make buckets where each index is a frequency.

- Count the frequency of every number.
- Put each number into its matching bucket.
- Start from the bucket with the highest frequency.
- Keep adding numbers until you have `k` of them.

This is faster than sorting all the frequencies.

---

## JavaScript Solution

```javascript
const map = new Map();

for (const num of nums) {
  map.set(num, (map.get(num) || 0) + 1);
}

const bucket = new Array(nums.length + 1)
  .fill()
  .map(() => []);

for (const [num, freq] of map) {
  bucket[freq].push(num);
}

const result = [];

for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
  for (const num of bucket[i]) {
    result.push(num);

    if (result.length === k) break;
  }
}

return result;
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(n)`