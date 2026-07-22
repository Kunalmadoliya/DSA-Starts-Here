var isValid = function (s) {
  let stack = [];
  let hash = {")": "(", "]": "[", "}": "{"};

  for (const str of s) {
    if (str in hash) {
      if (stack.length && stack[stack.length - 1] === hash[char]) {
        stack.pop(); // Remove the matching opening bracket
      } else {
        return false; // Invalid if no match
      }
    } else {
      stack.push(str);
    }
  }
  return stack.length === 0;
};

isValid("()[]{}");
