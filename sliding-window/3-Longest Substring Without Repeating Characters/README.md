# 🔍 Longest Substring Without Repeating Characters

**Approach:** Sliding Window + Set

## Problem

Given a string `s`:

- Find the length of the longest substring without repeating characters.
- Return only the length of that substring.

> **Time Complexity:** `O(n)`

---

## Example

```text
Input:
s = "pwwkew"

Output:
3
```

---

## Idea

Instead of checking every possible substring:

1. Keep a window using two pointers (`i` and `j`).
2. Use a `Set` to store the characters inside the current window.
3. If the current character is already in the `Set`, move the left pointer (`i`) and remove characters until the duplicate is gone.
4. Add the current character to the `Set`.
5. The current window length is `j - i + 1`.
6. Keep updating the maximum length.

This way, every character is added and removed at most once.

---

## JavaScript Solution

```javascript
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let max = 0;
  let i = 0;

  for (let j = 0; j < s.length; j++) {
    while (set.has(s[j])) {
      set.delete(s[i]);
      i++;
    }

    set.add(s[j]);
    max = Math.max(max, j - i + 1);
  }

  return max;
};
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(n)`