# 🔍 Longest Repeating Character Replacement

**Approach:** Sliding Window

## Problem

Given a string `s` and an integer `k`:

- You can replace **at most `k` characters** with any uppercase English letter.
- Return the **length of the longest substring** that can be made of the same character after the replacements.

> **Time Complexity:** `O(n)`

---

## Example

```text
Input:
s = "AABABBA"
k = 1

Output:
4

Explanation:
Replace the middle 'A' with 'B' to get "AABBBBA".
The longest substring containing the same character is "BBBB", whose length is 4.
```

---

## Idea

Instead of checking every possible substring, we use a **sliding window**.

For every window:

1. Count the frequency of each character.
2. Keep track of the frequency of the **most common character** (`maxFreq`).
3. The remaining characters are the ones that need to be replaced.

```text
replacementsNeeded = windowSize - maxFreq
```

- If `replacementsNeeded <= k`, the window is valid.
- Otherwise, shrink the window from the left until it becomes valid again.
- Keep updating the maximum valid window size.

Since each character enters and leaves the window at most once, the algorithm runs in linear time.

---

## JavaScript Solution

```javascript
var characterReplacement = function (s, k) {
  let left = 0;
  let maxLen = 0;
  let maxFreq = 0;

  const count = new Array(26).fill(0);

  for (let right = 0; right < s.length; right++) {
    const index = s.charCodeAt(right) - "A".charCodeAt(0);

    count[index]++;
    maxFreq = Math.max(maxFreq, count[index]);

    while (right - left + 1 - maxFreq > k) {
      const leftIndex = s.charCodeAt(left) - "A".charCodeAt(0);
      count[leftIndex]--;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};
```

---

## Complexity

- **Time:** `O(n)` — each character is processed at most twice (once when entering the window and once when leaving).
- **Space:** `O(1)` — the frequency array always stores counts for only 26 uppercase English letters.