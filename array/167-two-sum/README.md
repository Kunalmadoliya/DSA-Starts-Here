# 🔍 167. Two Sum II – Input Array Is Sorted

**Difficulty:** Medium  
**Approach:** Two Pointers

## Problem

Given a **1-indexed** sorted array `numbers` and an integer `target`:

- Find two numbers whose sum equals `target`.
- Return their **1-based indices**.
- Exactly **one solution** exists.
- You cannot use the same element twice.

> **Required Time Complexity:** `O(n)`

---

## Examples

```text
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
```

```text
Input: numbers = [2,3,4], target = 6
Output: [1,3]
```

```text
Input: numbers = [-1,0], target = -1
Output: [1,2]
```

---

## Idea

Since the array is already sorted, use **Two Pointers**.

- Start one pointer from the beginning.
- Start another from the end.
- If the sum is too small, move the left pointer.
- If the sum is too large, move the right pointer.
- When the sum equals the target, return the **1-based indices**.

---

## JavaScript Solution

```javascript
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;

    while (i <= j) {
        if (numbers[i] + numbers[j] === target) {
            return [i + 1, j + 1];
        }

        if (numbers[i] + numbers[j] > target) {
            j--;
        } else {
            i++;
        }
    }
};
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(1)`