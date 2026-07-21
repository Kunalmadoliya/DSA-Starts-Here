//brute force o(n^2) space o(1)

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

console.log(max);


//optimise time complexity o(n) and space complexity o(n)

var longestConsecutive = function (nums) {
  const set = new Set(nums);

  let longest = 1;

  for (const num of set) {
    
    if (!set.has(num - 1)) {
      let currentNum = num;
      let count = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        count++;
      }

      longest = Math.max(longest, count);
    }
  }


  console.log(longest);
};

longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);


