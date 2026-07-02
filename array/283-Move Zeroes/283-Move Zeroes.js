// Brute force · extra array time O(n) space O(n)


const arr = [0, 1, 0, 3, 12];

let arr2 = [];
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        zeroCount++;
    } else {
        arr2.push(arr[i]);
    }
}

while (zeroCount--) {
    arr2.push(0);
}

console.log(arr2);


