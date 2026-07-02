//brute force o(n^2) and o(1)

// let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// let max = 0;

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     let width = j - i;
//     let height = Math.min(arr[i], arr[j]);

//     let area = width * height;
//     if (area > max) {
//       max = area;
//     }
//   }
// }

console.log(max);

//optimal  time 0(n)  and space o(1)

let i = 0,
  j = arr.length - 1,
  max = 0;

while (i < j) {
  let height = Math.min(arr[i], arr[j]);
  let width = j - i;

  let area = height * width;
  if (area > max) max = area;

  if (arr[i] <= arr[j]) i++;
  else j--;
}

return max;
