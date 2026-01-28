// Last updated: 28/01/2026, 20:49:44
1/**
2 * @param {number[]} nums1
3 * @param {number} m
4 * @param {number[]} nums2
5 * @param {number} n
6 * @return {void} Do not return anything, modify nums1 in-place instead.
7 */
8var merge = function(nums1, m, nums2, n) {
9    let first = m-1
10    let second = n-1
11    let i = m+n-1
12    while(second>=0){
13        let fval = nums1[first]
14        let sval = nums2[second]
15
16        if(fval>sval){
17            nums1[i] = fval;
18            i--;
19            first--;
20        }
21        else{
22            nums1[i] = sval;
23            i--;
24            second--;
25        }
26    }
27};