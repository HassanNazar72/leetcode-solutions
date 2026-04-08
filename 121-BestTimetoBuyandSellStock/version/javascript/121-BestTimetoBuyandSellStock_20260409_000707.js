// Last updated: 09/04/2026, 00:07:07
1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var validPalindrome = function(s) {
6    let left = 0;
7    let right = s.length - 1;
8
9    while(left < right){
10        if(s[left] !== s[right]){
11            return isPalindrome(s, left+1, right) || isPalindrome(s, left, right-1)
12        }
13        left++
14        right--
15    }
16    return true
17};
18
19function isPalindrome(s, left, right){
20    while(left < right){
21        if(s[left] !== s[right]) return false
22        left++
23        right--
24    }
25    return true
26}