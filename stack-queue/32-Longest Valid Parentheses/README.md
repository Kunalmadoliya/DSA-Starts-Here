# 🔍 Longest Valid Parentheses

**Approach:** Stack

## Problem

Given a string containing only `(` and `)`, return the length of the longest valid (well-formed) parentheses substring.

> **Time Complexity:** `O(n)`

---

## Example

```text
Input:
s = ")()())"

Output:
4
```

---

## Idea

We use a **stack** to keep track of indices.

- Start by pushing `-1` into the stack. It acts as a base index.
- If we see `(`, push its index into the stack.
- If we see `)`, pop one index from the stack.
- If the stack becomes empty, push the current index. This becomes the new boundary.
- Otherwise, calculate the current valid length using the current index and the top of the stack.
- Keep updating the maximum length.

---

## JavaScript Solution

```javascript
var longestValidParentheses = function(s) {
    const stack = [-1];
    let max_len = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else {
            stack.pop();

            if (stack.length === 0) {
                stack.push(i);
            } else {
                max_len = Math.max(max_len, i - stack[stack.length - 1]);
            }
        }
    }

    return max_len;
};
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(n)`