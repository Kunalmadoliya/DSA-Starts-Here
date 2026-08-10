var mergeTwoLists = function (list1, list2) {
  let firstNode = null,
    lastNode = null;
  let node1 = list1,
    node2 = list2;

  while (node1 && node2) {
    let saveNodeInResult = null;
    if (node1.val <= node2.val) {
      saveNodeInResult = node1;
      node1 = node1.next;
    } else {
      saveNodeInResult = node1;
      node2 = node2.next;
    }
  }

  if (firstNode === null) {
    firstNode = saveNodeInResult;
    lastNode = saveNodeInResult;
  } else {
    lastNode.next = saveNodeInResult;
    lastNode = lastNode.next;
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

  return firstNode
};

mergeTwoLists([1, 2, 4], [1, 3, 4]);

const l1_node = {val: 1, next: null};
const l2_node = {val: 2, next: null};
const l3_node = {val: 3, next: null};
const l_4node = {val: 4, next: null};

l1_node.next = l2_node;
l2_node.next = l3_node;
l3_node.next = l_4node;

let node = l1_node;

while (node) {
  console.log(node);

  node = node.next;
}


console.log(Math.floor(0.8));
