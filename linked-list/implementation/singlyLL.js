class Node {
  constructor(value) {
    this.data = value;
    this.nextnode = null;
  }
}

class linkedLsit {
  constructor() {
    this.head = null;
  }

  insertValue(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.nextnode !== null) {
        currentNode = currentNode.nextnode;
      }
      currentNode.nextnode = newNode;
    }
  }

  traverseLinkedList() {
    if (this.head === null) {
      return;
    }

    let currentNode = this.head;
    console.log(currentNode.data);
    while (currentNode.nextnode !== null) {
      currentNode = currentNode.nextnode;
      console.log(currentNode.data);
    }
  }

  deleteValue(value) {
    if (this.head === null) {
      return;
    }

    let cureent = this.head;
    if (cureent.data === value) {
      this.head = currentNode.nextnode;
      return;
    }
    let prev = null;
    while (cureent.nextnode !== null) {
      if (cureent.data === value) {
        prev.nextnode = cureent.nextnode;
        return;
      }
      prev = cureent;
      cureent = cureent.nextnode;
    }
  }

  searchValue(value) {
    if (this.head === null) {
      return;
    }

    let current = this.head;

    if (current.data === value) {
      console.log("found");
      return;
    }

    while (current.nextnode !== null) {
      current = current.nextnode;

      if (current.data === value) {
        console.log("found");
        return;
      }
    }

    console.log("not found");
  }

  lengthLinkedList() {
    if (this.head === null) {
      return 0;
    }

    let counter = 0;
    let current = this.head;
    counter = 1
    while (current.nextnode !== null) {
      current = current.nextnode;
      counter++;
    }

    console.log(counter);
  }
}

const link = new linkedLsit();

link.insertValue(2);
link.insertValue(3);
link.insertValue(4);
link.insertValue(5);
link.insertValue(6);
link.insertValue(7);
link.insertValue(5);
link.insertValue(6);
link.insertValue(7);
link.insertValue(5);
link.insertValue(6);
link.insertValue(7);

link.deleteValue(5);

// link.searchValue(7);

link.lengthLinkedList()

// link.traverseLinkedList();
