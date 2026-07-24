// //breute force o(n^2) and o(n)

// var dailyTemperatures = function (arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let days = 0;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[i]) {
//         days = j - i;
//         break;
//        }
//     }

//     result.push(days);
//   }

//   console.log(result);
// };

// dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);

var dailyTemperatures = function (arr) {
    const result = new Array(arr.length).fill(0);
    const stack = []; // stores indices

    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }

        stack.push(i);
    }

    return result
};


console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));


