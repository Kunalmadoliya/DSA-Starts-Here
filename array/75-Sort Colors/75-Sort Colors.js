//brute force

// let arr = [2,0,2,1,1,0]

//  let i = 0 , j = 0 , k = arr.length - 1

//  while(j < k){
//     if(arr[j] > arr[k]){
//         [arr[j] , arr[k]] = [arr[k] , arr[j]]
//         j++
//         k--
//     }if(arr[j] === 0) {
//          [arr[j] , arr[i]] = [arr[i] , arr[j]]
//          j++
//     }
//  }

//  console.log(arr);

// Optimized · Dutch National Flag (in place, one pass) time O(n) space O(1)

let arr = [2, 0, 2, 1, 1, 0];

let i = 0,
  k = arr.length - 1,
  j = 0;

while (j <= k) {
  if (arr[j] === 0) {
    [arr[j], arr[i]] = [arr[i], arr[j]];
    i++;
    j++;
  }
  if (arr[j] === 1) {
    j++;
  } else {
    [arr[k], arr[j]] = [arr[j], arr[k]];
    k--;
  }
}

console.log(arr);
