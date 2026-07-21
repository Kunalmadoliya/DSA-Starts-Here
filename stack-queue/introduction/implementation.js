import Stack from "./stack.js";

const stack = new Stack();

//add logs in all methods of the stack class to see the output of each method
console.log(stack.push(5)); // true
console.log(stack.push(2)); // true
console.log(stack.push(3)); // true

console.log(stack.peek()); // 3
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
