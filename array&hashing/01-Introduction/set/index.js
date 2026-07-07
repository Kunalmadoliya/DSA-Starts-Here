// ---------------------------------------
// Union
// ---------------------------------------

const arr1 = [1, 2, 3, 3, 4, 5, 5];
const arr2 = [3, 4, 5, 6, 7, 8];

const union = new Set([...arr1, ...arr2]);

console.log(union);



// ---------------------------------------
// Intersection
// ---------------------------------------

const setA = [...new Set(arr1)];
const setB = new Set(arr2);

const intersection = setA.filter((value) => setB.has(value));

console.log(intersection);



// ---------------------------------------
// Difference
// ---------------------------------------

const difference = setA.filter((value) => !setB.has(value));

console.log(difference);



// ---------------------------------------
// Frequency Counter using Set
// ---------------------------------------

const visited = new Set();
const frequency = {};

for (let i = 0; i < arr1.length; i++) {
  if (visited.has(arr1[i])) {
    frequency[arr1[i]]++;
  } else {
    frequency[arr1[i]] = 1;
    visited.add(arr1[i]);
  }
}

console.log(frequency);