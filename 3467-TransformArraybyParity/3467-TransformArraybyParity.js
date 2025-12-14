// Last updated: 14/12/2025, 17:26:20
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var transformArray = function(nums) {
6    let output = []
7    for(let i=0;i<nums.length;i++){
8        if(nums[i] %2 == 0){
9            output.push(0)
10        }
11        else{
12            output.push(1)
13        }
14    }
15    return output.sort()
16};
17