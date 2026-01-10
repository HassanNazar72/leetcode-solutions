// Last updated: 10/01/2026, 18:59:15
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number[]}
5 */
6var topKFrequent = function(nums, k) {
7    let map = {};
8
9    //Build map with arrays
10    for (let i = 0; i < nums.length; i++) {
11        if (!map[nums[i]]) {
12            map[nums[i]] = 1;
13        } else {
14            map[nums[i]] += 1;
15        }
16    }
17    //sort
18    let freqArray = Object.entries(map).sort((a, b) => b[1] - a[1]);
19
20    //Pick top k elements
21    let result = [];
22
23    for (let i = 0; i < k; i++) {
24        result.push(Number(freqArray[i][0]));
25    }
26
27    return result;
28};
29