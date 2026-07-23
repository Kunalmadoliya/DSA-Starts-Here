# 🔍 Decode String

**Approach:** Stack

## Problem

Given an encoded string `s`, decode it.

The format is:

```text
k[encoded_string]
```

where the string inside the brackets is repeated `k` times.

> **Time Complexity:** `O(n)`

---

## Example

```text
Input:
s = "3[a2[c]]"

Output:
"accaccacc"
```

---

## Idea

We use a **stack**.

- Push every character into the stack until we find `]`.
- When we see `]`, keep popping characters to build the current string until we reach `[`.
- After that, pop the number before `[` (it can have multiple digits).
- Repeat the string that many times.
- Push the decoded string back into the stack.
- At the end, join everything left in the stack.

This also works for nested brackets because the inner string gets decoded first.

---

## JavaScript Solution

```javascript
var decodeString = function (s) {
    const stack = [];

    for (const char of s) {
        if (char !== "]") {
            stack.push(char);
            continue;
        }

        let cur = stack.pop();
        let str = "";

        while (cur !== "[") {
            str = cur + str;
            cur = stack.pop();
        }

        let num = "";
        cur = stack.pop();

        while (!Number.isNaN(Number(cur))) {
            num = cur + num;
            cur = stack.pop();
        }

        stack.push(cur);
        stack.push(str.repeat(Number(num)));
    }

    return stack.join("");
};
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(n)`