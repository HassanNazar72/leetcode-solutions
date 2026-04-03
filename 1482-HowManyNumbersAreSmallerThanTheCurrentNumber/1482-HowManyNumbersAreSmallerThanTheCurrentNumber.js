// Last updated: 03/04/2026, 22:57:57
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let count = 0
    let output = []
    for(let i=0;i<nums.length;i++){
        
        for(let j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                count += 1
            }
        }
        output.push(count)
        count = 0
    }
    return output
};