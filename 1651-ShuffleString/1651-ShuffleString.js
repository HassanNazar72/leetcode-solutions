// Last updated: 01/12/2025, 19:25:41
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let out = [];

    for (let i = 0; i < s.length; i++) {
        out[indices[i]] = s[i]; 
    }

    return out.join('');
};
