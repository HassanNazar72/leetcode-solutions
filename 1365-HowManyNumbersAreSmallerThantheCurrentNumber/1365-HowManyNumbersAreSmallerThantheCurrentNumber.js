// Last updated: 14/12/2025, 17:12:27
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var smallerNumbersThanCurrent = function(nums) {
6    let count = 0
7    let output = []
8    for(let i=0;i<nums.length;i++){
9        
10        for(let j=0;j<nums.length;j++){
11            if(nums[i]>nums[j]){
12                count += 1
13            }
14        }
15        output.push(count)
16        count = 0
17    }
18    return output
19};