var largestRectangleArea = function (heights) {
    const n = heights.length;

    const leftSmallest = new Array(n);
    const rightSmallest = new Array(n);

    const stack = [];

    // Previous Smaller Element
    for (let i = 0; i < n; i++) {
        while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop();
        }

        leftSmallest[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }

    // Clear stack
    stack.length = 0;

    // Next Smaller Element
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop();
        }

        rightSmallest[i] = stack.length ? stack[stack.length - 1] : n;
        stack.push(i);
    }

    let max = 0;

    for (let i = 0; i < n; i++) {
        const width = rightSmallest[i] - leftSmallest[i] - 1;
        const area = heights[i] * width;
        max = Math.max(max, area);
    }

    return max;
};
largestRectangleArea([2, 1, 5, 6, 2, 3]);
0;
