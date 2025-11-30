// Last updated: 30/11/2025, 22:32:45
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let o = [];
    for (let i = s.length - 1; i >= 0; i--) {
        o.push(s[i]);
    }
    for (let i = 0; i < s.length; i++) {
        s[i] = o[i];
    }
};
