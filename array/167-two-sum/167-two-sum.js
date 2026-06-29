// Brute Force O(n^2)

var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
};

// Optimised solution O(n)

var twoSum = function (numbers, target) {
  let i = 0,
    j = numbers.length - 1;
  while (i < j) {
    if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1];
    }

    if (numbers[i] + numbers[j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return [-1, -1];
};
