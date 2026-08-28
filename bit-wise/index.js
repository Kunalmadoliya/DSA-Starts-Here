let arr = [31, 41, 50, 60];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] & (1 === 1)) {
    console.log("odd");
  } else {
    console.log("even");
  }
}

// let n = 5,
//   j = 2;

// let bit = 0;

// for (let i = 0; i < j; i++) {
//   bit = n & (1 << i);

//   if (bit === 0) {
//     return false;
//   }
// }
// return true;

// let n = 5,
//   k = 3

// for (let i = 0; i < k; i++) {
//  n = n | (1 << i);
// }

// console.log(n);

// let n = 7,
//   k = 2

// for (let i = 0; i < k; i++) {
//  n = n ^ (1 << i);
// }

// console.log(n);

// let n = 5;

// console.log(n & 1);

// let bit = n & 1

// if (bit === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// let result = 1
// for (let i = 0; i < n; i++) {
//   result = result * 2
// }

// result = result & 1
// if(result === 0){
//   console.log("power of 2");
// }else{
//   console.log("no");

// }

let n = 5

let result = [];
let i = 1;

while (i < n) {
  let bits = 0;
  while (i > 0) {
    i = i & (i - 1);
    bits++;
    i--;
  }
  result.push(bits);
  i++;
}
console.log(result);

