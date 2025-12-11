// Last updated: 11/12/2025, 14:40:03
1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(nums, target) {
7    for (let i = 0; i < nums.length; i++) {
8        let sub = target - nums[i];
9
10        const foundIndex = nums.findIndex((element, index) => element === sub && index !== i);
11
12        if (foundIndex !== -1) {
13            return [i, foundIndex];
14        }
15    }
16    return null;
17};
18
19