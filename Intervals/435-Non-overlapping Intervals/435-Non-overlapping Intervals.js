var eraseOverlapIntervals = function (intervals) {
  let count = 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let result = [];

  result.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i],
      last = result[result.length - 1];

    if (current[0] < last[1] && last[0] < current[1]) {
      count++;
      continue;
    }else{
        last[1] = Math.max(current[1] , last[1])
    }
  }

  return count;
};


var eraseOverlapIntervals = function (intervals) {
  let count = 0;
  intervals.sort((a, b) => a[1] - b[1]);
 
  let lastEnd = intervals[0][1]

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < lastEnd) {
      count++;
    }else{
       lastEnd = intervals[i][1]
    }
  }

  return count;
};

console.log(
  eraseOverlapIntervals([
    [1, 100],
    [11, 22],
    [1, 11],
    [2, 12],
  ]),
);
