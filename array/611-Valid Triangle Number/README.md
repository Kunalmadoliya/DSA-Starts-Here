# 🔺 611. Valid Triangle Number

**Difficulty:** Medium  
**Approach:** Sorting + Two Pointers

## Problem

You are given an array `nums`.

Return the total number of triplets that can make a **valid triangle**.

A triangle is valid when:

```text
smallest + middle > largest
```

---

## Examples

```text
Input: nums = [2,2,3,4]
Output: 3
```

```text
Input: nums = [4,2,3,4]
Output: 4
```

---

## Idea

First, sort the array.

Now fix the largest side (`k`).

Use two pointers:

- `i` starts from the left.
- `j` starts just before `k`.

If:

```text
nums[i] + nums[j] > nums[k]
```

then the current pair works.

Since the array is sorted, every element between `i` and `j - 1` will also work with `j`.

So instead of checking them one by one, count them all together:

```javascript
count += (j - i);
```

If the sum is too small, move `i` to the right.

If the sum is valid, move `j` to the left and repeat.

---

## Why `count += (j - i)`?

Suppose:

```text
nums = [2,3,4,5]
```

If:

```text
2 + 4 > 5 ✅
```

then these are also valid:

```text
3 + 4 > 5 ✅
```

So instead of doing:

```javascript
count++;
count++;
```

we simply do:

```javascript
count += (j - i);
```

This counts all the valid pairs at once.

---

## JavaScript Solution

```javascript
var triangleNumber = function(nums) {
    nums.sort((a, b) => a - b);

    let count = 0;

    for (let k = nums.length - 1; k >= 2; k--) {
        let i = 0;
        let j = k - 1;

        while (i < j) {
            if (nums[i] + nums[j] > nums[k]) {
                count += (j - i);
                j--;
            } else {
                i++;
            }
        }
    }

    return count;
};
```

---

## Complexity

- **Time:** `O(n²)`
- **Space:** `O(1)`