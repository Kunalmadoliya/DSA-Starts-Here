class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    newNode.prev = currentNode;
    this.tail = newNode;
  }

  prepend(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;

      currentNode.prev = newNode;
      newNode.next = currentNode;

      this.head = newNode;
    }
  }

  traverse() {
    if (this.head === null) {
      return;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      console.log(currentNode.data);

      currentNode = currentNode.next;
    }
  }

  search(value) {
    if (this.head === null) {
      return false;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  delete(value) {
    if (this.head === null) {
      return;
    }

    let current = this.head;

    while (current !== null) {
      if (current.data === value) {
        if (current.prev !== null) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next !== null) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }
      }

      current = current.next;
    }
  }

  length() {
    if (this.head === null) {
      return 0;
    }

    let current = this.head;
    let count = 0;

    while (current !== null) {
      count++;
      current = current.next;
      
    }

    console.log(count);
    
  }
}

const ddl = new DoubleLinkedList();

ddl.append(5);
ddl.append(4);
ddl.append(6);
ddl.append(3);
ddl.append(5);
ddl.append(4);
ddl.append(6);
ddl.append(3);


ddl.delete(5)

console.log(ddl.traverse())

ddl.length()

