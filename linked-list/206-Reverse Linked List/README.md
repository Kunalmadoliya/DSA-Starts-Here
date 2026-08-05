# 🔄 Reverse Linked List

**Approach:** Iterative

## Problem

Given the `head` of a singly linked list:

* Reverse the linked list.
* Return the new head of the reversed list.

> **Time Complexity:** `O(n)`

---

## Example

```text
Input:
head = [1,2,3,4,5]

Output:
[5,4,3,2,1]
```

---

## Idea

Instead of creating a new list:

1. Keep two pointers:

   * `head` → current node
   * `prev` → previous node
2. Save the next node before changing any links.
3. Make the current node point to the previous node.
4. Move both pointers one step forward.
5. Repeat until all nodes are reversed.
6. `prev` will be the new head of the reversed list.

The list is reversed in-place, so no extra list is needed.

---

## JavaScript Solution

```javascript
var reverseList = function (head) {
    let next = null, prev = null;

    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
};
```

---

## Complexity

* **Time:** `O(n)`
* **Space:** `O(1)`
