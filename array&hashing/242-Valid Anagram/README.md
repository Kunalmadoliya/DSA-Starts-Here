# 🔍 242. Valid Anagram

**Difficulty:** Easy  
**Approach:** Hash Map

## Problem

Given two strings `s` and `t`:

- Return `true` if `t` is an anagram of `s`.
- Return `false` otherwise.

> **Required Time Complexity:** `O(n)`

---

## Examples

```text
Input: s = "anagram", t = "nagaram"
Output: true
```

```text
Input: s = "rat", t = "car"
Output: false
```

---

## Idea

Count how many times each character appears in both strings.

- If the lengths are different, return `false`.
- Store the character count for both strings.
- Compare the counts.
- If every character count matches, return `true`.
- Otherwise, return `false`.

---

## JavaScript Solution

```javascript
if (s.length !== t.length) return false;

const countS = {};
const countT = {};

for (let i = 0; i < s.length; i++) {
  countS[s[i]] = (countS[s[i]] || 0) + 1;
  countT[t[i]] = (countT[t[i]] || 0) + 1;
}

for (let key in countS) {
  if (countS[key] !== countT[key]) {
    return false;
  }
}

return true;
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(n)`