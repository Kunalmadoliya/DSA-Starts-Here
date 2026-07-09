// optimise 55.70  MB Beats 75.04% time o(n) space o(n)


let s = "anagram",
  t = "nagaram";

const mySet1 = {};
const mySet2 = {};

for (let i = 0; i < s.length; i++) {
  if (mySet1[s[i]]) {
    mySet1[s[i]]++;
  } else {
    mySet1[s[i]] = 1;
  }
}

for (let j = 0; j < t.length; j++) {
  if (mySet2[t[j]]) {
    mySet2[t[j]]++;
  } else {
    mySet2[t[j]] = 1;
  }
}

console.log(mySet1);
console.log(mySet2);

for (const key in mySet1) {
  if (mySet1[key] !== mySet2[key]) {
    return false;
  }
}

// Most Optimized Solution
// Accepted: 55 / 55 test cases passed
// Runtime: 6 ms (Beats 93.79%)
// Memory: 55.34 MB (Beats 79.88%)
// Time: O(n)
// Space: O(1) // fixed-size array of 26 characters



const frequency = new Array(26).fill(0);

if (s.length !== t.length) return false;

for (let i = 0; i < s.length; i++) {
  frequency[s.charCodeAt[i] - 97]++;
  frequency[t.charCodeAt[i] - 97]--;
}

for (const freq of frequency) {
  if (freq !== 0) return false;
}

return true;
