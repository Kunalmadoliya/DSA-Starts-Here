# Set Operations in JavaScript

A simple implementation of common **Set operations** in JavaScript using the built-in `Set` object.

The project demonstrates how to find the **Union**, **Intersection**, **Difference**, and build a simple **Frequency Counter**.

---

## What is a Set?

A **Set** is a built-in JavaScript object that stores **unique values**.

Duplicate values are automatically removed.

```
[1, 2, 2, 3, 3, 4]

        │
        ▼

     new Set()

        │
        ▼

{1, 2, 3, 4}
```

---

## Union

The **Union** contains every unique element from both arrays.

```js
const union = new Set([...arr1, ...arr2]);
```

Example:

```
arr1 = [1, 2, 3, 4]
arr2 = [3, 4, 5, 6]

Union

{1, 2, 3, 4, 5, 6}
```

---

## Intersection

The **Intersection** contains only the elements present in both arrays.

```js
const intersection = setA.filter((value) => setB.has(value));
```

Example:

```
arr1 = [1, 2, 3, 4]
arr2 = [3, 4, 5, 6]

Intersection

[3, 4]
```

---

## Difference

The **Difference** contains elements that exist in the first array but not in the second.

```js
const difference = setA.filter((value) => !setB.has(value));
```

Example:

```
arr1 = [1, 2, 3, 4]
arr2 = [3, 4, 5, 6]

Difference

[1, 2]
```

---

## Frequency Counter

A **Set** can be used alongside an object to count the occurrences of elements while tracking unique values.

```js
const visited = new Set();
const frequency = {};

for (const value of arr1) {
  if (visited.has(value)) {
    frequency[value]++;
  } else {
    frequency[value] = 1;
    visited.add(value);
  }
}
```

Output:

```
{
  1: 1,
  2: 1,
  3: 2,
  4: 1,
  5: 2
}
```

---

## Concepts Covered

- Set
- Unique Values
- Union
- Intersection
- Difference
- Frequency Counter

---

This project is built for learning the fundamentals of JavaScript's `Set` and understanding common set operations used in data structures and algorithms.