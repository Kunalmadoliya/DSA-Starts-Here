export default class Queue {
  #item = [];
  constructor() {}

  enqueue(element) {
    return this.#item.push(element);
  }
  dequeue() {
    return this.#item.pop(0);
  }
  peek() {
    return this.#item[0];
  }
  isEmpty() {
    if (this.#item.length === 0) {
      return true;
    }
    return false;
  }
  size() {
    return this.#item.length;
  }
}
