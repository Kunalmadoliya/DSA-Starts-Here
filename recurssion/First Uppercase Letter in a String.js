
function upper(str) {
  return us(str, 0);
}

function us(str, index) {
  if (index === str.length - 1) {
    return -1;
  }

  let ch = str[index].charCodeAt(0);

  if (ch >= 65 && ch <= 90) {
    return str[index];
  }

  return us(str, index + 1);
}

console.log(upper("geekSforgeeKs"));
