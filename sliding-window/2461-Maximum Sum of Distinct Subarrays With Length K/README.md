# 🔍 Maximum Sum of Distinct Subarrays With Length K

**Approach:** Sliding Window + Set

## Problem

Given an integer array `nums` and an integer `k`:

- Find the subarray of size `k`.
- Every element inside the subarray must be **distinct**.
- Return the **maximum sum** among all valid subarrays.
- If no valid subarray exists, return `0`.

> **Time Complexity:** `O(n)`

---

## Example

```text
Input:
nums = [1,5,4,2,9,9,9]
k = 3

Output:
15
```

---

## Idea

We use a **Sliding Window** and a **Set**.

- The Set keeps track of all unique elements in the current window.
- If we find a duplicate, we remove elements from the left until the duplicate is gone.
- Keep updating the current window sum.
- Whenever the window size becomes `k`, update the maximum sum.
- Then slide the window by removing the leftmost element.

This lets us process every element only once without recalculating the sum.

---

## JavaScript Solution

```javascript
var maximumSubarraySum = function (nums, k) {
  let set = new Set();
  let maxSum = 0,
    sum = 0,
    l = 0;

  for (let r = 0; r < nums.length; r++) {
    while (set.has(nums[r])) {
      set.delete(nums[l]);
      sum -= nums[l++];
    }

    set.add(nums[r]);
    sum += nums[r];

    if (r - l + 1 === k) {
      maxSum = Math.max(maxSum, sum);
      set.delete(nums[l]);
      sum -= nums[l++];
    }
  }

  return maxSum;
};
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(k)`