// Last updated: 02/12/2025, 14:06:23
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let s1 = s.split('').sort().join('')
    let s2 = t.split('').sort().join('')
    if(s1===s2){
        return true
    }
    else{
        return false
    }
};