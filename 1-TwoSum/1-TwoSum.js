// Last updated: 10/12/2025, 21:50:23
1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(nums, target) {
7    for (let i = 0; i < nums.length; i++) {
8        let sub = target - nums[i];
9
10        // search for sub starting from the next index
11        let j = nums.indexOf(sub, i + 1);
12
13        if (j !== -1) {
14            return [i, j];
15        }
16    }
17    return null;
18};
19