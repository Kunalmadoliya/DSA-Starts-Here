# 🔍 238. Product of Array Except Self

**Difficulty:** Medium  
**Approach:** Prefix & Suffix Product

## Problem

Given an integer array `nums`:

- Return an array `answer` where `answer[i]` is the product of every element except `nums[i]`.
- Do **not** use the division operator.
- The solution must run in **O(n)** time.

> **Follow-up:** Can you solve it using **O(1)** extra space? (The output array does not count.)

---

## Examples

```text
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

```text
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

---

## Idea

Instead of multiplying every element for each index:

- First, store the product of all elements to the **left** of every index.
- Then, traverse from right to left while keeping a running **suffix product**.
- Multiply the left product with the suffix product to get the final answer.
- This avoids division and runs in linear time.

---

## JavaScript Solution

```javascript
let prefixProduct = 1;
let suffixProduct = 1;

const answer = new Array(nums.length);

for (let i = 0; i < nums.length; i++) {
  answer[i] = prefixProduct;
  prefixProduct *= nums[i];
}

for (let i = nums.length - 1; i >= 0; i--) {
  answer[i] *= suffixProduct;
  suffixProduct *= nums[i];
}

return answer;
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(1)` *(excluding the output array)*