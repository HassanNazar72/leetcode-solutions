// Last updated: 01/12/2025, 19:14:42
1/**
2 * @param {string} s
3 * @param {number[]} indices
4 * @return {string}
5 */
6var restoreString = function(s, indices) {
7    let out = [];
8
9    for (let i = 0; i < s.length; i++) {
10        out[indices[i]] = s[i]; 
11    }
12
13    return out.join('');
14};
15