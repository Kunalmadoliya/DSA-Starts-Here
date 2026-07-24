# 🔍 Daily Temperatures

**Approach:** Monotonic Stack

## Problem

Given an array `temperatures`, return an array where each element tells you how many days you have to wait to get a warmer temperature.

If there is no warmer day in the future, return `0` for that day.

> **Time Complexity:** `O(n)`

---

## Example

```text
Input:
temperatures = [73,74,75,71,69,72,76,73]

Output:
[1,1,4,2,1,1,0,0]
```

---

## Idea

We use a **monotonic decreasing stack** to store the indices of temperatures.

- Iterate through the temperatures from left to right.
- While the current temperature is warmer than the temperature at the top index of the stack, pop that index.
- The difference between the current index and the popped index is the number of days to wait.
- Store that value in the answer array.
- Push the current index into the stack.
- Any indices left in the stack do not have a warmer day, so their answer stays `0`.

---

## JavaScript Solution

```javascript
var dailyTemperatures = function (temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            const index = stack.pop();
            result[index] = i - index;
        }

        stack.push(i);
    }

    return result;
};
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(n)`