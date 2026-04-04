// Last updated: 04/04/2026, 16:29:48
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var containsDuplicate = function(nums) {
6    let seen = new Set();
7    for(let i=0;i<nums.length;i++){
8        if(seen.has(nums[i])){
9            return true;
10        }
11        seen.add(nums[i])
12    }
13    return false;
14};
15