# ➕ Add Two Numbers

**Approach:** Iterative

## Problem

You are given two linked lists.

* Each node contains one digit.
* Digits are stored in **reverse order**.
* Add both numbers.
* Return the answer as a linked list.

> **Time Complexity:** `O(max(n, m))`

---

## Example

```text
Input:
l1 = [2,4,3]
l2 = [5,6,4]

Output:
[7,0,8]
```

---

## Idea

Think of it like normal addition from school.

1. Start from the head of both linked lists.
2. Add both digits and the previous carry.
3. Store only the last digit in the answer.
4. Carry the remaining value to the next addition.
5. Move both pointers forward.
6. If one list ends, use `0` for that side.
7. Keep going until both lists end and there is no carry left.

Create a new linked list while calculating the answer.

---

## JavaScript Solution

```javascript
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var addTwoNumbers = function (l1, l2) {
    let carry = 0;

    let node1 = l1;
    let node2 = l2;

    let resultStartingNode = null;
    let resultCurrentNode = null;

    while (node1 || node2 || carry > 0) {

        let firstNode = node1?.val ?? 0;
        let secondNode = node2?.val ?? 0;

        let sum = firstNode + secondNode + carry;

        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        if (resultStartingNode === null) {
            let node = new ListNode(digit);
            resultStartingNode = node;
            resultCurrentNode = node;
        } else {
            resultCurrentNode.next = new ListNode(digit);
            resultCurrentNode = resultCurrentNode.next;
        }

        if (node1 !== null) node1 = node1.next;
        if (node2 !== null) node2 = node2.next;
    }

    return resultStartingNode;
};
```

---

## Complexity

* **Time:** `O(max(n, m))`
* **Space:** `O(max(n, m))`
```