var minMeetingRooms = function (intervals) {
  let start = intervals.map(x => x[0]).sort((a, b) => a - b);
  let end = intervals.map(x => x[1]).sort((a, b) => a - b);

  let rooms = 0;
  let endPtr = 0;

  for (let i = 0; i < start.length; i++) {
    if (start[i] < end[endPtr]) {
      rooms++;
    } else {
      endPtr++;
    }
  }

  return rooms;
};

console.log(
  miniMeetingRoom([
    [0, 30],
    [5, 10],
    [15, 20],
  ]),
);
