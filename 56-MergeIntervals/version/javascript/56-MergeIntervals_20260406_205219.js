// Last updated: 06/04/2026, 20:52:19
1/**
2 * @param {character[]} s
3 * @return {void} Do not return anything, modify s in-place instead.
4 */
5var reverseString = function(s) {
6    let temp
7    let left = 0
8    let right = s.length-1
9
10    while(left<right){
11        temp = s[left]
12        s[left] = s[right]
13        s[right] = temp
14
15        left++
16        right--
17    }
18};
19