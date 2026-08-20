function maxHeap(arr, i, n) {
  let largest = i;
  let leftChild = 2 * i + 1,
    rightChild = 2 * i + 2;
  if (leftChild < n && arr[leftChild][0] > arr[largest][0]) {
    largest = leftChild;
  }

  if (rightChild < n && arr[rightChild][0] > arr[largest][0]) {
    largest = rightChild;
  }

  if (largest != i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    maxHeap(arr, n, largest);
  }
}
var findClosestElements = function (arr, k, x) {
  let n = k;
  let points = [];

  for (let i = 0; i < arr.length; i++) {
    let abs = Math.abs(x - arr[i]);
    points.push([abs, arr[i]]);
  }

  console.log(points);

  let nonLeaf = Math.floor(n / 2) - 1;

  for (let i = nonLeaf; i >= 0; i--) {
    maxHeap(points, i, n);
  }

  for (let i = k; i < points.length; i++) {
    let current = points[i]

    if(current[0] < points[0][0] ){
        points[0] = current
        maxHeap(points, 0 , k)
    }
  }

  let result = []

  for (let i = 0; i < k; i++) {
    result.push(points[i][1])
    
  }

  return result
};

console.log(findClosestElements([1, 1, 1, 10, 10, 10], 2, 9));
