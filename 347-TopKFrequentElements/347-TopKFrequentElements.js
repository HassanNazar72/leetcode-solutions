// Last updated: 06/04/2026, 20:39:07
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number[]}
5 */
6var topKFrequent = function(nums, k) {
7    // Step 1: count frequency of each number
8    const map = {};
9    for (const num of nums) {
10        map[num] = (map[num] || 0) + 1;
11    }
12
13    // Step 2: create empty buckets where index = frequency
14    const buckets = [];
15    for (let i = 0; i <= nums.length; i++) {
16        buckets[i] = [];
17    }
18    // Step 3: place each number into bucket matching its frequency
19    for(const num in map){
20        const freq = map[num]
21        buckets[freq].push(Number(num))
22    }
23    // Step 4: read from right to left, grab k elements
24    const result = [];
25    for (let i = buckets.length - 1; i >= 0; i--) {
26        for (const num of buckets[i]) {
27            result.push(num);
28            if (result.length === k) return result;
29        }
30    }
31};
32