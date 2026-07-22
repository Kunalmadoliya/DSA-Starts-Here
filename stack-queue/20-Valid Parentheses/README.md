# 🔍 Valid Parentheses

**Approach:** Stack

## Problem

Given a string `s` containing only:

```text
( ) { } [ ]
```

Return `true` if every opening bracket has the correct closing bracket in the correct order. Otherwise, return `false`.

> **Time Complexity:** `O(n)`

---

## Example

```text
Input:
s = "([])"

Output:
true
```

---

## Idea

We use a **stack**.

- If it's an opening bracket, push it into the stack.
- If it's a closing bracket, check the top of the stack.
- If the top matches, pop it.
- If it doesn't match (or the stack is empty), return `false`.
- At the end, the stack should be empty.

If nothing is left in the stack, the string is valid.

---

## JavaScript Solution

```javascript
var isValid = function (s) {
  const stack = [];

  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;

      const top = stack.pop();

      if (top !== map[char]) return false;
    }
  }

  return stack.length === 0;
};
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(n)`