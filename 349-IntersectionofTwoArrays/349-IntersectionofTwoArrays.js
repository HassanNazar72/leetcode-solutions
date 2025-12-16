// Last updated: 16/12/2025, 01:41:38
1/**
2 * @param {number[]} nums1
3 * @param {number[]} nums2
4 * @return {number[]}
5 */
6var intersection = function(nums1, nums2) {
7  let output = [];
8
9  for (let i = 0; i < nums1.length; i++) {
10    for (let j = 0; j < nums2.length; j++) {
11      if (nums1[i] === nums2[j]) {
12        
13        if (output.indexOf(nums1[i]) === -1) {
14          output.push(nums1[i]);
15        }
16        break;
17      }
18    }
19  }
20
21  return output;
22};
23
24