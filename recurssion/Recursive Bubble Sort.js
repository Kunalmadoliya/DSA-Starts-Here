function bubbleSort(arr, n) {
  if (n === 1) {
    return arr
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

 return bubbleSort(arr , n -1)
}


console.log(bubbleSort([1,5,8,2] , 4));
