// Hash function ka use kisi bhi data (jaise username) ko
// ek fixed-size index me convert karke usse fast store aur retrieve karne ke liye hota hai.

function simpleHash(name, maxValue) {
  let result = 0;

  for (let i = 0; i < name.length; i++) {
    result += name.charCodeAt(i);
  }

  return result % maxValue;
}

console.log(simpleHash("what is data structure", 50));



// ---------------------------------------
// Hash Table Implementation
// ---------------------------------------

class HashTable {
  constructor(size = 50) {
    this.keyMap = new Array(size);
  }

  simpleHash(key, maxValue) {
    let result = 0;

    for (let i = 0; i < key.length; i++) {
      result += key.charCodeAt(i);
    }

    return result % maxValue;
  }

  set(key, value) {
    const hashCode = this.simpleHash(key, this.keyMap.length);

    if (!this.keyMap[hashCode]) {
      this.keyMap[hashCode] = [];
    }

    // Separate Chaining
    this.keyMap[hashCode].push([key, value]);
  }

  get(key) {
    const hashCode = this.simpleHash(key, this.keyMap.length);
    const bucket = this.keyMap[hashCode];

    if (!bucket) return undefined;

    for (const item of bucket) {
      if (item[0] === key) {
        return item[1];
      }
    }

    return undefined;
  }
}

const hashValues = new HashTable();

// hashValues.set("name", "madoliya");
// hashValues.set("name", "kunal");
// hashValues.set("name", "mahesh");
// hashValues.set("name", "mahinsh");
// hashValues.set("name", "hi");

// console.log(hashValues.keyMap);



// ---------------------------------------
// Frequency Counter Example
// ---------------------------------------

const myArr = [1, 1, 2, 3, 2, 4, 5, 6, 5, 6, 7, 8, 9, 5];

const frequency = {};

for (let i = 0; i < myArr.length; i++) {
  if (frequency[myArr[i]]) {
    frequency[myArr[i]]++;
  } else {
    frequency[myArr[i]] = 1;
  }
}

console.log(frequency);