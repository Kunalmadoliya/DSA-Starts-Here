# 🔍 Permutation in String

**Approach:** Fixed Size Sliding Window

## Problem

Given two strings `s1` and `s2`:

- Return `true` if any permutation of `s1` exists as a substring in `s2`.
- Otherwise, return `false`.

> **Time Complexity:** `O(n)`

---

## Example

```text
Input:
s1 = "ab"
s2 = "eidbaooo"

Output:
true

Explanation:
The substring "ba" is a permutation of "ab".
```

---

## Idea

A permutation has the **same characters** but the order can be different.

For example:

```text
"ab" → "ab", "ba"
```

Both have the same character frequencies.

Instead of checking every possible permutation, we use a **fixed-size sliding window**.

- Count the frequency of characters in `s1`.
- Create another frequency array for the current window in `s2`.
- Move the window one character at a time.
- If the window becomes larger than `s1.length`, remove the leftmost character.
- Whenever the window size is equal to `s1.length`, compare both frequency arrays.
- If they are the same, we found a permutation.

Since the window size never changes, the solution is simple and efficient.

---

## JavaScript Solution

```javascript
var checkInclusion = function (s1, s2) {

    function isFreqSame(map1, map2) {
        for (let i = 0; i < 26; i++) {
            if (map1[i] !== map2[i]) {
                return false;
            }
        }
        return true;
    }

    if (s1.length > s2.length) return false;

    const map = new Array(26).fill(0);
    const map2 = new Array(26).fill(0);

    for (let ch of s1) {
        map[ch.charCodeAt(0) - 97]++;
    }

    let left = 0;

    for (let right = 0; right < s2.length; right++) {

        map2[s2.charCodeAt(right) - 97]++;

        if (right - left + 1 > s1.length) {
            map2[s2.charCodeAt(left) - 97]--;
            left++;
        }

        if (right - left + 1 === s1.length) {
            if (isFreqSame(map, map2)) {
                return true;
            }
        }
    }

    return false;
};
```

---

## Complexity

- **Time:** `O(n)` — each character is added and removed from the window at most once.
- **Space:** `O(1)` — we only use two frequency arrays of size 26.