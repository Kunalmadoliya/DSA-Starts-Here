const arr = [4, 3, 2, 1, 2];

////////////////////////////////////////////////////////////////////////////////
// Brute Force
// Time Complexity: O(n²)
// Space Complexity: O(n)
////////////////////////////////////////////////////////////////////////////////

const bruteAns = new Array(arr.length).fill(1);

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      bruteAns[i] *= arr[j];
    }
  }
}

console.log(bruteAns);

////////////////////////////////////////////////////////////////////////////////
// Better (Using Map)
// Time Complexity: O(n²)
// Space Complexity: O(n)
////////////////////////////////////////////////////////////////////////////////

let index = 0;

const productMap = new Map();

while (index < arr.length) {
  if (!productMap.has(arr[index])) {
    productMap.set(arr[index], []);
  }

  let product = 1;

  for (let j = 0; j < arr.length; j++) {
    if (index !== j) {
      product *= arr[j];
    }
  }

  productMap.get(arr[index]).push(product);

  index++;
}

// console.log([...productMap.values()].flat());

////////////////////////////////////////////////////////////////////////////////
// Optimal (Prefix + Suffix Arrays)
// Time Complexity: O(n)
// Space Complexity: O(n)
////////////////////////////////////////////////////////////////////////////////

let prefixArr = new Array(arr.length).fill(1);
let suffixArr = new Array(arr.length).fill(1);

for (let i = 0; i < arr.length; i++) {
  const prefixResult = prefixNums(arr);
  const suffixResult = suffixNums(arr);

  for (let j = 0; j < arr.length; j++) {
    prefixArr[j] = prefixResult[j] * suffixResult[j];
  }
}

console.log(prefixArr);

function prefixNums(arr) {
  for (let i = 0; i < arr.length; i++) {
    prefixArr[0] = 1;
    prefixArr[i] = prefixArr[i - 1] * arr[i - 1];
  }

  return prefixArr;
}

function suffixNums(arr) {
  for (let i = arr.length - 2; i >= 0; i--) {
    suffixArr[arr.length - 1] = 1;
    suffixArr[i] = suffixArr[i + 1] * arr[i + 1];
  }

  return suffixArr;
}

////////////////////////////////////////////////////////////////////////////////
// Optimal (Constant Extra Space)
// Time Complexity: O(n)
// Space Complexity: O(1) (excluding output array)
////////////////////////////////////////////////////////////////////////////////

let prefixProduct = 1;
let suffixProduct = 1;

const finalResult = new Array(arr.length);

for (let i = 0; i < arr.length; i++) {
  finalResult[i] = prefixProduct;
  prefixProduct *= arr[i];
}

for (let i = arr.length - 1; i >= 0; i--) {
  finalResult[i] *= suffixProduct;
  suffixProduct *= arr[i];
}

console.log(finalResult);