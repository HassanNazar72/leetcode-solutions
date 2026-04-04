// Last updated: 04/04/2026, 16:09:45
1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(nums, target) {
7    const seen = new Map();
8
9    for(let i =0;i<nums.length;i++){
10        const complement = target - nums[i]
11
12        if(seen.has(complement)){
13            return [seen.get(complement),i]
14        }
15        seen.set(nums[i],i)
16
17    }
18    return null
19};
20
21
22