# 🔍 Maximum Average Subarray I

**Approach:** Sliding Window

## Problem

Given an integer array `nums` and an integer `k`:

- Find the contiguous subarray of size `k`.
- Return the **maximum average** among all possible subarrays of length `k`.

> **Time Complexity:** `O(n)`

---

## Example

```text
Input:
nums = [1, 12, -5, -6, 50, 3]
k = 4

Output:
12.75
```

---

## Idea

Instead of calculating the sum of every subarray from scratch:

1. Find the sum of the first `k` elements.
2. Store it as the current maximum sum.
3. Slide the window one element at a time:
   - Remove the leftmost element.
   - Add the new rightmost element.
4. Keep updating the maximum sum.
5. Return `maxSum / k`.

This avoids recalculating the entire sum for every window.

---

## JavaScript Solution

```javascript
var findMaxAverage = function (nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxSum = sum;

  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
};
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(1)`