class Solution {
	countTriplets(target, arr) {
		// code here
		arr.sort((a, b) => a - b)
		let count = 0
		
		for (let i = 0 ; i < arr.length - 2 ; i++) {
			let left = i + 1, right = arr.length - 1
			
			while (left < right) {
				let sum = arr[i] + arr[left] + arr[right]
				
				if (sum < target) {
				   count +=  right - left 
				   left++
				} else {
					right--
				}
				
			
			}
		}
		
		return count
	}
}
