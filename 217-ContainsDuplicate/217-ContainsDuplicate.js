// Last updated: 02/12/2025, 13:35:04
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var containsDuplicate = function(nums) {
6    nums.sort((x, y) => x - y);;
7    for (let i = 0; i < nums.length; i++) {
8        let count = 0
9        if(nums[i]===nums[i+1]){
10            count += 1
11            return true
12        }
13    }
14    return false
15};
16