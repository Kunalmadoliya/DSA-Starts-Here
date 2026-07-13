# 🔍 Maximum Points You Can Obtain from Cards

**Approach:** Sliding Window

## Problem

Given an integer array `cardPoints` and an integer `k`:

- You can pick exactly `k` cards.
- In each step, you can only pick a card from the **beginning** or the **end** of the array.
- Return the **maximum score** you can obtain.

> **Time Complexity:** `O(n)`

---

## Example

```text
Input:
cardPoints = [1,2,3,4,5,6,1]
k = 3

Output:
12
```

---

## Idea

Instead of trying every possible way to pick cards from the left and right, we start by taking all `k` cards from the left.

Then, one by one:

- Remove one card from the left.
- Add one card from the right.
- Update the maximum score.

This checks every possible combination of taking cards from the left and right without recalculating the sum each time.

---

## Window Visualization

```text
cardPoints = [1,2,3,4,5,6,1]
k = 3

Take all from left

[1,2,3]             Sum = 6

Replace one left card with one right card

[1,2] + [1]         Sum = 4

Replace another left card

[1] + [6,1]         Sum = 8

Take all from right

[5,6,1]             Sum = 12
```

Maximum Score = **12**

---

## JavaScript Solution

```javascript
var maxScore = function (cardPoints, k) {
    let lsum = 0;
    let rsum = 0;
    let maxsum = 0;

    // Take first k cards from the left
    for (let i = 0; i < k; i++) {
        lsum += cardPoints[i];
    }

    maxsum = lsum;

    let right = cardPoints.length - 1;

    // Replace left cards with right cards
    for (let i = k - 1; i >= 0; i--) {
        lsum -= cardPoints[i];
        rsum += cardPoints[right--];
        maxsum = Math.max(maxsum, lsum + rsum);
    }

    return maxsum;
};
```

---

## Complexity

- **Time:** `O(n)`
- **Space:** `O(1)`