# 🔗 Merge Two Sorted Lists

**Approach:** Two Pointers

## Problem

You are given two sorted linked lists `list1` and `list2`.

- Merge both lists into one sorted linked list.
- Do not create new nodes.
- Reuse the existing nodes by changing their `next` pointers.
- Return the head of the merged list.

> **Time Complexity:** `O(n + m)`

---

## Example

```text
Input:
list1 = [1,2,4]
list2 = [1,3,4]

Output:
[1,1,2,3,4,4]
```

---

## Idea

Instead of creating a new list:

1. Keep two pointers (`node1` and `node2`) for both lists.
2. Compare their values.
3. Pick the smaller node and attach it to the result list.
4. Move the pointer of the list from which the node was picked.
5. Keep doing this until one list becomes empty.
6. Attach the remaining nodes from the other list.
7. Return the head of the merged list.

This way, every node is visited only once.

---

## JavaScript Solution

```javascript
var mergeTwoLists = function (list1, list2) {
  let firstNode = null,
    lastNode = null;

  let node1 = list1,
    node2 = list2;

  while (node1 && node2) {
    let nextNodeInResult = null;

    if (node1.val <= node2.val) {
      nextNodeInResult = node1;
      node1 = node1.next;
    } else {
      nextNodeInResult = node2;
      node2 = node2.next;
    }

    if (firstNode === null) {
      firstNode = nextNodeInResult;
      lastNode = nextNodeInResult;
    } else {
      lastNode.next = nextNodeInResult;
      lastNode = lastNode.next;
    }
  }

  while (node1) {
    if (firstNode === null) {
      firstNode = node1;
      lastNode = node1;
    } else {
      lastNode.next = node1;
      lastNode = lastNode.next;
    }

    node1 = node1.next;
  }

  while (node2) {
    if (firstNode === null) {
      firstNode = node2;
      lastNode = node2;
    } else {
      lastNode.next = node2;
      lastNode = lastNode.next;
    }

    node2 = node2.next;
  }

  return firstNode;
};
```

---

## Complexity

- **Time:** `O(n + m)`
- **Space:** `O(1)`