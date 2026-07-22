import Queue from "./index.js"

const queue = new Queue()

console.log(queue.enqueue(5));
console.log(queue.enqueue(4));
console.log(queue.enqueue(6));
console.log(queue.enqueue(8));
console.log(queue);

console.log(queue.peek());
console.log(queue.isEmpty());

console.log(queue.dequeue());

console.log(queue.size());
