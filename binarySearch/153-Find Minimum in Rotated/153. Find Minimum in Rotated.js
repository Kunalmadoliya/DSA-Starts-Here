var findMin = function (nums) {
    let start = 0, end = nums.length - 1

    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2)
        if (nums[mid] < nums[end]) {
            end = mid
        } else {
            start = mid + 1
        }
    }
    return nums[start]

};