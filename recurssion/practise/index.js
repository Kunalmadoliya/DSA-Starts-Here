function fibbo(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let f = fibbo(n - 1) + fibbo(n - 2);
  return f;
}

console.log(fibbo(8));

function bs() {
  let arr = [1, 2, 3, 4, 6, 8, 10],
    target = 6,
    start = 0,
    end = arr.length - 1;
  let result = search(arr, target, start, end);

  return result;
}

function search(arr, target, s, end) {
  if (s > end) {
    return -1;
  }

  let mid = Math.floor(s + (end - s) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] > target) {
    return search(arr, target, s, mid - 1);
  }

  return search(arr, target,  mid + 1, end);
}





function print(n) {
  if(n === 0) return 1
  console.log(n);
  
  print(n - 1)
}


 
function printn(n){
  if(n === 0) return

  printn(n - 1)
  console.log(n);
  
}

console.log(printn(5));


function factorial(n){
  if( n === 1) return 1

  return n * factorial( n - 1)
}
 
console.log(factorial(3));
 

let n = 1356

console.log(Math.floor(6 / 1)); 

function sumDigit(n){
  if( n === 0) return 0

  let sum =  n % 10 + sumDigit(n / 10)
  return Math.floor(sum)
}

console.log(sumDigit(1234));

let sum = 0 

function reverse(n) {
  sum = sum * 10 + reverse(n %10 )
}
