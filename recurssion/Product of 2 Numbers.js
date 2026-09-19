function productNum(n){
  if( n < 1){
    return 1
  }

  let multiple = n % 10 * productNum(n / 10)
  return Math.floor(multiple)
}

console.log(productNum(1234));

