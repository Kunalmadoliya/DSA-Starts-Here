//brute force 0(n) sapace O(n)

let s = "A man, a plan, a canal: Panama";

if (s === "") return true;

let str = "";
s = s.toLowerCase();

for (let i = 0; i < s.length; i++) {
  const ascii = s.charCodeAt(i);

  if (ascii >= 97 && ascii <= 122) {
    str += s[i];
  } else {
    str += "";
  }
}

let i = 0,
  j = str.length - 1;

while (i < j) {
  if (str[i] === str[j]) {
    i++;
    j--;
  } else {
    console.log(false);
  }
}

console.log(true);

//optimised //brute force 0(n) sapace O(1)

let left = 0,
  right = s.length - 1;

while (i < j) {
  while (left < right && !isAlphanumeric(s[left])) {
    left++;
  }
  while (left < right && !isAlphanumeric(s[right])) {
    right--;
  }

  if (s[left].toLowerCase() !== s[right].toLowerCase()) {
    return false;
  }

  left++;
  right--;
}

const isAlphanumeric = function (ch) {
  return (
    (ch >= "a" && ch <= "z") ||
    (ch >= "A" && ch <= "Z") ||
    (ch >= "0" && ch <= "9")
  );
};
