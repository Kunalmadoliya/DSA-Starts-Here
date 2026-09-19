// class Solution {
//   getMinMax(arr) {
//     let n = arr.length;
//     return  this.helper(arr, n - 1 , Infinity , -Infinity );
//   }

//   helper(arr, n , min , max) {
//     if (n < 0) {
//       return [min, max];
//     }

//    min = Math.min(min , arr[n])
//    max = Math.max(max , arr[n])

//     return this.helper(arr, n - 1 , min , max);
//   }
// }

class Solution {
  getMinMax(arr) {
    let n = arr.length;
    return this.helper(arr, n - 1);
  }

  helper(arr, index) {
    if (index === 0) {
      return [arr[0], arr[0]];
    }

    let result = this.helper(arr, index - 1);

    if (arr[index] < result[0]) result[0] = arr[index];
    if (arr[index] > result[1]) result[1] = arr[index];

    return result;
  }
}

let check = new Solution();

console.log(check.getMinMax([1, 4, 3, 5, 8, 6]));
