function sunDigit(n) {
  if (n < 1) {
    return 0;
  }

  let sum =  n % 10 + sunDigit(n / 10);
  return Math.floor(sum)
}

console.log(sunDigit(1234));



