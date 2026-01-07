// Last updated: 07/01/2026, 14:47:46
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5function removeDuplicates(nums) {
6    if (nums.length === 0) {
7        return 0;
8    }
9
10    let j = 0; // Pointer for the position of unique elements
11    for (let i = 1; i < nums.length; i++) {
12        if (nums[j] !== nums[i]) {
13            j++;
14            nums[j] = nums[i]; // Move the unique element to the next position
15        }
16    }
17    return j + 1; // Return the length of the array with unique elements
18}
19
20