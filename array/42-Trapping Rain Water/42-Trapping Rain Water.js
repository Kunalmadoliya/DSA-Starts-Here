//  Brute force · scan both sides per column time O(n²) space O(1)

let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let max = 0;

for (let i = 0; i < arr.length; i++) {
  let maxRight = 0,
    maxLeft = 0;

  for (let j = 0; j <= i; j++) {
    //left max height
    maxLeft = Math.max(maxLeft, arr[j]);
  }

  for (let k = i; k < arr.length; k++) {
    // right max height
    maxRight = Math.max(maxRight, arr[k]);
  }

  max += Math.min(maxLeft, maxRight) - arr[i];
}

console.log(max);

// Better · precompute maxL[] and maxR[] arrays time O(n) space O(n)

const n = height.length;

if (n === 0) return 0;

// Prefix maximum array
const maxL = new Array(n);
maxL[0] = height[0];

for (let i = 1; i < n; i++) {
  maxL[i] = Math.max(maxL[i - 1], height[i]);
}

// Suffix maximum array
const maxR = new Array(n);
maxR[n - 1] = height[n - 1];

for (let i = n - 2; i >= 0; i--) {
  maxR[i] = Math.max(maxR[i + 1], height[i]);
}

// Calculate trapped water
let total = 0;

for (let i = 0; i < n; i++) {
  total += Math.max(0, Math.min(maxL[i], maxR[i]) - height[i]);
}

return total;
