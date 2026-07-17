var minWindow = function (s, t) {
  const map = new Array(126).fill(0);

  for (let ch of t) {
    map[ch.charCodeAt(0)]++;
  }

  let count = t.length;
  let start = 0;

  let minLen = Infinity;
  let minStart = 0;

  //window badegi
  for (let right = 0; right < s.length; right++) {
    let ch = s.charCodeAt(right);

    if (map[ch] > 0) {
      console.log(map[ch]);

      count--;
    }
    map[ch]--;
    while (count === 0) {
      if (right - start + 1 < minLen) {
        minLen = right - start + 1;
        minStart = start;
      }

      let left = s.charCodeAt(start);

      map[left]++;

      if (map[left] > 0) {
        count++;
      }

      start++;
    }
  }

  return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen);
};

minWindow("ADOBECODEBANC", "ABC");
