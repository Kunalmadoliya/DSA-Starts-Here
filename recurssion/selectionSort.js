function selectionSort(arr) {
  return sort(arr, arr.length - 1);
}

function sort(arr, n) {
  if (n < 1) return arr;

  let max = findMax(arr, n);

  if (max !== n) {
    let temp = arr[n];
    arr[n] = max;
    max = temp;
  }

  return sort(arr, n - 1);
}

function findMax(arr, n) {
  let max = 0;
  for (let i = 0; i < n; i++) {
    if (max < arr[i]) {
      max = i;
    }
  }

  return max;
}
