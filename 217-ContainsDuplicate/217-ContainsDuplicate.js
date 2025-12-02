// Last updated: 02/12/2025, 14:05:53
1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6var isAnagram = function(s, t) {
7    let s1 = s.split('').sort().join('')
8    let s2 = t.split('').sort().join('')
9    if(s1===s2){
10        return true
11    }
12    else{
13        return false
14    }
15};