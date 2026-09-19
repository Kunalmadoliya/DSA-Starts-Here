function countLength(str){
  return helper( str , str.length - 1 , 1 )
}

function helper( str , index , count){
  if( index === 0){
    return count
  }
  return helper( str , index - 1 , count + 1)
}

console.log(countLength("abcd"));
