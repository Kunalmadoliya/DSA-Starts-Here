// time o(nlogk) and space 0(n)

function maxHeap(arr, n, i) {
    let largest = i
    let leftChild = 2 * i + 1, rightChild = 2 * i + 2

    if (leftChild < n && arr[leftChild][0] > arr[largest][0]) {
        largest = leftChild
    }

    if (rightChild < n && arr[rightChild][0] > arr[largest][0]) {
        largest = rightChild
    }

    if (largest !== i) {
        let temp = arr[i]
        arr[i] = arr[largest]
        arr[largest] = temp

        maxHeap(arr, n, largest)
    }
}

var kClosest = function (points, k) {
    let arr = []

    // Step 1: raw points ko [distanceSquared, x, y] mein convert karo
    for (let i = 0; i < points.length; i++) {
        let x = points[i][0]
        let y = points[i][1]
        let dist = x * x + y * y
        arr.push([dist, x, y])
    }

    let n = k
    let nonLeafelems = Math.floor(n / 2) - 1

    // Step 2: pehle k elements ka max heap banao
    for (let i = nonLeafelems; i >= 0; i--) {
        maxHeap(arr, n, i)
    }

    // Step 3: baaki (n-k) elements check karo
    for (let i = k; i < arr.length; i++) {
        let current = arr[i]

        if (current[0] < arr[0][0]) {
            arr[0] = current
            maxHeap(arr, k, 0)
        }
    }

    // Step 4: sirf pehle k elements answer hain — [x, y] format mein return karo
    let result = []
    for (let i = 0; i < k; i++) {
        result.push([arr[i][1], arr[i][2]])
    }

    return result
};