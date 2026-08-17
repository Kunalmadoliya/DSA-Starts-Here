var splitArray = function (nums, k) {
    let low = 0, high = 0

    for (const num of nums) {
        low = Math.max(num, low)
        high += num
    }

    let ans = high

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2)

        if (canSplit(nums, k, mid)) {
            ans = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return ans
};


function canSplit(nums, k, mid) {
    let minK = 1
    let current = 0

    for (const num of nums) {
        if (current + num > mid) {
            minK++
            current = num
        } else {
            current += num
        }
    }

    return minK <= k
}