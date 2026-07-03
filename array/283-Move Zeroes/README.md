# 🔍 283. Move Zeroes

**Difficulty:** Easy  
**Approach:** Same Direction Two Pointers

## Problem

Given an array `nums`:

- Move all `0`s to the end.
- Keep the order of non-zero numbers the same.
- Do it **in-place** without using another array.

> **Required Time Complexity:** `O(n)`

---

## Examples

```text
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

```text
Input: nums = [0]
Output: [0]
```

---

## Idea

Use two pointers.

- `i` points to the first `0`.
- `j` looks for the next non-zero number.
- When `j` finds one, swap it with `i`.
- Keep moving both pointers until the array is finished.

---

## JavaScript Solution

```javascript
const arr = [0, 1, 0, 3, 12];

let i = 0;
let j = i + 1;

while (j < arr.length) {
    if (arr[j] !== 0 && arr[i] === 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j++;
    } else if (arr[j] === 0) {
        j++;
    } else if (arr[i] !== 0) {
        i++;
        if (i === j) j++;
    }
}

console.log(arr);
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(1)`