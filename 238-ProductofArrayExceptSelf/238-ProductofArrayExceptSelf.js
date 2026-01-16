// Last updated: 16/01/2026, 19:01:27
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var productExceptSelf = function(nums) {
6    const answer = new Array(nums.length).fill(1);
7
8    // Step 1: Left products
9    let leftProduct = 1;
10    for (let i = 0; i < nums.length; i++) {
11        answer[i] = leftProduct;
12        leftProduct *= nums[i];
13    }
14
15    // Step 2: Right products
16    let rightProduct = 1;
17    for (let i = nums.length - 1; i >= 0; i--) {
18        answer[i] *= rightProduct;
19        rightProduct *= nums[i];
20    }
21
22    return answer;
23};
24
25
26