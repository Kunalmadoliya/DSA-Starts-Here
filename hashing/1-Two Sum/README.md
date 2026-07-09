# 🔍 Two Sum using Hash Map

**Approach:** Hash Map (`Set`)

## Problem

Given an array of numbers and a target:

- Find two numbers whose sum equals the target.
- Print the matching pair.
- Use a hash map approach for better performance.

> **Time Complexity:** `O(n)`

---

## Example

```text
Input:
arr = [3, 2, 5, 6, 4, 9, 5]
target = 10

Output:
6 4
```

---

## Idea

Store visited numbers in a `Set`.

- Calculate the complement (`target - currentNumber`).
- If the complement is already in the `Set`, you've found the pair.
- Otherwise, store the current number and continue.

This avoids checking every pair.

---

## JavaScript Solution

```javascript
const arr = [3, 2, 5, 6, 4, 9, 5];
const target = 10;

let set = new Set();

for (let i = 0; i < arr.length; i++) {
  let complement = target - arr[i];

  if (set.has(arr[i])) continue;

  if (set.has(complement)) {
    console.log(arr[i], complement);
  } else {
    set.add(arr[i]);
  }
}
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(n)`