# Hash Table in JavaScript

A simple implementation of a **Hash Table** in JavaScript to understand how hashing works behind the scenes.

The project covers the basics of storing and retrieving key-value pairs using a custom hash function.

It also includes a simple **Frequency Counter** example to demonstrate a practical use case of hashing.

---

## What is a Hash Table?

A hash table stores data as **key-value pairs**.

A **hash function** converts a key into an array index (bucket), allowing data to be stored and retrieved efficiently.

```
Key
 │
 ▼
Hash Function
 │
 ▼
Bucket Index
 │
 ▼
Store Data
```

---

## Hash Function

```js
function simpleHash(key, maxValue) {
  let result = 0;

  for (let i = 0; i < key.length; i++) {
    result += key.charCodeAt(i);
  }

  return result % maxValue;
}
```

Example:

```
"name"

ASCII Sum = 417

417 % 50 = 17
```

The key `"name"` is stored in bucket **17**.

---

## Collision

Different keys can sometimes produce the same bucket index.

Instead of replacing the existing value, both key-value pairs are stored in the same bucket using **Separate Chaining**.

```
17 →

[
  ["name", "kunal"],
  ["username", "madoliya"]
]
```

---

## Frequency Counter

Hashing can also be used to count the frequency of elements.

```js
const arr = [1, 1, 2, 3, 2, 4];

const frequency = {};

for (const value of arr) {
  frequency[value] = (frequency[value] || 0) + 1;
}

console.log(frequency);
```

Output:

```
{
  1: 2,
  2: 2,
  3: 1,
  4: 1
}
```

---

## Methods

- **`set(key, value)`** – Stores a key-value pair.
- **`get(key)`** – Finds and returns the value for a given key.

---

## Time Complexity

| Operation | Average |
| ---------- | :-----: |
| Insert | O(1) |
| Search | O(1) |
| Delete | O(1) |

Worst case: **O(n)** when many keys collide in the same bucket.

---

## Concepts Covered

- Hash Functions
- Buckets
- Collisions
- Separate Chaining
- Key-Value Storage
- Frequency Counter
- Time Complexity

---

This project is built for learning the fundamentals of hash tables before moving on to production-ready implementations like JavaScript's `Map`.