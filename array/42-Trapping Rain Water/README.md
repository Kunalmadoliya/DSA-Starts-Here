# 🔍 42. Trapping Rain Water

**Difficulty:** Hard  
**Approach 1:** Brute Force (Scan Left & Right)  
**Approach 2:** Prefix & Suffix Maximum Arrays

---

## Problem

Given an array `height` where each number represents the height of a bar:

- Each bar has width `1`.
- Find how much rainwater can be trapped after raining.

> **Required Time Complexity:** `O(n)` (optimal solution)

---

## Example

```text
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

```text
Input: height = [4,2,0,3,2,5]
Output: 9
```

---

# Approach 1 — Brute Force

## Idea

For every bar:

- Find the tallest bar on the left.
- Find the tallest bar on the right.
- Water above the current bar is:

```text
min(leftMax, rightMax) - currentHeight
```

Add this for every index.

---

## JavaScript Solution

```javascript
let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let max = 0;

for (let i = 0; i < arr.length; i++) {
  let maxLeft = 0;
  let maxRight = 0;

  for (let j = 0; j <= i; j++) {
    maxLeft = Math.max(maxLeft, arr[j]);
  }

  for (let k = i; k < arr.length; k++) {
    maxRight = Math.max(maxRight, arr[k]);
  }

  max += Math.min(maxLeft, maxRight) - arr[i];
}

console.log(max);
```

---

## Complexity

- **Time:** `O(n²)`
- **Space:** `O(1)`

---

# Approach 2 — Better (Prefix & Suffix Arrays)

## Idea

Instead of finding the left and right maximum for every bar again and again:

- Store the highest bar from the left in `maxL`.
- Store the highest bar from the right in `maxR`.
- Then for every index:

```text
water = min(maxL[i], maxR[i]) - height[i]
```

This avoids scanning the array repeatedly.

---

## JavaScript Solution

```javascript
const n = height.length;

if (n === 0) return 0;

const maxL = new Array(n);
maxL[0] = height[0];

for (let i = 1; i < n; i++) {
  maxL[i] = Math.max(maxL[i - 1], height[i]);
}

const maxR = new Array(n);
maxR[n - 1] = height[n - 1];

for (let i = n - 2; i >= 0; i--) {
  maxR[i] = Math.max(maxR[i + 1], height[i]);
}

let total = 0;

for (let i = 0; i < n; i++) {
  total += Math.min(maxL[i], maxR[i]) - height[i];
}

return total;
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(n)`