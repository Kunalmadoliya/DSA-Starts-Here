let  nums = [4,1,2,1,2]
let result = 0
for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i] 
}

return result 