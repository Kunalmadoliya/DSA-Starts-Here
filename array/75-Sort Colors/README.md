# 🔍 75. Sort Colors

**Difficulty:** Medium  
**Approach:** Dutch National Flag (Three Pointers)

## Problem

Given an array `nums` containing only `0`, `1`, and `2`:

- Sort the array in-place.
- `0` should come first, then `1`, then `2`.
- Do not use any built-in sort function.

> **Required Time Complexity:** `O(n)`

---

## Examples

```text
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

```text
Input: nums = [2,0,1]
Output: [0,1,2]
```

---

## Idea

Use three pointers.

- `i` keeps track of where the next `0` should go.
- `j` checks each element.
- `k` keeps track of where the next `2` should go.
- If the value is `0`, swap it to the front.
- If the value is `1`, just move ahead.
- If the value is `2`, swap it to the end.

---

## JavaScript Solution

```javascript
let arr = [2, 0, 2, 1, 1, 0];

let i = 0,
    j = 0,
    k = arr.length - 1;

while (j <= k) {
    if (arr[j] === 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j++;
    } else if (arr[j] === 1) {
        j++;
    } else {
        [arr[j], arr[k]] = [arr[k], arr[j]];
        k--;
    }
}

console.log(arr);
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(1)`