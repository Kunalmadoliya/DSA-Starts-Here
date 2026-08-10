# 🔄 Palindrome Linked List

**Approach:** Fast & Slow Pointers + Reverse

## Problem

Given the `head` of a singly linked list:

* Check if the linked list is a palindrome.
* Return `true` if it reads the same forward and backward.
* Otherwise, return `false`.

> **Time Complexity:** `O(n)`
> **Space Complexity:** `O(1)`

---

## Example

```text
Input:
head = [1,2,2,1]

Output:
true
```

---

## Idea

Instead of using an array:

1. Use `slow` and `fast` pointers to find the middle of the list.
2. Reverse the second half of the linked list.
3. Compare the first half with the reversed second half.
4. If all values match, it is a palindrome.
5. If any value is different, return `false`.

The list is reversed in-place, so no extra array is needed.

---

## JavaScript Solution

```javascript
var isPalindrome = function (head) {
    let fast = head;
    let slow = head;

    // Find the middle
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // Reverse the second half
    let prev = null;
    let current = slow;

    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    // Compare both halves
    let first = head;
    let second = prev;

    while (second !== null) {
        if (first.val !== second.val) {
            return false;
        }

        first = first.next;
        second = second.next;
    }

    return true;
};
```

---

## Complexity

* **Time:** `O(n)`
* **Space:** `O(1)`
