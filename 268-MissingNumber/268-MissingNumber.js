// Last updated: 04/12/2025, 14:37:20
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var missingNumber = function(nums) {
6    let n = nums.length;
7    let expectedSum = n * (n + 1) / 2;
8    let actualsum = 0
9    for(let i =0;i<nums.length;i++){
10        actualsum += nums[i]
11    }
12    return expectedSum - actualsum
13};
14