// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const arr = [99,95,94,80,10,9,8,7,3,2,1];

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

binarySearch(5);

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

agnosticBinarySearch(2);
