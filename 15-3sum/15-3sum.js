// Last updated: 08/04/2026, 17:52:42
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b)
    let output = []
    for(let i=0; i<nums.length; i++){
        if(i > 0 && nums[i] === nums[i-1]) continue
    let left = i+1
    let right = nums.length-1

    while(left<right){
        let sum = nums[left]+nums[right]
        if(sum == -nums[i]){
            output.push([nums[i],nums[left],nums[right]])
            left++
            right--
            
            // skip duplicate left
            while(left < right && nums[left] === nums[left-1]) left++
            // skip duplicate right
            while(left < right && nums[right] === nums[right+1]) right--
        }
        else if(sum>-nums[i]){
            right--
        }
        else if(sum<-nums[i]){
            left++
        }
    }
    }
    return output
};