let arr = [-1, 0].sort((a, b) => a - b);

const min = Math.min(...arr);
const maxNum = Math.max(...arr);

const offset = -min;

let newArr = new Array(maxNum - min + 1).fill(0);

for (let i = 0; i < arr.length; i++) {
  newArr[arr[i] + offset] = 1;
}

let count = 0;
let max = 0;

for (let i = 0; i < newArr.length; i++) {
  if (newArr[i] === 1) {
    count++;
    max = Math.max(max, count);
  } else {
    count = 0; 
  }
}

return max

