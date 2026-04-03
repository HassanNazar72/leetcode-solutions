// Last updated: 03/04/2026, 22:57:58
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let output = []
    for(let i=0;i<nums.length;i++){
        if(nums[i] %2 == 0){
            output.push(0)
        }
        else{
            output.push(1)
        }
    }
    return output.sort()
};
