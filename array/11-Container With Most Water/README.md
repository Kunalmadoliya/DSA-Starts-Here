# 🔍 11. Container With Most Water

**Difficulty:** Medium  
**Pattern:** Two Pointers

## Problem

You are given an array `height`.

Each value represents the height of a vertical line.

Pick any two lines so that, along with the x-axis, they form a container that can hold the maximum amount of water.

Return the maximum amount of water the container can store.

> You cannot tilt the container.

---

## Examples

```text
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
```

```text
Input: height = [1,1]
Output: 1
```

---

## Approach

Since the array has heights at different positions, we can use two pointers.

- Start one pointer from the left.
- Start another pointer from the right.
- Calculate the current area.
- Keep track of the maximum area.
- Move the pointer with the smaller height because it is limiting the current container.
- Continue until both pointers meet.

---

## Brute Force (O(n²))

Check every possible pair of lines.

```javascript
var maxArea = function(height) {
    let max = 0;

    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let width = j - i;
            let minHeight = Math.min(height[i], height[j]);

            let area = width * minHeight;

            if (area > max) {
                max = area;
            }
        }
    }

    return max;
};
```

---

## Optimal (Two Pointers)

```javascript
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let max = 0;

    while (i < j) {
        let width = j - i;
        let minHeight = Math.min(height[i], height[j]);

        let area = width * minHeight;

        if (area > max) {
            max = area;
        }

        if (height[i] <= height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return max;
};
```

---

## Complexity

### Brute Force

- **Time:** `O(n²)`
- **Space:** `O(1)`

### Optimal

- **Time:** `O(n)`
- **Space:** `O(1)`