# 🔍 Largest Rectangle in Histogram

**Approach:** Monotonic Stack

## Problem

Given an array `heights` representing the height of bars in a histogram, return the area of the largest rectangle that can be formed.

> **Time Complexity:** `O(n)`

---

## Example

```text
Input:
heights = [2,1,5,6,2,3]

Output:
10
```

---

## Idea

We use a **monotonic increasing stack** to find the previous and next smaller element for every bar.

- Find the previous smaller element for every bar.
- Find the next smaller element for every bar.
- The previous and next smaller elements tell us how far the current bar can expand.
- Calculate the width using:
  - `rightSmallest - leftSmallest - 1`
- Multiply the width by the current height to get the rectangle area.
- Keep updating the maximum area.

---

## JavaScript Solution

```javascript
var largestRectangleArea = function (heights) {
    const n = heights.length;

    const leftSmallest = new Array(n);
    const rightSmallest = new Array(n);

    const stack = [];

    // Previous Smaller Element
    for (let i = 0; i < n; i++) {
        while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop();
        }

        leftSmallest[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }

    // Clear stack
    stack.length = 0;

    // Next Smaller Element
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop();
        }

        rightSmallest[i] = stack.length ? stack[stack.length - 1] : n;
        stack.push(i);
    }

    let max = 0;

    for (let i = 0; i < n; i++) {
        const width = rightSmallest[i] - leftSmallest[i] - 1;
        const area = heights[i] * width;
        max = Math.max(max, area);
    }

    return max;
};
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(n)`