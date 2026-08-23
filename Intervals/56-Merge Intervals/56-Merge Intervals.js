var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];

  result.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    let last = result[result.length - 1];

    if (current[0] <= last[1]) {
       last[1] = Math.max(last[1], current[1]);
      
     continue
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8,10],
    [15, 18],
  ]),
);
