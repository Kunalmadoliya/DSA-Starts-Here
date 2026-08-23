var insert = function (intervals, newInterval) {
   let result = [ ] , i = 0 , n = intervals.length
   //no over lap
   while(i <n && intervals[i][1] <= newInterval[0]){
        result.push(intervals[i])
        i++
   }

   while(i < n && intervals[i][0] <= newInterval[1]){
    newInterval[0] = Math.min(intervals[i][0] , newInterval[0])
    newInterval[1] = Math.min(intervals[i][1] , newInterval[1])
    i++ 
   }

   result.push(newInterval)

  while(i < n){
   result.push(intervals[i])
   i++
  }

  return result
};

console.log(insert(
  [
    [1, 3],
    [6, 9],
  ],
  [2, 5],
));

