// Last updated: 03/04/2026, 22:58:06
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer = new Array(nums.length).fill(1);

    // Step 1: Left products
    let leftProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Step 2: Right products
    let rightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
};


