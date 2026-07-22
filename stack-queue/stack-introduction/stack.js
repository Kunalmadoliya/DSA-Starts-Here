//implementation

export default class Stack {
  #item = [];

  constructor() {}

  push(element) {
   return this.#item.push(element);
  }
  pop() {
    return this.#item.pop();
  }
  peek() {
    return this.#item[this.#item.length - 1];
  }
  isEmpty() {
    if (this.#item.length === 0) return true;
    return false;
  }
  size() {
    return this.#item.length;
  }
}



/// 