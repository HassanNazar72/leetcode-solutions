// Last updated: 06/04/2026, 21:01:04
1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6    let clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
7    let left = 0
8    let right = clean.length-1
9
10    while(left<right){
11        if(clean[left]!=clean[right]){return false}
12        left++
13        right--
14    }
15    return true
16};