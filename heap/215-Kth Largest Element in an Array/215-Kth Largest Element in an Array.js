// time o(nlogk) and space o(k)

function minHeapify(arr, n, i) {
  let smallest = i;
  let leftChild = 2 * i + 1;
  let rightChild = 2 * i + 2;

  if (leftChild < n && arr[leftChild] < arr[smallest]) {
    smallest = leftChild;
  }

  if (rightChild < n && arr[rightChild] < arr[smallest]) {
    smallest = rightChild;
  }

  if (smallest !== i) {
    let temp = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = temp;

    minHeapify(arr, n, smallest);
  }
}

var findKthLargest = function (arr, k) {
  let n = k;

  let findNonleaf = Math.floor(n / 2) - 1;

  for (let i = findNonleaf; i >= 0; i--) {
    minHeapify(arr, n, i);
  }

  console.log(arr[0]);

  for (let i = k; i < arr.length; i++) {
    let currentElem = arr[i];

    if (currentElem > arr[0]) {
      arr[0] = currentElem;
      minHeapify(arr, k, 0);
    }
  }

  return arr[0];
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));


