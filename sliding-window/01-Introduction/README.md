# 🪟 Sliding Window

Sliding Window is a technique used when we need to work with **contiguous (continuous) subarrays or substrings**.

Instead of calculating the sum of every window again and again, we reuse the previous window's result.

For every new window:

- Remove the element that moves out.
- Add the new element that comes in.

This makes the solution much faster.

---

# 🔍 Maximum Sum Subarray of Size K

**Approach:** Sliding Window

## Problem

Given an array `arr` and an integer `k`:

- Find the maximum sum of any contiguous subarray of size `k`.

> **Time Complexity:** `O(n)`

---

## Example

```text
Input:
arr = [1, 12, -5, -6, 50, 3]
k = 4

Output:
51
```

---

## Idea

First, find the sum of the first `k` elements.

Then, instead of calculating the next window from scratch:

- Remove the leftmost element.
- Add the next element.
- Update the maximum sum if the new window is larger.

Repeat this until you've checked every window.

---

## Code Explanation

### 1. Find the first window

```javascript
let sum = 0;

for (let i = 0; i < k; i++) {
  sum += arr[i];
}
```

Add the first `k` elements together. This gives us the sum of the first window.

---

### 2. Save the current maximum

```javascript
let maxSum = sum;
```

Right now, we've only seen one window, so its sum is the maximum.

---

### 3. Slide the window

```javascript
for (let i = k; i < arr.length; i++) {
  sum = sum - arr[i - k] + arr[i];
  maxSum = Math.max(maxSum, sum);
}
```

For every new window:

- Remove the element that's no longer in the window.
- Add the new element.
- Compare the new sum with `maxSum`.

This way, we don't have to calculate the whole window again.

---

### 4. Print the answer

```javascript
console.log(maxSum);
```

After checking every window, `maxSum` stores the largest sum.

---

## JavaScript Solution

```javascript
let arr = [1, 12, -5, -6, 50, 3];
let k = 4;

let sum = 0;

for (let i = 0; i < k; i++) {
  sum += arr[i];
}

let maxSum = sum;

for (let i = k; i < arr.length; i++) {
  sum = sum - arr[i - k] + arr[i];
  maxSum = Math.max(maxSum, sum);
}

console.log(maxSum);
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(1)`
