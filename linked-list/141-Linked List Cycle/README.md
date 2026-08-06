# 🔁 Linked List Cycle

**Approach:** Floyd's Cycle Detection (Fast & Slow Pointer)

## Problem

Given the `head` of a linked list:

* Check whether the linked list contains a cycle.
* Return `true` if a cycle exists.
* Otherwise, return `false`.

> **Time Complexity:** `O(n)`

---

## Example

```text
Input:
head = [3,2,0,-4]
pos = 1

Output:
true
```

---

## Idea

Use two pointers:

* `slow` → moves **one step** at a time.
* `fast` → moves **two steps** at a time.

If there is **no cycle**, the `fast` pointer will reach the end of the list.

If there **is a cycle**, the `fast` pointer will eventually catch the `slow` pointer, and both will point to the same node.

No extra space is needed.

---

## JavaScript Solution

```javascript
var hasCycle = function (head) {
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            return true;
        }
    }

    return false;
};
```

---

## Complexity

* **Time:** `O(n)`
* **Space:** `O(1)`