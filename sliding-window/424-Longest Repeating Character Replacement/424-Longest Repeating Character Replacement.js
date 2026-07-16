//brute force o(n ^ 2) space o(1)

var characterReplacement = function (s, k) {
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let maxChar = 0;
    const count = new Array(26).fill(0);

    for (let j = i; j < s.length; j++) {
      const index = s.charCodeAt(j) - "A".charCodeAt(0);

      count[index]++;
      maxChar = Math.max(maxChar, count[index]);

      const ops = j - i + 1 - maxChar;

      if (ops > k) break;

      max = Math.max(max, j - i + 1);
    }
  }

  return max;
};

console.log(characterReplacement("AABABBA", 1)); // 4

//brute force o(n) space o(1)

var characterReplacement = function (s, k) {
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let i = 0;
  let max = 0;
  let maxChar = 0;
  const count = new Array(26).fill(0);

  for (let j = 0; j < s.length; j++) {
    const index = s.charCodeAt(j) - "A".charCodeAt(0);
    count[index]++;

    maxChar = Math.max(maxChar, count[index]);

    while (j - i + 1 - maxChar > k) {
      const leftIndex = s.charCodeAt(i) - "A".charCodeAt(0);
      count[leftIndex]--;
      i++;
    }

    max = Math.max(max, j - i + 1);
  }

  return max;
};
};

console.log(characterReplacement("AABABBA", 1)); // 4
