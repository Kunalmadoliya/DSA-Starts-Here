function lex(str) {
  return helper(str, 0, "");
}

function helper(str, index, curr) {
  for (let i = index; i < str.length; i++) {
    curr += str[i];
    console.log(curr);
    
    helper(str, i + 1, curr);
    curr = curr.substring(0, curr.length - 1);
  }
}

lex("abc");

