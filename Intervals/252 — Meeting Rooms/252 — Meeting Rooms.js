var meetingRooms = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let lastOverLap = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < lastOverLap) {
      return false;
    } else {
      lastOverLap = Math.max(intervals[i][1], lastOverLap);
    }
  }

  return true;
};

console.log(
  meetingRooms([
    [
      [7, 10],
      [2, 4],
    ],
  ]),
);
