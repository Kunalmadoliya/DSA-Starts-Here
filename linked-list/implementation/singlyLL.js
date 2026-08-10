class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //insert Opperations

  insertFirst(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let current = this.head;

    this.head = newNode;
    newNode.next = current;
  }

  insertLast(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.insertFirst(value);
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    newNode.next = null;
  }

  insertAtIndex(value, idx) {
    const newNode = new Node(value);

    if (idx <= 0) {
      this.insertFirst(value);
      return;
    }
    if (idx === this.length()) {
      this.insertLast(value);
      return;
    }

    let currentNode = this.head;

    for (let i = 1; i < idx; i++) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  insertValue(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.insertFirst(value);
      return;
    }
    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.tail.next = node;
    this.tail = node;
  }

  length() {
    let count = 0;

    if (this.head === null) {
      return;
    }

    let current = this.head;

    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  traverse() {
    if (this.head === null) {
      return;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      console.log(currentNode.value);

      currentNode = currentNode.next;
    }
  }

  //delete opperatios

  deleteFirst() {
    if (this.head === null) {
      return;
    }
    this.head = this.head.next;
  }

  deleteLast() {
    if (this.head === null) {
      return;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    let current = this.head;

    while (current.next !== this.tail) {
      current = current.next;
    }

    this.tail = current;
    this.tail.next = null;
  }

  deleteAtIndex(idx) {
    if (this.head === null) {
      return;
    }

    if (idx <= 0) {
      this.deleteFirst();
      return;
    }

    if (idx === this.length() - 1) {
      this.deleteLast();
      return;
    }
    let current = this.head;

    for (let i = 1; i < idx; i++) {
      current = current.next;
    }

    current.next = current.next.next;
  }

  deleteValue(val) {
    if (this.head === null) {
      return false;
    }

    if (this.head.value === val) {
      this.deleteFirst();
      return true;
    }

    let current = this.head;

    while (current.next !== null) {
      if (current.next.value === val) {
        if (current.next === this.tail) {
          this.tail = current;
        }

        current.next = current.next.next;
        return true;
      }

      current = current.next;
    }

    return false;
  }

  //search

  searchValue(val) {
    if (this.head === null) {
      return;
    }

    if (this.head.value === val) {
      return true;
    }

    let current = this.head;

    while (current !== null) {
      if (current.value === val) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  //empty

  isEmpty() {
    if (this.head === null) {
      return true;
    }
    return false;
  }

  //getNode

  getFirstNode() {
    if (this.isEmpty()) {
      return;
    }
    return this.head;
  }

  getLastNode() {
    if (this.isEmpty()) {
      return;
    }

    return this.tail;
  }

  get(idx) {
    if (this.isEmpty()) {
      return;
    }

    if (idx <= 0) {
      this.getFirstNode();
      return;
    }

    if (idx === this.length() - 1) {
      return this.getLastNode();
    }

    let current = this.head;

    for (let i = 1; i <= idx; i++) {
      current = current.next;
    }
    return current;
  }

  getMiddle() {
    let count = this.length();
    console.log(count);

    let current = this.head;
    let middle = Math.floor(count / 2);

    for (let i = 0; i < middle; i++) {
      current = current.next;
    }

    return current;
  }

  //update

  updateValueAtIndex(val, idx) {
    if (this.isEmpty()) {
      return;
    }

    // first node
    if (idx <= 0) {
      this.head.value = val;
      return;
    }

    if (idx === this.length() - 1) {
      this.tail.value = val;
      return;
    }

    let current = this.head;

    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    current.value = val;
  }

  //reverse

  reverse() {
    let prev = null;
    let current = this.head;

    while (current !== null) {
      let next = current.next;

      current.next = prev;

      prev = current;
      current = next;
    }

    this.head = prev;
  }

  //cycle

  hasCycle() {
    let fast = this.head;
    let slow = this.head;

    while (fast.next !== null) {
      if (fast === slow) {
        return true;
      }
    }
    return false;
  }

  // removeDuplicates

  removeDuplicates() {
    if (this.head === null) {
      return;
    }

    let current = this.head;

    while (current !== null && current.next !== null) {
      if (current.value === current.next.value) {
        current.next = current.next.next;
      }

      current = current.next;
    }
  }

  //clear

  clear() {
    this.head = null;
    this.tail = null;
  }

  //print

  print() {
    console.log(this.head);
  }

  //toArray

  toArray() {
    let current = this.head;
    let arr = [];

    while (current !== null) {
      arr.push(current.value);

      current = current.next;
    }
    return arr;
  }

  // fromArray

  fromArray(arr) {
    this.head = null;
    this.tail = null;

    for (let value of arr) {
      this.insertLast(value);
    }
    return this.head;
  }

  //sort

  sort() {
    if (this.head === null) {
      return;
    }

    let current;

    for (let i = this.head; i !== null; i = i.next) {
      current = i; //yeh head ko maintain karega

      while (current.next !== null) {
        if (current.value > current.next.value) {
          let temp = current.value;
          current.value = current.next.value;
          current.next.value = temp;
        }

        current = current.next;
      }
    }

    return this.head;
  }

  //rotate

  rotate(k) {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    let i = 0;

    while (i < this.length() - k - 1) {
      current = current.next;
      i++;
    }

    let newHead = current.next;
    current.next = null;
    this.tail.next = this.head;
    this.head = newHead;
    this.tail = current;

    return this.head;
  }

  //nthFromEnd

  nthFromEnd(k) {
    if (this.head === null) {
      return;
    }

    let i = 0;
    let current = this.head;

    while (i < this.length() - k) {
      current = current.next;
      i++;
    }
    return current;
  }

  //isPalindrome

  isPalindrome() {
    if (this.head === null && this.head.next === null) {
      return true;
    }

    let fast = this.head;
    let slow = this.head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }

    let prev = null;
    let current = slow;

    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    let first = this.head;
    let second = prev;

    while (second !== null) {
      if (first.value !== second.value) return false;

      first = first.next;
      second = second.next;
    }
    return true;
  }

  //swapNodes

  swapNodes(idx1, idx2) {
    if (this.head === null || idx1 === idx2) {
      return this.head;
    }

    let swap1 = this.head;
    let swap2 = this.head;

    let prev1 = null;
    let prev2 = null;

    let i = 0;

    while (i < idx1) {
      prev1 = swap1;
      swap1 = swap1.next;
      i++;
    }

    i = 0;

    while (i < idx2) {
      prev2 = swap2;
      swap2 = swap2.next;
      i++;
    }

    // previous nodes ko connect karo
    if (prev1 !== null) {
      prev1.next = swap2;
    } else {
      this.head = swap2;
    }

    if (prev2 !== null) {
      prev2.next = swap1;
    } else {
      this.head = swap1;
    }

    // next pointers swap karo
    let temp = swap1.next;
    swap1.next = swap2.next;
    swap2.next = temp;

    return this.head;
  }
}

const ll = new LinkedList();

ll.insertValue("a");
ll.insertValue("a");
ll.insertValue("b");
ll.insertValue("b");
ll.insertValue("a");
ll.insertValue("b");

console.log(ll.isPalindrome());
