// time o(n) space o(n)

var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let count = 0,
    max = 0,
    i = 0;

  for (let j = 0; j < s.length; j++) {
    while (set.has(s[j]) && i <= j) {
      set.delete(s[i++]);
      count = 1;
    }
    count++;
    set.add(s[j]);

    max = Math.max(max, j - i + 1);
  }

  console.log(max);
};
lengthOfLongestSubstring("bbbbb");
