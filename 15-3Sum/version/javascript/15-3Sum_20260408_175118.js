// Last updated: 08/04/2026, 17:51:18
1/**
2 * @param {number[]} nums
3 * @return {number[][]}
4 */
5var threeSum = function(nums) {
6    nums.sort((a,b) => a - b)
7    let output = []
8    for(let i=0; i<nums.length; i++){
9        if(i > 0 && nums[i] === nums[i-1]) continue
10    let left = i+1
11    let right = nums.length-1
12
13    while(left<right){
14        let sum = nums[left]+nums[right]
15        if(sum == -nums[i]){
16            output.push([nums[i],nums[left],nums[right]])
17            left++
18            right--
19            
20            // skip duplicate left
21            while(left < right && nums[left] === nums[left-1]) left++
22            // skip duplicate right
23            while(left < right && nums[right] === nums[right+1]) right--
24        }
25        else if(sum>-nums[i]){
26            right--
27        }
28        else if(sum<-nums[i]){
29            left++
30        }
31    }
32    }
33    return output
34};