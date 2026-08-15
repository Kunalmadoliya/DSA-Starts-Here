var search = function (nums, target) {
    let start = 0, end = nums.length - 1

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2)
        if (nums[mid] === target) {
            return mid
        }
        //half sorted
        if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && target < nums[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            if (nums[mid] < target && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

    }

    return - 1
};

search([4, 5, 6, 7, 0, 1, 2], 0);
