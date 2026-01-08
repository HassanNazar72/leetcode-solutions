// Last updated: 08/01/2026, 16:53:48
1/**
2 * @param {number[]} nums
3 * @param {number} val
4 * @return {number}
5 */
6var removeElement = function(nums, val) {
7    let j = 0;
8
9    for (let i = 0; i < nums.length; i++) {
10        if (nums[i] !== val) {
11            nums[j] = nums[i];
12            j++;
13        }
14    }
15
16    return j;
17};
18