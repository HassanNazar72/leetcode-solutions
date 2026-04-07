// Last updated: 07/04/2026, 23:01:45
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var sortedSquares = function(nums) {
6    let square = []
7    for(let i=0;i<nums.length;i++){
8        let numbersquare = nums[i]** 2
9        square.push(numbersquare)
10    }
11    
12    let left =0
13    let right=square.length-1
14    let output = []
15    for(let i=left;i<square.length;i++){
16        if(square[right]>square[left]){
17            output.push(square[right])
18            right--
19        }
20        else
21        {
22            output.push(square[left])
23            left++
24        }
25    }
26    return output.reverse()
27};