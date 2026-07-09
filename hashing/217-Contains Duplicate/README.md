# 🔍 217. Contains Duplicate

**Difficulty:** Easy  
**Approach:** Hash Set

## Problem

Given an integer array `nums`:

- Return `true` if any value appears more than once.
- Return `false` if all values are unique.

> **Required Time Complexity:** `O(n)`

---

## Examples

```text
Input: nums = [1,2,3,1]
Output: true
```

```text
Input: nums = [1,2,3,4]
Output: false
```

```text
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

---

## Idea

Use a `Set` to keep track of the numbers you've already seen.

- Check if the current number is already in the `Set`.
- If it is, return `true`.
- Otherwise, add it to the `Set`.
- If the loop finishes, return `false`.

---

## JavaScript Solution

```javascript
let set = new Set();

for (let i = 0; i < nums.length; i++) {
  if (set.has(nums[i])) {
    return true;
  }

  set.add(nums[i]);
}

return false;
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(n)`