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

  getMiddle(){
    let count = this.length()
    console.log(count);
    
    let current = this.head
    let middle = Math.floor(count / 2)

    for (let i = 0; i < middle; i++) {
       current = current.next
    }

    return current
  
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
    let fast = this.head 
    let slow = this.head 

    while(fast.next !== null){
     if( fast === slow){
      return true 
     }
    }
    return false
  }
}

const ll = new LinkedList();

ll.insertValue(5);
ll.insertValue(8);
ll.insertValue(6);
ll.insertValue(7);
ll.insertValue(2);

// console.log(ll.searchValue(6));

// ll.traverse();

// console.log("length", ll.length());

// console.log(ll.getFirstNode());
// console.log(ll.getLastNode());
// console.log(ll.get(2));




console.log(ll.getMiddle())
