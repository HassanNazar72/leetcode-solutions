// Last updated: 25/01/2026, 17:55:24
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var longestConsecutive = function(nums) {
6    if (nums.length === 0) return 0;
7
8    let sortednum = nums.sort((a, b) => a - b);
9    let count = {};
10    let key = 0;
11
12    count[key] = 1;
13
14    for (let i = 0; i < sortednum.length - 1; i++) {
15
16        // if consecutive
17        if (sortednum[i] + 1 === sortednum[i + 1]) {
18            count[key] += 1;
19        }
20        // if duplicate, ignore
21        else if (sortednum[i] === sortednum[i + 1]) {
22            continue;
23        }
24        
25        else {
26            key++;
27            count[key] = 1;
28        }
29    }
30
31    return Math.max(...Object.values(count));
32};
33