let str = " "

function revString(str){
    return helper( str , str.length - 1)
}

function helper(str , index){
   if( index < 0){
    return " "
   }

   str = str[index] + helper(str , index - 1)
   return str
}

console.log(revString(["h" , "e" , "l" , "l" , "o"]));
