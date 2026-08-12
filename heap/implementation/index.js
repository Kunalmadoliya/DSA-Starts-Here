class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChild(index) {
    return 2 * index + 1;
  }

  getRightChild(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  insertValue(index) {
    this.heap.push(index);
    this.bubbleUp(this.heap.length - 1)
  }

  bubbleUp(index) {
    let parentIndex = this.getParent(index);

    while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
      this.swap(index, parentIndex);

      index = parentIndex;
      parentIndex = this.getParent(index);
    }
  }

  print() {
    console.log(this.heap);
  }
}

const heap = new MaxHeap();

heap.insertValue(10);
heap.insertValue(20);
heap.insertValue(30);
heap.insertValue(5);
heap.insertValue(6);
heap.insertValue(40);
heap.insertValue(50);



heap.print();
