// Last updated: 25/01/2026, 18:26:21
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var longestConsecutive = function(nums) {
6    if (nums.length === 0) return 0;
7
8    const set = new Set(nums)
9    let max = 0
10    
11    for(let num of set){
12        if(set.has(num -1)){
13            continue
14        }
15        let currentnum = num
16        let currentmax = 1;
17
18        while(set.has(currentnum+1)){
19            currentnum ++;
20            currentmax ++
21        }
22        max = Math.max(max, currentmax)
23    }
24    return max
25    
26};
27