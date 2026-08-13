// const arr = [1, 2, 3, 4, 5, 6, 9, 15, 25, 30];
const arr = [99, 95, 94, 80, 10, 9, 8, 7, 3, 2, 1];

function binarySearch(target) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === target) {
      console.log(mid);
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

// binarySearch(5);

//we dont know here weather out array is sorted or not

function agnosticBinarySearch(target) {
  let start = 0;
  let end = arr.length - 1;

  let isAsc = arr[start] < arr[end] ? true : false;

  console.log(isAsc);

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (isAsc) {
      if (arr[mid] === target) {
        console.log(mid);

        return mid;
      } else if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (arr[mid] === target) {
        console.log(mid);

        return mid;
      } else if (arr[mid] < target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return -1;
}

// agnosticBinarySearch(2);

// function ceilSearch(target) {
//   let start = 0,
//     end = arr.length - 1;

//   if (arr[end] < target) {
//     return -1;
//   }

//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2);
//     if (arr[mid] === target) {
//       console.log(mid);
//       return mid;
//     } else if (arr[mid] > target) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }

//   return start; //soo close man use your brain stupid
// }

// function floorSearch(target) {
//   let start = 0,
//     end = arr.length - 1;
//   if (arr[end] < target) {
//     return -1;
//   }
//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2);
//     if (arr[mid] === target) {
//       console.log(mid);
//       return mid;
//     } else if (arr[mid] < target) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }

//   return start;
// }

// console.log(ceilSearch(6));

// console.log(floorSearch(6));

var nextGreatestLetter = function (letters, target) {
  let start = 0,
    end = letters.length - 1;

  if (target.charCodeAt(0) > letters[end].charCodeAt(0)) {
   
    
    return letters[0];
  }
};

nextGreatestLetter(["x", "x", "y", "y"], "z");
