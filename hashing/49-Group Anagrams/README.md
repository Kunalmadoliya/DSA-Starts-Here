# 🔍 49. Group Anagrams

**Difficulty:** Medium  
**Approach:** Hash Map + Sorting

## Problem

Given an array of strings `strs`:

- Group all strings that are anagrams of each other.
- Return the grouped anagrams in any order.

> **Required Time Complexity:** Better than comparing every string with every other string.

---

## Examples

```text
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

```text
Input: strs = [""]

Output: [[""]]
```

```text
Input: strs = ["a"]

Output: [["a"]]
```

---

## Idea

Anagrams have the same letters, just in a different order.

- Create a hash map.
- For every word, sort its letters.
- Use the sorted word as the key.
- If the key is not in the map, create an empty array.
- Push the original word into that array.
- At the end, return all the values from the map.

For example:

```text
eat → aet
tea → aet
ate → aet

Map

aet → ["eat", "tea", "ate"]
```

Since all anagrams have the same sorted word, they end up in the same group.

---

## JavaScript Solution

```javascript
var groupAnagrams = function (strs) {
    const map = new Map();

    for (const word of strs) {
        const key = word.split("").sort().join("");

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(word);
    }

    return [...map.values()];
};
```

---

## Complexity

- **Time:** `O(n × k log k)`  
  *(where `n` is the number of strings and `k` is the average length of a string)*
- **Space:** `O(n)` *(excluding the output array)*