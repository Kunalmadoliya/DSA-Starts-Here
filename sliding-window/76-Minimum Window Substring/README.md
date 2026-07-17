# 🔍 Minimum Window Substring

**Approach:** Sliding Window

## Problem

Given two strings `s` and `t`:

- Find the **smallest substring** of `s` that contains every character of `t`.
- If no such substring exists, return `""`.

> **Time Complexity:** `O(n)`

---

## Example

```text
Input:
s = "ADOBECODEBANC"
t = "ABC"

Output:
"BANC"
```

---

## Idea

We use a **sliding window**.

1. Count the frequency of each character in `t`.
2. Expand the window by moving the `right` pointer.
3. Once all required characters are present, try to shrink the window from the left.
4. Keep updating the smallest valid window.

Since each character is visited at most twice, the solution runs in linear time.

---

## JavaScript Solution

```javascript
var minWindow = function (s, t) {
    if (s.length < t.length) return "";

    const map = new Array(128).fill(0);

    for (let ch of t) {
        map[ch.charCodeAt(0)]++;
    }

    let start = 0;
    let minStart = 0;
    let minLen = Infinity;
    let count = t.length;

    for (let right = 0; right < s.length; right++) {

        const rightChar = s.charCodeAt(right);

        if (map[rightChar] > 0) {
            count--;
        }

        map[rightChar]--;

        while (count === 0) {

            if (right - start + 1 < minLen) {
                minLen = right - start + 1;
                minStart = start;
            }

            const leftChar = s.charCodeAt(start);

            map[leftChar]++;

            if (map[leftChar] > 0) {
                count++;
            }

            start++;
        }
    }

    return minLen === Infinity
        ? ""
        : s.slice(minStart, minStart + minLen);
};
```

---

## Complexity

- **Time:** `O(n)` — each character is processed at most twice.
- **Space:** `O(1)` — fixed-size frequency array.