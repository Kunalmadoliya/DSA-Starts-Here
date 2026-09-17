function pascleTrianle(arr, n) {
    if (n === 1) {
        return arr;
    }

    let temp = new Array(n - 1);

    for (let i = 0; i < n - 1; i++) {
        temp[i] = arr[i] + arr[i + 1];
    }

    return pascleTrianle(temp, n - 1);
}

let arr = [1, 2, 3, 4, 5];
let n = arr.length;

console.log(pascleTrianle(arr, n));