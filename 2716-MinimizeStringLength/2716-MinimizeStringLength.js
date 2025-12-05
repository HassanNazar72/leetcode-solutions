// Last updated: 05/12/2025, 21:49:54
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var minimizedStringLength = function(s) {
6    let set = new Set(s);
7    let a1 = [...set]
8    return a1.length
9};