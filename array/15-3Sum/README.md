# 🔍 15. 3Sum

**Difficulty:** Medium  
**Approach:** Sorting + Two Pointers

## Problem

Given an integer array `nums`:

- Find all unique triplets `[nums[i], nums[j], nums[k]]` such that:
  - `i != j`
  - `i != k`
  - `j != k`
- The sum of the three numbers must be `0`.
- The solution must **not contain duplicate triplets**.

> **Required Time Complexity:** `O(n²)`

---

## Examples

```text
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
```

```text
Input: nums = [0,1,1]
Output: []
```

```text
Input: nums = [0,0,0]
Output: [[0,0,0]]
```

---

## Idea

Since the array can be sorted, use **Sorting + Two Pointers**.

- Sort the array first.
- Fix one number using a loop.
- Use two pointers to find the remaining two numbers.
- If the sum is too small, move the left pointer.
- If the sum is too large, move the right pointer.
- If the sum is `0`, store the triplet.
- Skip duplicate values for the fixed number and both pointers to avoid duplicate triplets.

---

## JavaScript Solution

```javascript
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        if (nums[i] > 0) break;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};
```

---

## Complexity

- **Time:** `O(n²)`
- **Space:** `O(1)` *(excluding the output array)*