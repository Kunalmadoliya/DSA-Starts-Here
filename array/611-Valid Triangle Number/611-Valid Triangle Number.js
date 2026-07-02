//brute force o(n^3) and space o(1)

// sum of two sides of tringle bigger than other side

// const arr = [2, 2, 3, 4];
// let count = 0;

// for (let i = 0; i < arr.length - 2; i++) {
//   for (let j = i + 1; j < arr.length - 1; j++) {
//     for (let k = j + 1; k < arr.length; k++) {
//       if (
//         arr[i] + arr[j] > arr[k] &&
//         arr[j] + arr[k] > arr[i] &&
//         arr[k] + arr[i] > arr[j] &&
//         arr[i] > 0 &&
//         arr[i] > 0 &&
//         arr[k] > 0
//       ) {
//         count++;
//       }
//     }
//   }
// }
// console.log(count);

//optimise 0(n^2)  and space o(1)

const arr = [2, 2, 3, 4];

let count = 0;

for (let k = arr.length - 1; k >= 2; k--) {
  let i = 0,
    j = k - 1;

  while (i < j) {
    if (arr[i] + arr[j] > arr[k]) {
        console.log(arr[i] , arr[j] , arr[k]);
        
      count += j - i; // all possble valid pairs ko extract karega kuki are usse aage wale point bhi valid honge 
      console.log(count);

      j--;
    } else {
      i++;
    }
  }
}

console.log(count);
