# 🔍 35. Search Insert Position

**Difficulty:** Easy
**Approach:** Binary Search

## Problem

Given a sorted array of distinct integers and a target value:

* Return the index if the target exists.
* Otherwise, return the index where it should be inserted.

> **Required Time Complexity:** `O(log n)`

---

## Examples

```text
Input: nums = [1,3,5,6], target = 5
Output: 2
```

```text
Input: nums = [1,3,5,6], target = 2
Output: 1
```

```text
Input: nums = [1,3,5,6], target = 7
Output: 4
```

---

## Idea

Since the array is sorted, use **Binary Search**.

* If the target is found, return its index.
* If not found, return `left`, which is the correct insertion position.

---

## JavaScript Solution

```javascript
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};
```

---

## Complexity

* **Time:** `O(log n)`
* **Space:** `O(1)`
