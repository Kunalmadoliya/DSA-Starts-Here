function mergeSort(arr) {
  return sort(arr, 0, arr.length - 1);
}

function sort(arr, start, end) {
  if (start >= end) return [arr[start]];   // base case

  let mid = start + Math.floor((end - start) / 2);

  let left = sort(arr, start, mid);
  let right = sort(arr, mid + 1, end);      // overlap fix

  return merge(left, right);
}

function merge(left, right) {
  let arr = [];
  let i = 0, j = 0, k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }

  return arr;
}

console.log(mergeSort([12, 1, 2, 3, 9, 4, 6]));