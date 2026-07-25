# 🔍 Min Stack

**Approach:** Two Stacks

## Problem

Design a stack that supports these operations in **O(1)** time:

- `push(value)`
- `pop()`
- `top()`
- `getMin()`

`getMin()` should always return the minimum element currently in the stack.

> **Time Complexity:** `O(1)` for every operation.

---

## Example

```text
Input:
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output:
[null,null,null,null,-3,null,0,-2]
```

---

## Idea

We use **two stacks**.

- One stack stores all the values.
- The second stack stores the minimum values.
- When we push a value, we also push it into the minimum stack if it is smaller than or equal to the current minimum.
- When we pop a value, we also remove it from the minimum stack if it is the current minimum.
- The top of the minimum stack always gives the minimum value in **O(1)** time.

---

## JavaScript Solution

```javascript
var MinStack = function () {
    this.item = [];
    this.minStack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
    this.item.push(value);

    if (
        this.minStack.length === 0 ||
        value <= this.minStack[this.minStack.length - 1]
    ) {
        this.minStack.push(value);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.item.length === 0) return null;

    const removed = this.item.pop();

    if (removed === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }

    return removed;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.item.length === 0) return null;
    return this.item[this.item.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.minStack.length === 0) return null;
    return this.minStack[this.minStack.length - 1];
};
```

---

## Complexity

- **Push:** `O(1)`
- **Pop:** `O(1)`
- **Top:** `O(1)`
- **getMin:** `O(1)`
- **Space:** `O(n)`