// Brute force · extra array time O(n) space O(n)


// const arr = [0, 1, 0, 3, 12];

// let arr2 = [];
// let w = 0;



// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] !== 0){
//         arr2[w] = arr[i]
//         w++
//     }
// }

// while ( w < arr.length){
//     arr2[w] = 0
//     w++
// }


// Optimized · same-direction two pointers time O(n) space O(1)


const arr = [0, 1, 0, 3, 12];

let i = 0 , j = i + 1

while ( j < arr.length){
    if(arr[j] !== 0 && arr[i] === 0){
        [arr[j] , arr[i]] = [arr[i] , arr[j]]
        i++ 
        j++
    }else if(arr[j] === 0) j++
    else if (arr[i] !== 0) {
        i++
         if (i === j) j++;
    }
   
}

console.log( arr);
