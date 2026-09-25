function sort(arr) {
  return bubbleSort(arr, arr.length - 1, 0);
}

function bubbleSort(arr, n, i) {
  if (n < 1) {
    return arr;
  }

  if (i === n) {
    return bubbleSort(arr, n - 1, 0);
  }

  if (arr[i] > arr[i + 1]) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }

  return bubbleSort(arr, n, i + 1);
}

console.log(sort([7, 1, 8, 3, 5]));
