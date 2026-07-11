# 🔍 128. Longest Consecutive Sequence

**Difficulty:** Medium  
**Approach:** Hash Set

## Problem

Given an unsorted array of integers `nums`:

- Return the length of the longest consecutive sequence.
- Consecutive numbers must be next to each other in value (e.g. `1,2,3,4`).
- The algorithm must run in **O(n)** time.

---

## Examples

```text
Input: nums = [100,4,200,1,3,2]
Output: 4

Explanation:
The longest consecutive sequence is [1,2,3,4].
```

```text
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```

```text
Input: nums = [1,0,1,2]
Output: 3
```

---

## Idea

Use a `Set` so we can check if a number exists in **O(1)** time.

- Put all numbers into a `Set`.
- For each number, check if `num - 1` exists.
- If it does, skip it because it's not the start of a sequence.
- If it doesn't, this number is the beginning of a new sequence.
- Keep checking `num + 1`, `num + 2`, ... until the sequence ends.
- Track the maximum sequence length.

This way, every number is visited at most once.

---

## JavaScript Solution

```javascript
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const set = new Set(nums);
  let longest = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let count = 1;

      while (set.has(current + 1)) {
        current++;
        count++;
      }

      longest = Math.max(longest, count);
    }
  }

  return longest;
};
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(n)`